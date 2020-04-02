# ImageStatus<a name="EN-US_TOPIC_0184808116"></a>

## Prototype<a name="en-us_topic_0183088061_section164301654155514"></a>

```
rpc ImageStatus(ImageStatusRequest) returns (ImageStatusResponse) {}
```

## Description<a name="en-us_topic_0183088061_section729211519569"></a>

The API is used to query the information about a specified image.

## Precautions<a name="en-us_topic_0183088061_section973104418419"></a>

1.  If the image to be queried does not exist,  **ImageStatusResponse**  is returned and  **Image**  is set to  **nil**  in the return value.
2.  This is a unified API. Since embedded images do not comply with the OCI image specifications and do not contain required fields, the images cannot be queried by using this API.

## Parameters<a name="en-us_topic_0183088061_section349492895613"></a>

<a name="en-us_topic_0183088061_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088061_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088061_p1089154617315"><a name="en-us_topic_0183088061_p1089154617315"></a><a name="en-us_topic_0183088061_p1089154617315"></a><strong id="en-us_topic_0183088061_b20178097437"><a name="en-us_topic_0183088061_b20178097437"></a><a name="en-us_topic_0183088061_b20178097437"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088061_p128984613319"><a name="en-us_topic_0183088061_p128984613319"></a><a name="en-us_topic_0183088061_p128984613319"></a><strong id="en-us_topic_0183088061_b17961101174317"><a name="en-us_topic_0183088061_b17961101174317"></a><a name="en-us_topic_0183088061_b17961101174317"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088061_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088061_p0136125811713"><a name="en-us_topic_0183088061_p0136125811713"></a><a name="en-us_topic_0183088061_p0136125811713"></a><a href="apis.md#en-us_topic_0182207110_li597891416252">ImageSpec</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088061_p1189846434"><a name="en-us_topic_0183088061_p1189846434"></a><a name="en-us_topic_0183088061_p1189846434"></a>Image name.</p>
</td>
</tr>
<tr id="en-us_topic_0183088061_row1665161618234"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088061_p56519161236"><a name="en-us_topic_0183088061_p56519161236"></a><a name="en-us_topic_0183088061_p56519161236"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088061_p1765216132316"><a name="en-us_topic_0183088061_p1765216132316"></a><a name="en-us_topic_0183088061_p1765216132316"></a>Whether to query additional information. This parameter does not take effect now. No additional information is returned.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088061_section10495164611565"></a>

<a name="en-us_topic_0183088061_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088061_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088061_p197485518319"><a name="en-us_topic_0183088061_p197485518319"></a><a name="en-us_topic_0183088061_p197485518319"></a><strong id="en-us_topic_0183088061_b20843152518479"><a name="en-us_topic_0183088061_b20843152518479"></a><a name="en-us_topic_0183088061_b20843152518479"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088061_p374185520310"><a name="en-us_topic_0183088061_p374185520310"></a><a name="en-us_topic_0183088061_p374185520310"></a><strong id="en-us_topic_0183088061_b7391172854714"><a name="en-us_topic_0183088061_b7391172854714"></a><a name="en-us_topic_0183088061_b7391172854714"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088061_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088061_p157445512318"><a name="en-us_topic_0183088061_p157445512318"></a><a name="en-us_topic_0183088061_p157445512318"></a><a href="apis.md#en-us_topic_0182207110_li597891416252">Image</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088061_p14745551137"><a name="en-us_topic_0183088061_p14745551137"></a><a name="en-us_topic_0183088061_p14745551137"></a>Image information.</p>
</td>
</tr>
<tr id="en-us_topic_0183088061_row467913219246"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088061_p46799211246"><a name="en-us_topic_0183088061_p46799211246"></a><a name="en-us_topic_0183088061_p46799211246"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088061_p167918215244"><a name="en-us_topic_0183088061_p167918215244"></a><a name="en-us_topic_0183088061_p167918215244"></a>Additional image information. This parameter does not take effect now. No additional information is returned.</p>
</td>
</tr>
</tbody>
</table>

