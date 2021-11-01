# Introduction to StratoVirt


## Overview

StratoVirt is an enterprise-level VMM(Virtual Machine Monitor) oriented to cloud data centers in the computing industry. It uses a unified architecture to support VMs, containers, and serverless scenarios. StratoVirt has competitive advantages in key technologies such as lightweight low noise, software and hardware collaboration, and Rust language-level security.
StratoVirt reserves component-based assembling capabilities and APIs for architecture design and APIs. StratoVirt can flexibly assemble advanced features as required until it supports standard virtualization, and find the best balance among feature requirements, application scenarios, and lightness and dexterity.



## Architecture Description

StratoVirt core architecture consists of three layers from top to bottom:

- External API: compatible with the QMP(QEMU Monitor Protocol) and has complete OCI compatibility capabilities. Meanwhile, StratoVirt can be managed by libvirt too.
- BootLoader: abandon the traditional BIOS+GRUB boot mode to achieve fast boot in lightweight scenarios, and provide UEFI boot support for standard VM.
- Emulated mainboard:
  - microvm: At the virtualization layer, the software and hardware collaboration capability is fully used to simplify the device model with low-latency resource scaling capability.
  - standard VM: realize UEFI boot with constructed ACPI tables. Virtio-pci and VFIO devices can be attached to greatly improve the I/O performance.


The overall architecture is shown in **Figure 1**.

**Figure 1** Overall architecture of StratoVirt

![](./figures/StratoVirt_architecture.png)

