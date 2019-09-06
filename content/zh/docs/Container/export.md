# export<a name="ZH-CN_TOPIC_0184808245"></a>

用法：**docker export CONTAINER**

功能：将一个容器的文件系统内容以tar包导出到STDOUT

选项：无

示例：

将名为busybox的容器的内容导出到busybox.tar包中：

```
$ sudo docker export busybox > busybox.tar
$ ls
busybox.tar 
```

