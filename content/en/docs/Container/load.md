# load<a name="EN-US_TOPIC_0184808267"></a>

Syntax:  **docker load \[**_options_**\]**

Function: Reloads an image from .tar package obtained by running the  **docker save**  command. This parameter corresponds to the  **docker save**  command.

Parameter description:

**-i**  and  **--input=""**  can be used.

Example:

```
$ sudo docker load -i busybox.tar
Loaded image ID: sha256:e02e811dd08fd49e7f6032625495118e63f597eb150403d02e3238af1df240ba
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             latest              e02e811dd08f        2 years ago         1.09MB
```

