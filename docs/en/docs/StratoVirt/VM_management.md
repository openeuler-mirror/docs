# Managing VMs


## Overview

StratoVirt allows you to query VM information and manage VM resources and lifecycle with QMP. To query the information about a VM, connect to the VM first.

## Querying VM Information

### Introduction

StratoVirt can be used to query the VM status, vCPU topology, and vCPU online status.

### Querying VM Status

Run the **query-status** command to query the running status of a VM.

- Usage:

  **{ "execute": "query-status" }**

- Example:

```
<- { "execute": "query-status" }
-> { "return": { "running": true,"singlestep": false,"status": "running" } 
```



### Querying Topology Information

Run the **query-cpus** command to query the topologies of all CPUs.

- Usage:

  **{ "execute": "query-cpus" }**

- Example:

```
<- { "execute": "query-cpus" }
-> {"return":[{"CPU":0,"arch":"x86","current":true,"halted":false,"props":{"core-id":0,"socket-id":0,"thread-id":0},"qom_path":"/machine/unattached/device[0]","thread_id":8439},{"CPU":1,"arch":"x86","current":true,"halted":false,"props":{"core-id":0,"socket-id":1,"thread-id":0},"qom_path":"/machine/unattached/device[1]","thread_id":8440}]}
```

### Querying vCPU Online Status

Run the **query-hotpluggable-cpus** command to query the online/offline statuses of all vCPUs.

- Usage:

  **{ "execute": "query-hotpluggable-cpus" }**

- Example:

```
<- { "execute": "query-hotpluggable-cpus" }
-> {"return":[{"props":{"core-id":0,"socket-id":0,"thread-id":0},"qom-path":"/machine/unattached/device[0]","type":"host-x86-cpu","vcpus-count":1},{"props":{"core-id":0,"socket-id":1,"thread-id":0},"qom-path":"/machine/unattached/device[1]","type":"host-x86-cpu","vcpus-count":1}]}
```

Online vCPUs have the `qom-path` item, while offline vCPUs do not.



## Managing VM Lifecycle

### Description

StratoVirt can manage the lifecycle of a VM, including starting, suspending, resuming, and exiting the VM.

### Creating and Starting a VM

As described in the "Configuring VMs" chapter, you can specify the VM configuration by using command line parameters or a JSON file, and run the stratovirt command on the host to create and start a VM.

- When using the command line parameters to specify the VM configuration, run the following command to create and start the VM:

```
$/path/to/stratovirt - *[Parameter 1] [Parameter option] - [Parameter 2] [Parameter option]*...
```



- When using the JSON file to specify the VM configuration, run the following command to create and start the VM:

```
$ /path/to/stratovirt \
    -config /path/to/json \
    -api-channel unix:/path/to/socket
```

In the preceding commands, **/path/to/json** indicates the path of the JSON configuration file.**/path/to/socket** indicates the specified socket file, for example, **/tmp/stratovirt.socket**. After the preceding commands are executed, the socket file is automatically created. To properly start the VM, ensure that the socket file does not exist before creating it.



> ![](./figures/en-05.png) 
>
> After the VM is started, there are two NICs: eth0 and eth1. The two NICs are reserved for hot plugging: eth0 first and then eth1. Currently, only two virtio-net NICs can be hot plugged.



### Connecting to a VM

StratoVirt uses QMP to manage VMs. To suspend, resume, or exit a VM, connect it the StratoVirt through QMP first.

Open a new CLI (CLI B) on the host and run the following command to connect to the api-channel as the **root** user:

```
# ncat -U /path/to/socket
```

After the connection is set up, you will receive a greeting message from StratoVirt, as shown in the following:

```
{"QMP":{"version":{"qemu":{"micro":1,"minor":0,"major":4},"package":""},"capabilities":[]}}
```

You can now manage the VM by entering the QMP commands in CLI B.



> ![](./figures/en-05.png) 
>
> QMP provides stop, cont, quit, and query-status commands to manage and query VM statuses.
>
> All QMP commands for managing VMs are entered in CLI B. `<-` indicates the command input, and `->` indicates the QMP returned result.





### Suspending a VM

QMP provides the stop command to suspend a VM, that is, to suspend all vCPUs of the VM. The command syntax is as follows:

**{"execute":"stop"}**

**Example:**

The stop command and the command output are as follows:

```
<- {"execute":"stop"}
-> {"event":"STOP","data":{},"timestamp":{"seconds":1583908726,"microseconds":162739}}
-> {"return":{}}
```





### Restoring a VM

QMP provides the cont command to resume a suspended VM, that is, to resume all vCPUs of the VM. The command syntax is as follows:

**{"execute":"cont"}**

**Example:**

The cont command and the command output are as follows:

```
<- {"execute":"cont"}
-> {"event":"RESUME","data":{},"timestamp":{"seconds":1583908853,"microseconds":411394}}
-> {"return":{}}
```





### Exiting a VM

QMP provides the quit command to exit a VM, that is, to exit the StratoVirt process. The command syntax is as follows:

**{"execute":"quit"}**

**Example:**

```
<- {"execute":"quit"}
-> {"return":{}}
-> {"event":"SHUTDOWN","data":{"guest":false,"reason":"host-qmp-quit"},"timestamp":{"ds":1590563776,"microseconds":519808}}
```



## Managing VM Resources

### Hot-Pluggable Disks

StratoVirt allows you to adjust the number of disks when a VM is running. That is, you can add or delete VM disks without interrupting services.

#### Hot Plugged-in Disks

**Usage:**

```
{"execute": "blockdev-add", "arguments": {"node-name": "drive-0", "file": {"driver": "file", "filename": "/path/to/block"}, "cache": {"direct": true}, "read-only": false}}
{"execute": "device_add", "arguments": {"id": "drive-0", "driver": "virtio-blk-mmio", "addr": "0x1"}}
```

**Parameters:**

- The value of **node-name** in **blockdev-add** must be the same as the value of **id** in **device_add**. For example, both values are **drive-0** in the preceding example.

- **/path/to/block** is the image path of the hot plugged-in disks. It cannot be the path of the disk image that boots the rootfs.
- For **addr**, **0x0** is mapped to **vda** of the VM, **0x1** is mapped to **vdb**, and so on. To be compatible with the QMP protocol, **addr** can be replaced by **lun**, but **lun=0** is mapped to the **vdb** of the client.
- StratoVirt supports a maximum of six virtio-blk disks. Note this when hot plugging in disks.


**Example:**

```
<- {"execute": "blockdev-add", "arguments": {"node-name": "drive-0", "file": {"driver": "file", "filename": "/path/to/block"}, "cache": {"direct": true}, "read-only": false}}
-> {"return": {}}
<- {"execute": "device_add", "arguments": {"id": "drive-0", "driver": "virtio-blk-mmio", "addr": "0x1"}}
-> {"return": {}}
```



#### Hot Plugged-out Disks

**Usage:**

**{"execute": "device_del", "arguments": {"id":"drive-0"}}**

**Parameters:**

**id** indicates the ID of the hot plugged-out disk.

**Example:**

```
<- {"execute": "device_del", "arguments": {"id": "drive-0"}}
-> {"event":"DEVICE_DELETED","data":{"device":"drive-0","path":"drive-0"},"timestamp":{"seconds":1598513162,"microseconds":367129}}
-> {"return": {}}
```



### Hot-Pluggable NICs

StratoVirt allows you to adjust the number of NICs when a VM is running. That is, you can add or delete VM NICs without interrupting services.

#### Hot Plugged-in NICs

**Preparations (Requiring the root Permission)**

1. Create and enable a Linux bridge. For example, if the bridge name is **qbr0**, run the following command:

```shell
# brctl addbr qbr0
# ifconfig qbr0 up
```

2. Create and enable a tap device. For example, if the tap device name is **tap0**, run the following command:

```shell
# ip tuntap add tap0 mode tap
# ifconfig tap0 up
```

3. Add the tap device to the bridge.

```shell
# brctl addif qbr0 tap0
```


**Usage:**

```
{"execute":"netdev_add", "arguments":{"id":"net-0", "ifname":"tap0"}}
{"execute":"device_add", "arguments":{"id":"net-0", "driver":"virtio-net-mmio", "addr":"0x0"}}
```

**Parameters:**

- **id** in **netdev_add** must be the same as that in **device_add**. **ifname** is the name of the backend tap device.

- For **addr**, **0x0** is mapped to **eth0** of the VM, **0x1** is mapped to **eth1**, and so on.

- StratoVirt supports a maximum of two virtio-net NICs. Therefore, pay attention to the specification restrictions when hot plugging in NICs.


**Example:**

```
<- {"execute":"netdev_add", "arguments":{"id":"net-0", "ifname":"tap0"}}
-> {"return": {}}
<- {"execute":"device_add", "arguments":{"id":"net-0", "driver":"virtio-net-mmio", "addr":"0x0"}} 
-> {"return": {}}
```

**addr:0x0** corresponds to **eth0** in the VM.

#### Hot Plugged-out NICs

**Usage:**

**{"execute": "device_del", "arguments": {"id": "net-0"}}**

**Parameters:**

**id**: NIC ID, for example, **net-0**.

**Example:**

```
<- {"execute": "device_del", "arguments": {"id": "net-0"}}
-> {"event":"DEVICE_DELETED","data":{"device":"net-0","path":"net-0"},"timestamp":{"seconds":1598513339,"microseconds":97310}}
-> {"return": {}}
```



## Using Ballon Devices

The balloon device is used to reclaim idle memory from a VM. It called by running the QMP command.  

**Usage:**

```
{"execute": "balloon", "arguments": {"value": 2147483648‬}}
```

**Parameters:**

- **value**: size of the guest memory to be set. The unit is byte. If the value is greater than the memory value configured during VM startup, the latter is used.

**Example:**

The memory size configured during VM startup is 4 GiB. If the idle memory of the VM queried by running the free command is greater than 2 GiB, you can run the QMP command to set the guest memory size to 2147483648 bytes.

```
<- {"execute": "balloon", "arguments": {"value": 2147483648‬}}
-> {"return": {}}
```

Query the actual memory of the VM:

```
<- {"execute": "query-balloon"}
-> {"return":{"actual":2147483648}}
```
