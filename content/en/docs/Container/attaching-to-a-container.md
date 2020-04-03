# Attaching to a Container<a name="EN-US_TOPIC_0184808059"></a>

## Description<a name="en-us_topic_0183292667_section13350115135310"></a>

To attach standard input, standard output, and standard error of the current terminal to a running container, run the  **isula attach**  command. Only containers whose runtime is of the LCR type are supported.

## **Usage**<a name="en-us_topic_0183292667_section188811239165314"></a>

```
isula attach [OPTIONS] CONTAINER
```

## Parameters<a name="en-us_topic_0183292667_section4322824135919"></a>

The following table lists the parameters supported by the  **attach**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183292667_table14752840142911"></a>
<table><thead align="left"><tr id="en-us_topic_0183292667_row1561315411186"><th class="cellrowborder" valign="top" width="17.333333333333336%" id="mcps1.2.4.1.1"><p id="en-us_topic_0183292667_p16197118172112"><a name="en-us_topic_0183292667_p16197118172112"></a><a name="en-us_topic_0183292667_p16197118172112"></a><strong id="en-us_topic_0183292667_b121981618182110"><a name="en-us_topic_0183292667_b121981618182110"></a><a name="en-us_topic_0183292667_b121981618182110"></a>Command</strong></p>
</th>
<th class="cellrowborder" valign="top" width="39.57575757575758%" id="mcps1.2.4.1.2"><p id="en-us_topic_0183292667_p131981218102117"><a name="en-us_topic_0183292667_p131981218102117"></a><a name="en-us_topic_0183292667_p131981218102117"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="43.09090909090909%" id="mcps1.2.4.1.3"><p id="en-us_topic_0183292667_p7685132114311"><a name="en-us_topic_0183292667_p7685132114311"></a><a name="en-us_topic_0183292667_p7685132114311"></a><strong id="en-us_topic_0183292667_b238118331471"><a name="en-us_topic_0183292667_b238118331471"></a><a name="en-us_topic_0183292667_b238118331471"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183292667_row378741121914"><td class="cellrowborder" rowspan="3" valign="top" width="17.333333333333336%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0183292667_p2788111171911"><a name="en-us_topic_0183292667_p2788111171911"></a><a name="en-us_topic_0183292667_p2788111171911"></a><strong id="en-us_topic_0183292667_b19827526183312"><a name="en-us_topic_0183292667_b19827526183312"></a><a name="en-us_topic_0183292667_b19827526183312"></a>attach</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0183292667_p440023182210"><a name="en-us_topic_0183292667_p440023182210"></a><a name="en-us_topic_0183292667_p440023182210"></a>--help</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0183292667_p114002313226"><a name="en-us_topic_0183292667_p114002313226"></a><a name="en-us_topic_0183292667_p114002313226"></a>Displays help information.</p>
</td>
</tr>
<tr id="en-us_topic_0183292667_row159823516222"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0183292667_p622945315220"><a name="en-us_topic_0183292667_p622945315220"></a><a name="en-us_topic_0183292667_p622945315220"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0183292667_p11229125362213"><a name="en-us_topic_0183292667_p11229125362213"></a><a name="en-us_topic_0183292667_p11229125362213"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183292667_row14595112722316"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0183292667_p17595162742311"><a name="en-us_topic_0183292667_p17595162742311"></a><a name="en-us_topic_0183292667_p17595162742311"></a>-D, --debug</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0183292667_p1959513279236"><a name="en-us_topic_0183292667_p1959513279236"></a><a name="en-us_topic_0183292667_p1959513279236"></a>Enables the debug mode.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0183292667_section18811125219118"></a>

-   For the native Docker, running the  **attach**  command will directly enter the container. For the iSulad container, you have to run the  **attach**  command and press  **Enter**  to enter the container.

## Example<a name="en-us_topic_0183292667_section1734193235916"></a>

Attach to a running container.

```
$ isula attach fd7376591a9c3d8ee9a14f5d2c2e5255b02cc44cddaabca82170efd4497510e1
/ #
/ #
```

