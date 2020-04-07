# Setting the  **umask**  Value for a Daemon<a name="EN-US_TOPIC_0192977550"></a>

## Description<a name="en-us_topic_0152099760_s4fa353681bd7456886eb6e0f08b6c15c"></a>

The  **umask**  value is used to set default permission on files and directories. If the  **umask**  value is not specified, the file has the globally writable permission. This brings risks. A daemon provides a service for the system to receive user requests or network customer requests. To improve the security of files and directories created by the daemon, you are advised to set  **umask**  to  **0027**. The  **umask**  value indicates the complement of a permission. For details about how to convert the  **umask**  value to a permission, see  [umask Values](umask-values.md).

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>By default, the  **umask**  value of the daemon is set to  **0027**  in openEuler.  

## Implementation<a name="en-us_topic_0152099760_sc90ceeadeac64151a3ded98010e6df3a"></a>

In configuration file  **/etc/sysconfig/init**, add  **umask 0027**  as a new row.

