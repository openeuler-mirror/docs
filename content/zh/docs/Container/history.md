# history<a name="ZH-CN_TOPIC_0184808264"></a>

用法：**docker history \[OPTIONS\] IMAGE**

功能：显示一个image的变化历史

选项：

-H, --human=true

--no-trunc=false     不对输出进行删减

-q, --quiet=false     只显示ID

示例：

```
$ sudo docker history busybox:test
IMAGE               CREATED             CREATED BY          SIZE                COMMENT
be4672959e8b        15 minutes ago      bash                23B
21970dfada48        4 weeks ago                             128MB               Imported from -
```

