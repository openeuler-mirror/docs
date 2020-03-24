# 安装JDK软件包<a name="ZH-CN_TOPIC_0229243735"></a>

1.  执行**dnf list installed | grep jdk**  查询JDK软件是否已安装。

    ```
    dnf list installed | grep jdk
    ```

    查看命令打印信息，若打印信息中包含“jdk”，表示该软件已经安装了，则不需要再安装。若无任何打印信息，则表示该软件未安装。

2.  清除缓存。

    ```
    dnf clean all
    ```

3.  创建缓存。

    ```
    dnf makecache
    ```

4.  查询可安装的JDK软件包。

    ```
    dnf search jdk | grep jdk
    ```

    查看命令打印信息，选择安装java-x.x.x-openjdk-devel.aarch64软件包。其中x.x.x为版本号。

5.  安装JDK软件包，以安装java-1.8.0-openjdk-devel软件包为例。

    ```
    dnf install java-1.8.0-openjdk-devel.aarch64
    ```

6.  查询JDK软件版本。

    ```
    java -version
    ```

    查看打印信息，若打印信息中包括“openjdk version "1.8.0\_232"”信息，表示已正确安装，其中1.8.0\_232为版本号。


