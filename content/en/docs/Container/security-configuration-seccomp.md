# Security Configuration seccomp<a name="EN-US_TOPIC_0184808205"></a>

During the container network performance test, it is found that the performance of Docker is lower than that of the native kernel namespace. After seccomp is enabled, system calls \(such as sendto\) are not performed through system\_call\_fastpath. Instead, tracesys is called, which greatly deteriorates the performance. Therefore, you are advised to disable seccomp in container scenarios where services require high performance. For example:

```
docker run -itd --security-opt seccomp=unconfined busybox:latest
```

