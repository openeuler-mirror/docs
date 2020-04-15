# 禁止通过CTRL+ALT+DEL重启系统<a name="ZH-CN_TOPIC_0192977559"></a>

## 说明<a name="zh-cn_topic_0152100184_s1cfc95ad48354d7c99b199b3b2195eb0"></a>

操作系统默认能够通过“Ctrl+Alt+Del”进行重启，禁止该项特性可以防止因为误操作而导致数据丢失。

## 实现<a name="zh-cn_topic_0152100184_s5f42085a686a409c9100b25f21d2490d"></a>

禁止通过“Ctrl+Alt+Del”重启系统的操作步骤如下：

1.  删除两个ctrl-alt-del.target文件，参考命令如下：

    ```
    rm -f /etc/systemd/system/ctrl-alt-del.target
    rm -f /usr/lib/systemd/system/ctrl-alt-del.target
    ```

2.  修改/etc/systemd/system.conf文件，将\#CtrlAltDelBurstAction=reboot-force修改为CtrlAltDelBurstAction=none。
3.  重启systemd，使修改生效，参考命令如下：

    ```
    systemctl daemon-reexec
    ```

