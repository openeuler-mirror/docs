# UEFI环境配置<a name="ZH-CN_TOPIC_0183222763"></a>

本节介绍在UEFI环境下，如何准备 PXE 服务器。

## 为使用 UEFI 的系统配置 PXE 服务器<a name="zh-cn_topic_0022605806_zh-cn_topic_0019735662_section57982025163533"></a>

1.  安装 tftp 软件包。请作为 root 运行以下命令完成此步骤：

    ```
    # yum install tftp-server
    ```

2.  在 /etc/xinet.d/tftp 配置文件中，将 disabled 参数从 yes 改为 no。
3.  将您的 DHCP 服务器配置为使用 shim 打包的引导映像。/etc/dhcp/dhcpd.conf 中的示例配置如下：

    ```
      option space PXE;
      option PXE.mtftp-ip    code 1 = ip-address;
      option PXE.mtftp-cport code 2 = unsigned integer 16;
      option PXE.mtftp-sport code 3 = unsigned integer 16;
      option PXE.mtftp-tmout code 4 = unsigned integer 8;
      option PXE.mtftp-delay code 5 = unsigned integer 8;
      option arch code 93 = unsigned integer 16; # RFC4578
    
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

4.  现在您需要 shim 软件包中的 shim.efi 文件，以及 ISO 映像文件中 grub2-efi 软件包的 grubx64.efi 文件。要访问这些文件，请作为 root 运行以下命令：

    ```
    # mount -t iso9660 /path_to_image/name_of_image.iso /mount_point -o loop,ro
    ```

    ```
    # cp -pr /mount_point/Packages/shim-version-architecture.rpm /publicly_available_directory
    ```

    ```
    # cp -pr /mount_point/Packages/grub2-efi-version-architecture.rpm /publicly_available_directory
    ```

    ```
    # umount /mount_point
    ```

    提取软件包：

    ```
    # rpm2cpio shim-version-architecture.rpm | cpio -dimv
    ```

    ```
    # rpm2cpio grub2-efi-version-architecture.rpm | cpio -dimv
    ```

5.  在 tftpboot/ 目录中为 EFI 引导映像创建名为 uefi/ 的目录，并从您的 boot 目录复制它们：

    ```
    # mkdir /var/lib/tftpboot/uefi
    ```

    ```
    # cp publicly_available_directory/boot/efi/EFI/redhat/shim.efi /var/lib/tftpboot/uefi/
    ```

    ```
    # cp publicly_available_directory/boot/efi/EFI/redhat/grubx64.efi /var/lib/tftpboot/uefi/
    ```

6.  在 uefi/ 目录中添加名为 grub.cfg 的配置文件。/var/lib/tftpboot/uefi/grub.cfg 配置文件示例类似如下：

    ```
    set timeout=1
      menuentry 'RHEL' {
      linuxefi uefi/vmlinuz ip=dhcp inst.repo=http://10.32.5.1/mnt/archive/RHEL-7/7.x/Server/x86_64/os/
      initrdefi uefi/initrd.img
    }
    ```

7.  将引导映像复制到您的 uefi/ 目录下：

    ```
    # cp /path/to/x86_64/os/images/pxeboot/{vmlinuz,initrd.img} /var/lib/tftpboot/uefi/
    ```

8.  使用 systemctl 命令启用并启动 tftp 和 xinetd 服务。

    ```
    # systemctl enable xinetd.service tftp.service
    ```

    ```
    # systemctl start xinetd.service tftp.service
    ```


完成这个步骤后，PXE 服务器就可以开始网络安装。现在您可以启动要在其中安装EulerOS系统，请在提示您指定引导源时选择 PXE 引导，并开始网络安装。

