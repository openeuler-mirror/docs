# 限制运行时的IO资源<a name="ZH-CN_TOPIC_0184808081"></a>

## 描述<a name="zh-cn_topic_0183293570_section13350115135310"></a>

可以通过参数限制容器中设备读写速度。

## 用法<a name="zh-cn_topic_0183293570_section188811239165314"></a>

isula create/run时使用--device-read-bps/--device-write-bps <device-path\>:<number\>\[<unit\>\]来限制容器中设备的读写速度。

## 参数<a name="zh-cn_topic_0183293570_section204328722112"></a>

create/run时指定--device-read/write-bps参数。

<a name="zh-cn_topic_0183293570_teea6792d7cdc4de6bbec22c6d34a8a56"></a>
<table><thead align="left"><tr id="zh-cn_topic_0183293570_r461aacfe00054dd09da79ded3d0d5677"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.1"><p id="zh-cn_topic_0183293570_a4713c2757b4742f1bcfc60cf8f92362b"><a name="zh-cn_topic_0183293570_a4713c2757b4742f1bcfc60cf8f92362b"></a><a name="zh-cn_topic_0183293570_a4713c2757b4742f1bcfc60cf8f92362b"></a><strong id="zh-cn_topic_0183293570_zh-cn_topic_0075721648_b576494217460"><a name="zh-cn_topic_0183293570_zh-cn_topic_0075721648_b576494217460"></a><a name="zh-cn_topic_0183293570_zh-cn_topic_0075721648_b576494217460"></a>参数项</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="zh-cn_topic_0183293570_zh-cn_topic_0075721648_p349275174212"><a name="zh-cn_topic_0183293570_zh-cn_topic_0075721648_p349275174212"></a><a name="zh-cn_topic_0183293570_zh-cn_topic_0075721648_p349275174212"></a><strong id="zh-cn_topic_0183293570_ac040c826773e4b99805cc38e76ea34ab"><a name="zh-cn_topic_0183293570_ac040c826773e4b99805cc38e76ea34ab"></a><a name="zh-cn_topic_0183293570_ac040c826773e4b99805cc38e76ea34ab"></a>参数说明</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.3"><p id="zh-cn_topic_0183293570_a4d0aaa96c3b242aca9d2c22e494195f2"><a name="zh-cn_topic_0183293570_a4d0aaa96c3b242aca9d2c22e494195f2"></a><a name="zh-cn_topic_0183293570_a4d0aaa96c3b242aca9d2c22e494195f2"></a><strong id="zh-cn_topic_0183293570_a6ca93c7f0c2c44ada8766aa5e9591252"><a name="zh-cn_topic_0183293570_a6ca93c7f0c2c44ada8766aa5e9591252"></a><a name="zh-cn_topic_0183293570_a6ca93c7f0c2c44ada8766aa5e9591252"></a>取值范围</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.4"><p id="zh-cn_topic_0183293570_a4cfdf0a8726d4fd08a52bb078988fc90"><a name="zh-cn_topic_0183293570_a4cfdf0a8726d4fd08a52bb078988fc90"></a><a name="zh-cn_topic_0183293570_a4cfdf0a8726d4fd08a52bb078988fc90"></a><strong id="zh-cn_topic_0183293570_zh-cn_topic_0075721648_b560748317460"><a name="zh-cn_topic_0183293570_zh-cn_topic_0075721648_b560748317460"></a><a name="zh-cn_topic_0183293570_zh-cn_topic_0075721648_b560748317460"></a>是否必选</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0183293570_r771d05a684c4482b930111a484d0e970"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0183293570_p15638101313244"><a name="zh-cn_topic_0183293570_p15638101313244"></a><a name="zh-cn_topic_0183293570_p15638101313244"></a>--device-read-bps/--device-write-bps</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0183293570_p121511444243"><a name="zh-cn_topic_0183293570_p121511444243"></a><a name="zh-cn_topic_0183293570_p121511444243"></a>限制容器中设备的读速度/写速度</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0183293570_p1363841312411"><a name="zh-cn_topic_0183293570_p1363841312411"></a><a name="zh-cn_topic_0183293570_p1363841312411"></a>64位整数(int64)。值为正整数，可以为0，0表示不设置（不限制）；单位可以为空(byte)，KB，MB，GB，TB，PB.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.4 "><p id="zh-cn_topic_0183293570_p11638413142415"><a name="zh-cn_topic_0183293570_p11638413142415"></a><a name="zh-cn_topic_0183293570_p11638413142415"></a>否</p>
</td>
</tr>
</tbody>
</table>

## 示例<a name="zh-cn_topic_0183293570_section1734193235916"></a>

如果需要限制容器内设备的读写速度，在运行容器时，直接加上--device-write-bps/--device-read-bps <device-path\>:<number\>\[<unit\>\]即可，例如，限制容器busybox内设备/dev/sda的读速度为 1MB 每秒，则命令如下：

```
isula run -tid --device-write /dev/sda:1mb busybox sh
```

限制写速度的命令如下：

```
isula run -tid read-bps /dev/sda:1mb busybox sh
```

