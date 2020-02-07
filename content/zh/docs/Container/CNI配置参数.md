# CNI配置参数<a name="ZH-CN_TOPIC_0184808159"></a>

**表 1**  CNI单网络配置参数

<a name="zh-cn_topic_0184347952_table425023335913"></a>
<table><thead align="left"><tr id="zh-cn_topic_0184347952_row1611175365912"><th class="cellrowborder" valign="top" width="22.85%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0184347952_p41235319594"><a name="zh-cn_topic_0184347952_p41235319594"></a><a name="zh-cn_topic_0184347952_p41235319594"></a><strong id="zh-cn_topic_0184347952_b1490212411312"><a name="zh-cn_topic_0184347952_b1490212411312"></a><a name="zh-cn_topic_0184347952_b1490212411312"></a>参数</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.91%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0184347952_p161245375917"><a name="zh-cn_topic_0184347952_p161245375917"></a><a name="zh-cn_topic_0184347952_p161245375917"></a><strong id="zh-cn_topic_0184347952_b16903152418315"><a name="zh-cn_topic_0184347952_b16903152418315"></a><a name="zh-cn_topic_0184347952_b16903152418315"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="7.4399999999999995%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0184347952_p113953155917"><a name="zh-cn_topic_0184347952_p113953155917"></a><a name="zh-cn_topic_0184347952_p113953155917"></a><strong id="zh-cn_topic_0184347952_b2905124334"><a name="zh-cn_topic_0184347952_b2905124334"></a><a name="zh-cn_topic_0184347952_b2905124334"></a>是否可选</strong></p>
</th>
<th class="cellrowborder" valign="top" width="52.800000000000004%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0184347952_p10139530593"><a name="zh-cn_topic_0184347952_p10139530593"></a><a name="zh-cn_topic_0184347952_p10139530593"></a><strong id="zh-cn_topic_0184347952_b1290612246312"><a name="zh-cn_topic_0184347952_b1290612246312"></a><a name="zh-cn_topic_0184347952_b1290612246312"></a>说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0184347952_row18456333125919"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p1245620339599"><a name="zh-cn_topic_0184347952_p1245620339599"></a><a name="zh-cn_topic_0184347952_p1245620339599"></a>cniVersion</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p17456203305919"><a name="zh-cn_topic_0184347952_p17456203305919"></a><a name="zh-cn_topic_0184347952_p17456203305919"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p1545613334599"><a name="zh-cn_topic_0184347952_p1545613334599"></a><a name="zh-cn_topic_0184347952_p1545613334599"></a>必选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p3456133195916"><a name="zh-cn_topic_0184347952_p3456133195916"></a><a name="zh-cn_topic_0184347952_p3456133195916"></a>CNI版本号，当前只支持0.3.0，0.3.1。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row145713332596"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p19457143310595"><a name="zh-cn_topic_0184347952_p19457143310595"></a><a name="zh-cn_topic_0184347952_p19457143310595"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p14457133125915"><a name="zh-cn_topic_0184347952_p14457133125915"></a><a name="zh-cn_topic_0184347952_p14457133125915"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p15457203395920"><a name="zh-cn_topic_0184347952_p15457203395920"></a><a name="zh-cn_topic_0184347952_p15457203395920"></a>必选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p15457193311594"><a name="zh-cn_topic_0184347952_p15457193311594"></a><a name="zh-cn_topic_0184347952_p15457193311594"></a>网络名称，由用户自定义，需保证唯一。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row1845793319597"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p1745763311595"><a name="zh-cn_topic_0184347952_p1745763311595"></a><a name="zh-cn_topic_0184347952_p1745763311595"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p24572336594"><a name="zh-cn_topic_0184347952_p24572336594"></a><a name="zh-cn_topic_0184347952_p24572336594"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p0457133315591"><a name="zh-cn_topic_0184347952_p0457133315591"></a><a name="zh-cn_topic_0184347952_p0457133315591"></a>必选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p1045763365920"><a name="zh-cn_topic_0184347952_p1045763365920"></a><a name="zh-cn_topic_0184347952_p1045763365920"></a>网络类型。目前支持的网络类型：</p>
<p id="zh-cn_topic_0184347952_p184572033185914"><a name="zh-cn_topic_0184347952_p184572033185914"></a><a name="zh-cn_topic_0184347952_p184572033185914"></a>underlay_ipvlan</p>
<p id="zh-cn_topic_0184347952_p16457203335917"><a name="zh-cn_topic_0184347952_p16457203335917"></a><a name="zh-cn_topic_0184347952_p16457203335917"></a>overlay_l2</p>
<p id="zh-cn_topic_0184347952_p04578332594"><a name="zh-cn_topic_0184347952_p04578332594"></a><a name="zh-cn_topic_0184347952_p04578332594"></a>underlay_l2</p>
<p id="zh-cn_topic_0184347952_p14457113318593"><a name="zh-cn_topic_0184347952_p14457113318593"></a><a name="zh-cn_topic_0184347952_p14457113318593"></a>vpc-router</p>
<p id="zh-cn_topic_0184347952_p1845723395911"><a name="zh-cn_topic_0184347952_p1845723395911"></a><a name="zh-cn_topic_0184347952_p1845723395911"></a>dpdk-direct</p>
<p id="zh-cn_topic_0184347952_p545703314597"><a name="zh-cn_topic_0184347952_p545703314597"></a><a name="zh-cn_topic_0184347952_p545703314597"></a>phy-direct</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row12457833175914"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p94575333590"><a name="zh-cn_topic_0184347952_p94575333590"></a><a name="zh-cn_topic_0184347952_p94575333590"></a>ipmasp</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p13457113395919"><a name="zh-cn_topic_0184347952_p13457113395919"></a><a name="zh-cn_topic_0184347952_p13457113395919"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p114571933105913"><a name="zh-cn_topic_0184347952_p114571933105913"></a><a name="zh-cn_topic_0184347952_p114571933105913"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p134571335592"><a name="zh-cn_topic_0184347952_p134571335592"></a><a name="zh-cn_topic_0184347952_p134571335592"></a>设置IP  masquerade</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row6457333175915"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p14588338591"><a name="zh-cn_topic_0184347952_p14588338591"></a><a name="zh-cn_topic_0184347952_p14588338591"></a>ipam</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p11458733105913"><a name="zh-cn_topic_0184347952_p11458733105913"></a><a name="zh-cn_topic_0184347952_p11458733105913"></a>结构体</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p1458833165918"><a name="zh-cn_topic_0184347952_p1458833165918"></a><a name="zh-cn_topic_0184347952_p1458833165918"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p124581033165912"><a name="zh-cn_topic_0184347952_p124581033165912"></a><a name="zh-cn_topic_0184347952_p124581033165912"></a>详细定义参考IPAM参数定义</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row64582338599"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p1545818333591"><a name="zh-cn_topic_0184347952_p1545818333591"></a><a name="zh-cn_topic_0184347952_p1545818333591"></a>ipam.type</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1145814336593"><a name="zh-cn_topic_0184347952_p1145814336593"></a><a name="zh-cn_topic_0184347952_p1145814336593"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p11458143365913"><a name="zh-cn_topic_0184347952_p11458143365913"></a><a name="zh-cn_topic_0184347952_p11458143365913"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p64581633165914"><a name="zh-cn_topic_0184347952_p64581633165914"></a><a name="zh-cn_topic_0184347952_p64581633165914"></a>IPAM类型，目前支持的类型：</p>
<p id="zh-cn_topic_0184347952_p15458143316596"><a name="zh-cn_topic_0184347952_p15458143316596"></a><a name="zh-cn_topic_0184347952_p15458143316596"></a>（1）underlay_l2、overlay_l2、vpc-router组网默认值distributed_l2，且只支持distributed_l2。</p>
<p id="zh-cn_topic_0184347952_p1845803315596"><a name="zh-cn_topic_0184347952_p1845803315596"></a><a name="zh-cn_topic_0184347952_p1845803315596"></a>（2）underlay_ipvlan组网，默认distributed_l2。<strong id="zh-cn_topic_0184347952_b1145853319594"><a name="zh-cn_topic_0184347952_b1145853319594"></a><a name="zh-cn_topic_0184347952_b1145853319594"></a>CCN场景只支持null、fixed；CCE和FST 5G core场景只支持null、distributed_l2。</strong></p>
<p id="zh-cn_topic_0184347952_p4458103325919"><a name="zh-cn_topic_0184347952_p4458103325919"></a><a name="zh-cn_topic_0184347952_p4458103325919"></a>（3）phy-direct、dpdk-direct组网，默认l2，可选null、distributed_l2。<strong id="zh-cn_topic_0184347952_b5458123313598"><a name="zh-cn_topic_0184347952_b5458123313598"></a><a name="zh-cn_topic_0184347952_b5458123313598"></a>FST 5G core场景只支持null、distributed_l2。</strong></p>
<p id="zh-cn_topic_0184347952_p0458123314597"><a name="zh-cn_topic_0184347952_p0458123314597"></a><a name="zh-cn_topic_0184347952_p0458123314597"></a>说明：</p>
<p id="zh-cn_topic_0184347952_p545813314591"><a name="zh-cn_topic_0184347952_p545813314591"></a><a name="zh-cn_topic_0184347952_p545813314591"></a>超出选择范围（比如host-local），Canal会自动设置为默认，不会返回错误。</p>
<p id="zh-cn_topic_0184347952_p345814339593"><a name="zh-cn_topic_0184347952_p345814339593"></a><a name="zh-cn_topic_0184347952_p345814339593"></a>null：不使用canal管理ip。</p>
<p id="zh-cn_topic_0184347952_p19458833175913"><a name="zh-cn_topic_0184347952_p19458833175913"></a><a name="zh-cn_topic_0184347952_p19458833175913"></a>fixed：固定ip，CCN场景使用。</p>
<p id="zh-cn_topic_0184347952_p7458183355912"><a name="zh-cn_topic_0184347952_p7458183355912"></a><a name="zh-cn_topic_0184347952_p7458183355912"></a>l2：目前没有场景使用。</p>
<p id="zh-cn_topic_0184347952_p6458113385919"><a name="zh-cn_topic_0184347952_p6458113385919"></a><a name="zh-cn_topic_0184347952_p6458113385919"></a>distributed_l2：使用分布式小子网管理ip。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row5458143315913"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p745883335913"><a name="zh-cn_topic_0184347952_p745883335913"></a><a name="zh-cn_topic_0184347952_p745883335913"></a>ipam.subnet</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p445812330595"><a name="zh-cn_topic_0184347952_p445812330595"></a><a name="zh-cn_topic_0184347952_p445812330595"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p245943318597"><a name="zh-cn_topic_0184347952_p245943318597"></a><a name="zh-cn_topic_0184347952_p245943318597"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p1245912333595"><a name="zh-cn_topic_0184347952_p1245912333595"></a><a name="zh-cn_topic_0184347952_p1245912333595"></a>子网信息。Canal支持的subnet  mask范围为[8,29]，并且要求IP地址不能为Multicast地址（如224.0.0.0/4），保留地址（240.0.0.0/4），本地link地址（169.254.0.0/16）以及本地loop地址（127.0.0.0/8）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row10459193395917"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p2459133105918"><a name="zh-cn_topic_0184347952_p2459133105918"></a><a name="zh-cn_topic_0184347952_p2459133105918"></a>ipam.gateway</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p19459193325915"><a name="zh-cn_topic_0184347952_p19459193325915"></a><a name="zh-cn_topic_0184347952_p19459193325915"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p1945993395915"><a name="zh-cn_topic_0184347952_p1945993395915"></a><a name="zh-cn_topic_0184347952_p1945993395915"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p2459183395910"><a name="zh-cn_topic_0184347952_p2459183395910"></a><a name="zh-cn_topic_0184347952_p2459183395910"></a>网关IP</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row745914339593"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p1545943319593"><a name="zh-cn_topic_0184347952_p1545943319593"></a><a name="zh-cn_topic_0184347952_p1545943319593"></a>ipam.range-start</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p134591833155916"><a name="zh-cn_topic_0184347952_p134591833155916"></a><a name="zh-cn_topic_0184347952_p134591833155916"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p245963315911"><a name="zh-cn_topic_0184347952_p245963315911"></a><a name="zh-cn_topic_0184347952_p245963315911"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p1945911332590"><a name="zh-cn_topic_0184347952_p1945911332590"></a><a name="zh-cn_topic_0184347952_p1945911332590"></a>可用的起始IP地址</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row1845973319593"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p16459833135911"><a name="zh-cn_topic_0184347952_p16459833135911"></a><a name="zh-cn_topic_0184347952_p16459833135911"></a>ipam.range-end</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p19459153355916"><a name="zh-cn_topic_0184347952_p19459153355916"></a><a name="zh-cn_topic_0184347952_p19459153355916"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p104593335594"><a name="zh-cn_topic_0184347952_p104593335594"></a><a name="zh-cn_topic_0184347952_p104593335594"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p5459133345919"><a name="zh-cn_topic_0184347952_p5459133345919"></a><a name="zh-cn_topic_0184347952_p5459133345919"></a>可用的结束IP地址</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row445923375914"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p204591733125918"><a name="zh-cn_topic_0184347952_p204591733125918"></a><a name="zh-cn_topic_0184347952_p204591733125918"></a>ipam.routes</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p54594339591"><a name="zh-cn_topic_0184347952_p54594339591"></a><a name="zh-cn_topic_0184347952_p54594339591"></a>结构体</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p1746053315594"><a name="zh-cn_topic_0184347952_p1746053315594"></a><a name="zh-cn_topic_0184347952_p1746053315594"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p17460183312599"><a name="zh-cn_topic_0184347952_p17460183312599"></a><a name="zh-cn_topic_0184347952_p17460183312599"></a>subnet列表，每个元素都是一个route字典。参考route定义.</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row14460733205914"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p15460233125915"><a name="zh-cn_topic_0184347952_p15460233125915"></a><a name="zh-cn_topic_0184347952_p15460233125915"></a>ipam.routes.dst</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p174601733205912"><a name="zh-cn_topic_0184347952_p174601733205912"></a><a name="zh-cn_topic_0184347952_p174601733205912"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p146093312591"><a name="zh-cn_topic_0184347952_p146093312591"></a><a name="zh-cn_topic_0184347952_p146093312591"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p174606339592"><a name="zh-cn_topic_0184347952_p174606339592"></a><a name="zh-cn_topic_0184347952_p174606339592"></a>表示目的网络</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row1346033311594"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p34605332594"><a name="zh-cn_topic_0184347952_p34605332594"></a><a name="zh-cn_topic_0184347952_p34605332594"></a>ipam.routes.gw</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p946033395915"><a name="zh-cn_topic_0184347952_p946033395915"></a><a name="zh-cn_topic_0184347952_p946033395915"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p34601933105912"><a name="zh-cn_topic_0184347952_p34601933105912"></a><a name="zh-cn_topic_0184347952_p34601933105912"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p104606330596"><a name="zh-cn_topic_0184347952_p104606330596"></a><a name="zh-cn_topic_0184347952_p104606330596"></a>表示网关地址</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row3460173314595"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p546023316595"><a name="zh-cn_topic_0184347952_p546023316595"></a><a name="zh-cn_topic_0184347952_p546023316595"></a>dns</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p346011337596"><a name="zh-cn_topic_0184347952_p346011337596"></a><a name="zh-cn_topic_0184347952_p346011337596"></a>结构体</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p1746043345916"><a name="zh-cn_topic_0184347952_p1746043345916"></a><a name="zh-cn_topic_0184347952_p1746043345916"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p446020333590"><a name="zh-cn_topic_0184347952_p446020333590"></a><a name="zh-cn_topic_0184347952_p446020333590"></a>包含一些DNS的特殊值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row1946063365915"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p15460133355911"><a name="zh-cn_topic_0184347952_p15460133355911"></a><a name="zh-cn_topic_0184347952_p15460133355911"></a>dns.nameservers</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p144611933175916"><a name="zh-cn_topic_0184347952_p144611933175916"></a><a name="zh-cn_topic_0184347952_p144611933175916"></a>[]string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p1846153355915"><a name="zh-cn_topic_0184347952_p1846153355915"></a><a name="zh-cn_topic_0184347952_p1846153355915"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p14611733185917"><a name="zh-cn_topic_0184347952_p14611733185917"></a><a name="zh-cn_topic_0184347952_p14611733185917"></a>nameservers</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row6461113313597"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p19461163311599"><a name="zh-cn_topic_0184347952_p19461163311599"></a><a name="zh-cn_topic_0184347952_p19461163311599"></a>dns.domain</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p184614336592"><a name="zh-cn_topic_0184347952_p184614336592"></a><a name="zh-cn_topic_0184347952_p184614336592"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p1461183312592"><a name="zh-cn_topic_0184347952_p1461183312592"></a><a name="zh-cn_topic_0184347952_p1461183312592"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p14618334593"><a name="zh-cn_topic_0184347952_p14618334593"></a><a name="zh-cn_topic_0184347952_p14618334593"></a>domain</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row346114331592"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p246153315591"><a name="zh-cn_topic_0184347952_p246153315591"></a><a name="zh-cn_topic_0184347952_p246153315591"></a>dns.search</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p4461123317593"><a name="zh-cn_topic_0184347952_p4461123317593"></a><a name="zh-cn_topic_0184347952_p4461123317593"></a>[]string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p4461133325914"><a name="zh-cn_topic_0184347952_p4461133325914"></a><a name="zh-cn_topic_0184347952_p4461133325914"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p1246116336592"><a name="zh-cn_topic_0184347952_p1246116336592"></a><a name="zh-cn_topic_0184347952_p1246116336592"></a>search</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row114613332593"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p18461133312596"><a name="zh-cn_topic_0184347952_p18461133312596"></a><a name="zh-cn_topic_0184347952_p18461133312596"></a>dns.options</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1346253325910"><a name="zh-cn_topic_0184347952_p1346253325910"></a><a name="zh-cn_topic_0184347952_p1346253325910"></a>[]string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p13462333185914"><a name="zh-cn_topic_0184347952_p13462333185914"></a><a name="zh-cn_topic_0184347952_p13462333185914"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p15462103310599"><a name="zh-cn_topic_0184347952_p15462103310599"></a><a name="zh-cn_topic_0184347952_p15462103310599"></a>选项</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row946210331598"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p6462123375917"><a name="zh-cn_topic_0184347952_p6462123375917"></a><a name="zh-cn_topic_0184347952_p6462123375917"></a>multi_entry</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p2462143335913"><a name="zh-cn_topic_0184347952_p2462143335913"></a><a name="zh-cn_topic_0184347952_p2462143335913"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p10462833155911"><a name="zh-cn_topic_0184347952_p10462833155911"></a><a name="zh-cn_topic_0184347952_p10462833155911"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p17462133365911"><a name="zh-cn_topic_0184347952_p17462133365911"></a><a name="zh-cn_topic_0184347952_p17462133365911"></a>表示一个vnic需要的ip数量,范围0~16。对于物理直通，单个网卡最多可申请128个IP。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row54621733105915"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p194621333165913"><a name="zh-cn_topic_0184347952_p194621333165913"></a><a name="zh-cn_topic_0184347952_p194621333165913"></a>backup_mode</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p16462333105910"><a name="zh-cn_topic_0184347952_p16462333105910"></a><a name="zh-cn_topic_0184347952_p16462333105910"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p4462193319597"><a name="zh-cn_topic_0184347952_p4462193319597"></a><a name="zh-cn_topic_0184347952_p4462193319597"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p646212333592"><a name="zh-cn_topic_0184347952_p646212333592"></a><a name="zh-cn_topic_0184347952_p646212333592"></a>表示主备模式，仅用于phy-direct和dpdk-direct组网。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row16462203385913"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p104621333175910"><a name="zh-cn_topic_0184347952_p104621333175910"></a><a name="zh-cn_topic_0184347952_p104621333175910"></a>vlanID</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p10462933115917"><a name="zh-cn_topic_0184347952_p10462933115917"></a><a name="zh-cn_topic_0184347952_p10462933115917"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p44624337593"><a name="zh-cn_topic_0184347952_p44624337593"></a><a name="zh-cn_topic_0184347952_p44624337593"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p3462163319596"><a name="zh-cn_topic_0184347952_p3462163319596"></a><a name="zh-cn_topic_0184347952_p3462163319596"></a>0~4095,允许PaaS直接指定。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row146273375917"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p7462143365916"><a name="zh-cn_topic_0184347952_p7462143365916"></a><a name="zh-cn_topic_0184347952_p7462143365916"></a>vlan_inside</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1846317331596"><a name="zh-cn_topic_0184347952_p1846317331596"></a><a name="zh-cn_topic_0184347952_p1846317331596"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p12463133125913"><a name="zh-cn_topic_0184347952_p12463133125913"></a><a name="zh-cn_topic_0184347952_p12463133125913"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p0463123365918"><a name="zh-cn_topic_0184347952_p0463123365918"></a><a name="zh-cn_topic_0184347952_p0463123365918"></a>true表示vlan功能由Node内部实现，false表示vlan在外部实现。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row114638338593"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p20463833125910"><a name="zh-cn_topic_0184347952_p20463833125910"></a><a name="zh-cn_topic_0184347952_p20463833125910"></a>vxlanID</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p16463153311592"><a name="zh-cn_topic_0184347952_p16463153311592"></a><a name="zh-cn_topic_0184347952_p16463153311592"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p1846320339593"><a name="zh-cn_topic_0184347952_p1846320339593"></a><a name="zh-cn_topic_0184347952_p1846320339593"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p54631233175911"><a name="zh-cn_topic_0184347952_p54631233175911"></a><a name="zh-cn_topic_0184347952_p54631233175911"></a>0~16777215,允许PaaS直接指定。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row8463733105917"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p11463733195913"><a name="zh-cn_topic_0184347952_p11463733195913"></a><a name="zh-cn_topic_0184347952_p11463733195913"></a>vxlan_inside</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1846333315599"><a name="zh-cn_topic_0184347952_p1846333315599"></a><a name="zh-cn_topic_0184347952_p1846333315599"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p124631233185912"><a name="zh-cn_topic_0184347952_p124631233185912"></a><a name="zh-cn_topic_0184347952_p124631233185912"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p2463203335910"><a name="zh-cn_topic_0184347952_p2463203335910"></a><a name="zh-cn_topic_0184347952_p2463203335910"></a>true表示vlan功能由Node内部实现，false表示vlan在外部实现。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row74632339594"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p1746353312593"><a name="zh-cn_topic_0184347952_p1746353312593"></a><a name="zh-cn_topic_0184347952_p1746353312593"></a>action</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p446383310596"><a name="zh-cn_topic_0184347952_p446383310596"></a><a name="zh-cn_topic_0184347952_p446383310596"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p0463183314597"><a name="zh-cn_topic_0184347952_p0463183314597"></a><a name="zh-cn_topic_0184347952_p0463183314597"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p546323385915"><a name="zh-cn_topic_0184347952_p546323385915"></a><a name="zh-cn_topic_0184347952_p546323385915"></a>该参数只能和特殊containerID  “000000000000”一起使用。</p>
<p id="zh-cn_topic_0184347952_p144637332597"><a name="zh-cn_topic_0184347952_p144637332597"></a><a name="zh-cn_topic_0184347952_p144637332597"></a>Create表示创建网络。</p>
<p id="zh-cn_topic_0184347952_p204638336595"><a name="zh-cn_topic_0184347952_p204638336595"></a><a name="zh-cn_topic_0184347952_p204638336595"></a>Delete表示删除网络。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row17463173385916"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p046410338599"><a name="zh-cn_topic_0184347952_p046410338599"></a><a name="zh-cn_topic_0184347952_p046410338599"></a>args</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p2464133311593"><a name="zh-cn_topic_0184347952_p2464133311593"></a><a name="zh-cn_topic_0184347952_p2464133311593"></a>map[string]interface{}</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p446410339594"><a name="zh-cn_topic_0184347952_p446410339594"></a><a name="zh-cn_topic_0184347952_p446410339594"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p346413375920"><a name="zh-cn_topic_0184347952_p346413375920"></a><a name="zh-cn_topic_0184347952_p346413375920"></a>主要描述键值对类型。<a href="#zh-cn_topic_0184347952_table16143853317">表2</a></p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row946416332593"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p1146412335595"><a name="zh-cn_topic_0184347952_p1146412335595"></a><a name="zh-cn_topic_0184347952_p1146412335595"></a>runtimeConfig</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p446463365915"><a name="zh-cn_topic_0184347952_p446463365915"></a><a name="zh-cn_topic_0184347952_p446463365915"></a>结构体</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p146419334591"><a name="zh-cn_topic_0184347952_p146419334591"></a><a name="zh-cn_topic_0184347952_p146419334591"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p1646513319596"><a name="zh-cn_topic_0184347952_p1646513319596"></a><a name="zh-cn_topic_0184347952_p1646513319596"></a>无</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row14466173355917"><td class="cellrowborder" valign="top" width="22.85%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p9466143317596"><a name="zh-cn_topic_0184347952_p9466143317596"></a><a name="zh-cn_topic_0184347952_p9466143317596"></a>capabilities</p>
</td>
<td class="cellrowborder" valign="top" width="16.91%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p17466143385914"><a name="zh-cn_topic_0184347952_p17466143385914"></a><a name="zh-cn_topic_0184347952_p17466143385914"></a>结构体</p>
</td>
<td class="cellrowborder" valign="top" width="7.4399999999999995%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p4466333135917"><a name="zh-cn_topic_0184347952_p4466333135917"></a><a name="zh-cn_topic_0184347952_p4466333135917"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.800000000000004%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p1046603317599"><a name="zh-cn_topic_0184347952_p1046603317599"></a><a name="zh-cn_topic_0184347952_p1046603317599"></a>无</p>
</td>
</tr>
</tbody>
</table>

**表 2**  CNI args参数表

<a name="zh-cn_topic_0184347952_table16143853317"></a>
<table><thead align="left"><tr id="zh-cn_topic_0184347952_row143431031620"><th class="cellrowborder" valign="top" width="23.02%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0184347952_p183433311212"><a name="zh-cn_topic_0184347952_p183433311212"></a><a name="zh-cn_topic_0184347952_p183433311212"></a><strong id="zh-cn_topic_0184347952_b156728318317"><a name="zh-cn_topic_0184347952_b156728318317"></a><a name="zh-cn_topic_0184347952_b156728318317"></a>参数</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.650000000000002%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0184347952_p183437311223"><a name="zh-cn_topic_0184347952_p183437311223"></a><a name="zh-cn_topic_0184347952_p183437311223"></a><strong id="zh-cn_topic_0184347952_b87031632311"><a name="zh-cn_topic_0184347952_b87031632311"></a><a name="zh-cn_topic_0184347952_b87031632311"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="7.829999999999999%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0184347952_p183431731722"><a name="zh-cn_topic_0184347952_p183431731722"></a><a name="zh-cn_topic_0184347952_p183431731722"></a><strong id="zh-cn_topic_0184347952_b19704731133"><a name="zh-cn_topic_0184347952_b19704731133"></a><a name="zh-cn_topic_0184347952_b19704731133"></a>是否可选</strong></p>
</th>
<th class="cellrowborder" valign="top" width="52.5%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0184347952_p183445319216"><a name="zh-cn_topic_0184347952_p183445319216"></a><a name="zh-cn_topic_0184347952_p183445319216"></a><strong id="zh-cn_topic_0184347952_b1570513314316"><a name="zh-cn_topic_0184347952_b1570513314316"></a><a name="zh-cn_topic_0184347952_b1570513314316"></a>说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0184347952_row18251205310112"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p172518531813"><a name="zh-cn_topic_0184347952_p172518531813"></a><a name="zh-cn_topic_0184347952_p172518531813"></a>K8S_POD_NAME</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p182511953814"><a name="zh-cn_topic_0184347952_p182511953814"></a><a name="zh-cn_topic_0184347952_p182511953814"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p125195316111"><a name="zh-cn_topic_0184347952_p125195316111"></a><a name="zh-cn_topic_0184347952_p125195316111"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p1725116531015"><a name="zh-cn_topic_0184347952_p1725116531015"></a><a name="zh-cn_topic_0184347952_p1725116531015"></a>申请固定IP（runtimeConfig.ican_caps.fixed_ip为true）时需要设置K8S_POD_NAME</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row1525113531115"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p825113531916"><a name="zh-cn_topic_0184347952_p825113531916"></a><a name="zh-cn_topic_0184347952_p825113531916"></a>K8S_POD_NAMESPACE</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p142513531513"><a name="zh-cn_topic_0184347952_p142513531513"></a><a name="zh-cn_topic_0184347952_p142513531513"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p7251175312113"><a name="zh-cn_topic_0184347952_p7251175312113"></a><a name="zh-cn_topic_0184347952_p7251175312113"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p2025116532115"><a name="zh-cn_topic_0184347952_p2025116532115"></a><a name="zh-cn_topic_0184347952_p2025116532115"></a>申请固定IP（runtimeConfig.ican_caps.fixed_ip为true）时需要设置K8S_POD_NAMESPACE</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row1825116532010"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p125105310117"><a name="zh-cn_topic_0184347952_p125105310117"></a><a name="zh-cn_topic_0184347952_p125105310117"></a>SECURE_CONTAINER</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p12251753815"><a name="zh-cn_topic_0184347952_p12251753815"></a><a name="zh-cn_topic_0184347952_p12251753815"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p525116533115"><a name="zh-cn_topic_0184347952_p525116533115"></a><a name="zh-cn_topic_0184347952_p525116533115"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p152515531119"><a name="zh-cn_topic_0184347952_p152515531119"></a><a name="zh-cn_topic_0184347952_p152515531119"></a>安全容器标志</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row825118534116"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p125114531813"><a name="zh-cn_topic_0184347952_p125114531813"></a><a name="zh-cn_topic_0184347952_p125114531813"></a>multi_port</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p7252653517"><a name="zh-cn_topic_0184347952_p7252653517"></a><a name="zh-cn_topic_0184347952_p7252653517"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p9252195319110"><a name="zh-cn_topic_0184347952_p9252195319110"></a><a name="zh-cn_topic_0184347952_p9252195319110"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p62520539117"><a name="zh-cn_topic_0184347952_p62520539117"></a><a name="zh-cn_topic_0184347952_p62520539117"></a>默认值为1，取值范围1-8。只支持phy-direct和dpdk-direct两种类型网络，指定直通网卡数量</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row14252125315111"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p112520531911"><a name="zh-cn_topic_0184347952_p112520531911"></a><a name="zh-cn_topic_0184347952_p112520531911"></a>phy-direct</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p72521753819"><a name="zh-cn_topic_0184347952_p72521753819"></a><a name="zh-cn_topic_0184347952_p72521753819"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p8252185314114"><a name="zh-cn_topic_0184347952_p8252185314114"></a><a name="zh-cn_topic_0184347952_p8252185314114"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p92526538120"><a name="zh-cn_topic_0184347952_p92526538120"></a><a name="zh-cn_topic_0184347952_p92526538120"></a>用于在创建硬直通容器网络时指定接入的网卡</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row152521853417"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p2025219535111"><a name="zh-cn_topic_0184347952_p2025219535111"></a><a name="zh-cn_topic_0184347952_p2025219535111"></a>dpdk-direct</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p12252125319111"><a name="zh-cn_topic_0184347952_p12252125319111"></a><a name="zh-cn_topic_0184347952_p12252125319111"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p1725216536114"><a name="zh-cn_topic_0184347952_p1725216536114"></a><a name="zh-cn_topic_0184347952_p1725216536114"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p1325215531717"><a name="zh-cn_topic_0184347952_p1325215531717"></a><a name="zh-cn_topic_0184347952_p1325215531717"></a>用于在创建dpdk直通容器网络时指定接入的网卡</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row1125214530113"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p11252753112"><a name="zh-cn_topic_0184347952_p11252753112"></a><a name="zh-cn_topic_0184347952_p11252753112"></a>tenant_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p5252185311118"><a name="zh-cn_topic_0184347952_p5252185311118"></a><a name="zh-cn_topic_0184347952_p5252185311118"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p92526531311"><a name="zh-cn_topic_0184347952_p92526531311"></a><a name="zh-cn_topic_0184347952_p92526531311"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p17252165314117"><a name="zh-cn_topic_0184347952_p17252165314117"></a><a name="zh-cn_topic_0184347952_p17252165314117"></a>租户的ID。</p>
<p id="zh-cn_topic_0184347952_p1225213531417"><a name="zh-cn_topic_0184347952_p1225213531417"></a><a name="zh-cn_topic_0184347952_p1225213531417"></a><strong id="zh-cn_topic_0184347952_b1825275312118"><a name="zh-cn_topic_0184347952_b1825275312118"></a><a name="zh-cn_topic_0184347952_b1825275312118"></a>只支持vpc-router类型网络。</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row825255314119"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p5253115318111"><a name="zh-cn_topic_0184347952_p5253115318111"></a><a name="zh-cn_topic_0184347952_p5253115318111"></a>vpc_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p18253553712"><a name="zh-cn_topic_0184347952_p18253553712"></a><a name="zh-cn_topic_0184347952_p18253553712"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p13253353718"><a name="zh-cn_topic_0184347952_p13253353718"></a><a name="zh-cn_topic_0184347952_p13253353718"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p72535534113"><a name="zh-cn_topic_0184347952_p72535534113"></a><a name="zh-cn_topic_0184347952_p72535534113"></a>VPC的ID。</p>
<p id="zh-cn_topic_0184347952_p925345310110"><a name="zh-cn_topic_0184347952_p925345310110"></a><a name="zh-cn_topic_0184347952_p925345310110"></a><strong id="zh-cn_topic_0184347952_b325312531612"><a name="zh-cn_topic_0184347952_b325312531612"></a><a name="zh-cn_topic_0184347952_b325312531612"></a>只支持vpc-router类型网络。</strong></p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row16253175312112"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p16253105318110"><a name="zh-cn_topic_0184347952_p16253105318110"></a><a name="zh-cn_topic_0184347952_p16253105318110"></a>secret_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1925315318115"><a name="zh-cn_topic_0184347952_p1925315318115"></a><a name="zh-cn_topic_0184347952_p1925315318115"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p925311531011"><a name="zh-cn_topic_0184347952_p925311531011"></a><a name="zh-cn_topic_0184347952_p925311531011"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p1625317538113"><a name="zh-cn_topic_0184347952_p1625317538113"></a><a name="zh-cn_topic_0184347952_p1625317538113"></a>表示k8s apiserver中保存有ak sk的对象名。</p>
<p id="zh-cn_topic_0184347952_p4253453416"><a name="zh-cn_topic_0184347952_p4253453416"></a><a name="zh-cn_topic_0184347952_p4253453416"></a><strong id="zh-cn_topic_0184347952_b14253145318115"><a name="zh-cn_topic_0184347952_b14253145318115"></a><a name="zh-cn_topic_0184347952_b14253145318115"></a>只支持vpc-router类型网络</strong></p>
<p id="zh-cn_topic_0184347952_p1253453713"><a name="zh-cn_topic_0184347952_p1253453713"></a><a name="zh-cn_topic_0184347952_p1253453713"></a>参考配置VPC-Router逻辑网络</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row72531753813"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p182531653213"><a name="zh-cn_topic_0184347952_p182531653213"></a><a name="zh-cn_topic_0184347952_p182531653213"></a>IP</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1025335312114"><a name="zh-cn_topic_0184347952_p1025335312114"></a><a name="zh-cn_topic_0184347952_p1025335312114"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p92539533120"><a name="zh-cn_topic_0184347952_p92539533120"></a><a name="zh-cn_topic_0184347952_p92539533120"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p162531753610"><a name="zh-cn_topic_0184347952_p162531753610"></a><a name="zh-cn_topic_0184347952_p162531753610"></a>用户指定ip地址，格式“192.168.0.10”</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row425365310110"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p1025314531813"><a name="zh-cn_topic_0184347952_p1025314531813"></a><a name="zh-cn_topic_0184347952_p1025314531813"></a>K8S_POD_NETWORK_ARGS</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1525485315118"><a name="zh-cn_topic_0184347952_p1525485315118"></a><a name="zh-cn_topic_0184347952_p1525485315118"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p1254185311112"><a name="zh-cn_topic_0184347952_p1254185311112"></a><a name="zh-cn_topic_0184347952_p1254185311112"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p182541753612"><a name="zh-cn_topic_0184347952_p182541753612"></a><a name="zh-cn_topic_0184347952_p182541753612"></a>指定ip地址，格式“192.168.0.10”。若args中IP和K8S_POD_NETWORK_ARGS都不为空，以K8S_POD_NETWORK_ARGS为准。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row725410537119"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p225410539120"><a name="zh-cn_topic_0184347952_p225410539120"></a><a name="zh-cn_topic_0184347952_p225410539120"></a>INSTANCE_NAME</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1525416531915"><a name="zh-cn_topic_0184347952_p1525416531915"></a><a name="zh-cn_topic_0184347952_p1525416531915"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p625418531318"><a name="zh-cn_topic_0184347952_p625418531318"></a><a name="zh-cn_topic_0184347952_p625418531318"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p425418531612"><a name="zh-cn_topic_0184347952_p425418531612"></a><a name="zh-cn_topic_0184347952_p425418531612"></a>INSTANCE ID。</p>
<p id="zh-cn_topic_0184347952_p1825425312115"><a name="zh-cn_topic_0184347952_p1825425312115"></a><a name="zh-cn_topic_0184347952_p1825425312115"></a>参考支持容器固定IP</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row1825415316119"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p16254353211"><a name="zh-cn_topic_0184347952_p16254353211"></a><a name="zh-cn_topic_0184347952_p16254353211"></a>dist_gateway_disable</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1125425314114"><a name="zh-cn_topic_0184347952_p1125425314114"></a><a name="zh-cn_topic_0184347952_p1125425314114"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p162541453919"><a name="zh-cn_topic_0184347952_p162541453919"></a><a name="zh-cn_topic_0184347952_p162541453919"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p52542531014"><a name="zh-cn_topic_0184347952_p52542531014"></a><a name="zh-cn_topic_0184347952_p52542531014"></a>true表示不创建gateway，false表示创建gateway。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row102544538120"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p142541535110"><a name="zh-cn_topic_0184347952_p142541535110"></a><a name="zh-cn_topic_0184347952_p142541535110"></a>phynet</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1525415539113"><a name="zh-cn_topic_0184347952_p1525415539113"></a><a name="zh-cn_topic_0184347952_p1525415539113"></a>string或[]string</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p102541053413"><a name="zh-cn_topic_0184347952_p102541053413"></a><a name="zh-cn_topic_0184347952_p102541053413"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p16254653915"><a name="zh-cn_topic_0184347952_p16254653915"></a><a name="zh-cn_topic_0184347952_p16254653915"></a>所需加入的的物理平面信息，为预先定义好的物理网络名称，与SNC体系中的呼应，输入两个平面名时，支持主备平面。例如："phy_net1"  或 ["phy_net2","phy_net3"]</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row162861108125"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p102878014129"><a name="zh-cn_topic_0184347952_p102878014129"></a><a name="zh-cn_topic_0184347952_p102878014129"></a>endpoint_policies</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p0287110201218"><a name="zh-cn_topic_0184347952_p0287110201218"></a><a name="zh-cn_topic_0184347952_p0287110201218"></a>struct</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p19287110151213"><a name="zh-cn_topic_0184347952_p19287110151213"></a><a name="zh-cn_topic_0184347952_p19287110151213"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p117066417193"><a name="zh-cn_topic_0184347952_p117066417193"></a><a name="zh-cn_topic_0184347952_p117066417193"></a>"endpoint_policies": [</p>
<p id="zh-cn_topic_0184347952_p117067414192"><a name="zh-cn_topic_0184347952_p117067414192"></a><a name="zh-cn_topic_0184347952_p117067414192"></a>{</p>
<p id="zh-cn_topic_0184347952_p470624101914"><a name="zh-cn_topic_0184347952_p470624101914"></a><a name="zh-cn_topic_0184347952_p470624101914"></a>"Type": "",</p>
<p id="zh-cn_topic_0184347952_p47065451916"><a name="zh-cn_topic_0184347952_p47065451916"></a><a name="zh-cn_topic_0184347952_p47065451916"></a>"ExceptionList": [</p>
<p id="zh-cn_topic_0184347952_p177064451913"><a name="zh-cn_topic_0184347952_p177064451913"></a><a name="zh-cn_topic_0184347952_p177064451913"></a>""</p>
<p id="zh-cn_topic_0184347952_p1370654181919"><a name="zh-cn_topic_0184347952_p1370654181919"></a><a name="zh-cn_topic_0184347952_p1370654181919"></a>],</p>
<p id="zh-cn_topic_0184347952_p77061144193"><a name="zh-cn_topic_0184347952_p77061144193"></a><a name="zh-cn_topic_0184347952_p77061144193"></a>"NeedEncap": true,</p>
<p id="zh-cn_topic_0184347952_p270612491912"><a name="zh-cn_topic_0184347952_p270612491912"></a><a name="zh-cn_topic_0184347952_p270612491912"></a>"DestinationPrefix": ""</p>
<p id="zh-cn_topic_0184347952_p470634181918"><a name="zh-cn_topic_0184347952_p470634181918"></a><a name="zh-cn_topic_0184347952_p470634181918"></a>}</p>
<p id="zh-cn_topic_0184347952_p17706144101911"><a name="zh-cn_topic_0184347952_p17706144101911"></a><a name="zh-cn_topic_0184347952_p17706144101911"></a>]</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row132546537111"><td class="cellrowborder" valign="top" width="23.02%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p162552053613"><a name="zh-cn_topic_0184347952_p162552053613"></a><a name="zh-cn_topic_0184347952_p162552053613"></a>port_map</p>
</td>
<td class="cellrowborder" valign="top" width="16.650000000000002%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p9255175315111"><a name="zh-cn_topic_0184347952_p9255175315111"></a><a name="zh-cn_topic_0184347952_p9255175315111"></a>struct</p>
</td>
<td class="cellrowborder" valign="top" width="7.829999999999999%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p32551532113"><a name="zh-cn_topic_0184347952_p32551532113"></a><a name="zh-cn_topic_0184347952_p32551532113"></a>可选</p>
</td>
<td class="cellrowborder" valign="top" width="52.5%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p3255165317118"><a name="zh-cn_topic_0184347952_p3255165317118"></a><a name="zh-cn_topic_0184347952_p3255165317118"></a>NAT类型网络中，支持容器端口发布至主机端口。</p>
<p id="zh-cn_topic_0184347952_p10255195318118"><a name="zh-cn_topic_0184347952_p10255195318118"></a><a name="zh-cn_topic_0184347952_p10255195318118"></a>"port_map":  [</p>
<p id="zh-cn_topic_0184347952_p1025518534111"><a name="zh-cn_topic_0184347952_p1025518534111"></a><a name="zh-cn_topic_0184347952_p1025518534111"></a>{</p>
<p id="zh-cn_topic_0184347952_p1025514533113"><a name="zh-cn_topic_0184347952_p1025514533113"></a><a name="zh-cn_topic_0184347952_p1025514533113"></a>"local_port":  number,</p>
<p id="zh-cn_topic_0184347952_p12255135315114"><a name="zh-cn_topic_0184347952_p12255135315114"></a><a name="zh-cn_topic_0184347952_p12255135315114"></a>"host_port":  number,</p>
<p id="zh-cn_topic_0184347952_p32555531010"><a name="zh-cn_topic_0184347952_p32555531010"></a><a name="zh-cn_topic_0184347952_p32555531010"></a>"protocol":  [string…]</p>
<p id="zh-cn_topic_0184347952_p162553538116"><a name="zh-cn_topic_0184347952_p162553538116"></a><a name="zh-cn_topic_0184347952_p162553538116"></a>}...</p>
<p id="zh-cn_topic_0184347952_p525545311118"><a name="zh-cn_topic_0184347952_p525545311118"></a><a name="zh-cn_topic_0184347952_p525545311118"></a>]</p>
</td>
</tr>
</tbody>
</table>

**表 3**  CNI多网络配置参数

<a name="zh-cn_topic_0184347952_table657910563105"></a>
<table><thead align="left"><tr id="zh-cn_topic_0184347952_row19579105681015"><th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0184347952_p45791956181012"><a name="zh-cn_topic_0184347952_p45791956181012"></a><a name="zh-cn_topic_0184347952_p45791956181012"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0184347952_p145791356131014"><a name="zh-cn_topic_0184347952_p145791356131014"></a><a name="zh-cn_topic_0184347952_p145791356131014"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0184347952_p16579185617105"><a name="zh-cn_topic_0184347952_p16579185617105"></a><a name="zh-cn_topic_0184347952_p16579185617105"></a>是否可选</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0184347952_p20579145617103"><a name="zh-cn_topic_0184347952_p20579145617103"></a><a name="zh-cn_topic_0184347952_p20579145617103"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0184347952_row7579105610109"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p13579165611011"><a name="zh-cn_topic_0184347952_p13579165611011"></a><a name="zh-cn_topic_0184347952_p13579165611011"></a>cniVersion</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p1666732312120"><a name="zh-cn_topic_0184347952_p1666732312120"></a><a name="zh-cn_topic_0184347952_p1666732312120"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p7667122301213"><a name="zh-cn_topic_0184347952_p7667122301213"></a><a name="zh-cn_topic_0184347952_p7667122301213"></a>必选</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p966792371210"><a name="zh-cn_topic_0184347952_p966792371210"></a><a name="zh-cn_topic_0184347952_p966792371210"></a>CNI版本号，当前只支持0.3.0，0.3.1。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row16579155610104"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p13579135610106"><a name="zh-cn_topic_0184347952_p13579135610106"></a><a name="zh-cn_topic_0184347952_p13579135610106"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p3682735181212"><a name="zh-cn_topic_0184347952_p3682735181212"></a><a name="zh-cn_topic_0184347952_p3682735181212"></a>string</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p26824357124"><a name="zh-cn_topic_0184347952_p26824357124"></a><a name="zh-cn_topic_0184347952_p26824357124"></a>必选</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p1768217354124"><a name="zh-cn_topic_0184347952_p1768217354124"></a><a name="zh-cn_topic_0184347952_p1768217354124"></a>网络名称，由用户自定义，需保证唯一。</p>
</td>
</tr>
<tr id="zh-cn_topic_0184347952_row35791856171010"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0184347952_p11579125661015"><a name="zh-cn_topic_0184347952_p11579125661015"></a><a name="zh-cn_topic_0184347952_p11579125661015"></a>plugins</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0184347952_p17579556131010"><a name="zh-cn_topic_0184347952_p17579556131010"></a><a name="zh-cn_topic_0184347952_p17579556131010"></a>struct</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0184347952_p15579115611015"><a name="zh-cn_topic_0184347952_p15579115611015"></a><a name="zh-cn_topic_0184347952_p15579115611015"></a>必选</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0184347952_p557985671019"><a name="zh-cn_topic_0184347952_p557985671019"></a><a name="zh-cn_topic_0184347952_p557985671019"></a>具体配置请参见<a href="#zh-cn_topic_0184347952_table425023335913">表1 CNI单网络配置参数</a>。</p>
</td>
</tr>
</tbody>
</table>

