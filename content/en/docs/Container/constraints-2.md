# Constraints<a name="EN-US_TOPIC_0184808120"></a>

1.  If  **log\_directory**  is configured in the  **PodSandboxConfig**  parameter when a sandbox is created,  **log\_path**  must be specified in  **ContainerConfig**  when all containers that belong to the sandbox are created. Otherwise, the containers may not be started or deleted by using the CRI.

    The actual value of  **LOGPATH**  of containers is  **log\_directory/log\_path**. If  **log\_path**  is not set, the final value of  **LOGPATH**  is changed to  **log\_directory**.

    -   If the path does not exist, iSulad will create a soft link pointing to the actual path of container logs when starting a container. Then  **log\_directory**  becomes a soft link. There are two cases:
        1.  In the first case, if  **log\_path**  is not configured for other containers in the sandbox,  **log\_directory**  will be deleted and point to  **log\_path**  of the newly started container. As a result, logs of the first started container point to logs of the later started container.
        2.  In the second case, if  **log\_path**  is configured for other containers in the sandbox, the value of  **LOGPATH**  of the container is  **log\_directory/log\_path**. Because  **log\_directory**  is a soft link, the creation fails when  **log\_directory/log\_path**  is used as the soft link to point to the actual path of container logs.

    -   If the path exists, iSulad will attempt to delete the path \(non-recursive\) when starting a container. If the path is a folder path containing content, the deletion fails. As a result, the soft link fails to be created, the container fails to be started, and the same error occurs when the container is going to be deleted.

2.  If  **log\_directory**  is configured in the  **PodSandboxConfig**  parameter when a sandbox is created, and  **log\_path**  is specified in  **ContainerConfig**  when a container is created, the final value of  **LOGPATH**  is  **log\_directory/log\_path**. iSulad does not recursively create  **LOGPATH**, therefore, you must ensure that  **dirname\(LOGPATH\)**  exists, that is, the upper-level path of the final log file path exists.
3.  If  **log\_directory**  is configured in the  **PodSandboxConfig**  parameter when a sandbox is created, and the same  **log\_path**  is specified in  **ContainerConfig**  when multiple containers are created, or if containers in different sandboxes point to the same  **LOGPATH**, the latest container log path will overwrite the previous path after the containers are started successfully.
4.  If the image content in the remote registry changes and the original image is stored in the local host, the name and tag of the original image are changed to  **none**  when you call the CRI Pull image API to download the image again.

    An example is as follows:

    Locally stored images:

    ```
    IMAGE                                        TAG                 IMAGE ID            SIZE
    rnd-dockerhub.huawei.com/pproxyisulad/test   latest              99e59f495ffaa       753kB
    ```

    After the  **rnd-dockerhub.huawei.com/pproxyisulad/test:latest**  image in the remote registry is updated and downloaded again:

    ```
    IMAGE                                        TAG                 IMAGE ID            SIZE
    <none>                                       <none>              99e59f495ffaa       753kB
    rnd-dockerhub.huawei.com/pproxyisulad/test   latest              d8233ab899d41       1.42MB
    ```

    Run the  **isula images**  command. The value of  **REF**  is displayed as  **-**.

    ```
    REF                                               IMAGE ID               CREATED              SIZE       
    rnd-dockerhub.huawei.com/pproxyisulad/test:latest d8233ab899d41          2019-02-14 19:19:37  1.42MB     
    -                                                 99e59f495ffaa          2016-05-04 02:26:41  753kB
    ```


