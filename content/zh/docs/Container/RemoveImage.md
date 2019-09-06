# RemoveImage<a name="ZH-CN_TOPIC_0184808118"></a>

## 接口原型<a name="zh-cn_topic_0183088063_section164301654155514"></a>

```
rpc RemoveImage(RemoveImageRequest) returns (RemoveImageResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088063_section729211519569"></a>

删除指定镜像。

## 注意事项<a name="zh-cn_topic_0183088063_section973104418419"></a>

为统一接口，对于embedded格式镜像，因不符合OCI格式镜像，缺少字段，无法通过本接口使用image id进行删除。

## 参数<a name="zh-cn_topic_0183088063_section349492895613"></a>

<a name="zh-cn_topic_0183088063_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088063_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088063_p1089154617315"><a name="zh-cn_topic_0183088063_p1089154617315"></a><a name="zh-cn_topic_0183088063_p1089154617315"></a><strong id="zh-cn_topic_0183088063_b98915462314"><a name="zh-cn_topic_0183088063_b98915462314"></a><a name="zh-cn_topic_0183088063_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088063_p128984613319"><a name="zh-cn_topic_0183088063_p128984613319"></a><a name="zh-cn_topic_0183088063_p128984613319"></a><strong id="zh-cn_topic_0183088063_b989164612317"><a name="zh-cn_topic_0183088063_b989164612317"></a><a name="zh-cn_topic_0183088063_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088063_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088063_p0136125811713"><a name="zh-cn_topic_0183088063_p0136125811713"></a><a name="zh-cn_topic_0183088063_p0136125811713"></a><a href="接口-2.md#zh-cn_topic_0182207110_li597891416252">ImageSpec</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088063_p1189846434"><a name="zh-cn_topic_0183088063_p1189846434"></a><a name="zh-cn_topic_0183088063_p1189846434"></a>要删除的镜像名称或者ID</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0183088063_section10495164611565"></a>

<a name="zh-cn_topic_0183088063_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088063_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088063_p197485518319"><a name="zh-cn_topic_0183088063_p197485518319"></a><a name="zh-cn_topic_0183088063_p197485518319"></a><strong id="zh-cn_topic_0183088063_b77413551933"><a name="zh-cn_topic_0183088063_b77413551933"></a><a name="zh-cn_topic_0183088063_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088063_p374185520310"><a name="zh-cn_topic_0183088063_p374185520310"></a><a name="zh-cn_topic_0183088063_p374185520310"></a><strong id="zh-cn_topic_0183088063_b174125511315"><a name="zh-cn_topic_0183088063_b174125511315"></a><a name="zh-cn_topic_0183088063_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088063_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088063_p157445512318"><a name="zh-cn_topic_0183088063_p157445512318"></a><a name="zh-cn_topic_0183088063_p157445512318"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088063_p14745551137"><a name="zh-cn_topic_0183088063_p14745551137"></a><a name="zh-cn_topic_0183088063_p14745551137"></a>无</p>
</td>
</tr>
</tbody>
</table>

