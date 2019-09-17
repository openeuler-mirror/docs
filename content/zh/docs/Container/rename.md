# rename<a name="ZH-CN_TOPIC_0184808251"></a>

用法：**docker rename \[OPTIONS\] OLD\_NAME NEW\_NAME**

功能：重命名容器

选项：

示例：

示例中，用docker run创建并启动一个容器，使用docker rename对容器重命名，并查看容器名是否改变。

```
$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
b15976967abb        busybox:latest        "bash"              3 seconds ago       Up 2 seconds                            festive_morse
$ sudo docker rename pedantic_euler new_name
$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
b15976967abb        busybox:latest        "bash"              34 seconds ago      Up 33 seconds                           new_name
```

