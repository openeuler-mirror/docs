# Exec<a name="EN-US_TOPIC_0184808107"></a>

## Prototype<a name="en-us_topic_0183088053_section164301654155514"></a>

```
rpc Exec(ExecRequest) returns (ExecResponse) {}
```

## Description<a name="en-us_topic_0183088053_section729211519569"></a>

This API is used to run commands in a container through the gRPC communication method, that is, obtain URLs from the CRI server, and then use the obtained URLs to establish a long connection to the WebSocket server, implementing the interaction with the container.

## Precautions<a name="en-us_topic_0183088053_section973104418419"></a>

The interaction between the terminal and the container can be enabled when a single command is executed. One of  **stdin**,  **stdout**, and  **stderr **must be true. If  **tty**  is true,  **stderr**  must be false. Multiplexing is not supported. In this case, the output of  **stdout**  and  **stderr**  will be combined to a stream.

## Parameters<a name="en-us_topic_0183088053_section349492895613"></a>

<a name="en-us_topic_0183088053_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088053_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088053_p1089154617315"><a name="en-us_topic_0183088053_p1089154617315"></a><a name="en-us_topic_0183088053_p1089154617315"></a><strong id="en-us_topic_0183088053_b17946124515315"><a name="en-us_topic_0183088053_b17946124515315"></a><a name="en-us_topic_0183088053_b17946124515315"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088053_p128984613319"><a name="en-us_topic_0183088053_p128984613319"></a><a name="en-us_topic_0183088053_p128984613319"></a><strong id="en-us_topic_0183088053_b36589470313"><a name="en-us_topic_0183088053_b36589470313"></a><a name="en-us_topic_0183088053_b36589470313"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088053_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088053_p1253351115517"><a name="en-us_topic_0183088053_p1253351115517"></a><a name="en-us_topic_0183088053_p1253351115517"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088053_p1189846434"><a name="en-us_topic_0183088053_p1189846434"></a><a name="en-us_topic_0183088053_p1189846434"></a>Container ID.</p>
</td>
</tr>
<tr id="en-us_topic_0183088053_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088053_p1489111122411"><a name="en-us_topic_0183088053_p1489111122411"></a><a name="en-us_topic_0183088053_p1489111122411"></a>repeated string cmd</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088053_p780820166266"><a name="en-us_topic_0183088053_p780820166266"></a><a name="en-us_topic_0183088053_p780820166266"></a>Command to be executed.</p>
</td>
</tr>
<tr id="en-us_topic_0183088053_row4812119101610"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088053_p3218304144"><a name="en-us_topic_0183088053_p3218304144"></a><a name="en-us_topic_0183088053_p3218304144"></a>bool tty</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088053_p1947314925616"><a name="en-us_topic_0183088053_p1947314925616"></a><a name="en-us_topic_0183088053_p1947314925616"></a>Whether to run the command in a TTY.</p>
</td>
</tr>
<tr id="en-us_topic_0183088053_row1569883411415"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088053_p06982346147"><a name="en-us_topic_0183088053_p06982346147"></a><a name="en-us_topic_0183088053_p06982346147"></a>bool stdin</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088053_p469919340142"><a name="en-us_topic_0183088053_p469919340142"></a><a name="en-us_topic_0183088053_p469919340142"></a>Whether to generate the standard input stream.</p>
</td>
</tr>
<tr id="en-us_topic_0183088053_row12135742161414"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088053_p5135242161417"><a name="en-us_topic_0183088053_p5135242161417"></a><a name="en-us_topic_0183088053_p5135242161417"></a>bool stdout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088053_p1613584220142"><a name="en-us_topic_0183088053_p1613584220142"></a><a name="en-us_topic_0183088053_p1613584220142"></a>Whether to generate the standard output stream.</p>
</td>
</tr>
<tr id="en-us_topic_0183088053_row101281154171413"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088053_p151281754181412"><a name="en-us_topic_0183088053_p151281754181412"></a><a name="en-us_topic_0183088053_p151281754181412"></a>bool stderr</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088053_p51282542141"><a name="en-us_topic_0183088053_p51282542141"></a><a name="en-us_topic_0183088053_p51282542141"></a>Whether to generate the standard error output stream.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088053_section10495164611565"></a>

<a name="en-us_topic_0183088053_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088053_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088053_p197485518319"><a name="en-us_topic_0183088053_p197485518319"></a><a name="en-us_topic_0183088053_p197485518319"></a><strong id="en-us_topic_0183088053_b10846857163110"><a name="en-us_topic_0183088053_b10846857163110"></a><a name="en-us_topic_0183088053_b10846857163110"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088053_p374185520310"><a name="en-us_topic_0183088053_p374185520310"></a><a name="en-us_topic_0183088053_p374185520310"></a><strong id="en-us_topic_0183088053_b2064112014323"><a name="en-us_topic_0183088053_b2064112014323"></a><a name="en-us_topic_0183088053_b2064112014323"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088053_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088053_p15574205011242"><a name="en-us_topic_0183088053_p15574205011242"></a><a name="en-us_topic_0183088053_p15574205011242"></a>string url</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088053_p103555206255"><a name="en-us_topic_0183088053_p103555206255"></a><a name="en-us_topic_0183088053_p103555206255"></a>Fully qualified URL of the exec streaming server.</p>
</td>
</tr>
</tbody>
</table>

