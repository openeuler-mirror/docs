# 部署集群

本小节介绍如何部署 Kubernetes 集群。

## 环境准备

openEuler 提供的 Kubernetes 集群自动化部署工具：

- 支持在多种常见 Linux 发行版（例如 openEuler、CentOS、Ubuntu）上部署 Kubernetes 集群。
- 支持在不同 CPU 架构（例如 AMD64 和 ARM64）上混合部署。

### 前提条件

使用 Kubernetes 集群自动化部署工具，需要满足如下要求：

- 部署集群需要使用 root 权限
- 待部署 Kubernetes 的机器已经配置好机器名称 hostname ，并且已安装 tar 命令，确保能够使用 tar 命令解压 tar.gz 格式的压缩包。
- 待部署 Kubernetes 的机器已经配置 ssh ，确保能够远程访问。如果是普通用户 ssh 登录，需要确保该用户有免密执行 sudo 的权限。

## 准备安装包

如果是离线安装，请根据集群的架构，准备对应架构的依赖包（ETCD 相关软件包、容器引擎相关软件包、Kubernetes 集群组件软件包、网络相关的软件包、coredns 软件包、依赖的容器镜像等）。

假设网络插件为 calico、集群中所有机器的架构为 ARM64，准备安装包的步骤如下：

1. 下载依赖的软件包和 calico.yaml 。

2. 导出容器镜像。

   ```shell
   $ docker save -o images.tar calico/node:v3.19.1 calico/cni:v3.19.1 calico/kube-controllers:v3.19.1 calico/pod2daemon-flexvol:v3.19.1 k8s.gcr.io/pause:3.2
   ```

3. 按照规定的目录存放下载的安装包、文件和镜像（具体存放格式请参见 “准备环境”）。例如：

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

4. 编写 packages_notes.md，声明软件包来源，便于用户查看。

   ```shell
   1.  ETCD
       - etcd,etcdctl
       - 架构：arm64
       - 版本：3.5.0
       - 地址：https://github.com/etcd-io/etcd/releases/download/v3.5.0/etcd-v3.5.0-linux-arm64.tar.gz
   
   2. Docker Engine
       - containerd,containerd-shim,ctr,docker,dockerd,docker-init,docker-proxy,runc
       - 架构：arm64
       - 版本：19.03.0
       - 地址：https://download.docker.com/linux/static/stable/aarch64/docker-19.03.0.tgz
   
   3. Kubernetes
       - kube-apiserver,kube-controller-manager,kube-scheduler,kubectl,kubelet,kube-proy
       - 架构：arm64
       - 版本：1.21.3
       - 地址：https://www.downloadkubernetes.com/
   
   4. network
       - bandwidth,dhcp,flannel,host-local,loopback,portmap,sbr,tuning,vrf,bridge,firewall,host-device,ipvlan,macvlan,ptp,static,vlan
       - 架构：arm64
       - 版本：0.9.1
       - 地址：https://github.com/containernetworking/plugins/releases/download/v0.9.1/cni-plugins-linux-arm64-v0.9.1.tgz
   
   5. coredns
       - coredns
       - 架构：arm64
       - 版本：1.8.4
       - 地址：https://github.com/coredns/coredns/releases/download/v1.8.4/coredns_1.8.4_linux_arm64.tgz
   
   6. images.tar
       - calico/node:v3.19.1 calico/cni:v3.19.1 calico/kube-controllers:v3.19.1 calico/pod2daemon-flexvol:v3.19.1 k8s.gcr.io/pause:3.2
       - 架构：arm64
       - 版本：NA
       - 地址：NA
    7. calico.yaml
       - 架构：NA
       - 版本：v3.19.1
       - 地址：https://docs.projectcalico.org/manifests/calico.yaml  
   ```

5. 进入 package 目录，将下载的软件包打包成 packages-arm64.tar.gz

   ```shell
   $ tar -zcf package-arm64.tar.gz *
   ```

6. 查看压缩包，确认打包成功。

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



## 准备配置文件

准备部署时使用的 YAML 配置文件。可以使用如下命令生成一个模板配置，然后根据部署需求修改生成的 template.yaml 。

```shell
$ eggo template -f template.yaml
```

或者直接使用命令行方式修改默认配置，参考命令如下：

```shell
$ eggo template -f template.yaml -n k8s-cluster -u username -p password --masters 192.168.0.1 --masters 192.168.0.2 --workers 192.168.0.3 --etcds 192.168.0.4 --loadbalancer 192.168.0.5
```

## 安装 Kubernetes 集群

安装 Kubernetes 集群。此处假设指定配置文件 template.yaml 。

```shell
$ eggo -d deploy -f template.yaml
```

安装完成后，根据回显信息，确认集群各节点是否安装成功。

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

## 加入节点

当集群中节点不满足业务需求，需要扩容时，可以在集群中新增节点。

- 添加单个节点：通过命令行添加。示例参考如下：

  ```shell
  $ eggo -d join --id k8s-cluster --type master,worker --arch arm64 --port 22 192.168.0.5
  ```

- 添加多个节点：通过配置文件方式添加。

  ```shell
  $ eggo -d join --id k8s-cluster --file join.yaml
  ```

  join.yaml 中配置新增的节点信息，示例如下：

  ```yaml
  masters:     # 配置master节点列表，建议每个master节点同时作为worker节点，否则master节点可能无法直接访问pod
  - name: test0                     # 该节点的名称，为 k8s 集群查询显示的该节点名称
    ip: 192.168.0.2                 # 该节点的 IP 地址
    port: 22                        # ssh 登录的端口号
    arch: arm64                     # 机器架构，x86_64 配置为 amd64
  - name: test1
    ip: 192.168.0.3
    port: 22
    arch: arm64
  workers:                          # 配置 worker 节点列表
  - name: test0                     # 该节点的名称，为 k8s 集群查询显示的该节点名称
    ip: 192.168.0.4                 # 该节点的 IP 地址
    port: 22                        # ssh 登录的端口号
    arch: arm64                     # 机器架构，x86_64 配置为 amd64
  - name: test2
    ip: 192.168.0.5
    port: 22
    arch: arm64
  ```