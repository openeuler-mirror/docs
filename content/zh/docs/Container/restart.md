# restart<a name="ZH-CN_TOPIC_0184808252"></a>

用法：**docker restart \[OPTIONS\] CONTAINER \[CONTAINER...\]**

功能：重启一个运行中的容器

选项：

-t, --time=10   在杀掉容器之前等待容器停止的秒数，如果容器已停止，就重启。默认为10秒。

示例：

```
$ sudo docker restart ubuntu
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>容器在restart过程中，如果容器内存在D状态或Z状态的进程，可能会导致容器重启失败，这需要进一步分析导致容器内进程D状态或Z状态的原因，待容器内进程D状态或Z状态解除后，再进行容器restart操作。  

