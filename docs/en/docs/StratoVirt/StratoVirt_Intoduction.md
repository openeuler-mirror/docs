# Introduction to StratoVirt


## Overview

StratoVirt is an enterprise-level Virtual Machine Monitor (VMM) oriented to cloud data centers in the computing industry. It uses a unified architecture to support VMs, containers, and serverless scenarios. StratoVirt has competitive advantages in key technologies such as lightweight low noise, software and hardware synergy, and Rust language-level security.
StratoVirt reserves component-based assembling capabilities and APIs in the architecture design. Advanced features can be flexibly assembled as required until they evolve to support standard virtualization. In this way, StratoVirt can strike a balance between feature requirements, application scenarios, and flexibility.



## Architecture Description

The StratoVirt core architecture consists of three layers from top to bottom:

- External API: compatible with the QEMU Monitor Protocol (QMP), has complete OCI compatibility capabilities, and supports interconnection with libvirt.
- BootLoader: discards the traditional BIOS+GRUB boot mode to achieve fast boot in lightweight scenarios, and provides UEFI boot support for standard VMs.
- Emulated mainboard:
  - microvm: At the virtualization layer, the software and hardware collaboration capability is fully used to simplify the device model with low-latency resource scaling capability.
  - standard VM: implements UEFI boot with constructed ACPI tables. Virtio-pci and VFIO devices can be attached to greatly improve the I/O performance.

Figure 1 shows the overall architecture.

**Figure 1** Overall architecture of StratoVirt

![](./figures/StratoVirt_architecture.jpg)

## Features

- High isolation ability based on hardware;
- Fast cold boot: Benefit from the minimalist design, microvm can be started within 50ms;
- Low memory overhead: StratoVirt works with a memory footprint less than 4MB;
- IO enhancement: StratoVirt offers normal IO ability with minimalist IO device emulation;
- OCI compatibility: StratoVirt works with isula and kata container, and can be integrated
in Kubernetes ecosystem perfectly;
- Multi-platform support: Fully support for Intel and Arm platform;
- Expansibility: StratoVirt reserves interface and design for importing more features,
even expand to standard virtualization support;
- Security: lower than 46 syscalls while running;

## Implementation

#### Running Architecture

- StratoVirt VM is an independent process in Linux. The process has three types of
threads: main thread, VCPU thread and I/O thread:
    - The main thread is a cycle for asynchronous collecting and processing events
from external modules, such as a VCPU thread;
    - Each VCPU has a thread to process trap events of this VCPU;
    - Iothreads can be configured for I/O devices to improve I/O performance;

## Restrictions

- Only the Linux operating system is supported; The recommended kernel version is 4.19;
- Only Linux is supported as the operating system of VM, and the recommended kernel version is 4.19;
- Supports a maximum of 254 CPUs;
