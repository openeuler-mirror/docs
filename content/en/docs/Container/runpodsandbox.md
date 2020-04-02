# RunPodSandbox<a name="EN-US_TOPIC_0184808094"></a>

## Prototype<a name="en-us_topic_0183088020_section164301654155514"></a>

```
rpc RunPodSandbox(RunPodSandboxRequest) returns (RunPodSandboxResponse) {}
```

## Description<a name="en-us_topic_0183088020_section729211519569"></a>

This API is used to create and start a PodSandbox. If the PodSandbox is successfully run, the sandbox is in the ready state.

## Precautions<a name="en-us_topic_0183088020_section973104418419"></a>

1.  The default image for starting a sandbox is  **rnd-dockerhub.huawei.com/library/pause-$\{**_machine_**\}:3.0**  where  **$\{**_machine_**\}**  indicates the architecture. On x86\_64, the value of  _machine_  is  **amd64**. On ARM64, the value of  _machine_  is  **aarch64**. Currently, only the  **amd64**  or  **aarch64**  image can be downloaded from the rnd-dockerhub registry. If the image does not exist on the host, ensure that the host can download the image from the rnd-dockerhub registry. If you want to use another image, refer to  **pod-sandbox-image**  in the  _iSulad Deployment Configuration_.
2.  The container name is obtained from fields in  [PodSandboxMetadata](apis.md#en-us_topic_0182207110_li2359918134912)  and separated by underscores \(\_\). Therefore, the metadata cannot contain underscores \(\_\). Otherwise, the  [ListPodSandbox](listpodsandbox.md#EN-US_TOPIC_0184808098)  API cannot be used for query even when the sandbox is running successfully.

## Parameters<a name="en-us_topic_0183088020_section349492895613"></a>

<a name="en-us_topic_0183088020_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088020_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088020_p1089154617315"><a name="en-us_topic_0183088020_p1089154617315"></a><a name="en-us_topic_0183088020_p1089154617315"></a><strong id="en-us_topic_0183088020_b19850130121011"><a name="en-us_topic_0183088020_b19850130121011"></a><a name="en-us_topic_0183088020_b19850130121011"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088020_p128984613319"><a name="en-us_topic_0183088020_p128984613319"></a><a name="en-us_topic_0183088020_p128984613319"></a><strong id="en-us_topic_0183088020_b18538114121020"><a name="en-us_topic_0183088020_b18538114121020"></a><a name="en-us_topic_0183088020_b18538114121020"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088020_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088020_p108924616314"><a name="en-us_topic_0183088020_p108924616314"></a><a name="en-us_topic_0183088020_p108924616314"></a><a href="apis.md#en-us_topic_0182207110_li253629701">PodSandboxConfig</a> config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088020_p1189846434"><a name="en-us_topic_0183088020_p1189846434"></a><a name="en-us_topic_0183088020_p1189846434"></a>Sandbox configuration.</p>
</td>
</tr>
<tr id="en-us_topic_0183088020_row10474111914249"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088020_p547481942417"><a name="en-us_topic_0183088020_p547481942417"></a><a name="en-us_topic_0183088020_p547481942417"></a>string runtime_handler</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088020_p144745192249"><a name="en-us_topic_0183088020_p144745192249"></a><a name="en-us_topic_0183088020_p144745192249"></a>Runtime for the created sandbox. Currently, lcr and kata-runtime are supported.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088020_section10495164611565"></a>

<a name="en-us_topic_0183088020_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088020_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088020_p197485518319"><a name="en-us_topic_0183088020_p197485518319"></a><a name="en-us_topic_0183088020_p197485518319"></a><strong id="en-us_topic_0183088020_b38651243191019"><a name="en-us_topic_0183088020_b38651243191019"></a><a name="en-us_topic_0183088020_b38651243191019"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088020_p374185520310"><a name="en-us_topic_0183088020_p374185520310"></a><a name="en-us_topic_0183088020_p374185520310"></a><strong id="en-us_topic_0183088020_b7121174641017"><a name="en-us_topic_0183088020_b7121174641017"></a><a name="en-us_topic_0183088020_b7121174641017"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088020_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088020_p157445512318"><a name="en-us_topic_0183088020_p157445512318"></a><a name="en-us_topic_0183088020_p157445512318"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088020_p14745551137"><a name="en-us_topic_0183088020_p14745551137"></a><a name="en-us_topic_0183088020_p14745551137"></a>If the operation is successful, the response is returned. </p>
</td>
</tr>
</tbody>
</table>

