# Kubernetes 集群部署指南

本文档介绍在 openEuler 操作系统上，通过二进制部署 K8S 集群的一个参考方法。

说明：本文所有操作均使用 `root`权限执行。

## 集群状态

本文所使用的集群状态如下：

- 集群结构：6 个 `openEuler 21.09`系统的虚拟机，3 个 master 和 3 个 node 节点
- 物理机：`openEuler 21.09 `的 `x86/ARM`服务器

