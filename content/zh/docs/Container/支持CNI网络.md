# 支持CNI网络

<!-- TOC -->
- [支持CNI网络](#支持CNI网络)
    - [描述](#描述)
    - [接口](#接口)
        - [CNI网络配置说明](#CNI网络配置说明)
        - [加入CNI网络列表](#加入CNI网络列表)
        - [退出CNI网络列表](#退出CNI网络列表)
    - [使用限制](#使用限制)
<!-- /TOC -->

## 描述

实现CRI接口对接CNI网络的能力，包括CNI网络配置文件的解析、CNI网络的加入和退出。Pod需要支持网络时，例如通过canal等容器网络插件提供网络能力，那么需要CRI接口能够和canal实现对接，并且调用canal的接口，为Pod提供网络能力。

## 接口

CNI对用户可见的接口，主要涉及CNI网络配置和Pod配置中CNI网络相关的项。

-   CNI网络配置相关的接口，主要是isulad指定CNI网络配置文件所在路径、CNI网络插件二进制文件所在的路径以及使用的网络模式。详情请参见[表1 CNI网络配置接口](#zh-cn_topic_0183259146_table18221919589)。
-   Pod配置中CNI网络相关的项，主要是设置Pod加入的附加CNI网络列表，默认情况Pod只会加入到default CNI网络平面中，可以通过该配置把Pod加入到多个CNI网络平面中。

**表 1**  CNI网络配置接口

<a name="zh-cn_topic_0183259146_table18221919589"></a>
<table><thead align="left"><tr id="zh-cn_topic_0183259146_row2225191085"><th class="cellrowborder" valign="top" width="30.826917308269174%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0183259146_p1022619489"><a name="zh-cn_topic_0183259146_p1022619489"></a><a name="zh-cn_topic_0183259146_p1022619489"></a>&nbsp;&nbsp;</p>
</th>
<th class="cellrowborder" valign="top" width="16.328367163283673%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0183259146_p1022419587"><a name="zh-cn_topic_0183259146_p1022419587"></a><a name="zh-cn_topic_0183259146_p1022419587"></a>命令行</p>
</th>
<th class="cellrowborder" valign="top" width="17.028297170282972%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0183259146_p3226192815"><a name="zh-cn_topic_0183259146_p3226192815"></a><a name="zh-cn_topic_0183259146_p3226192815"></a>配置文件</p>
</th>
<th class="cellrowborder" valign="top" width="35.816418358164185%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0183259146_p1689202318912"><a name="zh-cn_topic_0183259146_p1689202318912"></a><a name="zh-cn_topic_0183259146_p1689202318912"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0183259146_row822131914815"><td class="cellrowborder" valign="top" width="30.826917308269174%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0183259146_p62201919815"><a name="zh-cn_topic_0183259146_p62201919815"></a><a name="zh-cn_topic_0183259146_p62201919815"></a>设置CNI网络插件二进制文件所在路径</p>
</td>
<td class="cellrowborder" valign="top" width="16.328367163283673%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0183259146_p15221919480"><a name="zh-cn_topic_0183259146_p15221919480"></a><a name="zh-cn_topic_0183259146_p15221919480"></a>--cni-bin-dir</p>
</td>
<td class="cellrowborder" valign="top" width="17.028297170282972%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0183259146_p112261910816"><a name="zh-cn_topic_0183259146_p112261910816"></a><a name="zh-cn_topic_0183259146_p112261910816"></a>"cni-bin-dir": "",</p>
</td>
<td class="cellrowborder" valign="top" width="35.816418358164185%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0183259146_p156897237917"><a name="zh-cn_topic_0183259146_p156897237917"></a><a name="zh-cn_topic_0183259146_p156897237917"></a>默认为/opt/cni/bin</p>
</td>
</tr>
<tr id="zh-cn_topic_0183259146_row822719788"><td class="cellrowborder" valign="top" width="30.826917308269174%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0183259146_p16221519887"><a name="zh-cn_topic_0183259146_p16221519887"></a><a name="zh-cn_topic_0183259146_p16221519887"></a>设置CNI网络配置文件所在路径</p>
</td>
<td class="cellrowborder" valign="top" width="16.328367163283673%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0183259146_p13221191487"><a name="zh-cn_topic_0183259146_p13221191487"></a><a name="zh-cn_topic_0183259146_p13221191487"></a>--cni-conf-dir</p>
</td>
<td class="cellrowborder" valign="top" width="17.028297170282972%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0183259146_p192251917811"><a name="zh-cn_topic_0183259146_p192251917811"></a><a name="zh-cn_topic_0183259146_p192251917811"></a>"cni-conf-dir": "",</p>
</td>
<td class="cellrowborder" valign="top" width="35.816418358164185%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0183259146_p4689023297"><a name="zh-cn_topic_0183259146_p4689023297"></a><a name="zh-cn_topic_0183259146_p4689023297"></a>系统会遍历目录下面所有后缀名为".conf"、".conflist"和 ".json"的文件。默认为/etc/cni/net.d</p>
</td>
</tr>
<tr id="zh-cn_topic_0183259146_row192251915816"><td class="cellrowborder" valign="top" width="30.826917308269174%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0183259146_p42211193817"><a name="zh-cn_topic_0183259146_p42211193817"></a><a name="zh-cn_topic_0183259146_p42211193817"></a>指定网络模式</p>
</td>
<td class="cellrowborder" valign="top" width="16.328367163283673%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0183259146_p17221519484"><a name="zh-cn_topic_0183259146_p17221519484"></a><a name="zh-cn_topic_0183259146_p17221519484"></a>--network-plugin</p>
</td>
<td class="cellrowborder" valign="top" width="17.028297170282972%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0183259146_p1122131911812"><a name="zh-cn_topic_0183259146_p1122131911812"></a><a name="zh-cn_topic_0183259146_p1122131911812"></a>"network-plugin": "",</p>
</td>
<td class="cellrowborder" valign="top" width="35.816418358164185%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0183259146_p1268916231694"><a name="zh-cn_topic_0183259146_p1268916231694"></a><a name="zh-cn_topic_0183259146_p1268916231694"></a>指定网络插件，默认为空字符，表示无网络配置，创建的sandbox只有loop网卡。支持cni和空字符，其他非法值会导致isulad启动失败。</p>
</td>
</tr>
</tbody>
</table>

附加CNI网络配置方式：

在Pod的配置文件的"annotations"中，增加一项"network.alpha.kubernetes.io/network": "网络平面配置"；

网络平面配置为json格式，包含两项：

-   name：指定CNI网络平面的名字
-   interface：指定网络接口的名字

附件CNI网络配置方式示例如下：

```
"annotations" : {
        "network.alpha.kubernetes.io/network": "{\"name\": \"mynet\", \"interface\": \"eth1\"}"
 }
```

  




### CNI网络配置说明

CNI网络配置包含两种类型，文件格式都为json：

-   单网络平面配置，以.conf和.json为后缀的文件：具体的配置项请参见"附录 > CNI配置参数" 章节的 "表 CNI单网络配置参数"。
-   多网络平面配置，以.conflist为后缀的文件：具体的配置项请参见"附录 > CNI配置参数" 章节的 "表3 CNI多网络配置参数"。

### 加入CNI网络列表

如果iSulad配置了--network-plugin=cni，而且设置了default网络平面配置，那么在启动Pod的时候，会自动把Pod加入到default网络平面。如果在Pod的配置中配置了附加网络配置，那么启动Pod的时候也会把Pod加入到这些附加网络平面中。

Pod配置中和网络相关的还有port\_mappings项，用于设置Pod的端口映射关系。配置方式如下：

```
"port_mappings":[
     { 
         "protocol": 1,
         "container_port": 80,
         "host_port": 8080
      }
]
```

-   protocal：表示映射使用的协议，支持tcp（用0标识）、udp（用1标识）；
-   container\_port：表示容器映射出去的port；
-   host\_port：表示映射到主机的port。

### 退出CNI网络列表

StopPodSandbox的时候，会调用退出CNI网络的接口，清理网络相关的资源。

>![](public_sys-resources/icon-note.gif) **说明：**   
>1. 在调用RemovePodSandbox接口之前，至少要调用一次StopPodSandbox接口  
>2. StopPodSandbox调用CNI接口失败，可能导致的网络资源残留。  

## 使用限制

-   cniVersion的版本，当前只支持0.3.0和0.3.1。由于后期可能需要支持0.1.0和0.2.0，错误日志打印时，保留了0.1.0和0.2.0的提示信息。
-   name：必须是小写字符、数字、'-'以及'.'组成； '.'和'-'不能作为首字符和尾字符； 而且长度不超过200个字符。
-   配置文件个数不超过200个，单个配置文件大小不超过1MB。
-   扩展之后的参数，需要根据实际网络需求来配置，不需要使用的可选参数可以不写入到netconf.json文件中。

