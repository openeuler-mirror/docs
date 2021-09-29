本文档主要用于说明如何使用基于openEuler的面向嵌入式场景的版本。该版本的构建由Yocto完成，具体信息请参考[SIG-Yocto](https://gitee.com/openeuler/community/tree/master/sig/sig-Yocto)

# 获取镜像
openEuler已经预先构建了相应的镜像，支持arm和aarch64两种架构，并选择了qemu作为硬件开发板的承载，可以通过如下链接获得相应的镜像

- [qemu_arm](https://gitee.com/beilingxie/yocto-embedded-tools/tree/images/qemu-arm)
- [qemu_aarch64](https://gitee.com/beilingxie/yocto-embedded-tools/tree/images/qemu-aarch64)

相应镜像的的基本信息如下：

| 镜像类型 | 支持架构 | 开发板信息 |
| ------ | ------ | -----|
| qemu_arm | arm (32位, ARM Cortex A15) | 'virt' generic virtual platform |
| qemu_aarch64 | aarch64 (64位, ARM Cortex A57) | 'virt' generic virtual platform |

使用者可以在QEMU的通用虚拟平台(virt)上，分别体验32位ARM架构和64位ARM架构下的嵌入式Linux开发

## 镜像内容
每一类镜像又由3个部分组成，其相关信息如下：
| 镜像类型 | 名称 | 说明 |
| ------ | ------ | -----|
| 内核镜像 | zImage | 基于openEuler的linux 5.10内核镜像 |
| 极简根文件系统镜像 | initrd_tiny | 极简化的根文件系统镜像，只包含基本功能 |
| 标准根文件系统镜像 | initrd | 标准的根文件系统镜像，包含标准功能 |

每次运行时，根据需要，选择内核镜像和相应的根文件系统镜像。

- 内核镜像
  - 内核的相关功能可参见如下配置
     - [arm(cortex a15)](https://gitee.com/openeuler/yocto-embedded-tools/blob/openEuler-21.09/config/arm/defconfig-kernel)
     - [arm(cortex a57)](https://gitee.com/openeuler/yocto-embedded-tools/blob/openEuler-21.09/config/arm64/defconfig-kernel), 针对aarch64架构，额外增加了镜像自解压功能，可以参见相应的[patch](https://gitee.com/openeuler/yocto-embedded-tools/blob/openEuler-21.09/patches/arm64/0001-arm64-add-zImage-support-for-arm64.patch)
- 简化根文件系统(initrd_tiny)
  - 包含功能：busybox, 基本的glibc库
  - 说明：虽然功能简单，但也只有很小的内存消耗，适合进行Linux内核的相关探索
- 正常根文件系统(initrd)
  - 包含功能：audit, cracklib，OpenSSH, Linux PAM，shadow, iSula容器
  - 说明：在简化根文件系统的基础之上，增加了安全加固、OpenSSH、iSula容器等功能，适合进行更加丰富的功能探索

# 运行镜像

建议使用QEMU5.0以上版本运行镜像，由于一些额外功能（网络、共享文件系统)需要依赖QEMU的virtio-net, virtio-fs等特性，如未在QEMU中使能，则运行是可能会产生错误，此时可能需要从源码重新编译QEMU。

运行镜像时，建议把内核镜像和根文件系统镜像放在同一目录下，后续说明以正常根文件系统为例(initrd)

## 基本运行

基本运行时，qemu未使能网络和共享文件系统，使用者只能使用基本功能

arm
```sh
qemu-system-arm -M virt-4.0 -cpu cortex-a15 -nographic -kernel zImage -initrd initrd
```
aarch64
```sh
qemu-system-aarch64 -M virt-4.0 -cpu cortex-a57 -nographic -kernel zImage -initrd initrd
```

由于标准根文件系统镜像进行了安全加固，因此第一次启动时，需要为登录用户名root设置密码，且密码强度有相应要求, 需要数字、字母、特殊字符组合，例如openEuler@2021

## 使能共享文件系统
通过共享文件系统，使得宿主机(host)和客户机(guest)共享文件，这样在宿主机上交叉编译的程序，拷贝到共享目录中，即可在客户机上运行

arm
```sh
qemu-system-arm -M virt-4.0 -cpu cortex-a15 -nographic -kernel zImage -initrd initrd -device virtio-9p-device,fsdev=fs1,mount_tag=host -fsdev local,security_model=passthrough,id=fs1,path=/tmp
```
aarch64
```sh
qemu-system-aarch64 -M virt-4.0 -cpu cortex-a57 -nographic -kernel zImage -initrd initrd -device virtio-9p-device,fsdev=fs1,mount_tag=host -fsdev local,security_model=passthrough,id=fs1,path=/tmp
```

此处选择宿主机的/tmp目录作为共享目录

在客户机启动并登录之后，需要运行如下命令，映射(mount)共享文件系统
```sh
cd /tmp
mkdir host
mount -t 9p -o trans=virtio,version=9p2000.L host /tmp/host
```
即把共享文件系统映射到客户机的/tmp/host目录下

## 使能网络
通过qemu的virtio-net和宿主机上的虚拟网卡和网桥，可以使客户机访问网络

arm
```sh
qemu-system-arm -M virt-4.0 -cpu cortex-a15 -nographic -kernel zImage -initrd initrd -device virtio-net-device,netdev=tap0 -netdev tap,id=tap0,script=/etc/qemu-ifup
```
aarch64
```sh
qemu-system-aarch64 -M virt-4.0 -cpu cortex-a57 -nographic -kernel zImage -initrd initrd -device virtio-net-device,netdev=tap0 -netdev tap,id=tap0,script=/etc/qemu-ifup
```

在宿主机上需要建立名为tap0的虚拟网卡, 可以借助/etc/qemu-ifup脚本实现，其执行需要root权限，具体内容如下：

```sh
#!/bin/bash
ifconfig $1 172.10.10.1 up
```
通过qemu-ifup脚本，宿主机上将创建名为tap0的虚拟网卡，地址为172.10.10.1.客户机登陆后，执行如下命令：
```sh
ifconfig eth0 172.10.10.2
```
之后，宿主机和客户机就可以通过网络联通。如需客户机借助宿主机访问互联网，则需要在宿主机上建立网桥，此处不详述，如有需要，请自行查阅相关资料。

# 开发

## 环境准备
当前镜像采用的linaro arm/aarch64 gcc 7.3.1工具链构建的，可以从如下链接中获取相应工具链：
- [linaro arm](https://releases.linaro.org/components/toolchain/binaries/7.3-2018.05/arm-linux-gnueabi/gcc-linaro-7.3.1-2018.05-x86_64_arm-linux-gnueabi.tar.xz)
- [linrao arm sysroot](https://releases.linaro.org/components/toolchain/binaries/7.3-2018.05/arm-linux-gnueabi/sysroot-glibc-linaro-2.25-2018.05-arm-linux-gnueabi.tar.xz)
- [linaro aarch64](https://releases.linaro.org/components/toolchain/binaries/7.3-2018.05/aarch64-linux-gnu/gcc-linaro-7.3.1-2018.05-x86_64_aarch64-linux-gnu.tar.xz)
- [linrao aarch64 sysroot](https://releases.linaro.org/components/toolchain/binaries/7.3-2018.05/aarch64-linux-gnu/sysroot-glibc-linaro-2.25-2018.05-aarch64-linux-gnu.tar.xz)

## 用户态程序
以构建一个hello.c为例，运行在aarch64正常根文件系统中，源码如下：
```c
#include <stdio.h>

int main(void)
{
    printf("hello openEuler\r\n");
}
```
然后使用对应的工具链编译, 相应命令如下：
```sh
export PATH=$PATH:<path-to-gcc-linaro-7.3.1-2018.05-x86_64_aarch64-linux-gnu/bin>
aarch64-linux-gnu-gcc --sysroot=<path-to-sysroot-glibc-linaro-2.25-2018.05-aarch64-linux-gnu> hello.c -o hello
mv hello /temp
```
把交叉编译好的hello程序拷贝到/tmp目录下，然后参照使能共享文件系统中的描述，使得客户机可以访问宿主机的目录，然后可以在客户机上运行hello。
