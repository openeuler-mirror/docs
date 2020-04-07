# save<a name="EN-US_TOPIC_0184808273"></a>

Syntax:  **docker save \[**_options_**\] **_image _**\[**_image..._**\]**

Function: Saves an image to a TAR package. The output is  **STDOUT**  by default.

Parameter description:

**-o**  and  **--output=""**: Save an image to a file rather than STDOUT.

Example:

```
$ sudo docker save -o nginx.tar nginx:latest
$ ls
nginx.tar
```

