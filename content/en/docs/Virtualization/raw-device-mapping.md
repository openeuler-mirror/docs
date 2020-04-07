# Raw Device Mapping<a name="EN-US_TOPIC_0229812210"></a>

## Overview<a name="section49123710590"></a>

When configuring VM storage devices, you can use configuration files to configure virtual disks for VMs, or connect block devices \(such as physical LUNs and LVs\) to VMs for use to improve storage performance. The latter configuration method is called raw device mapping \(RDM\). Through RDM, a virtual disk is presented as a small computer system interface \(SCSI\) device to the VM and supports most SCSI commands.

RDM can be classified into virtual RDM and physical RDM based on backend implementation features. Compared with virtual RDM, physical RDM provides better performance and more SCSI commands. However, for physical RDM, the entire SCSI disk needs to be mounted to a VM for use. If partitions or logical volumes are used for configuration, the VM cannot identify the disk.

## Configuration Example<a name="section18286191641711"></a>

VM configuration files need to be modified for RDM. The following is a configuration example.

-   Virtual RDM

    The following is an example of mounting the SCSI disk  **/dev/sdc**  on the host to the VM as a virtual raw device:

    ```
    <domain type='kvm'>
     <devices>
        ...
        <controller type='scsi' model='virtio-scsi' index='0'/>
        <disk type='block' device='disk'>
            <driver name='qemu' type='raw' cache='none' io='native'/>
            <source dev='/dev/sdc'/>
            <target dev='sdc' bus='scsi'/>
            <address type='drive' controller='0' bus='0' target='0' unit='0'/>
        </disk>
        ...
     </devices>
    </domain>
    ```


-   Physical RDM

    The following is an example of mounting the SCSI disk  **/dev/sdc**  on the host to the VM as a physical raw device:

    ```
    <domain type='kvm'>
     <devices>
        ...
        <controller type='scsi' model='virtio-scsi' index='0'/>
        <disk type='block' device='lun' rawio='yes'>
            <driver name='qemu' type='raw' cache='none' io='native'/>
            <source dev='/dev/sdc'/>
            <target dev='sdc' bus='scsi'/>
            <address type='drive' controller='0' bus='0' target='0' unit='0'/>
        </disk>
        ...
     </devices>
    </domain>
    ```


