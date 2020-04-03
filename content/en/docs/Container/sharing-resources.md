# Sharing Resources<a name="EN-US_TOPIC_0184808078"></a>

## Description<a name="en-us_topic_0183293567_section13350115135310"></a>

Containers or containers and hosts can share namespace information mutually, including PID, network, IPC, and UTS information.

## Usage<a name="en-us_topic_0183293567_section188811239165314"></a>

When running the  **isula create/run**  command, you can set the namespace parameters to share resources. For details, see the following parameter description table.

## Parameters<a name="en-us_topic_0183293567_section204328722112"></a>

You can specify the following parameters when running the  **lcrc create/run**  command:

<a name="en-us_topic_0183293567_teea6792d7cdc4de6bbec22c6d34a8a56"></a>
<table><thead align="left"><tr id="en-us_topic_0183293567_r461aacfe00054dd09da79ded3d0d5677"><th class="cellrowborder" valign="top" width="25.000000000000007%" id="mcps1.1.5.1.1"><p id="en-us_topic_0183293567_a4713c2757b4742f1bcfc60cf8f92362b"><a name="en-us_topic_0183293567_a4713c2757b4742f1bcfc60cf8f92362b"></a><a name="en-us_topic_0183293567_a4713c2757b4742f1bcfc60cf8f92362b"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="25.720000000000002%" id="mcps1.1.5.1.2"><p id="en-us_topic_0183293567_en-us_topic_0075721648_p349275174212"><a name="en-us_topic_0183293567_en-us_topic_0075721648_p349275174212"></a><a name="en-us_topic_0183293567_en-us_topic_0075721648_p349275174212"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="27.990000000000002%" id="mcps1.1.5.1.3"><p id="en-us_topic_0183293567_a4d0aaa96c3b242aca9d2c22e494195f2"><a name="en-us_topic_0183293567_a4d0aaa96c3b242aca9d2c22e494195f2"></a><a name="en-us_topic_0183293567_a4d0aaa96c3b242aca9d2c22e494195f2"></a>Value Range</p>
</th>
<th class="cellrowborder" valign="top" width="21.290000000000003%" id="mcps1.1.5.1.4"><p id="en-us_topic_0183293567_a4cfdf0a8726d4fd08a52bb078988fc90"><a name="en-us_topic_0183293567_a4cfdf0a8726d4fd08a52bb078988fc90"></a><a name="en-us_topic_0183293567_a4cfdf0a8726d4fd08a52bb078988fc90"></a>Mandatory or Not</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183293567_r771d05a684c4482b930111a484d0e970"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293567_p15638101313244"><a name="en-us_topic_0183293567_p15638101313244"></a><a name="en-us_topic_0183293567_p15638101313244"></a>--pid</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293567_p121511444243"><a name="en-us_topic_0183293567_p121511444243"></a><a name="en-us_topic_0183293567_p121511444243"></a>Specifies the PID namespace to be shared.</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293567_p1363841312411"><a name="en-us_topic_0183293567_p1363841312411"></a><a name="en-us_topic_0183293567_p1363841312411"></a><strong id="en-us_topic_0183293567_b3190182517234"><a name="en-us_topic_0183293567_b3190182517234"></a><a name="en-us_topic_0183293567_b3190182517234"></a>[none, host, container:&lt;containerID&gt;]</strong>: <strong id="en-us_topic_0183293567_b1417915297233"><a name="en-us_topic_0183293567_b1417915297233"></a><a name="en-us_topic_0183293567_b1417915297233"></a>none</strong> indicates that the namespace is not shared. <strong id="en-us_topic_0183293567_b2520143452313"><a name="en-us_topic_0183293567_b2520143452313"></a><a name="en-us_topic_0183293567_b2520143452313"></a>host</strong> indicates that the namespace is shared with the host. <strong id="en-us_topic_0183293567_b183721947182315"><a name="en-us_topic_0183293567_b183721947182315"></a><a name="en-us_topic_0183293567_b183721947182315"></a>container:&lt;containerID&gt;</strong> indicates that the namespace is shared with the container.</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293567_p11638413142415"><a name="en-us_topic_0183293567_p11638413142415"></a><a name="en-us_topic_0183293567_p11638413142415"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0183293567_row477318296916"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293567_p197743291392"><a name="en-us_topic_0183293567_p197743291392"></a><a name="en-us_topic_0183293567_p197743291392"></a>--net</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293567_p277462913917"><a name="en-us_topic_0183293567_p277462913917"></a><a name="en-us_topic_0183293567_p277462913917"></a>Specifies the network namespace to be shared.</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293567_p25177292378"><a name="en-us_topic_0183293567_p25177292378"></a><a name="en-us_topic_0183293567_p25177292378"></a><strong id="en-us_topic_0183293567_b1851212072414"><a name="en-us_topic_0183293567_b1851212072414"></a><a name="en-us_topic_0183293567_b1851212072414"></a>[none, host, container:&lt;containerID&gt;]</strong>: <strong id="en-us_topic_0183293567_b18342111142415"><a name="en-us_topic_0183293567_b18342111142415"></a><a name="en-us_topic_0183293567_b18342111142415"></a>none</strong> indicates that the namespace is not shared. <strong id="en-us_topic_0183293567_b1376831492413"><a name="en-us_topic_0183293567_b1376831492413"></a><a name="en-us_topic_0183293567_b1376831492413"></a>host</strong> indicates that the namespace is shared with the host. <strong id="en-us_topic_0183293567_b6402102212254"><a name="en-us_topic_0183293567_b6402102212254"></a><a name="en-us_topic_0183293567_b6402102212254"></a>container:&lt;containerID&gt;</strong> indicates that the namespace is shared with the container.</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293567_p6676175511118"><a name="en-us_topic_0183293567_p6676175511118"></a><a name="en-us_topic_0183293567_p6676175511118"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0183293567_row94589881017"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293567_p1745812831010"><a name="en-us_topic_0183293567_p1745812831010"></a><a name="en-us_topic_0183293567_p1745812831010"></a>--ipc</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293567_p845814811108"><a name="en-us_topic_0183293567_p845814811108"></a><a name="en-us_topic_0183293567_p845814811108"></a>Specifies the IPC namespace to be shared.</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293567_p0403320379"><a name="en-us_topic_0183293567_p0403320379"></a><a name="en-us_topic_0183293567_p0403320379"></a><strong id="en-us_topic_0183293567_b1741915519259"><a name="en-us_topic_0183293567_b1741915519259"></a><a name="en-us_topic_0183293567_b1741915519259"></a>[none, host, container:&lt;containerID&gt;]</strong>: <strong id="en-us_topic_0183293567_b787115111265"><a name="en-us_topic_0183293567_b787115111265"></a><a name="en-us_topic_0183293567_b787115111265"></a>none</strong> indicates that the namespace is not shared. <strong id="en-us_topic_0183293567_b21612522615"><a name="en-us_topic_0183293567_b21612522615"></a><a name="en-us_topic_0183293567_b21612522615"></a>host</strong> indicates that the namespace is shared with the host. <strong id="en-us_topic_0183293567_b1822939132610"><a name="en-us_topic_0183293567_b1822939132610"></a><a name="en-us_topic_0183293567_b1822939132610"></a>container:&lt;containerID&gt;</strong> indicates that the namespace is shared with the container.</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293567_p752965651119"><a name="en-us_topic_0183293567_p752965651119"></a><a name="en-us_topic_0183293567_p752965651119"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0183293567_row88951155119"><td class="cellrowborder" valign="top" width="25.000000000000007%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293567_p14896165515112"><a name="en-us_topic_0183293567_p14896165515112"></a><a name="en-us_topic_0183293567_p14896165515112"></a>--uts</p>
</td>
<td class="cellrowborder" valign="top" width="25.720000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293567_p989618552018"><a name="en-us_topic_0183293567_p989618552018"></a><a name="en-us_topic_0183293567_p989618552018"></a>Specifies the UTS namespace to be shared.</p>
</td>
<td class="cellrowborder" valign="top" width="27.990000000000002%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293567_p15643153493716"><a name="en-us_topic_0183293567_p15643153493716"></a><a name="en-us_topic_0183293567_p15643153493716"></a><strong id="en-us_topic_0183293567_b11756122632619"><a name="en-us_topic_0183293567_b11756122632619"></a><a name="en-us_topic_0183293567_b11756122632619"></a>[none, host, container:&lt;containerID&gt;]</strong>: <strong id="en-us_topic_0183293567_b1475702662610"><a name="en-us_topic_0183293567_b1475702662610"></a><a name="en-us_topic_0183293567_b1475702662610"></a>none</strong> indicates that the namespace is not shared. <strong id="en-us_topic_0183293567_b475762662618"><a name="en-us_topic_0183293567_b475762662618"></a><a name="en-us_topic_0183293567_b475762662618"></a>host</strong> indicates that the namespace is shared with the host. <strong id="en-us_topic_0183293567_b175812261265"><a name="en-us_topic_0183293567_b175812261265"></a><a name="en-us_topic_0183293567_b175812261265"></a>container:&lt;containerID&gt;</strong> indicates that the namespace is shared with the container.</p>
</td>
<td class="cellrowborder" valign="top" width="21.290000000000003%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293567_p108966555117"><a name="en-us_topic_0183293567_p108966555117"></a><a name="en-us_topic_0183293567_p108966555117"></a>No</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183293567_section1734193235916"></a>

If two containers need to share the same PID namespace, add  **--pid container:<containerID\>**  when running the container. For example:

```
isula run -tid --name test_pid busybox sh
isula run -tid --name test --pid container:test_pid busybox sh
```

