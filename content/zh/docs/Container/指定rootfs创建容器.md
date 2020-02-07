# 指定rootfs创建容器<a name="ZH-CN_TOPIC_0184808017"></a>

## 功能描述<a name="zh-cn_topic_0182200826_section1190891216312"></a>

系统容器不同于普通容器，普通容器需要指定一个容器镜像来启动，而系统容器通过参数 --external-rootfs 指定一个本地的根文件系统rootfs（Root File System）来启动，rootfs包含了容器运行时依赖的操作系统环境。

## 参数说明<a name="zh-cn_topic_0182200826_section1311019112521"></a>

<a name="zh-cn_topic_0182200826_table99231016135214"></a>
<table><thead align="left"><tr id="zh-cn_topic_0182200826_row13923616125218"><th class="cellrowborder" valign="top" width="15.2%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0182200826_p1692351613529"><a name="zh-cn_topic_0182200826_p1692351613529"></a><a name="zh-cn_topic_0182200826_p1692351613529"></a>命令</p>
</th>
<th class="cellrowborder" valign="top" width="40.01%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0182200826_p3923191620525"><a name="zh-cn_topic_0182200826_p3923191620525"></a><a name="zh-cn_topic_0182200826_p3923191620525"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="44.79%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0182200826_p3924171618525"><a name="zh-cn_topic_0182200826_p3924171618525"></a><a name="zh-cn_topic_0182200826_p3924171618525"></a>参数指定值说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0182200826_row12924616195217"><td class="cellrowborder" valign="top" width="15.2%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0182200826_p092419166523"><a name="zh-cn_topic_0182200826_p092419166523"></a><a name="zh-cn_topic_0182200826_p092419166523"></a>isula create/run</p>
</td>
<td class="cellrowborder" valign="top" width="40.01%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0182200826_p692431614524"><a name="zh-cn_topic_0182200826_p692431614524"></a><a name="zh-cn_topic_0182200826_p692431614524"></a>--external-rootfs</p>
</td>
<td class="cellrowborder" valign="top" width="44.79%" headers="mcps1.1.4.1.3 "><a name="zh-cn_topic_0182200826_ul1292410168521"></a><a name="zh-cn_topic_0182200826_ul1292410168521"></a><ul id="zh-cn_topic_0182200826_ul1292410168521"><li>字符串变量。</li><li>容器根文件系统对应的绝对路径，即 rootfs 的路径。</li></ul>
</td>
</tr>
</tbody>
</table>

## 约束限制<a name="zh-cn_topic_0182200826_section3459165364019"></a>

-   参数--external-rootfs指定的rootfs目录必须为绝对路径，不能为相对路径。
-   参数--external-rootfs指定的rootfs目录必须为一个完整运行的操作系统环境，否则容器会启动失败。
-   容器删除时，不会删除--external-rootfs指定的rootfs目录。
-   不支持在x86环境上运行基于arm rootfs的容器，也不支持在arm环境上运行基于x86 rootfs的容器。
-   同一份rootfs，不建议启动多个容器实例，即同一份rootfs只供一个生命周期内的容器实例使用。

## 使用示例<a name="zh-cn_topic_0182200826_section330518513408"></a>

假设本地rootfs的路径为/root/myrootfs，那么启动一个系统容器的命令如下：

```
# isula run  -tid --system-container --external-rootfs /root/myrootfs none init
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>rootfs为自定义的文件系统，请用户自行准备。例如容器镜像的tar包解压后，即为一个rootfs。  

