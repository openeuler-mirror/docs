# Overview<a name="EN-US_TOPIC_0231482093"></a>

-   You can run the  **atune-adm help/--help/-h**  command to query commands supported by atune-adm.
-   All example commands are used in single-node mode. For distributed mode, specify an IP address and port number. For example:

    ```
    #  atune-adm -a 192.168.3.196 -p 60001 list
    ```

-   The  **define**,  **update**,  **undefine**,  **collection**,  **train**, and  **upgrade **commands do not support remote execution.
-   In the command format, brackets \(\[\]\) indicate that the parameter is optional, and angle brackets \(<\>\) indicate that the parameter is mandatory. The actual parameters prevail.
-   In the command format, meanings of each command are as follows:
    -   **WORKLOAD\_TYPE**: name of a user-defined workload type. For details about the supported workload types, see the query result of the  **list**  command.
    -   **PROFILE\_NAME**: user-defined profile name.
    -   **PROFILE\_PATH**: path of the user-defined profile.


