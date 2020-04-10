# Creating a Database Directory and Granting Permissions<a name="EN-US_TOPIC_0230704897"></a>

1.  In the created data directory  **/data**, create directories for processes and grant permissions to the MySQL group or user created.

    ```
    #mkdir -p /data/mariadb
    #cd /data/mariadb
    #mkdir data tmp run log
    #chown -R mysql:mysql /data
    ```


