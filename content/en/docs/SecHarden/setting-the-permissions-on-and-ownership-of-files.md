# Setting the Permissions on and Ownership of Files<a name="EN-US_TOPIC_0192977547"></a>

## Description<a name="en-us_topic_0152100343_seaafaf18fb1a4664a544d16bb3b63d19"></a>

In Linux, all objects are processed as files. Even a directory will be processed as a large file containing many files. Therefore, the most important thing in Linux is the security of files and directories. Their security is ensured by permissions and owners.

By default, the permissions and ownership of common directories, executable files, and configuration files in the system are set in openEuler.

## Implementation<a name="en-us_topic_0152100343_s18da65b4677f44ad932ae3f79e115386"></a>

The following uses the  **/bin**  directory as an example to describe how to change the permission and ownership of a file:

-   Modify the file permission. For example, set the permission on the  **/bin**  directory to  **755**.

    ```
    chmod 755 /bin
    ```

-   Change the ownership of the file. For example, set the ownership and group of the  **/bin**  directory to  **root:root**.

    ```
    chown root:root /bin
    ```


