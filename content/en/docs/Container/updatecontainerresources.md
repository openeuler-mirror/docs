# UpdateContainerResources<a name="EN-US_TOPIC_0184808105"></a>

## Prototype<a name="en-us_topic_0183088051_section164301654155514"></a>

```
rpc UpdateContainerResources(UpdateContainerResourcesRequest) returns (UpdateContainerResourcesResponse) {}
```

## Description<a name="en-us_topic_0183088051_section729211519569"></a>

This API is used to update container resource configurations.

## Precautions<a name="en-us_topic_0183088051_section973104418419"></a>

-   This API cannot be used to update the pod resource configurations.
-   The value of  **oom\_score\_adj**  of any container cannot be updated.

## Parameters<a name="en-us_topic_0183088051_section349492895613"></a>

<a name="en-us_topic_0183088051_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088051_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088051_p1089154617315"><a name="en-us_topic_0183088051_p1089154617315"></a><a name="en-us_topic_0183088051_p1089154617315"></a><strong id="en-us_topic_0183088051_b169122232812"><a name="en-us_topic_0183088051_b169122232812"></a><a name="en-us_topic_0183088051_b169122232812"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088051_p128984613319"><a name="en-us_topic_0183088051_p128984613319"></a><a name="en-us_topic_0183088051_p128984613319"></a><strong id="en-us_topic_0183088051_b20432122482819"><a name="en-us_topic_0183088051_b20432122482819"></a><a name="en-us_topic_0183088051_b20432122482819"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088051_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088051_p1019112316015"><a name="en-us_topic_0183088051_p1019112316015"></a><a name="en-us_topic_0183088051_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088051_p1189846434"><a name="en-us_topic_0183088051_p1189846434"></a><a name="en-us_topic_0183088051_p1189846434"></a>Container ID.</p>
</td>
</tr>
<tr id="en-us_topic_0183088051_row134851364619"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088051_p18181582213"><a name="en-us_topic_0183088051_p18181582213"></a><a name="en-us_topic_0183088051_p18181582213"></a><a href="apis.md#en-us_topic_0182207110_li2050214613477">LinuxContainerResources</a> linux</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088051_p155615864815"><a name="en-us_topic_0183088051_p155615864815"></a><a name="en-us_topic_0183088051_p155615864815"></a>Linux resource configuration information.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088051_section10495164611565"></a>

None

