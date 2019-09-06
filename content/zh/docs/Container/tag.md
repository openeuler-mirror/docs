# tag<a name="ZH-CN_TOPIC_0184808275"></a>

用法：**docker tag \[OPTIONS\] IMAGE\[:TAG\] \[REGISTRYHOST/\]\[USERNAME/\]NAME\[:TAG\]**

功能：将一个镜像打标签到一个库中

选项：

-f, --force=false    如果存在相同的tag名将强制替换原来的image

示例：

```
$ sudo docker tag busybox:latest busybox:test
```

