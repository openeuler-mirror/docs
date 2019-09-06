# port<a name="ZH-CN_TOPIC_0184808249"></a>

用法：**docker port CONTAINER \[PRIVATE\_PORT\[/PROTO\]\]**

功能：列出容器的端口映射，或者查找指定端口在主机的哪个端口

选项：无

示例：

1.  列出容器所有的端口映射

    ```
    $ sudo docker port registry
    5000/tcp -> 0.0.0.0.：5000
    ```

2.  查找容器指定端口的映射

    ```
    $ sudo docker port registry 5000
    0.0.0.0.：5000
    ```


