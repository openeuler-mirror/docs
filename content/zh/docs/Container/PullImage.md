# PullImage<a name="ZH-CN_TOPIC_0184808117"></a>

## 接口原型<a name="zh-cn_topic_0183088062_section164301654155514"></a>

```
 rpc PullImage(PullImageRequest) returns (PullImageResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088062_section729211519569"></a>

下载镜像。

## 注意事项<a name="zh-cn_topic_0183088062_section973104418419"></a>

当前支持下载public镜像，使用用户名、密码、auth信息下载私有镜像，不支持authconfig中的server\_address、identity\_token、registry\_token字段。

## 参数<a name="zh-cn_topic_0183088062_section349492895613"></a>

<a name="zh-cn_topic_0183088062_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088062_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088062_p1089154617315"><a name="zh-cn_topic_0183088062_p1089154617315"></a><a name="zh-cn_topic_0183088062_p1089154617315"></a><strong id="zh-cn_topic_0183088062_b98915462314"><a name="zh-cn_topic_0183088062_b98915462314"></a><a name="zh-cn_topic_0183088062_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088062_p128984613319"><a name="zh-cn_topic_0183088062_p128984613319"></a><a name="zh-cn_topic_0183088062_p128984613319"></a><strong id="zh-cn_topic_0183088062_b989164612317"><a name="zh-cn_topic_0183088062_b989164612317"></a><a name="zh-cn_topic_0183088062_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088062_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088062_p0136125811713"><a name="zh-cn_topic_0183088062_p0136125811713"></a><a name="zh-cn_topic_0183088062_p0136125811713"></a><a href="接口-2.md#zh-cn_topic_0182207110_li597891416252">ImageSpec</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088062_p1189846434"><a name="zh-cn_topic_0183088062_p1189846434"></a><a name="zh-cn_topic_0183088062_p1189846434"></a>要下载的镜像名称</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088062_row9786152142810"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088062_p177861927284"><a name="zh-cn_topic_0183088062_p177861927284"></a><a name="zh-cn_topic_0183088062_p177861927284"></a><a href="接口-2.md#zh-cn_topic_0182207110_li1017394413316">AuthConfig</a>  auth</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088062_p20786182142817"><a name="zh-cn_topic_0183088062_p20786182142817"></a><a name="zh-cn_topic_0183088062_p20786182142817"></a>下载私有镜像时的验证信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088062_row1665161618234"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088062_p56519161236"><a name="zh-cn_topic_0183088062_p56519161236"></a><a name="zh-cn_topic_0183088062_p56519161236"></a><a href="接口-2.md#zh-cn_topic_0182207110_li253629701">PodSandboxConfig</a> sandbox_config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088062_p1765216132316"><a name="zh-cn_topic_0183088062_p1765216132316"></a><a name="zh-cn_topic_0183088062_p1765216132316"></a>在Pod上下文中下载镜像（暂不支持）</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0183088062_section10495164611565"></a>

<a name="zh-cn_topic_0183088062_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088062_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088062_p197485518319"><a name="zh-cn_topic_0183088062_p197485518319"></a><a name="zh-cn_topic_0183088062_p197485518319"></a><strong id="zh-cn_topic_0183088062_b77413551933"><a name="zh-cn_topic_0183088062_b77413551933"></a><a name="zh-cn_topic_0183088062_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088062_p374185520310"><a name="zh-cn_topic_0183088062_p374185520310"></a><a name="zh-cn_topic_0183088062_p374185520310"></a><strong id="zh-cn_topic_0183088062_b174125511315"><a name="zh-cn_topic_0183088062_b174125511315"></a><a name="zh-cn_topic_0183088062_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088062_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088062_p157445512318"><a name="zh-cn_topic_0183088062_p157445512318"></a><a name="zh-cn_topic_0183088062_p157445512318"></a>string image_ref</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088062_p14745551137"><a name="zh-cn_topic_0183088062_p14745551137"></a><a name="zh-cn_topic_0183088062_p14745551137"></a>返回已下载镜像信息</p>
</td>
</tr>
</tbody>
</table>

