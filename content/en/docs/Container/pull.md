# pull<a name="EN-US_TOPIC_0184808270"></a>

Syntax:  **docker pull \[**_options_**\]** _name_**\[**_:tag_**\]**

Function: Pulls an image from an official or private registry.

Parameter description:

**-a**  and  **--all-tags=false**: Download all images in a registry. \(A registry can be tagged with multiple tags. For example, a busybox registry may have multiple tags, such as  **busybox:14.04**,  **busybox:13.10**,  **busybox:latest**. If  **-a**  is used, all busybox images with tags are pulled.\)

Example:

1.  Run the following command to obtain the Nginx image from the official registry:

    ```
    $ sudo docker pull nginx
    Using default tag: latest
    latest: Pulling from official/nginx
    94ed0c431eb5: Pull complete
    9406c100a1c3: Pull complete
    aa74daafd50c: Pull complete
    Digest: sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3
    Status: Downloaded newer image for nginx:latest
    ```

    When an image is pulled, the system checks whether the dependent layer exists. If yes, the local layer is used.

2.  Pull an image from a private registry.

    Run the following command to pull the Fedora image from the private registry, for example, the address of the private registry is  **192.168.1.110:5000**:

    ```
    $ sudo docker pull 192.168.1.110:5000/fedora
    ```


