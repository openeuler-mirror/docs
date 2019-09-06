# RemovePodSandbox<a name="ZH-CN_TOPIC_0184808096"></a>

## 接口原型<a name="zh-cn_topic_0183088042_section164301654155514"></a>

```
rpc RemovePodSandbox(RemovePodSandboxRequest) returns (RemovePodSandboxResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088042_section729211519569"></a>

删除sandbox，如果有任何running的容器属于该sandbox，则必须被强制停止和删除，如果sandbox已经被删除，不能返回错误。

## 注意事项<a name="zh-cn_topic_0183088042_section973104418419"></a>

1. 删除sandbox时，不会删除sandbox的网络资源，在删除pod前必须先调用StopPodSandbox才能清理网络资源，调用者应当保证在删除sandbox之前至少调用一次StopPodSandbox。

## 参数: RemovePodSandboxRequest<a name="zh-cn_topic_0183088042_section349492895613"></a>

<a name="zh-cn_topic_0183088042_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088042_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088042_p1089154617315"><a name="zh-cn_topic_0183088042_p1089154617315"></a><a name="zh-cn_topic_0183088042_p1089154617315"></a><strong id="zh-cn_topic_0183088042_b98915462314"><a name="zh-cn_topic_0183088042_b98915462314"></a><a name="zh-cn_topic_0183088042_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088042_p128984613319"><a name="zh-cn_topic_0183088042_p128984613319"></a><a name="zh-cn_topic_0183088042_p128984613319"></a><strong id="zh-cn_topic_0183088042_b989164612317"><a name="zh-cn_topic_0183088042_b989164612317"></a><a name="zh-cn_topic_0183088042_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088042_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088042_p1893714794317"><a name="zh-cn_topic_0183088042_p1893714794317"></a><a name="zh-cn_topic_0183088042_p1893714794317"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088042_p1189846434"><a name="zh-cn_topic_0183088042_p1189846434"></a><a name="zh-cn_topic_0183088042_p1189846434"></a>sandbox的id</p>
</td>
</tr>
</tbody>
</table>

## 返回值: RemovePodSandboxResponse<a name="zh-cn_topic_0183088042_section10495164611565"></a>

<a name="zh-cn_topic_0183088042_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088042_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088042_p197485518319"><a name="zh-cn_topic_0183088042_p197485518319"></a><a name="zh-cn_topic_0183088042_p197485518319"></a><strong id="zh-cn_topic_0183088042_b77413551933"><a name="zh-cn_topic_0183088042_b77413551933"></a><a name="zh-cn_topic_0183088042_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088042_p374185520310"><a name="zh-cn_topic_0183088042_p374185520310"></a><a name="zh-cn_topic_0183088042_p374185520310"></a><strong id="zh-cn_topic_0183088042_b174125511315"><a name="zh-cn_topic_0183088042_b174125511315"></a><a name="zh-cn_topic_0183088042_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088042_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088042_p1772427114513"><a name="zh-cn_topic_0183088042_p1772427114513"></a><a name="zh-cn_topic_0183088042_p1772427114513"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088042_p14745551137"><a name="zh-cn_topic_0183088042_p14745551137"></a><a name="zh-cn_topic_0183088042_p14745551137"></a>无</p>
</td>
</tr>
</tbody>
</table>

