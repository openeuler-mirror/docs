# iproute相关命令配置IPv4与IPv6时的差异说明<a name="ZH-CN_TOPIC_0183013290"></a>

## 概述<a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_section9133649143112"></a>

由于IPv4和IPv6是两个不同的协议标准，iproute相关命令在使用方法上存在一定的差异。本章节主要梳理iproute包中用户经常使用到命令在IPv4和IPv6使用方面的差异，从而可以更好地指导用户使用iproute包中相关命令。

## IPv6地址的生命周期<a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_section10703103152516"></a>

<a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_table2076913233253"></a>
<table><thead align="left"><tr id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_row583762317252"><th class="cellrowborder" valign="top" width="22%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p2837142362517"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p2837142362517"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p2837142362517"></a><strong id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_b1352931112514"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_b1352931112514"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_b1352931112514"></a>IPv6状态</strong></p>
</th>
<th class="cellrowborder" valign="top" width="78%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p10837823172516"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p10837823172516"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p10837823172516"></a><strong id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_b105031361254"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_b105031361254"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_b105031361254"></a>解释</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_row178371023162518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p38371523152510"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p38371523152510"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p38371523152510"></a>tentative</p>
</td>
<td class="cellrowborder" valign="top" width="78%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p198371423102517"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p198371423102517"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p198371423102517"></a>临时状态：刚添加地址还处于地址重复检测DAD过程</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_row58376230252"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p683716233250"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p683716233250"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p683716233250"></a>preferred</p>
</td>
<td class="cellrowborder" valign="top" width="78%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p19837122311259"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p19837122311259"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p19837122311259"></a>首选状态：完成DAD过程，没有收到相应的NA报文，表示该地址没有冲突。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_row883712382517"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p88371623142516"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p88371623142516"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p88371623142516"></a>deprecated</p>
</td>
<td class="cellrowborder" valign="top" width="78%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p38372023132510"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p38372023132510"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p38372023132510"></a>弃用状态：地址有一定的使用时限（valid_lft和preferred_lft），preferred_lft到期后地址会变化deprecated状态。</p>
<p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p4838102352510"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p4838102352510"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p4838102352510"></a>该状态下的地址不能用于创建新的连接，但是原有的连接可以继续使用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_row16838152313252"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p108383237254"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p108383237254"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p108383237254"></a>invalid</p>
</td>
<td class="cellrowborder" valign="top" width="78%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p19838132372518"><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p19838132372518"></a><a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_p19838132372518"></a>无效状态：使用时限超过preferred_lft一段时间后仍然没有成功进行租约续约，则valid_lft时间到后地址状态会被设置为invalid，表示该地址不可以再被使用。</p>
</td>
</tr>
</tbody>
</table>

其它说明：

-   preferred\_lft：preferred lifetime，地址为首选状态的寿命，preferred\_lft没有到期的地址可以用于正常通信使用，若有多个preferred地址则按照内核具体机制选择地址。
-   valid\_lft： valid lifetime，地址有效的寿命，在\[preferred\_lft, valid\_lft\]时间段内该地址不能被用于新建连接，已经创建的连接继续有效。

## ip link 命令<a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_section188761939123014"></a>

命令：

```
ip link set IFNAME mtu MTU
```

IPv6中PMTU的最小值为1280，如果mtu值设置小于1280则会导致IPv6地址丢失。其它设备无法ping通该IPv6地址。

## ip addr命令<a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_section7725170124014"></a>

1.  命令：

    ```
    ip [-6] addr add IFADDR dev IFNAME
    ```

    添加IPv6地址可以选择添加-6选项也可以不添加，ip addr命令会根据具体地址类型来判断是ipv4地址还是IPv6地址。

    如果指定“-6”选项，但是IFADDR 是ipv4地址则会有错误返回。

2.  命令：

    ```
    ip [-6] addr add IFADDR  dev IFNAME [home|nodad]
    ```

    \[home|nodad\] 选项只针对IPv6地址有效。

    -   home：将该地址指定为RFC 6275中定义的家庭地址。（这是移动节点从家庭链路获取的地址， 是移动节点的永久地址，如果移动节点保持在相同的归属链路中，则各种实体之间的通信照常进行。）
    -   nodad：配置该项（仅限IPv6）添加此地址时不执行重复地址检测DAD（RFC 4862）。如果一台设备上多个接口通过nodad配置了多个相同的IPv6地址，则会按照接口顺序使用该IPv6地址。同一个接口上不能添加一个nodad一个非nodad的相同IPv6地址。因为两个地址是一样的，所以会报“RTNETLINK answers: File exists”。

3.  命令：

    ```
    ip [-6] addr del IFADDR dev IFNAME
    ```

    删除IPv6地址可以选择添加-6选项也可以不添加，ip addr del命令会根据具体地址类型来判断是ipv4地址还是IPv6地址。

4.  命令：

    ```
    ip [-6] addr show dev IFNAME [tentative|-tentative|deprecated|-deprecated|dadfailed|-dadfailed|temporary]
    ```

    -   不指定-6选项，则会同时打印IPv4和IPv6地址。指定-6选项则只打印IPv6地址。
    -   \[tentative|-tentative|deprecated|-deprecated|dadfailed|-dadfailed|temporary\]，这些选项只针对IPv6，可以根据IPv6地址状态对地址进行筛选查看。
        1.  tentative：（仅限IPv6）仅列出尚未通过重复地址检测的地址。
        2.  -tentative：（仅限IPv6）仅列出当前未处于重复地址检测过程中的地址。
        3.  deprecated：（仅限IPv6）仅列出已弃用的地址。
        4.  -deprecated：（仅限IPv6）仅列出未弃用的地址。
        5.  dadfailed：（仅限IPv6）仅列出重复地址检测失败的地址。
        6.  -dadfailed：（仅限IPv6）仅列出未重复地址检测失败的地址。
        7.  temporary：（仅限IPv6）仅列出临时地址



## ip route命令<a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_section165778712419"></a>

1.  命令：

    ```
    ip [-6] route add ROUTE [mtu lock MTU]
    ```

    -   -6选项：添加IPv6路由可以选择添加-6选项也可以不添加，ip route命令会根据具体地址类型来判断是IPv4地址还是IPv6地址。

    -   mtu lock MTU：锁定路由的MTU值。如果不锁定MTU，则MTU的值则可能在PMTUD过程中被内核改变。如果锁定MTU，则不会尝试PMTUD，所有IPv4包都将不设置DF位发出，IPv6包则会按照MTU进行分段处理。

2.  命令：

    ```
    ip [-6] route del ROUTE
    ```

    删除IPv6路由可以选择添加-6选项也可以不添加，ip route命令会根据具体地址类型来判断是IPv4地址还是IPv6地址。


## ip rule命令<a name="zh-cn_topic_0161841798_zh-cn_topic_0159090633_section47311538181212"></a>

1.  命令：

    ```
    ip [-6] rule list
    ```

    -6选项：设置-6选项打印IPv6的策略路由，不设置-6选项打印IPv4的策略路由。所以需要根据具体协议类型来配置-6选项。

2.  命令：

    ```
    ip [-6] rule [add|del] [from|to] ADDR table TABLE pref PREF
    ```

    -6选项：IPv6相关的策略路由表项需要设置-6选项，否则会报错：“Error: Invalid source address.”。相应地，IPv4相关的策略路由表项不可以设置-6选项，否则会报错：“Error: Invalid source address.”。


