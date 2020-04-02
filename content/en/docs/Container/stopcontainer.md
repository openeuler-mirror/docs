# StopContainer<a name="EN-US_TOPIC_0184808101"></a>

## Prototype<a name="en-us_topic_0183088047_section164301654155514"></a>

```
rpc StopContainer(StopContainerRequest) returns (StopContainerResponse) {}
```

## Description<a name="en-us_topic_0183088047_section729211519569"></a>

This API is used to stop a running container. You can set a graceful timeout time. If the container has been stopped, no errors will be returned.

## Parameters<a name="en-us_topic_0183088047_section349492895613"></a>

<a name="en-us_topic_0183088047_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088047_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088047_p1089154617315"><a name="en-us_topic_0183088047_p1089154617315"></a><a name="en-us_topic_0183088047_p1089154617315"></a><strong id="en-us_topic_0183088047_b1123926142312"><a name="en-us_topic_0183088047_b1123926142312"></a><a name="en-us_topic_0183088047_b1123926142312"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088047_p128984613319"><a name="en-us_topic_0183088047_p128984613319"></a><a name="en-us_topic_0183088047_p128984613319"></a><strong id="en-us_topic_0183088047_b12768152862316"><a name="en-us_topic_0183088047_b12768152862316"></a><a name="en-us_topic_0183088047_b12768152862316"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088047_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088047_p1019112316015"><a name="en-us_topic_0183088047_p1019112316015"></a><a name="en-us_topic_0183088047_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088047_p1189846434"><a name="en-us_topic_0183088047_p1189846434"></a><a name="en-us_topic_0183088047_p1189846434"></a>Container ID.</p>
</td>
</tr>
<tr id="en-us_topic_0183088047_row660924815015"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088047_p06097481802"><a name="en-us_topic_0183088047_p06097481802"></a><a name="en-us_topic_0183088047_p06097481802"></a>int64 timeout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088047_p360920481009"><a name="en-us_topic_0183088047_p360920481009"></a><a name="en-us_topic_0183088047_p360920481009"></a>Waiting time before a container is forcibly stopped. The default value is <strong id="en-us_topic_0183088047_b17804204712523"><a name="en-us_topic_0183088047_b17804204712523"></a><a name="en-us_topic_0183088047_b17804204712523"></a>0</strong>, indicating forcible stop.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088047_section10495164611565"></a>

None

