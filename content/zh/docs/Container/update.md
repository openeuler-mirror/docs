# update<a name="ZH-CN_TOPIC_0184808259"></a>

用法：**docker update \[OPTIONS\] CONTAINER \[CONTAINER...\]**

功能：热变更一个或多个容器配置。

选项：

**表 1**  参数说明

<a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_table1239044502210"></a>
<table><thead align="left"><tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row439004518223"><th class="cellrowborder" valign="top" width="32%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p19390104532213"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p19390104532213"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p19390104532213"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="68%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1039064522216"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1039064522216"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1039064522216"></a>参数含义</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row1349192781120"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p2350827111119"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p2350827111119"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p2350827111119"></a>--accel=[]</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p535052711113"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p535052711113"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p535052711113"></a>设置容器加速器，可设置一个或多个</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row939164522218"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p03911345142218"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p03911345142218"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p03911345142218"></a>--blkio-weight</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1139111453223"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1139111453223"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1139111453223"></a>设置容器blockio的相对权重，从10到1000</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row339184572217"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p83911445172217"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p83911445172217"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p83911445172217"></a>--cpu-shares</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p3391145132220"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p3391145132220"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p3391145132220"></a>设置容器获得主机CPU的相对权重，通过设置这个选项获得更高的优先级，默认所有的容器都是获得相同的CPU优先权。</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row8107726122617"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p51070266260"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p51070266260"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p51070266260"></a>--cpu-period</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p6107926132615"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p6107926132615"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p6107926132615"></a>设置CFS（完全公平调度策略）进程的CPU周期。</p>
<p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1869573811136"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1869573811136"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1869573811136"></a>默认值为100ms；一般--cpu-period参数和--cpu-quota是配合使用的，比如--cpu-period=50000 --cpu-quota=25000，意味着如果有1个CPU，该容器可以每50ms获取到50%的CPU。</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row5206162817268"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p3206528112617"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p3206528112617"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p3206528112617"></a>--cpu-quota</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p416835333813"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p416835333813"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p416835333813"></a>设置CFS(完全公平调度策略)进程的CPU配额，默认为0，即没有限制</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row156458413395"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1264694173910"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1264694173910"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1264694173910"></a>--cpuset-cpus</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p924612309396"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p924612309396"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p924612309396"></a>设置容器中进程允许运行的CPU (0-3, 0,1)。默认没有限制</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row2946124394"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p494181216393"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p494181216393"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p494181216393"></a>--cpuset-mems</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p20942126396"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p20942126396"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p20942126396"></a>设置容器中进程运行运行的内存内存节点 (0-3, 0,1)，只对NUMA系统起作用</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row125801648161311"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p7581448101317"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p7581448101317"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p7581448101317"></a>--kernel-memory=""</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1858174812134"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1858174812134"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1858174812134"></a>设置容器的kernerl内存限制，格式&lt;number&gt;&lt;optional unit&gt;, 其中 unit = b, k, m or g</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row1469012816412"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p26901688416"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p26901688416"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p26901688416"></a>-m, --memory=""</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1469017824112"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1469017824112"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1469017824112"></a>设置容器的内存限制，格式&lt;number&gt;&lt;optional unit&gt;, 其中 unit = b, k, m or g。该参数最小值为4m。</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row1718125964210"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p11811595428"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p11811595428"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p11811595428"></a>--memory-reservation</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p21815598424"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p21815598424"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p21815598424"></a>设置容器内存限制，默认与--memory一致。可认为--memory是硬限制，--memory-reservation是软限制；当使用内存超过预设值时，会动态调整（系统回收内存时尝试将使用内存降低到预设值以下），但不确保一定不超过预设值。一般可以和--memory一起使用，数值小于--memory的预设值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row13297131204317"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p17297171144317"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p17297171144317"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p17297171144317"></a>--memory-swap</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p20638163719436"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p20638163719436"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p20638163719436"></a>设置普通内存和交换分区的使用总量，-1为不做限制。如果不设置，则为--memory值的2倍，即SWAP可再使用与--memory相同的内存量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row15237826153817"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p0237182619382"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p0237182619382"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p0237182619382"></a>--restart=""</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p2345184412396"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p2345184412396"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p2345184412396"></a>设置容器退出时候的重启规则，当前1.3.1版本支持3个规则：</p>
<a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_ul17280105917391"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_ul17280105917391"></a><ul id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_ul17280105917391"><li>no：当容器停止时，不重启。</li><li>on-failure：当容器退出码为非0时重启容器，这个规则可以附加最大重启次数，如on-failure:5，最多重启5次。</li><li>always：无论退出码是什么都退出。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_row209473268151"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p189474268154"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p189474268154"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p189474268154"></a>--help</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1394720264154"><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1394720264154"></a><a name="zh-cn_topic_0183243758_zh-cn_topic_0155237612_zh-cn_topic_0138971318_p1394720264154"></a>打印help信息</p>
</td>
</tr>
</tbody>
</table>

示例：

变更一个容器名为ubuntu的cpu和mem配置，包括容器获得主机CPU的相对权重值为512，容器中进程允许运行的CPU核心为0,1,2,3，容器运行内存限制为512m。

```
$ sudo docker update  --cpu-shares 512  --cpuset-cpus=0,3 --memory 512m ubuntu 
```

