# KubeEdge Deployment Guide

## Description

### KubeEdge

KubeEdge is an open source system dedicated to solving problems in edge scenarios. It extends the capabilities of containerized application orchestration and device management to edge devices. Based on Kubernetes, KubeEdge provides core infrastructure support for networks, application deployment, and metadata synchronization between the cloud and the edge. KubeEdge supports MQTT and allows for custom logic to enable communication for the resource-constrained devices at the edge. KubeEdge consists of components deployed on the cloud and edge nodes. The components are now open source.

>  https://kubeedge.io/

### iSulad

iSulad is a lightweight container runtime daemon designed for IoT and cloud infrastructure. It is lightweight, fast, and is not restricted by hardware specifications or architectures. It is suitable for wide application in various scenarios, such as cloud, IoT, and edge computing.

>  https://gitee.com/openeuler/iSulad

## Preparations

### Component Versions

| Component| Version|
| ---------- | --------------------------------- |
| OS         | openEuler 21.09                   |
| Kubernetes | 1.20.2-4                          |
| iSulad     | 2.0.9-20210625.165022.git5a088d9c |
| KubeEdge   | v1.8.0                            |

### Node Planning Example

| Node| Location| Components|
| ------------ | ------------- | -------------------------------- |
| 9.63.252.224 | Cloud| Kubernetes (Master), iSulad, CloudCore|
| 9.63.252.227 | Edge| iSulad, EdgeCore|

### Environment Configurations

Configure the following settings on the cloud and edge nodes:

```bash
# Disable the firewall.
$ systemctl stop firewalld
$ systemctl disable firewalld

# Disable SELinux.
$ setenforce 0

# Configure the network, and enable the required forwarding mechanism.
$ cat >> /etc/sysctl.d/k8s.conf <<EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
vm.swappiness=0
EOF

# Make the rules take effect.
$ modprobe br_netfilter
$ sysctl -p /etc/sysctl.d/k8s.conf

# Check whether the rules take effect.
$ cat /proc/sys/net/bridge/bridge-nf-call-ip6tables
1
$ cat /proc/sys/net/bridge/bridge-nf-call-iptables
1

# Disable the system swap.
$ swapoff -a

# Set the host names.
# Cloudnode:
$ hostnamectl set-hostname cloud.kubeedge
# Edgenode:
$ hostnamectl set-hostname edge.kubeedge

# Example configurations for the hosts file. Set the values based on the actual deployment.
$ cat >> /etc/hosts << EOF
9.63.252.224 cloud.kubeedge
9.63.252.227 edge.kubeedge
EOF

# Choose an accessible NTP server to synchronize the clock.
$ ntpdate cn.pool.ntp.org

# Install the cri-tools network tool.
$ wget --no-check-certificate https://github.com/kubernetes-sigs/cri-tools/releases/download/v1.20.0/crictl-v1.20.0-linux-amd64.tar.gz
$ tar zxvf crictl-v1.20.0-linux-amd64.tar.gz -C /usr/local/bin

# Install the CNI network plugins.
$ wget --no-check-certificate https://github.com/containernetworking/plugins/releases/download/v0.9.0/cni-plugins-linux-amd64-v0.9.0.tgz
$ mkdir -p /opt/cni/bin
$ tar -zxvf cni-plugins-linux-amd64-v0.9.0.tgz -C /opt/cni/bin
```

### Configuring iSulad

Configure the following settings on the cloud and edge nodes:

```bash
# Configure iSulad (only the items to be modified are listed).
$ cat /etc/isulad/daemon.json
{
        "registry-mirrors": [
                "docker.io"
        ],
        "insecure-registries": [
                "k8s.gcr.io",
                "quay.io",
                "hub.oepkgs.net"
        ],
        "pod-sandbox-image": "k8s.gcr.io/pause:3.2",
        "network-plugin": "cni",
        "cni-bin-dir": "/opt/cni/bin",
        "cni-conf-dir": "/etc/cni/net.d",
}

# Configure the proxy if the node cannot directly access the Internet. Otherwise, skip this section.
$ cat /usr/lib/systemd/system/isulad.service
[Service]
Type=notify
Environment="HTTP_PROXY=http://..."
Environment="HTTPS_PROXY=http://..."

# Restart the iSulad and set it to start upon system startup.
$ systemctl daemon-reload && systemctl restart isulad
```

### Deploying the Kubernetes Components

Install and deploy the Kubernetes components on the cloud node only.

```bash
# Install the Kubernetes tools.
$ yum install kubernetes-master kubernetes-kubeadm kubernetes-client kubernetes-kubelet
# Set kubelet to start upon system startup.
$ systemctl enable kubelet --now

# Note that the system proxy must be canceled before using the kubeadm init command.
$ unset `env | grep -iE "tps?_proxy" | cut -d= -f1`
$ env | grep proxy

# Run the kubeadm init command.
$ kubeadm init --kubernetes-version v1.20.2 --pod-network-cidr=10.244.0.0/16 --upload-certs --cri-socket=/var/run/isulad.sock
# The default Kubernetes component image is gcr.k8s.io. You can add the --image-repository=xxx option to configure a custom image repository address (to test your own Kubernetes image).

# Note that the network segment specified by pod-network-cidr cannot overlap the network segment of the host machine. Otherwise, the network is inaccessible.
# You are advised to run the init command before configuring the network.
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:
...

# Run the commands as prompted.
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config
# The commands make a copy of admin.conf, which is a kubectl configuration file initialized by the kubeadm command.
# The file contains important configurations, such as the authentication information.

# You can reset the configurations if an error occurs when running the init command.
$ kubeadm reset

# If "Unable to read config path "/etc/kubernetes/manifests"" is displayed, run the following command:
$ mkdir -p /etc/kubernetes/manifests
```

### Configuring the Network

Because **the Calico network plugin cannot run on edge nodes**, `flannel` is used instead. The [issue](https://github.com/kubeedge/kubeedge/issues/2788#issuecomment-907627687) has been submitted to the KubeEdge community.

The cloud and edge nodes are in different network environments and require different **affinity**. Therefore, two flannel configuration files are required.

```bash
# Download the flannel network plugin.
$ wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# Prepare for network configuration for the cloud node.
$ cp kube-flannel.yml kube-flannel-cloud.yml

# Modify the network configuration for the cloud node.
$ patch kube-flannel-cloud.yml - <<EOF
index c7edaef..f3846b9 100644
--- a/kube-flannel.yml
+++ b/kube-flannel.yml
@@ -134,7 +134,7 @@ data:
 apiVersion: apps/v1
 kind: DaemonSet
 metadata:
-  name: kube-flannel-ds
+  name: kube-flannel-cloud-ds
   namespace: kube-system
   labels:
     tier: node
@@ -158,6 +158,8 @@ spec:
                 operator: In
                 values:
                 - linux
+              - key: node-role.kubernetes.io/agent
+                operator: DoesNotExist
       hostNetwork: true
       priorityClassName: system-node-critical
       tolerations:
EOF

# Prepare for network configuration for the edge node.
$ cp kube-flannel.yml kube-flannel-edge.yml

# Modify the network configuration for the edge node.
$ patch kube-flannel-edge.yml - <<EOF
index c7edaef..66a5b5b 100644
--- a/kube-flannel.yml
+++ b/kube-flannel.yml
@@ -134,7 +134,7 @@ data:
 apiVersion: apps/v1
 kind: DaemonSet
 metadata:
-  name: kube-flannel-ds
+  name: kube-flannel-edge-ds
   namespace: kube-system
   labels:
     tier: node
@@ -158,6 +158,8 @@ spec:
                 operator: In
                 values:
                 - linux
+              - key: node-role.kubernetes.io/agent
+                operator: Exists
       hostNetwork: true
       priorityClassName: system-node-critical
       tolerations:
@@ -186,6 +188,7 @@ spec:
         args:
         - --ip-masq
         - --kube-subnet-mgr
+        - --kube-api-url=http://127.0.0.1:10550
         resources:
           requests:
             cpu: "100m"
EOF

# --kube-api-url is the listening IP address of EdgeCore on the edge node.

# Configure the flannel network plugin.
$ kubectl apply -f kube-flannel-cloud.yml
$ kubectl apply -f kube-flannel-edge.yml

# Check the node status.
$ kubectl get node -A
NAME             STATUS   ROLES                  AGE     VERSION
cloud.kubeedge   Ready    control-plane,master   4h11m   v1.20.2
```


## Deploying the KubeEdge Cluster Using Keadm

If you choose to deploy the cluster using Keadm, you need **only** to install the `kubeedge-keadm` RPM package on the cloud and edge nodes.

```bash
$ yum install kubeedge-keadm
```

### Deploying CloudCore on the Cloud Node

#### Initializing the Cluster

```bash
# Set --advertise-address to the IP address of the cloud node.
$ keadm init --advertise-address="9.63.252.224" --kubeedge-version=1.8.0
Kubernetes version verification passed, KubeEdge installation will start...
W0829 10:41:56.541877  420383 warnings.go:67] apiextensions.k8s.io/v1beta1 CustomResourceDefinition is deprecated in v1.16+, unavailable in v1.22+; use apiextensions.k8s.io/v1 CustomResourceDefinition
W0829 10:41:57.253214  420383 warnings.go:67] apiextensions.k8s.io/v1beta1 CustomResourceDefinition is deprecated in v1.16+, unavailable in v1.22+; use apiextensions.k8s.io/v1 CustomResourceDefinition
W0829 10:41:59.778672  420383 warnings.go:67] apiextensions.k8s.io/v1beta1 CustomResourceDefinition is deprecated in v1.16+, unavailable in v1.22+; use apiextensions.k8s.io/v1 CustomResourceDefinition
W0829 10:42:00.488838  420383 warnings.go:67] apiextensions.k8s.io/v1beta1 CustomResourceDefinition is deprecated in v1.16+, unavailable in v1.22+; use apiextensions.k8s.io/v1 CustomResourceDefinition
kubeedge-v1.8.0-linux-amd64.tar.gz checksum:
checksum_kubeedge-v1.8.0-linux-amd64.tar.gz.txt content:
[Run as service] start to download service file for cloudcore
[Run as service] success to download service file for cloudcore
kubeedge-v1.8.0-linux-amd64/
kubeedge-v1.8.0-linux-amd64/edge/
kubeedge-v1.8.0-linux-amd64/edge/edgecore
kubeedge-v1.8.0-linux-amd64/cloud/
kubeedge-v1.8.0-linux-amd64/cloud/csidriver/
kubeedge-v1.8.0-linux-amd64/cloud/csidriver/csidriver
kubeedge-v1.8.0-linux-amd64/cloud/admission/
kubeedge-v1.8.0-linux-amd64/cloud/admission/admission
kubeedge-v1.8.0-linux-amd64/cloud/cloudcore/
kubeedge-v1.8.0-linux-amd64/cloud/cloudcore/cloudcore
kubeedge-v1.8.0-linux-amd64/version

KubeEdge cloudcore is running, For logs visit:  /var/log/kubeedge/cloudcore.log
CloudCore started
```

At this time, CloudCore is running but is not managed by systemd, and dynamicController (supporting the list watch function of EdgeCore) is not enabled. You need to modify the configuration.

#### Modifying CloudCore Configurations

```bash
# Modify the /etc/kubeedge/config/cloudcore.yaml file.
# Enable dynamicController.
$ cd /etc/kubeedge/config
$ patch cloudcore.yaml - <<EOF
index 28235a9..313375c 100644
--- a/cloudcore.yaml
+++ b/cloudcore.yaml
@@ -1,7 +1,3 @@
 apiVersion: cloudcore.config.kubeedge.io/v1alpha1
 commonConfig:
   tunnelPort: 10350
@@ -67,7 +63,7 @@ modules:
     load:
       updateDeviceStatusWorkers: 1
   dynamicController:
-    enable: false
+    enable: true	# Enable dynamicController to support the list watch function of EdgeCore.
   edgeController:
     buffer:
       configMapEvent: 1
@@ -119,5 +115,3 @@ modules:
     restTimeout: 60
   syncController:
     enable: true
EOF

# Enable systemd to manage CloudCore.
# Copy cloudcore.service to /usr/lib/systemd/system.
$ cp /etc/kubeedge/cloudcore.service /usr/lib/systemd/system

# Kill the current CloudCore process, then restart it.
$ pkill cloudcore
$ systemctl restart cloudcore

# Check whether the CloudCore service is running.
$ systemctl status cloudcore
● cloudcore.service
     Loaded: loaded (/usr/lib/systemd/system/cloudcore.service disabled; vendor preset: disabled)
     Active: active (running) since Sun 2021-08-29 10:50:14 CST; 4s ago
   Main PID: 424578 (cloudcore)
      Tasks: 36 (limit: 202272)
     Memory: 44.2M
        CPU: 112ms
     CGroup: /system.slice/cloudcore.service
             └─424578 /usr/local/bin/cloudcore

Aug 29 10:50:15 cloud.kubeedge cloudcore[424578]: I0829 10:50:15.845792  424578 upstream.go:121] start upstream controller
Aug 29 10:50:15 cloud.kubeedge cloudcore[424578]: I0829 10:50:15.846586  424578 downstream.go:870] Start downstream devicecontroller
Aug 29 10:50:15 cloud.kubeedge cloudcore[424578]: I0829 10:50:15.849475  424578 downstream.go:566] start downstream controller
Aug 29 10:50:15 cloud.kubeedge cloudcore[424578]: I0829 10:50:15.946110  424578 server.go:243] Ca and CaKey don't exist in local directory, and will read from the secret
Aug 29 10:50:15 cloud.kubeedge cloudcore[424578]: I0829 10:50:15.951806  424578 server.go:288] CloudCoreCert and key don't exist in local directory, and will read from the >
Aug 29 10:50:15 cloud.kubeedge cloudcore[424578]: I0829 10:50:15.959661  424578 signcerts.go:100] Succeed to creating token
Aug 29 10:50:15 cloud.kubeedge cloudcore[424578]: I0829 10:50:15.959716  424578 server.go:44] start unix domain socket server
Aug 29 10:50:15 cloud.kubeedge cloudcore[424578]: I0829 10:50:15.959973  424578 uds.go:71] listening on: //var/lib/kubeedge/kubeedge.sock
Aug 29 10:50:15 cloud.kubeedge cloudcore[424578]: I0829 10:50:15.966693  424578 server.go:64] Starting cloudhub websocket server
Aug 29 10:50:17 cloud.kubeedge cloudcore[424578]: I0829 10:50:17.847150  424578 upstream.go:63] Start upstream devicecontroller
```

CloudCore has been deployed on the cloud node. Then, deploy EdgeCore on the edge node.

### Managing the Edge Node

Run the `keadm join` command on the edge node to manage it.

#### Modifying iSulad Configurations

File path: `/etc/isulad/daemon.json`

```bash
{
    # Set pod-sandbox-image.
    "pod-sandbox-image": "kubeedge/pause:3.1",
    # The listening port `10350` of EdgeCore conflicts with the WebSocket port of iSulad. As a result, EdgeCore cannot be started. To resolve the conflict, change the value of `websocket-server-listening-port` in the iSulad configuration file (`/etc/isulad/daemon.json`) to `10351`.
    "websocket-server-listening-port": 10351,
}
```

After the configuration file is modified, run the `systemctl restart isulad` command to restart iSulad.


#### Connecting EdgeCore to CloudCore

```bash
# Obtain a token on the cloud node.
$ keadm gettoken
28c25d3b137593f5bbfb776cf5b19866ab9727cab9e97964dd503f87cd52cbde.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzAyOTE4MTV9.aGUyCi9gdysVtMu0DQzrD5TcV_DcXob647YeqcOxKDA

# Run the keadm join command to connect EdgeCore to CloudCore.
# --cloudcore-ipport is a mandatory parameter. 10000 is the default port of CloudCore.
$ keadm join --cloudcore-ipport=9.63.252.224:10000 --kubeedge-version=1.8.0 --token=28c25d3b137593f5bbfb776cf5b19866ab9727cab9e97964dd503f87cd52cbde.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzAyOTE4MTV9.aGUyCi9gdysVtMu0DQzrD5TcV_DcXob647YeqcOxKDA
Host has mosquit+ already installed and running. Hence skipping the installation steps !!!
kubeedge-v1.8.0-linux-amd64.tar.gz checksum:
checksum_kubeedge-v1.8.0-linux-amd64.tar.gz.txt content:
[Run as service] start to download service file for edgecore
[Run as service] success to download service file for edgecore
kubeedge-v1.8.0-linux-amd64/
kubeedge-v1.8.0-linux-amd64/edge/
kubeedge-v1.8.0-linux-amd64/edge/edgecore
kubeedge-v1.8.0-linux-amd64/cloud/
kubeedge-v1.8.0-linux-amd64/cloud/csidriver/
kubeedge-v1.8.0-linux-amd64/cloud/csidriver/csidriver
kubeedge-v1.8.0-linux-amd64/cloud/admission/
kubeedge-v1.8.0-linux-amd64/cloud/admission/admission
kubeedge-v1.8.0-linux-amd64/cloud/cloudcore/
kubeedge-v1.8.0-linux-amd64/cloud/cloudcore/cloudcore
kubeedge-v1.8.0-linux-amd64/version

KubeEdge edgecore is running, For logs visit: journalctl -u edgecore.service -b
```

At this time, the deployment of EdgeCore is not complete because Docker is used in the default settings. You need to modify the configuration file to connect EdgeCore to iSulad.

#### Modifying EdgeCore Configurations

```bash
# Enable systemd to manage EdgeCore.
# Copy edgecore.service to /usr/lib/systemd/system.
$ cp /etc/kubeedge/edgecore.service /usr/lib/systemd/system

# Modify the EdgeCore configurations.
$ cd /etc/kubeedge/config
$ patch edgecore.yaml - <<EOF
index 165e24b..efbfd49 100644
--- a/edgecore.yaml
+++ b/edgecore.yaml
@@ -32,7 +32,7 @@ modules:
       server: 9.63.252.224:10000
       writeDeadline: 15
@@ -73,10 +73,10 @@ modules:
     podSandboxImage: kubeedge/pause:3.1
     registerNode: true
     registerNodeNamespace: default
-    remoteImageEndpoint: unix:///var/run/dockershim.sock
-    remoteRuntimeEndpoint: unix:///var/run/dockershim.sock
+    remoteImageEndpoint: unix:///var/run/isulad.sock
+    remoteRuntimeEndpoint: unix:///var/run/isulad.sock
     runtimeRequestTimeout: 2
-    runtimeType: docker
+    runtimeType: remote	# The runtime type of iSulad is remote.
     volumeStatsAggPeriod: 60000000000
   eventBus:
     enable: true
@@ -97,7 +97,7 @@ modules:
     enable: true
     metaServer:
       debug: false
-      enable: false
+      enable: true		# Enable list watch我记得上文中间有空格的.
     podStatusSyncInterval: 60
     remoteQueryTimeout: 60
   serviceBus:
EOF

# Kill the current EdgeCore process.
$ pkill edgecore

# Restart EdgeCore.
$ systemctl restart edgecore
```

#### Checking Whether the Edge Node is Managed

```bash
# Run the command on the cloud node. You can see that the edge node is added.
$ kubectl get node -A
NAME             STATUS   ROLES                  AGE     VERSION
cloud.kubeedge   Ready    control-plane,master   19h     v1.20.2
edge.kubeedge    Ready    agent,edge             5m16s   v1.19.3-kubeedge-v1.8.0
```

The KubeEdge cluster has been deployed using the `keadm` command. Next, let's test the task delivery from the cloud to the edge.

### Deploying an Application

#### Deploying Nginx

```bash
# You can directly use the Nginx template provided by KubeEdge.
$ kubectl apply -f https://github.com/kubeedge/kubeedge/raw/master/build/deployment.yaml
deployment.apps/nginx-deployment created

# Check whether Nginx is deployed on the edge node.
$ kubectl get pod -A -owide | grep nginx
default       nginx-deployment-77f96fbb65-fnp7n        1/1     Running   0          37s   10.244.2.4     edge.kubeedge    <none>           <none>

# You can see that Nginx has been successfully deployed on the edge node.
```

#### Testing the Function

```bash
# Test whether the function is running properly.
# Run the curl command on the edge node to access the IP address of Nginx, which is 10.244.2.4.
$ curl 10.244.2.4:80
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```

The deployment of KubeEdge and iSulad is complete.

## Deploying the KubeEdge Cluster Using Binary Files

You can also deploy the KubeEdge cluster using binary files. Only two RPM packages are required: `cloudcore` (on the cloud node) and `edgecore` (on the edge node).
> The KubeEdge deployment using binary files is for testing only. Do not use this method in the production environment.

### Deploying CloudCore on the Cloud Node

>  Log in to the cloud host.

#### Installing the `cloudcore` RPM Package

```bash
$ yum install kubeedge-cloudcore
```

#### Creating CRDs

```bash
$ kubectl apply -f /etc/kubeedge/crds/devices/
$ kubectl apply -f /etc/kubeedge/crds/reliablesyncs/
$ kubectl apply -f /etc/kubeedge/crds/router/
```

#### Preparing the Configuration File

```bash
$ cloudcore --defaultconfig > /etc/kubeedge/config/cloudcore.yaml
```

Modify CloudCore configurations by referring to **Deploying CloudCore Using Keadm**.

#### Running CloudCore

```bash
$ pkill cloudcore
$ systemctl start cloudcore
```

### Deploying EdgeCore on the Edge Node

> Log in to the edge host.

#### Installing the `edgecore` RPM Package

```bash
$ yum install kubeedge-edgecore
```

#### Preparing the Configuration File

```bash
$ edgecore --defaultconfig > /etc/kubeedge/config/edgecore.yaml
```

Modify EdgeCore configurations by referring to **Deploying EdgeCore Using Keadm**.



```bash
$ kubectl get secret -nkubeedge tokensecret -o=jsonpath='{.data.tokendata}' | base64 -d
1c4ff11289a14c59f2cbdbab726d1857262d5bda778ddf0de34dd59d125d3f69.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzE0ODM3MzN9.JY77nMVDHIKD9ipo03Y0mSbxief9qOvJ4yMNx1yZpp0

# Add the obtained token to the configuration file.
sed -i -e "s|token: .*|token: ${token}|g" /etc/kubeedge/config/edgecore.yaml

# The value of the token variable is obtained in the previous step.
```

#### Running EdgeCore

```bash
$ pkill edgecore
$ systemctl start edgecore
```

## Appendix

### kube-flannel-cloud.yml

```bash
# Application scenario: cloud node
---
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: psp.flannel.unprivileged
  annotations:
    seccomp.security.alpha.kubernetes.io/allowedProfileNames: docker/default
    seccomp.security.alpha.kubernetes.io/defaultProfileName: docker/default
    apparmor.security.beta.kubernetes.io/allowedProfileNames: runtime/default
    apparmor.security.beta.kubernetes.io/defaultProfileName: runtime/default
spec:
  privileged: false
  volumes:
  - configMap
  - secret
  - emptyDir
  - hostPath
  allowedHostPaths:
  - pathPrefix: "/etc/cni/net.d"
  - pathPrefix: "/etc/kube-flannel"
  - pathPrefix: "/run/flannel"
  readOnlyRootFilesystem: false
  # Users and groups
  runAsUser:
    rule: RunAsAny
  supplementalGroups:
    rule: RunAsAny
  fsGroup:
    rule: RunAsAny
  # Privilege Escalation
  allowPrivilegeEscalation: false
  defaultAllowPrivilegeEscalation: false
  # Capabilities
  allowedCapabilities: ['NET_ADMIN', 'NET_RAW']
  defaultAddCapabilities: []
  requiredDropCapabilities: []
  # Host namespaces
  hostPID: false
  hostIPC: false
  hostNetwork: true
  hostPorts:
  - min: 0
    max: 65535
  # SELinux
  seLinux:
    # SELinux is unused in CaaSP
    rule: 'RunAsAny'
---
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: flannel
rules:
- apiGroups: ['extensions']
  resources: ['podsecuritypolicies']
  verbs: ['use']
  resourceNames: ['psp.flannel.unprivileged']
- apiGroups:
  - ""
  resources:
  - pods
  verbs:
  - get
- apiGroups:
  - ""
  resources:
  - nodes
  verbs:
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - nodes/status
  verbs:
  - patch
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: flannel
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: flannel
subjects:
- kind: ServiceAccount
  name: flannel
  namespace: kube-system
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: flannel
  namespace: kube-system
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: kube-flannel-cfg
  namespace: kube-system
  labels:
    tier: node
    app: flannel
data:
  cni-conf.json: |
    {
      "name": "cbr0",
      "cniVersion": "0.3.1",
      "plugins": [
        {
          "type": "flannel",
          "delegate": {
            "hairpinMode": true,
            "isDefaultGateway": true
          }
        },
        {
          "type": "portmap",
          "capabilities": {
            "portMappings": true
          }
        }
      ]
    }
  net-conf.json: |
    {
      "Network": "10.244.0.0/16",
      "Backend": {
        "Type": "vxlan"
      }
    }
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: kube-flannel-cloud-ds
  namespace: kube-system
  labels:
    tier: node
    app: flannel
spec:
  selector:
    matchLabels:
      app: flannel
  template:
    metadata:
      labels:
        tier: node
        app: flannel
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/os
                operator: In
                values:
                - linux
              - key: node-role.kubernetes.io/agent
                operator: DoesNotExist
      hostNetwork: true
      priorityClassName: system-node-critical
      tolerations:
      - operator: Exists
        effect: NoSchedule
      serviceAccountName: flannel
      initContainers:
      - name: install-cni
        image: quay.io/coreos/flannel:v0.14.0
        command:
        - cp
        args:
        - -f
        - /etc/kube-flannel/cni-conf.json
        - /etc/cni/net.d/10-flannel.conflist
        volumeMounts:
        - name: cni
          mountPath: /etc/cni/net.d
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      containers:
      - name: kube-flannel
        image: quay.io/coreos/flannel:v0.14.0
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        resources:
          requests:
            cpu: "100m"
            memory: "50Mi"
          limits:
            cpu: "100m"
            memory: "50Mi"
        securityContext:
          privileged: false
          capabilities:
            add: ["NET_ADMIN", "NET_RAW"]
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        volumeMounts:
        - name: run
          mountPath: /run/flannel
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      volumes:
      - name: run
        hostPath:
          path: /run/flannel
      - name: cni
        hostPath:
          path: /etc/cni/net.d
      - name: flannel-cfg
        configMap:
          name: kube-flannel-cfg

```

### kube-flannel-edge.yml

```bash
# Application scenario: edge node
---
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: psp.flannel.unprivileged
  annotations:
    seccomp.security.alpha.kubernetes.io/allowedProfileNames: docker/default
    seccomp.security.alpha.kubernetes.io/defaultProfileName: docker/default
    apparmor.security.beta.kubernetes.io/allowedProfileNames: runtime/default
    apparmor.security.beta.kubernetes.io/defaultProfileName: runtime/default
spec:
  privileged: false
  volumes:
  - configMap
  - secret
  - emptyDir
  - hostPath
  allowedHostPaths:
  - pathPrefix: "/etc/cni/net.d"
  - pathPrefix: "/etc/kube-flannel"
  - pathPrefix: "/run/flannel"
  readOnlyRootFilesystem: false
  # Users and groups
  runAsUser:
    rule: RunAsAny
  supplementalGroups:
    rule: RunAsAny
  fsGroup:
    rule: RunAsAny
  # Privilege Escalation
  allowPrivilegeEscalation: false
  defaultAllowPrivilegeEscalation: false
  # Capabilities
  allowedCapabilities: ['NET_ADMIN', 'NET_RAW']
  defaultAddCapabilities: []
  requiredDropCapabilities: []
  # Host namespaces
  hostPID: false
  hostIPC: false
  hostNetwork: true
  hostPorts:
  - min: 0
    max: 65535
  # SELinux
  seLinux:
    # SELinux is unused in CaaSP
    rule: 'RunAsAny'
---
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: flannel
rules:
- apiGroups: ['extensions']
  resources: ['podsecuritypolicies']
  verbs: ['use']
  resourceNames: ['psp.flannel.unprivileged']
- apiGroups:
  - ""
  resources:
  - pods
  verbs:
  - get
- apiGroups:
  - ""
  resources:
  - nodes
  verbs:
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - nodes/status
  verbs:
  - patch
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: flannel
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: flannel
subjects:
- kind: ServiceAccount
  name: flannel
  namespace: kube-system
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: flannel
  namespace: kube-system
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: kube-flannel-cfg
  namespace: kube-system
  labels:
    tier: node
    app: flannel
data:
  cni-conf.json: |
    {
      "name": "cbr0",
      "cniVersion": "0.3.1",
      "plugins": [
        {
          "type": "flannel",
          "delegate": {
            "hairpinMode": true,
            "isDefaultGateway": true
          }
        },
        {
          "type": "portmap",
          "capabilities": {
            "portMappings": true
          }
        }
      ]
    }
  net-conf.json: |
    {
      "Network": "10.244.0.0/16",
      "Backend": {
        "Type": "vxlan"
      }
    }
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: kube-flannel-edge-ds
  namespace: kube-system
  labels:
    tier: node
    app: flannel
spec:
  selector:
    matchLabels:
      app: flannel
  template:
    metadata:
      labels:
        tier: node
        app: flannel
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/os
                operator: In
                values:
                - linux
              - key: node-role.kubernetes.io/agent
                operator: Exists
      hostNetwork: true
      priorityClassName: system-node-critical
      tolerations:
      - operator: Exists
        effect: NoSchedule
      serviceAccountName: flannel
      initContainers:
      - name: install-cni
        image: quay.io/coreos/flannel:v0.14.0
        command:
        - cp
        args:
        - -f
        - /etc/kube-flannel/cni-conf.json
        - /etc/cni/net.d/10-flannel.conflist
        volumeMounts:
        - name: cni
          mountPath: /etc/cni/net.d
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      containers:
      - name: kube-flannel
        image: quay.io/coreos/flannel:v0.14.0
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        - --kube-api-url=http://127.0.0.1:10550
        resources:
          requests:
            cpu: "100m"
            memory: "50Mi"
          limits:
            cpu: "100m"
            memory: "50Mi"
        securityContext:
          privileged: false
          capabilities:
            add: ["NET_ADMIN", "NET_RAW"]
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        volumeMounts:
        - name: run
          mountPath: /run/flannel
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      volumes:
      - name: run
        hostPath:
          path: /run/flannel
      - name: cni
        hostPath:
          path: /etc/cni/net.d
      - name: flannel-cfg
        configMap:
          name: kube-flannel-cfg

```

### cloudcore.service

```bash
# Application scenario: cloud node
# File path: /usr/lib/systemd/system/cloudcore.service
[Unit]
Description=cloudcore.service

[Service]
Type=simple
ExecStart=/usr/local/bin/cloudcore
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

### cloudcore.yaml

```bash
# Application scenario: cloud node
# File path: /etc/kubeedge/config/cloudcore.yaml
apiVersion: cloudcore.config.kubeedge.io/v1alpha1
commonConfig:
  tunnelPort: 10351
kind: CloudCore
kubeAPIConfig:
  burst: 200
  contentType: application/vnd.kubernetes.protobuf
  kubeConfig: /root/.kube/config
  master: ""
  qps: 100
modules:
  cloudHub:
    advertiseAddress:
    - 9.63.252.224
    dnsNames:
    - ""
    edgeCertSigningDuration: 365
    enable: true
    https:
      address: 0.0.0.0
      enable: true
      port: 10002
    keepaliveInterval: 30
    nodeLimit: 1000
    quic:
      address: 0.0.0.0
      enable: false
      maxIncomingStreams: 10000
      port: 10001
    tlsCAFile: /etc/kubeedge/ca/rootCA.crt
    tlsCAKeyFile: /etc/kubeedge/ca/rootCA.key
    tlsCertFile: /etc/kubeedge/certs/server.crt
    tlsPrivateKeyFile: /etc/kubeedge/certs/server.key
    tokenRefreshDuration: 12
    unixsocket:
      address: unix:///var/lib/kubeedge/kubeedge.sock
      enable: true
    websocket:
      address: 0.0.0.0
      enable: true
      port: 10000
    writeTimeout: 30
  cloudStream:
    enable: false
    streamPort: 10003
    tlsStreamCAFile: /etc/kubeedge/ca/streamCA.crt
    tlsStreamCertFile: /etc/kubeedge/certs/stream.crt
    tlsStreamPrivateKeyFile: /etc/kubeedge/certs/stream.key
    tlsTunnelCAFile: /etc/kubeedge/ca/rootCA.crt
    tlsTunnelCertFile: /etc/kubeedge/certs/server.crt
    tlsTunnelPrivateKeyFile: /etc/kubeedge/certs/server.key
    tunnelPort: 10004
  deviceController:
    buffer:
      deviceEvent: 1
      deviceModelEvent: 1
      updateDeviceStatus: 1024
    context:
      receiveModule: devicecontroller
      responseModule: cloudhub
      sendModule: cloudhub
    enable: true
    load:
      updateDeviceStatusWorkers: 1
  dynamicController:
    enable: true
  edgeController:
    buffer:
      configMapEvent: 1
      deletePod: 1024
      endpointsEvent: 1
      podEvent: 1
      queryConfigMap: 1024
      queryEndpoints: 1024
      queryNode: 1024
      queryPersistentVolume: 1024
      queryPersistentVolumeClaim: 1024
      querySecret: 1024
      queryService: 1024
      queryVolumeAttachment: 1024
      ruleEndpointsEvent: 1
      rulesEvent: 1
      secretEvent: 1
      serviceAccountToken: 1024
      serviceEvent: 1
      updateNode: 1024
      updateNodeStatus: 1024
      updatePodStatus: 1024
    context:
      receiveModule: edgecontroller
      responseModule: cloudhub
      sendModule: cloudhub
      sendRouterModule: router
    enable: true
    load:
      ServiceAccountTokenWorkers: 4
      UpdateRuleStatusWorkers: 4
      deletePodWorkers: 4
      queryConfigMapWorkers: 4
      queryEndpointsWorkers: 4
      queryNodeWorkers: 4
      queryPersistentVolumeClaimWorkers: 4
      queryPersistentVolumeWorkers: 4
      querySecretWorkers: 4
      queryServiceWorkers: 4
      queryVolumeAttachmentWorkers: 4
      updateNodeStatusWorkers: 1
      updateNodeWorkers: 4
      updatePodStatusWorkers: 1
    nodeUpdateFrequency: 10
  router:
    address: 0.0.0.0
    enable: false
    port: 9443
    restTimeout: 60
  syncController:
    enable: true

```

### edgecore.service

```bash
# Application scenario: edge node
# File path: /etc/systemd/system/edgecore.service
[Unit]
Description=edgecore.service

[Service]
Type=simple
ExecStart=/usr/local/bin/edgecore
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

### edgecore.yaml

```bash
# Application scenario: edge node
# File path: /etc/kubeedge/config/edgecore.yaml
apiVersion: edgecore.config.kubeedge.io/v1alpha1
database:
  aliasName: default
  dataSource: /var/lib/kubeedge/edgecore.db
  driverName: sqlite3
kind: EdgeCore
modules:
  dbTest:
    enable: false
  deviceTwin:
    enable: true
  edgeHub:
    enable: true
    heartbeat: 15
    httpServer: https://9.63.252.224:10002
    projectID: e632aba927ea4ac2b575ec1603d56f10
    quic:
      enable: false
      handshakeTimeout: 30
      readDeadline: 15
      server: 9.63.252.227:10001
      writeDeadline: 15
    rotateCertificates: true
    tlsCaFile: /etc/kubeedge/ca/rootCA.crt
    tlsCertFile: /etc/kubeedge/certs/server.crt
    tlsPrivateKeyFile: /etc/kubeedge/certs/server.key
    token: ""# Enter the token obtained from the cloud side.
    websocket:
      enable: true
      handshakeTimeout: 30
      readDeadline: 15
      server: 9.63.252.224:10000
      writeDeadline: 15
  edgeMesh:
    enable: false
    lbStrategy: RoundRobin
    listenInterface: docker0
    listenPort: 40001
    subNet: 9.251.0.0/16
  edgeStream:
    enable: false
    handshakeTimeout: 30
    readDeadline: 15
    server: 9.63.252.224:10004
    tlsTunnelCAFile: /etc/kubeedge/ca/rootCA.crt
    tlsTunnelCertFile: /etc/kubeedge/certs/server.crt
    tlsTunnelPrivateKeyFile: /etc/kubeedge/certs/server.key
    writeDeadline: 15
  edged:
    cgroupDriver: cgroupfs
    cgroupRoot: ""
    cgroupsPerQOS: true
    clusterDNS: ""
    clusterDomain: ""
    cniBinDir: /opt/cni/bin
    cniCacheDirs: /var/lib/cni/cache
    cniConfDir: /etc/cni/net.d
    concurrentConsumers: 5
    devicePluginEnabled: false
    dockerAddress: unix:///var/run/docker.sock
    edgedMemoryCapacity: 7852396000
    enable: true
    enableMetrics: true
    gpuPluginEnabled: false
    hostnameOverride: edge.kubeedge
    imageGCHighThreshold: 80
    imageGCLowThreshold: 40
    imagePullProgressDeadline: 60
    maximumDeadContainersPerPod: 1
    networkPluginMTU: 1500
    nodeIP: 9.63.252.227
    nodeStatusUpdateFrequency: 10
    podSandboxImage: kubeedge/pause:3.1
    registerNode: true
    registerNodeNamespace: default
    remoteImageEndpoint: unix:///var/run/isulad.sock
    remoteRuntimeEndpoint: unix:///var/run/isulad.sock
    runtimeRequestTimeout: 2
    runtimeType: remote
    volumeStatsAggPeriod: 60000000000
  eventBus:
    enable: true
    eventBusTLS:
      enable: false
      tlsMqttCAFile: /etc/kubeedge/ca/rootCA.crt
      tlsMqttCertFile: /etc/kubeedge/certs/server.crt
      tlsMqttPrivateKeyFile: /etc/kubeedge/certs/server.key
    mqttMode: 2
    mqttQOS: 0
    mqttRetain: false
    mqttServerExternal: tcp://127.0.0.1:1883
    mqttServerInternal: tcp://127.0.0.1:1884
    mqttSessionQueueSize: 100
  metaManager:
    contextSendGroup: hub
    contextSendModule: websocket
    enable: true
    metaServer:
      debug: false
      enable: true
    podStatusSyncInterval: 60
    remoteQueryTimeout: 60
  serviceBus:
    enable: false

```

### daemon.json

```bash
# Application scenarios: cloud and edge nodes
# File path: /etc/isulad/daemon.json
{
    "group": "isula",
    "default-runtime": "lcr",
    "graph": "/var/lib/isulad",
    "state": "/var/run/isulad",
    "engine": "lcr",
    "log-level": "ERROR",
    "pidfile": "/var/run/isulad.pid",
    "log-opts": {
        "log-file-mode": "0600",
        "log-path": "/var/lib/isulad",
        "max-file": "1",
        "max-size": "30KB"
    },
    "log-driver": "stdout",
    "container-log": {
        "driver": "json-file"
    },
    "hook-spec": "/etc/default/isulad/hooks/default.json",
    "start-timeout": "2m",
    "storage-driver": "overlay2",
    "storage-opts": [
        "overlay2.override_kernel_check=true"
    ],
    "registry-mirrors": [
        "docker.io"
    ],
    "insecure-registries": [
        "k8s.gcr.io",
        "quay.io",
        "hub.oepkgs.net"
    ],
    "pod-sandbox-image": "k8s.gcr.io/pause:3.2",	# Set this parameter to kubeedge/pause:3.1 for edge nodes.
    "websocket-server-listening-port": 10351,
    "native.umask": "secure",
    "network-plugin": "cni",
    "cni-bin-dir": "/opt/cni/bin",
    "cni-conf-dir": "/etc/cni/net.d",
    "image-layer-check": false,
    "use-decrypted-key": true,
    "insecure-skip-verify-enforce": false
}
```
