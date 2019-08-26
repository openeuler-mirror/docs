# BIOS环境配置【删除】<a name="ZH-CN_TOPIC_0183222762"></a>

本节介绍在BIOS环境下，如何准备 PXE 服务器。

## 为使用BIOS的系统配置PXE服务器<a name="zh-cn_topic_0022605805_zh-cn_topic_0019735661_section37450132161935"></a>

1.  安装 tftp 软件包。请作为 root 运行以下命令完成此步骤：

    ```
    # yum install tftp-server
    ```

2.  在 /etc/xinet.d/tftp 配置文件中，将 disabled 参数从 yes 改为 no。
3.  将您的 DHCP 服务器配置为使用 SYSLINUX 打包的引导映像。/etc/dhcp/dhcpd.conf 中的示例配置如下：

    ```
    option space pxelinux;
    option pxelinux.magic code 208 = string;
    option pxelinux.configfile code 209 = text;
    option pxelinux.pathprefix code 210 = text;
    option pxelinux.reboottime code 211 = unsigned integer 32;
    
    subnet 10.0.0.0 netmask 255.255.255.0 {
    option routers 10.0.0.254;
    range 10.0.0.2 10.0.0.253;
    
    class "pxeclients" {
    match if substring (option vendor-class-identifier, 0, 9) = "PXEClient";
    next-server 10.0.0.1;
    
    if option arch = 00:07 {
    filename "uefi/shim.efi";
    } else {
    filename "pxelinux/pxelinux.0";
    }
    }
    
    host example-ia32 {
    hardware ethernet XX:YY:ZZ:11:22:33;
    fixed-address 10.0.0.2;
    }
    }
    ```

4.  您现在需要 ISO 映像文件中 SYSLINUX 软件包中的 pxelinux.0 文件。要访问该文件，请作为 root 运行以下命令：

    ```
    # mount -t iso9660 /path_to_image/name_of_image.iso /mount_point -o loop,ro
    ```

    ```
    # cp -pr /mount_point/Packages/syslinux-version-architecture.rpm /publicly_available_directory
    ```

    ```
    # umount /mount_point
    ```

    提取软件包：

    ```
    # rpm2cpio syslinux-version-architecture.rpm | cpio -dimv
    ```

5.  在 tftpboot 中创建 pxelinux 目录，并将 pxelinux.0 复制到该目录中：

    ```
    # mkdir /var/lib/tftpboot/pxelinux
    ```

    ```
    # cp publicly_available_directory/usr/share/syslinux/pxelinux.0 /var/lib/tftpboot/pxelinux
    ```

6.  在 pxelinux/ 目录中添加配置文件。该文件应命名为 default，或者使用该系统的 IP 地址命名。例如：如果您机器的 IP 地址为 10.0.0.1，则文件名应为 0A000001。/var/lib/tftpboot/pxelinux/default 中的示例配置文件类似如下：

    ```
    default vesamenu.c32
    prompt 1
    timeout 600
    
    display boot.msg
    
    label linux
    menu label ^Install system
    menu default
    kernel vmlinuz
    append initrd=initrd.img ip=dhcp inst.repo=http://10.32.5.1/mnt/archive/RHEL-7/7.x/Server/x86_64/os/
    label vesa
    menu label Install system with ^basic video driver
    kernel vmlinuz
    append initrd=initrd.img ip=dhcp inst.xdriver=vesa nomodeset inst.repo=http://10.32.5.1/mnt/archive/RHEL-7/7.x/Server/x86_64/os/
    label rescue
    menu label ^Rescue installed system
    kernel vmlinuz
    append initrd=initrd.img rescue
    label local
    menu label Boot from ^local drive
    localboot 0xffff
    ```

7.  将引导映像复制到 tftp 根目录中：

    ```
    # cp /path/to/x86_64/os/images/pxeboot/{vmlinuz,initrd.img} /var/lib/tftpboot/pxelinux/
    ```

8.  使用 systemctl 命令启用并启动 tftp 和 xinetd 服务。

    ```
    # systemctl enable xinetd.service tftp.service
    ```

    ```
    # systemctl start xinetd.service tftp.service
    ```


完成这个步骤后，PXE 服务器就可以开始网络安装。现在您可以启动要在其中安装EulerOS系统，请在提示您指定引导源时选择 PXE 引导，并开始网络安装。

