# 搭建FTP服务器
<!-- TOC -->

- [搭建FTP服务器](#搭建ftp服务器)
    - [总体介绍](#总体介绍)
        - [FTP简介](#ftp简介)
        - [FTP使用到的端口](#ftp使用到的端口)
        - [vsftpd简介](#vsftpd简介)
    - [使用vsftpd](#使用vsftpd)
        - [安装vsftpd](#安装vsftpd)
        - [管理vsftpd服务](#管理vsftpd服务)
    - [配置vsftpd](#配置vsftpd)
        - [vsftpd配置文件介绍](#vsftpd配置文件介绍)
        - [默认配置说明](#默认配置说明)
        - [配置本地时间](#配置本地时间)
        - [配置欢迎信息](#配置欢迎信息)
        - [配置系统帐号登录权限](#配置系统帐号登录权限)
    - [验证FTP服务是否搭建成功](#验证ftp服务是否搭建成功)
    - [配置防火墙](#配置防火墙)
    - [传输文件](#传输文件)
        - [概述](#概述)
        - [连接服务器](#连接服务器)
        - [下载文件](#下载文件)
        - [上传文件](#上传文件)
        - [删除文件](#删除文件)
        - [断开服务器](#断开服务器)

<!-- /TOC -->

## 总体介绍

### FTP简介

FTP（File Transfer Protocol）即文件传输协议，是互联网最早的传输协议之一，其最主要的功能是服务器和客户端之间的文件传输。FTP使用户可以通过一套标准的命令访问远程系统上的文件，而不需要直接登录远程系统。另外，FTP服务器还提供了如下主要功能：

-   用户分类

    默认情况下，FTP服务器依据登录情况，将用户分为实体用户（real user）、访客（guest）、匿名用户（anonymous）三类。三类用户对系统的访问权限差异较大，实体用户具有较完整的访问权限，匿名用户仅有下载资源的权限。

-   命令记录和日志文件记录

    FTP可以利用系统的syslogd记录数据，这些数据包括用户历史使用命令与用户传输数据（传输时间、文件大小等），用户可以在/var/log/中获得各项日志信息。

-   限制用户的访问范围

    FTP可以将用户的工作范围限定在用户主目录。用户通过FTP登录后系统显示的根目录就是用户主目录，这种环境被称为change root，简称chroot。这种方式可以限制用户只能访问主目录，而不允许访问/etc、/home、/usr/local等系统的重要目录，从而保护系统，使系统更安全。


### FTP使用到的端口

FTP的正常工作需要使用到多个网络端口，服务器端会使用到的端口主要有：

-   命令通道，默认端口为21
-   数据通道，默认端口为20

两者的连接发起端不同，端口21主要接收来自客户端的连接，端口20则是FTP服务器主动连接至客户端。

### vsftpd简介

由于FTP历史悠久，它采用未加密的传输方式，所以被认为是一种不安全的协议。为了更安全地使用FTP，这里介绍FTP较为安全的守护进程vsftpd（Very Secure FTP Daemon）。

之所以说vsftpd安全，是因为它最初的发展理念就是构建一个以安全为中心的FTP服务器。它具有如下特点：

-   vsftpd服务的启动身份为一般用户，具有较低的系统权限。此外，vsftpd使用chroot改变根目录，不会误用系统工具。
-   任何需要较高执行权限的vsftpd命令均由一个特殊的上层程序控制，该上层程序的权限较低，以不影响系统本身为准。
-   vsftpd整合了大部分FTP会使用到的额外命令（例如dir、ls、cd等），一般不需要系统提供额外命令，对系统来说比较安全。

## 使用vsftpd

### 安装vsftpd

使用vsftpd需要安装vsftpd软件，在已经配置yum源的情况下，通过root权限执行如下命令，即可完成vsftpd的安装。

```
# dnf install vsftpd
```

### 管理vsftpd服务

启动、停止和重启vsftpd服务，请在root权限下执行对应命令。

- 启动vsftpd服务

    ```
    # systemctl start vsftpd
    ```

    可以通过netstat命令查看通信端口21是否开启，如下显示说明vsftpd已经启动。

    ```
    # netstat -tulnp | grep 21
    tcp6       0      0 :::21                   :::*                    LISTEN      19716/vsftpd
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >如果没有**netstat**命令，可以执行**dnf install net-tools**命令安装后再使用**netstat**命令。  
    
-   停止vsftpd服务

    ```
    # systemctl stop vsftpd
    ```


-   重启vsftpd服务

    ```
    # systemctl restart vsftpd
    ```


## 配置vsftpd

### vsftpd配置文件介绍

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
<p id="p15866735202619"><a name="p15866735202619"></a><a name="p15866735202619"></a>例如userlist_enable=YES，userlist_deny=YES，则user_list中的用户都无法登录。</p>
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


### 默认配置说明

>![](public_sys-resources/icon-note.gif) **说明：**   
>文档中的配置内容仅供参考，请用户根据实际情况（例如安全加固需要）进行修改。  

openEuler系统中 ，vsftpd默认不开放匿名用户，使用vim命令查看主配置文件，其内容如下：

```
$ vim /etc/vsftpd/vsftpd.conf
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

其中各参数含义如[表2](#table18185162512499)所示。

**表 2**  参数说明

<a name="table18185162512499"></a>
<table><thead align="left"><tr id="row101877257495"><th class="cellrowborder" valign="top" width="22.78%" id="mcps1.2.3.1.1"><p id="p21871725144910"><a name="p21871725144910"></a><a name="p21871725144910"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="77.22%" id="mcps1.2.3.1.2"><p id="p19187162564910"><a name="p19187162564910"></a><a name="p19187162564910"></a>含义</p>
</th>
</tr>
</thead>
<tbody><tr id="row3187425134916"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p4968173712497"><a name="p4968173712497"></a><a name="p4968173712497"></a>anonymous_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p74773423490"><a name="p74773423490"></a><a name="p74773423490"></a>是否允许匿名用户登录，YES为允许匿名登录，NO为不允许。</p>
</td>
</tr>
<tr id="row19187225114911"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p8968237174919"><a name="p8968237174919"></a><a name="p8968237174919"></a>local_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p104782422495"><a name="p104782422495"></a><a name="p104782422495"></a>是否允许本地用户登入，YES 为允许本地用户登入，NO为不允许。</p>
</td>
</tr>
<tr id="row1418772574910"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p8968737114910"><a name="p8968737114910"></a><a name="p8968737114910"></a>write_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p81871825104914"><a name="p81871825104914"></a><a name="p81871825104914"></a>是否允许登录用户有写权限，YES为启用上传写入功能，NO为禁用。</p>
</td>
</tr>
<tr id="row018722564917"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p3969163704915"><a name="p3969163704915"></a><a name="p3969163704915"></a>local_umask</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p01856127552"><a name="p01856127552"></a><a name="p01856127552"></a>本地用户新增档案时的umask值。</p>
</td>
</tr>
<tr id="row171881425194917"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1796983716496"><a name="p1796983716496"></a><a name="p1796983716496"></a>dirmessage_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p1718872516496"><a name="p1718872516496"></a><a name="p1718872516496"></a>当用户进入某个目录时，是否显示该目录需要注意的内容，YES为显示注意内容，NO为不显示。</p>
</td>
</tr>
<tr id="row1718862584912"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p16969937194918"><a name="p16969937194918"></a><a name="p16969937194918"></a>xferlog_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p11188725164915"><a name="p11188725164915"></a><a name="p11188725164915"></a>是否记录使用者上传与下载文件的操作，YES为记录操作，NO为不记录。</p>
</td>
</tr>
<tr id="row131884252495"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1497053713498"><a name="p1497053713498"></a><a name="p1497053713498"></a>connect_from_port_20</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p0223715115717"><a name="p0223715115717"></a><a name="p0223715115717"></a>Port模式进行数据传输是否使用端口20，YES为使用端口20，NO为不使用端口20。</p>
</td>
</tr>
<tr id="row54729324499"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1797093744914"><a name="p1797093744914"></a><a name="p1797093744914"></a>xferlog_std_format</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p151867233590"><a name="p151867233590"></a><a name="p151867233590"></a>传输日志文件是否以标准xferlog格式书写，YES为使用该格式书写，NO为不使用。</p>
</td>
</tr>
<tr id="row18472163284918"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1897013717499"><a name="p1897013717499"></a><a name="p1897013717499"></a>listen</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p1047214329495"><a name="p1047214329495"></a><a name="p1047214329495"></a>设置vsftpd是否以stand alone的方式启动，YES为使用stand alone方式启动，NO为不使用该方式。</p>
</td>
</tr>
<tr id="row65527244272"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1955372410278"><a name="p1955372410278"></a><a name="p1955372410278"></a>pam_service_name</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p85531424172712"><a name="p85531424172712"></a><a name="p85531424172712"></a>支持PAM模块的管理，配置值为服务名称，例如vsftpd。</p>
</td>
</tr>
<tr id="row137361028142713"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p3737132822713"><a name="p3737132822713"></a><a name="p3737132822713"></a>userlist_enable</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p573792872715"><a name="p573792872715"></a><a name="p573792872715"></a>是否支持/etc/vsftpd/user_list文件内的账号登录控制，YES为支持，NO为不支持。</p>
</td>
</tr>
<tr id="row1712712332278"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1512763312712"><a name="p1512763312712"></a><a name="p1512763312712"></a>tcp_wrappers</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p15127033152712"><a name="p15127033152712"></a><a name="p15127033152712"></a>是否支持TCP Wrappers的防火墙机制，YES为支持，NO为不支持。</p>
</td>
</tr>
<tr id="row163601306111"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.3.1.1 "><p id="p1597123717499"><a name="p1597123717499"></a><a name="p1597123717499"></a>listen_ipv6</p>
</td>
<td class="cellrowborder" valign="top" width="77.22%" headers="mcps1.2.3.1.2 "><p id="p0361200613"><a name="p0361200613"></a><a name="p0361200613"></a>是否侦听IPv6的FTP请求，YES为侦听，NO为不侦听。listen和listen_ipv6不能同时开启。</p>
</td>
</tr>
</tbody>
</table>

### 配置本地时间

#### 概述

openEuler系统中，vsftpd默认使用GMT时间（格林尼治时间），可能和本地时间不一致，例如GMT时间比北京时间晚8小时，请用户改为本地时间，否则服务器和客户端时间不一致，在上传下载文件时可能引起错误。

#### 设置方法

在root权限下设置vsftpd时间为本地时间的操作步骤如下：

1.  打开配置文件vsftpd.conf，将参数use\_localtime的参数值改为YES。命令如下：

    ```
    # vim /etc/vsftpd/vsftpd.conf
    ```

    配置内容如下：

    ```
    use_localtime=YES
    ```

2.  重启vsftpd服务。

    ```
    # systemctl restart vsftpd
    ```

3.  设置vsftpd服务开机启动。

    ```
    # systemctl enable vsftpd
    ```


### 配置欢迎信息

正常使用vsftpd服务，需要存在欢迎信息文件。在root权限下设置vsftp的欢迎信息welcome.txt文件的操作步骤如下：

1.  打开配置文件vsftpd.conf，加入欢迎信息文件配置内容后保存退出。

    ```
    # vim /etc/vsftpd/vsftpd.conf
    ```

    需要加入的配置行如下：

    ```
    banner_file=/etc/vsftpd/welcome.txt
    ```

2.  建立欢迎信息。即打开welcome.txt文件，写入欢迎信息后保存退出。

    ```
    # vim /etc/vsftpd/welcome.txt
    ```

    欢迎信息举例如下：

    ```
    Welcome to this FTP server!
    ```


### 配置系统帐号登录权限

一般情况下，用户需要限制部分帐号的登录权限。用户可根据需要进行配置。

限制系统帐号登录的文件有两个，默认如下：

-   /etc/vsftpd/ftpusers：受/etc/pam.d/vsftpd文件的设置影响，由PAM模块掌管。
-   /etc/vsftpd/user\_list：由vsftpd.conf的userlist\_file设置，由vsftpd主动提供。

两个文件的必须同时存在且内容相同，请参考/etc/passwd文件，将UID小于500的帐号写入这两个文件，每一行代表一个帐号。

如果用户需要限制系统帐号登录，需要在root权限下将对应帐号添加到/etc/vsftpd/ftpusers和/etc/vsftpd/user\_list。

打开user\_list可以查看当前文件中包含的帐号信息，命令和回显如下：

```
$ vim /etc/vsftpd/user_list
root
bin
daemon
adm
lp
sync
shutdown
halt
mail
news
uucp
operator
games
nobody
```

## 验证FTP服务是否搭建成功

可以使用openEuler提供的FTP客户端进行验证。命令和回显如下，根据提示输入用户名（用户为系统中存在的用户）和密码。如果显示Login successful，即说明FTP服务器搭建成功。

```
$ ftp localhost
Trying 127.0.0.1...
Connected to localhost (127.0.0.1).
220-Welcome to this FTP server!
220
Name (localhost:root): USERNAME
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> bye
221 Goodbye.
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>如果没有**ftp**命令，可以在root权限下执行**dnf install ftp**命令安装后再使用**ftp**命令。  



## 配置防火墙

如果要将FTP开放给Internet使用，需要在root权限下对防火墙和SElinux进行设置。

```
# firewall-cmd --add-service=ftp --permanent
success
# firewall-cmd --reload
success
# setsebool -P ftpd_full_access on
```

## 传输文件

### 概述

这里给出vsftpd服务启动后，如何进行文件传输的指导。

### 连接服务器

**命令格式**

**ftp**  \[_hostname_  |  _ip-address_\]

其中hostname为服务器名称，ip-address为服务器IP地址。

**操作说明**

在openEuler系统的命令行终端，执行如下命令：

```
$ ftp ip-address
```

根据提示输入用户名和密码，认证通过后显示如下，说明ftp连接成功，此时进入了连接到的服务器目录。

```
ftp>
```

在该提示符下，可以输入不同的命令进行相关操作：

-   显示服务器当前路径

    ```
    ftp>pwd
    ```

-   显示本地路径，用户可以将该路径下的文件上传到FTP服务器对应位置

    ```
    ftp>lcd
    ```

-   退出当前窗口，返回本地Linux终端

    ```
    ftp>！
    ```


### 下载文件

通常使用get或mget命令下载文件。

**get使用方法**

-   功能说明：将文件从远端主机中传送至本地主机中
-   命令格式：**get**  \[_remote-file_\] \[_local-file_\]

    其中  _remote-file_  为远程文件，_local-file_  为本地文件

-   示例：获取远程服务器上的/home/openEuler/openEuler.htm文件到本地/home/myopenEuler/，并改名为myopenEuler.htm，命令如下：

    ```
    ftp> get /home/openEuler/openEuler.htm /home/myopenEuler/myopenEuler.htm
    ```


**mget使用方法**

-   功能说明：从远端主机接收一批文件至本地文件
-   命令格式：**mget**  \[_remote-file_\]

    其中  _remote-file_  为远程文件

-   示例：获取服务器上/home/openEuler/目录下的所有文件，命令如下：

    ```
    ftp> cd /home/openEuler/
    ftp> mget *.*
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >-   此时每下载一个文件，都会有提示信息。如果要屏蔽提示信息，则在 **mget \*.\*** 命令前先执行**prompt off**  
    >-   文件都被下载到Linux主机的当前目录下。比如，在/home/myopenEuler/下运行的ftp命令，则文件都下载到/home/myopenEuler/下。  


### 上传文件

通常使用put或mput命令上传文件。

**put使用方法**

-   功能说明：将本地的一个文件传送到远端主机中
-   命令格式：**put**  \[_local-file_\] \[_remote-file_\]

    其中  _remote-file_  为远程文件，_local-file_  为本地文件

-   示例：将本地的myopenEuler.htm传送到远端主机/home/openEuler/，并改名为openEuler.htm，命令如下：

    ```
    ftp> put myopenEuler.htm /home/openEuler/openEuler.htm
    ```


**mput使用方法**

-   功能说明：将本地主机中一批文件传送至远端主机
-   命令格式：**mput**  \[_local-file_\]

    其中  _local-file_  为本地文件

-   示例：将本地当前目录下所有htm文件上传到服务器/home/openEuler/下，命令如下：

    ```
    ftp> cd /home/openEuler/
    ftp> mput *.htm
    ```


### 删除文件

通常使用delete或mdelete命令删除文件。

**delete使用方法**

-   功能说明：删除远程服务器上的一个或多个文件
-   命令格式：**delete**  \[_remote-file_\]

    其中  _remote-file_  为远程文件

-   示例：删除远程服务器上/home/openEuler/下的openEuler.htm文件，命令如下：

    ```
    ftp> cd /home/openEuler/
    ftp> delete openEuler.htm
    ```

**mdelete使用方法**

-   功能说明：删除远程服务器上的文件，常用于批量删除
-   命令格式：**mdelete**  \[_remote-file_\]

    其中  _remote-file_  为远程文件

-   示例：删除远程服务器上/home/openEuler/下所有a开头的文件，命令如下：

    ```
    ftp> cd /home/openEuler/
    ftp> mdelete a*
    ```


### 断开服务器

断开与服务器的连接，使用bye命令，如下：

```
ftp> bye 
```
