# PullImage<a name="EN-US_TOPIC_0184808117"></a>

## Prototype<a name="en-us_topic_0183088062_section164301654155514"></a>

```
 rpc PullImage(PullImageRequest) returns (PullImageResponse) {}
```

## Description<a name="en-us_topic_0183088062_section729211519569"></a>

This API is used to download images.

## Precautions<a name="en-us_topic_0183088062_section973104418419"></a>

Currently, you can download public images, and use the username, password, and auth information to download private images. The  **server\_address**,  **identity\_token**, and  **registry\_token**  fields in  **authconfig**  cannot be configured.

## Parameters<a name="en-us_topic_0183088062_section349492895613"></a>

<a name="en-us_topic_0183088062_table184320467318"></a>
<table><tbody><tr id="en-us_topic_0183088062_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088062_p1089154617315"><a name="en-us_topic_0183088062_p1089154617315"></a><a name="en-us_topic_0183088062_p1089154617315"></a><strong id="en-us_topic_0183088062_b15951141214911"><a name="en-us_topic_0183088062_b15951141214911"></a><a name="en-us_topic_0183088062_b15951141214911"></a>Parameter</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088062_p128984613319"><a name="en-us_topic_0183088062_p128984613319"></a><a name="en-us_topic_0183088062_p128984613319"></a><strong id="en-us_topic_0183088062_b19416415114920"><a name="en-us_topic_0183088062_b19416415114920"></a><a name="en-us_topic_0183088062_b19416415114920"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088062_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088062_p0136125811713"><a name="en-us_topic_0183088062_p0136125811713"></a><a name="en-us_topic_0183088062_p0136125811713"></a><a href="apis.md#en-us_topic_0182207110_li597891416252">ImageSpec</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088062_p1189846434"><a name="en-us_topic_0183088062_p1189846434"></a><a name="en-us_topic_0183088062_p1189846434"></a>Name of the image to be downloaded.</p>
</td>
</tr>
<tr id="en-us_topic_0183088062_row9786152142810"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088062_p177861927284"><a name="en-us_topic_0183088062_p177861927284"></a><a name="en-us_topic_0183088062_p177861927284"></a><a href="apis.md#en-us_topic_0182207110_li1017394413316">AuthConfig</a> auth</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088062_p20786182142817"><a name="en-us_topic_0183088062_p20786182142817"></a><a name="en-us_topic_0183088062_p20786182142817"></a>Verification information for downloading a private image.</p>
</td>
</tr>
<tr id="en-us_topic_0183088062_row1665161618234"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088062_p56519161236"><a name="en-us_topic_0183088062_p56519161236"></a><a name="en-us_topic_0183088062_p56519161236"></a><a href="apis.md#en-us_topic_0182207110_li253629701">PodSandboxConfig</a> sandbox_config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088062_p1765216132316"><a name="en-us_topic_0183088062_p1765216132316"></a><a name="en-us_topic_0183088062_p1765216132316"></a>Whether to download an image in the pod context. This parameter does not take effect now.</p>
</td>
</tr>
</tbody>
</table>

## Return Values<a name="en-us_topic_0183088062_section10495164611565"></a>

<a name="en-us_topic_0183088062_table15296551936"></a>
<table><tbody><tr id="en-us_topic_0183088062_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088062_p197485518319"><a name="en-us_topic_0183088062_p197485518319"></a><a name="en-us_topic_0183088062_p197485518319"></a><strong id="en-us_topic_0183088062_b634915904812"><a name="en-us_topic_0183088062_b634915904812"></a><a name="en-us_topic_0183088062_b634915904812"></a>Return Value</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088062_p374185520310"><a name="en-us_topic_0183088062_p374185520310"></a><a name="en-us_topic_0183088062_p374185520310"></a><strong id="en-us_topic_0183088062_b46159264916"><a name="en-us_topic_0183088062_b46159264916"></a><a name="en-us_topic_0183088062_b46159264916"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183088062_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0183088062_p157445512318"><a name="en-us_topic_0183088062_p157445512318"></a><a name="en-us_topic_0183088062_p157445512318"></a>string image_ref</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0183088062_p14745551137"><a name="en-us_topic_0183088062_p14745551137"></a><a name="en-us_topic_0183088062_p14745551137"></a>Information about the downloaded image.</p>
</td>
</tr>
</tbody>
</table>

