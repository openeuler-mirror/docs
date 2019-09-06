# RunPodSandbox<a name="ZH-CN_TOPIC_0184808094"></a>

## 接口原型<a name="zh-cn_topic_0183088020_section164301654155514"></a>

```
rpc RunPodSandbox(RunPodSandboxRequest) returns (RunPodSandboxResponse) {}
```

## 接口描述<a name="zh-cn_topic_0183088020_section729211519569"></a>

创建和启动一个pod sandbox，若运行成功，sandbox处于ready状态。

## 注意事项<a name="zh-cn_topic_0183088020_section973104418419"></a>

1.  启动sandbox的默认镜像为rnd-dockerhub.huawei.com/library/pause-$\{machine\}:3.0， 其中$\{machine\}为架构，在x86\_64上，machine的值为amd64，在arm64上，machine的值为aarch64，当前rnd-dockerhub仓库上只有amd64和aarch64镜像可供下载，若机器上无此镜像，请确保机器能从rnd-dockerhub下载，若要使用其它镜像，请参考[iSulad部署配置](部署配置.md#ZH-CN_TOPIC_0184808042)中的pod-sandbox-image指定镜像。
2.  由于容器命名以[PodSandboxMetadata](接口-2.md#zh-cn_topic_0182207110_li2359918134912)中的字段为来源，且以下划线"\_"为分割字符，因此限制metadata中的数据不能包含下划线，否则会出现sandbox运行成功，但无法使用[ListPodSandbox](ListPodSandbox.md#ZH-CN_TOPIC_0184808098)接口查询的现象。

## 参数：RunPodSandboxRequest<a name="zh-cn_topic_0183088020_section349492895613"></a>

<a name="zh-cn_topic_0183088020_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088020_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088020_p1089154617315"><a name="zh-cn_topic_0183088020_p1089154617315"></a><a name="zh-cn_topic_0183088020_p1089154617315"></a><strong id="zh-cn_topic_0183088020_b98915462314"><a name="zh-cn_topic_0183088020_b98915462314"></a><a name="zh-cn_topic_0183088020_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088020_p128984613319"><a name="zh-cn_topic_0183088020_p128984613319"></a><a name="zh-cn_topic_0183088020_p128984613319"></a><strong id="zh-cn_topic_0183088020_b989164612317"><a name="zh-cn_topic_0183088020_b989164612317"></a><a name="zh-cn_topic_0183088020_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088020_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088020_p108924616314"><a name="zh-cn_topic_0183088020_p108924616314"></a><a name="zh-cn_topic_0183088020_p108924616314"></a><a href="接口-2.md#zh-cn_topic_0182207110_li253629701">PodSandboxConfig</a> config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088020_p1189846434"><a name="zh-cn_topic_0183088020_p1189846434"></a><a name="zh-cn_topic_0183088020_p1189846434"></a>sandbox的配置，具体参数含义参考左侧链接。</p>
</td>
</tr>
</tbody>
</table>

## 返回值：RunPodSandboxResponse<a name="zh-cn_topic_0183088020_section10495164611565"></a>

<a name="zh-cn_topic_0183088020_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088020_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088020_p197485518319"><a name="zh-cn_topic_0183088020_p197485518319"></a><a name="zh-cn_topic_0183088020_p197485518319"></a><strong id="zh-cn_topic_0183088020_b77413551933"><a name="zh-cn_topic_0183088020_b77413551933"></a><a name="zh-cn_topic_0183088020_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088020_p374185520310"><a name="zh-cn_topic_0183088020_p374185520310"></a><a name="zh-cn_topic_0183088020_p374185520310"></a><strong id="zh-cn_topic_0183088020_b174125511315"><a name="zh-cn_topic_0183088020_b174125511315"></a><a name="zh-cn_topic_0183088020_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088020_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088020_p157445512318"><a name="zh-cn_topic_0183088020_p157445512318"></a><a name="zh-cn_topic_0183088020_p157445512318"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088020_p14745551137"><a name="zh-cn_topic_0183088020_p14745551137"></a><a name="zh-cn_topic_0183088020_p14745551137"></a>成功，返回response数据，具体参数参考左侧链接</p>
</td>
</tr>
</tbody>
</table>

