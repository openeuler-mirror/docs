# Preparing Boot Firmware<a name="EN-US_TOPIC_0184192548"></a>

## Overview<a name="section174915189245"></a>

The boot mode varies depending on the architecture. x86 servers support the Unified Extensible Firmware Interface \(UFEI\) and BIOS boot modes, and AArch64 servers support only the UFEI boot mode. By default, boot files corresponding to the BIOS mode have been installed on openEuler. No additional operations are required. This section describes how to install boot files corresponding to the UEFI mode.

The Unified Extensible Firmware Interface \(UEFI\) is a new interface standard used for power-on auto check and OS boot. It is an alternative to the traditional BIOS. EDK II is a set of open source code that implements the UEFI standard. In virtualization scenarios, the EDK II tool set is used to start a VM in UEFI mode. Before using the EDK II tool, you need to install the corresponding software package before starting a VM. This section describes how to install the EDK II tool.

## Installation Methods<a name="section86091043192617"></a>

If the UEFI mode is used, the tool set EDK II needs to be installed. The installation package for the AArch64 architecture is  **edk2-aarch64**, and that for the x86 architecture is  **edk2-ovmf**. This section uses the AArch64 architecture as an example to describe the installation method. For the x86 architecture, you only need to replace  **edk2-aarch64**  with  **edk2-ovmf**.

1.  Run the following command to install the  **edk**  software package:

    In the AArch64 architecture, the  **edk2**  package name is  **edk2-aarch64**.

    ```
    # yum install -y edk2-aarch64
    ```

    In the x86\_64 architecture, the  **edk2**  package name is  **edk2-ovmf**.

    ```
    # yum install -y edk2-ovmf
    ```

2.  Run the following command to check whether the  **edk**  software package is successfully installed:

    In the AArch64 architecture, the command is as follows:

    ```
    # rpm -qi edk2-aarch64
    ```

    If information similar to the following is displayed, the  **edk**  software package is successfully installed:

    ```
    Name        : edk2-aarch64
    Version     : 20180815gitcb5f4f45ce
    Release     : 1.oe3
    Architecture: noarch
    Install Date: Mon 22 Jul 2019 04:52:33 PM CST
    Group       : Applications/Emulators
    ```

    In the x86\_64 architecture, the command is as follows:

    ```
    # rpm -qi edk2-ovmf
    ```

    If information similar to the following is displayed, the  **edk**  software package is successfully installed:

    ```
    Name        : edk2-ovmf
    Version     : 201908
    Release     : 6.oe1
    Architecture: noarch
    Install Date: Thu 19 Mar 2020 09:09:06 AM CST
    ```


