# Installing the LVM<a name="EN-US_TOPIC_0230915933"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The LVM has been installed on the openEuler OS by default. You can run the  **rpm -qa | grep lvm2**  command to check whether it is installed. If the command output contains "lvm2", the LVM has been installed. In this case, skip this section. If no information is output, the LVM is not installed. Install it by referring to this section.  

1.  Configure the local yum source. For details, see  [Configuring the Repo Server](configuring-the-repo-server.md).
2.  Clear the cache.

    ```
    #dnf clean all
    ```

3.  Create a cache.

    ```
    #dnf makecache
    ```

4.  Install the LVM.

    ```
    #dnf install lvm2
    ```

5.  Check the installed RPM package.

    ```
    #rpm -qa | grep lvm2
    ```


