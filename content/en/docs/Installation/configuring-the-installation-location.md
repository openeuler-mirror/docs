# Configuring the Installation Location<a name="EN-US_TOPIC_0214071164"></a>

Enter  **5**  on the installation overview page and press  **Enter**  to configure the installation location of the OS. The installation program automatically detects and displays information about available installation locations. Generally, you can retain the default settings.

**Figure  1**  Installation destination<a name="fig62936221559"></a>  
![](figures/installation-destination.png "installation-destination")

Enter **2** and press **Enter** to select **Use All Space**, then enter **c** to specify the partition scheme configuration. Enter **1** to select **Standard Partition**. The parameters are described as follows:

-   **Partitioning options**
    1.  Replace existing Linux system\(s\): Replace the existing system. Only the space occupied by the existing system is used. The existing system data will be overwritten.
    2.  Use All Space: Use all space. Clear all data in the system disk. All system disk space is used for the installation of the system.
    3.  Use Free Space: Use the remaining space. Only the remaining space of the system disk is used for the installation of the system, and the existing system data is not cleared.
    4.  Manually assign mount points \(EXPERIMENTAL\): Manually assign mount points \(experiment\). You can manually allocate mount points. However, this function is only in the experiment phase and cannot be used actually.

-   Partitioning scheme
    1.  Standard Partition: Standard partition. A standard partition can contain file systems or swap space, and can also provide containers for software RAID or LVM physical volumes.
    2.  LVM: Logical volume. Logical volume management \(LVM\) displays a simple bare-metal view of basic physical storage space, such as a hard disk or an LUN. Partitions that are regarded as physical volumes in physical storage can be grouped into volume groups. Each volume group can be divided into multiple logical volumes, and each logical volume simulates a standard disk partition. Therefore, an LVM logical volume can be used as a partition that contains multiple physical disks.
    3.  LVM Thin Provisioning: Thin provisioning of logical volumes. Thin provisioning allows you to manage storage pools with available space, also called thin pools, which can be allocated to any number of devices as required. The thin pools can be dynamically expanded as required to allocate storage space.


After the configuration is complete, enter  **c**  to return to the installation overview page.

