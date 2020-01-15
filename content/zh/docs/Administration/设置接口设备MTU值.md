# 设置接口设备MTU值<a name="ZH-CN_TOPIC_0183013286"></a>

## 概述<a name="zh-cn_topic_0161841794_zh-cn_topic_0150261767_section814514912316"></a>

IPv6场景中会发现整个路由路径中的最小mtu的值作为当前链接的PMTU的值，源端根据PMTU的值确定是否进行分片发送，而在整个路径中的其它设备将不再需要进行分片处理，从而可以降低中间路由设备的负载大小。其中IPv6 PMTU设置的最小值为1280。

## 设置接口设备的mtu<a name="zh-cn_topic_0161841794_zh-cn_topic_0150261767_section1481244210263"></a>

如果在配置了IPv6地址的接口上设置mtu的值小于1280（IPv6 PMTU设置的最小值），则会导致该接口的IPv6地址被删除。并且无法再次添加IPv6地址。所以在IPv6场景中，对接口设备的mtu的配置一定要大于等于1280。具体现象如下：

```
# ip addr show enp3s0
3: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 52:54:00:62:xx:xx brd ff:ff:ff:ff:xx:xx
    inet 10.41.125.236/16 brd 10.41.255.255 scope global noprefixroute dynamic enp3s0
       valid_lft 38663sec preferred_lft 38663sec
    inet6 2001:222::2/64 scope global
       valid_lft forever preferred_lft forever
```

```
# ip link set dev enp3s0 mtu 1200
# ip addr show enp3s0
3: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1200 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 52:54:00:62:xx:xx brd ff:ff:ff:ff:xx:xx
    inet 10.41.125.236/16 brd 10.41.255.255 scope global noprefixroute dynamic enp3s0
       valid_lft 38642sec preferred_lft 38642sec
```

```
# ip addr add 2001:222::2/64 dev enp3s0
RTNETLINK answers: No buffer space available
```

```
# ip link set dev enp3s0 mtu 1500
# ip addr show enp3s0
3: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 52:54:00:62:xx:xx brd ff:ff:ff:ff:xx:xx
    inet 10.41.125.236/16 brd 10.41.255.255 scope global noprefixroute dynamic enp3s0
       valid_lft 38538sec preferred_lft 38538sec
```

```
# ip addr add 2001:222::2/64 dev enp3s0
# ip addr show enp3s0
3: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 52:54:00:62:xx:xx brd ff:ff:ff:ff:xx:xx
    inet 10.41.125.236/16 brd 10.41.255.255 scope global noprefixroute dynamic enp3s0
       valid_lft 38531sec preferred_lft 38531sec
    inet6 2001:222::2/64 scope global
       valid_lft forever preferred_lft forever
```

