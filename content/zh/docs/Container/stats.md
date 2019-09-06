# stats<a name="ZH-CN_TOPIC_0184808256"></a>

用法：**docker stats \[OPTIONS\] \[CONTAINER...\]**

功能：持续监控并显示指定容器（若不指定，则默认全部容器）的资源占用情况

选项：

-a, --all        显示所有容器（默认仅显示运行状态的容器）

--no-stream    只显示第一次的结果，不持续监控

示例：

示例中，用docker run创建并启动一个容器，docker stats将输出容器的资源占用情况。

```
$ sudo docker stats
CONTAINER ID        NAME                    CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
2e242bcdd682        jaeger                  0.00%               77.08MiB / 125.8GiB   0.06%               42B / 1.23kB        97.9MB / 0B         38
02a06be42b2c        relaxed_chandrasekhar   0.01%               8.609MiB / 125.8GiB   0.01%               0B / 0B             0B / 0B             10
deb9e49fdef1        hardcore_montalcini     0.01%               12.79MiB / 125.8GiB   0.01%               0B / 0B             0B / 0B             9
```

