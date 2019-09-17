# inspect<a name="ZH-CN_TOPIC_0184808246"></a>

用法：**docker inspect \[OPTIONS\] CONTAINER|IMAGE \[CONTAINER|IMAGE...\]**

功能：返回一个容器或者镜像的底层信息

选项：

-f, --format=""    按照给定的格式输出信息

-s, --size    若查询类型为容器，显示该容器的总体文件大小

--type    返回指定类型的JSON格式

-t, --time=120 超时时间的秒数，若在该时间内docker inspect未执行成功，则停止等待并立即报错。默认为120秒。

示例：

1.  返回一个容器的信息

    ```
    $ sudo docker inspect busybox_test
    [
        {
            "Id": "9fbb8649d5a8b6ae106bb0ac7686c40b3cbd67ec2fd1ab03e0c419a70d755577",
            "Created": "2019-08-28T07:43:51.27745746Z",
            "Path": "bash",
            "Args": [],
            "State": {
                "Status": "running",
                "Running": true,
                "Paused": false,
                "Restarting": false,
                "OOMKilled": false,
                "Dead": false,
                "Pid": 64177,
                "ExitCode": 0,
                "Error": "",
                "StartedAt": "2019-08-28T07:43:53.021226383Z",
                "FinishedAt": "0001-01-01T00:00:00Z"
            },
    ......
    ```

2.  按照给定格式返回一个容器的指定信息，下面的例子返回ubuntu\_test容器IP地址

    ```
    $ sudo docker inspect -f {{.NetworkSettings.IPAddress}} ubuntu_test
    172.17.0.91
    ```


