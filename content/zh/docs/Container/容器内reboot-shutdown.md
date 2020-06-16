# 容器内reboot/shutdown

## 功能描述

系统容器支持在容器内执行reboot和shutdown命令。执行reboot命令效果同重启容器一致；执行shutdown命令效果同停止容器一致。

## 参数说明

<a name="zh-cn_topic_0182200832_table1869210387418"></a>
<table><thead align="left"><tr id="zh-cn_topic_0182200832_row1569373816419"><th class="cellrowborder" valign="top" width="14.29%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0182200832_p106936387415"><a name="zh-cn_topic_0182200832_p106936387415"></a><a name="zh-cn_topic_0182200832_p106936387415"></a>命令</p>
</th>
<th class="cellrowborder" valign="top" width="39.47%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0182200832_p113841447182213"><a name="zh-cn_topic_0182200832_p113841447182213"></a><a name="zh-cn_topic_0182200832_p113841447182213"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="46.239999999999995%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0182200832_p3924171618525"><a name="zh-cn_topic_0182200832_p3924171618525"></a><a name="zh-cn_topic_0182200832_p3924171618525"></a>参数指定值说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0182200832_row12693163810415"><td class="cellrowborder" valign="top" width="14.29%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200832_p66931838134110"><a name="zh-cn_topic_0182200832_p66931838134110"></a><a name="zh-cn_topic_0182200832_p66931838134110"></a>isula create/run</p>
</td>
<td class="cellrowborder" valign="top" width="39.47%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200832_p7384134752211"><a name="zh-cn_topic_0182200832_p7384134752211"></a><a name="zh-cn_topic_0182200832_p7384134752211"></a>--restart</p>
</td>
<td class="cellrowborder" valign="top" width="46.239999999999995%" headers="mcps1.1.4.1.3 "><a name="zh-cn_topic_0182200832_ul1096612111241"></a><a name="zh-cn_topic_0182200832_ul1096612111241"></a><ul id="zh-cn_topic_0182200832_ul1096612111241"><li>字符串变量。</li><li>可取指定值：<p id="zh-cn_topic_0182200832_p153828551538"><a name="zh-cn_topic_0182200832_p153828551538"></a><a name="zh-cn_topic_0182200832_p153828551538"></a>on-reboot：表示重启系统容器。</p>
<p id="zh-cn_topic_0182200832_p1778024415312"><a name="zh-cn_topic_0182200832_p1778024415312"></a><a name="zh-cn_topic_0182200832_p1778024415312"></a>&nbsp;&nbsp;</p>
</li></ul>
</td>
</tr>
</tbody>
</table>

## 约束限制

-   shutdown功能，依赖于不同的OS，以实际容器运行环境对应OS为准。
-   执行“shutdown -h now”命令关闭系统时，不能多次占用console。例如“isula run -ti”命令打开一个console，在另一个host bash中isula attach该容器，会打开另一个console，此时执行shutdown会失败。

## 使用示例

-   容器启动时指定\--restart on-reboot参数，示例如下：

    ```
    [root@localhost ~]# isula run -tid --restart on-reboot --system-container --external-rootfs /root/myrootfs none init
    106faae22a926e22c828a0f2b63cf5c46e5d5986ea8a5b26de81390d0ed9714f
    ```


-   进入容器执行reboot命令：

    ```
    [root@localhost ~]# isula exec -it 10 bash
    [root@localhost /]# reboot
    ```

    查看容器是否重启：

    ```
    [root@localhost ~]# isula exec -it 10 ps aux
    USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
    root         1  0.1  0.0  21588  9504 ?        Ss   12:11   0:00 init
    root        14  0.1  0.0  27024  9376 ?        Ss   12:11   0:00 /usr/lib/system
    root        17  0.0  0.0  18700  5876 ?        Ss   12:11   0:00 /usr/lib/system
    dbus        22  0.0  0.0   9048  3624 ?        Ss   12:11   0:00 /usr/bin/dbus-d
    root        26  0.0  0.0   8092  3012 ?        Rs+  12:13   0:00 ps aux
    ```

-   进入容器执行shutdown命令：

    ```
    [root@localhost ~]# isula exec -it 10 bash
    [root@localhost /]# shutdown -h now
    [root@localhost /]# [root@localhost ~]#
    ```

    检查容器是否停止：

    ```
    [root@localhost ~]# isula exec -it 10 bash
    Error response from daemon: Exec container error;Container is not running:106faae22a926e22c828a0f2b63cf5c46e5d5986ea8a5b26de81390d0ed9714f
    ```


