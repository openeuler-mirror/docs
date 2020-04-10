# Default Configuration Description<a name="EN-US_TOPIC_0229622693"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The configuration content in this document is for reference only. You can modify the content based on the site requirements \(for example, security hardening requirements\).  

In the openEuler system, vsftpd does not open to anonymous users by default. Run the vim command to view the main configuration file. The content is as follows:

```
# vim /etc/vsftpd/vsftpd.conf
anonymous_enable=NO
local_enable=YES
write_enable=YES
local_umask=022
dirmessage_enable=YES
xferlog_enable=YES
connect_from_port_20=YES
xferlog_std_format=YES
listen=NO
listen_ipv6=YES
pam_service_name=vsftpd
userlist_enable=YES
```

[Table 1](#table18185162512499)  describes the parameters.

**Table  1**  Parameter description

<a name="table18185162512499"></a>
<table><thead align="left"><tr id="row101877257495"><th class="cellrowborder" valign="top" width="22.78%" id="mcps1.2.3.1.1"><p id="p21871725144910"><a name="p21871725144910"></a><a name="p21871725144910"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="77.22%" id="mcps1.2.3.1.2"><p id="p19187162564910"><a name="p19187162564910"></a><a name="p19187162564910"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row3187425134916"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p4968173712497"><a name="p4968173712497"></a><a name="p4968173712497"></a>anonymous_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p74773423490"><a name="p74773423490"></a><a name="p74773423490"></a>Indicates whether to allow anonymous users to log in. YES indicates that anonymous users are allowed to log in; NO indicates that anonymous users are not allowed to log in.</p>
</td>
</tr>
<tr id="row19187225114911"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p8968237174919"><a name="p8968237174919"></a><a name="p8968237174919"></a>local_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p104782422495"><a name="p104782422495"></a><a name="p104782422495"></a>Whether to allow local users to log in. YES indicates that local users are allowed to log in. NO indicates that local users are not allowed to log in.</p>
</td>
</tr>
<tr id="row1418772574910"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p8968737114910"><a name="p8968737114910"></a><a name="p8968737114910"></a>write_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p81871825104914"><a name="p81871825104914"></a><a name="p81871825104914"></a>Whether to allow the login user to have the write permission. YES indicates that the upload and write function is enabled, and NO indicates that the function is disabled.</p>
</td>
</tr>
<tr id="row018722564917"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p3969163704915"><a name="p3969163704915"></a><a name="p3969163704915"></a>local_umask</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p01856127552"><a name="p01856127552"></a><a name="p01856127552"></a>Indicates the umask value when a local user adds a profile.</p>
</td>
</tr>
<tr id="row171881425194917"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1796983716496"><a name="p1796983716496"></a><a name="p1796983716496"></a>dirmessage_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p1718872516496"><a name="p1718872516496"></a><a name="p1718872516496"></a>Indicates whether to display the contents that users need to pay attention to when a user accesses a directory. The options are YES (yes) and NO (no).</p>
</td>
</tr>
<tr id="row1718862584912"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p16969937194918"><a name="p16969937194918"></a><a name="p16969937194918"></a>xferlog_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p11188725164915"><a name="p11188725164915"></a><a name="p11188725164915"></a>Indicates whether to record file upload and download operations. The options are YES (record operations) and NO (not record operations).</p>
</td>
</tr>
<tr id="row131884252495"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1497053713498"><a name="p1497053713498"></a><a name="p1497053713498"></a>connect_from_port_20</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p0223715115717"><a name="p0223715115717"></a><a name="p0223715115717"></a>Indicates whether port 20 is used for data transmission in port mode. YES indicates that port 20 is used, and NO indicates that port 20 is not used.</p>
</td>
</tr>
<tr id="row54729324499"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1797093744914"><a name="p1797093744914"></a><a name="p1797093744914"></a>xferlog_std_format</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p151867233590"><a name="p151867233590"></a><a name="p151867233590"></a>Indicates whether the transfer log file is written in the standard xferlog format. The options are YES (yes) and NO (no).</p>
</td>
</tr>
<tr id="row18472163284918"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1897013717499"><a name="p1897013717499"></a><a name="p1897013717499"></a>listen</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p1047214329495"><a name="p1047214329495"></a><a name="p1047214329495"></a>Indicates whether the vsftpd service is started in standalone mode. The options are YES (yes) and NO (no).</p>
</td>
</tr>
<tr id="row65527244272"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1955372410278"><a name="p1955372410278"></a><a name="p1955372410278"></a>pam_service_name</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p85531424172712"><a name="p85531424172712"></a><a name="p85531424172712"></a>Support for PAM management. The value is a service name, for example, vsftpd.</p>
</td>
</tr>
<tr id="row137361028142713"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p3737132822713"><a name="p3737132822713"></a><a name="p3737132822713"></a>userlist_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p573792872715"><a name="p573792872715"></a><a name="p573792872715"></a>Indicates whether to support account login control in the /etc/vsftpd/user_list file. The options are YES (yes) and NO (no).</p>
</td>
</tr>
<tr id="row1712712332278"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1512763312712"><a name="p1512763312712"></a><a name="p1512763312712"></a>tcp_wrappers</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p15127033152712"><a name="p15127033152712"></a><a name="p15127033152712"></a>Indicates whether to support the firewall mechanism of the TCP Wrappers. The options are YES (yes) and NO (no).</p>
</td>
</tr>
<tr id="row163601306111"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1597123717499"><a name="p1597123717499"></a><a name="p1597123717499"></a>listen_ipv6</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p0361200613"><a name="p0361200613"></a><a name="p0361200613"></a>Indicates whether to listen to IPv6 FTP requests. The options are YES (yes) and NO (no). listen and listen_ipv6 cannot be enabled at the same time.</p>
</td>
</tr>
</tbody>
</table>

