# StopContainer<a name="ZH-CN_TOPIC_0184808101"></a>

## 接口原型<a name="zh-cn_topic_0183088047_section164301654155514"></a>

```
rpc StopContainer(StopContainerRequest) returns (StopContainerResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088047_section729211519569"></a>

停止一个running的容器，支持配置优雅停止时间timeout，如果容器已经停止，不能返回错误。

## 注意事项<a name="zh-cn_topic_0183088047_section973104418419"></a>

## 参数： StopContainerRequest<a name="zh-cn_topic_0183088047_section349492895613"></a>

<a name="zh-cn_topic_0183088047_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088047_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088047_p1089154617315"><a name="zh-cn_topic_0183088047_p1089154617315"></a><a name="zh-cn_topic_0183088047_p1089154617315"></a><strong id="zh-cn_topic_0183088047_b98915462314"><a name="zh-cn_topic_0183088047_b98915462314"></a><a name="zh-cn_topic_0183088047_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088047_p128984613319"><a name="zh-cn_topic_0183088047_p128984613319"></a><a name="zh-cn_topic_0183088047_p128984613319"></a><strong id="zh-cn_topic_0183088047_b989164612317"><a name="zh-cn_topic_0183088047_b989164612317"></a><a name="zh-cn_topic_0183088047_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088047_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088047_p1019112316015"><a name="zh-cn_topic_0183088047_p1019112316015"></a><a name="zh-cn_topic_0183088047_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088047_p1189846434"><a name="zh-cn_topic_0183088047_p1189846434"></a><a name="zh-cn_topic_0183088047_p1189846434"></a>容器id</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088047_row660924815015"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088047_p06097481802"><a name="zh-cn_topic_0183088047_p06097481802"></a><a name="zh-cn_topic_0183088047_p06097481802"></a>int64 timeout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088047_p360920481009"><a name="zh-cn_topic_0183088047_p360920481009"></a><a name="zh-cn_topic_0183088047_p360920481009"></a>强制停止容器前的等待时间，默认值为0，即强制停止容器。</p>
</td>
</tr>
</tbody>
</table>

## 返回值: StopContainerResponse<a name="zh-cn_topic_0183088047_section10495164611565"></a>

<a name="zh-cn_topic_0183088047_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088047_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088047_p197485518319"><a name="zh-cn_topic_0183088047_p197485518319"></a><a name="zh-cn_topic_0183088047_p197485518319"></a><strong id="zh-cn_topic_0183088047_b77413551933"><a name="zh-cn_topic_0183088047_b77413551933"></a><a name="zh-cn_topic_0183088047_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088047_p374185520310"><a name="zh-cn_topic_0183088047_p374185520310"></a><a name="zh-cn_topic_0183088047_p374185520310"></a><strong id="zh-cn_topic_0183088047_b174125511315"><a name="zh-cn_topic_0183088047_b174125511315"></a><a name="zh-cn_topic_0183088047_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088047_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088047_p8487838125"><a name="zh-cn_topic_0183088047_p8487838125"></a><a name="zh-cn_topic_0183088047_p8487838125"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088047_p184863388212"><a name="zh-cn_topic_0183088047_p184863388212"></a><a name="zh-cn_topic_0183088047_p184863388212"></a>无</p>
</td>
</tr>
</tbody>
</table>

