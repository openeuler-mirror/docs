# 使用nmcli配置主机名<a name="ZH-CN_TOPIC_0183005798"></a>

查询static主机名，使用如下命令：

```
# nmcli general hostname
```

在root权限下，将static主机名设定为host-server，使用如下命令：

```
# nmcli general hostname host-server
```

要让系统hostnamectl感知到static主机名的更改，在root权限下，重启hostnamed服务，使用如下命令：

```
# systemctl restart systemd-hostnamed
```

