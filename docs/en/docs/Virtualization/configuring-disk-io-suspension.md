# Configuring Disk I/O Suspension

<!-- TOC -->

- [Configuring Disk I/O Suspension](#configuring-disk-io-suspension)
    - [Introduction](#introduction)
        - [Overview](#overview)
        - [Applicable Scenario](#applicable-scenario)
        - [Precautions and Restrictions](#precautions-and-restrictions)
    - [Disk I/O Suspension Configuration](#disk-io-suspension-configuration)
        - [Qemu Command Line Configuration](#qemu-command-line-configuration)
        - [XML Configuration](#xml-configuration)

<!-- /TOC -->

## Introduction

### Overview

When a storage fault occurs (for example, the storage link is disconnected), the I/O error of the physical disk is sent to the VM front end through the virtualization layer. After the VM receives the I/O error, the user file system in the VM may change to the read-only state. In this case, the VM needs to be restarted or the user needs to manually recover the file system, which brings extra workload.

In this case, the virtualization platform provides the disk I/O suspension capability. When a storage fault occurs, the VM I/O being delivered to the host is suspended. During the suspension period, no I/O error is returned to the VM. In this way, the VM file system will not be in read-only state but is hung. At the same time, the VM backend retries I/Os based on the specified suspension interval. If the storage fault is rectified within the suspension time, the suspended I/O can be written to the disk. The internal file system of the VM automatically recovers and the VM does not need to be restarted. If the storage fault is not rectified within the suspension time, an error is reported to the VM and the user is notified.

### Applicable Scenario

The cloud that may be disconnected from the storage plane is used as the backend of a virtual disk.

### Precautions and Restrictions

- Only virtio-blk and virtio-scsi virtual drives support disk I/O suspension.

- The backend of virtual disks suspended by disk I/O is usually the cloud drive that may cause storage plane link disconnection.

- The disk I/O suspension can be enabled for read and write I/O errors. The retry interval and timeout interval for read and write I/O errors of the same disk are the same.

- The disk I/O suspension retry interval does not include the actual I/O overhead on the host. That is, the actual interval between two I/O retry operations is greater than the configured I/O error retry interval.

- The disk I/O suspension cannot identify the I/O error type (such as storage link disconnection, bad disk, and reservation conflict). As long as the hardware returns an I/O error, the disk I/O suspension is performed.

- When the disk I/O is suspended, the internal I/O of the VM is not returned. The system commands for accessing the disk, such as fdisk, are suspended. The services that depend on the returned command are also suspended.

- When the disk I/O is suspended, the I/O cannot be written to the disk. As a result, the VM may fail to be gracefully shut down. In this case, you need to forcibly shut down the VM.

- When the disk I/O is suspended, the disk data cannot be read. As a result, the VM cannot be restarted. You need to forcibly shut down the VM, wait until the storage fault is rectified, and then restart the VM.

- After a storage fault occurs, the following problems cannot be solved even though disk I/O suspension exists:

  1. Failed to execute advanced storage features.

     Advanced features include virtual disk hot swapping, virtual disk creation, VM startup, VM shutdown, forcible VM shutdown, VM hibernation and wakeup, VM storage hot migration, VM storage hot migration cancellation, VM storage snapshot creation, VM storage snapshot combination, and VM disk capacity query, VM online scale-out, virtual CD-ROM drive insertion and ejection.

  2. Failed to execute the VM life cycle.

- When a VM configured with disk I/O suspension initiates hot migration, the XML configuration of the destination disk must contain the same disk I/O suspension configuration as that of the source disk.

## Disk I/O Suspension Configuration

### Qemu Command Line Configuration

The disk I/O suspension function is enabled by specifying `werror=retry` and `rerror=retry` on the virtual disk device and using `retry_interval` and `retry_timeout` to configure the retry policy. `retry_interval` indicates the I/O error retry interval. The value ranges from 0 to MAX_LONG, in milliseconds. If this parameter is not set, the default value 1000 ms is used. `retry_timeout` indicates the I/O retry timeout interval. The value ranges from 0 to MAX_LONG. The value 0 indicates that no timeout occurs. The unit is millisecond. If this parameter is not set, the default value is 0.

The I/O suspension configuration of the virtio-blk disk is as follows:

```shell
-drive file=/path/to/your/storage,format=raw,if=none,id=drive-virtio-disk0,cache=none,aio=native \
-device virtio-blk-pci,scsi=off,bus=pci.0,addr=0x6,\
drive=drive-virtio-disk0,id=virtio-disk0,write-cache=on,\
werror=retry,rerror=retry,retry_interval=2000,retry_timeout=10000
```

The I/O suspension configuration of the virtio-scsi disk is as follows:

```shell
-drive file=/path/to/your/storage,format=raw,if=none,id=drive-scsi0-0-0-0,cache=none,aio=native \
-device scsi-hd,bus=scsi0.0,channel=0,scsi-id=0,lun=0,\
device_id=drive-scsi0-0-0-0,drive=drive-scsi0-0-0-0,id=scsi0-0-0-0,write-cache=on,\
werror=retry,rerror=retry,retry_interval=2000,retry_timeout=10000
```

### XML Configuration

The disk I/O suspension function is enabled by specifying `error_policy='retry'` and `rerror_policy='retry'`in the disk XML configuration file. Configure the values of `retry_interval` and `retry_timeout`. `retry_interval` indicates the I/O error retry interval. The value ranges from 0 to MAX_LONG, in milliseconds. If this parameter is not set, the default value 1000 ms is used. `retry_timeout` indicates the I/O retry timeout interval. The value ranges from 0 to MAX_LONG. The value 0 indicates that no timeout occurs. The unit is millisecond. If this parameter is not set, the default value is 0.

The disk I/O suspension XML configuration of the virtio-blk disk is as follows:

```xml
<disk type='block' device='disk'>
  <driver name='qemu' type='raw' cache='none' io='native' error_policy='retry' rerror_policy='retry' retry_interval='2000' retry_timeout='10000'/>
  <source file='/path/to/your/storage'/>
  <target dev='vdb' bus='virtio'/>
  <backingStore/>
</disk>
```

The disk I/O suspension XML configuration of the virtio-scsi disk is as follows:

```xml
<disk type='block' device='disk'>
  <driver name='qemu' type='raw' cache='none' io='native' error_policy='retry' rerror_policy='retry' retry_interval='2000' retry_timeout='10000'/>
  <source file='/path/to/your/storage'/>
  <target dev='sdb' bus='scsi'/>
  <backingStore/>
  <address type='drive' controller='0' bus='0' target='0' unit='0'/>
</disk>
```
