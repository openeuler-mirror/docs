# Dynamically Managing Container Resources \(syscontainer-tools\)<a name="EN-US_TOPIC_0184808030"></a>

Resources in common containers cannot be managed. For example, a block device cannot be added to a common container, and a physical or virtual NIC cannot be inserted to a common container. In the system container scenario, the syscontainer-tools can be used to dynamically mount or unmount block devices, network devices, routes, and volumes for containers.

To use this function, you need to install the syscontainer-tools first.

```
[root@localhost ~]# yum install syscontainer-tools
```


