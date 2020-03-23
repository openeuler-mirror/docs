# IOThread配置<a name="ZH-CN_TOPIC_0225484578"></a>

## 概述<a name="section45049501501"></a>

KVM平台上，对虚拟磁盘的读写在后端默认由QEMU主线程负责处理。这样会造成如下问题：

-   虚拟机的I/O请求都由一个QEMU主线程进行处理，因此单线程的CPU利用率成为虚拟机I/O性能的瓶颈。
-   虚拟机I/O在QEMU主线程处理时会持有QEMU全局锁\(qemu\_global\_mutex\)，一旦I/O处理耗时较长，QEMU主线程长时间占有全局锁，会导致虚拟机vCPU无法正常调度，影响虚拟机整体性能及用户体验。

可以为virtio-blk磁盘或者virtio-scsi控制器配置IOThread属性，在QEMU后端单独开辟IOThread线程处理虚拟磁盘读写请求，IOThread线程和virtio-blk磁盘或virtio-scsi控制器可配置成一对一的映射关系，尽可能地减少对QEMU主线程的影响，提高虚拟机整体I/O性能，提升用户体验。

## 配置说明<a name="section1735205815547"></a>

使用IOThread线程处理虚拟机磁盘读写请求，需要修改虚拟机配置，这里给出具体的配置说明。

-   配置虚拟机高性能虚拟磁盘的总数。例如通过<iothreads\>配置IOThread线程的总数为4：

    ```
    <domain type='kvm' xmlns:qemu='http://libvirt.org/schemas/domain/qemu/1.0'>   
         <name>VMName</name>
         <memory>4194304</memory>
         <currentMemory>4194304</currentMemory>
         <vcpu>4</vcpu>
         <iothreads>4</iothreads>
    ```

-   给virtio-blk磁盘配置IOThread属性。**<**iothread**\>**表示IOThread线程编号，编号从1开始配置，最大为<iothreads\>的配置值，且编号不能重复使用。例如将编号为2的IOThread配置给virtio-blk磁盘使用：

    ```
    <disk type='file' device='disk'>
          <driver name='qemu' type='raw' cache='none' io='native' iothread='2'/>
          <source file='/path/test.raw'/>
          <target dev='vdb' bus='virtio'/>
          <address type='pci' domain='0x0000' bus='0x00' slot='0x05' function='0x0'/>
    </disk>
    ```

-   给virtio-scsi控制器配置IOThread属性。例如将编号为2的IOThread配置给virtio-scsi控制器使用：

    ```
    <controller type='scsi' index='0' model='virtio-scsi'>
          <driver iothread='2'/>
          <alias name='scsi0'/>
          <address type='pci' domain='0x0000' bus='0x00' slot='0x04' function='0x0'/>
    </controller>
    ```

-   IOThread线程绑定物理CPU

    虚拟磁盘IOThread线程的绑核配置，将IOThread线程绑定到用户指定的物理CPU范围内，不影响vCPU线程的资源占用诉求。<iothread\>表示IOThread线程编号，<cpuset\>表示绑定的物理CPU编号。

    ```
    <cputune>
    <iothreadpin iothread='1' cpuset='1-3,5,7-12' />
    <iothreadpin iothread='2' cpuset='1-3,5,7-12' />
    </cputune>
    ```


