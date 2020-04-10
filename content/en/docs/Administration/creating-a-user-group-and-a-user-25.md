# Creating a User Group and a User<a name="EN-US_TOPIC_0231470849"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>In the server environment, independent users are assigned to each process to implement permission isolation for security purposes. The user group and user are created for the OS, not for the database.  

1.  Create a MySQL user or user group.

    ```
    #groupadd mysql
    ```

    ```
    #useradd -g mysql mysql
    ```

2.  Set the user password.

    ```
    #passwd mysql
    ```

    Enter the password twice for confirmation.


