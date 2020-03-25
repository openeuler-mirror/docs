# sVirt保护<a name="ZH-CN_TOPIC_0225484581"></a>

## 概述<a name="section157954293316"></a>

在只使用自由访问控制DAC（Discretionary Acces Control）策略的虚拟化环境中，主机上运行的恶意虚拟机可能存在攻击hypervisor或其他虚拟机的情况。为了提升虚拟化场景的安全性，openEuler使用了sVirt保护。sVirt是基于SELinux，适用于KVM虚拟化场景的安全防护技术。虚拟机本质是主机操作系统上的普通进程，sVirt机制在hypervisor将虚拟机对应的QEMU进程进行SELinux标记分类，除了使用type表示虚拟化专有进程和文件，还用不同的的category（在seclevel区间）表示不同虚拟机，每个虚拟机只能访问自身相同category的文件设备，防止虚拟机访问非授权的主机或其他虚拟机的文件和设备，从而防止虚拟机逃逸，提升主机和虚拟机的安全性。

## 开启sVirt保护<a name="section135982744319"></a>

**一、开启主机的SELinux**

1.  登录主机。
2.  开启主机SELinux功能。
    1.  修改系统启动的grub.cfg，将selinux设置为1。

        ```
        selinux=1
        ```

    2.  修改/etc/selinux/config，将SELINUX模式设置为enforcing。

        ```
        SELINUX=enforcing
        ```

3.  重启主机。

    ```
    # reboot
    ```


**二、创建开启sVirt功能的虚拟机**

1.  虚拟机配置文件中添加如下配置：

    ```
    <seclabel type='dynamic' model='selinux' relabel='yes'/>
    ```

    或确认没有下述配置：

    ```
    <seclabel type='none' model='selinux'/>
    ```

2.  创建虚拟机。

    ```
    # virsh define openEulerVM.xml
    ```


**三、确认sVirt开启成功**

执行下述命令检查运行中的虚拟机QEMU进程是否已经启用sVirt防护，若存在"svirt\_t:s0:c"表示已经启用sVirt防护。

```
# ps -eZ|grep qemu |grep "svirt_t:s0:c"
system_u:system_r:svirt_t:s0:c200,c947 11359 ? 00:03:59 qemu-kvm
system_u:system_r:svirt_t:s0:c427,c670 13790 ? 19:02:07 qemu-kvm
```

