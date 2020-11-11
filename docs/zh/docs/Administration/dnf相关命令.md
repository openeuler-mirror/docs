# dnf相关命令<a name="ZH-CN_TOPIC_0183245398"></a>

dnf命令在安装升级时能够自动解析包的依赖关系，一般的使用方式如下：

```
dnf <command> <packages name>
```

常用的命令如下：

-   安装

    ```
    dnf install <packages name>
    ```

-   升级

    ```
    dnf update <packages name>
    ```

-   回退

    ```
    dnf downgrade <packages name>
    ```

-   检查更新

    ```
    dnf check-update
    ```

-   卸载

    ```
    dnf remove <packages name>
    ```

-   查询

    ```
    dnf search <packages name>
    ```

-   本地安装

    ```
    dnf localinstall <absolute path to package name>
    ```

-   查看历史记录

    ```
    dnf history
    ```

-   清除缓存目录

    ```
    dnf clean all
    ```

-   更新缓存

    ```
    dnf makecache
    ```


