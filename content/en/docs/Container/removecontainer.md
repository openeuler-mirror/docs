# RemoveContainer<a name="EN-US_TOPIC_0184808102"></a>

## Prototype<a name="en-us_topic_0183088048_section164301654155514"></a>

```
rpc RemoveContainer(RemoveContainerRequest) returns (RemoveContainerResponse) {}
```

## Description<a name="en-us_topic_0183088048_section729211519569"></a>

This API is used to delete a container. If the container is running, it must be forcibly stopped. If the container has been deleted, no errors will be returned.

## Parameters<a name="en-us_topic_0183088048_section349492895613"></a>

<a name="en-us_topic_0183088048_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088048_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088048_p1089154617315"><a name="en-us_topic_0183088048_p1089154617315"></a><a name="en-us_topic_0183088048_p1089154617315"></a><strong id="en-us_topic_0183088048_b1546416511236"><a name="en-us_topic_0183088048_b1546416511236"></a><a name="en-us_topic_0183088048_b1546416511236"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088048_p128984613319"><a name="en-us_topic_0183088048_p128984613319"></a><a name="en-us_topic_0183088048_p128984613319"></a><strong id="en-us_topic_0183088048_b9896135362312"><a name="en-us_topic_0183088048_b9896135362312"></a><a name="en-us_topic_0183088048_b9896135362312"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088048_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088048_p1019112316015"><a name="en-us_topic_0183088048_p1019112316015"></a><a name="en-us_topic_0183088048_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088048_p1189846434"><a name="en-us_topic_0183088048_p1189846434"></a><a name="en-us_topic_0183088048_p1189846434"></a>Container ID.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088048_section10495164611565"></a>

None

