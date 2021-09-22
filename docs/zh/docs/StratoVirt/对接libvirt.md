# 对接 libvirt

[[toc]]

## 概述

libvirt 是一个管理 hypervisor 的上层软件，它通过不同的驱动统一管理不同类型的 hypervisor ，并对外提供统一、稳定的应用程序接口。

在云场景中，业内广泛使用 libvirt 管理大规模的虚拟机。为了方便地对大规模的 StratoVirt 虚拟机进行部署、编排和管理，StratoVirt 标准虚拟化支持对接 libvirt，打通了 libvirt 北向接口。用户可以通过 libvirt 对应的 XML 文件描述一个虚拟机，包括虚拟机名称、CPU、磁盘等。

本章介绍 StratoVirt 平台支持的 XML 配置，以及如何使用 virsh 命令管理虚拟机。

## 前提条件

StratoVirt 对接 libvirt，主机需要满足如下条件：

- 已正确配置 yum 源
- 已正确安装并启动 libvirt 
- 已正确安装 StratoVirt 

## 虚拟机配置

libvirt 工具采用 XML 格式的文件描述一个虚拟机特征，包括虚拟机名称、CPU、内存、磁盘、网卡等信息。用户可以通过修改配置文件，对虚拟机进行管理。

StratoVirt 对接 libvirt 之前，需要先配置 XML 文件。本小节介绍 StratoVirt 对接 libvirt 时支持的 XML 配置项以及配置方式。



> ![](./public_sys-resources/icon-note.gif)**说明**
>
> 使用 libvirt 管理 StratoVirt 虚拟机前，应该注意到 StratoVirt 当前支持的特性、特性之间的互斥关系、特性的配置前提条件、规格等，详细信息请参见命令行方式的 "虚拟机配置”章节。



### 虚拟机描述

虚拟机 XML 文件必须包含描述虚拟机的最基本元素： domain 和 name 。

#### 元素介绍

- domain  ： 虚拟机配置的根元素，用于配置运行 StratoVirt 虚拟机的 hypervisor 类型。

  属性 type ：domain 的类型，在 StratoVirt 虚拟化中，该值为 kvm 。

-  name ：虚拟机名称。

  虚拟机名称是一个长度不超过 255 字符的字符串。同一个主机上的虚拟机名称不能重复，虚拟机名称必须由数字、字母、“_”、“－”、“:” 组成。

#### 配置示例

假设配置虚拟机名称为 StratoVirt ，示例为：

```shell
<domain type='kvm'>
    <name>StratoVirt</name>
    ... 
</domain>
```



### 虚拟CPU和内存

本节介绍虚拟 CPU 和虚拟内存的配置。

#### 元素介绍

- vcpu：虚拟处理器的个数。

- memory：虚拟内存大小。

  属性 unit ：指定内存单位，属性值支持 KiB（2<sup>10</sup> 字节）、MiB（2<sup>20</sup> 字节）、GiB（2<sup>30</sup> 字节）、TiB（2<sup>40</sup> 字节）等。

  > ![](./public_sys-resources/icon-note.gif)**说明**
  >
  > StratoVirt 暂不支持 CPU 拓扑结构，请勿配置该项。

#### 配置示例

配置 8GiB 内存，4 个虚拟处理器的示例如下：

```xml
<domain type='kvm'>
    ... 
    <vcpu>4</vcpu>
    <memory unit='GiB'>8</memory>
    ... 
</domain>
```



### 虚拟机设备

本节介绍如何使用 XML 文件配置虚拟机设备：磁盘，网卡，rng，balloon，console，vsock 设备。

#### 磁盘

###### 元素介绍

- 属性 type ：指定后端存储介质类型，在 StratoVirt 虚拟化中，该值为 file 。

  属性 device：呈现给虚拟机的存储介质类型，在 StratoVirt 虚拟化中，该值为 disk 。

- driver：指定后端驱动的详细信息。

  属性 type ：磁盘的格式类型，在 StratoVirt 虚拟化中，该值为 raw 。StratoVirt 当前只支持 raw 格式的磁盘。

  属性 iothread：为磁盘配置 iothread ，取值为 iothread 编号。在配置磁盘的 iothread 之前，需使用 iothread 元素配置 iothread 的个数。

- source： 指定后端存储介质。

  属性 file：指定磁盘路径。

- target：指定后端驱动的详细信息。

  属性 dev：指定磁盘名称。

  属性 bus：指定磁盘设备的类型，在 StratoVirt 虚拟化中，该值为 virtio 。

- iotune： 指定磁盘 IO 特性。

  属性 total_iops_sec：设置磁盘 iops 的值。

- address：用于设置设备所要挂载的总线属性。

  属性 type：总线类型，在 StratoVirt 虚拟化中，该值为 pci 。

  属性 domain：虚拟机的域。

  属性 bus：设备将要挂载的 bus 号。

  属性 slot：设备将要挂载的 slot 号，取值范围为：[0, 31] 。

  属性 function：设备将要挂载的 function 号，取值范围为：[0, 7] 。

###### 配置示例

配置磁盘路径为：`/home/openEuler-21.09-stratovirt.img`，配置 1 个 iothread，并且磁盘 iothread 配置为 iothread1 ，iops 为 10000，并将其挂载在 bus 为 1、slot 为 0，function 为 0  的 PCI 总线上，示例为：

```xml
<domain type='kvm'>
    ...
    <iothreads>1</iothreads>
    <devices>
        <disk type='file' device='disk'>
	    <driver name='qemu' type='raw' iothread="1"/>
	    <source file='/home/openEuler-21.09-stratovirt.img'/>
	    <target dev='hda' bus='virtio'/>
        <iotune>
        	<total_iops_sec>10000</total_iops_sec>    
        </iotune>
	    <address type='pci' domain='0x0000' bus='0x01' slot='0x00' function='0x00' />
	</disk>
    ...
    </devices>
</domain>
```



#### 网络设备

###### 元素介绍

- interface：网络接口

  属性 type：指定网络设备类型。

- mac：虚拟网卡地址

  属性 address：虚拟网卡地址。

- source： 指定后端网桥

  属性 bridge：指定网桥。

- target：指定后端网卡

  属性 dev：指定后端的 tap 设备。

- model： 虚拟网卡类型

  属性 type： 虚拟网卡类型，在 StratoVirt 虚拟化中，该值为 virtio。

- driver：用来指定是否开启 vhost 。

  属性 name：如果设置 name 为 qemu 则使用 virtio-net 设备，如果不配置 driver 或者 name 值为 vhost ，则使用 vhost-net 设备。

###### 配置示例

配置网络前请参考 [配置linux网桥](https://docs.openeuler.org/zh/docs/20.03_LTS_SP2/docs/Virtualization/%E5%87%86%E5%A4%87%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83.html#%E5%87%86%E5%A4%87%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%BD%91%E7%BB%9C)，配置好 Linux 网桥。配置 mac 地址为：`de:ad:be:ef:00:01`，网桥为配置好的 br0 ，使用 virtio-net 设备，并将其挂载在 bus 为 2、slot 为 0，function 为 0  的 PCI 总线上，示例为：

```xml
<domain type='kvm'>
    ...
    <devices>
        <interface type='bridge'>
            <mac address='de:ad:be:ef:00:01' />
            <source bridge='br0'/> 
            <model type='virtio'/>
            <driver name='qemu'/>
            <address type='pci' domain='0x0000' bus='0x02' slot='0x00' function='0x00' />
        </interface>
        ...
    </devices>
</domain>
```

#### balloon 设备

###### 元素介绍

- memballoon：balloon 设备类型

  属性 model ：指定 balloon 设备类型，在 StratoVirt 虚拟化中，该值为 virtio 。

- alias：balloon 设备的别名

  属性 name ：balloon 设备的 id 。

  属性 autodeflate ：设置 auto deflate（自动收缩）特性，可选值为：`on` 、`off` 。

###### 配置示例

配置 balloon 设备，开启 autodeflate 特性，并将其挂载在 bus 为 3、slot 为 0，function 为 0  的 PCI 总线上，示例为：

```xml
<domain type='kvm'>
    ...
    <devices>
        <memballoon model='virtio'>
            <alias name='balloon0' autodeflate='on'/>
            
            <address type='pci' domain='0x0000' bus='0x03' slot='0x00' function='0x00' />
        </memballoon>
        ...
    </devices>
</domain>
```

#### console 设备

由于 console 设备挂载在 virtio-serial 下的总线上，所以在创建 console 设备时，需要创建 virtio-serial 设备。

> ![](./public_sys-resources/icon-note.gif)**说明**
>
> StratoVirt 的 console 设备暂时不支持多端口特性，每个虚拟机只能配置一个 console 设备。



###### 元素介绍

- controller：控制器

  属性 type：控制器类型，此处值为 virtio-serial 。

- alias：别名

  属性 name：设备的 id。

- console：console 设备

  属性 type：指定 console 设备的重定向方式。支持的重定向方式有：pty ， file 和 unix 。

- target：配置 console 设备。

  属性 type：指定 console 设备类型，在 StratoVirt 虚拟化中，该值为 virtio 。



###### 配置示例

配置重定向方式为 pty ，并将其挂载在 bus 为 4、slot 为 0，function 为 0  的 PCI 总线上，示例为：

```xml
<domain type='kvm'>
    ...
    <devices>
        <controller type='virtio-serial'>
            <alias name='virt-serial0'/>
            <address type='pci' domain='0x000' bus='0x04' slot='0x00' function='0x00'/>
        </controller>
        <console type='pty'>
            <target type='virtio'/>
            <alias name='console0'/>
        </console>
        ...
    </devices>
</domain>
```

#### rng 设备

###### 元素介绍

- rng：rng 设备

  属性 model：指定 rng 设备类型，在 StratoVirt 虚拟化中，该值为 virtio 。

- rate：rng 设备产生随机数速率

  属性 period ：用于设置随机数产生周期，单位为毫秒，当前 StratoVirt 不支持设置周期值，默认值为1000毫秒，请将该值设置为1000。

  属性 bytes ：周期内产生的最大字节数。

- backend：设置 rng 设备后端，值为 host 中 rng 设备的路径

  属性 model：用于指定后端设备类型，在 StratoVirt 虚拟化中，该值为 random 。



###### 配置示例

配置周期为 1000ms 内最多产生 1234 字节，rng 设备在 host 中路径为 `/dev/random` ，并将其挂载在 bus 为 5、slot 为 0，function 为 0  的 PCI 总线上，示例为：

```xml
<domain type='kvm'>
    ...
    <devices>
        <rng model='virtio'>
            <rate period='1000' bytes='1234'/>
            <backend model='random'>/dev/random`</backend>
            <address type='pci' domain='0x000' bus='0x05' slot='0x00' function='0x00'/>
        </rng>
        ...
    </devices>
</domain>
```



#### vsock 设备

###### 元素介绍

- vsock：vsock 设备

  属性 model：指定 vsock 设备类型，在 StratoVirt 虚拟化中，该值为 virtio 。

- cid ：设置 vsock 设备的 cid

  属性 address：用于设置 cid 的值

###### 配置示例

配置 cid 为 8，并将其挂载在 bus 为 6、slot 为 0，function 为 0  的 PCI 总线上，示例为：

```xml
<domain type='kvm'>
    ...
    <devices>
        <vsock model='virtio'>
            <cid auto='no' address='8'/>
            <address type='pci' domain='0x000' bus='0x06' slot='0x00' function='0x00'/>
        </vsock>
        ...
    </devices>
</domain>
```



### 体系架构相关配置

XML 中还有一些体系架构相关的配置，如 pflash、主板等。

#### 元素介绍

- os：定义虚拟机启动参数

  子元素 type ：指定虚拟机类型，属性 arch 表示架构，属性 machine 表示主板类型，在 StratoVirt 虚拟化中，AArch64 架构只支持 virt 主板，x86_64 架构只支持 Q35 主板。

  子元素 kernel ：用于指定 kernel 路径。

  子元素 cmdline ：指定命令行启动参数。

  子元素 loader ：指定加载固件，属性 readonly 表示是否只读；属性 type 表示类型，在 StratoVirt 虚拟化中，该值为 pflash 。

- features：hypervisor 支持的以下特性

  子元素 acpi ：是否支持 ACPI，在 StratoVirt 虚拟化中使用了 ACPI 特性，所以该特性必须配置。

  子元素 gic ：ARM 处理器指定中断处理器，属性 version 表示 GIC 的版本，在 StratoVirt 虚拟化中，该值为 3 。

###### 配置示例

配置虚拟机 CPU 架构  ARM，主板为 virt ，启动命令行为：`console=ttyAMA0 root=/dev/vda reboot=k panic=1 rw` 。pflash 路径为：`/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw`，属性为只读。 kernel 路径为：`/home/std-vmlinuxz`。示例为：

```xml
<domain type='kvm'>
    ...
    <os>
        <type arch='aarch64' machine='virt'>hvm</type>
        <kernel>/home/std-vmlinuxz</kernel>
        <cmdline>console=ttyAMA0 root=/dev/vda reboot=k panic=1 rw</cmdline>
        <loader readonly='yes' type='pflash'>`/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw`</loader>
    </os>
    ...
</domain>
```



### 内存大页

###### 元素介绍

- memoryBacking：表示配置内存相关的信息

- hugepages ：配置内存大页

- page ：大页配置

  属性 size ：内存大页的大小

  属性 unit ：大页大小的单位



###### 配置示例

配置 2MiB 大页示例如下：

```xml
<domain type='kvm'>
    ...
    <memoryBacking>
    <hugepages>
        <page size='2' unit='MiB' />
    </hugepages>
    </memoryBacking>
    ...
</domain>
```



### 配置示例

#### x86 配置示例

配置一台名为 StratoVirt ，内存 8GiB ，配置 1GiB 单位的内存大页，4 个虚拟 CPU，架构为 x86_64 ，主板类型为 Q35  ，对应 XML 文件的配置示例如下：

```xml
<domain type='kvm'>
    <name>StratoVirt</name>
    <memory unit='GiB'>8</memory>
    <!-- hugepages -->
    <memoryBacking>
    <hugepages>
        <page size='1' unit='GiB' />
    </hugepages>
    </memoryBacking>
    <vcpu>4</vcpu>
    <!-- iothread -->
    <iothreads>1</iothreads>
    <os>
    <type arch='x86_64' machine='q35'>hvm</type>
    <kernel>/path/to/standard_vm_kernel</kernel>
    <cmdline>console=hvc0 root=/dev/vda reboot=k panic=1 rw</cmdline>
    <loader readonly='yes' type='pflash'>/path/to/pflash</loader>
    <nvram template='/path/to/OVMF_VARS'>/path/to/OVMF_VARS</nvram>
    </os>
    <features>
        <acpi/>
    </features>
    <devices>
        <emulator>/path/to/StratoVirt_binary_file</emulator>
        <controller type='pci' index='0' model='pcie-root' />
        <!-- pcie-root-port -->
        <controller type='pci' index='1' model='pcie-root-port' />
        <controller type='pci' index='2' model='pcie-root-port' />
        <controller type='pci' index='3' model='pcie-root-port' />
        <controller type='pci' index='4' model='pcie-root-port' />
        <controller type='pci' index='5' model='pcie-root-port' />
        <controller type='pci' index='6' model='pcie-root-port' />
        <controller type='pci' index='7' model='pcie-root-port' />
        <!-- block -->
        <disk type='file' device='disk'>
            <driver name='qemu'  type='raw' iothread='1'/>
            <source file='/path/to/rootfs'/>
            <target dev='hda' bus='virtio'/>
            <iotune>
                <total_iops_sec>1000</total_iops_sec>
            </iotune>
            <address type='pci' domain='0x000' bus='0x01' slot='0x00' function='0x00'/>
        </disk>
        <!-- net -->
        <interface type='bridge'>
            <mac address='de:ad:be:ef:00:01'/>
            <source bridge='qbr0'/>
            <model type='virtio'/>
            <address type='pci' domain='0x000' bus='0x02' slot='0x00' function='0x00'/>
        </interface>
        <!-- virtio-serial -->
        <controller type='virtio-serial' index='0'>
            <alias name='virt-serial0'/>
            <address type='pci' domain='0x000' bus='0x03' slot='0x00' function='0x00'/>
        </controller>
        <console type='pty'>
            <target type='virtio' port='0'/>
            <alias name='console0'/>
        </console>
        <!-- balloon -->
        <memballoon model='virtio'>
            <alias name='balloon0'/>
            <address type='pci' domain='0x000' bus='0x04' slot='0x00' function='0x00'/>
        </memballoon>
        <!-- rng -->
        <rng model='virtio'>
            <rate period='1000' bytes='1234'/>
            <backend model='random'>/path/to/random_file</backend>
            <address type='pci' domain='0x000' bus='0x05' slot='0x00' function='0x00'/>
        </rng>
        <!-- vsock -->
        <vsock model='virtio'>
            <cid auto='no' address='3'/>
            <address type='pci' domain='0x000' bus='0x06' slot='0x00' function='0x00'/>
        </vsock>
    </devices>
</domain>
```



#### ARM 配置示例

如果想要配置一台名为 StratoVirt ，内存 8GiB，配置 1GiB 单位大页，4 个虚拟 CPU，架构为 aarch64 ，主板类型为 virt ，对应 XML 文件的配置示例如下：

```xml
<domain type='kvm'>
    <name>StratoVirt</name>
    <memory unit='GiB'>8</memory>
    <!-- hugepages -->
    <memoryBacking>
    <hugepages>
        <page size='1' unit='GiB' />
    </hugepages>
    </memoryBacking>
    <vcpu>4</vcpu>
    <!-- iothread -->
    <iothreads>1</iothreads>
    <os>
    <type arch='aarch64' machine='virt'>hvm</type>
    <kernel>/path/to/standard_vm_kernel</kernel>
    <cmdline>console=ttyAMA0 root=/dev/vda reboot=k panic=1 rw</cmdline>
    <loader readonly='yes' type='pflash'>/path/to/pflash</loader>
    </os>
    <features>
        <acpi/>
        <gic version='3'/>
    </features>
    <devices>
        <emulator>/path/to/StratoVirt_binary_file</emulator>
        <controller type='pci' index='0' model='pcie-root'/>
        <!-- block -->
        <disk type='file' device='disk'>
            <driver name='qemu'  type='raw' iothread='1'/>
            <source file='/path/to/rootfs'/>
            <target dev='hda' bus='virtio'/>
            <address type='pci' domain='0x000' bus='0x00' slot='0x01' function='0x00'/>
            <iotune>
                <total_iops_sec>1000</total_iops_sec>
            </iotune>
        </disk>
        <!-- net -->
        <interface type='bridge'>
            <mac address='de:ad:be:ef:00:01'/>
            <source bridge='qbr0'/>
            <model type='virtio'/>
            <address type='pci' domain='0x000' bus='0x00' slot='0x02' function='0x00'/>
        </interface>
        <!-- virtio-serial -->
        <controller type='virtio-serial' index='0'>
            <alias name='virt-serial0'/>
            <address type='pci' domain='0x000' bus='0x00' slot='0x03' function='0x00'/>
        </controller>
        <console type='pty'>
            <target type='virtio' port='0'/>
            <alias name='console0'/>
        </console>
        <!-- balloon -->
        <memballoon model='virtio'>
            <alias name='balloon0'/>
            <address type='pci' domain='0x000' bus='0x00' slot='0x04' function='0x00'/>
        </memballoon>
        <!-- rng -->
        <rng model='virtio'>
            <rate period='1000' bytes='1234'/>
            <backend model='random'>/path/to/random_file</backend>
            <address type='pci' domain='0x000' bus='0x00' slot='0x05' function='0x00'/>
        </rng>
        <!-- vsock -->
        <vsock model='virtio'>
            <cid auto='no' address='3'/>
            <address type='pci' domain='0x000' bus='0x00' slot='0x06' function='0x00'/>
        </vsock>
    </devices>
</domain>
```



## 管理虚拟机

libvirt 使用 virsh 命令来管理虚拟机，当 StratoVirt 平台和 libvirt 对接时，仅支持以下与 StratoVirt 交互的命令：

- create：创建虚拟机

- suspend：挂起虚拟机

- resume：恢复虚拟机

- destroy：销毁虚拟机

- console：通过 console 登录虚拟机

  

> ![](./public_sys-resources/icon-note.gif)**说明**
>
> StratoVirt 暂不支持虚拟机重启、虚拟机关机等命令。



### 管理虚拟机生命周期

假设用户已经按照需要完成一个名为 stratovirt 的虚拟机配置文件 st.xml ，则对应生命周期管理的命令如下：

- 创建虚拟机

  ```shell
  virsh create st.xml
  ```

  虚拟机创建完成后，可以通过 **virsh list** 命令查看，会存在一个名为 stratovirt 的虚拟机。

- 挂起虚拟机

  ```shell
  virsh suspend stratovirt
  ```

  虚拟机挂起后，虚拟机暂停运行。可以通过 **virsh list** 命令查看，虚拟机 stratovirt 的状态为 paused 。

- 恢复虚拟机

  ```
  virsh resume stratovirt
  ```

  虚拟机恢复后，可以通过 **virsh list** 命令查看，虚拟机 stratovirt 的状态为 running 。

- 销毁虚拟机

  ```
  virsh destroy stratovirt
  ```

  虚拟机销毁后，使用 **virsh list** 查看虚拟机，发现虚拟机 stratovirt 不存在。



### 登录虚拟机

虚拟机创建完成后，可以通过 **virsh console** 登录虚拟机内部操作虚拟机。假设虚拟机名称为 stratovirt，参考命令如下：

```
virsh console stratovirt
```



> ![](./public_sys-resources/icon-note.gif)**说明**
>
> 为了可以正常使用 virsh console 命令，需要在 XML 中配置 console 设备的重定向类型为  pty 。

