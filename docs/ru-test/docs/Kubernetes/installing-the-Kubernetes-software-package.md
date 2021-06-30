# Установка пакета программного обеспечения Kubernetes

```bash
$ dnf install -y docker conntrack-tools socat
```

В более поздних версиях, чем EPOL, K8S можно установить напрямую через DNF.

```bash
$ rpm -ivh kubernetes*.rpm
```