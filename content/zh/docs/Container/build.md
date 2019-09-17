# build<a name="ZH-CN_TOPIC_0184808262"></a>

用法：**docker build \[OPTIONS\] PATH | URL | -**

功能：使用指定路径中的Dockerfile生成构建一个新的image

选项：常用选项参数如下，更多选项可以查看docker help build

**表 1**  参数说明

<a name="zh-cn_topic_0183243738_table14251918184"></a>
<table><thead align="left"><tr id="zh-cn_topic_0183243738_row172615113189"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0183243738_p3263119181"><a name="zh-cn_topic_0183243738_p3263119181"></a><a name="zh-cn_topic_0183243738_p3263119181"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0183243738_p162691131813"><a name="zh-cn_topic_0183243738_p162691131813"></a><a name="zh-cn_topic_0183243738_p162691131813"></a>参数含义</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0183243738_row122619121815"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243738_p1526614185"><a name="zh-cn_topic_0183243738_p1526614185"></a><a name="zh-cn_topic_0183243738_p1526614185"></a>--force-rm=false</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243738_p9803426131816"><a name="zh-cn_topic_0183243738_p9803426131816"></a><a name="zh-cn_topic_0183243738_p9803426131816"></a>即使没有构建成功也删除构建过程中生成的容器</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243738_row660114322184"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243738_p460219324184"><a name="zh-cn_topic_0183243738_p460219324184"></a><a name="zh-cn_topic_0183243738_p460219324184"></a>--no-cache=false</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243738_p5602163216189"><a name="zh-cn_topic_0183243738_p5602163216189"></a><a name="zh-cn_topic_0183243738_p5602163216189"></a>构建image的过程中不使用缓存</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243738_row9354121121913"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243738_p9354714196"><a name="zh-cn_topic_0183243738_p9354714196"></a><a name="zh-cn_topic_0183243738_p9354714196"></a>-q, --quiet=false</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243738_p33544151914"><a name="zh-cn_topic_0183243738_p33544151914"></a><a name="zh-cn_topic_0183243738_p33544151914"></a>禁止构建过程中产生的冗余信息</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243738_row37811581916"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243738_p177819158192"><a name="zh-cn_topic_0183243738_p177819158192"></a><a name="zh-cn_topic_0183243738_p177819158192"></a>--rm=true</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243738_p1546216313191"><a name="zh-cn_topic_0183243738_p1546216313191"></a><a name="zh-cn_topic_0183243738_p1546216313191"></a>构建成功后删除过程中生成的容器</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243738_row136272022111912"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243738_p862882217196"><a name="zh-cn_topic_0183243738_p862882217196"></a><a name="zh-cn_topic_0183243738_p862882217196"></a>-t, --tag=""</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243738_p13391038161911"><a name="zh-cn_topic_0183243738_p13391038161911"></a><a name="zh-cn_topic_0183243738_p13391038161911"></a>指定构建生成的image的tag名</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243738_row7484172061913"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243738_p4485320161916"><a name="zh-cn_topic_0183243738_p4485320161916"></a><a name="zh-cn_topic_0183243738_p4485320161916"></a>--build-arg=[]</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243738_p3485112061914"><a name="zh-cn_topic_0183243738_p3485112061914"></a><a name="zh-cn_topic_0183243738_p3485112061914"></a>设置构建参数</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243738_row3920817171919"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243738_p19920121701910"><a name="zh-cn_topic_0183243738_p19920121701910"></a><a name="zh-cn_topic_0183243738_p19920121701910"></a>--label=[]</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243738_p777151152020"><a name="zh-cn_topic_0183243738_p777151152020"></a><a name="zh-cn_topic_0183243738_p777151152020"></a>镜像相关参数设置，各参数意义与create类似</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243738_row1993117602010"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243738_p18931106112015"><a name="zh-cn_topic_0183243738_p18931106112015"></a><a name="zh-cn_topic_0183243738_p18931106112015"></a>--isolation</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243738_p29312652012"><a name="zh-cn_topic_0183243738_p29312652012"></a><a name="zh-cn_topic_0183243738_p29312652012"></a>指定容器的隔离方法</p>
</td>
</tr>
<tr id="zh-cn_topic_0183243738_row1325154192018"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0183243738_p825184112011"><a name="zh-cn_topic_0183243738_p825184112011"></a><a name="zh-cn_topic_0183243738_p825184112011"></a>--pull</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0183243738_p22517417207"><a name="zh-cn_topic_0183243738_p22517417207"></a><a name="zh-cn_topic_0183243738_p22517417207"></a>构建时总是尝试获取最新版本镜像</p>
</td>
</tr>
</tbody>
</table>

Dockerfile介绍：

Dockerfile是一个镜像的表示，可以通过Dockerfile来描述构建镜像的步骤，并自动构建一个容器，所有的 Dockerfile 命令格式都是：**INSTRUCTION arguments**

**FROM命令**

格式：FROM <image\>   或    FROM <image\>:<tag\>

功能：该命令指定基本镜像，是所有Dockerfile文件的第一个命令，如果没有指定基本镜像的tag，使用默认tag名latest。

**RUN命令**

格式：RUN <command\> \(the command is run in a shell - \`/bin/sh -c\`\) 或者

RUN \["executable", "param1", "param2" ... \]  \(exec form\)

功能：RUN命令会在上面FROM指定的镜像里执行指定的任何命令，然后提交\(commit\)结果，提交的镜像会在后面继续用到。RUN命令等价于:

docker run image command

docker commit container\_id

**注释**

使用\#注释

**MAINTAINER命令**

格式：MAINTAINER <name\>

功能：命令用来指定维护者的姓名和联系方式

**ENTRYPOINT命令**

格式：ENTRYPOINT cmd param1 param2 ...  或者ENTRYPOINT \["cmd", "param1", "param2"...\]

功能：设置在容器启动时执行命令

**USER命令**

格式：USER name

功能：指定 memcached 的运行用户

**EXPOSE命令**

格式：EXPOSE <port\> \[<port\>...\]

功能：开放镜像的一个或多个端口

**ENV命令**

格式：ENV <key\> <value\>

功能：设置环境变量，设置了后，后续的RUN命令都可以使用

**ADD命令**

格式：ADD <src\> <dst\>

功能：从src复制文件到container的dest路径，<src\> 是相对被构建的源目录的相对路径，可以是文件或目录的路径，也可以是一个远程的文件url，<dest\> 是container中的绝对路径

**VOLUME命令**

格式：VOLUME \["<mountpoint\>"\]

功能：创建一个挂载点用于共享目录

**WORKDIR命令**

格式：workdir <path\>

功能：配置RUN, CMD, ENTRYPOINT 命令设置当前工作路径可以设置多次，如果是相对路径，则相对前一个 WORKDIR 命令

**CMD命令**

格式：CMD \["executable","param1","param2"\] \(like an exec, preferred form\)

CMD \["param1","param2"\] \(as default parameters to ENTRYPOINT\)

CMD command param1 param2 \(as a shell\)

功能：一个Dockerfile里只能有一个CMD，如果有多个，只有最后一个生效

**ONBUILD命令**

格式：ONBUILD \[其它指令\]

功能：后面跟其它指令，比如 RUN、COPY 等，这些指令，在当前镜像构建时并不会被执行，只有当以当前镜像为基础镜像，去构建下一级镜像的时候才会被执行

下面是Dockerfile的一个完整例子，该Dockerfile将构建一个安装了sshd服务的image

<a name="zh-cn_topic_0183243738_zh-cn_topic_0155237683_zh-cn_topic_0076221025_zh-cn_topic_0043209539_table50916422"></a>
<table><tbody><tr id="zh-cn_topic_0183243738_zh-cn_topic_0155237683_zh-cn_topic_0076221025_zh-cn_topic_0043209539_row58396974"><td class="cellrowborder" valign="top" width="100%"><pre class="screen" id="zh-cn_topic_0183243738_zh-cn_topic_0155237683_zh-cn_topic_0076221025_zh-cn_topic_0043209539_screen13353554311"><a name="zh-cn_topic_0183243738_zh-cn_topic_0155237683_zh-cn_topic_0076221025_zh-cn_topic_0043209539_screen13353554311"></a><a name="zh-cn_topic_0183243738_zh-cn_topic_0155237683_zh-cn_topic_0076221025_zh-cn_topic_0043209539_screen13353554311"></a>FROM ubuntu:14.04
ENV  http_proxy http://192.168.0.226:3128
ENV  https_proxy https://192.168.0.226:3128
RUN apt-get update &amp;&amp; apt-get install -y openssh-server
RUN mkdir -p /var/run/sshd
EXPOSE 22
ENTRYPOINT /usr/sbin/sshd -D</pre>
</td>
</tr>
</tbody>
</table>

示例：

1.  以上文的Dockerfile构建一个image

    ```
    $ sudo docker build -t ubuntu:latest
    ```

2.  通过以下命令可以看到这个生成的image：

    ```
    docker images | grep ubuntu
    ```


