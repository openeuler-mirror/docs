# StratoVirt介绍


## 概述

StratoVirt是计算产业中面向云数据中心的企业级虚拟化平台，实现了一套架构统一支持虚拟机、容器、Serverless三种场景。StratoVirt在轻量低噪、软硬协同、Rust语言级安全等方面具备关键技术竞争优势。
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

![](./figures/StratoVirt_architecture.png)

