# Constraints<a name="EN-US_TOPIC_0184808047"></a>

-   In high concurrency scenarios \(200 containers are concurrently started\), the memory management mechanism of Glibc may cause memory holes and large virtual memory \(for example, 10 GB\). This problem is caused by the restriction of the Glibc memory management mechanism in the high concurrency scenario, but not by memory leakage. Therefore, the memory consumption does not increase infinitely. You can set  **MALLOC\_ARENA\_MAX**  to reducevirtual memory error and increase the rate of reducing physical memory. However, this environment variable will cause the iSulad concurrency performance to deteriorate. Set this environment variable based on the site requirements.

    ```
    To balance performance and memory usage, set MALLOC_ARENA_MAX to 4. (The iSulad performance on the ARM64 server is affected by less than 10%.)
    
    Configuration method:
    1. To manually start iSulad, run the export MALLOC_ARENA_MAX=4 command and then start iSulad.
    2. If systemd manages iSulad, you can modify the /etc/sysconfig/iSulad file by adding MALLOC_ARENA_MAX=4.
    ```

-   Precautions for specifying the daemon running directories

    Take  **--root**  as an example. When  **/new/path/**  is used as the daemon new root directory, if a file exists in  **/new/path/**  and the directory or file name conflicts with that required by iSulad \(for example,  **engines**  and  **mnt**\), iSulad may update the original directory or file attributes including the owner and permission.

    Therefore, please note the impact of re-specifying various running directories and files on their attributes. You are advised to specify a new directory or file for iSulad to avoid file attribute changes and security issues caused by conflicts.

-   Log file management:

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >Log function interconnection: logs are managed by systemd as iSulad is and then transmitted to rsyslogd. By default, rsyslog restricts the log writing speed. You can add the configuration item  **$imjournalRatelimitInterval 0**  to the  **/etc/rsyslog.conf**  file and restart the rsyslogd service.  

-   Restrictions on command line parameter parsing

    When the iSulad command line interface is used, the parameter parsing mode is slightly different from that of Docker. For flags with parameters in the command line, regardless of whether a long or short flag is used, only the first space after the flag or the character string after the equal sign \(=\) directly connected to the flag is used as the flag parameter. The details are as follows:

    1.  When a short flag is used, each character in the character string connected to the hyphen \(-\) is considered as a short flag. If there is an equal sign \(=\), the character string following the equal sign \(=\) is considered as the parameter of the short flag before the equal sign \(=\).

        **isula run -du=root busybox**  is equivalent to  **isula run -du root busybox**,  **isula run -d -u=root busybox**, or  **isula run -d -u root busybox**. When  **isula run -du:root**  is used, as  **-:**  is not a valid short flag, an error is reported. The preceding command is equivalent to  **isula run -ud root busybox**. However, this method is not recommended because it may cause semantic problems.

    1.  When a long flag is used, the character string connected to  **--**  is regarded as a long flag. If the character string contains an equal sign \(=\), the character string before the equal sign \(=\) is a long flag, and the character string after the equal sign \(=\) is a parameter.

        ```
        isula run --user=root busybox
        ```

        or

        ```
        isula run --user root busybox
        ```


-   After an iSulad container is started, you cannot run the  **isula run -i/-t/-ti**  and  **isula attach/exec**  commands as a non-root user.
-   When iSulad connects to an OCI container, only kata-runtime can be used to start the OCI container.

