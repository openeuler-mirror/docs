# ListImages<a name="EN-US_TOPIC_0184808115"></a>

## Prototype<a name="en-us_topic_0183088060_section164301654155514"></a>

```
rpc ListImages(ListImagesRequest) returns (ListImagesResponse) {}
```

## Description<a name="en-us_topic_0183088060_section729211519569"></a>

This API is used to list existing image information.

## Precautions<a name="en-us_topic_0183088060_section973104418419"></a>

This is a unified API. You can run the  **cri images**  command to query embedded images. However, embedded images are not standard OCI images. Therefore, query results have the following restrictions:

-   An embedded image does not have an image ID. Therefore, the value of  **image ID**  is the config digest of the image.
-   An embedded image has only config digest, and it does not comply with the OCI image specifications. Therefore, the value of  **digest**  cannot be displayed.

## Parameters<a name="en-us_topic_0183088060_section349492895613"></a>

<a name="en-us_topic_0183088060_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088060_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088060_p1089154617315"><a name="en-us_topic_0183088060_p1089154617315"></a><a name="en-us_topic_0183088060_p1089154617315"></a><strong id="en-us_topic_0183088060_b710175411372"><a name="en-us_topic_0183088060_b710175411372"></a><a name="en-us_topic_0183088060_b710175411372"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088060_p128984613319"><a name="en-us_topic_0183088060_p128984613319"></a><a name="en-us_topic_0183088060_p128984613319"></a><strong id="en-us_topic_0183088060_b17781857203716"><a name="en-us_topic_0183088060_b17781857203716"></a><a name="en-us_topic_0183088060_b17781857203716"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088060_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088060_p0136125811713"><a name="en-us_topic_0183088060_p0136125811713"></a><a name="en-us_topic_0183088060_p0136125811713"></a><a href="apis.md#en-us_topic_0182207110_li597891416252">ImageSpec</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088060_p1189846434"><a name="en-us_topic_0183088060_p1189846434"></a><a name="en-us_topic_0183088060_p1189846434"></a>Name of the image to be filtered.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088060_section10495164611565"></a>

<a name="en-us_topic_0183088060_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088060_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088060_p197485518319"><a name="en-us_topic_0183088060_p197485518319"></a><a name="en-us_topic_0183088060_p197485518319"></a><strong id="en-us_topic_0183088060_b5713121719381"><a name="en-us_topic_0183088060_b5713121719381"></a><a name="en-us_topic_0183088060_b5713121719381"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088060_p374185520310"><a name="en-us_topic_0183088060_p374185520310"></a><a name="en-us_topic_0183088060_p374185520310"></a><strong id="en-us_topic_0183088060_b1616032014382"><a name="en-us_topic_0183088060_b1616032014382"></a><a name="en-us_topic_0183088060_b1616032014382"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088060_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088060_p157445512318"><a name="en-us_topic_0183088060_p157445512318"></a><a name="en-us_topic_0183088060_p157445512318"></a>repeated  <a href="apis.md#en-us_topic_0182207110_li597891416252">Image</a> images</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088060_p14745551137"><a name="en-us_topic_0183088060_p14745551137"></a><a name="en-us_topic_0183088060_p14745551137"></a>Image information list.</p>
</td>
</tr>
</tbody>
</table>

