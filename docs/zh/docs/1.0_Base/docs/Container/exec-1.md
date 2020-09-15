# exec<a name="ZH-CN_TOPIC_0184808244"></a>

用法：**docker exec \[OPTIONS\] CONTAINER COMMAND \[ARG...\]**

功能：在一个运行的容器内执行命令

选项：

-d, --detach=false       在后台运行

-i, --interactive=false    保持容器的STDIN打开

-t, --tty=false           分配一个虚拟终端

--privileged   以特权模式执行命令

-u, --user    指定用户名或者UID

示例：

```
$ sudo docker exec -ti exec_test ls
bin  etc   lib	  media  opt   root  sbin  sys	 tmp  var
dev  home  lib64  mnt	 proc  run   srv   test  usr
```

