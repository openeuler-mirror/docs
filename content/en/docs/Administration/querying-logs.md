# Querying Logs<a name="EN-US_TOPIC_0231142824"></a>

[Table 1](#table52821836)  lists log information related to the accelerator engine.

**Table  1**  Log information

<a name="table52821836"></a>
<table><thead align="left"><tr id="row62537016"><th class="cellrowborder" valign="top" width="28.28282828282828%" id="mcps1.2.4.1.1"><p id="p32333556"><a name="p32333556"></a><a name="p32333556"></a>Directory</p>
</th>
<th class="cellrowborder" valign="top" width="27.27272727272727%" id="mcps1.2.4.1.2"><p id="p1772413"><a name="p1772413"></a><a name="p1772413"></a>File</p>
</th>
<th class="cellrowborder" valign="top" width="44.44444444444445%" id="mcps1.2.4.1.3"><p id="p9347770"><a name="p9347770"></a><a name="p9347770"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row18971924"><td class="cellrowborder" valign="top" width="28.28282828282828%" headers="mcps1.2.4.1.1 "><p id="p60330866"><a name="p60330866"></a><a name="p60330866"></a>/var/log/</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.4.1.2 "><p id="p54961981"><a name="p54961981"></a><a name="p54961981"></a>kae.log</p>
</td>
<td class="cellrowborder" valign="top" width="44.44444444444445%" headers="mcps1.2.4.1.3 "><p id="p22735452"><a name="p22735452"></a><a name="p22735452"></a>By default, the log level of the OpenSSL engine log is <strong id="b0271153255912"><a name="b0271153255912"></a><a name="b0271153255912"></a>error</strong>. To set the log level, perform the following procedure:</p>
<a name="ol3292479"></a><a name="ol3292479"></a><ol id="ol3292479"><li>Run <strong id="b3236183234914"><a name="b3236183234914"></a><a name="b3236183234914"></a>export KAE_CONF_ENV=/var/log/</strong>.</li><li>Create the <strong id="b10293194619016"><a name="b10293194619016"></a><a name="b10293194619016"></a>kae.cnf</strong> file in <strong id="b82946461903"><a name="b82946461903"></a><a name="b82946461903"></a>/var/log/</strong>.</li><li>In the <strong id="b162251191116"><a name="b162251191116"></a><a name="b162251191116"></a>kae.cnf</strong> file, configure the content as follows:<p id="p60010105"><a name="p60010105"></a><a name="p60010105"></a>[LogSection]</p>
<p id="p3220036"><a name="p3220036"></a><a name="p3220036"></a>debug_level=error #Value: <strong id="b203790579120"><a name="b203790579120"></a><a name="b203790579120"></a>none</strong>, <strong id="b46045913113"><a name="b46045913113"></a><a name="b46045913113"></a>error</strong>, <strong id="b4532501620"><a name="b4532501620"></a><a name="b4532501620"></a>info</strong>, <strong id="b119954316214"><a name="b119954316214"></a><a name="b119954316214"></a>warning</strong> or <strong id="b27231361722"><a name="b27231361722"></a><a name="b27231361722"></a>debug</strong></p>
</li></ol>
<div class="note" id="note28980331"><a name="note28980331"></a><a name="note28980331"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p class="textintable" id="p59496389"><a name="p59496389"></a><a name="p59496389"></a>In normal cases, you are advised not to enable the <strong id="b21311424624"><a name="b21311424624"></a><a name="b21311424624"></a>info</strong> or <strong id="b99951227621"><a name="b99951227621"></a><a name="b99951227621"></a>debug</strong> log level. Otherwise, the accelerator performance will deteriorate.</p>
</div></div>
</td>
</tr>
<tr id="row65705461"><td class="cellrowborder" valign="top" width="28.28282828282828%" headers="mcps1.2.4.1.1 "><p id="p20542144"><a name="p20542144"></a><a name="p20542144"></a>/var/log/</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.4.1.2 "><p id="p53300980"><a name="p53300980"></a><a name="p53300980"></a>message/syslog</p>
</td>
<td class="cellrowborder" valign="top" width="44.44444444444445%" headers="mcps1.2.4.1.3 "><a name="ul22412087"></a><a name="ul22412087"></a><ul id="ul22412087"><li>Kernel logs are stored in the <strong id="b24957411319"><a name="b24957411319"></a><a name="b24957411319"></a>/var/log/message</strong> directory.</li></ul>
<div class="note" id="note30958167"><a name="note30958167"></a><a name="note30958167"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p class="textintable" id="p10188049"><a name="p10188049"></a><a name="p10188049"></a>Alternatively, you can run the <strong id="b43486522218"><a name="b43486522218"></a><a name="b43486522218"></a>dmesg &gt; /var/log/dmesg.log</strong> command to collect driver and kernel logs.</p>
</div></div>
</td>
</tr>
</tbody>
</table>

