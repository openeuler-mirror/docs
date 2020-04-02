# CreateContainer<a name="EN-US_TOPIC_0184808099"></a>

```
grpc::Status CreateContainer(grpc::ServerContext *context, const runtime::CreateContainerRequest *request, runtime::CreateContainerResponse *reply) {}
```

## Description<a name="en-us_topic_0183088045_section729211519569"></a>

This API is used to create a container in the PodSandbox.

## Precautions<a name="en-us_topic_0183088045_section973104418419"></a>

-   **sandbox\_config**  in** CreateContainerRequest**  is the same as the configuration transferred to  **RunPodSandboxRequest**  to create a PodSandbox. It is transferred again for reference only. PodSandboxConfig must remain unchanged throughout the lifecycle of a pod.
-   The container name is obtained from fields in  [ContainerMetadata](apis.md#en-us_topic_0182207110_li17135914132319)  and separated by underscores \(\_\). Therefore, the metadata cannot contain underscores \(\_\). Otherwise, the  [ListContainers](listcontainers.md#EN-US_TOPIC_0184808103)  API cannot be used for query even when the sandbox is running successfully.
-   **CreateContainerRequest**  does not contain the  **runtime\_handler**  field. The runtime type of the container is the same as that of the corresponding sandbox.

## Parameters<a name="en-us_topic_0183088045_section349492895613"></a>

<a name="en-us_topic_0183088045_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088045_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088045_p1089154617315"><a name="en-us_topic_0183088045_p1089154617315"></a><a name="en-us_topic_0183088045_p1089154617315"></a><strong id="en-us_topic_0183088045_b548313557141"><a name="en-us_topic_0183088045_b548313557141"></a><a name="en-us_topic_0183088045_b548313557141"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088045_p128984613319"><a name="en-us_topic_0183088045_p128984613319"></a><a name="en-us_topic_0183088045_p128984613319"></a><strong id="en-us_topic_0183088045_b192751657131410"><a name="en-us_topic_0183088045_b192751657131410"></a><a name="en-us_topic_0183088045_b192751657131410"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088045_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088045_p114454389351"><a name="en-us_topic_0183088045_p114454389351"></a><a name="en-us_topic_0183088045_p114454389351"></a>string  pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088045_p16591797361"><a name="en-us_topic_0183088045_p16591797361"></a><a name="en-us_topic_0183088045_p16591797361"></a>ID of the PodSandbox where a container is to be created.</p>
</td>
</tr>
<tr id="en-us_topic_0183088045_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088045_p1489111122411"><a name="en-us_topic_0183088045_p1489111122411"></a><a name="en-us_topic_0183088045_p1489111122411"></a><a href="apis.md#en-us_topic_0182207110_li9517163811284">ContainerConfig</a> config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088045_p780820166266"><a name="en-us_topic_0183088045_p780820166266"></a><a name="en-us_topic_0183088045_p780820166266"></a>Container configuration information.</p>
</td>
</tr>
<tr id="en-us_topic_0183088045_row4812119101610"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088045_p89345298375"><a name="en-us_topic_0183088045_p89345298375"></a><a name="en-us_topic_0183088045_p89345298375"></a><a href="apis.md#en-us_topic_0182207110_li253629701">PodSandboxConfig</a> sandbox_config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088045_p516113378378"><a name="en-us_topic_0183088045_p516113378378"></a><a name="en-us_topic_0183088045_p516113378378"></a>PodSandbox configuration information.</p>
</td>
</tr>
</tbody>
</table>

## Supplement<a name="en-us_topic_0183088045_section192641215164616"></a>

Unstructured key-value mappings that can be used to store and retrieve any metadata. The field can be used to transfer parameters for the fields for which the CRI does not provide specific parameters.

-   Customize the field:

    <a name="en-us_topic_0183088045_table18570435155317"></a>
    <table><tbody><tr id="en-us_topic_0183088045_row961273515313"><td class="cellrowborder" valign="top" width="50%"><p id="en-us_topic_0183088045_p146121535155310"><a name="en-us_topic_0183088045_p146121535155310"></a><a name="en-us_topic_0183088045_p146121535155310"></a><strong id="en-us_topic_0183088045_b6471318131516"><a name="en-us_topic_0183088045_b6471318131516"></a><a name="en-us_topic_0183088045_b6471318131516"></a>Custom key:value</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="50%"><p id="en-us_topic_0183088045_p1861233511533"><a name="en-us_topic_0183088045_p1861233511533"></a><a name="en-us_topic_0183088045_p1861233511533"></a><strong id="en-us_topic_0183088045_b108031524131516"><a name="en-us_topic_0183088045_b108031524131516"></a><a name="en-us_topic_0183088045_b108031524131516"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0183088045_row761273525315"><td class="cellrowborder" valign="top" width="50%"><p id="en-us_topic_0183088045_p221701745415"><a name="en-us_topic_0183088045_p221701745415"></a><a name="en-us_topic_0183088045_p221701745415"></a>cgroup.pids.max:int64_t</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%"><p id="en-us_topic_0183088045_p1475318795514"><a name="en-us_topic_0183088045_p1475318795514"></a><a name="en-us_topic_0183088045_p1475318795514"></a>Used to limit the number of processes or threads in a container. (Set the parameter to <strong id="en-us_topic_0183088045_b8719165813485"><a name="en-us_topic_0183088045_b8719165813485"></a><a name="en-us_topic_0183088045_b8719165813485"></a>-1</strong> for unlimited number.)</p>
    </td>
    </tr>
    </tbody>
    </table>


## Return Values<a name="en-us_topic_0183088045_section1526020315504"></a>

<a name="en-us_topic_0183088045_table1526093165012"></a>
<table><tbody><tr id="en-us_topic_0183088045_row926093115015"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088045_p14260143155018"><a name="en-us_topic_0183088045_p14260143155018"></a><a name="en-us_topic_0183088045_p14260143155018"></a><strong id="en-us_topic_0183088045_b483554020153"><a name="en-us_topic_0183088045_b483554020153"></a><a name="en-us_topic_0183088045_b483554020153"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088045_p62602031155019"><a name="en-us_topic_0183088045_p62602031155019"></a><a name="en-us_topic_0183088045_p62602031155019"></a><strong id="en-us_topic_0183088045_b10595238191520"><a name="en-us_topic_0183088045_b10595238191520"></a><a name="en-us_topic_0183088045_b10595238191520"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088045_row326093175014"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088045_p3480192112404"><a name="en-us_topic_0183088045_p3480192112404"></a><a name="en-us_topic_0183088045_p3480192112404"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088045_p14745551137"><a name="en-us_topic_0183088045_p14745551137"></a><a name="en-us_topic_0183088045_p14745551137"></a>ID of the created container.</p>
</td>
</tr>
</tbody>
</table>

