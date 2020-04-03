# Common CNIs<a name="EN-US_TOPIC_0184808072"></a>

Common CNIs include CNI network configuration items in the CNI network configuration and pod configuration. These CNIs are visible to users.

-   CNI network configuration items in the CNI network configuration refer to those used to specify the path of the CNI network configuration file, path of the binary file of the CNI network plug-in, and network mode. For details, see  [Table 1](#en-us_topic_0183259146_table18221919589).
-   CNI network configuration items in the pod configuration refer to those used to set the additional CNI network list to which the pod is added. By default, the pod is added only to the default CNI network plane. You can add the pod to multiple CNI network planes as required.

**Table  1**  CNI network configuration items

<a name="en-us_topic_0183259146_table18221919589"></a>
<table><thead align="left"><tr id="en-us_topic_0183259146_row2225191085"><th class="cellrowborder" valign="top" width="30.826917308269174%" id="mcps1.2.5.1.1"><p id="en-us_topic_0183259146_p1022619489"><a name="en-us_topic_0183259146_p1022619489"></a><a name="en-us_topic_0183259146_p1022619489"></a><strong id="en-us_topic_0183259146_b842352706184423"><a name="en-us_topic_0183259146_b842352706184423"></a><a name="en-us_topic_0183259146_b842352706184423"></a>Function</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.328367163283673%" id="mcps1.2.5.1.2"><p id="en-us_topic_0183259146_p1022419587"><a name="en-us_topic_0183259146_p1022419587"></a><a name="en-us_topic_0183259146_p1022419587"></a>Command</p>
</th>
<th class="cellrowborder" valign="top" width="17.028297170282972%" id="mcps1.2.5.1.3"><p id="en-us_topic_0183259146_p3226192815"><a name="en-us_topic_0183259146_p3226192815"></a><a name="en-us_topic_0183259146_p3226192815"></a>Configuration File</p>
</th>
<th class="cellrowborder" valign="top" width="35.816418358164185%" id="mcps1.2.5.1.4"><p id="en-us_topic_0183259146_p1689202318912"><a name="en-us_topic_0183259146_p1689202318912"></a><a name="en-us_topic_0183259146_p1689202318912"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183259146_row822131914815"><td class="cellrowborder" valign="top" width="30.826917308269174%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0183259146_p62201919815"><a name="en-us_topic_0183259146_p62201919815"></a><a name="en-us_topic_0183259146_p62201919815"></a>Path of the binary file of the CNI network plug-in</p>
</td>
<td class="cellrowborder" valign="top" width="16.328367163283673%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0183259146_p15221919480"><a name="en-us_topic_0183259146_p15221919480"></a><a name="en-us_topic_0183259146_p15221919480"></a>--cni-bin-dir</p>
</td>
<td class="cellrowborder" valign="top" width="17.028297170282972%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0183259146_p112261910816"><a name="en-us_topic_0183259146_p112261910816"></a><a name="en-us_topic_0183259146_p112261910816"></a>"cni-bin-dir": "",</p>
</td>
<td class="cellrowborder" valign="top" width="35.816418358164185%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0183259146_p156897237917"><a name="en-us_topic_0183259146_p156897237917"></a><a name="en-us_topic_0183259146_p156897237917"></a>The default value is <strong id="en-us_topic_0183259146_b27602031133415"><a name="en-us_topic_0183259146_b27602031133415"></a><a name="en-us_topic_0183259146_b27602031133415"></a>/opt/cni/bin</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0183259146_row822719788"><td class="cellrowborder" valign="top" width="30.826917308269174%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0183259146_p16221519887"><a name="en-us_topic_0183259146_p16221519887"></a><a name="en-us_topic_0183259146_p16221519887"></a>Path of the CNI network configuration file</p>
</td>
<td class="cellrowborder" valign="top" width="16.328367163283673%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0183259146_p13221191487"><a name="en-us_topic_0183259146_p13221191487"></a><a name="en-us_topic_0183259146_p13221191487"></a>--cni-conf-dir</p>
</td>
<td class="cellrowborder" valign="top" width="17.028297170282972%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0183259146_p192251917811"><a name="en-us_topic_0183259146_p192251917811"></a><a name="en-us_topic_0183259146_p192251917811"></a>"cni-conf-dir": "",</p>
</td>
<td class="cellrowborder" valign="top" width="35.816418358164185%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0183259146_p4689023297"><a name="en-us_topic_0183259146_p4689023297"></a><a name="en-us_topic_0183259146_p4689023297"></a>The system traverses all files with the extension .conf, .conflist, or .json in the directory. The default value is <strong id="en-us_topic_0183259146_b837081743516"><a name="en-us_topic_0183259146_b837081743516"></a><a name="en-us_topic_0183259146_b837081743516"></a>/etc/cni/net.d</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0183259146_row192251915816"><td class="cellrowborder" valign="top" width="30.826917308269174%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0183259146_p42211193817"><a name="en-us_topic_0183259146_p42211193817"></a><a name="en-us_topic_0183259146_p42211193817"></a>Network mode</p>
</td>
<td class="cellrowborder" valign="top" width="16.328367163283673%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0183259146_p17221519484"><a name="en-us_topic_0183259146_p17221519484"></a><a name="en-us_topic_0183259146_p17221519484"></a>--network-plugin</p>
</td>
<td class="cellrowborder" valign="top" width="17.028297170282972%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0183259146_p1122131911812"><a name="en-us_topic_0183259146_p1122131911812"></a><a name="en-us_topic_0183259146_p1122131911812"></a>"network-plugin": "",</p>
</td>
<td class="cellrowborder" valign="top" width="35.816418358164185%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0183259146_p1268916231694"><a name="en-us_topic_0183259146_p1268916231694"></a><a name="en-us_topic_0183259146_p1268916231694"></a>Specifies a network plug-in. The value is a null character by default, indicating that no network configuration is available and the created sandbox has only the loop NIC. The CNI and null characters are supported. Other invalid values will cause iSulad startup failure.</p>
</td>
</tr>
</tbody>
</table>

Additional CNI network configuration mode:

Add the network plane configuration item "network.alpha.kubernetes.io/network" to annotations in the pod configuration file.

The network plane is configured in JSON format, including:

-   **name**: specifies the name of the CNI network plane.
-   **interface**: specifies the name of a network interface.

The following is an example of the CNI network configuration method:

```
"annotations" : {
        "network.alpha.kubernetes.io/network": "{\"name\": \"mynet\", \"interface\": \"eth1\"}"
 }
```

  


