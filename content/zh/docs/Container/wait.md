# wait<a name="ZH-CN_TOPIC_0184808260"></a>

用法：**docker wait CONTAINER \[CONTAINER...\]**

功能：等待一个容器停止，并打印出容器的退出码

选项：无

示例：

先开启一个名为busybox的容器

```
$ sudo docker start -i -a busybox
```

执行docker wait

```
$ sudo docker wait busybox
0
```

将阻塞等待busybox容器的退出，退出busybox容器后将看到打印退出码“0”。

