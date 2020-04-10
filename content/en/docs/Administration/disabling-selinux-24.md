# Disabling SELinux<a name="EN-US_TOPIC_0231470848"></a>

1.  Modify the configuration file.

    ```
    #sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/sysconfig/selinux
    ```


