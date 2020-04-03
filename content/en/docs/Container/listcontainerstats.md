# ListContainerStats<a name="EN-US_TOPIC_0184808111"></a>

## Prototype<a name="en-us_topic_0183088057_section164301654155514"></a>

```
rpc ListContainerStats(ListContainerStatsRequest) returns (ListContainerStatsResponse) {}
```

## Description<a name="en-us_topic_0183088057_section729211519569"></a>

This API is used to return the information about resources occupied by multiple containers. Filtering based on criteria is supported.

## Parameters<a name="en-us_topic_0183088057_section349492895613"></a>

<a name="en-us_topic_0183088057_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088057_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088057_p1089154617315"><a name="en-us_topic_0183088057_p1089154617315"></a><a name="en-us_topic_0183088057_p1089154617315"></a><strong id="en-us_topic_0183088057_b241612153419"><a name="en-us_topic_0183088057_b241612153419"></a><a name="en-us_topic_0183088057_b241612153419"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088057_p128984613319"><a name="en-us_topic_0183088057_p128984613319"></a><a name="en-us_topic_0183088057_p128984613319"></a><strong id="en-us_topic_0183088057_b148002423418"><a name="en-us_topic_0183088057_b148002423418"></a><a name="en-us_topic_0183088057_b148002423418"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088057_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088057_p759712497119"><a name="en-us_topic_0183088057_p759712497119"></a><a name="en-us_topic_0183088057_p759712497119"></a><a href="apis.md#en-us_topic_0182207110_li285981611148">ContainerStatsFilter</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088057_p1189846434"><a name="en-us_topic_0183088057_p1189846434"></a><a name="en-us_topic_0183088057_p1189846434"></a>Filter criteria.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088057_section10495164611565"></a>

<a name="en-us_topic_0183088057_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088057_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088057_p197485518319"><a name="en-us_topic_0183088057_p197485518319"></a><a name="en-us_topic_0183088057_p197485518319"></a><strong id="en-us_topic_0183088057_b20833191553410"><a name="en-us_topic_0183088057_b20833191553410"></a><a name="en-us_topic_0183088057_b20833191553410"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088057_p374185520310"><a name="en-us_topic_0183088057_p374185520310"></a><a name="en-us_topic_0183088057_p374185520310"></a><strong id="en-us_topic_0183088057_b626341373412"><a name="en-us_topic_0183088057_b626341373412"></a><a name="en-us_topic_0183088057_b626341373412"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088057_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088057_p3465158518"><a name="en-us_topic_0183088057_p3465158518"></a><a name="en-us_topic_0183088057_p3465158518"></a>repeated <a href="apis.md#en-us_topic_0182207110_li55689514215">ContainerStats</a> stats</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088057_p14745551137"><a name="en-us_topic_0183088057_p14745551137"></a><a name="en-us_topic_0183088057_p14745551137"></a>Container information list. Note: Disks and inodes support only the query of containers started by OCI images.</p>
</td>
</tr>
</tbody>
</table>

