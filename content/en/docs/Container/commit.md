# commit<a name="EN-US_TOPIC_0184808240"></a>

Syntax:  **docker commit \[**_options_**\] **_container _**\[**_repository\[:tag\]_**\]**

Function: creates an image from a container.

Parameter description:

**-a**,  **--author=""**: specifies an author.

**-m**,  **--message=""**: specifies the submitted information.

**-p**,  **--pause=true**: pauses the container during submission.

Example:

Run the following command to start a container and submit the container as a new image:

```
$ sudo docker commit test busybox:test
sha256:be4672959e8bd8a4291fbdd9e99be932912fe80b062fba3c9b16ee83720c33e1

$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             latest              e02e811dd08f        2 years ago         1.09MB
```

  

