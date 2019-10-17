# Attach<a name="ZH-CN_TOPIC_0184808108"></a>

## 接口原型<a name="zh-cn_topic_0183088054_section164301654155514"></a>

```
rpc Attach(AttachRequest) returns (AttachResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088054_section729211519569"></a>

接管容器的1号进程，采用的gRPC通讯方式从CRI服务端获取url，再通过获得的url与websocket服务端建立长连接，实现与容器的交互。

## 参数: AttachRequest<a name="zh-cn_topic_0183088054_section349492895613"></a>

<a name="zh-cn_topic_0183088054_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088054_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088054_p1089154617315"><a name="zh-cn_topic_0183088054_p1089154617315"></a><a name="zh-cn_topic_0183088054_p1089154617315"></a><strong id="zh-cn_topic_0183088054_b98915462314"><a name="zh-cn_topic_0183088054_b98915462314"></a><a name="zh-cn_topic_0183088054_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088054_p128984613319"><a name="zh-cn_topic_0183088054_p128984613319"></a><a name="zh-cn_topic_0183088054_p128984613319"></a><strong id="zh-cn_topic_0183088054_b989164612317"><a name="zh-cn_topic_0183088054_b989164612317"></a><a name="zh-cn_topic_0183088054_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088054_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088054_p1253351115517"><a name="zh-cn_topic_0183088054_p1253351115517"></a><a name="zh-cn_topic_0183088054_p1253351115517"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088054_p1189846434"><a name="zh-cn_topic_0183088054_p1189846434"></a><a name="zh-cn_topic_0183088054_p1189846434"></a>容器ID</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088054_row4812119101610"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088054_p3218304144"><a name="zh-cn_topic_0183088054_p3218304144"></a><a name="zh-cn_topic_0183088054_p3218304144"></a>bool tty</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088054_p1947314925616"><a name="zh-cn_topic_0183088054_p1947314925616"></a><a name="zh-cn_topic_0183088054_p1947314925616"></a>是否在TTY中执行命令</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088054_row1569883411415"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088054_p06982346147"><a name="zh-cn_topic_0183088054_p06982346147"></a><a name="zh-cn_topic_0183088054_p06982346147"></a>bool stdin</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088054_p469919340142"><a name="zh-cn_topic_0183088054_p469919340142"></a><a name="zh-cn_topic_0183088054_p469919340142"></a>是否流式标准输入</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088054_row12135742161414"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088054_p5135242161417"><a name="zh-cn_topic_0183088054_p5135242161417"></a><a name="zh-cn_topic_0183088054_p5135242161417"></a>bool stdout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088054_p1613584220142"><a name="zh-cn_topic_0183088054_p1613584220142"></a><a name="zh-cn_topic_0183088054_p1613584220142"></a>是否流式标准输出</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088054_row101281154171413"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088054_p151281754181412"><a name="zh-cn_topic_0183088054_p151281754181412"></a><a name="zh-cn_topic_0183088054_p151281754181412"></a>bool stderr</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088054_p51282542141"><a name="zh-cn_topic_0183088054_p51282542141"></a><a name="zh-cn_topic_0183088054_p51282542141"></a>是否流式输出标准错误</p>
</td>
</tr>
</tbody>
</table>

## 返回值: ExecResponse<a name="zh-cn_topic_0183088054_section10495164611565"></a>

<a name="zh-cn_topic_0183088054_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088054_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088054_p197485518319"><a name="zh-cn_topic_0183088054_p197485518319"></a><a name="zh-cn_topic_0183088054_p197485518319"></a><strong id="zh-cn_topic_0183088054_b77413551933"><a name="zh-cn_topic_0183088054_b77413551933"></a><a name="zh-cn_topic_0183088054_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088054_p374185520310"><a name="zh-cn_topic_0183088054_p374185520310"></a><a name="zh-cn_topic_0183088054_p374185520310"></a><strong id="zh-cn_topic_0183088054_b174125511315"><a name="zh-cn_topic_0183088054_b174125511315"></a><a name="zh-cn_topic_0183088054_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088054_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088054_p15574205011242"><a name="zh-cn_topic_0183088054_p15574205011242"></a><a name="zh-cn_topic_0183088054_p15574205011242"></a>string url</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088054_p103555206255"><a name="zh-cn_topic_0183088054_p103555206255"></a><a name="zh-cn_topic_0183088054_p103555206255"></a>attach流服务器的完全限定URL</p>
</td>
</tr>
</tbody>
</table>

