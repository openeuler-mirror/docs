# RemoveContainer<a name="ZH-CN_TOPIC_0184808102"></a>

## 接口原型<a name="zh-cn_topic_0183088048_section164301654155514"></a>

```
rpc RemoveContainer(RemoveContainerRequest) returns (RemoveContainerResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088048_section729211519569"></a>

删除一个容器，如果容器正在运行，必须强制停止，如果容器已经被删除，不能返回错误。

## 注意事项<a name="zh-cn_topic_0183088048_section973104418419"></a>

## 参数: RemoveContainerRequest<a name="zh-cn_topic_0183088048_section349492895613"></a>

<a name="zh-cn_topic_0183088048_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088048_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088048_p1089154617315"><a name="zh-cn_topic_0183088048_p1089154617315"></a><a name="zh-cn_topic_0183088048_p1089154617315"></a><strong id="zh-cn_topic_0183088048_b98915462314"><a name="zh-cn_topic_0183088048_b98915462314"></a><a name="zh-cn_topic_0183088048_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088048_p128984613319"><a name="zh-cn_topic_0183088048_p128984613319"></a><a name="zh-cn_topic_0183088048_p128984613319"></a><strong id="zh-cn_topic_0183088048_b989164612317"><a name="zh-cn_topic_0183088048_b989164612317"></a><a name="zh-cn_topic_0183088048_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088048_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088048_p1019112316015"><a name="zh-cn_topic_0183088048_p1019112316015"></a><a name="zh-cn_topic_0183088048_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088048_p1189846434"><a name="zh-cn_topic_0183088048_p1189846434"></a><a name="zh-cn_topic_0183088048_p1189846434"></a>容器id</p>
</td>
</tr>
</tbody>
</table>

## 返回值: RemoveContainerResponse<a name="zh-cn_topic_0183088048_section10495164611565"></a>

<a name="zh-cn_topic_0183088048_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088048_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088048_p197485518319"><a name="zh-cn_topic_0183088048_p197485518319"></a><a name="zh-cn_topic_0183088048_p197485518319"></a><strong id="zh-cn_topic_0183088048_b77413551933"><a name="zh-cn_topic_0183088048_b77413551933"></a><a name="zh-cn_topic_0183088048_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088048_p374185520310"><a name="zh-cn_topic_0183088048_p374185520310"></a><a name="zh-cn_topic_0183088048_p374185520310"></a><strong id="zh-cn_topic_0183088048_b174125511315"><a name="zh-cn_topic_0183088048_b174125511315"></a><a name="zh-cn_topic_0183088048_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088048_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088048_p8487838125"><a name="zh-cn_topic_0183088048_p8487838125"></a><a name="zh-cn_topic_0183088048_p8487838125"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088048_p184863388212"><a name="zh-cn_topic_0183088048_p184863388212"></a><a name="zh-cn_topic_0183088048_p184863388212"></a>无</p>
</td>
</tr>
</tbody>
</table>

