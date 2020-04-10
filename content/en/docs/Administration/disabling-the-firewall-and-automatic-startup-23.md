# Disabling the Firewall and Automatic Startup<a name="EN-US_TOPIC_0231470847"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>It is recommended that firewall be disabled in the test environment to prevent network impact. Configure the firewall based on actual requirements.  

1.  Stop the firewall service.

    ```
    #systemctl stop firewalld
    ```

2.  Disable the firewall service.

    ```
    #systemctl disable firewalld
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The automatic startup is automatically disabled as the firewall is disabled.  


