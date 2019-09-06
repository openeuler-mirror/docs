# 准备UEFI引导工具集EDK II<a name="ZH-CN_TOPIC_0184192548"></a>

## 概述<a name="section174915189245"></a>

统一的可扩展固件接口UEFI（Unified Extensible Firmware Interface）是一种全新类型的接口标准，用于开机自检、引导操作系统的启动，是传统BIOS的一种替代方案。EDK II是一套实现了UEFI标准的开源代码，在虚拟化场景中，通常利用EDK II工具集，通过UEFI的方式启动虚拟机。使用EDK II工具需要在虚拟机启动之前安装对应的软件包 ，本节介绍EDK II的安装方法。

## 安装方法<a name="section104849446248"></a>

安装工具集EDK II的操作步骤如下：

1.  安装edk软件包，命令如下：

    ```
    # yum install -y edk2-aarch64
    ```

2.  查询edk软件是否安装成功，命令如下：

    ```
    # rpm -qi edk2-aarch64
    ```

    若edk软件安装成功，命令和回显如下：

    ```
    # rpm -qi edk2-aarch64
    Name        : edk2-aarch64
    Version     : 20180815gitcb5f4f45ce
    Release     : 1.oe3
    Architecture: noarch
    Install Date: Mon 22 Jul 2019 04:52:33 PM CST
    Group       : Applications/Emulators
    ```


