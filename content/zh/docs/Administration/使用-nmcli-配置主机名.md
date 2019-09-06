# 使用 nmcli 配置主机名<a name="ZH-CN_TOPIC_0183005798"></a>

查询 static 主机名，使用如下命令：

```
# nmcli general hostname
```

在root权限下，将 static 主机名设定为 host-server，使用如下命令：

```
# nmcli general hostname host-server
```

要让系统 hostnamectl 感知到 static 主机名的更改，在root权限下，重启 hostnamed服务，使用如下命令：

```
# systemctl restart systemd-hostnamed
```

