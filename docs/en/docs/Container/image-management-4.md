# Image Management

- [Image Management](#image-management)
    - [build](#build)
    - [history](#history)
    - [images](#images)
    - [import](#import)
    - [load](#load)
    - [login](#login)
    - [logout](#logout)
    - [pull](#pull)
    - [push](#push)
    - [rmi](#rmi)
    - [save](#save)
    - [search](#search)
    - [tag](#tag)


  



## build

Syntax: **docker build** \[OPTIONS\] PATH | URL | -

Function: Builds an image using the Dockerfile in the specified path.

Parameters: Common parameters are as follows. For details about more parameters, run the **docker help build** command.

**Table 4** Parameter description

<a name="en-us_topic_0183243738_table14251918184"></a>
<table><thead align="left"><tr id="en-us_topic_0183243738_row172615113189"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0183243738_p3263119181"><a name="en-us_topic_0183243738_p3263119181"></a><a name="en-us_topic_0183243738_p3263119181"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0183243738_p162691131813"><a name="en-us_topic_0183243738_p162691131813"></a><a name="en-us_topic_0183243738_p162691131813"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183243738_row122619121815"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243738_p1526614185"><a name="en-us_topic_0183243738_p1526614185"></a><a name="en-us_topic_0183243738_p1526614185"></a>--force-rm=false</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243738_p9803426131816"><a name="en-us_topic_0183243738_p9803426131816"></a><a name="en-us_topic_0183243738_p9803426131816"></a>Deletes containers generated during the build process even if the build is not successful.</p>
</td>
</tr>
<tr id="en-us_topic_0183243738_row660114322184"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243738_p460219324184"><a name="en-us_topic_0183243738_p460219324184"></a><a name="en-us_topic_0183243738_p460219324184"></a>--no-cache=false</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243738_p5602163216189"><a name="en-us_topic_0183243738_p5602163216189"></a><a name="en-us_topic_0183243738_p5602163216189"></a>Builds the image without using cache.</p>
</td>
</tr>
<tr id="en-us_topic_0183243738_row9354121121913"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243738_p9354714196"><a name="en-us_topic_0183243738_p9354714196"></a><a name="en-us_topic_0183243738_p9354714196"></a>-q, --quiet=false</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243738_p33544151914"><a name="en-us_topic_0183243738_p33544151914"></a><a name="en-us_topic_0183243738_p33544151914"></a>Suppresses the redundant information generated during the the build process.</p>
</td>
</tr>
<tr id="en-us_topic_0183243738_row37811581916"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243738_p177819158192"><a name="en-us_topic_0183243738_p177819158192"></a><a name="en-us_topic_0183243738_p177819158192"></a>--rm=true</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243738_p1546216313191"><a name="en-us_topic_0183243738_p1546216313191"></a><a name="en-us_topic_0183243738_p1546216313191"></a>Deletes the container generated during the build after the build is successful.</p>
</td>
</tr>
<tr id="en-us_topic_0183243738_row136272022111912"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243738_p862882217196"><a name="en-us_topic_0183243738_p862882217196"></a><a name="en-us_topic_0183243738_p862882217196"></a>-t, --tag=""</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243738_p13391038161911"><a name="en-us_topic_0183243738_p13391038161911"></a><a name="en-us_topic_0183243738_p13391038161911"></a>Specifies the tag name of the image generated during the build.</p>
</td>
</tr>
<tr id="en-us_topic_0183243738_row7484172061913"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243738_p4485320161916"><a name="en-us_topic_0183243738_p4485320161916"></a><a name="en-us_topic_0183243738_p4485320161916"></a>--build-arg=[]</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243738_p3485112061914"><a name="en-us_topic_0183243738_p3485112061914"></a><a name="en-us_topic_0183243738_p3485112061914"></a>Configures the build parameters.</p>
</td>
</tr>
<tr id="en-us_topic_0183243738_row3920817171919"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243738_p19920121701910"><a name="en-us_topic_0183243738_p19920121701910"></a><a name="en-us_topic_0183243738_p19920121701910"></a>--label=[]</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243738_p777151152020"><a name="en-us_topic_0183243738_p777151152020"></a><a name="en-us_topic_0183243738_p777151152020"></a>Image-related parameters. The description of each parameter is similar to that of the <strong id="en-us_topic_0183243738_b1625613375246"><a name="en-us_topic_0183243738_b1625613375246"></a><a name="en-us_topic_0183243738_b1625613375246"></a>create</strong> command.</p>
</td>
</tr>
<tr id="en-us_topic_0183243738_row1993117602010"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243738_p18931106112015"><a name="en-us_topic_0183243738_p18931106112015"></a><a name="en-us_topic_0183243738_p18931106112015"></a>--isolation</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243738_p29312652012"><a name="en-us_topic_0183243738_p29312652012"></a><a name="en-us_topic_0183243738_p29312652012"></a>Specifies the container isolation method.</p>
</td>
</tr>
<tr id="en-us_topic_0183243738_row1325154192018"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243738_p825184112011"><a name="en-us_topic_0183243738_p825184112011"></a><a name="en-us_topic_0183243738_p825184112011"></a>--pull</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243738_p22517417207"><a name="en-us_topic_0183243738_p22517417207"></a><a name="en-us_topic_0183243738_p22517417207"></a>Always attempts to obtain the latest version of the image during the build process.</p>
</td>
</tr>
</tbody>
</table>

**Dockerfile Description**

Dockerfile is used to automatically build a container by describing how to build an image. All Dockerfile instructions are in the **INSTRUCTION arguments** format.

  

**FROM Instruction**

Syntax: **FROM** <image\> or **FROM** <image\>:<tag\>

Function: Specifies a base image, which is the first instruction in all Dockerfiles. If the tag of the base image is not specified, the default tag name **latest** is used.

  

**RUN Instruction**

Syntax: **RUN** <command\> \(The **shell** form. The command is run in a shell which by default is `/bin/sh -c`) or

**RUN** \["<executable\>", "<param1\>", "<param2\>" ... \] \(The **exec** form\)

Function: Executes any commands in the image specified by the **FROM** instruction and then commits the result. The committed image will be used in the next step in the Dockerfile. The **RUN** instruction is equivalent to:

**docker run** <image\> <command\>

**docker commit** <container_id\>

  

**Remarks**

The number sign \(\#\) is used to comment out.

  

**MAINTAINER Instruction**

Syntax: **MAINTAINER** <name\>

Function: Specifies the name and contact information of the maintainer.

  

**ENTRYPOINT Instruction**

Syntax: **ENTRYPOINT** <cmd\> <param1\> <param2\>... or **ENTRYPOINT** \["<cmd\>", "<param1\>", "<param2\>"...\]

Function: Configures the commands to be executed during container startup.

  

**USER Instruction**

Syntax: **USER** <name\>

Function: Specifies the user to run **memcached**.

  

**EXPOSE Instruction**

Syntax: **EXPOSE** <port\> \[<port\>...\]

Function: Exposes one or more ports of the image.

  

**ENV Instruction**

Syntax: **ENV** <key\> <value\>

Function: Configures environment variables. The configured environment variables can be used by the subsequent **RUN** instructions.

  

**ADD Instruction**

Syntax: **ADD** <src\> <dst\>

Function: Copies a file from <src\> directory to <dest\> directory of the container. <src\> is a relative path of the source directory to be built. It can be the path of a file or directory, or a remote file URL. <dest\> is an absolute path of the container.

  

**VOLUME Instruction**

Syntax: **VOLUME** \["<mountpoint\>"\]

Function: Creates a mount point for the shared directory.

  

**WORKDIR Instruction**

Syntax: **WORKDIR** <path\>

Function: Sets the working path for the **RUN**, **CMD**, and **ENTRYPOINT** instructions. The working path can be set multiple times. If the working path is a relative path, it is relative to the previous **WORKDIR** instruction.

  

**CMD Instruction**

Syntax: **CMD** \["<executable\>","<param1\>","<param2\>"\]  \(The **exec** form. This is the preferred form.\)

**CMD** \["<param1\>","<param2\>"\]  \(The arguments are the default arguments for **ENTRYPOINT**.\)

**CMD** "<command\>" "<param1\>" "<param2\>"  \(The **shell** form.\)

Function: A Dockerfile can contain only one CMD instruction. If there are multiple CMD instructions, only the last one takes effect.

  

**ONBUILD Instruction**

Syntax: **ONBUILD** \[other instructions\]

Function: This instruction is followed by other instructions, such as the **RUN** and **COPY** instructions. This instruction is not executed during image build and is executed only when the current image is used as the base image for another build.

The following is a complete example of a Dockerfile that builds an image with the sshd service installed.

<a name="en-us_topic_0183243738_en-us_topic_0155237683_en-us_topic_0076221025_en-us_topic_0043209539_table50916422"></a>
<table><tbody><tr id="en-us_topic_0183243738_en-us_topic_0155237683_en-us_topic_0076221025_en-us_topic_0043209539_row58396974"><td class="cellrowborder" valign="top" width="100%"><pre class="screen" id="en-us_topic_0183243738_en-us_topic_0155237683_en-us_topic_0076221025_en-us_topic_0043209539_screen13353554311"><a name="en-us_topic_0183243738_en-us_topic_0155237683_en-us_topic_0076221025_en-us_topic_0043209539_screen13353554311"></a><a name="en-us_topic_0183243738_en-us_topic_0155237683_en-us_topic_0076221025_en-us_topic_0043209539_screen13353554311"></a>FROM busybox
ENV  http_proxy http://192.168.0.226:3128
ENV  https_proxy https://192.168.0.226:3128
RUN apt-get update &amp;&amp; apt-get install -y openssh-server
RUN mkdir -p /var/run/sshd
EXPOSE 22
ENTRYPOINT /usr/sbin/sshd -D</pre>
</td>
</tr>
</tbody>
</table>

Example commands:

1.  Run the following command to build an image using the preceding Dockerfile:

    ```
    $ sudo docker build -t busybox:latest
    ```

2.  Run the following command to view the generated image:

    ```
    docker images | grep busybox
    ```


## history

Syntax: **docker history** \[OPTIONS\] <IMAGE\>

Function: Displays the change history of an image.

Parameters:

**-H**, **--human=true**

**--no-trunc=false**: Indicates that the output is not truncated.

**-q** and **--quiet=false**: Displays IDs only.

Example:

```
$ sudo docker history busybox:test
IMAGE               CREATED             CREATED BY          SIZE                COMMENT
be4672959e8b        15 minutes ago      bash                23B
21970dfada48        4 weeks ago                             128MB               Imported from -
```

  

## images

Syntax: **docker images** \[OPTIONS\] \[NAME\]

Function: Lists existing images. The intermediate images are not displayed if no parameter is added.

Parameters:

**-a** and **--all=false**: Displays all images.

**-f** and **--filter=\[\]**: Specifies a filter, for example, **dangling=true**.

**--no-trunc=false**: Indicates that the output is not truncated.

**-q** and **--quiet=false**: Displays IDs only.

Example:

```
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             latest              e02e811dd08f        2 years ago         1.09MB
```

  

## import

Syntax: **docker import URL|- \[REPOSITORY\[:TAG\]\]**

Function: Imports a `.tar` package that contains a rootfs as an image. This parameter corresponds to the **docker export** command.

Parameters: none.

Example:

Run the following command to generate a new image from the **busybox.tar** file exported using the **docker export** command:

```
$ sudo docker import busybox.tar busybox:test
sha256:a79d8ae1240388fd3f6c49697733c8bac4d87283920defc51fb0fe4469e30a4f
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             test                a79d8ae12403        2 seconds ago       1.3MB
```

  

## load

Syntax: **docker load** \[OPTIONS\]

Function: Loads an image from `.tar` package obtained using the **docker save** command. This command corresponds to the **docker save** command.

Parameters:

**-i** and **--input=""**.

Example:

```
$ sudo docker load -i busybox.tar
Loaded image ID: sha256:e02e811dd08fd49e7f6032625495118e63f597eb150403d02e3238af1df240ba
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             latest              e02e811dd08f        2 years ago         1.09MB
```

## login

Syntax: **docker login** \[OPTIONS\] \[SERVER\]

Function: Logs in to an image registry. If no server is specified, the system logs in to https://index.docker.io/v1/ by default.

Parameters:

**-e** and **--email=""**: Email address.

**-p** and **--password=""**: Password.

**-u** and **--username=""**: User name.

Example:

```
$ sudo docker login
```

## logout

Syntax: **docker logout** \[SERVER\]

Function: Logs out from an image registry. If no server is specified, the system logs out from https://index.docker.io/v1/ by default.

Parameters: none.

Example:

```
$ sudo docker logout
```

## pull

Syntax: **docker pull** \[OPTIONS\] NAME\[:TAG\]

Function: Pulls an image from the official or private registry.

Parameters:

**-a** and **--all-tags=false**: Downloads all images in the registry. \(A registry can be tagged with multiple tags. For example, a BusyBox registry may have multiple tags, such as **busybox:14.04**, **busybox:13.10**, **busybox:latest**. If **-a** is used, all BusyBox images with tags are pulled.\)

Example:

1.  Run the following command to pull an Nginx image from the official registry:

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

    When pulling the image, the system checks whether the dependent layer exists. If yes, the local layer is used.

2.  Pull an image from a private registry.

    Run the following command to pull a Fedora image from the private registry, assuming the address of the private registry is **192.168.1.110:5000**:

    ```
    $ sudo docker pull 192.168.1.110:5000/fedora
    ```


## push

Syntax: **docker push** NAME\[:TAG\]

Function: Pushes an image to the image registry.

Parameters: none.

Example:

1.  Assume an image is to be push to the private image registry at 192.168.1.110:5000.
2.  Label the image to be pushed. \(The **docker tag** command is described in the following section.\) In this example, the image to be pushed is **busybox:sshd**.

    ```
    $ sudo docker tag ubuntu:sshd 192.168.1.110:5000/busybox:sshd
    ```

3.  Run the following command to push the tagged image to the private image registry:

    ```
    $ sudo docker push 192.168.1.110:5000/busybox:sshd
    ```

    During the push, the system automatically checks whether the dependent layer exists in the image registry. If yes, the layer is skipped.


## rmi

Syntax: **docker rmi** \[OPTIONS\] IMAGE \[IMAGE...\]

Function: Deletes one or more images. If an image has multiple tags in the image library, the image is not deleted but only untagged. When an image with one tag is deleted, the dependent layers are deleted in sequence.

Parameters:

**-f** and **--force=false**: Forcibly deletes the images.

**--no-prune=false**: Does not delete parent images without tags.

Example:

```
$ sudo docker rmi 192.168.1.110:5000/busybox:sshd
```

## save

Syntax: **docker save** \[OPTIONS\] IMAGE \[IMAGE...\]

Function: Saves an image to a `.tar` package. The results are output to **STDOUT** by default.

Parameters:

**-o** and **--output=""**: Outputs the results to a file rather than **STDOUT**.

Example:

```
$ sudo docker save -o nginx.tar nginx:latest
$ ls
nginx.tar
```

## search

Syntax: **docker search** \[OPTIONS\] TERM

Function: Searches for specific images in the image registry.

Parameters:

**--automated=false**: Displays the automatically built image.

**--no-trunc=false**: Indicates that output is not truncated.

**-s** and **--stars=0**: Displays only images that have a specific number of stars or more.

Example:

1.  Run the following command to search for Nginx images in the official image library:

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

      

2.  Run the following command to search for BusyBox images in the private image library. Add the address to search the private image library.

    ```
    $ sudo docker search 192.168.1.110:5000/busybox
    ```


## tag

Syntax: **docker tag** \[OPTIONS\] IMAGE\[:TAG\] \[REGISTRY HOST/\]\[USERNAME/\]NAME\[:TAG\]

Function: Tags an image into a registry.

Parameters:

**-f** or **--force=false**: Forcibly replaces the original image when the tag names are the same.

Example:

```
$ sudo docker tag busybox:latest busybox:test
```

