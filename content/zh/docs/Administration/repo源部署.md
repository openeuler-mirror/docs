# repo源部署<a name="ZH-CN_TOPIC_0183245394"></a>

1.  创建nginx配置文件/etc/nginx/nginx.conf中指定的目录/srv/repo：

    ```
    mkdir -p /srv/repo
    ```

2.  SELinux设置为宽容模式：

    ```
    setenforce permissive
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >repo server重启后，需要重新设置。  

3.  设置防火墙规则，开启nginx设置的端口（此处为80端口），通过firewall设置端口开启：

    ```
    firewall-cmd --add-port=80/tcp --permanent
    firewall-cmd --reload
    ```

    查询80端口是否开启成功，输出为yes则表示80端口开启成功：

    ```
    firewall-cmd --query-port=80/tcp
    ```

    也可通过iptables来设置80端口开启：

    ```
    iptables -I INPUT -p tcp --dport 80 -j ACCEPT
    ```

4.  nginx服务设置好之后，即可通过ip直接访问网页，如[图1](#zh-cn_topic_0151921017_fig1880404110396)：

    **图 1**  nginx部署成功<a name="zh-cn_topic_0151921017_fig1880404110396"></a>  
    ![](figures/nginx部署成功.png "nginx部署成功")

5.  通过下面几种方式将repo源放入到/srv/repo下：
    -   拷贝镜像中相关文件至在/srv/repo下

        ```
        mount /home/openEuler/openEuler-1.0-base-aarch64-dvd.iso  /mnt/
        cp -r /mnt/Packages /srv/repo/
        cp -r /mnt/repodata /srv/repo/
        cp -r /mnt/RPM-GPG-KEY-openEuler /srv/repo/
        ```

        openEuler-1.0-base-aarch64-dvd.iso存放在/home/openEuler目录下。

    -   在/srv/repo下创建repo源的软链接

        ```
        ln -s /home/openEuler/os /srv/repo/os
        ```

        /home/openEuler/os为已经创建好的repo源，/srv/repo/os将指向/home/openEuler/os。



