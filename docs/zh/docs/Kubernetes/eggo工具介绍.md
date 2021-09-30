# 工具介绍

本章介绍自动化部署工具的相关内容，建议用户在部署前阅读。

## 部署方式

openEuler 提供的 Kubernetes 集群自动化部署工具使用命令行方式进行集群的一键部署。它提供了如下几种部署方式：

- 离线部署：本地准备好所有需要用到的 RPM 软件包、二进制文件、插件、容器镜像，并将它们按照一定的格式打包成一个 tar.gz 文件，然后完成对应 YAML 配置文件的编写，即可执行命令实现一键部署。当虚拟机无法访问外部网络时，可以采用该部署方式。
- 在线部署：只需要完成对应 YAML 配置文件的编写，所需的RPM 软件包、二进制文件、插件、容器镜像，都在安装部署阶段连接互联网自动下载。该方式需要虚拟机能够访问软件源、集群依赖的镜像仓库，例如 Docker Hub 。

## 配置介绍

使用工具自动化部署 Kubernetes 集群时，使用 YAML 配置文件描述集群部署的信息，此处介绍各配置项含义以及配置示例。

### 配置项介绍

- cluster-id：集群名称，请遵循 DNS 域名的命名规范。例如 k8s-cluster

- username：需要部署 k8s 集群的机器的 ssh 登录用户名，所有机器都需要使用同一个用户名。

- private-key-path：ssh 免密登录的秘钥存储文件的路径。private-key-path 和 password 只需要配置其中一项，如果两者都进行了配置，优先使用 private-key-path 

- masters：master 节点列表，建议每个 master 节点同时作为 worker 节点。每个 master 节点包含如下配置子项，多个 master 节点配置多组子项内容：
  - name：master 节点名称，为 k8s 集群看到的该节点名称
  - ip：master 节点的 IP 地址
  - port：ssh 登录该节点的端口，默认为 22 
  - arch：master 节点的 CPU 架构，例如 x86_64 取值为 amd64
  
- workers：worker 节点列表。每个 worker 节点包含如下配置子项，多个 worker 节点配置多个子项内容：
  - name：worker 节点名称，为 k8s 集群看到的该节点名称 
  - ip：worker 节点的 IP 地址
  - port：ssh 登录该节点的端口，默认为 22
  - arch：worker 节点的 CPU 架构，例如 x86_64 取值为 amd64
  
- etcds：etcd 节点的列表。如果该项为空，则会为每个 master 节点部署一个 etcd，否则只会部署配置的 etcd 节点。每个 etcd 节点包含如下配置子项，多个 etcd 节点配置多组子项内容：
  - name：etcd 节点的名称，为 k8s 集群看到的该节点的名称
  - ip：etcd 节点的 IP 地址
  - port：ssh 登录的端口
  - arch：etcd 节点的 CPU 架构，例如 x86_64 取值为 amd64
  
- loadbalance：loadbalance 节点列表。每个 loadbalance 节点包含如下配置子项，多个 etcd 节点配置多组子项内容：
  - name：loadbalance 节点的名称，为 k8s 集群看到的该节点的名称
  - ip：loadbalance 节点的 IP 地址
  - port：ssh 登录的端口
  - arch：loadbalance 节点的 CPU 架构，例如 x86_64 取值为 amd64
  - bind-port：负载均衡服务的侦听端口 
  
- external-ca：是否使用外部 CA 证书，使用则配置为 true，反之，配置为 false 

- external-ca-path：外部 CA 证书文件的路径 。仅  external-ca 为 true 时有效

- service：k8s 创建的 service 信息。service 配置包含如下配置子项：
  - cidr：k8s 创建的 service 的 IP 地址网段
  - dnsaddr：k8s 创建的 service 的 DNS 地址
  -  gateway：k8s创建的 service 的网关地址
  - dns：k8s 创建的 coredns 的配置。dns 配置包含如下配置子项：
    - corednstype：k8s 创建的 coredns 的部署类型，支持 pod 和 binary
    - imageversion：pod 部署类型的 coredns 镜像版本
    - replicas：pod 部署类型的 coredns 副本数量
  
- network：k8s 集群网络配置。network 配置包含如下配置子项：
  - podcidr：k8s 集群网络的 IP 地址网段
  - plugin：k8s 集群部署的网络插件            
  - plugin-args：k8s 集群网络的网络插件的配置文件路径。例如 : {"NetworkYamlPath": "/etc/kubernetes/addons/calico.yaml"}
  
- apiserver-endpoint：进群外部可访问的 APISERVER 服务的地址或域名，如果配置了 loadbalances 则填loadbalance 地址，否则填写第 1 个 master 节点地址。

- apiserver-cert-sans：apiserver 相关证书中需要额外配置的 IP 和域名。它包含如下子配置项
  - dnsnames：apiserver 相关证书中需要额外配置的域名数组列表。
  - ips：apiserver 相关证书中需要额外配置的 IP 地址数组列表。
  
- apiserver-timeout：apiserver 响应超时时间

- etcd-token：etcd 集群名称

- dns-vip：dns 的虚拟 IP 地址

- dns-domain：DNS 域名后缀

- pause-image：pause 容器的完整镜像名称

- network-plugin：网络插件类型。仅支持配置 cni ，配置为空时使用 k8s 默认网络。

- cni-bin-dir：网络插件地址，多个地址使用 "," 分隔，例如：/usr/libexec/cni,/opt/cni/bin

- runtime：指定容器运行时类型，目前支持 docker 和 iSulad

- runtime-endpoint：容器运行时 endpoint，当 runtime 为 docker 时，可以不指定

- registry-mirrors：下载容器镜像时，使用的镜像仓库的 mirror 站点地址

- insecure-registries：下载容器镜像时，使用 http 协议下载镜像的镜像仓库地址

- config-extra-args：各个组件（例如 kube-apiserver、etcd）服务启动配置的额外参数。它包含如下子配置项：
  - name：组件名称，支持 etcd、kube-apiserver、kube-controller-manager、kube-scheduler、kube-proxy、kubelet

  - extra-args：组件的拓展参数，格式为 key: value 格式，注意 key 对应的组件参数前需要加上 "-" 或者 "--" 。

  - open-ports：配置需要额外打开的端口，k8s 自身所需端口不需要进行配置，k8s 以外的插件端口需要进行额外配置。
      - worker | master | etcd | loadbalance：指定打开端口的节点类型，每项配置包含一个多或者多个 port 和 protocol 子配置项。
          - port：端口地址
          - protocol：端口类型，可选值为 tcp 或者 udp
      
  - install：配置各种类型节点上需要安装的安装包或者二进制文件的详细信息，注意将对应文件放到在 tar.gz 安装包中。以下给全量配置说明，具体配置请根据实际情况选择。
      - package-source：配置安装包的详细信息
          - type：安装包的压缩类型，目前只支持 tar.gz 类型的安装包
          - dstpath：安装包在对端机器上的路径，必须是可用的绝对路径
          - srcpath：不同架构安装包的存放路径，架构必须与机器架构相对应，必须是可用的绝对路径
              - arm64：arm64 架构安装包的路径，配置的机器中存在 arm64 机器场景下需要配置
              - amd64：amd64 类型安装包的路径，配置的机器中存在 x86_64 机器场景下需要配置

      > ![](./public_sys-resources/icon-note.gif)**说明**：
      >
      > - install 配置中 etcd、kubernetes-master、kubernetes-worker、network、loadbalance、container、image、dns 中的子配置项相同，都是 name、type、dst，schedule、TimeOut 。其中 dst，schedule、TimeOut 为可选项，用户根据安装的文件决定是否配置。下述仅以 etcd 和 kubernetes-master 节点的配置为例说明。

      - etcd：etcd 类型节点需要安装的包或二进制文件列表
          - name：需要安装的软件包或二进制文件的名称，如果是安装包则只写名称，不填写具体的版本号，安装时会使用 `$name*` 识别，例如 etcd 。如果为多个软件包，各名称使用 ，分隔 。
          - type：配置项类型，可选值为 pkg、repo、bin、file、dir、image、yaml、shell 。如果配置为 repo ，请在对应节点上配置 repo 源
          - dst：目的文件夹路径，type 为 bin、file、dir 类型时需要配置。表示将文件/文件夹放到节点的哪个目录下，为了防止用户误配置路径，导致 cleanup 时删除重要文件，此配置必须配置为白名单中的路径。详见 “白名单说明” 
      - kubernetes-master：k8s master 类型节点需要安装的包或二进制文件列表
      - kubernetes-worker：k8s worker 类型节点需要安装的包或二进制文件列表
      - network：网络需要安装的包或二进制文件列表
      - loadbalance：loadbalance 类型节点需要安装的包或二进制文件列表
      - container：容器需要安装的包或二进制文件列表
      - image：容器镜像 tar 包
      - dns：k8s coredns 安装包。如果 corednstype 配置为 pod，此处无需配置
      - addition：额外的安装包或二进制文件列表
        - master：以下配置会安装在所有 master 节点
          - name：需要安装的软件包包或二进制文件的名称
          - type：配置项类型，可选值为 pkg、repo、bin、file、dir、image、yaml、shell 。如果配置为 repo ，请在对应节点上配置 repo 源
          - schedule：仅在 type 为 shell 时有效，代表用户想要执行脚本的时机，支持 prejoin（节点加入前）、postjoin（节点加入后）、precleanup（节点退出前）、postcleanup（节点退出后）。
          - TimeOut：脚本执行超时时间，超时时该进程被强制终止运行。未配置默认为 30s
        - worker：配置会安装在所有 worker 节点，具体配置格式和 additon 下的 master 相同

### 白名单介绍

install 配置中 dst 项的值必须符合白名单规则，配置为白名单对应路径及其子目录。当前白名单如下：

- /usr/bin
- /usr/local/bin
- /opt/cni/bin
- /usr/libexec/cni
- /etc/kubernetes
- /usr/lib/systemd/system
- /etc/systemd/system
- /tmp

### 配置示例

此处给出一个 YAML 文件配置示例。从示例可知，同一台机器，可以部署多个类型的节点，但是不同节点的配置必须一致，例如 test0 机器部署了 master 和 woker 类型。 

```yaml
cluster-id: k8s-cluster
username: root
private-key-path: /root/.ssh/private.key
masters:
- name: test0
  ip: 192.168.0.1
  port: 22
  arch: arm64
workers:
- name: test0
  ip: 192.168.0.1
  port: 22
  arch: arm64
- name: test1
  ip: 192.168.0.3
  port: 22
  arch: arm64
etcds:
- name: etcd-0
  ip: 192.168.0.4
  port: 22
  arch: amd64
loadbalance:
  name: k8s-loadbalance
  ip: 192.168.0.5
  port: 22
  arch: amd64
  bind-port: 8443
external-ca: false
external-ca-path: /opt/externalca 
service:
  cidr: 10.32.0.0/16
  dnsaddr: 10.32.0.10
  gateway: 10.32.0.1
  dns:  
    corednstype: pod
    imageversion: 1.8.4
    replicas: 2
network:
  podcidr: 10.244.0.0/16
  plugin: calico
  plugin-args: {"NetworkYamlPath": "/etc/kubernetes/addons/calico.yaml"}  
apiserver-endpoint: 192.168.122.222:6443      
apiserver-cert-sans:
  dnsnames: []
  ips: []
apiserver-timeout: 120s
etcd-external: false
etcd-token: etcd-cluster
dns-vip: 10.32.0.10 
dns-domain: cluster.local
pause-image: k8s.gcr.io/pause:3.2
network-plugin: cni 
cni-bin-dir: /usr/libexec/cni,/opt/cni/bin
runtime: docker
runtime-endpoint: unix:///var/run/docker.sock 
registry-mirrors: []
insecure-registries: []
config-extra-args:
  - name: kubelet
    extra-args:
      "--cgroup-driver": systemd
open-ports:
  worker:
  - port: 111
    protocol: tcp
  - port: 179
    protocol: tcp
install:
  package-source:
    type: tar.gz
    dstpath: ""
    srcpath: 
      arm64: /root/rpms/packages-arm64.tar.gz 
      amd64: /root/rpms/packages-x86.tar.gz
  etcd:
  - name: etcd
    type: pkg
    dst: ""
  kubernetes-master:
  - name: kubernetes-client,kubernetes-master
    type: pkg
  kubernetes-worker:
  - name: docker-engine,kubernetes-client,kubernetes-node,kubernetes-kubelet
    type: pkg
    dst: ""
  - name: conntrack-tools,socat
    type: pkg
    dst: ""
  network:
  - name: containernetworking-plugins
    type: pkg
    dst: ""
  loadbalance:
  - name: gd,gperftools-libs,libunwind,libwebp,libxslt
    type: pkg
    dst: ""
  - name: nginx,nginx-all-modules,nginx-filesystem,nginx-mod-http-image-filter,nginx-mod-http-perl,nginx-mod-http-xslt-filter,nginx-mod-mail,nginx-mod-stream
    type: pkg
    dst: ""
  container:
  - name: emacs-filesystem,gflags,gpm-libs,re2,rsync,vim-filesystem,vim-common,vim-enhanced,zlib-devel
    type: pkg
    dst: ""
  - name: libwebsockets,protobuf,protobuf-devel,grpc,libcgroup
    type: pkg
    dst: ""
  - name: yajl,lxc,lxc-libs,lcr,clibcni,iSulad
    type: pkg
    dst: ""
  image:  
  - name: pause.tar
    type: image
    dst: ""
  dns:    
  - name: coredns
    type: pkg
    dst: ""
  addition:
    master:
    - name: prejoin.sh
      type: shell
      schedule: "prejoin"
      TimeOut:  "30s"
    - name: calico.yaml
      type: yaml
      dst: ""
    worker:
    - name: docker.service
      type: file
      dst: /usr/lib/systemd/system/
    - name: postjoin.sh
      type: shell
      schedule: "postjoin"
```

### 安装包结构

如果是离线部署，需要准备 Kubernetes 以及相关的离线安装包，并遵循特定目录结构存放离线安装包。需要遵循的目录结构如下：

```shell
package
├── bin
├── dir
├── file
├── image
├── pkg
└── packages_notes.md
```

上述各目录的含义如下：

- 离线部署包的目录结构与集群配置 config 中的 package 的类型对应，package 类型有 pkg、repo、bin、file、dir、image、yaml、shell 八种。

- bin 目录存放二进制文件，对应 package 类型 bin 。

- dir 目录存放需要拷贝到目标机器的目录，需要配置 dst 目的地路径，对应 package 类型 dir 。

- file 目录存放 file、yaml、shell 三种类型的文件。其中 file 类型代表需要拷贝到目标机器的文件，同时需要配置 dst 目的地路径；yaml 类型代表用户自定义的 YAML 文件，会在集群部署完成后 apply 该 YAML 文件；shell 类型代表用户想要执行的脚本，同时需要配置 schedule 执行时机，执行时机包括 prejoin（节点加入前）、postjoin（节点加入后）、precleanup（节点退出前）、postcleanup（节点退出后）四个阶段。

- image 目录存放需要导入的容器镜像。这些容器镜像必须兼容 docker 的 tar 包格式（例如由 docker 或 isula-build 导出镜像）。

- pkg 目录下存放需要安装的 rpm/deb 包，对应 package 类型 pkg 。建议使用二进制文件，便于跨发行版本的部署。

### 命令参考

openEuler 提供的集群部署工具，使用命令行 eggo 进行集群部署。

#### 部署 k8s 集群

通过指定的 YAML 配置部署 k8s 集群：

**eggo deploy** [ **-d** ]  **-f** *deploy.yaml* 

| 参数          | 是否必选 | 参数含义                          |
| ------------- | -------- | --------------------------------- |
| --debug \| -d | 否       | 打印调试信息                      |
| --file \| -f  | 是       | 指定部署 k8s 集群的 YAML 文件路径 |

#### 加入单节点

将指定的单节点加入到 k8s 集群中：

**eggo** **join** [ **-d** ]  **--id** *k8s-cluster*  [ **--type** *master,worker* ] **--arch** *arm64* **--port** *22* [ **--name** *master1*] *IP* 

| 参数          | 是否必选 | 参数含义                                                     |
| ------------- | -------- | ------------------------------------------------------------ |
| --debug \| -d | 否       | 打印调试信息                                                 |
| --id          | 是       | 指定将要加入 k8s 集群名称                                    |
| --type \| -t  | 否       | 指定加入节点的类型，支持 master、worker 。多个类型使用 “,” 隔开，默认值为 worker 。 |
| --arch \| -a  | 是       | 指定加入节点的 CPU 架构                                      |
| --port \| -p  | 是       | 指定 ssh 登录所加入节点的端口号                              |
| --name \| -n  | 否       | 指定加入节点的名称                                           |
| *IP*          | 是       | 加入节点的实际 IP 地址                                       |

#### 加入多节点

将指定的多个节点加入到 k8s 集群：

**eggo** **join**  [ **-d** ]  **--id** *k8s-cluster*  **-f** *nodes.yaml*

| 参数          | 是否必选 | 参数含义                         |
| ------------- | -------- | -------------------------------- |
| --debug \| -d | 否       | 打印调试信息                     |
| --id          | 是       | 指定将要加入 k8s 集群名称        |
| --file \| -f  | 是       | 指定加入节点的 YAML 配置文件路径 |

#### 删除节点

删除 k8s 集群中的一个或者多个节点：

**eggo delete**  [ **-d** ]  **--id** *k8s-cluster* *node* [*node...*]

| 参数          | 是否必选 | 参数含义                                     |
| ------------- | -------- | -------------------------------------------- |
| --debug \| -d | 否       | 打印调试信息                                 |
| --id          | 是       | 指定将要删除的节点所在的集群名称             |
| *node*        | 是       | 要删除的单个或多个节点的 IP 地址或者节点名称 |

#### 删除集群

删除整个 k8s 集群：

**eggo cleanup**  [ **-d** ]  **--id** *k8s-cluster* [ **-f** *deploy.yaml* ]

| 参数          | 是否必选 | 参数含义                                                     |
| ------------- | -------- | ------------------------------------------------------------ |
| --debug \| -d | 否       | 打印调试信息                                                 |
| --id          | 是       | 指定将要清除的 k8s 集群名称                                  |
| --file \| -f  | 否       | 指定清除 k8s 集群的 YAML 文件路径。不指定时，默认使用部署集群时缓存的集群配置。正常情况下，建议不配置该选项，仅异常情况下配置。 |

> ![](./public_sys-resources/icon-note.gif)**说明**
>
> - 建议使用部署集群时缓存的集群配置删除集群，即正常情况下，不建议配置 --file | -f 参数。当异常导致缓存配置破坏或者丢失时，才配置该参数。



#### 查询集群

查询当前所有通过 eggo 部署的 k8s 集群：

**eggo list** [ **-d** ]

| 参数          | 是否必选 | 参数含义     |
| ------------- | -------- | ------------ |
| --debug \| -d | 否       | 打印调试信息 |

#### 生成集群配置文件

快速生成部署 k8s 集群所需的 YAML 配置文件：

**eggo template**  **-d**  **-f** *template.yaml* **-n** *k8s-cluster* **-u** *username* **-p** *password* **--etcd** [*192.168.0.1,192.168.0.2*]  **--masters** [*192.168.0.1,192.168.0.2*] **--workers** *192.168.0.3* **--loadbalance** *192.168.0.4*

| 参数                | 是否必选 | 参数含义                        |
| ------------------- | -------- | ------------------------------- |
| --debug \| -d       | 否       | 打印调试信息                    |
| --file \| -f        | 否       | 指定生成的 YAML 文件的路径      |
| --name \| -n        | 否       | 指定 k8s 集群的名称             |
| --username \| -u    | 否       | 指定 ssh 登录所配置节点的用户名 |
| --password \| -p    | 否       | 指定 ssh 登录所配置节点的密码   |
| --etcd              | 否       | 指定 etcd 节点的 IP 列表        |
| --masters           | 否       | 指定 master 节点的 IP 列表      |
| --workers           | 否       | 指定 master 节点的 IP 列表      |
| --loadbalance \| -l | 否       | 指定 loadbalance 节点的 IP      |

#### 查询帮助信息

查询 eggo 命令的帮助信息：

 **eggo help**

#### 查询子命令帮助信息

查询 eggo 子命令的帮助信息：

**eggo deploy | join | delete | cleanup | list | template -h**

| 参数        | 是否必选 | 参数含义     |
| ----------- | -------- | ------------ |
| --help\| -h | 是       | 打印帮助信息 |