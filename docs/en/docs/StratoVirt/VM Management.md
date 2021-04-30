# VM Management

## Overview

StratoVirt can query VM information and manage VM resources and life cycles. StratoVirt uses QMP to manage VMs. Therefore, you need to connect to the VM before querying the VM information.

# Querying VM Information

## Querying VM status

Run the query-status command to query the VM running status.

- Usage:

  **{ "execute": "query-status" }**

- Example:

```
<- { "execute": "query-status" }
-> { "return": { "running": true,"singlestep": false,"status": "running" }
```

## Querying Topology Information

Run the query-cpus command to query the topology of all CPUs.

- Usage:

**{ "execute": "query-cpus" }**

- Example:

```
<- { "execute": "query-cpus" }
-> {"return":[{"CPU":0,"arch":"x86","current":true,"halted":false,"props":{"core-id":0,"socket-id":0,"thread-id":0},"qom_path":"/machine/unattached/device[0]","thread_id":8439},{"CPU":1,"arch":"x86","current":true,"halted":false,"props":{"core-id":0,"socket-id":1,"thread-id":0},"qom_path":"/machine/unattached/device[1]","thread_id":8440}]}
```

## Querying vCPU Online Status

Run the query-hotpluggable-cpus command to query the online or offline status of all vCPUs.

- Usage:

**{ "execute": "query-hotpluggable-cpus" }**

- Example:

```
<- { "execute": "query-hotpluggable-cpus" }
-> {"return":[{"props":{"core-id":0,"socket-id":0,"thread-id":0},"qom-path":"/machine/unattached/device[0]","type":"host-x86-cpu","vcpus-count":1},{"props":{"core-id":0,"socket-id":1,"thread-id":0},"qom-path":"/machine/unattached/device[1]","type":"host-x86-cpu","vcpus-count":1}]}
```

Where, online vCPUs have the `qom-path` item, while offline vCPUs do not.

# Managing the VM Lifecycle

## Overview

StratoVirt can manage the life cycle of VMs, including starting, pausing, resuming, and exiting VMs.

## Creating and Starting a VM

As described in the section "Configuring a VM", users can specify the VM configuration by using command line parameters or the JSON file, and run the stratovirt command on the host to create and start a VM.

- Run the following command to create and start a VM:

```
$/path/to/stratovirt - [Parameter 1] [Parameter Option] - [Parameter 2] [Parameter Option]...
```

- Use the JSON file to provide the VM configuration. The command for creating and starting a VM is as follows:

```
$ /path/to/stratovirt \
    -config /path/to/json \
    -api-channel unix:/path/to/socket
```

Where, /path/to/json indicates the path of the JSON configuration file. /path/to/socket is the socket file specified by the user (for example, /tmp/stratovirt.socket). After the command is executed, the socket file is automatically created. Ensure that the socket file does not exist before executing the command, so that the VM can be started properly.

> ![](./figures/en-05.png)
>
> After the VM is started, there are two NICs: eth0 and eth1. The two NICs are reserved for hot plugging: eth0 first, and then eth1. Currently, only two virtio-net NICs can be hot-plugged.

## Connecting a VM

StratoVirt uses QMP to manage VMs. To pause, resume, and exit a VM, connect it to StratoVirt through QMP first.

Open a new CLI (CLI B) on the host and run the following command to perform the api-channel connection:

```
ncat -U /path/to/socket
```

After the connection is set up, a greeting message will be received from StratoVirt, as shown in the following figure.

```
{"QMP":{"version":{"qemu":{"micro":1,"minor":0,"major":4},"package":""},"capabilities":[]}}
```

Now, manage the VM by entering QMP commands in CLI B.

> ![](./figures/en-05.png)
>
> QMP provides stop, cont, quit, and query-status to manage and query the VM status.
>
> All QMP commands for managing VMs are entered in CLI B. `<-` indicates the command input, and `->` indicates the QMP returned result.

## Pausing a VM

QMP provides the stop command for pausing a VM, that is, pausing all vCPUs of the VM. Command format:

**{"execute":"stop"}**

**Example:**

Run the stop command to pause the VM. The command output is as follows:

```
<- {"execute":"stop"}
-> {"event":"STOP","data":{},"timestamp":{"seconds":1583908726,"microseconds":162739}}
-> {"return":{}}
```

## Resuming a VM

QMP provides the cont command to resume a VM, that is, to resume all vCPUs of the VM. Command format:

**{"execute":"cont"}**

**Example:**

Run the cont command to resume the VM. The command output is as follows:

```
<- {"execute":"cont"}
-> {"event":"RESUME","data":{},"timestamp":{"seconds":1583908853,"microseconds":411394}}
-> {"return":{}}
```

## Exiting a VM

QMP provides the quit command to exit a VM, that is, to exit the StratoVirt process. Command format:

**{"execute":"quit"}**

**Example:**

```
<- {"execute":"quit"}
-> {"event":"SHUTDOWN","data":{"guest":false,"reason":"host-qmp-quit"},"timestamp":{"ds":1590563776,"microseconds":519808}}
-> {"return":{}}
```

# Managing VM resources

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
- For addr, 0x0 is mapped to vda of the VM, 0x1 is mapped to vdb, and so on. To be compatible with the QMP protocol, "addr" can be replaced by "lun", but lun=0 is mapped to the vdb of the client.
- StratoVirt supports a maximum of six virtio-blk disks. Note this when hot adding disks.

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

**Preparations (Requiring the Root Permission)**

1. Create and enable a Linux bridge. For example, if the bridge name is qbr0, run the following command:

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

**Usage**

```
{"execute":"netdev_add", "arguments":{"id":"net-0", "ifname":"tap0"}}
{"execute":"device_add", "arguments":{"id":"net-0", "driver":"virtio-net-mmio", "addr":"0x0"}}
```

**Parameter**

- The ID in netdev_add must be the same as that in device_add. Ifname indicates the name of the TAP device.

- For addr, 0x0 is mapped to eth0 of the VM, and 0x1 to eth1.
- StratoVirt supports a maximum of two virtio-net disks. Note this when hot adding NICs.

**Example**

```
<- {"execute":"netdev_add", "arguments":{"id":"net-0", "ifname":"tap0"}}
-> {"return": {}}
<- {"execute":"device_add", "arguments":{"id":"net-0", "driver":"virtio-net-mmio", "addr":"0x0"}}
-> {"return": {}}
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

## Ballon Device Usage

The balloon device can be used to reclaim free memory from the VM. The Balloon is called using the qmp command. The usage of the qmp command is as follows:

**Usage:**

```
{"execute": "balloon", "arguments": {"value": 2147483648}}
```

**Parameter:**

- value: Specifies the size of the guest memory to be set, in bytes. If the value is greater than the memory value configured during VM startup, the memory value configured during VM startup is used.

**Example:**

The memory size configured during VM startup is 4 GiB. If the free memory of the VM queried by running the free command is greater than 2 GiB, you can run the qmp command to set the guest memory size to 2147483648 bytes.

```
<- {"execute": "balloon", "arguments": {"value": 2147483648}}
-> {"return": {}}
```

Run the following command to query the actual memory of the VM:

```
<- {"execute": "query-balloon"}
-> {"return":{"actual":2147483648}}
```
