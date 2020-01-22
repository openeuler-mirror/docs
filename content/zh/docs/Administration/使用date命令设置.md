# 使用date命令设置<a name="ZH-CN_TOPIC_0182317138"></a>

## 显示当前的日期和时间<a name="zh-cn_topic_0151920961_s2056a6f57e364d2189fafa6dce8e0f7f"></a>

显示当前的日期和时间，命令如下：

```
date
```

默认情况下，date命令显示本地时间。要显示UTC时间，添加\--utc或-u参数：

```
date --utc
```

要自定义对应的输出信息格式，添加 +"format" 参数：

```
date +"format"
```

**表 1**  参数说明

<a name="zh-cn_topic_0151920961_t5113feb6bf86416883c941865a536aae"></a>
<table><thead align="left"><tr id="zh-cn_topic_0151920961_r2ad2cb74e72f4a52ab523486d1fb5e23"><th class="cellrowborder" valign="top" width="18.23%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0151920961_a995c5cbca5ec49f48097e94e0692222e"><a name="zh-cn_topic_0151920961_a995c5cbca5ec49f48097e94e0692222e"></a><a name="zh-cn_topic_0151920961_a995c5cbca5ec49f48097e94e0692222e"></a>格式参数</p>
</th>
<th class="cellrowborder" valign="top" width="81.77%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0151920961_a2c082d7678c14c54acae9c32cb46efa9"><a name="zh-cn_topic_0151920961_a2c082d7678c14c54acae9c32cb46efa9"></a><a name="zh-cn_topic_0151920961_a2c082d7678c14c54acae9c32cb46efa9"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0151920961_r4bf64ec46df3458db0b40dd2597b96a4"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151920961_a7c84b16430784236af6f428bb03354e6"><a name="zh-cn_topic_0151920961_a7c84b16430784236af6f428bb03354e6"></a><a name="zh-cn_topic_0151920961_a7c84b16430784236af6f428bb03354e6"></a>%H</p>
</td>
<td class="cellrowborder" valign="top" width="81.77%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151920961_af1ad9a0cf0f74e28905916c24e9a624c"><a name="zh-cn_topic_0151920961_af1ad9a0cf0f74e28905916c24e9a624c"></a><a name="zh-cn_topic_0151920961_af1ad9a0cf0f74e28905916c24e9a624c"></a>小时以HH格式（例如 17）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920961_r81bd46c86c484a2d8127ac25f8cd3f84"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151920961_ac75c896629a94f5a948ecf00d9ae846c"><a name="zh-cn_topic_0151920961_ac75c896629a94f5a948ecf00d9ae846c"></a><a name="zh-cn_topic_0151920961_ac75c896629a94f5a948ecf00d9ae846c"></a>%M</p>
</td>
<td class="cellrowborder" valign="top" width="81.77%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151920961_a713b23439f944c7e89dad6ad8fd3a00b"><a name="zh-cn_topic_0151920961_a713b23439f944c7e89dad6ad8fd3a00b"></a><a name="zh-cn_topic_0151920961_a713b23439f944c7e89dad6ad8fd3a00b"></a>分钟以MM格式（例如 37）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920961_r01f5733f51244eb08597f035a86f62d3"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151920961_a83cbeee8d15d4ab19166f8859aca3c94"><a name="zh-cn_topic_0151920961_a83cbeee8d15d4ab19166f8859aca3c94"></a><a name="zh-cn_topic_0151920961_a83cbeee8d15d4ab19166f8859aca3c94"></a>%S</p>
</td>
<td class="cellrowborder" valign="top" width="81.77%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151920961_a198c8d8580fa4d00b3a701f522cf2eb3"><a name="zh-cn_topic_0151920961_a198c8d8580fa4d00b3a701f522cf2eb3"></a><a name="zh-cn_topic_0151920961_a198c8d8580fa4d00b3a701f522cf2eb3"></a>秒以SS格式（例如 25）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920961_r8bdf9b4c58f24f6982fc6b6b3def6ec3"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151920961_a52b3ddb644664af794aed0ceef431eae"><a name="zh-cn_topic_0151920961_a52b3ddb644664af794aed0ceef431eae"></a><a name="zh-cn_topic_0151920961_a52b3ddb644664af794aed0ceef431eae"></a>%d</p>
</td>
<td class="cellrowborder" valign="top" width="81.77%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151920961_a0d60b507d1064efdb930ff4800d11205"><a name="zh-cn_topic_0151920961_a0d60b507d1064efdb930ff4800d11205"></a><a name="zh-cn_topic_0151920961_a0d60b507d1064efdb930ff4800d11205"></a>日期以DD格式（例如 15）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920961_r6156a88a26d14f2f89e6540944718f47"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151920961_a312fb7c0a5ad48dfb2e9b7d17e99c1d9"><a name="zh-cn_topic_0151920961_a312fb7c0a5ad48dfb2e9b7d17e99c1d9"></a><a name="zh-cn_topic_0151920961_a312fb7c0a5ad48dfb2e9b7d17e99c1d9"></a>%m</p>
</td>
<td class="cellrowborder" valign="top" width="81.77%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151920961_a893723adba374d028ebb80fed09bf3e6"><a name="zh-cn_topic_0151920961_a893723adba374d028ebb80fed09bf3e6"></a><a name="zh-cn_topic_0151920961_a893723adba374d028ebb80fed09bf3e6"></a>月份以MM格式（例如 07）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920961_r34b505f1fd7741cfb1780a831fbf72d2"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151920961_ac01465841ba64c03ae64788361a25a4e"><a name="zh-cn_topic_0151920961_ac01465841ba64c03ae64788361a25a4e"></a><a name="zh-cn_topic_0151920961_ac01465841ba64c03ae64788361a25a4e"></a>%Y</p>
</td>
<td class="cellrowborder" valign="top" width="81.77%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151920961_a6419efda4cdc4072914756ebb31ec1fa"><a name="zh-cn_topic_0151920961_a6419efda4cdc4072914756ebb31ec1fa"></a><a name="zh-cn_topic_0151920961_a6419efda4cdc4072914756ebb31ec1fa"></a>年份以YYYY格式（例如 2019）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920961_r2a7d4de380fe4194ab6d757429583f60"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151920961_ada7b17d82b7b45668fef67f483b31b33"><a name="zh-cn_topic_0151920961_ada7b17d82b7b45668fef67f483b31b33"></a><a name="zh-cn_topic_0151920961_ada7b17d82b7b45668fef67f483b31b33"></a>%Z</p>
</td>
<td class="cellrowborder" valign="top" width="81.77%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151920961_ac10a70e17c7b4dab86f97d3e460849a8"><a name="zh-cn_topic_0151920961_ac10a70e17c7b4dab86f97d3e460849a8"></a><a name="zh-cn_topic_0151920961_ac10a70e17c7b4dab86f97d3e460849a8"></a>时区缩写（例如CEST）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920961_r65c5b28a951b4f10a0ab67d51ea41c75"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151920961_aaf432a3ed9c548d7bd3b45929723ca72"><a name="zh-cn_topic_0151920961_aaf432a3ed9c548d7bd3b45929723ca72"></a><a name="zh-cn_topic_0151920961_aaf432a3ed9c548d7bd3b45929723ca72"></a>%F</p>
</td>
<td class="cellrowborder" valign="top" width="81.77%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151920961_a7a6917b7cf9a46759467cd140afc17e9"><a name="zh-cn_topic_0151920961_a7a6917b7cf9a46759467cd140afc17e9"></a><a name="zh-cn_topic_0151920961_a7a6917b7cf9a46759467cd140afc17e9"></a>日期整体格式为YYYY-MM-DD（例如 2019-7-15），等同%Y-%m-%d。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920961_r722205ab957549d187a171eb72cb040b"><td class="cellrowborder" valign="top" width="18.23%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151920961_a2e925e19328a49b082150aadec3869a2"><a name="zh-cn_topic_0151920961_a2e925e19328a49b082150aadec3869a2"></a><a name="zh-cn_topic_0151920961_a2e925e19328a49b082150aadec3869a2"></a>%T</p>
</td>
<td class="cellrowborder" valign="top" width="81.77%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151920961_a7dafd8b31b2e47da84f62588b5290fe6"><a name="zh-cn_topic_0151920961_a7dafd8b31b2e47da84f62588b5290fe6"></a><a name="zh-cn_topic_0151920961_a7dafd8b31b2e47da84f62588b5290fe6"></a>时间整体格式为HH:MM:SS（例如 18:30:25），等同%H:%M:%S。</p>
</td>
</tr>
</tbody>
</table>

实际使用示例如下：

-   显示当前的日期和本地时间。

    ```
    $ date 
    2019年 08月 17日 星期六 17:26:34 CST
    ```

-   显示当前的日期和UTC时间。

    ```
    $ date --utc
    2019年 08月 17日 星期六 09:26:18 UTC
    ```

-   自定义date命令的输出。

    ```
    $ date +"%Y-%m-%d %H:%M"
    2019-08-17 17:24
    ```


## 修改时间<a name="zh-cn_topic_0151920961_sa20694fa22894f45ab03a8efe4d06e99"></a>

要修改当前的时间，添加\--set或者-s参数。在root权限下执行如下命令，其中 _HH_  代表小时，_MM_  代表分钟，_SS_  代表秒，请根据实际情况修改：

```
date --set HH:MM:SS
```

默认情况下， date命令设置本地时间。要设置UTC时间，添加\--utc或-u参数：

```
date --set HH:MM:SS --utc
```

例如修改当前的时间为23点26分00秒，在root权限下执行如下命令：

```
# date --set 23:26:00
```

## 修改日期<a name="zh-cn_topic_0151920961_sab41b619059d4a2b9be402a1b10e53e7"></a>

修改当前的日期，添加\--set或者-s参数。在root权限下执行如下命令，其中 _YYYY_ 代表年份，_MM_ 代表月份，_DD_  代表某天，请根据实际情况修改：

```
date --set YYYY-MM-DD
```

例如修改当前的日期为2019年11月2日，命令如下：

```
# date --set 2019-11-02
```

