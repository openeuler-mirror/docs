# Running MariaDB Server<a name="EN-US_TOPIC_0230408666"></a>

1.  Start the MariaDB server.

    ```
    #systemctl start mariadb
    ```

2.  <a name="li197143190587"></a>Initialize the database.

    ```
    #/usr/bin/mysql_secure_installation
    ```

    During the command execution, you need to enter the password of the database user  **root**. If no password is set, press  **Enter**. Then, set the password as prompted.

3.  Log in to the database.

    ```
    # mysql -u root -p
    ```

    After the command is executed, the system prompts you to enter the password. The password is the one set in  [2](#li197143190587).

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Run the  **\\q**  or  **exit**  command to exit the database.  


