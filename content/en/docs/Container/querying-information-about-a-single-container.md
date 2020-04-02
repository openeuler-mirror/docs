# Querying Information About a Single Container<a name="EN-US_TOPIC_0184808062"></a>

## Description<a name="en-us_topic_0183292670_section13350115135310"></a>

To query information about a single container, run the  **isula inspect**  command.

## **Usage**<a name="en-us_topic_0183292670_section188811239165314"></a>

```
isula inspect [OPTIONS] CONTAINER|IMAGE [CONTAINER|IMAGE...]
```

## Parameters<a name="en-us_topic_0183292670_section4322824135919"></a>

The following table lists the parameters supported by the  **inspect**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183292670_table13831181815417"></a>
<table><tbody><tr id="en-us_topic_0183292670_row4440192185418"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292670_p11340112615418"><a name="en-us_topic_0183292670_p11340112615418"></a><a name="en-us_topic_0183292670_p11340112615418"></a><strong id="en-us_topic_0183292670_b934022675420"><a name="en-us_topic_0183292670_b934022675420"></a><a name="en-us_topic_0183292670_b934022675420"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292670_p1134022665415"><a name="en-us_topic_0183292670_p1134022665415"></a><a name="en-us_topic_0183292670_p1134022665415"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292670_p7340202611549"><a name="en-us_topic_0183292670_p7340202611549"></a><a name="en-us_topic_0183292670_p7340202611549"></a><strong id="en-us_topic_0183292670_b1934011266545"><a name="en-us_topic_0183292670_b1934011266545"></a><a name="en-us_topic_0183292670_b1934011266545"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183292670_row1451341192811"><td class="cellrowborder" rowspan="3" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183292670_p158191510857"><a name="en-us_topic_0183292670_p158191510857"></a><a name="en-us_topic_0183292670_p158191510857"></a><strong id="en-us_topic_0183292670_b155461026123118"><a name="en-us_topic_0183292670_b155461026123118"></a><a name="en-us_topic_0183292670_b155461026123118"></a>inspect</strong></p>
<p id="en-us_topic_0183292670_p178431844209"><a name="en-us_topic_0183292670_p178431844209"></a><a name="en-us_topic_0183292670_p178431844209"></a>&nbsp;&nbsp;</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183292670_p775614486282"><a name="en-us_topic_0183292670_p775614486282"></a><a name="en-us_topic_0183292670_p775614486282"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183292670_p16761048112813"><a name="en-us_topic_0183292670_p16761048112813"></a><a name="en-us_topic_0183292670_p16761048112813"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0183292670_row88191210357"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292670_p781919105511"><a name="en-us_topic_0183292670_p781919105511"></a><a name="en-us_topic_0183292670_p781919105511"></a>-f, --format</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292670_p468615213310"><a name="en-us_topic_0183292670_p468615213310"></a><a name="en-us_topic_0183292670_p468615213310"></a>Output format.</p>
</td>
</tr>
<tr id="en-us_topic_0183292670_row084314449019"><td class="cellrowborder" valign="top"><p id="en-us_topic_0183292670_p18448447015"><a name="en-us_topic_0183292670_p18448447015"></a><a name="en-us_topic_0183292670_p18448447015"></a>-t, --time</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0183292670_p3844644404"><a name="en-us_topic_0183292670_p3844644404"></a><a name="en-us_topic_0183292670_p3844644404"></a>Timeout interval, in seconds. If the <strong id="en-us_topic_0183292670_b189461151477"><a name="en-us_topic_0183292670_b189461151477"></a><a name="en-us_topic_0183292670_b189461151477"></a>inspect</strong> command fails to query container information within the specified period, the system stops waiting and reports an error immediately. The default value is 120s. If the value is less than or equal to 0, the <strong id="en-us_topic_0183292670_b12130203013819"><a name="en-us_topic_0183292670_b12130203013819"></a><a name="en-us_topic_0183292670_b12130203013819"></a>inspect</strong> command keeps waiting until the container information is obtained successfully.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0183292670_section945918561235"></a>

-   Lightweight containers do not support the output in \{\{.State\}\} format but support the output in the \{\{json .State\}\} format. The  **-f**  parameter is not supported when the object is an image.

## Example<a name="en-us_topic_0183292670_section1734193235916"></a>

Query information about a container.

```
$ isula inspect c75284634bee
[
    {
        "Id": "c75284634beeede3ab86c828790b439d16b6ed8a537550456b1f94eb852c1c0a",
        "Created": "2019-08-01T22:48:13.993304927-04:00",
        "Path": "sh",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "Pid": 21164,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2019-08-02T06:09:25.535049168-04:00",
            "FinishedAt": "2019-08-02T04:28:09.479766839-04:00",
            "Health": {
                "Status": "",
                "FailingStreak": 0,
                "Log": []
            }
        },
        "Image": "busybox",
        "ResolvConfPath": "",
        "HostnamePath": "",
        "HostsPath": "",
        "LogPath": "none",
        "Name": "c75284634beeede3ab86c828790b439d16b6ed8a537550456b1f94eb852c1c0a",
        "RestartCount": 0,
        "HostConfig": {
            "Binds": [],
            "NetworkMode": "",
            "GroupAdd": [],
            "IpcMode": "",
            "PidMode": "",
            "Privileged": false,
            "SystemContainer": false,
            "NsChangeFiles": [],
            "UserRemap": "",
            "ShmSize": 67108864,
            "AutoRemove": false,
            "AutoRemoveBak": false,
            "ReadonlyRootfs": false,
            "UTSMode": "",
            "UsernsMode": "",
            "Sysctls": {},
            "Runtime": "lcr",
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "CapAdd": [],
            "CapDrop": [],
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": [],
            "HookSpec": "",
            "CPUShares": 0,
            "Memory": 0,
            "OomScoreAdj": 0,
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "CPUPeriod": 0,
            "CPUQuota": 0,
            "CPURealtimePeriod": 0,
            "CPURealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "SecurityOpt": [],
            "StorageOpt": {},
            "KernelMemory": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "OomKillDisable": false,
            "PidsLimit": 0,
            "FilesLimit": 0,
            "Ulimits": [],
            "Hugetlbs": [],
            "HostChannel": {
                "PathOnHost": "",
                "PathInContainer": "",
                "Permissions": "",
                "Size": 0
            },
            "EnvTargetFile": "",
            "ExternalRootfs": ""
        },
        "Mounts": [],
        "Config": {
            "Hostname": "localhost",
            "User": "",
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "TERM=xterm",
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Tty": true,
            "Cmd": [
                "sh"
            ],
            "Entrypoint": [],
            "Labels": {},
            "Annotations": {
                "log.console.file": "none",
                "log.console.filerotate": "7",
                "log.console.filesize": "1MB",
                "rootfs.mount": "/var/lib/isulad/mnt/rootfs",
                "native.umask": "secure"
            },
            "HealthCheck": {
                "Test": [],
                "Interval": 0,
                "Timeout": 0,
                "StartPeriod": 0,
                "Retries": 0,
                "ExitOnUnhealthy": false
            }
        },
        "NetworkSettings": {
            "IPAddress": ""
        }
    }
]
```

