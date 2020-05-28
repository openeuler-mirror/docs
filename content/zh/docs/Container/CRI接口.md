# CRI接口

<!-- TOC -->
- [CRI接口](#CRI接口)
    - [描述](#描述)
    - [接口](#接口)
        - [Runtime服务](#runtime服务)
            - [RunPodSandbox](#runpodsandbox)
            - [StopPodSandbox](#stoppodsandbox)
            - [RemovePodSandbox](#removepodsandbox)
            - [PodSandboxStatus](#podsandboxstatus)
            - [ListPodSandbox](#listpodsandbox)
            - [CreateContainer](#createcontainer)
            - [StartContainer](#StartContainer)
            - [StopContainer](#StopContainer)
            - [RemoveContainer](#RemoveContainer)
            - [ListContainers](#ListContainers)
            - [ContainerStatus](#containerstatus)
            - [UpdateContainerResources](#updatecontainerresources)
            - [ExecSync](#execsync)
            - [Exec](#exec)
            - [Attach](#attach)
            - [ContainerStats](#containerstats)
            - [ListContainerStats](#listcontainerstats)
            - [UpdateRuntimeConfig](#updateruntimeconfig)
            - [Status](#status)
        - [Image服务](#image服务)
            - [ListImages](#listimages)
            - [ImageStatus](#imagestatus)
            - [PullImage](#pullimage)
            - [RemoveImage](#removeimage)
            - [ImageFsInfo](#imagefsinfo)
    - [约束](#约束)
<!-- /TOC -->

## 描述

CRI API 接口是由kubernetes 推出的容器运行时接口，CRI定义了容器和镜像的服务接口。ISulad使用CRI接口，实现和kubernetes 的对接。

因为容器运行时与镜像的生命周期是彼此隔离的，因此需要定义两个服务。该接口使用[Protocol Buffer](https://developers.google.com/protocol-buffers/)定义，基于[gRPC](https://grpc.io/)。

当前实现CRI版本为v1alpha1版本，官方API描述文件如下：

[https://github.com/kubernetes/kubernetes/blob/release-1.14/pkg/kubelet/apis/cri/runtime/v1alpha2/api.proto](https://github.com/kubernetes/kubernetes/blob/release-1.14/pkg/kubelet/apis/cri/runtime/v1alpha2/api.proto)，

ISulad使用的为pass使用的1.14版本API描述文件，与官方API略有出入，以本文档描述的接口为准。

>![](public_sys-resources/icon-note.gif) **说明：**   
>CRI接口websocket流式服务，服务端侦听地址为127.0.0.1，端口为10350，端口可通过命令行--websocket-server-listening-port参数接口或者daemon.json配置文件进行配置。  

## 接口

各接口中可能用到的参数清单如下，部分参数暂不支持配置，已在配置中标出。

### 接口参数列表

-   <a name="zh-cn_topic_0182207110_li1197211439388"></a>**DNSConfig**

    配置sandbox的DNS服务器和搜索域

    <a name="zh-cn_topic_0182207110_table1375411588598"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row7754658145911"><th class="cellrowborder" valign="top" width="39.44%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p9277611209"><a name="zh-cn_topic_0182207110_p9277611209"></a><a name="zh-cn_topic_0182207110_p9277611209"></a><strong id="zh-cn_topic_0182207110_b20277131203"><a name="zh-cn_topic_0182207110_b20277131203"></a><a name="zh-cn_topic_0182207110_b20277131203"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="60.56%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1927713119014"><a name="zh-cn_topic_0182207110_p1927713119014"></a><a name="zh-cn_topic_0182207110_p1927713119014"></a><strong id="zh-cn_topic_0182207110_b0277412016"><a name="zh-cn_topic_0182207110_b0277412016"></a><a name="zh-cn_topic_0182207110_b0277412016"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row107541958115912"><td class="cellrowborder" valign="top" width="39.44%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p12277181104"><a name="zh-cn_topic_0182207110_p12277181104"></a><a name="zh-cn_topic_0182207110_p12277181104"></a>repeated string servers</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.56%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p17277911402"><a name="zh-cn_topic_0182207110_p17277911402"></a><a name="zh-cn_topic_0182207110_p17277911402"></a>集群的DNS服务器列表</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row175415814599"><td class="cellrowborder" valign="top" width="39.44%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p182771218017"><a name="zh-cn_topic_0182207110_p182771218017"></a><a name="zh-cn_topic_0182207110_p182771218017"></a>repeated string searches</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.56%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p02781014017"><a name="zh-cn_topic_0182207110_p02781014017"></a><a name="zh-cn_topic_0182207110_p02781014017"></a>集群的DNS搜索域列表</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row147541558205912"><td class="cellrowborder" valign="top" width="39.44%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p927810116019"><a name="zh-cn_topic_0182207110_p927810116019"></a><a name="zh-cn_topic_0182207110_p927810116019"></a>repeated string options</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.56%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p92781615013"><a name="zh-cn_topic_0182207110_p92781615013"></a><a name="zh-cn_topic_0182207110_p92781615013"></a>DNS可选项列表，参考<a href="https://linux.die.net/man/5/resolv.conf" target="_blank" rel="noopener noreferrer">https://linux.die.net/man/5/resolv.conf</a></p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li191811740184215"></a>**Protocol**

    协议的enum值列表

    <a name="zh-cn_topic_0182207110_table3751330407"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1775211308012"><th class="cellrowborder" valign="top" width="39.35%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p18470133608"><a name="zh-cn_topic_0182207110_p18470133608"></a><a name="zh-cn_topic_0182207110_p18470133608"></a><strong id="zh-cn_topic_0182207110_b1947019331101"><a name="zh-cn_topic_0182207110_b1947019331101"></a><a name="zh-cn_topic_0182207110_b1947019331101"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="60.650000000000006%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p147011336020"><a name="zh-cn_topic_0182207110_p147011336020"></a><a name="zh-cn_topic_0182207110_p147011336020"></a><strong id="zh-cn_topic_0182207110_b94707338010"><a name="zh-cn_topic_0182207110_b94707338010"></a><a name="zh-cn_topic_0182207110_b94707338010"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row127528301605"><td class="cellrowborder" valign="top" width="39.35%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p14707331901"><a name="zh-cn_topic_0182207110_p14707331901"></a><a name="zh-cn_topic_0182207110_p14707331901"></a>TCP = 0</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.650000000000006%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p3470833904"><a name="zh-cn_topic_0182207110_p3470833904"></a><a name="zh-cn_topic_0182207110_p3470833904"></a>TCP协议</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row6752193015019"><td class="cellrowborder" valign="top" width="39.35%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p24701933605"><a name="zh-cn_topic_0182207110_p24701933605"></a><a name="zh-cn_topic_0182207110_p24701933605"></a>UDP = 1</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.650000000000006%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p04701338015"><a name="zh-cn_topic_0182207110_p04701338015"></a><a name="zh-cn_topic_0182207110_p04701338015"></a>UDP协议</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li01684174215"></a>**PortMapping**

    指定sandbox的端口映射配置

    <a name="zh-cn_topic_0182207110_table11840159704"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1984119591804"><th class="cellrowborder" valign="top" width="39.53%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p522410161117"><a name="zh-cn_topic_0182207110_p522410161117"></a><a name="zh-cn_topic_0182207110_p522410161117"></a><strong id="zh-cn_topic_0182207110_b112241416516"><a name="zh-cn_topic_0182207110_b112241416516"></a><a name="zh-cn_topic_0182207110_b112241416516"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="60.47%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1224716710"><a name="zh-cn_topic_0182207110_p1224716710"></a><a name="zh-cn_topic_0182207110_p1224716710"></a><strong id="zh-cn_topic_0182207110_b162246161814"><a name="zh-cn_topic_0182207110_b162246161814"></a><a name="zh-cn_topic_0182207110_b162246161814"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row7841125911011"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1422414164111"><a name="zh-cn_topic_0182207110_p1422414164111"></a><a name="zh-cn_topic_0182207110_p1422414164111"></a>Protocol</a> protocol</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1822471610113"><a name="zh-cn_topic_0182207110_p1822471610113"></a><a name="zh-cn_topic_0182207110_p1822471610113"></a>端口映射使用的协议</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row118418594010"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p172246161315"><a name="zh-cn_topic_0182207110_p172246161315"></a><a name="zh-cn_topic_0182207110_p172246161315"></a>int32 container_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1022410163114"><a name="zh-cn_topic_0182207110_p1022410163114"></a><a name="zh-cn_topic_0182207110_p1022410163114"></a>容器内的端口号</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row158413591308"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p32241416814"><a name="zh-cn_topic_0182207110_p32241416814"></a><a name="zh-cn_topic_0182207110_p32241416814"></a>int32 host_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1522481618111"><a name="zh-cn_topic_0182207110_p1522481618111"></a><a name="zh-cn_topic_0182207110_p1522481618111"></a>主机上的端口号</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row18841195913010"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p192256164116"><a name="zh-cn_topic_0182207110_p192256164116"></a><a name="zh-cn_topic_0182207110_p192256164116"></a>string host_ip</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p32251616717"><a name="zh-cn_topic_0182207110_p32251616717"></a><a name="zh-cn_topic_0182207110_p32251616717"></a>主机IP地址</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li201899371871"></a>**MountPropagation**

    挂载传播属性的enum列表

    <a name="zh-cn_topic_0182207110_table227603213110"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row19276183217111"><th class="cellrowborder" valign="top" width="39.53%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p1438363819110"><a name="zh-cn_topic_0182207110_p1438363819110"></a><a name="zh-cn_topic_0182207110_p1438363819110"></a><strong id="zh-cn_topic_0182207110_b18383238119"><a name="zh-cn_topic_0182207110_b18383238119"></a><a name="zh-cn_topic_0182207110_b18383238119"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="60.47%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p538314381119"><a name="zh-cn_topic_0182207110_p538314381119"></a><a name="zh-cn_topic_0182207110_p538314381119"></a><strong id="zh-cn_topic_0182207110_b3383338211"><a name="zh-cn_topic_0182207110_b3383338211"></a><a name="zh-cn_topic_0182207110_b3383338211"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row92761932719"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p73843384118"><a name="zh-cn_topic_0182207110_p73843384118"></a><a name="zh-cn_topic_0182207110_p73843384118"></a>PROPAGATION_PRIVATE = 0</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p438419385115"><a name="zh-cn_topic_0182207110_p438419385115"></a><a name="zh-cn_topic_0182207110_p438419385115"></a>无挂载传播属性，即linux中的private</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row827615321111"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1384138718"><a name="zh-cn_topic_0182207110_p1384138718"></a><a name="zh-cn_topic_0182207110_p1384138718"></a>PROPAGATION_HOST_TO_CONTAINER = 1</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p63841381115"><a name="zh-cn_topic_0182207110_p63841381115"></a><a name="zh-cn_topic_0182207110_p63841381115"></a>挂载属性能从host传播到容器中，即linux中的rslave</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row52761232617"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p13848383118"><a name="zh-cn_topic_0182207110_p13848383118"></a><a name="zh-cn_topic_0182207110_p13848383118"></a>PROPAGATION_BIDIRECTIONAL = 2</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1938419381917"><a name="zh-cn_topic_0182207110_p1938419381917"></a><a name="zh-cn_topic_0182207110_p1938419381917"></a>挂载属性能在host和容器中双向传播，即linux中的rshared</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li6779341144216"></a>**Mount**

    Mount指定host上的一个挂载卷挂载到容器中（只支持文件和文件夹\)

    <a name="zh-cn_topic_0182207110_table17165736155515"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row181661364558"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p2818191920"><a name="zh-cn_topic_0182207110_p2818191920"></a><a name="zh-cn_topic_0182207110_p2818191920"></a><strong id="zh-cn_topic_0182207110_b11813191723"><a name="zh-cn_topic_0182207110_b11813191723"></a><a name="zh-cn_topic_0182207110_b11813191723"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1181119422"><a name="zh-cn_topic_0182207110_p1181119422"></a><a name="zh-cn_topic_0182207110_p1181119422"></a><strong id="zh-cn_topic_0182207110_b1787199211"><a name="zh-cn_topic_0182207110_b1787199211"></a><a name="zh-cn_topic_0182207110_b1787199211"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row191661036185516"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p416653615515"><a name="zh-cn_topic_0182207110_p416653615515"></a><a name="zh-cn_topic_0182207110_p416653615515"></a>string container_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p111661536135511"><a name="zh-cn_topic_0182207110_p111661536135511"></a><a name="zh-cn_topic_0182207110_p111661536135511"></a>容器中的路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row3166153612558"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p91664365556"><a name="zh-cn_topic_0182207110_p91664365556"></a><a name="zh-cn_topic_0182207110_p91664365556"></a>string host_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p41666362552"><a name="zh-cn_topic_0182207110_p41666362552"></a><a name="zh-cn_topic_0182207110_p41666362552"></a>主机上的路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row14166173675512"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p12166113655516"><a name="zh-cn_topic_0182207110_p12166113655516"></a><a name="zh-cn_topic_0182207110_p12166113655516"></a>bool readonly</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1316663613554"><a name="zh-cn_topic_0182207110_p1316663613554"></a><a name="zh-cn_topic_0182207110_p1316663613554"></a>是否配置在容器中是只读的， 默认值： false</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row0166183620554"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p10166103615519"><a name="zh-cn_topic_0182207110_p10166103615519"></a><a name="zh-cn_topic_0182207110_p10166103615519"></a>bool selinux_relabel</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p15166143619556"><a name="zh-cn_topic_0182207110_p15166143619556"></a><a name="zh-cn_topic_0182207110_p15166143619556"></a>是否设置SELinux标签（不支持配置）</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row11991253929"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p149911453626"><a name="zh-cn_topic_0182207110_p149911453626"></a><a name="zh-cn_topic_0182207110_p149911453626"></a>MountPropagation</a> propagation</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p599245312212"><a name="zh-cn_topic_0182207110_p599245312212"></a><a name="zh-cn_topic_0182207110_p599245312212"></a>挂载传播属性配置（取值<strong id="zh-cn_topic_0182207110_b11791183964210"><a name="zh-cn_topic_0182207110_b11791183964210"></a><a name="zh-cn_topic_0182207110_b11791183964210"></a>0/1/2</strong>，分别对应<strong id="zh-cn_topic_0182207110_b135294434217"><a name="zh-cn_topic_0182207110_b135294434217"></a><a name="zh-cn_topic_0182207110_b135294434217"></a>private/rslave/rshared</strong>传播属性）<strong id="zh-cn_topic_0182207110_b445054343519"><a name="zh-cn_topic_0182207110_b445054343519"></a><a name="zh-cn_topic_0182207110_b445054343519"></a> 默认值：0</strong></p>
    </td>
    </tr>
    </tbody>
    </table>


-   <a name="zh-cn_topic_0182207110_li1182444614213"></a>**NamespaceOption**

    <a name="zh-cn_topic_0182207110_table02020429414"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row320210420420"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p3202142345"><a name="zh-cn_topic_0182207110_p3202142345"></a><a name="zh-cn_topic_0182207110_p3202142345"></a><strong id="zh-cn_topic_0182207110_b192021642444"><a name="zh-cn_topic_0182207110_b192021642444"></a><a name="zh-cn_topic_0182207110_b192021642444"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p192039421544"><a name="zh-cn_topic_0182207110_p192039421544"></a><a name="zh-cn_topic_0182207110_p192039421544"></a><strong id="zh-cn_topic_0182207110_b42031422411"><a name="zh-cn_topic_0182207110_b42031422411"></a><a name="zh-cn_topic_0182207110_b42031422411"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row12032421840"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p4203942245"><a name="zh-cn_topic_0182207110_p4203942245"></a><a name="zh-cn_topic_0182207110_p4203942245"></a>bool host_network</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1420374210411"><a name="zh-cn_topic_0182207110_p1420374210411"></a><a name="zh-cn_topic_0182207110_p1420374210411"></a>是否使用host的网络命名空间</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row132037421842"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p520312421344"><a name="zh-cn_topic_0182207110_p520312421344"></a><a name="zh-cn_topic_0182207110_p520312421344"></a>bool host_pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p17203194215418"><a name="zh-cn_topic_0182207110_p17203194215418"></a><a name="zh-cn_topic_0182207110_p17203194215418"></a>是否使用host的PID命名空间</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1320315420416"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p620344217419"><a name="zh-cn_topic_0182207110_p620344217419"></a><a name="zh-cn_topic_0182207110_p620344217419"></a>bool host_ipc</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p12049428416"><a name="zh-cn_topic_0182207110_p12049428416"></a><a name="zh-cn_topic_0182207110_p12049428416"></a>是否使用host的IPC命名空间</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li115631277434"></a>**Capability**

    包含待添加与待删除的权能信息

    <a name="zh-cn_topic_0182207110_table4642103774315"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1642837164314"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p12642737104318"><a name="zh-cn_topic_0182207110_p12642737104318"></a><a name="zh-cn_topic_0182207110_p12642737104318"></a><strong id="zh-cn_topic_0182207110_b136421037184314"><a name="zh-cn_topic_0182207110_b136421037184314"></a><a name="zh-cn_topic_0182207110_b136421037184314"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1642193713437"><a name="zh-cn_topic_0182207110_p1642193713437"></a><a name="zh-cn_topic_0182207110_p1642193713437"></a><strong id="zh-cn_topic_0182207110_b66421237104316"><a name="zh-cn_topic_0182207110_b66421237104316"></a><a name="zh-cn_topic_0182207110_b66421237104316"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row86421337144310"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1855613286710"><a name="zh-cn_topic_0182207110_p1855613286710"></a><a name="zh-cn_topic_0182207110_p1855613286710"></a>repeated string add_capabilities</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p199319241760"><a name="zh-cn_topic_0182207110_p199319241760"></a><a name="zh-cn_topic_0182207110_p199319241760"></a>待新增的权能</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row5642103716437"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p3664193316710"><a name="zh-cn_topic_0182207110_p3664193316710"></a><a name="zh-cn_topic_0182207110_p3664193316710"></a>repeated string drop_capabilities</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p5492190683"><a name="zh-cn_topic_0182207110_p5492190683"></a><a name="zh-cn_topic_0182207110_p5492190683"></a>待删除的权能</p>
    </td>
    </tr>
    </tbody>
    </table>


-   <a name="zh-cn_topic_0182207110_li1439643415372"></a>**Int64Value**

    int64类型的封装

    <a name="zh-cn_topic_0182207110_table175763341468"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1157618341465"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p457610342062"><a name="zh-cn_topic_0182207110_p457610342062"></a><a name="zh-cn_topic_0182207110_p457610342062"></a><strong id="zh-cn_topic_0182207110_b20576163416620"><a name="zh-cn_topic_0182207110_b20576163416620"></a><a name="zh-cn_topic_0182207110_b20576163416620"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p185762341468"><a name="zh-cn_topic_0182207110_p185762341468"></a><a name="zh-cn_topic_0182207110_p185762341468"></a><strong id="zh-cn_topic_0182207110_b13576163419614"><a name="zh-cn_topic_0182207110_b13576163419614"></a><a name="zh-cn_topic_0182207110_b13576163419614"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row357619342066"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p15763341367"><a name="zh-cn_topic_0182207110_p15763341367"></a><a name="zh-cn_topic_0182207110_p15763341367"></a>int64 value</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p175761534163"><a name="zh-cn_topic_0182207110_p175761534163"></a><a name="zh-cn_topic_0182207110_p175761534163"></a>实际的int64值</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li1886455713453"></a>**UInt64Value**

    uint64类型的封装

    <a name="zh-cn_topic_0182207110_table1286495744514"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1486419572459"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p886515724519"><a name="zh-cn_topic_0182207110_p886515724519"></a><a name="zh-cn_topic_0182207110_p886515724519"></a><strong id="zh-cn_topic_0182207110_b188652575456"><a name="zh-cn_topic_0182207110_b188652575456"></a><a name="zh-cn_topic_0182207110_b188652575456"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p11865155764517"><a name="zh-cn_topic_0182207110_p11865155764517"></a><a name="zh-cn_topic_0182207110_p11865155764517"></a><strong id="zh-cn_topic_0182207110_b1386575710453"><a name="zh-cn_topic_0182207110_b1386575710453"></a><a name="zh-cn_topic_0182207110_b1386575710453"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row10865185718453"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p8865145713455"><a name="zh-cn_topic_0182207110_p8865145713455"></a><a name="zh-cn_topic_0182207110_p8865145713455"></a>uint64 value</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1486535720450"><a name="zh-cn_topic_0182207110_p1486535720450"></a><a name="zh-cn_topic_0182207110_p1486535720450"></a>实际的uint64值</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li20215550104713"></a>**LinuxSandboxSecurityContext**

    配置sandbox的linux安全选项。

    注意，这些安全选项不会应用到sandbox中的容器中，也可能不适用于没有任何running进程的sandbox

    <a name="zh-cn_topic_0182207110_table118794406714"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row4877204012718"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p28767401717"><a name="zh-cn_topic_0182207110_p28767401717"></a><a name="zh-cn_topic_0182207110_p28767401717"></a><strong id="zh-cn_topic_0182207110_b158761740674"><a name="zh-cn_topic_0182207110_b158761740674"></a><a name="zh-cn_topic_0182207110_b158761740674"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p78769403714"><a name="zh-cn_topic_0182207110_p78769403714"></a><a name="zh-cn_topic_0182207110_p78769403714"></a><strong id="zh-cn_topic_0182207110_b4876174015711"><a name="zh-cn_topic_0182207110_b4876174015711"></a><a name="zh-cn_topic_0182207110_b4876174015711"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row118771840376"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p11877640872"><a name="zh-cn_topic_0182207110_p11877640872"></a><a name="zh-cn_topic_0182207110_p11877640872"></a>NamespaceOption</a> namespace_options</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p13877740478"><a name="zh-cn_topic_0182207110_p13877740478"></a><a name="zh-cn_topic_0182207110_p13877740478"></a>配置sandbox的命名空间选项</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row98772404713"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p387710401719"><a name="zh-cn_topic_0182207110_p387710401719"></a><a name="zh-cn_topic_0182207110_p387710401719"></a>SELinuxOption</a> selinux_options</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p7877540971"><a name="zh-cn_topic_0182207110_p7877540971"></a><a name="zh-cn_topic_0182207110_p7877540971"></a>配置SELinux选项（不支持）</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row7877240376"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p687715407712"><a name="zh-cn_topic_0182207110_p687715407712"></a><a name="zh-cn_topic_0182207110_p687715407712"></a>Int64Value</a> run_as_user</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p188771240477"><a name="zh-cn_topic_0182207110_p188771240477"></a><a name="zh-cn_topic_0182207110_p188771240477"></a>配置sandbox中进程的uid</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1187704010713"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p5877440378"><a name="zh-cn_topic_0182207110_p5877440378"></a><a name="zh-cn_topic_0182207110_p5877440378"></a>bool readonly_rootfs</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p087784016717"><a name="zh-cn_topic_0182207110_p087784016717"></a><a name="zh-cn_topic_0182207110_p087784016717"></a>配置sandbox的根文件系统是否只读</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row6878840272"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p4877194019716"><a name="zh-cn_topic_0182207110_p4877194019716"></a><a name="zh-cn_topic_0182207110_p4877194019716"></a>repeated int64 supplemental_groups</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1487715403711"><a name="zh-cn_topic_0182207110_p1487715403711"></a><a name="zh-cn_topic_0182207110_p1487715403711"></a>配置除主GID之外的sandbox的1号进程用户组信息</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row198781840073"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p138781401678"><a name="zh-cn_topic_0182207110_p138781401678"></a><a name="zh-cn_topic_0182207110_p138781401678"></a>bool privileged</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p48781440679"><a name="zh-cn_topic_0182207110_p48781440679"></a><a name="zh-cn_topic_0182207110_p48781440679"></a>配置sandbox是否为特权容器</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row11878104014717"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1387814405720"><a name="zh-cn_topic_0182207110_p1387814405720"></a><a name="zh-cn_topic_0182207110_p1387814405720"></a>string seccomp_profile_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p98781640778"><a name="zh-cn_topic_0182207110_p98781640778"></a><a name="zh-cn_topic_0182207110_p98781640778"></a>seccomp配置文件路径，有效值为：</p>
    <p id="zh-cn_topic_0182207110_p852815536173"><a name="zh-cn_topic_0182207110_p852815536173"></a><a name="zh-cn_topic_0182207110_p852815536173"></a>// unconfined: 不配置seccomp</p>
    <p id="zh-cn_topic_0182207110_p3202192819180"><a name="zh-cn_topic_0182207110_p3202192819180"></a><a name="zh-cn_topic_0182207110_p3202192819180"></a>// localhost/&lt;配置文件的全路径&gt;： 安装在系统上的配置文件路径</p>
    <p id="zh-cn_topic_0182207110_p1782797191914"><a name="zh-cn_topic_0182207110_p1782797191914"></a><a name="zh-cn_topic_0182207110_p1782797191914"></a>// &lt;配置文件的全路径&gt;： 配置文件全路径</p>
    <p id="zh-cn_topic_0182207110_p1961983781914"><a name="zh-cn_topic_0182207110_p1961983781914"></a><a name="zh-cn_topic_0182207110_p1961983781914"></a>// 默认不配置，即unconfined。</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li14801654104710"></a>**LinuxPodSandboxConfig**

    设定和Linux主机及容器相关的一些配置

    <a name="zh-cn_topic_0182207110_table94761837172117"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row4476193722115"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p1847623722112"><a name="zh-cn_topic_0182207110_p1847623722112"></a><a name="zh-cn_topic_0182207110_p1847623722112"></a><strong id="zh-cn_topic_0182207110_b547613752117"><a name="zh-cn_topic_0182207110_b547613752117"></a><a name="zh-cn_topic_0182207110_b547613752117"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p204761337192110"><a name="zh-cn_topic_0182207110_p204761337192110"></a><a name="zh-cn_topic_0182207110_p204761337192110"></a><strong id="zh-cn_topic_0182207110_b5476113792118"><a name="zh-cn_topic_0182207110_b5476113792118"></a><a name="zh-cn_topic_0182207110_b5476113792118"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row247603713217"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p147623720214"><a name="zh-cn_topic_0182207110_p147623720214"></a><a name="zh-cn_topic_0182207110_p147623720214"></a>string cgroup_parent</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p941145220242"><a name="zh-cn_topic_0182207110_p941145220242"></a><a name="zh-cn_topic_0182207110_p941145220242"></a>sandbox的cgroup父路径，runtime可根据实际情况使用cgroupfs或systemd的语法。（不支持配置）</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1647613752112"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1147613371218"><a name="zh-cn_topic_0182207110_p1147613371218"></a><a name="zh-cn_topic_0182207110_p1147613371218"></a>LinuxSandboxSecurityContext</a>  security_context</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p54765378217"><a name="zh-cn_topic_0182207110_p54765378217"></a><a name="zh-cn_topic_0182207110_p54765378217"></a>sandbox的安全属性</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row10476637152114"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p3476113782112"><a name="zh-cn_topic_0182207110_p3476113782112"></a><a name="zh-cn_topic_0182207110_p3476113782112"></a>map&lt;string, string&gt; sysctls</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p5476163716217"><a name="zh-cn_topic_0182207110_p5476163716217"></a><a name="zh-cn_topic_0182207110_p5476163716217"></a>sandbox的linux sysctls配置</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li2359918134912"></a>**PodSandboxMetadata**

    Sandbox元数据包含构建sandbox名称的所有信息，鼓励容器运行时在用户界面中公开这些元数据以获得更好的用户体验，例如，运行时可以根据元数据生成sandbox的唯一命名。

    <a name="zh-cn_topic_0182207110_table2402163911295"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1040017392290"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p19400339132913"><a name="zh-cn_topic_0182207110_p19400339132913"></a><a name="zh-cn_topic_0182207110_p19400339132913"></a><strong id="zh-cn_topic_0182207110_b16400163915299"><a name="zh-cn_topic_0182207110_b16400163915299"></a><a name="zh-cn_topic_0182207110_b16400163915299"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1040013932916"><a name="zh-cn_topic_0182207110_p1040013932916"></a><a name="zh-cn_topic_0182207110_p1040013932916"></a><strong id="zh-cn_topic_0182207110_b1640093912291"><a name="zh-cn_topic_0182207110_b1640093912291"></a><a name="zh-cn_topic_0182207110_b1640093912291"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row164012392296"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1240016398298"><a name="zh-cn_topic_0182207110_p1240016398298"></a><a name="zh-cn_topic_0182207110_p1240016398298"></a>string name</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p184001139192918"><a name="zh-cn_topic_0182207110_p184001139192918"></a><a name="zh-cn_topic_0182207110_p184001139192918"></a>sandbox的名称</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row16401739152913"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p164010395299"><a name="zh-cn_topic_0182207110_p164010395299"></a><a name="zh-cn_topic_0182207110_p164010395299"></a>string uid</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p18401183917297"><a name="zh-cn_topic_0182207110_p18401183917297"></a><a name="zh-cn_topic_0182207110_p18401183917297"></a>sandbox的UID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row5401143962911"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p7560134312404"><a name="zh-cn_topic_0182207110_p7560134312404"></a><a name="zh-cn_topic_0182207110_p7560134312404"></a>string namespace</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p104011339192911"><a name="zh-cn_topic_0182207110_p104011339192911"></a><a name="zh-cn_topic_0182207110_p104011339192911"></a>sandbox的命名空间</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row16402739152910"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p386824574014"><a name="zh-cn_topic_0182207110_p386824574014"></a><a name="zh-cn_topic_0182207110_p386824574014"></a>uint32 attempt</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p5402133913294"><a name="zh-cn_topic_0182207110_p5402133913294"></a><a name="zh-cn_topic_0182207110_p5402133913294"></a>尝试创建sandbox的次数，默认为0</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li253629701"></a>**PodSandboxConfig**

    包含创建sandbox的所有必选和可选配置信息

    <a name="zh-cn_topic_0182207110_table195211549174312"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row95191149114319"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p195191949164311"><a name="zh-cn_topic_0182207110_p195191949164311"></a><a name="zh-cn_topic_0182207110_p195191949164311"></a><strong id="zh-cn_topic_0182207110_b1051919499434"><a name="zh-cn_topic_0182207110_b1051919499434"></a><a name="zh-cn_topic_0182207110_b1051919499434"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1051964913437"><a name="zh-cn_topic_0182207110_p1051964913437"></a><a name="zh-cn_topic_0182207110_p1051964913437"></a><strong id="zh-cn_topic_0182207110_b1551984916437"><a name="zh-cn_topic_0182207110_b1551984916437"></a><a name="zh-cn_topic_0182207110_b1551984916437"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row1052013496432"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p185209491435"><a name="zh-cn_topic_0182207110_p185209491435"></a><a name="zh-cn_topic_0182207110_p185209491435"></a>PodSandboxMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p7520124913433"><a name="zh-cn_topic_0182207110_p7520124913433"></a><a name="zh-cn_topic_0182207110_p7520124913433"></a>sandbox的元数据，这项信息唯一标识一个sandbox，runtime必须利用此信息确保操作正确，runtime也可以根据此信息来改善用户体验，例如构建可读的sandbox名称。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row0520184910433"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1952054984318"><a name="zh-cn_topic_0182207110_p1952054984318"></a><a name="zh-cn_topic_0182207110_p1952054984318"></a>string hostname</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1852014490439"><a name="zh-cn_topic_0182207110_p1852014490439"></a><a name="zh-cn_topic_0182207110_p1852014490439"></a>sandbox的hostname</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row752054964310"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p752084964310"><a name="zh-cn_topic_0182207110_p752084964310"></a><a name="zh-cn_topic_0182207110_p752084964310"></a>string log_directory</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p6520134915434"><a name="zh-cn_topic_0182207110_p6520134915434"></a><a name="zh-cn_topic_0182207110_p6520134915434"></a>配置sandbox内的容器的日志文件所存储的文件夹</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row5520134934312"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p18520204919431"><a name="zh-cn_topic_0182207110_p18520204919431"></a><a name="zh-cn_topic_0182207110_p18520204919431"></a>DNSConfig</a> dns_config</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p452004954314"><a name="zh-cn_topic_0182207110_p452004954314"></a><a name="zh-cn_topic_0182207110_p452004954314"></a>sandbox的DNS配置</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row175201049134319"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p952034984311"><a name="zh-cn_topic_0182207110_p952034984311"></a><a name="zh-cn_topic_0182207110_p952034984311"></a>repeated PortMapping</a> port_mappings</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p252012494432"><a name="zh-cn_topic_0182207110_p252012494432"></a><a name="zh-cn_topic_0182207110_p252012494432"></a>sandbox的端口映射</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row6521134934310"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1452117499433"><a name="zh-cn_topic_0182207110_p1452117499433"></a><a name="zh-cn_topic_0182207110_p1452117499433"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p18521174913434"><a name="zh-cn_topic_0182207110_p18521174913434"></a><a name="zh-cn_topic_0182207110_p18521174913434"></a>可用于标识单个或一系列sandbox的键值对</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row19521114914313"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p752114919435"><a name="zh-cn_topic_0182207110_p752114919435"></a><a name="zh-cn_topic_0182207110_p752114919435"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p852174916439"><a name="zh-cn_topic_0182207110_p852174916439"></a><a name="zh-cn_topic_0182207110_p852174916439"></a>存储任意信息的键值对，这些值是不可更改的，且能够利用PodSandboxStatus</a>接口查询</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row2521149164318"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p752114904318"><a name="zh-cn_topic_0182207110_p752114904318"></a><a name="zh-cn_topic_0182207110_p752114904318"></a>LinuxPodSandboxConfig</a> linux</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1152154954319"><a name="zh-cn_topic_0182207110_p1152154954319"></a><a name="zh-cn_topic_0182207110_p1152154954319"></a>与linux主机相关的可选项</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li255017717184"></a>**PodSandboxNetworkStatus**

    描述sandbox的网络状态

    <a name="zh-cn_topic_0182207110_table72691154578"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1426817555712"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p11268195195715"><a name="zh-cn_topic_0182207110_p11268195195715"></a><a name="zh-cn_topic_0182207110_p11268195195715"></a><strong id="zh-cn_topic_0182207110_b326855125718"><a name="zh-cn_topic_0182207110_b326855125718"></a><a name="zh-cn_topic_0182207110_b326855125718"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p62682585719"><a name="zh-cn_topic_0182207110_p62682585719"></a><a name="zh-cn_topic_0182207110_p62682585719"></a><strong id="zh-cn_topic_0182207110_b3268125185718"><a name="zh-cn_topic_0182207110_b3268125185718"></a><a name="zh-cn_topic_0182207110_b3268125185718"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row172681054577"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p2268115105719"><a name="zh-cn_topic_0182207110_p2268115105719"></a><a name="zh-cn_topic_0182207110_p2268115105719"></a>string ip</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1126875195713"><a name="zh-cn_topic_0182207110_p1126875195713"></a><a name="zh-cn_topic_0182207110_p1126875195713"></a>sandbox的ip地址</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row5269185155714"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p17269156575"><a name="zh-cn_topic_0182207110_p17269156575"></a><a name="zh-cn_topic_0182207110_p17269156575"></a>string name</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p42699510571"><a name="zh-cn_topic_0182207110_p42699510571"></a><a name="zh-cn_topic_0182207110_p42699510571"></a>sandbox内的网络接口名</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row42691252575"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p9269135185718"><a name="zh-cn_topic_0182207110_p9269135185718"></a><a name="zh-cn_topic_0182207110_p9269135185718"></a>string network</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p162698595711"><a name="zh-cn_topic_0182207110_p162698595711"></a><a name="zh-cn_topic_0182207110_p162698595711"></a>附加网络的名称</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li523062951815"></a>**Namespace**

    命名空间选项

    <a name="zh-cn_topic_0182207110_table783614348156"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row13836123418153"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p13836113410152"><a name="zh-cn_topic_0182207110_p13836113410152"></a><a name="zh-cn_topic_0182207110_p13836113410152"></a><strong id="zh-cn_topic_0182207110_b108361334181519"><a name="zh-cn_topic_0182207110_b108361334181519"></a><a name="zh-cn_topic_0182207110_b108361334181519"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p13836163451516"><a name="zh-cn_topic_0182207110_p13836163451516"></a><a name="zh-cn_topic_0182207110_p13836163451516"></a><strong id="zh-cn_topic_0182207110_b208361834131514"><a name="zh-cn_topic_0182207110_b208361834131514"></a><a name="zh-cn_topic_0182207110_b208361834131514"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row1483683416157"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p14679164516152"><a name="zh-cn_topic_0182207110_p14679164516152"></a><a name="zh-cn_topic_0182207110_p14679164516152"></a>NamespaceOption</a> options</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p3837113415154"><a name="zh-cn_topic_0182207110_p3837113415154"></a><a name="zh-cn_topic_0182207110_p3837113415154"></a>Linux 命名空间选项</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li313112151212"></a>**LinuxPodSandboxStatus**

    描述Linux sandbox的状态

    <a name="zh-cn_topic_0182207110_table1111815411176"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row15118124111716"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p4118164113179"><a name="zh-cn_topic_0182207110_p4118164113179"></a><a name="zh-cn_topic_0182207110_p4118164113179"></a><strong id="zh-cn_topic_0182207110_b1311854101713"><a name="zh-cn_topic_0182207110_b1311854101713"></a><a name="zh-cn_topic_0182207110_b1311854101713"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p911817418178"><a name="zh-cn_topic_0182207110_p911817418178"></a><a name="zh-cn_topic_0182207110_p911817418178"></a><strong id="zh-cn_topic_0182207110_b11118114117177"><a name="zh-cn_topic_0182207110_b11118114117177"></a><a name="zh-cn_topic_0182207110_b11118114117177"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row2118164191718"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p311814114176"><a name="zh-cn_topic_0182207110_p311814114176"></a><a name="zh-cn_topic_0182207110_p311814114176"></a>Namespace</a> <strong id="zh-cn_topic_0182207110_b24393464172"><a name="zh-cn_topic_0182207110_b24393464172"></a><a name="zh-cn_topic_0182207110_b24393464172"></a>namespaces</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p6118541201717"><a name="zh-cn_topic_0182207110_p6118541201717"></a><a name="zh-cn_topic_0182207110_p6118541201717"></a>sandbox命名空间</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li1818214574195"></a>**PodSandboxState**

    sandbox状态值的enum数据

    <a name="zh-cn_topic_0182207110_table143182491816"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row843262417180"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p94326242187"><a name="zh-cn_topic_0182207110_p94326242187"></a><a name="zh-cn_topic_0182207110_p94326242187"></a><strong id="zh-cn_topic_0182207110_b943212249180"><a name="zh-cn_topic_0182207110_b943212249180"></a><a name="zh-cn_topic_0182207110_b943212249180"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1643202481814"><a name="zh-cn_topic_0182207110_p1643202481814"></a><a name="zh-cn_topic_0182207110_p1643202481814"></a><strong id="zh-cn_topic_0182207110_b1343252414189"><a name="zh-cn_topic_0182207110_b1343252414189"></a><a name="zh-cn_topic_0182207110_b1343252414189"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row943216241182"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p19432724181818"><a name="zh-cn_topic_0182207110_p19432724181818"></a><a name="zh-cn_topic_0182207110_p19432724181818"></a>SANDBOX_READY = 0</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p114321124161816"><a name="zh-cn_topic_0182207110_p114321124161816"></a><a name="zh-cn_topic_0182207110_p114321124161816"></a>sandbox处于ready状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row8935427161820"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p10935102791811"><a name="zh-cn_topic_0182207110_p10935102791811"></a><a name="zh-cn_topic_0182207110_p10935102791811"></a>SANDBOX_NOTREADY = 1</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p193562716181"><a name="zh-cn_topic_0182207110_p193562716181"></a><a name="zh-cn_topic_0182207110_p193562716181"></a>sandbox处于非ready状态</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li146986172010"></a>**PodSandboxStatus**

    描述Podsandbox的状态信息

    <a name="zh-cn_topic_0182207110_table12524184514196"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row18525154581911"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p20525645171911"><a name="zh-cn_topic_0182207110_p20525645171911"></a><a name="zh-cn_topic_0182207110_p20525645171911"></a><strong id="zh-cn_topic_0182207110_b17525194512195"><a name="zh-cn_topic_0182207110_b17525194512195"></a><a name="zh-cn_topic_0182207110_b17525194512195"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p195251445151920"><a name="zh-cn_topic_0182207110_p195251445151920"></a><a name="zh-cn_topic_0182207110_p195251445151920"></a><strong id="zh-cn_topic_0182207110_b15525745171916"><a name="zh-cn_topic_0182207110_b15525745171916"></a><a name="zh-cn_topic_0182207110_b15525745171916"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row155258458192"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p65251145201918"><a name="zh-cn_topic_0182207110_p65251145201918"></a><a name="zh-cn_topic_0182207110_p65251145201918"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p9525164513192"><a name="zh-cn_topic_0182207110_p9525164513192"></a><a name="zh-cn_topic_0182207110_p9525164513192"></a>sandbox的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row452574510197"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p115251145131915"><a name="zh-cn_topic_0182207110_p115251145131915"></a><a name="zh-cn_topic_0182207110_p115251145131915"></a>PodSandboxMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p75251945191918"><a name="zh-cn_topic_0182207110_p75251945191918"></a><a name="zh-cn_topic_0182207110_p75251945191918"></a>sandbox的元数据</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row6525345181911"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p252644571912"><a name="zh-cn_topic_0182207110_p252644571912"></a><a name="zh-cn_topic_0182207110_p252644571912"></a>PodSandboxState</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p65261445151910"><a name="zh-cn_topic_0182207110_p65261445151910"></a><a name="zh-cn_topic_0182207110_p65261445151910"></a>sandbox的状态值</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row20526045171913"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p15526114515197"><a name="zh-cn_topic_0182207110_p15526114515197"></a><a name="zh-cn_topic_0182207110_p15526114515197"></a>int64 created_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p14526245171915"><a name="zh-cn_topic_0182207110_p14526245171915"></a><a name="zh-cn_topic_0182207110_p14526245171915"></a>sandbox的创建时间戳，单位纳秒</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row17526845121911"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p145261945131915"><a name="zh-cn_topic_0182207110_p145261945131915"></a><a name="zh-cn_topic_0182207110_p145261945131915"></a>repeated PodSandboxNetworkStatus</a> networks</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1152644581913"><a name="zh-cn_topic_0182207110_p1152644581913"></a><a name="zh-cn_topic_0182207110_p1152644581913"></a>sandbox的多平面网络状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row252694511192"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1452634521914"><a name="zh-cn_topic_0182207110_p1452634521914"></a><a name="zh-cn_topic_0182207110_p1452634521914"></a>LinuxPodSandboxStatus</a> linux</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1752604513197"><a name="zh-cn_topic_0182207110_p1752604513197"></a><a name="zh-cn_topic_0182207110_p1752604513197"></a>Linux规范的sandbox状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1652664513193"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1252610459190"><a name="zh-cn_topic_0182207110_p1252610459190"></a><a name="zh-cn_topic_0182207110_p1252610459190"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p13526745131918"><a name="zh-cn_topic_0182207110_p13526745131918"></a><a name="zh-cn_topic_0182207110_p13526745131918"></a>可用于标识单个或一系列sandbox的键值对</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1252694512196"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p195271145191917"><a name="zh-cn_topic_0182207110_p195271145191917"></a><a name="zh-cn_topic_0182207110_p195271145191917"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p14527745191914"><a name="zh-cn_topic_0182207110_p14527745191914"></a><a name="zh-cn_topic_0182207110_p14527745191914"></a>存储任意信息的键值对，这些值是不可被runtime更改的</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li64922552019"></a>**PodSandboxStateValue**

    对PodSandboxState的封装

    <a name="zh-cn_topic_0182207110_table1991019610274"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1191014692714"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p09102612717"><a name="zh-cn_topic_0182207110_p09102612717"></a><a name="zh-cn_topic_0182207110_p09102612717"></a><strong id="zh-cn_topic_0182207110_b1791016102720"><a name="zh-cn_topic_0182207110_b1791016102720"></a><a name="zh-cn_topic_0182207110_b1791016102720"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1191011682712"><a name="zh-cn_topic_0182207110_p1191011682712"></a><a name="zh-cn_topic_0182207110_p1191011682712"></a><strong id="zh-cn_topic_0182207110_b791066102719"><a name="zh-cn_topic_0182207110_b791066102719"></a><a name="zh-cn_topic_0182207110_b791066102719"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row159111666276"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p791112632711"><a name="zh-cn_topic_0182207110_p791112632711"></a><a name="zh-cn_topic_0182207110_p791112632711"></a>PodSandboxState</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p12911166162713"><a name="zh-cn_topic_0182207110_p12911166162713"></a><a name="zh-cn_topic_0182207110_p12911166162713"></a>sandbox的状态值</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **PodSandboxFilter**

    用于列出sandbox时添加过滤条件，多个条件取交集显示

    <a name="zh-cn_topic_0182207110_table1467451192814"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1167145122810"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p1167105116289"><a name="zh-cn_topic_0182207110_p1167105116289"></a><a name="zh-cn_topic_0182207110_p1167105116289"></a><strong id="zh-cn_topic_0182207110_b15671251152811"><a name="zh-cn_topic_0182207110_b15671251152811"></a><a name="zh-cn_topic_0182207110_b15671251152811"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p367115115287"><a name="zh-cn_topic_0182207110_p367115115287"></a><a name="zh-cn_topic_0182207110_p367115115287"></a><strong id="zh-cn_topic_0182207110_b867195118285"><a name="zh-cn_topic_0182207110_b867195118285"></a><a name="zh-cn_topic_0182207110_b867195118285"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row1267165119287"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p46818511285"><a name="zh-cn_topic_0182207110_p46818511285"></a><a name="zh-cn_topic_0182207110_p46818511285"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p106835113282"><a name="zh-cn_topic_0182207110_p106835113282"></a><a name="zh-cn_topic_0182207110_p106835113282"></a>sandbox的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row136845192810"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p16813516283"><a name="zh-cn_topic_0182207110_p16813516283"></a><a name="zh-cn_topic_0182207110_p16813516283"></a>PodSandboxStateValue</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1168751132815"><a name="zh-cn_topic_0182207110_p1168751132815"></a><a name="zh-cn_topic_0182207110_p1168751132815"></a>sandbox的状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row768105115289"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p468175112814"><a name="zh-cn_topic_0182207110_p468175112814"></a><a name="zh-cn_topic_0182207110_p468175112814"></a>map&lt;string, string&gt; label_selector</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p968115114284"><a name="zh-cn_topic_0182207110_p968115114284"></a><a name="zh-cn_topic_0182207110_p968115114284"></a>sandbox的labels，label只支持完全匹配，不支持正则匹配</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **PodSandbox**

    包含最小化描述一个sandbox的数据

    <a name="zh-cn_topic_0182207110_table6180935203216"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row17177173543219"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p191773352328"><a name="zh-cn_topic_0182207110_p191773352328"></a><a name="zh-cn_topic_0182207110_p191773352328"></a><strong id="zh-cn_topic_0182207110_b181779352320"><a name="zh-cn_topic_0182207110_b181779352320"></a><a name="zh-cn_topic_0182207110_b181779352320"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p11177163514329"><a name="zh-cn_topic_0182207110_p11177163514329"></a><a name="zh-cn_topic_0182207110_p11177163514329"></a><strong id="zh-cn_topic_0182207110_b01771835153210"><a name="zh-cn_topic_0182207110_b01771835153210"></a><a name="zh-cn_topic_0182207110_b01771835153210"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row1817873543211"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p01774355326"><a name="zh-cn_topic_0182207110_p01774355326"></a><a name="zh-cn_topic_0182207110_p01774355326"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p9178123543213"><a name="zh-cn_topic_0182207110_p9178123543213"></a><a name="zh-cn_topic_0182207110_p9178123543213"></a>sandbox的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row11782353322"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1217883523217"><a name="zh-cn_topic_0182207110_p1217883523217"></a><a name="zh-cn_topic_0182207110_p1217883523217"></a>PodSandboxMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p4178235143211"><a name="zh-cn_topic_0182207110_p4178235143211"></a><a name="zh-cn_topic_0182207110_p4178235143211"></a>sandbox的元数据</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row151781835133214"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p13178153533219"><a name="zh-cn_topic_0182207110_p13178153533219"></a><a name="zh-cn_topic_0182207110_p13178153533219"></a>PodSandboxState</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p17178183583211"><a name="zh-cn_topic_0182207110_p17178183583211"></a><a name="zh-cn_topic_0182207110_p17178183583211"></a>sandbox的状态值</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1179143523213"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p2017893543215"><a name="zh-cn_topic_0182207110_p2017893543215"></a><a name="zh-cn_topic_0182207110_p2017893543215"></a>int64 created_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1117810355326"><a name="zh-cn_topic_0182207110_p1117810355326"></a><a name="zh-cn_topic_0182207110_p1117810355326"></a>sandbox的创建时间戳，单位纳秒</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row4180183533219"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p15179183543219"><a name="zh-cn_topic_0182207110_p15179183543219"></a><a name="zh-cn_topic_0182207110_p15179183543219"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p101796358325"><a name="zh-cn_topic_0182207110_p101796358325"></a><a name="zh-cn_topic_0182207110_p101796358325"></a>可用于标识单个或一系列sandbox的键值对</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1818063515320"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p20180143512324"><a name="zh-cn_topic_0182207110_p20180143512324"></a><a name="zh-cn_topic_0182207110_p20180143512324"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p11180103543219"><a name="zh-cn_topic_0182207110_p11180103543219"></a><a name="zh-cn_topic_0182207110_p11180103543219"></a>存储任意信息的键值对，这些值是不可被runtime更改的</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li11598132815225"></a>**KeyValue**

    键值对的封装

    <a name="zh-cn_topic_0182207110_table062733315339"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row136281333113315"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p10628173318339"><a name="zh-cn_topic_0182207110_p10628173318339"></a><a name="zh-cn_topic_0182207110_p10628173318339"></a><strong id="zh-cn_topic_0182207110_b1362843363314"><a name="zh-cn_topic_0182207110_b1362843363314"></a><a name="zh-cn_topic_0182207110_b1362843363314"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1562811331332"><a name="zh-cn_topic_0182207110_p1562811331332"></a><a name="zh-cn_topic_0182207110_p1562811331332"></a><strong id="zh-cn_topic_0182207110_b1362863383315"><a name="zh-cn_topic_0182207110_b1362863383315"></a><a name="zh-cn_topic_0182207110_b1362863383315"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row12628153353311"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p14766942153319"><a name="zh-cn_topic_0182207110_p14766942153319"></a><a name="zh-cn_topic_0182207110_p14766942153319"></a>string key</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p9629733163311"><a name="zh-cn_topic_0182207110_p9629733163311"></a><a name="zh-cn_topic_0182207110_p9629733163311"></a>键</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row6629533163311"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p156291633153319"><a name="zh-cn_topic_0182207110_p156291633153319"></a><a name="zh-cn_topic_0182207110_p156291633153319"></a>string value</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p56291333113311"><a name="zh-cn_topic_0182207110_p56291333113311"></a><a name="zh-cn_topic_0182207110_p56291333113311"></a>值</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li816815620237"></a>**SELinuxOption**

    应用于容器的SELinux标签

    <a name="zh-cn_topic_0182207110_table275114812514"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row18751148155112"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p1775113816517"><a name="zh-cn_topic_0182207110_p1775113816517"></a><a name="zh-cn_topic_0182207110_p1775113816517"></a><strong id="zh-cn_topic_0182207110_b1975117865116"><a name="zh-cn_topic_0182207110_b1975117865116"></a><a name="zh-cn_topic_0182207110_b1975117865116"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1175215815114"><a name="zh-cn_topic_0182207110_p1175215815114"></a><a name="zh-cn_topic_0182207110_p1175215815114"></a><strong id="zh-cn_topic_0182207110_b47521895117"><a name="zh-cn_topic_0182207110_b47521895117"></a><a name="zh-cn_topic_0182207110_b47521895117"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row117521812514"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p2752178195111"><a name="zh-cn_topic_0182207110_p2752178195111"></a><a name="zh-cn_topic_0182207110_p2752178195111"></a>string user</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p775288145117"><a name="zh-cn_topic_0182207110_p775288145117"></a><a name="zh-cn_topic_0182207110_p775288145117"></a>用户</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1775214818512"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p57524815514"><a name="zh-cn_topic_0182207110_p57524815514"></a><a name="zh-cn_topic_0182207110_p57524815514"></a>string role</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p975216895119"><a name="zh-cn_topic_0182207110_p975216895119"></a><a name="zh-cn_topic_0182207110_p975216895119"></a>角色</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row9445413125116"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p644521385118"><a name="zh-cn_topic_0182207110_p644521385118"></a><a name="zh-cn_topic_0182207110_p644521385118"></a>string type</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1445713125113"><a name="zh-cn_topic_0182207110_p1445713125113"></a><a name="zh-cn_topic_0182207110_p1445713125113"></a>类型</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row9753198165114"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1175368205113"><a name="zh-cn_topic_0182207110_p1175368205113"></a><a name="zh-cn_topic_0182207110_p1175368205113"></a>string level</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1475320875112"><a name="zh-cn_topic_0182207110_p1475320875112"></a><a name="zh-cn_topic_0182207110_p1475320875112"></a>级别</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li17135914132319"></a>**ContainerMetadata**

    Container元数据包含构建container名称的所有信息，鼓励容器运行时在用户界面中公开这些元数据以获得更好的用户体验，例如，运行时可以根据元数据生成container的唯一命名。

    <a name="zh-cn_topic_0182207110_table18487181915536"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row348741935315"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p748891945320"><a name="zh-cn_topic_0182207110_p748891945320"></a><a name="zh-cn_topic_0182207110_p748891945320"></a><strong id="zh-cn_topic_0182207110_b04881192534"><a name="zh-cn_topic_0182207110_b04881192534"></a><a name="zh-cn_topic_0182207110_b04881192534"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p948811191538"><a name="zh-cn_topic_0182207110_p948811191538"></a><a name="zh-cn_topic_0182207110_p948811191538"></a><strong id="zh-cn_topic_0182207110_b10488141955315"><a name="zh-cn_topic_0182207110_b10488141955315"></a><a name="zh-cn_topic_0182207110_b10488141955315"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row64884193535"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p4488181917535"><a name="zh-cn_topic_0182207110_p4488181917535"></a><a name="zh-cn_topic_0182207110_p4488181917535"></a>string name</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p14881419185315"><a name="zh-cn_topic_0182207110_p14881419185315"></a><a name="zh-cn_topic_0182207110_p14881419185315"></a>container的名称</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row3489121965312"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1848921975315"><a name="zh-cn_topic_0182207110_p1848921975315"></a><a name="zh-cn_topic_0182207110_p1848921975315"></a>uint32 attempt</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1048991916534"><a name="zh-cn_topic_0182207110_p1048991916534"></a><a name="zh-cn_topic_0182207110_p1048991916534"></a>尝试创建container的次数，默认为0</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li65182518309"></a>**ContainerState**

    容器状态值的enum列表

    <a name="zh-cn_topic_0182207110_table14224058145512"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row2224958205510"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p19224758185512"><a name="zh-cn_topic_0182207110_p19224758185512"></a><a name="zh-cn_topic_0182207110_p19224758185512"></a><strong id="zh-cn_topic_0182207110_b922410584550"><a name="zh-cn_topic_0182207110_b922410584550"></a><a name="zh-cn_topic_0182207110_b922410584550"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p132251658145511"><a name="zh-cn_topic_0182207110_p132251658145511"></a><a name="zh-cn_topic_0182207110_p132251658145511"></a><strong id="zh-cn_topic_0182207110_b192251585555"><a name="zh-cn_topic_0182207110_b192251585555"></a><a name="zh-cn_topic_0182207110_b192251585555"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row18225155815516"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1922525825513"><a name="zh-cn_topic_0182207110_p1922525825513"></a><a name="zh-cn_topic_0182207110_p1922525825513"></a>CONTAINER_CREATED = 0</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p19225115818550"><a name="zh-cn_topic_0182207110_p19225115818550"></a><a name="zh-cn_topic_0182207110_p19225115818550"></a>container创建完成</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row152257316563"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p12251436565"><a name="zh-cn_topic_0182207110_p12251436565"></a><a name="zh-cn_topic_0182207110_p12251436565"></a>CONTAINER_RUNNING = 1</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p4225132564"><a name="zh-cn_topic_0182207110_p4225132564"></a><a name="zh-cn_topic_0182207110_p4225132564"></a>container处于运行状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1622595813559"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p931041915618"><a name="zh-cn_topic_0182207110_p931041915618"></a><a name="zh-cn_topic_0182207110_p931041915618"></a>CONTAINER_EXITED  = 2</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p19225658165519"><a name="zh-cn_topic_0182207110_p19225658165519"></a><a name="zh-cn_topic_0182207110_p19225658165519"></a>container处于退出状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row140581185618"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p194051110564"><a name="zh-cn_topic_0182207110_p194051110564"></a><a name="zh-cn_topic_0182207110_p194051110564"></a>CONTAINER_UNKNOWN = 3</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p292175415566"><a name="zh-cn_topic_0182207110_p292175415566"></a><a name="zh-cn_topic_0182207110_p292175415566"></a>未知的容器状态</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerStateValue**

    封装ContainerState的数据结构

    <a name="zh-cn_topic_0182207110_table172301505712"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row16723141511578"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p972313157577"><a name="zh-cn_topic_0182207110_p972313157577"></a><a name="zh-cn_topic_0182207110_p972313157577"></a><strong id="zh-cn_topic_0182207110_b16723715145718"><a name="zh-cn_topic_0182207110_b16723715145718"></a><a name="zh-cn_topic_0182207110_b16723715145718"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1872471513575"><a name="zh-cn_topic_0182207110_p1872471513575"></a><a name="zh-cn_topic_0182207110_p1872471513575"></a><strong id="zh-cn_topic_0182207110_b9724171517573"><a name="zh-cn_topic_0182207110_b9724171517573"></a><a name="zh-cn_topic_0182207110_b9724171517573"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row2724815185714"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p18106131065816"><a name="zh-cn_topic_0182207110_p18106131065816"></a><a name="zh-cn_topic_0182207110_p18106131065816"></a>ContainerState</a> <strong id="zh-cn_topic_0182207110_b91061910165817"><a name="zh-cn_topic_0182207110_b91061910165817"></a><a name="zh-cn_topic_0182207110_b91061910165817"></a>state</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p13138131010581"><a name="zh-cn_topic_0182207110_p13138131010581"></a><a name="zh-cn_topic_0182207110_p13138131010581"></a>容器状态值</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerFilter**

    用于列出container时添加过滤条件，多个条件取交集显示

    <a name="zh-cn_topic_0182207110_table3194164015588"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row4194164075811"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p20194124011584"><a name="zh-cn_topic_0182207110_p20194124011584"></a><a name="zh-cn_topic_0182207110_p20194124011584"></a><strong id="zh-cn_topic_0182207110_b7194144065811"><a name="zh-cn_topic_0182207110_b7194144065811"></a><a name="zh-cn_topic_0182207110_b7194144065811"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p019413405586"><a name="zh-cn_topic_0182207110_p019413405586"></a><a name="zh-cn_topic_0182207110_p019413405586"></a><strong id="zh-cn_topic_0182207110_b1819474055819"><a name="zh-cn_topic_0182207110_b1819474055819"></a><a name="zh-cn_topic_0182207110_b1819474055819"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row1319454019588"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p019417404583"><a name="zh-cn_topic_0182207110_p019417404583"></a><a name="zh-cn_topic_0182207110_p019417404583"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p5195640205811"><a name="zh-cn_topic_0182207110_p5195640205811"></a><a name="zh-cn_topic_0182207110_p5195640205811"></a>container的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row18195194010585"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p3195184017584"><a name="zh-cn_topic_0182207110_p3195184017584"></a><a name="zh-cn_topic_0182207110_p3195184017584"></a>PodSandboxStateValue</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p7195144015818"><a name="zh-cn_topic_0182207110_p7195144015818"></a><a name="zh-cn_topic_0182207110_p7195144015818"></a>container的状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row8512141175912"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p651311113597"><a name="zh-cn_topic_0182207110_p651311113597"></a><a name="zh-cn_topic_0182207110_p651311113597"></a>string pod_sandbox_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1951317155912"><a name="zh-cn_topic_0182207110_p1951317155912"></a><a name="zh-cn_topic_0182207110_p1951317155912"></a>sandbox的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1319574075817"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1319515403587"><a name="zh-cn_topic_0182207110_p1319515403587"></a><a name="zh-cn_topic_0182207110_p1319515403587"></a>map&lt;string, string&gt; label_selector</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p121951440165812"><a name="zh-cn_topic_0182207110_p121951440165812"></a><a name="zh-cn_topic_0182207110_p121951440165812"></a>container的labels，label只支持完全匹配，不支持正则匹配</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li11771452124416"></a>**LinuxContainerSecurityContext**

    指定应用于容器的安全配置

    <a name="zh-cn_topic_0182207110_table175381035174712"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row1653773511471"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p1153793544711"><a name="zh-cn_topic_0182207110_p1153793544711"></a><a name="zh-cn_topic_0182207110_p1153793544711"></a><strong id="zh-cn_topic_0182207110_b17537335194719"><a name="zh-cn_topic_0182207110_b17537335194719"></a><a name="zh-cn_topic_0182207110_b17537335194719"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p5537143514714"><a name="zh-cn_topic_0182207110_p5537143514714"></a><a name="zh-cn_topic_0182207110_p5537143514714"></a><strong id="zh-cn_topic_0182207110_b553717355476"><a name="zh-cn_topic_0182207110_b553717355476"></a><a name="zh-cn_topic_0182207110_b553717355476"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row5537635134710"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p17269132255120"><a name="zh-cn_topic_0182207110_p17269132255120"></a><a name="zh-cn_topic_0182207110_p17269132255120"></a>Capability</a> capabilities</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p4537103564714"><a name="zh-cn_topic_0182207110_p4537103564714"></a><a name="zh-cn_topic_0182207110_p4537103564714"></a>新增或去除的权能</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1853733544712"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p119971728145118"><a name="zh-cn_topic_0182207110_p119971728145118"></a><a name="zh-cn_topic_0182207110_p119971728145118"></a>bool privileged</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p195379357474"><a name="zh-cn_topic_0182207110_p195379357474"></a><a name="zh-cn_topic_0182207110_p195379357474"></a>指定容器是否未特权模式， <strong id="zh-cn_topic_0182207110_b10561750163212"><a name="zh-cn_topic_0182207110_b10561750163212"></a><a name="zh-cn_topic_0182207110_b10561750163212"></a>默认值：false</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row185376357476"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p1025913245117"><a name="zh-cn_topic_0182207110_p1025913245117"></a><a name="zh-cn_topic_0182207110_p1025913245117"></a>NamespaceOption</a> namespace_options</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p15537193518478"><a name="zh-cn_topic_0182207110_p15537193518478"></a><a name="zh-cn_topic_0182207110_p15537193518478"></a>指定容器的namespace选项</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row05381935174712"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p17388143513517"><a name="zh-cn_topic_0182207110_p17388143513517"></a><a name="zh-cn_topic_0182207110_p17388143513517"></a>SELinuxOption</a> selinux_options</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p353715357473"><a name="zh-cn_topic_0182207110_p353715357473"></a><a name="zh-cn_topic_0182207110_p353715357473"></a>SELinux context(可选配置项) <strong id="zh-cn_topic_0182207110_b428419354375"><a name="zh-cn_topic_0182207110_b428419354375"></a><a name="zh-cn_topic_0182207110_b428419354375"></a>暂不支持</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row95385354470"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p8920153855110"><a name="zh-cn_topic_0182207110_p8920153855110"></a><a name="zh-cn_topic_0182207110_p8920153855110"></a>Int64Value</a> run_as_user</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p5538143524710"><a name="zh-cn_topic_0182207110_p5538143524710"></a><a name="zh-cn_topic_0182207110_p5538143524710"></a>运行容器进程的UID。 一次只能指定run_as_user与run_as_username其中之一，run_as_username优先生效</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row25380353477"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p1324534214513"><a name="zh-cn_topic_0182207110_p1324534214513"></a><a name="zh-cn_topic_0182207110_p1324534214513"></a>string run_as_username</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p6538103544717"><a name="zh-cn_topic_0182207110_p6538103544717"></a><a name="zh-cn_topic_0182207110_p6538103544717"></a>运行容器进程的用户名。 如果指定，用户必须存在于容器映像中（即在映像内的/etc/passwd中），并由运行时在那里解析; 否则，运行时必须出错</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1253813574713"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p38591046115115"><a name="zh-cn_topic_0182207110_p38591046115115"></a><a name="zh-cn_topic_0182207110_p38591046115115"></a>bool readonly_rootfs</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p0538153574710"><a name="zh-cn_topic_0182207110_p0538153574710"></a><a name="zh-cn_topic_0182207110_p0538153574710"></a>设置容器中根文件系统是否为只读  <strong id="zh-cn_topic_0182207110_b174111124123210"><a name="zh-cn_topic_0182207110_b174111124123210"></a><a name="zh-cn_topic_0182207110_b174111124123210"></a>默认值由config.json配置</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row8747204114509"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p15850184915113"><a name="zh-cn_topic_0182207110_p15850184915113"></a><a name="zh-cn_topic_0182207110_p15850184915113"></a>repeated int64 supplemental_groups</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p167481141165017"><a name="zh-cn_topic_0182207110_p167481141165017"></a><a name="zh-cn_topic_0182207110_p167481141165017"></a>容器运行的除主GID外首进程组的列表</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row3219184415011"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p294616528514"><a name="zh-cn_topic_0182207110_p294616528514"></a><a name="zh-cn_topic_0182207110_p294616528514"></a>string apparmor_profile</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p1321912443503"><a name="zh-cn_topic_0182207110_p1321912443503"></a><a name="zh-cn_topic_0182207110_p1321912443503"></a>容器的AppArmor配置文件<strong id="zh-cn_topic_0182207110_b5326516183913"><a name="zh-cn_topic_0182207110_b5326516183913"></a><a name="zh-cn_topic_0182207110_b5326516183913"></a> 暂不支持</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1778183818507"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p8562455115120"><a name="zh-cn_topic_0182207110_p8562455115120"></a><a name="zh-cn_topic_0182207110_p8562455115120"></a>string seccomp_profile_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p27816386507"><a name="zh-cn_topic_0182207110_p27816386507"></a><a name="zh-cn_topic_0182207110_p27816386507"></a>容器的seccomp配置文件路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row146010129517"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p17383115825110"><a name="zh-cn_topic_0182207110_p17383115825110"></a><a name="zh-cn_topic_0182207110_p17383115825110"></a>bool no_new_privs</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p166191210517"><a name="zh-cn_topic_0182207110_p166191210517"></a><a name="zh-cn_topic_0182207110_p166191210517"></a>是否在容器上设置no_new_privs的标志</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li2050214613477"></a>**LinuxContainerResources**

    指定Linux容器资源的特定配置

    <a name="zh-cn_topic_0182207110_table1774515315492"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row1774623104910"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p1474653124914"><a name="zh-cn_topic_0182207110_p1474653124914"></a><a name="zh-cn_topic_0182207110_p1474653124914"></a><strong id="zh-cn_topic_0182207110_b7746031114915"><a name="zh-cn_topic_0182207110_b7746031114915"></a><a name="zh-cn_topic_0182207110_b7746031114915"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p4746183124920"><a name="zh-cn_topic_0182207110_p4746183124920"></a><a name="zh-cn_topic_0182207110_p4746183124920"></a><strong id="zh-cn_topic_0182207110_b77461131174911"><a name="zh-cn_topic_0182207110_b77461131174911"></a><a name="zh-cn_topic_0182207110_b77461131174911"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row174653112494"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p7746103120496"><a name="zh-cn_topic_0182207110_p7746103120496"></a><a name="zh-cn_topic_0182207110_p7746103120496"></a>int64 cpu_period</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p9746113114911"><a name="zh-cn_topic_0182207110_p9746113114911"></a><a name="zh-cn_topic_0182207110_p9746113114911"></a>CPU CFS（完全公平调度程序）周期。 <strong id="zh-cn_topic_0182207110_b336722813364"><a name="zh-cn_topic_0182207110_b336722813364"></a><a name="zh-cn_topic_0182207110_b336722813364"></a>默认值：0</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row474673164917"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p14746143134912"><a name="zh-cn_topic_0182207110_p14746143134912"></a><a name="zh-cn_topic_0182207110_p14746143134912"></a>int64 cpu_quota</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p17746931104919"><a name="zh-cn_topic_0182207110_p17746931104919"></a><a name="zh-cn_topic_0182207110_p17746931104919"></a>CPU CFS（完全公平调度程序）配额。 <strong id="zh-cn_topic_0182207110_b191427331363"><a name="zh-cn_topic_0182207110_b191427331363"></a><a name="zh-cn_topic_0182207110_b191427331363"></a>默认值：0</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row9746103124914"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p17746131164912"><a name="zh-cn_topic_0182207110_p17746131164912"></a><a name="zh-cn_topic_0182207110_p17746131164912"></a>int64 cpu_shares</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p5746103111491"><a name="zh-cn_topic_0182207110_p5746103111491"></a><a name="zh-cn_topic_0182207110_p5746103111491"></a>所占CPU份额（相对于其他容器的相对权重）。<strong id="zh-cn_topic_0182207110_b18359133643614"><a name="zh-cn_topic_0182207110_b18359133643614"></a><a name="zh-cn_topic_0182207110_b18359133643614"></a> 默认值：0</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row47463316492"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p5746183117499"><a name="zh-cn_topic_0182207110_p5746183117499"></a><a name="zh-cn_topic_0182207110_p5746183117499"></a>int64 memory_limit_in_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p17746731114919"><a name="zh-cn_topic_0182207110_p17746731114919"></a><a name="zh-cn_topic_0182207110_p17746731114919"></a>内存限制（字节）。 <strong id="zh-cn_topic_0182207110_b18820940103614"><a name="zh-cn_topic_0182207110_b18820940103614"></a><a name="zh-cn_topic_0182207110_b18820940103614"></a>默认值：0</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row117463319495"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p1374723114913"><a name="zh-cn_topic_0182207110_p1374723114913"></a><a name="zh-cn_topic_0182207110_p1374723114913"></a>int64 oom_score_adj</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p11747731134911"><a name="zh-cn_topic_0182207110_p11747731134911"></a><a name="zh-cn_topic_0182207110_p11747731134911"></a>OOMScoreAdj用于调整oom-killer。 <strong id="zh-cn_topic_0182207110_b14735194416364"><a name="zh-cn_topic_0182207110_b14735194416364"></a><a name="zh-cn_topic_0182207110_b14735194416364"></a>默认值：0</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row2747153115491"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p1174793116499"><a name="zh-cn_topic_0182207110_p1174793116499"></a><a name="zh-cn_topic_0182207110_p1174793116499"></a>string cpuset_cpus</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p15747133111495"><a name="zh-cn_topic_0182207110_p15747133111495"></a><a name="zh-cn_topic_0182207110_p15747133111495"></a>指定容器使用的CPU核心。 <strong id="zh-cn_topic_0182207110_b118419484363"><a name="zh-cn_topic_0182207110_b118419484363"></a><a name="zh-cn_topic_0182207110_b118419484363"></a>默认值：“”</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row474713316497"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="zh-cn_topic_0182207110_p1474783184919"><a name="zh-cn_topic_0182207110_p1474783184919"></a><a name="zh-cn_topic_0182207110_p1474783184919"></a>string cpuset_mems</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="zh-cn_topic_0182207110_p6747331134912"><a name="zh-cn_topic_0182207110_p6747331134912"></a><a name="zh-cn_topic_0182207110_p6747331134912"></a>指定容器使用的内存节点。<strong id="zh-cn_topic_0182207110_b133071051163613"><a name="zh-cn_topic_0182207110_b133071051163613"></a><a name="zh-cn_topic_0182207110_b133071051163613"></a> 默认值：“”</strong></p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li597891416252"></a>**Image**

    Image信息描述一个镜像的基本数据。

    <a name="zh-cn_topic_0182207110_table17664516102"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row87661351121014"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0182207110_p1429813131216"><a name="zh-cn_topic_0182207110_p1429813131216"></a><a name="zh-cn_topic_0182207110_p1429813131216"></a><strong id="zh-cn_topic_0182207110_b201524295114"><a name="zh-cn_topic_0182207110_b201524295114"></a><a name="zh-cn_topic_0182207110_b201524295114"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0182207110_p87661251111019"><a name="zh-cn_topic_0182207110_p87661251111019"></a><a name="zh-cn_topic_0182207110_p87661251111019"></a><strong id="zh-cn_topic_0182207110_b07667511107"><a name="zh-cn_topic_0182207110_b07667511107"></a><a name="zh-cn_topic_0182207110_b07667511107"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row10766351101016"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0182207110_p127661551121010"><a name="zh-cn_topic_0182207110_p127661551121010"></a><a name="zh-cn_topic_0182207110_p127661551121010"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0182207110_p576745119102"><a name="zh-cn_topic_0182207110_p576745119102"></a><a name="zh-cn_topic_0182207110_p576745119102"></a>镜像ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row65303296131"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0182207110_p6531112941317"><a name="zh-cn_topic_0182207110_p6531112941317"></a><a name="zh-cn_topic_0182207110_p6531112941317"></a>repeated string repo_tags</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0182207110_p13172183421411"><a name="zh-cn_topic_0182207110_p13172183421411"></a><a name="zh-cn_topic_0182207110_p13172183421411"></a>镜像tag 名称 repo_tags</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row13356165612132"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0182207110_p9356135671310"><a name="zh-cn_topic_0182207110_p9356135671310"></a><a name="zh-cn_topic_0182207110_p9356135671310"></a>repeated string repo_digests</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0182207110_p15357185619138"><a name="zh-cn_topic_0182207110_p15357185619138"></a><a name="zh-cn_topic_0182207110_p15357185619138"></a>镜像digest信息</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row119913618153"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0182207110_p5991360151"><a name="zh-cn_topic_0182207110_p5991360151"></a><a name="zh-cn_topic_0182207110_p5991360151"></a>uint64 size</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0182207110_p89912068158"><a name="zh-cn_topic_0182207110_p89912068158"></a><a name="zh-cn_topic_0182207110_p89912068158"></a>镜像大小</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row19825183114156"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0182207110_p6825331191518"><a name="zh-cn_topic_0182207110_p6825331191518"></a><a name="zh-cn_topic_0182207110_p6825331191518"></a>Int64Value</a> uid</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0182207110_p12825143181515"><a name="zh-cn_topic_0182207110_p12825143181515"></a><a name="zh-cn_topic_0182207110_p12825143181515"></a>镜像默认用户UID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row84999114169"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0182207110_p104996115169"><a name="zh-cn_topic_0182207110_p104996115169"></a><a name="zh-cn_topic_0182207110_p104996115169"></a>string username</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0182207110_p1249951191619"><a name="zh-cn_topic_0182207110_p1249951191619"></a><a name="zh-cn_topic_0182207110_p1249951191619"></a>镜像默认用户名称</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ImageSpec**

    表示镜像的内部数据结构，当前，ImageSpec只封装容器镜像名称

    <a name="zh-cn_topic_0182207110_table312519561623"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row18125195617212"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p11257567212"><a name="zh-cn_topic_0182207110_p11257567212"></a><a name="zh-cn_topic_0182207110_p11257567212"></a><strong id="zh-cn_topic_0182207110_b91256561827"><a name="zh-cn_topic_0182207110_b91256561827"></a><a name="zh-cn_topic_0182207110_b91256561827"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p712510568216"><a name="zh-cn_topic_0182207110_p712510568216"></a><a name="zh-cn_topic_0182207110_p712510568216"></a><strong id="zh-cn_topic_0182207110_b6125756624"><a name="zh-cn_topic_0182207110_b6125756624"></a><a name="zh-cn_topic_0182207110_b6125756624"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row412515561825"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1712575615213"><a name="zh-cn_topic_0182207110_p1712575615213"></a><a name="zh-cn_topic_0182207110_p1712575615213"></a>string image</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p8125956526"><a name="zh-cn_topic_0182207110_p8125956526"></a><a name="zh-cn_topic_0182207110_p8125956526"></a>容器镜像名</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li3285401546"></a>**StorageIdentifier**

    唯一定义storage的标识

    <a name="zh-cn_topic_0182207110_table22818405417"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row22819405420"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p18283400411"><a name="zh-cn_topic_0182207110_p18283400411"></a><a name="zh-cn_topic_0182207110_p18283400411"></a><strong id="zh-cn_topic_0182207110_b528840047"><a name="zh-cn_topic_0182207110_b528840047"></a><a name="zh-cn_topic_0182207110_b528840047"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p8281140541"><a name="zh-cn_topic_0182207110_p8281140541"></a><a name="zh-cn_topic_0182207110_p8281140541"></a><strong id="zh-cn_topic_0182207110_b128940142"><a name="zh-cn_topic_0182207110_b128940142"></a><a name="zh-cn_topic_0182207110_b128940142"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row12817404411"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p942172311510"><a name="zh-cn_topic_0182207110_p942172311510"></a><a name="zh-cn_topic_0182207110_p942172311510"></a>string uuid</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p62920401145"><a name="zh-cn_topic_0182207110_p62920401145"></a><a name="zh-cn_topic_0182207110_p62920401145"></a>设备的UUID</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **FilesystemUsage**

    <a name="zh-cn_topic_0182207110_table168635217318"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row486218218314"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p3862192117316"><a name="zh-cn_topic_0182207110_p3862192117316"></a><a name="zh-cn_topic_0182207110_p3862192117316"></a><strong id="zh-cn_topic_0182207110_b138621621934"><a name="zh-cn_topic_0182207110_b138621621934"></a><a name="zh-cn_topic_0182207110_b138621621934"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p208627215314"><a name="zh-cn_topic_0182207110_p208627215314"></a><a name="zh-cn_topic_0182207110_p208627215314"></a><strong id="zh-cn_topic_0182207110_b17862721038"><a name="zh-cn_topic_0182207110_b17862721038"></a><a name="zh-cn_topic_0182207110_b17862721038"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1386220217318"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p18862192111312"><a name="zh-cn_topic_0182207110_p18862192111312"></a><a name="zh-cn_topic_0182207110_p18862192111312"></a>int64 timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p108622211933"><a name="zh-cn_topic_0182207110_p108622211933"></a><a name="zh-cn_topic_0182207110_p108622211933"></a>收集文件系统信息时的时间戳</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row486220211535"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p108628211934"><a name="zh-cn_topic_0182207110_p108628211934"></a><a name="zh-cn_topic_0182207110_p108628211934"></a>StorageIdentifier</a> storage_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p1862142116311"><a name="zh-cn_topic_0182207110_p1862142116311"></a><a name="zh-cn_topic_0182207110_p1862142116311"></a>存储镜像的文件系统UUID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row986320211835"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p108631721737"><a name="zh-cn_topic_0182207110_p108631721737"></a><a name="zh-cn_topic_0182207110_p108631721737"></a>UInt64Value</a> used_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p1086342118315"><a name="zh-cn_topic_0182207110_p1086342118315"></a><a name="zh-cn_topic_0182207110_p1086342118315"></a>存储镜像元数据的大小</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row48635211838"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p5863202112317"><a name="zh-cn_topic_0182207110_p5863202112317"></a><a name="zh-cn_topic_0182207110_p5863202112317"></a>UInt64Value</a> inodes_used</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p1486312210314"><a name="zh-cn_topic_0182207110_p1486312210314"></a><a name="zh-cn_topic_0182207110_p1486312210314"></a>存储镜像元数据的inodes个数</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **AuthConfig**

    <a name="zh-cn_topic_0182207110_table51991144738"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row419944410312"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p1519964418314"><a name="zh-cn_topic_0182207110_p1519964418314"></a><a name="zh-cn_topic_0182207110_p1519964418314"></a><strong id="zh-cn_topic_0182207110_b51995449315"><a name="zh-cn_topic_0182207110_b51995449315"></a><a name="zh-cn_topic_0182207110_b51995449315"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p1319910447317"><a name="zh-cn_topic_0182207110_p1319910447317"></a><a name="zh-cn_topic_0182207110_p1319910447317"></a><strong id="zh-cn_topic_0182207110_b319914418314"><a name="zh-cn_topic_0182207110_b319914418314"></a><a name="zh-cn_topic_0182207110_b319914418314"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row819918441338"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p1199174414319"><a name="zh-cn_topic_0182207110_p1199174414319"></a><a name="zh-cn_topic_0182207110_p1199174414319"></a>string username</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p16199194419310"><a name="zh-cn_topic_0182207110_p16199194419310"></a><a name="zh-cn_topic_0182207110_p16199194419310"></a>下载镜像使用的用户名</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row01991844833"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p1119910441131"><a name="zh-cn_topic_0182207110_p1119910441131"></a><a name="zh-cn_topic_0182207110_p1119910441131"></a>string password</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p141998442310"><a name="zh-cn_topic_0182207110_p141998442310"></a><a name="zh-cn_topic_0182207110_p141998442310"></a>下载镜像使用的密码</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row21992441835"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p20199544734"><a name="zh-cn_topic_0182207110_p20199544734"></a><a name="zh-cn_topic_0182207110_p20199544734"></a>string auth</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p219917441631"><a name="zh-cn_topic_0182207110_p219917441631"></a><a name="zh-cn_topic_0182207110_p219917441631"></a>下载镜像时使用的认证信息，base64编码</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row161994442311"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p1019917448312"><a name="zh-cn_topic_0182207110_p1019917448312"></a><a name="zh-cn_topic_0182207110_p1019917448312"></a>string server_address</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p1219915441319"><a name="zh-cn_topic_0182207110_p1219915441319"></a><a name="zh-cn_topic_0182207110_p1219915441319"></a>下载镜像的服务器地址，暂不支持</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row141995442310"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p5199944834"><a name="zh-cn_topic_0182207110_p5199944834"></a><a name="zh-cn_topic_0182207110_p5199944834"></a>string identity_token</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p7199134414318"><a name="zh-cn_topic_0182207110_p7199134414318"></a><a name="zh-cn_topic_0182207110_p7199134414318"></a>用于与镜像仓库鉴权的令牌信息，暂不支持</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row11199174420317"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p5199174410316"><a name="zh-cn_topic_0182207110_p5199174410316"></a><a name="zh-cn_topic_0182207110_p5199174410316"></a>string registry_token</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p2199104418310"><a name="zh-cn_topic_0182207110_p2199104418310"></a><a name="zh-cn_topic_0182207110_p2199104418310"></a>用于与镜像仓库交互的令牌信息，暂不支持</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **Container**

    用于描述容器信息，例如ID, 状态等。

    <a name="zh-cn_topic_0182207110_table1254610481413"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row195471481217"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p115477481918"><a name="zh-cn_topic_0182207110_p115477481918"></a><a name="zh-cn_topic_0182207110_p115477481918"></a><strong id="zh-cn_topic_0182207110_b7547144819115"><a name="zh-cn_topic_0182207110_b7547144819115"></a><a name="zh-cn_topic_0182207110_b7547144819115"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p105473484113"><a name="zh-cn_topic_0182207110_p105473484113"></a><a name="zh-cn_topic_0182207110_p105473484113"></a><strong id="zh-cn_topic_0182207110_b254724811119"><a name="zh-cn_topic_0182207110_b254724811119"></a><a name="zh-cn_topic_0182207110_b254724811119"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row165478486115"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p155477488113"><a name="zh-cn_topic_0182207110_p155477488113"></a><a name="zh-cn_topic_0182207110_p155477488113"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p254714819115"><a name="zh-cn_topic_0182207110_p254714819115"></a><a name="zh-cn_topic_0182207110_p254714819115"></a>container的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row17650117434"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p46500717319"><a name="zh-cn_topic_0182207110_p46500717319"></a><a name="zh-cn_topic_0182207110_p46500717319"></a>string pod_sandbox_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p36501771037"><a name="zh-cn_topic_0182207110_p36501771037"></a><a name="zh-cn_topic_0182207110_p36501771037"></a>该容器所属的sandbox的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row35471348816"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p8547144813114"><a name="zh-cn_topic_0182207110_p8547144813114"></a><a name="zh-cn_topic_0182207110_p8547144813114"></a>ContainerMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p85471948314"><a name="zh-cn_topic_0182207110_p85471948314"></a><a name="zh-cn_topic_0182207110_p85471948314"></a>container的元数据</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row0547204818111"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p125479482116"><a name="zh-cn_topic_0182207110_p125479482116"></a><a name="zh-cn_topic_0182207110_p125479482116"></a>ImageSpec</a> image</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1454794816115"><a name="zh-cn_topic_0182207110_p1454794816115"></a><a name="zh-cn_topic_0182207110_p1454794816115"></a>镜像规格</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row254754815111"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p185477486110"><a name="zh-cn_topic_0182207110_p185477486110"></a><a name="zh-cn_topic_0182207110_p185477486110"></a>string image_ref</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p17548648315"><a name="zh-cn_topic_0182207110_p17548648315"></a><a name="zh-cn_topic_0182207110_p17548648315"></a>代表容器使用的镜像，对大多数runtime来产，这是一个image ID值</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1354819481814"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p4734152614413"><a name="zh-cn_topic_0182207110_p4734152614413"></a><a name="zh-cn_topic_0182207110_p4734152614413"></a>ContainerState</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p454844819113"><a name="zh-cn_topic_0182207110_p454844819113"></a><a name="zh-cn_topic_0182207110_p454844819113"></a>container的状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row7548548710"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p165483486112"><a name="zh-cn_topic_0182207110_p165483486112"></a><a name="zh-cn_topic_0182207110_p165483486112"></a>int64 created_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1754819488120"><a name="zh-cn_topic_0182207110_p1754819488120"></a><a name="zh-cn_topic_0182207110_p1754819488120"></a>container的创建时间戳，单位为纳秒</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row854854811116"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p45483483115"><a name="zh-cn_topic_0182207110_p45483483115"></a><a name="zh-cn_topic_0182207110_p45483483115"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p45482048819"><a name="zh-cn_topic_0182207110_p45482048819"></a><a name="zh-cn_topic_0182207110_p45482048819"></a>可用于标识单个或一系列container的键值对</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row25481481218"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p15548248314"><a name="zh-cn_topic_0182207110_p15548248314"></a><a name="zh-cn_topic_0182207110_p15548248314"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p16549448617"><a name="zh-cn_topic_0182207110_p16549448617"></a><a name="zh-cn_topic_0182207110_p16549448617"></a>存储任意信息的键值对，这些值是不可被runtime更改的</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerStatus**

    用于描述容器状态信息

    <a name="zh-cn_topic_0182207110_table6354237760"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row535593712618"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p16355237468"><a name="zh-cn_topic_0182207110_p16355237468"></a><a name="zh-cn_topic_0182207110_p16355237468"></a><strong id="zh-cn_topic_0182207110_b1535593710617"><a name="zh-cn_topic_0182207110_b1535593710617"></a><a name="zh-cn_topic_0182207110_b1535593710617"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p7355183711613"><a name="zh-cn_topic_0182207110_p7355183711613"></a><a name="zh-cn_topic_0182207110_p7355183711613"></a><strong id="zh-cn_topic_0182207110_b23551037763"><a name="zh-cn_topic_0182207110_b23551037763"></a><a name="zh-cn_topic_0182207110_b23551037763"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row113555379617"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p123556374611"><a name="zh-cn_topic_0182207110_p123556374611"></a><a name="zh-cn_topic_0182207110_p123556374611"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p7355123718615"><a name="zh-cn_topic_0182207110_p7355123718615"></a><a name="zh-cn_topic_0182207110_p7355123718615"></a>container的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row143558371367"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p3355123712618"><a name="zh-cn_topic_0182207110_p3355123712618"></a><a name="zh-cn_topic_0182207110_p3355123712618"></a>ContainerMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p63552379614"><a name="zh-cn_topic_0182207110_p63552379614"></a><a name="zh-cn_topic_0182207110_p63552379614"></a>container的元数据</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row18356193715616"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p635613719614"><a name="zh-cn_topic_0182207110_p635613719614"></a><a name="zh-cn_topic_0182207110_p635613719614"></a>ContainerState</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p33564378616"><a name="zh-cn_topic_0182207110_p33564378616"></a><a name="zh-cn_topic_0182207110_p33564378616"></a>container的状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row183561237469"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p23569378616"><a name="zh-cn_topic_0182207110_p23569378616"></a><a name="zh-cn_topic_0182207110_p23569378616"></a>int64 created_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p113562378617"><a name="zh-cn_topic_0182207110_p113562378617"></a><a name="zh-cn_topic_0182207110_p113562378617"></a>container的创建时间戳，单位为纳秒</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row351411324713"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p55142321472"><a name="zh-cn_topic_0182207110_p55142321472"></a><a name="zh-cn_topic_0182207110_p55142321472"></a>int64 started_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p151453217720"><a name="zh-cn_topic_0182207110_p151453217720"></a><a name="zh-cn_topic_0182207110_p151453217720"></a>container启动时的时间戳，单位为纳秒</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row13333183511712"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1033311355719"><a name="zh-cn_topic_0182207110_p1033311355719"></a><a name="zh-cn_topic_0182207110_p1033311355719"></a>int64 finished_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p633310356713"><a name="zh-cn_topic_0182207110_p633310356713"></a><a name="zh-cn_topic_0182207110_p633310356713"></a>container退出时的时间戳，单位为纳秒</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row847917471875"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1847974717715"><a name="zh-cn_topic_0182207110_p1847974717715"></a><a name="zh-cn_topic_0182207110_p1847974717715"></a>int32 exit_code</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p17479047871"><a name="zh-cn_topic_0182207110_p17479047871"></a><a name="zh-cn_topic_0182207110_p17479047871"></a>容器退出码</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row15383151081"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1161122215912"><a name="zh-cn_topic_0182207110_p1161122215912"></a><a name="zh-cn_topic_0182207110_p1161122215912"></a>ImageSpec</a> image</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p66114223910"><a name="zh-cn_topic_0182207110_p66114223910"></a><a name="zh-cn_topic_0182207110_p66114223910"></a>镜像规格</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row15491758876"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p24981230093"><a name="zh-cn_topic_0182207110_p24981230093"></a><a name="zh-cn_topic_0182207110_p24981230093"></a>string image_ref</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p104987301290"><a name="zh-cn_topic_0182207110_p104987301290"></a><a name="zh-cn_topic_0182207110_p104987301290"></a>代表容器使用的镜像，对大多数runtime来产，这是一个image ID值</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row998013531174"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p39801533710"><a name="zh-cn_topic_0182207110_p39801533710"></a><a name="zh-cn_topic_0182207110_p39801533710"></a>string reason</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1098012531671"><a name="zh-cn_topic_0182207110_p1098012531671"></a><a name="zh-cn_topic_0182207110_p1098012531671"></a>简要描述为什么容器处于当前状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row6438205212719"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p164381252671"><a name="zh-cn_topic_0182207110_p164381252671"></a><a name="zh-cn_topic_0182207110_p164381252671"></a>string message</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p8438155214711"><a name="zh-cn_topic_0182207110_p8438155214711"></a><a name="zh-cn_topic_0182207110_p8438155214711"></a>易于人工阅读的信息，用于表述容器处于当前状态的原因</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1135715371362"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1835718378617"><a name="zh-cn_topic_0182207110_p1835718378617"></a><a name="zh-cn_topic_0182207110_p1835718378617"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1935703714616"><a name="zh-cn_topic_0182207110_p1935703714616"></a><a name="zh-cn_topic_0182207110_p1935703714616"></a>可用于标识单个或一系列container的键值对</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row33571037065"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p16357113712616"><a name="zh-cn_topic_0182207110_p16357113712616"></a><a name="zh-cn_topic_0182207110_p16357113712616"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p73573371661"><a name="zh-cn_topic_0182207110_p73573371661"></a><a name="zh-cn_topic_0182207110_p73573371661"></a>存储任意信息的键值对，这些值是不可被runtime更改的</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row265513491393"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1465520491098"><a name="zh-cn_topic_0182207110_p1465520491098"></a><a name="zh-cn_topic_0182207110_p1465520491098"></a>repeated Mount</a> mounts</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p26551449198"><a name="zh-cn_topic_0182207110_p26551449198"></a><a name="zh-cn_topic_0182207110_p26551449198"></a>容器的挂载点信息</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row88661051795"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p78663511298"><a name="zh-cn_topic_0182207110_p78663511298"></a><a name="zh-cn_topic_0182207110_p78663511298"></a>string log_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p786614516915"><a name="zh-cn_topic_0182207110_p786614516915"></a><a name="zh-cn_topic_0182207110_p786614516915"></a>容器日志文件路径，该文件位于PodSandboxConfig</a>中配置的log_directory文件夹下</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerStatsFilter**

    用于列出container stats时添加过滤条件，多个条件取交集显示

    <a name="zh-cn_topic_0182207110_table78595160148"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1860171616141"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p188605168143"><a name="zh-cn_topic_0182207110_p188605168143"></a><a name="zh-cn_topic_0182207110_p188605168143"></a><strong id="zh-cn_topic_0182207110_b486021611418"><a name="zh-cn_topic_0182207110_b486021611418"></a><a name="zh-cn_topic_0182207110_b486021611418"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p78601916161416"><a name="zh-cn_topic_0182207110_p78601916161416"></a><a name="zh-cn_topic_0182207110_p78601916161416"></a><strong id="zh-cn_topic_0182207110_b086011167149"><a name="zh-cn_topic_0182207110_b086011167149"></a><a name="zh-cn_topic_0182207110_b086011167149"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row486021618140"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p38609162146"><a name="zh-cn_topic_0182207110_p38609162146"></a><a name="zh-cn_topic_0182207110_p38609162146"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p5860171621418"><a name="zh-cn_topic_0182207110_p5860171621418"></a><a name="zh-cn_topic_0182207110_p5860171621418"></a>container的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row18611316111416"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p586191610143"><a name="zh-cn_topic_0182207110_p586191610143"></a><a name="zh-cn_topic_0182207110_p586191610143"></a>string pod_sandbox_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p18861171641420"><a name="zh-cn_topic_0182207110_p18861171641420"></a><a name="zh-cn_topic_0182207110_p18861171641420"></a>sandbox的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1786381671416"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p138631016171414"><a name="zh-cn_topic_0182207110_p138631016171414"></a><a name="zh-cn_topic_0182207110_p138631016171414"></a>map&lt;string, string&gt; label_selector</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p5863181641417"><a name="zh-cn_topic_0182207110_p5863181641417"></a><a name="zh-cn_topic_0182207110_p5863181641417"></a>container的labels，label只支持完全匹配，不支持正则匹配</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerStats**

    用于列出container stats时添加过滤条件，多个条件取交集显示

    <a name="zh-cn_topic_0182207110_table4568155110218"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row55685519212"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p18569195152112"><a name="zh-cn_topic_0182207110_p18569195152112"></a><a name="zh-cn_topic_0182207110_p18569195152112"></a><strong id="zh-cn_topic_0182207110_b1856995113213"><a name="zh-cn_topic_0182207110_b1856995113213"></a><a name="zh-cn_topic_0182207110_b1856995113213"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p165695517211"><a name="zh-cn_topic_0182207110_p165695517211"></a><a name="zh-cn_topic_0182207110_p165695517211"></a><strong id="zh-cn_topic_0182207110_b9569145132120"><a name="zh-cn_topic_0182207110_b9569145132120"></a><a name="zh-cn_topic_0182207110_b9569145132120"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row65691151172118"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p056915162116"><a name="zh-cn_topic_0182207110_p056915162116"></a><a name="zh-cn_topic_0182207110_p056915162116"></a>ContainerAttributes</a> attributes</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p7569851172114"><a name="zh-cn_topic_0182207110_p7569851172114"></a><a name="zh-cn_topic_0182207110_p7569851172114"></a>容器的信息</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row19569851182110"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1456916511218"><a name="zh-cn_topic_0182207110_p1456916511218"></a><a name="zh-cn_topic_0182207110_p1456916511218"></a>CpuUsage</a> cpu</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p55691751102116"><a name="zh-cn_topic_0182207110_p55691751102116"></a><a name="zh-cn_topic_0182207110_p55691751102116"></a>CPU使用情况</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row135693514213"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p15569151172116"><a name="zh-cn_topic_0182207110_p15569151172116"></a><a name="zh-cn_topic_0182207110_p15569151172116"></a>MemoryUsage</a> memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p20569125122113"><a name="zh-cn_topic_0182207110_p20569125122113"></a><a name="zh-cn_topic_0182207110_p20569125122113"></a>内存使用情况</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row65759374221"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p145767370228"><a name="zh-cn_topic_0182207110_p145767370228"></a><a name="zh-cn_topic_0182207110_p145767370228"></a>FilesystemUsage</a> writable_layer</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p0576203717227"><a name="zh-cn_topic_0182207110_p0576203717227"></a><a name="zh-cn_topic_0182207110_p0576203717227"></a>可写层使用情况</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li6207185712312"></a>**ContainerAttributes**

    列出container的基本信息

    <a name="zh-cn_topic_0182207110_table7208185713230"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row16208857162316"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p19208135716238"><a name="zh-cn_topic_0182207110_p19208135716238"></a><a name="zh-cn_topic_0182207110_p19208135716238"></a><strong id="zh-cn_topic_0182207110_b1020835716237"><a name="zh-cn_topic_0182207110_b1020835716237"></a><a name="zh-cn_topic_0182207110_b1020835716237"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1020875792313"><a name="zh-cn_topic_0182207110_p1020875792313"></a><a name="zh-cn_topic_0182207110_p1020875792313"></a><strong id="zh-cn_topic_0182207110_b14208155716235"><a name="zh-cn_topic_0182207110_b14208155716235"></a><a name="zh-cn_topic_0182207110_b14208155716235"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row22084577234"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p920855711232"><a name="zh-cn_topic_0182207110_p920855711232"></a><a name="zh-cn_topic_0182207110_p920855711232"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p18208457112319"><a name="zh-cn_topic_0182207110_p18208457112319"></a><a name="zh-cn_topic_0182207110_p18208457112319"></a>容器的ID</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row102081057142317"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1520835712310"><a name="zh-cn_topic_0182207110_p1520835712310"></a><a name="zh-cn_topic_0182207110_p1520835712310"></a>ContainerMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p13209357162311"><a name="zh-cn_topic_0182207110_p13209357162311"></a><a name="zh-cn_topic_0182207110_p13209357162311"></a>容器的metadata</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row10209165713237"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p2874155122512"><a name="zh-cn_topic_0182207110_p2874155122512"></a><a name="zh-cn_topic_0182207110_p2874155122512"></a>map&lt;string,string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p13209145712233"><a name="zh-cn_topic_0182207110_p13209145712233"></a><a name="zh-cn_topic_0182207110_p13209145712233"></a>可用于标识单个或一系列container的键值对</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row120919574235"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p420955742310"><a name="zh-cn_topic_0182207110_p420955742310"></a><a name="zh-cn_topic_0182207110_p420955742310"></a>map&lt;string,string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p11210165782314"><a name="zh-cn_topic_0182207110_p11210165782314"></a><a name="zh-cn_topic_0182207110_p11210165782314"></a>存储任意信息的键值对，这些值是不可被runtime更改的</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li1367131122711"></a>**CpuUsage**

    列出container的CPU使用信息

    <a name="zh-cn_topic_0182207110_table103679116272"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row113674110278"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p13681416276"><a name="zh-cn_topic_0182207110_p13681416276"></a><a name="zh-cn_topic_0182207110_p13681416276"></a><strong id="zh-cn_topic_0182207110_b11368191112715"><a name="zh-cn_topic_0182207110_b11368191112715"></a><a name="zh-cn_topic_0182207110_b11368191112715"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p1736861142719"><a name="zh-cn_topic_0182207110_p1736861142719"></a><a name="zh-cn_topic_0182207110_p1736861142719"></a><strong id="zh-cn_topic_0182207110_b8368913271"><a name="zh-cn_topic_0182207110_b8368913271"></a><a name="zh-cn_topic_0182207110_b8368913271"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row193687118272"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p96863242710"><a name="zh-cn_topic_0182207110_p96863242710"></a><a name="zh-cn_topic_0182207110_p96863242710"></a>int64 timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p17368412273"><a name="zh-cn_topic_0182207110_p17368412273"></a><a name="zh-cn_topic_0182207110_p17368412273"></a>时间戳</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row123686112271"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p2635942132713"><a name="zh-cn_topic_0182207110_p2635942132713"></a><a name="zh-cn_topic_0182207110_p2635942132713"></a>UInt64Value usage_core_nano_seconds</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p103680172713"><a name="zh-cn_topic_0182207110_p103680172713"></a><a name="zh-cn_topic_0182207110_p103680172713"></a>CPU的使用值，单位/纳秒</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li81221520111718"></a>**MemoryUsage**

    列出container的内存使用信息

    <a name="zh-cn_topic_0182207110_table81231820141716"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row1012332021712"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p11233203174"><a name="zh-cn_topic_0182207110_p11233203174"></a><a name="zh-cn_topic_0182207110_p11233203174"></a><strong id="zh-cn_topic_0182207110_b5123142014178"><a name="zh-cn_topic_0182207110_b5123142014178"></a><a name="zh-cn_topic_0182207110_b5123142014178"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p81231920111718"><a name="zh-cn_topic_0182207110_p81231920111718"></a><a name="zh-cn_topic_0182207110_p81231920111718"></a><strong id="zh-cn_topic_0182207110_b19123152010177"><a name="zh-cn_topic_0182207110_b19123152010177"></a><a name="zh-cn_topic_0182207110_b19123152010177"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row1012362017178"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1612318202170"><a name="zh-cn_topic_0182207110_p1612318202170"></a><a name="zh-cn_topic_0182207110_p1612318202170"></a>int64 timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p3124192071710"><a name="zh-cn_topic_0182207110_p3124192071710"></a><a name="zh-cn_topic_0182207110_p3124192071710"></a>时间戳</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1312442021716"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p1712412071712"><a name="zh-cn_topic_0182207110_p1712412071712"></a><a name="zh-cn_topic_0182207110_p1712412071712"></a>UInt64Value working_set_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p11241209172"><a name="zh-cn_topic_0182207110_p11241209172"></a><a name="zh-cn_topic_0182207110_p11241209172"></a>内存的使用值</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li1606183118189"></a>**FilesystemUsage**

    列出container的读写层信息

    <a name="zh-cn_topic_0182207110_table166071315186"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0182207110_row196071731201813"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="zh-cn_topic_0182207110_p13607163114183"><a name="zh-cn_topic_0182207110_p13607163114183"></a><a name="zh-cn_topic_0182207110_p13607163114183"></a><strong id="zh-cn_topic_0182207110_b3608931171814"><a name="zh-cn_topic_0182207110_b3608931171814"></a><a name="zh-cn_topic_0182207110_b3608931171814"></a>参数成员</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="zh-cn_topic_0182207110_p16608103181811"><a name="zh-cn_topic_0182207110_p16608103181811"></a><a name="zh-cn_topic_0182207110_p16608103181811"></a><strong id="zh-cn_topic_0182207110_b6608113114183"><a name="zh-cn_topic_0182207110_b6608113114183"></a><a name="zh-cn_topic_0182207110_b6608113114183"></a>描述</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0182207110_row3608731151813"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p360803151817"><a name="zh-cn_topic_0182207110_p360803151817"></a><a name="zh-cn_topic_0182207110_p360803151817"></a>int64 timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p1860973118188"><a name="zh-cn_topic_0182207110_p1860973118188"></a><a name="zh-cn_topic_0182207110_p1860973118188"></a>时间戳</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row106094314181"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p17609113181811"><a name="zh-cn_topic_0182207110_p17609113181811"></a><a name="zh-cn_topic_0182207110_p17609113181811"></a>StorageIdentifier storage_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p16609231151818"><a name="zh-cn_topic_0182207110_p16609231151818"></a><a name="zh-cn_topic_0182207110_p16609231151818"></a>可写层目录</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row368116322190"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p968113281915"><a name="zh-cn_topic_0182207110_p968113281915"></a><a name="zh-cn_topic_0182207110_p968113281915"></a>UInt64Value used_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p2681193221911"><a name="zh-cn_topic_0182207110_p2681193221911"></a><a name="zh-cn_topic_0182207110_p2681193221911"></a>镜像在可写层的占用字节</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row29601026152012"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="zh-cn_topic_0182207110_p896002618203"><a name="zh-cn_topic_0182207110_p896002618203"></a><a name="zh-cn_topic_0182207110_p896002618203"></a>UInt64Value inodes_used</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="zh-cn_topic_0182207110_p17960122616208"><a name="zh-cn_topic_0182207110_p17960122616208"></a><a name="zh-cn_topic_0182207110_p17960122616208"></a>镜像在可写层的占用inode数</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li19916726173311"></a>**Device**

    指定待挂载至容器的主机卷

    <a name="zh-cn_topic_0182207110_table178013246294"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row0807249290"><td class="cellrowborder" valign="top" width="40.61%"><p id="zh-cn_topic_0182207110_p15804244293"><a name="zh-cn_topic_0182207110_p15804244293"></a><a name="zh-cn_topic_0182207110_p15804244293"></a><strong id="zh-cn_topic_0182207110_b1380524152918"><a name="zh-cn_topic_0182207110_b1380524152918"></a><a name="zh-cn_topic_0182207110_b1380524152918"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="59.39%"><p id="zh-cn_topic_0182207110_p14801324132915"><a name="zh-cn_topic_0182207110_p14801324132915"></a><a name="zh-cn_topic_0182207110_p14801324132915"></a><strong id="zh-cn_topic_0182207110_b88032412298"><a name="zh-cn_topic_0182207110_b88032412298"></a><a name="zh-cn_topic_0182207110_b88032412298"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row98002422914"><td class="cellrowborder" valign="top" width="40.61%"><p id="zh-cn_topic_0182207110_p28062414297"><a name="zh-cn_topic_0182207110_p28062414297"></a><a name="zh-cn_topic_0182207110_p28062414297"></a>string container_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.39%"><p id="zh-cn_topic_0182207110_p188019244297"><a name="zh-cn_topic_0182207110_p188019244297"></a><a name="zh-cn_topic_0182207110_p188019244297"></a>容器内的挂载路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row48042417299"><td class="cellrowborder" valign="top" width="40.61%"><p id="zh-cn_topic_0182207110_p88082412293"><a name="zh-cn_topic_0182207110_p88082412293"></a><a name="zh-cn_topic_0182207110_p88082412293"></a>string host_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.39%"><p id="zh-cn_topic_0182207110_p118062420297"><a name="zh-cn_topic_0182207110_p118062420297"></a><a name="zh-cn_topic_0182207110_p118062420297"></a>主机上的挂载路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row3801624162913"><td class="cellrowborder" valign="top" width="40.61%"><p id="zh-cn_topic_0182207110_p51611220303"><a name="zh-cn_topic_0182207110_p51611220303"></a><a name="zh-cn_topic_0182207110_p51611220303"></a>string permissions</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.39%"><p id="zh-cn_topic_0182207110_p10801124132918"><a name="zh-cn_topic_0182207110_p10801124132918"></a><a name="zh-cn_topic_0182207110_p10801124132918"></a>设备的Cgroup权限，（r允许容器从指定的设备读取; w允许容器从指定的设备写入; m允许容器创建尚不存在的设备文件)</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li13021147134718"></a>**LinuxContainerConfig**

    包含特定于Linux平台的配置

    <a name="zh-cn_topic_0182207110_table483195210322"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row383195216323"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p58335233213"><a name="zh-cn_topic_0182207110_p58335233213"></a><a name="zh-cn_topic_0182207110_p58335233213"></a><strong id="zh-cn_topic_0182207110_b118345233215"><a name="zh-cn_topic_0182207110_b118345233215"></a><a name="zh-cn_topic_0182207110_b118345233215"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p13831852193219"><a name="zh-cn_topic_0182207110_p13831852193219"></a><a name="zh-cn_topic_0182207110_p13831852193219"></a><strong id="zh-cn_topic_0182207110_b1483145210327"><a name="zh-cn_topic_0182207110_b1483145210327"></a><a name="zh-cn_topic_0182207110_b1483145210327"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row98355283211"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p199781557193510"><a name="zh-cn_topic_0182207110_p199781557193510"></a><a name="zh-cn_topic_0182207110_p199781557193510"></a>LinuxContainerResources</a> resources</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p11994153633617"><a name="zh-cn_topic_0182207110_p11994153633617"></a><a name="zh-cn_topic_0182207110_p11994153633617"></a>容器的资源规范</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1283115217326"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p47151393618"><a name="zh-cn_topic_0182207110_p47151393618"></a><a name="zh-cn_topic_0182207110_p47151393618"></a>LinuxContainerSecurityContext</a> security_context</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p1841152153213"><a name="zh-cn_topic_0182207110_p1841152153213"></a><a name="zh-cn_topic_0182207110_p1841152153213"></a>容器的Linux容器安全配置</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerConfig**

    包含用于创建容器的所有必需和可选字段

    <a name="zh-cn_topic_0182207110_table75744214217"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row35748215420"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p1957472104212"><a name="zh-cn_topic_0182207110_p1957472104212"></a><a name="zh-cn_topic_0182207110_p1957472104212"></a><strong id="zh-cn_topic_0182207110_b205741120423"><a name="zh-cn_topic_0182207110_b205741120423"></a><a name="zh-cn_topic_0182207110_b205741120423"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p1657416234216"><a name="zh-cn_topic_0182207110_p1657416234216"></a><a name="zh-cn_topic_0182207110_p1657416234216"></a><strong id="zh-cn_topic_0182207110_b1457517224210"><a name="zh-cn_topic_0182207110_b1457517224210"></a><a name="zh-cn_topic_0182207110_b1457517224210"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row17575122124214"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p10388113084414"><a name="zh-cn_topic_0182207110_p10388113084414"></a><a name="zh-cn_topic_0182207110_p10388113084414"></a>ContainerMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p16489112274513"><a name="zh-cn_topic_0182207110_p16489112274513"></a><a name="zh-cn_topic_0182207110_p16489112274513"></a>容器的元数据。 此信息将唯一标识容器，运行时应利用此信息来确保正确操作。 运行时也可以使用此信息来提升UX（用户体检设计），例如通过构造可读名称。<strong id="zh-cn_topic_0182207110_b781861145611"><a name="zh-cn_topic_0182207110_b781861145611"></a><a name="zh-cn_topic_0182207110_b781861145611"></a>(必选)</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row165752274211"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p20397114134715"><a name="zh-cn_topic_0182207110_p20397114134715"></a><a name="zh-cn_topic_0182207110_p20397114134715"></a>ImageSpec</a> image</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p125751227425"><a name="zh-cn_topic_0182207110_p125751227425"></a><a name="zh-cn_topic_0182207110_p125751227425"></a>容器使用的镜像  <strong id="zh-cn_topic_0182207110_b93061816135614"><a name="zh-cn_topic_0182207110_b93061816135614"></a><a name="zh-cn_topic_0182207110_b93061816135614"></a>(必选)</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1757512104211"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p1093425315472"><a name="zh-cn_topic_0182207110_p1093425315472"></a><a name="zh-cn_topic_0182207110_p1093425315472"></a>repeated string command</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p14575520422"><a name="zh-cn_topic_0182207110_p14575520422"></a><a name="zh-cn_topic_0182207110_p14575520422"></a>待执行的命令  <strong id="zh-cn_topic_0182207110_b398016296349"><a name="zh-cn_topic_0182207110_b398016296349"></a><a name="zh-cn_topic_0182207110_b398016296349"></a>默认值： "/bin/sh"</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row15631191674812"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p16494161225018"><a name="zh-cn_topic_0182207110_p16494161225018"></a><a name="zh-cn_topic_0182207110_p16494161225018"></a>repeated string args</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p1463191694820"><a name="zh-cn_topic_0182207110_p1463191694820"></a><a name="zh-cn_topic_0182207110_p1463191694820"></a>待执行命令的参数</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row15929104004811"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p12334191811500"><a name="zh-cn_topic_0182207110_p12334191811500"></a><a name="zh-cn_topic_0182207110_p12334191811500"></a>string working_dir</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p159291240184818"><a name="zh-cn_topic_0182207110_p159291240184818"></a><a name="zh-cn_topic_0182207110_p159291240184818"></a>命令执行的当前工作路径</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1640142916501"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p74711043155012"><a name="zh-cn_topic_0182207110_p74711043155012"></a><a name="zh-cn_topic_0182207110_p74711043155012"></a>repeated KeyValue</a> envs</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p124019291504"><a name="zh-cn_topic_0182207110_p124019291504"></a><a name="zh-cn_topic_0182207110_p124019291504"></a>在容器中配置的环境变量</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row34224312518"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p19539458155110"><a name="zh-cn_topic_0182207110_p19539458155110"></a><a name="zh-cn_topic_0182207110_p19539458155110"></a>repeated Mount</a> mounts</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p34221531165114"><a name="zh-cn_topic_0182207110_p34221531165114"></a><a name="zh-cn_topic_0182207110_p34221531165114"></a>待在容器中挂载的挂载点信息</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1936219479538"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p19801913115411"><a name="zh-cn_topic_0182207110_p19801913115411"></a><a name="zh-cn_topic_0182207110_p19801913115411"></a>repeated Device</a> devices</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p15362184717536"><a name="zh-cn_topic_0182207110_p15362184717536"></a><a name="zh-cn_topic_0182207110_p15362184717536"></a>待在容器中映射的设备信息</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1057365011549"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p918318587541"><a name="zh-cn_topic_0182207110_p918318587541"></a><a name="zh-cn_topic_0182207110_p918318587541"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p5574650165416"><a name="zh-cn_topic_0182207110_p5574650165416"></a><a name="zh-cn_topic_0182207110_p5574650165416"></a>可用于索引和选择单个资源的键值对。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row717416214597"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p533396594"><a name="zh-cn_topic_0182207110_p533396594"></a><a name="zh-cn_topic_0182207110_p533396594"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p1174102118599"><a name="zh-cn_topic_0182207110_p1174102118599"></a><a name="zh-cn_topic_0182207110_p1174102118599"></a>可用于存储和检索任意元数据的非结构化键值映射。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1673103817211"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p472415446214"><a name="zh-cn_topic_0182207110_p472415446214"></a><a name="zh-cn_topic_0182207110_p472415446214"></a>string log_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p192920136313"><a name="zh-cn_topic_0182207110_p192920136313"></a><a name="zh-cn_topic_0182207110_p192920136313"></a>相对于PodSandboxConfig.LogDirectory的路径，用于存储容器主机上的日志（STDOUT和STDERR）。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row135091553839"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p17597120742"><a name="zh-cn_topic_0182207110_p17597120742"></a><a name="zh-cn_topic_0182207110_p17597120742"></a>bool stdin</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p750915531638"><a name="zh-cn_topic_0182207110_p750915531638"></a><a name="zh-cn_topic_0182207110_p750915531638"></a>是否打开容器的stdin</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1901049174413"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p61419581447"><a name="zh-cn_topic_0182207110_p61419581447"></a><a name="zh-cn_topic_0182207110_p61419581447"></a>bool stdin_once</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p12147583446"><a name="zh-cn_topic_0182207110_p12147583446"></a><a name="zh-cn_topic_0182207110_p12147583446"></a>当某次连接stdin的数据流断开时，是否立即断开其他与stdin连接的数据流（<strong id="zh-cn_topic_0182207110_b396144824615"><a name="zh-cn_topic_0182207110_b396144824615"></a><a name="zh-cn_topic_0182207110_b396144824615"></a>暂不支持</strong>）</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1922645374411"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p7645558174413"><a name="zh-cn_topic_0182207110_p7645558174413"></a><a name="zh-cn_topic_0182207110_p7645558174413"></a>bool tty</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p156455589448"><a name="zh-cn_topic_0182207110_p156455589448"></a><a name="zh-cn_topic_0182207110_p156455589448"></a>是否使用伪终端连接容器的stdio</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row13317210511"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="zh-cn_topic_0182207110_p1564317611612"><a name="zh-cn_topic_0182207110_p1564317611612"></a><a name="zh-cn_topic_0182207110_p1564317611612"></a>LinuxContainerConfig</a> linux</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="zh-cn_topic_0182207110_p13335211515"><a name="zh-cn_topic_0182207110_p13335211515"></a><a name="zh-cn_topic_0182207110_p13335211515"></a>linux系统上容器的特定配置信息</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="zh-cn_topic_0182207110_li12222146464"></a>**NetworkConfig**

    Runtime的网络配置

    <a name="zh-cn_topic_0182207110_table32261415465"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row1722121414463"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p12217144461"><a name="zh-cn_topic_0182207110_p12217144461"></a><a name="zh-cn_topic_0182207110_p12217144461"></a><strong id="zh-cn_topic_0182207110_b102261415466"><a name="zh-cn_topic_0182207110_b102261415466"></a><a name="zh-cn_topic_0182207110_b102261415466"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p14225144465"><a name="zh-cn_topic_0182207110_p14225144465"></a><a name="zh-cn_topic_0182207110_p14225144465"></a><strong id="zh-cn_topic_0182207110_b182291416469"><a name="zh-cn_topic_0182207110_b182291416469"></a><a name="zh-cn_topic_0182207110_b182291416469"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row1122111418463"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p122211417468"><a name="zh-cn_topic_0182207110_p122211417468"></a><a name="zh-cn_topic_0182207110_p122211417468"></a>string pod_cidr</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p922181415468"><a name="zh-cn_topic_0182207110_p922181415468"></a><a name="zh-cn_topic_0182207110_p922181415468"></a>Pod IP 地址使用的CIDR</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **RuntimeConfig**

    Runtime的网络配置

    <a name="zh-cn_topic_0182207110_table94401158174715"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row104401858104711"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p34401589471"><a name="zh-cn_topic_0182207110_p34401589471"></a><a name="zh-cn_topic_0182207110_p34401589471"></a><strong id="zh-cn_topic_0182207110_b244011587479"><a name="zh-cn_topic_0182207110_b244011587479"></a><a name="zh-cn_topic_0182207110_b244011587479"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p1444015834710"><a name="zh-cn_topic_0182207110_p1444015834710"></a><a name="zh-cn_topic_0182207110_p1444015834710"></a><strong id="zh-cn_topic_0182207110_b2440125818473"><a name="zh-cn_topic_0182207110_b2440125818473"></a><a name="zh-cn_topic_0182207110_b2440125818473"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row174406581478"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p164406586473"><a name="zh-cn_topic_0182207110_p164406586473"></a><a name="zh-cn_topic_0182207110_p164406586473"></a>NetworkConfig</a> network_config</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p16440135824717"><a name="zh-cn_topic_0182207110_p16440135824717"></a><a name="zh-cn_topic_0182207110_p16440135824717"></a>Runtime的网络配置</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **RuntimeCondition**

    描述runtime的状态信息

    <a name="zh-cn_topic_0182207110_table1149371711577"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row549391719578"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p16493217155713"><a name="zh-cn_topic_0182207110_p16493217155713"></a><a name="zh-cn_topic_0182207110_p16493217155713"></a><strong id="zh-cn_topic_0182207110_b1949321720573"><a name="zh-cn_topic_0182207110_b1949321720573"></a><a name="zh-cn_topic_0182207110_b1949321720573"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p1749301713578"><a name="zh-cn_topic_0182207110_p1749301713578"></a><a name="zh-cn_topic_0182207110_p1749301713578"></a><strong id="zh-cn_topic_0182207110_b1749311765718"><a name="zh-cn_topic_0182207110_b1749311765718"></a><a name="zh-cn_topic_0182207110_b1749311765718"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row18493141795713"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p19493151765717"><a name="zh-cn_topic_0182207110_p19493151765717"></a><a name="zh-cn_topic_0182207110_p19493151765717"></a>string type</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p17493161719576"><a name="zh-cn_topic_0182207110_p17493161719576"></a><a name="zh-cn_topic_0182207110_p17493161719576"></a>Runtime状态的类型</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row767112245813"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p1671426589"><a name="zh-cn_topic_0182207110_p1671426589"></a><a name="zh-cn_topic_0182207110_p1671426589"></a>bool status</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p13671328589"><a name="zh-cn_topic_0182207110_p13671328589"></a><a name="zh-cn_topic_0182207110_p13671328589"></a>Runtime状态</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row38518584"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p48417586"><a name="zh-cn_topic_0182207110_p48417586"></a><a name="zh-cn_topic_0182207110_p48417586"></a>string reason</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p16919175818"><a name="zh-cn_topic_0182207110_p16919175818"></a><a name="zh-cn_topic_0182207110_p16919175818"></a>简要描述runtime状态变化的原因</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row12981958155716"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p19915581570"><a name="zh-cn_topic_0182207110_p19915581570"></a><a name="zh-cn_topic_0182207110_p19915581570"></a>string message</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p39995818579"><a name="zh-cn_topic_0182207110_p39995818579"></a><a name="zh-cn_topic_0182207110_p39995818579"></a>具备可阅读性的信息表明runtime状态变化的原因</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **RuntimeStatus**

    Runtime的状态

    <a name="zh-cn_topic_0182207110_table6258136145512"></a>
    <table><tbody><tr id="zh-cn_topic_0182207110_row1225814635519"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p1125820695515"><a name="zh-cn_topic_0182207110_p1125820695515"></a><a name="zh-cn_topic_0182207110_p1125820695515"></a><strong id="zh-cn_topic_0182207110_b925813645514"><a name="zh-cn_topic_0182207110_b925813645514"></a><a name="zh-cn_topic_0182207110_b925813645514"></a>参数成员</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p12587625511"><a name="zh-cn_topic_0182207110_p12587625511"></a><a name="zh-cn_topic_0182207110_p12587625511"></a><strong id="zh-cn_topic_0182207110_b13258186105511"><a name="zh-cn_topic_0182207110_b13258186105511"></a><a name="zh-cn_topic_0182207110_b13258186105511"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0182207110_row225811655518"><td class="cellrowborder" valign="top" width="41.06%"><p id="zh-cn_topic_0182207110_p102589635513"><a name="zh-cn_topic_0182207110_p102589635513"></a><a name="zh-cn_topic_0182207110_p102589635513"></a>repeated RuntimeCondition conditions</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="zh-cn_topic_0182207110_p32581661554"><a name="zh-cn_topic_0182207110_p32581661554"></a><a name="zh-cn_topic_0182207110_p32581661554"></a>描述当前runtime状态的列表</p>
    </td>
    </tr>
    </tbody>
    </table>



### Runtime服务

Runtime服务中包含操作pod和容器的接口，以及查询runtime自身配置和状态信息的接口。


#### runpodsandbox

#### 接口原型

```
rpc RunPodSandbox(RunPodSandboxRequest) returns (RunPodSandboxResponse) {}
```

#### 接口描述

创建和启动一个pod sandbox，若运行成功，sandbox处于ready状态。

#### 注意事项

1.  启动sandbox的默认镜像为rnd-dockerhub.huawei.com/library/pause-$\{machine\}:3.0， 其中$\{machine\}为架构，在x86\_64上，machine的值为amd64，在arm64上，machine的值为aarch64，当前rnd-dockerhub仓库上只有amd64和aarch64镜像可供下载，若机器上无此镜像，请确保机器能从rnd-dockerhub下载，若要使用其它镜像，请参考“iSulad部署配置”中的pod-sandbox-image指定镜像。
2.  由于容器命名以PodSandboxMetadata中的字段为来源，且以下划线"\_"为分割字符，因此限制metadata中的数据不能包含下划线，否则会出现sandbox运行成功，但无法使用ListPodSandbox接口查询的现象。

#### 参数

<a name="zh-cn_topic_0183088020_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088020_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088020_p1089154617315"><a name="zh-cn_topic_0183088020_p1089154617315"></a><a name="zh-cn_topic_0183088020_p1089154617315"></a><strong id="zh-cn_topic_0183088020_b98915462314"><a name="zh-cn_topic_0183088020_b98915462314"></a><a name="zh-cn_topic_0183088020_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088020_p128984613319"><a name="zh-cn_topic_0183088020_p128984613319"></a><a name="zh-cn_topic_0183088020_p128984613319"></a><strong id="zh-cn_topic_0183088020_b989164612317"><a name="zh-cn_topic_0183088020_b989164612317"></a><a name="zh-cn_topic_0183088020_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088020_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088020_p108924616314"><a name="zh-cn_topic_0183088020_p108924616314"></a><a name="zh-cn_topic_0183088020_p108924616314"></a>PodSandboxConfig</a> config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088020_p1189846434"><a name="zh-cn_topic_0183088020_p1189846434"></a><a name="zh-cn_topic_0183088020_p1189846434"></a>sandbox的配置</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088020_row10474111914249"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088020_p547481942417"><a name="zh-cn_topic_0183088020_p547481942417"></a><a name="zh-cn_topic_0183088020_p547481942417"></a>string runtime_handler</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088020_p144745192249"><a name="zh-cn_topic_0183088020_p144745192249"></a><a name="zh-cn_topic_0183088020_p144745192249"></a>指定创建sandbox的runtime运行时，当前支持lcr、kata-runtime运行时类型。</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088020_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088020_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088020_p197485518319"><a name="zh-cn_topic_0183088020_p197485518319"></a><a name="zh-cn_topic_0183088020_p197485518319"></a><strong id="zh-cn_topic_0183088020_b77413551933"><a name="zh-cn_topic_0183088020_b77413551933"></a><a name="zh-cn_topic_0183088020_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088020_p374185520310"><a name="zh-cn_topic_0183088020_p374185520310"></a><a name="zh-cn_topic_0183088020_p374185520310"></a><strong id="zh-cn_topic_0183088020_b174125511315"><a name="zh-cn_topic_0183088020_b174125511315"></a><a name="zh-cn_topic_0183088020_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088020_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088020_p157445512318"><a name="zh-cn_topic_0183088020_p157445512318"></a><a name="zh-cn_topic_0183088020_p157445512318"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088020_p14745551137"><a name="zh-cn_topic_0183088020_p14745551137"></a><a name="zh-cn_topic_0183088020_p14745551137"></a>成功，返回response数据</p>
</td>
</tr>
</tbody>
</table>

#### StopPodSandbox

#### 接口原型

```
rpc StopPodSandbox(StopPodSandboxRequest) returns (StopPodSandboxResponse) {}
```

#### 接口描述

停止pod sandbox，停止sandbox容器，回收分配给sandbox的网络资源（比如IP地址）。如果有任何running的容器属于该sandbox，则必须被强制停止。

#### 参数

<a name="zh-cn_topic_0183088041_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088041_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088041_p1089154617315"><a name="zh-cn_topic_0183088041_p1089154617315"></a><a name="zh-cn_topic_0183088041_p1089154617315"></a><strong id="zh-cn_topic_0183088041_b98915462314"><a name="zh-cn_topic_0183088041_b98915462314"></a><a name="zh-cn_topic_0183088041_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088041_p128984613319"><a name="zh-cn_topic_0183088041_p128984613319"></a><a name="zh-cn_topic_0183088041_p128984613319"></a><strong id="zh-cn_topic_0183088041_b989164612317"><a name="zh-cn_topic_0183088041_b989164612317"></a><a name="zh-cn_topic_0183088041_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088041_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088041_p1893714794317"><a name="zh-cn_topic_0183088041_p1893714794317"></a><a name="zh-cn_topic_0183088041_p1893714794317"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088041_p1189846434"><a name="zh-cn_topic_0183088041_p1189846434"></a><a name="zh-cn_topic_0183088041_p1189846434"></a>sandbox的id</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088041_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088041_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088041_p197485518319"><a name="zh-cn_topic_0183088041_p197485518319"></a><a name="zh-cn_topic_0183088041_p197485518319"></a><strong id="zh-cn_topic_0183088041_b77413551933"><a name="zh-cn_topic_0183088041_b77413551933"></a><a name="zh-cn_topic_0183088041_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088041_p374185520310"><a name="zh-cn_topic_0183088041_p374185520310"></a><a name="zh-cn_topic_0183088041_p374185520310"></a><strong id="zh-cn_topic_0183088041_b174125511315"><a name="zh-cn_topic_0183088041_b174125511315"></a><a name="zh-cn_topic_0183088041_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088041_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088041_p1772427114513"><a name="zh-cn_topic_0183088041_p1772427114513"></a><a name="zh-cn_topic_0183088041_p1772427114513"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088041_p14745551137"><a name="zh-cn_topic_0183088041_p14745551137"></a><a name="zh-cn_topic_0183088041_p14745551137"></a>无</p>
</td>
</tr>
</tbody>
</table>

#### RemovePodSandbox

#### 接口原型

```
rpc RemovePodSandbox(RemovePodSandboxRequest) returns (RemovePodSandboxResponse) {}
```

#### 接口描述

删除sandbox，如果有任何running的容器属于该sandbox，则必须被强制停止和删除，如果sandbox已经被删除，不能返回错误。

#### 注意事项

1. 删除sandbox时，不会删除sandbox的网络资源，在删除pod前必须先调用StopPodSandbox才能清理网络资源，调用者应当保证在删除sandbox之前至少调用一次StopPodSandbox。

#### 参数

<a name="zh-cn_topic_0183088042_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088042_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088042_p1089154617315"><a name="zh-cn_topic_0183088042_p1089154617315"></a><a name="zh-cn_topic_0183088042_p1089154617315"></a><strong id="zh-cn_topic_0183088042_b98915462314"><a name="zh-cn_topic_0183088042_b98915462314"></a><a name="zh-cn_topic_0183088042_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088042_p128984613319"><a name="zh-cn_topic_0183088042_p128984613319"></a><a name="zh-cn_topic_0183088042_p128984613319"></a><strong id="zh-cn_topic_0183088042_b989164612317"><a name="zh-cn_topic_0183088042_b989164612317"></a><a name="zh-cn_topic_0183088042_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088042_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088042_p1893714794317"><a name="zh-cn_topic_0183088042_p1893714794317"></a><a name="zh-cn_topic_0183088042_p1893714794317"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088042_p1189846434"><a name="zh-cn_topic_0183088042_p1189846434"></a><a name="zh-cn_topic_0183088042_p1189846434"></a>sandbox的id</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088042_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088042_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088042_p197485518319"><a name="zh-cn_topic_0183088042_p197485518319"></a><a name="zh-cn_topic_0183088042_p197485518319"></a><strong id="zh-cn_topic_0183088042_b77413551933"><a name="zh-cn_topic_0183088042_b77413551933"></a><a name="zh-cn_topic_0183088042_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088042_p374185520310"><a name="zh-cn_topic_0183088042_p374185520310"></a><a name="zh-cn_topic_0183088042_p374185520310"></a><strong id="zh-cn_topic_0183088042_b174125511315"><a name="zh-cn_topic_0183088042_b174125511315"></a><a name="zh-cn_topic_0183088042_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088042_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088042_p1772427114513"><a name="zh-cn_topic_0183088042_p1772427114513"></a><a name="zh-cn_topic_0183088042_p1772427114513"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088042_p14745551137"><a name="zh-cn_topic_0183088042_p14745551137"></a><a name="zh-cn_topic_0183088042_p14745551137"></a>无</p>
</td>
</tr>
</tbody>
</table>

#### PodSandboxStatus

#### 接口原型

```
rpc PodSandboxStatus(PodSandboxStatusRequest) returns (PodSandboxStatusResponse) {}
```

#### 接口描述

查询sandbox的状态，如果sandbox不存在，返回错误。

#### 参数

<a name="zh-cn_topic_0183088043_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088043_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p1089154617315"><a name="zh-cn_topic_0183088043_p1089154617315"></a><a name="zh-cn_topic_0183088043_p1089154617315"></a><strong id="zh-cn_topic_0183088043_b98915462314"><a name="zh-cn_topic_0183088043_b98915462314"></a><a name="zh-cn_topic_0183088043_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p128984613319"><a name="zh-cn_topic_0183088043_p128984613319"></a><a name="zh-cn_topic_0183088043_p128984613319"></a><strong id="zh-cn_topic_0183088043_b989164612317"><a name="zh-cn_topic_0183088043_b989164612317"></a><a name="zh-cn_topic_0183088043_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088043_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p1893714794317"><a name="zh-cn_topic_0183088043_p1893714794317"></a><a name="zh-cn_topic_0183088043_p1893714794317"></a>string pod_sandbox_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p1189846434"><a name="zh-cn_topic_0183088043_p1189846434"></a><a name="zh-cn_topic_0183088043_p1189846434"></a>sandbox的id</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088043_row1856117814815"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p956148114812"><a name="zh-cn_topic_0183088043_p956148114812"></a><a name="zh-cn_topic_0183088043_p956148114812"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p155615864815"><a name="zh-cn_topic_0183088043_p155615864815"></a><a name="zh-cn_topic_0183088043_p155615864815"></a>标识是否显示sandbox的一些额外信息。（暂不支持配置）</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088043_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088043_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p197485518319"><a name="zh-cn_topic_0183088043_p197485518319"></a><a name="zh-cn_topic_0183088043_p197485518319"></a><strong id="zh-cn_topic_0183088043_b77413551933"><a name="zh-cn_topic_0183088043_b77413551933"></a><a name="zh-cn_topic_0183088043_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p374185520310"><a name="zh-cn_topic_0183088043_p374185520310"></a><a name="zh-cn_topic_0183088043_p374185520310"></a><strong id="zh-cn_topic_0183088043_b174125511315"><a name="zh-cn_topic_0183088043_b174125511315"></a><a name="zh-cn_topic_0183088043_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088043_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p157445512318"><a name="zh-cn_topic_0183088043_p157445512318"></a><a name="zh-cn_topic_0183088043_p157445512318"></a>PodSandboxStatus</a> status</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p14745551137"><a name="zh-cn_topic_0183088043_p14745551137"></a><a name="zh-cn_topic_0183088043_p14745551137"></a>sandbox的状态信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088043_row27545518311"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088043_p953212217505"><a name="zh-cn_topic_0183088043_p953212217505"></a><a name="zh-cn_topic_0183088043_p953212217505"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088043_p47512557310"><a name="zh-cn_topic_0183088043_p47512557310"></a><a name="zh-cn_topic_0183088043_p47512557310"></a>sandbox的额外信息，key是任意string，value是json格式的字符串，这些信息可以是任意调试内容。当verbose为true时info不能为空。（暂不支持配置）</p>
</td>
</tr>
</tbody>
</table>

#### ListPodSandbox

#### 接口原型

```
rpc ListPodSandbox(ListPodSandboxRequest) returns (ListPodSandboxResponse) {}
```

#### 接口描述

返回sandbox信息的列表，支持条件过滤。

#### 参数

<a name="zh-cn_topic_0183088044_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088044_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088044_p1089154617315"><a name="zh-cn_topic_0183088044_p1089154617315"></a><strong id="zh-cn_topic_0183088044_b98915462314"><a name="zh-cn_topic_0183088044_b98915462314"></a><a name="zh-cn_topic_0183088044_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088044_p128984613319"><a name="zh-cn_topic_0183088044_p128984613319"></a><a name="zh-cn_topic_0183088044_p128984613319"></a><strong id="zh-cn_topic_0183088044_b989164612317"><a name="zh-cn_topic_0183088044_b989164612317"></a><a name="zh-cn_topic_0183088044_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088044_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088044_p47762110579"><a name="zh-cn_topic_0183088044_p47762110579"></a><a name="zh-cn_topic_0183088044_p47762110579"></a>PodSandboxFilter</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088044_p1189846434"><a name="zh-cn_topic_0183088044_p1189846434"></a><a name="zh-cn_topic_0183088044_p1189846434"></a>条件过滤参数</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088044_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088044_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088044_p197485518319"><a name="zh-cn_topic_0183088044_p197485518319"></a><a name="zh-cn_topic_0183088044_p197485518319"></a><strong id="zh-cn_topic_0183088044_b77413551933"><a name="zh-cn_topic_0183088044_b77413551933"></a><a name="zh-cn_topic_0183088044_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088044_p374185520310"><a name="zh-cn_topic_0183088044_p374185520310"></a><a name="zh-cn_topic_0183088044_p374185520310"></a><strong id="zh-cn_topic_0183088044_b174125511315"><a name="zh-cn_topic_0183088044_b174125511315"></a><a name="zh-cn_topic_0183088044_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088044_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088044_p1118315385563"><a name="zh-cn_topic_0183088044_p1118315385563"></a><a name="zh-cn_topic_0183088044_p1118315385563"></a>repeated PodSandbox</a> items</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088044_p518373814560"><a name="zh-cn_topic_0183088044_p518373814560"></a><a name="zh-cn_topic_0183088044_p518373814560"></a>sandbox信息的列表</p>
</td>
</tr>
</tbody>
</table>

#### CreateContainer

```
grpc::Status CreateContainer(grpc::ServerContext *context, const runtime::CreateContainerRequest *request, runtime::CreateContainerResponse *reply) {}
```

#### 接口描述

在PodSandbox内创建一个容器。

#### 注意事项

-   请求CreateContainerRequest 中的sandbox\_config与传递给RunPodSandboxRequest以创建PodSandbox的配置相同。 它再次传递，只是为了方便参考。 PodSandboxConfig是不可变的，在pod的整个生命周期内保持不变。
-   由于容器命名以ContainerMetadata中的字段为来源，且以下划线"\_"为分割字符，因此限制metadata中的数据不能包含下划线，否则会出现sandbox运行成功，但无法使用ListContainers接口查询的现象。
-   CreateContainerRequest中无runtime\_handler字段，创建container时的runtime类型和其对应的sandbox的runtime相同。

#### 参数

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
<tr id="zh-cn_topic_0183088045_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088045_p1489111122411"><a name="zh-cn_topic_0183088045_p1489111122411"></a><a name="zh-cn_topic_0183088045_p1489111122411"></a>ContainerConfig</a> config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088045_p780820166266"><a name="zh-cn_topic_0183088045_p780820166266"></a><a name="zh-cn_topic_0183088045_p780820166266"></a>容器的配置信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088045_row4812119101610"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088045_p89345298375"><a name="zh-cn_topic_0183088045_p89345298375"></a><a name="zh-cn_topic_0183088045_p89345298375"></a>PodSandboxConfig</a> sandbox_config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088045_p516113378378"><a name="zh-cn_topic_0183088045_p516113378378"></a><a name="zh-cn_topic_0183088045_p516113378378"></a>PodSandbox的配置信息</p>
</td>
</tr>
</tbody>
</table>

#### 补充

可用于存储和检索任意元数据的非结构化键值映射。有一些字段由于cri接口没有提供特定的参数，可通过该字段将参数传入

-   自定义

    <a name="zh-cn_topic_0183088045_table18570435155317"></a>
    <table><tbody><tr id="zh-cn_topic_0183088045_row961273515313"><td class="cellrowborder" valign="top" width="50%"><p id="zh-cn_topic_0183088045_p146121535155310"><a name="zh-cn_topic_0183088045_p146121535155310"></a><a name="zh-cn_topic_0183088045_p146121535155310"></a><strong id="zh-cn_topic_0183088045_b83874913547"><a name="zh-cn_topic_0183088045_b83874913547"></a><a name="zh-cn_topic_0183088045_b83874913547"></a>自定义 key:value</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="50%"><p id="zh-cn_topic_0183088045_p1861233511533"><a name="zh-cn_topic_0183088045_p1861233511533"></a><a name="zh-cn_topic_0183088045_p1861233511533"></a><strong id="zh-cn_topic_0183088045_b461263545314"><a name="zh-cn_topic_0183088045_b461263545314"></a><a name="zh-cn_topic_0183088045_b461263545314"></a>描述</strong></p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183088045_row761273525315"><td class="cellrowborder" valign="top" width="50%"><p id="zh-cn_topic_0183088045_p221701745415"><a name="zh-cn_topic_0183088045_p221701745415"></a><a name="zh-cn_topic_0183088045_p221701745415"></a>cgroup.pids.max:int64_t</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%"><p id="zh-cn_topic_0183088045_p1475318795514"><a name="zh-cn_topic_0183088045_p1475318795514"></a><a name="zh-cn_topic_0183088045_p1475318795514"></a>用于限制容器内的进/线程数（set -1 for unlimited）</p>
    </td>
    </tr>
    </tbody>
    </table>


#### 返回值

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

#### StartContainer

#### 接口原型

```
rpc StartContainer(StartContainerRequest) returns (StartContainerResponse) {}
```

#### 接口描述

启动一个容器。

#### 参数

<a name="zh-cn_topic_0183088046_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088046_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088046_p1089154617315"><a name="zh-cn_topic_0183088046_p1089154617315"></a><a name="zh-cn_topic_0183088046_p1089154617315"></a><strong id="zh-cn_topic_0183088046_b98915462314"><a name="zh-cn_topic_0183088046_b98915462314"></a><a name="zh-cn_topic_0183088046_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088046_p128984613319"><a name="zh-cn_topic_0183088046_p128984613319"></a><a name="zh-cn_topic_0183088046_p128984613319"></a><strong id="zh-cn_topic_0183088046_b989164612317"><a name="zh-cn_topic_0183088046_b989164612317"></a><a name="zh-cn_topic_0183088046_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088046_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088046_p1019112316015"><a name="zh-cn_topic_0183088046_p1019112316015"></a><a name="zh-cn_topic_0183088046_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088046_p1189846434"><a name="zh-cn_topic_0183088046_p1189846434"></a><a name="zh-cn_topic_0183088046_p1189846434"></a>容器id</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088046_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088046_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088046_p197485518319"><a name="zh-cn_topic_0183088046_p197485518319"></a><a name="zh-cn_topic_0183088046_p197485518319"></a><strong id="zh-cn_topic_0183088046_b77413551933"><a name="zh-cn_topic_0183088046_b77413551933"></a><a name="zh-cn_topic_0183088046_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088046_p374185520310"><a name="zh-cn_topic_0183088046_p374185520310"></a><a name="zh-cn_topic_0183088046_p374185520310"></a><strong id="zh-cn_topic_0183088046_b174125511315"><a name="zh-cn_topic_0183088046_b174125511315"></a><a name="zh-cn_topic_0183088046_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088046_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088046_p554418192002"><a name="zh-cn_topic_0183088046_p554418192002"></a><a name="zh-cn_topic_0183088046_p554418192002"></a>无</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088046_p4543101912019"><a name="zh-cn_topic_0183088046_p4543101912019"></a><a name="zh-cn_topic_0183088046_p4543101912019"></a>无</p>
</td>
</tr>
</tbody>
</table>

#### StopContainer

#### 接口原型

```
rpc StopContainer(StopContainerRequest) returns (StopContainerResponse) {}
```

#### 接口描述

停止一个running的容器，支持配置优雅停止时间timeout，如果容器已经停止，不能返回错误。

#### 参数

<a name="zh-cn_topic_0183088047_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088047_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088047_p1089154617315"><a name="zh-cn_topic_0183088047_p1089154617315"></a><a name="zh-cn_topic_0183088047_p1089154617315"></a><strong id="zh-cn_topic_0183088047_b98915462314"><a name="zh-cn_topic_0183088047_b98915462314"></a><a name="zh-cn_topic_0183088047_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088047_p128984613319"><a name="zh-cn_topic_0183088047_p128984613319"></a><a name="zh-cn_topic_0183088047_p128984613319"></a><strong id="zh-cn_topic_0183088047_b989164612317"><a name="zh-cn_topic_0183088047_b989164612317"></a><a name="zh-cn_topic_0183088047_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088047_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088047_p1019112316015"><a name="zh-cn_topic_0183088047_p1019112316015"></a><a name="zh-cn_topic_0183088047_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088047_p1189846434"><a name="zh-cn_topic_0183088047_p1189846434"></a><a name="zh-cn_topic_0183088047_p1189846434"></a>容器id</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088047_row660924815015"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088047_p06097481802"><a name="zh-cn_topic_0183088047_p06097481802"></a><a name="zh-cn_topic_0183088047_p06097481802"></a>int64 timeout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088047_p360920481009"><a name="zh-cn_topic_0183088047_p360920481009"></a><a name="zh-cn_topic_0183088047_p360920481009"></a>强制停止容器前的等待时间，默认值为0，即强制停止容器。</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

无

#### RemoveContainer

#### 接口原型

```
rpc RemoveContainer(RemoveContainerRequest) returns (RemoveContainerResponse) {}
```

#### 接口描述

删除一个容器，如果容器正在运行，必须强制停止，如果容器已经被删除，不能返回错误。

#### 参数

<a name="zh-cn_topic_0183088048_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088048_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088048_p1089154617315"><a name="zh-cn_topic_0183088048_p1089154617315"></a><a name="zh-cn_topic_0183088048_p1089154617315"></a><strong id="zh-cn_topic_0183088048_b98915462314"><a name="zh-cn_topic_0183088048_b98915462314"></a><a name="zh-cn_topic_0183088048_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088048_p128984613319"><a name="zh-cn_topic_0183088048_p128984613319"></a><a name="zh-cn_topic_0183088048_p128984613319"></a><strong id="zh-cn_topic_0183088048_b989164612317"><a name="zh-cn_topic_0183088048_b989164612317"></a><a name="zh-cn_topic_0183088048_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088048_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088048_p1019112316015"><a name="zh-cn_topic_0183088048_p1019112316015"></a><a name="zh-cn_topic_0183088048_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088048_p1189846434"><a name="zh-cn_topic_0183088048_p1189846434"></a><a name="zh-cn_topic_0183088048_p1189846434"></a>容器id</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

无

#### ListContainers

#### 接口原型

```
rpc ListContainers(ListContainersRequest) returns (ListContainersResponse) {}
```

#### 接口描述

返回container信息的列表，支持条件过滤。

#### 参数

<a name="zh-cn_topic_0183088049_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088049_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088049_p1089154617315"><a name="zh-cn_topic_0183088049_p1089154617315"></a><a name="zh-cn_topic_0183088049_p1089154617315"></a><strong id="zh-cn_topic_0183088049_b98915462314"><a name="zh-cn_topic_0183088049_b98915462314"></a><a name="zh-cn_topic_0183088049_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088049_p128984613319"><a name="zh-cn_topic_0183088049_p128984613319"></a><a name="zh-cn_topic_0183088049_p128984613319"></a><strong id="zh-cn_topic_0183088049_b989164612317"><a name="zh-cn_topic_0183088049_b989164612317"></a><a name="zh-cn_topic_0183088049_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088049_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088049_p1356616573315"><a name="zh-cn_topic_0183088049_p1356616573315"></a><a name="zh-cn_topic_0183088049_p1356616573315"></a>ContainerFilter</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088049_p1189846434"><a name="zh-cn_topic_0183088049_p1189846434"></a><a name="zh-cn_topic_0183088049_p1189846434"></a>条件过滤参数</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088049_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088049_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088049_p197485518319"><a name="zh-cn_topic_0183088049_p197485518319"></a><a name="zh-cn_topic_0183088049_p197485518319"></a><strong id="zh-cn_topic_0183088049_b77413551933"><a name="zh-cn_topic_0183088049_b77413551933"></a><a name="zh-cn_topic_0183088049_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088049_p374185520310"><a name="zh-cn_topic_0183088049_p374185520310"></a><a name="zh-cn_topic_0183088049_p374185520310"></a><strong id="zh-cn_topic_0183088049_b174125511315"><a name="zh-cn_topic_0183088049_b174125511315"></a><a name="zh-cn_topic_0183088049_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088049_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088049_p3465158518"><a name="zh-cn_topic_0183088049_p3465158518"></a><a name="zh-cn_topic_0183088049_p3465158518"></a>repeated Container</a> containers</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088049_p14745551137"><a name="zh-cn_topic_0183088049_p14745551137"></a><a name="zh-cn_topic_0183088049_p14745551137"></a>容器信息的列表</p>
</td>
</tr>
</tbody>
</table>

#### ContainerStatus

#### 接口原型

```
rpc ContainerStatus(ContainerStatusRequest) returns (ContainerStatusResponse) {}
```

#### 接口描述

返回容器状态信息，如果容器不存在，则返回错误。

#### 参数

<a name="zh-cn_topic_0183088050_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088050_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p1089154617315"><a name="zh-cn_topic_0183088050_p1089154617315"></a><a name="zh-cn_topic_0183088050_p1089154617315"></a><strong id="zh-cn_topic_0183088050_b98915462314"><a name="zh-cn_topic_0183088050_b98915462314"></a><a name="zh-cn_topic_0183088050_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p128984613319"><a name="zh-cn_topic_0183088050_p128984613319"></a><a name="zh-cn_topic_0183088050_p128984613319"></a><strong id="zh-cn_topic_0183088050_b989164612317"><a name="zh-cn_topic_0183088050_b989164612317"></a><a name="zh-cn_topic_0183088050_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088050_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p1019112316015"><a name="zh-cn_topic_0183088050_p1019112316015"></a><a name="zh-cn_topic_0183088050_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p1189846434"><a name="zh-cn_topic_0183088050_p1189846434"></a><a name="zh-cn_topic_0183088050_p1189846434"></a>容器id</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088050_row134851364619"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p956148114812"><a name="zh-cn_topic_0183088050_p956148114812"></a><a name="zh-cn_topic_0183088050_p956148114812"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p155615864815"><a name="zh-cn_topic_0183088050_p155615864815"></a><a name="zh-cn_topic_0183088050_p155615864815"></a>标识是否显示sandbox的一些额外信息。（暂不支持配置）</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088050_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088050_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p197485518319"><a name="zh-cn_topic_0183088050_p197485518319"></a><a name="zh-cn_topic_0183088050_p197485518319"></a><strong id="zh-cn_topic_0183088050_b77413551933"><a name="zh-cn_topic_0183088050_b77413551933"></a><a name="zh-cn_topic_0183088050_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p374185520310"><a name="zh-cn_topic_0183088050_p374185520310"></a><a name="zh-cn_topic_0183088050_p374185520310"></a><strong id="zh-cn_topic_0183088050_b174125511315"><a name="zh-cn_topic_0183088050_b174125511315"></a><a name="zh-cn_topic_0183088050_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088050_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p157445512318"><a name="zh-cn_topic_0183088050_p157445512318"></a><a name="zh-cn_topic_0183088050_p157445512318"></a>ContainerStatus</a> status</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p14745551137"><a name="zh-cn_topic_0183088050_p14745551137"></a><a name="zh-cn_topic_0183088050_p14745551137"></a>容器的状态信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088050_row27545518311"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088050_p953212217505"><a name="zh-cn_topic_0183088050_p953212217505"></a><a name="zh-cn_topic_0183088050_p953212217505"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088050_p47512557310"><a name="zh-cn_topic_0183088050_p47512557310"></a><a name="zh-cn_topic_0183088050_p47512557310"></a>sandbox的额外信息，key是任意string，value是json格式的字符串，这些信息可以是任意调试内容。当verbose为true时info不能为空。（暂不支持配置）</p>
</td>
</tr>
</tbody>
</table>

#### UpdateContainerResources

#### 接口原型

```
rpc UpdateContainerResources(UpdateContainerResourcesRequest) returns (UpdateContainerResourcesResponse) {}
```

#### 接口描述

该接口用于更新容器资源配置。

#### 注意事项

-   该接口仅用于更新容器的资源配置，不能用于更新Pod的资源配置。
-   当前不支持更新容器oom\_score\_adj配置。

#### 参数

<a name="zh-cn_topic_0183088051_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088051_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088051_p1089154617315"><a name="zh-cn_topic_0183088051_p1089154617315"></a><a name="zh-cn_topic_0183088051_p1089154617315"></a><strong id="zh-cn_topic_0183088051_b98915462314"><a name="zh-cn_topic_0183088051_b98915462314"></a><a name="zh-cn_topic_0183088051_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088051_p128984613319"><a name="zh-cn_topic_0183088051_p128984613319"></a><a name="zh-cn_topic_0183088051_p128984613319"></a><strong id="zh-cn_topic_0183088051_b989164612317"><a name="zh-cn_topic_0183088051_b989164612317"></a><a name="zh-cn_topic_0183088051_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088051_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088051_p1019112316015"><a name="zh-cn_topic_0183088051_p1019112316015"></a><a name="zh-cn_topic_0183088051_p1019112316015"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088051_p1189846434"><a name="zh-cn_topic_0183088051_p1189846434"></a><a name="zh-cn_topic_0183088051_p1189846434"></a>容器id</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088051_row134851364619"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088051_p18181582213"><a name="zh-cn_topic_0183088051_p18181582213"></a><a name="zh-cn_topic_0183088051_p18181582213"></a>LinuxContainerResources</a> linux</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088051_p155615864815"><a name="zh-cn_topic_0183088051_p155615864815"></a><a name="zh-cn_topic_0183088051_p155615864815"></a>linux资源配置信息</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

无

#### ExecSync

#### 接口原型

```
rpc ExecSync(ExecSyncRequest) returns (ExecSyncResponse) {}
```

#### 接口描述

以同步的方式在容器中执行命令，采用的gRPC通讯方式。

#### 注意事项

执行执行一条单独的命令，不能打开终端与容器交互。

#### 参数

<a name="zh-cn_topic_0183088052_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088052_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p1089154617315"><a name="zh-cn_topic_0183088052_p1089154617315"></a><a name="zh-cn_topic_0183088052_p1089154617315"></a><strong id="zh-cn_topic_0183088052_b98915462314"><a name="zh-cn_topic_0183088052_b98915462314"></a><a name="zh-cn_topic_0183088052_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p128984613319"><a name="zh-cn_topic_0183088052_p128984613319"></a><a name="zh-cn_topic_0183088052_p128984613319"></a><strong id="zh-cn_topic_0183088052_b989164612317"><a name="zh-cn_topic_0183088052_b989164612317"></a><a name="zh-cn_topic_0183088052_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p293511573266"><a name="zh-cn_topic_0183088052_p293511573266"></a><a name="zh-cn_topic_0183088052_p293511573266"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p1189846434"><a name="zh-cn_topic_0183088052_p1189846434"></a><a name="zh-cn_topic_0183088052_p1189846434"></a>容器ID</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p1489111122411"><a name="zh-cn_topic_0183088052_p1489111122411"></a><a name="zh-cn_topic_0183088052_p1489111122411"></a>repeated string cmd</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p780820166266"><a name="zh-cn_topic_0183088052_p780820166266"></a><a name="zh-cn_topic_0183088052_p780820166266"></a>待执行命令</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row4812119101610"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p24734935614"><a name="zh-cn_topic_0183088052_p24734935614"></a><a name="zh-cn_topic_0183088052_p24734935614"></a>int64 timeout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p6510957162719"><a name="zh-cn_topic_0183088052_p6510957162719"></a><a name="zh-cn_topic_0183088052_p6510957162719"></a>停止命令的超时时间（秒）。 默认值：0（无超时限制）。 <strong id="zh-cn_topic_0183088052_b921123104014"><a name="zh-cn_topic_0183088052_b921123104014"></a><a name="zh-cn_topic_0183088052_b921123104014"></a>暂不支持</strong></p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088052_table1244111592419"></a>
<table><tbody><tr id="zh-cn_topic_0183088052_row844114513243"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p244117515249"><a name="zh-cn_topic_0183088052_p244117515249"></a><a name="zh-cn_topic_0183088052_p244117515249"></a><strong id="zh-cn_topic_0183088052_b1044111592411"><a name="zh-cn_topic_0183088052_b1044111592411"></a><a name="zh-cn_topic_0183088052_b1044111592411"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p10441155152411"><a name="zh-cn_topic_0183088052_p10441155152411"></a><a name="zh-cn_topic_0183088052_p10441155152411"></a><strong id="zh-cn_topic_0183088052_b1944120532419"><a name="zh-cn_topic_0183088052_b1944120532419"></a><a name="zh-cn_topic_0183088052_b1944120532419"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row17442659244"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p44421057247"><a name="zh-cn_topic_0183088052_p44421057247"></a><a name="zh-cn_topic_0183088052_p44421057247"></a>bytes stdout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p14442857248"><a name="zh-cn_topic_0183088052_p14442857248"></a><a name="zh-cn_topic_0183088052_p14442857248"></a>捕获命令标准输出</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row444214512412"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p19834172715201"><a name="zh-cn_topic_0183088052_p19834172715201"></a><a name="zh-cn_topic_0183088052_p19834172715201"></a>bytes stderr</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p18188336182011"><a name="zh-cn_topic_0183088052_p18188336182011"></a><a name="zh-cn_topic_0183088052_p18188336182011"></a>捕获命令标准错误输出</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088052_row16951195032014"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088052_p1195135062019"><a name="zh-cn_topic_0183088052_p1195135062019"></a><a name="zh-cn_topic_0183088052_p1195135062019"></a>int32 exit_code</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088052_p987318251219"><a name="zh-cn_topic_0183088052_p987318251219"></a><a name="zh-cn_topic_0183088052_p987318251219"></a>退出代码命令完成。 默认值：0（成功）。</p>
</td>
</tr>
</tbody>
</table>

#### Exec

#### 接口原型

```
rpc Exec(ExecRequest) returns (ExecResponse) {}
```

#### 接口描述

在容器中执行命令，采用的gRPC通讯方式从CRI服务端获取url，再通过获得的url与websocket服务端建立长连接，实现与容器的交互。

#### 注意事项

执行执行一条单独的命令，也能打开终端与容器交互。stdin/stdout/stderr之一必须是真的。如果tty为真，stderr必须是假的。 不支持多路复用,  在这种情况下, stdout和stderr的输出将合并为单流。

#### 参数

<a name="zh-cn_topic_0183088053_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088053_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088053_p1089154617315"><a name="zh-cn_topic_0183088053_p1089154617315"></a><a name="zh-cn_topic_0183088053_p1089154617315"></a><strong id="zh-cn_topic_0183088053_b98915462314"><a name="zh-cn_topic_0183088053_b98915462314"></a><a name="zh-cn_topic_0183088053_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088053_p128984613319"><a name="zh-cn_topic_0183088053_p128984613319"></a><a name="zh-cn_topic_0183088053_p128984613319"></a><strong id="zh-cn_topic_0183088053_b989164612317"><a name="zh-cn_topic_0183088053_b989164612317"></a><a name="zh-cn_topic_0183088053_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088053_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088053_p1253351115517"><a name="zh-cn_topic_0183088053_p1253351115517"></a><a name="zh-cn_topic_0183088053_p1253351115517"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088053_p1189846434"><a name="zh-cn_topic_0183088053_p1189846434"></a><a name="zh-cn_topic_0183088053_p1189846434"></a>容器ID</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088053_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088053_p1489111122411"><a name="zh-cn_topic_0183088053_p1489111122411"></a><a name="zh-cn_topic_0183088053_p1489111122411"></a>repeated string cmd</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088053_p780820166266"><a name="zh-cn_topic_0183088053_p780820166266"></a><a name="zh-cn_topic_0183088053_p780820166266"></a>待执行的命令</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088053_row4812119101610"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088053_p3218304144"><a name="zh-cn_topic_0183088053_p3218304144"></a><a name="zh-cn_topic_0183088053_p3218304144"></a>bool tty</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088053_p1947314925616"><a name="zh-cn_topic_0183088053_p1947314925616"></a><a name="zh-cn_topic_0183088053_p1947314925616"></a>是否在TTY中执行命令</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088053_row1569883411415"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088053_p06982346147"><a name="zh-cn_topic_0183088053_p06982346147"></a><a name="zh-cn_topic_0183088053_p06982346147"></a>bool stdin</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088053_p469919340142"><a name="zh-cn_topic_0183088053_p469919340142"></a><a name="zh-cn_topic_0183088053_p469919340142"></a>是否流式标准输入</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088053_row12135742161414"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088053_p5135242161417"><a name="zh-cn_topic_0183088053_p5135242161417"></a><a name="zh-cn_topic_0183088053_p5135242161417"></a>bool stdout</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088053_p1613584220142"><a name="zh-cn_topic_0183088053_p1613584220142"></a><a name="zh-cn_topic_0183088053_p1613584220142"></a>是否流式标准输出</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088053_row101281154171413"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088053_p151281754181412"><a name="zh-cn_topic_0183088053_p151281754181412"></a><a name="zh-cn_topic_0183088053_p151281754181412"></a>bool stderr</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088053_p51282542141"><a name="zh-cn_topic_0183088053_p51282542141"></a><a name="zh-cn_topic_0183088053_p51282542141"></a>是否流式输出标准错误</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088053_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088053_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088053_p197485518319"><a name="zh-cn_topic_0183088053_p197485518319"></a><a name="zh-cn_topic_0183088053_p197485518319"></a><strong id="zh-cn_topic_0183088053_b77413551933"><a name="zh-cn_topic_0183088053_b77413551933"></a><a name="zh-cn_topic_0183088053_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088053_p374185520310"><a name="zh-cn_topic_0183088053_p374185520310"></a><a name="zh-cn_topic_0183088053_p374185520310"></a><strong id="zh-cn_topic_0183088053_b174125511315"><a name="zh-cn_topic_0183088053_b174125511315"></a><a name="zh-cn_topic_0183088053_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088053_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088053_p15574205011242"><a name="zh-cn_topic_0183088053_p15574205011242"></a><a name="zh-cn_topic_0183088053_p15574205011242"></a>string url</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088053_p103555206255"><a name="zh-cn_topic_0183088053_p103555206255"></a><a name="zh-cn_topic_0183088053_p103555206255"></a>exec流服务器的完全限定URL</p>
</td>
</tr>
</tbody>
</table>

#### Attach

用法：**docker attach \[OPTIONS\] CONTAINER**

功能：附加到一个运行着的容器

选项：

--no-stdin=false    不附加STDIN

--sig-proxy=true    代理所有到容器内部的信号，不代理SIGCHLD, SIGKILL, SIGSTOP

示例：

```
$ sudo docker attach attach_test
root@2988b8658669:/# ls bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```

#### ContainerStats

#### 接口原型

```
rpc ContainerStats(ContainerStatsRequest) returns (ContainerStatsResponse) {}
```

#### 接口描述

返回单个容器占用资源信息，仅支持runtime类型为lcr的容器。

#### 参数

<a name="zh-cn_topic_0183088056_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088056_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088056_p1089154617315"><a name="zh-cn_topic_0183088056_p1089154617315"></a><a name="zh-cn_topic_0183088056_p1089154617315"></a><strong id="zh-cn_topic_0183088056_b98915462314"><a name="zh-cn_topic_0183088056_b98915462314"></a><a name="zh-cn_topic_0183088056_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088056_p128984613319"><a name="zh-cn_topic_0183088056_p128984613319"></a><a name="zh-cn_topic_0183088056_p128984613319"></a><strong id="zh-cn_topic_0183088056_b989164612317"><a name="zh-cn_topic_0183088056_b989164612317"></a><a name="zh-cn_topic_0183088056_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088056_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088056_p759712497119"><a name="zh-cn_topic_0183088056_p759712497119"></a><a name="zh-cn_topic_0183088056_p759712497119"></a>string container_id</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088056_p1189846434"><a name="zh-cn_topic_0183088056_p1189846434"></a><a name="zh-cn_topic_0183088056_p1189846434"></a>容器id</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088056_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088056_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088056_p197485518319"><a name="zh-cn_topic_0183088056_p197485518319"></a><a name="zh-cn_topic_0183088056_p197485518319"></a><strong id="zh-cn_topic_0183088056_b77413551933"><a name="zh-cn_topic_0183088056_b77413551933"></a><a name="zh-cn_topic_0183088056_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088056_p374185520310"><a name="zh-cn_topic_0183088056_p374185520310"></a><a name="zh-cn_topic_0183088056_p374185520310"></a><strong id="zh-cn_topic_0183088056_b174125511315"><a name="zh-cn_topic_0183088056_b174125511315"></a><a name="zh-cn_topic_0183088056_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088056_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088056_p3465158518"><a name="zh-cn_topic_0183088056_p3465158518"></a><a name="zh-cn_topic_0183088056_p3465158518"></a>ContainerStats</a> stats</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088056_p14745551137"><a name="zh-cn_topic_0183088056_p14745551137"></a><a name="zh-cn_topic_0183088056_p14745551137"></a>容器信息。注：disk和inodes只支持oci格式镜像起的容器查询</p>
</td>
</tr>
</tbody>
</table>

#### ListContainerStats

#### 接口原型

```
rpc ListContainerStats(ListContainerStatsRequest) returns (ListContainerStatsResponse) {}
```

#### 接口描述

返回多个容器占用资源信息，支持条件过滤

#### 参数

<a name="zh-cn_topic_0183088057_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088057_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088057_p1089154617315"><a name="zh-cn_topic_0183088057_p1089154617315"></a><a name="zh-cn_topic_0183088057_p1089154617315"></a><strong id="zh-cn_topic_0183088057_b98915462314"><a name="zh-cn_topic_0183088057_b98915462314"></a><a name="zh-cn_topic_0183088057_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088057_p128984613319"><a name="zh-cn_topic_0183088057_p128984613319"></a><a name="zh-cn_topic_0183088057_p128984613319"></a><strong id="zh-cn_topic_0183088057_b989164612317"><a name="zh-cn_topic_0183088057_b989164612317"></a><a name="zh-cn_topic_0183088057_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088057_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088057_p759712497119"><a name="zh-cn_topic_0183088057_p759712497119"></a><a name="zh-cn_topic_0183088057_p759712497119"></a>ContainerStatsFilter</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088057_p1189846434"><a name="zh-cn_topic_0183088057_p1189846434"></a><a name="zh-cn_topic_0183088057_p1189846434"></a>条件过滤参数</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088057_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088057_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088057_p197485518319"><a name="zh-cn_topic_0183088057_p197485518319"></a><a name="zh-cn_topic_0183088057_p197485518319"></a><strong id="zh-cn_topic_0183088057_b77413551933"><a name="zh-cn_topic_0183088057_b77413551933"></a><a name="zh-cn_topic_0183088057_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088057_p374185520310"><a name="zh-cn_topic_0183088057_p374185520310"></a><a name="zh-cn_topic_0183088057_p374185520310"></a><strong id="zh-cn_topic_0183088057_b174125511315"><a name="zh-cn_topic_0183088057_b174125511315"></a><a name="zh-cn_topic_0183088057_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088057_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088057_p3465158518"><a name="zh-cn_topic_0183088057_p3465158518"></a><a name="zh-cn_topic_0183088057_p3465158518"></a>repeated ContainerStats</a> stats</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088057_p14745551137"><a name="zh-cn_topic_0183088057_p14745551137"></a><a name="zh-cn_topic_0183088057_p14745551137"></a>容器信息的列表。注：disk和inodes只支持oci格式镜像启动的容器查询</p>
</td>
</tr>
</tbody>
</table>

#### UpdateRuntimeConfig

#### 接口原型

```
rpc UpdateRuntimeConfig(UpdateRuntimeConfigRequest) returns (UpdateRuntimeConfigResponse);
```

#### 接口描述

提供标准的CRI接口，目的为了更新网络插件的Pod CIDR，当前CNI网络插件无需更新Pod CIDR，因此该接口只会记录访问日志。

#### 注意事项

接口操作不会对系统管理信息修改，只是记录一条日志。

#### 参数

<a name="zh-cn_topic_0183088058_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088058_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088058_p1089154617315"><a name="zh-cn_topic_0183088058_p1089154617315"></a><a name="zh-cn_topic_0183088058_p1089154617315"></a><strong id="zh-cn_topic_0183088058_b98915462314"><a name="zh-cn_topic_0183088058_b98915462314"></a><a name="zh-cn_topic_0183088058_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088058_p128984613319"><a name="zh-cn_topic_0183088058_p128984613319"></a><a name="zh-cn_topic_0183088058_p128984613319"></a><strong id="zh-cn_topic_0183088058_b989164612317"><a name="zh-cn_topic_0183088058_b989164612317"></a><a name="zh-cn_topic_0183088058_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088058_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088058_p476122243220"><a name="zh-cn_topic_0183088058_p476122243220"></a><a name="zh-cn_topic_0183088058_p476122243220"></a>RuntimeConfig</a> runtime_config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088058_p5596114510551"><a name="zh-cn_topic_0183088058_p5596114510551"></a><a name="zh-cn_topic_0183088058_p5596114510551"></a>包含Runtime要配置的信息</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

无

#### Status

#### 接口原型

```
rpc Status(StatusRequest) returns (StatusResponse) {};
```

#### 接口描述

获取runtime和pod的网络状态，在获取网络状态时，会触发网络配置的刷新。仅支持runtime类型为lcr的容器。

#### 注意事项

如果网络配置刷新失败，不会影响原有配置；只有刷新成功时，才会覆盖原有配置。

#### 参数

<a name="zh-cn_topic_0183088059_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088059_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088059_p1089154617315"><a name="zh-cn_topic_0183088059_p1089154617315"></a><a name="zh-cn_topic_0183088059_p1089154617315"></a><strong id="zh-cn_topic_0183088059_b98915462314"><a name="zh-cn_topic_0183088059_b98915462314"></a><a name="zh-cn_topic_0183088059_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088059_p128984613319"><a name="zh-cn_topic_0183088059_p128984613319"></a><a name="zh-cn_topic_0183088059_p128984613319"></a><strong id="zh-cn_topic_0183088059_b989164612317"><a name="zh-cn_topic_0183088059_b989164612317"></a><a name="zh-cn_topic_0183088059_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088059_row17894468314"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088059_p133821342185014"><a name="zh-cn_topic_0183088059_p133821342185014"></a><a name="zh-cn_topic_0183088059_p133821342185014"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088059_p5596114510551"><a name="zh-cn_topic_0183088059_p5596114510551"></a><a name="zh-cn_topic_0183088059_p5596114510551"></a>是否显示关于Runtime额外的信息（暂不支持）</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088059_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088059_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088059_p197485518319"><a name="zh-cn_topic_0183088059_p197485518319"></a><a name="zh-cn_topic_0183088059_p197485518319"></a><strong id="zh-cn_topic_0183088059_b77413551933"><a name="zh-cn_topic_0183088059_b77413551933"></a><a name="zh-cn_topic_0183088059_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088059_p374185520310"><a name="zh-cn_topic_0183088059_p374185520310"></a><a name="zh-cn_topic_0183088059_p374185520310"></a><strong id="zh-cn_topic_0183088059_b174125511315"><a name="zh-cn_topic_0183088059_b174125511315"></a><a name="zh-cn_topic_0183088059_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088059_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088059_p13351101810514"><a name="zh-cn_topic_0183088059_p13351101810514"></a><a name="zh-cn_topic_0183088059_p13351101810514"></a>RuntimeStatus</a> status</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088059_p18351018105117"><a name="zh-cn_topic_0183088059_p18351018105117"></a><a name="zh-cn_topic_0183088059_p18351018105117"></a>Runtime的状态</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088059_row1187724514524"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088059_p1887784525214"><a name="zh-cn_topic_0183088059_p1887784525214"></a><a name="zh-cn_topic_0183088059_p1887784525214"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088059_p20877184519522"><a name="zh-cn_topic_0183088059_p20877184519522"></a><a name="zh-cn_topic_0183088059_p20877184519522"></a>Runtime额外的信息，info的key为任意值，value为json格式，可包含任何debug信息；只有Verbose为true是才应该被赋值</p>
</td>
</tr>
</tbody>
</table>

### Image服务

提供了从镜像仓库拉取、查看、和移除镜像的gRPC API。

#### ListImages

#### 接口原型

```
rpc ListImages(ListImagesRequest) returns (ListImagesResponse) {}
```

#### 接口描述

列出当前已存在的镜像信息。

#### 注意事项

为统一接口，对于embedded格式镜像，可以通过cri images查询到。但是因embedded镜像不是标准OCI镜像，因此查询得到的结果有以下限制：

-   因embedded镜像无镜像ID，显示的镜像ID为镜像的config digest。
-   因embedded镜像本身无digest仅有config的digest，且格式不符合OCI镜像规范，因此无法显示digest。

#### 参数

<a name="zh-cn_topic_0183088060_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088060_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088060_p1089154617315"><a name="zh-cn_topic_0183088060_p1089154617315"></a><a name="zh-cn_topic_0183088060_p1089154617315"></a><strong id="zh-cn_topic_0183088060_b98915462314"><a name="zh-cn_topic_0183088060_b98915462314"></a><a name="zh-cn_topic_0183088060_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088060_p128984613319"><a name="zh-cn_topic_0183088060_p128984613319"></a><a name="zh-cn_topic_0183088060_p128984613319"></a><strong id="zh-cn_topic_0183088060_b989164612317"><a name="zh-cn_topic_0183088060_b989164612317"></a><a name="zh-cn_topic_0183088060_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088060_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088060_p0136125811713"><a name="zh-cn_topic_0183088060_p0136125811713"></a><a name="zh-cn_topic_0183088060_p0136125811713"></a>ImageSpec</a> filter</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088060_p1189846434"><a name="zh-cn_topic_0183088060_p1189846434"></a><a name="zh-cn_topic_0183088060_p1189846434"></a>筛选的镜像名称</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088060_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088060_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088060_p197485518319"><a name="zh-cn_topic_0183088060_p197485518319"></a><a name="zh-cn_topic_0183088060_p197485518319"></a><strong id="zh-cn_topic_0183088060_b77413551933"><a name="zh-cn_topic_0183088060_b77413551933"></a><a name="zh-cn_topic_0183088060_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088060_p374185520310"><a name="zh-cn_topic_0183088060_p374185520310"></a><a name="zh-cn_topic_0183088060_p374185520310"></a><strong id="zh-cn_topic_0183088060_b174125511315"><a name="zh-cn_topic_0183088060_b174125511315"></a><a name="zh-cn_topic_0183088060_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088060_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088060_p157445512318"><a name="zh-cn_topic_0183088060_p157445512318"></a><a name="zh-cn_topic_0183088060_p157445512318"></a>repeated  Image</a> images</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088060_p14745551137"><a name="zh-cn_topic_0183088060_p14745551137"></a><a name="zh-cn_topic_0183088060_p14745551137"></a>镜像信息列表</p>
</td>
</tr>
</tbody>
</table>

#### ImageStatus

#### 接口原型

```
rpc ImageStatus(ImageStatusRequest) returns (ImageStatusResponse) {}
```

#### 接口描述

查询指定镜像信息。

#### 注意事项

1.  查询指定镜像信息，若镜像不存在，则返回ImageStatusResponse，其中Image设置为nil。
2.  为统一接口，对于embedded格式镜像，因不符合OCI格式镜像，缺少字段，无法通过本接口进行查询。

#### 参数

<a name="zh-cn_topic_0183088061_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088061_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p1089154617315"><a name="zh-cn_topic_0183088061_p1089154617315"></a><a name="zh-cn_topic_0183088061_p1089154617315"></a><strong id="zh-cn_topic_0183088061_b98915462314"><a name="zh-cn_topic_0183088061_b98915462314"></a><a name="zh-cn_topic_0183088061_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p128984613319"><a name="zh-cn_topic_0183088061_p128984613319"></a><a name="zh-cn_topic_0183088061_p128984613319"></a><strong id="zh-cn_topic_0183088061_b989164612317"><a name="zh-cn_topic_0183088061_b989164612317"></a><a name="zh-cn_topic_0183088061_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088061_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p0136125811713"><a name="zh-cn_topic_0183088061_p0136125811713"></a><a name="zh-cn_topic_0183088061_p0136125811713"></a>ImageSpec</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p1189846434"><a name="zh-cn_topic_0183088061_p1189846434"></a><a name="zh-cn_topic_0183088061_p1189846434"></a>镜像名称</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088061_row1665161618234"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p56519161236"><a name="zh-cn_topic_0183088061_p56519161236"></a><a name="zh-cn_topic_0183088061_p56519161236"></a>bool verbose</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p1765216132316"><a name="zh-cn_topic_0183088061_p1765216132316"></a><a name="zh-cn_topic_0183088061_p1765216132316"></a>查询额外信息，暂不支持，无额外信息返回</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

<a name="zh-cn_topic_0183088061_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088061_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p197485518319"><a name="zh-cn_topic_0183088061_p197485518319"></a><a name="zh-cn_topic_0183088061_p197485518319"></a><strong id="zh-cn_topic_0183088061_b77413551933"><a name="zh-cn_topic_0183088061_b77413551933"></a><a name="zh-cn_topic_0183088061_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p374185520310"><a name="zh-cn_topic_0183088061_p374185520310"></a><a name="zh-cn_topic_0183088061_p374185520310"></a><strong id="zh-cn_topic_0183088061_b174125511315"><a name="zh-cn_topic_0183088061_b174125511315"></a><a name="zh-cn_topic_0183088061_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088061_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p157445512318"><a name="zh-cn_topic_0183088061_p157445512318"></a><a name="zh-cn_topic_0183088061_p157445512318"></a>Image</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p14745551137"><a name="zh-cn_topic_0183088061_p14745551137"></a><a name="zh-cn_topic_0183088061_p14745551137"></a>镜像信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088061_row467913219246"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088061_p46799211246"><a name="zh-cn_topic_0183088061_p46799211246"></a><a name="zh-cn_topic_0183088061_p46799211246"></a>map&lt;string, string&gt; info</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088061_p167918215244"><a name="zh-cn_topic_0183088061_p167918215244"></a><a name="zh-cn_topic_0183088061_p167918215244"></a>镜像额外信息，暂不支持，无额外信息返回</p>
</td>
</tr>
</tbody>
</table>

#### PullImage

#### 接口原型

```
 rpc PullImage(PullImageRequest) returns (PullImageResponse) {}
```

#### 接口描述

下载镜像。

#### 注意事项

当前支持下载public镜像，使用用户名、密码、auth信息下载私有镜像，不支持authconfig中的server\_address、identity\_token、registry\_token字段。

#### 参数

<a name="zh-cn_topic_0183088062_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088062_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088062_p1089154617315"><a name="zh-cn_topic_0183088062_p1089154617315"></a><a name="zh-cn_topic_0183088062_p1089154617315"></a><strong id="zh-cn_topic_0183088062_b98915462314"><a name="zh-cn_topic_0183088062_b98915462314"></a><a name="zh-cn_topic_0183088062_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088062_p128984613319"><a name="zh-cn_topic_0183088062_p128984613319"></a><a name="zh-cn_topic_0183088062_p128984613319"></a><strong id="zh-cn_topic_0183088062_b989164612317"><a name="zh-cn_topic_0183088062_b989164612317"></a><a name="zh-cn_topic_0183088062_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088062_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088062_p0136125811713"><a name="zh-cn_topic_0183088062_p0136125811713"></a><a name="zh-cn_topic_0183088062_p0136125811713"></a>ImageSpec</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088062_p1189846434"><a name="zh-cn_topic_0183088062_p1189846434"></a><a name="zh-cn_topic_0183088062_p1189846434"></a>要下载的镜像名称</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088062_row9786152142810"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088062_p177861927284"><a name="zh-cn_topic_0183088062_p177861927284"></a><a name="zh-cn_topic_0183088062_p177861927284"></a>AuthConfig</a>  auth</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088062_p20786182142817"><a name="zh-cn_topic_0183088062_p20786182142817"></a><a name="zh-cn_topic_0183088062_p20786182142817"></a>下载私有镜像时的验证信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183088062_row1665161618234"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088062_p56519161236"><a name="zh-cn_topic_0183088062_p56519161236"></a><a name="zh-cn_topic_0183088062_p56519161236"></a>PodSandboxConfig</a> sandbox_config</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088062_p1765216132316"><a name="zh-cn_topic_0183088062_p1765216132316"></a><a name="zh-cn_topic_0183088062_p1765216132316"></a>在Pod上下文中下载镜像（暂不支持）</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

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

#### RemoveImage

#### 接口原型

```
rpc RemoveImage(RemoveImageRequest) returns (RemoveImageResponse) {}
```

#### 接口描述

删除指定镜像。

#### 注意事项

为统一接口，对于embedded格式镜像，因不符合OCI格式镜像，缺少字段，无法通过本接口使用image id进行删除。

#### 参数

<a name="zh-cn_topic_0183088063_table184320467318"></a>
<table><tbody><tr id="zh-cn_topic_0183088063_row78917461336"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088063_p1089154617315"><a name="zh-cn_topic_0183088063_p1089154617315"></a><a name="zh-cn_topic_0183088063_p1089154617315"></a><strong id="zh-cn_topic_0183088063_b98915462314"><a name="zh-cn_topic_0183088063_b98915462314"></a><a name="zh-cn_topic_0183088063_b98915462314"></a>参数成员</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088063_p128984613319"><a name="zh-cn_topic_0183088063_p128984613319"></a><a name="zh-cn_topic_0183088063_p128984613319"></a><strong id="zh-cn_topic_0183088063_b989164612317"><a name="zh-cn_topic_0183088063_b989164612317"></a><a name="zh-cn_topic_0183088063_b989164612317"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088063_row10898461533"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088063_p0136125811713"><a name="zh-cn_topic_0183088063_p0136125811713"></a><a name="zh-cn_topic_0183088063_p0136125811713"></a>ImageSpec</a> image</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088063_p1189846434"><a name="zh-cn_topic_0183088063_p1189846434"></a><a name="zh-cn_topic_0183088063_p1189846434"></a>要删除的镜像名称或者ID</p>
</td>
</tr>
</tbody>
</table>

#### 返回值

无

#### ImageFsInfo

#### 接口原型

```
rpc ImageFsInfo(ImageFsInfoRequest) returns (ImageFsInfoResponse) {}
```

#### 接口描述

查询存储镜像的文件系统信息。

#### 注意事项

查询到的为镜像元数据下的文件系统信息。

#### 参数

无

#### 返回值

<a name="zh-cn_topic_0183088064_table15296551936"></a>
<table><tbody><tr id="zh-cn_topic_0183088064_row18741555834"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088064_p197485518319"><a name="zh-cn_topic_0183088064_p197485518319"></a><a name="zh-cn_topic_0183088064_p197485518319"></a><strong id="zh-cn_topic_0183088064_b77413551933"><a name="zh-cn_topic_0183088064_b77413551933"></a><a name="zh-cn_topic_0183088064_b77413551933"></a>返回值</strong></p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088064_p374185520310"><a name="zh-cn_topic_0183088064_p374185520310"></a><a name="zh-cn_topic_0183088064_p374185520310"></a><strong id="zh-cn_topic_0183088064_b174125511315"><a name="zh-cn_topic_0183088064_b174125511315"></a><a name="zh-cn_topic_0183088064_b174125511315"></a>描述</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0183088064_row87419551317"><td class="cellrowborder" valign="top" width="39.54%"><p id="zh-cn_topic_0183088064_p157445512318"><a name="zh-cn_topic_0183088064_p157445512318"></a><a name="zh-cn_topic_0183088064_p157445512318"></a>repeated FilesystemUsage</a> image_filesystems</p>
</td>
<td class="cellrowborder" valign="top" width="60.46%"><p id="zh-cn_topic_0183088064_p14745551137"><a name="zh-cn_topic_0183088064_p14745551137"></a><a name="zh-cn_topic_0183088064_p14745551137"></a>镜像存储文件系统信息</p>
</td>
</tr>
</tbody>
</table>

### 约束

1.  如果创建sandbox时，PodSandboxConfig参数中配置了log\_directory，则所有属于该sandbox的container在创建时必须在ContainerConfig中指定log\_path，否则可能导致容器无法使用CRI接口启动，甚至无法使用CRI接口删除。

    容器的真实LOGPATH=log\_directory/log\_path，如果log\_path不配置，那么最终的LOGPATH会变为LOGPATH=log\_directory。

    -   如果该路径不存在，isulad在启动容器时会创建一个软链接，指向最终的容器日志真实路径，此时log\_directory变成一个软链接，此时有两种情况：
        1.  第一种情况，如果该sandbox里其它容器也没配置log\_path，在启动其它容器时，log\_directory会被删除，然后重新指向新启动容器的log\_path，导致之前启动的容器日志指向后面启动容器的日志。
        2.  第二种情况，如果该sandbox里其它容器配置了log\_path，则该容器的LOGPATH=log\_directory/log\_path，由于log\_directory实际是个软链接，使用log\_directory/log\_path为软链接指向容器真实日志路径时，创建会失败。

    -   如果该路径存在，isulad在启动容器时首先会尝试删除该路径（非递归），如果该路径是个文件夹，且里面有内容，删除会失败，从而导致创建软链接失败，容器启动失败，删除该容器时，也会出现同样的现象，导致删除失败。

2.  如果创建sandbox时，PodSandboxConfig参数中配置了log\_directory，且container创建时在ContainerConfig中指定log\_path，那么最终的LOGPATH=log\_directory/log\_path，isulad不会递归的创建LOGPATH，因而用户必须保证dirname\(LOGPATH\)存在，即最终的日志文件的上一级路径存在。
3.  如果创建sandbox时，PodSandboxConfig参数中配置了log\_directory，如果有两个或多个container创建时在ContainerConfig中指定了同一个log\_path，或者不同的sandbox内的容器最终指向的LOGPATH是同一路径，若容器启动成功，则后启动的容器日志路径会覆盖掉之前启动的容器日志路径。
4.  如果远程镜像仓库中镜像内容发生变化，调用CRI Pull image接口重新下载该镜像时，若本地原来存储有原镜像，则原镜像的镜像名称、TAG会变更为“none”

    举例如下：

    本地已存储镜像：

    ```
    IMAGE                                        TAG                 IMAGE ID            SIZE
    rnd-dockerhub.huawei.com/pproxyisulad/test   latest              99e59f495ffaa       753kB
    ```

    远程仓库中rnd-dockerhub.huawei.com/pproxyisulad/test:latest 镜像更新后，重新下载后：

    ```
    IMAGE                                        TAG                 IMAGE ID            SIZE
    <none>                                       <none>              99e59f495ffaa       753kB
    rnd-dockerhub.huawei.com/pproxyisulad/test   latest              d8233ab899d41       1.42MB
    ```

    使用isula images 命令行查询，REF显示为"-"：

    ```
    REF                                               IMAGE ID               CREATED              SIZE       
    rnd-dockerhub.huawei.com/pproxyisulad/test:latest d8233ab899d41          2019-02-14 19:19:37  1.42MB     
    -                                                 99e59f495ffaa          2016-05-04 02:26:41  753kB
    ```


