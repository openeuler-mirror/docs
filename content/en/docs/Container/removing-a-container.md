# Removing a Container<a name="EN-US_TOPIC_0184808058"></a>

## Description<a name="en-us_topic_0183292666_section13350115135310"></a>

To remove a container, run the  **isula rm**  command.

## **Usage**<a name="en-us_topic_0183292666_section188811239165314"></a>

```
isula rm [OPTIONS] CONTAINER [CONTAINER...]
```

## Parameters<a name="en-us_topic_0183292666_section4322824135919"></a>

The following table lists the parameters supported by the  **rm**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183292666_table1415911244586"></a>
<table><tbody><tr id="en-us_topic_0183292666_row7264628165818"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292666_p135193313581"><a name="en-us_topic_0183292666_p135193313581"></a><a name="en-us_topic_0183292666_p135193313581"></a><strong id="en-us_topic_0183292666_b14511233125813"><a name="en-us_topic_0183292666_b14511233125813"></a><a name="en-us_topic_0183292666_b14511233125813"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292666_p15116335589"><a name="en-us_topic_0183292666_p15116335589"></a><a name="en-us_topic_0183292666_p15116335589"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292666_p651153325816"><a name="en-us_topic_0183292666_p651153325816"></a><a name="en-us_topic_0183292666_p651153325816"></a><strong id="en-us_topic_0183292666_b7511833115817"><a name="en-us_topic_0183292666_b7511833115817"></a><a name="en-us_topic_0183292666_b7511833115817"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183292666_row1551311511520"><td class="cellrowborder" rowspan="3" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292666_p1551301514517"><a name="en-us_topic_0183292666_p1551301514517"></a><a name="en-us_topic_0183292666_p1551301514517"></a><strong id="en-us_topic_0183292666_b232374193312"><a name="en-us_topic_0183292666_b232374193312"></a><a name="en-us_topic_0183292666_b232374193312"></a>rm</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292666_p18513141514517"><a name="en-us_topic_0183292666_p18513141514517"></a><a name="en-us_topic_0183292666_p18513141514517"></a>-f, --force</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292666_p18686121639"><a name="en-us_topic_0183292666_p18686121639"></a><a name="en-us_topic_0183292666_p18686121639"></a>Forcibly removes a running container.</p>
</td>
</tr>
<tr id="en-us_topic_0183292666_row1394151573014"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292666_p445111743017"><a name="en-us_topic_0183292666_p445111743017"></a><a name="en-us_topic_0183292666_p445111743017"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292666_p1145701733014"><a name="en-us_topic_0183292666_p1145701733014"></a><a name="en-us_topic_0183292666_p1145701733014"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183292666_row11287834145116"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292666_p132871334115116"><a name="en-us_topic_0183292666_p132871334115116"></a><a name="en-us_topic_0183292666_p132871334115116"></a>-v, --volume</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292666_p15287103415118"><a name="en-us_topic_0183292666_p15287103415118"></a><a name="en-us_topic_0183292666_p15287103415118"></a>Removes a volume mounted to a container. (Note: Currently, iSulad does not use this function.)</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0183292666_section18811125219118"></a>

-   In normal I/O scenarios, it takes T1 to delete a running container in an empty environment \(with only one container\). In an environment with 200 containers \(without a large number of I/O operations and with normal host I/O\), it takes T2 to delete a running container. The specification of T2 is as follows: T2 = max \{T1 x 3, 5\}s.

## Example<a name="en-us_topic_0183292666_section1734193235916"></a>

Delete a stopped container.

```
$ isula rm fd7376591a9c3d8ee9a14f5d2c2e5255b02cc44cddaabca82170efd4497510e1
fd7376591a9c3d8ee9a14f5d2c2e5255b02cc44cddaabca82170efd4497510e1
```

