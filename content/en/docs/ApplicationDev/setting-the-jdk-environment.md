# Setting the JDK Environment<a name="EN-US_TOPIC_0229243624"></a>

Before setting JAVA\_HOME, you need to find the installation path of the JDK. You are supported to have installed the JDK. If you have not installed the JDK, install it by referring to Preparation \> Installing the Software Package \> Installing the JDK Software Package. 

Run the following command to view the Java path:

```
# which java
/usr/bin/java
```

Run the following command to check the directory to which the soft link points:

```
# ls -la /usr/bin/java
lrwxrwxrwx. 1 root root  22 Mar 6 20:28 /usr/bin/java -> /etc/alternatives/java
# ls -la /etc/alternatives/java
lrwxrwxrwx. 1 root root  83 Mar 6 20:28 /etc/alternatives/java -> /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.232.b09-1.h2.aarch64/jre/bin/java
```

The actual path is  **/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.232.b09-1.h2.aarch64**. Run the following command to set  **JAVA\_HOME**  and  **PATH**:

```
# export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.232.b09-1.h2.aarch64
# export PATH=$JAVA_HOME/bin:$PATH
```

