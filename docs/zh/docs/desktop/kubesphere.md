# KubeSphere 安装指南

本文介绍如何在 openEuler 21.09 上安装和部署 Kubernetes 和 KubeSphere 集群。

### 什么是 KubeSphere

[KubeSphere](https://kubesphere.io/) 是在 [Kubernetes](https://kubernetes.io/) 之上构建的面向云原生应用的**分布式操作系统**，完全开源，支持多云与多集群管理，提供全栈的 IT 自动化运维能力，简化企业的 DevOps 工作流。它的架构可以非常方便地使第三方应用与云原生生态组件进行即插即用（plug-and-play）的集成。有关更多信息，请参阅 [KubeSphere 官网](https://kubesphere.com.cn/)。

### 前提条件

您需要准备一台安装了 openEuler 21.09 的物理机/虚拟机，安装方法参考《openEuler 21.09 安装指南》。

### 软件安装

1. 下载 KubeKey 与 Docker。

   ```bash
   yum install docker kubekey
   ```

   > ![](../Virtualization/public_sys-resources/icon-note.gif)**说明：**   
   >对于多节点安装，需要在每个节点上安装 Docker。

2. 部署 KubeSphere 集群。

   ```bash
   kk create cluster --with-kubesphere v3.1.1
   ```

   > **说明：**   
   >此命令会默认安装 Kubernetes v1.19.8。如需指定 Kubernetes 版本，则需要在命令行后添加 `--with-kubernetes <版本号>`，支持的 Kubernetes 版本包括 `v1.17.9`、`v1.18.8`、 `v.1.19.8`、`v1.19.9`、`v1.20.6`。

3. 验证 KubeSphere 集群是否安装成功。

   ```bash
   kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f
   ```

   若回显为如下，则 KubeSphere 集群安装成功。

   ![](./figures/kubesphere.png)

   >![](../Virtualization/public_sys-resources/icon-note.gif) **说明：**   
   >本文档适用于在 x86 环境中安装 KubeSphere。ARM64 环境中需要先安装 Kubernetes 才能部署 KubeSphere。

### 访问 KubeSphere Web 控制台

**注意取决于您的网络环境，您可能需要配置端口转发规则和防火墙策略，请确保在防火墙规则中放行 `30880` 端口。**

KubeSphere 集群部署成功后，在浏览器地址栏中输入 `<节点 IP 地址>:30880` 访问 KubeSphere Web 控制台。 

![kubesphere-console](./figures/kubesphere-console.png)

### 另请参见

[什么是 KubeSphere](https://v3-1.docs.kubesphere.io/zh/docs/introduction/what-is-kubesphere/)

[在 Linux 上安装 KubeSphere](https://v3-1.docs.kubesphere.io/zh/docs/installing-on-linux/introduction/multioverview/)

[启用可插拔组件](https://v3-1.docs.kubesphere.io/zh/docs/quick-start/enable-pluggable-components/)

