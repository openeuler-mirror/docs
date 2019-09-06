# start<a name="ZH-CN_TOPIC_0184808255"></a>

用法：**docker start \[OPTIONS\] CONTAINER \[CONTAINER...\]**

功能：启动一个或多个未运行容器

选项：

-a, --attach=false     容器的标准输出和错误输出附加到host的STDOUT和STDERR上

-i, --interactive=false  容器的标准输入附加到host的STDIN上

实例：

启动一个名为ubuntu的容器，添加-i -a选项附加标准输入输出，容器启动后直接进入容器内部，输入exit可以退出容器。

如果启动容器时不加-i -a选项，容器将在后台启动。

```
$ sudo docker start -i -a ubuntu
```

