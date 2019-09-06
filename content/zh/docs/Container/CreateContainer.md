# CreateContainer<a name="ZH-CN_TOPIC_0184808099"></a>

```
grpc::Status CreateContainer(grpc::ServerContext *context, const runtime::CreateContainerRequest *request, runtime::CreateContainerResponse *reply) {}
```

## 接口描述<a name="zh-cn_topic_0183088045_section729211519569"></a>

在PodSandbox内创建一个容器

## 注意事项<a name="zh-cn_topic_0183088045_section973104418419"></a>

1. 请求CreateContainerRequest 中的sandbox\_config与传递给RunPodSandboxRequest以创建PodSandbox的配置相同。 它再次传递，只是为了方便参考。 PodSandboxConfig是不可变的，在pod的整个生命周期内保持不变。

2. 由于容器命名以[ContainerMetadata](接口-2.md#zh-cn_topic_0182207110_li17135914132319)中的字段为来源，且以下划线"\_"为分割字符，因此限制metadata中的数据不能包含下划线，否则会出现sandbox运行成功，但无法使用[ListContainers](ListContainers.md#ZH-CN_TOPIC_0184808103)接口查询的现象。

## 参数： CreateContainerRequest<a name="zh-cn_topic_0183088045_section349492895613"></a>

<a name="zh-cn_topic_0183088045_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088045_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088045_p1089154617315"><a name="zh-cn_topic_0183088045_p1089154617315"></a><a name="zh-cn_topic_0183088045_p1089154617315"></a><strong id="zh-cn_topic_0183088045_b98915462314"><a name="zh-cn_topic_0183088045_b98915462314"></a><a name="zh-cn_topic_0183088045_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088045_p128984613319"><a name="zh-cn_topic_0183088045_p128984613319"></a><a name="zh-cn_topic_0183088045_p128984613319"></a><strong id="zh-cn_topic_0183088045_b989164612317"><a name="zh-cn_topic_0183088045_b989164612317"></a><a name="zh-cn_topic_0183088045_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088045_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088045_p114454389351"><a name="zh-cn_topic_0183088045_p114454389351"></a><a name="zh-cn_topic_0183088045_p114454389351"></a>string  pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088045_p16591797361"><a name="zh-cn_topic_0183088045_p16591797361"></a><a name="zh-cn_topic_0183088045_p16591797361"></a>待在其中创建容器的PodSandbox的ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088045_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088045_p1489111122411"><a name="zh-cn_topic_0183088045_p1489111122411"></a><a name="zh-cn_topic_0183088045_p1489111122411"></a><a href="接口-2.md#zh-cn_topic_0182207110_li9517163811284">ContainerConfig</a> config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088045_p780820166266"><a name="zh-cn_topic_0183088045_p780820166266"></a><a name="zh-cn_topic_0183088045_p780820166266"></a>容器的配置信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088045_row4812119101610"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088045_p89345298375"><a name="zh-cn_topic_0183088045_p89345298375"></a><a name="zh-cn_topic_0183088045_p89345298375"></a><a href="接口-2.md#zh-cn_topic_0182207110_li253629701">PodSandboxConfig</a> sandbox_config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088045_p516113378378"><a name="zh-cn_topic_0183088045_p516113378378"></a><a name="zh-cn_topic_0183088045_p516113378378"></a>PodSandbox的配置信息</p>
</td>
</tr>
</tbody>
</table>

## 补充 ：annotations<a name="zh-cn_topic_0183088045_section192641215164616"></a>

可用于存储和检索任意元数据的非结构化键值映射。有一些字段由于cri接口没有提供特定的参数，可通过该字段将参数传入

-   自定义

    <a name="zh-cn_topic_0183088045_table18570435155317"></a>
    <table><tbody><tr id="zh-cn_topic_0183088045_row961273515313"><td class="cellrowborder" valign="top" width="50%"><p id="zh-cn_topic_0183088045_p146121535155310"><a name="zh-cn_topic_0183088045_p146121535155310"></a><a name="zh-cn_topic_0183088045_p146121535155310"></a><strong id="zh-cn_topic_0183088045_b83874913547"><a name="zh-cn_topic_0183088045_b83874913547"></a><a name="zh-cn_topic_0183088045_b83874913547"></a>自定义 key:value</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="50%"><p id="zh-cn_topic_0183088045_p1861233511533"><a name="zh-cn_topic_0183088045_p1861233511533"></a><a name="zh-cn_topic_0183088045_p1861233511533"></a><strong id="zh-cn_topic_0183088045_b461263545314"><a name="zh-cn_topic_0183088045_b461263545314"></a><a name="zh-cn_topic_0183088045_b461263545314"></a>描述</strong>↵</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183088045_row761273525315"><td class="cellrowborder" valign="top" width="50%"><p id="zh-cn_topic_0183088045_p221701745415"><a name="zh-cn_topic_0183088045_p221701745415"></a><a name="zh-cn_topic_0183088045_p221701745415"></a>cgroup.pids.max:int64_t</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%"><p id="zh-cn_topic_0183088045_p1475318795514"><a name="zh-cn_topic_0183088045_p1475318795514"></a><a name="zh-cn_topic_0183088045_p1475318795514"></a>用于限制容器内的进/线程数（set -1 for unlimited）</p>
    </td>
    </tr>
    </tbody>
    </table>


## 返回值 ：CreateContainerResponse<a name="zh-cn_topic_0183088045_section1526020315504"></a>

<a name="zh-cn_topic_0183088045_table1526093165012"></a>
<table><tbody><tr id="zh-cn_topic_0183088045_row926093115015"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088045_p14260143155018"><a name="zh-cn_topic_0183088045_p14260143155018"></a><a name="zh-cn_topic_0183088045_p14260143155018"></a><strong id="zh-cn_topic_0183088045_b10260153118509"><a name="zh-cn_topic_0183088045_b10260153118509"></a><a name="zh-cn_topic_0183088045_b10260153118509"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088045_p62602031155019"><a name="zh-cn_topic_0183088045_p62602031155019"></a><a name="zh-cn_topic_0183088045_p62602031155019"></a><strong id="zh-cn_topic_0183088045_b12601931165016"><a name="zh-cn_topic_0183088045_b12601931165016"></a><a name="zh-cn_topic_0183088045_b12601931165016"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088045_row326093175014"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088045_p3480192112404"><a name="zh-cn_topic_0183088045_p3480192112404"></a><a name="zh-cn_topic_0183088045_p3480192112404"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088045_p14745551137"><a name="zh-cn_topic_0183088045_p14745551137"></a><a name="zh-cn_topic_0183088045_p14745551137"></a>创建完成的容器ID</p>
</td>
</tr>
</tbody>
</table>

