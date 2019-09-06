# search<a name="ZH-CN_TOPIC_0184808274"></a>

用法：**docker search \[OPTIONS\] TERM**

功能：在镜像库中查找特定的镜像

选项：

--automated=false    显示自动构建的image

--no-trunc=false      不对输出进行删减

-s, --stars=0         只显示特定星级以上的image

示例：

1.  在官方镜像库中搜寻nginx

    ```
    $ sudo docker search nginx
    NAME                              DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
    nginx                             Official build of Nginx.                        11873               [OK]
    jwilder/nginx-proxy               Automated Nginx reverse proxy for docker con…   1645                                    [OK]
    richarvey/nginx-php-fpm           Container running Nginx + PHP-FPM capable of…   739                                     [OK]
    linuxserver/nginx                 An Nginx container, brought to you by LinuxS…   74
    bitnami/nginx                     Bitnami nginx Docker Image                      70                                      [OK]
    tiangolo/nginx-rtmp               Docker image with Nginx using the nginx-rtmp…   51                                      [OK]
    ```

2.  在私有镜像库中搜寻busybox，在私有镜像库中搜寻时要加上私有镜像库的地址

    ```
    $ sudo docker search 192.168.1.110:5000/busybox
    ```


