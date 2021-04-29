# Introduction to StratoVirt


## Overview

StratoVirt is an enterprise-level virtualization platform oriented to cloud data centers in the computing industry. It uses a unified architecture to support VMs, containers, and serverless scenarios. StratoVirt has competitive advantages in key technologies such as lightweight low noise, software and hardware collaboration, and Rust language-level security.
StratoVirt reserves component-based assembling capabilities and APIs for architecture design and APIs. StratoVirt can flexibly assemble advanced features as required until it supports standard virtualization, and find the best balance among feature requirements, application scenarios, and lightness and dexterity.



## Architecture Description

StratoVirt core architecture consists of three layers from top to bottom:

- OCI campability API: compatible with the QEMU Machine Protocol (QMP) and has complete OCI compatibility capabilities.
- BootLoader: discards the traditional BIOS plus GRUB boot mode and implements a lighter and faster bootloader.
- MicroVM: At the virtualization layer, the software and hardware collaboration capability is fully used to simplify the device model with low-latency resource scaling capability.


The overall architecture is shown in **Figure 1**.

**Figure 1** Overall architecture of StratoVirt

![](./figures/arc.png)


