#Managing VM resources

[[toc]]

## Overview

This section describes how to use QMP commands to manage disks and NICs.



> ![](./figures/en-05.png)
>
> StratoVirt uses QMP to manage VMs. Before using QMP to manage VM resources, use it to connect StratoVirt to the VM. For details, see "Managing the VM Life Cycle".



## Hot-Pluggable Hard Disks

StratoVirt supports adjusting the number of disks during VM running. That is, you can add or delete VM disks without interrupting services.

### Hot Plugged-in Disk

**Usage**

```
{"execute": "blockdev-add", "arguments": {"node-name": "drive-0", "file": {"driver": "file", "filename": "/path/to/block"}, "cache": {"direct": true}, "read-only": false}}
{"execute": "device_add", "arguments": {"id": "drive-0", "driver": "virtio-blk-mmio", "addr": "0x1"}}
```

**Parameter**

- The value of node-name in blockdev-add must be the same as the value of id in device_add. They are both drive-0.

- /path/to/block is the mirror path of the hot plugged-in disk. It cannot be the path of the disk image that boots the rootfs.
- For addr, 0x0 is mapped to vda of the VM, 0x1 is mapped to vdb, and so on. To be compatible with the QMP protocol, "addr" can be replaced by "lun", but lun=0 is mapped to the vdb of the client. Only six virtio-blk disks can be hot added.

**Example**

```
<- {"execute": "blockdev-add", "arguments": {"node-name": "drive-0", "file": {"driver": "file", "filename": "/path/to/block"}, "cache": {"direct": true}, "read-only": false}}
-> {"return": {}}
<- {"execute": "device_add", "arguments": {"id": "drive-0", "driver": "virtio-blk-mmio", "addr": "0x1"}}
-> {"return": {}}
```



### Hot Plugged-out Disk

**Usage**

**{"execute": "device_del", "arguments": {"id":"drive-0"}}**

**Parameter**

id indicates the ID of the hot plugged-out disk.

**Example**

```
<- {"execute": "device_del", "arguments": {"id": "drive-0"}}
-> {"event":"DEVICE_DELETED","data":{"device":"drive-0","path":"drive-0"},"timestamp":{"seconds":1598513162,"microseconds":367129}}
-> {"return": {}}
```



## Hot-Pluggable NIC

StratoVirt allows users to adjust the number of NICs during VM running. That is, users can add or delete NICs for VMs without interrupting services.

### Hot Plugged-in NIC

**Usage**

```
{"execute":"netdev_add", "arguments":{"id":"net-0", "ifname":"tap0"}}
{"execute":"device_add", "arguments":{"id":"net-0", "driver":"virtio-net-mmio", "addr":"0x0"}}
```

**Parameter**

- The ID in netdev_add must be the same as that in device_add. Ifname indicates the name of the TAP device.

- For addr, 0x0 is mapped to eth0 of the VM, and 0x1 to eth1. Only two virtio-net NICs can be hot plugged in.


**Example**

```
<- {"execute":"netdev_add", "arguments":{"id":"net-0", "ifname":"tap0"}}
<- {"execute":"device_add", "arguments":{"id":"net-0", "driver":"virtio-net-mmio", "addr":"0x0"}} 
```

Where, addr:0x0 corresponds to eth0 in the VM.

### Hot Plugged-out NIC

**Usage**

**{"execute": "device_del", "arguments": {"id": "net-0"}}**

**Parameter**

id: specifies the NIC ID, for example, net-0.

**Example**

```
<- {"execute": "device_del", "arguments": {"id": "net-0"}}
-> {"event":"DEVICE_DELETED","data":{"device":"net-0","path":"net-0"},"timestamp":{"seconds":1598513339,"microseconds":97310}}
-> {"return": {}}
```

