# ContainerStatus<a name="ZH-CN_TOPIC_0184808104"></a>

## 接口原型<a name="zh-cn_topic_0183088050_section164301654155514"></a>

```
rpc ContainerStatus(ContainerStatusRequest) returns (ContainerStatusResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088050_section729211519569"></a>

返回容器状态信息，如果容器不存在，则返回错误。

## 注意事项<a name="zh-cn_topic_0183088050_section973104418419"></a>

## 参数: ContainerStatusRequest<a name="zh-cn_topic_0183088050_section349492895613"></a>

<a name="zh-cn_topic_0183088050_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088050_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p1089154617315"><a name="zh-cn_topic_0183088050_p1089154617315"></a><a name="zh-cn_topic_0183088050_p1089154617315"></a><strong id="zh-cn_topic_0183088050_b98915462314"><a name="zh-cn_topic_0183088050_b98915462314"></a><a name="zh-cn_topic_0183088050_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p128984613319"><a name="zh-cn_topic_0183088050_p128984613319"></a><a name="zh-cn_topic_0183088050_p128984613319"></a><strong id="zh-cn_topic_0183088050_b989164612317"><a name="zh-cn_topic_0183088050_b989164612317"></a><a name="zh-cn_topic_0183088050_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088050_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p1019112316015"><a name="zh-cn_topic_0183088050_p1019112316015"></a><a name="zh-cn_topic_0183088050_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p1189846434"><a name="zh-cn_topic_0183088050_p1189846434"></a><a name="zh-cn_topic_0183088050_p1189846434"></a>容器id</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088050_row134851364619"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p956148114812"><a name="zh-cn_topic_0183088050_p956148114812"></a><a name="zh-cn_topic_0183088050_p956148114812"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p155615864815"><a name="zh-cn_topic_0183088050_p155615864815"></a><a name="zh-cn_topic_0183088050_p155615864815"></a>标识是否显示sandbox的一些额外信息。（暂不支持配置）</p>
</td>
</tr>
</tbody>
</table>

## 返回值: ContainerStatusResponse<a name="zh-cn_topic_0183088050_section10495164611565"></a>

<a name="zh-cn_topic_0183088050_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088050_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p197485518319"><a name="zh-cn_topic_0183088050_p197485518319"></a><a name="zh-cn_topic_0183088050_p197485518319"></a><strong id="zh-cn_topic_0183088050_b77413551933"><a name="zh-cn_topic_0183088050_b77413551933"></a><a name="zh-cn_topic_0183088050_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p374185520310"><a name="zh-cn_topic_0183088050_p374185520310"></a><a name="zh-cn_topic_0183088050_p374185520310"></a><strong id="zh-cn_topic_0183088050_b174125511315"><a name="zh-cn_topic_0183088050_b174125511315"></a><a name="zh-cn_topic_0183088050_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088050_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p157445512318"><a name="zh-cn_topic_0183088050_p157445512318"></a><a name="zh-cn_topic_0183088050_p157445512318"></a><a href="接口-2.md#zh-cn_topic_0182207110_li1234063113301">ContainerStatus</a> status</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p14745551137"><a name="zh-cn_topic_0183088050_p14745551137"></a><a name="zh-cn_topic_0183088050_p14745551137"></a>容器的状态信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088050_row27545518311"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p953212217505"><a name="zh-cn_topic_0183088050_p953212217505"></a><a name="zh-cn_topic_0183088050_p953212217505"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p47512557310"><a name="zh-cn_topic_0183088050_p47512557310"></a><a name="zh-cn_topic_0183088050_p47512557310"></a>sandbox的额外信息，key是任意string，value是json格式的字符串，这些信息可以是任意调试内容。当verbose为true时info不能为空。（暂不支持配置）</p>
</td>
</tr>
</tbody>
</table>

