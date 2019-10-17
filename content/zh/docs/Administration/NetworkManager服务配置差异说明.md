# NetworkManager服务配置差异说明<a name="ZH-CN_TOPIC_0183013291"></a>

## 概述<a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_section15457154213251"></a>

NetworkManager服务使用ifup/ifdown的逻辑接口定义进行高级网络设置。其参数大多数都是在/etc/sysconfig/network和/etc/sysconfig/network-scripts/ifcfg-<interface-name\>两个配置文件设置。前者为全局设置，后者为指定网卡的设置，当两者有冲突时，后者生效。

## 配置差异说明<a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_section125411051142511"></a>

其中在/etc/sysconfig/network下的配置差异有：

<a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_table376122593014"></a>
<table><thead align="left"><tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row16343172516309"><th class="cellrowborder" valign="top" width="23.002300230023003%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1934452593010"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1934452593010"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1934452593010"></a><strong id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b1059113443114"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b1059113443114"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b1059113443114"></a>IPv4</strong></p>
</th>
<th class="cellrowborder" valign="top" width="40.564056405640564%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p14344152593019"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p14344152593019"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p14344152593019"></a><strong id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b146313473111"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b146313473111"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b146313473111"></a>IPv6</strong></p>
</th>
<th class="cellrowborder" valign="top" width="36.43364336433643%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p13344152533019"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p13344152533019"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p13344152533019"></a><strong id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b146511349319"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b146511349319"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b146511349319"></a>含义说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row934415256301"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p16344192543016"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p16344192543016"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p16344192543016"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1334482573012"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1334482573012"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1334482573012"></a>IPV6FORWARDING=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p934414251302"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p934414251302"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p934414251302"></a>IPv6转发，默认不转发。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row1344122517308"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9344152513303"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9344152513303"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9344152513303"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p123441025123013"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p123441025123013"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p123441025123013"></a>IPV6_AUTOCONF=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1134418258307"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1134418258307"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1134418258307"></a>IPv6转发打开是no，否则是yes。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row3344325173018"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9344725143019"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9344725143019"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9344725143019"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p2344225183011"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p2344225183011"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p2344225183011"></a>IPV6_ROUTER=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p113441425163010"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p113441425163010"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p113441425163010"></a>IPv6转发打开是yes，否则是no。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row173447253307"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p534417251308"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p534417251308"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p534417251308"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p8344132563010"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p8344132563010"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p8344132563010"></a>IPV6_AUTOTUNNEL=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1634492520303"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1634492520303"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1634492520303"></a>指定Tunnel为自动隧道模式，默认是no。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row93441325113014"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p5344192543017"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p5344192543017"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p5344192543017"></a>GATEWAY</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p234515256308"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p234515256308"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p234515256308"></a>IPV6_DEFAULTGW=&lt;IPv6 address[%interface]&gt; (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p103451125123015"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p103451125123015"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p103451125123015"></a>在IPv6中设置默认网关。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row1234519256301"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p334511251304"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p334511251304"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p334511251304"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9345122511309"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9345122511309"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9345122511309"></a>IPV6_DEFAULTDEV=&lt;interface&gt; (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p153457255303"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p153457255303"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p153457255303"></a>指定默认转发的网卡。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row3345825183015"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1734518251306"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1734518251306"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1734518251306"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p0345325193012"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p0345325193012"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p0345325193012"></a>IPV6_RADVD_PIDFILE=&lt;pid-file&gt; (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1034614253307"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1034614253307"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1034614253307"></a>默认ipv6_radvd_pid路径：/var/run/radvd/radvd.pid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row15346162518300"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p15346125163015"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p15346125163015"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p15346125163015"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p13460257306"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p13460257306"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p13460257306"></a>IPV6_RADVD_TRIGGER_ACTION=startstop|reload|restart|SIGHUP (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p19346132573014"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p19346132573014"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p19346132573014"></a>radvd默认触发动作。</p>
</td>
</tr>
</tbody>
</table>

而在/etc/sysconfig/network-scripts/ifcfg-<interface-name\>下的差异主要有：

<a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_table4128225193017"></a>
<table><thead align="left"><tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row034692593015"><th class="cellrowborder" valign="top" width="23.36%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p14346225143017"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p14346225143017"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p14346225143017"></a><strong id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b1766035020317"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b1766035020317"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b1766035020317"></a>IPv4</strong></p>
</th>
<th class="cellrowborder" valign="top" width="40.339999999999996%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p15346132533012"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p15346132533012"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p15346132533012"></a><strong id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b3663175019313"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b3663175019313"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b3663175019313"></a>IPv6</strong></p>
</th>
<th class="cellrowborder" valign="top" width="36.3%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p6346142517307"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p6346142517307"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p6346142517307"></a><strong id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b18664750163114"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b18664750163114"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_b18664750163114"></a>含义说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row63465257306"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p15346192519307"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p15346192519307"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p15346192519307"></a>IPADDRn</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p173461625163014"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p173461625163014"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p173461625163014"></a>IPV6ADDR=&lt;IPv6 address&gt;[/&lt;prefix length&gt;]</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p133461225173019"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p133461225173019"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p133461225173019"></a>ip地址。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row13347172513011"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p11347192511306"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p11347192511306"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p11347192511306"></a>PREFIXn</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p18347825153015"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p18347825153015"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p18347825153015"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1234752513017"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1234752513017"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1234752513017"></a>网络前缀，网络别名和ppp无效，优先级高于NETMASK。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row153471625183015"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p18347132511300"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p18347132511300"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p18347132511300"></a>NETMASKn</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p3347102511304"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p3347102511304"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p3347102511304"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p734772515307"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p734772515307"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p734772515307"></a>子网掩码，仅用于别名和ppp。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row193471625163016"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1534742593013"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1534742593013"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1534742593013"></a>GATEWAY</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9347132515300"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9347132515300"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9347132515300"></a>IPV6_DEFAULTGW=&lt;IPv6 address[%interface]&gt; (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p14347132523011"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p14347132523011"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p14347132523011"></a>默认网关。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row1434762573016"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p53471625203015"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p53471625203015"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p53471625203015"></a>MTU</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p203477255305"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p203477255305"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p203477255305"></a>IPV6_MTU=&lt;MTU of link&gt; (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p19348625183012"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p19348625183012"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p19348625183012"></a>默认MTU。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row5348225173015"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p203481925113014"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p203481925113014"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p203481925113014"></a>IPV4_FAILURE_FATAL=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p73481225143013"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p73481225143013"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p73481225143013"></a>IPV6_FAILURE_FATAL</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1581816596383"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1581816596383"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1581816596383"></a>默认值是no。若设置为yes，dhclient失败ifup-eth会直接退出。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row1134822543015"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9348122573019"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9348122573019"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p9348122573019"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p734832513017"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p734832513017"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p734832513017"></a>IPV6_PRIVACY=rfc3041</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p10348152518301"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p10348152518301"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p10348152518301"></a>默认禁用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row1134882573014"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p634802533014"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p634802533014"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p634802533014"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p33481925173012"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p33481925173012"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p33481925173012"></a>IPV6INIT=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p113492254302"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p113492254302"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p113492254302"></a>默认开启IPv6。</p>
</td>
</tr>
<tr id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_row133491725173012"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1834922518303"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1834922518303"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1834922518303"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1834982543011"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1834982543011"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p1834982543011"></a>IPV6FORWARDING=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p12349132516309"><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p12349132516309"></a><a name="zh-cn_topic_0161841799_zh-cn_topic_0159175469_p12349132516309"></a>默认关闭，已废弃。</p>
</td>
</tr>
</tbody>
</table>

