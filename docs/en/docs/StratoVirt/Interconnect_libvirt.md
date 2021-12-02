# Interconnecting with libvirt

- [Interconnecting with libvirt](#interconnecting-with-libvirt)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [VM Configuration](#vm-configuration)
    - [VM Description](#vm-description)
    - [Virtual CPU and Memory](#virtual-cpu-and-memory)
    - [VM Devices](#vm-devices)
      - [Disks](#disks)
      - [Network Devices](#network-devices)
      - [Balloon Devices](#balloon-devices)
      - [Console Devices](#console-devices)
      - [rng Devices](#rng-devices)
      - [vsock Devices](#vsock-devices)
    - [System Architecture Configuration](#system-architecture-configuration)
    - [Memory Huge Pages](#memory-huge-pages)
    - [Configuration Examples](#configuration-examples)
      - [x86 Configuration Example](#x86-configuration-example)
      - [ARM Configuration Example](#arm-configuration-example)
  - [VM Management](#vm-management)
    - [VM Lifecycle Management](#vm-lifecycle-management)
    - [VM Login](#vm-login)

## Overview

libvirt is an upper-layer software that manages different types of Hypervisors using different drivers and provides unified and stable APIs.

In cloud scenarios, libvirt is widely used to manage large numbers of VMs. To facilitate the deployment, orchestration, and management of large-scale StratoVirt VMs, StratoVirt interconnects with libvirt through the libvirt northbound interface. In this case, you can use an XML file of libvirt to describe a VM, including the VM name, CPU, and disks.

This chapter describes the XML configurations supported by the StratoVirt platform and how to use the **virsh** command to manage VMs.

## Prerequisites

To interconnect StratoVirt with libvirt, the host must meet the following requirements:

- The YUM source has been correctly configured.
- libvirt has been correctly installed and started.
- StratoVirt has been correctly installed.

## VM Configuration

The libvirt tool uses an XML file to describe features about a VM, including the VM name, CPU, memory, disks, and NICs. You can manage the VM by modifying the XML configuration file.

Before interconnecting StratoVirt with libvirt, configure the XML file first. This section describes the supported XML configuration items and configuration methods during interconnection between StratoVirt and libvirt.



> ![](./public_sys-resources/icon-note.gif)**NOTE**
>
> Before using libvirt to manage StratoVirt VMs, pay attention to the features supported by StratoVirt, including mutually exclusive relationships between features, and feature configuration prerequisites and specifications. For details, see *VM_configuration* in CLI mode.



### VM Description

A VM XML file must contain the two basic elements that describe the VM: **domain** and **name**.

#### Elements

- **domain**: root element of the VM configuration, which is used to configure the Hypervisor type that runs the StratoVirt VM.

  Attribute **type**: domain type. In StratoVirt, the value is **kvm**.

-  **name**: VM name.

  A VM name contains a maximum of 255 characters, consisting of digits, letters, underscores, hyphens, and colons. Names of VMs on the same host must be unique.

#### Configuration Example

Assume that the VM name is StratoVirt. The following is the example:

```shell
<domain type='kvm'>
    <name>StratoVirt</name>
    ... 
</domain>
```



### Virtual CPU and Memory

This section describes how to configure virtual CPUs and memory.

#### Elements

- **vcpu**: number of virtual processors.

- **memory**: size of the virtual memory.

  Attribute **unit**: memory unit. The value can be **KiB** (2<sup>10</sup> bytes), **MiB** (2<sup>20</sup> bytes), **GiB** (2<sup>30</sup> bytes), or **TiB** (2<sup>40</sup> bytes).

  > ![](./public_sys-resources/icon-note.gif)**NOTE**
  >
  > StratoVirt does not support the CPU topology. Do not set this item.

#### Configuration Example

The following is an example of configuring 8 GiB memory and four virtual processors:

```xml
<domain type='kvm'>
    ... 
    <vcpu>4</vcpu>
    <memory unit='GiB'>8</memory>
    ... 
</domain>
```



### VM Devices

This section describes how to use the XML file to configure VM devices, including disk, NIC, rng, balloon, console, and vsock devices.

#### Disks

#### Elements

- Attribute **type**: type of the backend storage medium. In StraroVirt, the value is **file**.

  Attribute **device**: type of the storage medium presented to the VM. In StraroVirt, the value is **disk**.

- **driver**: details about the backend driver.

  Attribute **type**: disk format type. In StraroVirt, the value is **raw**. Currently, StratoVirt supports only **raw** disks.

  Attribute **iothread**: iothread configured for the disk. The value is the iothread ID. Before configuring the disk iothread, use the **iothread** element to configure the iothread quantity.

- **source**: backend storage medium.

  Attribute **file**: disk path.

- **target**: details about the backend driver.

  Attribute **dev**: disk name.

  Attribute **bus**: disk device type. In StraroVirt, the value is **virtio**.

- **iotune**: disk I/O feature.

  Attribute **total_iops_sec**: disk IOPS.

- **address**: attribute of the bus to which the device is to be mounted.

  Attribute **type**: bus type. In StratoVirt, the value is **pci**.

  Attribute **domain**: domain of the VM.

  Attribute **bus**: ID of the bus to which the device is to be mounted.

  Attribute **slot**: ID of the slot to which the device is to be mounted. The value range is [0, 31].

  Attribute **function**: ID of the function to which the device is to be mounted. The value range is [0, 7].

#### Configuration Example

Configure the disk path to `/home/openEuler-21.09-stratovirt.img`, iothread quantity to **1**, disk iothread to **iothread1**, and IOPS to **10000**, and mount the disk to the PCI bus whose bus ID is 1, slot ID is 0, and function ID is 0. The following is the example:

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



#### Network Devices

#### Elements

- **interface**: network interface.

  Attribute **type**: network device type.

- **mac**: virtual NIC address.

  Attribute **address**: virtual NIC address.

- **source**: backend network bridge.

  Attribute **bridge**: network bridge.

- **target**: backend NIC.

  Attribute **dev**: backend tap device.

- **model**: virtual NIC type.

  Attribute **type**: virtual NIC type. In StratoVirt, the value is **virtio**.

- **driver**: whether to enable the vhost.

  Attribute **name**: If **name** is set to **qemu**, the virtio-net device is used. If **driver** is not configured or **name** is set to **vhost**, the vhost-net device is used.

#### Configuration Example

Before configuring the network, [configure the Linux bridge](https://gitee.com/yanhuiling/docs/blob/stable2-20.03_LTS_SP2/docs/en/docs/Virtualization/environment-preparation.md#preparing-the-vm-network) first. Configure the MAC address to **de:ad:be:ef:00:01** and network bridge to **br0**. Use the virtio-net device, and mount it to the PCI bus whose bus ID is 2, slot ID is 0, and function ID is 0. The following is the example:

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

#### Balloon Devices

#### Elements

- **memballoon**: balloon device type.

  Attribute **model**: type of the balloon device. In StratoVirt, the value is **virtio**.

- **alias**: alias of the balloon device.

  Attribute **name**: ID of the balloon device.

  Attribute **autodeflate**: auto deflate feature. The options are **on** and **off**.

#### Configuration Example

Configure the balloon device, enable the auto deflate feature, and mount it to the PCI bus whose bus ID is 3, slot ID is 0, and function ID is 0. The following is the example:

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

#### Console Devices

The console device is mounted to the virtio-serial bus. Therefore, you need to create a virtio-serial device when creating a console device.

> ![](./public_sys-resources/icon-note.gif)**NOTE**
>
> The console device of StratoVirt does not support the multi-port feature. Each VM can be configured with only one console device.



#### Elements

- **controller**: controller.

  Attribute **type**: controller type. The value is **virtio-serial**.

- **alias**: alias.

  Attribute **name**: device ID.

- **console**: console device.

  Attribute **type**: redirection mode of the console device. The following redirection modes are supported: **pty**, **file**, and **unix**.

- **target**: configuration of the console device.

  Attribute **type**: console device type. In StratoVirt, the value is **virtio**.



#### Configuration Example

Configure the redirection mode to **pty** and mount the console device to the PCI bus whose bus ID is 4, slot ID is 0, and function ID is 0. The following is the example:

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

#### rng Devices

#### Elements

- **rng**: rng device.

  Attribute **model**: type of the rng device. In StratoVirt, the value is **virtio**.

- **rate**: rate at which the rng device generates random numbers.

  Attribute **period**: period of random number generation, in milliseconds. Currently, the StratoVirt does not allow you to set the period value. The default value (1000 milliseconds) is used.

  Attribute **bytes**: maximum number of bytes generated in a period.

- **backend**: rng device backend. The value is the path of the rng device on the host.

  Attribute **model**: type of the backend device. In StratoVirt, the value is **random**.



#### Configuration Example

Configure that a maximum of 1234 bytes are generated within 1000 ms. The path of the rng device on the host is **/dev/random**, and the device is mounted to the PCI bus whose bus ID is 5, slot ID is 0, and function ID is 0. The following is the example:

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



#### vsock Devices

#### Elements

- **vsock**: vsock device.

  Attribute **model**: type of the vsock device. In StratoVirt, the value is **virtio**.

- **cid**: CID of the vsock device.

  Attribute "address": cid value.

#### Configuration Example

Configure **cid** to **8** and mount the device to the PCI bus whose bus ID is 6, slot ID is 0, and function ID is 0. The following is the example:

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



### System Architecture Configuration

The XML file also contains some architecture-related configurations, such as the pflash and mainboard.

#### Elements

- **os**: defines VM startup parameters.

  Child element "type": VM type. Attribute **arch** indicates the architecture and **machine"" indicates the mainboard type. In StratoVirt, the AArch64 architecture supports only the virt mainboard, and the x86_64 architecture supports only the Q35 mainboard.

  Child element **kernel**: kernel path.

  Child element **cmdline**: command-line startup parameters.

  Child element **loader**: loading firmware. Attribute **readonly** indicates that the firmware is read-only and **type** indicates the firmware type. In StratoVirt, the type value is **pflash**.

- **features**: features supported by Hypervisors.

  Child element **acpi**: whether to support ACPI. The ACPI feature is used in StratoVirt, so it must be configured.

  Child element **gic**: interrupt processor specified for ARM processors. Attribute **version** indicates the GIC version. In StratoVirt, the value is **3**.

#### Configuration Example

Configure the CPU architecture of the VM to ARM and the mainboard to virt. The startup command is `console=ttyAMA0 root=/dev/vda reboot=k panic=1 rw`. The pflash path is `/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw`, which is read-only. The kernel path is `/home/std-vmlinuxz`. The following is the example:

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



### Memory Huge Pages

##### Elements

- **memoryBacking**: configures the memory information.

- **hugepages**: configures memory huge pages.

- **page**: configures huge pages.

  Attribute **size**: size of huge memory pages.

  Attribute **unit**: unit of the huge page size.



#### Configuration Example

The following is an example of configuring 2 MiB huge pages:

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



### Configuration Examples

#### x86 Configuration Example

Configure a server named StratoVirt with 8 GiB memory, 1 GiB huge pages, and four vCPUs. Its architecture is x86_64 and the mainboard type is Q35. The following is a configuration example of the corresponding XML file:

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



#### ARM Configuration Example

Configure a server named StratoVirt with 8 GiB memory, 1 GiB huge pages, four vCPUs. Its architecture is AArch64 and the mainboard type is virt. The configuration example of the corresponding XML file is as follows:

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



## VM Management

libvirt uses **virsh** commands to manage VMs. After the StratoVirt platform is interconnected with libvirt, only the following commands for interaction with StratoVirt are supported:

- **create**: creates a VM.

- **suspend**: suspends a VM.

- **resume**: resumes a VM.

- **destroy**: destroys a VM.

- **console**: logs in to a VM through the console.

  

> ![](./public_sys-resources/icon-note.gif)**NOTE**
>
> StratoVirt does not support commands for restarting or shutting down VMs.



### VM Lifecycle Management

If you have created a VM configuration file named **stratovirt** in st.xml format, you can use the following commands for VM lifecycle management:

- Create a VM.

  ```shell
  virsh create st.xml
  ```

  After the VM is created, you can run the **virsh list** command to check whether a VM named **stratovirt** exists.

- Suspend a VM.

  ```shell
  virsh suspend stratovirt
  ```

  After the VM is suspended, it stops running. You can run the **virsh list** command to check whether the status of VM **stratovirt** is **paused**.

- Resume a VM.

  ```
  virsh resume stratovirt
  ```

  After the VM is resumed, you can run the **virsh list** command to check whether the status of VM **stratovirt** is **running**.

- Destroy a VM.

  ```
  virsh destroy stratovirt
  ```

  After the VM is destroyed, you can run the **virsh list** command to check that VM **stratovirt** does not exist.



### VM Login

After the VM is created, you can run the **virsh console** command to log in to it to perform specific operations. If the VM name is **stratovirt**, run the following command:

```
virsh console stratovirt
```



> ![](./public_sys-resources/icon-note.gif)**NOTE**
>
> To use the **virsh console** command, set the redirection type of the console device to **pty** in the XML file.
