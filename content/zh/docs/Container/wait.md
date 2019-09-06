# wait<a name="ZH-CN_TOPIC_0184808260"></a>

用法：**docker wait CONTAINER \[CONTAINER...\]**

功能：等待一个容器停止，并打印出容器的退出码

选项：无

示例：

先开启一个名为ubuntu的容器

```
$ sudo docker start -i -a ubuntu
```

执行docker wait

```
$ sudo docker wait ubuntu
0
```

将阻塞等待ubuntu容器的退出，退出ubuntu容器后将看到打印退出码“0”。

