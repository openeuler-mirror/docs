# ExecSync<a name="ZH-CN_TOPIC_0184808106"></a>

## 接口原型<a name="zh-cn_topic_0183088052_section164301654155514"></a>

```
rpc ExecSync(ExecSyncRequest) returns (ExecSyncResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088052_section729211519569"></a>

以同步的方式在容器中执行命令，采用的gRPC通讯方式。

## 注意事项<a name="zh-cn_topic_0183088052_section973104418419"></a>

执行执行一条单独的命令，不能打开终端与容器交互。

## 参数：ExecSyncRequest<a name="zh-cn_topic_0183088052_section349492895613"></a>

<a name="zh-cn_topic_0183088052_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088052_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p1089154617315"><a name="zh-cn_topic_0183088052_p1089154617315"></a><a name="zh-cn_topic_0183088052_p1089154617315"></a><strong id="zh-cn_topic_0183088052_b98915462314"><a name="zh-cn_topic_0183088052_b98915462314"></a><a name="zh-cn_topic_0183088052_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p128984613319"><a name="zh-cn_topic_0183088052_p128984613319"></a><a name="zh-cn_topic_0183088052_p128984613319"></a><strong id="zh-cn_topic_0183088052_b989164612317"><a name="zh-cn_topic_0183088052_b989164612317"></a><a name="zh-cn_topic_0183088052_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p293511573266"><a name="zh-cn_topic_0183088052_p293511573266"></a><a name="zh-cn_topic_0183088052_p293511573266"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p1189846434"><a name="zh-cn_topic_0183088052_p1189846434"></a><a name="zh-cn_topic_0183088052_p1189846434"></a>容器ID</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p1489111122411"><a name="zh-cn_topic_0183088052_p1489111122411"></a><a name="zh-cn_topic_0183088052_p1489111122411"></a>repeated string cmd</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p780820166266"><a name="zh-cn_topic_0183088052_p780820166266"></a><a name="zh-cn_topic_0183088052_p780820166266"></a>待执行命令</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row4812119101610"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p24734935614"><a name="zh-cn_topic_0183088052_p24734935614"></a><a name="zh-cn_topic_0183088052_p24734935614"></a>int64 timeout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p6510957162719"><a name="zh-cn_topic_0183088052_p6510957162719"></a><a name="zh-cn_topic_0183088052_p6510957162719"></a>停止命令的超时时间（秒）。 默认值：0（无超时限制）。 <strong id="zh-cn_topic_0183088052_b921123104014"><a name="zh-cn_topic_0183088052_b921123104014"></a><a name="zh-cn_topic_0183088052_b921123104014"></a>暂不支持</strong></p>
</td>
</tr>
</tbody>
</table>

## 返回值: ExecSyncResponse<a name="zh-cn_topic_0183088052_section344116515246"></a>

<a name="zh-cn_topic_0183088052_table1244111592419"></a>
<table><tbody><tr id="zh-cn_topic_0183088052_row844114513243"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p244117515249"><a name="zh-cn_topic_0183088052_p244117515249"></a><a name="zh-cn_topic_0183088052_p244117515249"></a><strong id="zh-cn_topic_0183088052_b1044111592411"><a name="zh-cn_topic_0183088052_b1044111592411"></a><a name="zh-cn_topic_0183088052_b1044111592411"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p10441155152411"><a name="zh-cn_topic_0183088052_p10441155152411"></a><a name="zh-cn_topic_0183088052_p10441155152411"></a><strong id="zh-cn_topic_0183088052_b1944120532419"><a name="zh-cn_topic_0183088052_b1944120532419"></a><a name="zh-cn_topic_0183088052_b1944120532419"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row17442659244"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p44421057247"><a name="zh-cn_topic_0183088052_p44421057247"></a><a name="zh-cn_topic_0183088052_p44421057247"></a>bytes stdout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p14442857248"><a name="zh-cn_topic_0183088052_p14442857248"></a><a name="zh-cn_topic_0183088052_p14442857248"></a>捕获命令标准输出</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row444214512412"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p19834172715201"><a name="zh-cn_topic_0183088052_p19834172715201"></a><a name="zh-cn_topic_0183088052_p19834172715201"></a>bytes stderr</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p18188336182011"><a name="zh-cn_topic_0183088052_p18188336182011"></a><a name="zh-cn_topic_0183088052_p18188336182011"></a>捕获命令标准错误输出</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row16951195032014"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p1195135062019"><a name="zh-cn_topic_0183088052_p1195135062019"></a><a name="zh-cn_topic_0183088052_p1195135062019"></a>int32 exit_code</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p987318251219"><a name="zh-cn_topic_0183088052_p987318251219"></a><a name="zh-cn_topic_0183088052_p987318251219"></a>退出代码命令完成。 默认值：0（成功）。</p>
</td>
</tr>
</tbody>
</table>

