# Restricting the Memory Usage of a Running Container<a name="EN-US_TOPIC_0184808080"></a>

## Description<a name="en-us_topic_0183293569_section13350115135310"></a>

You can set parameters to restrict the memory usage of a container.

## **Usage**<a name="en-us_topic_0183293569_section188811239165314"></a>

When running the  **isula create/run**  command, you can set memory-related parameters to restrict memory usage of containers. For details about the parameters and values, see the following table.

## Parameters<a name="en-us_topic_0183293569_section204328722112"></a>

You can specify the following parameters when running the  **isula create/run**  command:

<a name="en-us_topic_0183293569_teea6792d7cdc4de6bbec22c6d34a8a56"></a>
<table><thead align="left"><tr id="en-us_topic_0183293569_r461aacfe00054dd09da79ded3d0d5677"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.1"><p id="en-us_topic_0183293569_a4713c2757b4742f1bcfc60cf8f92362b"><a name="en-us_topic_0183293569_a4713c2757b4742f1bcfc60cf8f92362b"></a><a name="en-us_topic_0183293569_a4713c2757b4742f1bcfc60cf8f92362b"></a><strong id="en-us_topic_0183293569_en-us_topic_0075721648_b576494217460"><a name="en-us_topic_0183293569_en-us_topic_0075721648_b576494217460"></a><a name="en-us_topic_0183293569_en-us_topic_0075721648_b576494217460"></a>Parameter</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="en-us_topic_0183293569_en-us_topic_0075721648_p349275174212"><a name="en-us_topic_0183293569_en-us_topic_0075721648_p349275174212"></a><a name="en-us_topic_0183293569_en-us_topic_0075721648_p349275174212"></a><strong id="en-us_topic_0183293569_ac040c826773e4b99805cc38e76ea34ab"><a name="en-us_topic_0183293569_ac040c826773e4b99805cc38e76ea34ab"></a><a name="en-us_topic_0183293569_ac040c826773e4b99805cc38e76ea34ab"></a>Description</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.3"><p id="en-us_topic_0183293569_a4d0aaa96c3b242aca9d2c22e494195f2"><a name="en-us_topic_0183293569_a4d0aaa96c3b242aca9d2c22e494195f2"></a><a name="en-us_topic_0183293569_a4d0aaa96c3b242aca9d2c22e494195f2"></a>Value Range</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.4"><p id="en-us_topic_0183293569_a4cfdf0a8726d4fd08a52bb078988fc90"><a name="en-us_topic_0183293569_a4cfdf0a8726d4fd08a52bb078988fc90"></a><a name="en-us_topic_0183293569_a4cfdf0a8726d4fd08a52bb078988fc90"></a>Mandatory or Not</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183293569_r771d05a684c4482b930111a484d0e970"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293569_p15638101313244"><a name="en-us_topic_0183293569_p15638101313244"></a><a name="en-us_topic_0183293569_p15638101313244"></a>--memory</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293569_p121511444243"><a name="en-us_topic_0183293569_p121511444243"></a><a name="en-us_topic_0183293569_p121511444243"></a>Specifies the upper limit of the memory usage of a container.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293569_p1363841312411"><a name="en-us_topic_0183293569_p1363841312411"></a><a name="en-us_topic_0183293569_p1363841312411"></a>64-bit integer The value is a non-negative number. The value <strong id="en-us_topic_0183293569_b1981313716401"><a name="en-us_topic_0183293569_b1981313716401"></a><a name="en-us_topic_0183293569_b1981313716401"></a>0</strong> indicates that no limit is set. The unit can be empty (byte), KB, MB, GB, TB, or PB.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293569_p11638413142415"><a name="en-us_topic_0183293569_p11638413142415"></a><a name="en-us_topic_0183293569_p11638413142415"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0183293569_row477318296916"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293569_p197743291392"><a name="en-us_topic_0183293569_p197743291392"></a><a name="en-us_topic_0183293569_p197743291392"></a>--memory-reservation</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293569_p277462913917"><a name="en-us_topic_0183293569_p277462913917"></a><a name="en-us_topic_0183293569_p277462913917"></a>Specifies the soft upper limit of the memory of a container.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293569_p4676155501111"><a name="en-us_topic_0183293569_p4676155501111"></a><a name="en-us_topic_0183293569_p4676155501111"></a>64-bit integer The value is a non-negative number. The value <strong id="en-us_topic_0183293569_b751018915402"><a name="en-us_topic_0183293569_b751018915402"></a><a name="en-us_topic_0183293569_b751018915402"></a>0</strong> indicates that no limit is set. The unit can be empty (byte), KB, MB, GB, TB, or PB.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293569_p6676175511118"><a name="en-us_topic_0183293569_p6676175511118"></a><a name="en-us_topic_0183293569_p6676175511118"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0183293569_row94589881017"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293569_p1745812831010"><a name="en-us_topic_0183293569_p1745812831010"></a><a name="en-us_topic_0183293569_p1745812831010"></a>--memory-swap</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293569_p845814811108"><a name="en-us_topic_0183293569_p845814811108"></a><a name="en-us_topic_0183293569_p845814811108"></a>Specifies the upper limit of the swap memory of the container.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293569_p125294568114"><a name="en-us_topic_0183293569_p125294568114"></a><a name="en-us_topic_0183293569_p125294568114"></a>64-bit integer The value can be <strong id="en-us_topic_0183293569_b18556113518407"><a name="en-us_topic_0183293569_b18556113518407"></a><a name="en-us_topic_0183293569_b18556113518407"></a>-1</strong> or a non-negative number. The value <strong id="en-us_topic_0183293569_b1698283918405"><a name="en-us_topic_0183293569_b1698283918405"></a><a name="en-us_topic_0183293569_b1698283918405"></a>-1</strong> indicates no limit, and the value <strong id="en-us_topic_0183293569_b36062437404"><a name="en-us_topic_0183293569_b36062437404"></a><a name="en-us_topic_0183293569_b36062437404"></a>0</strong> indicates that no limit is set. The unit can be empty (byte), KB, MB, GB, TB, or PB.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293569_p752965651119"><a name="en-us_topic_0183293569_p752965651119"></a><a name="en-us_topic_0183293569_p752965651119"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0183293569_row491412141020"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293569_p4914218105"><a name="en-us_topic_0183293569_p4914218105"></a><a name="en-us_topic_0183293569_p4914218105"></a>--kernel-memory</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293569_p1691451161015"><a name="en-us_topic_0183293569_p1691451161015"></a><a name="en-us_topic_0183293569_p1691451161015"></a>Specifies the upper limit of the kernel memory of the container.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293569_p2047135781116"><a name="en-us_topic_0183293569_p2047135781116"></a><a name="en-us_topic_0183293569_p2047135781116"></a>64-bit integer The value is a non-negative number. The value <strong id="en-us_topic_0183293569_b641211974115"><a name="en-us_topic_0183293569_b641211974115"></a><a name="en-us_topic_0183293569_b641211974115"></a>0</strong> indicates that no limit is set. The unit can be empty (byte), KB, MB, GB, TB, or PB.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293569_p4471125741113"><a name="en-us_topic_0183293569_p4471125741113"></a><a name="en-us_topic_0183293569_p4471125741113"></a>No</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183293569_section1734193235916"></a>

To set the upper limit of the memory of a container, add  **--memory <number\>\[<unit\>\]**  when running the container. For example:

```
isula run -tid --memory 1G busybox sh
```

