# nmcli介绍<a name="ZH-CN_TOPIC_0183005781"></a>

nmcli是NetworkManager的一个命令行工具，它提供了使用命令行配置由NetworkManager管理网络连接的方法。nmcli命令的基本格式为：

```
 nmcli [OPTIONS] OBJECT { COMMAND | help }
```

其中，OBJECT选项可以是general、networking、radio、connection或device等。在日常使用中，最常使用的是-t, \--terse（用于脚本）、-p, \--pretty选项（用于用户）及-h, \--help选项，用户可以使用“ nmcli help”获取更多参数及使用信息。

```
# nmcli help
```

常用命令使用举例如下：

-   显示NetworkManager状态：

    ```
    nmcli general status
    ```

-   显示所有连接：

    ```
    nmcli connection show
    ```

-   只显示当前活动连接，如下所示添加 -a, \--active：

    ```
    nmcli connection show --active
    ```

-   显示由NetworkManager识别到设备及其状态：

    ```
    nmcli device status
    ```

-   使用nmcli工具启动和停止网络接口，例如：

    ```
    
    nmcli connection up id enp3s0
    nmcli device disconnect enp3s0
    ```


