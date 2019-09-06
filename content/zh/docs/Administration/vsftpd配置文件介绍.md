# vsftpd配置文件介绍<a name="ZH-CN_TOPIC_0184749976"></a>

用户可以通过修改vsftpd的配置文件，控制用户权限等。vsftpd的主要配置文件和含义如[表1](#table1541615718372)所示，用户可以根据需求修改配置文件的内容。更多的配置参数含义可以通过man查看。

**表 1**  vsftpd配置文件介绍

<a name="table1541615718372"></a>
<table><thead align="left"><tr id="row1041620733716"><th class="cellrowborder" valign="top" width="26.16%" id="mcps1.2.3.1.1"><p id="p141619753716"><a name="p141619753716"></a><a name="p141619753716"></a>配置文件</p>
</th>
<th class="cellrowborder" valign="top" width="73.83999999999999%" id="mcps1.2.3.1.2"><p id="p16416187153714"><a name="p16416187153714"></a><a name="p16416187153714"></a>含义</p>
</th>
</tr>
</thead>
<tbody><tr id="row541716723710"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p1071316355299"><a name="p1071316355299"></a><a name="p1071316355299"></a>/etc/vsftpd/vsftpd.conf</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p04178718376"><a name="p04178718376"></a><a name="p04178718376"></a>vsftpd进程的主配置文件，配置内容格式为“参数=参数值”，且参数和参数值不能为空。</p>
<p id="p153451439183513"><a name="p153451439183513"></a><a name="p153451439183513"></a>vsftpd.conf 的详细介绍可以使用如下命令查看：</p>
<p id="p128951154173518"><a name="p128951154173518"></a><a name="p128951154173518"></a>man 5 vsftpd.conf</p>
</td>
</tr>
<tr id="row1341710763719"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p18697219193716"><a name="p18697219193716"></a><a name="p18697219193716"></a>/etc/pam.d/vsftpd</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p941714720378"><a name="p941714720378"></a><a name="p941714720378"></a>PAM（Pluggable Authentication Modules）认证文件，主要用于身份认证和限制一些用户的操作。</p>
</td>
</tr>
<tr id="row194171773716"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p1024763374812"><a name="p1024763374812"></a><a name="p1024763374812"></a>/etc/vsftpd/ftpusers</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p74171174375"><a name="p74171174375"></a><a name="p74171174375"></a><span>禁用使用vsftpd的用户列表文件</span>。默认情况下，系统帐号也在该文件中，因此系统帐号默认无法使用vsftpd。</p>
</td>
</tr>
<tr id="row441787153712"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p174183753711"><a name="p174183753711"></a><a name="p174183753711"></a>/etc/vsftpd/user_list</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p897451702311"><a name="p897451702311"></a><a name="p897451702311"></a><span>禁止或允许登录vsftpd服务器的用户列表文件</span>。该文件是否生效，取决于主配置文件vsftpd.conf中的如下参数：</p>
<p id="p235712118232"><a name="p235712118232"></a><a name="p235712118232"></a>userlist_enable：是否启用userlist机制，YES为启用，此时userlist_deny配置有效，NO为禁用。</p>
<p id="p38688486536"><a name="p38688486536"></a><a name="p38688486536"></a>userlist_deny：是否禁止user_list中的用户登录，YES为禁止名单中的用户登录，NO为允许命令中的用户登录。</p>
<p id="p15866735202619"><a name="p15866735202619"></a><a name="p15866735202619"></a>例如userlist_enable=YES，userlist_deny=NO，则user_list中的用户都无法登录。</p>
</td>
</tr>
<tr id="row9535948142112"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p17719134152118"><a name="p17719134152118"></a><a name="p17719134152118"></a>/etc/vsftpd/chroot_list</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p6618142417163"><a name="p6618142417163"></a><a name="p6618142417163"></a>是否限制在主目录下的用户列表。该文件默认不存在，需要手动建立。它是主配置文件vsftpd.conf中参数chroot_list_file的参数值。</p>
<p id="p3279143081618"><a name="p3279143081618"></a><a name="p3279143081618"></a>其作用是限制还是允许，取决于主配置文件vsftpd.conf中的如下参数：</p>
<a name="ul1455581412205"></a><a name="ul1455581412205"></a><ul id="ul1455581412205"><li><span>chroot_local_user：是否将所有用户限制在主目录，YES为启用，NO禁用</span>。</li><li><span>chroot_list_enable：</span>是否启用限制用户的名单，YES为启用，NO禁用。</li></ul>
<p id="p197351059141313"><a name="p197351059141313"></a><a name="p197351059141313"></a>例如<span>chroot_local_user</span>=YES，<span>chroot_list_enable</span>=YES，且指定chroot_list_file=/etc/vsftpd/chroot_list时，表示所有用户被限制在其主目录下，而chroot_list中的用户不受限制。</p>
</td>
</tr>
<tr id="row12536248192116"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p6724834162111"><a name="p6724834162111"></a><a name="p6724834162111"></a>/usr/sbin/vsftpd</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p1253634815218"><a name="p1253634815218"></a><a name="p1253634815218"></a>vsftpd的唯一执行文件。</p>
</td>
</tr>
<tr id="row35371648162119"><td class="cellrowborder" valign="top" width="26.16%" headers="mcps1.2.3.1.1 "><p id="p772716348217"><a name="p772716348217"></a><a name="p772716348217"></a>/var/ftp/</p>
</td>
<td class="cellrowborder" valign="top" width="73.83999999999999%" headers="mcps1.2.3.1.2 "><p id="p25371248172114"><a name="p25371248172114"></a><a name="p25371248172114"></a>匿名用户登录的默认根目录，与ftp帐户的用户主目录有关。</p>
</td>
</tr>
</tbody>
</table>

