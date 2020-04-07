# ListPodSandbox<a name="EN-US_TOPIC_0184808098"></a>

## Prototype<a name="en-us_topic_0183088044_section164301654155514"></a>

```
rpc ListPodSandbox(ListPodSandboxRequest) returns (ListPodSandboxResponse) {}
```

## Description<a name="en-us_topic_0183088044_section729211519569"></a>

This API is used to return the sandbox information list. Filtering based on criteria is supported.

## Parameters<a name="en-us_topic_0183088044_section349492895613"></a>

<a name="en-us_topic_0183088044_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088044_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088044_p1089154617315"><a name="en-us_topic_0183088044_p1089154617315"></a><a name="en-us_topic_0183088044_p1089154617315"></a><strong id="en-us_topic_0183088044_b1875320301148"><a name="en-us_topic_0183088044_b1875320301148"></a><a name="en-us_topic_0183088044_b1875320301148"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088044_p128984613319"><a name="en-us_topic_0183088044_p128984613319"></a><a name="en-us_topic_0183088044_p128984613319"></a><strong id="en-us_topic_0183088044_b1548883318148"><a name="en-us_topic_0183088044_b1548883318148"></a><a name="en-us_topic_0183088044_b1548883318148"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088044_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088044_p47762110579"><a name="en-us_topic_0183088044_p47762110579"></a><a name="en-us_topic_0183088044_p47762110579"></a><a href="apis.md#en-us_topic_0182207110_li17913177201">PodSandboxFilter</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088044_p1189846434"><a name="en-us_topic_0183088044_p1189846434"></a><a name="en-us_topic_0183088044_p1189846434"></a>Filter criteria.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088044_section10495164611565"></a>

<a name="en-us_topic_0183088044_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088044_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088044_p197485518319"><a name="en-us_topic_0183088044_p197485518319"></a><a name="en-us_topic_0183088044_p197485518319"></a><strong id="en-us_topic_0183088044_b418124251415"><a name="en-us_topic_0183088044_b418124251415"></a><a name="en-us_topic_0183088044_b418124251415"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088044_p374185520310"><a name="en-us_topic_0183088044_p374185520310"></a><a name="en-us_topic_0183088044_p374185520310"></a><strong id="en-us_topic_0183088044_b185713430141"><a name="en-us_topic_0183088044_b185713430141"></a><a name="en-us_topic_0183088044_b185713430141"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088044_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088044_p1118315385563"><a name="en-us_topic_0183088044_p1118315385563"></a><a name="en-us_topic_0183088044_p1118315385563"></a>repeated <a href="apis.md#en-us_topic_0182207110_li10542191117207">PodSandbox</a> items</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088044_p518373814560"><a name="en-us_topic_0183088044_p518373814560"></a><a name="en-us_topic_0183088044_p518373814560"></a>Sandbox information list.</p>
</td>
</tr>
</tbody>
</table>

