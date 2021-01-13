# Installation Preparations

This section describes the compatibility of the hardware and software and the related configurations and preparations required for the installation.

[[toc]]

## Obtaining the Installation Source

Obtain the openEuler release package and verification file before the installation.

> ![](./public_sys-resources/icon-note.gif) **Note:**   
> The release packages of the AArch64 architecture support the UEFI mode, and the release packages of the x86\_64 architecture support the UEFI and Legacy modes.

Perform the following operations to obtain the openEuler release package:

1.  Log in to the  [openEuler Community](https://openeuler.org)  website.
2.  Click  **Download**. 
3.  Click the link provided after  **Download ISO**. The download list is displayed.
4.  Click  **openEuler-20.09**. The openEuler 20.09 version download list is displayed.
5.  Click  **ISO**. The ISO download list is displayed.
    -   **aarch64**: ISO image file of the AArch64 architecture
    -   **x86\_64**: ISO image file of the x86\_64 architecture
    -   **source**: ISO image file of the openEuler source code

6.  Select the openEuler release package and verification file to be downloaded based on the architecture of the environment to be installed.
    -   If the AArch64 architecture is used:
        1.  Click  **aarch64**.
        2.  Click  **openEuler-20.09-aarch64-dvd.iso**  to download the openEuler release package to the local host.
        3.  Click  **openEuler-20.09-aarch64-dvd.iso.sha256sum**  to download the openEuler verification file to the local host.

    -   If the x86\_64 architecture is used:
        1.  Click  **x86\_64**.
        2.  Click  **openEuler-20.09-x86\_64-dvd.iso**  to download the openEuler release package to the local host.
        3.  Click  **openEuler-20.09-x86\_64-dvd.iso.sha256sum**  to download the openEuler verification file to the local host.

## Release Package Integrity Check

>![](./public_sys-resources/icon-note.gif) **NOTE:**   
>This section describes how to verify the integrity of the release package in the AArch64 architecture. The procedure for verifying the integrity of the release package in the x86\_64 architecture is the same.  

### Introduction

To prevent the software package from being incompletely downloaded due to network or storage device faults during transmission, you need to verify the integrity of the software package after obtaining it. Only the software packages that pass the verification can be installed.

Compare the verification value recorded in the verification file with the .iso file verification value calculated manually to check whether the software package passes the verification. If the verification values are consistent, the .iso file is not damaged. If they are inconsistent, you can confirm that the file is damaged and you need to obtain the file again.

### Prerequisites

Before verifying the integrity of the release package, you need to prepare the following files:

ISO file:  **openEuler-20.09-aarch64-dvd.iso**

Verification file:  **openEuler-20.09-aarch64-dvd.iso.sha256sum**

### Procedure

To verify the file integrity, perform the following operations:

1.  Obtain the verification value in the verification file. Run the following command:

    ```
    $cat openEuler-20.09-aarch64-dvd.iso.sha256sum 
    ```

2.  Calculate the SHA256 verification value of the file. Run the following command:

    ```
    $sha256sum openEuler-20.09-aarch64-dvd.iso
    ```

    After the command is run, the verification value is displayed.

3.  Check whether the values calculated in step 1 and step 2 are consistent.

    If the verification values are consistent, the .iso file is not damaged. If they are inconsistent, you can confirm that the file is damaged and you need to obtain the file again.

## Installation Requirements for PMs

To install the openEuler OS on a PM, the PM must meet the following hardware compatibility and minimum hardware requirements.

### Hardware Compatibility

You need to take hardware compatibility into account during openEuler installation.  [Table 1](#table14948632047)  describes the types of supported servers.

>![](./public_sys-resources/icon-note.gif) **NOTE:**   
>
>-   TaiShan 200 servers are backed by Huawei Kunpeng 920 processors.  
>-   Currently, only Huawei TaiShan and FusionServer Pro servers are supported. More servers from other vendors will be supported in the future.  

**Table  1**  Supported servers

| Server Type   | Server Name  |Server Model  |
|:---  |:----  |:----  |
| Rack server | TaiShan 200|2280 balanced model |
| Rack server | FusionServer Pro |FusionServer Pro 2288H V5<br/>NOTE: <br/>The server must be configured with the Avago SAS3508 RAID controller card and the LOM-X722 NIC.|

### Minimum Hardware Specifications

[Table 2](#tff48b99c9bf24b84bb602c53229e2541)  lists the minimum hardware specifications supported by openEuler.

**Table  2**  Minimum hardware specifications

|  Component   | Minimum Hardware Specifications  |Description |
|:---  |:----  |:----  |
| Architecture | AArch64<br/> x86_64|64-bit Arm architecture<br/>64-bit Intel x86 architecture |
| CPU | Huawei Kunpeng 920 series<br/>Intel ® Xeon® processor|- |
| Memory | ≥ 4 GB (8 GB or higher recommended for better user experience)|- |
| Hard disk | ≥ 120 GB (for better user experience) | The hard disk supports IDE, SATA, SAS interfaces.|


## Installation Requirements for VMs

To install the openEuler OS on a VM, the VM must meet the following hardware compatibility and minimum hardware requirements.

### Virtualization Platform Compatibility

When installing openEuler, pay attention to the compatibility of the virtualization platform. Currently, the following virtualization platforms are supported:

-   A virtualization platform created by the virtualization components \(openEuler as the host OS and QEMU and KVM provided in the release package\) of openEuler
-   x86 virtualization platform of Huawei public cloud

### Minimum Virtualization Space

[Table 3](#tff48b99c9bf24b84bb602c53229e2541)  lists the minimum virtualization space required by openEuler.

**Table  3**  Minimum virtualization space

|  Component   | Minimum Virtualization Space  |
|:---  |:----  |
| Architecture | AArch64<br/> x86_64|
| CPU | Two CPUs|
| Memory | ≥ 4 GB (8 GB or higher recommended for better user experience)|
| Hard disk | ≥ 32 GB (120 GB or higher recommended for better user experience)）|


















