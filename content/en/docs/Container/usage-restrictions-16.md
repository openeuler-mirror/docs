# Usage Restrictions<a name="EN-US_TOPIC_0225002727"></a>

-   Ensure that SELinux is enabled for the host and daemon \(the  **selinux-enabled**  field in the  **/etc/isulad/daemon.json**  file is set to  **true**  or  **--selinux-enabled**  is added to command line parameters\).
-   Ensure that a proper SELinux policy has been configured on the host. container-selinux is recommended.
-   The introduction of SELinux affects the performance. Therefore, evaluate the scenario before setting SELinux. Enable the SELinux function for the daemon and set the SELinux configuration in the container only when necessary.
-   When you configure labels for a mounted volume, the source directory cannot be a subdirectory of  **/**,  **/usr**,  **/etc**,  **/tmp**,  **/home**,  **/run**,  **/var**,  **/root**, or  **/usr**.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   iSulad does not support labeling the container file system. To ensure that the container file system and configuration directory are labeled with the container access permission, run the  **chcon**  command to label them.  
>-   If SELinux access control is enabled for iSulad, you are advised to add a label to the  **/var/lib/isulad**  directory before starting daemon. Files and folders generated in the directory during container creation inherit the label by default. For example:  
>    ```  
>    chcon -R system_u:object_r:container_file_t:s0 /var/lib/isulad  
>    ```  

