# overlay2 Storage Driver Configuration<a name="EN-US_TOPIC_0215574100"></a>

## Configuration Methods<a name="en-us_topic_0215573557_section1924141210352"></a>

overlay2 is the default storage driver of Docker. You can also use either of the following methods to check or configure the driver:

-   Edit the  **/etc/docker/daemon.json**  file to check or configure the  **storage-driver**  field.

    ```
    cat /etc/docker/daemon.json
    {
        "storage-driver": "overlay2"
    }
    ```


-   Edit the  **/etc/sysconfig/docker-storage**  file and check or configure the Docker daemon startup parameters.

    ```
    cat /etc/sysconfig/docker-storage 
    DOCKER_STORAGE_OPTIONS="--storage-driver=overlay2"
    ```


## Precautions<a name="en-us_topic_0215573557_section891296700"></a>

-   When you perform lifecycle management operations on some containers, an error may be reported, indicating that the corresponding rootfs or executable file cannot be found.
-   If the health check of a container is configured to execute executable files in the container, an error may be reported, which causes the health check failure of the container.

-   When you use overlay2 as the graphdriver and modify an image file in a container for the first time, the modification fails if the file size is greater than the remaining space of the system. Even if a little modification on the file is involved, the whole file must be copied to the upper layer. If the remaining space is insufficient, the modification fails.
-   Compared with common file systems, the overlay2 file system has the following behavior differences:
    -   Kernel version

        overlay2 is compatible only with the native kernel 4.0 or later. You are advised to use the Ext4 file system.

    -   Copy-UP performance

        Modifying files at the lower layer triggers file replication to the upper layer. Data block replication and fsync are time-consuming.

    -   Rename directories
        -   The rename system call is allowed only when both the source and the destination paths are at the merged layer. Otherwise, the EXDEV error is reported.
        -   Kernel 4.10 introduces the redirect directory feature to fix this issue. The corresponding kernel option is  **CONFIG\_OVERLAY\_FS\_REDIRECT\_DIR**.

            When overlay2 is used, a file system directory fails to be renamed because the related feature configured in the  **/sys/module/overlay/parameters/redirect\_dir**  file has been disabled. To use this feature, you need to manually set  **/sys/module/overlay/parameters/redirect\_dir**  to  **Y**.

    -   Hard link disconnection
        -   If there are multiple hard links in the lower-layer directory, writing data to the merged layer will trigger Copy-UP, resulting in hard link disconnection.
        -   The index feature is introduced in kernel 4.13 to fix this issue. The corresponding kernel option is  **CONFIG\_OVERLAY\_FS\_INDEX**. Note that this option is not forward compatible and does not support hot upgrade.

    -   Changes of  **st\_dev**  and  **st\_ino**

        After Copy-UP is triggered, you can view only new files at the merged layer, and inodes change. Although  **attr**  and  **xattr**  can be replicated,  **st\_dev**  and  **st\_ino**  are unique and cannot be replicated. As a result, you can run  **stat**  and  **ls**  commands to check inode changes accordingly.

    -   fd change

        Before Copy-UP is triggered, you can obtain the descriptor fd1 when opening a file in read-only mode. After Copy-UP is trigger, you can obtain the descriptor fd2 when opening the file with the same name. The two descriptors point to different files. The data written to fd2 is not displayed in fd1.



## Abnormal Scenarios<a name="en-us_topic_0215573557_section75711912441"></a>

When a container uses the overlay2 storage driver, mount points may be overwritten.

  

## Abnormal Scenario: Mount Point Being Overwritten<a name="en-us_topic_0215573557_section03841042181112"></a>

In the faulty container, there is a mount point in  **/var/lib/docker/overlay2**.

```
[root@localhost ~]# mount -l | grep overlay 
overlay on /var/lib/docker/overlay2/844fd3bca8e616572935808061f009d106a8748dfd29a0a4025645457fa21785/merged type overlay (rw,relatime,seclabel,lowerdir=/var/lib/docker/overlay2/l/JL5PZQLNDCIBU3ZOG3LPPDBHIJ:/var/lib/docker/overlay2/l/ELRPYU4JJG4FDPRLZJCZZE4UO6,upperdir=/var/lib/docker/overlay2/844fd3bca8e616572935808061f009d106a8748dfd29a0a4025645457fa21785/diff,workdir=/var/lib/docker/overlay2/844fd3bca8e616572935808061f009d106a8748dfd29a0a4025645457fa21785/work) 
/dev/mapper/dm-root on /var/lib/docker/overlay2 type ext4 (rw,relatime,seclabel,data=ordered)
```

An error as follows may occur when some Docker commands are executed:

```
[root@localhost ~]# docker rm 1348136d32
docker rm: Error response from daemon: driver "overlay2" failed to remove root filesystem for 1348136d32: error while removing /var/lib/docker/overlay2/844fd3bca8e616572935808061f009d106a8748dfd29a0a4025645457fa21785: invalid argument
```

You will find that the rootfs of the corresponding container cannot be found on the host. However, this does not mean that the rootfs is lost. The rootfs is overwritten by the mount point in  **/var/lib/docker/overlay2**, and services are still running properly. The solutions are as follows:

-   Solution 1
    1.  Run the following command to check the graphdriver used by Docker:

        ```
        docker info | grep "Storage Driver"
        ```

          

    2.  Run the following commands to query the current mount point:

        ```
        Devicemapper: mount -l | grep devicemapper 
        Overlay2: mount -l | grep overlay2
        ```

        The output format is  _A_  on  _B_  type  _C_  \(_D_\).

        -   _A_: block device name or  **overlay**
        -   _B_: mount point
        -   _C_: file system type
        -   _D_: mounting attribute

    3.  Run the  **umount**  command on the mount points \(_B_\) one by one from bottom to top.
    4.  Run the  **docker restart**  command on all the containers or delete all the containers.
    5.  Run the following command to restart Docker:

        ```
        systemctl restart docker
        ```



-   Solution 2
    1.  Migrate services.
    2.  Restart nodes.


