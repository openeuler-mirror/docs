# Restricting I/O Resources of a Running Container<a name="EN-US_TOPIC_0184808081"></a>

## Description<a name="en-us_topic_0183293570_section13350115135310"></a>

You can set parameters to limit the read/write speed of devices in the container.

## **Usage**<a name="en-us_topic_0183293570_section188811239165314"></a>

When running the  **isula create/run**  command, you can set  **--device-read-bps/--device-write-bps <device-path\>:<number\>\[<unit\>\]**  to limit the read/write speed of devices in the container.

## Parameters<a name="en-us_topic_0183293570_section204328722112"></a>

When running the  **isula create/run**  command, set  **--device-read/write-bps**.

<a name="en-us_topic_0183293570_teea6792d7cdc4de6bbec22c6d34a8a56"></a>
<table><thead align="left"><tr id="en-us_topic_0183293570_r461aacfe00054dd09da79ded3d0d5677"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.1"><p id="en-us_topic_0183293570_a4713c2757b4742f1bcfc60cf8f92362b"><a name="en-us_topic_0183293570_a4713c2757b4742f1bcfc60cf8f92362b"></a><a name="en-us_topic_0183293570_a4713c2757b4742f1bcfc60cf8f92362b"></a><strong id="en-us_topic_0183293570_en-us_topic_0075721648_b576494217460"><a name="en-us_topic_0183293570_en-us_topic_0075721648_b576494217460"></a><a name="en-us_topic_0183293570_en-us_topic_0075721648_b576494217460"></a>Parameter</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="en-us_topic_0183293570_en-us_topic_0075721648_p349275174212"><a name="en-us_topic_0183293570_en-us_topic_0075721648_p349275174212"></a><a name="en-us_topic_0183293570_en-us_topic_0075721648_p349275174212"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.3"><p id="en-us_topic_0183293570_a4d0aaa96c3b242aca9d2c22e494195f2"><a name="en-us_topic_0183293570_a4d0aaa96c3b242aca9d2c22e494195f2"></a><a name="en-us_topic_0183293570_a4d0aaa96c3b242aca9d2c22e494195f2"></a>Value Range</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.4"><p id="en-us_topic_0183293570_a4cfdf0a8726d4fd08a52bb078988fc90"><a name="en-us_topic_0183293570_a4cfdf0a8726d4fd08a52bb078988fc90"></a><a name="en-us_topic_0183293570_a4cfdf0a8726d4fd08a52bb078988fc90"></a>Mandatory or Not</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183293570_r771d05a684c4482b930111a484d0e970"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293570_p15638101313244"><a name="en-us_topic_0183293570_p15638101313244"></a><a name="en-us_topic_0183293570_p15638101313244"></a>--device-read-bps/--device-write-bps</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293570_p121511444243"><a name="en-us_topic_0183293570_p121511444243"></a><a name="en-us_topic_0183293570_p121511444243"></a>Limits the read/write speed of devices in the container.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293570_p1363841312411"><a name="en-us_topic_0183293570_p1363841312411"></a><a name="en-us_topic_0183293570_p1363841312411"></a>64-bit integer The value is a positive integer. The value can be 0, indicating that no limit is set. The unit can be empty (byte), KB, MB, GB, TB, or PB.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293570_p11638413142415"><a name="en-us_topic_0183293570_p11638413142415"></a><a name="en-us_topic_0183293570_p11638413142415"></a>No</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183293570_section1734193235916"></a>

To limit the read/write speed of devices in the container, add  **--device-write-bps/--device-read-bps <device-path\>:<number\>\[<unit\>\]**  when running the container. For example, to limit the read speed of the device  **/dev/sda**  in the container  **busybox**  to 1 Mbit/s, run the following command:

```
isula run -tid --device-write /dev/sda:1mb busybox sh
```

To limit the write speed, run the following command:

```
isula run -tid read-bps /dev/sda:1mb busybox sh
```

