# Usage Restrictions<a name="EN-US_TOPIC_0184808152"></a>

-   The default capability list \(whitelist\) of the iSulad service, which is carried by common container processes by default, are as follows:

    ```
    "CAP_CHOWN",
    "CAP_DAC_OVERRIDE",
    "CAP_FSETID",
    "CAP_FOWNER",
    "CAP_MKNOD",
    "CAP_NET_RAW",
    "CAP_SETGID",
    "CAP_SETUID",
    "CAP_SETFCAP",
    "CAP_SETPCAP",
    "CAP_NET_BIND_SERVICE",
    "CAP_SYS_CHROOT",
    "CAP_KILL",
    "CAP_AUDIT_WRITE"
    ```

-   Default configurations of capabilities include  **CAP\_SETUID**  and  **CAP\_FSETID**. If the host and a container share a directory, the container can set permissions for the binary file in the shared directory. Common users on the host can use this feature to elevate privileges. The container can write  **CAP\_AUDIT\_WRITE**  to the host, which may cause risks. If the application scenario does not require this capability, you are advised to use  **--cap-drop**  to delete the capability when starting the container.
-   Adding capabilities means that the container process has greater capabilities than before. In addition, more system call APIs are opened.

