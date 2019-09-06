# ListImages<a name="ZH-CN_TOPIC_0184808115"></a>

## 接口原型<a name="zh-cn_topic_0183088060_section164301654155514"></a>

```
rpc ListImages(ListImagesRequest) returns (ListImagesResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088060_section729211519569"></a>

列出当前已存在的镜像信息。

## 注意事项<a name="zh-cn_topic_0183088060_section973104418419"></a>

为统一接口，对于embedded格式镜像，可以通过cri images查询到。但是因embedded镜像不是标准OCI镜像，因此查询得到的结果有以下限制：

1.  因embedded镜像无镜像ID，显示的镜像ID为 镜像的config digest。
2.  因embedded镜像本身无digest仅有config的digest，且格式不符合OCI镜像规范，因此无法显示digest。

## 参数<a name="zh-cn_topic_0183088060_section349492895613"></a>

<a name="zh-cn_topic_0183088060_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088060_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088060_p1089154617315"><a name="zh-cn_topic_0183088060_p1089154617315"></a><a name="zh-cn_topic_0183088060_p1089154617315"></a><strong id="zh-cn_topic_0183088060_b98915462314"><a name="zh-cn_topic_0183088060_b98915462314"></a><a name="zh-cn_topic_0183088060_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088060_p128984613319"><a name="zh-cn_topic_0183088060_p128984613319"></a><a name="zh-cn_topic_0183088060_p128984613319"></a><strong id="zh-cn_topic_0183088060_b989164612317"><a name="zh-cn_topic_0183088060_b989164612317"></a><a name="zh-cn_topic_0183088060_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088060_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088060_p0136125811713"><a name="zh-cn_topic_0183088060_p0136125811713"></a><a name="zh-cn_topic_0183088060_p0136125811713"></a><a href="接口-2.md#zh-cn_topic_0182207110_li597891416252">ImageSpec</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088060_p1189846434"><a name="zh-cn_topic_0183088060_p1189846434"></a><a name="zh-cn_topic_0183088060_p1189846434"></a>筛选的镜像名称</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0183088060_section10495164611565"></a>

<a name="zh-cn_topic_0183088060_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088060_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088060_p197485518319"><a name="zh-cn_topic_0183088060_p197485518319"></a><a name="zh-cn_topic_0183088060_p197485518319"></a><strong id="zh-cn_topic_0183088060_b77413551933"><a name="zh-cn_topic_0183088060_b77413551933"></a><a name="zh-cn_topic_0183088060_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088060_p374185520310"><a name="zh-cn_topic_0183088060_p374185520310"></a><a name="zh-cn_topic_0183088060_p374185520310"></a><strong id="zh-cn_topic_0183088060_b174125511315"><a name="zh-cn_topic_0183088060_b174125511315"></a><a name="zh-cn_topic_0183088060_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088060_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088060_p157445512318"><a name="zh-cn_topic_0183088060_p157445512318"></a><a name="zh-cn_topic_0183088060_p157445512318"></a>repeated  <a href="接口-2.md#zh-cn_topic_0182207110_li597891416252">Image</a> images</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088060_p14745551137"><a name="zh-cn_topic_0183088060_p14745551137"></a><a name="zh-cn_topic_0183088060_p14745551137"></a>镜像信息列表</p>
</td>
</tr>
</tbody>
</table>

