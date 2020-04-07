# rmi<a name="EN-US_TOPIC_0184808272"></a>

Syntax:  **docker rmi \[**_options_**\] **_image _**\[**_image..._**\]**

Function: Deletes one or more images. If an image has multiple tags in the image library, only the untag operation is performed when the image is deleted. If the image has only one tag, the dependent layers are deleted in sequence.

Parameter description:

**-f**  and  **--force=false**: Forcibly delete an image.

**--no-prune=false**: Does not delete parent images without tags.

Example:

```
$ sudo docker rmi 192.168.1.110:5000/busybox:sshd
```

