# 容器资源动态管理（isulad-tools）<a name="ZH-CN_TOPIC_0184808030"></a>

普通容器无法支持对容器内的资源进行管理，例如添加一个块设备到容器、插入一块物理/虚拟网卡到容器。系统容器场景下，通过isulad-tools工具可以实现动态为容器挂载/卸载块设备，网络设备，路由和卷等资源。

要使用此功能，需要安装isulad-tools工具：

```
[root@localhost ~]# yum install isulad-tools
```

