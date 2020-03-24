# 修改SELINUX为disabled<a name="ZH-CN_TOPIC_0231470848"></a>

1.  修改配置文件。

    ```
    #sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/sysconfig/selinux
    ```


