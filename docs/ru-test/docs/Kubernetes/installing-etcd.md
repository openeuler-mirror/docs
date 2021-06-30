# Установка ETCD

## Подготовка среды

Запустите следующую команду, чтобы включить порт, используемый ETCD.

```bash
firewall-cmd --zone=public --add-port=2379/tcp
firewall-cmd --zone=public --add-port=2380/tcp
```

## Установка двоичного пакета ETCD

В данный момент для установки используется пакет RPM.

```
rpm -ivh etcd*.rpm
```

Подготовьте каталоги.

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

## Компиляция файла etcd.service

Ниже в качестве примера используется машина `k8smaster0`.

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

**Примечание.**

- Настройка загрузки `ETCD_UNSUPPORTED_ARCH=arm64` должна быть добавлена в ARM64.
- В этом примере ETCD и k8s control развернуты на одной машине. Поэтому сертификаты `kubernetes.pem` и `kubernetes-key.pem` используются для запуска ETCD и k8s control.
- Сертификат ЦС используется во всем процессе развертывания. ETCD может генерировать свой собственный сертификат ЦС и использовать его для подписания других сертификатов. Однако сертификат, подписанный сертификатом ЦС, будет использоваться при доступе APIServer к клиенту ETCD.
- `initial-cluster` необходимо добавлять ко всем конфигурациям для развертывания ETCD.
- Чтобы повысить эффективность хранения ETCD, вы можете использовать каталог SSD как `data-dir`.

Запустите сервис ETCD.

```bash
$ systemctl enable etcd
$ systemctl start etcd
```

Затем разверните другие хосты в последовательности.

## Проверка основных функций

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