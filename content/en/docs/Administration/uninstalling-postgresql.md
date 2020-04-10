# Uninstalling PostgreSQL<a name="EN-US_TOPIC_0230050756"></a>

1.  Stop the database as the postgres user.

    ```
    $/usr/bin/pg_ctl -D /data/ -l /data/logfile stop
    ```

2.  Run the  **dnf remove postgresql-server**  command as the user  **root**  to uninstall the PostgreSQL database.

    ```
    #dnf remove postgresql-server
    ```


