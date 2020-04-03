# Deleting Unowned Files<a name="EN-US_TOPIC_0192977548"></a>

## Description<a name="en-us_topic_0152100258_s7f524cb8fd5d4a7ab8b04a3f09a6e84e"></a>

When deleting a user or group, the system administrator may forget to delete the files of the user or group. If the name of a new user or group is the same as that of the deleted user or group, the new user or group will own files on which it has no permission. You are advised to delete these files.

## Implementation<a name="en-us_topic_0152100258_s40e6dc3142ee4901a704327e0747f6d1"></a>

Delete the file whose user ID does not exist.

1.  Search for the file whose user ID does not exist.

    ```
    find / -nouser
    ```

2.  Delete the found file. In the preceding command,  _filename_  indicates the name of the file whose user ID does not exist.

    ```
    rm -f filename
    ```


Delete the file whose group ID does not exist.

1.  Search for the file whose user ID does not exist.

    ```
    find / -nogroup
    ```

2.  Delete the found file. In the preceding command,  _filename_  indicates the name of the file whose user ID does not exist.

    ```
    rm -f filename
    ```


