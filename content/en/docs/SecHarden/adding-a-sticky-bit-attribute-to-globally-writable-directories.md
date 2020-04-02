# Adding a Sticky Bit Attribute to Globally Writable Directories<a name="EN-US_TOPIC_0192977554"></a>

## Description<a name="en-us_topic_0152100381_s5bbca876a6234c99aae0ce5482649813"></a>

Any user can delete or modify a file or directory in a globally writable directory, which leads to unauthorized file or directory deletion. Therefore, the sticky bit attribute is required for globally writable directories. 

## Implementation<a name="en-us_topic_0152100381_s658bb6016a4a4dffa4cba2c473c6b395"></a>

1.  Search for globally writable directories.

    ```
    find / -type d -perm -0002 ! -perm -1000 -ls | grep -v proc
    ```

2.  Add the sticky bit attribute to globally writable directories.  _dirname_  indicates the name of the directory that is found.

    ```
    chmod +t dirname
    ```


