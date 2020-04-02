# Displaying Resource Usage Statistics of a Container<a name="EN-US_TOPIC_0184808067"></a>

## Description<a name="en-us_topic_0183385024_section13350115135310"></a>

To display resource usage statistics in real time, run the  **isula stats**  command. Only containers whose runtime is of the LCR type are supported.

## **Usage**<a name="en-us_topic_0183385024_section188811239165314"></a>

```
isula stats [OPTIONS] [CONTAINER...]
```

## Parameters<a name="en-us_topic_0183385024_section4322824135919"></a>

The following table lists the parameters supported by the  **stats**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183385024_table17441132195013"></a>
<table><tbody><tr id="en-us_topic_0183385024_row1946936105017"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183385024_p1032317392502"><a name="en-us_topic_0183385024_p1032317392502"></a><a name="en-us_topic_0183385024_p1032317392502"></a><strong id="en-us_topic_0183385024_b1832323911500"><a name="en-us_topic_0183385024_b1832323911500"></a><a name="en-us_topic_0183385024_b1832323911500"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183385024_p432313914504"><a name="en-us_topic_0183385024_p432313914504"></a><a name="en-us_topic_0183385024_p432313914504"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183385024_p17323739195015"><a name="en-us_topic_0183385024_p17323739195015"></a><a name="en-us_topic_0183385024_p17323739195015"></a><strong id="en-us_topic_0183385024_b93238398503"><a name="en-us_topic_0183385024_b93238398503"></a><a name="en-us_topic_0183385024_b93238398503"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183385024_row1369519463615"><td class="cellrowborder" rowspan="3" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183385024_p169613453619"><a name="en-us_topic_0183385024_p169613453619"></a><a name="en-us_topic_0183385024_p169613453619"></a><strong id="en-us_topic_0183385024_b39381010163620"><a name="en-us_topic_0183385024_b39381010163620"></a><a name="en-us_topic_0183385024_b39381010163620"></a>stats</strong></p>
<p id="en-us_topic_0183385024_p134044575366"><a name="en-us_topic_0183385024_p134044575366"></a><a name="en-us_topic_0183385024_p134044575366"></a>&nbsp;&nbsp;</p>
<p id="en-us_topic_0183385024_p256463013371"><a name="en-us_topic_0183385024_p256463013371"></a><a name="en-us_topic_0183385024_p256463013371"></a>&nbsp;&nbsp;</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183385024_p104901417103610"><a name="en-us_topic_0183385024_p104901417103610"></a><a name="en-us_topic_0183385024_p104901417103610"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183385024_p166979433617"><a name="en-us_topic_0183385024_p166979433617"></a><a name="en-us_topic_0183385024_p166979433617"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183385024_row114031757103617"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183385024_p194045578363"><a name="en-us_topic_0183385024_p194045578363"></a><a name="en-us_topic_0183385024_p194045578363"></a>-a, --all</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183385024_p5404457163611"><a name="en-us_topic_0183385024_p5404457163611"></a><a name="en-us_topic_0183385024_p5404457163611"></a>Displays all containers. (By default, only running containers are displayed.)</p>
</td>
</tr>
<tr id="en-us_topic_0183385024_row056333013377"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183385024_p165641030193716"><a name="en-us_topic_0183385024_p165641030193716"></a><a name="en-us_topic_0183385024_p165641030193716"></a>--no-stream</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183385024_p01374203812"><a name="en-us_topic_0183385024_p01374203812"></a><a name="en-us_topic_0183385024_p01374203812"></a>Display the first result only. Only statistics in non-stream mode are displayed.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183385024_section1734193235916"></a>

Display resource usage statistics.

```
$ isula stats --no-stream 21fac8bb9ea8e0be4313c8acea765c8b4798b7d06e043bbab99fc20efa72629c                                                                                 CONTAINER        CPU %      MEM USAGE / LIMIT          MEM %      BLOCK I / O                PIDS      
21fac8bb9ea8     0.00       56.00 KiB / 7.45 GiB       0.00       0.00 B / 0.00 B            1  
```

