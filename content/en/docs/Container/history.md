# history<a name="EN-US_TOPIC_0184808264"></a>

Syntax:  **docker history \[**_options_**\]** _image_

Function: Displays the change history of an image.

Parameter description:

-H, --human=true

**--no-trunc=false**: Does not delete any output.

**-q**  and  **--quiet=false**: Display only IDs.

Example:

```
$ sudo docker history busybox:test
IMAGE               CREATED             CREATED BY          SIZE                COMMENT
be4672959e8b        15 minutes ago      bash                23B
21970dfada48        4 weeks ago                             128MB               Imported from -
```

  

