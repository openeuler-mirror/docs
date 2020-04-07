# Restarting a Container<a name="EN-US_TOPIC_0184808064"></a>

## Description<a name="en-us_topic_0183292672_section13350115135310"></a>

To restart one or more containers, run the  **isula restart**  command.

## **Usage**<a name="en-us_topic_0183292672_section188811239165314"></a>

```
isula restart [OPTIONS] CONTAINER [CONTAINER...]
```

## Parameters<a name="en-us_topic_0183292672_section4322824135919"></a>

The following table lists the parameters supported by the  **restart**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183292672_table137858361717"></a>
<table><tbody><tr id="en-us_topic_0183292672_row267501311712"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292672_p46961418141710"><a name="en-us_topic_0183292672_p46961418141710"></a><a name="en-us_topic_0183292672_p46961418141710"></a><strong id="en-us_topic_0183292672_b18696181817172"><a name="en-us_topic_0183292672_b18696181817172"></a><a name="en-us_topic_0183292672_b18696181817172"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292672_p1569691821712"><a name="en-us_topic_0183292672_p1569691821712"></a><a name="en-us_topic_0183292672_p1569691821712"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292672_p11697121811175"><a name="en-us_topic_0183292672_p11697121811175"></a><a name="en-us_topic_0183292672_p11697121811175"></a><strong id="en-us_topic_0183292672_b1969761891719"><a name="en-us_topic_0183292672_b1969761891719"></a><a name="en-us_topic_0183292672_b1969761891719"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183292672_row1937135117295"><td class="cellrowborder" rowspan="2" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292672_p151311157514"><a name="en-us_topic_0183292672_p151311157514"></a><a name="en-us_topic_0183292672_p151311157514"></a><strong id="en-us_topic_0183292672_b1764311131331"><a name="en-us_topic_0183292672_b1764311131331"></a><a name="en-us_topic_0183292672_b1764311131331"></a>restart</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292672_p1153405792918"><a name="en-us_topic_0183292672_p1153405792918"></a><a name="en-us_topic_0183292672_p1153405792918"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292672_p12538145719290"><a name="en-us_topic_0183292672_p12538145719290"></a><a name="en-us_topic_0183292672_p12538145719290"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183292672_row351313151155"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292672_p1151310155517"><a name="en-us_topic_0183292672_p1151310155517"></a><a name="en-us_topic_0183292672_p1151310155517"></a>-t, --time</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292672_p1168613218314"><a name="en-us_topic_0183292672_p1168613218314"></a><a name="en-us_topic_0183292672_p1168613218314"></a>Time for graceful stop. If the time exceeds the value of this parameter, the container is forcibly stopped.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0183292672_section945918561235"></a>

-   If the  **t**  parameter is specified and the value of  **t**  is less than 0, ensure that the application in the container can process the stop signal.

    The restart command first calls the stop command to stop the container. Send the SIGTERM signal to the container, and then wait for a period of time \(**t**  entered by the user\). If the container is still running after the period of time, the SIGKILL signal is sent to forcibly kill the container.

-   The meaning of the input parameter  **t**  is as follows:

    **t**  < 0: Wait for graceful stop. This setting is preferred when users are assured that their applications have a proper stop signal processing mechanism.

    **t**  = 0: Do not wait and send  **kill -9**  to the container immediately.

    **t**  \> 0: Wait for a specified period and send  **kill -9**  to the container if the container does not stop within the specified period.

    Therefore, if  **t**  is set to a value less than 0 \(for example,  **t**  = -1\), ensure that the container application correctly processes the SIGTERM signal. If the container ignores this signal, the container will be suspended when the  **isula stop**  command is run.


## Example<a name="en-us_topic_0183292672_section1734193235916"></a>

Restart a container.

```
$ isula restart c75284634beeede3ab86c828790b439d16b6ed8a537550456b1f94eb852c1c0a
 c75284634beeede3ab86c828790b439d16b6ed8a537550456b1f94eb852c1c0a 
```

