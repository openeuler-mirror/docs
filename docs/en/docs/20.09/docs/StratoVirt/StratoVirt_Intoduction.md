# Introduction to StratoVirt

[[toc]]

## Overview

In the field of data center, virtualization is an important method for resource isolation, providing a secure virtual runtime environment with multiple granularities. However, traditional virtualization software such as QEMU has a large amount of code and frequent CVE security vulnerabilities. The industry has gradually evolved the trend of using the Rust language to implement microVM. In the future, general virtualization technologies will feature being secure, lightweight, enjoying high-performance, low-loss, flexible component splitting, and applying to all scenarios (data centers, terminals, and edge devices).

StratoVirt is a lightweight virtualization solution implemented by Rust. It simplifies the device model, optimizes the running performance, and provides a secure sandbox running environment with security isolation and excellent performance for containers.



## Architecture Description

The StratoVirt core architecture is divided into three layers from top to bottom:

- OCI: compatible with the QEMU Machine Protocol (QMP), which has complete OCI compatibility capabilities.
- BootLoader: discards the traditional BIOS+GRUB boot mode and implements a lighter and faster bootloader.
- MicroVM: virtualization layer, which fully leverages the capability of software and hardware collaboration to simplify the device model and the capability of low-latency resource scaling.

The overall architecture is shown in **Figure 1**.

**Figure 1** Overall architecture of StratoVirt

![](./figures/arc.png)


