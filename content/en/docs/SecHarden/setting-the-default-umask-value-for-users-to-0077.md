# Setting the Default  **umask**  Value for Users to  **0077**<a name="EN-US_TOPIC_0192977561"></a>

## Description<a name="en-us_topic_0152100253_s597cadfb7d0c4e8db5803ff197f652fa"></a>

The  **umask**  value is used to set default permission on files and directories. A smaller  **umask**  value indicates that group users or other users have incorrect permission, which brings system security risks. Therefore, the default  **umask**  value must be set to  **0077**  for all users, that is, the default permission on user directories is  **700**  and the permission on user files is  **600**. The  **umask**  value indicates the complement of a permission. For details about how to convert the  **umask**  value to a permission, see  [umask Values](umask-values.md).

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>By default, the  **umask**  value of the openEuler user is set to  **0077**.  

## Implementation<a name="en-us_topic_0152100253_s4d3a22f9ecc347ac80092d595e459f2c"></a>

1.  Add  **umask 0077**  to the  **/etc/bashrc**  file and all files in the  **/etc/profile.d/**  directory.

    ```
    echo "umask 0077" >> $FILE
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >_$FILE_  indicates the file name, for example, echo "umask 0077" \>\> /etc/bashrc.  

2.  Set the ownership and group of the  **/etc/bashrc**  file and all files in the  **/etc/profile.d/**  directory to  **root**.

    ```
    chown root.root $FILE
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >_$FILE_  indicates the file name, for example,  **chown root.root /etc/bashrc**.  


