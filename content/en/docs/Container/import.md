# import<a name="EN-US_TOPIC_0184808266"></a>

Syntax:  **docker import URL|- \[**_repository_**\[**_:tag_**\]\]**

Function: Imports a .tar package that contains rootfs as an image. This parameter corresponds to the  **docker export**  command.

Parameter description: none.

Example:

Run the following command to generate a new image for  **busybox.tar**  exported using the  **docker export**  command:

```
$ sudo docker import busybox.tar busybox:test
sha256:a79d8ae1240388fd3f6c49697733c8bac4d87283920defc51fb0fe4469e30a4f
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             test                a79d8ae12403        2 seconds ago       1.3MB
```

  

