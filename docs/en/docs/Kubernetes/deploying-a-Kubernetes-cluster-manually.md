# Deploying a Kubernetes Cluster Manually

**Note: Manual deployment applies only to experimental and learning environments and is not intended for commercial environments.**


This section describes how to deploy a Kubernetes cluster.

## Environment

Deploy based on the preceding [VM installation](./preparing-VMs.md) and obtain the following VM list:

| HostName   | MAC               | IPv4               |
| ---------- | ----------------- | -------------------|
| k8smaster0 | 52:54:00:00:00:80 | 192.168.122.154/24 |
| k8smaster1 | 52:54:00:00:00:81 | 192.168.122.155/24 |
| k8smaster2 | 52:54:00:00:00:82 | 192.168.122.156/24 |
| k8snode1   | 52:54:00:00:00:83 | 192.168.122.157/24 |
| k8snode2   | 52:54:00:00:00:84 | 192.168.122.158/24 |
| k8snode3   | 52:54:00:00:00:85 | 192.168.122.159/24 |

