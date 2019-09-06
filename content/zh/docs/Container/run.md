# run<a name="ZH-CN_TOPIC_0184808254"></a>

用法：**docker run \[OPTIONS\] IMAGE \[COMMAND\] \[ARG...\]**

功能：该命令将由指定的image（如果指定的IMAGE不存在，则从官方镜像库中下载一个镜像）创建一个容器，并启动这个容器，并在容器中执行指定的命令。该命令集成了docker create命令、docker start命令、docker exec命令。

选项：（该命令的选项与docker create命令的选项一样，请参考docker create命令选项，仅仅多了以下两个选项）

--rm=false        设置容器退出时自动删除容器

-v 挂载本地目录或匿名卷到容器内。注意：当将本地目录以带有selinux的安全标签的方式挂载到容器内的同时，尽量不要同时做该本地目录的增删操作，否则该安全标签可能不生效

--sig-proxy=true    发往进程信号的代理，SIGCHLD, SIGSTOP, SIGKILL不使用代理

示例：

使用ubuntu镜像运行一个容器，在容器启动后执行/bin/bash

```
$ sudo docker run -ti ubuntu /bin/bash
```

