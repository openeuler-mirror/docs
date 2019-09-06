# kickstart 命令<a name="ZH-CN_TOPIC_0187280633"></a>

## 命令说明<a name="zh-cn_topic_0151920801_se6d90ceea718460ea3373186e2fc9bde"></a>

在kickstart命令部分包含了系统安装过程中必要的安装选项。这里列举了kickstart文件的命令部分包含的必选项和部分可选项。相关说明如下：

**表 1**  命令说明

<a name="zh-cn_topic_0151920801_tf16dd694f51946638a1c9d6ab1ad4dd1"></a>
<table><thead align="left"><tr id="zh-cn_topic_0151920801_ra298c8e0038141bcbcf4a1d2e253b580"><th class="cellrowborder" valign="top" width="24.130000000000003%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0151920801_acc505d0265334e11a556d5ff78df9ebe"><a name="zh-cn_topic_0151920801_acc505d0265334e11a556d5ff78df9ebe"></a><a name="zh-cn_topic_0151920801_acc505d0265334e11a556d5ff78df9ebe"></a><strong id="zh-cn_topic_0151920801_ab64fe969c7f746cbbaf2c83b61a73307"><a name="zh-cn_topic_0151920801_ab64fe969c7f746cbbaf2c83b61a73307"></a><a name="zh-cn_topic_0151920801_ab64fe969c7f746cbbaf2c83b61a73307"></a>命令</strong></p>
</th>
<th class="cellrowborder" valign="top" width="64.34%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0151920801_a45a4723946de4321a713e78e2f771b20"><a name="zh-cn_topic_0151920801_a45a4723946de4321a713e78e2f771b20"></a><a name="zh-cn_topic_0151920801_a45a4723946de4321a713e78e2f771b20"></a><strong id="zh-cn_topic_0151920801_ab2975503c02b45f6b1bcc623dd5a1c4f"><a name="zh-cn_topic_0151920801_ab2975503c02b45f6b1bcc623dd5a1c4f"></a><a name="zh-cn_topic_0151920801_ab2975503c02b45f6b1bcc623dd5a1c4f"></a>说明</strong></p>
</th>
<th class="cellrowborder" valign="top" width="11.530000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0151920801_ad00c15583ae44186aa6840415401ba4b"><a name="zh-cn_topic_0151920801_ad00c15583ae44186aa6840415401ba4b"></a><a name="zh-cn_topic_0151920801_ad00c15583ae44186aa6840415401ba4b"></a><strong id="zh-cn_topic_0151920801_a847f25b5b0dc482ba03b237a84e7d7b8"><a name="zh-cn_topic_0151920801_a847f25b5b0dc482ba03b237a84e7d7b8"></a><a name="zh-cn_topic_0151920801_a847f25b5b0dc482ba03b237a84e7d7b8"></a>可/必选</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0151920801_r31df6c965db54e8e833c9353c12f4731"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a51e12e72436a490ab1bac091ec5f6cd7"><a name="zh-cn_topic_0151920801_a51e12e72436a490ab1bac091ec5f6cd7"></a><a name="zh-cn_topic_0151920801_a51e12e72436a490ab1bac091ec5f6cd7"></a>auth/authconfig</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a59a522de2f504193a6f2fd9e55905c42"><a name="zh-cn_topic_0151920801_a59a522de2f504193a6f2fd9e55905c42"></a><a name="zh-cn_topic_0151920801_a59a522de2f504193a6f2fd9e55905c42"></a>使用 authconfig 命令为系统设置认证选项，也可以在安装完成后在命令行中运行该命令。详情请查看 authconfig(8) 手册及 authconfig --help 命令。默认不显示密码。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a967b28bfdac649fab5ec3f52fe00180e"><a name="zh-cn_topic_0151920801_a967b28bfdac649fab5ec3f52fe00180e"></a><a name="zh-cn_topic_0151920801_a967b28bfdac649fab5ec3f52fe00180e"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r3a1ea36026b04029a0e082e44064f202"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a732d33a27e83418daabadea64dca4675"><a name="zh-cn_topic_0151920801_a732d33a27e83418daabadea64dca4675"></a><a name="zh-cn_topic_0151920801_a732d33a27e83418daabadea64dca4675"></a>autopart</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a5bd1d51a6284486bbe7e6156c440e675"><a name="zh-cn_topic_0151920801_a5bd1d51a6284486bbe7e6156c440e675"></a><a name="zh-cn_topic_0151920801_a5bd1d51a6284486bbe7e6156c440e675"></a>自动生成分区：root (/) 分区（1 GB 或者更大），该架构的 swap 分区和正确的 /boot 分区。在有足够空间的驱动器（50 GB 和更大的驱动器）中还会生成 /home 分区。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a382e3879075245af8c111509e9b33f3e"><a name="zh-cn_topic_0151920801_a382e3879075245af8c111509e9b33f3e"></a><a name="zh-cn_topic_0151920801_a382e3879075245af8c111509e9b33f3e"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r41cfb7742a804e57a5bd69547fa42a92"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a17771976a2fc43178821296a438d6c69"><a name="zh-cn_topic_0151920801_a17771976a2fc43178821296a438d6c69"></a><a name="zh-cn_topic_0151920801_a17771976a2fc43178821296a438d6c69"></a>autostep</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a96a5998068a84a358937a1d6ac4cfec7"><a name="zh-cn_topic_0151920801_a96a5998068a84a358937a1d6ac4cfec7"></a><a name="zh-cn_topic_0151920801_a96a5998068a84a358937a1d6ac4cfec7"></a>通常 kickstart 安装会跳过不必要的页面。这个选项可让安装程序浏览所有页面，并摘要显示每个页面。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_ac3d356026ccd48d78c8154a9bb54470d"><a name="zh-cn_topic_0151920801_ac3d356026ccd48d78c8154a9bb54470d"></a><a name="zh-cn_topic_0151920801_ac3d356026ccd48d78c8154a9bb54470d"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_reaac45d45bef4ac0b0be814a27902867"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a25d39ab7c2714bf99b6a856d3f59a43d"><a name="zh-cn_topic_0151920801_a25d39ab7c2714bf99b6a856d3f59a43d"></a><a name="zh-cn_topic_0151920801_a25d39ab7c2714bf99b6a856d3f59a43d"></a>bootloader</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a35329d81f8cf42578cee7b1d997123ef"><a name="zh-cn_topic_0151920801_a35329d81f8cf42578cee7b1d997123ef"></a><a name="zh-cn_topic_0151920801_a35329d81f8cf42578cee7b1d997123ef"></a>该命令指明了引导程序(bootloader)如何被安装。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a18d4c1809995496eb879fe471d5d6356"><a name="zh-cn_topic_0151920801_a18d4c1809995496eb879fe471d5d6356"></a><a name="zh-cn_topic_0151920801_a18d4c1809995496eb879fe471d5d6356"></a>必选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r04a3dfba0e5b48e29f91d0596b7a34a7"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_ab6f1cdcc4f67481fa8686f6242aa8a34"><a name="zh-cn_topic_0151920801_ab6f1cdcc4f67481fa8686f6242aa8a34"></a><a name="zh-cn_topic_0151920801_ab6f1cdcc4f67481fa8686f6242aa8a34"></a>btrfs</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_add8575e4a5db4d1ab80cb05b67e52529"><a name="zh-cn_topic_0151920801_add8575e4a5db4d1ab80cb05b67e52529"></a><a name="zh-cn_topic_0151920801_add8575e4a5db4d1ab80cb05b67e52529"></a>生成 Btrfs 卷或者子卷。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_ae5a2984e458a4f58a43c1e2ae64529e8"><a name="zh-cn_topic_0151920801_ae5a2984e458a4f58a43c1e2ae64529e8"></a><a name="zh-cn_topic_0151920801_ae5a2984e458a4f58a43c1e2ae64529e8"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r4e4c055fe61b4fd4b3f79f99942b687c"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a6ccbe7fab6c544c595795672164acbb3"><a name="zh-cn_topic_0151920801_a6ccbe7fab6c544c595795672164acbb3"></a><a name="zh-cn_topic_0151920801_a6ccbe7fab6c544c595795672164acbb3"></a>clearpart</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a17d04ee4b9d94f64b43cf45c5d024dd6"><a name="zh-cn_topic_0151920801_a17d04ee4b9d94f64b43cf45c5d024dd6"></a><a name="zh-cn_topic_0151920801_a17d04ee4b9d94f64b43cf45c5d024dd6"></a>在生成新分区之前，从系统中删除分区。默认情况下不删除任何分区。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a793cdb21ff9440b48641fce4c78109ee"><a name="zh-cn_topic_0151920801_a793cdb21ff9440b48641fce4c78109ee"></a><a name="zh-cn_topic_0151920801_a793cdb21ff9440b48641fce4c78109ee"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rf2669b0f88844e9db8417907c086ca4e"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a1582d24f245d4f2abf5ce4eca473d456"><a name="zh-cn_topic_0151920801_a1582d24f245d4f2abf5ce4eca473d456"></a><a name="zh-cn_topic_0151920801_a1582d24f245d4f2abf5ce4eca473d456"></a>cmdline</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a2bdd0f4bd3cd43f9bbb4aecead741aff"><a name="zh-cn_topic_0151920801_a2bdd0f4bd3cd43f9bbb4aecead741aff"></a><a name="zh-cn_topic_0151920801_a2bdd0f4bd3cd43f9bbb4aecead741aff"></a>采用非互动的命令行模式执行安装。任何互动提示都会造成安装停止。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_ab514c461980940ca8a21ce48a983ca68"><a name="zh-cn_topic_0151920801_ab514c461980940ca8a21ce48a983ca68"></a><a name="zh-cn_topic_0151920801_ab514c461980940ca8a21ce48a983ca68"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r2292fcd9939146a49d2fe1b4d6462bc4"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a57a4921a5d2f4e8091f8e07a394e314c"><a name="zh-cn_topic_0151920801_a57a4921a5d2f4e8091f8e07a394e314c"></a><a name="zh-cn_topic_0151920801_a57a4921a5d2f4e8091f8e07a394e314c"></a>firewall</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_aacad90a4149340b6b2443f0a6e1c2ede"><a name="zh-cn_topic_0151920801_aacad90a4149340b6b2443f0a6e1c2ede"></a><a name="zh-cn_topic_0151920801_aacad90a4149340b6b2443f0a6e1c2ede"></a>为安装的系统指定防火墙配置。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_ae26b57cb29454a90aaa3f2885a85a506"><a name="zh-cn_topic_0151920801_ae26b57cb29454a90aaa3f2885a85a506"></a><a name="zh-cn_topic_0151920801_ae26b57cb29454a90aaa3f2885a85a506"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r3d60def43ae746708ee4178b89f20c2c"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a42584dd29e7547979938a348d15b80ad"><a name="zh-cn_topic_0151920801_a42584dd29e7547979938a348d15b80ad"></a><a name="zh-cn_topic_0151920801_a42584dd29e7547979938a348d15b80ad"></a>graphical</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a1e35581f17954fc9831ad5edcbe5e148"><a name="zh-cn_topic_0151920801_a1e35581f17954fc9831ad5edcbe5e148"></a><a name="zh-cn_topic_0151920801_a1e35581f17954fc9831ad5edcbe5e148"></a>以图形模式执行安装。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a5e819ab53f9a49598dee3c25bf6bcc49"><a name="zh-cn_topic_0151920801_a5e819ab53f9a49598dee3c25bf6bcc49"></a><a name="zh-cn_topic_0151920801_a5e819ab53f9a49598dee3c25bf6bcc49"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r7468a01e9cc445e8a73e9cf08e9acf50"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a2c55f41f12f8400daa9fb956ed9a51ec"><a name="zh-cn_topic_0151920801_a2c55f41f12f8400daa9fb956ed9a51ec"></a><a name="zh-cn_topic_0151920801_a2c55f41f12f8400daa9fb956ed9a51ec"></a>halt</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a642ced488b4d410bacff9f9f969392e1"><a name="zh-cn_topic_0151920801_a642ced488b4d410bacff9f9f969392e1"></a><a name="zh-cn_topic_0151920801_a642ced488b4d410bacff9f9f969392e1"></a>在安装成功后停止系统。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_ad2785ee2445c456992d5962c855153b2"><a name="zh-cn_topic_0151920801_ad2785ee2445c456992d5962c855153b2"></a><a name="zh-cn_topic_0151920801_ad2785ee2445c456992d5962c855153b2"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rc010444306fa47699b3d29a3561a5089"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a8ebd9c2cb1f945a9917d0f6948966d88"><a name="zh-cn_topic_0151920801_a8ebd9c2cb1f945a9917d0f6948966d88"></a><a name="zh-cn_topic_0151920801_a8ebd9c2cb1f945a9917d0f6948966d88"></a>install</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a9ece1a36b1f74001b83d0189e332f7dc"><a name="zh-cn_topic_0151920801_a9ece1a36b1f74001b83d0189e332f7dc"></a><a name="zh-cn_topic_0151920801_a9ece1a36b1f74001b83d0189e332f7dc"></a>默认安装方法。您必须从 cdrom、harddrive、nfs、liveimg 或者 url（用于 FTP、HTTP、或者 HTTPS 安装）中指定安装类型。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a9bc7b23057fa43528a50d48cc09dfd26"><a name="zh-cn_topic_0151920801_a9bc7b23057fa43528a50d48cc09dfd26"></a><a name="zh-cn_topic_0151920801_a9bc7b23057fa43528a50d48cc09dfd26"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r69d3ab3471de48c39e2e19bb3328e739"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a2b3f7115571945578bc58a70271dc023"><a name="zh-cn_topic_0151920801_a2b3f7115571945578bc58a70271dc023"></a><a name="zh-cn_topic_0151920801_a2b3f7115571945578bc58a70271dc023"></a>iscsi</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a7b81721086a8453fa7029ba9ef27a6fd"><a name="zh-cn_topic_0151920801_a7b81721086a8453fa7029ba9ef27a6fd"></a><a name="zh-cn_topic_0151920801_a7b81721086a8453fa7029ba9ef27a6fd"></a>在安装过程中指定要添加的附加 iSCSI 存储。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a86a0ff5d7b7243f690b7b32e5b554296"><a name="zh-cn_topic_0151920801_a86a0ff5d7b7243f690b7b32e5b554296"></a><a name="zh-cn_topic_0151920801_a86a0ff5d7b7243f690b7b32e5b554296"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_ra97a33e40b9d4c829b809710061e0f8f"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a2e665f8eb6c7480bb731f08fdc1b8947"><a name="zh-cn_topic_0151920801_a2e665f8eb6c7480bb731f08fdc1b8947"></a><a name="zh-cn_topic_0151920801_a2e665f8eb6c7480bb731f08fdc1b8947"></a>keyboard</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a1c196780c9954a6bb9ffca0dd6488cac"><a name="zh-cn_topic_0151920801_a1c196780c9954a6bb9ffca0dd6488cac"></a><a name="zh-cn_topic_0151920801_a1c196780c9954a6bb9ffca0dd6488cac"></a>为系统设置一个或者多个可用键盘布局。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_ad1c231468e0249c5b6e9b3f466f1f25c"><a name="zh-cn_topic_0151920801_ad1c231468e0249c5b6e9b3f466f1f25c"></a><a name="zh-cn_topic_0151920801_ad1c231468e0249c5b6e9b3f466f1f25c"></a>必选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rcce8d47789fc4d65a7a78a11a059cfa9"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a9ebbb9cc61794927888d3e5c3786fde4"><a name="zh-cn_topic_0151920801_a9ebbb9cc61794927888d3e5c3786fde4"></a><a name="zh-cn_topic_0151920801_a9ebbb9cc61794927888d3e5c3786fde4"></a>lang</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a6dfb009db7b9435b9c34fdfed768da87"><a name="zh-cn_topic_0151920801_a6dfb009db7b9435b9c34fdfed768da87"></a><a name="zh-cn_topic_0151920801_a6dfb009db7b9435b9c34fdfed768da87"></a>设置在安装过程中使用的语言以及系统的默认语言。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a7b9f4b0522f74ae094840fc5fe697ad6"><a name="zh-cn_topic_0151920801_a7b9f4b0522f74ae094840fc5fe697ad6"></a><a name="zh-cn_topic_0151920801_a7b9f4b0522f74ae094840fc5fe697ad6"></a>必选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rf3f4e231e6a4413e8e43efd959fca94a"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_aa912e6838d7340c1bbe6c4415a1b49d0"><a name="zh-cn_topic_0151920801_aa912e6838d7340c1bbe6c4415a1b49d0"></a><a name="zh-cn_topic_0151920801_aa912e6838d7340c1bbe6c4415a1b49d0"></a>logging</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a8144e37504394d52bafc820de97e2a4c"><a name="zh-cn_topic_0151920801_a8144e37504394d52bafc820de97e2a4c"></a><a name="zh-cn_topic_0151920801_a8144e37504394d52bafc820de97e2a4c"></a>这个命令控制安装过程中 Anaconda 的出错日志。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_ac1a19d4d69de4522b26ed8a41a736c04"><a name="zh-cn_topic_0151920801_ac1a19d4d69de4522b26ed8a41a736c04"></a><a name="zh-cn_topic_0151920801_ac1a19d4d69de4522b26ed8a41a736c04"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r3e8b5b79402843678c8fd9a3367fbfa3"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a932f02f0ac824119b5973aa0abbae12b"><a name="zh-cn_topic_0151920801_a932f02f0ac824119b5973aa0abbae12b"></a><a name="zh-cn_topic_0151920801_a932f02f0ac824119b5973aa0abbae12b"></a>mediacheck</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a6f26bcccab64490482de0ec286224cb3"><a name="zh-cn_topic_0151920801_a6f26bcccab64490482de0ec286224cb3"></a><a name="zh-cn_topic_0151920801_a6f26bcccab64490482de0ec286224cb3"></a>如果添加这个选项，则在启动安装前会强制安装程序执行介质检查。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a443dcf3fda4e4d36bf1cba6153aa90dc"><a name="zh-cn_topic_0151920801_a443dcf3fda4e4d36bf1cba6153aa90dc"></a><a name="zh-cn_topic_0151920801_a443dcf3fda4e4d36bf1cba6153aa90dc"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r11402b2a27914c9b92e29dae5656aed2"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a9942a06e6674447dbf043ae82d607617"><a name="zh-cn_topic_0151920801_a9942a06e6674447dbf043ae82d607617"></a><a name="zh-cn_topic_0151920801_a9942a06e6674447dbf043ae82d607617"></a>network</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_adea12971f7e94fec9ff4c36b37af9a19"><a name="zh-cn_topic_0151920801_adea12971f7e94fec9ff4c36b37af9a19"></a><a name="zh-cn_topic_0151920801_adea12971f7e94fec9ff4c36b37af9a19"></a>为目标系统配置网络信息并在安装程序环境中激活网络设备。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_afc269f5ea51f4c589f4e9e773a267ed0"><a name="zh-cn_topic_0151920801_afc269f5ea51f4c589f4e9e773a267ed0"></a><a name="zh-cn_topic_0151920801_afc269f5ea51f4c589f4e9e773a267ed0"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r8eee4fe49df949a6862911598daa68ec"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a2baa738eac8c468481008e669c5fe233"><a name="zh-cn_topic_0151920801_a2baa738eac8c468481008e669c5fe233"></a><a name="zh-cn_topic_0151920801_a2baa738eac8c468481008e669c5fe233"></a>part/partition</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a1e6d888f03e54e398174b178883ba348"><a name="zh-cn_topic_0151920801_a1e6d888f03e54e398174b178883ba348"></a><a name="zh-cn_topic_0151920801_a1e6d888f03e54e398174b178883ba348"></a>在系统中创建分区。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a32c2e7ecd53542fabf52f38cb07d5bec"><a name="zh-cn_topic_0151920801_a32c2e7ecd53542fabf52f38cb07d5bec"></a><a name="zh-cn_topic_0151920801_a32c2e7ecd53542fabf52f38cb07d5bec"></a>必选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rdc9a081c17354fada120006d7349190d"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_aa0dad1b67c1a40e68e28bb8a764c2b54"><a name="zh-cn_topic_0151920801_aa0dad1b67c1a40e68e28bb8a764c2b54"></a><a name="zh-cn_topic_0151920801_aa0dad1b67c1a40e68e28bb8a764c2b54"></a>poweroff</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a6176f28ddd2e41f593add5a147461f54"><a name="zh-cn_topic_0151920801_a6176f28ddd2e41f593add5a147461f54"></a><a name="zh-cn_topic_0151920801_a6176f28ddd2e41f593add5a147461f54"></a>在安装成功后关闭系统并断电。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a3e92dc41930f4e0daa229f5830f29193"><a name="zh-cn_topic_0151920801_a3e92dc41930f4e0daa229f5830f29193"></a><a name="zh-cn_topic_0151920801_a3e92dc41930f4e0daa229f5830f29193"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r0bf93a58455242e1a436d0f8f4edf905"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_ad15360fda60643eb9b5846c1274c0a2a"><a name="zh-cn_topic_0151920801_ad15360fda60643eb9b5846c1274c0a2a"></a><a name="zh-cn_topic_0151920801_ad15360fda60643eb9b5846c1274c0a2a"></a>raid</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a59032755dafe4cf2b0a9f974c01c733a"><a name="zh-cn_topic_0151920801_a59032755dafe4cf2b0a9f974c01c733a"></a><a name="zh-cn_topic_0151920801_a59032755dafe4cf2b0a9f974c01c733a"></a>组成软件 RAID 设备。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_aec1de6be866246b982dbeedbc5ccfdc2"><a name="zh-cn_topic_0151920801_aec1de6be866246b982dbeedbc5ccfdc2"></a><a name="zh-cn_topic_0151920801_aec1de6be866246b982dbeedbc5ccfdc2"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_re978bb8f61a346b89f98155ea29194df"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a3edb4b4f904640ba8f774345ec0b903a"><a name="zh-cn_topic_0151920801_a3edb4b4f904640ba8f774345ec0b903a"></a><a name="zh-cn_topic_0151920801_a3edb4b4f904640ba8f774345ec0b903a"></a>reboot</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a19bb3f3e79434f7da96f65080aca4f70"><a name="zh-cn_topic_0151920801_a19bb3f3e79434f7da96f65080aca4f70"></a><a name="zh-cn_topic_0151920801_a19bb3f3e79434f7da96f65080aca4f70"></a>在成功完成安装（没有参数）后重新引导。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a84de6d8ab52b4132ba68a61ed64d713c"><a name="zh-cn_topic_0151920801_a84de6d8ab52b4132ba68a61ed64d713c"></a><a name="zh-cn_topic_0151920801_a84de6d8ab52b4132ba68a61ed64d713c"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rc21cd99aba934837bd2248f577896e90"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_ab80bf9bc834b47d0b0fbd1b567d99868"><a name="zh-cn_topic_0151920801_ab80bf9bc834b47d0b0fbd1b567d99868"></a><a name="zh-cn_topic_0151920801_ab80bf9bc834b47d0b0fbd1b567d99868"></a>rescue</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_ae277ae046a204eab994c80ce26c12e4e"><a name="zh-cn_topic_0151920801_ae277ae046a204eab994c80ce26c12e4e"></a><a name="zh-cn_topic_0151920801_ae277ae046a204eab994c80ce26c12e4e"></a>自动进入安装程序的救援模式。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a29adccd1dd2b4e87b651702022339e40"><a name="zh-cn_topic_0151920801_a29adccd1dd2b4e87b651702022339e40"></a><a name="zh-cn_topic_0151920801_a29adccd1dd2b4e87b651702022339e40"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rf1c118cfae53445bab1770afdbc71f67"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a2efbdc78dfb74a8490208345e2a6a9a4"><a name="zh-cn_topic_0151920801_a2efbdc78dfb74a8490208345e2a6a9a4"></a><a name="zh-cn_topic_0151920801_a2efbdc78dfb74a8490208345e2a6a9a4"></a>rootpw</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a49f1ef61a43e41e9b2fa149c4d877a77"><a name="zh-cn_topic_0151920801_a49f1ef61a43e41e9b2fa149c4d877a77"></a><a name="zh-cn_topic_0151920801_a49f1ef61a43e41e9b2fa149c4d877a77"></a>设定该系统的 root 密码。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_aca08e5a1b768465d88dcc8b712680463"><a name="zh-cn_topic_0151920801_aca08e5a1b768465d88dcc8b712680463"></a><a name="zh-cn_topic_0151920801_aca08e5a1b768465d88dcc8b712680463"></a>必选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rf8573a1a04ef4d2281a2a3ff9a062493"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a107d688145b64199996fe37e73047102"><a name="zh-cn_topic_0151920801_a107d688145b64199996fe37e73047102"></a><a name="zh-cn_topic_0151920801_a107d688145b64199996fe37e73047102"></a>services</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_ae6060d5fb5f0498c834fa4ba9cc68dcb"><a name="zh-cn_topic_0151920801_ae6060d5fb5f0498c834fa4ba9cc68dcb"></a><a name="zh-cn_topic_0151920801_ae6060d5fb5f0498c834fa4ba9cc68dcb"></a>修改在默认 systemd 目标中运行的默认服务集。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a701ed4cdc4384d268ce98ce57c341fb6"><a name="zh-cn_topic_0151920801_a701ed4cdc4384d268ce98ce57c341fb6"></a><a name="zh-cn_topic_0151920801_a701ed4cdc4384d268ce98ce57c341fb6"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rfbdea41a0dd043759dec6f3554017948"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_ac858b6e954944ad2aad35e951d828610"><a name="zh-cn_topic_0151920801_ac858b6e954944ad2aad35e951d828610"></a><a name="zh-cn_topic_0151920801_ac858b6e954944ad2aad35e951d828610"></a>shutdown</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_ac25d240d2215416d94342a06c2c250df"><a name="zh-cn_topic_0151920801_ac25d240d2215416d94342a06c2c250df"></a><a name="zh-cn_topic_0151920801_ac25d240d2215416d94342a06c2c250df"></a>在成功地完成安装后关闭系统。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a42eb286955ce4b73b9a4b7469e69acb3"><a name="zh-cn_topic_0151920801_a42eb286955ce4b73b9a4b7469e69acb3"></a><a name="zh-cn_topic_0151920801_a42eb286955ce4b73b9a4b7469e69acb3"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_re116b4dccd574a1792274f981b171a01"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_ada64bf9b14bb458bb11d418e49dda111"><a name="zh-cn_topic_0151920801_ada64bf9b14bb458bb11d418e49dda111"></a><a name="zh-cn_topic_0151920801_ada64bf9b14bb458bb11d418e49dda111"></a>timezone</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_adf23ae477b4d4eba87149dbc51f0f089"><a name="zh-cn_topic_0151920801_adf23ae477b4d4eba87149dbc51f0f089"></a><a name="zh-cn_topic_0151920801_adf23ae477b4d4eba87149dbc51f0f089"></a>设置系统时区。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_ae2af604d02904255874eb8c330f6ab55"><a name="zh-cn_topic_0151920801_ae2af604d02904255874eb8c330f6ab55"></a><a name="zh-cn_topic_0151920801_ae2af604d02904255874eb8c330f6ab55"></a>必选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_r795fff61fb2d4439b0fb5de73175d3cb"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_aaf2bdced8eba41f9a505d25f84022e14"><a name="zh-cn_topic_0151920801_aaf2bdced8eba41f9a505d25f84022e14"></a><a name="zh-cn_topic_0151920801_aaf2bdced8eba41f9a505d25f84022e14"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a5638036b8d2c4324a732f776fc20b92c"><a name="zh-cn_topic_0151920801_a5638036b8d2c4324a732f776fc20b92c"></a><a name="zh-cn_topic_0151920801_a5638036b8d2c4324a732f776fc20b92c"></a>在系统中生成新用户。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_abc0585ccfee449e5a2298c633e3a5e29"><a name="zh-cn_topic_0151920801_abc0585ccfee449e5a2298c633e3a5e29"></a><a name="zh-cn_topic_0151920801_abc0585ccfee449e5a2298c633e3a5e29"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rac1bafe6492a45adb81d483977cf9b0e"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a20b3b957745a48e9a6447cd5ffbb82ff"><a name="zh-cn_topic_0151920801_a20b3b957745a48e9a6447cd5ffbb82ff"></a><a name="zh-cn_topic_0151920801_a20b3b957745a48e9a6447cd5ffbb82ff"></a>vnc</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_aff7b0974d9d647538b35919acacfce3b"><a name="zh-cn_topic_0151920801_aff7b0974d9d647538b35919acacfce3b"></a><a name="zh-cn_topic_0151920801_aff7b0974d9d647538b35919acacfce3b"></a>允许通过 VNC 远程查看图形模式安装。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a0665d337adcd47beb0c191a4402658d7"><a name="zh-cn_topic_0151920801_a0665d337adcd47beb0c191a4402658d7"></a><a name="zh-cn_topic_0151920801_a0665d337adcd47beb0c191a4402658d7"></a>可选</p>
</td>
</tr>
<tr id="zh-cn_topic_0151920801_rdd1dbcba990a4d5b953a7561ac564534"><td class="cellrowborder" valign="top" width="24.130000000000003%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0151920801_a33c031e88e47416c8420c392623ffc05"><a name="zh-cn_topic_0151920801_a33c031e88e47416c8420c392623ffc05"></a><a name="zh-cn_topic_0151920801_a33c031e88e47416c8420c392623ffc05"></a>%include</p>
</td>
<td class="cellrowborder" valign="top" width="64.34%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0151920801_a299fb908f4ba4d178811dd238cf757e6"><a name="zh-cn_topic_0151920801_a299fb908f4ba4d178811dd238cf757e6"></a><a name="zh-cn_topic_0151920801_a299fb908f4ba4d178811dd238cf757e6"></a>使用 %include /path/to/file 命令将其他文件中的内容包括在 kickstart 文件中，就好像那些内容原本就在 kickstart 文件的 %include 命令部分。</p>
</td>
<td class="cellrowborder" valign="top" width="11.530000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0151920801_a6dea109cdcdb4006ad195bf12df50f63"><a name="zh-cn_topic_0151920801_a6dea109cdcdb4006ad195bf12df50f63"></a><a name="zh-cn_topic_0151920801_a6dea109cdcdb4006ad195bf12df50f63"></a>可选</p>
</td>
</tr>
</tbody>
</table>

## 命令使用举例<a name="zh-cn_topic_0151920801_s4dbd9c25dfe1411c8819344e434eb3a6"></a>

-   通过 install 指定安装方法

    您必须从 cdrom、harddrive、nfs、liveimg 或者 url（用于 FTP、HTTP、或者 HTTPS 安装）中指定安装类型。install 命令和安装方法命令必须在不同的行中。例如：

    ```
    install
    liveimg --url=file:///images/install/squashfs.img --noverifyssl
    ```

-   通过 lang 设置语言

    要将语言设置为英语，kickstart 文件应该包含下面的一行：

    ```
    lang en_US
    ```

-   通过 services 修改默认运行的服务

    ```
    services [--disabled=list] [--enabled=list]
    ```

    -   disabled：禁用在以逗号分开的列表中给出的服务。
    -   enabled：启用在以逗号分开的列表中给出的服务。

    不要在服务列表中包含空格。如果有空格，则 kickstart 将只启用或者禁用第一个空格之前的服务。例如：

    ```
    services --disabled=auditd, cups,smartd, nfslock
    ```

    将只禁用 auditd 服务，后面的cups、smartd、nfslock服务不会被禁用。要禁用所有的服务，各个服务之间不应该有空格。


