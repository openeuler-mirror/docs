# Uninstalling MariaDB<a name="EN-US_TOPIC_0230408667"></a>

1.  Stop the database process.

    ```
    #ps -ef | grep mysql
    #kill -9 PID
    ```

2.  Run the  **dnf remove mariadb-server**  command to uninstall MariaDB.

    ```
    #dnf remove mariadb-server
    ```


