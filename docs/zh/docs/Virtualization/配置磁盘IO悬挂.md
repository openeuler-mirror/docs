# 配置磁盘IO悬挂

<!-- TOC -->
-   [配置磁盘IO悬挂](#配置磁盘IO悬挂)
    -   [总体介绍](#总体介绍)
        -   [概述](#概述)
        -   [应用场景](#应用场景)
        -   [注意事项和约束限制](#注意事项和约束限制)
    -   [磁盘IO悬挂配置](#磁盘IO悬挂配置)
        -   [Qemu命令行配置](#Qemu命令行配置)
        -   [xml配置方式](#xml配置方式)

<!-- /TOC -->

## 总体介绍

### 概述

存储故障（比如存储断链）场景下，物理磁盘的IO错误，通过虚拟化层传给虚拟机前端，虚拟机内部收到IO错误，可能导致虚拟机内部的用户文件系统变成read-only状态，需要重启虚拟机或者用户手动恢复，这给用户带来额外的工作量。

这种情况下，虚拟化平台提供了一种磁盘IO悬挂的能力，即当存储故障时，虚拟机IO下发到主机侧时将IO悬挂住，在悬挂时间内不对虚拟机内部返回IO错误，这样虚拟机内部的文件系统就不会因为IO错误而变为只读状态，而是呈现为Hang住；同时虚拟机后端按指定的悬挂间隔对IO进行重试。如果存储故障在悬挂时间内恢复正常，悬挂住的IO即可恢复落盘，虚拟机内部文件系统自动恢复运行，不需要重启虚拟机；如果存储故障在悬挂时间内未能恢复正常，则上报错误给虚拟机内部，通知给用户。

### 应用场景

使用可能会发生存储面链路断链的云盘作为虚拟磁盘后端的场景。

### 注意事项和约束限制

- 磁盘IO悬挂仅支持virtio-blk或virtio-scsi类型的虚拟磁盘。

- 磁盘IO悬挂的虚拟磁盘后端一般为可能会发生存储面链路断链的云盘。

- 磁盘IO悬挂可对读写IO错误分别使能，同一磁盘的读写IO错误重试间隔和超时时间使用相同配置。

- 磁盘IO悬挂重试间隔不包含主机侧实际读写IO的开销，即两次IO重试操作实际间隔会大于配置的IO错误重试间隔。

- 磁盘IO悬挂无法区分IO错误的具体类型（如存储断链、扇区坏道、预留冲突等），只要硬件返回IO错误，都会进行悬挂处理。

- 磁盘IO悬挂时，虚拟机内部IO不会返回，fdisk等访问磁盘的系统命令会卡住，虚拟机内部依赖该命令返回的业务也会一直卡住。

- 磁盘IO悬挂时，IO无法正常落盘，可能会导致虚拟机无法优雅关机，需要强制关机。

- 磁盘IO悬挂时，无法读取磁盘数据，会造成虚拟机无法正常重启，需要先将虚拟机强制关机，等待存储故障恢复后在重新启动虚拟机。

- 存储故障发生后，虽然存在磁盘IO悬挂，依然解决不了以下问题：

  1. 存储相关高级特性执行失败

     高级特性包括：虚拟磁盘热插、虚拟磁盘热拔、创建虚拟磁盘、虚拟机启动、虚拟机关机、虚拟机强制关机、虚拟机休眠、虚拟机唤醒、虚拟机存储热迁移、虚拟机存储热迁移取消、虚拟机创建存储快照、虚拟机存储快照合并、查询虚拟机磁盘容量、磁盘在线扩容、插入虚拟光驱、弹出虚拟机光驱。

  2. 虚拟机生命周期执行失败

- 配置了磁盘IO悬挂的虚拟机发起热迁移时，应该在目的端磁盘的XML配置中带上与源端相同的磁盘IO悬挂配置。

## 磁盘IO悬挂配置

### Qemu命令行配置

磁盘IO悬挂功能通过在虚拟磁盘设备上指定`werror=retry` `rerror=retry`进行使能，使用`retry_interval`和`retry_timeout`进行重试策略的配置。`retry_interval`为IO错误重试的间隔，配置范围为0-MAX_LONG，单位为毫秒，未配置时使用默认值1000ms；`retry_timeout`为IO错误重试超时时间，配置范围为0-MAX_LONG，0值表示不会发生超时，单位为毫秒，未配置时使用默认值0。

virtio-blk磁盘的磁盘IO悬挂配置如下：

```shell
-drive file=/path/to/your/storage,format=raw,if=none,id=drive-virtio-disk0,cache=none,aio=native \
-device virtio-blk-pci,scsi=off,bus=pci.0,addr=0x6,\
drive=drive-virtio-disk0,id=virtio-disk0,write-cache=on,\
werror=retry,rerror=retry,retry_interval=2000,retry_timeout=10000
```

virtio-scsi磁盘的磁盘IO悬挂配置如下：

```shell
-drive file=/path/to/your/storage,format=raw,if=none,id=drive-scsi0-0-0-0,cache=none,aio=native \
-device scsi-hd,bus=scsi0.0,channel=0,scsi-id=0,lun=0,\
device_id=drive-scsi0-0-0-0,drive=drive-scsi0-0-0-0,id=scsi0-0-0-0,write-cache=on,\
werror=retry,rerror=retry,retry_interval=2000,retry_timeout=10000
```

### xml配置方式

磁盘IO悬挂功能通过在磁盘xml配置中指定`error_policy='retry'` `rerror_policy='retry'`进行使能。主要是配置上`retry_interval`和`retry_timeout`的值。`retry_interval`为IO错误重试的间隔，配置范围为0-MAX_LONG，单位为毫秒，未配置时使用默认值1000ms；`retry_timeout`为IO错误重试超时时间，配置范围为0-MAX_LONG，0值表示不会发生超时，单位为毫秒，未配置时使用默认值0。

virtio-blk磁盘的磁盘IO悬挂xml配置如下：

```xml
<disk type='block' device='disk'>
  <driver name='qemu' type='raw' cache='none' io='native' error_policy='retry' rerror_policy='retry' retry_interval='2000' retry_timeout='10000'/>
  <source file='/path/to/your/storage'/>
  <target dev='vdb' bus='virtio'/>
  <backingStore/>
</disk>
```

virtio-scsi磁盘的磁盘IO悬挂xml配置如下：

```xml
<disk type='block' device='disk'>
  <driver name='qemu' type='raw' cache='none' io='native' error_policy='retry' rerror_policy='retry' retry_interval='2000' retry_timeout='10000'/>
  <source file='/path/to/your/storage'/>
  <target dev='sdb' bus='scsi'/>
  <backingStore/>
  <address type='drive' controller='0' bus='0' target='0' unit='0'/>
</disk>
```

