# ListContainers<a name="ZH-CN_TOPIC_0184808103"></a>

## 接口原型<a name="zh-cn_topic_0183088049_section164301654155514"></a>

```
rpc ListContainers(ListContainersRequest) returns (ListContainersResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088049_section729211519569"></a>

返回container信息的列表，支持条件过滤。

## 注意事项<a name="zh-cn_topic_0183088049_section973104418419"></a>

## 参数： ListContainersRequest<a name="zh-cn_topic_0183088049_section349492895613"></a>

<a name="zh-cn_topic_0183088049_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088049_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088049_p1089154617315"><a name="zh-cn_topic_0183088049_p1089154617315"></a><a name="zh-cn_topic_0183088049_p1089154617315"></a><strong id="zh-cn_topic_0183088049_b98915462314"><a name="zh-cn_topic_0183088049_b98915462314"></a><a name="zh-cn_topic_0183088049_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088049_p128984613319"><a name="zh-cn_topic_0183088049_p128984613319"></a><a name="zh-cn_topic_0183088049_p128984613319"></a><strong id="zh-cn_topic_0183088049_b989164612317"><a name="zh-cn_topic_0183088049_b989164612317"></a><a name="zh-cn_topic_0183088049_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088049_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088049_p1356616573315"><a name="zh-cn_topic_0183088049_p1356616573315"></a><a name="zh-cn_topic_0183088049_p1356616573315"></a><a href="接口-2.md#zh-cn_topic_0182207110_li780212262306">ContainerFilter</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088049_p1189846434"><a name="zh-cn_topic_0183088049_p1189846434"></a><a name="zh-cn_topic_0183088049_p1189846434"></a>条件过滤参数，具体内容参考左侧链接</p>
</td>
</tr>
</tbody>
</table>

## 返回值： ListContainersResponse<a name="zh-cn_topic_0183088049_section10495164611565"></a>

<a name="zh-cn_topic_0183088049_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088049_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088049_p197485518319"><a name="zh-cn_topic_0183088049_p197485518319"></a><a name="zh-cn_topic_0183088049_p197485518319"></a><strong id="zh-cn_topic_0183088049_b77413551933"><a name="zh-cn_topic_0183088049_b77413551933"></a><a name="zh-cn_topic_0183088049_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088049_p374185520310"><a name="zh-cn_topic_0183088049_p374185520310"></a><a name="zh-cn_topic_0183088049_p374185520310"></a><strong id="zh-cn_topic_0183088049_b174125511315"><a name="zh-cn_topic_0183088049_b174125511315"></a><a name="zh-cn_topic_0183088049_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088049_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088049_p3465158518"><a name="zh-cn_topic_0183088049_p3465158518"></a><a name="zh-cn_topic_0183088049_p3465158518"></a>repeated <a href="接口-2.md#zh-cn_topic_0182207110_li2063672883012">Container</a> containers</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088049_p14745551137"><a name="zh-cn_topic_0183088049_p14745551137"></a><a name="zh-cn_topic_0183088049_p14745551137"></a>容器信息的列表</p>
</td>
</tr>
</tbody>
</table>

