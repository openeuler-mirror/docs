# user namespace多对多<a name="ZH-CN_TOPIC_0184808027"></a>

## 功能描述<a name="zh-cn_topic_0182200842_section1477505263912"></a>

user namespace是将容器的root映射到主机的普通用户，使得容器中的进程和用户在容器里有特权，但是在主机上就是普通权限，防止容器中的进程逃逸到主机上，进行非法操作。更进一步，使用user namespace技术后，容器和主机使用不同的uid和gid，保证容器内部的用户资源和主机资源进行隔离，例如文件描述符等。

系统容器支持通过--user-remap接口参数将不同容器的user namespace映射到宿主机不同的user namespace，实现容器user namespace隔离。

## 参数说明<a name="zh-cn_topic_0182200842_section84212067409"></a>

<a name="zh-cn_topic_0182200842_table1869210387418"></a>
<table><thead align="left"><tr id="zh-cn_topic_0182200842_row1569373816419"><th class="cellrowborder" valign="top" width="19.98%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0182200842_p106936387415"><a name="zh-cn_topic_0182200842_p106936387415"></a><a name="zh-cn_topic_0182200842_p106936387415"></a>命令</p>
</th>
<th class="cellrowborder" valign="top" width="19.36%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0182200842_p15693173814112"><a name="zh-cn_topic_0182200842_p15693173814112"></a><a name="zh-cn_topic_0182200842_p15693173814112"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="60.660000000000004%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0182200842_p18217181119202"><a name="zh-cn_topic_0182200842_p18217181119202"></a><a name="zh-cn_topic_0182200842_p18217181119202"></a>参数指定值说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0182200842_row12693163810415"><td class="cellrowborder" valign="top" width="19.98%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200842_p66931838134110"><a name="zh-cn_topic_0182200842_p66931838134110"></a><a name="zh-cn_topic_0182200842_p66931838134110"></a>isula create/run</p>
</td>
<td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200842_p08101647154218"><a name="zh-cn_topic_0182200842_p08101647154218"></a><a name="zh-cn_topic_0182200842_p08101647154218"></a>--user-remap</p>
</td>
<td class="cellrowborder" valign="top" width="60.660000000000004%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0182200842_p5810124718426"><a name="zh-cn_topic_0182200842_p5810124718426"></a><a name="zh-cn_topic_0182200842_p5810124718426"></a>参数格式为&lt;uid&gt;:&lt;gid&gt;:&lt;offset&gt;，参数说明如下：</p>
<a name="zh-cn_topic_0182200842_ul13732312203"></a><a name="zh-cn_topic_0182200842_ul13732312203"></a><ul id="zh-cn_topic_0182200842_ul13732312203"><li>uid、gid为整数型，且必须大于等于0。</li><li>offset为整数型，且必须大于0，并且小于65536。取值不能太小，否则容器无法启动。</li><li>uid加上offset的值必须小于等于2<sup id="zh-cn_topic_0182200842_sup1238617401203"><a name="zh-cn_topic_0182200842_sup1238617401203"></a><a name="zh-cn_topic_0182200842_sup1238617401203"></a>32</sup>-1，gid加上offset的值必须小于等于2<sup id="zh-cn_topic_0182200842_sup1952419166211"><a name="zh-cn_topic_0182200842_sup1952419166211"></a><a name="zh-cn_topic_0182200842_sup1952419166211"></a>32</sup>-1，否则容器启动会报错。</li></ul>
</td>
</tr>
</tbody>
</table>

## 约束限制<a name="zh-cn_topic_0182200842_section173481025112313"></a>

-   如果系统容器指定了--user-remap，那么rootfs目录必须能够被--user-remap指定的uid/gid用户所访问，否则会导致容器user  namespace无法访问rootfs，容器启动失败。
-   容器内所有的id都应该能映射到主机rootfs，某些目录/文件可能是从主机mount到容器，比如/dev/pts目录下面的设备文件，如果offset值太小可能会导致mount失败。
-   uid、gid和offset的值由上层调度平台控制，容器引擎只做合法性检查。
-   --user-remap只适用于系统容器。
-   --user-remap和--privileged不能共存，否则容器启动会报错。
-   如果uid或gid指定为0，则--user-remap参数不生效。

## 使用指导<a name="zh-cn_topic_0182200842_section738582164018"></a>

>![](public_sys-resources/icon-note.gif) **说明：**   
>指定--user-remap参数前，请先将rootfs下所有目录和文件的uid和gid做整体偏移，偏移量为--user-remap指定uid和gid的偏移量。  
>例如将dev目录的uid和gid整体uid和gid偏移100000的参考命令为：  
>chown 100000:100000 dev  

系统容器启动指定--user-remap参数：

```
[root@localhost ~]# isula run -tid --user-remap 100000:100000:65535 --system-container --external-rootfs /home/root-fs none /sbin/init
eb9605b3b56dfae9e0b696a729d5e1805af900af6ce24428fde63f3b0a443f4a
```

分别在宿主机和容器内查看/sbin/init进程信息：

```
[root@localhost ~]# isula exec eb ps aux | grep /sbin/init
root         1  0.6  0.0  21624  9624 ?        Ss   15:47   0:00 /sbin/init
[root@localhost ~]# ps aux | grep /sbin/init
100000    4861  0.5  0.0  21624  9624 ?        Ss   15:47   0:00 /sbin/init
root      4948  0.0  0.0 213032   808 pts/0    S+   15:48   0:00 grep --color=auto /sbin/init
```

可以看到/sbin/init进程在容器内的owner是root用户，但是在宿主机的owner是uid=100000这个用户。

在容器内创建一个文件，然后在宿主机上查看文件的owner：

```
[root@localhost ~]# isula exec -it eb bash
[root@localhost /]# echo test123 >> /test123
[root@localhost /]# exit
exit
[root@localhost ~]# ll /home/root-fs/test123
-rw-------. 1 100000 100000 8 Aug  2 15:52 /home/root-fs/test123
```

可以看到，在容器内生成了一个文件，它的owner是root，但是在宿主机上看到的owner是id=100000这个用户。

