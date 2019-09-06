# 使用nmcli<a name="ZH-CN_TOPIC_0183005801"></a>

-   创建名为 mybond0 的绑定，使用示例如下：

    ```
    # nmcli con add type bond con-name mybond0 ifname mybond0 mode activebackup
    Connection 'mybond0' (9301ff97-abbc-4432-aad1-246d7faea7fb) successfully added.
    ```

-   添加从属接口，使用示例如下：

    ```
    # nmcli con add type bond-slave ifname ens7 master mybond0
    ```

    要添加其他从属接口，重复上一个命令，并在命令中使用新的接口，使用示例如下：

    ```
    # nmcli con add type bond-slave ifname ens3 master mybond0
    Connection 'bond-slave-ens3-1' (50c59350-1531-45f4-ba04-33431c16e386) successfully added.
    ```

-   要启动绑定，则必须首先启动从属接口，使用示例如下：

    ```
    # nmcli con up bond-slave-ens7
    Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/14)
    ```

    ```
    # nmcli con up bond-slave-ens3
    Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/15)
    ```

    现在可以启动绑定，使用示例如下：

    ```
    # nmcli con up bond-mybond0
    Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/16)
    ```


