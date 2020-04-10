# Configuration Differences of the NetworkManager Service<a name="EN-US_TOPIC_0229622792"></a>

## Overview<a name="en-us_topic_0161841799_en-us_topic_0159175469_section15457154213251"></a>

The NetworkManager service uses the ifup/ifdown logical interface definition to perform advanced network settings. Most of the parameters are set in the /etc/sysconfig/network and /etc/sysconfig/network-scripts/ifcfg-<interface-name\> configuration files. The former is a global setting, and the latter is a setting of a specified NIC. When the two settings conflict, the latter takes effect.

## Configuration Differences<a name="en-us_topic_0161841799_en-us_topic_0159175469_section125411051142511"></a>

The configuration differences in /etc/sysconfig/network are as follows:

<a name="en-us_topic_0161841799_en-us_topic_0159175469_table376122593014"></a>
<table><thead align="left"><tr id="en-us_topic_0161841799_en-us_topic_0159175469_row16343172516309"><th class="cellrowborder" valign="top" width="23.002300230023003%" id="mcps1.1.4.1.1"><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1934452593010"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1934452593010"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1934452593010"></a><strong id="en-us_topic_0161841799_en-us_topic_0159175469_b1059113443114"><a name="en-us_topic_0161841799_en-us_topic_0159175469_b1059113443114"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_b1059113443114"></a>IPv4</strong></p>
</th>
<th class="cellrowborder" valign="top" width="40.564056405640564%" id="mcps1.1.4.1.2"><p id="en-us_topic_0161841799_en-us_topic_0159175469_p14344152593019"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p14344152593019"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p14344152593019"></a><strong id="en-us_topic_0161841799_en-us_topic_0159175469_b146313473111"><a name="en-us_topic_0161841799_en-us_topic_0159175469_b146313473111"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_b146313473111"></a>IPv6</strong></p>
</th>
<th class="cellrowborder" valign="top" width="36.43364336433643%" id="mcps1.1.4.1.3"><p id="en-us_topic_0161841799_en-us_topic_0159175469_p13344152533019"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p13344152533019"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p13344152533019"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0161841799_en-us_topic_0159175469_row934415256301"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p16344192543016"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p16344192543016"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p16344192543016"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1334482573012"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1334482573012"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1334482573012"></a>IPV6FORWARDING=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p934414251302"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p934414251302"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p934414251302"></a>IPv6 forwarding. By default, IPv6 packets are not forwarded.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row1344122517308"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p9344152513303"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p9344152513303"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p9344152513303"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p123441025123013"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p123441025123013"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p123441025123013"></a>IPV6_AUTOCONF=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1134418258307"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1134418258307"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1134418258307"></a>If IPv6 forwarding is enabled, the value is <strong id="b105538218525"><a name="b105538218525"></a><a name="b105538218525"></a>no</strong>. Otherwise, the value is<strong id="b675215418524"><a name="b675215418524"></a><a name="b675215418524"></a> yes</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row3344325173018"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p9344725143019"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p9344725143019"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p9344725143019"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p2344225183011"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p2344225183011"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p2344225183011"></a>IPV6_ROUTER=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p113441425163010"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p113441425163010"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p113441425163010"></a>If IPv6 forwarding is enabled, the value is <strong id="b85772918528"><a name="b85772918528"></a><a name="b85772918528"></a>yes</strong>. Otherwise, the value is <strong id="b875931175216"><a name="b875931175216"></a><a name="b875931175216"></a>no</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row173447253307"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p534417251308"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p534417251308"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p534417251308"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p8344132563010"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p8344132563010"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p8344132563010"></a>IPV6_AUTOTUNNEL=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1634492520303"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1634492520303"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1634492520303"></a>Indicates the automatic tunnel mode. The default value is <strong id="b2020062113520"><a name="b2020062113520"></a><a name="b2020062113520"></a>no</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row93441325113014"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p5344192543017"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p5344192543017"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p5344192543017"></a>GATEWAY</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p234515256308"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p234515256308"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p234515256308"></a>IPV6_DEFAULTGW=&lt;IPv6 address[%interface]&gt; (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p103451125123015"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p103451125123015"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p103451125123015"></a>Indicates the default gateway in IPv6.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row1234519256301"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p334511251304"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p334511251304"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p334511251304"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p9345122511309"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p9345122511309"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p9345122511309"></a>IPV6_DEFAULTDEV=&lt;interface&gt; (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p153457255303"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p153457255303"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p153457255303"></a>Specifies the default forwarding NIC.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row3345825183015"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1734518251306"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1734518251306"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1734518251306"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p0345325193012"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p0345325193012"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p0345325193012"></a>IPV6_RADVD_PIDFILE=&lt;pid-file&gt; (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1034614253307"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1034614253307"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1034614253307"></a>The default path of ipv6_radvd_pid is /var/run/radvd/radvd.pid.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row15346162518300"><td class="cellrowborder" valign="top" width="23.002300230023003%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p15346125163015"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p15346125163015"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p15346125163015"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.564056405640564%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p13460257306"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p13460257306"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p13460257306"></a>IPV6_RADVD_TRIGGER_ACTION=startstop|reload|restart|SIGHUP (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.43364336433643%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p19346132573014"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p19346132573014"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p19346132573014"></a>Default radvd trigger action.</p>
</td>
</tr>
</tbody>
</table>

The differences in /etc/sysconfig/network-scripts/ifcfg-<interface-name\> are as follows:

<a name="en-us_topic_0161841799_en-us_topic_0159175469_table4128225193017"></a>
<table><thead align="left"><tr id="en-us_topic_0161841799_en-us_topic_0159175469_row034692593015"><th class="cellrowborder" valign="top" width="23.36%" id="mcps1.1.4.1.1"><p id="en-us_topic_0161841799_en-us_topic_0159175469_p14346225143017"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p14346225143017"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p14346225143017"></a><strong id="en-us_topic_0161841799_en-us_topic_0159175469_b1766035020317"><a name="en-us_topic_0161841799_en-us_topic_0159175469_b1766035020317"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_b1766035020317"></a>IPv4</strong></p>
</th>
<th class="cellrowborder" valign="top" width="40.339999999999996%" id="mcps1.1.4.1.2"><p id="en-us_topic_0161841799_en-us_topic_0159175469_p15346132533012"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p15346132533012"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p15346132533012"></a><strong id="en-us_topic_0161841799_en-us_topic_0159175469_b3663175019313"><a name="en-us_topic_0161841799_en-us_topic_0159175469_b3663175019313"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_b3663175019313"></a>IPv6</strong></p>
</th>
<th class="cellrowborder" valign="top" width="36.3%" id="mcps1.1.4.1.3"><p id="en-us_topic_0161841799_en-us_topic_0159175469_p6346142517307"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p6346142517307"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p6346142517307"></a><strong id="b154574125315"><a name="b154574125315"></a><a name="b154574125315"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0161841799_en-us_topic_0159175469_row63465257306"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p15346192519307"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p15346192519307"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p15346192519307"></a>IPADDRn</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p173461625163014"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p173461625163014"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p173461625163014"></a>IPV6ADDR=&lt;IPv6 address&gt;[/&lt;prefix length&gt;]</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p133461225173019"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p133461225173019"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p133461225173019"></a>indicates the IP address. </p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row13347172513011"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p11347192511306"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p11347192511306"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p11347192511306"></a>PREFIXn</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p18347825153015"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p18347825153015"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p18347825153015"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1234752513017"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1234752513017"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1234752513017"></a>The network prefix, network alias, and PPP are invalid. The priority is higher than that of NETMASK.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row153471625183015"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p18347132511300"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p18347132511300"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p18347132511300"></a>NETMASKn</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p3347102511304"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p3347102511304"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p3347102511304"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p734772515307"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p734772515307"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p734772515307"></a>Indicates the subnet mask. It is used only for the alias and PPP.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row193471625163016"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1534742593013"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1534742593013"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1534742593013"></a>GATEWAY</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p9347132515300"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p9347132515300"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p9347132515300"></a>IPV6_DEFAULTGW=&lt;IPv6 address[%interface]&gt; (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p14347132523011"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p14347132523011"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p14347132523011"></a>Default gateway</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row1434762573016"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p53471625203015"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p53471625203015"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p53471625203015"></a>MTU</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p203477255305"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p203477255305"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p203477255305"></a>IPV6_MTU=&lt;MTU of link&gt; (optional)</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p19348625183012"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p19348625183012"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p19348625183012"></a>Default MTU</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row5348225173015"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p203481925113014"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p203481925113014"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p203481925113014"></a>IPV4_FAILURE_FATAL=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p73481225143013"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p73481225143013"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p73481225143013"></a>IPV6_FAILURE_FATAL</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1581816596383"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1581816596383"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1581816596383"></a>The default value is <strong id="b16798203616020"><a name="b16798203616020"></a><a name="b16798203616020"></a>no</strong>. If this parameter is set to <strong id="b2502744602"><a name="b2502744602"></a><a name="b2502744602"></a>yes</strong>, ifup-eth exits when dhclient fails.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row1134822543015"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p9348122573019"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p9348122573019"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p9348122573019"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p734832513017"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p734832513017"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p734832513017"></a>IPV6_PRIVACY=rfc3041</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p10348152518301"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p10348152518301"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p10348152518301"></a>Disabled by default.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row1134882573014"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p634802533014"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p634802533014"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p634802533014"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p33481925173012"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p33481925173012"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p33481925173012"></a>IPV6INIT=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p113492254302"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p113492254302"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p113492254302"></a>IPv6 is enabled by default.</p>
</td>
</tr>
<tr id="en-us_topic_0161841799_en-us_topic_0159175469_row133491725173012"><td class="cellrowborder" valign="top" width="23.36%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1834922518303"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1834922518303"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1834922518303"></a>NA</p>
</td>
<td class="cellrowborder" valign="top" width="40.339999999999996%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p1834982543011"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1834982543011"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p1834982543011"></a>IPV6FORWARDING=yes|no</p>
</td>
<td class="cellrowborder" valign="top" width="36.3%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0161841799_en-us_topic_0159175469_p12349132516309"><a name="en-us_topic_0161841799_en-us_topic_0159175469_p12349132516309"></a><a name="en-us_topic_0161841799_en-us_topic_0159175469_p12349132516309"></a>This function is disabled by default and has been discarded.</p>
</td>
</tr>
</tbody>
</table>

