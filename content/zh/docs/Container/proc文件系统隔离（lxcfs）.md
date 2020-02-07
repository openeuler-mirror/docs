# proc文件系统隔离（lxcfs）<a name="ZH-CN_TOPIC_0184808029"></a>

## 场景描述<a name="zh-cn_topic_0182200844_section16226747154319"></a>

容器虚拟化带来轻量高效，快速部署的同时，也因其隔离性不够彻底，给用户带来一定程度的使用不便。由于Linux内核namespace本身还不够完善，因此容器在隔离性方面也存在一些缺陷。例如，在容器内部proc文件系统中可以看到宿主机上的proc信息（如meminfo,  cpuinfo，stat， uptime等）。利用lxcfs工具可以将容器内的看到宿主机/proc文件系统的内容，替换成本容器实例的相关/proc内容，以便容器内业务获取正确的资源数值。

## 接口说明<a name="zh-cn_topic_0182200844_section571216114417"></a>

系统容器对外提供两个工具包：一个是lxcfs软件，另外一个是配合lxcfs一起使用的isulad-lxcfs-toolkit工具。其中lxcfs作为宿主机daemon进程常驻，isulad-lxcfs-toolkit通过hook机制将宿主机的lxcfs文件系统绑定挂载到容器。

isulad-lxcfs-toolkit命令行格式如下：

```
isulad-lxcfs-toolkit [OPTIONS] COMMAND [COMMAND_OPTIONS]
```

<a name="zh-cn_topic_0182200844_table1869210387418"></a>
<table><thead align="left"><tr id="zh-cn_topic_0182200844_row1569373816419"><th class="cellrowborder" valign="top" width="20.349999999999998%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0182200844_p106936387415"><a name="zh-cn_topic_0182200844_p106936387415"></a><a name="zh-cn_topic_0182200844_p106936387415"></a>命令</p>
</th>
<th class="cellrowborder" valign="top" width="33.410000000000004%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0182200844_p43193341215"><a name="zh-cn_topic_0182200844_p43193341215"></a><a name="zh-cn_topic_0182200844_p43193341215"></a>功能说明</p>
</th>
<th class="cellrowborder" valign="top" width="46.239999999999995%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0182200844_p15693173814112"><a name="zh-cn_topic_0182200844_p15693173814112"></a><a name="zh-cn_topic_0182200844_p15693173814112"></a>参数</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0182200844_row12693163810415"><td class="cellrowborder" valign="top" width="20.349999999999998%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200844_p66931838134110"><a name="zh-cn_topic_0182200844_p66931838134110"></a><a name="zh-cn_topic_0182200844_p66931838134110"></a>remount</p>
</td>
<td class="cellrowborder" valign="top" width="33.410000000000004%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200844_p811074612115"><a name="zh-cn_topic_0182200844_p811074612115"></a><a name="zh-cn_topic_0182200844_p811074612115"></a>将lxcfs重新mount到容器中</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0182200844_p1273811584599"><a name="zh-cn_topic_0182200844_p1273811584599"></a><a name="zh-cn_topic_0182200844_p1273811584599"></a>--all：对所有的容器执行remout  lxcfs操作</p>
<p id="zh-cn_topic_0182200844_p8738358165912"><a name="zh-cn_topic_0182200844_p8738358165912"></a><a name="zh-cn_topic_0182200844_p8738358165912"></a>--container-id：remount  lxcfs到特定的容器ID</p>
</td>
</tr>
<tr id="zh-cn_topic_0182200844_row12634059013"><td class="cellrowborder" valign="top" width="20.349999999999998%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200844_p9635951805"><a name="zh-cn_topic_0182200844_p9635951805"></a><a name="zh-cn_topic_0182200844_p9635951805"></a>umount</p>
</td>
<td class="cellrowborder" valign="top" width="33.410000000000004%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200844_p4389165412117"><a name="zh-cn_topic_0182200844_p4389165412117"></a><a name="zh-cn_topic_0182200844_p4389165412117"></a>将lxcfs从容器中umount掉</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0182200844_p112881622103"><a name="zh-cn_topic_0182200844_p112881622103"></a><a name="zh-cn_topic_0182200844_p112881622103"></a>--all：对所有的容器执行umout  lxcfs操作</p>
<p id="zh-cn_topic_0182200844_p3288172210011"><a name="zh-cn_topic_0182200844_p3288172210011"></a><a name="zh-cn_topic_0182200844_p3288172210011"></a>--container-id：对特定容器执行umount  lxcfs操作</p>
</td>
</tr>
<tr id="zh-cn_topic_0182200844_row915811441301"><td class="cellrowborder" valign="top" width="20.349999999999998%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200844_p166420541409"><a name="zh-cn_topic_0182200844_p166420541409"></a><a name="zh-cn_topic_0182200844_p166420541409"></a>check-lxcfs</p>
</td>
<td class="cellrowborder" valign="top" width="33.410000000000004%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200844_p143691559811"><a name="zh-cn_topic_0182200844_p143691559811"></a><a name="zh-cn_topic_0182200844_p143691559811"></a>检查lxcfs服务是否运行</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0182200844_p1329712815118"><a name="zh-cn_topic_0182200844_p1329712815118"></a><a name="zh-cn_topic_0182200844_p1329712815118"></a>无</p>
</td>
</tr>
<tr id="zh-cn_topic_0182200844_row17443144712014"><td class="cellrowborder" valign="top" width="20.349999999999998%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200844_p1946512581606"><a name="zh-cn_topic_0182200844_p1946512581606"></a><a name="zh-cn_topic_0182200844_p1946512581606"></a>prestart</p>
</td>
<td class="cellrowborder" valign="top" width="33.410000000000004%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200844_p77340320217"><a name="zh-cn_topic_0182200844_p77340320217"></a><a name="zh-cn_topic_0182200844_p77340320217"></a>在lxcfs服务启动前将/var/lib/lxcfs目录mount到容器中</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0182200844_p25281515315"><a name="zh-cn_topic_0182200844_p25281515315"></a><a name="zh-cn_topic_0182200844_p25281515315"></a>无</p>
</td>
</tr>
</tbody>
</table>

## 约束限制<a name="zh-cn_topic_0182200844_section344733012429"></a>

-   当前只支持proc文件系统下的cpuinfo,  meminfo, stat, diskstats,  partitions，swaps和uptime文件，其他的文件和其他内核API文件系统（比如sysfs）未做隔离 。
-   安装rpm包后会在/var/lib/isulad/hooks/hookspec.json生成样例json文件，用户如果需要增加日志功能，需要在定制时加入--log配置。
-   diskstats只能显示支持cfq调度的磁盘信息，无法显示分区信息。容器内设备会被显示为/dev目录下的名字。若不存在则为空。此外，容器根目录所在设备会被显示为sda。
-   挂载lxcfs时必须使用slave参数。若使用shared参数，可能会导致容器内挂载点泄露到主机，影响主机运行 。
-   lxcfs支持服务优雅降级使用，若lxcfs服务crash或者不可用，容器内查看到的cpuinfo,  meminfo, stat, diskstats, partitions, swaps和uptime均为host信息，容器其它业务功能不受影响。
-   lxcfs底层依赖fuse内核模块以及libfuse库，因此需要内核支持fuse。
-   lxcfs当前仅支持容器内运行64位的app，如果容器内运行32位的app可能会导致app读取到的cpuinfo信息不符合预期。
-   lxcfs只是对容器cgroup进行资源视图模拟，对于容器内的系统调用（例如sysconf）获取到的仍然是主机的信息，lxcfs无法做到内核隔离。
-   lxcfs使用隔离后的cpuinfo显示的cpu信息具有如下特征：
    -   processor：从0开始依次递增。
    -   physical  id：从0开始依次递增。
    -   sibliing：固定为1。
    -   core  id：固定为0。
    -   cpu  cores：固定为1。


## 使用示例<a name="zh-cn_topic_0182200844_section8108617154414"></a>

1.  首先需要安装lxcfs和isulad-lxcfs-toolkit这两个包，并启动lxcfs服务。

    ```
    [root@localhost ~]# yum install lxcfs isulad-lxcfs-toolkit 
    [root@localhost ~]# systemctl start lxcfs
    ```

2.  容器启动完成之后查看容器内是否存在lxcfs挂载点。

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

3.  执行update命令更新容器的cpu和mem资源配置，然后查看容器资源。根据如下回显可知，容器资源视图显示的是容器真实资源数据而不是宿主机的数据。

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


