# StratoVirt介绍

[[toc]]

## 概述

在数据中心领域，虚拟化是一种重要的资源隔离手段，能够以多粒度提供安全的虚拟运行时环境。然而，QEMU等传统虚拟化软件存在代码量庞大，CVE安全漏洞频出等问题。业界逐步演进出以Rust语言实现microVM形态的趋势。安全、轻量、高性能、低损耗、组件灵活拆分，全场景（数据中心，终端，边缘设备）通用的虚拟化技术是未来的趋势。

StratoVirt是一款由Rust实现的轻量虚拟化方案，通过精简设备模型，优化运行性能，为容器提供安全隔离、性能优异的安全沙箱运行环境。



## 架构说明

StratoVirt核心架构自顶向下分为三层：

- OCI兼容接口：兼容QMP（QEMU Machine Protocol）协议，具有完备的OCI兼容能力。
- BootLoader：抛弃传统BIOS+GRUB的启动模式，实现了更轻更快的Bootloader。
- MicroVM：虚拟化层，充分利用软硬协同能力，精简化设备模型；低时延资源伸缩能力。

整体架构视图如**图1**所示。

**图1** StratoVirt整体架构图

![](./figures/StratoVirt_architecture.png)


