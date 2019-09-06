# stop<a name="ZH-CN_TOPIC_0184808257"></a>

用法：**docker stop \[OPTIONS\] CONTAINER \[CONTAINER...\]**

功能：通过向容器发送一个SIGTERM信号并在一定的时间后发送一个SIGKILL信号停止容器

选项：

-t, --time=10   在杀掉容器之前等待容器退出的秒数，默认为10S

示例：

```
$ sudo docker stop -t=15 ubuntu
```

