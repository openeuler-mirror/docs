# info<a name="ZH-CN_TOPIC_0184808278"></a>

用法：**docker info**

功能：显示docker系统级的相关信息，包括系统中的Container数量、Image数量、Image的存储驱动、容器的执行驱动、内核版本、主机操作系统版本等信息。

选项：无

示例：

```
$ sudo docker info
Containers: 4
 Running: 3
 Paused: 0
 Stopped: 1
Images: 45
Server Version: 18.09.0
Storage Driver: devicemapper
 Pool Name: docker-thinpool
 Pool Blocksize: 524.3kB
 Base Device Size: 10.74GB
 Backing Filesystem: ext4
 Udev Sync Supported: true
 Data Space Used: 11GB
 Data Space Total: 51GB
 Data Space Available: 39.99GB
 Metadata Space Used: 5.083MB
 Metadata Space Total: 532.7MB
 Metadata Space Available: 527.6MB
 Thin Pool Minimum Free Space: 5.1GB
 Deferred Removal Enabled: true
 Deferred Deletion Enabled: true
 Deferred Deleted Device Count: 0
......
```

