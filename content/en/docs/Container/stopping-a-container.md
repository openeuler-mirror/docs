# Stopping a Container<a name="EN-US_TOPIC_0184808056"></a>

## Description<a name="en-us_topic_0183292664_section13350115135310"></a>

To stop a container, run the  **isula stop**  command. The SIGTERM signal is sent to the first process in the container. If the container is not stopped within the specified time \(10s by default\), the SIGKILL signal is sent.

## **Usage**<a name="en-us_topic_0183292664_section188811239165314"></a>

```
isula stop [OPTIONS] CONTAINER [CONTAINER...]
```

## Parameters<a name="en-us_topic_0183292664_section4322824135919"></a>

The following table lists the parameters supported by the  **stop**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183292664_table177040323515"></a>
<table><tbody><tr id="en-us_topic_0183292664_row8712538252"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292664_p588494216519"><a name="en-us_topic_0183292664_p588494216519"></a><a name="en-us_topic_0183292664_p588494216519"></a><strong id="en-us_topic_0183292664_b1688413421253"><a name="en-us_topic_0183292664_b1688413421253"></a><a name="en-us_topic_0183292664_b1688413421253"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292664_p188847428520"><a name="en-us_topic_0183292664_p188847428520"></a><a name="en-us_topic_0183292664_p188847428520"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292664_p178848422515"><a name="en-us_topic_0183292664_p178848422515"></a><a name="en-us_topic_0183292664_p178848422515"></a><strong id="en-us_topic_0183292664_b1288417421351"><a name="en-us_topic_0183292664_b1288417421351"></a><a name="en-us_topic_0183292664_b1288417421351"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183292664_row1674140193219"><td class="cellrowborder" rowspan="3" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292664_p0513915955"><a name="en-us_topic_0183292664_p0513915955"></a><a name="en-us_topic_0183292664_p0513915955"></a><strong id="en-us_topic_0183292664_b985082143420"><a name="en-us_topic_0183292664_b985082143420"></a><a name="en-us_topic_0183292664_b985082143420"></a>stop</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292664_p93955542325"><a name="en-us_topic_0183292664_p93955542325"></a><a name="en-us_topic_0183292664_p93955542325"></a>-f, --force</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292664_p177516011323"><a name="en-us_topic_0183292664_p177516011323"></a><a name="en-us_topic_0183292664_p177516011323"></a>Forcibly stops a running container.</p>
</td>
</tr>
<tr id="en-us_topic_0183292664_row19123163783212"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292664_p6279743153214"><a name="en-us_topic_0183292664_p6279743153214"></a><a name="en-us_topic_0183292664_p6279743153214"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292664_p16284174363216"><a name="en-us_topic_0183292664_p16284174363216"></a><a name="en-us_topic_0183292664_p16284174363216"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183292664_row15138151255"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292664_p3513121512514"><a name="en-us_topic_0183292664_p3513121512514"></a><a name="en-us_topic_0183292664_p3513121512514"></a>-t, --time</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292664_p176864215314"><a name="en-us_topic_0183292664_p176864215314"></a><a name="en-us_topic_0183292664_p176864215314"></a>Time for graceful stop. If the time exceeds the value of this parameter, the container is forcibly stopped.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0183292664_section945918561235"></a>

-   If the  **t**  parameter is specified and the value of  **t**  is less than 0, ensure that the application in the container can process the stop signal.

    Principle of the Stop command: Send the SIGTERM signal to the container, and then wait for a period of time \(**t**  entered by the user\). If the container is still running after the period of time, the SIGKILL signal is sent to forcibly kill the container.


-   The meaning of the input parameter  **t**  is as follows:

    **t**  < 0: Wait for graceful stop. This setting is preferred when users are assured that their applications have a proper stop signal processing mechanism.

    **t**  = 0: Do not wait and send  **kill -9**  to the container immediately.

    **t**  \> 0: Wait for a specified period and send  **kill -9**  to the container if the container does not stop within the specified period.

    Therefore, if  **t**  is set to a value less than 0 \(for example,  **t**  = -1\), ensure that the container application correctly processes the SIGTERM signal. If the container ignores this signal, the container will be suspended when the  **isula stop**  command is run.


## Example<a name="en-us_topic_0183292664_section1734193235916"></a>

Stop a container.

```
$ isula stop fd7376591a9c3d8ee9a14f5d2c2e5255b02cc44cddaabca82170efd4497510e1
fd7376591a9c3d8ee9a14f5d2c2e5255b02cc44cddaabca82170efd4497510e1
```

