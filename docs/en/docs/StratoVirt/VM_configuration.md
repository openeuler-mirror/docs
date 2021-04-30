# Configuring a VM

## Overview

Different from Libvirt that uses XML files to configure VMs, StratoVirt can use command line parameters or the JSON file to configure the VM CPU, memory, and disk information. This section describes the two configuration methods.

> ![](./figures/en-05.png)
>
> If both methods can be used, incline to the command line configuration.
>
> In this document, /path/to/socket is the socket file in the user-defined path.





## Specifications

- Number of VM CPUs: [1,254]
- VM memory size: [256MiB,512GiB]
- Number of VM disks (including hot swap disks): [0,6]
- Number of VM NICs (including hot swap NICs): [0,2]
- The VM console device supports only single way connection.
- On the x86_64 platform, a maximum of 11 mmio devices can be configured. But a maximum of two other devices except disks and NICs is recommended. On the AArch64 platform, the maximum of mmio devices is 160, but the maximum of other devices is recommend to be 12, also excluding disks and NICs.

## Minimum Configuration

The minimum configuration of the StratoVirt is as follows:

- Linux kernel image in PE or bzImage (x86_64 only) format.
- Set the rootfs image as the virtio-blk device and add it to kernel parameters.
- Use api-channel to control StratoVirt.
- If you want to use ttyS0 for login, add a serial port to the startup command line and add ttyS0 to kernel parameters.



## Command Line Configuration

**Overview**

Command line configuration directly specifies the VM configuration content using command line parameters.

**Command Format**

The format of the command configured by running the cmdline command is as follows:

**$ /path/to/stratovirt** *-[Parameter 1] [Parameter Option] -[Parameter 2] [Parameter Option] ...*

**Usage**

1. To ensure that the socket required by api-channel can be created, run the following command to clear the environment:

   ```
   $rm [parameter] [user-defined socket file path]
   ```


2. Run the cmdline command.

   ```
   $ /path/to/stratovirt -[Parameter 1] [Parameter Option] -[Parameter 2] [Parameter Option] ...
   ```


**Parameter Description**

The following table lists the parameters of the cmdline command.

**Table 1** Description of command line configuration parameters

| Parameter | Value | Description |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| -name | *VMName* | Configures the VM name (a string of 1 to 255 characters).|
| -machine | `[type=vm_type]` `[,dump-guest-core=on]` `[,mem-share=off]` | Configures the VM type. |
| -kernel | /path/to/vmlinux.bin | Configures the kernel image.|
| -append | console=ttyS0 root=/dev/vda reboot=k panic=1 rw | Configures kernel command line parameters.|
| -initrd | /path/to/initrd.img | Configures the initrd file.|
| -smp | [cpus=] Number of CPUs | Configures the number of CPUs. The value range is [1,254].|
| -m | Byte/MiB/GiB | Configures the memory size. The value range is [256MiB,512GiB]. |
| -drive | id=rootfs,file=/path/to/rootfs[,readonly=false,direct=true,serial=serial_num,iothread=iothread1,iops=200] | Configures the virtio-blk device.|
| -netdev | id=iface_id,netdev=tap0[,mac=mac_address,iothread=iothread2] | Configures the virtio-net device.|
| -chardev | id=console_id,path=/path/to/socket | Configures virtio-console. Ensure that the socket file does not exist before running the command.|
| -device | vsock,id=vsock_id,guest-cid=3 | Configures vhost-vsock.|
| -api-channel | unix:/path/to/socket | Configures api-channel. Before running this command, ensure that the socket file does not exist.|
| -serial | stdio | Configures a serial port device.|
| -D | /path/to/logfile | Configures log files.|
| -pidfile | /path/to/pidfile | Configures the PID file. This parameter must be used together with -daemonize.|
| -disable-seccomp | N/A | Disables the Seccomp, which is enabled by default.|
| -omit_vm_memory | N/A | Do not dump the VM memory when the process enters the panic state.|
| -daemonize | N/A | Enables the daemon process.|
| -iothread | id="iothread1" | Configures the iothread thread.|
| -balloon | deflate-on-oom=true | Configures the balloon device.|
| -mem-path | /dev/hugepages | Configures huge pages.|



**Example**

1. Delete the socket file to ensure that the api-channel can be created.

   ```
   $ rm -f /tmp/stratovirt.socket
   ```


2. Run StratoVirt.

   ```
   $ /path/to/stratovirt \
       -kernel /path/to/vmlinux.bin \
       -append console=ttyS0 root=/dev/vda rw reboot=k panic=1 \
       -drive file=/home/rootfs.ext4,id=rootfs,readonly=false \
       -api-channel unix:/tmp/stratovirt.socket \
       -serial stdio
   ```

   After the running is successful, the VM is created and started based on the specified configuration parameters.



## JSON Configuration



**Overview**

Configuration using the JSON file indicates that when running StratoVirt to create a VM, the system reads the specified JSON file that contains the VM configuration.

**Command Format**

The format of the command for configuring a VM using the JSON file is as follows. In this command, /path/to/json indicates the path of the corresponding file.

**$ /path/to/stratovirt -config** */path/to/json -[Parameter] [Parameter Option]*

**Usage**

1. Create a JSON file and write the VM configuration to the file.

2. Run the StratoVirt command to create a VM.

   ```
   $ /path/to/stratovirt -config /path/to/json - [Parameter] [Parameter Option]
   ```

**Parameter Description**

The following table describes the configurable parameters in the JSON file.

**Table 2** Parameters in the configuration file

| Parameter | Value | Description |
| -------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| boot-source | "kernel_image_path": "/path/to/vmlinux.bin","boot_args": "console=ttyS0 reboot=k panic=1 pci=off tsc=reliable ipv6.disable=1 root=/dev/vda quiet","initrd_fs_path": "/path/to/initrd.img" | Configures the kernel image and kernel parameters. The `initrd_fs_path` parameter is optional.                               |
| machine-config | "type": "MicroVm","vcpu_count": 4,"mem_size": 805306368,"dump_guest_core": false,"mem-share": false,"mem_path":"/path/to/backend" | Configures the virtual CPU and memory size. The `dump_guest_core`,`mem-path`, and `mem-share` parameters are optional. |
| drive | "drive_id": "rootfs","path_on_host": "/path/to/rootfs.ext4","read_only": false,"direct": true,"serial_num": "xxxxx","iothread": "iothread1","iops": 200 | Configures the virtio-blk disk. The `serial_num`, `iothread`, and`iops` parameters are optional.        |
| net | "iface_id": "net0","host_dev_name": "tap0","mac": "xx:xx:xx:xx:xx:xx","iothread": "iothread1" | Configures the virtio-net NIC. The `mac` and `iothread `parameter is optional. |
| console | "console_id": "charconsole0","socket_path": "/path/to/socket" | Configures the virtio-console serial port. Before running the serial port, ensure that the socket file does not exist. |
| vsock | "vsock_id": "vsock0","guest_cid": 3 | Configures the virtio-vsock device. |
| serial | "stdio": true | Configures a serial port device.|
| iothread | "id": "iothread1" | ID of iothread1, which is used to create the iothread1 thread. |
The | balloon | "deflate_on_oom": true | Configures the auto deflate feature of the balloon. |


The following table lists the parameters running in JSON.

**Table 3** Parameters running in JSON

| Parameter | Value | Description |
| ---------------- | -------------------- | ------------------------------------------------------------ |
| -config | /path/to/json | Configures the file path.|
| -api-channel | unix:/path/to/socket | Configures api-channel. Before running this command, ensure that the socket file does not exist. |
| -D | /path/to/logfile | Configures log files.|
| -pidfile | /path/to/pidfile | Configures the PID file, which must be used together with daemonize. Before running the command, make sure that the PID file does not exist. |
| -disable-seccomp | N/A | Disables the Seccomp, which is enabled by default. |
| -daemonize | N/A | Enables the daemon process.|



**Example**

1. Create a JSON file, for example, /home/config.json. The file content is as follows:

```
{
  "boot-source": {
    "kernel_image_path": "/path/to/vmlinux.bin",
    "boot_args": "console=ttyS0 reboot=k panic=1 pci=off tsc=reliable ipv6.disable=1 root=/dev/vda quiet"
  },
  "machine-config": {
    "type": "MicroVm",
    "vcpu_count": 2,
    "mem_size": 268435456,
    "omit_vm_memory": false
  },
  "drive": [
    {
      "drive_id": "rootfs",
      "path_on_host": "/path/to/rootfs",
      "serial_num": "11111111",
      "direct": true,
      "read_only": false,
      "iops": 200000,
      "iothread": "iothread2"
    }
  ],
  "net": [
    {
      "iface_id": "net0",
      "host_dev_name": "tap0",
      "mac": "0e:90:df:9f:a8:88",
      "iothread": "iothread1"
    }
  ],
  "console": [
   {
    "console_id": "charconsole0",
    "socket_path": "/path/to/console.socket"
   }
  ],
  "serial": {
    "stdio": true
  },
  "vsock": {
    "vsock_id": "vsock-123321132",
    "guest_cid": 4
  },
  "iothread": [
    {"id": "iothread1"},
    {"id": "iothread2"}
  ]
}

```



2. Run StratoVirt to read the JSON file and create and start the VM.

```
$ /path/to/stratovirt \
    -config /home/config.json \
    -api-channel unix:/tmp/stratovirt.socket
```

Successful execution of the command indicates that the VM is successfully created and started.

## Configuration Description

### VM Types

The -machine parameter is used to specify the type of the VM to be started.

Parameter Description

- type: specifies the type of the VM to be started. Currently, only MicroVm is supported. This parameter is optional, and the default value is MicroVM.
- dump-guest-core: determines whether to dump the VM memory when the process panics. This parameter is optional.
- mem-share: determines whether to share the memory with other processes. This parameter is optional.



### Disk Configuration

The VM disk configuration includes the following configuration items.

- drive_id: Disk ID.
- path_on_host: Disk path.
- serial_num: (Optional) Specifies the serial number of the disk.
- read_only: (Optional) Determines whether the file is read-only.
- direct: (Optional) Determines whether to enable the O_DIRECT mode.
- iothread: (Optional) Configures the iothread attribute.
- iops: (Optional) Configures disk QoS to restrict disk I/O operations.



The iops and iothread configuration items are described as follows:

#### iops: Disk QoS.

##### Overview

QoS is quality of service. In cloud scenarios, multiple VMs are started on a single host. When a VM has heavy disk access pressure, the total disk access bandwidth of the host is limited, which occupies the access bandwidth of other VMs. As a result, the I/O of other VMs is affected. To reduce the impact on each other, you can configure QoS attributes for VMs to limit the disk access rate.



##### Important Notes

- Currently, QoS supports the configuration of disk IOPS.
- The value range of iops is [0, 1000000]. The value 0 indicates that the rate is not limited. The actual IOPS does not exceed the preset value and does not exceed the upper limit of the actual back-end disk performance.
- Only the average IOPS can be limited, and the instantaneous burst traffic cannot be limited.



##### Configuration Methods

Usage

**CLI**

```
-drive xxx,iops=200
```

Parameter:

- iops: The I/O delivery speed of the disk on the VM does not exceed the value of this parameter.
- xxx: indicates other settings of the disk.

JSON Configuration

```
{
    ...
    "drive": [
        {
            "drive_id": "rootfs",
            "path_on_host": "/path/to/block",
            ...
            "iops": 200
        }
    ],
    ...
}
```



#### iothread:

For details about the iothread configuration, see [iothread Configuration](#iothread-configuration)





### NIC Configuration

The VM NIC configuration includes the following configuration items:

- iface_id: unique device ID.
- host_dev_name: tap device name on the host.
- mac: (Optional) MAC address of the VM.
- iothread: (Optional) Configures the iothread attribute of the disk.

For details about the NIC iothread configuration, see [iothread Configuration](#iothread-configuration)



### Console Device Configuration

virtio-console is a universal serial port device, which is used to transmit data between the guest and host. The configuration items of the console device are as follows:

- console_id: Unique device ID.
- socket_path: path of the virtio console file.

Before starting the stratovirt, ensure that the console file does not exist.



### vsock Device Configuration

The vsock is also a device for communication between the host and guest. It is similar to the console but has better performance. Configuration items:

- vsock_id: Unique device ID.
- guest_cid: Unique context ID.





### Hugepage Configuration

#### Overview

StratoVirt supports the configuration of huge pages for VMs. Compared with the traditional 4 KB memory page mode, huge page memory can effectively reduce the number of TLB misses and page fault interrupts, significantly improving the performance of memory-intensive services.



#### Precautions

  - The specified directory to which the huge page is mounted. The value must be an absolute path.
  - This parameter can be set only during startup.
  - Only static huge pages are supported.
  - Before using a huge page, you need to configure the huge page on the host.
  - To use the huge page feature, ensure that the VM memory size is an integer multiple of **huge page size**.

#### Mutually Exclusive Features

- If the huge page feature is configured, the balloon feature does not take effect.


#### Configuration Methods

##### Configuring the Huge Page on the Host

###### Mounting

Mount the huge page file system to the specified directory. `/path/to/hugepages` is the user-defined empty directory.

```
$ mount -t hugetlbfs hugetlbfs /path/to/hugepages
```


###### Setting the Number of Huge Pages

* Set the number of static huge pages. `num` indicates the specified number of huge pages.

  ```
  $ sysctl vm.nr_hugepages=num
  ```

* Query huge page statistics

  ```
  $ cat /proc/meminfo | grep Hugepages
  ```

  To view the huge page statistics of other page sizes, view the related information in the `/sys/kernel/mm/hugepages/hugepages-*/` directory.


</br>

![img](./figures/zh-cn_image_to_know.png) 

1. Configure the StratoVirt memory specifications and huge pages based on the huge page usage. If the huge page resources are insufficient, the VM fails to be started.



#### Adding Huge Page Configuration When Starting StratoVirt




- CLI

  ```
  -mem-path /page/to/hugepages
  ```

  In the preceding command, `/page/to/hugepages` indicates the directory to which the huge page file system is mounted. Only absolute paths are supported.


- JSON file

  ```json
  {
      "machine-config": {
          "mem_path": "/page/to/hugepages",
          ...    
      },
          ...
  }
  ```

  In the preceding command, `/page/to/hugepages` indicates the directory to which the huge page file system is mounted. Only absolute paths are supported.

</br>

![img](./figures/zh-cn_image_note.png) 

1. **Typical configuration:**The mem-path item in the StratoVirt command line is **Hugepage file system mount directory**. The StrattoVirt huge page feature is recommended for the typical configuration.



### Configuring iothread

#### Overview

After StratoVirt starts a VM with iothread configuration, an independent thread independent of the main thread is started on the host. These independent threads can be used to process I/O requests of the device, improving the I/O performance of the device and reducing the impact on message processing on the management plane.

#### Precautions

- A maximum of eight iothread threads can be configured.
- The iothread attribute can be configured for disks and NICs.
- The iothread thread occupies CPU resources of the host. When the I/O pressure of the VM is high, the CPU resources occupied by a single iothread depend on the disk access speed. For example, a common SATA disk occupies less than 20% CPU resources.



#### Creating an iothread Thread

Usage:

**CLI:**

```shell
-iothread id=iothread1 -iothread id=iothread2
```

**json:**

```json
"iothread": [
    {"id": "iothread1"},
    {"id": "iothread2"}
  ]
```

Parameter:

- id: identifies the iothread thread. This ID can be set in the iothread attribute of the disk or NIC. If the iothread thread information is configured in the startup parameters, the VM starts the thread with the specified ID on the host after the VM is started.



#### Configuring the iothread Attribute of a Disk or NIC

Usage:

**Configurations on the CLI**

```
# Disk
-drive xxx,iothread=iothread1
# NICs
-netdev xxx,iothread=iothread2
```

	Parameter:

1. iothread: Set this parameter to the ID of the iothread thread that processes the I/O of the local device.
2. xxx: Indicates other configurations of the disk or NIC.



**json Configuration**

```json
# Disk
{
    ...
    "drive": [
        {
            "drive_id": "rootfs",
            "path_on_host": "/path/to/block",
            ...
            "iothread": "iothread1",
        }
    ],
    ...
}
# NICs
{
   ...
   "net": [
       {
           "iface_id": "tap0",
           "host_dev_name": "tap0",
           "mac": "12:34:56:78:9A:BC",
           "iothread": "iothread1"
       }
   ]
}
```





### Configuring the Balloon Device

#### Overview

During the running of a VM, the balloon driver in the VM dynamically occupies or releases the memory to dynamically change the available memory of the VM, achieving memory elasticity.



#### Precautions

- Before enabling the balloon function, ensure that the page size of the guest is the same as that of the host.
- The Balloon feature must be enabled for the guest kernel.
- When memory elastic scaling is enabled, slight frame freezing may occur in the VM and the memory performance may deteriorate.



#### Mutually Exclusive Features

- The huge page memory is mutually exclusive.
- In the x86 architecture, the number of interrupts is limited. Therefore, the total number of balloon devices and other Virtio devices cannot exceed 11. By default, six block devices, two net devices, and one serial port device are used.



#### Specifications

- Only one balloon device can be configured for each VM.



#### Configuration Methods

- CLI

```
-balloon deflate-on-oom=true
```

- JSON file

  ```json
  {  
      "balloon": {
          "deflate_on_oom": true  
      },
      ...
  }
  ```



![img](./figures/zh-cn_image_0218587436.png) 

1. The value of deflate-on-oom is of the Boolean type, indicating whether to enable the auto deflate feature. When this function is enabled, if the balloon has reclaimed part of the memory, the balloon device automatically releases the memory to the guest when the guest requires the memory. If this function is disabled, the system does not automatically return the resources.
2. When running the qmp command to reclaim the VM memory, ensure that the VM has sufficient memory to keep the basic running. Otherwise, some operations may time out, and the VM may fail to apply for idle memory.
3. If the huge page function is enabled in the VM, the balloon function cannot reclaim the memory occupied by the huge page.



![img](./figures/zh-cn_image_to_know.png) 

- When deflate-on-oom is set to false and the memory in the guest OS is insufficient, the balloon does not automatically release air and return the memory. As a result, the internal OOM of the guest OS may be caused, processes may be killed, and even the VM cannot run properly.
