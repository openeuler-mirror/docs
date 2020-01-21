# 使用nmcli<a name="ZH-CN_TOPIC_0183005801"></a>

-   创建名为mybond0的绑定，使用示例如下：

    ```
    # nmcli con add type bond con-name mybond0 ifname mybond0 mode active-backup
    ```

-   添加从属接口，使用示例如下：

    ```
    # nmcli con add type bond-slave ifname enp3s0 master mybond0
    ```

    要添加其他从属接口，重复上一个命令，并在命令中使用新的接口，使用示例如下：

    ```
    # nmcli con add type bond-slave ifname enp4s0 master mybond0
    Connection 'bond-slave-enp4s0' (05e56afc-b953-41a9-b3f9-0791eb49f7d3) successfully added.
    ```

-   要启动绑定，则必须首先启动从属接口，使用示例如下：

    ```
    # nmcli con up bond-slave-enp3s0
    Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/14)
    ```

    ```
    # nmcli con up bond-slave-enp4s0
    Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/15)
    ```

    现在可以启动绑定，使用示例如下：

    ```
    # nmcli con up bond-mybond0
    Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/16)
    ```


