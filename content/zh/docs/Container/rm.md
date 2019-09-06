# rm<a name="ZH-CN_TOPIC_0184808253"></a>

用法：**docker rm \[OPTIONS\] CONTAINER \[CONTAINER...\]**

功能：删除一个或多个容器

选项：

-f, --force=false      强制删除运行中的容器

-l, --link=false       Remove the specified link and not the underlying container

-v, --volumes=false   Remove the volumes associated with the container

示例：

1.  删除一个停止运行的容器

    ```
    $ sudo docker rm test
    ```

2.  删除一个正在运行的容器

    ```
    $ sudo docker rm -f rm_test
    ```


