# 管理httpd<a name="ZH-CN_TOPIC_0184749980"></a>

## 概述<a name="section3107702212"></a>

通过systemctl工具，可以对httpd服务进行管理，包括启动、停止、重启服务，以及查看服务状态等。本章介绍Apache HTTP服务的管理操作，以指导用户使用。

## 前提条件<a name="section131515451836"></a>

-   为了能够使用Apache HTTP服务，请确保您的系统中已经安装httpd服务的rpm包。安装命令如下：

    ```
    # dnf install httpd
    ```

    更多关于管理服务的内容，请参见“管理服务”章节。

-   启动、停止和重启httpd服务，需要使用root权限。

## 启动服务<a name="section11706181733216"></a>

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

## 停止服务<a name="section7891712153914"></a>

-   停止运行的httpd服务，命令如下：

    ```
    # systemctl stop httpd
    ```

-   如果希望防止服务在系统开机阶段自动开启，命令和回显如下：

    ```
    # systemctl disable httpd
    Removed /etc/systemd/system/multi-user.target.wants/httpd.service.
    ```


## 重启服务<a name="section8969014114210"></a>

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


## 验证服务状态<a name="section149961826829"></a>

验证httpd服务是否正在运行

```
# systemctl is-active httpd
```

回显为“active”说明服务处于运行状态。

