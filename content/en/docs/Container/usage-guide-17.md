# Usage Guide<a name="EN-US_TOPIC_0225002728"></a>

-   Enable SELinux for daemon.

    ```
    isulad --selinux-enabled
    ```


  

-   Configure SELinux security context labels during container startup.

    **--security-opt="label=user:USER"**: Set the label user for the container.

    **--security-opt="label=role:ROLE"**: Set the label role for the container.

    **--security-opt="label=type:TYPE"**: Set the label type for the container.

    **--security-opt="label=level:LEVEL"**: Set the label level for the container.

    **--security-opt="label=disable"**: Disable the SELinux configuration for the container.

    ```
    $ isula run -itd --security-opt label=type:container_t --security-opt label=level:s0:c1,c2 rnd-dockerhub.huawei.com/official/centos
    9be82878a67e36c826b67f5c7261c881ff926a352f92998b654bc8e1c6eec370
    ```


  

-   Add the selinux label to a mounted volume \(**z**  indicates the shared mode\).

    ```
    $ isula run -itd -v /test:/test:z rnd-dockerhub.huawei.com/official/centos
    9be82878a67e36c826b67f5c7261c881ff926a352f92998b654bc8e1c6eec370
    
    $ls -Z /test
    system_u:object_r:container_file_t:s0 file
    ```

      


