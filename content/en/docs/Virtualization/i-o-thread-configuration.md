# I/O Thread Configuration<a name="EN-US_TOPIC_0225484578"></a>

## Overview<a name="section45049501501"></a>

By default, QEMU main threads handle backend VM read and write operations on the KVM. This causes the following issues:

-   VM I/O requests are processed by a QEMU main thread. Therefore, the single-thread CPU usage becomes the bottleneck of VM I/O performance.
-   The QEMU global lock \(qemu\_global\_mutex\) is used when VM I/O requests are processed by the QEMU main thread. If the I/O processing takes a long time, the QEMU main thread will occupy the global lock for a long time. As a result, the VM vCPU cannot be scheduled properly, affecting the overall VM performance and user experience.

You can configure the I/O thread attribute for the virtio-blk disk or virtio-scsi controller. At the QEMU backend, an I/O thread is used to process read and write requests of a virtual disk. The mapping relationship between the I/O thread and the virtio-blk disk or virtio-scsi controller can be a one-to-one relationship to minimize the impact on the QEMU main thread, enhance the overall I/O performance of the VM, and improve user experience.

## Configuration Description<a name="section1735205815547"></a>

To use I/O threads to process VM disk read and write requests, you need to modify VM configurations as follows:

-   Configure the total number of high-performance virtual disks on the VM. For example, set  **<iothreads\>**  to  **4**  to control the total number of I/O threads.

    ```
    <domain type='kvm' xmlns:qemu='http://libvirt.org/schemas/domain/qemu/1.0'>   
         <name>VMName</name>
         <memory>4194304</memory>
         <currentMemory>4194304</currentMemory>
         <vcpu>4</vcpu>
         <iothreads>4</iothreads>
    ```

-   Configure the I/O thread attribute for the virtio-blk disk.  **<iothread\>**  indicates I/O thread IDs. The IDs start from 1 and each ID must be unique. The maximum ID is the value of  **<iothreads\>**. For example, to allocate I/O thread 2 to the virtio-blk disk, set parameters as follows:

    ```
    <disk type='file' device='disk'>
          <driver name='qemu' type='raw' cache='none' io='native' iothread='2'/>
          <source file='/path/test.raw'/>
          <target dev='vdb' bus='virtio'/>
          <address type='pci' domain='0x0000' bus='0x00' slot='0x05' function='0x0'/>
    </disk>
    ```

-   Configure the I/O thread attribute for the virtio-scsi controller. For example, to allocate I/O thread 2 to the virtio-scsi controller, set parameters as follows:

    ```
    <controller type='scsi' index='0' model='virtio-scsi'>
          <driver iothread='2'/>
          <alias name='scsi0'/>
          <address type='pci' domain='0x0000' bus='0x00' slot='0x04' function='0x0'/>
    </controller>
    ```

-   Bind I/O threads to a physical CPU.

    Binding I/O threads to specified physical CPUs does not affect the resource usage of vCPU threads.  **<iothread\>**  indicates I/O thread IDs, and  **<cpuset\>**  indicates IDs of the bound physical CPUs.

    ```
    <cputune>
    <iothreadpin iothread='1' cpuset='1-3,5,7-12' />
    <iothreadpin iothread='2' cpuset='1-3,5,7-12' />
    </cputune>
    ```


