# Status<a name="ZH-CN_TOPIC_0184808113"></a>

## 接口原型<a name="zh-cn_topic_0183088059_section164301654155514"></a>

```
rpc Status(StatusRequest) returns (StatusResponse) {};
```

## 接口描述<a name="zh-cn_topic_0183088059_section729211519569"></a>

获取runtime和pod的网络状态，在获取网络状态时，会触发网络配置的刷新。

## 注意事项<a name="zh-cn_topic_0183088059_section973104418419"></a>

如果网络配置刷新失败，不会影响原有配置；只有刷新成功时，才会覆盖原有配置。

## 参数： StatusRequest<a name="zh-cn_topic_0183088059_section349492895613"></a>

<a name="zh-cn_topic_0183088059_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088059_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088059_p1089154617315"><a name="zh-cn_topic_0183088059_p1089154617315"></a><a name="zh-cn_topic_0183088059_p1089154617315"></a><strong id="zh-cn_topic_0183088059_b98915462314"><a name="zh-cn_topic_0183088059_b98915462314"></a><a name="zh-cn_topic_0183088059_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088059_p128984613319"><a name="zh-cn_topic_0183088059_p128984613319"></a><a name="zh-cn_topic_0183088059_p128984613319"></a><strong id="zh-cn_topic_0183088059_b989164612317"><a name="zh-cn_topic_0183088059_b989164612317"></a><a name="zh-cn_topic_0183088059_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088059_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088059_p133821342185014"><a name="zh-cn_topic_0183088059_p133821342185014"></a><a name="zh-cn_topic_0183088059_p133821342185014"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088059_p5596114510551"><a name="zh-cn_topic_0183088059_p5596114510551"></a><a name="zh-cn_topic_0183088059_p5596114510551"></a>是否显示关于Runtime额外的信息（暂不支持）</p>
</td>
</tr>
</tbody>
</table>

## 返回值： StatusResponse<a name="zh-cn_topic_0183088059_section10495164611565"></a>

<a name="zh-cn_topic_0183088059_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088059_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088059_p197485518319"><a name="zh-cn_topic_0183088059_p197485518319"></a><a name="zh-cn_topic_0183088059_p197485518319"></a><strong id="zh-cn_topic_0183088059_b77413551933"><a name="zh-cn_topic_0183088059_b77413551933"></a><a name="zh-cn_topic_0183088059_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088059_p374185520310"><a name="zh-cn_topic_0183088059_p374185520310"></a><a name="zh-cn_topic_0183088059_p374185520310"></a><strong id="zh-cn_topic_0183088059_b174125511315"><a name="zh-cn_topic_0183088059_b174125511315"></a><a name="zh-cn_topic_0183088059_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088059_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088059_p13351101810514"><a name="zh-cn_topic_0183088059_p13351101810514"></a><a name="zh-cn_topic_0183088059_p13351101810514"></a><a href="接口-2.md#zh-cn_topic_0182207110_li15257663554">RuntimeStatus</a> status</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088059_p18351018105117"><a name="zh-cn_topic_0183088059_p18351018105117"></a><a name="zh-cn_topic_0183088059_p18351018105117"></a>Runtime的状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088059_row1187724514524"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088059_p1887784525214"><a name="zh-cn_topic_0183088059_p1887784525214"></a><a name="zh-cn_topic_0183088059_p1887784525214"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088059_p20877184519522"><a name="zh-cn_topic_0183088059_p20877184519522"></a><a name="zh-cn_topic_0183088059_p20877184519522"></a>Runtime额外的信息，info的key为任意值，value为json格式，可包含任何debug信息；只有Verbose为true是才应该被赋值</p>
</td>
</tr>
</tbody>
</table>

