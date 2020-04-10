# Configuring IP Addresses<a name="EN-US_TOPIC_0229622756"></a>

Run the  **ip**  command to configure an IP address for the interface. The command format is as follows, where  _interface-name_  indicates the NIC name.

```
ip addr [ add | del ] address dev interface-name
```

## Configuring a Static IP Address<a name="en-us_topic_0154464459_section114276365431"></a>

Run the following command as the user  **root**  to configure an IP address:

```
# ip address add 192.168.0.10/24 dev enp3s0
```

Run the following command to view the configuration result:

```
# ip addr show dev enp3s0
2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:00:aa:ad:4a brd ff:ff:ff:ff:ff:ff
    inet 192.168.202.248/16 brd 192.168.255.255 scope global dynamic noprefixroute enp3s0
       valid_lft 9547sec preferred_lft 9547sec
    inet 192.168.0.10/24 scope global enp3s0
       valid_lft forever preferred_lft forever
    inet6 fe80::32e8:cc22:9db2:f4d4/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

## Configuring Multiple IP Addresses<a name="en-us_topic_0154464459_section174918212430"></a>

The  **ip**  command can be used to assign multiple IP addresses to an interface. You can run the  **ip**  command multiple times to assign IP addresses to an interface. The following is an example:

```
# ip address add 192.168.2.223/24 dev enp4s0
# ip address add 192.168.4.223/24 dev enp4s0
# ip addr

3: enp4s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 52:54:00:aa:da:e2 brd ff:ff:ff:ff:ff:ff
    inet 192.168.203.12/16 brd 192.168.255.255 scope global dynamic noprefixroute enp4s0
       valid_lft 8389sec preferred_lft 8389sec
    inet 192.168.2.223/24 scope global enp4s0
       valid_lft forever preferred_lft forever
    inet 192.168.4.223/24 scope global enp4s0
       valid_lft forever preferred_lft forever
    inet6 fe80::1eef:5e24:4b67:f07f/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

