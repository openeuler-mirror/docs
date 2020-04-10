# Initializing the Database<a name="EN-US_TOPIC_0230050749"></a>

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>Perform this step as the postgres user.  

1.  Switch to the created PostgreSQL user.

    ```
    #su - postgres
    ```

2.  Initialize the database. In the command,  **/usr/bin**  is the directory where the  **initdb**  command is located.

    ```
    $/usr/bin/initdb -D /data/
    ```


