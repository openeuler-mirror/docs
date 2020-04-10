# 设置JDK环境<a name="ZH-CN_TOPIC_0229243624"></a>

在设置JAVA\_HOME之前您需要先找到JDK的安装路径。在“开发环境准备 \> 安装软件包 \> 安装JDK软件包”章节中您已经学会了如何安装JDK，如果您还没安装好JDK，请提前安好。

查看java路径，命令如下：

```
# which java
/usr/bin/java
```

查看软链接的实际指向目录，命令如下：

```
# ls -la /usr/bin/java
lrwxrwxrwx. 1 root root  22 Mar 6 20:28 /usr/bin/java -> /etc/alternatives/java
# ls -la /etc/alternatives/java
lrwxrwxrwx. 1 root root  83 Mar 6 20:28 /etc/alternatives/java -> /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.232.b09-1.h2.aarch64/jre/bin/java
```

发现JDK的真实路径为/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.232.b09-1.h2.aarch64，设置JAVA\_HOME和PATH，命令如下：

```
# export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.232.b09-1.h2.aarch64
# export PATH=$JAVA_HOME/bin:$PATH
```

