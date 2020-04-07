# Audit Component<a name="EN-US_TOPIC_0184808204"></a>

You can configure audit for Docker. However, this configuration is not mandatory. For example:

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

Configuring audit for Docker brings certain benefits for auditing, while it does not have any substantial effects on attack defense. In addition, the audit configurations cause serious efficiency problems, for example, the system may not respond smoothly. Therefore, exercise caution in the production environment.

The following uses  **-w /var/lib/docker -k docker**  as an example to describe how to configure Docker audit.

```
[root@localhost signal]# cat /etc/audit/rules.d/audit.rules | grep docker -w /var/lib/docker/  -k docker 
[root@localhost signal]# auditctl -R /etc/audit/rules.d/audit.rules | grep docker 
[root@localhost signal]# auditctl -l | grep docker -w /var/lib/docker/ -p rwxa -k docker
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>**-p \[r|w|x|a\]**  and  **-w**  are used together to monitor the read, write, execution, and attribute changes \(such as timestamp changes\) of the directory. In this case, any file or directory operation in the  **/var/lib/docker**  directory will be recorded in the  **audit.log**  file. As a result, too many logs will be recorded in the  **audit.log**  file, which severely affects the memory or CPU usage of the auditd, and further affects the OS. For example, logs similar to the following will be recorded in the  **/var/log/audit/audit.log**  file each time the  **ls /var/lib/docker/containers**  command is executed:  

```
type=SYSCALL msg=audit(1517656451.457:8097): arch=c000003e syscall=257 success=yes exit=3 a0=ffffffffffffff9c a1=1b955b0 a2=90800 a3=0 items=1 ppid=17821 pid=1925 auid=0 uid=0 gid=0 euid=0 suid=0 fsuid=0 egid=0 sgid=0 fsgid=0 tty=pts6 ses=4 comm="ls" exe="/usr/bin/ls" subj=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023 key="docker"type=CWD msg=audit(1517656451.457:8097):  cwd="/root"type=PATH msg=audit(1517656451.457:8097): item=0 name="/var/lib/docker/containers" inode=1049112 dev=fd:00 mode=040700 ouid=0 ogid=0 rdev=00:00 obj=unconfined_u:object_r:container_var_lib_t:s0 objtype=NORMAL 
```

  

