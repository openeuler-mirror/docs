# ps<a name="ZH-CN_TOPIC_0184808250"></a>

用法：**docker ps \[OPTIONS\]**

功能：根据不同的选项列出不同状态的容器，在不加任何选项的情况下，将列出正在运行的容器

选项：

-a, --all=false     显示所用的容器

-f, --filter=\[\]      筛选值，可用的筛选值有：exited=<int\>容器的退出码status=\(restarting|running|paused|exited\)容器的状态码（e.g. -f status=running，列出正在运行的容器）

-l, --latest=false   列出最近创建的一个容器

-n=-1            列出最近n此创建的容器

--no-trunc=false   将64位的容器ID全部显示出来，默认显示12位容器的ID

-q, --quiet=false   显示容器的ID

-s, --size=false    显示容器的大小

示例：

1.  列出正在运行的容器

    ```
    $ sudo docker ps
    ```

2.  列出所有的容器

    ```
    $ sudo docker ps -a
    ```


