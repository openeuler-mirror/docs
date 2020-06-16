# namespace化内核参数可写

## 功能描述

对于运行在容器内的业务，如数据库，大数据，包括普通应用，有对部分内核参数进行设置和调整的需求，以满足最佳的业务运行性能和可靠性。内核参数要么不允许修改，要么全部允许修改（特权容器）：

在不允许用户在容器内修改时，只提供了--sysctl外部接口，而且容器内不能灵活修改参数值。

在允许用户在容器内修改时，部分内核参数是全局有效的，某个容器修改后，会影响主机上所有的程序，安全性降低。

  

系统容器提供--ns-change-opt参数，可以指定namespace化的内核参数在容器内动态设置，当前仅支持net、ipc。

## 参数说明

<a name="zh-cn_topic_0182200836_table1869210387418"></a>
<table><thead align="left"><tr id="zh-cn_topic_0182200836_row1569373816419"><th class="cellrowborder" valign="top" width="20.96%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0182200836_p106936387415"><a name="zh-cn_topic_0182200836_p106936387415"></a><a name="zh-cn_topic_0182200836_p106936387415"></a>命令</p>
</th>
<th class="cellrowborder" valign="top" width="20.47%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0182200836_p15693173814112"><a name="zh-cn_topic_0182200836_p15693173814112"></a><a name="zh-cn_topic_0182200836_p15693173814112"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="58.57%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0182200836_p284710435329"><a name="zh-cn_topic_0182200836_p284710435329"></a><a name="zh-cn_topic_0182200836_p284710435329"></a>参数指定值说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0182200836_row12693163810415"><td class="cellrowborder" valign="top" width="20.96%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200836_p66931838134110"><a name="zh-cn_topic_0182200836_p66931838134110"></a><a name="zh-cn_topic_0182200836_p66931838134110"></a>isula create/run</p>
</td>
<td class="cellrowborder" valign="top" width="20.47%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200836_p20308121310422"><a name="zh-cn_topic_0182200836_p20308121310422"></a><a name="zh-cn_topic_0182200836_p20308121310422"></a>--ns-change-opt</p>
</td>
<td class="cellrowborder" valign="top" width="58.57%" headers="mcps1.1.4.1.3 "><a name="zh-cn_topic_0182200836_ul8762153118534"></a><a name="zh-cn_topic_0182200836_ul8762153118534"></a><ul id="zh-cn_topic_0182200836_ul8762153118534"><li>字符串变量。</li><li>仅支持配置net、ipc：<p id="zh-cn_topic_0182200836_p9801138153410"><a name="zh-cn_topic_0182200836_p9801138153410"></a><a name="zh-cn_topic_0182200836_p9801138153410"></a>net：支持/proc/sys/net目录下所有namespace化参数。</p>
<p id="zh-cn_topic_0182200836_p52601216357"><a name="zh-cn_topic_0182200836_p52601216357"></a><a name="zh-cn_topic_0182200836_p52601216357"></a>ipc：支持的namespace化参数列表如下：</p>
<p id="zh-cn_topic_0182200836_p33951505546"><a name="zh-cn_topic_0182200836_p33951505546"></a><a name="zh-cn_topic_0182200836_p33951505546"></a>/proc/sys/kernel/msgmax</p>
<p id="zh-cn_topic_0182200836_p83965012547"><a name="zh-cn_topic_0182200836_p83965012547"></a><a name="zh-cn_topic_0182200836_p83965012547"></a>/proc/sys/kernel/msgmnb</p>
<p id="zh-cn_topic_0182200836_p1439650115419"><a name="zh-cn_topic_0182200836_p1439650115419"></a><a name="zh-cn_topic_0182200836_p1439650115419"></a>/proc/sys/kernel/msgmni</p>
<p id="zh-cn_topic_0182200836_p13396190125414"><a name="zh-cn_topic_0182200836_p13396190125414"></a><a name="zh-cn_topic_0182200836_p13396190125414"></a>/proc/sys/kernel/sem</p>
<p id="zh-cn_topic_0182200836_p83961407547"><a name="zh-cn_topic_0182200836_p83961407547"></a><a name="zh-cn_topic_0182200836_p83961407547"></a>/proc/sys/kernel/shmall</p>
<p id="zh-cn_topic_0182200836_p13396120125419"><a name="zh-cn_topic_0182200836_p13396120125419"></a><a name="zh-cn_topic_0182200836_p13396120125419"></a>/proc/sys/kernel/shmmax</p>
<p id="zh-cn_topic_0182200836_p93961302544"><a name="zh-cn_topic_0182200836_p93961302544"></a><a name="zh-cn_topic_0182200836_p93961302544"></a>/proc/sys/kernel/shmmni</p>
<p id="zh-cn_topic_0182200836_p8396204548"><a name="zh-cn_topic_0182200836_p8396204548"></a><a name="zh-cn_topic_0182200836_p8396204548"></a>/proc/sys/kernel/shm_rmid_forced</p>
<p id="zh-cn_topic_0182200836_p1339610075418"><a name="zh-cn_topic_0182200836_p1339610075418"></a><a name="zh-cn_topic_0182200836_p1339610075418"></a>/proc/sys/fs/mqueue/msg_default</p>
<p id="zh-cn_topic_0182200836_p239712095419"><a name="zh-cn_topic_0182200836_p239712095419"></a><a name="zh-cn_topic_0182200836_p239712095419"></a>/proc/sys/fs/mqueue/msg_max</p>
<p id="zh-cn_topic_0182200836_p1239790175410"><a name="zh-cn_topic_0182200836_p1239790175410"></a><a name="zh-cn_topic_0182200836_p1239790175410"></a>/proc/sys/fs/mqueue/msgsize_default</p>
<p id="zh-cn_topic_0182200836_p63977012541"><a name="zh-cn_topic_0182200836_p63977012541"></a><a name="zh-cn_topic_0182200836_p63977012541"></a>/proc/sys/fs/mqueue/msgsize_max</p>
<p id="zh-cn_topic_0182200836_p139714085417"><a name="zh-cn_topic_0182200836_p139714085417"></a><a name="zh-cn_topic_0182200836_p139714085417"></a>/proc/sys/fs/mqueue/queues_max</p>
</li><li>支持通知指定多个namespce配置，多个配置间通过逗号隔开，例如：--ns-change-opt=net,ipc。</li></ul>
</td>
</tr>
</tbody>
</table>

## 约束限制

-   如果容器启动同时指定了--privileged（特权容器）和--ns-change-opt，则--ns-change-opt不生效。

## 使用示例

启动容器， 指定--ns-change-opt=net：

```
[root@localhost ~]# isula run -tid --ns-change-opt net --system-container --external-rootfs /root/myrootfs none init
4bf44a42b4a14fdaf127616c90defa64b4b532b18efd15b62a71cbf99ebc12d2
[root@localhost ~]# isula exec -it 4b mount | grep /proc/sys
proc on /proc/sys type proc (ro,nosuid,nodev,noexec,relatime)
proc on /proc/sysrq-trigger type proc (ro,nosuid,nodev,noexec,relatime)
proc on /proc/sys/net type proc (rw,nosuid,nodev,noexec,relatime)
```

可以看到容器内/proc/sys/net挂载点为rw，说明net相关的namespace化的内核参数具有读写权限。

再启动一个容器，指定--ns-change-opt=ipc：

```
[root@localhost ~]# isula run -tid --ns-change-opt ipc --system-container --external-rootfs /root/myrootfs none init
c62e5e5686d390500dab2fa76b6c44f5f8da383a4cbbeac12cfada1b07d6c47f
[root@localhost ~]# isula exec -it c6 mount | grep /proc/sys
proc on /proc/sys type proc (ro,nosuid,nodev,noexec,relatime)
proc on /proc/sysrq-trigger type proc (ro,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/shmmax type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/shmmni type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/shmall type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/shm_rmid_forced type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/msgmax type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/msgmni type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/msgmnb type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/kernel/sem type proc (rw,nosuid,nodev,noexec,relatime)
proc on /proc/sys/fs/mqueue type proc (rw,nosuid,nodev,noexec,relatime)
```

可以看到容器内ipc相关的内核参数挂载点为rw，说明ipc相关的namespace化的内核参数具有读写权限。

