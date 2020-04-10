# Configuring a Static Route<a name="EN-US_TOPIC_0229622739"></a>

-   Run the nmcli command to configure a static route for a network connection:

    ```
    # nmcli connection modify enp3s0 +ipv4.routes "192.168.122.0/24 10.10.10.1"
    ```


-   Run the following command to configure the static route using the editor:

    ```
    # nmcli con edit type ethernet con-name enp3s0
    ===| nmcli interactive connection editor |===
    Adding a new '802-3-ethernet' connection
    Type 'help' or '?' for available commands.
    Type 'describe [<setting>.<prop>]' for detailed property description.
    You may edit the following settings: connection, 802-3-ethernet (ethernet), 802-1x, ipv4, ipv6, dcb
    nmcli> set ipv4.routes 192.168.122.0/24 10.10.10.1
    nmcli>
    nmcli> save persistent
    Saving the connection with 'autoconnect=yes'. That might result in an immediate activation of the connection.
    Do you still want to save? [yes] yes
    Connection 'enp3s0' (1464ddb4-102a-4e79-874a-0a42e15cc3c0) successfully saved.
    nmcli> quit
    ```


