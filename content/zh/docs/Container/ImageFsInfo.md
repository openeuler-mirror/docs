# ImageFsInfo<a name="ZH-CN_TOPIC_0184808119"></a>

## 接口原型<a name="zh-cn_topic_0183088064_section164301654155514"></a>

```
rpc ImageFsInfo(ImageFsInfoRequest) returns (ImageFsInfoResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088064_section729211519569"></a>

查询存储镜像的文件系统信息。

## 注意事项<a name="zh-cn_topic_0183088064_section973104418419"></a>

查询到的为镜像元数据下的文件系统信息。

## 参数<a name="zh-cn_topic_0183088064_section349492895613"></a>

<a name="zh-cn_topic_0183088064_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088064_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088064_p1089154617315"><a name="zh-cn_topic_0183088064_p1089154617315"></a><a name="zh-cn_topic_0183088064_p1089154617315"></a><strong id="zh-cn_topic_0183088064_b98915462314"><a name="zh-cn_topic_0183088064_b98915462314"></a><a name="zh-cn_topic_0183088064_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088064_p128984613319"><a name="zh-cn_topic_0183088064_p128984613319"></a><a name="zh-cn_topic_0183088064_p128984613319"></a><strong id="zh-cn_topic_0183088064_b989164612317"><a name="zh-cn_topic_0183088064_b989164612317"></a><a name="zh-cn_topic_0183088064_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088064_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088064_p0136125811713"><a name="zh-cn_topic_0183088064_p0136125811713"></a><a name="zh-cn_topic_0183088064_p0136125811713"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088064_p1189846434"><a name="zh-cn_topic_0183088064_p1189846434"></a><a name="zh-cn_topic_0183088064_p1189846434"></a>无</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0183088064_section10495164611565"></a>

<a name="zh-cn_topic_0183088064_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088064_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088064_p197485518319"><a name="zh-cn_topic_0183088064_p197485518319"></a><a name="zh-cn_topic_0183088064_p197485518319"></a><strong id="zh-cn_topic_0183088064_b77413551933"><a name="zh-cn_topic_0183088064_b77413551933"></a><a name="zh-cn_topic_0183088064_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088064_p374185520310"><a name="zh-cn_topic_0183088064_p374185520310"></a><a name="zh-cn_topic_0183088064_p374185520310"></a><strong id="zh-cn_topic_0183088064_b174125511315"><a name="zh-cn_topic_0183088064_b174125511315"></a><a name="zh-cn_topic_0183088064_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088064_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088064_p157445512318"><a name="zh-cn_topic_0183088064_p157445512318"></a><a name="zh-cn_topic_0183088064_p157445512318"></a>repeated <a href="接口-2.md#zh-cn_topic_0182207110_li1606183118189">FilesystemUsage</a> image_filesystems</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088064_p14745551137"><a name="zh-cn_topic_0183088064_p14745551137"></a><a name="zh-cn_topic_0183088064_p14745551137"></a>镜像存储文件系统信息</p>
</td>
</tr>
</tbody>
</table>

