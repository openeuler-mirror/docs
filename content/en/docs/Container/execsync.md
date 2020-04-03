# ExecSync<a name="EN-US_TOPIC_0184808106"></a>

## Prototype<a name="en-us_topic_0183088052_section164301654155514"></a>

```
rpc ExecSync(ExecSyncRequest) returns (ExecSyncResponse) {}
```

## Description<a name="en-us_topic_0183088052_section729211519569"></a>

The API is used to run a command in containers in synchronization mode through the gRPC communication method.

## Precautions<a name="en-us_topic_0183088052_section973104418419"></a>

The interaction between the terminal and the containers must be disabled when a single command is executed.

## Parameters<a name="en-us_topic_0183088052_section349492895613"></a>

<a name="en-us_topic_0183088052_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088052_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088052_p1089154617315"><a name="en-us_topic_0183088052_p1089154617315"></a><a name="en-us_topic_0183088052_p1089154617315"></a><strong id="en-us_topic_0183088052_b98988346300"><a name="en-us_topic_0183088052_b98988346300"></a><a name="en-us_topic_0183088052_b98988346300"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088052_p128984613319"><a name="en-us_topic_0183088052_p128984613319"></a><a name="en-us_topic_0183088052_p128984613319"></a><strong id="en-us_topic_0183088052_b49551236133014"><a name="en-us_topic_0183088052_b49551236133014"></a><a name="en-us_topic_0183088052_b49551236133014"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088052_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088052_p293511573266"><a name="en-us_topic_0183088052_p293511573266"></a><a name="en-us_topic_0183088052_p293511573266"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088052_p1189846434"><a name="en-us_topic_0183088052_p1189846434"></a><a name="en-us_topic_0183088052_p1189846434"></a>Container ID.</p>
</td>
</tr>
<tr id="en-us_topic_0183088052_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088052_p1489111122411"><a name="en-us_topic_0183088052_p1489111122411"></a><a name="en-us_topic_0183088052_p1489111122411"></a>repeated string cmd</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088052_p780820166266"><a name="en-us_topic_0183088052_p780820166266"></a><a name="en-us_topic_0183088052_p780820166266"></a>Command to be executed.</p>
</td>
</tr>
<tr id="en-us_topic_0183088052_row4812119101610"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088052_p24734935614"><a name="en-us_topic_0183088052_p24734935614"></a><a name="en-us_topic_0183088052_p24734935614"></a>int64 timeout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088052_p6510957162719"><a name="en-us_topic_0183088052_p6510957162719"></a><a name="en-us_topic_0183088052_p6510957162719"></a>Timeout period for stopping the command (unit: second). The default value is <strong id="en-us_topic_0183088052_b16786155213142"><a name="en-us_topic_0183088052_b16786155213142"></a><a name="en-us_topic_0183088052_b16786155213142"></a>0</strong>, indicating that there is no timeout limit. This parameter does not take effect now.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088052_section344116515246"></a>

<a name="en-us_topic_0183088052_table1244111592419"></a>
<table><tbody><tr id="en-us_topic_0183088052_row844114513243"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088052_p244117515249"><a name="en-us_topic_0183088052_p244117515249"></a><a name="en-us_topic_0183088052_p244117515249"></a><strong id="en-us_topic_0183088052_b767413425301"><a name="en-us_topic_0183088052_b767413425301"></a><a name="en-us_topic_0183088052_b767413425301"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088052_p10441155152411"><a name="en-us_topic_0183088052_p10441155152411"></a><a name="en-us_topic_0183088052_p10441155152411"></a><strong id="en-us_topic_0183088052_b12586144515306"><a name="en-us_topic_0183088052_b12586144515306"></a><a name="en-us_topic_0183088052_b12586144515306"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088052_row17442659244"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088052_p44421057247"><a name="en-us_topic_0183088052_p44421057247"></a><a name="en-us_topic_0183088052_p44421057247"></a>bytes stdout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088052_p14442857248"><a name="en-us_topic_0183088052_p14442857248"></a><a name="en-us_topic_0183088052_p14442857248"></a>Standard output of the capture command.</p>
</td>
</tr>
<tr id="en-us_topic_0183088052_row444214512412"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088052_p19834172715201"><a name="en-us_topic_0183088052_p19834172715201"></a><a name="en-us_topic_0183088052_p19834172715201"></a>bytes stderr</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088052_p18188336182011"><a name="en-us_topic_0183088052_p18188336182011"></a><a name="en-us_topic_0183088052_p18188336182011"></a>Standard error output of the capture command.</p>
</td>
</tr>
<tr id="en-us_topic_0183088052_row16951195032014"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088052_p1195135062019"><a name="en-us_topic_0183088052_p1195135062019"></a><a name="en-us_topic_0183088052_p1195135062019"></a>int32 exit_code</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088052_p987318251219"><a name="en-us_topic_0183088052_p987318251219"></a><a name="en-us_topic_0183088052_p987318251219"></a>Exit code, which represents the completion of command execution. The default value is <strong id="en-us_topic_0183088052_b061148112619"><a name="en-us_topic_0183088052_b061148112619"></a><a name="en-us_topic_0183088052_b061148112619"></a>0</strong>, indicating that the command is executed successfully.</p>
</td>
</tr>
</tbody>
</table>

