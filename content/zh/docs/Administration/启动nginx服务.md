# 启动nginx服务<a name="ZH-CN_TOPIC_0183245393"></a>

1.  通过systemd启动nginx服务：

    ```
    systemctl enable nginx
    systemctl start nginx
    ```

2.  nginx是否启动成功可通过下面命令查看：

    ```
    systemctl status nginx
    ```

    -   [图1](#zh-cn_topic_0151920971_fd25e3f1d664b4087ae26631719990a71)表示nginx服务启动成功

    **图 1**  nginx服务启动成功<a name="zh-cn_topic_0151920971_fd25e3f1d664b4087ae26631719990a71"></a>  
    ![](figures/nginx服务启动成功.png "nginx服务启动成功")

    -   若nginx服务启动失败，查看错误信息：

    ```
    systemctl status nginx.service --full
    ```

    **图 2**  nginx服务启动失败<a name="zh-cn_topic_0151920971_f1f9f3d086e454b9cba29a7cae96a4c54"></a>  
    ![](figures/nginx服务启动失败.png "nginx服务启动失败")

    如[图2](#zh-cn_topic_0151920971_f1f9f3d086e454b9cba29a7cae96a4c54)所示nginx服务创建失败，是由于目录/var/spool/nginx/tmp/client\_body创建失败，手动进行创建，类似的问题也这样处理：

    ```
    mkdir -p /var/spool/nginx/tmp/client_body
    mkdir -p /var/spool/nginx/tmp/proxy
    mkdir -p /var/spool/nginx/tmp/fastcgi
    mkdir -p /usr/share/nginx/uwsgi_temp
    mkdir -p /usr/share/nginx/scgi_temp
    ```


