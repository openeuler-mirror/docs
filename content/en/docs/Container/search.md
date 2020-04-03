# search<a name="EN-US_TOPIC_0184808274"></a>

Syntax:  **docker search **_options_ _TERM_

Function: Searches for a specific image in the image registry.

Parameter description:

**--automated=false**: Displays the automatically built image.

**--no-trunc=false**: Does not delete any output.

**-s**  and  **--stars=0**: Display only images of a specified star level or higher.

Example:

1.  Run the following command to search for Nginx in the official image library:

    ```
    $ sudo docker search nginx
    NAME                              DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
    nginx                             Official build of Nginx.                        11873               [OK]
    jwilder/nginx-proxy               Automated Nginx reverse proxy for docker con...   1645                                    [OK]
    richarvey/nginx-php-fpm           Container running Nginx + PHP-FPM capable of...   739                                     [OK]
    linuxserver/nginx                 An Nginx container, brought to you by LinuxS...   74
    bitnami/nginx                     Bitnami nginx Docker Image                      70                                      [OK]
    tiangolo/nginx-rtmp               Docker image with Nginx using the nginx-rtmp...   51                                      [OK]
    ```

      

2.  Run the following command to search for busybox in the private image library. The address of the private image library must be added during the search.

    ```
    $ sudo docker search 192.168.1.110:5000/busybox
    ```


