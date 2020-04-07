# Limiting Block I/O Resources<a name="EN-US_TOPIC_0184808178"></a>

1.  Configure the block I/O resources for running a lightweight VM.

    To configure block I/O resources for running a lightweight VM of secure containers, use  **--annotation com.github.containers.virtcontainers.blkio\_cgroup**. This option can be configured only on the pause container.

    ```
    docker run -tid --runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.blkio_cgroup=<blkio json string<pause-image> <command>
    ```

    The value of  **--annotation com.github.containers.virtcontainers.blkio\_cgroup**  must comply with the definition of the BlkioCgroup structure.

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

    The values of the  **Type**  field in the  **IOLimit**  structure body are as follows:

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

    The preceding command is used to limit the block I/O traffic of the  **/dev/sda**  disk used by the started secure container by setting  **throttle\_read\_bps**  to 400 bit/s,  **throttle\_write\_bps**  to 400 bit/s,  **throttle\_read\_iops**  to 700 times/s,  **throttle\_write\_iops**  to 699 times/s, and the weight of the block I/O cgroup to 78.


