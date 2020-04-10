# Managing httpd<a name="EN-US_TOPIC_0229622758"></a>

## Overview<a name="section3107702212"></a>

You can use the systemctl tool to manage the httpd service, including starting, stopping, and restarting the service, and viewing the service status. This section describes how to manage the Apache HTTP service.

## Prerequisites<a name="section131515451836"></a>

-   To use the Apache HTTP service, ensure that the rpm package of the httpd service has been installed in your system. The installation command is as follows:

    ```
    # dnf install httpd
    ```

    For more information about service management, see  [Service Management](service-management.md).

-   To start, stop, and restart the httpd service, you must have the root permission.

## Starting a Service<a name="section11706181733216"></a>

-   Run the following command to start and run the httpd service:

    ```
    # systemctl start httpd
    ```


-   If you want the httpd service to automatically start when the system starts, the command and output are as follows:

    ```
    # systemctl enable httpd
    Created symlink /etc/systemd/system/multi-user.target.wants/httpd.service → /usr/lib/systemd/system/httpd.service.
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If the running Apache HTTP server functions as a secure server, a password is required after the system is started. The password is an encrypted private SSL key.  

## Stopping the Service<a name="section7891712153914"></a>

-   Run the following command to stop the httpd service:

    ```
    # systemctl stop httpd
    ```

-   If you want to prevent the service from automatically starting during system startup, the command and output are as follows:

    ```
    # systemctl disable httpd
    Removed /etc/systemd/system/multi-user.target.wants/httpd.service.
    ```


## Restarting a Service<a name="section8969014114210"></a>

You can restart the service in any of the following ways:

-   Restart the service by running the restart command:

    ```
    # systemctl restart httpd
    ```

    This command stops the ongoing httpd service and restarts it immediately. This command is generally used after a service is installed or when a dynamically loaded module \(such as PHP\) is removed.

-   Reload the configuration.

    ```
    # systemctl reload httpd
    ```

    This command causes the running httpd service to reload its configuration file. Any requests that are currently being processed will be interrupted, causing the client browser to display an error message or re-render some pages.

-   Re-load the configuration without affecting the activation request.

    ```
    # apachectl graceful
    ```

    This command causes the running httpd service to reload its configuration file. Any requests that are currently being processed will continue to use the old configuration file.


## Verifying the Service Status<a name="section149961826829"></a>

Check whether the httpd service is running.

```
# systemctl is-active httpd
```

If active is displayed in the command output, the service is running.

