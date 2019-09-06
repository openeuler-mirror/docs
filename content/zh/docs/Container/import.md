# import<a name="ZH-CN_TOPIC_0184808266"></a>

用法：**docker import URL|- \[REPOSITORY\[:TAG\]\]**

功能：把包含了一个rootfs的tar包导入为镜像。与docker export相对应。

选项：无

示例：

从上文介绍的docker export命令时导出的busybox.tar用docker import命令生成一个新的image

```
$ sudo docker import busybox.tar busybox:test
sha256:a79d8ae1240388fd3f6c49697733c8bac4d87283920defc51fb0fe4469e30a4f
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             test                a79d8ae12403        2 seconds ago       1.3MB
```

