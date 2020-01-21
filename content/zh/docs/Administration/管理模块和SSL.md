# 管理模块和SSL<a name="ZH-CN_TOPIC_0184750002"></a>

## 概述<a name="section1231973321819"></a>

httpd服务是一个模块化的应用，它和许多动态共享对象DSO（Dynamic Shared Objects）一起分发。动态共享对象DSO，在必要情况下，可以在运行时被动态加载或卸载。服务器操作系统中这些模块位于/usr/lib64/httpd/modules/目录下。本节介绍如何加载和写入模块。

## 加载模块<a name="section92221385320"></a>

为了加载一个特殊的DSO模块，在配置文件中使用加载模块指示。独立软件包提供的模块一般在/etc/httpd/conf.modules.d目录下有他们自己的配置文件。

例如，加载asis DSO模块的操作步骤如下：

1.  在/etc/httpd/conf.modules.d/00-optional.conf文件中，取消注释如下配置行。

    ```
    LoadModule asis_module modules/mod_asis.so
    ```

2.  加载完成后，请重启httpd服务以便于重新加载配置文件。

    ```
    # systemctl restart httpd
    ```

3.  加载完成后，使用httpd -M的命令查看是否已经加载了asis DSO模块。

    ```
    # httpd -M | grep asis
    ```

    回显如下，说明asis DSO模块加载成功。

    ```
    asis_module (shared)
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>**httpd 的常用命令**  
>-   httpd -v : 查看httpd的版本号。  
>-   httpd -l：查看编译进httpd程序的静态模块。  
>-   httpd -M：查看已经编译进httpd程序的静态模块和已经加载的动态模块。  

## SSL介绍<a name="section745572210620"></a>

安全套接层SSL（Secure Sockets Layer）是一个允许服务端和客户端之间进行安全通信的加密协议。其中，传输层安全性协议TLS（Transport Layer Security）为网络通信提供了安全性和数据完整性保障。openEuler支持Mozilla NSS（Network Security Services）作为安全性协议TLS进行配置。加载SSL的操作步骤如下：

1.  安装mod\_ssl的rpm包。

    ```
    # dnf install mod_ssl
    ```

2.  安装完成后，请重启httpd服务以便于重新加载配置文件。

    ```
    # systemctl restart httpd
    ```

3.  加载完成后，使用httpd -M的命令查看是否已经加载了SSL。

    ```
    # httpd -M | grep ssl
    ```

    回显如下，说明SSL已加载成功。

    ```
    ssl_module (shared)
    ```


