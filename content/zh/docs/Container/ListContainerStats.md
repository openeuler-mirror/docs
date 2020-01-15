# ListContainerStats<a name="ZH-CN_TOPIC_0184808111"></a>

## 接口原型<a name="zh-cn_topic_0183088057_section164301654155514"></a>

```
rpc ListContainerStats(ListContainerStatsRequest) returns (ListContainerStatsResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088057_section729211519569"></a>

返回多个容器占用资源信息，支持条件过滤

## 参数： ListContainerStatsRequest<a name="zh-cn_topic_0183088057_section349492895613"></a>

<a name="zh-cn_topic_0183088057_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088057_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088057_p1089154617315"><a name="zh-cn_topic_0183088057_p1089154617315"></a><a name="zh-cn_topic_0183088057_p1089154617315"></a><strong id="zh-cn_topic_0183088057_b98915462314"><a name="zh-cn_topic_0183088057_b98915462314"></a><a name="zh-cn_topic_0183088057_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088057_p128984613319"><a name="zh-cn_topic_0183088057_p128984613319"></a><a name="zh-cn_topic_0183088057_p128984613319"></a><strong id="zh-cn_topic_0183088057_b989164612317"><a name="zh-cn_topic_0183088057_b989164612317"></a><a name="zh-cn_topic_0183088057_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088057_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088057_p759712497119"><a name="zh-cn_topic_0183088057_p759712497119"></a><a name="zh-cn_topic_0183088057_p759712497119"></a><a href="接口-2.md#zh-cn_topic_0182207110_li285981611148">ContainerStatsFilter</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088057_p1189846434"><a name="zh-cn_topic_0183088057_p1189846434"></a><a name="zh-cn_topic_0183088057_p1189846434"></a>条件过滤参数，具体内容参考左侧链接</p>
</td>
</tr>
</tbody>
</table>

## 返回值： ListContainerStatsResponse<a name="zh-cn_topic_0183088057_section10495164611565"></a>

<a name="zh-cn_topic_0183088057_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088057_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088057_p197485518319"><a name="zh-cn_topic_0183088057_p197485518319"></a><a name="zh-cn_topic_0183088057_p197485518319"></a><strong id="zh-cn_topic_0183088057_b77413551933"><a name="zh-cn_topic_0183088057_b77413551933"></a><a name="zh-cn_topic_0183088057_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088057_p374185520310"><a name="zh-cn_topic_0183088057_p374185520310"></a><a name="zh-cn_topic_0183088057_p374185520310"></a><strong id="zh-cn_topic_0183088057_b174125511315"><a name="zh-cn_topic_0183088057_b174125511315"></a><a name="zh-cn_topic_0183088057_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088057_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088057_p3465158518"><a name="zh-cn_topic_0183088057_p3465158518"></a><a name="zh-cn_topic_0183088057_p3465158518"></a>repeated <a href="接口-2.md#zh-cn_topic_0182207110_li55689514215">ContainerStats</a> stats</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088057_p14745551137"><a name="zh-cn_topic_0183088057_p14745551137"></a><a name="zh-cn_topic_0183088057_p14745551137"></a>容器信息的列表,具体内容参考左侧链接。注：disk和inodes只支持oci格式镜像启动的容器查询</p>
</td>
</tr>
</tbody>
</table>

