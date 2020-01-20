# openEuler开机后进入emergency模式<a name="ZH-CN_TOPIC_0220373219"></a>

## 问题现象<a name="zh-cn_topic_0151920822_s079358afc7a646ecac367116895121cd"></a>

openEuler系统开机后进入emergency模式，如下图所示：

![](figures/zh-cn_image_0220373180.jpg)

## 原因分析<a name="zh-cn_topic_0151920822_s5def92a13626401e865071b5f2ac127c"></a>

操作系统文件系统损坏导致磁盘挂载失败，或者io压力过大导致磁盘挂载超时（超时时间为90秒）。

系统异常掉电、物理磁盘io性能低等情况都可能导致该问题。

## 解决方法<a name="zh-cn_topic_0151920822_s76bf3c913a674441b1fb8f33ba736814"></a>

1.  用户直接输入root账号的密码，登录系统。
2.  使用fsck工具，检测并修复文件系统，然后重启。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >fsck（file system check）用来检查和维护不一致的文件系统。若系统掉电或磁盘发生问题，可利用fsck命令对文件系统进行检查。 用户可以通过“fsck.ext3 -h”、“fsck.ext4 -h”命令查看fsck的使用方法。  


另外，如果用户需要取消磁盘挂载超时时间，可以直接在“/etc/fstab”文件中添加“x-systemd.device-timeout=0”。如下：

```
#
# /etc/fstab
# Created by anaconda on Mon Sep 14 17:25:48 2015
#
# Accessible filesystems, by reference, are maintained under '/dev/disk'
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info
#
/dev/mapper/openEuler-root / ext4 defaults,x-systemd.device-timeout=0 0 0
UUID=afcc811f-4b20-42fc-9d31-7307a8cfe0df /boot ext4 defaults,x-systemd.device-timeout=0 0 0
/dev/mapper/openEuler-home /home ext4 defaults 0 0
/dev/mapper/openEuler-swap swap swap defaults 0 0
```

