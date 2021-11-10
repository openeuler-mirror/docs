# Installation Preparations

This section describes the compatibility of the hardware and software and the related configurations and preparations required for the installation.

<!-- TOC -->

- [Installation Preparations](#installation-preparations)
    - [Obtaining the Installation Source](#obtaining-the-installation-source)
    - [Release Package Integrity Check](#release-package-integrity-check)
        - [Introduction](#introduction)
        - [Prerequisites](#prerequisites)
        - [Procedures](#procedures)
    - [Installation Requirements for PMs](#installation-requirements-for-pms)
        - [Hardware Compatibility](#hardware-compatibility)
        - [Minimum Hardware Specifications](#minimum-hardware-specifications)
    - [Installation Requirements for VMs](#installation-requirements-for-vms)
        - [Virtualization Platform Compatibility](#virtualization-platform-compatibility)
        - [Minimum Virtualization Space](#minimum-virtualization-space)

<!-- /TOC -->

## Obtaining the Installation Source

Obtain the openEuler release package and verification file before the installation.

Perform the following operations to obtain the openEuler release package:

1.  Log in to the  [openEuler Community](https://openeuler.org/zh/)  website.
2.  Click  **Download**. 
3.  Choose the card **openEuler-21.09** and click  **Download ISO**. The download list is displayed.
    -   **aarch64**: ISO image file of the AArch64 architecture
    -   **x86_64**: ISO image file of the x86_64 architecture
    -   **source**: ISO image file of the openEuler source code
4.  Select the target openEuler release package and verification file based on the actual environment to be installed.
    -   AArch64 architecture:
        1.  Click **aarch64**.
        2.  If you install the environment on the local host, download the release package **openEuler-21.09-aarch64-dvd.iso** and the verification file **openEuler-21.09-aarch64-dvd.iso.sha256sum** to the local host.
        3.  If you install the environment on the network, download the release package **openEuler-21.09-netinst-aarch64-dvd.iso** and the verification file **openEuler-21.09-netinst-aarch64-dvd.iso.sha256sum** to the local host.

    -   x86_64 architecture:
        1.  Click **x86_64**.
	2.  If you install the environment on the local host, download the release package **openEuler-21.09-x86_64-dvd.iso** and the verification file **openEuler-21.09-x86_64-dvd.iso.sha256sum** to the local host.
        3.  If you install the environment on the network, download the release package **openEuler-21.09-netinst-x86_64-dvd.iso** and the verification file **openEuler-21.09-netinst-x86_64-dvd.iso.sha256sum** to the local host.

>![](./public_sys-resources/icon-note.gif) **Note**   
> When the network is available, install the environment on the network because the ISO release package is small.
> The release package of AArch64 architecture supports UEFI mode, while the release package of x86_64 architecture supports UEFI mode and Legacy mode.

## Release Package Integrity Check

>![](./public_sys-resources/icon-note.gif) **NOTE**   
>This section describes how to verify the integrity of the release package in the AArch64 architecture. The procedure for verifying the integrity of the release package in the x86_64 architecture is the same.  

### Introduction

To prevent the software package from being incompletely downloaded due to network or storage device faults during transmission, you need to verify the integrity of the software package after obtaining it. Only the software package that passes the verification can be installed.

Compare the verification value recorded in the verification file with the .iso file verification value calculated manually to check whether the software package passes the verification. If the values are consistent, the .iso file is not damaged. Otherwise, the file is damaged and you need to obtain it again.

### Prerequisites

Before verifying the integrity of the release package, you need to prepare the following files:

ISO file:  **openEuler-21.09-aarch64-dvd.iso**

Verification file:  **openEuler-21.09-aarch64-dvd.iso.sha256sum**

### Procedures

To verify the file integrity, perform the following operations:

1.  Obtain the verification value in the verification file. Run the following command:

    ```
    $ cat openEuler-21.09-aarch64-dvd.iso.sha256sum 
    ```

2.  Calculate the SHA256 verification value of the file. Run the following command:

    ```
    $ sha256sum openEuler-21.09-aarch64-dvd.iso
    ```

    After the command is run, the verification value is displayed.

3.  Check whether the values obtained from the step 1 and step 2 are consistent.

    If the values are consistent, the .iso file is not damaged. Otherwise, the file is damaged and you need to obtain it again.

## Installation Requirements for PMs

To install the openEuler OS on a PM, the PM must meet the following requirements.

### Hardware Compatibility

You need to take hardware compatibility into account during openEuler installation.  [Table 1](#table14948632047)  describes the types of supported servers.

>![](./public_sys-resources/icon-note.gif) **NOTE:**   
>
>-   TaiShan 200 servers are backed by Huawei Kunpeng 920 processors.  
>-   Currently, only Huawei TaiShan and FusionServer Pro servers are supported. More servers from other vendors will be supported in the future.  

**Table  1**  Supported servers<a name="table14948632047"></a>

|  Server Type   | Server Name  | Server Model  |
| :----  | :----  | :----  |
| Rack server | TaiShan 200 | 2280 balanced model |
| Rack server  | FusionServer Pro | FusionServer Pro 2288H V5<br>NOTE：<br>The server must be configured with the Avago SAS3508 RAID controller card and the LOM-X722 NIC.|

### Minimum Hardware Specifications

[Table 2](#tff48b99c9bf24b84bb602c53229e2541)  lists the minimum hardware specifications supported by openEuler.

**Table  2**  Minimum hardware specifications<a name="tff48b99c9bf24b84bb602c53229e2541"></a>

|  Component   | Minimum Hardware Specifications  |
|  :----  | :----  |
| Architecture  | AArch64 or x86_64 |
| CPU  | Two CPUs |
| Memory  | ≥ 4 GB (8 GB or higher recommended for better user experience) |
| Hard disk  | ≥ 32 GB (120 GB or higher recommended for better user experience) |

## Installation Requirements for VMs

To install the openEuler OS on a VM, the PM must meet the following requirements.

### Virtualization Platform Compatibility

When installing openEuler, pay attention to the compatibility of the virtualization platform. Currently, the following virtualization platforms are supported:

-   A virtualization platform created by the virtualization components \(openEuler as the host OS and QEMU and KVM provided in the release package\) of openEuler
-   x86 virtualization platform of Huawei public cloud

### Minimum Virtualization Space

[Table 3](#tff48b99c9bf24b84bb602c53229e2541)  lists the minimum virtualization space required by openEuler.

**Table  3**  Minimum virtualization space<a name="tff48b99c9bf24b84bb602c53229e2541"></a>

|  Component   | Minimum Virtualization Space  |
|  :----  | :----  |
| Architecture  | AArch64 or x86_64 |
| CPU  | Two CPUs|
| Memory  | ≥ 4 GB (8 GB or higher recommended for better user experience) |
| Hard disk  | ≥ 32 GB (120 GB or higher recommended for better user experience) |




















