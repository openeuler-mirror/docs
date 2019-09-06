# 关联组件iptables<a name="ZH-CN_TOPIC_0184808203"></a>

docker使用--icc=false选项时，可以限制容器之间互通，但若os自带某些规则，可以造成限制容器之间互通失效，例如：

```
Chain FORWARD (policy ACCEPT 0 packets, 0 bytes) 
... 
0     0 ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0 
... 
0     0 DROP       all  --  docker0 docker0  0.0.0.0/0            0.0.0.0/0
...
```

在Chain FORWARD中，DROP上面多出了一条ACCEP icmp的规则，造成加了--icc=false后，容器之间也能ping能通，但udp/tcp仍然是不通的。

因此，在容器os中使用docker，如果需要使用--icc=false选项时，建议先在host上清理一下iptables相关的规则。

