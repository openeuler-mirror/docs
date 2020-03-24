# 安装rpm-build软件包<a name="ZH-CN_TOPIC_0229243726"></a>

1.  执行**dnf list installed | grep rpm-build**  查询rpm-build软件是否已安装。

    ```
    dnf list installed | grep rpm-build
    ```

    查看命令打印信息，若打印信息中包含“rpm-build”，表示该软件已经安装了，则不需要再安装。若无任何打印信息，则表示该软件未安装。

2.  清除缓存。

    ```
    dnf clean all
    ```

3.  创建缓存。

    ```
    dnf makecache
    ```

4.  安装rpm-build软件包。

    ```
    dnf install rpm-build
    ```

5.  查询rpm-build软件版本。

    ```
    rpmbuild --version
    ```


