# ImageStatus<a name="ZH-CN_TOPIC_0184808116"></a>

## 接口原型<a name="zh-cn_topic_0183088061_section164301654155514"></a>

```
rpc ImageStatus(ImageStatusRequest) returns (ImageStatusResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088061_section729211519569"></a>

查询指定镜像信息。

## 注意事项<a name="zh-cn_topic_0183088061_section973104418419"></a>

1.  查询指定镜像信息，若镜像不存在，则返回ImageStatusResponse，其中Image设置为nil。
2.  为统一接口，对于embedded格式镜像，因不符合OCI格式镜像，缺少字段，无法通过本接口进行查询。

## 参数<a name="zh-cn_topic_0183088061_section349492895613"></a>

<a name="zh-cn_topic_0183088061_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088061_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p1089154617315"><a name="zh-cn_topic_0183088061_p1089154617315"></a><a name="zh-cn_topic_0183088061_p1089154617315"></a><strong id="zh-cn_topic_0183088061_b98915462314"><a name="zh-cn_topic_0183088061_b98915462314"></a><a name="zh-cn_topic_0183088061_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p128984613319"><a name="zh-cn_topic_0183088061_p128984613319"></a><a name="zh-cn_topic_0183088061_p128984613319"></a><strong id="zh-cn_topic_0183088061_b989164612317"><a name="zh-cn_topic_0183088061_b989164612317"></a><a name="zh-cn_topic_0183088061_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088061_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p0136125811713"><a name="zh-cn_topic_0183088061_p0136125811713"></a><a name="zh-cn_topic_0183088061_p0136125811713"></a><a href="接口-2.md#zh-cn_topic_0182207110_li597891416252">ImageSpec</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p1189846434"><a name="zh-cn_topic_0183088061_p1189846434"></a><a name="zh-cn_topic_0183088061_p1189846434"></a>镜像名称</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088061_row1665161618234"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p56519161236"><a name="zh-cn_topic_0183088061_p56519161236"></a><a name="zh-cn_topic_0183088061_p56519161236"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p1765216132316"><a name="zh-cn_topic_0183088061_p1765216132316"></a><a name="zh-cn_topic_0183088061_p1765216132316"></a>查询额外信息，暂不支持，无额外信息返回</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0183088061_section10495164611565"></a>

<a name="zh-cn_topic_0183088061_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088061_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p197485518319"><a name="zh-cn_topic_0183088061_p197485518319"></a><a name="zh-cn_topic_0183088061_p197485518319"></a><strong id="zh-cn_topic_0183088061_b77413551933"><a name="zh-cn_topic_0183088061_b77413551933"></a><a name="zh-cn_topic_0183088061_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p374185520310"><a name="zh-cn_topic_0183088061_p374185520310"></a><a name="zh-cn_topic_0183088061_p374185520310"></a><strong id="zh-cn_topic_0183088061_b174125511315"><a name="zh-cn_topic_0183088061_b174125511315"></a><a name="zh-cn_topic_0183088061_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088061_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p157445512318"><a name="zh-cn_topic_0183088061_p157445512318"></a><a name="zh-cn_topic_0183088061_p157445512318"></a><a href="接口-2.md#zh-cn_topic_0182207110_li597891416252">Image</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p14745551137"><a name="zh-cn_topic_0183088061_p14745551137"></a><a name="zh-cn_topic_0183088061_p14745551137"></a>镜像信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088061_row467913219246"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p46799211246"><a name="zh-cn_topic_0183088061_p46799211246"></a><a name="zh-cn_topic_0183088061_p46799211246"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p167918215244"><a name="zh-cn_topic_0183088061_p167918215244"></a><a name="zh-cn_topic_0183088061_p167918215244"></a>镜像额外信息，暂不支持，无额外信息返回</p>
</td>
</tr>
</tbody>
</table>

