# StratoVirt介绍


## 概述

StratoVirt是计算产业中面向云数据中心的企业级虚拟化VMM(Virtual Machine Monitor)，实现了一套架构统一支持虚拟机、容器、Serverless三种场景。StratoVirt在轻量低噪、软硬协同、Rust语言级安全等方面具备关键技术竞争优势。
StratoVirt在架构设计和接口上预留了组件化拼装的能力和接口，StratoVirt可以按需灵活组装高级特性直至演化到支持标准虚拟化，在特性需求、应用场景和轻快灵巧之间找到最佳的平衡点。



## 架构说明

StratoVirt核心架构自顶向下分为三层：

- 外部接口：兼容QMP（QEMU Monitor Protocol）协议，具有完备的OCI兼容能力，同时支持对接libvirt。
- BootLoader：轻量化场景下抛弃传统BIOS+GRUB的启动模式实现快速启动，同时标准虚拟化场景下支持UEFI启动。
- 模拟主板：
  - microvm:  充分利用软硬协同能力，精简化设备模型，低时延资源伸缩能力。
  - 标准机型：提供ACPI表实现UEFI启动，支持添加virtio-pci以及VFIO直通设备等，极大提高虚拟机的I/O性能。

整体架构视图如**图1**所示。

**图1** StratoVirt整体架构图

![](./figures/StratoVirt_architecture.jpg)

## 特性

- 基于硬件的高隔离能力；
- 快速冷启动：得益于极简设计，StratoVirt可以在50ms内启动microvm机型；
- 低内存开销： StratoVirt的内存占用小于4MB ；
- IO增强： StratoVirt提供普通IO能力与极简IO设备仿真；
- OCI兼容性：StratoVirt与isula和kata容器配合使用，可以完美融入Kubernetes生态系统；
- 多平台支持：全面支持Intel和ARM平台；
- 可扩展性：StratoVirt保留接口和设计，用于导入更多特性，甚至扩展到标准虚拟化支持；
- 安全性：运行时系统调用数小于46；

## 实现

#### 运行架构

- StratoVirt虚拟机是Linux中一个独立的进程。进程有三种线程：主线程、VCPU线程、I/O线程：
  - 主线程是异步收集和处理来自外部模块（如VCPU线程）的事件的循环；
  - 每个VCPU都有一个线程处理本VCPU的trap事件；
  - 可以为I/O设备配置iothread提升I/O性能；

#### 约束

- 仅支持Linux操作系统，推荐内核版本为4.19；
- 虚拟机操作系统仅支持Linux，内核版本建议为4.19；
- 最大支持254个CPU；
