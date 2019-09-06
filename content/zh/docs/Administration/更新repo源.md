# 更新repo源<a name="ZH-CN_TOPIC_0183245390"></a>

更新repo源有两种方式：

-   通过新版本的ISO更新已有的repo源，与创建repo源的方式相同

    ```
    mkrepo -i /home/openEuler/openEuler-1.0-aarch64-dvd.iso -d /srv/repo/os/1.0/base/aarch64 --key-dir /srv/repo
    ```

-   在repo源的Packages目录下添加rpm包，然后更新repo源，可通过createrepo命令更新repo源

    ```
    createrepo --update --workers=10 /srv/repo/os/1.0/base/aarch64
    ```

    其中，--update表示更新，--workers表示线程数，可自定义。


对于update升级目录，同样用mkrepo构建repo源，保存到update目录下：

```
mkrepo -i /home/openEuler/openEuler-1.0-aarch64-dvd.iso -d /srv/repo/os/1.0/update/aarch64
```

