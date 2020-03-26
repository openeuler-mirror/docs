# 通过qcow2镜像安装<a name="ZH-CN_TOPIC_0229424318"></a>

本节介绍如何使用或者制作qcow2镜像，并介绍相应的操作步骤，指导用户进行安装。

## 制作qcow2镜像<a name="zh-cn_topic_0022605796_zh-cn_topic_0016259799_section66369966101113"></a>

1.  安装qemu-img软件包。

    ```
    # dnf install -y qemu-img
    ```

2.  使用qemu-img工具的create命令，创建镜像文件，命令格式为：

    ```
    $ qemu-img create -f <imgFormat> -o <fileOption> <fileName> <diskSize>
    ```

    其中，各参数含义如下：

    -   _imgFormat_：镜像格式，取值为raw, qcow2等。
    -   _fileOption_：文件选项，用于设置镜像文件的特性，如指定后端镜像文件，压缩，加密等特性。
    -   _f__ileName_：文件名称。
    -   _diskSize_：磁盘大小，用于指定块磁盘设备的大小，支持的单位有K、M、G、T，分别代表KiB、MiB、GiB、TiB。

    例如，创建一个磁盘设备大小为32GB、格式为qcow2的镜像文件openEuler-imge.qcow2，命令和回显如下：

    ```
    $ qemu-img create -f qcow2 openEuler-image.qcow2 32G
    Formatting 'openEuler-image.qcow2', fmt=qcow2 size=34359738368 cluster_size=65536 lazy_refcounts=off refcount_bits=16
    ```


## 启动安装<a name="zh-cn_topic_0022605796_zh-cn_topic_0016259799_section47344128153516"></a>

根据以下步骤启动安装程序：

1.  准备qcow2镜像文件。
2.  准备虚拟机网络。
3.  准备UEFI引导工具集EDK II。
4.  准备虚拟机XML配置文件。
5.  创建虚拟机。
6.  启动虚拟机。

各步骤详细的操作请参考《openEuler 20.03 LTS 虚拟化用户指南》。

