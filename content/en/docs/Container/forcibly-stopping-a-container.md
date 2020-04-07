# Forcibly Stopping a Container<a name="EN-US_TOPIC_0184808057"></a>

## Description<a name="en-us_topic_0183292665_section13350115135310"></a>

To forcibly stop one or more running containers, run the  **isula kill**  command.

## **Usage**<a name="en-us_topic_0183292665_section188811239165314"></a>

```
isula kill [OPTIONS] CONTAINER [CONTAINER...]
```

## Parameters<a name="en-us_topic_0183292665_section4322824135919"></a>

The following table lists the parameters supported by the  **kill**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183292665_table169751130165112"></a>
<table><tbody><tr id="en-us_topic_0183292665_row319819347519"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292665_p29829438516"><a name="en-us_topic_0183292665_p29829438516"></a><a name="en-us_topic_0183292665_p29829438516"></a><strong id="en-us_topic_0183292665_b898274385115"><a name="en-us_topic_0183292665_b898274385115"></a><a name="en-us_topic_0183292665_b898274385115"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292665_p209821543135113"><a name="en-us_topic_0183292665_p209821543135113"></a><a name="en-us_topic_0183292665_p209821543135113"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292665_p79821843145113"><a name="en-us_topic_0183292665_p79821843145113"></a><a name="en-us_topic_0183292665_p79821843145113"></a><strong id="en-us_topic_0183292665_b1598244395110"><a name="en-us_topic_0183292665_b1598244395110"></a><a name="en-us_topic_0183292665_b1598244395110"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183292665_row58305372820"><td class="cellrowborder" rowspan="2" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292665_p118191410451"><a name="en-us_topic_0183292665_p118191410451"></a><a name="en-us_topic_0183292665_p118191410451"></a><strong id="en-us_topic_0183292665_b173181853113112"><a name="en-us_topic_0183292665_b173181853113112"></a><a name="en-us_topic_0183292665_b173181853113112"></a>kill</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292665_p788705815285"><a name="en-us_topic_0183292665_p788705815285"></a><a name="en-us_topic_0183292665_p788705815285"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292665_p98932586284"><a name="en-us_topic_0183292665_p98932586284"></a><a name="en-us_topic_0183292665_p98932586284"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183292665_row1581911017514"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292665_p118190101656"><a name="en-us_topic_0183292665_p118190101656"></a><a name="en-us_topic_0183292665_p118190101656"></a>-s, --signal</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292665_p16861421431"><a name="en-us_topic_0183292665_p16861421431"></a><a name="en-us_topic_0183292665_p16861421431"></a>Signal sent to the container.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183292665_section1734193235916"></a>

Kill a container.

```
$ isula kill fd7376591a9c3d8ee9a14f5d2c2e5255b02cc44cddaabca82170efd4497510e1
fd7376591a9c3d8ee9a14f5d2c2e5255b02cc44cddaabca82170efd4497510e1
```

