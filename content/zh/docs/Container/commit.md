# commit<a name="ZH-CN_TOPIC_0184808240"></a>

用法：**docker commit \[OPTIONS\] CONTAINER \[REPOSITORY\[:TAG\]\]**

功能：由一个容器创建一个新的image

选项：

-a, --author=""    指定作者

-m, --message=""  提交的信息

-p, --pause=true   在提交过程中暂停容器

示例：

运行一个容器，然后将这个容器提交成一个新的image

```
$ sudo docker commit test busybox:test
sha256:be4672959e8bd8a4291fbdd9e99be932912fe80b062fba3c9b16ee83720c33e1

$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             latest              e02e811dd08f        2 years ago         1.09MB
```

