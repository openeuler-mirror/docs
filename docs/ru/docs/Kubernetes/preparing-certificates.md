# Подготовка сертификатов

**Заявление. Сертификат, используемый в данном документе, является самоподписывающимся и не может применяться в коммерческой среде.**

Перед развертыванием кластера необходимо сгенерировать сертификаты, необходимые для связи между компонентами кластера. В данном документе используется CFSSL с открытым исходным кодом в качестве инструмента проверки и развертывания, чтобы помочь пользователям понять конфигурацию сертификатов и отношения между сертификатами компонентов кластера. Инструмент можно выбрать по требованиям сайта, например, OpenSSL.

## Сборка и установка CFSSL

Ниже приведены команды для сборки и установки CFSSL (требуется разрешение на доступ к сайту CFSSL, и сначала необходимо настроить прокси).

```bash
wget --no-check-certificate  https://github.com/cloudflare/cfssl/archive/v1.5.0.tar.gz
tar -zxf v1.5.0.tar.gz
cd cfssl-1.5.0/
make -j6
cp bin/* /usr/local/bin/
```

## Генерирование корневого сертификата

Скомпилируйте конфигурационный файл ЦС, например, ca-config.json.

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

Скомпилируйте файл CSR ЦС, например, ca-csr.json.

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

Сгенерируйте сертификат и ключ ЦС.

```bash
cfssl gencert -initca ca-csr.json | cfssljson -bare ca
```

В результате получены следующие сертификаты.

```bash
ca.csr  ca-key.pem  ca.pem
```

## Генерирование сертификата учетной записи admin

Admin — это учетная запись, используемая K8S для управления системой. Скомпилируйте конфигурацию CSR учетной записи admin, например, admin-csr.json.

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

Генерирование сертификата.

```bash
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes admin-csr.json | cfssljson -bare admin
```

Результат выглядит следующим образом:

```bash
admin.csr  admin-key.pem  admin.pem
```

## Генерирование сертификата учетной записи service-account

Скопируйте конфигурационный файл CSR учетной записи service-account, например, service-account-csr.json.

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

Генерирование сертификата.

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -profile=kubernetes service-account-csr.json | cfssljson -bare service-account
```

Результат выглядит следующим образом:

```bash
service-account.csr  service-account-key.pem  service-account.pem
```

## Генерирование сертификата kube-controller-manager

Скомпилируйте конфигурацию CSR kube-controller-manager.

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

Генерирование сертификата.

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json-profile=kubernetes kube-controller-manager-csr.json | cfssljson -bare kube-controller-manager
```

Результат выглядит следующим образом:

```bash
kube-controller-manager.csr  kube-controller-manager-key.pem  kube-controller-manager.pem
```

## Генерирование сертификата kube-proxy

Скомпилируйте конфигурацию CSR kube-proxy.

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

Генерирование сертификата.

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -profile=kubernetes kube-proxy-csr.json | cfssljson -bare kube-proxy
```

Результат выглядит следующим образом:

```bash
kube-proxy.csr  kube-proxy-key.pem  kube-proxy.pem
```

## Генерирование сертификата kube-scheduler

Скомпилируйте конфигурацию CSR kube-scheduler.

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

Генерирование сертификата.

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -profile=kubernetes kube-scheduler-csr.json | cfssljson -bare kube-scheduler
```

Результат выглядит следующим образом:

```bash
kube-scheduler.csr  kube-scheduler-key.pem  kube-scheduler.pem
```

## Генерирование сертификата kubelet

В сертификат вовлечены имя хоста и IP-адрес сервера, в котором находится kubelet. Поэтому конфигурация каждого узла отличается. Скрипт составляется следующим образом:

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

Примечание. Если узел имеет несколько IP-адресов или других псевдонимов, можно добавить другие IP-адреса или имена хоста к параметру -hostname.

Результат выглядит следующим образом:

```bash
k8snode1.csr       k8snode1.pem       k8snode2-key.pem  k8snode3-csr.json
k8snode1-csr.json  k8snode2.csr       k8snode2.pem      k8snode3-key.pem
k8snode1-key.pem   k8snode2-csr.json  k8snode3.csr      k8snode3.pem
```

Информация о конфигурации CSR. Ниже в качестве примера используется k8snode1.

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

Примечание. Группа учетных записей, к которой принадлежит каждый узел, — `system:node`. Следовательно, поле CN в CSR — это `system:node` плюс `hostname`.

## Генерирование сертификата kube-apiserver

Скомпилируйте конфигурационный файл CSR kube api server.

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

Сгенерируйте сертификат и ключ.

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -hostname=10.32.0.1,192.168.122.154,192.168.122.155,192.168.122.156,127.0.0.1,kubernetes,kubernetes.default,kubernetes.default.svc,kubernetes.default.svc.cluster,kubernetes.svc.cluster.local -profile=kubernetes kubernetes-csr.json | cfssljson -bare kubernetes
```

Результат выглядит следующим образом:

```bash
kubernetes.csr  kubernetes-key.pem  kubernetes.pem
```

*Примечание. 10.32.0.1 — это IP-адрес в диапазоне, используемом внутренними сервисами. Вы можете установить для него другие значения. Этот параметр будет установлен при запуске сервиса apiserver.*

## Генерирование сертификата ETCD

Развертывание ETCD может осуществляться одним из следующих способов:

- Запуск сервиса ETCD на каждом сервере api-server.
- Независимое развертывание кластерного сервиса ETCD.

Если сертификат развернут вместе с api-server, используйте сертификаты `kubernetes-key.pem` и `kubernetes.pem`, сгенерированные на предыдущих шагах.

Для независимого кластера ETCD необходимо создать следующие сертификаты:

Скомпилируйте конфигурацию CSR ETCD.

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

Генерирование сертификата.

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -hostname=192.168.122.154,192.168.122.155,192.168.122.156,127.0.0.1 -profile=kubernetes etcd-csr.json | cfssljson -bare etcd
```

* Примечание. Предположим, что IP-адрес кластера ETCD — 192.168.122.154,192.168.122.155,192.168.122.156\*

Результат выглядит следующим образом:

```bash
etcd.csr  etcd-key.pem  etcd.pem
```