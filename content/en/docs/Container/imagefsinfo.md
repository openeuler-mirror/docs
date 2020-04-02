# ImageFsInfo<a name="EN-US_TOPIC_0184808119"></a>

## Prototype<a name="en-us_topic_0183088064_section164301654155514"></a>

```
rpc ImageFsInfo(ImageFsInfoRequest) returns (ImageFsInfoResponse) {}
```

## Description<a name="en-us_topic_0183088064_section729211519569"></a>

This API is used to query the information about the file system that stores images.

## Precautions<a name="en-us_topic_0183088064_section973104418419"></a>

Queried results are the file system information in the image metadata.

## Parameters<a name="en-us_topic_0183088064_section349492895613"></a>

None

## Return Values<a name="en-us_topic_0183088064_section10495164611565"></a>

<a name="en-us_topic_0183088064_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088064_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088064_p197485518319"><a name="en-us_topic_0183088064_p197485518319"></a><a name="en-us_topic_0183088064_p197485518319"></a><strong id="en-us_topic_0183088064_b1683151205216"><a name="en-us_topic_0183088064_b1683151205216"></a><a name="en-us_topic_0183088064_b1683151205216"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088064_p374185520310"><a name="en-us_topic_0183088064_p374185520310"></a><a name="en-us_topic_0183088064_p374185520310"></a><strong id="en-us_topic_0183088064_b2069655395210"><a name="en-us_topic_0183088064_b2069655395210"></a><a name="en-us_topic_0183088064_b2069655395210"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088064_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088064_p157445512318"><a name="en-us_topic_0183088064_p157445512318"></a><a name="en-us_topic_0183088064_p157445512318"></a>repeated <a href="apis.md#en-us_topic_0182207110_li1606183118189">FilesystemUsage</a> image_filesystems</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088064_p14745551137"><a name="en-us_topic_0183088064_p14745551137"></a><a name="en-us_topic_0183088064_p14745551137"></a>Information about the file system that stores images.</p>
</td>
</tr>
</tbody>
</table>

