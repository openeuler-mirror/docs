# Creating a Database Directory and Granting Permissions<a name="EN-US_TOPIC_0231470871"></a>

1.  In the created data directory  **/data**, create directories for processes and grant permissions to the MySQL group or user created.

    ```
    #mkdir -p /data/mysql
    #cd /data/mysql
    #mkdir data tmp run log
    #chown -R mysql:mysql /data
    ```


