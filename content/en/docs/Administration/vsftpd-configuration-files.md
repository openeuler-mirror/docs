# vsftpd Configuration Files<a name="EN-US_TOPIC_0229622609"></a>

You can modify the vsftpd configuration file to control user permissions.  [Table 1](#table1541615718372)  describes the vsftpd configuration files. You can modify the configuration files as required. You can run the man command to view more parameter meanings.

**Table  1**  vsftpd configuration files

<a name="table1541615718372"></a>
<table><thead align="left"><tr id="row1041620733716"><th class="cellrowborder" valign="top" width="26.16%" id="mcps1.2.3.1.1"><p id="p141619753716"><a name="p141619753716"></a><a name="p141619753716"></a>Configuration File</p>
</th>
<th class="cellrowborder" valign="top" width="73.83999999999999%" id="mcps1.2.3.1.2"><p id="p16416187153714"><a name="p16416187153714"></a><a name="p16416187153714"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row541716723710"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p1071316355299"><a name="p1071316355299"></a><a name="p1071316355299"></a>/etc/vsftpd/vsftpd.conf</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p04178718376"><a name="p04178718376"></a><a name="p04178718376"></a>Main configuration file of the vsftpd process. The configuration format is Parameter=Parameter value. The parameter and parameter value cannot be empty.</p>
<p id="p153451439183513"><a name="p153451439183513"></a><a name="p153451439183513"></a>You can run the following command to view details about the vsftpd.conf file:</p>
<p id="p128951154173518"><a name="p128951154173518"></a><a name="p128951154173518"></a>man 5 vsftpd.conf</p>
</td>
</tr>
<tr id="row1341710763719"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p18697219193716"><a name="p18697219193716"></a><a name="p18697219193716"></a>/etc/pam.d/vsftpd</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p941714720378"><a name="p941714720378"></a><a name="p941714720378"></a>Pluggable authentication modules (PAMs) are used for identity authentication and restrict some user operations.</p>
</td>
</tr>
<tr id="row194171773716"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p1024763374812"><a name="p1024763374812"></a><a name="p1024763374812"></a>/etc/vsftpd/ftpusers</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p74171174375"><a name="p74171174375"></a><a name="p74171174375"></a>List of users who are not allowed to use the vsftpd. By default, the system account is also in this file. Therefore, the system account cannot use vsftpd by default.</p>
</td>
</tr>
<tr id="row441787153712"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p174183753711"><a name="p174183753711"></a><a name="p174183753711"></a>/etc/vsftpd/user_list</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p897451702311"><a name="p897451702311"></a><a name="p897451702311"></a>List of users who are allowed or not allowed to log in to the vsftpd server. Whether the file takes effect depends on the following parameters in the main configuration file vsftpd.conf:</p>
<p id="p235712118232"><a name="p235712118232"></a><a name="p235712118232"></a>userlist_enable: indicates whether to enable the userlist mechanism. The value YES indicates that the userlist mechanism is enabled. In this case, the userlist_deny configuration is valid. The value NO indicates that the userlist mechanism is disabled.</p>
<p id="p38688486536"><a name="p38688486536"></a><a name="p38688486536"></a>userlist_deny: indicates whether to forbid users in the user list to log in. YES indicates that users in the user list are forbidden to log in. NO indicates that users in the command are allowed to log in.</p>
<p id="p15866735202619"><a name="p15866735202619"></a><a name="p15866735202619"></a>For example, if userlist_enable is set to YES and userlist_deny is set to NO, all users in the user list cannot log in.</p>
</td>
</tr>
<tr id="row9535948142112"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p17719134152118"><a name="p17719134152118"></a><a name="p17719134152118"></a>/etc/vsftpd/chroot_list</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p6618142417163"><a name="p6618142417163"></a><a name="p6618142417163"></a>Whether to restrict the user list in the home directory. By default, this file does not exist. You need to create it manually. It is the value of chroot_list_file in the vsftpd.conf file.</p>
<p id="p3279143081618"><a name="p3279143081618"></a><a name="p3279143081618"></a>The function of this parameter is determined by the following parameters in the vsftpd.conf file:</p>
<a name="ul1455581412205"></a><a name="ul1455581412205"></a><ul id="ul1455581412205"><li>chroot_local_user: indicates whether to restrict all users to the home directory. The value YES indicates that all users are restricted to the home directory, and the value NO indicates that all users are not restricted to the home directory.</li><li>chroot_list_enable: indicates whether to enable the list of restricted users. The value YES indicates that the list is enabled, and the value NO indicates that the list is disabled.</li></ul>
<p id="p197351059141313"><a name="p197351059141313"></a><a name="p197351059141313"></a>For example, if chroot_local_user is set to YES, chroot_list_enable is set to YES, and chroot_list_file is set to /etc/vsftpd/chroot_list, all users are restricted to their home directories, and users in chroot_list are not restricted.</p>
</td>
</tr>
<tr id="row12536248192116"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p6724834162111"><a name="p6724834162111"></a><a name="p6724834162111"></a>/usr/sbin/vsftpd</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p1253634815218"><a name="p1253634815218"></a><a name="p1253634815218"></a>Unique execution file of vsftpd.</p>
</td>
</tr>
<tr id="row35371648162119"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p772716348217"><a name="p772716348217"></a><a name="p772716348217"></a>/var/ftp/</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p25371248172114"><a name="p25371248172114"></a><a name="p25371248172114"></a>Default root directory for anonymous users to log in. The root directory is related to the home directory of the ftp user.</p>
</td>
</tr>
</tbody>
</table>

