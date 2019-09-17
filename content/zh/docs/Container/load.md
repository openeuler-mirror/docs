# load<a name="ZH-CN_TOPIC_0184808267"></a>

用法：**docker load \[OPTIONS\]**

功能：把docker save出来的tar包重新加载一个镜像。与docker save相对应。

选项：

-i, --input=""

示例：

```
$ sudo docker load -i busybox.tar
Loaded image ID: sha256:e02e811dd08fd49e7f6032625495118e63f597eb150403d02e3238af1df240ba
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             latest              e02e811dd08f        2 years ago         1.09MB
```

