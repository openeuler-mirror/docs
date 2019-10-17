# attach<a name="ZH-CN_TOPIC_0184808239"></a>

用法：**docker attach \[OPTIONS\] CONTAINER**

功能：附加到一个运行着的容器

选项：

--no-stdin=false    不附加STDIN

--sig-proxy=true    代理所有到容器内部的信号，不代理SIGCHLD, SIGKILL, SIGSTOP

示例：

```
$ sudo docker attach attach_test
root@2988b8658669:/# ls bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```

