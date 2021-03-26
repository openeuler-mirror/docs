# openEuler部署Kubernetes集群

[[toc]]

**该章节为非商用配置，仅供实验室环境测试和试用。**

## 背景

本文为在openEuler操作系统上，通过二进制部署K8S集群提供一个参考。

## 说明

- 所有操作均使用`root`权限执行；
- 本文仅适用于实验和学习环境，不适用于商用环境；

## 集群状态说明

集群结构：本文使用的集群为6个`openEuler 21.03`系统的虚拟机，3个master和3个node节点；

物理机：`openEuler 21.03`的`X86/ARM`服务器；

## 准备虚拟机

如果已有虚拟机，可以跳过本章节。

本文使用virt manager安装虚拟机。

### 安装依赖工具

```bash
# 如果需要代理，请配置代理
$ dnf install virt-install virt-manager libvirt-daemon-qemu edk2-aarch64.noarch virt-viewer
$ systemctl start libvirtd
$ systemctl enable libvirtd
```

### 准备虚拟机磁盘文件

```bash
$ dnf install -y qemu-img
$ virsh pool-define-as vmPool --type dir --target /mnt/vm/images/
$ virsh pool-build vmPool
$ virsh pool-start vmPool
$ virsh pool-autostart  vmPool
$ virsh vol-create-as --pool vmPool --name master0.img --capacity 200G --allocation 1G --format qcow2
$ virsh vol-create-as --pool vmPool --name master1.img --capacity 200G --allocation 1G --format qcow2
$ virsh vol-create-as --pool vmPool --name master2.img --capacity 200G --allocation 1G --format qcow2
$ virsh vol-create-as --pool vmPool --name node1.img --capacity 300G --allocation 1G --format qcow2
$ virsh vol-create-as --pool vmPool --name node2.img --capacity 300G --allocation 1G --format qcow2
$ virsh vol-create-as --pool vmPool --name node3.img --capacity 300G --allocation 1G --format qcow2
```

### 打开vnc的防火墙端口

```bash
# 本文是从5900端口开始，根据netstat -lntup | grep qemu-kvm可以查询你的端口
$ firewall-cmd --zone=public --add-port=5900/tcp
$ firewall-cmd --zone=public --add-port=5901/tcp
$ firewall-cmd --zone=public --add-port=5902/tcp
$ firewall-cmd --zone=public --add-port=5903/tcp
$ firewall-cmd --zone=public --add-port=5904/tcp
$ firewall-cmd --zone=public --add-port=5905/tcp
# 或者直接关闭防火墙
$ systemctl stop firewalld
```

### 准备虚拟机配置文件

以虚拟机hostname为k8smaster0的节点为例，其他配置参考即可。

```bash
# cat master.xml

<domain type='kvm'>
    <name>k8smaster0</name>
    <memory unit='GiB'>8</memory>
    <vcpu>8</vcpu>
    <os>
	<type arch='aarch64' machine='virt'>hvm</type>
	<loader readonly='yes' type='pflash'>/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw</loader>
	<nvram>/var/lib/libvirt/qemu/nvram/k8smaster0.fd</nvram>
    </os>
    <features>
	<acpi/>
	<gic version='3'/>
    </features>
    <cpu mode='host-passthrough'>
        <topology sockets='2' cores='4' threads='1'/>
    </cpu>
    <iothreads>1</iothreads>
    <clock offset='utc'/>
    <on_poweroff>destroy</on_poweroff>
    <on_reboot>restart</on_reboot>
    <on_crash>restart</on_crash>
    <devices>
	<emulator>/usr/libexec/qemu-kvm</emulator>
	<disk type='file' device='disk'>
	    <driver name='qemu' type='qcow2' iothread="1"/>
	    <source file='/mnt/vm/images/master0.img'/>
	    <target dev='vda' bus='virtio'/>
	    <boot order='1'/>
	</disk>
	<disk type='file' device='cdrom'>
	    <driver name='qemu' type='raw'/>
	    <source file='/mnt/openEuler-21.03-everything-aarch64-dvd.iso'/>
	    <readonly/>
	    <target dev='sdb' bus='scsi'/>
	    <boot order='2'/>
	</disk>
        <interface type='network'>
           <mac address='52:54:00:00:00:80'/>
           <source network='default'/>
           <model type='virtio'/>
        </interface>
	<console type='pty'/>
        <video>
           <model type='virtio'/>
        </video>
        <controller type='scsi' index='0' model='virtio-scsi'/>
	<controller type='usb' model='ehci'/>
	<input type='tablet' bus='usb'/>
	<input type='keyboard' bus='usb'/>
	<graphics type='vnc' listen='0.0.0.0'/>
    </devices>
    <seclabel type='dynamic' model='dac' relabel='yes'/>
</domain>
```

*新增虚拟机需要适配修改的点如下：*

- name  -->  `k8smaster0`，作为虚拟机hostname；
- nvram  -->  `/var/lib/libvirt/qemu/nvram/k8smaster0.fd`，nvram的句柄文件路径，需要全局唯一；
- disk的source路径  --> `/mnt/vm/images/master0.img`，虚拟机磁盘文件路径；
- interface的mac地址  --> `52:54:00:00:00:80`；

由于上述的配置必须是唯一的，因此需要修改保证其唯一性。

**注意：虚拟机名称尽量使用小写**

### 安装虚拟机

```bash
$ virsh define master.xml
$ virsh start k8smaster0
# 获取虚拟机的vnc端口号
$ virsh vncdisplay k8smaster0

# 使用vncview工具远程链接虚拟机，根据提示依次选择配置，安装系统即可

# 设置虚拟机hostname
$ hostnamectl set-hostname k8smaster0
```

## 部署K8S

通过上述虚拟机安装部署，获得如下虚拟机列表：

| HostName   | MAC               | IPV4               |
| ---------- | ----------------- | ------------------ |
| k8smaster0 | 52:54:00:00:00:80 | 192.168.122.154/24 |
| k8smaster1 | 52:54:00:00:00:81 | 192.168.122.155/24 |
| k8smaster2 | 52:54:00:00:00:82 | 192.168.122.156/24 |
| k8snode1   | 52:54:00:00:00:83 | 192.168.122.157/24 |
| k8snode2   | 52:54:00:00:00:84 | 192.168.122.158/24 |
| k8snode3   | 52:54:00:00:00:85 | 192.168.122.159/24 |

### 安装K8S包

```bash
$ dnf install -y docker conntrack-tools socat
# EPOL之后，可以直接通过dnf安装k8s
$ rpm -ivh kubernetes*.rpm
```

### 准备证书

为了部署集群，第一步需要生成集群组件间使用的证书。本文使用开源cfssl做为当前验证部署工作，主要目的用于了解证书的配置和集群组件之间证书关联关系等。其他的证书工具例如openssl也可以。

**注意：本文使用的证书为自签名，不能用于真实商用环境！！！**

#### 编译安装cfssl

```bash
# 内网需要配置代理
$ wget --no-check-certificate  https://github.com/cloudflare/cfssl/archive/v1.5.0.tar.gz
$ tar -zxf v1.5.0.tar.gz
$ cd cfssl-1.5.0/
$ make -j6
$ cp bin/* /usr/local/bin/
```

#### 生成根证书

编写ca config文件，如下：

```bash
$ cat ca-config.json | jq
{
  "signing": {
    "default": {
      "expiry": "8760h"
    },
    "profiles": {
      "kubernetes": {
        "usages": [
          "signing",
          "key encipherment",
          "server auth",
          "client auth"
        ],
        "expiry": "8760h"
      }
    }
  }
}
```

编写ca csr文件，如下：

```bash
$ cat ca-csr.json  | jq
{
  "CN": "Kubernetes",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "HangZhou",
      "O": "openEuler",
      "OU": "WWW",
      "ST": "BinJiang"
    }
  ]
}
```

生成ca证书和密钥：
```bash
$ cfssl gencert -initca ca-csr.json | cfssljson -bare ca
```

得到如下证书：

```bash
ca.csr  ca-key.pem  ca.pem
```

#### 生成admin账户证书

admin是K8S用于系统管理的一个账户，编写admin账户的csr配置：
```bash
cat admin-csr.json | jq
{
  "CN": "admin",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "HangZhou",
      "O": "system:masters",
      "OU": "Containerum",
      "ST": "BinJiang"
    }
  ]
}
```

生成证书：
```bash
$ cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes admin-csr.json | cfssljson -bare admin
```

结果如下：
```bash
admin.csr  admin-key.pem  admin.pem
```

#### 生成service-account账户证书

编写service-account账户的csr配置：
```bash
cat service-account-csr.json | jq
{
  "CN": "service-accounts",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "HangZhou",
      "O": "Kubernetes",
      "OU": "openEuler k8s install",
      "ST": "BinJiang"
    }
  ]
}
```

生成证书：
```bash
$ cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -profile=kubernetes service-account-csr.json | cfssljson -bare service-account
```

结果如下：
```bash
service-account.csr  service-account-key.pem  service-account.pem
```

#### 生成kube-controller-manager组件证书

编写kube-controller-manager的csr配置：
```bash
{
  "CN": "system:kube-controller-manager",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "HangZhou",
      "O": "system:kube-controller-manager",
      "OU": "openEuler k8s kcm",
      "ST": "BinJiang"
    }
  ]
}
```

生成证书：
```bash
$ cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json-profile=kubernetes kube-controller-manager-csr.json | cfssljson -bare kube-controller-manager
```

结果如下：
```bash
kube-controller-manager.csr  kube-controller-manager-key.pem  kube-controller-manager.pem
```

#### 生成kube-proxy证书

编写kube-proxy的csr配置：
```bash
{
  "CN": "system:kube-proxy",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "HangZhou",
      "O": "system:node-proxier",
      "OU": "openEuler k8s kube proxy",
      "ST": "BinJiang"
    }
  ]
}
```

生成证书：
```bash
$ cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -profile=kubernetes kube-proxy-csr.json | cfssljson -bare kube-proxy
```

结果如下：
```bash
kube-proxy.csr  kube-proxy-key.pem  kube-proxy.pem
```

#### 生成kube-scheduler证书

编写kube-scheduler的csr配置：
```bash
{
  "CN": "system:kube-scheduler",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "HangZhou",
      "O": "system:kube-scheduler",
      "OU": "openEuler k8s kube scheduler",
      "ST": "BinJiang"
    }
  ]
}
```

生成证书：
```bash
$ cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -profile=kubernetes kube-scheduler-csr.json | cfssljson -bare kube-scheduler
```

结果如下：
```bash
kube-scheduler.csr  kube-scheduler-key.pem  kube-scheduler.pem
```

#### 生成kubelet证书

由于证书涉及到kubelet所在机器的hostname和IP地址信息，因此每个node节点配置不尽相同，所以编写脚本完成，生成脚本如下：
```bash
$ cat node_csr_gen.bash

#!/bin/bash

nodes=(k8snode1 k8snode2 k8snode3)
IPs=("192.168.122.157" "192.168.122.158" "192.168.122.159")

for i in "${!nodes[@]}"; do

cat > "${nodes[$i]}-csr.json" <<EOF
{
  "CN": "system:node:${nodes[$i]}",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "HangZhou",
      "O": "system:nodes",
      "OU": "openEuler k8s kubelet",
      "ST": "BinJiang"
    }
  ]
}
EOF

	# generate ca
	echo "generate: ${nodes[$i]} ${IPs[$i]}"
	cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -hostname=${nodes[$i]},${IPs[$i]}-profile=kubernetes ${nodes[$i]}-csr.json | cfssljson -bare ${nodes[$i]}
done
```

*注意：如果节点存在多个IP或者其他别名，-hostname可以增加其他的IP或者hostname*

结果如下：
```bash
k8snode1.csr       k8snode1.pem       k8snode2-key.pem  k8snode3-csr.json
k8snode1-csr.json  k8snode2.csr       k8snode2.pem      k8snode3-key.pem
k8snode1-key.pem   k8snode2-csr.json  k8snode3.csr      k8snode3.pem
```

csr配置信息，以k8snode1为例如下：
```bash
$ cat k8snode1-csr.json
{
  "CN": "system:node:k8snode1",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "HangZhou",
      "O": "system:nodes",
      "OU": "openEuler k8s kubelet",
      "ST": "BinJiang"
    }
  ]
}
```

注意：由于每个node所属的账户组为`system:node`，因此csr的CN字段都为`system:node`加上`hostname`。

#### 生成kube-apiserver证书

编写kube api server的csr配置文件：
```bash
$ cat kubernetes-csr.json | jq
{
  "CN": "kubernetes",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "HangZhou",
      "O": "Kubernetes",
      "OU": "openEuler k8s kube api server",
      "ST": "BinJiang"
    }
  ]
}
```

生成证书和密钥：
```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -hostname=10.32.0.1,192.168.122.154,192.168.122.155,192.168.122.156,127.0.0.1,kubernetes,kubernetes.default,kubernetes.default.svc,kubernetes.default.svc.cluster,kubernetes.svc.cluster.local -profile=kubernetes kubernetes-csr.json | cfssljson -bare kubernetes
```

结果如下：
```bash
kubernetes.csr  kubernetes-key.pem  kubernetes.pem
```

*注意：10.32.0.1是内部services使用的ip地址区间，可以设置为其他值，后面启动apiserver服务时，会设置该参数。*

#### 生成etcd证书（可选）

etcd部署，有两种方式：
- 在每个api-server对应的机器都启动一个etcd服务；
- 独立部署一个etcd集群服务；

如果是和api-server一起部署，那么直接使用上面生成的`kubernetes-key.pem  kubernetes.pem`证书即可；

如果是独立的etcd集群，那么需要创建证书如下：

编写etcd的csr配置：
```bash
cat etcd-csr.json | jq
{
  "CN": "ETCD",
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "HangZhou",
      "O": "ETCD",
      "OU": "openEuler k8s etcd",
      "ST": "BinJiang"
    }
  ]
}
```

生成证书：
```bash
$ cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -hostname=192.168.122.154,192.168.122.155,192.168.122.156,127.0.0.1 -profile=kubernetes etcd-csr.json | cfssljson -bare etcd
```

*注意：假设etcd集群的IP地址是192.168.122.154,192.168.122.155,192.168.122.156*

结果如下：
```bash
etcd.csr  etcd-key.pem  etcd.pem
```

### 安装etcd

#### 准备环境

使能etcd使用的端口：
```bash
firewall-cmd --zone=public --add-port=2379/tcp
firewall-cmd --zone=public --add-port=2380/tcp
```

#### 安装etcd二进制

当前是通过rpm包安装`rpm -ivh etcd*.rpm`

准备目录，

```bash
mkdir -p /etc/etcd /var/lib/etcd
cp ca.pem /etc/etcd/
cp kubernetes-key.pem /etc/etcd/
cp kubernetes.pem /etc/etcd/
# 关闭selinux
setenforce 0
# 禁用/etc/etcd/etcd.conf文件的默认配置
# 注释掉即可，例如：ETCD_LISTEN_CLIENT_URLS="http://localhost:2379"
```

#### 编写etcd.service文件

以`k8smaster0`机器为例：

```bash
$ cat /usr/lib/systemd/system/etcd.service
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
WorkingDirectory=/var/lib/etcd/
EnvironmentFile=-/etc/etcd/etcd.conf
# set GOMAXPROCS to number of processors
ExecStart=/bin/bash -c "ETCD_UNSUPPORTED_ARCH=arm64 /usr/bin/etcd --name=k8smaster0 --cert-file=/etc/etcd/kubernetes.pem --key-file=/etc/etcd/kubernetes-key.pem --peer-cert-file=/etc/etcd/kubernetes.pem --peer-key-file=/etc/etcd/kubernetes-key.pem --trusted-ca-file=/etc/etcd/ca.pem --peer-trusted-ca-file=/etc/etcd/ca.pem --peer-client-cert-auth --client-cert-auth --initial-advertise-peer-urls https://192.168.122.154:2380 --listen-peer-urls https://192.168.122.154:2380 --listen-client-urls https://192.168.122.154:2379,https://127.0.0.1:2379 --advertise-client-urls https://192.168.122.154:2379 --initial-cluster-token etcd-cluster-0 --initial-cluster k8smaster0=https://192.168.122.154:2380,k8smaster1=https://192.168.122.155:2380,k8smaster2=https://192.168.122.156:2380 --initial-cluster-state new --data-dir /var/lib/etcd"

Restart=always
RestartSec=10s
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

**注意:**

- arm64上面需要增加启动设置`ETCD_UNSUPPORTED_ARCH=arm64`；
- 由于本文把etcd和k8s control部署在相同机器，所以使用了`kubernetes.pem`和`kubernetes-key.pem`证书来启动；
- ca证书，在整个部署流程里面使用了一个，etcd可以生成自己的ca，然后用自己的ca签名其他证书，但是需要在apiserver访问etcd的client用该ca签名的证书；
- `initial-cluster`需要把所有部署etcd的配置加上；
- 为了提高etcd的存储效率，可以使用ssd硬盘的目录，作为`data-dir`；

启动服务

```bash
$ systemctl enable etcd
$ systemctl start etcd
```

然后，依次部署其他机器即可。

#### 验证基本功能

```bash
$  ETCDCTL_API=3 etcdctl -w table endpoint status --endpoints=https://192.168.122.155:2379,https://192.168.122.156:2379,https://192.168.122.154:2379   --cacert=/etc/etcd/ca.pem   --cert=/etc/etcd/kubernetes.pem   --key=/etc/etcd/kubernetes-key.pem
+------------------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
|           ENDPOINT           |        ID        | VERSION | DB SIZE | IS LEADER | IS LEARNER | RAFT TERM | RAFT INDEX | RAFTAPPLIED INDEX | ERRORS |
+------------------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
| https://192.168.122.155:2379 | b50ec873e253ebaa |  3.4.14 |  262 kB |     false |      false |       819 |         21 |           21 |        |
| https://192.168.122.156:2379 | e2b0d126774c6d02 |  3.4.14 |  262 kB |      true |      false |       819 |         21 |           21 |        |
| https://192.168.122.154:2379 | f93b3808e944c379 |  3.4.14 |  328 kB |     false |      false |       819 |         21 |           21 |        |
+------------------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
```

### 部署控制面组件

#### 准备所有组件的kubeconfig

##### kube-proxy

```bash
$ kubectl config set-cluster openeuler-k8s --certificate-authority=/etc/kubernetes/pki/ca.pem --embed-certs=true --server=https://192.168.122.154:6443 --kubeconfig=kube-proxy.kubeconfig
$ kubectl config set-credentials system:kube-proxy --client-certificate=/etc/kubernetes/pki/kube-proxy.pem --client-key=/etc/kubernetes/pki/kube-proxy-key.pem --embed-certs=true --kubeconfig=kube-proxy.kubeconfig
$ kubectl config set-context default --cluster=openeuler-k8s --user=system:kube-proxy --kubeconfig=kube-proxy.kubeconfig
$ kubectl config use-context default --kubeconfig=kube-proxy.kubeconfig
```

##### kube-controller-manager

```bash
$ kubectl config set-cluster openeuler-k8s --certificate-authority=/etc/kubernetes/pki/ca.pem --embed-certs=true --server=https://127.0.0.1:6443 --kubeconfig=kube-controller-manager.kubeconfig
$ kubectl config set-credentials system:kube-controller-manager --client-certificate=/etc/kubernetes/pki/kube-controller-manager.pem --client-key=/etc/kubernetes/pki/kube-controller-manager-key.pem --embed-certs=true --kubeconfig=kube-controller-manager.kubeconfig
$ kubectl config set-context default --cluster=openeuler-k8s --user=system:kube-controller-manager --kubeconfig=kube-controller-manager.kubeconfig
$ kubectl config use-context default --kubeconfig=kube-controller-manager.kubeconfig
```

##### kube-scheduler

```bash
$ kubectl config set-cluster openeuler-k8s --certificate-authority=/etc/kubernetes/pki/ca.pem --embed-certs=true --server=https://127.0.0.1:6443 --kubeconfig=kube-scheduler.kubeconfig
$ kubectl config set-credentials system:kube-scheduler --client-certificate=/etc/kubernetes/pki/kube-scheduler.pem --client-key=/etc/kubernetes/pki/kube-scheduler-key.pem --embed-certs=true --kubeconfig=kube-scheduler.kubeconfig
$ kubectl config set-context default  --cluster=openeuler-k8s --user=system:kube-scheduler --kubeconfig=kube-scheduler.kubeconfig
$ kubectl config use-context default --kubeconfig=kube-scheduler.kubeconfig
```

##### admin

```bash
$ kubectl config set-cluster openeuler-k8s --certificate-authority=/etc/kubernetes/pki/ca.pem --embed-certs=true --server=https://127.0.0.1:6443 --kubeconfig=admin.kubeconfig
$ kubectl config set-credentials admin --client-certificate=/etc/kubernetes/pki/admin.pem --client-key=/etc/kubernetes/pki/admin-key.pem --embed-certs=true --kubeconfig=admin.kubeconfig
$ kubectl config set-context default --cluster=openeuler-k8s --user=admin --kubeconfig=admin.kubeconfig
$ kubectl config use-context default --kubeconfig=admin.kubeconfig
```

##### 获得相关kubeconfig配置文件

```bash
admin.kubeconfig kube-proxy.kubeconfig  kube-controller-manager.kubeconfig  kube-scheduler.kubeconfig
```

#### 生成密钥提供者的配置

api-server启动时需要提供一个密钥对`--encryption-provider-config=/etc/kubernetes/pki/encryption-config.yaml`，本文通过urandom生成一个：

```bash
$ cat generate.bash
#!/bin/bash

ENCRYPTION_KEY=$(head -c 32 /dev/urandom | base64)

cat > encryption-config.yaml <<EOF
kind: EncryptionConfig
apiVersion: v1
resources:
  - resources:
      - secrets
    providers:
      - aescbc:
          keys:
            - name: key1
              secret: ${ENCRYPTION_KEY}
      - identity: {}
EOF
# api-server启动配置 --encryption-provider-config=/etc/kubernetes/pki/encryption-config.yaml
```

#### 拷贝证书

本文把所有组件使用的证书、密钥以及配置统一放到`/etc/kubernetes/pki/`目录下。

```bash
# 准备证书目录
$ mkdir -p /etc/kubernetes/pki/
$ ls /etc/kubernetes/pki/
admin-key.pem  encryption-config.yaml              kube-proxy-key.pem     kubernetes.pem             service-account-key.pem
admin.pem      kube-controller-manager-key.pem     kube-proxy.kubeconfig  kube-scheduler-key.pem     service-account.pem
ca-key.pem     kube-controller-manager.kubeconfig  kube-proxy.pem         kube-scheduler.kubeconfig
ca.pem         kube-controller-manager.pem         kubernetes-key.pem     kube-scheduler.pem
```

#### 部署admin角色的RBAC

使能admin role
```bash
$ cat admin_cluster_role.yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  annotations:
    rbac.authorization.kubernetes.io/autoupdate: "true"
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
  name: system:kube-apiserver-to-kubelet
rules:
  - apiGroups:
      - ""
    resources:
      - nodes/proxy
      - nodes/stats
      - nodes/log
      - nodes/spec
      - nodes/metrics
    verbs:
      - "*"

# 使能admin role 
$ kubectl apply --kubeconfig admin.kubeconfig -f admin_cluster_role.yaml
```

绑定admin role
```bash
$ cat admin_cluster_rolebind.yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: system:kube-apiserver
  namespace: ""
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:kube-apiserver-to-kubelet
subjects:
  - apiGroup: rbac.authorization.k8s.io
    kind: User
    name: kubernetes

# 绑定admin role
$ kubectl apply --kubeconfig admin.kubeconfig -f admin_cluster_rolebind.yaml
```

#### 部署api server服务

修改apiserver的etc配置文件：
```bash
$ cat /etc/kubernetes/apiserver
KUBE_ADVERTIS_ADDRESS="--advertise-address=192.168.122.154"
KUBE_ALLOW_PRIVILEGED="--allow-privileged=true"
KUBE_AUTHORIZATION_MODE="--authorization-mode=Node,RBAC"
KUBE_ENABLE_ADMISSION_PLUGINS="--enable-admission-plugins=NamespaceLifecycle,NodeRestriction,LimitRanger,ServiceAccount,DefaultStorageClass,ResourceQuota"
KUBE_SECURE_PORT="--secure-port=6443"
KUBE_ENABLE_BOOTSTRAP_TOKEN_AUTH="--enable-bootstrap-token-auth=true"
KUBE_ETCD_CAFILE="--etcd-cafile=/etc/kubernetes/pki/ca.pem"
KUBE_ETCD_CERTFILE="--etcd-certfile=/etc/kubernetes/pki/kubernetes.pem"
KUBE_ETCD_KEYFILE="--etcd-keyfile=/etc/kubernetes/pki/kubernetes-key.pem"
KUBE_ETCD_SERVERS="--etcd-servers=https://192.168.122.154:2379,https://192.168.122.155:2379,https://192.168.122.156:2379"
KUBE_CLIENT_CA_FILE="--client-ca-file=/etc/kubernetes/pki/ca.pem"
KUBE_KUBELET_CERT_AUTH="--kubelet-certificate-authority=/etc/kubernetes/pki/ca.pem"
KUBE_KUBELET_CLIENT_CERT="--kubelet-client-certificate=/etc/kubernetes/pki/kubernetes.pem"
KUBE_KUBELET_CLIENT_KEY="--kubelet-client-key=/etc/kubernetes/pki/kubernetes-key.pem"
KUBE_KUBELET_HTTPS="--kubelet-https=true"
KUBE_PROXY_CLIENT_CERT_FILE="--proxy-client-cert-file=/etc/kubernetes/pki/kube-proxy.pem"
KUBE_PROXY_CLIENT_KEY_FILE="--proxy-client-key-file=/etc/kubernetes/pki/kube-proxy-key.pem"
KUBE_TLS_CERT_FILE="--tls-cert-file=/etc/kubernetes/pki/kubernetes.pem"
KUBE_TLS_PRIVATE_KEY_FILE="--tls-private-key-file=/etc/kubernetes/pki/kubernetes-key.pem"
KUBE_SERVICE_CLUSTER_IP_RANGE="--service-cluster-ip-range=10.32.0.0/16"
KUBE_SERVICE_ACCOUNT_ISSUER="--service-account-issuer=https://kubernetes.default.svc.cluster.local"
KUBE_SERVICE_ACCOUNT_KEY_FILE="--service-account-key-file=/etc/kubernetes/pki/service-account.pem"
KUBE_SERVICE_ACCOUNT_SIGN_KEY_FILE="--service-account-signing-key-file=/etc/kubernetes/pki/service-account-key.pem"
KUBE_SERVICE_NODE_PORT_RANGE="--service-node-port-range=30000-32767"
KUB_ENCRYPTION_PROVIDER_CONF="--encryption-provider-config=/etc/kubernetes/pki/encryption-config.yaml"
KUBE_REQUEST_HEADER_ALLOWED_NAME="--requestheader-allowed-names=front-proxy-client"
KUBE_REQUEST_HEADER_EXTRA_HEADER_PREF="--requestheader-extra-headers-prefix=X-Remote-Extra-"
KUBE_REQUEST_HEADER_GROUP_HEADER="--requestheader-group-headers=X-Remote-Group"
KUBE_REQUEST_HEADER_USERNAME_HEADER="--requestheader-username-headers=X-Remote-User"
KUBE_API_ARGS=""
```

所有apiserver的配置都`/etc/kubernetes/config`文件中定义，然后在后面的service文件中直接使用即可。

大部分配置都是比较固定的，部分需要注意：

- `--service-cluster-ip-range`该地址需要和后面的设置的`clusterDNS`需要一致；

##### 编写apiserver的systemd配置

```bash
cat /usr/lib/systemd/system/kube-apiserver.service
[Unit]
Description=Kubernetes API Server
Documentation=https://kubernetes.io/docs/reference/generated/kube-apiserver/
After=network.target
After=etcd.service

[Service]
EnvironmentFile=-/etc/kubernetes/config
EnvironmentFile=-/etc/kubernetes/apiserver
ExecStart=/usr/bin/kube-apiserver \
	    $KUBE_ADVERTIS_ADDRESS \
	    $KUBE_ALLOW_PRIVILEGED \
	    $KUBE_AUTHORIZATION_MODE \
	    $KUBE_ENABLE_ADMISSION_PLUGINS \
 	    $KUBE_SECURE_PORT \
	    $KUBE_ENABLE_BOOTSTRAP_TOKEN_AUTH \
	    $KUBE_ETCD_CAFILE \
	    $KUBE_ETCD_CERTFILE \
	    $KUBE_ETCD_KEYFILE \
	    $KUBE_ETCD_SERVERS \
	    $KUBE_CLIENT_CA_FILE \
	    $KUBE_KUBELET_CERT_AUTH \
	    $KUBE_KUBELET_CLIENT_CERT \
	    $KUBE_KUBELET_CLIENT_KEY \
	    $KUBE_PROXY_CLIENT_CERT_FILE \
	    $KUBE_PROXY_CLIENT_KEY_FILE \
	    $KUBE_TLS_CERT_FILE \
	    $KUBE_TLS_PRIVATE_KEY_FILE \
	    $KUBE_SERVICE_CLUSTER_IP_RANGE \
	    $KUBE_SERVICE_ACCOUNT_ISSUER \
	    $KUBE_SERVICE_ACCOUNT_KEY_FILE \
	    $KUBE_SERVICE_ACCOUNT_SIGN_KEY_FILE \
	    $KUBE_SERVICE_NODE_PORT_RANGE \
	    $KUBE_LOGTOSTDERR \
	    $KUBE_LOG_LEVEL \
	    $KUBE_API_PORT \
	    $KUBELET_PORT \
	    $KUBE_ALLOW_PRIV \
	    $KUBE_SERVICE_ADDRESSES \
	    $KUBE_ADMISSION_CONTROL \
	    $KUB_ENCRYPTION_PROVIDER_CONF \
	    $KUBE_REQUEST_HEADER_ALLOWED_NAME \
	    $KUBE_REQUEST_HEADER_EXTRA_HEADER_PREF \
	    $KUBE_REQUEST_HEADER_GROUP_HEADER \
	    $KUBE_REQUEST_HEADER_USERNAME_HEADER \
	    $KUBE_API_ARGS
Restart=on-failure
Type=notify
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

#### 部署controller-manager服务

修改controller-manager配置文件：
```bash
$ cat /etc/kubernetes/controller-manager
KUBE_BIND_ADDRESS="--bind-address=127.0.0.1"
KUBE_CLUSTER_CIDR="--cluster-cidr=10.200.0.0/16"
KUBE_CLUSTER_NAME="--cluster-name=kubernetes"
KUBE_CLUSTER_SIGNING_CERT_FILE="--cluster-signing-cert-file=/etc/kubernetes/pki/ca.pem"
KUBE_CLUSTER_SIGNING_KEY_FILE="--cluster-signing-key-file=/etc/kubernetes/pki/ca-key.pem"
KUBE_KUBECONFIG="--kubeconfig=/etc/kubernetes/pki/kube-controller-manager.kubeconfig"
KUBE_LEADER_ELECT="--leader-elect=true"
KUBE_ROOT_CA_FILE="--root-ca-file=/etc/kubernetes/pki/ca.pem"
KUBE_SERVICE_ACCOUNT_PRIVATE_KEY_FILE="--service-account-private-key-file=/etc/kubernetes/pki/service-account-key.pem"
KUBE_SERVICE_CLUSTER_IP_RANGE="--service-cluster-ip-range=10.32.0.0/24"
KUBE_USE_SERVICE_ACCOUNT_CRED="--use-service-account-credentials=true"
KUBE_CONTROLLER_MANAGER_ARGS="--v=2"
```

##### 编写controller-manager的systemd配置文件

```bash
$ cat /usr/lib/systemd/system/kube-controller-manager.service
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://kubernetes.io/docs/reference/generated/kube-controller-manager/

[Service]
EnvironmentFile=-/etc/kubernetes/config
EnvironmentFile=-/etc/kubernetes/controller-manager
ExecStart=/usr/bin/kube-controller-manager \
	    $KUBE_BIND_ADDRESS \
	    $KUBE_LOGTOSTDERR \
	    $KUBE_LOG_LEVEL \
	    $KUBE_CLUSTER_CIDR \
	    $KUBE_CLUSTER_NAME \
	    $KUBE_CLUSTER_SIGNING_CERT_FILE \
	    $KUBE_CLUSTER_SIGNING_KEY_FILE \
	    $KUBE_KUBECONFIG \
	    $KUBE_LEADER_ELECT \
	    $KUBE_ROOT_CA_FILE \
	    $KUBE_SERVICE_ACCOUNT_PRIVATE_KEY_FILE \
	    $KUBE_SERVICE_CLUSTER_IP_RANGE \
	    $KUBE_USE_SERVICE_ACCOUNT_CRED \
	    $KUBE_CONTROLLER_MANAGER_ARGS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

#### 部署scheduler服务

修改scheduler配置文件：
```bash
$ cat /etc/kubernetes/scheduler
KUBE_CONFIG="--kubeconfig=/etc/kubernetes/pki/kube-scheduler.kubeconfig"
KUBE_AUTHENTICATION_KUBE_CONF="--authentication-kubeconfig=/etc/kubernetes/pki/kube-scheduler.kubeconfig"
KUBE_AUTHORIZATION_KUBE_CONF="--authorization-kubeconfig=/etc/kubernetes/pki/kube-scheduler.kubeconfig"
KUBE_BIND_ADDR="--bind-address=127.0.0.1"
KUBE_LEADER_ELECT="--leader-elect=true"
KUBE_SCHEDULER_ARGS=""
```

##### 编写scheduler的systemd配置文件

```bash
$ cat /usr/lib/systemd/system/kube-scheduler.service
[Unit]
Description=Kubernetes Scheduler Plugin
Documentation=https://kubernetes.io/docs/reference/generated/kube-scheduler/

[Service]
EnvironmentFile=-/etc/kubernetes/config
EnvironmentFile=-/etc/kubernetes/scheduler
ExecStart=/usr/bin/kube-scheduler \
	    $KUBE_LOGTOSTDERR \
	    $KUBE_LOG_LEVEL \
	    $KUBE_CONFIG \
	    $KUBE_AUTHENTICATION_KUBE_CONF \
	    $KUBE_AUTHORIZATION_KUBE_CONF \
	    $KUBE_BIND_ADDR \
	    $KUBE_LEADER_ELECT \
	    $KUBE_SCHEDULER_ARGS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

#### 使能各组件

```bash
$ systemctl enable kube-controller-manager kube-scheduler kube-proxy
$ systemctl restart kube-controller-manager kube-scheduler kube-proxy
```

#### 基本功能验证

```bash
$ curl --cacert /etc/kubernetes/pki/ca.pem https://192.168.122.154:6443/version
{
  "major": "1",
  "minor": "20",
  "gitVersion": "v1.20.2",
  "gitCommit": "faecb196815e248d3ecfb03c680a4507229c2a56",
  "gitTreeState": "archive",
  "buildDate": "2021-03-02T07:26:14Z",
  "goVersion": "go1.15.7",
  "compiler": "gc",
  "platform": "linux/arm64"
}
```

### 部署Node节点组件

本章节仅以`k8snode1`节点为例。

#### 环境准备

```bash
# 内网需要配置代理
$ dnf install -y docker iSulad conntrack-tools socat containernetworking-plugins
$ swapoff -a
$ mkdir -p /etc/kubernetes/pki/
$ mkdir -p /etc/cni/net.d
$ mkdir -p /opt/cni
# 删除默认kubeconfig
$ rm /etc/kubernetes/kubelet.kubeconfig

#### 使用isulad作为运行时 ###########
# 配置iSulad
cat  /etc/isulad/daemon.json
{
        "registry-mirrors": [
                "docker.io"
        ],
        "insecure-registries": [
                "k8s.gcr.io",
                "quay.io"
        ],
        "pod-sandbox-image": "k8s.gcr.io/pause:3.2",# pause类型
        "network-plugin": "cni", # 置空表示禁用cni网络插件则下面两个路径失效， 安装插件后重启isulad即可
        "cni-bin-dir": "/usr/libexec/cni/",
        "cni-conf-dir": "/etc/cni/net.d",
}

# 在iSulad环境变量中添加代理，下载镜像
cat /usr/lib/systemd/system/isulad.service
[Service]
Type=notify
Environment="HTTP_PROXY=http://name:password@proxy:8080"
Environment="HTTPS_PROXY=http://name:password@proxy:8080"

# 重启iSulad并设置为开机自启
systemctl daemon-reload
systemctl restart isulad




#### 如果使用docker作为运行时 ###########
$ dnf install -y docker
# 如果需要代理的环境，可以给docker配置代理，新增配置文件http-proxy.conf，并编写如下内容，替换name，password和proxy-addr为实际的配置。
$ cat /etc/systemd/system/docker.service.d/http-proxy.conf
[Service]
Environment="HTTP_PROXY=http://name:password@proxy-addr:8080"
$ systemctl daemon-reload
$ systemctl restart docker
```

#### 创建kubeconfig配置文件

对各节点依次如下操作创建配置文件：

```bash
$ kubectl config set-cluster openeuler-k8s \
    --certificate-authority=/etc/kubernetes/pki/ca.pem \
    --embed-certs=true \
    --server=https://192.168.122.154:6443 \
    --kubeconfig=k8snode1.kubeconfig

$ kubectl config set-credentials system:node:k8snode1 \
    --client-certificate=/etc/kubernetes/pki/k8snode1.pem \
    --client-key=/etc/kubernetes/pki/k8snode1-key.pem \
    --embed-certs=true \
    --kubeconfig=k8snode1.kubeconfig

$ kubectl config set-context default \
    --cluster=openeuler-k8s \
    --user=system:node:k8snode1 \
    --kubeconfig=k8snode1.kubeconfig

$ kubectl config use-context default --kubeconfig=k8snode1.kubeconfig
```

**注：修改k8snode1为对应节点名**

#### 拷贝证书

和控制面一样，所有证书、密钥和相关配置都放到`/etc/kubernetes/pki/`目录。

```bash
$ ls /etc/kubernetes/pki/
ca.pem                 k8snode1.kubeconfig  kubelet_config.yaml     kube-proxy-key.pem     kube-proxy.pem
k8snode1-key.pem  k8snode1.pem         kube_proxy_config.yaml  kube-proxy.kubeconfig
```

#### CNI网络配置

先通过containernetworking-plugins作为kubelet使用的cni插件，后续可以引入calico，flannel等插件，增强集群的网络能力。

```bash
# 桥网络配置
$ cat /etc/cni/net.d/10-bridge.conf
{
  "cniVersion": "0.3.1",
  "name": "bridge",
  "type": "bridge",
  "bridge": "cnio0",
  "isGateway": true,
  "ipMasq": true,
  "ipam": {
    "type": "host-local",
    "subnet": "10.244.0.0/16",
    "gateway": "10.244.0.1"
  },
  "dns": {
    "nameservers": [
      "10.244.0.1"
    ]
  }
}

# 回环网络配置
$ cat /etc/cni/net.d/99-loopback.conf
{
    "cniVersion": "0.3.1",
    "name": "lo",
    "type": "loopback"
}
```

#### 部署kubelet服务

##### kubelet依赖的配置文件

```bash
$ cat /etc/kubernetes/pki/kubelet_config.yaml
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
authentication:
  anonymous:
    enabled: false
  webhook:
    enabled: true
  x509:
    clientCAFile: /etc/kubernetes/pki/ca.pem
authorization:
  mode: Webhook
clusterDNS:
- 10.32.0.10
clusterDomain: cluster.local
runtimeRequestTimeout: "15m"
tlsCertFile: "/etc/kubernetes/pki/k8snode1.pem"
tlsPrivateKeyFile: "/etc/kubernetes/pki/k8snode1-key.pem"
```

**注意：clusterDNS的地址为：10.32.0.10，必须和之前设置的service-cluster-ip-range一致**

##### 编写systemd配置文件

```bash
$ cat /usr/lib/systemd/system/kubelet.service
[Unit]
Description=kubelet: The Kubernetes Node Agent
Documentation=https://kubernetes.io/docs/
Wants=network-online.target
After=network-online.target

[Service]
ExecStart=/usr/bin/kubelet \
	--config=/etc/kubernetes/pki/kubelet_config.yaml \
	--network-plugin=cni \
	--pod-infra-container-image=k8s.gcr.io/pause:3.2 \
	--kubeconfig=/etc/kubernetes/pki/k8snode1.kubeconfig \
	--register-node=true \
	--hostname-override=k8snode1 \
	--cni-bin-dir="/usr/libexec/cni/" \
	--v=2

Restart=always
StartLimitInterval=0
RestartSec=10

[Install]
WantedBy=multi-user.target
```

**注意：如果使用isulad作为runtime，需要增加如下配置**

```bash
--container-runtime=remote \
--container-runtime-endpoint=unix:///var/run/isulad.sock \
```

#### 部署kube-proxy

##### kube-proxy依赖的配置文件

```bash
cat /etc/kubernetes/pki/kube_proxy_config.yaml
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
clientConnection:
  kubeconfig: /etc/kubernetes/pki/kube-proxy.kubeconfig
clusterCIDR: 10.244.0.0/16
mode: "iptables"
```

##### 编写systemd配置文件

```bash
$ cat /usr/lib/systemd/system/kube-proxy.service
[Unit]
Description=Kubernetes Kube-Proxy Server
Documentation=https://kubernetes.io/docs/reference/generated/kube-proxy/
After=network.target

[Service]
EnvironmentFile=-/etc/kubernetes/config
EnvironmentFile=-/etc/kubernetes/proxy
ExecStart=/usr/bin/kube-proxy \
	    $KUBE_LOGTOSTDERR \
	    $KUBE_LOG_LEVEL \
	    --config=/etc/kubernetes/pki/kube_proxy_config.yaml \
	    --hostname-override=k8snode1 \
	    $KUBE_PROXY_ARGS
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

#### 启动组件服务

```bash
$ systemctl enable kubelet kube-proxy
$ systemctl start kubelet kube-proxy
```

其他节点依次部署即可。

#### 验证集群状态

等待几分钟，使用如下命令查看node状态：

```bash
$ kubectl get nodes --kubeconfig /etc/kubernetes/pki/admin.kubeconfig
NAME            STATUS   ROLES    AGE   VERSION
k8snode1   Ready    <none>   17h   v1.20.2
k8snode2   Ready    <none>   19m   v1.20.2
k8snode3   Ready    <none>   12m   v1.20.2
```

### 部署coredns

coredns可以部署到node节点或者master节点，本文这里部署到节点`k8snode1`。

##### 编写coredns配置文件

```bash
$ cat /etc/kubernetes/pki/dns/Corefile
.:53 {
    errors
    health {
      lameduck 5s
    }
    ready
    kubernetes cluster.local in-addr.arpa ip6.arpa {
      pods insecure
      endpoint https://192.168.122.154:6443
      tls /etc/kubernetes/pki/ca.pem /etc/kubernetes/pki/admin-key.pem /etc/kubernetes/pki/admin.pem
      kubeconfig /etc/kubernetes/pki/admin.kubeconfig default
      fallthrough in-addr.arpa ip6.arpa
    }
    prometheus :9153
    forward . /etc/resolv.conf {
      max_concurrent 1000
    }
    cache 30
    loop
    reload
    loadbalance
}
```

说明：

- 监听53端口；
- 设置kubernetes插件配置：证书、kube api的URL；

##### 准备systemd的service文件

```bash
cat /usr/lib/systemd/system/coredns.service
[Unit]
Description=Kubernetes Core DNS server
Documentation=https://github.com/coredns/coredns
After=network.target

[Service]
ExecStart=bash -c "KUBE_DNS_SERVICE_HOST=10.32.0.10 coredns -conf /etc/kubernetes/pki/dns/Corefile"

Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
```

##### 启动服务

```bash
$ systemctl enable coredns
$ systemctl start coredns
```

##### 创建coredns的Service对象

```bash
$ cat coredns_server.yaml
apiVersion: v1
kind: Service
metadata:
  name: kube-dns
  namespace: kube-system
  annotations:
    prometheus.io/port: "9153"
    prometheus.io/scrape: "true"
  labels:
    k8s-app: kube-dns
    kubernetes.io/cluster-service: "true"
    kubernetes.io/name: "CoreDNS"
spec:
  clusterIP: 10.32.0.10
  ports:
  - name: dns
    port: 53
    protocol: UDP
  - name: dns-tcp
    port: 53
    protocol: TCP
  - name: metrics
    port: 9153
    protocol: TCP
```

##### 创建coredns的endpoint对象

```bash
$ cat coredns_ep.yaml
apiVersion: v1
kind: Endpoints
metadata:
  name: kube-dns
  namespace: kube-system
subsets:
  - addresses:
      - ip: 192.168.122.157
    ports:
      - name: dns-tcp
        port: 53
        protocol: TCP
      - name: dns
        port: 53
        protocol: UDP
      - name: metrics
        port: 9153
        protocol: TCP
```

##### 确认coredns服务

```bash
# 查看service对象
$ kubectl get service -n kube-system kube-dns
NAME       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE
kube-dns   ClusterIP   10.32.0.10   <none>        53/UDP,53/TCP,9153/TCP   51m
# 查看endpoint对象
$ kubectl get endpoints -n kube-system kube-dns
NAME       ENDPOINTS                                                    AGE
kube-dns   192.168.122.157:53,192.168.122.157:53,192.168.122.157:9153   52m
```

## 运行测试pod

### 配置文件

```bash
$ cat nginx.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```

### 启动pod

通过kubectl命令运行nginx。

```bash
$ kubectl apply -f nginx.yaml
deployment.apps/nginx-deployment created
$ kubectl get pods
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-66b6c48dd5-6rnwz   1/1     Running   0          33s
nginx-deployment-66b6c48dd5-9pq49   1/1     Running   0          33s
nginx-deployment-66b6c48dd5-lvmng   1/1     Running   0          34s
```

