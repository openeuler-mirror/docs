# Installing ETCD


## Preparing the Environment

Run the following command to enable the port used by ETCD:
```bash
firewall-cmd --zone=public --add-port=2379-2381/tcp
```

## Installing the ETCD Binary Package

Currently, the RPM package is used for installation. 

```
rpm -ivh etcd*.rpm
```

Prepare the directories.

```bash
mkdir -p /etc/etcd /var/lib/etcd
cp ca.pem /etc/etcd/
cp kubernetes-key.pem /etc/etcd/
cp kubernetes.pem /etc/etcd/
# Disabling SELinux
setenforce 0
# Disabling the Default Configuration of the /etc/etcd/etcd.conf File
# Commenting Out the Line, for example, ETCD_LISTEN_CLIENT_URLS="http://localhost:2379".
```

## Compiling the etcd.service File

The following uses the `k8smaster0` machine as an example:

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

- The boot setting `ETCD_UNSUPPORTED_ARCH=arm64` needs to be added to ARM64;
- In this document, ETCD and k8s control are deployed on the same machine. Therefore, the `kubernetes.pem` and `kubernetes-key.pem` certificates are used to start ETCD and k8s control.
- A CA certificate is used in the entire deployment process. ETCD can generate its own CA certificate and use its own CA certificate to sign other certificates. However, the certificate signed by the CA certificate needs to be used when the APIServer accesses the ETCD client.
- `initial-cluster` needs to be added to all configurations for deploying ETCD.
- To improve the storage efficiency of ETCD, you can use the directory of the SSD as `data-dir`.

Start the ETCD service.

```bash
$ systemctl enable etcd
$ systemctl start etcd
```

Then, deploy other hosts in sequence.

## Verifying Basic Functions

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