# Uninstalling MySQL<a name="EN-US_TOPIC_0231470875"></a>

1.  Stop the database process.

    ```
    #ps -ef | grep mysql
    #kill -9 PID
    ```

2.  Run the  **dnf remove mysql**  command to uninstall MySQL.

    ```
    #dnf remove mysql
    ```


