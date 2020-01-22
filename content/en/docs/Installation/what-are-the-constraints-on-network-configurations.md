# What Are the Constraints on Network Configurations?<a name="EN-US_TOPIC_0214071161"></a>

The NetworkManager and network services are network service management tools. Some functions of the two services overlap.

-   If the NetworkManager management service is used, run the  **nmcli**  command or modify the configuration file to configure the network \(such as the IP address and route\). Do not run the  **ip**,  **ifconfig**, or  **route**  command to configure the network.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >When the NetworkManager service is enabled and you run commands such as  **ip**,  **ifconfig**, and  **route**  to configure the network, the configurations will be overwritten by NetworkManager later.  

    To check whether NetworkManager is enabled, run the following command:

    ```
    systemctl status NetworkManager
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >For details about the use of the  **nmcli**  command, see the execution result of the  **nmcli --help**  or  **man nmcli**  command.  

-   If you want to run commands such as  **ip**,  **ifconfig**, and  **route**  commands to manage network information, run the following command to disable the NetworkManager service:

    ```
    systemctl stop NetworkManager
    ```


