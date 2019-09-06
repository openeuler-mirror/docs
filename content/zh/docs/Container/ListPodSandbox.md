# ListPodSandbox<a name="ZH-CN_TOPIC_0184808098"></a>

## 接口原型<a name="zh-cn_topic_0183088044_section164301654155514"></a>

```
rpc ListPodSandbox(ListPodSandboxRequest) returns (ListPodSandboxResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088044_section729211519569"></a>

返回sandbox信息的列表，支持条件过滤。

## 注意事项<a name="zh-cn_topic_0183088044_section973104418419"></a>

## 参数: ListPodSandboxRequest<a name="zh-cn_topic_0183088044_section349492895613"></a>

<a name="zh-cn_topic_0183088044_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088044_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088044_p1089154617315"><a name="zh-cn_topic_0183088044_p1089154617315"></a><a name="zh-cn_topic_0183088044_p1089154617315"></a><strong id="zh-cn_topic_0183088044_b98915462314"><a name="zh-cn_topic_0183088044_b98915462314"></a><a name="zh-cn_topic_0183088044_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088044_p128984613319"><a name="zh-cn_topic_0183088044_p128984613319"></a><a name="zh-cn_topic_0183088044_p128984613319"></a><strong id="zh-cn_topic_0183088044_b989164612317"><a name="zh-cn_topic_0183088044_b989164612317"></a><a name="zh-cn_topic_0183088044_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088044_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088044_p47762110579"><a name="zh-cn_topic_0183088044_p47762110579"></a><a name="zh-cn_topic_0183088044_p47762110579"></a><a href="接口-2.md#zh-cn_topic_0182207110_li17913177201">PodSandboxFilter</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088044_p1189846434"><a name="zh-cn_topic_0183088044_p1189846434"></a><a name="zh-cn_topic_0183088044_p1189846434"></a>条件过滤参数，具体内容参考左侧链接</p>
</td>
</tr>
</tbody>
</table>

## 返回值: ListPodSandboxResponse<a name="zh-cn_topic_0183088044_section10495164611565"></a>

<a name="zh-cn_topic_0183088044_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088044_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088044_p197485518319"><a name="zh-cn_topic_0183088044_p197485518319"></a><a name="zh-cn_topic_0183088044_p197485518319"></a><strong id="zh-cn_topic_0183088044_b77413551933"><a name="zh-cn_topic_0183088044_b77413551933"></a><a name="zh-cn_topic_0183088044_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088044_p374185520310"><a name="zh-cn_topic_0183088044_p374185520310"></a><a name="zh-cn_topic_0183088044_p374185520310"></a><strong id="zh-cn_topic_0183088044_b174125511315"><a name="zh-cn_topic_0183088044_b174125511315"></a><a name="zh-cn_topic_0183088044_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088044_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088044_p1118315385563"><a name="zh-cn_topic_0183088044_p1118315385563"></a><a name="zh-cn_topic_0183088044_p1118315385563"></a>repeated <a href="接口-2.md#zh-cn_topic_0182207110_li10542191117207">PodSandbox</a> items</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088044_p518373814560"><a name="zh-cn_topic_0183088044_p518373814560"></a><a name="zh-cn_topic_0183088044_p518373814560"></a>sandbox信息的列表</p>
</td>
</tr>
</tbody>
</table>

