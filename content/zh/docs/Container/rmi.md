# rmi<a name="ZH-CN_TOPIC_0184808272"></a>

用法：**docker rmi \[OPTIONS\] IMAGE \[IMAGE...\]**

功能：删除一个或多个镜像，如果一个镜像在镜像库中有多个标签，删除镜像的时候只是进行untag操作，当删除的是只有一个标签的镜像时，将依次删除所依赖的层。

选项：

-f, --force=false    强制删除image

--no-prune=false    不删除没有标签的父镜像

示例：

```
$ sudo docker rmi 192.168.1.110:5000/ubuntu:sshd
```

