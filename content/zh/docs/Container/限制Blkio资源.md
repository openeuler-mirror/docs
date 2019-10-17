# 限制Blkio资源<a name="ZH-CN_TOPIC_0184808178"></a>

1.  配置轻量级虚拟机Blkio运行资源

    对轻量级虚拟机的BlkIio资源配置，安全容器使用--annotation com.github.containers.virtcontainers.blkio\_cgroup配置轻量级虚拟机使用的块设备的blkio资源，该参数仅可配置在pause容器上：

    ```
    docker run -tid --runtime --network none --annotation io.kubernetes.docker.type=podsandbox --annotation com.github.containers.virtcontainers.blkio_cgroup=<blkio json格式字符串> <pause-image> <command>
    ```

    其中--annotation com.github.containers.virtcontainers.blkio\_cgroup的取值要符合下面BlkioCgroup结构体的定义：

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

    IOLimit结构体中Type字段取值列表为：

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

    举例：

    ```
    docker run -tid --runtime kata-runtime --network none --annotation com.github.containers.virtcontainers.blkio_cgroup='{"blkiocgroup":[{"path":"/dev/sda","limits":[{"type":"throttle_read_bps","value":400},{"type":"throttle_write_bps","value":400},{"type":"throttle_read_iops","value":700},{"type":"throttle_write_iops","value":699}]},{"limits":[{"type":"blkio_weight","value":78}]}]}' rnd-dockerhub.huawei.com/official/pause
    ```

    上面命令表示对启动的安全容器所使用的/dev/sda磁盘进行blkio限流，分别将throttle\_read\_bps限速为400bps，throttle\_write\_bps限速为400bps，throttle\_read\_iops限速为700次/秒，throttle\_write\_iops限速为699次/秒，以及所在blkio cgroup组的权重值设置为78。


