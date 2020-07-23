# 搭建web服务器
<!-- TOC -->

- [搭建web服务器](#搭建web服务器)
    - [Apache服务器](#apache服务器)
        - [概述](#概述)
        - [管理httpd](#管理httpd)
        - [配置文件说明](#配置文件说明)
        - [管理模块和SSL](#管理模块和ssl)
        - [验证web服务是否搭建成功](#验证web服务是否搭建成功)
    - [Nginx服务器](#nginx服务器)
        - [概述](#概述-1)
        - [安装](#安装)
        - [管理nginx](#管理nginx)
        - [配置文件说明](#配置文件说明-1)
        - [管理模块](#管理模块)
        - [验证web服务是否搭建成功](#验证web服务是否搭建成功-1)

<!-- /TOC -->

## Apache服务器
### 概述

Web（World Wide Web）是目前最常用的Internet协议之一。目前在Unix-Like系统中的web服务器主要通过Apache服务器软件实现。为了实现运营动态网站，产生了LAMP（Linux + Apache +MySQL + PHP）。web服务可以结合文字、图形、影像以及声音等多媒体，并支持超链接（Hyperlink）的方式传输信息。

openEuler系统中的web服务器版本是Apache HTTP服务器2.4版本，即httpd，一个由Apache软件基金会发展而来的开源web服务器。

### 管理httpd

#### 概述

通过systemctl工具，可以对httpd服务进行管理，包括启动、停止、重启服务，以及查看服务状态等。本章介绍Apache HTTP服务的管理操作，以指导用户使用。

#### 前提条件

-   为了能够使用Apache HTTP服务，请确保您的系统中已经安装httpd服务的rpm包。在root权限下执行如下命令进行安装：

    ```
    # dnf install httpd
    ```

    更多关于管理服务的内容，请参见[管理服务](管理服务.html)。

-   启动、停止和重启httpd服务，需要使用root权限。

#### 启动服务

-   启动并运行httpd服务，命令如下：

    ```
    # systemctl start httpd
    ```


-   假如希望在系统启动时，httpd服务自动启动，则命令和回显如下：

    ```
    # systemctl enable httpd
    Created symlink /etc/systemd/system/multi-user.target.wants/httpd.service → /usr/lib/systemd/system/httpd.service.
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>假如正在运行的Apache HTTP服务器作为一个安全服务器，系统开机启动后需要密码，这个密码使用的是加密的私有SSL密钥。  

#### 停止服务

-   停止运行的httpd服务，命令如下：

    ```
    # systemctl stop httpd
    ```

-   如果希望防止服务在系统开机阶段自动开启，命令和回显如下：

    ```
    # systemctl disable httpd
    Removed /etc/systemd/system/multi-user.target.wants/httpd.service.
    ```


#### 重启服务

重启服务有三种方式：

-   完全重启服务

    ```
    # systemctl restart httpd
    ```

    该命令会停止运行的httpd服务并且立即重新启动它。一般在服务安装以后或者去除一个动态加载的模块（例如PHP）时使用这个命令。

-   重新加载配置

    ```
    # systemctl reload httpd
    ```

    该命令会使运行的httpd服务重新加载它的配置文件。任何当前正在处理的请求将会被中断，从而造成客户端浏览器显示一个错误消息或者重新渲染部分页面。

-   重新加载配置而不影响激活的请求

    ```
    # apachectl graceful
    ```

    该命令会使运行的httpd服务重新加载它的配置文件。任何当前正在处理的请求将会继续使用旧的配置文件。


#### 验证服务状态

验证httpd服务是否正在运行

```
$ systemctl is-active httpd
```

回显为“active”说明服务处于运行状态。

### 配置文件说明

当httpd服启动后，默认情况下它会读取如[表1](#table24341012096)所示的配置文件。

**表 1**  配置文件说明

<a name="table24341012096"></a>
<table><thead align="left"><tr id="row2435101210918"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p143513128912"><a name="p143513128912"></a><a name="p143513128912"></a>文件</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1543515125910"><a name="p1543515125910"></a><a name="p1543515125910"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row94354128920"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p18435151218920"><a name="p18435151218920"></a><a name="p18435151218920"></a>/etc/httpd/conf/httpd.conf</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p943511216915"><a name="p943511216915"></a><a name="p943511216915"></a>主要的配置文件</p>
</td>
</tr>
<tr id="row13435412692"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8435161215912"><a name="p8435161215912"></a><a name="p8435161215912"></a>/etc/httpd/conf.d</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1042116010591"><a name="p1042116010591"></a><a name="p1042116010591"></a>配置文件的辅助目录，这些配置文件也被包含在主配置文件当中</p>
<p id="p143512126919"><a name="p143512126919"></a><a name="p143512126919"></a>一个配置文件的辅助目录被包含在主要的配置文件中</p>
</td>
</tr>
</tbody>
</table>

虽然默认配置可以适用于多数情况，但是用户至少需要熟悉里面的一些重要配置项。配置文件修改完成后，可以在root权限下使用如下命令检查配置文件可能出现的语法错误。

```
# apachectl configtest
```

如果回显如下，说明配置文件语法正确。

```
Syntax OK
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   在修改配置文件之前，请先备份原始文件，以便出现问题时能够快速恢复配置文件。  
>-   需要重启web服务，才能使修改后的配置文件生效。  

### 管理模块和SSL

#### 概述

httpd服务是一个模块化的应用，它和许多动态共享对象DSO（Dynamic Shared Objects）一起分发。动态共享对象DSO，在必要情况下，可以在运行时被动态加载或卸载。服务器操作系统中这些模块位于/usr/lib64/httpd/modules/目录下。本节介绍如何加载和写入模块。

#### 加载模块

为了加载一个特殊的DSO模块，在配置文件中使用加载模块指示。独立软件包提供的模块一般在/etc/httpd/conf.modules.d目录下有他们自己的配置文件。

例如，加载asis DSO模块的操作步骤如下：

1.  在/etc/httpd/conf.modules.d/00-optional.conf文件中，使用root权限取消注释如下配置行。

    ```
    LoadModule asis_module modules/mod_asis.so
    ```

2.  加载完成后，请使用root权限重启httpd服务以便于重新加载配置文件。

    ```
    # systemctl restart httpd
    ```

3.  加载完成后，在root权限下使用httpd -M的命令查看是否已经加载了asis DSO模块。

    ```
    # httpd -M | grep asis
    ```

    回显如下，说明asis DSO模块加载成功。

    ```
    asis_module (shared)
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>**httpd 的常用命令**  
>
>-   httpd -v : 查看httpd的版本号。  
>-   httpd -l：查看编译进httpd程序的静态模块。  
>-   httpd -M：查看已经编译进httpd程序的静态模块和已经加载的动态模块。  

#### SSL介绍

安全套接层SSL（Secure Sockets Layer）是一个允许服务端和客户端之间进行安全通信的加密协议。其中，传输层安全性协议TLS（Transport Layer Security）为网络通信提供了安全性和数据完整性保障。openEuler支持Mozilla NSS（Network Security Services）作为安全性协议TLS进行配置。加载SSL的操作步骤如下：

1.  在root权限下安装mod\_ssl的rpm包。

    ```
    # dnf install mod_ssl
    ```

2.  安装完成后，请在root权限下重启httpd服务以便于重新加载配置文件。

    ```
    # systemctl restart httpd
    ```

3.  加载完成后，在root权限下使用httpd -M的命令查看是否已经加载了SSL。

    ```
    # httpd -M | grep ssl
    ```

    回显如下，说明SSL已加载成功。

    ```
    ssl_module (shared)
    ```


### 验证web服务是否搭建成功

Web服务器搭建完成后，可以通过如下方式验证是否搭建成功。

1.  在root权限下查看服务器的IP地址，命令如下：

    ```
    # ifconfig
    ```

    回显信息如下，说明服务器IP为 192.168.1.60。

    ```
    enp3s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
    inet 192.168.1.60  netmask 255.255.255.0  broadcast 192.168.1.255
    inet6 fe80::5054:ff:fe95:499f  prefixlen 64  scopeid 0x20<link>
    ether 52:54:00:95:49:9f  txqueuelen 1000  (Ethernet)
    RX packets 150713207  bytes 49333673733 (45.9 GiB)
    RX errors 0  dropped 43  overruns 0  frame 0
    TX packets 2246438  bytes 203186675 (193.7 MiB)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
    
    enp4s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
    ether 52:54:00:7d:80:9e  txqueuelen 1000  (Ethernet)
    RX packets 149937274  bytes 44652889185 (41.5 GiB)
    RX errors 0  dropped 1102561  overruns 0  frame 0
    TX packets 0  bytes 0 (0.0 B)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
    
    lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
    inet 127.0.0.1  netmask 255.0.0.0
    inet6 ::1  prefixlen 128  scopeid 0x10<host>
    loop  txqueuelen 1000  (Local Loopback)
    RX packets 37096  bytes 3447369 (3.2 MiB)
    RX errors 0  dropped 0  overruns 0  frame 0
    TX packets 37096  bytes 3447369 (3.2 MiB)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
    ```

2.  在root权限下配置防火墙：

    ```
    # firewall-cmd --add-service=http --permanent
    success
    # firewall-cmd --reload
    success
    ```

3.  验证web服务器是否搭建成功，用户可选择Linux或Windows系统进行验证。
    -   使用Linux系统验证

        执行如下命令，查看是否可以访问网页信息，服务搭建成功时，该网页可以正常访问。

        ```
        $ curl http://192.168.1.60
        ```

        执行如下命令，查看命令返回值是否为0，返回值为0，说明httpd服务器搭建成功。

        ```
        $ echo $?
        ```

    -   使用Windows系统验证

        打开浏览器，在地址栏输入如下地址，如果能正常访问网页，说明httpd服务器搭建成功。

        http://192.168.1.60

        如果修改了端口号，输入地址格式如下：

        http://192.168.1.60:端口号



## Nginx服务器
### 概述

Nginx 是一款轻量级的 Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，其特点是占有内存少，并发能力强，支持FastCGI、SSL、Virtual Host、URL Rewrite、Gzip等功能，并且支持很多第三方的模块扩展。

### 安装

1.  配置本地yum源，详细信息请参考[搭建repo服务器](搭建repo服务器.html)。
2.  清除缓存。

    ```
    $ dnf clean all
    ```

3.  创建缓存。

    ```
    $ dnf makecache
    ```

4.  在root权限下安装nginx服务。

    ```
    # dnf install nginx
    ```

5.  查看安装后的rpm包。

    ```
    $ dnf list all | grep nginx
    ```


### 管理nginx

#### 概述

通过systemctl工具，可以对nginx服务进行管理，包括启动、停止、重启服务，以及查看服务状态等。本章介绍nginx服务的管理操作，以指导用户使用。

#### 前提条件

-   为了能够使用nginx服务，请确保您的系统中已经安装nginx服务。若未安装，可参考[安装](#安装)进行安装。

    更多关于管理服务的内容，请参见[管理服务](管理服务.html)。

-   启动、停止和重启nginx服务，需要使用root权限。

#### 启动服务

-   启动并运行nginx服务，命令如下：

    ```
    # systemctl start nginx
    ```


-   假如希望在系统启动时，nginx服务自动启动，则命令和回显如下：

    ```
    # systemctl enable nginx
    Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /usr/lib/systemd/system/nginx.service.
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>假如正在运行的nginx服务器作为一个安全服务器，系统开机启动后需要密码，这个密码使用的是加密的私有SSL密钥。  

#### 停止服务

-   停止运行的nginx服务，命令如下：

    ```
    # systemctl stop nginx
    ```

-   如果希望防止服务在系统开机阶段自动开启，命令和回显如下：

    ```
    # systemctl disable nginx
    Removed /etc/systemd/system/multi-user.target.wants/nginx.service.
    ```


#### 重启服务

重启服务有三种方式：

-   完全重启服务

    ```
    # systemctl restart nginx
    ```

    该命令会停止运行的nginx服务并且立即重新启动它。一般在服务安装以后或者去除一个动态加载的模块（例如PHP）时使用这个命令。

-   重新加载配置

    ```
    # systemctl reload nginx
    ```

    该命令会使运行的nginx服务重新加载它的配置文件。任何当前正在处理的请求将会被中断，从而造成客户端浏览器显示一个错误消息或者重新渲染部分页面。

-   平滑重启nginx

    ```
    # kill -HUP 主进程ID
    ```

    该命令会使运行的nginx服务重新加载它的配置文件。任何当前正在处理的请求将会继续使用旧的配置文件。


#### 验证服务状态

验证nginx服务是否正在运行

```
$ systemctl is-active nginx
```

回显为“active”说明服务处于运行状态。

### 配置文件说明

当nginx服启动后，默认情况下它会读取如[表2](#table24341012096)所示的配置文件。

**表 2**  配置文件说明

<a name="table24341012096"></a>
<table><thead align="left"><tr id="row2435101210918"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p143513128912"><a name="p143513128912"></a><a name="p143513128912"></a>文件</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1543515125910"><a name="p1543515125910"></a><a name="p1543515125910"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row94354128920"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p18435151218920"><a name="p18435151218920"></a><a name="p18435151218920"></a>/etc/nginx/nginx.conf</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p943511216915"><a name="p943511216915"></a><a name="p943511216915"></a>主要的配置文件</p>
</td>
</tr>
<tr id="row13435412692"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8435161215912"><a name="p8435161215912"></a><a name="p8435161215912"></a>/etc/nginx/conf.d</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1042116010591"><a name="p1042116010591"></a><a name="p1042116010591"></a>配置文件的辅助目录，这些配置文件也被包含在主配置文件当中</p>
<p id="p143512126919"><a name="p143512126919"></a><a name="p143512126919"></a>一个配置文件的辅助目录被包含在主要的配置文件中</p>
</td>
</tr>
</tbody>
</table>

虽然默认配置可以适用于多数情况，但是用户至少需要熟悉里面的一些重要配置项。配置文件修改完成后，可以在root权限下使用如下命令检查配置文件可能出现的语法错误。

```
# nginx -t
```

如果回显信息中有“syntax is ok”，说明配置文件语法正确。

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   在修改配置文件之前，请先备份原始文件，以便出现问题时能够快速恢复配置文件。  
>-   需要重启web服务，才能使修改后的配置文件生效。  

### 管理模块

#### 概述

nginx服务是一个模块化的应用，它和许多动态共享对象DSO（Dynamic Shared Objects）一起分发。动态共享对象DSO，在必要情况下，可以在运行时被动态加载或卸载。服务器操作系统中这些模块位于/usr/lib64/nginx/modules/目录下。本节介绍如何加载和写入模块。

#### 加载模块

为了加载一个特殊的DSO模块，在配置文件中使用加载模块指示。独立软件包提供的模块一般在/usr/share/nginx/modules目录下有他们自己的配置文件。

因openEuler操作系统中使用dnf install nginx安装nginx是会自动加载DSO。

### 验证web服务是否搭建成功

Web服务器搭建完成后，可以通过如下方式验证是否搭建成功。

1.  在root权限下查看服务器的IP地址，命令如下：

    ```
    # ifconfig
    ```

    回显信息如下，说明服务器IP为 192.168.1.60。

    ```
    enp3s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
    inet 192.168.1.60  netmask 255.255.255.0  broadcast 192.168.1.255
    inet6 fe80::5054:ff:fe95:499f  prefixlen 64  scopeid 0x20<link>
    ether 52:54:00:95:49:9f  txqueuelen 1000  (Ethernet)
    RX packets 150713207  bytes 49333673733 (45.9 GiB)
    RX errors 0  dropped 43  overruns 0  frame 0
    TX packets 2246438  bytes 203186675 (193.7 MiB)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
    
    enp4s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
    ether 52:54:00:7d:80:9e  txqueuelen 1000  (Ethernet)
    RX packets 149937274  bytes 44652889185 (41.5 GiB)
    RX errors 0  dropped 1102561  overruns 0  frame 0
    TX packets 0  bytes 0 (0.0 B)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
    
    lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
    inet 127.0.0.1  netmask 255.0.0.0
    inet6 ::1  prefixlen 128  scopeid 0x10<host>
    loop  txqueuelen 1000  (Local Loopback)
    RX packets 37096  bytes 3447369 (3.2 MiB)
    RX errors 0  dropped 0  overruns 0  frame 0
    TX packets 37096  bytes 3447369 (3.2 MiB)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
    ```

2.  在root权限下配置防火墙：

    ```
    # firewall-cmd --add-service=http --permanent
    success
    # firewall-cmd --reload
    success
    ```

3.  验证web服务器是否搭建成功，用户可选择Linux或Windows系统进行验证。
    -   使用Linux系统验证

        执行如下命令，查看是否可以访问网页信息，服务搭建成功时，该网页可以正常访问。

        ```
        $ curl http://192.168.1.60
        ```

        执行如下命令，查看命令返回值是否为0，返回值为0，说明nginx服务器搭建成功。

        ```
        $ echo $?
        ```

    -   使用Windows系统验证

        打开浏览器，在地址栏输入如下地址，如果能正常访问网页，说明nginx服务器搭建成功。

        http://192.168.1.60

        如果修改了端口号，输入地址格式如下：

        http://192.168.1.60:端口号


