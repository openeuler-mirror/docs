# LVM Overview<a name="EN-US_TOPIC_0230915932"></a>

Logical Volume Manager \(LVM\) is a mechanism used for managing disk partitions in Linux. By adding a logical layer between disks and file systems, LVM shields the disk partition layout for file systems, thereby improving flexibility in managing disk partitions.

The procedure of managing a disk through LVM is as follows:

1.  Create physical volumes for a disk.
2.  Combine several physical volumes into a volume group.
3.  Create logical volumes in the volume group.
4.  Create file systems on logical volumes.

When disks are managed using LVM, file systems are distributed on multiple disks and can be easily resized as needed. Therefore, file system space will no longer be limited by disk capacities.

## Basic Terms<a name="section35651919141512"></a>

-   Physical media: refers to physical storage devices in the system, such as hard disks \(**/dev/hda**  and  **/dev/sda**\). It is the storage unit at the lowest layer of the storage system.

-   Physical volume \(PV\): refers to a disk partition or device \(such as a RAID\) that has the same logical functions as a disk partition. PVs are basic logical storage blocks of LVM. A PV contains a special label that is stored in the second 512-byte sector by default. It can also be stored in one of the first four sectors. A label contains the universal unique identifier \(UUID\) of the PV, size of the block device, and the storage location of LVM metadata in the device.

-   Volume group \(VG\): consists of PVs and shields the details of underlying PVs. You can create one or more logical volumes within a VG without considering detailed PV information.

-   Logical volume \(LV\): A VG cannot be used directly. It can be used only after being partitioned into LVs. LVs can be formatted into different file systems and can be directly used after being mounted.

-   Physical extent \(PE\): A PE is a small storage unit in a PV. The PE size is the same as the size of the logical extent in the VG.

-   Logical extent \(LE\): An LE is a small storage unit in an LV. In one VG, the LEs of all the LVs have the same size.

