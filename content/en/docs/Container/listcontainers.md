# ListContainers<a name="EN-US_TOPIC_0184808103"></a>

## Prototype<a name="en-us_topic_0183088049_section164301654155514"></a>

```
rpc ListContainers(ListContainersRequest) returns (ListContainersResponse) {}
```

## Description<a name="en-us_topic_0183088049_section729211519569"></a>

This API is used to return the container information list. Filtering based on criteria is supported.

## Parameters<a name="en-us_topic_0183088049_section349492895613"></a>

<a name="en-us_topic_0183088049_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088049_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088049_p1089154617315"><a name="en-us_topic_0183088049_p1089154617315"></a><a name="en-us_topic_0183088049_p1089154617315"></a><strong id="en-us_topic_0183088049_b3883133218265"><a name="en-us_topic_0183088049_b3883133218265"></a><a name="en-us_topic_0183088049_b3883133218265"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088049_p128984613319"><a name="en-us_topic_0183088049_p128984613319"></a><a name="en-us_topic_0183088049_p128984613319"></a><strong id="en-us_topic_0183088049_b197631835112616"><a name="en-us_topic_0183088049_b197631835112616"></a><a name="en-us_topic_0183088049_b197631835112616"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088049_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088049_p1356616573315"><a name="en-us_topic_0183088049_p1356616573315"></a><a name="en-us_topic_0183088049_p1356616573315"></a><a href="apis.md#en-us_topic_0182207110_li780212262306">ContainerFilter</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088049_p1189846434"><a name="en-us_topic_0183088049_p1189846434"></a><a name="en-us_topic_0183088049_p1189846434"></a>Filter criteria.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088049_section10495164611565"></a>

<a name="en-us_topic_0183088049_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088049_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088049_p197485518319"><a name="en-us_topic_0183088049_p197485518319"></a><a name="en-us_topic_0183088049_p197485518319"></a><strong id="en-us_topic_0183088049_b23465396278"><a name="en-us_topic_0183088049_b23465396278"></a><a name="en-us_topic_0183088049_b23465396278"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088049_p374185520310"><a name="en-us_topic_0183088049_p374185520310"></a><a name="en-us_topic_0183088049_p374185520310"></a><strong id="en-us_topic_0183088049_b13785104117278"><a name="en-us_topic_0183088049_b13785104117278"></a><a name="en-us_topic_0183088049_b13785104117278"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088049_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088049_p3465158518"><a name="en-us_topic_0183088049_p3465158518"></a><a name="en-us_topic_0183088049_p3465158518"></a>repeated <a href="apis.md#en-us_topic_0182207110_li2063672883012">Container</a> containers</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088049_p14745551137"><a name="en-us_topic_0183088049_p14745551137"></a><a name="en-us_topic_0183088049_p14745551137"></a>Container information list.</p>
</td>
</tr>
</tbody>
</table>

