# Running the nmcli Command<a name="EN-US_TOPIC_0229622778"></a>

-   To create a bond named  **mybond0**, run the following command: 

    ```
    # nmcli con add type bond con-name mybond0 ifname mybond0 mode active-backup
    ```

-   To add a slave interface, run the following command:

    ```
    # nmcli con add type bond-slave ifname enp3s0 master mybond0
    ```

    To add another slave interface, repeat the preceding command with the new interface name:

    ```
    # nmcli con add type bond-slave ifname enp4s0 master mybond0
    Connection 'bond-slave-enp4s0' (05e56afc-b953-41a9-b3f9-0791eb49f7d3) successfully added.
    ```

-   To enable a bond, run the following command to enable the slave interface first:

    ```
    # nmcli con up bond-slave-enp3s0
    Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/14)
    ```

    ```
    # nmcli con up bond-slave-enp4s0
    Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/15)
    ```

    Then, run the following command to enable the bond:

    ```
    # nmcli con up bond-mybond0
    Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/16)
    ```


