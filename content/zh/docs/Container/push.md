# push<a name="ZH-CN_TOPIC_0184808271"></a>

用法：**docker push NAME\[:TAG\]**

功能：将一个image推送到镜像库中

选项：无

示例：

1.  将一个image推送到私有镜像库192.168.1.110:5000中
2.  将要推送的镜像打标签（docker tag命令将在下文介绍），本例中要推送的镜像为ubuntu:sshd

    ```
    $ sudo docker tag ubuntu:sshd 192.168.1.110:5000/ubuntu:sshd
    ```

3.  将打好标签的镜像推送到私有镜像库中

    ```
    $ sudo docker push 192.168.1.110:5000/ubuntu:sshd
    ```

    推送的时候会自动检测所依赖的层在镜像库中是否已存在，如果以存在，跳过该层。


