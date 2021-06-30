# Развертывание компонента узла

В данном разделе в качестве примера используется узел `k8snode1`.

## Подготовка среды

```bash
# A proxy needs to be configured for the intranet.
$ dnf install -y docker iSulad conntrack-tools socat containernetworking-plugins
$ swapoff -a
$ mkdir -p /etc/kubernetes/pki/
$ mkdir -p /etc/cni/net.d
$ mkdir -p /opt/cni
# Delete the default kubeconfig file.
$ rm /etc/kubernetes/kubelet.kubeconfig

## Use iSulad as the runtime ########.
# Configure the iSulad.
cat  /etc/isulad/daemon.json
{
        "registry-mirrors": [
                "docker.io"
        ],
        "insecure-registries": [
                "k8s.gcr.io",
                "quay.io"
        ],
        "pod-sandbox-image": "k8s.gcr.io/pause:3.2",# pause type
        "network-plugin": "cni", # If this parameter is left blank, the CNI network plug-in is disabled. In this case, the following two paths become invalid. After the plug-in is installed, restart iSulad.
        "cni-bin-dir": "/usr/libexec/cni/",
        "cni-conf-dir": "/etc/cni/net.d",
}

# Add the proxy to the iSulad environment variable and download the image.
cat /usr/lib/systemd/system/isulad.service
[Service]
Type=notify
Environment="HTTP_PROXY=http://name:password@proxy:8080"
Environment="HTTPS_PROXY=http://name:password@proxy:8080"

# Restart the iSulad and set it to start automatically upon power-on.
systemctl daemon-reload
systemctl restart isulad




## If Docker is used as the runtime, run the following command: ########
$ dnf install -y docker
# If a proxy environment is required, configure a proxy for Docker, add the configuration file http-proxy.conf, and edit the following content. Replace name, password, and proxy-addr with the actual values.
$ cat /etc/systemd/system/docker.service.d/http-proxy.conf
[Service]
Environment="HTTP_PROXY=http://name:password@proxy-addr:8080"
$ systemctl daemon-reload
$ systemctl restart docker
```

## Создание конфигурационных файлов kubeconfig

Выполните следующие действия на каждом узле для создания конфигурационного файла.

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

**Примечание. Измените k8snode1 на соответствующее имя узла.**

## Копирование сертификата

Как и в плоскости управления, все сертификаты, ключи и связанные конфигурации хранятся в каталоге `/etc/kubernetes/pki/`.

```bash
$ ls /etc/kubernetes/pki/
ca.pem                 k8snode1.kubeconfig  kubelet_config.yaml     kube-proxy-key.pem     kube-proxy.pem
k8snode1-key.pem  k8snode1.pem         kube_proxy_config.yaml  kube-proxy.kubeconfig
```

## Конфигурация сети CNI

containernetworking-plugins используется в качестве плагина CNI, используемого kubelet. В будущем для расширения сетевых возможностей кластера могут быть внедрены плагины, такие как calico и flannel.

```bash
# Bridge Network Configuration
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

# Loopback Network Configuration
$ cat /etc/cni/net.d/99-loopback.conf
{
    "cniVersion": "0.3.1",
    "name": "lo",
    "type": "loopback"
}
```

## Развертывание сервиса kubelet

### Конфигурационный файл, от которого зависит kubelet

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

**Примечание. IP-адрес DNS кластера — 10.32.0.10, который должен совпадать со значением service-cluster-ip-range.**

### Компиляция конфигурационного файла systemd

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

**Примечание. Если в качестве среды выполнения (runtime) используется iSulad, добавьте следующую конфигурацию.**

```bash
--container-runtime=remote \
--container-runtime-endpoint=unix:///var/run/isulad.sock \
```

## Развертывание kube-proxy

### Конфигурационный файл, от которого зависит kube-proxy

```bash
cat /etc/kubernetes/pki/kube_proxy_config.yaml
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
clientConnection:
  kubeconfig: /etc/kubernetes/pki/kube-proxy.kubeconfig
clusterCIDR: 10.244.0.0/16
mode: "iptables"
```

### Компиляция конфигурационного файла systemd

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

## Запуск сервиса компонентов

```bash
$ systemctl enable kubelet kube-proxy
$ systemctl start kubelet kube-proxy
```

Разверните другие узлы в последовательности.

## Проверка состояния кластера

Подождите несколько минут, затем запустите следующую команду для проверки состояния узла.

```bash
$ kubectl get nodes --kubeconfig /etc/kubernetes/pki/admin.kubeconfig
NAME            STATUS   ROLES    AGE   VERSION
k8snode1   Ready    <none>   17h   v1.20.2
k8snode2   Ready    <none>   19m   v1.20.2
k8snode3   Ready    <none>   12m   v1.20.2
```

## Развертывание coredns

coredns можно развернуть на узле или главном узле. В этом примере coredns развернут на узле `k8snode1`.

### Компиляция конфигурационного файла coredns

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

Примечание.

- Прослушивайте порт 53.
- Настройте плагин Kubernetes, включая сертификат и URL kube api.

### Подготовка файла сервиса systemd

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

### Запуск сервиса

```bash
$ systemctl enable coredns
$ systemctl start coredns
```

### Создание объекта сервиса coredns

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

### Создание объекта конечной точки coredns

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

### Подтверждение сервиса coredns

```bash
# View the service object.
$ kubectl get service -n kube-system kube-dns
NAME       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE
kube-dns   ClusterIP   10.32.0.10   <none>        53/UDP,53/TCP,9153/TCP   51m
# View the endpoint object.
$ kubectl get endpoints -n kube-system kube-dns
NAME       ENDPOINTS                                                    AGE
kube-dns   192.168.122.157:53,192.168.122.157:53,192.168.122.157:9153   52m
```