# Disabling SELinux<a name="EN-US_TOPIC_0230704894"></a>

1.  Modify the configuration file.

    ```
    #sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/sysconfig/selinux
    ```


