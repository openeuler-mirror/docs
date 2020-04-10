# Starting Nginx<a name="EN-US_TOPIC_0229622776"></a>

1.  Run the systemd command to start the Nginx service.

    ```
    systemctl enable nginx
    systemctl start nginx
    ```

2.  You can run the following command to check whether the Nginx is started successfully:

    ```
    systemctl status nginx
    ```

    -   [Figure 1](#en-us_topic_0151920971_fd25e3f1d664b4087ae26631719990a71)  indicates that the Nginx service is started successfully.

    **Figure  1**  The Nginx service is successfully started.<a name="en-us_topic_0151920971_fd25e3f1d664b4087ae26631719990a71"></a>  
    ![](figures/the-nginx-service-is-successfully-started.png "the-nginx-service-is-successfully-started")

    -   If the Nginx service fails to be started, view the error information.

    ```
    systemctl status nginx.service --full
    ```

    **Figure  2**  Nginx startup failure<a name="en-us_topic_0151920971_f1f9f3d086e454b9cba29a7cae96a4c54"></a>  
    ![](figures/nginx-startup-failure.png "nginx-startup-failure")

    As shown in  [Figure 2](#en-us_topic_0151920971_f1f9f3d086e454b9cba29a7cae96a4c54), the Nginx service fails to be created because the /var/spool/nginx/tmp/client\_body directory fails to be created. You need to manually create the directory. Similar problems are solved as follows:

    ```
    mkdir -p /var/spool/nginx/tmp/client_body
    mkdir -p /var/spool/nginx/tmp/proxy
    mkdir -p /var/spool/nginx/tmp/fastcgi
    mkdir -p /usr/share/nginx/uwsgi_temp
    mkdir -p /usr/share/nginx/scgi_temp
    ```


