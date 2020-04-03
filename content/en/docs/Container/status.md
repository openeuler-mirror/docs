# Status<a name="EN-US_TOPIC_0184808113"></a>

## Prototype<a name="en-us_topic_0183088059_section164301654155514"></a>

```
rpc Status(StatusRequest) returns (StatusResponse) {};
```

## Description<a name="en-us_topic_0183088059_section729211519569"></a>

This API is used to obtain the network status of the runtime and pod. Obtaining the network status will trigger the update of network configuration. Only containers whose runtime is of the LCR type are supported.

## Precautions<a name="en-us_topic_0183088059_section973104418419"></a>

If the network configuration fails to be updated, the original configuration is not affected. The original configuration is overwritten only when the update is successful.

## Parameters<a name="en-us_topic_0183088059_section349492895613"></a>

<a name="en-us_topic_0183088059_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088059_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088059_p1089154617315"><a name="en-us_topic_0183088059_p1089154617315"></a><a name="en-us_topic_0183088059_p1089154617315"></a><strong id="en-us_topic_0183088059_b64421540153617"><a name="en-us_topic_0183088059_b64421540153617"></a><a name="en-us_topic_0183088059_b64421540153617"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088059_p128984613319"><a name="en-us_topic_0183088059_p128984613319"></a><a name="en-us_topic_0183088059_p128984613319"></a><strong id="en-us_topic_0183088059_b1213713434361"><a name="en-us_topic_0183088059_b1213713434361"></a><a name="en-us_topic_0183088059_b1213713434361"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088059_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088059_p133821342185014"><a name="en-us_topic_0183088059_p133821342185014"></a><a name="en-us_topic_0183088059_p133821342185014"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088059_p5596114510551"><a name="en-us_topic_0183088059_p5596114510551"></a><a name="en-us_topic_0183088059_p5596114510551"></a>Whether to display additional runtime information. This parameter does not take effect now.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088059_section10495164611565"></a>

<a name="en-us_topic_0183088059_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088059_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088059_p197485518319"><a name="en-us_topic_0183088059_p197485518319"></a><a name="en-us_topic_0183088059_p197485518319"></a><strong id="en-us_topic_0183088059_b1281246103614"><a name="en-us_topic_0183088059_b1281246103614"></a><a name="en-us_topic_0183088059_b1281246103614"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088059_p374185520310"><a name="en-us_topic_0183088059_p374185520310"></a><a name="en-us_topic_0183088059_p374185520310"></a><strong id="en-us_topic_0183088059_b2867948103620"><a name="en-us_topic_0183088059_b2867948103620"></a><a name="en-us_topic_0183088059_b2867948103620"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088059_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088059_p13351101810514"><a name="en-us_topic_0183088059_p13351101810514"></a><a name="en-us_topic_0183088059_p13351101810514"></a><a href="apis.md#en-us_topic_0182207110_li15257663554">RuntimeStatus</a> status</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088059_p18351018105117"><a name="en-us_topic_0183088059_p18351018105117"></a><a name="en-us_topic_0183088059_p18351018105117"></a>Runtime status.</p>
</td>
</tr>
<tr id="en-us_topic_0183088059_row1187724514524"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088059_p1887784525214"><a name="en-us_topic_0183088059_p1887784525214"></a><a name="en-us_topic_0183088059_p1887784525214"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088059_p20877184519522"><a name="en-us_topic_0183088059_p20877184519522"></a><a name="en-us_topic_0183088059_p20877184519522"></a>Additional information about the runtime. The key of <strong id="en-us_topic_0183088059_b0839105613415"><a name="en-us_topic_0183088059_b0839105613415"></a><a name="en-us_topic_0183088059_b0839105613415"></a>info</strong> can be any value. The value must be in JSON format and can contain any debugging information. When <strong id="en-us_topic_0183088059_b4510153754414"><a name="en-us_topic_0183088059_b4510153754414"></a><a name="en-us_topic_0183088059_b4510153754414"></a>verbose</strong> is set to <strong id="en-us_topic_0183088059_b105106376442"><a name="en-us_topic_0183088059_b105106376442"></a><a name="en-us_topic_0183088059_b105106376442"></a>true</strong>, <strong id="en-us_topic_0183088059_b10510143794412"><a name="en-us_topic_0183088059_b10510143794412"></a><a name="en-us_topic_0183088059_b10510143794412"></a>info</strong> cannot be empty.</p>
</td>
</tr>
</tbody>
</table>

