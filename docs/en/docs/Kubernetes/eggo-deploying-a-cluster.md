# Deploying a Cluster

This section describes how to deploy a Kubernetes cluster.

## Preparing the Environment

The Kubernetes cluster automatic deployment tool provided by openEuler:

- Supports Kubernetes clusters deployment in various common Linux distributions, such as openEuler, CentOS, and Ubuntu.
- Supports hybrid deployment of different CPU architectures (such as AMD64 and ARM64).

### Prerequisites

The following requirements must be met to use the Kubernetes cluster automatic deployment tool:

- You have root permission, for cluster deployment.
- The hostname has been configured for the hosts where Kubernetes is to be deployed. Ensure that the tar command is installed and can be used to decompress the tar.gz packages.
- SSH has been configured on the hosts where Kubernetes is to be deployed for remote access. Ensure that the password-free sudo permission is provided when a common user logs in using SSH.

## Preparing the Installation Packages

For offline installation, prepare dependency packages (such as etcd software packages, container engine software packages, Kubernetes cluster component software packages, network software packages, CoreDNS software packages, and required container images) based on the cluster architecture.

Assume that the network plugin is Calico and the architecture of all hosts in the cluster is ARM64. Prepare the installation packages as follows:

1. Download the required software packages and calico.yaml.

2. Export the container image.

   ```shell
   $ docker save -o images.tar calico/node:v3.19.1 calico/cni:v3.19.1 calico/kube-controllers:v3.19.1 calico/pod2daemon-flexvol:v3.19.1 k8s.gcr.io/pause:3.2
   ```

3. Store the downloaded installation packages, files, and images in the specified directory accordingly. For details about the storage format, see "Preparing the Environment." For example:

   ```shell
   $ tree package
   package
   ├── bin
   │   ├── bandwidth
   │   ├── bridge
   │   ├── conntrack
   │   ├── containerd
   │   ├── containerd-shim
   │   ├── coredns
   │   ├── ctr
   │   ├── dhcp
   │   ├── docker
   │   ├── dockerd
   │   ├── docker-init
   │   ├── docker-proxy
   │   ├── etcd
   │   ├── etcdctl
   │   ├── firewall
   │   ├── flannel
   │   ├── host-device
   │   ├── host-local
   │   ├── ipvlan
   │   ├── kube-apiserver
   │   ├── kube-controller-manager
   │   ├── kubectl
   │   ├── kubelet
   │   ├── kube-proxy
   │   ├── kube-scheduler
   │   ├── loopback
   │   ├── macvlan
   │   ├── portmap
   │   ├── ptp
   │   ├── runc
   │   ├── sbr
   │   ├── socat
   │   ├── static
   │   ├── tuning
   │   ├── vlan
   │   └── vrf
   ├── file
   │   ├── calico.yaml
   │   └── docker.service
   ├── image
   │   └── images.tar
   └── packages_notes.md
   ```

4. Compile packages_notes.md and declare the software package sources for users to view.

   ```shell
   1.  etcd
       - etcd,etcdctl
       - Architecture: ARM64
       - Version: 3.5.0
       - Address: https://github.com/etcd-io/etcd/releases/download/v3.5.0/etcd-v3.5.0-linux-arm64.tar.gz
   
   2. Docker Engine
       - containerd,containerd-shim,ctr,docker,dockerd,docker-init,docker-proxy,runc
       - Architecture: ARM64
       - Version: 19.03.0
       - Address: https://download.docker.com/linux/static/stable/aarch64/docker-19.03.0.tgz
   
   3. Kubernetes
       - kube-apiserver,kube-controller-manager,kube-scheduler,kubectl,kubelet,kube-proy
       - Architecture: ARM64
       - Version: 1.21.3
       - Address: https://www.downloadkubernetes.com/
   
   4. network
       - bandwidth,dhcp,flannel,host-local,loopback,portmap,sbr,tuning,vrf,bridge,firewall,host-device,ipvlan,macvlan,ptp,static,vlan
       - Architecture: ARM64
       - Version: 0.9.1
       - Address: https://github.com/containernetworking/plugins/releases/download/v0.9.1/cni-plugins-linux-arm64-v0.9.1.tgz
   
   5. CoreDNS
       - coredns
       - Architecture: ARM64
       - Version: 1.8.4
       - Address: https://github.com/coredns/coredns/releases/download/v1.8.4/coredns_1.8.4_linux_arm64.tgz
   
   6. images.tar
       - calico/node:v3.19.1 calico/cni:v3.19.1 calico/kube-controllers:v3.19.1 calico/pod2daemon-flexvol:v3.19.1 k8s.gcr.io/pause:3.2
       - Architecture: ARM64
       - Version: N/A
       - Address: N/A
    7. calico.yaml
       - Architecture: NA
       - Version: v3.19.1
       - Address: https://docs.projectcalico.org/manifests/calico.yaml
   ```

5. Go to the package directory and pack the downloaded software packages into packages-arm64.tar.gz.

   ```shell
   $ tar -zcf package-arm64.tar.gz *
   ```

6. Check the compressed package to ensure that the packaging is successful.

   ```shell
   $ tar -tvf package/packages-arm64.tar.gz
   drwxr-xr-x root/root   0 2021-07-29 10:37 bin/
   -rwxr-xr-x root/root   3636214 2021-02-05 23:43 bin/sbr
   -rwxr-xr-x root/root   40108032 2021-07-28 16:40 bin/kube-proxy
   -rwxr-xr-x root/root   4186218 2021-02-05 23:43 bin/vlan
   -rwxr-xr-x root/root   3076118 2021-02-05 23:43 bin/static
   -rwxr-xr-x root/root   3496425 2021-02-05 23:43 bin/host-local
   -rwxr-xr-x root/root   3847814 2021-02-05 23:43 bin/portmap
   -rwxr-xr-x root/root   9681959 2021-02-05 23:43 bin/dhcp
   -rwxr-xr-x root/root   4054640 2021-02-05 23:43 bin/host-device
   -rwxr-xr-x root/root   43909120 2021-07-28 16:41 bin/kube-scheduler
   -rwxr-xr-x root/root   32831616 2019-07-18 02:27 bin/containerd
   -rwxr-xr-x root/root   3284795 2021-02-05 23:43 bin/flannel
   -rwxr-xr-x root/root   21757952 2021-06-16 05:52 bin/etcd
   -rwxr-xr-x root/root   546520 2019-07-18 02:27 bin/docker-init
   -rwxr-xr-x root/root   5878304 2019-07-18 02:27 bin/containerd-shim
   -rwxr-xr-x root/root   4191734 2021-02-05 23:43 bin/macvlan
   -rwxr-xr-x root/root   55248437 2019-07-18 02:27 bin/docker
   -rwxr-xr-x root/root   376208 2019-10-27 01:42 bin/socat
   -rwxr-xr-x root/root   4053707 2021-02-05 23:43 bin/bandwidth
   -rwxr-xr-x root/root   4328311 2021-02-05 23:43 bin/ptp
   -rwxr-xr-x root/root   3633613 2021-02-05 23:43 bin/vrf
   -rwxr-xr-x root/root   3432839 2021-02-05 23:43 bin/loopback
   -rwxr-xr-x root/root   109617672 2021-07-28 16:42 bin/kubelet
   -rwxr-xr-x root/root   113442816 2021-07-28 16:42 bin/kube-apiserver
   -rwxr-xr-x root/root   44171264 2021-05-28 18:33 bin/coredns
   -rwxr-xr-x root/root   43122688 2021-07-28 16:41 bin/kubectl
   -rwxr-xr-x root/root   16711680 2021-06-16 05:52 bin/etcdctl
   -rwxr-xr-x root/root   3570597 2021-02-05 23:43 bin/tuning
   -rwxr-xr-x root/root   4397098 2021-02-05 23:43 bin/bridge
   -rwxr-xr-x root/root   4612178 2021-02-05 23:43 bin/firewall
   -rwxr-xr-x root/root   68921120 2019-07-18 02:27 bin/dockerd
   -rwxr-xr-x root/root   2898746 2019-07-18 02:27 bin/docker-proxy
   -rwxr-xr-x root/root   4186585 2021-02-05 23:43 bin/ipvlan
   -rwxr-xr-x root/root   18446016 2019-07-18 02:27 bin/ctr
   -rwxr-xr-x root/root   80752 2019-01-27 19:40 bin/conntrack
   -rwxr-xr-x root/root   8037728 2019-07-18 02:27 bin/runc
   drwxr-xr-x root/root   0 2021-07-29 10:39 file/
   -rw-r--r-- root/root   20713 2021-07-29 10:39 file/calico.yaml
   -rw-r--r-- root/root   1004 2021-07-29 10:39 file/docker.service
   drwxr-xr-x root/root   0 2021-07-29 11:02 image/
   -rw-r--r-- root/root   264783872 2021-07-29 11:02 image/images.tar
   -rw-r--r-- root/root   1298 2021-07-29 11:05 packages_notes.md
   ```



## Preparing the Configuration File

Prepare the YAML configuration file used for deployment. You can run the following command to generate a configuration template and modify the generated template.yaml based on deployment requirements:

```shell
$ eggo template -f template.yaml
```

You can also directly modify the default configurations using command lines. For example:

```shell
$ eggo template -f template.yaml -n k8s-cluster -u username -p password --masters 192.168.0.1 --masters 192.168.0.2 --workers 192.168.0.3 --etcds 192.168.0.4 --loadbalancer 192.168.0.5
```

## Installing the Kubernetes Cluster

Install the Kubernetes cluster. In this example, template.yaml is the specified configuration file for deployment.

```shell
$ eggo -d deploy -f template.yaml
```

After the installation is complete, verify whether each node in the cluster is successfully installed based on the command output.

```shell
\-------------------------------
message: create cluster success
summary:
192.168.0.1		success
192.168.0.2		success
192.168.0.3		success
\-------------------------------
To start using cluster: cluster-example, you need following as a regular user:

​	export KUBECONFIG=/etc/eggo/cluster-example/admin.conf
```

## Adding Nodes

If the nodes in the cluster cannot meet service requirements, you can add nodes to the cluster to expand the capacity.

- Using the command line to add a single node. The following is an example:

  ```shell
  $ eggo -d join --id k8s-cluster --type master,worker --arch arm64 --port 22 192.168.0.5
  ```

- Using the configuration file to add multiple nodes:

  ```shell
  $ eggo -d join --id k8s-cluster --file join.yaml
  ```

  Configure the nodes to be added in join.yaml. The following is an example:

  ```yaml
  masters:                          # Configure the master node list. It is recommended to set each master node as a worker node. Otherwise, the master nodes may fail to directly access the pods.
  - name: test0                     # Name of the node, which is the node name displayed when the Kubernetes cluster is queried.
    ip: 192.168.0.2                 #IP address of the node.
    port: 22                        # Port number for SSH login.
    arch: arm64                     # Architecture. Set this parameter to amd64 for x86_64.
  - name: test1
    ip: 192.168.0.3
    port: 22
    arch: arm64
  workers:                          # Configure the worker node list.
  - name: test0                     # Name of the node, which is the node name displayed when the Kubernetes cluster is queried.
    ip: 192.168.0.4                 #IP address of the node.
    port: 22                        # Port number for SSH login.
    arch: arm64                     # Architecture. Set this parameter to amd64 for x86_64.
  - name: test2
    ip: 192.168.0.5
    port: 22
    arch: arm64
  ```
