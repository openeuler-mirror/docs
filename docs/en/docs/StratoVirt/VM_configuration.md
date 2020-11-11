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
- VM memory size: [128MiB,512GiB]
- Number of VM disks (including hot swap disks): [0,6]
- Number of VM NICs (including hot swap NICs): [0,2]
- The VM console device supports only single way connection.
- On the x86_64 platform, a maximum of two other devices except disks and NICs can be configured. On the AArch64 platform, the maximum of other devices is 12, also excluding disks and NICs.

## Minimum Configuration

The minimum configuration of the StratoVirt is as follows:

- There is a Linux kernel file in PE format.
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
| -kernel | /path/to/vmlinux.bin | Configures the kernel image.|
| -append | console=ttyS0 root=/dev/vda reboot=k panic=1 | Configures kernel command line parameters.|
| -initrd | /path/to/initrd.img | Configures the initrd file.|
| -smp | [cpus=] Number of CPUs | Configures the number of CPUs. The value range is [1,254].|
| -m | Byte/MiB/GiB | Configures the memory size. The value range is [128MiB,512GiB]. |
| -drive | id=rootfs,file=/path/to/rootfs[,readonly=false,direct=true,serial=serial_num] | Configures the virtio-blk device.|
| -netdev | id=iface_id,netdev=tap0[,mac=mac_address] | Configures the virtio-net device.|
| -chardev | id=console_id,path=/path/to/socket | Configures virtio-console. Ensure that the socket file does not exist before running the command.|
| -device | vsock,id=vsock_id,guest-cid=3 | Configures vhost-vsock.|
| -api-channel | unix:/path/to/socket | Configures api-channel. Before running this command, ensure that the socket file does not exist.|
| -serial | stdio | Configures a serial port device.|
| -D | /path/to/logfile | Configures log files.|
| -pidfile | /path/to/pidfile | Configures the PID file. This parameter must be used together with -daemonize.|
| -disable-seccomp | N/A | Disables the Seccomp, which is enabled by default.|
| -omit_vm_memory | N/A | Do not dump the VM memory when the process enters the panic state.|
| -daemonize | N/A | Enables the daemon process.|



**Example**

1. Delete the socket file to ensure that the api-channel can be created.

   ```
   $ rm -f /tmp/stratovirt.socket
   ```

   

2. Run StratoVirt.

   ```
   $ /path/to/stratovirt \
       -kernel /path/to/vmlinux.bin \
       -append console=ttyS0 root=/dev/vda reboot=k panic=1 \
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
| machine-config | "name": "abc","vcpu_count": 4,"mem_size": 805306368,"omit_vm_memory": true | Configures the virtual CPU and memory size. The `omit_vm_memory` parameter is optional.                                |
| drive | "drive_id": "rootfs","path_on_host": "/path/to/rootfs.ext4","read_only": false,"direct": true,"serial_num": "xxxxx" | Configures the virtio-blk disk. The `serial_num` parameter is optional.                                  |
| net | "iface_id": "net0","host_dev_name": "tap0","mac": "xx:xx:xx:xx:xx:xx" | Configures the virtio-net NIC. The `mac` parameter is optional. |
| console | "console_id": "charconsole0","socket_path": "/path/to/socket" | Configures the virtio-console serial port. Before running the serial port, ensure that the socket file does not exist. |
| vsock | "vsock_id": "vsock0","guest_cid": 3 | Configures the virtio-vsock device. |
| serial | "stdio": true | Configures a serial port device.|



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
    "name": "abc",
    "vcpu_count": 2,
    "mem_size": 268435456,
    "omit_vm_memory": false
  },
  "drive": [
    {
      "drive_id": "rootfs",
      "path_on_host": "/path/to/rootfs.ext4",
      "direct": true,
      "read_only": false,
      "serial_num": "abcd"
    }
  ],
  "net": [
    {
      "iface_id": "net0",
      "host_dev_name": "tap0",
      "mac": "0e:90:df:9f:a8:88"
    }
  ],
  "console": {
    "console_id": "charconsole0",
    "socket_path": "/path/to/console.socket"
  },
  "serial": {
    "stdio": true
  },
  "vsock": {
    "vsock_id": "vsock-123321132",
    "guest_cid": 4
  }
}

```



2. Run StratoVirt to read the JSON file and create and start the VM.

```
$ /path/to/stratovirt \
    -config /home/config.json \
    -api-channel unix:/tmp/stratovirt.socket
```

Successful execution of the command indicates that the VM is successfully created and started.

