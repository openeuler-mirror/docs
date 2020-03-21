# qemu-ga<a name="ZH-CN_TOPIC_0225484582"></a>

## 概述<a name="section139816286159"></a>

qemu-ga（Qemu Guest Agent）它是运行在虚拟机内部的守护进程，它允许用户在host OS上通过QEMU提供带外通道实现对guest OS的多种管理操作：包括文件操作（open、read、write、close，seek、flush等）、内部关机、虚拟机休眠（suspend-disk、suspend-ram、suspend-hybrid），获取虚拟机内部的信息（包括内存，CPU，网卡，OS等相关信息 ）等。

在一些对安全要求较高的使用场景，为了防止虚拟机内部信息泄露，qemu-ga提供了黑名单功能，用户可以通过黑名单选择性屏蔽qemu-ga提供的部分功能。

>![](public_sys-resources/icon-note.gif) **说明：**   
>qemu-ga对应的安装包是qemu-guest-agent-xx.rpm，openEuler默认不安装。xx为实际版本号。  

## 操作方法<a name="section165041359145412"></a>

添加qemu-ga黑名单的操作步骤如下：

1.  登录虚拟机，确定qemu-guest-agent服务存在且处于运行状态。

    ```
    # systemctl status qemu-guest-agent |grep Active
       Active: active (running) since Wed 2018-03-28 08:17:33 CST; 9h ago
    ```

2.  查询qemu-ga哪些命令可以加入黑名单：

    ```
    # qemu-ga --blacklist ?
    guest-sync-delimited
    guest-sync
    guest-ping
    guest-get-time
    guest-set-time
    guest-info
    ...
    ```


1.  设置黑名单。通过修改/usr/lib/systemd/system/qemu-guest-agent.service，将需要屏蔽的命令添加到该文件的--blacklist中，不同命令使用空格分隔。例如将guest-file-open和guest-file-close命令加入黑名单的配置参考如下：

    ```
    [Service]
    ExecStart=-/usr/bin/qemu-ga \
          --blacklist=guest-file-open guest-file-close
    ```


1.  重启qemu-guest-agent服务：

    ```
    # systemctl daemon-reload
    # systemctl restart qemu-guest-agent
    ```

2.  确认虚拟机开启qemu-ga黑名单功能是否生效，即qemu-ga进程配置的参数--blacklist是否正确。

    ```
    # ps -ef|grep qemu-ga|grep -E "blacklist=|b="
    root       727     1  0 08:17 ?        00:00:00 /usr/bin/qemu-ga --method=virtio-serial --path=/dev/virtio-ports/org.qemu.guest_agent.0 --blacklist=guest-file-open guest-file-close guest-file-read guest-file-write guest-file-seek guest-file-flush -F/etc/qemu-ga/fsfreeze-hook
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >更多关于qemu-ga的资料可以参见[https://wiki.qemu.org/Features/GuestAgent](https://wiki.qemu.org/Features/GuestAgent)。  


