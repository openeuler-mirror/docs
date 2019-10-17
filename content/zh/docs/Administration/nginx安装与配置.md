# nginx安装与配置<a name="ZH-CN_TOPIC_0183245392"></a>

1.  请自行下载nginx工具并安装nginx。
2.  安装nginx之后，配置/etc/nginx/nginx.conf。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >文档中的配置内容仅供参考，请用户根据实际情况（例如安全加固需要）进行配置。  

    ```
    user  root;
    worker_processes  auto;                          # 建议设置为core-1
    error_log  /var/log/nginx/error.log  warn;       # log存放位置
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
            server_name  localhost;                 # 服务器名（url）
            client_max_body_size 4G;
            root         /srv/repo;                 # 服务默认目录
    
            location / {
                autoindex            on;            # 开启访问目录下层文件
                autoindex_exact_size on;
                autoindex_localtime  on; 
            }
    
        }
    
    }
    ```


