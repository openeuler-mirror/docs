# Restricting the Number of Processes or Threads that Can Be Created in a Container<a name="EN-US_TOPIC_0184808084"></a>

## Description<a name="en-us_topic_0183316274_section13350115135310"></a>

You can set parameters to limit the number of processes or threads that can be created in a container.

## **Usage**<a name="en-us_topic_0183316274_section188811239165314"></a>

When creating or running a container, use the  **--pids-limit**  parameter to limit the number of processes or threads that can be created in the container.

## Parameters<a name="en-us_topic_0183316274_section204328722112"></a>

When running the  **create/run**  command, set the  **--pids-limit**  parameter.

<a name="en-us_topic_0183316274_teea6792d7cdc4de6bbec22c6d34a8a56"></a>
<table><thead align="left"><tr id="en-us_topic_0183316274_r461aacfe00054dd09da79ded3d0d5677"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.1"><p id="en-us_topic_0183316274_a4713c2757b4742f1bcfc60cf8f92362b"><a name="en-us_topic_0183316274_a4713c2757b4742f1bcfc60cf8f92362b"></a><a name="en-us_topic_0183316274_a4713c2757b4742f1bcfc60cf8f92362b"></a><strong id="en-us_topic_0183316274_en-us_topic_0075721648_b576494217460"><a name="en-us_topic_0183316274_en-us_topic_0075721648_b576494217460"></a><a name="en-us_topic_0183316274_en-us_topic_0075721648_b576494217460"></a>Parameter</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="en-us_topic_0183316274_en-us_topic_0075721648_p349275174212"><a name="en-us_topic_0183316274_en-us_topic_0075721648_p349275174212"></a><a name="en-us_topic_0183316274_en-us_topic_0075721648_p349275174212"></a><strong id="en-us_topic_0183316274_ac040c826773e4b99805cc38e76ea34ab"><a name="en-us_topic_0183316274_ac040c826773e4b99805cc38e76ea34ab"></a><a name="en-us_topic_0183316274_ac040c826773e4b99805cc38e76ea34ab"></a>Description</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.3"><p id="en-us_topic_0183316274_a4d0aaa96c3b242aca9d2c22e494195f2"><a name="en-us_topic_0183316274_a4d0aaa96c3b242aca9d2c22e494195f2"></a><a name="en-us_topic_0183316274_a4d0aaa96c3b242aca9d2c22e494195f2"></a>Value Range</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.4"><p id="en-us_topic_0183316274_a4cfdf0a8726d4fd08a52bb078988fc90"><a name="en-us_topic_0183316274_a4cfdf0a8726d4fd08a52bb078988fc90"></a><a name="en-us_topic_0183316274_a4cfdf0a8726d4fd08a52bb078988fc90"></a>Mandatory or Not</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183316274_r771d05a684c4482b930111a484d0e970"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183316274_a668c80e436084fa48ad0a3aa56d627b9"><a name="en-us_topic_0183316274_a668c80e436084fa48ad0a3aa56d627b9"></a><a name="en-us_topic_0183316274_a668c80e436084fa48ad0a3aa56d627b9"></a>--pids-limit</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183316274_ac71045ed552b48d6bcb54a96bc27f690"><a name="en-us_topic_0183316274_ac71045ed552b48d6bcb54a96bc27f690"></a><a name="en-us_topic_0183316274_ac71045ed552b48d6bcb54a96bc27f690"></a>Limits the number of file handles that can be opened in a container.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183316274_aabdc1cfa9ac94f6dafcab0ff0400c2e7"><a name="en-us_topic_0183316274_aabdc1cfa9ac94f6dafcab0ff0400c2e7"></a><a name="en-us_topic_0183316274_aabdc1cfa9ac94f6dafcab0ff0400c2e7"></a>64-bit integer The value can be 0 or a negative number, but cannot be greater than 2 to the power of 63 minus 1. The value 0 or a negative number indicates no limit.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183316274_a0d045bd4e7814cfc9808521c9e3c1b5b"><a name="en-us_topic_0183316274_a0d045bd4e7814cfc9808521c9e3c1b5b"></a><a name="en-us_topic_0183316274_a0d045bd4e7814cfc9808521c9e3c1b5b"></a>No</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183316274_section1734193235916"></a>

When running the container, add  **--pids-limit n**. For example:

```
isula run -ti --pids-limit 1024 busybox bash
```

## **Constraints**<a name="en-us_topic_0183316274_section346363019141"></a>

During container creation, some processes are created temporarily. Therefore, the value cannot be too small. Otherwise, the container may fail to be started. It is recommended that the value be greater than 10.

