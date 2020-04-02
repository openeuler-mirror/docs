# Querying Information About All Containers<a name="EN-US_TOPIC_0184808063"></a>

## Description<a name="en-us_topic_0183292671_section13350115135310"></a>

To query information about all containers, run the  **isula ps**  command.

## **Usage**<a name="en-us_topic_0183292671_section188811239165314"></a>

```
isula ps [OPTIONS]
```

## Parameters<a name="en-us_topic_0183292671_section4322824135919"></a>

The following table lists the parameters supported by the  **ps**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183292671_table116431017151015"></a>
<table><tbody><tr id="en-us_topic_0183292671_row1892743561016"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292671_p647714113100"><a name="en-us_topic_0183292671_p647714113100"></a><a name="en-us_topic_0183292671_p647714113100"></a><strong id="en-us_topic_0183292671_b947764101011"><a name="en-us_topic_0183292671_b947764101011"></a><a name="en-us_topic_0183292671_b947764101011"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292671_p19477184141017"><a name="en-us_topic_0183292671_p19477184141017"></a><a name="en-us_topic_0183292671_p19477184141017"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292671_p14772415101"><a name="en-us_topic_0183292671_p14772415101"></a><a name="en-us_topic_0183292671_p14772415101"></a><strong id="en-us_topic_0183292671_b16477841141015"><a name="en-us_topic_0183292671_b16477841141015"></a><a name="en-us_topic_0183292671_b16477841141015"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183292671_row1051316155514"><td class="cellrowborder" rowspan="6" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292671_p1751361519519"><a name="en-us_topic_0183292671_p1751361519519"></a><a name="en-us_topic_0183292671_p1751361519519"></a><strong id="en-us_topic_0183292671_b17395283215"><a name="en-us_topic_0183292671_b17395283215"></a><a name="en-us_topic_0183292671_b17395283215"></a>ps</strong></p>
<p id="en-us_topic_0183292671_p187333219234"><a name="en-us_topic_0183292671_p187333219234"></a><a name="en-us_topic_0183292671_p187333219234"></a>&nbsp;&nbsp;</p>
<p id="en-us_topic_0183292671_p961891475811"><a name="en-us_topic_0183292671_p961891475811"></a><a name="en-us_topic_0183292671_p961891475811"></a>&nbsp;&nbsp;</p>
<p id="en-us_topic_0183292671_p11287101518"><a name="en-us_topic_0183292671_p11287101518"></a><a name="en-us_topic_0183292671_p11287101518"></a>&nbsp;&nbsp;</p>
<p id="en-us_topic_0183292671_p1354335311522"><a name="en-us_topic_0183292671_p1354335311522"></a><a name="en-us_topic_0183292671_p1354335311522"></a>&nbsp;&nbsp;</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292671_p55132151556"><a name="en-us_topic_0183292671_p55132151556"></a><a name="en-us_topic_0183292671_p55132151556"></a>-a, --all</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292671_p86860216314"><a name="en-us_topic_0183292671_p86860216314"></a><a name="en-us_topic_0183292671_p86860216314"></a>Displays all containers.</p>
</td>
</tr>
<tr id="en-us_topic_0183292671_row1293653612919"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292671_p1950214384295"><a name="en-us_topic_0183292671_p1950214384295"></a><a name="en-us_topic_0183292671_p1950214384295"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292671_p10506113822910"><a name="en-us_topic_0183292671_p10506113822910"></a><a name="en-us_topic_0183292671_p10506113822910"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183292671_row4733729230"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292671_p5733162132318"><a name="en-us_topic_0183292671_p5733162132318"></a><a name="en-us_topic_0183292671_p5733162132318"></a>-q, --quiet</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292671_p473352142318"><a name="en-us_topic_0183292671_p473352142318"></a><a name="en-us_topic_0183292671_p473352142318"></a>Displays only the container name.</p>
</td>
</tr>
<tr id="en-us_topic_0183292671_row11618514105815"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292671_p161812143587"><a name="en-us_topic_0183292671_p161812143587"></a><a name="en-us_topic_0183292671_p161812143587"></a>-f, --filter</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292671_p461891416584"><a name="en-us_topic_0183292671_p461891416584"></a><a name="en-us_topic_0183292671_p461891416584"></a>Adds filter criteria.</p>
</td>
</tr>
<tr id="en-us_topic_0183292671_row12287190155116"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292671_p42872015512"><a name="en-us_topic_0183292671_p42872015512"></a><a name="en-us_topic_0183292671_p42872015512"></a>--format</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292671_p1228717019517"><a name="en-us_topic_0183292671_p1228717019517"></a><a name="en-us_topic_0183292671_p1228717019517"></a>Output format.</p>
</td>
</tr>
<tr id="en-us_topic_0183292671_row1454255310529"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292671_p854305314521"><a name="en-us_topic_0183292671_p854305314521"></a><a name="en-us_topic_0183292671_p854305314521"></a>--no-trunc</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292671_p554315313522"><a name="en-us_topic_0183292671_p554315313522"></a><a name="en-us_topic_0183292671_p554315313522"></a>Do not truncate the container ID.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183292671_section1734193235916"></a>

Query information about all containers.

```
$ isula ps -a

ID           IMAGE                                     STATUS  PID    COMMAND EXIT_CODE RESTART_COUNT STARTAT        FINISHAT    RUNTIME NAMES
e84660aa059c rnd-dockerhub.huawei.com/official/busybox running 304765 "sh"    0         0             13 minutes ago -           lcr     e84660aa059cafb0a77a4002e65cc9186949132b8e57b7f4d76aa22f28fde016
$ isula ps -a --format "table {{.ID}} {{.Image}}" --no-trunc
ID                                                               IMAGE
e84660aa059cafb0a77a4002e65cc9186949132b8e57b7f4d76aa22f28fde016 rnd-dockerhub.huawei.com/official/busybox

```

