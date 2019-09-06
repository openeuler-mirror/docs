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

## 写入模块<a name="section841381322711"></a>

有些时候因为特殊需求，需要在已安装的httpd上添加一些额外的模块，这时候要使用httpd-devel中的apxs工具。要使用这个扩展机制，你的平台必须支持DSO特性，即要求Apache httpd必须内建了mod\_so模块。

httpd-devel软件包中包含了编译一个新模块所需要的文件、头文件和APache eXtenSion（apxs）。所以创建新的DSO模块，请确保已安装httpd-devel软件包。

安装该软件可以在root权限下执行如下命令：

```
# dnf install httpd-devel
```

如果新模块已完成写作，可以使用如下命令，其中moduleName.c为新模块的源文件。

```
# apxs -i -a -c moduleName.c
```

构建成功后，可以加载该模块，加载方式和其他Apache HTTP服务启动时一并分发模块的加载方式相同。

**apxs添加模块的方法很简单，以下是几个可能用上的选项**

-   -c   _moduleName.c_   ：将c文件编译为.so文件。
-   -i ：表示安装一个或多个模块到apache服务所在目录的modules目录中。
-   -a：表示自动在httpd.conf中加入LoadModule行。
-   -A：表示自动在httpd.conf中加入\#LoadModule行，也就是说安装了模块但是不启用。
-   -n：显示指定 -i 需要安装的模块名。

例如，添加mod\_proxy.so模块需要进入httpd源码的解压目录，并进行编译安装。命令如下：

```
cd httpd-2.4.34/modules  
apxs -c -i -A  proxy/mod_proxy.c  proxy/proxy_util.c
```

安装成功后的最后几行会告诉你要去修改配置文件，请用户根据情况决定是否修改LoadModule指令来加载模块。

>![](public_sys-resources/icon-note.gif) **说明：**   
>有时候可能出现添加一个模块后重启失败并提示undefined Symbol，说明还需添加其他相关的所需模块。  

## SSL介绍<a name="section745572210620"></a>

安全套接层SSL（Secure Sockets Layer）是一个允许服务端和客户端之间进行安全通信的加密协议。其中，传输层安全性协议TLS（Transport Layer Security）为网络通信提供了安全性和数据完整性保障。openEuler支持Mozilla NSS（Network Security Services）作为安全性协议TLS进行配置。

>![](public_sys-resources/icon-notice.gif) **注意：**   
>强烈建议使用openEuler系统时，关闭SSL服务，只使用TLS v1.1或更高版本。  

