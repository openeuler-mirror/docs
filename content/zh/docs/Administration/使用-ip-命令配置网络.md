# 使用 ip 命令配置网络<a name="ZH-CN_TOPIC_0183005791"></a>

使用 ip 命令为接口配置地址，命令格式如下：

```
ip addr [ add | del ] address dev ifname
```

## 配置静态地址<a name="zh-cn_topic_0154464459_section114276365431"></a>

在 root 权限下，配置设置 IP 地址，使用示例如下：

```
# ip address add 192.168.0.10/24 dev eth0
The address assignment of a specific device can be viewed as follows:
```

查看配置结果，使用如下命令：

```
# ip addr show dev eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
  link/ether f0:de:f1:7b:6e:5f brd ff:ff:ff:ff:**:**
  inet 192.168.0.10/24 brd 192.168.0.255 scope global global eth0
    valid_lft 58682sec preferred_lft 58682sec
  inet6 fe80::f2de:f1ff:fe7b:6e5f/64 scope link
    valid_lft forever preferred_lft forever
```

## 配置多个地址<a name="zh-cn_topic_0154464459_section174918212430"></a>

ip 命令支持为同一接口分配多个地址，可重复多次使用 ip 命令实现分配多个地址。使用示例如下：

```
# ip address add 192.168.2.223/24 dev eth1
# ip address add 192.168.4.223/24 dev eth1
# ip addr
3: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
  link/ether 52:54:00:fb:77:9e brd ff:ff:ff:ff:**:**
  inet 192.168.2.223/24 scope global eth1
  inet 192.168.4.223/24 scope global eth1
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>在系统重启后，通过 ip 命令进行的配置会丢失。  

