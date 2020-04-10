# Using vsftpd<a name="EN-US_TOPIC_0229622800"></a>

## Installing vsftpd<a name="section99431953811"></a>

To use the vsftpd service, you need to install the vsftpd software. If the yum source has been configured, run the following command as the root user to install the vsftpd service:

```
# dnf install vsftpd
```

## Service Management<a name="section1731910191272"></a>

To start, stop, or restart the vsftpd service, run the corresponding command as the root user.

-   Starting vsftpd services

    ```
    # systemctl start vsftpd
    ```

    You can run the netstat command to check whether communication port 21 is enabled. If the following information is displayed, the vsftpd service has been enabled.

    ```
    # netstat -tulnp | grep 21
    tcp6       0      0 :::21                   :::*                    LISTEN      19716/vsftpd
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >If the netstat command does not exist, run the following command to install the netstat command and then run the netstat command:  
    >```  
    >dnf install net-tools  
    >```  

-   Stopping the vsftpd services

    ```
    # systemctl stop vsftpd
    ```


-   Restarting the vsftpd service

    ```
    # systemctl restart vsftpd
    ```


