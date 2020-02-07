# cgroup路径可配置<a name="ZH-CN_TOPIC_0184808020"></a>

## 功能描述<a name="zh-cn_topic_0182200835_section260316324238"></a>

系统容器提供在宿主机上进行容器资源隔离和预留的能力。通过--cgroup-parent参数，可以将容器使用的cgroup目录指定到某个特定目录下，从而达到灵活分配宿主机资源的目的。例如可以设置容器a、b、c的cgroup父路径为/lxc/cgroup1，容器d、e、f的cgroup父路径为/lxc/cgroup2，这样通过cgroup路径将容器分为两个group，实现容器cgroup组层面的资源隔离。

## 参数说明<a name="zh-cn_topic_0182200835_section9477144472316"></a>

<a name="zh-cn_topic_0182200835_table1869210387418"></a>
<table><thead align="left"><tr id="zh-cn_topic_0182200835_row1569373816419"><th class="cellrowborder" valign="top" width="21.09%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0182200835_p106936387415"><a name="zh-cn_topic_0182200835_p106936387415"></a><a name="zh-cn_topic_0182200835_p106936387415"></a>命令</p>
</th>
<th class="cellrowborder" valign="top" width="34.03%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0182200835_p15693173814112"><a name="zh-cn_topic_0182200835_p15693173814112"></a><a name="zh-cn_topic_0182200835_p15693173814112"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="44.879999999999995%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0182200835_p158581432132220"><a name="zh-cn_topic_0182200835_p158581432132220"></a><a name="zh-cn_topic_0182200835_p158581432132220"></a>参数指定值说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0182200835_row12693163810415"><td class="cellrowborder" valign="top" width="21.09%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200835_p66931838134110"><a name="zh-cn_topic_0182200835_p66931838134110"></a><a name="zh-cn_topic_0182200835_p66931838134110"></a>isula create/run</p>
</td>
<td class="cellrowborder" valign="top" width="34.03%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200835_p20308121310422"><a name="zh-cn_topic_0182200835_p20308121310422"></a><a name="zh-cn_topic_0182200835_p20308121310422"></a>--cgroup-parent</p>
</td>
<td class="cellrowborder" valign="top" width="44.879999999999995%" headers="mcps1.1.4.1.3 "><a name="zh-cn_topic_0182200835_ul12202171310237"></a><a name="zh-cn_topic_0182200835_ul12202171310237"></a><ul id="zh-cn_topic_0182200835_ul12202171310237"><li>字符串变量。</li><li>指定容器cgroup父路径。</li></ul>
</td>
</tr>
</tbody>
</table>

除了通过命令行指定单个系统容器对应的cgroup父路径外，还可通过修改iSulad容器引擎启动配置文件，指定所有容器的cgroup路径。

<a name="zh-cn_topic_0182200835_table19691237182514"></a>
<table><thead align="left"><tr id="zh-cn_topic_0182200835_row3969103710257"><th class="cellrowborder" valign="top" width="28.312831283128315%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0182200835_p15311154852718"><a name="zh-cn_topic_0182200835_p15311154852718"></a><a name="zh-cn_topic_0182200835_p15311154852718"></a>配置文件路径</p>
</th>
<th class="cellrowborder" valign="top" width="21.752175217521753%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0182200835_p1996983712519"><a name="zh-cn_topic_0182200835_p1996983712519"></a><a name="zh-cn_topic_0182200835_p1996983712519"></a>配置项</p>
</th>
<th class="cellrowborder" valign="top" width="49.934993499349936%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0182200835_p197083782512"><a name="zh-cn_topic_0182200835_p197083782512"></a><a name="zh-cn_topic_0182200835_p197083782512"></a>配置项说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0182200835_row169701737132511"><td class="cellrowborder" valign="top" width="28.312831283128315%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200835_p731194872711"><a name="zh-cn_topic_0182200835_p731194872711"></a><a name="zh-cn_topic_0182200835_p731194872711"></a>/etc/isulad/daemon.json</p>
</td>
<td class="cellrowborder" valign="top" width="21.752175217521753%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200835_p1497063762512"><a name="zh-cn_topic_0182200835_p1497063762512"></a><a name="zh-cn_topic_0182200835_p1497063762512"></a>--cgroup-parent</p>
</td>
<td class="cellrowborder" valign="top" width="49.934993499349936%" headers="mcps1.1.4.1.3 "><a name="zh-cn_topic_0182200835_ul64991736162817"></a><a name="zh-cn_topic_0182200835_ul64991736162817"></a><ul id="zh-cn_topic_0182200835_ul64991736162817"><li>字符串变量。</li><li>指定容器默认cgroup父路径。</li><li>配置示例："cgroup-parent": "/lxc/mycgroup"</li></ul>
</td>
</tr>
</tbody>
</table>

## 约束限制<a name="zh-cn_topic_0182200835_section948115902011"></a>

-   如果daemon端和客户端都设置了cgroup parent参数，最终以客户端指定的--cgroup-parent生效。
-   如果已启动容器A，然后启动容器B，容器B的cgroup父路径指定为容器A的cgroup路径，在删除容器的时候需要先删除容器B再删除容器A，否则会导致cgroup资源残留。

## 使用示例<a name="zh-cn_topic_0182200835_section495911542237"></a>

启动系统容器，指定--cgroup-parent参数：

```
[root@localhost ~]# isula run -tid --cgroup-parent /lxc/cgroup123 --system-container --external-rootfs /root/myrootfs none init
115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
```

查看容器init进程的cgroup信息：

```
[root@localhost ~]# isula inspect -f "{{json .State.Pid}}" 11
22167
[root@localhost ~]# cat /proc/22167/cgroup
13:blkio:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
12:perf_event:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
11:cpuset:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
10:pids:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
9:rdma:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
8:devices:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
7:hugetlb:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
6:memory:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
5:net_cls,net_prio:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
4:cpu,cpuacct:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
3:files:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
2:freezer:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
1:name=systemd:/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e/init.scope
0::/lxc/cgroup123/115878a4dfc7c5b8c62ef8a4b44f216485422be9a28f447a4b9ecac4609f332e
```

可以看到容器的cgroup父路径被设置为/sys/fs/cgroup/<controller\>/lxc/cgroup123

同时，对于所有容器cgroup父路径的设置可以配置一下容器daemon文件，例如：

```
{
         "cgroup-parent": "/lxc/cgroup123",
}
```

然后重启容器引擎，配置生效。

