# 配置USB直通设备<a name="ZH-CN_TOPIC_0225484549"></a>

## 概述<a name="section1284617157403"></a>

当虚拟机配置好USB控制器后，就可以通过设备直通的方式将主机上的物理USB设备挂载到虚拟机内部供虚拟机使用。在虚拟化场景下，除了支持静态配置以外还同时支持USB设备的热插/拔操作，即在虚拟机处于运行状态的时候挂载/卸载USB设备。

## 注意事项<a name="section14717471434"></a>

-   一个USB设备只能直通给一台虚拟机使用
-   配置了直通USB设备的虚拟机不支持热迁移
-   虚拟机配置文件中直通的USB设备不存在时，虚拟机会创建失败
-   对一个正在读写的USB存储设备进行强制热拔操作有可能会损坏USB设备内的文件

## 配置说明<a name="section6688184225519"></a>

这里介绍为虚拟机配置USB设备的配置内容说明。

USB设备的XML描述：

```
<hostdev mode='subsystem' type='usb' managed='yes'>
    <source>        
        <address bus='m' device='n'/>
    </source>
    <address type='usb' bus='x' port='y'/>
</hostdev>
```

-   <address bus='m' device='n'/\>，其中，m表示该USB设备在主机上的bus地址，n表示device ID编号。
-   <address type='usb' bus='x' port='y'\> 表示该USB设备要挂载到虚拟机指定的USB控制器。其中x表示控制器ID，与虚拟机所配置的USB控制器index编号相对应，y表示port地址。用户配置直通USB设备的时候需要配置这个字段，确保设备挂载的控制器与预期相符。

## 配置方法<a name="section19318220011"></a>

配置USB直通的步骤如下：

1.  为虚拟机配置USB控制器，配置方法请参见[配置USB控制器](配置USB控制器.md)。
2.  查询主机上的USB设备信息。

    通过lsusb命令（需要安装usbutils软件包）查询主机上的USB设备信息，包含bus地址、device地址、设备厂商ID、设备ID和产品描述信息等。例如：

    ```
    # lsusb
    ```

    ```
    Bus 008 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
    Bus 007 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
    Bus 006 Device 002: ID 0bda:0411 Realtek Semiconductor Corp. 
    Bus 006 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
    Bus 005 Device 003: ID 136b:0003 STEC 
    Bus 005 Device 002: ID 0bda:5411 Realtek Semiconductor Corp. 
    Bus 005 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 001 Device 003: ID 12d1:0003 Huawei Technologies Co., Ltd. 
    Bus 001 Device 002: ID 0bda:5411 Realtek Semiconductor Corp. 
    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
    ```

3.  准备USB设备的XML描述文件，注意在设备热拔之前，请确保USB设备当前不在使用当中，否则可能造成数据丢失。
4.  执行热插、热拔命令。

    假设虚拟机名称为openEulerVM，对应的配置文件为usb.xml。

    -   热插USB设备，只对当前运行的虚拟机有效，虚拟机冷重启后需要重新配置。

        ```
        # virsh attach-device openEulerVM usb.xml --live
        ```

    -   热插USB设备，持久化该配置，即该虚拟机重启后该设备会自动直通给该虚拟机使用。

        ```
        # virsh attach-device openEulerVM usb.xml --config
        ```

    -   热拔USB设备，只对当前运行的虚拟机有效，持久化配置的USB设备在虚拟机重启后USB设备会自动直通给该虚拟机。

        ```
        # virsh detach-device openEulerVM usb.xml --live
        ```

    -   热拔USB设备，持久化该配置。

        ```
        # virsh detach-device openEulerVM usb.xml --config
        ```



