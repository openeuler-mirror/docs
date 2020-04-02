# Pausing a Container<a name="EN-US_TOPIC_0224971248"></a>

## Description<a name="en-us_topic_0224966142_section13350115135310"></a>

To pause all processes in a container, run the  **isula pause**  command. Only containers whose runtime is of the LCR type are supported.

## **Usage**<a name="en-us_topic_0224966142_section188811239165314"></a>

```
isula pause CONTAINER [CONTAINER...]
```

## Parameters<a name="en-us_topic_0224966142_section4322824135919"></a>

<a name="en-us_topic_0224966142_table45852013111514"></a>
<table><tbody><tr id="en-us_topic_0224966142_row1790211601513"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0224966142_p7179821161516"><a name="en-us_topic_0224966142_p7179821161516"></a><a name="en-us_topic_0224966142_p7179821161516"></a><strong id="en-us_topic_0224966142_b0207151025018"><a name="en-us_topic_0224966142_b0207151025018"></a><a name="en-us_topic_0224966142_b0207151025018"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0224966142_p15179121111511"><a name="en-us_topic_0224966142_p15179121111511"></a><a name="en-us_topic_0224966142_p15179121111511"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0224966142_p10180152151511"><a name="en-us_topic_0224966142_p10180152151511"></a><a name="en-us_topic_0224966142_p10180152151511"></a><strong id="en-us_topic_0224966142_b1121411720505"><a name="en-us_topic_0224966142_b1121411720505"></a><a name="en-us_topic_0224966142_b1121411720505"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0224966142_row89859561117"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0224966142_p69851856411"><a name="en-us_topic_0224966142_p69851856411"></a><a name="en-us_topic_0224966142_p69851856411"></a>pause</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0224966142_p549293210212"><a name="en-us_topic_0224966142_p549293210212"></a><a name="en-us_topic_0224966142_p549293210212"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0224966142_p1049213321528"><a name="en-us_topic_0224966142_p1049213321528"></a><a name="en-us_topic_0224966142_p1049213321528"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0224966142_section945918561235"></a>

-   Only containers in the running state can be paused.
-   After a container is paused, other lifecycle management operations \(such as  **restart**,  **exec**,  **attach**,  **kill**,  **stop**, and  **rm**\) cannot be performed.
-   After a container with health check configurations is paused, the container status changes to unhealthy.

## Example<a name="en-us_topic_0224966142_section1734193235916"></a>

Pause a running container.

```
$ isula pause 8fe25506fb5883b74c2457f453a960d1ae27a24ee45cdd78fb7426d2022a8bac
 8fe25506fb5883b74c2457f453a960d1ae27a24ee45cdd78fb7426d2022a8bac 
```

