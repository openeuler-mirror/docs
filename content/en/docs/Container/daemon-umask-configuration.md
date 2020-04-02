# Daemon umask Configuration<a name="EN-US_TOPIC_0184808199"></a>

The default  **umask**  value of the main container process and exec process is  **0022**. To meet security specifications and prevent containers from being attacked, the default value of  **umask**  is changed to  **0027**  after runC implementation is modified. After the modification, the other groups cannot access new files or directories.

The default value of  **umask**  is  **0027**  when Docker starts a container. You can change the value to  **0022**  by running the  **--exec-opt native.umask=normal**  command during container startup.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>If  **native.umask**  is configured in  **docker create**  or  **docker run**  command, its value is used.  

For details, see the parameter description in  [4.6.2.4 create](create.md#EN-US_TOPIC_0184808242)  and  [4.6.2.16 run](container-management-40.md#EN-US_TOPIC_0184808238).

