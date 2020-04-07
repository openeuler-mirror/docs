# Viewing Process Information in a Container<a name="EN-US_TOPIC_0184808066"></a>

## Description<a name="en-us_topic_0183292674_section13350115135310"></a>

To view process information in a container, run the  **isula top**  command. Only containers whose runtime is of the LCR type are supported.

## **Usage**<a name="en-us_topic_0183292674_section188811239165314"></a>

```
isula top [OPTIONS] container [ps options]
```

## Parameters<a name="en-us_topic_0183292674_section4322824135919"></a>

The following table lists the parameters supported by the  **top**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183292674_table17675155184214"></a>
<table><tbody><tr id="en-us_topic_0183292674_row20270691423"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292674_p3380191384218"><a name="en-us_topic_0183292674_p3380191384218"></a><a name="en-us_topic_0183292674_p3380191384218"></a><strong id="en-us_topic_0183292674_b163807135422"><a name="en-us_topic_0183292674_b163807135422"></a><a name="en-us_topic_0183292674_b163807135422"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292674_p18380313174219"><a name="en-us_topic_0183292674_p18380313174219"></a><a name="en-us_topic_0183292674_p18380313174219"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292674_p17380413164215"><a name="en-us_topic_0183292674_p17380413164215"></a><a name="en-us_topic_0183292674_p17380413164215"></a><strong id="en-us_topic_0183292674_b1838021364210"><a name="en-us_topic_0183292674_b1838021364210"></a><a name="en-us_topic_0183292674_b1838021364210"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183292674_row12517277157"><td class="cellrowborder" rowspan="2" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292674_p225222714151"><a name="en-us_topic_0183292674_p225222714151"></a><a name="en-us_topic_0183292674_p225222714151"></a><strong id="en-us_topic_0183292674_b1048744013165"><a name="en-us_topic_0183292674_b1048744013165"></a><a name="en-us_topic_0183292674_b1048744013165"></a>top</strong></p>
<p id="en-us_topic_0183292674_p16253122751518"><a name="en-us_topic_0183292674_p16253122751518"></a><a name="en-us_topic_0183292674_p16253122751518"></a>&nbsp;&nbsp;</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292674_p999125117202"><a name="en-us_topic_0183292674_p999125117202"></a><a name="en-us_topic_0183292674_p999125117202"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292674_p599115517207"><a name="en-us_topic_0183292674_p599115517207"></a><a name="en-us_topic_0183292674_p599115517207"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183292674_row525202712159"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292674_p20991125110207"><a name="en-us_topic_0183292674_p20991125110207"></a><a name="en-us_topic_0183292674_p20991125110207"></a>/</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292674_p599117517200"><a name="en-us_topic_0183292674_p599117517200"></a><a name="en-us_topic_0183292674_p599117517200"></a>Queries the process information of a running container.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183292674_section1734193235916"></a>

Query process information in a container.

```
$ isula top 21fac8bb9ea8e0be4313c8acea765c8b4798b7d06e043bbab99fc20efa72629c
UID        PID  PPID  C STIME TTY          TIME CMD
root     22166 22163  0 23:04 pts/1    00:00:00 sh
```

