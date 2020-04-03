# Iptables Component<a name="EN-US_TOPIC_0184808203"></a>

If the  **--icc=false**  option is added in Docker, the communication between containers can be restricted. However, if the OS has some rules, the communication between containers may not be restricted. For example:

```
Chain FORWARD (policy ACCEPT 0 packets, 0 bytes) 
... 
0     0 ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0 
... 
0     0 DROP       all  --  docker0 docker0  0.0.0.0/0            0.0.0.0/0
...
```

In the  **Chain FORWARD**  command, the ACCEPT icmp rule is added to DROP. As a result, after the  **--icc=false**  option is added, containers can be pinged, but the peer end is unreachable if UDP or TCP is used.

Therefore, if you want to add the  **--icc=false**  option when using Docker in a container OS, you are advised to clear iptables rules on the host first.

