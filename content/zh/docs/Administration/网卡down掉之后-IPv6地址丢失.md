# 网卡down掉之后，IPv6地址丢失<a name="ZH-CN_TOPIC_0183013294"></a>

## 问题现象<a name="zh-cn_topic_0161841802_zh-cn_topic_0155558602_section2046213177403"></a>

通过ip link down+up网卡或ifconfig down+up网卡命令，将网卡down掉之后再上线，查看网卡上配置的ip地址，发现ipv4地址不丢失，而配置的IPv6地址丢失。

## 原因分析<a name="zh-cn_topic_0161841802_zh-cn_topic_0155558602_section158204366593"></a>

内核中的处理逻辑为如果网卡设置为down状态，会清空所有IPv4及IPv6地址，将网卡重新up之后，ipv4地址自动恢复，网卡上自动配置的IPv6链路本地地址也会恢复，但是其他IPv6地址默认会丢失。如果需要保留这些IPv6地址，可以通过“sysctl -w net.ipv6.conf.<网卡名\>.keep\_addr\_on\_down=1”来实现。

