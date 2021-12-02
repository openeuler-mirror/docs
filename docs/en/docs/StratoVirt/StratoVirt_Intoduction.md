# Introduction to StratoVirt


- [Introduction to StratoVirt](#introduction-to-stratovirt)
  - [Overview](#overview)
  - [Architecture Description](#architecture-description)

## Overview

StratoVirt is an enterprise-level Virtual Machine Monitor (VMM) oriented to cloud data centers in the computing industry. It uses a unified architecture to support VMs, containers, and serverless scenarios. StratoVirt has competitive advantages in key technologies such as lightweight low noise, software and hardware synergy, and Rust language-level security.
StratoVirt reserves component-based assembling capabilities and APIs in the architecture design. Advanced features can be flexibly assembled as required until they evolve to support standard virtualization. In this way, StratoVirt can strike a balance between feature requirements, application scenarios, and flexibility.



## Architecture Description

The StratoVirt core architecture is divided into three layers from top to bottom:

- OCI: compatible with the QEMU Machine Protocol (QMP), which has complete OCI compatibility capabilities.
- BootLoader: discards the traditional BIOS+GRUB boot mode and implements a lighter and faster bootloader.
- MicroVM: virtualization layer, which fully leverages the capability of software and hardware collaboration to simplify the device model and the capability of low-latency resource scaling.

The overall architecture is shown in **Figure 1**.

**Figure 1** Overall architecture of StratoVirt

![](./figures/arc.png)


