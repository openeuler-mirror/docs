# Introduction to nmcli<a name="EN-US_TOPIC_0229622760"></a>

**nmcli**  \(NetworkManager Command Line Interface\) is the command-line utility to configure networking through NetworkManager. The basic format of using  **nmcli**  is as follows:

```
 nmcli [OPTIONS] OBJECT { COMMAND | help }
```

In the preceding command,  **OBJECT**  can be one of the following options:  **general**,  **networking**,  **radio**,  **connection**, and  **device**.  **OPTIONS**  can be optional options, such as  **-t**,  **--terse**  \(for script processing\),** -p**,  **--pretty**  \(for human-readable output\),  **-h**, and  **--help**. For more information, run the  **nmcli help**  command.

```
# nmcli help
```

Common commands are listed as follows:

-   To display the general status of NetworkManager, run the following command:

    ```
    nmcli general status
    ```

-   To display all connections, run the following command:

    ```
    nmcli connection show
    ```

-   To display the current active connections only, add the  **-a**  or  **--active**  option as follows:

    ```
    nmcli connection show --active
    ```

-   To display the device identified by NetworkManager and its connection status, run the following command:

    ```
    nmcli device status
    ```

-   To start or stop network interfaces, for example, run the nmcli commands:

    ```
    
    nmcli connection up id enp3s0
    nmcli device disconnect enp3s0
    ```


