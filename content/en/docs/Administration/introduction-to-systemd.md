# Introduction to systemd<a name="EN-US_TOPIC_0229622785"></a>

The systemd is a system and service manager for Linux operating systems. It is designed to be backward compatible with SysV and LSB init scripts, and provides a number of features such as Socket & D-Bus based activation of services, on-demand activation of daemons, system state snapshots, and mount & automount point management. With systemd, the service control logic and parallelization are refined.

## Systemd Units<a name="en-us_topic_0151921012_s7feb026873e5469c983726304d563463"></a>

In systemd, the targets of most actions are units, which are resources systemd know how to manage. Units are categorized by the type of resources they represent and defined in unit configuration files. For example, the avahi.service unit represents the Avahi daemon and is defined in the  **avahi.service**  file.  [Table 1](#en-us_topic_0151921012_t2dcb6d973cc249ed9ccd56729751ca6b)  lists available types of systemd units.

**Table  1**  Available types of systemd units

<a name="en-us_topic_0151921012_t2dcb6d973cc249ed9ccd56729751ca6b"></a>
<table><thead align="left"><tr id="en-us_topic_0151921012_r7b42846c4fae43e7884a3f020f608fe2"><th class="cellrowborder" valign="top" width="23.18%" id="mcps1.2.4.1.1"><p id="en-us_topic_0151921012_ab281691f1f2b4cc1bbe493047d2362d9"><a name="en-us_topic_0151921012_ab281691f1f2b4cc1bbe493047d2362d9"></a><a name="en-us_topic_0151921012_ab281691f1f2b4cc1bbe493047d2362d9"></a>Unit Type</p>
</th>
<th class="cellrowborder" valign="top" width="20.36%" id="mcps1.2.4.1.2"><p id="en-us_topic_0151921012_a0f7c1823e26547e796c1641f97c33fdd"><a name="en-us_topic_0151921012_a0f7c1823e26547e796c1641f97c33fdd"></a><a name="en-us_topic_0151921012_a0f7c1823e26547e796c1641f97c33fdd"></a>File Extension</p>
</th>
<th class="cellrowborder" valign="top" width="56.46%" id="mcps1.2.4.1.3"><p id="en-us_topic_0151921012_a60a2db60a7044830b7484a6acc33be0e"><a name="en-us_topic_0151921012_a60a2db60a7044830b7484a6acc33be0e"></a><a name="en-us_topic_0151921012_a60a2db60a7044830b7484a6acc33be0e"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0151921012_r792e4f30a76a4d1a87472bf69f4208ab"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_a920c3978e086448eab26a0c108b3fc4b"><a name="en-us_topic_0151921012_a920c3978e086448eab26a0c108b3fc4b"></a><a name="en-us_topic_0151921012_a920c3978e086448eab26a0c108b3fc4b"></a>Service unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_ab53b8d9e50b3496f9c42ac71130179a8"><a name="en-us_topic_0151921012_ab53b8d9e50b3496f9c42ac71130179a8"></a><a name="en-us_topic_0151921012_ab53b8d9e50b3496f9c42ac71130179a8"></a>.service</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_a4021f8a9f8ac44889df66eb405ba8707"><a name="en-us_topic_0151921012_a4021f8a9f8ac44889df66eb405ba8707"></a><a name="en-us_topic_0151921012_a4021f8a9f8ac44889df66eb405ba8707"></a>A system service.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_r1dc46642b82640b8ba50c274a71c0115"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_acc7293f71641476d866484f4b4e2e17d"><a name="en-us_topic_0151921012_acc7293f71641476d866484f4b4e2e17d"></a><a name="en-us_topic_0151921012_acc7293f71641476d866484f4b4e2e17d"></a>Target unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_a972c16ba24e44039a202a8a8b500cf0d"><a name="en-us_topic_0151921012_a972c16ba24e44039a202a8a8b500cf0d"></a><a name="en-us_topic_0151921012_a972c16ba24e44039a202a8a8b500cf0d"></a>.target</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_a794b9638ea42413087672632eb3ecc9b"><a name="en-us_topic_0151921012_a794b9638ea42413087672632eb3ecc9b"></a><a name="en-us_topic_0151921012_a794b9638ea42413087672632eb3ecc9b"></a>A group of systemd units.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_rf862dcc0891e4292b214e743020fad44"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_aa36d2a004680460eb77cd61abfda11ff"><a name="en-us_topic_0151921012_aa36d2a004680460eb77cd61abfda11ff"></a><a name="en-us_topic_0151921012_aa36d2a004680460eb77cd61abfda11ff"></a>Automount unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_aea349872c8b64346aca1fd99b220ade4"><a name="en-us_topic_0151921012_aea349872c8b64346aca1fd99b220ade4"></a><a name="en-us_topic_0151921012_aea349872c8b64346aca1fd99b220ade4"></a>.automount</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_a2752debc211c4c2a8d2dec5df410cd5f"><a name="en-us_topic_0151921012_a2752debc211c4c2a8d2dec5df410cd5f"></a><a name="en-us_topic_0151921012_a2752debc211c4c2a8d2dec5df410cd5f"></a>A file system automount point.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_r151262203bbd41dfbcf6450b977adcd8"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_a63ad759ddc924457ae160f5ef2134665"><a name="en-us_topic_0151921012_a63ad759ddc924457ae160f5ef2134665"></a><a name="en-us_topic_0151921012_a63ad759ddc924457ae160f5ef2134665"></a>Device unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_a1d72eda1c2e14a5ca5b4bbd3d1e04df2"><a name="en-us_topic_0151921012_a1d72eda1c2e14a5ca5b4bbd3d1e04df2"></a><a name="en-us_topic_0151921012_a1d72eda1c2e14a5ca5b4bbd3d1e04df2"></a>.device</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_a17fb3dcba5df47e9bd6dcadb1fdd0570"><a name="en-us_topic_0151921012_a17fb3dcba5df47e9bd6dcadb1fdd0570"></a><a name="en-us_topic_0151921012_a17fb3dcba5df47e9bd6dcadb1fdd0570"></a>A device file recognized by the kernel.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_re7d8c6541280475e900e3b336b9af327"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_a4950ed734138459c83be23229b5f3d6a"><a name="en-us_topic_0151921012_a4950ed734138459c83be23229b5f3d6a"></a><a name="en-us_topic_0151921012_a4950ed734138459c83be23229b5f3d6a"></a>Mount unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_ab745de23d809475d9c5c9e20e81066d1"><a name="en-us_topic_0151921012_ab745de23d809475d9c5c9e20e81066d1"></a><a name="en-us_topic_0151921012_ab745de23d809475d9c5c9e20e81066d1"></a>.mount</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_a689c3d6fa3124b61af6546d7ff4e5f42"><a name="en-us_topic_0151921012_a689c3d6fa3124b61af6546d7ff4e5f42"></a><a name="en-us_topic_0151921012_a689c3d6fa3124b61af6546d7ff4e5f42"></a>A file system mount point.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_r1c9abcac0409405390c79d039efd1f73"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_a105f139cb99a424ebf6668c409fbfd10"><a name="en-us_topic_0151921012_a105f139cb99a424ebf6668c409fbfd10"></a><a name="en-us_topic_0151921012_a105f139cb99a424ebf6668c409fbfd10"></a>Path unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_af1454bde836a4118b58341b586e1770a"><a name="en-us_topic_0151921012_af1454bde836a4118b58341b586e1770a"></a><a name="en-us_topic_0151921012_af1454bde836a4118b58341b586e1770a"></a>.path</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_ace9baa2479c64f97abb493519474df4d"><a name="en-us_topic_0151921012_ace9baa2479c64f97abb493519474df4d"></a><a name="en-us_topic_0151921012_ace9baa2479c64f97abb493519474df4d"></a>A file or directory in a file system.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_r110ad4c541c241ac816e2827ef85c035"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_aaa9d61a1976b4c399f8d26feee1f8a9a"><a name="en-us_topic_0151921012_aaa9d61a1976b4c399f8d26feee1f8a9a"></a><a name="en-us_topic_0151921012_aaa9d61a1976b4c399f8d26feee1f8a9a"></a>Scope unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_ad16b81af817345d3822330091c783398"><a name="en-us_topic_0151921012_ad16b81af817345d3822330091c783398"></a><a name="en-us_topic_0151921012_ad16b81af817345d3822330091c783398"></a>.scope</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_a4c7749fd392348668a0cb1b25cbac70d"><a name="en-us_topic_0151921012_a4c7749fd392348668a0cb1b25cbac70d"></a><a name="en-us_topic_0151921012_a4c7749fd392348668a0cb1b25cbac70d"></a>An externally created process.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_r6f7302c1ed8244e291ffa0ae08a3b27c"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_ab41ebb369a5c47598601bd96ca5d95af"><a name="en-us_topic_0151921012_ab41ebb369a5c47598601bd96ca5d95af"></a><a name="en-us_topic_0151921012_ab41ebb369a5c47598601bd96ca5d95af"></a>Slice unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_a18c465ebe76c4ffb8950064ee9a62858"><a name="en-us_topic_0151921012_a18c465ebe76c4ffb8950064ee9a62858"></a><a name="en-us_topic_0151921012_a18c465ebe76c4ffb8950064ee9a62858"></a>.slice</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_a060e385703ed49a0bbb993f60520a6dd"><a name="en-us_topic_0151921012_a060e385703ed49a0bbb993f60520a6dd"></a><a name="en-us_topic_0151921012_a060e385703ed49a0bbb993f60520a6dd"></a>A group of hierarchically organized units that manage system processes.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_r464fbcf4d5b04ed29b11f52b150531ab"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_a8c0ed4656ebb4a10b1fcbce2ce396683"><a name="en-us_topic_0151921012_a8c0ed4656ebb4a10b1fcbce2ce396683"></a><a name="en-us_topic_0151921012_a8c0ed4656ebb4a10b1fcbce2ce396683"></a>Snapshot unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_a2815b0c797784a9e95de60f614a683a7"><a name="en-us_topic_0151921012_a2815b0c797784a9e95de60f614a683a7"></a><a name="en-us_topic_0151921012_a2815b0c797784a9e95de60f614a683a7"></a>.snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_adf4318e96e0d47efbad6c438a124d924"><a name="en-us_topic_0151921012_adf4318e96e0d47efbad6c438a124d924"></a><a name="en-us_topic_0151921012_adf4318e96e0d47efbad6c438a124d924"></a>A saved state of the systemd manager.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_rf411a13d70a64af0913d1403098c35f4"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_a20f3e23c829a4337a8fb5fc64b628fda"><a name="en-us_topic_0151921012_a20f3e23c829a4337a8fb5fc64b628fda"></a><a name="en-us_topic_0151921012_a20f3e23c829a4337a8fb5fc64b628fda"></a>Socket unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_a4dde23a95c7f49649608dea395226e51"><a name="en-us_topic_0151921012_a4dde23a95c7f49649608dea395226e51"></a><a name="en-us_topic_0151921012_a4dde23a95c7f49649608dea395226e51"></a>.socket</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_a0b30893d3da240388885a50af44269db"><a name="en-us_topic_0151921012_a0b30893d3da240388885a50af44269db"></a><a name="en-us_topic_0151921012_a0b30893d3da240388885a50af44269db"></a>An inter-process communication socket.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_r954b0bbd2609438ca1ecc49402117695"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_a2e0d25e939104ff5a1c3f79c5285689f"><a name="en-us_topic_0151921012_a2e0d25e939104ff5a1c3f79c5285689f"></a><a name="en-us_topic_0151921012_a2e0d25e939104ff5a1c3f79c5285689f"></a>Swap unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_af7250fd0df504b6db1ae83ea22ad4dc3"><a name="en-us_topic_0151921012_af7250fd0df504b6db1ae83ea22ad4dc3"></a><a name="en-us_topic_0151921012_af7250fd0df504b6db1ae83ea22ad4dc3"></a>.swap</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_aed1f0dc1800f457d9271ab272aaf9019"><a name="en-us_topic_0151921012_aed1f0dc1800f457d9271ab272aaf9019"></a><a name="en-us_topic_0151921012_aed1f0dc1800f457d9271ab272aaf9019"></a>A swap device or a swap file.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_r27a40c4c1d7b4c74ac4913185f408b22"><td class="cellrowborder" valign="top" width="23.18%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151921012_aec67b2a244f843f59fda49a59083ecd8"><a name="en-us_topic_0151921012_aec67b2a244f843f59fda49a59083ecd8"></a><a name="en-us_topic_0151921012_aec67b2a244f843f59fda49a59083ecd8"></a>Timer unit</p>
</td>
<td class="cellrowborder" valign="top" width="20.36%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151921012_a0890a8d257014b609f9609b7d64d1535"><a name="en-us_topic_0151921012_a0890a8d257014b609f9609b7d64d1535"></a><a name="en-us_topic_0151921012_a0890a8d257014b609f9609b7d64d1535"></a>.timer</p>
</td>
<td class="cellrowborder" valign="top" width="56.46%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151921012_a907849cda16f459b9c50d4b58324ec7d"><a name="en-us_topic_0151921012_a907849cda16f459b9c50d4b58324ec7d"></a><a name="en-us_topic_0151921012_a907849cda16f459b9c50d4b58324ec7d"></a>A systemd timer.</p>
</td>
</tr>
</tbody>
</table>

All available types of systemd units are located in one of the following directories listed in  [Table 2](#en-us_topic_0151921012_t2523a0a9a0c54f9b849e52d1efa0160c).

**Table  2**  Locations of available systemd units

<a name="en-us_topic_0151921012_t2523a0a9a0c54f9b849e52d1efa0160c"></a>
<table><thead align="left"><tr id="en-us_topic_0151921012_r213bb3b501954621bfa006ab9ddfbd62"><th class="cellrowborder" valign="top" width="32.33%" id="mcps1.2.3.1.1"><p id="en-us_topic_0151921012_afce39246edb84dd7a9aa40dff9b8c7e3"><a name="en-us_topic_0151921012_afce39246edb84dd7a9aa40dff9b8c7e3"></a><a name="en-us_topic_0151921012_afce39246edb84dd7a9aa40dff9b8c7e3"></a>Directory</p>
</th>
<th class="cellrowborder" valign="top" width="67.67%" id="mcps1.2.3.1.2"><p id="en-us_topic_0151921012_abebe174b3f9c4ff4b28270e3f1907b5b"><a name="en-us_topic_0151921012_abebe174b3f9c4ff4b28270e3f1907b5b"></a><a name="en-us_topic_0151921012_abebe174b3f9c4ff4b28270e3f1907b5b"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0151921012_rcae60499dc8540328df0a6bf543aaafa"><td class="cellrowborder" valign="top" width="32.33%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921012_a7f7f73f64b3d4294a2f717f5a5dedd1c"><a name="en-us_topic_0151921012_a7f7f73f64b3d4294a2f717f5a5dedd1c"></a><a name="en-us_topic_0151921012_a7f7f73f64b3d4294a2f717f5a5dedd1c"></a>/usr/lib/systemd/system/</p>
</td>
<td class="cellrowborder" valign="top" width="67.67%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921012_af3744f8424524c1c864a7ff18092079d"><a name="en-us_topic_0151921012_af3744f8424524c1c864a7ff18092079d"></a><a name="en-us_topic_0151921012_af3744f8424524c1c864a7ff18092079d"></a>Systemd units distributed with installed RPM packages.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_r381a8939b45e4b419479c02bf07f0cd7"><td class="cellrowborder" valign="top" width="32.33%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921012_aabacb836c0fa4f6f96476ff465870cd0"><a name="en-us_topic_0151921012_aabacb836c0fa4f6f96476ff465870cd0"></a><a name="en-us_topic_0151921012_aabacb836c0fa4f6f96476ff465870cd0"></a>/run/systemd/system/</p>
</td>
<td class="cellrowborder" valign="top" width="67.67%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921012_a2edec0a6cd0741a0b8b067d9f9c33b98"><a name="en-us_topic_0151921012_a2edec0a6cd0741a0b8b067d9f9c33b98"></a><a name="en-us_topic_0151921012_a2edec0a6cd0741a0b8b067d9f9c33b98"></a>Systemd units created at runtime.</p>
</td>
</tr>
<tr id="en-us_topic_0151921012_rc0974b74cedf4b5ba85d1347bb553c14"><td class="cellrowborder" valign="top" width="32.33%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921012_a54ab3b765b2c4590a35494886586dcc3"><a name="en-us_topic_0151921012_a54ab3b765b2c4590a35494886586dcc3"></a><a name="en-us_topic_0151921012_a54ab3b765b2c4590a35494886586dcc3"></a>/etc/systemd/system/</p>
</td>
<td class="cellrowborder" valign="top" width="67.67%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921012_a9fc8f932d4ff4ba4b6c0469219073cb4"><a name="en-us_topic_0151921012_a9fc8f932d4ff4ba4b6c0469219073cb4"></a><a name="en-us_topic_0151921012_a9fc8f932d4ff4ba4b6c0469219073cb4"></a>Systemd units created and managed by the system administrator.</p>
</td>
</tr>
</tbody>
</table>

