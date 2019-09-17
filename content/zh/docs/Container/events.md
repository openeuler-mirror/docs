# events<a name="ZH-CN_TOPIC_0184808277"></a>

用法：**docker events \[OPTIONS\]**

功能：从docker daemon中获取实时事件

选项：

--since=""         显示指定时间戳之后的事件

--until=""         显示直到指定之间戳的事件

示例：

该示例中，执行docker events后，用docker run创建并启动一个容器，docker events将输出create事件和start事件。

```
$ sudo docker events
2019-08-28T16:23:09.338838795+08:00 container create 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (image=busybox:latest, name=eager_wu)
2019-08-28T16:23:09.339909205+08:00 container attach 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (image=busybox:latest, name=eager_wu)
2019-08-28T16:23:09.397717518+08:00 network connect e2e20f52662f1ee2b01545da3b02e5ec7ff9c85adf688dce89a9eb73661dedaa (container=53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e, name=bridge, type=bridge)
2019-08-28T16:23:09.922224724+08:00 container start 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (image=busybox:latest, name=eager_wu)
2019-08-28T16:23:09.924121158+08:00 container resize 53450588a20800d8231aa1dc4439a734e16955387efb5f259c47737dba9e2b5e (height=48, image=busybox:latest, name=eager_wu, width=210)
```

