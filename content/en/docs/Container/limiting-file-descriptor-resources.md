# Limiting File Descriptor Resources<a name="EN-US_TOPIC_0188508981"></a>

To prevent the file descriptor resources on the host from being exhausted when a large number of files in the 9p shared directory are opened in the container, the secure container can customize the maximum number of file descriptors that can be opened by the QEMU process of the secure container.

The secure container reuses the  **--files-limit**  option in the  **docker run**  command to set the maximum number of file descriptors that can be opened by the QEMU process of the secure container. This parameter can be configured only on the pause container. The usage method is as follows:

```
docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --files-limit <max-open-files> <pause-image> bash
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   If the value of  **--files-limit**  is less than the default minimum value  **1024**  and is not  **0**, the maximum number of file descriptors that can be opened by the QEMU process of the secure container is set to the minimum value  **1024**.  
>-   If the value of  **--files-limit**  is 0, the maximum number of file descriptors that can be opened by the QEMU process of the secure container is the default value obtained by dividing the maximum number of file descriptors that can be opened by the system \(/proc/sys/fs/file-max\) by 400.  
>-   If the maximum number of file descriptors that can be opened by the QEMU process of the secure container is not displayed when the secure container is started, the maximum number of file descriptors that can be opened by the QEMU process of the secure container is the same as the system default value.  

