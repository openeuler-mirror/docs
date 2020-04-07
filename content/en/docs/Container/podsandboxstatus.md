# PodSandboxStatus<a name="EN-US_TOPIC_0184808097"></a>

## Prototype<a name="en-us_topic_0183088043_section164301654155514"></a>

```
rpc PodSandboxStatus(PodSandboxStatusRequest) returns (PodSandboxStatusResponse) {}
```

## Description<a name="en-us_topic_0183088043_section729211519569"></a>

This API is used to query the sandbox status. If the sandbox does not exist, an error is returned.

## Parameters<a name="en-us_topic_0183088043_section349492895613"></a>

<a name="en-us_topic_0183088043_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088043_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088043_p1089154617315"><a name="en-us_topic_0183088043_p1089154617315"></a><a name="en-us_topic_0183088043_p1089154617315"></a><strong id="en-us_topic_0183088043_b5464849181310"><a name="en-us_topic_0183088043_b5464849181310"></a><a name="en-us_topic_0183088043_b5464849181310"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088043_p128984613319"><a name="en-us_topic_0183088043_p128984613319"></a><a name="en-us_topic_0183088043_p128984613319"></a><strong id="en-us_topic_0183088043_b34165533138"><a name="en-us_topic_0183088043_b34165533138"></a><a name="en-us_topic_0183088043_b34165533138"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088043_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088043_p1893714794317"><a name="en-us_topic_0183088043_p1893714794317"></a><a name="en-us_topic_0183088043_p1893714794317"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088043_p1189846434"><a name="en-us_topic_0183088043_p1189846434"></a><a name="en-us_topic_0183088043_p1189846434"></a>Sandbox ID</p>
</td>
</tr>
<tr id="en-us_topic_0183088043_row1856117814815"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088043_p956148114812"><a name="en-us_topic_0183088043_p956148114812"></a><a name="en-us_topic_0183088043_p956148114812"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088043_p155615864815"><a name="en-us_topic_0183088043_p155615864815"></a><a name="en-us_topic_0183088043_p155615864815"></a>Whether to display additional information about the sandbox. This parameter does not take effect now.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088043_section10495164611565"></a>

<a name="en-us_topic_0183088043_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088043_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088043_p197485518319"><a name="en-us_topic_0183088043_p197485518319"></a><a name="en-us_topic_0183088043_p197485518319"></a><strong id="en-us_topic_0183088043_b7681103411314"><a name="en-us_topic_0183088043_b7681103411314"></a><a name="en-us_topic_0183088043_b7681103411314"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088043_p374185520310"><a name="en-us_topic_0183088043_p374185520310"></a><a name="en-us_topic_0183088043_p374185520310"></a><strong id="en-us_topic_0183088043_b176333271319"><a name="en-us_topic_0183088043_b176333271319"></a><a name="en-us_topic_0183088043_b176333271319"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088043_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088043_p157445512318"><a name="en-us_topic_0183088043_p157445512318"></a><a name="en-us_topic_0183088043_p157445512318"></a><a href="apis.md#en-us_topic_0182207110_li146986172010">PodSandboxStatus</a> status</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088043_p14745551137"><a name="en-us_topic_0183088043_p14745551137"></a><a name="en-us_topic_0183088043_p14745551137"></a>Status of the sandbox.</p>
</td>
</tr>
<tr id="en-us_topic_0183088043_row27545518311"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088043_p953212217505"><a name="en-us_topic_0183088043_p953212217505"></a><a name="en-us_topic_0183088043_p953212217505"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088043_p47512557310"><a name="en-us_topic_0183088043_p47512557310"></a><a name="en-us_topic_0183088043_p47512557310"></a>Additional information about the sandbox. The key can be any string, and the value is a JSON character string. The information can be any debugging content. When <strong id="en-us_topic_0183088043_b1311520217461"><a name="en-us_topic_0183088043_b1311520217461"></a><a name="en-us_topic_0183088043_b1311520217461"></a>verbose</strong> is set to <strong id="en-us_topic_0183088043_b5888112594613"><a name="en-us_topic_0183088043_b5888112594613"></a><a name="en-us_topic_0183088043_b5888112594613"></a>true</strong>, <strong id="en-us_topic_0183088043_b15182129114614"><a name="en-us_topic_0183088043_b15182129114614"></a><a name="en-us_topic_0183088043_b15182129114614"></a>info</strong> cannot be empty. This parameter does not take effect now.</p>
</td>
</tr>
</tbody>
</table>

