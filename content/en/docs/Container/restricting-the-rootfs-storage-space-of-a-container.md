# Restricting the Rootfs Storage Space of a Container<a name="EN-US_TOPIC_0184808082"></a>

## Description<a name="en-us_topic_0183293571_section13350115135310"></a>

When the overlay2 storage driver is used on the EXT4 file system, the file system quota of a single container can be set. For example, the quota of container A is set to 5 GB, and the quota of container B is set to 10 GB.

This feature is implemented by the project quota function of the EXT4 file system. If the kernel supports this function, use the syscall SYS\_IOCTL to set the project ID of a directory, and then use the syscall SYS\_QUOTACTL to set the hard limit and soft limit of the corresponding project ID.

## Usage<a name="en-us_topic_0183293571_section188811239165314"></a>

1.  Prepare the environment.

    Ensure that the file system supports the  **Project ID**  and  **Project Quota**  attributes, the kernel version is 4.19 or later, and the version of the peripheral package e2fsprogs is 1.43.4-2 or later.

2.  Before mounting overlayfs to a container, set different project IDs for the upper and work directories of different containers and set inheritance options. After overlayfs is mounted to a container, the project IDs and inherited attributes cannot be modified.
3.  Set the quota as a privileged user outside the container.
4.  Add the following configuration to daemon:

    ```
    -s overlay2 --storage-opt overlay2.override_kernel_check=true
    ```

5.  Daemon supports the following options for setting default restrictions for containers:

    **--storage-opt overlay2.basesize=128M**  specifies the default limit. If  **--storeage-opt size**  is also specified when you run the  **isula run**  command, the value of this parameter takes effect. If no size is specified during the daemon process or when you run the  **isula run**  command, the size is not limited.

6.  Enable the  **Project ID**  and  **Project Quota**  attributes of the file system.
    -   Format and mount the file system.

        ```
        # mkfs.ext4 -O quota,project /dev/sdb
        # mount -o prjquota /dev/sdb /var/lib/isulad
        ```



## Parameters<a name="en-us_topic_0183293571_section204328722112"></a>

When running the  **create/run**  command, set  **--storage-opt**.

<a name="en-us_topic_0183293571_table72131712411"></a>
<table><thead align="left"><tr id="en-us_topic_0183293571_row1526710754110"><th class="cellrowborder" valign="top" width="25.507449255074494%" id="mcps1.1.5.1.1"><p id="en-us_topic_0183293571_p2026715774113"><a name="en-us_topic_0183293571_p2026715774113"></a><a name="en-us_topic_0183293571_p2026715774113"></a><strong id="en-us_topic_0183293571_b142676713417"><a name="en-us_topic_0183293571_b142676713417"></a><a name="en-us_topic_0183293571_b142676713417"></a>Parameter</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.348265173482652%" id="mcps1.1.5.1.2"><p id="en-us_topic_0183293571_p192671473419"><a name="en-us_topic_0183293571_p192671473419"></a><a name="en-us_topic_0183293571_p192671473419"></a><strong id="en-us_topic_0183293571_b72671679414"><a name="en-us_topic_0183293571_b72671679414"></a><a name="en-us_topic_0183293571_b72671679414"></a>Description</strong></p>
</th>
<th class="cellrowborder" valign="top" width="39.796020397960206%" id="mcps1.1.5.1.3"><p id="en-us_topic_0183293571_p1126757144114"><a name="en-us_topic_0183293571_p1126757144114"></a><a name="en-us_topic_0183293571_p1126757144114"></a><strong id="b136446498171"><a name="b136446498171"></a><a name="b136446498171"></a>Value Range</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.348265173482652%" id="mcps1.1.5.1.4"><p id="en-us_topic_0183293571_p1267127154116"><a name="en-us_topic_0183293571_p1267127154116"></a><a name="en-us_topic_0183293571_p1267127154116"></a>Mandatory or Not</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183293571_row72679724111"><td class="cellrowborder" valign="top" width="25.507449255074494%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293571_p82681679412"><a name="en-us_topic_0183293571_p82681679412"></a><a name="en-us_topic_0183293571_p82681679412"></a>--storage-opt size=${rootfsSize}</p>
</td>
<td class="cellrowborder" valign="top" width="17.348265173482652%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293571_p13268197164114"><a name="en-us_topic_0183293571_p13268197164114"></a><a name="en-us_topic_0183293571_p13268197164114"></a>Restricts the root file system (rootfs) storage space of the container.</p>
</td>
<td class="cellrowborder" valign="top" width="39.796020397960206%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293571_p426810715413"><a name="en-us_topic_0183293571_p426810715413"></a><a name="en-us_topic_0183293571_p426810715413"></a>The size parsed by <strong id="b93695103262"><a name="b93695103262"></a><a name="b93695103262"></a>rootfsSize</strong> is a positive 64-bit integer expressed in bytes. You can also set it to <strong id="b7370151015261"><a name="b7370151015261"></a><a name="b7370151015261"></a>([kKmMgGtTpP])?[iI]?[bB]?$</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="17.348265173482652%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293571_p142683715417"><a name="en-us_topic_0183293571_p142683715417"></a><a name="en-us_topic_0183293571_p142683715417"></a>No</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183293571_section1734193235916"></a>

In the  **isula run/create**  command, use the existing parameter  **--storage-opt size=**_value_  to set the quota. The value is a positive number in the unit of  **\[kKmMgGtTpP\]?\[iI\]?\[bB\]?**. If the value does not contain a unit, the default unit is byte.

```
$ [root@localhost ~]# isula run -ti --storage-opt size=10M busybox
/ # df -h
Filesystem                Size      Used Available Use% Mounted on
overlay                  10.0M     48.0K     10.0M   0% /
none                     64.0M         0     64.0M   0% /dev
none                     10.0M         0     10.0M   0% /sys/fs/cgroup
tmpfs                    64.0M         0     64.0M   0% /dev
shm                      64.0M         0     64.0M   0% /dev/shm
/dev/mapper/vg--data-ext41
                          9.8G     51.5M      9.2G   1% /etc/hostname
/dev/mapper/vg--data-ext41
                          9.8G     51.5M      9.2G   1% /etc/resolv.conf
/dev/mapper/vg--data-ext41
                          9.8G     51.5M      9.2G   1% /etc/hosts
tmpfs                     3.9G         0      3.9G   0% /proc/acpi
tmpfs                    64.0M         0     64.0M   0% /proc/kcore
tmpfs                    64.0M         0     64.0M   0% /proc/keys
tmpfs                    64.0M         0     64.0M   0% /proc/timer_list
tmpfs                    64.0M         0     64.0M   0% /proc/sched_debug
tmpfs                     3.9G         0      3.9G   0% /proc/scsi
tmpfs                    64.0M         0     64.0M   0% /proc/fdthreshold
tmpfs                    64.0M         0     64.0M   0% /proc/fdenable
tmpfs                     3.9G         0      3.9G   0% /sys/firmware
/ # 
/ # dd if=/dev/zero of=/home/img bs=1M count=12 && sync
dm-4: write failed, project block limit reached.
10+0 records in
9+0 records out
10432512 bytes (9.9MB) copied, 0.011782 seconds, 844.4MB/s
/ # df -h | grep overlay
overlay                  10.0M     10.0M         0 100% /
/ # 
```

## Constraints<a name="en-us_topic_0183293571_section346363019141"></a>

1.  The quota applies only to the rw layer.

    The quota of overlay2 is for the rw layer of the container. The image size is not included.

2.  The kernel supports and enables this function.

    The kernel must support the EXT4 project quota function. When running  **mkfs**, add  **-O quota,project**. When mounting the file system, add  **-o prjquota**. If any of the preceding conditions is not met, an error is reported when  **--storage-opt size=**_value_  is used.

    ```
    $ [root@localhost ~]# isula run -it --storage-opt size=10Mb busybox df -h
    Error response from daemon: Failed to prepare rootfs with error: time="2019-04-09T05:13:52-04:00" level=fatal msg="error creating read-
    write layer with ID "a4c0e55e82c55e4ee4b0f4ee07f80cc2261cf31b2c2dfd628fa1fb00db97270f": --storage-opt is supported only for overlay over
    xfs or ext4 with 'pquota' mount option"
    ```

3.  Description of the limit of quota:
    1.  If the quota is greater than the size of the partition where user  **root**  of iSulad is located, the file system quota displayed by running the  **df**  command in the container is the size of the partition where user  **root**  of iSulad is located, not the specified quota.
    2.  **--storage-opt size=0**  indicates that the size is not limited and the value cannot be less than 4096. The precision of size is one byte. If the specified precision contains decimal bytes, the decimal part is ignored. For example, if size is set to  **0.1**, the size is not limited. \(The value is restricted by the precision of the floating point number stored on the computer. That is, 0.999999999999999999999999999 is equal to 1. The number of digits 9 may vary according to computers. Therefore, 4095.999999999999999999999999999 is equal to 4096.\) Note that running  **isula inspect**  displays the original command line specified format. If the value contains decimal bytes, you need to ignore the decimal part.
    3.  If the quota is too small, for example,** --storage-opt size=4k**, the container may fail to be started because some files need to be created for starting the container.
    4.  The  **-o prjquota**  option is added to the root partition of iSulad when iSulad is started last time. If this option is not added during this startup, the setting of the container with quota created during the last startup does not take effect.
    5.  The value range of the daemon quota  **--storage-opt overlay2.basesize**  is the same as that of  **--storage-opt size**.

4.  When  **storage-opt**  is set to 4 KB, the lightweight container startup is different from that of Docker.

    Use the  **storage-opt size=4k**  and image  **rnd-dockerhub.huawei.com/official/ubuntu-arm64:latest**  to run the container.

    Docker fails to be started.

    ```
    [root@localhost ~]# docker run -itd --storage-opt size=4k rnd-dockerhub.huawei.com/official/ubuntu-arm64:latest
    docker: Error response from daemon: symlink /proc/mounts /var/lib/docker/overlay2/e6e12701db1a488636c881b44109a807e187b8db51a50015db34a131294fcf70-init/merged/etc/mtab: disk quota exceeded.
    See 'docker run --help'.
    ```

    The lightweight container is started properly and no error is reported.

    ```
    [root@localhost ~]# isula run -itd --storage-opt size=4k rnd-dockerhub.huawei.com/official/ubuntu-arm64:latest
    636480b1fc2cf8ac895f46e77d86439fe2b359a1ff78486ae81c18d089bbd728
    [root@localhost ~]# isula ps
    STATUS  PID   IMAGE                                                 COMMAND   EXIT_CODE RESTART_COUNT STARTAT       FINISHAT RUNTIME ID           NAMES                                                            
    running 17609 rnd-dockerhub.huawei.com/official/ubuntu-arm64:latest /bin/bash 0         0             2 seconds ago -        lcr     636480b1fc2c 636480b1fc2cf8ac895f46e77d86439fe2b359a1ff78486ae81c18d089bbd728 
    ```

    During container startup, if you need to create a file in the  **rootfs**  directory of the container, the image size exceeds 4 KB, and the quota is set to 4 KB, the file creation will fail.

    When Docker starts the container, it creates more mount points than iSulad to mount some directories on the host to the container, such as  **/proc/mounts**  and  **/dev/shm**. If these files do not exist in the image, the creation will fail, therefore, the container fails to be started.

    When a lightweight container uses the default configuration during container startup, there are few mount points. The lightweight container is created only when the directory like  **/proc**  or  **/sys**  does not exist. The image  **rnd-dockerhub.huawei.com/official/ubuntu-arm64:latest**  in the test case contains  **/proc**  and  **/sys**. Therefore, no new file or directory is generated during the container startup. As a result, no error is reported during the lightweight container startup. To verify this process, when the image is replaced with  **rnd-dockerhub.huawei.com/official/busybox-aarch64:latest**, an error is reported when the lightweight container is started because  **/proc**  does not exist in the image.

    ```
    [root@localhost ~]# isula run -itd --storage-opt size=4k rnd-dockerhub.huawei.com/official/busybox-aarch64:latest
    8e893ab483310350b8caa3b29eca7cd3c94eae55b48bfc82b350b30b17a0aaf4
    Error response from daemon: Start container error: runtime error: 8e893ab483310350b8caa3b29eca7cd3c94eae55b48bfc82b350b30b17a0aaf4:tools/lxc_start.c:main:404 starting container process caused "Failed to setup lxc,
    please check the config file."
    ```

5.  Other description:

    When using iSulad with the quota function to switch data disks, ensure that the data disks to be switched are mounted using the  **prjquota**  option and the mounting mode of the  **/var/lib/isulad/storage/overlay2**  directory is the same as that of the  **/var/lib/isulad**  directory.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Before switching the data disk, ensure that the mount point of  **/var/lib/isulad/storage/overlay2**  is unmounted.  


