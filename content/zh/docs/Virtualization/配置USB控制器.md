# 配置USB控制器<a name="ZH-CN_TOPIC_0225484548"></a>

## 概述<a name="section43851918151117"></a>

USB控制器是为虚拟机上的USB设备提供具体USB功能的虚拟控制器设备，在虚拟机内部使用USB设备必须给虚拟机配置USB控制器。当前openEuler支持如下三种USB控制器：

-   UHCI（Universal Host Controller Interface）：通用主机控制器接口，也称为USB 1.1主机控制器规范。
-   EHCI（Enhanced Host Controller）：增强主机控制器接口，也称为USB 2.0主机控制器规范。
-   xHCI（eXtensible Host Controller Interface）：可扩展主机控制器接口，也称为USB 3.0主机控制器规范。

## 注意事项<a name="section205681456172116"></a>

-   主机服务器上需存在支持USB 1.1、USB 2.0和USB 3.0标准的USB控制器硬件和模块。
-   为虚拟机配置USB控制器时，请按照USB 1.1、USB 2.0到USB 3.0的顺序来配置。
-   一个xHCI控制器有8个端口，最多可以挂载4个USB 3.0设备和4个USB 2.0设备。一个EHCI控制器有6个端口，最多可以挂载6个USB2.0设备。一个UHCI控制器有2个端口，最多可以挂载2个USB 1.1设备。
-   每台虚拟机最多支持配置一个相同类型的USB控制器。
-   不支持热插拔USB控制器。
-   若虚拟机没有安装USB 3.0的驱动，可能无法识别xHCI控制器，USB 3.0驱动下载和安装方法请参见对应OS发行商官方说明。
-   为了不影响操作系统的兼容性，为虚拟机配置USB接口的tablet设备时，请指定USB控制器bus号为0（默认挂载到USB 1.1控制器上）。

## 配置方法<a name="section131052195255"></a>

这里介绍为虚拟机配置USB控制器的配置内容说明。建议同时配置USB 1.1、USB 2.0和USB 3.0，做到同时兼容三种设备。

USB 1.1控制器（UHCI）的XML配置项为：

```
<controller type='usb' index='0' model='piix3-uhci'>
</controller>
```

USB 2.0控制器（EHCI）的XML配置为：

```
<controller type='usb' index='1' model='ehci'>
</controller>
```

USB 3.0控制器（xHCI）的XML配置为：

```
<controller type='usb' index='2' model='nec-xhci'>
</controller>
```

