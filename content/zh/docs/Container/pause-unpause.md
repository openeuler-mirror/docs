# pause/unpause<a name="ZH-CN_TOPIC_0184808248"></a>

用法：**docker pause CONTAINER**

**docker unpause CONTAINER**

功能：这两个命令是配对使用的，docker pause暂停容器内的所有进程，docker unpause恢复暂停的进程

选项：无

示例：

本示例将演示一个跑了docker registry（docker镜像服务）服务的容器，当使用docker pause 命令暂停这个容器的进程后，使用curl命令访问该registry服务将阻塞，使用docker unpause命令将恢复registry服务，可以用curl命令访问。

1.  启动一个registry容器

    ```
    $ sudo docker run -d --name pause_test -p 5000:5000 registry
    ```

    此时可以用curl命令访问这个服务，请求状态码会返回200 OK。

    ```
    $ sudo curl -v 127.0.0.1:5000
    ```

2.  暂停这个容器内的进程

    ```
    $ sudo docker pause pause_test
    ```

    此时用curl命令访问这个服务将阻塞，等待服务开启。

3.  恢复运行这个容器内的进程

    ```
    $ sudo docker unpause pause_test
    ```

    此时步骤2中的curl访问将恢复运行，请求状态码返回200 OK。


