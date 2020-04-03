# Precautions for Common Users in the Scenario Where a Large Number of Containers Are Deployed<a name="EN-US_TOPIC_0184808207"></a>

The maximum number of processes that a common user can create on an OS host can be restricted by creating the  **/etc/security/limits.d/20-nproc.conf**  file in the system. Similarly, the maximum number of processes that a common user can create in a container is determined by the value in the  **/etc/security/limits.d/20-nproc.conf**  file in the container image, as shown in the following example:

```
cat /etc/security/limits.conf 
*       soft    nproc   4096
```

If an error is reported due to insufficient resources when a large number of containers are deployed by a common user, increase the value  **4096**  in the  **/etc/security/limits.d/20-nproc.conf**  file.

Configure the maximum value based on the maximum capability of the kernel, as shown in the following example:

```
[root@localhost ~]# sysctl -a | grep pid_max 
kernel.pid_max = 32768
```

