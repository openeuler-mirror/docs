# Configuring Resources for a Secure Container

- [Configuring Resources for a Secure Container](#configuring-resources-for-a-secure-container)
    - [Sharing Resources](#sharing-resources)
    - [Limiting CPU Resources](#limiting-cpu-resources)
    - [Limiting Memory Resources](#limiting-memory-resources)
    - [Limiting Block I/O Resources](#limiting-block-i-o-resources)
    - [Limiting File Descriptor Resources](#limiting-file-descriptor-resources)


The secure container runs on a virtualized and isolated lightweight VM. Therefore, resource configuration is divided into two parts: resource configuration for the lightweight VM, that is, host resource configuration; resource configuration for containers in the VM, that is, guest container resource configuration. The following describes resource configuration for the two parts in detail.


## Resource Sharing

Because the secure container runs on a virtualized and isolated lightweight VM, resources in some namespaces on the host cannot be accessed. Therefore, **--net host**, **--ipc host**, **--pid host**, and **--uts host** are not supported during startup.

When a pod is started, all containers in the pod share the same network namespace and IPC namespace by default. If the containers in the same pod need to share the PID namespace, you can use Kubernetes to configure the PID namespace. In Kubernetes 1.11, the PID namespace is disabled by default.


## Limiting Block I/O Resources

1.  Configure the block I/O resources for running the lightweight VM.

    To configure block I/O resources for running the lightweight VM of secure containers, the secure container uses **--annotation com.github.containers.virtcontainers.blkio\_cgroup** to configure the block I/O resource of the block devices used by the lightweight VM. This option can be configured only on the pause container.

    ```
    docker run -tid --runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.blkio_cgroup=<blkio json string> <pause-image> <command>
    ```

    The value of **--annotation com.github.containers.virtcontainers.blkio\_cgroup** must comply with the definition of the BlkioCgroup structure.

    ```
    // BlkioCgroup for Linux cgroup 'blkio' data exchange
    type BlkioCgroup struct {
    	// Items specifies per cgroup values
    	Items []BlockIOCgroupItem `json:"blkiocgroup,omitempty"`
    }
    
    type BlockIOCgroupItem struct {
    	// Path represent path of blkio device
    	Path string `json:"path,omitempty"`
    	// Limits specifies the blkio type and value
    	Limits []IOLimit `json:"limits,omitempty"`
    }
    
    type IOLimit struct {
    	// Type specifies IO type
    	Type string `json:"type,omitempty"`
    	// Value specifies rate or weight value
    	Value uint64 `json:"value,omitempty"`
    }
    ```

    The values of the **Type** field in the **IOLimit** structure body are as follows:

    ```
    // BlkioThrottleReadBps is the key to fetch throttle_read_bps
    BlkioThrottleReadBps = "throttle_read_bps"
    
    // BlkioThrottleWriteBps is the key to fetch throttle_write_bps
    BlkioThrottleWriteBps = "throttle_write_bps"
    
    // BlkioThrottleReadIOPS is the key to fetch throttle_read_iops
    BlkioThrottleReadIOPS = "throttle_read_iops"
    
    // BlkioThrottleWriteIOPS is the key to fetch throttle_write_iops
    BlkioThrottleWriteIOPS = "throttle_write_iops"
    
    // BlkioWeight is the key to fetch blkio_weight
    BlkioWeight = "blkio_weight"
    
    // BlkioLeafWeight is the key to fetch blkio_leaf_weight
    BlkioLeafWeight = "blkio_leaf_weight"
    ```

    Example:

    ```
    docker run -tid --runtime kata-runtime --network none --annotation com.github.containers.virtcontainers.blkio_cgroup='{"blkiocgroup":[{"path":"/dev/sda","limits":[{"type":"throttle_read_bps","value":400},{"type":"throttle_write_bps","value":400},{"type":"throttle_read_iops","value":700},{"type":"throttle_write_iops","value":699}]},{"limits":[{"type":"blkio_weight","value":78}]}]}' busybox sleep 999999
    ```

    The command is used to limit the block I/O traffic of the **/dev/sda** disk used by the started secure container by setting **throttle\_read\_bps** to 400 bit/s, **throttle\_write\_bps** to 400 bit/s, **throttle\_read\_iops** to 700 times/s, **throttle\_write\_iops** to 699 times/s, and the weight of the block I/O cgroup to 78.


## Limiting File Descriptor Resources

To prevent the file descriptor resources on the host from being exhausted when a large number of files in the 9p shared directory are opened in the container, you can customize the maximum number of file descriptors that can be opened by the QEMU process of the secure container.

The secure container reuses the **--files-limit** option in the **docker run** command to set the maximum number of file descriptors that can be opened by the QEMU process of the secure container. This parameter can be configured only on the pause container. Use the command as follows:

```
docker run -tid --runtime kata-runtime --network none --annotation io.kubernetes.docker.type=podsandbox --files-limit <max-open-files> <pause-image> bash
```

>![](./public_sys-resources/icon-note.gif) **NOTE:**   
>-   If the value of **--files-limit** is less than the default minimum value **1024** and is not **0**, the maximum number of file descriptors that can be opened by the QEMU process of the secure container is set to **1024**.  
>-   If the value of **--files-limit** is 0, the maximum number of file descriptors that can be opened by the QEMU process of the secure container is set to the default value. The default value is obtained by dividing the maximum number of file descriptors that can be opened by the system (/proc/sys/fs/file-max) by 400.  
>-   When the secure container is started, if **--files-limit** is not used to explicitly specify the maximum number of file descriptors that can be opened by the QEMU process of the secure container, the system default value is used.
