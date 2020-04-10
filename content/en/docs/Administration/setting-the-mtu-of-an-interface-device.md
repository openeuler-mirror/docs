# Setting the MTU of an Interface Device<a name="EN-US_TOPIC_0229622767"></a>

## Overview<a name="en-us_topic_0161841794_en-us_topic_0150261767_section814514912316"></a>

In an IPv6 scenario, the minimum MTU value of the entire routing path is used as the PMTU value of the current link. The source end determines whether to fragment packets based on the PMTU value. Other devices on the entire path do not need to fragment packets. This reduces the load of intermediate routing devices. The minimum value of IPv6 PMTU is 1280.

## Setting the MTU of the Interface Device<a name="en-us_topic_0161841794_en-us_topic_0150261767_section1481244210263"></a>

If the MTU of an interface configured with an IPv6 address is set to a value smaller than  **1280**  \(the minimum value of the IPv6 PMTU\), the IPv6 address of the interface will be deleted and cannot be added again. Therefore, in IPv6 scenarios, the MTU of the interface device must be greater than or equal to 1280. The details are as follows: 

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

