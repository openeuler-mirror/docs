# Configuring a Static Route<a name="EN-US_TOPIC_0229622696"></a>

## Configuring a Static Route<a name="en-us_topic_0154464460_section17423295468"></a>

To add a static route to the routing table, run the** ip route add**  command. To delete a route, run the  **ip route del**  command. The following shows the common format of the  **ip route**  command: 

```
ip route [ add | del | change | append | replace ] destination-address
```

To display the current IP routing table, run the  **ip route**  command. The following is an example:

```
# ip route

default via 192.168.0.1 dev enp3s0 proto dhcp metric 100
default via 192.168.0.1 dev enp4s0 proto dhcp metric 101
192.168.0.0/16 dev enp3s0 proto kernel scope link src 192.168.202.248 metric 100
192.168.0.0/16 dev enp4s0 proto kernel scope link src 192.168.203.12 metric 101
192.168.122.0/24 dev virbr0 proto kernel scope link src 192.168.122.1 linkdown
```

To add a static route to the host address, run the following command as the user  **root**:

```
ip route add 192.168.2.1 via 10.0.0.1 [dev interface-name]
```

In the preceding command,  **192.168.2.1**  is the IP address in the dot-decimal notation,  **10.0.0.1**  is the next hop, and  _interface-name_  is the exit interface for entering the next hop.

To add a static route to the network, that is, an IP address that represents an IP address range, run the following command as the user  **root**:

```
ip route add 192.168.2.0/24 via 10.0.0.1 [dev interface-name]
```

In the preceding command,  **192.168.2.1**  is the IP address of the target network,  _10.0.0.1_  is the network prefix, and  _interface-name_  is the NIC name.

