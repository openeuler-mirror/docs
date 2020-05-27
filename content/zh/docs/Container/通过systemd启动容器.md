# 通过systemd启动容器

## 功能描述

系统容器与普通容器最大的差异就在于容器启动的init进程，普通容器无法通过systemd启动系统服务，而系统容器具备这个能力，通过在启动容器时指定\--system-contianer参数可以使能systemd服务。

## 参数说明

<a name="zh-cn_topic_0182200831_table1869210387418"></a>
<table><thead align="left"><tr id="zh-cn_topic_0182200831_row1569373816419"><th class="cellrowborder" valign="top" width="14.04%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0182200831_p106936387415"><a name="zh-cn_topic_0182200831_p106936387415"></a><a name="zh-cn_topic_0182200831_p106936387415"></a>命令</p>
</th>
<th class="cellrowborder" valign="top" width="19.67%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0182200831_p3923191620525"><a name="zh-cn_topic_0182200831_p3923191620525"></a><a name="zh-cn_topic_0182200831_p3923191620525"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="66.29%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0182200831_p3924171618525"><a name="zh-cn_topic_0182200831_p3924171618525"></a><a name="zh-cn_topic_0182200831_p3924171618525"></a>参数指定值说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0182200831_row12693163810415"><td class="cellrowborder" valign="top" width="14.04%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200831_p66931838134110"><a name="zh-cn_topic_0182200831_p66931838134110"></a><a name="zh-cn_topic_0182200831_p66931838134110"></a>isula create/run</p>
</td>
<td class="cellrowborder" valign="top" width="19.67%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200831_p169241552111"><a name="zh-cn_topic_0182200831_p169241552111"></a><a name="zh-cn_topic_0182200831_p169241552111"></a>--system-container</p>
</td>
<td class="cellrowborder" valign="top" width="66.29%" headers="mcps1.1.4.1.3 "><a name="zh-cn_topic_0182200831_ul642434723115"></a><a name="zh-cn_topic_0182200831_ul642434723115"></a><ul id="zh-cn_topic_0182200831_ul642434723115"><li>布尔变量，取值为true、false，未指定值时表示true。</li><li>指定某个容器类型是否属于系统容器，必须使能。</li></ul>
</td>
</tr>
</tbody>
</table>

## 约束限制

-   systemd服务需要调用一些特殊系统调用，包括mount、umount2、unshare、reboot以及name\_to\_handle\_at，所以在不开启特权容器标签的情况下，系统容器打开了调用上述接口的权限。
-   系统容器都是init启动，init进程不响应表示正常退出的SIGTERM信号，stop默认在10s之后才会强制杀死容器。如果需要快速结束，可以手动指定stop的超时时间。
-   \--system-container必须配合\--external-rootfs参数一起使用。
-   系统容器内支持运行各类服务，服务的启停通过systemctl来管理，服务之间可能会出现相互依赖关系导致异常情况下某些服务进程出现D/Z状态，使得容器无法正常退出。
-   系统容器内的某些服务进程可能会影响其它操作结果，例如容器内若运行了NetworkManager服务，可能会影响向容器添加网卡的行为（网卡添加成功然后被NetworkManger停掉），导致不可预期的结果。
-   系统容器和主机暂时无法实现udev事件隔离，所以fstab配置也暂不支持。
-   systemd服务可能和libcgroup提供的cgconfig服务在功能上出现冲突，建议在容器内去掉libcgroup相关的包或者配置cgconfig服务的Delegate值为no。

## 使用示例

-   指定\--system-container和\--external-rootfs参数启动系统容器。

    ```
    [root@localhost ~]# isula run -tid -n systest01 --system-container --external-rootfs /root/myrootfs none init
    ```

-   执行以上命令后容器成功运行，通过exec进容器查看进程信息，可看到systemd服务已启动。

    ```
    [root@localhost ~]# isula exec -it systest01 bash
    [root@localhost /]# ps -ef
    UID        PID  PPID  C STIME TTY          TIME CMD
    root         1     0  2 06:49 ?        00:00:00 init
    root        14     1  2 06:49 ?        00:00:00 /usr/lib/systemd/systemd-journal
    root        16     1  0 06:49 ?        00:00:00 /usr/lib/systemd/systemd-network
    dbus        23     1  0 06:49 ?        00:00:00 /usr/bin/dbus-daemon --system --
    root        25     0  0 06:49 ?        00:00:00 bash
    root        59    25  0 06:49 ?        00:00:00 ps –ef
    ```


-   容器内执行systemctl命令查看服务状态，可看到服务被systemd管理。

    ```
    [root@localhost /]# systemctl status dbus
    ● dbus.service - D-Bus System Message Bus
       Loaded: loaded (/usr/lib/systemd/system/dbus.service; static; vendor preset:
    disabled)
       Active: active (running) since Mon 2019-07-22 06:49:38 UTC; 2min 5
    8s ago
         Docs: man:dbus-daemon(1)
     Main PID: 23 (dbus-daemon)
       CGroup: /system.slice/dbus.service
               └─23 /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidf
    ile --systemd-activation --syslog-only
     
    Jul 22 06:49:38 localhost systemd[1]: Started D-Bus System Message Bus.
    ```

-   容器内通过systemctl stop/start服务，可看到服务被systemd管理。

    ```
    [root@localhost /]# systemctl stop dbus
    Warning: Stopping dbus.service, but it can still be activated by:
      dbus.socket
    [root@localhost /]# systemctl start dbus
    ```


