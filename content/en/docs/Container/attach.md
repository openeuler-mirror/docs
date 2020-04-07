# Attach<a name="EN-US_TOPIC_0184808108"></a>

## Prototype<a name="en-us_topic_0183088054_section164301654155514"></a>

```
rpc Attach(AttachRequest) returns (AttachResponse) {}
```

## Description<a name="en-us_topic_0183088054_section729211519569"></a>

This API is used to take over the init process of a container through the gRPC communication method, that is, obtain URLs from the CRI server, and then use the obtained URLs to establish a long connection to the WebSocket server, implementing the interaction with the container. Only containers whose runtime is of the LCR type are supported.

## Parameters<a name="en-us_topic_0183088054_section349492895613"></a>

<a name="en-us_topic_0183088054_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088054_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088054_p1089154617315"><a name="en-us_topic_0183088054_p1089154617315"></a><a name="en-us_topic_0183088054_p1089154617315"></a><strong id="en-us_topic_0183088054_b1145614180320"><a name="en-us_topic_0183088054_b1145614180320"></a><a name="en-us_topic_0183088054_b1145614180320"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088054_p128984613319"><a name="en-us_topic_0183088054_p128984613319"></a><a name="en-us_topic_0183088054_p128984613319"></a><strong id="en-us_topic_0183088054_b7905112017323"><a name="en-us_topic_0183088054_b7905112017323"></a><a name="en-us_topic_0183088054_b7905112017323"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088054_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088054_p1253351115517"><a name="en-us_topic_0183088054_p1253351115517"></a><a name="en-us_topic_0183088054_p1253351115517"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088054_p1189846434"><a name="en-us_topic_0183088054_p1189846434"></a><a name="en-us_topic_0183088054_p1189846434"></a>Container ID.</p>
</td>
</tr>
<tr id="en-us_topic_0183088054_row4812119101610"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088054_p3218304144"><a name="en-us_topic_0183088054_p3218304144"></a><a name="en-us_topic_0183088054_p3218304144"></a>bool tty</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088054_p1947314925616"><a name="en-us_topic_0183088054_p1947314925616"></a><a name="en-us_topic_0183088054_p1947314925616"></a>Whether to run the command in a TTY.</p>
</td>
</tr>
<tr id="en-us_topic_0183088054_row1569883411415"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088054_p06982346147"><a name="en-us_topic_0183088054_p06982346147"></a><a name="en-us_topic_0183088054_p06982346147"></a>bool stdin</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088054_p469919340142"><a name="en-us_topic_0183088054_p469919340142"></a><a name="en-us_topic_0183088054_p469919340142"></a>Whether to generate the standard input stream.</p>
</td>
</tr>
<tr id="en-us_topic_0183088054_row12135742161414"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088054_p5135242161417"><a name="en-us_topic_0183088054_p5135242161417"></a><a name="en-us_topic_0183088054_p5135242161417"></a>bool stdout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088054_p1613584220142"><a name="en-us_topic_0183088054_p1613584220142"></a><a name="en-us_topic_0183088054_p1613584220142"></a>Whether to generate the standard output stream.</p>
</td>
</tr>
<tr id="en-us_topic_0183088054_row101281154171413"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088054_p151281754181412"><a name="en-us_topic_0183088054_p151281754181412"></a><a name="en-us_topic_0183088054_p151281754181412"></a>bool stderr</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088054_p51282542141"><a name="en-us_topic_0183088054_p51282542141"></a><a name="en-us_topic_0183088054_p51282542141"></a>Whether to generate the standard error output stream.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088054_section10495164611565"></a>

<a name="en-us_topic_0183088054_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088054_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088054_p197485518319"><a name="en-us_topic_0183088054_p197485518319"></a><a name="en-us_topic_0183088054_p197485518319"></a><strong id="en-us_topic_0183088054_b109921252323"><a name="en-us_topic_0183088054_b109921252323"></a><a name="en-us_topic_0183088054_b109921252323"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088054_p374185520310"><a name="en-us_topic_0183088054_p374185520310"></a><a name="en-us_topic_0183088054_p374185520310"></a><strong id="en-us_topic_0183088054_b0887828183218"><a name="en-us_topic_0183088054_b0887828183218"></a><a name="en-us_topic_0183088054_b0887828183218"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088054_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088054_p15574205011242"><a name="en-us_topic_0183088054_p15574205011242"></a><a name="en-us_topic_0183088054_p15574205011242"></a>string url</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088054_p103555206255"><a name="en-us_topic_0183088054_p103555206255"></a><a name="en-us_topic_0183088054_p103555206255"></a>Fully qualified URL of the attach streaming server.</p>
</td>
</tr>
</tbody>
</table>

