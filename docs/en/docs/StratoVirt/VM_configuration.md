# Configuring VMs
## Overview

With StratoVirt, you can use command line parameters to specify VM configurations. Alternatively, you can interconnect StratoVirt with libvirt and use XML files to configure VMs. This chapter describes the command-line configuration mode.

> ![](./public_sys-resources/icon-note.gif)**NOTE**
>
> In this document, **/path/to/socket** indicates the socket file in the user-defined path.
>
> In openEuler 21.09 and later versions, JSON files are not supported.

## Specifications

StratoVirt supports lightweight and standard VMs.

- Lightweight VMs use the lightweight microVM mainboard and the MMIO bus.
- Standard VMs support standard startup. They use the Q35 mainboard on x86 platforms, and the virt mainboard and PCI bus on AArch64 platforms.

### Lightweight VMs

- Number of VM CPUs: [1, 254]
- VM memory size: [256 MiB, 512 GiB]
- Number of VM disks (including hot plugged-in disks): [0, 6]
- Number of VM NICs (including hot plugged-in NICs): [0, 2]
- The VM console device supports only one connection.
- If the host CPU architecture is x86_64, a maximum of 11 MMIO devices can be configured. However, you are advised to configure a maximum of two other devices except disks and NICs. On the AArch64 platform, a maximum of 160 MMIO devices can be configured. You are advised to configure a maximum of 12 other devices except disks and NICs.

### Standard VMs

- Number of VM CPUs: [1, 254]
- VM memory size: [256 MiB, 512 GiB]
- The VM console device supports only one connection.
- Only one console device is supported.
- A maximum of 32 PCI devices are supported.
- PCI bus to which the PCI device is mounted: slot ID [0, 32); function ID [0, 8).

## Minimal Configuration

The minimum configuration for running StratoVirt is as follows:

- Use the Linux kernel image in PE or bzImage format (x86_64 only).
- Set the rootfs image as the virtio-blk device and add it to kernel parameters.
- Use api-channel to control StratoVirt.
- To use a serial port for login, add one to the kernel startup command line. The standard model on the AArch64 platform is ttyAMA0, and the model used in other scenarios is ttyS0.

## Configuration Description

### **Command Format**

The format of the command configured by running cmdline is as follows:

**$ /path/to/stratovirt** *- [Parameter 1] [Option]-[Parameter 2] [Option]...*

### **Usage Instructions**

1. To ensure that the socket required by the api-channel can be created, run the following command to clear the environment:

   ```
   $rm [parameter] *[user-defined socket file path]*
   ```
2. Run the cmdline command.

   ```
   $/path/to/stratovirt - *[Parameter 1] [Parameter option] - [Parameter 2] [Parameter option]*...
   ```

### Basic Parameters

The following table lists the basic configuration information.

| Parameter| Option| Description|
| ---------------- | ----------------------------------------------- | -------------------------------------------------------------------------- |
| -name            | *VMname*                                      | Configures the VM name (a string of 1 to 255 characters).|
| -kernel          | /path/to/vmlinux.bin                            | Configures the kernel image.|
| -append          | console=ttyS0 root=/dev/vda reboot=k panic=1 rw | Configures the kernel command line parameter. For the standard virtualization AArch64 platform, set **console** to **ttyAMA0** instead of **ttyS0**.|
| -initrd          | /path/to/initrd.img                             | Configures the initrd file.|
| -smp             | [cpus=] CPU count| Configures the number of CPUs. The value range is [1, 254].|
| -m               | Memory size (MiB/GiB). The default unit is MB.| Configures the memory size. The value range is [256 MiB, 512 GiB].|
| -qmp             | unix:/path/to/socket,server,nowait              | Configures api-channel. Before running api-channel, ensure that the socket file does not exist.|
| -D               | /path/to/logfile                                | Configures the log file.|
| -pidfile         | /path/to/pidfile                                | Configures the pid file. This parameter must be used together with **-daemonize**. Ensure that the pid file does not exist before running the script.|
| -disable-seccomp | N/A                                              | Disables Seccomp. Seccomp is enabled by default.|
| -daemonize       | N/A                                              | Enables daemon processes.|

### VM Types

You can run the **-machine** parameter to specify the type of the VM to be started.

Parameters

- **type**: VM startup type. The value is **MicroVm** for lightweight virtualization, **q35** for standard virtualization on the x86_64 platform, and **virt** for standard virtualization on the AArch64 platform.
- **dump-guest-core** (optional): whether to dump the VM memory when a process panics.
- **mem-share** (optional): whether to share memory with other processes.

### Disk Configuration

VM disk configuration includes the following configuration items:

- **drive_id**: disk ID.
- **path_on_host**: disk path.
- **serial_num** (optional): serial number of the disk.
- **read_only** (optional): whether the disk is read-only.
- **direct** (optional): whether to open the disk in O_DIRECT mode.
- **iothread** (optional): iothread attribute.
- **throttling.iops-total** (optional): disk QoS for limiting disk I/O operations.
- **if** (optional): driver type. The default value is **none**. The block device is **none**.
- **bus**: bus to which the device is to be mounted.
- **addr**: IDs of the slot and function to which the device is to be mounted.
- **multifunction** (optional): whether to enable PCI multi-function. (Optional)

#### Disk Configuration Modes

Disk configuration consists of two steps: driver configuration and block device configuration.

The lightweight VM configuration format is as follows:

```
-drive id=drive_id,file=path_on_host[,readonly=off][,direct=off][,throttling.iops-total=200][,if=none]
-device virtio-blk-device,drive=drive_id[,iothread=iothread1][,serial=serial_num]
```

The standard VM configuration format is as follows:

```
-drive id=drive_id,file=path_on_host[,readonly=off][,direct=off][,throttling.iops-total=200][,if=none]
-device virtio-blk-pci,drive=drive_id,bus=pcie.0,addr=0x3.0x0[,iothread=iothread1,][serial=serial_num][,multifunction=on]
```

The following describes the **throttling.iops-total** and **iothread** configuration items:

#### Disk QoS

##### Description

QoS is short for quality of service. In cloud scenarios, multiple VMs are started on a single host. Because the total disk access bandwidth of the host is limited, when a VM has heavy disk access pressure, it will occupy the access bandwidth of other VMs. As a result, the I/O performance of other VMs will be affected. To reduce the impact between VMs, you can configure QoS to limit the disk access rate of the VMs.

##### Notice

- Currently, QoS supports the configuration of disk IOPS.
- The value range of IOPS is [0, 1000000]. The value **0** indicates that the IOPS is not limited. The actual IOPS does not exceed the preset value or the upper limit of the actual backend disk performance.
- Only the average IOPS can be limited. Instantaneous burst traffic cannot be limited.

##### Configuration Methods

Usage:

CLI:

```
-drive xxx,throttling.iops-total=200
```

Parameters:

- **throttling.iops-total**: I/O delivery speed of the disk on a VM after IOPS is configured. It does not exceed the value of this parameter.
- *xxx*: other settings of the disk.

#### iothread

For details about the iothread configuration, see [iothread Configuration](#iothread-configuration).

### NIC Configuration

VM NIC configuration includes the following configuration items:

- **idv**: unique device ID.
- **tap**: tap device.
- **ifname**: name of the tap device on the host.
- **mac** (optional): MAC address of the VM.
- **iothread** (optional): iothread attribute of the disk. For details about the iothread configuration of the NIC, see [iothread Configuration](#iothread-configuration).

#### Configuration Methods

> ![](./public_sys-resources/icon-note.gif)**NOTE**
>
> Before using the network, run the following commands to configure the host bridge and tap device:
>
> ```
> $ brctl addbr qbr0
> $ ip tuntap add tap0 mode tap
> $ brctl addif qbr0 tap0
> $ ifconfig qbr0 up; ifconfig tap0 up
> $ ifconfig qbr0 192.168.0.1
> ```

1. Configure virtio-net. ([] indicates an optional parameter.)

Lightweight VMs:

```
-netdev tap,id=netdevid,ifname=host_dev_name[,vhostfd=2]
-device virtio-net-device,netdev=netdevid,id=netid[,iothread=iothread1,mac=12:34:56:78:9A:BC]
```

Standard VMs:

```
-netdev tap,id=netdevid,ifname=host_dev_name[,vhostfd=2]
-device virtio-net-pci,netdev=netdevid,id=netid,bus=pcie.0,addr=0x2.0x0[,multifunction=on,iothread=iothread1,mac=12:34:56:78:9A:BC]
```

2. Configure vhost-net.

Lightweight VMs:

```
-netdev tap,id=netdevid,ifname=host_dev_name,vhost=on[,vhostfd=2]
-device virtio-net-device,netdev=netdevid,id=netid[,iothread=iothread1,mac=12:34:56:78:9A:BC]
```

Standard VMs:

```
-netdev tap,id=netdevid,ifname=host_dev_name,vhost=on[,vhostfd=2]
-device virtio-net-pci,netdev=netdevid,id=netid,bus=pcie.0,addr=0x2.0x0[,multifunction=on,iothread=iothread1,mac=12:34:56:78:9A:BC]
```

### chardev Configuration

Redirect I/Os from the Guest to chardev on the host. The chardev backend type can be **stdio**, **pty**, **socket**, or **file**.**file** can be set only during output. The configuration items are as follows:

- **idv**: unique device ID.
- **backend**: redirection type.
- **path**: path of the device redirection file. This parameter is required only for **socket** and **file** devices.
- **server**: uses chardev as a server. This parameter is required only for **socket** devices.
- **nowait**: The expected status is disconnected. This parameter is required only for **socket** devices.

When chardev is used, the console file is created and used. Therefore, ensure that the console file does not exist before starting StratoVirt.

#### Configuration Methods

```
-chardev backend,id=chardev_id[,path=path,server,nowait]
```

### Serial Port Configuration

A serial port is a VM device used to transmit data between hosts and VMs. To use a serial port, configure **console** to **ttyS0** in the kernel command line, and to **ttyAMA0** for standard startup on the AArch64 platform. The configuration items are as follows:

- **chardev**: redirected chardev device.
- **backend**, **path**, **server**, and **nowait**: The meanings of these parameters are the same as those in **chardev**.

#### Configuration Methods

```
-serial chardev:chardev_id
```

Or:

```
-chardev backend[,path=path,server,nowait] 
```

### Console Device Configuration

virtio-console is a universal serial port device used for data transmission between hosts and VMs. If only the console device is configured and I/O operations are performed through the console device, set **console** to **hvc0** in the kernel startup parameters. The console device has the following configuration items:

- **id**: device ID.
- **path**: path of virtio console files.
- **socket**: redirection in socket mode.
- **chardev**: redirected chardev device.

#### Configuration Methods

The console configuration consists of three steps: specify virtio-serial, create a character device, and then create a virtconsole device.

Lightweight VMs:

```
-device virtio-serial-device[,id=virtio-serial0]
-chardev socket,path=socket_path,id=virtioconsole1,server,nowait
-device virtconsole,chardev=virtioconsole1,id=console_id
```

Standard VMs:

```
-device virtio-serial-pci,bus=pcie.0,addr=0x1.0x0[,multifunction=on,id=virtio-serial0]
-chardev socket,path=socket_path,id=virtioconsole1,server,nowait
-device virtconsole,chardev=virtioconsole1,id=console_id
```

### vsock Device Configuration

The vsock is also a device for communication between hosts and VMs. It is similar to the console but has better performance. The configuration items are as follows:

- **id**: unique device ID.
- **guest_cid**: unique context ID.

#### Configuration Methods

Lightweight VMs:

```
-device vhost-vsock-device,id=vsock_id,guest-cid=3
```

Standard VMs:

```
-device vhost-vsock-pci,id=vsock_id,guest-cid=3,bus=pcie.0,addr=0x1.0x0[,multifunction=on]
```

### Memory Huge Page Configuration

#### Overview

StratoVirt supports the configuration of huge pages for VMs. Compared with the traditional 4 KiB memory page mode, huge page memory can effectively reduce the number of TLB misses and page fault interrupts, significantly improving the performance of memory-intensive services.

#### Precautions

- The directory to which the huge pages are mounted must be an absolute path.
- Memory huge pages can be configured only during startup.
- Only static huge pages are supported.
- Configure huge pages on the host before use.
- To use the huge page feature, ensure that the VM memory size is an integer multiple of *huge page size*.

#### Mutually Exclusive Features

- If the huge page feature is configured, the balloon feature does not take effect.

#### Configuration Methods

##### Configuring Huge Pages on the Host

###### Mounting

Mount the huge page file system to a specified directory. `/path/to/hugepages` is the user-defined empty directory.

```
$ mount -t hugetlbfs hugetlbfs /path/to/hugepages
```

###### Setting the Number of Huge Pages

* Set the number of static huge pages. `num` indicates the specified number.

  ```
  $ sysctl vm.nr_hugepages=num
  ```
* Query huge page statistics.

  ```
  $ cat /proc/meminfo | grep Hugepages
  ```

  To view statistics about huge pages of other sizes, view the related information in the `/sys/kernel/mm/hugepages/hugepages-*/` directory.

> ![](./public_sys-resources/icon-note.gif)**NOTE**
>
> Configure the StratoVirt memory specifications and huge pages based on the huge page usage. If the huge page resources are insufficient, the VM fails to be started.

#### Adding Huge Page Configuration When Starting StratoVirt

- CLI

  ```
  -mem-path /page/to/hugepages
  ```

  In the preceding command, `/page/to/hugepages` indicates the directory to which the huge page file system is mounted. Only absolute paths are supported.

</br>

> ![](./public_sys-resources/icon-note.gif)**NOTE**
>
> **Typical configuration**: Set **mem-path** in the StratoVirt command line to the *huge page file system mount directory*. The StratoVirt huge page feature is recommended for the typical configuration.

### iothread Configuration

#### Description

After a VM with the iothread configuration is started on StratoVirt, threads independent of the main thread are started on the host. These independent threads can be used to process I/O requests of devices, improving the device I/O performance and reducing the impact on message processing on the management plane.

#### Notice

- A maximum of eight iothreads can be configured.
- The iothread attribute can be configured for disks and NICs.
- iothreads occupy CPU resources of the host. When the I/O pressure is high in a VM, the CPU resources occupied by a single iothread depend on the disk access speed. For example, a common SATA disk occupies less than 20% CPU resources.

#### Creating an iothread

CLI:

```shell
-object iothread,id=iothread1 -object iothread,id=iothread2
```

Parameters:

- **id**: identifies an iothread. This ID can be set to the iothread attribute of the disk or NIC. If iothread is configured in the startup parameter, the thread with the specified ID is started on the host after the VM is started.

#### Configuring the iothread Attribute for a Disk or NIC

**CLI-based configurations**

Lightweight VMs:

Disks

```
-device virtio-blk-device xxx,iothread=iothread1
```

NICs

```
-device virtio-net-device xxx,iothread=iothread2
```

Standard VMs:

Disks

```
-device virtio-blk-pci xxx,iothread=iothread1
```

NICs

```
-device virtio-net-pci xxx,iothread=iothread2
```

```
Parameters:
```


1. **iothread**: Set this parameter to the iothread ID, indicating the thread that processes the I/O of the device.
2. *xxx*: other configurations of the disk or NIC.

### Balloon Device Configuration

#### Description

During running of a VM, the balloon driver in it occupies or releases memory to dynamically adjust the VM's available memory, achieving memory elasticity.

#### Notice

- Before enabling balloon, ensure that the page size of the guest is the same as that of the host.
- The balloon feature must be enabled for the guest kernel.
- When memory elastic scaling is enabled, slight frame freezing may occur in the VM and the memory performance may deteriorate.

#### Mutually Exclusive Features

- This feature is mutually exclusive with huge page memory.
- In the x86 architecture, the number of interrupts is limited. Therefore, the total number of balloon devices and other virtio devices cannot exceed 11. By default, six block devices, two net devices, and one serial port device are used.

#### Specifications

- Each VM can be configured with only one balloon device.

#### Configuration Methods

Lightweight VMs:

```
-device virtio-balloon-device,deflate-on-oom=true
```

Standard VMs:

```
-device virtio-balloon-pci,bus=pcie.0,addr=0x4.0x0,deflate-on-oom=true[,multifunction=on]
```

>![](./public_sys-resources/icon-note.gif)**NOTE**
>1. The value of **deflate-on-oom** is of the Boolean type, indicating whether to enable the auto deflate feature. When this feature is enabled, if the balloon device has reclaimed some memory, it automatically releases the memory to the guest when the guest requires the memory. If this feature is disabled, the memory is not automatically returned.
>2. When running the QMP command to reclaim the VM memory, ensure that the VM has sufficient memory to keep basic running. Otherwise, some operations may time out and the VM cannot apply for idle memory.
>3. If the huge page feature is enabled in the VM, the balloon device cannot reclaim the memory occupied by the huge pages.

> If **deflate-on-oom** is set to **false**, when the guest memory is insufficient, the balloon device does not automatically release the memory. As a result, the guest OOM may occur, the processes may be killed, and even the VM cannot run properly.

## Configuration Examples

### Lightweight VMs

This section provides an example of the minimum configuration for creating a lightweight VM.

1. Log in to the host and delete the socket file to ensure that the QMP can be created.

   ```
   $ rm -f /tmp/stratovirt.socket
   ```
2. Run StratoVirt.

   ```
   $ /path/to/stratovirt \
       -kernel /path/to/vmlinux.bin \
       -append console=ttyS0 root=/dev/vda rw reboot=k panic=1 \
       -drive file=/home/rootfs.ext4,id=rootfs,readonly=false \
       -device virtio-blk-device,drive=rootfs \
       -qmp unix:/tmp/stratovirt.socket,server,nowait \
       -serial stdio
   ```

   After the running is successful, the VM is created and started based on the specified configuration parameters.

### Standard VMs

This section provides an example of the minimum configuration for creating a standard VM on the ARM platform.

1. Delete the socket file to ensure that QMP can be created.

   ```
   $ rm -f /tmp/stratovirt.socket
   ```
2. Run StratoVirt.

   ```
   $ /path/to/stratovirt \
       -kernel /path/to/vmlinux.bin \
       -append console=ttyAMA0 root=/dev/vda rw reboot=k panic=1 \
       -drive file=/path/to/code_storage_file,if=pflash,unit=0[,readonly=true] \
       -drive file=/path/to/data_storage_file,if=pfalsh,unit=1, \
       -drive file=/home/rootfs.ext4,id=rootfs,readonly=false \
       -device virtio-blk-device,drive=rootfs,bus=pcie.0,addr=0x1 \
       -qmp unix:/tmp/stratovirt.socket,server,nowait \
       -serial stdio
   ```
