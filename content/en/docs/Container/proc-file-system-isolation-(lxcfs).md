# proc File System Isolation \(Lxcfs\)<a name="EN-US_TOPIC_0184808029"></a>

## Application Scenario<a name="en-us_topic_0182200844_section16226747154319"></a>

Container virtualization is lightweight and efficient, and can be quickly deployed. However, containers are not strongly isolated, which causes great inconvenience to users. Containers have some defects in isolation because the namespace feature of the Linux kernel is not perfect. For example, you can view the proc information on the host \(such as meminfo, cpuinfo, stat, and uptime\) in the proc file system of a container. You can use the lxcfs tool to replace the /proc content of instances in the container with the content in the /proc file system of the host so that services in the container can obtain the correct resource value.

## API Description<a name="en-us_topic_0182200844_section571216114417"></a>

A system container provides two tool packages: lxcfs and lxcfs-toolkit, which are used together. Lxcfs resides on the host as the daemon process. lxcfs-toolkit mounts the lxcfs file system of the host to containers through the hook mechanism.

The command line of lxcfs-toolkit is as follows:

```
lxcfs-toolkit [OPTIONS] COMMAND [COMMAND_OPTIONS]
```

<a name="en-us_topic_0182200844_table1869210387418"></a>
<table><thead align="left"><tr id="en-us_topic_0182200844_row1569373816419"><th class="cellrowborder" valign="top" width="20.349999999999998%" id="mcps1.1.4.1.1"><p id="en-us_topic_0182200844_p106936387415"><a name="en-us_topic_0182200844_p106936387415"></a><a name="en-us_topic_0182200844_p106936387415"></a><strong id="b1623833212154"><a name="b1623833212154"></a><a name="b1623833212154"></a>Command</strong></p>
</th>
<th class="cellrowborder" valign="top" width="33.410000000000004%" id="mcps1.1.4.1.2"><p id="en-us_topic_0182200844_p43193341215"><a name="en-us_topic_0182200844_p43193341215"></a><a name="en-us_topic_0182200844_p43193341215"></a>Function</p>
</th>
<th class="cellrowborder" valign="top" width="46.239999999999995%" id="mcps1.1.4.1.3"><p id="en-us_topic_0182200844_p15693173814112"><a name="en-us_topic_0182200844_p15693173814112"></a><a name="en-us_topic_0182200844_p15693173814112"></a><strong id="b27881241121517"><a name="b27881241121517"></a><a name="b27881241121517"></a>Parameter</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0182200844_row12693163810415"><td class="cellrowborder" valign="top" width="20.349999999999998%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200844_p66931838134110"><a name="en-us_topic_0182200844_p66931838134110"></a><a name="en-us_topic_0182200844_p66931838134110"></a>remount</p>
</td>
<td class="cellrowborder" valign="top" width="33.410000000000004%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200844_p811074612115"><a name="en-us_topic_0182200844_p811074612115"></a><a name="en-us_topic_0182200844_p811074612115"></a>Remounts lxcfs to containers.</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0182200844_p1273811584599"><a name="en-us_topic_0182200844_p1273811584599"></a><a name="en-us_topic_0182200844_p1273811584599"></a><strong id="b1451441216348"><a name="b1451441216348"></a><a name="b1451441216348"></a>--all</strong>: remounts lxcfs to all containers.</p>
<p id="en-us_topic_0182200844_p8738358165912"><a name="en-us_topic_0182200844_p8738358165912"></a><a name="en-us_topic_0182200844_p8738358165912"></a><strong id="b1498041543411"><a name="b1498041543411"></a><a name="b1498041543411"></a>--container-id</strong>: remounts lxcfs to a specified container.</p>
</td>
</tr>
<tr id="en-us_topic_0182200844_row12634059013"><td class="cellrowborder" valign="top" width="20.349999999999998%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200844_p9635951805"><a name="en-us_topic_0182200844_p9635951805"></a><a name="en-us_topic_0182200844_p9635951805"></a>umount</p>
</td>
<td class="cellrowborder" valign="top" width="33.410000000000004%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200844_p4389165412117"><a name="en-us_topic_0182200844_p4389165412117"></a><a name="en-us_topic_0182200844_p4389165412117"></a>Unmounts lxcfs from containers.</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0182200844_p112881622103"><a name="en-us_topic_0182200844_p112881622103"></a><a name="en-us_topic_0182200844_p112881622103"></a><strong id="b549611437399"><a name="b549611437399"></a><a name="b549611437399"></a>--all</strong>: unmounts lxcfs from all containers.</p>
<p id="en-us_topic_0182200844_p3288172210011"><a name="en-us_topic_0182200844_p3288172210011"></a><a name="en-us_topic_0182200844_p3288172210011"></a><strong id="b1662225218402"><a name="b1662225218402"></a><a name="b1662225218402"></a>--container-id</strong>: unmounts lxcfs from a specified container.</p>
</td>
</tr>
<tr id="en-us_topic_0182200844_row915811441301"><td class="cellrowborder" valign="top" width="20.349999999999998%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200844_p166420541409"><a name="en-us_topic_0182200844_p166420541409"></a><a name="en-us_topic_0182200844_p166420541409"></a>check-lxcfs</p>
</td>
<td class="cellrowborder" valign="top" width="33.410000000000004%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200844_p143691559811"><a name="en-us_topic_0182200844_p143691559811"></a><a name="en-us_topic_0182200844_p143691559811"></a>Checks whether the lxcfs service is running properly.</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0182200844_p1329712815118"><a name="en-us_topic_0182200844_p1329712815118"></a><a name="en-us_topic_0182200844_p1329712815118"></a>None</p>
</td>
</tr>
<tr id="en-us_topic_0182200844_row17443144712014"><td class="cellrowborder" valign="top" width="20.349999999999998%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200844_p1946512581606"><a name="en-us_topic_0182200844_p1946512581606"></a><a name="en-us_topic_0182200844_p1946512581606"></a>prestart</p>
</td>
<td class="cellrowborder" valign="top" width="33.410000000000004%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200844_p77340320217"><a name="en-us_topic_0182200844_p77340320217"></a><a name="en-us_topic_0182200844_p77340320217"></a>Mounts the <strong id="b775651211456"><a name="b775651211456"></a><a name="b775651211456"></a>/var/lib/lxcfs</strong> directory to the container before the lxcfs service starts.</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0182200844_p25281515315"><a name="en-us_topic_0182200844_p25281515315"></a><a name="en-us_topic_0182200844_p25281515315"></a>None</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0182200844_section344733012429"></a>

-   Currently, only the  **cpuinfo**,  **meminfo**,  **stat**,  **diskstats**,  **partitions**,  **swaps**, and  **uptime**  files in the proc file system are supported. Other files are not isolated from other kernel API file systems \(such as sysfs\).
-   After an RPM package is installed, a sample JSON file is generated in  **/var/lib/lcrd/hooks/hookspec.json**. To add the log function, you need to add the  **--log**  configuration during customization.
-   The  **diskstats**  file displays only information about disks that support CFQ scheduling, instead of partition information. Devices in containers are displayed as names in the  **/dev**  directory. If a device name does not exist, the information is left blank. In addition, the device where the container root directory is located is displayed as  **sda**.
-   The  **slave**  parameter is required when lxcfs is mounted. If the  **shared**  parameter is used, the mount point in containers may be leaked to the host, affecting the host running.
-   Lxcfs supports graceful service degradation. If the lxcfs service crashes or becomes unavailable, the  **cpuinfo**,  **meminfo**,  **stat**,  **diskstats**,  **partitions**,  **swaps **and  **uptime**  files in containers are about host information, and other service functions of containers are not affected.
-   Bottom layer of lxcfs depends on the FUSE kernel module and libfuse library. Therefore, the kernel needs to support FUSE.
-   Lxcfs supports only the running of 64-bit applications in containers. If a 32-bit application is running in a container, the CPU information \(**cpuinfo**\) read by the application may fail to meet expectations.
-   Lxcfs simulates the resource view only of container control groups \(cgroups\). Therefore, system calls \(such as sysconf\) in containers can obtain only host information. Lxcfs cannot implement the kernel isolation.
-   The CPU information \(**cpuinfo**\) displayed after lxcfs implements the isolation has the following features:
    -   **processor**: The value increases from 0.
    -   **physical id**: The value increases from 0.
    -   **sibliing**: It has a fixed value of  **1**.
    -   **core id**: It has a fixed value of  **0**.
    -   **cpu cores**: It has a fixed value of  **1**.


## Example<a name="en-us_topic_0182200844_section8108617154414"></a>

1.  Install the lxcfs and lxcfs-toolkit packages and start the lxcfs service.

    ```
    [root@localhost ~]# yum install lxcfs lxcfs-toolkit 
    [root@localhost ~]# systemctl start lxcfs
    ```

2.  After a container is started, check whether the lxcfs mount point exists in the container.

    ```
    [root@localhost ~]# isula run -tid -v /var/lib/lxc:/var/lib/lxc --hook-spec /var/lib/isulad/hooks/hookspec.json --system-container --external-rootfs /home/root-fs none init
    a8acea9fea1337d9fd8270f41c1a3de5bceb77966e03751346576716eefa9782
    [root@localhost ~]# isula exec a8 mount | grep lxcfs
    lxcfs on /var/lib/lxc/lxcfs type fuse.lxcfs (rw,nosuid,nodev,relatime,user_id=0,group_id=0,allow_other)
    lxcfs on /proc/cpuinfo type fuse.lxcfs (rw,nosuid,nodev,relatime,user_id=0,group_id=0,allow_other)
    lxcfs on /proc/diskstats type fuse.lxcfs (rw,nosuid,nodev,relatime,user_id=0,group_id=0,allow_other)
    lxcfs on /proc/meminfo type fuse.lxcfs (rw,nosuid,nodev,relatime,user_id=0,group_id=0,allow_other)
    lxcfs on /proc/partitions type fuse.lxcfs (rw,nosuid,nodev,relatime,user_id=0,group_id=0,allow_other)
    lxcfs on /proc/stat type fuse.lxcfs (rw,nosuid,nodev,relatime,user_id=0,group_id=0,allow_other)
    lxcfs on /proc/swaps type fuse.lxcfs (rw,nosuid,nodev,relatime,user_id=0,group_id=0,allow_other)
    lxcfs on /proc/uptime type fuse.lxcfs (rw,nosuid,nodev,relatime,user_id=0,group_id=0,allow_other)
    ```

3.  Run the  **update**  command to update the CPU and memory resource configurations of the container and check the container resources. As shown in the following command output, the container resource view displays the actual container resource data instead of data of the host.

    ```
    [root@localhost ~]# isula update --cpuset-cpus 0-1 --memory 1G a8
    a8
    [root@localhost ~]# isula exec a8 cat /proc/cpuinfo
    processor       : 0
    BogoMIPS        : 100.00
    cpu MHz         : 2400.000
    Features        : fp asimd evtstrm aes pmull sha1 sha2 crc32 cpuid
    CPU implementer : 0x41
    CPU architecture: 8
    CPU variant     : 0x0
    CPU part        : 0xd08
    CPU revision    : 2
    
    processor       : 1
    BogoMIPS        : 100.00
    cpu MHz         : 2400.000
    Features        : fp asimd evtstrm aes pmull sha1 sha2 crc32 cpuid
    CPU implementer : 0x41
    CPU architecture: 8
    CPU variant     : 0x0
    CPU part        : 0xd08
    CPU revision    : 2
    
    [root@localhost ~]# isula exec a8 free -m
                  total        used        free      shared  buff/cache   available
    Mem:           1024          17         997           7           8        1006
    Swap:          4095           0        4095
    ```


