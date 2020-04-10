# Creating a User Group and a User<a name="EN-US_TOPIC_0230050743"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>In the server environment, independent users are assigned to each process to implement permission isolation for security purposes. The user group and user are created for the OS, not for the database.  

1.  Create a PostgreSQL user or user group.

    ```
    #groupadd  postgres
    ```

    ```
    #useradd  -g postgres postgres
    ```

2.  Set the postgres user password. \(Enter the password twice for confirmation.\)

    ```
    #passwd postgres
    ```


