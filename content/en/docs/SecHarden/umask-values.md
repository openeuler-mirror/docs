# **umask**  Values<a name="EN-US_TOPIC_0192977576"></a>

When a user creates a file or directory, the file or directory has a default permission. The default permission is specified by the  **umask**  value.

The  **umask**  value is the complement of the permission value. The actual permission value is obtained by subtracting the  **umask**  value from the default maximum permission value. The default maximum permission of a file is readable and writable. The default maximum permission of a directory is readable, writable, and executable. The default permission of a file is 666 minus the  **umask**  value. The default permission of a directory is 777 minus the  **umask**  value.

