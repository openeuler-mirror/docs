# openEuler Embedded Usage Guide

openEuler Embedded is a Linux version for embedded scenarios based on the openEuler community version. The embedded system applications are restricted by multiple factors, such as resources, power consumption, and diversity. Therefore, the server-oriented Linux versions and the corresponding build systems can hardly satisfy the requirements of embedded scenarios. The [Yocto](https://www.yoctoproject.org/) is widely used to customize and build embedded Linux. Currently, openEuler Embedded is also built using Yocto, but has the same source code as other openEuler versions. For details about the build method, see the related code repository in [SIG-Yocto](https://gitee.com/openeuler/community/tree/master/sig/sig-Yocto).

This document describes how to obtain pre-built images, run the images, and develop basic embedded Linux applications based on the images.

## Obtaining the Image
The released pre-built images support only the ARM and AArch64 architectures, and are compatible only with the ARM virt-4.0 platform of QEMU. You can obtain the images through the following links:

- [qemu_arm](https://repo.openeuler.org/openEuler-21.09/embedded_img/qemu-arm) for ARM Cortex A15 processor of 32-bit ARM architecture.
- [qemu_aarch64](https://repo.openeuler.org/openEuler-21.09/embedded_img/qemu-aarch64) for ARM Cortex A57 processor of 64-bit AArch64 architecture.

You can deploy an openEuler Embedded image on a physical bare-metal server, cloud server, container, or VM as long as the environment supports QEMU emulator version 5.0 or later.

## Image Content

The downloaded image consists of the following parts:

- Kernel image **zImage**, which is built based on Linux 5.10 of the openEuler community. You can obtain the kernel configurations through the following links:
  - [arm(cortex a15)](https://gitee.com/openeuler/yocto-embedded-tools/blob/openEuler-21.09/config/arm/defconfig-kernel)
  - [arm(cortex a57)](https://gitee.com/openeuler/yocto-embedded-tools/blob/openEuler-21.09/config/arm64/defconfig-kernel) for the AArch64 architecture. The image provides the image self-decompression function in addition. For details, see the corresponding [patch](https://gitee.com/openeuler/yocto-embedded-tools/blob/openEuler-21.09/patches/arm64/0001-arm64-add-zImage-support-for-arm64.patch).

- Root file system image (select one of the following as required):
  - **initrd_tiny**, which is the image of the simplified root file system with only basic functions. It contains the BusyBox and basic glibc library. The image is simple and consumes little memory. It is suitable for exploring Linux kernel functions.
  - **initrd**, which is the image of the standard root file system. In addition to the content of the simplified root file system image, the standard image has received necessary security hardening and includes various software packages, such as audit, cracklib, OpenSSH, Linux PAM, shadow and iSula containers. This image is suitable for exploring more functions.

## Executing the Image

You can run the image to experience the functions of openEuler Embedded, and develop basic embedded Linux applications.

---
**_Note_**

- You are advised to use QEMU 5.0 or later to run the image. Some additional functions (the network and shared file system) depend on the virtio-net and virtio-fs features of QEMU. If these features are not enabled in QEMU, errors may occur during image running. In this case, you may need to recompile QEMU from the source code.

- When running the image, you are advised to place the kernel image and root file system image in the same directory. The following uses the standard root file system image (initrd) as an example.

---


### Simplified Running Scenario

In this scenario, the network and shared file system are not enabled in QEMU. You can use this scenario to experience the functions.

For ARM architecture (ARM Cortex A15), run the following command:
```shell
qemu-system-arm -M virt-4.0 -cpu cortex-a15 -nographic -kernel zImage -initrd initrd
```
For AArch64 architecture (ARM Cortex A57), run the following command:
```shell
qemu-system-aarch64 -M virt-4.0 -cpu cortex-a57 -nographic -kernel zImage -initrd initrd
```

The standard root file system image is securely hardened and requires you to set a password for the root user during the first startup. The password must contain at least eight characters, including digits, letters, and special characters, for example, openEuler@2021. For systems running the simplified root file system image, you can log in without the user name and password.

After you successfully run QEMU and log in to the system, the Shell of openEuler Embedded is displayed.

### Shared File System Enabled Scenario

Shared file system allows the host machine of QEMU emulator to share files with openEuler Embedded. In this way, programs that are cross-compiled on the host machine can run on openEuler Embedded after being copied to the shared directory.

Assume that the `/tmp` directory of the host machine is used as the shared directory, and a `hello_openeuler.txt` file is created in the directory in advance. To enable the shared file system function, perform the following steps:

1. **Start QEMU.**

For ARM architecture (ARM Cortex A15), run the following command:
```sh
qemu-system-arm -M virt-4.0 -cpu cortex-a15 -nographic -kernel zImage -initrd initrd -device virtio-9p-device,fsdev=fs1,mount_tag=host -fsdev local,security_model=passthrough,id=fs1,path=/tmp
```
For AArch64 architecture (ARM Cortex A57), run the following command:
```sh
qemu-system-aarch64 -M virt-4.0 -cpu cortex-a57 -nographic -kernel zImage -initrd initrd -device virtio-9p-device,fsdev=fs1,mount_tag=host -fsdev local,security_model=passthrough,id=fs1,path=/tmp
```

2. **Mount the file system.**

After you start and log in to openEuler Embedded, run the following commands to mount the shared file system:
```shell
cd /tmp
mkdir host
mount -t 9p -o trans=virtio,version=9p2000.L host /tmp/host
```
The shared file system is mounted to the `/tmp/host` directory of openEuler Embedded.

3. **Check whether the file system is shared successfully.**

In openEuler Embedded, run the following commands:

```shell
cd /tmp/host
ls
```
If `hello_openeuler.txt` is discovered, the file system is shared successfully.

### Network Enabled Scenario

The virtio-net of QEMU and the virtual NIC of the host machine allow for the network communication between the host machine and openEuler Embedded.
1. **Start QEMU.**

For ARM architecture (ARM Cortex A15), run the following command:
```shell
qemu-system-arm -M virt-4.0 -cpu cortex-a15 -nographic -kernel zImage -initrd initrd -device virtio-net-device,netdev=tap0 -netdev tap,id=tap0,script=/etc/qemu-ifup
```
For AArch64 architecture (ARM Cortex A57), run the following command:
```shell
qemu-system-aarch64 -M virt-4.0 -cpu cortex-a57 -nographic -kernel zImage -initrd initrd -device virtio-net-device,netdev=tap0 -netdev tap,id=tap0,script=/etc/qemu-ifup
```
2. **Create the vNIC on the host machine.**

You can use the `/etc/qemu-ifup` script to create a **tap0** vNIC on the host machine. **root** permission is required for running the script. The script details are as follows:

```sh
#!/bin/bash
ifconfig $1 192.168.10.1 up
```
Use the `qemu-ifup` script to create a **tap0** vNIC on the host machine. The IP address of the vNIC is 192.168.10.1.

3. **Configure the NIC of openEuler Embedded.**

Log in to openEuler Embedded and run the following command:
```shell
ifconfig eth0 192.168.10.2
```

4. **Check whether the network connection is normal.**

In openEuler Embedded, run the following command:
```shell
ping 192.168.10.1
```

If the IP address can be pinged, the network connection between the host machine and openEuler Embedded is normal.

---
**_Note_**

If you need openEuler Embedded to access the Internet through the host machine, create a bridge on the host machine. For details, see the related documents.

---

## User-Mode Application Development Based on openEuler Embedded

In addition to the basic functions of openEuler Embedded, you can also use the released images for the basic development of user-mode applications, that is, running your own programs on openEuler Embedded.


1. **Prepare the environment.**

The current images are built using the Linaro ARM/AArch64 GCC 7.3.1 toolchains. It is recommended that the same toolchains are used for application development. You can obtain the toolchains from the following links:
- [linaro arm](https://releases.linaro.org/components/toolchain/binaries/7.3-2018.05/arm-linux-gnueabi/gcc-linaro-7.3.1-2018.05-x86_64_arm-linux-gnueabi.tar.xz)
- [linrao arm sysroot](https://releases.linaro.org/components/toolchain/binaries/7.3-2018.05/arm-linux-gnueabi/sysroot-glibc-linaro-2.25-2018.05-arm-linux-gnueabi.tar.xz)
- [linaro aarch64](https://releases.linaro.org/components/toolchain/binaries/7.3-2018.05/aarch64-linux-gnu/gcc-linaro-7.3.1-2018.05-x86_64_aarch64-linux-gnu.tar.xz)
- [linrao aarch64 sysroot](https://releases.linaro.org/components/toolchain/binaries/7.3-2018.05/aarch64-linux-gnu/sysroot-glibc-linaro-2.25-2018.05-aarch64-linux-gnu.tar.xz)

Download and decompress the required packages to a specified directory, for example, `/opt/openEuler_toolchain`.

2. **Create and compile a user-mode program.**

The following uses a `hello openEuler` program as an example to describe how to build a program that runs on the AArch64 standard root file system image.

Create a `hello.c` file on the host machine. The source code is as follows:
```c
#include <stdio.h>

int main(void)
{
    printf("hello openEuler\r\n");
}
```

On the host machine, run the following commands to compile using the corresponding toolchain:
```shell
export PATH=$PATH:/opt/openEuler_toolchain/gcc-linaro-7.3.1-2018.05-x86_64_aarch64-linux-gnu/bin
aarch64-linux-gnu-gcc --sysroot=<path-to-sysroot-glibc-linaro-2.25-2018.05-aarch64-linux-gnu> hello.c -o hello
mv hello /temp
```
Copy the cross-compiled hello program to the `/tmp` directory, and enable openEuler Embedded to access the directory on the host machine by referring to the description in **Shared File System Enabled Scenario**.

3. **Run the user-mode program.**

In openEuler Embedded, run the following commands to run the hello program:
```shell
cd /tmp/host
./hello
```
If the program runs successfully, **hello openEuler** is displayed in the Shell of openEuler Embedded.
