# Daemon Running Directory Configuration<a name="EN-US_TOPIC_0184808197"></a>

Re-configuring various running directories and files \(including  **--graph**  and  **--exec-root**\) may cause directory conflicts or file attribute changes, affecting the normal use of applications.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>Therefore, the specified directories or files should be used only by Docker to avoid file attribute changes and security issues caused by conflicts.  

-   Take  **--graph**  as an example. When  **/new/path/**  is used as the new root directory of the daemon, if a file exists in  **/new/path/**  and the directory or file name conflicts with that required by Docker \(for example,  **containers**,  **hooks**, and  **tmp**\), Docker may update the original directory or file attributes, including the owner and permission.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>From Docker 17.05, the  **--graph**  parameter is marked as  **Deprecated**  and replaced with the  **--data-root**  parameter.  

