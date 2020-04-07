# StopPodSandbox<a name="EN-US_TOPIC_0184808095"></a>

## Prototype<a name="en-us_topic_0183088041_section164301654155514"></a>

```
rpc StopPodSandbox(StopPodSandboxRequest) returns (StopPodSandboxResponse) {}
```

## Description<a name="en-us_topic_0183088041_section729211519569"></a>

This API is used to stop PodSandboxes and sandbox containers, and reclaim the network resources \(such as IP addresses\) allocated to a sandbox. If any running container belongs to the sandbox, the container must be forcibly stopped.

## Parameters<a name="en-us_topic_0183088041_section349492895613"></a>

<a name="en-us_topic_0183088041_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088041_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088041_p1089154617315"><a name="en-us_topic_0183088041_p1089154617315"></a><a name="en-us_topic_0183088041_p1089154617315"></a><strong id="en-us_topic_0183088041_b9225135531110"><a name="en-us_topic_0183088041_b9225135531110"></a><a name="en-us_topic_0183088041_b9225135531110"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088041_p128984613319"><a name="en-us_topic_0183088041_p128984613319"></a><a name="en-us_topic_0183088041_p128984613319"></a><strong id="en-us_topic_0183088041_b8601105841120"><a name="en-us_topic_0183088041_b8601105841120"></a><a name="en-us_topic_0183088041_b8601105841120"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088041_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088041_p1893714794317"><a name="en-us_topic_0183088041_p1893714794317"></a><a name="en-us_topic_0183088041_p1893714794317"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088041_p1189846434"><a name="en-us_topic_0183088041_p1189846434"></a><a name="en-us_topic_0183088041_p1189846434"></a>Sandbox ID.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088041_section10495164611565"></a>

<a name="en-us_topic_0183088041_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088041_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088041_p197485518319"><a name="en-us_topic_0183088041_p197485518319"></a><a name="en-us_topic_0183088041_p197485518319"></a><strong id="en-us_topic_0183088041_b1870519310124"><a name="en-us_topic_0183088041_b1870519310124"></a><a name="en-us_topic_0183088041_b1870519310124"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088041_p374185520310"><a name="en-us_topic_0183088041_p374185520310"></a><a name="en-us_topic_0183088041_p374185520310"></a><strong id="en-us_topic_0183088041_b249619618126"><a name="en-us_topic_0183088041_b249619618126"></a><a name="en-us_topic_0183088041_b249619618126"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088041_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088041_p1772427114513"><a name="en-us_topic_0183088041_p1772427114513"></a><a name="en-us_topic_0183088041_p1772427114513"></a>None</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088041_p14745551137"><a name="en-us_topic_0183088041_p14745551137"></a><a name="en-us_topic_0183088041_p14745551137"></a>None</p>
</td>
</tr>
</tbody>
</table>

