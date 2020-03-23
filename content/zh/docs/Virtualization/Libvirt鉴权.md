# Libvirt鉴权<a name="ZH-CN_TOPIC_0225484580"></a>

## 简介<a name="section148709206175"></a>

用户使用libvirt远程调用功能时，如果不进行任何鉴权校验，所有连接到主机所在网络的第三方程序都可以通过libvirt的远程调用操作虚拟机，存在安全隐患。为了提升系统安全性，openEuler提供了libvirt鉴权功能，即用户通过libvirt远程调用操作虚拟机前，必须经过身份校验，只有特定用户允许访问虚拟机，从而保护组网中的虚拟机。

## 开启libvirt鉴权<a name="section1459575321614"></a>

openEuler默认关闭libvirt远程调用功能，这里给出开启libvirt远程调用和libvirt鉴权功能的方法。

1.  登录主机。
2.  修改libvirt服务配置文件/etc/libvirt/libvirtd.conf，开启libvirt远程调用和libvirt鉴权功能。例如使用基于SASL（Simple Authentication and Security Layer）协议的TCP远程调用配置参考如下：

    ```
    # 传输层安全协议，0表示关闭，1表示开启，由用户自行配置
    listen_tls = 0
    # 开启基于TCP的远程调用，开启libvirt远程调用和libvirt鉴权功能必须配置为1     
    listen_tcp = 1
    # TCP远程调用所使用的协议，由用户自行配置，此处以sasl为例    
    auth_tcp = "sasl" 
    ```

3.  修改/etc/sasl2/libvirt.conf配置文件，设置SASL认证机制和sasldb数据库。

    ```
    # sasl协议的认证机制
    mech_list: digest-md5
    # 存放用户和用户密码的数据库
    sasldb_path: /etc/libvirt/passwd.db
    ```

4.  添加用于SASL验证的用户并设置其密码，假设用户名为userName，命令参考如下：

    ```
    # saslpasswd2 -a libvirt userName
    Password:
    Again (for verification):
    ```

5.  修改/etc/sysconfig/libvirtd配置文件，开启libvirt侦听选项。

    ```
    LIBVIRTD_ARGS="--listen"
    ```

6.  重启libvirtd服务，使修改生效。

    ```
    # systemctl restart libvirtd
    ```

7.  确认libvirt远程调用的鉴权功能是否生效。根据提示输入用户名和密码能够成功连接libvirt服务，说明开启成功。

    ```
    # virsh -c qemu+tcp://192.168.0.1/system
    Please enter your authentication name: openeuler
    Please enter your password:
    Welcome to virsh, the virtualization interactive terminal.
    
    Type:  'help' for help with commands
           'quit' to quit
    
    virsh #
    ```


## 管理SASL<a name="section1090541121219"></a>

这里给出管理SASL用户的操作。

-   查询数据库中存在的用户

    ```
    # sasldblistusers2 -f /etc/libvirt/passwd.db
    user@localhost.localdomain: userPassword
    ```

-   从数据库中删除用户user

    ```
    # saslpasswd2 -a libvirt -d user
    ```


