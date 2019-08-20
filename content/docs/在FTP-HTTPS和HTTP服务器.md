# 在FTP、HTTPS和HTTP服务器<a name="ZH-CN_TOPIC_0183222660"></a>

本节介绍配置的操作步骤，使目标机远程访问存放在服务器上的安装源。

## 背景信息<a name="zh-cn_topic_0022605803_zh-cn_topic_0018319638_section5149040916564"></a>

安装时，用户也可以通过FTP、HTTP或者HTTPS访问安装源，进行网络安装。与之前介绍的NFS方法有些不同，这里使用了安装树（从二进制DVD ISO映像中提取的内容）和一个有效的. treeinfo文件。

## 配置FTP<a name="zh-cn_topic_0022605803_zh-cn_topic_0018319638_section63743237171021"></a>

1.  安装vsftpd软件包。执行以下命令：

    ```
    # yum install vsftpd
    ```

2.  在文本编辑器中（比如vim） 打开“/etc/vsftpd/vsftpd.conf”文件。编辑您需要修改的选项。相关选项说明请查看“vsftpd.conf\(5\) man page”。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >后续步骤中假设使用默认配置，在这种情况下，需要保证匿名用户有读取文件的权限。  

3.  将完整EulerOS二进制ISO复制到FTP服务器中。
4.  使用 mount 挂载二进制ISO映像。执行以下命令：

    ```
    # mount -o loop,ro -t iso9660 /path/to/image.iso /path/to/mount-point
    ```

    使用二进制ISO映像的存放路径替换“/path/to/image.iso”；使用实际的挂载路径替换“/path/to/mount-point”，这里以“/mnt/install/”进行举例。

5.  从挂载的映像中提取所有文件，并复制到“/var/ftp/”目录中。以root权限使用以下命令：

    ```
    # cp -r /mnt/install/ /var/ftp/
    ```

    执行命令后会创建“/var/ftp/install/”目录，包含完整的EulerOS镜像内容。

6.  启动vsftpd服务。使用命令：

    ```
    # systemctl start vsftpd.service
    ```

    如果在您修改“/etc/vsftpd/vsftpd.conf”配置文件前该服务已经运行，您需要在修改完成后重启vsftpd服务。要重启vsftpd服务，在root权限执行以下命令：

    ```
    # systemctl restart vsftpd.service
    ```


完成上述步骤后即可访问该安装树，并将其作为安装源使用。

在安装前或者安装过程中配置安装源时，请指定FTP协议以及该服务器的主机名或者IP地址。如果您将安装树复制到该服务器“/var/ftp/”目录的子目录中，也必须指定该目录。例如：如果您将安装树复制到服务器的“/var/ftp/install/”中，且该服务器 IP 地址为 192.168.100.100 ，则必须将安装源指定为“ftp: //192.168.100.100/install /。

## 配置HTTP/HTTPS<a name="zh-cn_topic_0022605803_zh-cn_topic_0018319638_section1742857516653"></a>

1.  安装httpd软件包。执行以下命令：

    ```
    # yum install httpd
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >使用https协议需要进行额外配置。通常情况下，安装过程中不会涉及到敏感数据的传输，使用http协议会更高效。  

2.  将完整EulerOS二进制ISO复制到http服务器中。
3.  使用 mount 挂载二进制ISO映像。执行以下命令：

    ```
    # mount -o loop,ro -t iso9660 /path/to/image.iso /path/to/mount-point
    ```

    使用二进制ISO映像的存放路径替换“/path/to/image.iso”；使用实际的挂载路径替换“/path/to/mount-point”，这里以“/mnt/install/”进行举例。

4.  从挂载的映像中提取所有文件，并复制到“/var/www/html/”目录中。以root权限使用以下命令：myserver.example.com

    ```
    # cp -r /mnt/install/ /var/www/html/
    ```

    执行命令后会创建“/var/www/html/install/”目录，包含完整的EulerOS镜像内容。

5.  启动httpd服务。使用命令：

    ```
    # systemctl start httpd.service
    ```


完成上述步骤后即可访问该安装树，并将其作为安装源使用。

在安装前或者安装过程中配置安装源时，请指定http协议以及该服务器的主机名或者IP地址。如果您将安装树复制到该服务器目录的子目录中，也必须指定该目录。例如：如果您将安装树复制到服务器的“/var/www/html/install/”中，且该服务器主机名为myserver.example.com ，则必须将安装源指定为“http://myserver.example.com/install /。

