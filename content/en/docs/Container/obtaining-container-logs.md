# Obtaining Container Logs<a name="EN-US_TOPIC_0184808068"></a>

## Description<a name="en-us_topic_0183385749_section13350115135310"></a>

To obtain container logs, run the  **isula logs**  command. Only containers whose runtime is of the LCR type are supported.

## **Usage**<a name="en-us_topic_0183385749_section188811239165314"></a>

```
isula logs [OPTIONS] [CONTAINER...]
```

## Parameters<a name="en-us_topic_0183385749_section4322824135919"></a>

The following table lists the parameters supported by the  **logs**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183385749_table947315512062"></a>
<table><tbody><tr id="en-us_topic_0183385749_row3520144677"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183385749_p19203188678"><a name="en-us_topic_0183385749_p19203188678"></a><a name="en-us_topic_0183385749_p19203188678"></a><strong id="en-us_topic_0183385749_b820311811711"><a name="en-us_topic_0183385749_b820311811711"></a><a name="en-us_topic_0183385749_b820311811711"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183385749_p11203148076"><a name="en-us_topic_0183385749_p11203148076"></a><a name="en-us_topic_0183385749_p11203148076"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183385749_p1020398773"><a name="en-us_topic_0183385749_p1020398773"></a><a name="en-us_topic_0183385749_p1020398773"></a><strong id="en-us_topic_0183385749_b182031381770"><a name="en-us_topic_0183385749_b182031381770"></a><a name="en-us_topic_0183385749_b182031381770"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183385749_row14697142222913"><td class="cellrowborder" rowspan="3" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183385749_p16819111014516"><a name="en-us_topic_0183385749_p16819111014516"></a><a name="en-us_topic_0183385749_p16819111014516"></a><strong id="en-us_topic_0183385749_b1379012813322"><a name="en-us_topic_0183385749_b1379012813322"></a><a name="en-us_topic_0183385749_b1379012813322"></a>logs</strong></p>
<p id="en-us_topic_0183385749_p8819810351"><a name="en-us_topic_0183385749_p8819810351"></a><a name="en-us_topic_0183385749_p8819810351"></a>&nbsp;&nbsp;</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183385749_p5821430112915"><a name="en-us_topic_0183385749_p5821430112915"></a><a name="en-us_topic_0183385749_p5821430112915"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183385749_p284113015293"><a name="en-us_topic_0183385749_p284113015293"></a><a name="en-us_topic_0183385749_p284113015293"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183385749_row128198101251"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183385749_p108192101852"><a name="en-us_topic_0183385749_p108192101852"></a><a name="en-us_topic_0183385749_p108192101852"></a>-f, --follow</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183385749_p86861211314"><a name="en-us_topic_0183385749_p86861211314"></a><a name="en-us_topic_0183385749_p86861211314"></a>Traces log output.</p>
</td>
</tr>
<tr id="en-us_topic_0183385749_row58191610350"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183385749_p118191110955"><a name="en-us_topic_0183385749_p118191110955"></a><a name="en-us_topic_0183385749_p118191110955"></a>--tail</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183385749_p1568617213316"><a name="en-us_topic_0183385749_p1568617213316"></a><a name="en-us_topic_0183385749_p1568617213316"></a>Displays the number of log records.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0183385749_section18811125219118"></a>

-   By default, the container log function is enabled. To disable this function, run the  **isula create --log-opt disable-log=true**  or  **isula run --log-opt disable-log=true**  command.

## Example<a name="en-us_topic_0183385749_section1734193235916"></a>

Obtain container logs.

```
$ isula logs 6a144695f5dae81e22700a8a78fac28b19f8bf40e8827568b3329c7d4f742406
hello, world
hello, world
hello, world
```

