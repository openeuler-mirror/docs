# 关联组件audit<a name="ZH-CN_TOPIC_0184808204"></a>

docker支持配置audit，但不是强制的。例如：

```
-w /var/lib/docker -k docker 
-w /etc/docker -k docker 
-w /usr/lib/systemd/system/docker.service -k docker 
-w /usr/lib/systemd/system/docker.socket -k docker 
-w /etc/sysconfig/docker -k docker 
-w /usr/bin/docker-containerd -k docker 
-w /usr/bin/docker-runc -k docker 
-w /etc/docker/daemon.json -k docker
```

配置docker的audit，好处在于可以记录更多信息便于审计，但从安全角度来看，它对防攻击并没有实质性的作用。另一方面，audit配置会导致严重的效率问题，可能导致系统卡顿，生产环境中请谨慎使用。

下面以“-w /var/lib/docker -k docker”为例，演示docker audit的配置：

```
[root@localhost signal]# cat /etc/audit/rules.d/audit.rules | grep docker -w /var/lib/docker/  -k docker 
[root@localhost signal]# auditctl -R /etc/audit/rules.d/audit.rules | grep docker 
[root@localhost signal]# auditctl -l | grep docker -w /var/lib/docker/ -p rwxa -k docker
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>-p \[r|w|x|a\] 和-w一起使用，观察用户对这个目录的读、写、执行或者属性变化（如时间戳变化）。这样的话，在/var/lib/docker目录下的任何文件、目录操作，都会打印日志到audit.log中，从而会有太多的日志往audit.log中记录，会严重地影响auditd， 比如内存、cpu占用等，进而影响os的运行。例如：每次执行"ls /var/lib/docker/containers"都会有类似如下日志记录到/var/log/audit/audit.log中。  

```
type=SYSCALL msg=audit(1517656451.457:8097): arch=c000003e syscall=257 success=yes exit=3 a0=ffffffffffffff9c a1=1b955b0 a2=90800 a3=0 items=1 ppid=17821 pid=1925 auid=0 uid=0 gid=0 euid=0 suid=0 fsuid=0 egid=0 sgid=0 fsgid=0 tty=pts6 ses=4 comm="ls" exe="/usr/bin/ls" subj=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023 key="docker"type=CWD msg=audit(1517656451.457:8097):  cwd="/root"type=PATH msg=audit(1517656451.457:8097): item=0 name="/var/lib/docker/containers" inode=1049112 dev=fd:00 mode=040700 ouid=0 ogid=0 rdev=00:00 obj=unconfined_u:object_r:container_var_lib_t:s0 objtype=NORMAL 
```

