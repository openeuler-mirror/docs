# 部署KubeEdge

## 介绍

### KubeEdge

KubeEdge 是一个致力于解决边缘场景问题的开源系统，它将容器化应用程序编排和设备管理的能力扩展到边缘设备。基于 Kubernetes ，KubeEdge 为网络、应用程序部署以及云侧与边缘侧之间的元数据同步提供核心基础设施支持。KubeEdge 支持 MQTT，并允许开发人员编写自定义逻辑，在边缘上启用资源受限的设备通信。Kubeedge由云部分和边缘部分组成，目前均已开源。

>  https://kubeedge.io/

### iSulad

iSulad 是一个轻量级容器 runtime 守护程序，专为 IOT 和 Cloud 基础设施而设计，具有轻便、快速且不受硬件规格和体系结构限制的特性，可以被更广泛地应用在云、IoT、边缘计算等多个场景。

>  https://gitee.com/openeuler/iSulad

## 准备

### 组件版本

| 组件       | 版本                              |
| ---------- | --------------------------------- |
| OS         | openEuler 21.09（x86_64）         |
| Kubernetes | 1.20.2-4                          |
| iSulad     | 2.0.9-20210625.165022.git5a088d9c |
| KubeEdge   | v1.8.0                            |

### 节点规划

| 节点         | 位置          | 组件                             |
| ------------ | ------------- | -------------------------------- |
| 9.63.252.224 | 云侧（cloud） | k8s（master）、isulad、cloudcore |
| 9.63.252.227 | 端侧（edge）  | isulad、edgecore                 |

### 环境准备

以下设置需要在cloud和edge端均配置

```bash
# 关闭防火墙
$ systemctl stop firewalld
$ systemctl disable firewalld

# 禁用selinux
$ setenforce 0

# 网络配置，开启相应的转发机制
$ cat >> /etc/sysctl.d/k8s.conf <<EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
vm.swappiness=0
EOF

# 生效规则
$ modprobe br_netfilter
$ sysctl -p /etc/sysctl.d/k8s.conf

# 查看是否生效
$ cat /proc/sys/net/bridge/bridge-nf-call-ip6tables
1
$ cat /proc/sys/net/bridge/bridge-nf-call-iptables
1

# 关闭系统swap
$ swapoff -a

# 设置hostname
# 云侧
$ hostnamectl set-hostname cloud.kubeedge
# 端侧
$ hostnamectl set-hostname edge.kubeedge

# 配置hosts文件
$ cat >> /etc/hosts << EOF
9.63.252.224 cloud.kubeedge
9.63.252.227 edge.kubeedge
EOF

# 同步时钟，选择可以访问的NTP服务器即可
$ ntpdate cn.pool.ntp.org
```

### 配置iSulad

以下设置需要在cloud和edge端均配置

```bash
# 安装iSulad
$ yum install -y iSulad
# 配置iSulad（只列出修改项）
$ cat  /etc/isulad/daemon.json
{
        "registry-mirrors": [
                "docker.io"
        ],
        "insecure-registries": [
                "k8s.gcr.io",
                "quay.io"，
                "hub.oepkgs.net"
        ],
        "pod-sandbox-image": "k8s.gcr.io/pause:3.2",	# pause镜像设置
        "network-plugin": "cni", # 置空表示禁用cni网络插件则下面两个路径失效，安装插件后重启isulad即可
        "cni-bin-dir": "/opt/cni/bin",
        "cni-conf-dir": "/etc/cni/net.d",
}

# 如果不能直接访问外网，则需要配置proxy，否则不需要
$ cat /usr/lib/systemd/system/isulad.service
[Service]
Type=notify
Environment="HTTP_PROXY=http://..."
Environment="HTTPS_PROXY=http://..."

# 重启iSulad并设置为开机自启
$ systemctl daemon-reload && systemctl restart isulad
```

### 安装k8s组件

k8s组件只需要在云侧安装部署

```bash
# cri-tools 网络工具
$ wget --no-check-certificate https://github.com/kubernetes-sigs/cri-tools/releases/download/v1.20.0/crictl-v1.20.0-linux-amd64.tar.gz
$ tar zxvf crictl-v1.20.0-linux-amd64.tar.gz -C /usr/local/bin

# cni 网络插件
$ wget --no-check-certificate https://github.com/containernetworking/plugins/releases/download/v0.9.0/cni-plugins-linux-amd64-v0.9.0.tgz
$ mkdir -p /opt/cni/bin
$ tar -zxvf cni-plugins-linux-amd64-v0.9.0.tgz -C /opt/cni/bin

# master节点执行
$ yum install kubernetes-master kubernetes-kubeadm kubernetes-client kubernetes-kubelet
# 开机启动kubelet
$ systemctl enable kubelet --now
```

### 部署master节点

k8s组件只需要在云侧安装部署

```bash
# 注意，init之前需要取消系统环境中的proxy
$ unset `env | grep -iE "tps?_proxy" | cut -d= -f1`
$ env | grep proxy

# 使用kubeadm init
$ kubeadm init --kubernetes-version v1.20.2 --pod-network-cidr=10.244.0.0/16 --upload-certs --cri-socket=/var/run/isulad.sock
# 默认k8s组件镜像是gcr.k8s.io，可以使用--image-repository=xxx 来使用自定义镜像仓库地址（测试自己的k8s镜像）

# 注意这里的pod-network-cidr网段不能和宿主机的网段重复，否则网络不通
# 先init再配置网络
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

# 根据提示执行
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config
# 这个命令复制了admin.conf（kubeadm帮我们自动初始化好的kubectl配置文件）
# 这里包含了认证信息等相关信息的非常重要的一些配置。

# 重置（如果init出现问题可以重置）
$ kubeadm reset  重置
# 如果出现 Unable to read config path "/etc/kubernetes/manifests"
$ mkdir -p /etc/kubernetes/manifests
```

### 配置网络

**Calico网络插件在edge节点无法运行**， 所以这里使用`flannel`代替，已有用户在KubeEdge社区提交[issue](https://github.com/kubeedge/kubeedge/issues/2788#issuecomment-907627687)

因为云侧和端侧为不同的网络环境，需要配置不同的**亲和性**，所以这里需要两份flannel配置文件。

```bash
# 下载flannel网络插件
$ wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# 准备云侧网络配置
$ cp kube-flannel.yml kube-flannel-cloud.yml
# 修改云侧网络配置
diff --git a/kube-flannel.yml b/kube-flannel.yml
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

# 准备端侧网络配置
$ cp kube-flannel.yml kube-flannel-edge.yml
# 修改端侧网络配置
diff --git a/kube-flannel.yml b/kube-flannel.yml
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
# 这里的--kube-api-url为端侧edgecore监听地址

# 配置calico网络插件
$ kubectl apply -f kube-flannel-cloud.yml
$ kubectl apply -f kube-flannel-edge.yml

# 查看节点状态
$ kubectl get node -A
NAME             STATUS   ROLES                  AGE     VERSION
cloud.kubeedge   Ready    control-plane,master   4h11m   v1.20.2
```

如果使用`kubeadm`部署的k8s集群，那么kube-proxy会下发到端侧节点，但是edgecore无法与kube-proxy并存，所以要修改kube-proxy 的daemonset节点亲和性，禁止在端侧部署kube-proxy

```bash
$ kubectl edit ds kube-proxy -n kube-system
# 添加以下配置
   spec:
     affinity:
       nodeAffinity:
         requiredDuringSchedulingIgnoredDuringExecution:
           nodeSelectorTerms:
           - matchExpressions:
             - key: node-role.kubernetes.io/agent
               operator: DoesNotExist
```

### iSulad配置

KubeEdge 端侧edgecore监听端口`10350`与iSulad websocket端口冲突，端侧无法启动edgecore

解决办法：修改iSulad配置(`/etc/isulad/daemon.json`)中的`websocket-server-listening-port`的字段为`10351`

   ```bash
diff --git a/daemon.json b/daemon.json
index 3333590..336154e 100644
--- a/daemon.json
+++ b/daemon.json
@@ -31,6 +31,7 @@
         "hub.oepkgs.net"
     ],
     "pod-sandbox-image": "k8s.gcr.io/pause:3.2",
+    "websocket-server-listening-port": 10351,
     "native.umask": "secure",
     "network-plugin": "cni",
     "cni-bin-dir": "/opt/cni/bin",
   ```

修改完配置文件之后，重启iSulad。

## 使用keadm部署

如果使用keadm进行集群部署，则**只需要**在云侧和端侧均安装`kubeedge-keadm`rpm包即可。

```bash
$ yum install kubeedge-keadm
```

### 部署云侧

#### 初始化集群

```bash
# --advertise-address为云侧IP
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

此时cloudcore正在运行，但是并未使用systemd管理，且没有开启dynamiccontroller（对应edgecore中的list watch功能），需要修改配置

#### 修改配置

```bash
# 修改/etc/kubeedge/config/cloudcore.yaml
# 开启dynamic controller
diff --git a/cloudcore.yaml b/cloudcore.yaml
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
+    enable: true	# 开启dynamicController以支持edgecore的listwatch功能
   edgeController:
     buffer:
       configMapEvent: 1
@@ -119,5 +115,3 @@ modules:
     restTimeout: 60
   syncController:
     enable: true

# 云侧cloudcore可以通过systemd管理
# 拷贝cloudcore.service到/usr/lib/systemd/system
$ cp /etc/kubeedge/cloudcore.service /usr/lib/systemd/system
# 杀掉当前cloudcore进程
$ pkill cloudcore
$ systemctl restart cloudcore
# 查看cloudcore是否运行
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

至此，云侧的cloudcore已部署完成，接下来部署端侧edgecore

### 部署端侧

同样，在端侧机器上使用`keadm`加入云侧

#### 修改iSulad配置

```bash
# 文件位置：/etc/isulad/daemon.json
# 设置"pod-sandbox-image"
"pod-sandbox-image": "kubeedge/pause:3.1",
# 设置websocket监听端口
"websocket-server-listening-port": 10351,
```

#### 加入云侧

```bash
# 在云侧获取token
$ keadm gettoken
28c25d3b137593f5bbfb776cf5b19866ab9727cab9e97964dd503f87cd52cbde.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzAyOTE4MTV9.aGUyCi9gdysVtMu0DQzrD5TcV_DcXob647YeqcOxKDA

# 在端侧使用keadm join 加入云侧
# --cloudcore-ipport是必须要加入的参数，10000是cloudcore默认端口
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

此时，edgecore并未部署成功，因为默认配置中使用的是docker，我们需要修改其配置文件用于对接iSulad

#### 修改配置

```bash
# 端侧edgecore可以通过systemd管理
# 拷贝edgecore.service到/usr/lib/systemd/system
$ cp /etc/kubeedge/edgecore.service /usr/lib/systemd/system

# 修改edgecore配置
$ vim /etc/kubeedge/config/edgecore.yaml
diff --git a/edgecore.yaml b/edgecore.yaml
index 165e24b..efbfd49 100644
--- a/edgecore.yaml
+++ b/edgecore.yaml
@@ -32,7 +32,7 @@ modules:
       server: 9.63.252.224:10000
       writeDeadline: 15
   edgeMesh:
-    enable: true
+    enable: false	# 关闭edgeMesh
     lbStrategy: RoundRobin
     listenInterface: docker0
     listenPort: 40001
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
+    runtimeType: remote	# iSulad类型为remote
     volumeStatsAggPeriod: 60000000000
   eventBus:
     enable: true
@@ -97,7 +97,7 @@ modules:
     enable: true
     metaServer:
       debug: false
-      enable: false
+      enable: true		# 开启listwatch
     podStatusSyncInterval: 60
     remoteQueryTimeout: 60
   serviceBus:

# 杀掉当前edgecore进程
$ pkill edgecore

# 重启edgecore
$ systemctl restart edgecore
```

#### 检查端侧是否已经加入云侧

```bash
# 回到云侧，发现已经有了端侧节点
$ kubectl get node -A
NAME             STATUS   ROLES                  AGE     VERSION
cloud.kubeedge   Ready    control-plane,master   19h     v1.20.2
edge.kubeedge    Ready    agent,edge             5m16s   v1.19.3-kubeedge-v1.8.0
```

至此，使用keadm部署KubeEdge集群已经完成，接下来我们测试一下从云侧下发任务到端侧

### 部署应用

#### 部署nginx

```bash
# KubeEdge提供了一个nginx模板，我们可以直接使用
$ kubectl apply -f $GOPATH/src/github.com/kubeedge/kubeedge/build/deployment.yaml
deployment.apps/nginx-deployment created

# 查看是否部署到了端侧
$ kubectl get pod -A -owide | grep nginx
default       nginx-deployment-77f96fbb65-fnp7n        1/1     Running   0          37s   10.244.2.4     edge.kubeedge    <none>           <none>

# 可以看到，已经成功部署到了edge节点

```

#### 测试功能

```bash
# 测试功能是否正常
# 进入端侧节点，curl nginx的IP：10.244.2.4
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

至此，部署KubeEdge+iSulad已经全流程打通

## 使用二进制部署

用户也可以使用二进制部署kubeedge集群。 只需要使用两个rpm包: `cloudcore`(云侧) 和`edgecore`(端侧)

> 使用二进制部署KubeEdge进行测试，切勿在生产环境中使用这种方式。

### 部署云侧

>  进入云侧主机

#### 安装`cloudcore`rpm包

```bash
$ yum install kubeedge-cloudcore
```

#### 创建CRD

```bash
$ kubectl apply -f /etc/kubeedge/crds/devices/devices_v1alpha2_device.yaml
$ kubectl apply -f /etc/kubeedge/crds/devices/devices_v1alpha2_devicemodel.yaml
$ kubectl apply -f /etc/kubeedge/crds/reliablesyncs/cluster_objectsync_v1alpha1.yaml
$ kubectl apply -f /etc/kubeedge/crds/reliablesyncs/objectsync_v1alpha1.yaml
```

#### 准备配置文件

```bash
$ cloudcore --defaultconfig > /etc/kubeedge/config/cloudcore.yaml
```

并按照**使用keadm部署**修改cloudcore相关配置

#### 运行cloudcore

```bash
$ pkill cloudcore
$ systemctl start cloudcore
```

### 部署端侧

> 进入端侧主机

#### 安装`edgecore`rpm包

```bash
$ yum install kubeedge-edgecore
```

#### 准备配置文件

```bash
$ edgecore --defaultconfig > /etc/kubeedge/config/edgecore.yaml
```

并按照**使用keadm部署**修改edgecore相关配置



```bash
$ kubectl get secret -nkubeedge tokensecret -o=jsonpath='{.data.tokendata}' | base64 -d
1c4ff11289a14c59f2cbdbab726d1857262d5bda778ddf0de34dd59d125d3f69.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzE0ODM3MzN9.JY77nMVDHIKD9ipo03Y0mSbxief9qOvJ4yMNx1yZpp0
# 将获取到的token添加到配置文件中
sed -i -e "s|token: .*|token: ${token}|g" /etc/kubeedge/config/edgecore.yaml
# token变量的值来自于之前步骤
```

#### 运行edgecre

```bash
$ pkill edgecore
$ systemctl start edgecore
```

## 附录

### kube-flannel-cloud.yml

```bash
# 使用场景：云侧
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
# 使用场景：云侧
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
# 使用场景：云侧
# 文件位置：/usr/lib/systemd/system/cloudcore.service
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
# 使用场景：云侧
# 文件位置：/etc/kubeedge/config/cloudcore.yaml
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
# 使用场景：端侧
# 文件位置：/etc/systemd/system/edgecore.service
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
# 使用场景：端侧
# 文件位置：/etc/kubeedge/config/edgecore.yaml
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
    token: # 这里填写从云侧获取的token
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
# 使用场景：云侧、端侧
# 文件位置：/etc/isulad/daemon.json
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
    "pod-sandbox-image": "k8s.gcr.io/pause:3.2",	# 端侧时配置为 kubeedge/pause:3.1
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
