# UpdateContainerResources<a name="ZH-CN_TOPIC_0184808105"></a>

## 接口原型<a name="zh-cn_topic_0183088051_section164301654155514"></a>

```
rpc UpdateContainerResources(UpdateContainerResourcesRequest) returns (UpdateContainerResourcesResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088051_section729211519569"></a>

该接口用于更新容器资源配置。

## 注意事项<a name="zh-cn_topic_0183088051_section973104418419"></a>

1. 该接口仅用于更新容器的资源配置，不能用于更新Pod的资源配置。

2. 当前不支持更新容器oom\_score\_adj配置

## 参数: UpdateContainerResourcesRequest<a name="zh-cn_topic_0183088051_section349492895613"></a>

<a name="zh-cn_topic_0183088051_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088051_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088051_p1089154617315"><a name="zh-cn_topic_0183088051_p1089154617315"></a><a name="zh-cn_topic_0183088051_p1089154617315"></a><strong id="zh-cn_topic_0183088051_b98915462314"><a name="zh-cn_topic_0183088051_b98915462314"></a><a name="zh-cn_topic_0183088051_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088051_p128984613319"><a name="zh-cn_topic_0183088051_p128984613319"></a><a name="zh-cn_topic_0183088051_p128984613319"></a><strong id="zh-cn_topic_0183088051_b989164612317"><a name="zh-cn_topic_0183088051_b989164612317"></a><a name="zh-cn_topic_0183088051_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088051_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088051_p1019112316015"><a name="zh-cn_topic_0183088051_p1019112316015"></a><a name="zh-cn_topic_0183088051_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088051_p1189846434"><a name="zh-cn_topic_0183088051_p1189846434"></a><a name="zh-cn_topic_0183088051_p1189846434"></a>容器id</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088051_row134851364619"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088051_p18181582213"><a name="zh-cn_topic_0183088051_p18181582213"></a><a name="zh-cn_topic_0183088051_p18181582213"></a><a href="接口-2.md#zh-cn_topic_0182207110_li2050214613477">LinuxContainerResources</a> linux</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088051_p155615864815"><a name="zh-cn_topic_0183088051_p155615864815"></a><a name="zh-cn_topic_0183088051_p155615864815"></a>linux资源配置信息</p>
</td>
</tr>
</tbody>
</table>

## 返回值: UpdateContainerResourcesResponse<a name="zh-cn_topic_0183088051_section10495164611565"></a>

<a name="zh-cn_topic_0183088051_table6480153415235"></a>
<table><tbody><tr id="zh-cn_topic_0183088051_row19480134162317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088051_p7480133418231"><a name="zh-cn_topic_0183088051_p7480133418231"></a><a name="zh-cn_topic_0183088051_p7480133418231"></a><strong id="zh-cn_topic_0183088051_b10480234162319"><a name="zh-cn_topic_0183088051_b10480234162319"></a><a name="zh-cn_topic_0183088051_b10480234162319"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088051_p19480133412233"><a name="zh-cn_topic_0183088051_p19480133412233"></a><a name="zh-cn_topic_0183088051_p19480133412233"></a><strong id="zh-cn_topic_0183088051_b13480103417237"><a name="zh-cn_topic_0183088051_b13480103417237"></a><a name="zh-cn_topic_0183088051_b13480103417237"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088051_row148103482312"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088051_p8487838125"><a name="zh-cn_topic_0183088051_p8487838125"></a><a name="zh-cn_topic_0183088051_p8487838125"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088051_p184863388212"><a name="zh-cn_topic_0183088051_p184863388212"></a><a name="zh-cn_topic_0183088051_p184863388212"></a>无</p>
</td>
</tr>
</tbody>
</table>

