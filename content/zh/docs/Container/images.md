# images<a name="ZH-CN_TOPIC_0184808265"></a>

用法：**docker images \[OPTIONS\] \[NAME\]**

功能：列出存在的image，不加选项时不显示中间的image

选项：

-a, --all=false      显示所有的镜像，

-f, --filter=\[\]       指定一个过滤值\(i.e. 'dangling=true'\)

--no-trunc=false    不对输出进行删减

-q, --quiet=false    只显示ID

示例：

```
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
euleros             test                be4672959e8b        15 minutes ago      128MB
euleros             v2r7                21970dfada48        4 weeks ago         128MB
busybox             latest              e02e811dd08f        2 years ago         1.09MB
```

