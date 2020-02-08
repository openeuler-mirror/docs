# 通过USB盘安装<a name="ZH-CN_TOPIC_0221454716"></a>

本节介绍如何制作USB盘安装源，并介绍基本的操作步骤，指导用户进行安装。

## 准备安装源<a name="zh-cn_topic_0022605797_zh-cn_topic_0018374843_section16523819201222"></a>

您需要注意USB盘容量的大小，它必须有足够的的空间放下整个镜像，建议USB盘空间大于4G。

1.  将USB盘连接到该系统中，并执行 dmesg 命令查看相关的日志信息。在该日志的最后可以看到刚刚连接USB盘所生成的一组信息，应类似如下：

    ```
    [ 170.171135] sd 5:0:0:0: [sdb] Attached SCSI removable disk
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >连接的USB盘名称以sdb进行举例。  

2.  切换为root用户。使用su命令，需要输入相应的密码。

    ```
    $ su -root
    ```

3.  确保USB盘设备没有被挂载。使用如下命令进行查询：

    ```
    # findmnt /dev/sdb
    ```

    -   如果执行此命令后无输出，表明未挂载，可以继续执行下一步。
    -   如果输出以下信息，表明USB盘已经自动挂载。

        ```
        # findmnt /dev/sdb
        TARGET   SOURCE   FSTYPE  OPTIONS
        /mnt/iso /dev/sdb iso9660 ro,relatime
        ```

        此时，您需要使用umount命令卸载该设备。

        ```
        # umount /mnt/iso
        ```

4.  使用dd命令将ISO安装镜像直接写入USB盘：

    ```
    # dd if=/path/to/image.iso of=/dev/device bs=blocksize
    ```

    使用您下载的ISO镜像文件的完整路径替换 /path/to/image.iso，使用之前由 dmesg 命令给出的设备名称替换device，同时设置合理的块大小（例如：512k）替换 blocksize，这样可以加快写入进度。

    例如：如果该ISO镜像文件位于 /home/testuser/Downloads/openEuler-1.0-base-aarch64-dvd.iso，同时探测到的设备名称为sdb，则该命令如下：

    ```
    # dd if=/home/testuser/Downloads/openEuler-1.0-base-aarch64-dvd.iso of=/dev/sdb bs=512k
    ```

5.  等待镜像写入完成，拔掉USB盘。

    镜像写入过程中不会有进度显示，当\#号再次出现时，表明写入完成。退出root账户，拔掉USB盘。此时，您可以使用该USB盘作为系统的安装源。


## 启动安装<a name="zh-cn_topic_0022605797_zh-cn_topic_0018374843_section61839653201222"></a>

请根据以下步骤启动安装程序：

>![](public_sys-resources/icon-note.gif) **说明：**   
>您需要先设置您的系统优先从USB进行启动引导。以BIOS为例，您需要将“Boot Type Order”中的USB选项调整到首位。  

1.  断开所有安装不需要的驱动器。
2.  打开您的计算机系统。
3.  在计算机中插入USB盘。
4.  重启计算机系统。

在短暂的延迟后会出现图形化引导页面，该页面包含不同引导选项。如果您在一分钟内未进行任何操作，安装程序将自动开始安装。

