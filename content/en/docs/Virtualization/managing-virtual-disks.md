# Managing Virtual Disks<a name="EN-US_TOPIC_0187048016"></a>

## Overview<a name="section1430072817262"></a>

Virtual disk types include virtio-blk, virtio-scsi, and vhost-scsi. virtio-blk simulates a block device, and virtio-scsi and vhost-scsi simulate SCSI devices.

-   virtio-blk: It can be used for common system disk and data disk. In this configuration, the virtual disk is presented as  **vd\[a-z\]**  or  **vd\[a-z\]\[a-z\]**  in the VM.
-   virtio-scsi: It is recommended for common system disk and data disk. In this configuration, the virtual disk is presented as  **sd\[a-z\]**  or  **sd\[a-z\]\[a-z\]**  in the VM.
-   vhost-scsi: It is recommended for the virtual disk that has high performance requirements. In this configuration, the virtual disk is presented as  **sd\[a-z\]**  or  **sd\[a-z\]\[a-z\]**  on the VM.

## Procedure<a name="section1065395322715"></a>

For details about how to configure a virtual disk, see  [3.2.4.1 Storage Devices](storage-devices.md). This section uses the virtio-scsi disk as an example to describe how to attach and detach a virtual disk.

-   Attach a virtio-scsi disk.

    Run the  **virsh attach-device**  command to attach the virtio-scsi virtual disk.

    ```
     # virsh attach-device <VMInstance> <attach-device.xml>
    ```

    The preceding command can be used to attach a disk to a VM online. The disk information is specified in the  **attach-device.xml**  file. The following is an example of the  **attach-device.xml**  file:

    ```
    ### attach-device.xml ###
        <disk type='file' device='disk'>
          <driver name='qemu' type='qcow2' cache='none' io='native'/>
          <source file='/path/to/another/qcow2-file'/>
          <backingStore/>
          <target dev='sdb' bus='scsi'/>
          <address type='drive' controller='0' bus='0' target='1' unit='0'/>
        </disk>
    ```

    The disk attached by running the preceding commands becomes invalid after the VM is shut down and restarted. If you need to permanently attach a virtual disk to a VM, run the  **virsh attach-device**  command with the  **--config**  parameter.

-   Detach a virtio-scsi disk.

    If a disk attached online is no longer used, run the  **virsh detach**  command to dynamically detach it.

    ```
     # virsh detach-device <VMInstance> <detach-device.xml>
    ```

    **detach-device.xml**  specifies the XML information of the disk to be detached, which must be the same as the XML information during dynamic attachment.


