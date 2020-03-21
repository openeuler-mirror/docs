# UpdateRuntimeConfig<a name="ZH-CN_TOPIC_0184808112"></a>

## 接口原型<a name="zh-cn_topic_0183088058_section164301654155514"></a>

```
rpc UpdateRuntimeConfig(UpdateRuntimeConfigRequest) returns (UpdateRuntimeConfigResponse);
```

## 接口描述<a name="zh-cn_topic_0183088058_section729211519569"></a>

提供标准的CRI接口，目的为了更新网络插件的Pod CIDR，当前CNI网络插件无需更新Pod CIDR，因此该接口只会记录访问日志。

## 注意事项<a name="zh-cn_topic_0183088058_section973104418419"></a>

接口操作不会对系统管理信息修改，只是记录一条日志。

## 参数<a name="zh-cn_topic_0183088058_section349492895613"></a>

<a name="zh-cn_topic_0183088058_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088058_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088058_p1089154617315"><a name="zh-cn_topic_0183088058_p1089154617315"></a><a name="zh-cn_topic_0183088058_p1089154617315"></a><strong id="zh-cn_topic_0183088058_b98915462314"><a name="zh-cn_topic_0183088058_b98915462314"></a><a name="zh-cn_topic_0183088058_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088058_p128984613319"><a name="zh-cn_topic_0183088058_p128984613319"></a><a name="zh-cn_topic_0183088058_p128984613319"></a><strong id="zh-cn_topic_0183088058_b989164612317"><a name="zh-cn_topic_0183088058_b989164612317"></a><a name="zh-cn_topic_0183088058_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088058_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088058_p476122243220"><a name="zh-cn_topic_0183088058_p476122243220"></a><a name="zh-cn_topic_0183088058_p476122243220"></a><a href="接口-2.md#zh-cn_topic_0182207110_li544075884710">RuntimeConfig</a> runtime_config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088058_p5596114510551"><a name="zh-cn_topic_0183088058_p5596114510551"></a><a name="zh-cn_topic_0183088058_p5596114510551"></a>包含Runtime要配置的信息</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0183088058_section10495164611565"></a>

无

