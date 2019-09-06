# yum相关命令<a name="ZH-CN_TOPIC_0183245398"></a>

yum命令在安装升级时能够自动解析包的依赖关系，一般的使用方式如下：

```
yum <command> <packages name>
```

常用的命令如下：

-   安装

    ```
    yum install <packages name>
    ```

-   升级

    ```
    yum update <packages name>
    ```

-   回退

    ```
    yum downgrade <packages name>
    ```

-   检查更新

    ```
    yum check-update
    ```

-   卸载

    ```
    yum remove <packages name>
    ```

-   查询

    ```
    yum search <packages name>
    ```

-   本地安装

    ```
    yum localinstall <absolute path to package name>
    ```

-   查看历史记录

    ```
    yum history
    ```

-   清除缓存目录

    ```
    yum clean all
    ```

-   更新缓存

    ```
    yum makecache
    ```


