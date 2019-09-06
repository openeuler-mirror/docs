# cp<a name="ZH-CN_TOPIC_0184808241"></a>

用法：docker cp \[OPTIONS\] CONTAINER:SRC\_PATH DEST\_PATH|-

docker cp \[OPTIONS\] SRC\_PATH|- CONTAINER:DEST\_PATH

功能：从指定的容器内的一个路径复制文件或文件夹到主机的指定路径中，或者把主机的文件或者文件夹拷贝到容器内。

注意：docker cp不支持容器内/proc，/sys，/dev，/tmp等虚拟文件系统以及用户在容器内自行挂载的文件系统内的文件拷贝。

选项：

-a, --archive	将拷贝到容器的文件属主设置为容器运行用户（--user）

-L, --follow-link   解析并跟踪文件的符号链接

示例：

复制reigistry容器中/test目录到主机的/home/aaa目录中

```
$ sudo docker cp registry:/test /home/aaa
```

