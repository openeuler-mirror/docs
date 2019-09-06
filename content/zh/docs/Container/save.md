# save<a name="ZH-CN_TOPIC_0184808273"></a>

用法：**docker save \[OPTIONS\] IMAGE \[IMAGE...\]**

功能：保存一个image到一个tar包，输出默认是到STDOUT

选项：

-o, --output=""   输出到文件中而不是STDOUT

示例：

```
$ sudo docker save -o nginx.tar nginx:latest
$ ls
nginx.tar
```

