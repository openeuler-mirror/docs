# Tool Introduction

This chapter describes the information related to the automatic deployment tool. You are advised to read this chapter before deployment.

## Deployment Modes

The automatic Kubernetes cluster deployment tool provided by openEuler supports one-click deployment using the CLI. The tool provides the following deployment modes:

- Offline deployment: Prepare all required RPM packages, binary files, plugins, and container images on the local host, pack the packages into a tar.gz file in a specified format, and compile the corresponding YAML configuration file. Then, you can run commands to deploy the cluster in one-click. This deployment mode can be used when the VM cannot access the external network.
- Online deployment: Compile the YAML configuration file. The required RPM packages, binary files, plugins, and container images are automatically downloaded from the Internet during installation and deployment. In this mode, the VM must be able to access the software sources and the image repository on which the cluster depends, for example, Docker Hub.

## Configurations

When you use the automatic Kubernetes cluster deployment tool, use the YAML configuration file to describe the cluster deployment information. This section describes the configuration items and provides configuration examples.

### Configuration Items

- cluster-id: Cluster name, which must comply with the naming rules for the DNS names. Example: k8s-cluster

- username: User name used to log in to the hosts using SSH where the Kubernetes cluster is to be deployed. The user name must be identical on all hosts.

- private-key-path:The path of the key for password-free SSH login. You only need to configure either private-key-path or password. If both are configured, private-key-path is used preferentially.

- masters: The master node list. It is recommended that each master node is also set as a worker node. Each master node contains the following sub-items. Each master node must be configured with a group of sub-items:
  - name: The name of the master node, which is the node name displayed to the Kubernetes cluster.
  - ip: The IP address of the master node.
  - port: The port for SSH login of the node. The default value is 22.
  - arch: CPU architecture of the master node. For example, the value for x86_64 CPUs is amd64.
  
- workers: The list of the worker nodes. Each worker node contains the following sub-items. Each worker node must be configured with a group of sub-items:
  - name: The name of the worker node, which is the node name displayed to the Kubernetes cluster.
  - ip: The IP address of the master node.
  - port: The port for SSH login of the node. The default value is 22.
  - arch: CPU architecture of the worker node. For example, the value for x86_64 CPUs is amd64.
  
- etcds: The list of etcd nodes. If this parameter is left empty, one etcd node is deployed for each master node. Otherwise, only the configured etcd node is deployed. Each etcd node contains the following sub-items. Each etcd node must be configured with a group of sub-items:
  - name: The name of the etcd node, which is the node name displayed to the Kubernetes cluster.
  - ip: The IP address of the etcd node.
  - port: The port for SSH login.
  - arch: CPU architecture of the etcd node. For example, the value for x86_64 CPUs is amd64.
  
- loadbalance: The loadbalance node list. Each loadbalance node contains the following sub-items. Each loadbalance node must be configured with a group of sub-items:
  - name: The name of the loadbalance node, which is the node name displayed to the Kubernetes cluster.
  - ip: The IP address of the loadbalance node.
  - port: The port for SSH login.
  - arch: CPU architecture of the loadbalance node. For example, the value for x86_64 CPUs is amd64.
  - bind-port: The listening port of the load balancing service.
  
- external-ca: Whether to use an external CA certificate. If yes, set this parameter to true. Otherwise, set this parameter to false.

- external-ca-path: The path of the external CA certificate file. This parameter takes affect only when external-ca is set to true.

- service: service information created by Kubernetes. The service configuration item contains the following sub-items:
  - cidr: The IP address segment of the service created by Kubernetes.
  - dnsaddr: DNS address of the service created by Kubernetes
  -  gateway: The gateway address of the service created by Kubernetes.
  - dns: The configuration item of the CoreDNS created by Kubernetes. The dns configuration item contains the following sub-items:
    - corednstype: The deployment type of the CoreDNS created by Kubernetes. The value can be pod or binary.
    - imageversion: The CoreDNS image version of the pod deployment type.
    - replicas: The number of CoreDNS replicas of the pod deployment type.
  
- network: The network configuration of the Kubernetes cluster. The network configuration item contains the following sub-items:
  - podcidr: IP address segment of the Kubernetes cluster network.
  - plugin: The network plugin deployed in the Kubernetes cluster
  - plugin-args: The configuration file path of the network plugin of the Kubernetes cluster network. Example: {"NetworkYamlPath": "/etc/kubernetes/addons/calico.yaml"}
  
- apiserver-endpoint: The IP address or domain name of the APIServer service that can be accessed by external systems. If loadbalance is configured, set this parameter to the IP address of the loadbalance node. Otherwise, set this parameter to the IP address of the first master node.

- apiserver-cert-sans: The IP addresses and domain names that need to be configured in the APIServer certificate. This configuration item contains the following sub-items:
  - dnsnames: The array list of the domain names that need to be configured in the APIServer certificate.
  - ips: The array list of IP addresses that need to be configured in the APIServer certificate.
  
- apiserver-timeout: APIServer response timeout interval.

- etcd-token: The etcd cluster name.

- dns-vip: The virtual IP address of the DNS.

- dns-domain: The DNS domain name suffix.

- pause-image: The complete image name of the pause container.

- network-plugin: The type of the network plugin. This parameter can only be set to cni. If this item is not configured, the default Kubernetes network is used.

- cni-bin-dir: network plugin address. Use commas (,) to separate multiple addresses. For example: /usr/libexec/cni,/opt/cni/bin.

- runtime: The type of the container runtime. Currently, docker and iSulad are supported.

- runtime-endpoint: The endpoint of the container runtime. This parameter is optional when runtime is set to docker.

- registry-mirrors: The mirror site address of the image repository used for downloading container images.

- insecure-registries: The address of the image repository used for downloading container images through HTTP.

- config-extra-args: The extra parameters for starting services of each component (such as kube-apiserver and etcd). This configuration item contains the following sub-items:
  - name: The component name. The value can be etcd, kube-apiserver, kube-controller-manager, kube-scheduler, kube-proxy or kubelet.

  - extra-args: The extended parameters of the component. The format is key: value. Note that the component parameter corresponding to key must be prefixed with a hyphen (-) or two hyphens (--).

  - open-ports: Configure the ports that need to be enabled additionally. The ports required by Kubernetes do not need to be configured. Other plugin ports need to be configured additionally.
      - worker | master | etcd | loadbalance: The type of the node where the ports are enabled. Each configuration item contains one or more port and protocol sub-items.
          - port: The port address.
          - protocol: The port type. The value can be tcp or udp.
      
  - install: Configure the detailed information about the installation packages or binary files to be installed on each type of nodes. Note that the corresponding files must be packaged in a tar.gz installation package. The following describes the full configuration. Select the configuration items as needed.
      - package-source: The detailed information about the installation package.
          - type: The compression type of the installation package. Currently, only tar.gz installation packages are supported.
          - dstpath: The path where the installation package is to be decompressed on the peer host. The path must be valid absolute path.
          - srcpath: The path for storing the installation packages of different architectures. The architecture must correspond to the host architecture. The path must be a valid absolute path.
              - arm64: The path of the installation package of the ARM64 architecture. This parameter is required if any ARM64 node is included in the configuration.
              - amd64: The path of the installation package of the AMD64 architecture. This parameter is required if any x86_64 node is included in the configuration.

      > ![](./public_sys-resources/icon-note.gif)**NOTE**:
      >
      > - In the install configuration item, the sub-items of etcd, kubernetes-master, kubernetes-worker, network, loadbalance, container, image, and dns are the same, that is, name, type, dst, schedule, and TimeOut. dst, schedule, and TimeOut are optional. You can determine whether to configure them based on the files to be installed. The following uses the etcd and kubernetes-master nodes as an example.

      - etcd: The list of packages or binary files to be installed on etcd nodes.
          - name: The names of the software packages or binary files to be installed. If the software package is an installation package, enter only the name and do not specify the version. During the installation, `$name*` is used for identification. Example: etcd. If there are multiple software packages, use commas (,) to separate them.
          - type: The type of the configuration item. The value can be pkg, repo, bin, file, dir, image, yaml, or shell. If type is set to repo, configure the repo source on the corresponding node.
          - dst: The path of the destination folder. This parameter is required when type is set to bin, file, or dir. It indicates the directory where a file or folder is stored. To prevent users from incorrectly configuring a path and deleting important files during cleanup, this parameter must be set to a path in the whitelist. For details, see "Whitelist Description."
      - kubernetes-master: The list of packages or binary files to be installed on the Kubernetes master nodes.
      - kubernetes-worker: The list of packages or binary files to be installed on the Kubernetes worker nodes.
      - network: The list of packages or binary files to be installed for the network.
      - loadbalance: The list of packages or binary files to be installed on the loadbalance nodes.
      - container: The list of packages or binary files to be installed for the containers.
      - image: The tar package of the container image.
      - dns: Kubernetes CoreDNS installation package. If corednstype is set to pod, this parameter is not required.
      - addition: The list of additional installation packages or binary files.
        - master: The following configurations will be installed on all master nodes.
          - name: The name of the software package or binary file to be installed.
          - type: The type of the configuration item. The value can be pkg, repo, bin, file, dir, image, yaml, or shell. If type is set to repo, configure the repo source on the corresponding node.
          - schedule: Valid only when type is set to shell. This parameter indicates when the user wants to execute the script. The value can be prejoin (before the node is added), postjoin (after the node is added), precleanup (before the node is removed), or postcleanup (after the node is removed).
          - TimeOut: The script execution timeout interval. If the execution times out, the process is forcibly stopped. The default value is 30s.
        - worker: The configurations will be installed on all worker nodes. The configuration format is the same as that of master under addition.

### Whitelist Description

The value of dst under install must match the whitelist rules. Set it to a path in the whitelist or a subdirectory of the path. The current whitelist is as follows:

- /usr/bin
- /usr/local/bin
- /opt/cni/bin
- /usr/libexec/cni
- /etc/kubernetes
- /usr/lib/systemd/system
- /etc/systemd/system
- /tmp

### Configuration Example

The following is an example of the YAML file configuration. As shown in the example, nodes of different types can be deployed on a same host, but the configurations of these nodes must be the same. For example, a master node and a worker node are deployed on test0.

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

### Installation Package Structure

For offline deployment, you need to prepare the Kubernetes software package and the related offline installation packages, and store the offline installation packages in a specific directory structure. The directory structure is as follows:

```shell
package
├── bin
├── dir
├── file
├── image
├── pkg
└── packages_notes.md
```

The preceding directories are described as follows:

- The directory structure of the offline deployment package corresponds to the package types in the cluster configuration file config. The package types include pkg, repo, bin, file, dir, image, yaml and shell.

- The bin directory stores binary files, corresponding to the bin package type.

- The dir directory stores the directory that needs to be copied to the target host. You need to configure the dst destination path, corresponding to the dir package type.

- The file directory stores three types of files: file, yaml, and shell. The file type indicates the files to be copied to the target host, and requires the dst destination path to be configured. The yaml type indicates the user-defined YAML files, which will be applied after the cluster is deployed. The shell type indicates the scripts to be executed, and requires the schedule execution time to be configured. The execution time includes prejoin (before the node is added), postjoin (after the node is added), precleanup (before the node is removed), and postcleanup (after the node is removed).

- The image directory stores the container images to be imported. The container images must be in a tar package format that is compatible with Docker (for example, images exported by Docker or isula-build).

- The pkg directory stores the rpm/deb packages to be installed, corresponding to the pkg package type. You are advised to use binary files to facilitate cross-release deployment.

### Command Reference

To utilize the cluster deployment tool provided by openEuler, use the eggo command to deploy the cluster.

#### Deploying the Kubernetes Cluster

Run the following command to deploy a Kubernetes cluster using the specified YAML configuration:

**eggo deploy** [ **-d** ]  **-f** *deploy.yaml* 

| Parameter| Mandatory (Yes/No)| Description                           |
| ------------- | -------- | --------------------------------- |
| --debug \| -d | No| Displays the debugging information.|
| --file \| -f  | Yes| Specifies the path of the YAML file for the Kubernetes cluster deployment.|

#### Adding a Single Node

Run the following command to add a specified single node to the Kubernetes cluster:

**eggo** **join** [ **-d** ]  **--id** *k8s-cluster*  [ **--type** *master,worker* ] **--arch** *arm64* **--port** *22* [ **--name** *master1*] *IP* 

| Parameter| Mandatory (Yes/No) | Description|
| ------------- | -------- | ------------------------------------------------------------ |
| --debug \| -d | No| Displays the debugging information.|
| --id          | Yes| Specifies the name of the Kubernetes cluster where the node is to be added.|
| --type \| -t  | No| Specifies the type of the node to be added. The value can be master or worker. Use commas (,) to separate multiple types. The default value is worker.|
| --arch \| -a  | Yes| Specifies the CPU architecture of the node to be added.|
| --port \| -p  | Yes| Specifies the port number for SSH login of the node to be added.|
| --name \| -n  | No| Specifies the name of the node to be added.|
| *IP*          | Yes| Actual IP address of the node to be added.|

#### Adding Multiple Nodes

Run the following command to add specified multiple nodes to the Kubernetes cluster:

**eggo** **join**  [ **-d** ]  **--id** *k8s-cluster*  **-f** *nodes.yaml*

| Parameter| Mandatory (Yes/No) | Description                           |
| ------------- | -------- | -------------------------------- |
| --debug \| -d | No| Displays the debugging information.|
| --id          | Yes| Specifies the name of the Kubernetes cluster where the nodes are to be added.|
| --file \| -f  | Yes| Specifies the path of the YAML configuration file for adding the nodes.|

#### Deleting Nodes

Run the following command to delete one or more nodes from the Kubernetes cluster:

**eggo delete**  [ **-d** ]  **--id** *k8s-cluster* *node* [*node...*]

| Parameter| Mandatory (Yes/No) | Description                               |
| ------------- | -------- | -------------------------------------------- |
| --debug \| -d | No| Displays the debugging information.|
| --id          | Yes| Specifies the name of the cluster where the one or more nodes to be deleted are located.|
| *node*        | Yes| Specifies the IP addresses or names of the one or more nodes to be deleted.|

#### Deleting the Cluster

Run the following command to delete the entire Kubernetes cluster:

**eggo cleanup**  [ **-d** ]  **--id** *k8s-cluster* [ **-f** *deploy.yaml* ]

| Parameter| Mandatory (Yes/No) | Description|
| ------------- | -------- | ------------------------------------------------------------ |
| --debug \| -d | No| Displays the debugging information.|
| --id          | Yes| Specifies the name of the Kubernetes cluster to be deleted.|
| --file \| -f  | No| Specifies the path of the YAML file for the Kubernetes cluster deletion. If this parameter is not specified, the cluster configuration cached during cluster deployment is used by default. In normal cases, you are advised not to set this parameter. Set this parameter only when an exception occurs.|

> ![](./public_sys-resources/icon-note.gif)**NOTE**:
>
> - The cluster configuration cached during cluster deployment is recommended when you delete the cluster. That is, you are advised not to set the --file | -f parameter in normal cases. Set this parameter only when the cache configuration is damaged or lost due to an exception.



#### Querying the Cluster

Run the following command to query all Kubernetes clusters deployed using eggo:

**eggo list** [ **-d** ]

| Parameter| Mandatory (Yes/No) | Description |
| ------------- | -------- | ------------ |
| --debug \| -d | No| Displays the debugging information.|

#### Generating the Cluster Configuration File

Run the following command to quickly generate the required YAML configuration file for the Kubernetes cluster deployment.

**eggo template**  **-d**  **-f** *template.yaml* **-n** *k8s-cluster* **-u** *username* **-p** *password* **--etcd** [*192.168.0.1,192.168.0.2*]  **--masters** [*192.168.0.1,192.168.0.2*] **--workers** *192.168.0.3* **--loadbalance** *192.168.0.4*

| Parameter| Mandatory (Yes/No) | Description                           |
| ------------------- | -------- | ------------------------------- |
| --debug \| -d       | No| Displays the debugging information.|
| --file \| -f        | No| Specifies the path of the generated YAML file.|
| --name \| -n        | No| Specifies the name of the Kubernetes cluster.|
| --username \| -u    | No| Specifies the user name for SSH login of the configured node.|
| --password \| -p    | No| Specifies the password for SSH login of the configured node.|
| --etcd              | No| Specifies the IP address list of the etcd nodes.|
| --masters           | No| Specifies the IP address list of the master nodes.|
| --workers           | No| Specifies the IP address list of the worker nodes.|
| --loadbalance \| -l | No| Specifies the IP address of the loadbalance node.|

#### Querying the Help Information

Run the following command to query the help information of the eggo command:

 **eggo help**

#### Querying the Help Information of Subcommands

Run the following command to query the help information of the eggo subcommands:

**eggo deploy | join | delete | cleanup | list | template -h**

| Parameter| Mandatory (Yes/No) | Description |
| ----------- | -------- | ------------ |
| --help\| -h | Yes| Displays the help information.|
