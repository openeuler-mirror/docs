# RemoveImage<a name="EN-US_TOPIC_0184808118"></a>

## Prototype<a name="en-us_topic_0183088063_section164301654155514"></a>

```
rpc RemoveImage(RemoveImageRequest) returns (RemoveImageResponse) {}
```

## Description<a name="en-us_topic_0183088063_section729211519569"></a>

This API is used to delete specified images.

## Precautions<a name="en-us_topic_0183088063_section973104418419"></a>

This is a unified API. Since embedded images do not comply with the OCI image specifications and do not contain required fields, you cannot delete embedded images by using this API and the image ID.

## Parameters<a name="en-us_topic_0183088063_section349492895613"></a>

<a name="en-us_topic_0183088063_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088063_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088063_p1089154617315"><a name="en-us_topic_0183088063_p1089154617315"></a><a name="en-us_topic_0183088063_p1089154617315"></a><strong id="en-us_topic_0183088063_b0623851105017"><a name="en-us_topic_0183088063_b0623851105017"></a><a name="en-us_topic_0183088063_b0623851105017"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088063_p128984613319"><a name="en-us_topic_0183088063_p128984613319"></a><a name="en-us_topic_0183088063_p128984613319"></a><strong id="en-us_topic_0183088063_b156951254185014"><a name="en-us_topic_0183088063_b156951254185014"></a><a name="en-us_topic_0183088063_b156951254185014"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088063_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088063_p0136125811713"><a name="en-us_topic_0183088063_p0136125811713"></a><a name="en-us_topic_0183088063_p0136125811713"></a><a href="apis.md#en-us_topic_0182207110_li597891416252">ImageSpec</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088063_p1189846434"><a name="en-us_topic_0183088063_p1189846434"></a><a name="en-us_topic_0183088063_p1189846434"></a>Name or ID of the image to be deleted.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088063_section10495164611565"></a>

None

