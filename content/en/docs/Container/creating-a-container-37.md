# Creating a Container<a name="EN-US_TOPIC_0184808226"></a>

## Downloading Images<a name="en-us_topic_0182302200_section820441134510"></a>

Only user  **root**  can run the  **docker**  command. If you log in as a common user, you need to use the  **sudo**  command before running the  **docker**  command.

```
[root@localhost ~]# docker pull busybox
```

This command is used to download the  **busybox:latest**  image from the official Docker registry. \(If no tag is specified in the command, the default tag name  **latest**  is used.\) During the image download, the system checks whether the dependent layer exists locally. If yes, the image download is skipped. When downloading images from a private registry, specify the registry description. For example, if a private registry containing some common images is created and its IP address is  **192.168.1.110:5000**, you can run the following command to download the image from the private registry:

```
[root@localhost ~]# docker pull 192.168.1.110:5000/busybox
```

The name of the image downloaded from the private registry contains the registry address information, which may be too long. Run the  **docker tag**  command to generate an image with a shorter name.

```
[root@localhost ~]# docker tag 192.168.1.110:5000/busybox busybox
```

Run the  **docker images**  command to view the local image list.

## Running a Simple Application<a name="en-us_topic_0182302200_section9658816124511"></a>

```
[root@localhost ~]# docker run busybox /bin/echo "Hello world"
Hello world
```

This command uses the  **busybox:latest**  image to create a container, and executes the  **echo "Hello world"**  command in the container. Run the following command to view the created container:

```
[root@localhost ~]# docker ps -l
CONTAINER ID        IMAGE               COMMAND                   CREATED             STATUS                     PORTS               NAMES
d8c0a3315bc0        busybox"/bin/echo 'Hello wo..."   5 seconds ago       Exited (0) 3 seconds ago                       practical_franklin
```

## Creating an Interactive Container<a name="en-us_topic_0182302200_section148331720164510"></a>

```
[root@localhost ~]# docker run -it busybox /bin/bash
root@bf22919af2cf:/# ls 
bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var 
root@bf22919af2cf:/# pwd 
/
```

The  **-ti**  option allocates a pseudo terminal to the container and uses standard input \(STDIN\) for interaction. You can run commands in the container. In this case, the container is an independent Linux VM. Run the  **exit**  command to exit the container.

## Running a Container in the Background<a name="en-us_topic_0182302200_section208036271451"></a>

Run the following command.  **-d**  indicates that the container is running in the background.  **--name=container1**  indicates that the container name is  **container1**.

```
[root@localhost ~]# docker run -d --name=container1 busybox /bin/sh -c "while true;do echo hello world;sleep 1;done"
7804d3e16d69b41aac5f9bf20d5f263e2da081b1de50044105b1e3f536b6db1c
```

The command output contains the container ID but does not contain  **hello world**. In this case, the container is running in the background. You can run the  **docker ps**  command to view the running container.

```
[root@localhost ~]# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
7804d3e16d69        busybox "/bin/sh -c 'while tr"   11 seconds ago      Up 10 seconds                           container1
```

Run the following  **docker logs**  command to view the output during container running:

```
[root@localhost ~]# docker logs container1
hello world
hello world
hello world
...
```

## Container Network Connection<a name="en-us_topic_0182302200_section10769033124516"></a>

By default, a container can access an external network, while port mapping is required when an external network accesses a container. The following uses how to run the private registry service in Docker as an example. In the following command,  **-P**  is used to expose open ports in the registry to the host.

```
[root@localhost ~]# docker run --name=container_registry -d -P registry 
cb883f6216c2b08a8c439b3957fb396c847a99079448ca741cc90724de4e4731 
```

The container\_registry container has been started, but the mapping between services in the container and ports on the host is not clear. You need to run the  **docker port**  command to view the port mapping.

```
[root@localhost ~]# docker port container_registry 
5000/tcp -> 0.0.0.0:49155 
```

The command output shows that port 5000 in the container is mapped to port 49155 on the host. You can access the registry service by using the host IP address  **49155**. Enter  **http://localhost:49155**  in the address box of the browser and press  **Enter**. The registry version information is displayed.

When running registry images, you can directly specify the port mapping, as shown in the following:

```
docker run --name=container_registry -d -p 5000:5000 registry 
```

**-p 5000:5000**  is used to map port 5000 in the container to port 5000 on the host.

## Precautions<a name="en-us_topic_0182302200_section2261716204719"></a>

-   **Do Not Add -a stdin Independently During Container Startup**

    When starting a container, you must add  **-a stdout**  or  **-a stderr**  together with  **-a stdin**  instead of  **-a stdin**  only. Otherwise, the device stops responding even after the container exits.


-   **Do Not Use the Long Or Short ID of an Existing Container As the Name of a New Container**

    When creating a container, do not use the long or short ID of the existing container A as the name of the new container B. If the long ID of container A is used as the name of container B, Docker will match container A even though the name of container B is used as the specified target container for operations. If the short ID of container A is used as the name of container B, Docker will match container B even though the short ID of container A is used as the specified target container for operations. This is because Docker matches the long IDs of all containers first. If the matching fails, the system performs exact matching using the value of  **container\_name**. If matching failure persists, the container ID is directly matched in fuzzy mode.

-   **Containers That Depend on Standard Input and Output, Such As sh/bash, Must Use the -ti Parameter to Avoid Exceptions**

    Normal case: If you do not use the  **-ti**  parameter to start a process container such as sh/bash, the container exits immediately.

    The cause of this problem is that Docker creates a stdin that matches services in the container first. If the interactive parameters such as  **-ti**  are not set, Docker closes pipe after the container is started and the service container process sh/bash exits after stdin is closed.

    Exception: If Docker daemon is forcibly killed in a specific phase \(before pipe is closed\), daemon of the pipe is not closed in time. In this case, the sh/bash process does not exit even without  **-ti**. As a result, an exception occurs. You need to manually clear the container.

    After being restarted, daemon takes over the original container stream. Containers without the  **-ti**  parameter may not be able to process the stream because these containers do not have streams to be taken over in normal cases. In actual services, sh/bash without the  **-ti**  parameter does not take effect and is seldom used. To avoid this problem, the  **-ti**  parameter is used to restrict interactive containers.

-   **Container Storage Volumes**

    If you use the  **-v**  parameter to mount files on the host to a container when the container is started, the inodes of the files may be changed when you run the  **vi**  or  **sed**  command to modify the files on the host or in the container. As a result, files on the host and in the container are not synchronized. Do not mount files in the container in this mode \(or do not use together with the  **vi**  and  **sed**  commands\). You can also mount the upper-layer directories of the files to avoid exceptions. The  **nocopy**  option can be used to prevent original files in the mount point directory of a container from being copied to the source directory of the host when Docker mounts volumes. However, this option can be used only when an anonymous volume is mounted and cannot be used in the bind mount scenario.

-   **Do Not Use Options That May Affect the Host**

    The  **--privileged**  option enables all permissions for a container. On the container, mounting operations can be performed and directories such as  **/proc**  and  **/sys**  can be modified, which may affect the host. Therefore, do not use this option for common containers.

    A host-shared namespace, such as the  **--pid host**,  **--ipc host**, or  **--net host**  option, can enable a container to share the namespace with the host, which will also affect the host. Therefore, do not use this option.

-   **Do Not Use the Unstable Kernel Memory Cgroup**

    Kernel memory cgroup on the Linux kernel earlier than 4.0 is still in the experimental phase and runs unstably. Therefore, do not use kernel memory cgroup.

    When the  **docker run --kernel-memory**  command is executed, the following alarm is generated:

    ```
    WARNING: You specified a kernel memory limit on a kernel older than 4.0. Kernel memory limits are experimental on older kernels, it won't work as expected as expected and can cause your system to be unstable.
    ```

-   **blkio-weight Parameter Is Unavailable in the Kernel That Supports blkio Precise Control**

    **--blkio-weight-device**  can implement more accurate blkio control in a container. The control requires a specified disk device, which can be implemented through the  **--blkio-weight-device**  parameter of Docker. In this kernel, Docker does not provide the  **--blkio-weight**  mode to limit the container blkio. If you use this parameter to create a container, the following error is reported:

    ```
    docker: Error response from daemon: oci runtime error: container_linux.go:247: starting container process caused "process_linux.go:398: container init caused \"process_linux.go:369: setting cgroup config for ready process caused \\\"blkio.weight not supported, use weight_device instead\\\"\""
    ```

-   **Using --blkio-weight-device in CFQ Scheduling Policy**

    The  **--blkio-weight-device**  parameter works only when the disk works in the Completely Fair Queuing \(CFQ\) policy.

    You can view the scheduler file \(**/sys/block/**_disk_**/queue/scheduler**\) to obtain the policies supported by the disk and the current policy. For example, you can run the following command to view  **sda**.

    ```
    # cat /sys/block/sda/queue/scheduler noop [deadline] cfq 
    ```

    **sda**  supports the following scheduling policies:  **noop**,  **deadline**, and  **cfq**, and the  **deadline**  policy is being used. You can run the  **echo**  command to change the policy to  **cfq**.

    ```
    # echo cfq > /sys/block/sda/queue/scheduler
    ```


-   **systemd Usage Restrictions in Basic Container Images**

    When containers created from basic images are used, systemd in basic images is used only for system containers.


## Concurrent Performance<a name="en-us_topic_0182302200_section4124524171619"></a>

-   There is an upper limit for the message buffer in Docker. If the number of messages exceeds the upper limit, the messages are discarded. Therefore, it is recommended that the number of commands executed concurrently should not exceed 1000. Otherwise, the internal messages in Docker may be lost and the container may fail to be started.
-   When containers are concurrently created and restarted, the error message"oci runtime error: container init still running" is occasionally reported. This is because containerd optimizes the performance of the event waiting queue. When a container is stopped, the  **runc delete**  command is executed to kill the init processes in the container within 1s. If the init processes are not killed within 1s, runC returns this error message. The garbage collection \(GC\) mechanism of containerd reclaims residual resources after  **runc delete**  is executed at an interval of 10s. Therefore, operations on the container are not affected. If the preceding error occurs, wait for 4 or 5s and restart the container.

## Security Feature Interpretation<a name="en-us_topic_0182302200_section85671246468"></a>

1.  The following describes default permission configuration analysis of Docker.

    In the default configuration of a native Docker, capabilities carried by each default process are as follows:

    ```
    "CAP_CHOWN", 
    "CAP_DAC_OVERRIDE", 
    "CAP_FSETID", 
    "CAP_FOWNER", 
    "CAP_MKNOD", 
    "CAP_NET_RAW", 
    "CAP_SETGID", 
    "CAP_SETUID", 
    "CAP_SETFCAP", 
    "CAP_SETPCAP", 
    "CAP_NET_BIND_SERVICE", 
    "CAP_SYS_CHROOT", 
    "CAP_KILL", 
    "CAP_AUDIT_WRITE",
    ```

    The default seccomp configuration is a whitelist. If any syscall is not in the whitelist,  **SCMP\_ACT\_ERRNO**  is returned by default. Different system invoking is enabled for different caps of Docker. If a capability is not in the whitelist, Docker will not assign it to the container by default.

2.  CAP\_SYS\_MODULE

    CAP\_SYS\_MODULE allows a container to insert the ko module. Adding this capability allows the container to escape or even damage the kernel. Namespace provides the maximum isolation for a container. In the ko module, you only need to point its namespace to  **init\_nsproxy**.

3.  CAP\_SYS\_ADMIN

    The sys\_admin permission provides the following capabilities for a container:

    -   For file system:  **mount**,  **umount**, and  **quotactl**
    -   For namespace setting:  **setns**,  **unshare**, and  **clone new namespace**
    -   driver ioctl
    -   For PCI control:  **pciconfig\_read**,  **pciconfig\_write**, and  **pciconfig\_iobase**
    -   **sethostname**

4.  CAP\_NET\_ADMIN

    CAP\_NET\_ADMIN allows a container to access network interfaces and sniff network traffic. The container can obtain the network traffic of all containers including the host, which greatly damages network isolation.

5.  CAP\_DAC\_READ\_SEARCH

    CAP\_DAC\_READ\_SEARCH calls the open\_by\_handle\_at and name\_to\_handle\_at system calls. If the host is not protected by SELinux, the container can perform brute-force search for the inode number of the file\_handle structure to open any file on the host, which affects the isolation of the file system.

6.  CAP\_SYS\_RAWIO

    CAP\_SYS\_RAWIO allows a container to write I/O ports to the host, which may cause the host kernel to crash.

7.  CAP\_SYS\_PTRACE

    The ptrace permission for a container provides ptrace process debugging in the container. RunC has fixed this vulnerability. However, some tools, such as nsenter and docker-enter, are not protected. In a container, processes executed by these tools can be debugged to obtain resource information \(such as namespace and fd\) brought by these tools. In addition, ptrace can bypass seccomp, greatly increasing attack risks of the kernel.

8.  Docker capability interface: --cap-add all

    --cap-add all grants all permissions to a container, including the dangerous permissions mentioned in this section, which allows the container to escape.

9.  Do not disable the seccomp feature of Docker.

    Docker has a default seccomp configuration with a whitelist.  **sys\_call**  that is not in the whitelist is disabled by seccomp. You can disable the seccomp feature by running  **--security-opt 'seccomp:unconfined'**. If seccomp is disabled or the user-defined seccomp configuration is used but the filtering list is incomplete, attack risks of the kernel in the container are increased.

10. Do not set the  **/sys**  and  **/proc**  directories to writable.

    The  **/sys**  and  **/proc**  directories contain Linux kernel maintenance parameters and device management interfaces. If the write permission is configured for the directories in a container, the container may escape.

11. Docker open capability: --CAP\_AUDIT\_CONTROL

    The permission allows a container to control the audit system and run the  **AUDIT\_TTY\_GET**  and  **AUDIT\_TTY\_SET**  commands to obtain the TTY execution records \(including the  **root**  password\) recorded in the audit system.

12. CAP\_BLOCK\_SUSPEND and CAP\_WAKE\_ALARM

    The permission provides a container the capability to block the system from suspending \(epoll\).

13. CAP\_IPC\_LOCK

    With this permission, a container can break the max locked memory limit in  **ulimit**  and use any mlock large memory block to cause DoS attacks.

14. CAP\_SYS\_LOG

    In a container with this permission, system kernel logs can be read by using dmesg to break through kernel kaslr protection.

15. CAP\_SYS\_NICE

    In a container with this permission, the scheduling policy and priority of a process can be changed, causing DoS attacks.

16. CAP\_SYS\_RESOURCE

    With this permission, a container can bypass resource restrictions, such as disk space resource restriction, keymaps quantity restriction, and  **pipe-size-max**  restriction, causing DoS attacks.

17. CAP\_SYS\_TIME

    In a container with this capability, the time on the host can be changed.

18. Risk analysis of Docker default capabilities

    The default capabilities of Docker include CAP\_SETUID and CAP\_FSETID. If the host and a container share a directory, the container can set permissions for the binary file in the shared directory. Common users on the host can use this method to elevate privileges. With the CAP\_AUDIT\_WRITE capability, a container can write logs to the host, and the host must be configured with log anti-explosion measures.

19. Docker and host share namespace parameters, such as  **--pid**,  **--ipc**, and  **--uts**.

    This parameter indicates that the container and host share the namespace. The container can attack the host as the namespace of the container is not isolated from that of the host. For example, if you use  **--pid**  to share PID namespace with the host, the PID on the host can be viewed in the container, and processes on the host can be killed at will.

20. **--device**  is used to map the sensitive directories or devices of the host to the container.

    The Docker management plane provides interfaces for mapping directories or devices on a host to the container, such as  **--device**  and  **-v**. Do not map sensitive directories or devices on the host to the container.


