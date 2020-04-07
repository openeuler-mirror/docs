# tag<a name="EN-US_TOPIC_0184808275"></a>

Syntax:  **docker tag \[**_options_**\] **_image_**\[**_:tag_**\] \[**_registry host/_**\]\[**_username/_**\]**_name_**\[**_:tag_**\]**

Function: Tags an image to a registry.

Parameter description:

**-f**  or  **--force=false**: Forcibly replaces the original image when the same tag name exists.

Example:

```
$ sudo docker tag busybox:latest busybox:test
```

