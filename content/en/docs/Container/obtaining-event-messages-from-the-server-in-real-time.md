# Obtaining Event Messages from the Server in Real Time<a name="EN-US_TOPIC_0231454827"></a>

## **Description**<a name="en-us_topic_0231454831_section13350115135310"></a>

The  **isula events**  command is used to obtain event messages such as container image lifecycle and running event from the server in real time. Only containers whose runtime type is  **lcr**  are supported.

## **Usage**<a name="en-us_topic_0231454831_section188811239165314"></a>

```
isula events [OPTIONS]
```

## Parameter<a name="en-us_topic_0231454831_section4322824135919"></a>

<a name="en-us_topic_0231454831_table45852013111514"></a>
<table><thead align="left"><tr id="en-us_topic_0231454831_row1790211601513"><th class="cellrowborder" valign="top" width="17.333333333333336%" id="mcps1.1.4.1.1"><p id="en-us_topic_0231454831_p7179821161516"><a name="en-us_topic_0231454831_p7179821161516"></a><a name="en-us_topic_0231454831_p7179821161516"></a><strong id="en-us_topic_0231454831_b73521057172918"><a name="en-us_topic_0231454831_b73521057172918"></a><a name="en-us_topic_0231454831_b73521057172918"></a>Command</strong></p>
</th>
<th class="cellrowborder" valign="top" width="39.57575757575758%" id="mcps1.1.4.1.2"><p id="en-us_topic_0231454831_p15179121111511"><a name="en-us_topic_0231454831_p15179121111511"></a><a name="en-us_topic_0231454831_p15179121111511"></a><strong id="en-us_topic_0231454831_b35157585296"><a name="en-us_topic_0231454831_b35157585296"></a><a name="en-us_topic_0231454831_b35157585296"></a>Parameter</strong></p>
</th>
<th class="cellrowborder" valign="top" width="43.09090909090909%" id="mcps1.1.4.1.3"><p id="en-us_topic_0231454831_p10180152151511"><a name="en-us_topic_0231454831_p10180152151511"></a><a name="en-us_topic_0231454831_p10180152151511"></a><strong id="en-us_topic_0231454831_b1552865992913"><a name="en-us_topic_0231454831_b1552865992913"></a><a name="en-us_topic_0231454831_b1552865992913"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0231454831_row89859561117"><td class="cellrowborder" rowspan="3" valign="top" width="17.333333333333336%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0231454831_p69851856411"><a name="en-us_topic_0231454831_p69851856411"></a><a name="en-us_topic_0231454831_p69851856411"></a>events</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0231454831_p549293210212"><a name="en-us_topic_0231454831_p549293210212"></a><a name="en-us_topic_0231454831_p549293210212"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0231454831_p1049213321528"><a name="en-us_topic_0231454831_p1049213321528"></a><a name="en-us_topic_0231454831_p1049213321528"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0231454831_row287455224012"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0231454831_p687465212409"><a name="en-us_topic_0231454831_p687465212409"></a><a name="en-us_topic_0231454831_p687465212409"></a>-n, --name</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0231454831_p1087455204011"><a name="en-us_topic_0231454831_p1087455204011"></a><a name="en-us_topic_0231454831_p1087455204011"></a>Obtains event messages of a specified container.</p>
</td>
</tr>
<tr id="en-us_topic_0231454831_row59371553428"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0231454831_p199381955421"><a name="en-us_topic_0231454831_p199381955421"></a><a name="en-us_topic_0231454831_p199381955421"></a>-S, --since</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0231454831_p16938145144210"><a name="en-us_topic_0231454831_p16938145144210"></a><a name="en-us_topic_0231454831_p16938145144210"></a>Obtains event messages generated since a specified time.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0231454831_section1734193235916"></a>

Run the following command to obtain event messages from the server in real time:

```
$ isula events
```

