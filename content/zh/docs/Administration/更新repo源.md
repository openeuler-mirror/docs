# 更新repo源<a name="ZH-CN_TOPIC_0183245390"></a>

更新repo源有两种方式：

-   通过新版本的ISO更新已有的repo源，与创建repo源的方式相同，即挂载镜像或者重新拷贝镜像至本地目录
-   在repo源的Packages目录下添加rpm包，然后更新repo源，可通过createrepo命令更新repo源

    ```
    dnf install createrepo
    createrepo --update --workers=10 /srv/repo
    ```

    其中，\--update表示更新，\--workers表示线程数，可自定义。


