# Querying VM Information

[[toc]]

## Overview

StratoVirt can be used to query VM status, vCPU topology information, and vCPU online status. It uses QMP to manage VMs. Therefore, ensure that StratoVirt is connected to the VM before querying the VM information.

## Querying VM status

Run the query-status command to query the VM running status.

- Usage:

  **{ "execute": "query-status" }**

- Example:

```
<- { "execute": "query-status" }
-> { "return": { "running": true,"singlestep": false,"status": "running" } 
```



## Querying Topology Information

Run the query-cpus command to query the topology of all CPUs.

- Usage:

**{ "execute": "query-cpus" }**

- Example:

```
<- { "execute": "query-cpus" }
-> {"return":[{"CPU":0,"arch":"x86","current":true,"halted":false,"props":{"core-id":0,"socket-id":0,"thread-id":0},"qom_path":"/machine/unattached/device[0]","thread_id":8439},{"CPU":1,"arch":"x86","current":true,"halted":false,"props":{"core-id":0,"socket-id":1,"thread-id":0},"qom_path":"/machine/unattached/device[1]","thread_id":8440}]}
```

## Querying vCPU Online Status

Run the query-hotpluggable-cpus command to query the online or offline status of all vCPUs.

- Usage:

**{ "execute": "query-hotpluggable-cpus" }**

- Example:

```
<- { "execute": "query-hotpluggable-cpus" }
-> {"return":[{"props":{"core-id":0,"socket-id":0,"thread-id":0},"qom-path":"/machine/unattached/device[0]","type":"host-x86-cpu","vcpus-count":1},{"props":{"core-id":0,"socket-id":1,"thread-id":0},"qom-path":"/machine/unattached/device[1]","type":"host-x86-cpu","vcpus-count":1}]}
```

Where, online vCPUs have the `qom-path` item, while offline vCPUs do not.
