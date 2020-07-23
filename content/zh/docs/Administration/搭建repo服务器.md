# 搭建repo服务器

>![](public_sys-resources/icon-note.gif) **说明：**   
>openEuler提供了多种repo源供用户在线使用，各repo源含义可参考[系统安装](../Releasenotes/系统安装.md)。若用户无法在线获取openEuler repo源，则可使用openEuler提供的ISO发布包创建为本地openEuler repo源。本章节中以openEuler-20.03-LTS-aarch64-dvd.iso发布包为例，请根据实际需要的ISO发布包进行修改。

<!-- TOC -->

- [搭建repo服务器](#搭建repo服务器)
    - [概述](#概述)
    - [创建/更新本地repo源](#创建更新本地repo源)
        - [获取ISO发布包](#获取iso发布包)
        - [挂载ISO创建repo源](#挂载iso创建repo源)
        - [创建本地repo源](#创建本地repo源)
        - [更新repo源](#更新repo源)
    - [部署远端repo源](#部署远端repo源)
        - [nginx安装与配置](#nginx安装与配置)
        - [启动nginx服务](#启动nginx服务)
        - [repo源部署](#repo源部署)
    - [使用repo源](#使用repo源)
        - [repo配置为yum源（软件源）](#repo配置为yum源软件源)
        - [repo优先级](#repo优先级)
        - [dnf相关命令](#dnf相关命令)

<!-- /TOC -->

## 概述

将openEuler提供的ISO发布包openEuler-20.03-LTS-aarch64-dvd.iso创建为repo源，如下以使用nginx进行repo源部署，提供http服务为例进行说明。

## 创建/更新本地repo源

使用mount挂载，将openEuler的ISO发布包openEuler-20.03-LTS-aarch64-dvd.iso创建为repo源，并能够对repo源进行更新。
### 获取ISO发布包

请从如下网址获取openEuler的ISO发布包：

[https://repo.openeuler.org/openEuler-20.03-LTS/ISO/](https://repo.openeuler.org/openEuler-20.03-LTS/ISO/)

### 挂载ISO创建repo源

在root权限下使用mount命令挂载ISO发布包。

示例如下：

```
# mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso /mnt/
```

挂载好的mnt目录如下：

```
.
│── boot.catalog
│── docs
│── EFI
│── images
│── Packages
│── repodata
│── TRANS.TBL
└── RPM-GPG-KEY-openEuler
```

其中，Packages为rpm包所在的目录，repodata为repo源元数据所在的目录，RPM-GPG-KEY-openEuler为openEuler的签名公钥。

### 创建本地repo源

可以拷贝ISO发布包中相关文件至本地目录以创建本地repo源，示例如下：

```
# mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso /mnt/
$ mkdir -p ~/srv/repo/
$ cp -r /mnt/Packages ~/srv/repo/
$ cp -r /mnt/repodata ~/srv/repo/
$ cp -r /mnt/RPM-GPG-KEY-openEuler ~/srv/repo/
```

从而本地repo目录如下：

```
.
│── Packages
│── repodata
└── RPM-GPG-KEY-openEuler
```

Packages为rpm包所在的目录，repodata为repo源元数据所在的目录，RPM-GPG-KEY-openEuler为openEuler的签名公钥。

### 更新repo源

更新repo源有两种方式：

-   通过新版本的ISO更新已有的repo源，与创建repo源的方式相同，即挂载ISO发布包或重新拷贝ISO发布包至本地目录。

-   在repo源的Packages目录下添加rpm包，然后通过createrepo命令更新repo源

    ```
    $ createrepo --update --workers=10 ~/srv/repo
    ```

    其中，\-\-update表示更新，\-\-workers表示线程数，可自定义。
    
    >![](public_sys-resources/icon-note.gif) **说明：**   
    >若命令打印信息为“createrepo：未找到命令”，则表示未安装createrepo软件，可在root权限下执行**dnf install createrepo**进行安装。  


## 部署远端repo源

安装openEuler操作系统，在openEuler上通过nginx部署repo源。
### nginx安装与配置

1.  请自行下载nginx工具并在root权限下安装nginx。
2.  安装nginx之后，在root权限下配置/etc/nginx/nginx.conf。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >文档中的配置内容仅供参考，请用户根据实际情况（例如安全加固需要）进行配置。  

    ```
    user  nginx;
    worker_processes  auto;                          # 建议设置为core-1
    error_log  /var/log/nginx/error.log  warn;       # log存放位置
    pid        /var/run/nginx.pid;
    
    events {
        worker_connections  1024;
    }
    
    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;
    
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
    
        access_log  /var/log/nginx/access.log  main;
        sendfile        on;
        keepalive_timeout  65;
    
        server {
            listen       80;
            server_name  localhost;                 # 服务器名（url）
            client_max_body_size 4G;
            root         /usr/share/nginx/repo;                 # 服务默认目录
    
            location / {
                autoindex            on;            # 开启访问目录下层文件
                autoindex_exact_size on;
                autoindex_localtime  on; 
            }
    
        }
    
    }
    ```


### 启动nginx服务

1.  在root权限下通过systemd启动nginx服务：

    ```
    # systemctl enable nginx
    # systemctl start nginx
    ```

2.  nginx是否启动成功可通过下面命令查看：

    ```
    $ systemctl status nginx
    ```

    - [图1](#zh-cn_topic_0151920971_fd25e3f1d664b4087ae26631719990a71)表示nginx服务启动成功

        **图 1**  nginx服务启动成功<a name="zh-cn_topic_0151920971_fd25e3f1d664b4087ae26631719990a71"></a>  
        ![](figures/nginx服务启动成功.png "nginx服务启动成功")

    - 若nginx服务启动失败，查看错误信息：

    ```
    $ systemctl status nginx.service --full
    ```

        **图 2**  nginx服务启动失败<a name="zh-cn_topic_0151920971_f1f9f3d086e454b9cba29a7cae96a4c54"></a>  
        ![](figures/nginx服务启动失败.png "nginx服务启动失败")

    如[图2](#zh-cn_topic_0151920971_f1f9f3d086e454b9cba29a7cae96a4c54)所示nginx服务创建失败，是由于目录/var/spool/nginx/tmp/client\_body创建失败，在root权限下手动进行创建，类似的问题也这样处理：

    ```
    # mkdir -p /var/spool/nginx/tmp/client_body
    # mkdir -p /var/spool/nginx/tmp/proxy
    # mkdir -p /var/spool/nginx/tmp/fastcgi
    # mkdir -p /usr/share/nginx/uwsgi_temp
    # mkdir -p /usr/share/nginx/scgi_temp
    ```


### repo源部署

1.  在root权限下创建nginx配置文件/etc/nginx/nginx.conf中指定的目录/usr/share/nginx/repo：

    ```
    # mkdir -p /usr/share/nginx/repo
    ```

2.  在root权限下修改目录/usr/share/nginx/repo的权限：

    ```
    # chmod -R 755 /usr/share/nginx/repo
    ```

3.  设置防火墙规则，开启nginx设置的端口（此处为80端口），在root权限下通过firewall设置端口开启：

    ```
    # firewall-cmd --add-port=80/tcp --permanent
    # firewall-cmd --reload
    ```

    在root权限下查询80端口是否开启成功，输出为yes则表示80端口开启成功：

    ```
    # firewall-cmd --query-port=80/tcp
    ```

    也可在root权限下通过iptables来设置80端口开启：

    ```
    # iptables -I INPUT -p tcp --dport 80 -j ACCEPT
    ```

4.  nginx服务设置好之后，即可通过ip直接访问网页，如[图3](#zh-cn_topic_0151921017_fig1880404110396)：

    **图 3**  nginx部署成功<a name="zh-cn_topic_0151921017_fig1880404110396"></a>  
    ![](figures/nginx部署成功.png "nginx部署成功")

5.  通过下面几种方式将repo源放入到/usr/share/nginx/repo下：
    - 在root权限下拷贝镜像中相关文件至/usr/share/nginx/repo下，并修改目录权限。

        ```
        # mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso  /mnt/
        # cp -r /mnt/Packages /usr/share/nginx/repo
        # cp -r /mnt/repodata /usr/share/nginx/repo
        # cp -r /mnt/RPM-GPG-KEY-openEuler /usr/share/nginx/repo
        # chmod -R 755 /usr/share/nginx/repo
        ```
    
        openEuler-20.03-LTS-aarch64-dvd.iso存放在/home/openEuler目录下。
    
    - 使用root在/usr/share/nginx/repo下创建repo源的软链接。
    
        ```
        # ln -s /mnt /usr/share/nginx/repo/os
        ```
    
        /mnt为已经创建好的repo源，/usr/share/nginx/repo/os将指向/mnt。



## 使用repo源

repo可配置为yum源，yum（全称为 Yellow dog Updater, Modified）是一个Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载和安装。
### repo配置为yum源（软件源）

构建好的repo可以配置为yum源使用，在/etc/yum.repos.d/目录下使用root权限创建\*\*\*.repo的配置文件（必须以.repo为扩展名），分为本地和http服务器配置yum源两种方式：

-   配置本地yum源

    在/etc/yum.repos.d目录下创建openEuler.repo文件，使用构建的本地repo源作为yum源，openEuler.repo的内容如下：

    ```
    [base]
    name=base
    baseurl=file:///home/openEuler/srv/repo
    enabled=1
    gpgcheck=1
    gpgkey=file:///home/openEuler/srv/repo/RPM-GPG-KEY-openEuler
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    > - \[*repoid*\]中的repoid为软件仓库（repository）的ID号，所有.repo配置文件中的各repoid不能重复，必须唯一。示例中repoid设置为**base**。
    > - name为软件仓库描述的字符串。
    > - baseurl为软件仓库的地址。
    > - enabled为是否启用该软件源仓库，可选值为1和0。默认值为1，表示启用该软件源仓库。
    > - gpgcheck可设置为1或0，1表示进行gpg（GNU Private Guard）校验，0表示不进行gpg校验，gpgcheck可以确定rpm包的来源是有效和安全的。  
    > - gpgkey为验证签名用的公钥。  

-   配置http服务器yum源

    在/etc/yum.repos.d目录下创建openEuler.repo文件。
	
	-   若使用用户部署的http服务端的repo源作为yum源，openEuler.repo的内容如下：

        ```
        [base]
        name=base
        baseurl=http://192.168.139.209/
        enabled=1
        gpgcheck=1
        gpgkey=http://192.168.139.209/RPM-GPG-KEY-openEuler
        ```

        >![](public_sys-resources/icon-note.gif) **说明：**   
        >“192.168.139.209”为示例地址，请用户根据实际情况进行配置。  

	-   若使用openEuler提供的openEuler repo源作为yum源，以AArch64架构的OS repo源为例，openEuler.repo的内容如下：
	
        ```
        [base]
        name=base
        baseurl=http://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/
        enabled=1
        gpgcheck=1
        gpgkey=http://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/RPM-GPG-KEY-openEuler
        ```



### repo优先级

当有多个repo源时，可通过在.repo文件的priority参数设置repo的优先级（如果不设置，默认优先级是99，当相同优先级的源中存在相同rpm包时，会安装最新的版本）。其中，1为最高优先级，99为最低优先级，如给openEuler.repo配置优先级为2：

```
[base]
name=base
baseurl=http://192.168.139.209/
enabled=1
priority=2
gpgcheck=1
gpgkey=http://192.168.139.209/RPM-GPG-KEY-openEuler
```

### dnf相关命令

dnf命令在安装升级时能够自动解析包的依赖关系，一般的使用方式如下：

```
dnf <command> <packages name>
```

常用的命令如下：

-   安装，需要在root权限下执行。

    ```
    # dnf install <packages name>
    ```

-   升级，需要在root权限下执行。

    ```
    # dnf update <packages name>
    ```

-   回退，需要在root权限下执行。

    ```
    # dnf downgrade <packages name>
    ```

-   检查更新

    ```
    $ dnf check-update
    ```

-   卸载，需要在root权限下执行。

    ```
    # dnf remove <packages name>
    ```

-   查询

    ```
    $ dnf search <packages name>
    ```

-   本地安装，需要在root权限下执行。

    ```
    # dnf localinstall <absolute path to package name>
    ```

-   查看历史记录

    ```
    $ dnf history
    ```

-   清除缓存目录

    ```
    $ dnf clean all
    ```

-   更新缓存

    ```
    $ dnf makecache
    ```

