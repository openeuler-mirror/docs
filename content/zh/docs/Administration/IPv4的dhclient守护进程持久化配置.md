# IPv4的dhclient守护进程持久化配置<a name="ZH-CN_TOPIC_0183013289"></a>

## 概述<a name="zh-cn_topic_0161841797_zh-cn_topic_0151780564_section2046213177403"></a>

通过NetworkManager服务来管理网络服务时，如果接口ifcfg-<interface-name\>配置文件中配置了DHCP方式获得IP地址，则相应地NetworkManager服务会拉起dhclient守护进程来通过DHCP协议方式来从DHCP服务器获取IP地址。

dhclient提供了"-1"选项来决定dhclient进程在未获得DHCP服务响应时，是会不断持久化尝试请求地址还是会尝试时间超时后退出。针对IPv4的dhclient守护进程，可以在ifcfg-<interface-name\>配置文件中设置PERSISTENT\_DHCLIENT来决定是否设置IPv4的dhclient进程的持久化。

## 约束限制<a name="zh-cn_topic_0161841797_zh-cn_topic_0151780564_section248648103311"></a>

1.  当dhclient进程在运行中被杀死，network服务无法自动将其拉起，可靠性需要用户自己保障。
2.  配置了持久化选项PERSISTENT\_DHCLIENT，需要确保有相应的DHCP服务器。如果在拉起network时无可用DHCP服务器，dhclient进程不断尝试发送请求包但无回应，则会导致network服务卡死直到network服务超时失败。由于network服务在拉起多个网卡的IPv4 dhclient进程时，是通过串行的方式来拉起的。如果有网卡配置了持久化而DHCP服务器没有准备好，则会导致network服务在给该网卡获取IPv4地址超时卡死，进而导致后续网卡无法获得IPv4/IPv6地址。

以上两种约束限制是特殊的应用场景，需要用户自己进行可靠性保障。

## IPv4 DHCP和IPv6 DHCPv6方式获取地址的配置差异<a name="zh-cn_topic_0161841797_zh-cn_topic_0151780564_section938711510011"></a>

可以通过配置接口ifcfg-<interface-name\>参数来分别实现IPv4和IPv6通过DHCP/DHCPv6协议来动态获取IP地址，具体配置说明如下；

```
BOOTPROTO=none|bootp|dhcp
DHCPV6C=yes|no
PERSISTENT_DHCLIENT=yes|no|1|0
```

-   BOOTPROTO： none表示静态配置IPv4地址，bootp|dhcp则会拉起DHCP dhclient来动态获取IPv4地址。
-   DHCPV6C： no表示静态配置IPv6地址，yes则会拉起DHCPv6 dhclient来动态获取IPv6地址。
-   PERSISTENT\_DHCLIENT：no|0表示IPv4的dhclient进程配置为“非持久化”，当dhclient向DHCP服务器发送一次请求报文而无响应，则会间隔一段时间后退出，退出值为2。yes|1则表示IPv4的dhclient进程配置为“持久化”，dhclient会向DHCP服务器反复发送请求报文。**如果没有配置PERSISTENT\_DHCLIENT项，则IPv4的dhclient会默认设置为“持久化”**。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >PERSISTENT\_DHCLIENT配置只针对IPv4生效，对IPv6相关dhclient -6进程不生效，IPv6默认不进行持久化配置。  


