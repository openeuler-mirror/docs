# Starting a Container<a name="EN-US_TOPIC_0184808054"></a>

## Description<a name="en-us_topic_0182207106_section13350115135310"></a>

To start one or more containers, run the  **isula start**  command.

## **Usage**<a name="en-us_topic_0182207106_section188811239165314"></a>

```
isula start [OPTIONS] CONTAINER [CONTAINER...]
```

## Parameters<a name="en-us_topic_0182207106_section4322824135919"></a>

The following table lists the parameters supported by the  **start**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0182207106_table279824718555"></a>
<table><tbody><tr id="en-us_topic_0182207106_row224115355713"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0182207106_p447450105817"><a name="en-us_topic_0182207106_p447450105817"></a><a name="en-us_topic_0182207106_p447450105817"></a><strong id="en-us_topic_0182207106_b1347410105817"><a name="en-us_topic_0182207106_b1347410105817"></a><a name="en-us_topic_0182207106_b1347410105817"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0182207106_p24741801581"><a name="en-us_topic_0182207106_p24741801581"></a><a name="en-us_topic_0182207106_p24741801581"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0182207106_p547411015820"><a name="en-us_topic_0182207106_p547411015820"></a><a name="en-us_topic_0182207106_p547411015820"></a><strong id="en-us_topic_0182207106_b1647430185815"><a name="en-us_topic_0182207106_b1647430185815"></a><a name="en-us_topic_0182207106_b1647430185815"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0182207106_row177619332245"><td class="cellrowborder" rowspan="2" valign="top" width="17.333333333333336%"><p id="en-us_topic_0182207106_p108381258112215"><a name="en-us_topic_0182207106_p108381258112215"></a><a name="en-us_topic_0182207106_p108381258112215"></a><strong id="en-us_topic_0182207106_b3709195112316"><a name="en-us_topic_0182207106_b3709195112316"></a><a name="en-us_topic_0182207106_b3709195112316"></a>start</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0182207106_p1977623312410"><a name="en-us_topic_0182207106_p1977623312410"></a><a name="en-us_topic_0182207106_p1977623312410"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0182207106_p577673362410"><a name="en-us_topic_0182207106_p577673362410"></a><a name="en-us_topic_0182207106_p577673362410"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0182207106_row107521335112317"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207106_p207603617248"><a name="en-us_topic_0182207106_p207603617248"></a><a name="en-us_topic_0182207106_p207603617248"></a>-R, --runtime</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207106_p176218616242"><a name="en-us_topic_0182207106_p176218616242"></a><a name="en-us_topic_0182207106_p176218616242"></a>Container runtime. The parameter value can be <strong id="en-us_topic_0182207106_b4227193592110"><a name="en-us_topic_0182207106_b4227193592110"></a><a name="en-us_topic_0182207106_b4227193592110"></a>lcr</strong>, which is case insensitive. Therefore, <strong id="en-us_topic_0182207106_b1322863532117"><a name="en-us_topic_0182207106_b1322863532117"></a><a name="en-us_topic_0182207106_b1322863532117"></a>LCR</strong> and <strong id="en-us_topic_0182207106_b18228183511215"><a name="en-us_topic_0182207106_b18228183511215"></a><a name="en-us_topic_0182207106_b18228183511215"></a>lcr</strong> are equivalent. </p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0182207106_section1734193235916"></a>

Start a new container.

```
$ isula start fd7376591a9c3d8ee9a14f5d2c2e5255b02cc44cddaabca82170efd4497510e1
```

