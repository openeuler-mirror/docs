# Resuming a Container<a name="EN-US_TOPIC_0224971249"></a>

## Description<a name="en-us_topic_0224966143_section13350115135310"></a>

To resume all processes in a container, run the  **isula unpause**  command. It is the reverse process of  **isula pause**. Only containers whose runtime is of the LCR type are supported.

## **Usage**<a name="en-us_topic_0224966143_section188811239165314"></a>

```
isula unpause CONTAINER [CONTAINER...]
```

## Parameters<a name="en-us_topic_0224966143_section4322824135919"></a>

<a name="en-us_topic_0224966143_table45852013111514"></a>
<table><tbody><tr id="en-us_topic_0224966143_row1790211601513"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0224966143_p7179821161516"><a name="en-us_topic_0224966143_p7179821161516"></a><a name="en-us_topic_0224966143_p7179821161516"></a><strong id="en-us_topic_0224966143_b1521142265515"><a name="en-us_topic_0224966143_b1521142265515"></a><a name="en-us_topic_0224966143_b1521142265515"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0224966143_p15179121111511"><a name="en-us_topic_0224966143_p15179121111511"></a><a name="en-us_topic_0224966143_p15179121111511"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0224966143_p10180152151511"><a name="en-us_topic_0224966143_p10180152151511"></a><a name="en-us_topic_0224966143_p10180152151511"></a><strong id="en-us_topic_0224966143_b1843582414555"><a name="en-us_topic_0224966143_b1843582414555"></a><a name="en-us_topic_0224966143_b1843582414555"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0224966143_row89859561117"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0224966143_p69851856411"><a name="en-us_topic_0224966143_p69851856411"></a><a name="en-us_topic_0224966143_p69851856411"></a>pause</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0224966143_p549293210212"><a name="en-us_topic_0224966143_p549293210212"></a><a name="en-us_topic_0224966143_p549293210212"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0224966143_p1049213321528"><a name="en-us_topic_0224966143_p1049213321528"></a><a name="en-us_topic_0224966143_p1049213321528"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0224966143_section945918561235"></a>

-   Only containers in the paused state can be unpaused.

## Example<a name="en-us_topic_0224966143_section1734193235916"></a>

Resume a paused container.

```
$ isula unpause 8fe25506fb5883b74c2457f453a960d1ae27a24ee45cdd78fb7426d2022a8bac
 8fe25506fb5883b74c2457f453a960d1ae27a24ee45cdd78fb7426d2022a8bac 
```

