# Creating and Mounting a File System<a name="EN-US_TOPIC_0230915935"></a>

After creating an LV, you need to create a file system on the LV and mount the file system to the corresponding directory.

## Creating a File System<a name="section62916319408"></a>

Run the  **mkfs**  command to create a file system.

```
mkfs [option] lvname
```

In the preceding information:

-   _option_: command parameter options. Common parameter options are as follows:
    -   **-t**: specifies the type of the Linux system to be created, such as  **ext2**,  **ext3**, and  **ext4**. The default type is  **ext2**.

-   _lvname_: name of the LV device file corresponding to the file system to be created.

Example: Run the following command to create the  **ext4**  file system on LV  **/dev/vg1/lv1**:

```
mkfs -t ext4 /dev/vg1/lv1
```

## Manually Mounting a File System<a name="section7870195464118"></a>

The file system that is manually mounted is not valid permanently. It does not exist after the OS is restarted.

Run the  **mount**  command to mount a file system.

```
mount lvname mntpath
```

In the preceding information:

-   _lvname_: name of the LV device file corresponding to the file system to be mounted.
-   _mntpath_: mount path.

Example: Run the following command to mount LV  **/dev/vg1/lv1**  to the directory  **/mnt/data**.

```
mount /dev/vg1/lv1 /mnt/data
```

## Automatically Mounting a File System<a name="section118432399159"></a>

A file system that is automatically mounted does not exist after the OS is restarted. You need to manually mount the file system again. If you perform the following steps after manually mounting the file system, the file system can be automatically mounted after the OS is restarted.

1.  <a name="li65701520154311"></a>Run the  **blkid**  command to query the UUID of an LV. The following uses LV  **/dev/vg1/lv1**  as an example:

    ```
    blkid /dev/vg1/lv1
    ```

    Check the command output. It contains the following information in which  _uuidnumber_  is a string of digits, indicating the UUID, and  _fstype_  indicates the file system type.

    /dev/vg1/lv1: UUID="  _uuidnumber_  " TYPE="  _fstype_  "

2.  Run the  **vi /etc/fstab**  command to edit the  **fstab**  file and add the following content to the end of the file:

    ```
    UUID=uuidnumber  mntpath                   fstype    defaults        0 0
    ```

    In the preceding information:

    -   Column 1: indicates the UUID. Enter  _uuidnumber_  obtained in  [1](#li65701520154311).
    -   Column 2: indicates the mount directory of the file system. Replace  _mntpath_  with the actual value.
    -   Column 3: indicates the file system format. Enter  _fstype_  obtained in  [1](#li65701520154311).
    -   Column 4: indicates the mount option. In this example,  **defaults**  is used.
    -   Column 5: indicates the backup option. Enter either  **1**  \(the system automatically backs up the file system\) or  **0**  \(the system does not back up the file system\). In this example,  **0**  is used.
    -   Column 6: indicates the scanning option. Enter either  **1**  \(the system automatically scans the file system during startup\) or  **0**  \(the system does not scan the file system\). In this example,  **0**  is used.

3.  Verify the automatic mounting function.
    1.  Run the  **umount**  command to unmount the file system. The following uses LV  **/dev/vg1/lv1**  as an example:

        ```
        umount /dev/vg1/lv1
        ```

    2.  Run the following command to reload all content in the  **/etc/fstab**  file:

        ```
        mount -a
        ```

    3.  Run the following command to query the file system mounting information \(**/mnt/data**  is used as an example\):

        ```
        mount | grep /mnt/data
        ```

        Check the command output. If the command output contains the following information, the automatic mounting function takes effect:

        /dev/vg1/lv1 on /mnt/data



