# Managing Nginx<a name="EN-US_TOPIC_0230790874"></a>

## Overview<a name="section3107702212"></a>

You can use the systemctl tool to manage the Nginx service, including starting, stopping, and restarting the service, and viewing the service status. This section describes how to manage the Nginx service.

## Prerequisites<a name="section131515451836"></a>

-   Ensure that the Nginx service has been installed. If not, install it by referring to  [Installing Nginx](installing-nginx.md).

    For more information about service management, see  [Service Management](service-management.md).

-   To start, stop, and restart the httpd service, you must have the  **root**  permission.

## Starting a Service<a name="section11706181733216"></a>

-   Run the following command to start and run the Nginx service:

    ```
    # systemctl start nginx
    ```


-   If you want the Nginx service to automatically start when the system starts, the command and output are as follows:

    ```
    # systemctl enable nginx
    Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /usr/lib/systemd/system/nginx.service.
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If the running Nginx server functions as a secure server, a password is required after the system is started. The password is an encrypted private SSL key.  

## Stopping the Service<a name="section7891712153914"></a>

-   Run the following command to stop the httpd service:

    ```
    # systemctl stop nginx
    ```

-   If you want to prevent the service from automatically starting during system startup, the command and output are as follows:

    ```
    # systemctl disable nginx
    Removed /etc/systemd/system/multi-user.target.wants/nginx.service.
    ```


## Restarting a Service<a name="section8969014114210"></a>

You can restart the service in any of the following ways:

-   Restart the service.

    ```
    # systemctl restart nginx
    ```

    This command stops the ongoing Nginx service and restarts it immediately. This command is generally used after a service is installed or when a dynamically loaded module \(such as PHP\) is removed.

-   Reload the configuration.

    ```
    # systemctl reload httpd
    ```

    This command causes the running Nginx service to reload its configuration file. Any requests that are currently being processed will be interrupted, causing the client browser to display an error message or re-render some pages.

-   Smoothly restart Nginx.

    ```
    # kill -HUP PID
    ```

    This command causes the running Nginx service to reload its configuration file. Any requests that are currently being processed will continue to use the old configuration file.


## Verifying the Service Status<a name="section149961826829"></a>

Check whether the httpd service is running.

```
# systemctl is-active nginx
```

If  **active **is displayed in the command output, the service is running.

