# RemovePodSandbox<a name="EN-US_TOPIC_0184808096"></a>

## Prototype<a name="en-us_topic_0183088042_section164301654155514"></a>

```
rpc RemovePodSandbox(RemovePodSandboxRequest) returns (RemovePodSandboxResponse) {}
```

## Description<a name="en-us_topic_0183088042_section729211519569"></a>

This API is used to delete a sandbox. If any running container belongs to the sandbox, the container must be forcibly stopped and deleted. If the sandbox has been deleted, no errors will be returned.

## Precautions<a name="en-us_topic_0183088042_section973104418419"></a>

1. When a sandbox is deleted, network resources of the sandbox are not deleted. Before deleting a pod, you must call StopPodSandbox to clear network resources. Ensure that StopPodSandbox is called at least once before deleting the sandbox.

## Parameters<a name="en-us_topic_0183088042_section349492895613"></a>

<a name="en-us_topic_0183088042_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088042_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088042_p1089154617315"><a name="en-us_topic_0183088042_p1089154617315"></a><a name="en-us_topic_0183088042_p1089154617315"></a><strong id="en-us_topic_0183088042_b1393115217121"><a name="en-us_topic_0183088042_b1393115217121"></a><a name="en-us_topic_0183088042_b1393115217121"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088042_p128984613319"><a name="en-us_topic_0183088042_p128984613319"></a><a name="en-us_topic_0183088042_p128984613319"></a><strong id="en-us_topic_0183088042_b1241655420126"><a name="en-us_topic_0183088042_b1241655420126"></a><a name="en-us_topic_0183088042_b1241655420126"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088042_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088042_p1893714794317"><a name="en-us_topic_0183088042_p1893714794317"></a><a name="en-us_topic_0183088042_p1893714794317"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088042_p1189846434"><a name="en-us_topic_0183088042_p1189846434"></a><a name="en-us_topic_0183088042_p1189846434"></a>Sandbox ID.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088042_section10495164611565"></a>

<a name="en-us_topic_0183088042_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088042_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088042_p197485518319"><a name="en-us_topic_0183088042_p197485518319"></a><a name="en-us_topic_0183088042_p197485518319"></a><strong id="en-us_topic_0183088042_b12209105916124"><a name="en-us_topic_0183088042_b12209105916124"></a><a name="en-us_topic_0183088042_b12209105916124"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088042_p374185520310"><a name="en-us_topic_0183088042_p374185520310"></a><a name="en-us_topic_0183088042_p374185520310"></a><strong id="en-us_topic_0183088042_b1354412113138"><a name="en-us_topic_0183088042_b1354412113138"></a><a name="en-us_topic_0183088042_b1354412113138"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088042_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088042_p1772427114513"><a name="en-us_topic_0183088042_p1772427114513"></a><a name="en-us_topic_0183088042_p1772427114513"></a>None</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088042_p14745551137"><a name="en-us_topic_0183088042_p14745551137"></a><a name="en-us_topic_0183088042_p14745551137"></a>None</p>
</td>
</tr>
</tbody>
</table>

