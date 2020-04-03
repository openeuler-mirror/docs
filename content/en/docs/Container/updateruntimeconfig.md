# UpdateRuntimeConfig<a name="EN-US_TOPIC_0184808112"></a>

## Prototype<a name="en-us_topic_0183088058_section164301654155514"></a>

```
rpc UpdateRuntimeConfig(UpdateRuntimeConfigRequest) returns (UpdateRuntimeConfigResponse);
```

## Description<a name="en-us_topic_0183088058_section729211519569"></a>

This API is used as a standard CRI to update the pod CIDR of the network plug-in. Currently, the CNI network plug-in does not need to update the pod CIDR. Therefore, this API records only access logs.

## Precautions<a name="en-us_topic_0183088058_section973104418419"></a>

API operations will not modify the system management information, but only record a log.

## Parameters<a name="en-us_topic_0183088058_section349492895613"></a>

<a name="en-us_topic_0183088058_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088058_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088058_p1089154617315"><a name="en-us_topic_0183088058_p1089154617315"></a><a name="en-us_topic_0183088058_p1089154617315"></a><strong id="en-us_topic_0183088058_b677812233363"><a name="en-us_topic_0183088058_b677812233363"></a><a name="en-us_topic_0183088058_b677812233363"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088058_p128984613319"><a name="en-us_topic_0183088058_p128984613319"></a><a name="en-us_topic_0183088058_p128984613319"></a><strong id="en-us_topic_0183088058_b16426192683611"><a name="en-us_topic_0183088058_b16426192683611"></a><a name="en-us_topic_0183088058_b16426192683611"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088058_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088058_p476122243220"><a name="en-us_topic_0183088058_p476122243220"></a><a name="en-us_topic_0183088058_p476122243220"></a><a href="apis.md#en-us_topic_0182207110_li544075884710">RuntimeConfig</a> runtime_config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088058_p5596114510551"><a name="en-us_topic_0183088058_p5596114510551"></a><a name="en-us_topic_0183088058_p5596114510551"></a>Information to be configured for the runtime.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088058_section10495164611565"></a>

None

