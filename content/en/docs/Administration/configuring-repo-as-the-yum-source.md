# Configuring repo as the yum Source<a name="EN-US_TOPIC_0229622704"></a>

You can configure the built repo as the yum source and create the \*\*\*.repo configuration file \(the extension .repo is mandatory\) in the /etc/yum.repos.d/ directory. You can configure the yum source on the local host or HTTP server.

-   Configuring the local yum source.

    Create the  **openEuler.repo**  file in the  **/etc/yum.repos.d**  directory and use the local repository as the yum source. The content of the  **openEuler.repo**  file is as follows:

    ```
    [base]
    name=base
    baseurl=file:///srv/repo
    enabled=1
    gpgcheck=1
    gpgkey=file:///srv/repo/RPM-GPG-KEY-openEuler
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >_gpgcheck_  indicates whether to enable the GNU privacy guard \(GPG\) to check the validity and security of sources of RPM packages.  **1**  indicates GPG check is enabled.  **0**  indicates the GPG check is disabled. If this option is not specified, the GPG check is enabled by default.  
    >_gpgkey_  is the storage path of the signature public key.  

-   Configuring the yum source for the HTTP server

    Create the  **openEuler.repo**  file in the  **/etc/yum.repos.d**  directory and use the repository on the HTTP server as the yum source. The content of the  **openEuler.repo**  file is as follows:

    ```
    [base]
    name=base
    baseurl=http://192.168.1.2/
    enabled=1
    gpgcheck=1
    gpgkey=http://192.168.1.2/RPM-GPG-KEY-openEuler
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >192.168.1.2 is an example. Replace it with the actual IP address.  


