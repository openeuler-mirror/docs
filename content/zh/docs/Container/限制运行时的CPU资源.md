# 限制运行时的CPU资源<a name="ZH-CN_TOPIC_0184808079"></a>

## 描述<a name="zh-cn_topic_0183293568_section13350115135310"></a>

可以通过参数限制容器的各项cpu资源值。

## 用法<a name="zh-cn_topic_0183293568_section188811239165314"></a>

isula create/run时使用cpu相关的参数限制容器的各项cpu资源值，具体参数及取值见下方参数列表。

## 参数<a name="zh-cn_topic_0183293568_section204328722112"></a>

create/run时可以指定下列参数。

<a name="zh-cn_topic_0183293568_teea6792d7cdc4de6bbec22c6d34a8a56"></a>
<table><thead align="left"><tr id="zh-cn_topic_0183293568_r461aacfe00054dd09da79ded3d0d5677"><th class="cellrowborder" valign="top" width="25.000000000000007%" id="mcps1.1.5.1.1"><p id="zh-cn_topic_0183293568_a4713c2757b4742f1bcfc60cf8f92362b"><a name="zh-cn_topic_0183293568_a4713c2757b4742f1bcfc60cf8f92362b"></a><a name="zh-cn_topic_0183293568_a4713c2757b4742f1bcfc60cf8f92362b"></a><strong id="zh-cn_topic_0183293568_zh-cn_topic_0075721648_b576494217460"><a name="zh-cn_topic_0183293568_zh-cn_topic_0075721648_b576494217460"></a><a name="zh-cn_topic_0183293568_zh-cn_topic_0075721648_b576494217460"></a>参数项</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25.720000000000002%" id="mcps1.1.5.1.2"><p id="zh-cn_topic_0183293568_zh-cn_topic_0075721648_p349275174212"><a name="zh-cn_topic_0183293568_zh-cn_topic_0075721648_p349275174212"></a><a name="zh-cn_topic_0183293568_zh-cn_topic_0075721648_p349275174212"></a><strong id="zh-cn_topic_0183293568_ac040c826773e4b99805cc38e76ea34ab"><a name="zh-cn_topic_0183293568_ac040c826773e4b99805cc38e76ea34ab"></a><a name="zh-cn_topic_0183293568_ac040c826773e4b99805cc38e76ea34ab"></a>参数说明</strong></p>
</th>
<th class="cellrowborder" valign="top" width="27.990000000000002%" id="mcps1.1.5.1.3"><p id="zh-cn_topic_0183293568_a4d0aaa96c3b242aca9d2c22e494195f2"><a name="zh-cn_topic_0183293568_a4d0aaa96c3b242aca9d2c22e494195f2"></a><a name="zh-cn_topic_0183293568_a4d0aaa96c3b242aca9d2c22e494195f2"></a><strong id="zh-cn_topic_0183293568_a6ca93c7f0c2c44ada8766aa5e9591252"><a name="zh-cn_topic_0183293568_a6ca93c7f0c2c44ada8766aa5e9591252"></a><a name="zh-cn_topic_0183293568_a6ca93c7f0c2c44ada8766aa5e9591252"></a>取值范围</strong></p>
</th>
<th class="cellrowborder" valign="top" width="21.290000000000003%" id="mcps1.1.5.1.4"><p id="zh-cn_topic_0183293568_a4cfdf0a8726d4fd08a52bb078988fc90"><a name="zh-cn_topic_0183293568_a4cfdf0a8726d4fd08a52bb078988fc90"></a><a name="zh-cn_topic_0183293568_a4cfdf0a8726d4fd08a52bb078988fc90"></a><strong id="zh-cn_topic_0183293568_zh-cn_topic_0075721648_b560748317460"><a name="zh-cn_topic_0183293568_zh-cn_topic_0075721648_b560748317460"></a><a name="zh-cn_topic_0183293568_zh-cn_topic_0075721648_b560748317460"></a>是否必选</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0183293568_r771d05a684c4482b930111a484d0e970"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0183293568_p15638101313244"><a name="zh-cn_topic_0183293568_p15638101313244"></a><a name="zh-cn_topic_0183293568_p15638101313244"></a>--cpu-period</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0183293568_p121511444243"><a name="zh-cn_topic_0183293568_p121511444243"></a><a name="zh-cn_topic_0183293568_p121511444243"></a>限制容器中cpu cfs（完全公平调度）周期</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0183293568_p1363841312411"><a name="zh-cn_topic_0183293568_p1363841312411"></a><a name="zh-cn_topic_0183293568_p1363841312411"></a>64位整数(int64)</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="zh-cn_topic_0183293568_p11638413142415"><a name="zh-cn_topic_0183293568_p11638413142415"></a><a name="zh-cn_topic_0183293568_p11638413142415"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0183293568_row477318296916"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0183293568_p197743291392"><a name="zh-cn_topic_0183293568_p197743291392"></a><a name="zh-cn_topic_0183293568_p197743291392"></a>--cpu-quota</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0183293568_p277462913917"><a name="zh-cn_topic_0183293568_p277462913917"></a><a name="zh-cn_topic_0183293568_p277462913917"></a>限制容器中cpu cfs(完全公平调度) 的配额</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0183293568_p4676155501111"><a name="zh-cn_topic_0183293568_p4676155501111"></a><a name="zh-cn_topic_0183293568_p4676155501111"></a>64位整数(int64)</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="zh-cn_topic_0183293568_p6676175511118"><a name="zh-cn_topic_0183293568_p6676175511118"></a><a name="zh-cn_topic_0183293568_p6676175511118"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0183293568_row94589881017"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0183293568_p1745812831010"><a name="zh-cn_topic_0183293568_p1745812831010"></a><a name="zh-cn_topic_0183293568_p1745812831010"></a>--cpu-shares</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0183293568_p845814811108"><a name="zh-cn_topic_0183293568_p845814811108"></a><a name="zh-cn_topic_0183293568_p845814811108"></a>限制容器中cpu相对权重</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0183293568_p125294568114"><a name="zh-cn_topic_0183293568_p125294568114"></a><a name="zh-cn_topic_0183293568_p125294568114"></a>64位整数(int64)</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="zh-cn_topic_0183293568_p752965651119"><a name="zh-cn_topic_0183293568_p752965651119"></a><a name="zh-cn_topic_0183293568_p752965651119"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0183293568_row491412141020"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0183293568_p4914218105"><a name="zh-cn_topic_0183293568_p4914218105"></a><a name="zh-cn_topic_0183293568_p4914218105"></a>--cpuset-cpus</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0183293568_p1691451161015"><a name="zh-cn_topic_0183293568_p1691451161015"></a><a name="zh-cn_topic_0183293568_p1691451161015"></a>限制容器中使用cpu节点</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0183293568_p2047135781116"><a name="zh-cn_topic_0183293568_p2047135781116"></a><a name="zh-cn_topic_0183293568_p2047135781116"></a>字符串。值为要设置的cpu编号，有效范围为主机上的cpu数量，例如可以设置0-3或者0,1.</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="zh-cn_topic_0183293568_p4471125741113"><a name="zh-cn_topic_0183293568_p4471125741113"></a><a name="zh-cn_topic_0183293568_p4471125741113"></a>否</p>
</td>
</tr>
<tr id="zh-cn_topic_0183293568_row88951155119"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0183293568_p14896165515112"><a name="zh-cn_topic_0183293568_p14896165515112"></a><a name="zh-cn_topic_0183293568_p14896165515112"></a>--cpuset-mems</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0183293568_p989618552018"><a name="zh-cn_topic_0183293568_p989618552018"></a><a name="zh-cn_topic_0183293568_p989618552018"></a>限制容器中cpuset使用的mem节点</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0183293568_p1896145515110"><a name="zh-cn_topic_0183293568_p1896145515110"></a><a name="zh-cn_topic_0183293568_p1896145515110"></a>字符串。值为要设置的cpu编号，有效范围为主机上的cpu数量，例如可以设置0-3或者0,1.</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="zh-cn_topic_0183293568_p108966555117"><a name="zh-cn_topic_0183293568_p108966555117"></a><a name="zh-cn_topic_0183293568_p108966555117"></a>否</p>
</td>
</tr>
</tbody>
</table>

## 示例<a name="zh-cn_topic_0183293568_section1734193235916"></a>

如果需要限制容器只是用特定的cpu，在运行容器时，直接加上--cpuset-cpus number 即可，如：

```
isula run -tid --cpuset-cpus 0,2-3 busybox sh
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>是否设置成功，请参见“查询单个容器信息”章节。  

