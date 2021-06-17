# 安装 etcd


## 准备环境

使能 etcd 使用的端口：
```bash
firewall-cmd --zone=public --add-port=2379-2381/tcp
```

## 安装 etcd 二进制

当前是通过 rpm 包安装 

```
rpm -ivh etcd*.rpm
```

准备目录

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

## 编写 etcd.service 文件

以 `k8smaster0 `机器为例：

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

## 验证基本功能

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
