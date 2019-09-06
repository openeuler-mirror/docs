# top<a name="ZH-CN_TOPIC_0184808258"></a>

用法：**docker top CONTAINER \[ps OPTIONS\]**

功能：显示一个容器内运行的进程

选项：无

示例：

先运行了一个名为top\_test的容器，并在其中执行了top指令

```
$ sudo docker top top_test
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                70045               70028               0                   15:52               pts/0               00:00:00            bash
```

显示的PID是容器内的进程在主机中的PID号。

