# ContainerStatus<a name="EN-US_TOPIC_0184808104"></a>

## Prototype<a name="en-us_topic_0183088050_section164301654155514"></a>

```
rpc ContainerStatus(ContainerStatusRequest) returns (ContainerStatusResponse) {}
```

## Description<a name="en-us_topic_0183088050_section729211519569"></a>

This API is used to return the container status information. If the container does not exist, an error will be returned.

## Parameters<a name="en-us_topic_0183088050_section349492895613"></a>

<a name="en-us_topic_0183088050_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088050_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088050_p1089154617315"><a name="en-us_topic_0183088050_p1089154617315"></a><a name="en-us_topic_0183088050_p1089154617315"></a><strong id="en-us_topic_0183088050_b10433175315277"><a name="en-us_topic_0183088050_b10433175315277"></a><a name="en-us_topic_0183088050_b10433175315277"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088050_p128984613319"><a name="en-us_topic_0183088050_p128984613319"></a><a name="en-us_topic_0183088050_p128984613319"></a><strong id="en-us_topic_0183088050_b295315557278"><a name="en-us_topic_0183088050_b295315557278"></a><a name="en-us_topic_0183088050_b295315557278"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088050_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088050_p1019112316015"><a name="en-us_topic_0183088050_p1019112316015"></a><a name="en-us_topic_0183088050_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088050_p1189846434"><a name="en-us_topic_0183088050_p1189846434"></a><a name="en-us_topic_0183088050_p1189846434"></a>Container ID.</p>
</td>
</tr>
<tr id="en-us_topic_0183088050_row134851364619"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088050_p956148114812"><a name="en-us_topic_0183088050_p956148114812"></a><a name="en-us_topic_0183088050_p956148114812"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088050_p155615864815"><a name="en-us_topic_0183088050_p155615864815"></a><a name="en-us_topic_0183088050_p155615864815"></a>Whether to display additional information about the sandbox. This parameter does not take effect now.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088050_section10495164611565"></a>

<a name="en-us_topic_0183088050_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088050_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088050_p197485518319"><a name="en-us_topic_0183088050_p197485518319"></a><a name="en-us_topic_0183088050_p197485518319"></a><strong id="en-us_topic_0183088050_b87305415283"><a name="en-us_topic_0183088050_b87305415283"></a><a name="en-us_topic_0183088050_b87305415283"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088050_p374185520310"><a name="en-us_topic_0183088050_p374185520310"></a><a name="en-us_topic_0183088050_p374185520310"></a><strong id="en-us_topic_0183088050_b194651461282"><a name="en-us_topic_0183088050_b194651461282"></a><a name="en-us_topic_0183088050_b194651461282"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088050_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088050_p157445512318"><a name="en-us_topic_0183088050_p157445512318"></a><a name="en-us_topic_0183088050_p157445512318"></a><a href="apis.md#en-us_topic_0182207110_li1234063113301">ContainerStatus</a> status</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088050_p14745551137"><a name="en-us_topic_0183088050_p14745551137"></a><a name="en-us_topic_0183088050_p14745551137"></a>Container status information.</p>
</td>
</tr>
<tr id="en-us_topic_0183088050_row27545518311"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088050_p953212217505"><a name="en-us_topic_0183088050_p953212217505"></a><a name="en-us_topic_0183088050_p953212217505"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088050_p47512557310"><a name="en-us_topic_0183088050_p47512557310"></a><a name="en-us_topic_0183088050_p47512557310"></a>Additional information about the sandbox. The key can be any string, and the value is a JSON character string. The information can be any debugging content. When <strong id="en-us_topic_0183088050_b33801996615"><a name="en-us_topic_0183088050_b33801996615"></a><a name="en-us_topic_0183088050_b33801996615"></a>verbose</strong> is set to <strong id="en-us_topic_0183088050_b203801491961"><a name="en-us_topic_0183088050_b203801491961"></a><a name="en-us_topic_0183088050_b203801491961"></a>true</strong>, <strong id="en-us_topic_0183088050_b103811492068"><a name="en-us_topic_0183088050_b103811492068"></a><a name="en-us_topic_0183088050_b103811492068"></a>info</strong> cannot be empty. This parameter does not take effect now.</p>
</td>
</tr>
</tbody>
</table>

