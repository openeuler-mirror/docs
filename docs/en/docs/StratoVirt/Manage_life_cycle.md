# Managing the VM Lifecycle

[[toc]]

## Overview

This section describes how to use StratoVirt to manage the lifecycle of a VM, namely starting, pausing, resuming, and exiting a VM.



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
$ ncat -U /path/to/socket
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

