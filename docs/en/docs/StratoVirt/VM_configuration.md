# Configuring VMs

## Basic Configuration

### Overview

Different from libvirt that uses XML files to configure VMs, StratoVirt can use command line parameters or the JSON file to configure the VM CPU, memory, and disk information. This section describes the two configuration methods.

> ![](./figures/note.png) 
>
> If both methods are used, the command line configuration mode is used.
>
> In this document, **/path/to/socket** indicates the socket file in the user-defined path.

### Specifications

- Number of VM CPUs: [1, 254]
- VM memory size: [256 MB, 512 GB]
- Number of VM disks (including hot plugged-in disks): [0, 4]
- Number of VM NICs (including hot plugged-in NICs): [0, 2]
- The VM console device supports only one connection.
- On the x86_64 platform, a maximum of 11 MMIO devices can be configured. You are advised to configure a maximum of four other devices except disks and NICs. On the AArch64 platform, a maximum of 160 MMIO devices can be configured. You are advised to configure a maximum of 12 other devices except disks and NICs.

### Minimal Configuration

The minimum configuration for running StratoVirt is as follows:

- Use the Linux kernel image in PE or bzImage format (x86_64 only).
- Set the rootfs image as the virtio-blk device and add it to kernel parameters.
- Use api-channel to control StratoVirt.
- To use ttyS0 for login, add a serial port to the startup command line and add ttyS0 to kernel parameters.

### Command Line Configuration

**Overview**

Command line configuration directly specifies the VM configuration content using command line parameters.

**Command Format**

The format of the command configured by running cmdline is as follows:

**$ /path/to/stratovirt** *- [Parameter 1] [Option]-[Parameter 2] [Option]...*

**Usage Instructions**

1. To ensure that the socket required by the api-channel can be created, run the following command to clear the environment:

   ```
   $rm [parameter] *[user-defined socket file path]*
   ```


2. Run the cmdline command.

   ```
   $/path/to/stratovirt - *[Parameter 1] [Parameter option] - [Parameter 2] [Parameter option]*...
   ```

**Parameters**

The following table describes the parameters of the cmdline command.

Table 1 Parameters in the command line

| Parameter| Option| Description|
| ---------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| -name            | *VMname*                                                     | Configures the VM name (a string of 1 to 255 characters).|
| -machine         | `[type=vm_type]` `[,dump-guest-core=on]`<br/> `[,mem-share=off]`         | Configures the VM type. For details, see [VM Types](#vm-types).|
| -kernel          | /path/to/vmlinux.bin                                         | Configures the kernel image.|
| -append          | console=ttyS0 root=/dev/vda <br/>reboot=k panic=1 rw              | Configures kernel command line parameters.|
| -initrd          | /path/to/initrd.img                                          | Configures the initrd file.|
| -smp             | [cpus=] CPU count| Configures the number of CPUs. The value range is [1, 254].|
| -m               | Memory size (in bytes), memory size (in MB), and memory size (in GB)| Configures the memory size. The value ranges from 256 MB to 512 GB.|
| -drive           | id=rootfs,file=/path/to/rootfs<br/>[,readonly=false,<br/>direct=true,<br/>serial=serial_num,<br/>>iothread=iothread1,<br/>/iops=200] | Configures the virtio-blk device. For details, see [Disk Configuration](#disk-configuration).|
| -netdev          | id=iface_id,netdev=tap0[,mac=mac_address,<br/>iothread=iothread2] | Configures the virtio-net device. For details, see [NIC Configuration](#nic-configuration).|
| -chardev         | id=console_id,path=/path/to/socket                           | Configures virtio-console. For details, see [Console Device Configuration](#console-device-configuration).|
| -device          | vsock,id=vsock_id,guest-cid=3                                | Configures vhost-vsock. For details, see [vsock Device Configuration](#vsock-device-configuration).|
| -api-channel     | unix:/path/to/socket                                         | Configures api-channel. Before running api-channel, ensure that the socket file does not exist.|
| -serial          | stdio                                                        | Configures the serial port device.|
| -D               | /path/to/logfile                                             | Configures the log file.|
| -pidfile         | /path/to/pidfile                                             | Configures the pid file. This parameter must be used together with **-daemonize**. Ensure that the pid file does not exist before running the script.|
| -disable-seccomp | N/A| Disables Seccomp. Seccomp is enabled by default.|
| -daemonize       | N/A| Enables daemon processes.|
| -iothread        | id="iothread1"                                               | Configures the iothread thread. For details, see [iothread Configuration](#iothread-configuration).|
| -balloon         | deflate-on-oom=true                                          | Configures the balloon device. For details, see [Balloon Device Configuration](#balloon-device-configuration).|
| -mem-path        | /dev/hugepages                                               | Configures the memory huge pages. For details, see chapter "Best Practices."|
| -rng | random_file=/path/to/random_file<br/>[,bytes_per_sec=1000000] | Configures the virtio-rng device. For details, see [rng Device Configuration](#rng-device-configuration).|


**Configuration Example**

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

### JSON Configuration

**Overview**

Configuration using the JSON file indicates that when running StratoVirt to create a VM, the system reads the specified JSON file that contains the VM configuration.

**Command Format**

The format of the command for configuring a VM using the JSON file is as follows. In this command, **/path/to/json** indicates the path of the corresponding file.

**$ /path/to/stratovirt -config** */path/to/json -[Parameter] [Option]*

**Usage Instructions**

1. Write the VM configuration to the JSON file.

2. Run the StratoVirt command to create a VM.

   ```
   $ /path/to/stratovirt -config /path/to/json -*[Parameter] [Option]*
   ```

**Parameters**

The following table describes the configurable parameters in the JSON file.

**Table 2** Parameters in the configuration file

| Parameter| Option| Description|
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| boot-source    | "kernel_image_path": "/path/to/vmlinux.bin","boot_args": "console=ttyS0 reboot=k panic=1 pci=off tsc=reliable ipv6.disable=1 root=/dev/vda quiet","initrd_fs_path": "/path/to/initrd.img" | Configures the kernel image and kernel parameters. The `initrd_fs_path` parameter is optional.|
| machine-config | "type": "MicroVm","vcpu_count": 4,"mem_size": 805306368,"dump_guest_core": false,"mem-share": false,"mem_path":"/path/to/backend" | Configures the virtual CPU and memory size. The `dump_guest_core`, `mem-path` and `mem-share` parameters are optional.|
| drive          | "drive_id": "rootfs","path_on_host": "/path/to/rootfs.ext4","read_only": false,"direct": true,"serial_num": "xxxxx","iothread": "iothread1","iops": 200 | Configures the virtio-blk disk. The `serial_num`, `iothread`, and `iops` parameters are optional.|
| net            | "iface_id": "net0","host_dev_name": "tap0","mac":  "xx:xx:xx:xx:xx:xx","iothread": "iothread1" | Configures the virtio-net NIC. The `mac` and `iothread` parameters are optional.|
| console        | "console_id": "charconsole0","socket_path": "/path/to/socket" | Configures the virtio-console serial port. Before running the serial port, ensure that the socket file does not exist.|
| vsock          | "vsock_id": "vsock0","guest_cid": 3                          | Configures the virtio-vsock device.|
| serial         | "stdio": true                                                | Configures the serial port device.|
| iothread       | "id": "iothread1"                                            | Configures the ID of the iothread for creating a thread named `iothread1`.|
| balloon        | "deflate_on_oom": true                                       | Configures the auto deflate feature of balloon.|
|rng   | "random_file":"/dev/random",<br/>"bytes_per_sec":1000000000 | Configures the virtio-rng device.|


The following table lists the parameters running in JSON.

**Table 3** Parameters running in JSON

| Parameter| Option| Description|
| ---------------- | -------------------- | ------------------------------------------------------------ |
| -config          | /path/to/json        | Configures the file path.|
| -api-channel     | unix:/path/to/socket | Configures api-channel. Before running api-channel, ensure that the socket file does not exist.|
| -D               | /path/to/logfile     | Configures the log file.|
| -pidfile         | /path/to/pidfile     | Configures the PID file, which must be used together with daemonize. Ensure that the pid file does not exist before running the script.|
| -disable-seccomp | N/A                  | Disables Seccomp. Seccomp is enabled by default.|
| -daemonize       | N/A                  | Enables daemon processes.|

**Configuration Example**

1. Create a JSON file, for example, **/home/config.json**. The file content is as follows:

```
{
  "boot-source": {
    "kernel_image_path": "/path/to/vmlinux.bin",
    "boot_args": "console=ttyS0 reboot=k panic=1 pci=off tsc=reliable ipv6.disable=1 root=/dev/vda quiet rw"
  },
 "machine-config": {
    "type": "MicroVm",
    "vcpu_count": 2,
    "mem_size": 268435456
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

2. Run StratoVirt and read the JSON file to create and start the VM.

```
$ /path/to/stratovirt \
    -config /home/config.json \
    -api-channel unix:/tmp/stratovirt.socket
```

After the command is executed successfully, the VM is created and started successfully.

## Configuration Description

### VM Types

You can run the **-machine** parameter to specify the type of the VM to be started.

Parameters

- **type** (optional): type of the VM to be started. Currently, only **MicroVm** is supported. The default value is **MicroVM**.
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
- **iops** (optional): disk QoS for limiting disk I/O operations.

The following describes the **iops** and **iothread** configuration items:

#### **iops**: disk QoS.

##### Introduction

QoS is short for quality of service. In cloud scenarios, multiple VMs are started on a single host. Because the total disk access bandwidth of the host is limited, when a VM has heavy disk access pressure, it will occupy the access bandwidth of other VMs. As a result, the I/O performance of other VMs will be affected. To reduce the impact between VMs, you can configure QoS to limit the disk access rate of the VMs.

##### Precautions

- Currently, QoS supports the configuration of disk IOPS.
- The value range of IOPS is [0, 1000000]. The value **0** indicates that the IOPS is not limited. The actual IOPS does not exceed the preset value or the upper limit of the actual backend disk performance.
- Only the average IOPS can be limited. Instantaneous burst traffic cannot be limited.

##### Configuration Methods

Usage:

**CLI:**

```
-drive xxx,iops=200
```

Parameters:

- **iops**: I/O delivery speed of the disk on a VM after IOPS is configured. It does not exceed the value of this parameter.
- *xxx*: other settings of the disk.

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

#### **iothread**

For details about the iothread configuration, see [iothread Configuration](#iothread-configuration).

### NIC Configuration

VM NIC configuration includes the following configuration items:

- **iface_id**: unique device ID.
- **host_dev_name**: name of the tap device on the host.
- **mac** (optional): MAC address of the VM.
- **iothread** (optional): iothread attribute of the disk.

For details about the iothread configuration of the NIC, see [iothread Configuration](#iothread-configuration).

### Console Device Configuration

virtio-console is a universal serial port device used to transmit data between the guest and host. The configuration items of the console device are as follows:

- **console_id**: unique device ID.
- **socket_path**: path of the virtio console file.

Ensure that the console file does not exist before starting StratoVirt.

### vsock Device Configuration

The vsock is also a device for communication between the host and guest. It is similar to the console but has better performance. The configuration items are as follows:

- **vsock_id**: unique device ID.
- **guest_cid**: unique context ID.

### iothread Configuration

#### Introduction

After a VM with the iothread configuration is started on StratoVirt, threads independent of the main thread are started on the host. These independent threads can be used to process I/O requests of devices, improving the device I/O performance and reducing the impact on message processing on the management plane.

#### Precautions

- A maximum of eight iothreads can be configured.
- The iothread attribute can be configured for disks and NICs.
- iothreads occupy CPU resources of the host. When the I/O pressure is high in a VM, the CPU resources occupied by a single iothread depend on the disk access speed. For example, a common SATA disk occupies less than 20% CPU resources.

#### Creating an iothread

Usage:

**CLI:**

```shell
-iothread id=iothread1 -iothread id=iothread2
```

**JSON:**

```json
"iothread": [
    {"id": "iothread1"},
    {"id": "iothread2"}
  ]
```

Parameters:

- **id**: identifies an iothread. This ID can be set to the iothread attribute of the disk or NIC. If iothread is configured in the startup parameter, the thread with the specified ID is started on the host after the VM is started.

#### Configuring the iothread Attribute for a Disk or NIC

Usage:

**CLI-based Configuration**

```
# Disks
-drive xxx,iothread=iothread1
# NICs
-netdev xxx,iothread=iothread2
```

Parameters:

1. **iothread**: Set this parameter to the ID of the iothread, indicating the thread that processes the I/O of the local device.
2. *xxx*: other configurations of the disk or NIC.

**JSON Configuration**

```json
# Disks
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
           "iothread": "iothread2"
       }
   ]
}
```

### Balloon Device Configuration

#### Introduction

During running of a VM, the balloon driver in it occupies or releases memory to dynamically adjust the VM's available memory, achieving memory elasticity.

#### Precautions

- Before enabling balloon, ensure that the page size of the guest is the same as that of the host.
- The balloon feature must be enabled for the guest kernel.
- When memory elastic scaling is enabled, slight frame freezing may occur in the VM and the memory performance may deteriorate.

#### Mutually exclusive features

- This feature is mutually exclusive with huge page memory.
- In the x86 architecture, the number of interrupts is limited. Therefore, the total number of balloon devices and other virtio devices cannot exceed 11. By default, four block devices, two net devices, and one serial port device are used.

#### Specifications

- Each VM can be configured with only one balloon device.

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

>![img](./figures/note.png) 
>1. The value of **deflate-on-oom** is of the Boolean type, indicating whether to enable the auto deflate feature. When this feature is enabled, if the balloon device has reclaimed some memory, it automatically releases the memory to the guest when the guest requires the memory. If this feature is disabled, the memory is not automatically returned.
>2. When running the QMP command to reclaim the VM memory, ensure that the VM has sufficient memory to keep basic running. Otherwise, some operations may time out and the VM cannot apply for idle memory.
>3. If the huge page feature is enabled in the VM, the balloon device cannot reclaim the memory occupied by the huge pages.


>![](./public_sys-resources/icon-notice.gif) **Notice** 
>If **deflate-on-oom** is set to **false**, when the guest memory is insufficient, the balloon device does not automatically release the memory. As a result, the guest OOM may occur, the processes may be killed, and even the VM cannot run properly.


### rng Device Configuration

virtio-rng is a paravirtualized random number generator that generates hardware random numbers for the guest. The virtio-rng device contains the following configuration items:

- **random_file**: path of the character device used to generate random numbers on the host, for example, **/dev/random**.
- **bytes_per_sec** (optional): maximum number of characters obtained from a character device per second.

#### Precautions

- If the **bytes_per_sec** configuration item is not set, the number of characters obtained from a character device per second is not limited.
- If it needs to be configured, the value range is [64, 1000000000]. It is recommended that its value not be too small to prevent a slow rate of obtaining random number characters.
- **bytes_per_sec** can only limit the average number of random number characters, but cannot limit the burst traffic.
- When configuring the virtio rng device, check whether the random numbers are sufficient to avoid VM freezing. For example, if the character device path is **/dev/random**, you can run the **/proc/sys/kernel/random/entropy_avail** command to view the size of random numbers.
