# Starting the Database<a name="EN-US_TOPIC_0230050750"></a>

1.  Enable the PostgreSQL database.

    ```
    $/usr/bin/pg_ctl -D /data/ -l /data/logfile start
    ```

2.  Check whether the PostgreSQL database process is started properly.

    ```
    $ps -ef | grep postgres
    ```

    If the following information is displayed, the PostgreSQL processes have been started.

    ![](figures/postgres.png)


