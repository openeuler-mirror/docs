# images<a name="EN-US_TOPIC_0184808265"></a>

Syntax:  **docker images \[**_options_**\] \[**_name_**\]**

Function: Lists existing images. The intermediate image is not displayed if no parameter is configured.

Parameter description:

**-a**  and  **--all=false**: Display all images.

**-f**  and  **--filter=\[\]**: Specify a filtering value, for example,  **dangling=true**.

**--no-trunc=false**: Does not delete any output.

**-q**  and  **--quiet=false**: Display only IDs.

Example:

```
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             latest              e02e811dd08f        2 years ago         1.09MB
```

  

