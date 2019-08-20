# 在NFS服务器<a name="ZH-CN_TOPIC_0183222659"></a>

本节介绍配置NFS（Network File System）的操作步骤，使目标机远程访问存放在服务器上的安装源。

## 背景信息<a name="zh-cn_topic_0022605802_zh-cn_topic_0018319637_section65547010153930"></a>

NFS允许一个系统在网络上与他人共享目录和文件。通过使用NFS，用户和程序可以像访问本地文件一样访问远端系统上的文件。为了正常工作，NFS服务需要被配置并运行。

## 操作步骤<a name="zh-cn_topic_0022605802_zh-cn_topic_0018319637_section2259761153930"></a>

1.  安装nfs-utils软件包。执行以下命令：

    ```
    # yum install nfs-utils
    ```

2.  在文本编辑器中（比如 vim ） 打开“/etc/exports”文件。在exports文件中添加一行，语法如下：

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >该文件可能不存在，安装 nfs-utils 软件包时不会生成这个文件。如果是这种情况，请手动生成该文件。  

    ```
    /path/to/exported/directory host(options)
    ```

    将您要使用的目录的完整路径替换“/path/to/exported/directory”，使用导出目录可访问的IP地址替换host，使用要采用的选项替换options。

3.  完成配置后保存“/etc/exports”文件并退出文本编辑器。
4.  将二进制ISO文件传送到指定的 NFS 导出目录中。执行以下命令：

    ```
    # mv /path/to/image.iso /nfs/exported/directory/
    ```

    您需要使用二进制ISO映像的路径替换/path/to/image.iso，使用在/etc/exports配置文件中指定的导出目录路径替换 /nfs/exported/directory/。

5.  启动nfs服务。以root权限使用以下命令：

    ```
    # systemctl start nfs.service
    ```

    如果在您修改“/etc/exports”配置文件前该服务已经运行，您需要在修改完成后重启nfs服务。要重启nfs服务，在root权限执行以下命令：

    ```
    # systemctl restart nfs.service
    ```


完成上述步骤后就可以通过NFS访问二进制ISO映像，并准备将其作为安装源使用。

在安装前或者安装过程中配置安装源时，请指定 NFS 协议以及该服务器的主机名。如果您将安装树复制到共享根目录的子目录中，也必须指定该目录。例如：如果您将安装树复制到该服务器的“/mnt/nfs/install/”中，该服务器主机名为myserver.example.com，则必须将安装源指定为“nfs:myserver.example.com:/install”。

