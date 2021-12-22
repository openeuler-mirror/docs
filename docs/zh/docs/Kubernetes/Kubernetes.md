# Kubernetes 集群部署指南

**声明：kubernetes软件包目前收入在openEuler的EPOL仓，本文档仅适用于实验和学习环境，不适用于商用环境**

本文档介绍在 openEuler 操作系统上，通过二进制部署 K8S 集群的一个参考方法。

说明：本文所有操作均使用 `root`权限执行。

## 集群状态

本文所使用的集群状态如下：

- 集群结构：6 个 `openEuler 20.03 LTS SP3`系统的虚拟机，3 个 master 和 3 个 node 节点
- 物理机：`openEuler 20.03 LTS SP3`的 `x86/ARM`服务器
