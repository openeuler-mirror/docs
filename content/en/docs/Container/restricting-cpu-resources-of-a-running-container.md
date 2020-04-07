# Restricting CPU Resources of a Running Container<a name="EN-US_TOPIC_0184808079"></a>

## Description<a name="en-us_topic_0183293568_section13350115135310"></a>

You can set parameters to restrict the CPU resources of a container.

## **Usage**<a name="en-us_topic_0183293568_section188811239165314"></a>

When running the  **isula create/run**  command, you can set CPU-related parameters to limit the CPU resources of a container. For details about the parameters and values, see the following table.

## Parameters<a name="en-us_topic_0183293568_section204328722112"></a>

You can specify the following parameters when running the  **isula create/run**  command:

<a name="en-us_topic_0183293568_teea6792d7cdc4de6bbec22c6d34a8a56"></a>
<table><thead align="left"><tr id="en-us_topic_0183293568_r461aacfe00054dd09da79ded3d0d5677"><th class="cellrowborder" valign="top" width="25.000000000000007%" id="mcps1.1.5.1.1"><p id="en-us_topic_0183293568_a4713c2757b4742f1bcfc60cf8f92362b"><a name="en-us_topic_0183293568_a4713c2757b4742f1bcfc60cf8f92362b"></a><a name="en-us_topic_0183293568_a4713c2757b4742f1bcfc60cf8f92362b"></a><strong id="en-us_topic_0183293568_en-us_topic_0075721648_b576494217460"><a name="en-us_topic_0183293568_en-us_topic_0075721648_b576494217460"></a><a name="en-us_topic_0183293568_en-us_topic_0075721648_b576494217460"></a>Parameter</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25.720000000000002%" id="mcps1.1.5.1.2"><p id="en-us_topic_0183293568_en-us_topic_0075721648_p349275174212"><a name="en-us_topic_0183293568_en-us_topic_0075721648_p349275174212"></a><a name="en-us_topic_0183293568_en-us_topic_0075721648_p349275174212"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="27.990000000000002%" id="mcps1.1.5.1.3"><p id="en-us_topic_0183293568_a4d0aaa96c3b242aca9d2c22e494195f2"><a name="en-us_topic_0183293568_a4d0aaa96c3b242aca9d2c22e494195f2"></a><a name="en-us_topic_0183293568_a4d0aaa96c3b242aca9d2c22e494195f2"></a>Value Range</p>
</th>
<th class="cellrowborder" valign="top" width="21.290000000000003%" id="mcps1.1.5.1.4"><p id="en-us_topic_0183293568_a4cfdf0a8726d4fd08a52bb078988fc90"><a name="en-us_topic_0183293568_a4cfdf0a8726d4fd08a52bb078988fc90"></a><a name="en-us_topic_0183293568_a4cfdf0a8726d4fd08a52bb078988fc90"></a>Mandatory or Not</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183293568_r771d05a684c4482b930111a484d0e970"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293568_p15638101313244"><a name="en-us_topic_0183293568_p15638101313244"></a><a name="en-us_topic_0183293568_p15638101313244"></a>--cpu-period</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293568_p121511444243"><a name="en-us_topic_0183293568_p121511444243"></a><a name="en-us_topic_0183293568_p121511444243"></a>Limits the CPU CFS period in a container.</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293568_p1363841312411"><a name="en-us_topic_0183293568_p1363841312411"></a><a name="en-us_topic_0183293568_p1363841312411"></a>64-bit integer</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293568_p11638413142415"><a name="en-us_topic_0183293568_p11638413142415"></a><a name="en-us_topic_0183293568_p11638413142415"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0183293568_row477318296916"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293568_p197743291392"><a name="en-us_topic_0183293568_p197743291392"></a><a name="en-us_topic_0183293568_p197743291392"></a>--cpu-quota</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293568_p277462913917"><a name="en-us_topic_0183293568_p277462913917"></a><a name="en-us_topic_0183293568_p277462913917"></a>Limits the CPU CFS quota.</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293568_p4676155501111"><a name="en-us_topic_0183293568_p4676155501111"></a><a name="en-us_topic_0183293568_p4676155501111"></a>64-bit integer</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293568_p6676175511118"><a name="en-us_topic_0183293568_p6676175511118"></a><a name="en-us_topic_0183293568_p6676175511118"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0183293568_row94589881017"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293568_p1745812831010"><a name="en-us_topic_0183293568_p1745812831010"></a><a name="en-us_topic_0183293568_p1745812831010"></a>--cpu-shares</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293568_p845814811108"><a name="en-us_topic_0183293568_p845814811108"></a><a name="en-us_topic_0183293568_p845814811108"></a>Limits the CPU share (relative weight).</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293568_p125294568114"><a name="en-us_topic_0183293568_p125294568114"></a><a name="en-us_topic_0183293568_p125294568114"></a>64-bit integer</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293568_p752965651119"><a name="en-us_topic_0183293568_p752965651119"></a><a name="en-us_topic_0183293568_p752965651119"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0183293568_row491412141020"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293568_p4914218105"><a name="en-us_topic_0183293568_p4914218105"></a><a name="en-us_topic_0183293568_p4914218105"></a>--cpuset-cpus</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293568_p1691451161015"><a name="en-us_topic_0183293568_p1691451161015"></a><a name="en-us_topic_0183293568_p1691451161015"></a>Limits the CPU nodes.</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293568_p2047135781116"><a name="en-us_topic_0183293568_p2047135781116"></a><a name="en-us_topic_0183293568_p2047135781116"></a>A character string. The value is the number of CPUs to be configured. The value ranges from 0 to 3, or 0 and 1.</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293568_p4471125741113"><a name="en-us_topic_0183293568_p4471125741113"></a><a name="en-us_topic_0183293568_p4471125741113"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0183293568_row88951155119"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293568_p14896165515112"><a name="en-us_topic_0183293568_p14896165515112"></a><a name="en-us_topic_0183293568_p14896165515112"></a>--cpuset-mems</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293568_p989618552018"><a name="en-us_topic_0183293568_p989618552018"></a><a name="en-us_topic_0183293568_p989618552018"></a>Limits the memory nodes used by cpuset in the container.</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293568_p1896145515110"><a name="en-us_topic_0183293568_p1896145515110"></a><a name="en-us_topic_0183293568_p1896145515110"></a>A character string. The value is the number of CPUs to be configured. The value ranges from 0 to 3, or 0 and 1.</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293568_p108966555117"><a name="en-us_topic_0183293568_p108966555117"></a><a name="en-us_topic_0183293568_p108966555117"></a>No</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183293568_section1734193235916"></a>

To restrict a container to use a specific CPU, add  **--cpuset-cpus number**  when running the container. For example:

```
isula run -tid --cpuset-cpus 0,2-3 busybox sh
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>You can check whether the configuration is successful. For details, see "Querying Information About a Single Container."  

