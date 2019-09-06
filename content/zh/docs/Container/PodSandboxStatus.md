# PodSandboxStatus<a name="ZH-CN_TOPIC_0184808097"></a>

## 接口原型<a name="zh-cn_topic_0183088043_section164301654155514"></a>

```
rpc PodSandboxStatus(PodSandboxStatusRequest) returns (PodSandboxStatusResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088043_section729211519569"></a>

查询sandbox的状态，如果sandbox不存在，返回错误。

## 注意事项<a name="zh-cn_topic_0183088043_section973104418419"></a>

## 参数: PodSandboxStatusRequest<a name="zh-cn_topic_0183088043_section349492895613"></a>

<a name="zh-cn_topic_0183088043_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088043_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p1089154617315"><a name="zh-cn_topic_0183088043_p1089154617315"></a><a name="zh-cn_topic_0183088043_p1089154617315"></a><strong id="zh-cn_topic_0183088043_b98915462314"><a name="zh-cn_topic_0183088043_b98915462314"></a><a name="zh-cn_topic_0183088043_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p128984613319"><a name="zh-cn_topic_0183088043_p128984613319"></a><a name="zh-cn_topic_0183088043_p128984613319"></a><strong id="zh-cn_topic_0183088043_b989164612317"><a name="zh-cn_topic_0183088043_b989164612317"></a><a name="zh-cn_topic_0183088043_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088043_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p1893714794317"><a name="zh-cn_topic_0183088043_p1893714794317"></a><a name="zh-cn_topic_0183088043_p1893714794317"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p1189846434"><a name="zh-cn_topic_0183088043_p1189846434"></a><a name="zh-cn_topic_0183088043_p1189846434"></a>sandbox的id</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088043_row1856117814815"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p956148114812"><a name="zh-cn_topic_0183088043_p956148114812"></a><a name="zh-cn_topic_0183088043_p956148114812"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p155615864815"><a name="zh-cn_topic_0183088043_p155615864815"></a><a name="zh-cn_topic_0183088043_p155615864815"></a>标识是否显示sandbox的一些额外信息。（暂不支持配置）</p>
</td>
</tr>
</tbody>
</table>

## 返回值: PodSandboxStatusResponse<a name="zh-cn_topic_0183088043_section10495164611565"></a>

<a name="zh-cn_topic_0183088043_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088043_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p197485518319"><a name="zh-cn_topic_0183088043_p197485518319"></a><a name="zh-cn_topic_0183088043_p197485518319"></a><strong id="zh-cn_topic_0183088043_b77413551933"><a name="zh-cn_topic_0183088043_b77413551933"></a><a name="zh-cn_topic_0183088043_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p374185520310"><a name="zh-cn_topic_0183088043_p374185520310"></a><a name="zh-cn_topic_0183088043_p374185520310"></a><strong id="zh-cn_topic_0183088043_b174125511315"><a name="zh-cn_topic_0183088043_b174125511315"></a><a name="zh-cn_topic_0183088043_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088043_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p157445512318"><a name="zh-cn_topic_0183088043_p157445512318"></a><a name="zh-cn_topic_0183088043_p157445512318"></a><a href="接口-2.md#zh-cn_topic_0182207110_li146986172010">PodSandboxStatus</a> status</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p14745551137"><a name="zh-cn_topic_0183088043_p14745551137"></a><a name="zh-cn_topic_0183088043_p14745551137"></a>sandbox的状态信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088043_row27545518311"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p953212217505"><a name="zh-cn_topic_0183088043_p953212217505"></a><a name="zh-cn_topic_0183088043_p953212217505"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p47512557310"><a name="zh-cn_topic_0183088043_p47512557310"></a><a name="zh-cn_topic_0183088043_p47512557310"></a>sandbox的额外信息，key是任意string，value是json格式的字符串，这些信息可以是任意调试内容。当verbose为true时info不能为空。（暂不支持配置）</p>
</td>
</tr>
</tbody>
</table>

