
# Preparing Certificates

**Statement: The certificate used in this document is self-signed and cannot be used in a commercial environment.**

Before deploying a cluster, you need to generate certificates required for communication between components in the cluster. This document uses the open-source CFSSL as the verification and deployment tool to help users understand the certificate configuration and the association between certificates of cluster components. You can select a tool based on the site requirements, for example, OpenSSL.

## Building and Installing CFSSL

The following commands for building and installing CFSSL are for your reference (the CFSSL website access permission is required, and the proxy must be configured first):

```bash
wget --no-check-certificate  https://github.com/cloudflare/cfssl/archive/v1.5.0.tar.gz
tar -zxf v1.5.0.tar.gz
cd cfssl-1.5.0/
make -j6
cp bin/* /usr/local/bin/
```

## Generating a Root Certificate

Compile the CA configuration file, for example, ca-config.json:

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

Compile a CA CSR file, for example, ca-csr.json:

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

Generate the CA certificate and key:

```bash
cfssl gencert -initca ca-csr.json | cfssljson -bare ca
```

The following certificates are obtained:

```bash
ca.csr  ca-key.pem  ca.pem
```

## Generating the admin Account Certificate

admin is an account used by K8S for system management. Compile the CSR configuration of the admin account, for example, admin-csr.json:

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

Generate a certificate:

```bash
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes admin-csr.json | cfssljson -bare admin
```

The result is as follows:

```bash
admin.csr  admin-key.pem  admin.pem
```

## Generating a service-account Certificate

Compile the CSR configuration file of the service-account account, for example, service-account-csr.json:

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

Generate a certificate:

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -profile=kubernetes service-account-csr.json | cfssljson -bare service-account
```

The result is as follows:

```bash
service-account.csr  service-account-key.pem  service-account.pem
```

## Generating the kube-controller-manager Certificate

Compile the CSR configuration of kube-controller-manager:

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

Generate a certificate:

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json-profile=kubernetes kube-controller-manager-csr.json | cfssljson -bare kube-controller-manager
```

The result is as follows:

```bash
kube-controller-manager.csr  kube-controller-manager-key.pem  kube-controller-manager.pem
```

## Generating the kube-proxy Certificate

Compile the CSR configuration of kube-proxy:

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

Generate a certificate:

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -profile=kubernetes kube-proxy-csr.json | cfssljson -bare kube-proxy
```

The result is as follows:

```bash
kube-proxy.csr  kube-proxy-key.pem  kube-proxy.pem
```

## Generating the kube-scheduler Certificate

Compile the CSR configuration of kube-scheduler:

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

Generate a certificate:

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -profile=kubernetes kube-scheduler-csr.json | cfssljson -bare kube-scheduler
```

The result is as follows:

```bash
kube-scheduler.csr  kube-scheduler-key.pem  kube-scheduler.pem
```

## Generating the kubelet Certificate

The certificate involves the host name and IP address of the server where kubelet is located. Therefore, the configuration of each node is different. The script is compiled as follows:

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

Note: If a node has multiple IP addresses or other aliases, you can add other IP addresses or host names to -hostname.

The result is as follows:

```bash
k8snode1.csr       k8snode1.pem       k8snode2-key.pem  k8snode3-csr.json
k8snode1-csr.json  k8snode2.csr       k8snode2.pem      k8snode3-key.pem
k8snode1-key.pem   k8snode2-csr.json  k8snode3.csr      k8snode3.pem
```

CSR configuration information. The following uses k8snode1 as an example:

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

Note: The account group to which each node belongs is `system:node`. Therefore, the CN field of CSR is `system:node` plus `hostname`.

## Generating the kube-apiserver Certificate

Compile the CSR configuration file of kube api server:

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

Generate the certificate and key:

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -hostname=10.32.0.1,192.168.122.154,192.168.122.155,192.168.122.156,127.0.0.1,kubernetes,kubernetes.default,kubernetes.default.svc,kubernetes.default.svc.cluster,kubernetes.svc.cluster.local -profile=kubernetes kubernetes-csr.json | cfssljson -bare kubernetes
```

The result is as follows:

```bash
kubernetes.csr  kubernetes-key.pem  kubernetes.pem
```

*Note: 10.32.0.1 is an IP address within the range used by internal services. You can set it to other values. This parameter will be set when the apiserver service is started.*

## Generating the ETCD Certificate

ETCD can be deployed in either of the following ways:

- Start an ETCD service on each api-server.
- Independently deploy an ETCD cluster service.

If the certificate is deployed together with api-server, use the `kubernetes-key.pem` and `kubernetes.pem` certificates generated in the preceding steps.

For an independent ETCD cluster, you need to create the following certificates:

Compile the CSR configuration of ETCD:

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

Generate a certificate:

```bash
cfssl gencert -ca=../ca/ca.pem -ca-key=../ca/ca-key.pem -config=../ca/ca-config.json -hostname=192.168.122.154,192.168.122.155,192.168.122.156,127.0.0.1 -profile=kubernetes etcd-csr.json | cfssljson -bare etcd
```

* Note: Assume that the IP address of the ETCD cluster is 192.168.122.154,192.168.122.155,192.168.122.156*

The result is as follows:

```bash
etcd.csr  etcd-key.pem  etcd.pem
```
