# Waiting for a Container to Exit<a name="EN-US_TOPIC_0184808065"></a>

## Description<a name="en-us_topic_0183292673_section13350115135310"></a>

To wait for one or more containers to exit, run the  **isula wait**  command. Only containers whose runtime is of the LCR type are supported.

## **Usage**<a name="en-us_topic_0183292673_section188811239165314"></a>

```
isula wait [OPTIONS] CONTAINER [CONTAINER...]
```

## Parameters<a name="en-us_topic_0183292673_section4322824135919"></a>

The following table lists the parameters supported by the  **wait**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183292673_table5504410103614"></a>
<table><tbody><tr id="en-us_topic_0183292673_row3860413123616"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292673_p1924011817360"><a name="en-us_topic_0183292673_p1924011817360"></a><a name="en-us_topic_0183292673_p1924011817360"></a><strong id="en-us_topic_0183292673_b18240518153611"><a name="en-us_topic_0183292673_b18240518153611"></a><a name="en-us_topic_0183292673_b18240518153611"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292673_p2240131815362"><a name="en-us_topic_0183292673_p2240131815362"></a><a name="en-us_topic_0183292673_p2240131815362"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292673_p824010189363"><a name="en-us_topic_0183292673_p824010189363"></a><a name="en-us_topic_0183292673_p824010189363"></a><strong id="en-us_topic_0183292673_b5240131863612"><a name="en-us_topic_0183292673_b5240131863612"></a><a name="en-us_topic_0183292673_b5240131863612"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183292673_row1877872243318"><td class="cellrowborder" rowspan="2" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292673_p12454121193413"><a name="en-us_topic_0183292673_p12454121193413"></a><a name="en-us_topic_0183292673_p12454121193413"></a><strong id="en-us_topic_0183292673_b10950153316341"><a name="en-us_topic_0183292673_b10950153316341"></a><a name="en-us_topic_0183292673_b10950153316341"></a>wait</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292673_p1949112354334"><a name="en-us_topic_0183292673_p1949112354334"></a><a name="en-us_topic_0183292673_p1949112354334"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292673_p249913515339"><a name="en-us_topic_0183292673_p249913515339"></a><a name="en-us_topic_0183292673_p249913515339"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183292673_row8513715552"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292673_p15141715253"><a name="en-us_topic_0183292673_p15141715253"></a><a name="en-us_topic_0183292673_p15141715253"></a>/</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292673_p1698720587218"><a name="en-us_topic_0183292673_p1698720587218"></a><a name="en-us_topic_0183292673_p1698720587218"></a>Blocks until the container stops and displays the exit code.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183292673_section1734193235916"></a>

Wait for a single container to exit.

```
$ isula wait c75284634beeede3ab86c828790b439d16b6ed8a537550456b1f94eb852c1c0a
 137 
```

