# Installing and Configuring Nginx<a name="EN-US_TOPIC_0229622702"></a>

1.  Download the Nginx tool and install it.
2.  After installing Nginx, configure /etc/nginx/nginx.conf.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The configuration content in this document is for reference only. You can configure the content based on the site requirements \(for example, security hardening requirements\).  

    ```
    user  root;
    worker_processes auto;                             # You are advised to set this parameter to core-1.
    error_log /var/log/nginx/error.log warn;            # log storage location
    pid        /var/run/nginx.pid;
    
    events {
        worker_connections  1024;
    }
    
    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;
    
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
    
        access_log  /var/log/nginx/access.log  main;
        sendfile        on;
        keepalive_timeout  65;
    
        server {
            listen       80;
    server_name localhost;                         #Server name (URL)
            client_max_body_size 4G;
    root /srv/repo;                              #Default service directory
    
            location / {
    autoindex on;                                    # Enable the access to lower-layer files in the directory.
                autoindex_exact_size on;
                autoindex_localtime  on; 
            }
    
        }
    
    }
    ```


