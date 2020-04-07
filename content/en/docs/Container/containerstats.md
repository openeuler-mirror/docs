# ContainerStats<a name="EN-US_TOPIC_0184808110"></a>

## Prototype<a name="en-us_topic_0183088056_section164301654155514"></a>

```
rpc ContainerStats(ContainerStatsRequest) returns (ContainerStatsResponse) {}
```

## Description<a name="en-us_topic_0183088056_section729211519569"></a>

This API is used to return information about resources occupied by a container. Only containers whose runtime is of the LCR type are supported.

## Parameters<a name="en-us_topic_0183088056_section349492895613"></a>

<a name="en-us_topic_0183088056_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088056_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088056_p1089154617315"><a name="en-us_topic_0183088056_p1089154617315"></a><a name="en-us_topic_0183088056_p1089154617315"></a><strong id="en-us_topic_0183088056_b1299984153312"><a name="en-us_topic_0183088056_b1299984153312"></a><a name="en-us_topic_0183088056_b1299984153312"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088056_p128984613319"><a name="en-us_topic_0183088056_p128984613319"></a><a name="en-us_topic_0183088056_p128984613319"></a><strong id="en-us_topic_0183088056_b349515718331"><a name="en-us_topic_0183088056_b349515718331"></a><a name="en-us_topic_0183088056_b349515718331"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088056_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088056_p759712497119"><a name="en-us_topic_0183088056_p759712497119"></a><a name="en-us_topic_0183088056_p759712497119"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088056_p1189846434"><a name="en-us_topic_0183088056_p1189846434"></a><a name="en-us_topic_0183088056_p1189846434"></a>Container ID.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088056_section10495164611565"></a>

<a name="en-us_topic_0183088056_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088056_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088056_p197485518319"><a name="en-us_topic_0183088056_p197485518319"></a><a name="en-us_topic_0183088056_p197485518319"></a><strong id="en-us_topic_0183088056_b14824203215330"><a name="en-us_topic_0183088056_b14824203215330"></a><a name="en-us_topic_0183088056_b14824203215330"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088056_p374185520310"><a name="en-us_topic_0183088056_p374185520310"></a><a name="en-us_topic_0183088056_p374185520310"></a><strong id="en-us_topic_0183088056_b18656113519336"><a name="en-us_topic_0183088056_b18656113519336"></a><a name="en-us_topic_0183088056_b18656113519336"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088056_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088056_p3465158518"><a name="en-us_topic_0183088056_p3465158518"></a><a name="en-us_topic_0183088056_p3465158518"></a><a href="apis.md#en-us_topic_0182207110_li55689514215">ContainerStats</a> stats</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088056_p14745551137"><a name="en-us_topic_0183088056_p14745551137"></a><a name="en-us_topic_0183088056_p14745551137"></a>Container information. Note: Disks and inodes support only the query of containers started by OCI images.</p>
</td>
</tr>
</tbody>
</table>

