# 限制容器rootfs存储空间<a name="ZH-CN_TOPIC_0184808082"></a>

## 描述<a name="zh-cn_topic_0183293571_section13350115135310"></a>

在ext4上使用overlay2时，可以设置单个容器的文件系统限额，比如设置A容器的限额为5G，B容器为10G。

该特性通过ext4文件系统的project quota功能来实现，在内核支持的前提下，通过系统调用SYS\_IOCTL设置某个目录的project ID，再通过系统调用SYS\_QUOTACTL设置相应的project ID的hard limit和solft limit值达到限额的目的。

## 用法<a name="zh-cn_topic_0183293571_section188811239165314"></a>

1.  环境准备

    文件系统支持Project ID和Project Quota属性，4.19版本内核已经支持，外围包e2fsprogs版本不低于1.43.4-2。

2.  在容器挂载overlayfs之前，需要对不同容器的upper目录和work目录设置不同的project id，同时设置继承选项，在容器挂载overlayfs之后不允许再修改project id和继承属性。
3.  配额的设置需要在容器外以特权用户进行。
4.  daemon中增加如下配置

    ```
    -s overlay2 --storage-opt overlay2.override_kernel_check=true
    ```

5.  daemon支持以下选项，用于为容器设置默认的限制，

    --storage-opt overlay2.basesize=128M 指定默认限制的大小，若isula run时也指定 了--storeage-opt size选项，则以run时指定来生效，若daemon跟isula run时都不指定大小，则表示不限制。

6.  需要开启文件系统Project ID和Project Quota属性。
    -   新格式化文件系统并mount

        ```
        # mkfs.ext4 -O quota,project /dev/sdb
        # mount -o prjquota /dev/sdb /var/lib/isulad
        ```



## 参数<a name="zh-cn_topic_0183293571_section204328722112"></a>

create/run时指定--storage-opt参数。

<a name="zh-cn_topic_0183293571_table72131712411"></a>
<table><thead align="left"><tr id="zh-cn_topic_0183293571_row1526710754110"><th class="cellrowborder" valign="top" width="25.507449255074494%" id="mcps1.1.5.1.1"><p id="zh-cn_topic_0183293571_p2026715774113"><a name="zh-cn_topic_0183293571_p2026715774113"></a><a name="zh-cn_topic_0183293571_p2026715774113"></a><strong id="zh-cn_topic_0183293571_b142676713417"><a name="zh-cn_topic_0183293571_b142676713417"></a><a name="zh-cn_topic_0183293571_b142676713417"></a>参数项</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.348265173482652%" id="mcps1.1.5.1.2"><p id="zh-cn_topic_0183293571_p192671473419"><a name="zh-cn_topic_0183293571_p192671473419"></a><a name="zh-cn_topic_0183293571_p192671473419"></a><strong id="zh-cn_topic_0183293571_b72671679414"><a name="zh-cn_topic_0183293571_b72671679414"></a><a name="zh-cn_topic_0183293571_b72671679414"></a>参数说明</strong></p>
</th>
<th class="cellrowborder" valign="top" width="39.796020397960206%" id="mcps1.1.5.1.3"><p id="zh-cn_topic_0183293571_p1126757144114"><a name="zh-cn_topic_0183293571_p1126757144114"></a><a name="zh-cn_topic_0183293571_p1126757144114"></a><strong id="zh-cn_topic_0183293571_b9267207204118"><a name="zh-cn_topic_0183293571_b9267207204118"></a><a name="zh-cn_topic_0183293571_b9267207204118"></a>取值范围</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.348265173482652%" id="mcps1.1.5.1.4"><p id="zh-cn_topic_0183293571_p1267127154116"><a name="zh-cn_topic_0183293571_p1267127154116"></a><a name="zh-cn_topic_0183293571_p1267127154116"></a><strong id="zh-cn_topic_0183293571_b4267975411"><a name="zh-cn_topic_0183293571_b4267975411"></a><a name="zh-cn_topic_0183293571_b4267975411"></a>是否必选</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0183293571_row72679724111"><td class="cellrowborder" valign="top" width="25.507449255074494%" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0183293571_p82681679412"><a name="zh-cn_topic_0183293571_p82681679412"></a><a name="zh-cn_topic_0183293571_p82681679412"></a>--storage-opt size=${rootfsSize}</p>
</td>
<td class="cellrowborder" valign="top" width="17.348265173482652%" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0183293571_p13268197164114"><a name="zh-cn_topic_0183293571_p13268197164114"></a><a name="zh-cn_topic_0183293571_p13268197164114"></a>限制容器rootfs存储空间。</p>
</td>
<td class="cellrowborder" valign="top" width="39.796020397960206%" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0183293571_p426810715413"><a name="zh-cn_topic_0183293571_p426810715413"></a><a name="zh-cn_topic_0183293571_p426810715413"></a>rootfsSize解析出的大小为int64范围内以字节表示的正数，默认单位为B，也可指定为([kKmMgGtTpP])?[iI]?[bB]?$</p>
</td>
<td class="cellrowborder" valign="top" width="17.348265173482652%" headers="mcps1.1.5.1.4 "><p id="zh-cn_topic_0183293571_p142683715417"><a name="zh-cn_topic_0183293571_p142683715417"></a><a name="zh-cn_topic_0183293571_p142683715417"></a>否</p>
</td>
</tr>
</tbody>
</table>

## 示例<a name="zh-cn_topic_0183293571_section1734193235916"></a>

在isula run/create命令行上通过已有参数“--storage-opt size=<value\>”来设置限额。其中value是一个正数，单位可以是\[kKmMgGtTpP\]?\[iI\]?\[bB\]?，在不带单位的时候默认单位是字节。

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

## 约束<a name="zh-cn_topic_0183293571_section346363019141"></a>

1.  限额只针对rw层。

    overlay2的限额是针对容器的rw层的，镜像的大小不计算在内。

2.  内核支持并使能。

    内核必须支持ext4的project quota功能，并在mkfs的时候要加上-O quota,project，挂载的时候要加上-o prjquota。任何一个不满足，在使用--storage-opt size=<value\>时都将报错。

    ```
    $ [root@localhost ~]# isula run -it --storage-opt size=10Mb busybox df -h
    Error response from daemon: Failed to prepare rootfs with error: time="2019-04-09T05:13:52-04:00" level=fatal msg="error creating read-
    write layer with ID "a4c0e55e82c55e4ee4b0f4ee07f80cc2261cf31b2c2dfd628fa1fb00db97270f": --storage-opt is supported only for overlay over
    xfs or ext4 with 'pquota' mount option"
    ```

3.  限制额度的说明。
    1.  限制的额度大于isulad的root所在分区的size时，在容器内用df看到的文件系统的额度是isulad的root所在分区的size，而不是设置的限额。
    2.  --storage-opt size=0代表不限制，且设置值不能小于4096。size的精度为1个字节，如果指定精度含小数个字节，小数部分被忽略，如指定size=0.1实际等同于size=0不限制。（受计算机存储浮点数精度的限制，即0.999999999999999999999999999与1是等价的，具体的9的个数不同计算机可能存在差异，故设置4095.999999999999999999999999999与4096等价，其它情况类似），注意isula inspect显示原始命令行指定形式，如果含小数字节，需自行忽略小数部分。
    3.  限制的额度过小时，比如--storage-opt size=4k，可能会导致容器无法启动，因为启动容器本身需要创建一些文件。
    4.  上一次启动isulad时，isulad的root所在分区挂载时加了-o prjquota选项，这次启动时不加，那么上一次启动中创建的带quota的容器的设置值不生效。
    5.  daemon端配额--storage-opt overlay2.basesize，其取值范围与--storage-opt size相同。

4.  指定storage-opt为4k时，轻量级容器启动与docker有差异

    使用选项 storage-opt size=4k 和镜像 rnd-dockerhub.huawei.com/official/ubuntu-arm64:latest 运行容器。

    docker启动失败。

    ```
    [root@localhost ~]# docker run -itd --storage-opt size=4k rnd-dockerhub.huawei.com/official/ubuntu-arm64:latest
    docker: Error response from daemon: symlink /proc/mounts /var/lib/docker/overlay2/e6e12701db1a488636c881b44109a807e187b8db51a50015db34a131294fcf70-init/merged/etc/mtab: disk quota exceeded.
    See 'docker run --help'.
    ```

    轻量级容器不报错，正常启动

    ```
    [root@localhost ~]# isula run -itd --storage-opt size=4k rnd-dockerhub.huawei.com/official/ubuntu-arm64:latest
    636480b1fc2cf8ac895f46e77d86439fe2b359a1ff78486ae81c18d089bbd728
    [root@localhost ~]# isula ps
    STATUS  PID   IMAGE                                                 COMMAND   EXIT_CODE RESTART_COUNT STARTAT       FINISHAT RUNTIME ID           NAMES                                                            
    running 17609 rnd-dockerhub.huawei.com/official/ubuntu-arm64:latest /bin/bash 0         0             2 seconds ago -        lcr     636480b1fc2c 636480b1fc2cf8ac895f46e77d86439fe2b359a1ff78486ae81c18d089bbd728 
    ```

    在启动容器的过程中，如果需要在容器的rootfs路径下创建文件，若镜像本身占用的大小超过4k，且此时的quota设置为4k，则创建文件必定失败。

    docker在启动容器的过程中，会比isulad创建更多的挂载点，用于挂载host上的某些路径到容器中，如/proc/mounts, /dev/shm等，如果镜像内本身不存在这些文件，则会创建，根据上述原因该操作会导致文件创建失败，因而容器启动失败。

    轻量级容器在启动容器过程中，使用默认配置时，挂载点较少，如/proc，或/sys等路径不存在时，才会创建。用例中的镜像rnd-dockerhub.huawei.com/official/ubuntu-arm64:latest本身含有/proc， /sys等，因此整个启动容器的过程中，都不会有新文件或路径生成，故轻量级容器启动过程不会报错。为验证这一过程，当把镜像替换为rnd-dockerhub.huawei.com/official/busybox-aarch64:latest时，由于该镜像内无/proc存在，轻量级容器启动一样会报错。

    ```
    [root@localhost ~]# isula run -itd --storage-opt size=4k rnd-dockerhub.huawei.com/official/busybox-aarch64:latest
    8e893ab483310350b8caa3b29eca7cd3c94eae55b48bfc82b350b30b17a0aaf4
    Error response from daemon: Start container error: runtime error: 8e893ab483310350b8caa3b29eca7cd3c94eae55b48bfc82b350b30b17a0aaf4:tools/lxc_start.c:main:404 starting container process caused "Failed to setup lxc,
    please check the config file."
    ```

5.  其他说明。

    使用限额功能的isulad切换数据盘时，需要保证被切换的数据盘使用\`prjquota\`选项挂载，且/var/lib/isulad/storage/overlay2目录的挂载方式与/var/lib/isulad相同。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >切换数据盘时需要保证/var/lib/isulad/storage/overlay2的挂载点被卸载。  


