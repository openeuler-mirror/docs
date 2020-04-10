# Configuring the Network Through the ifcfg File<a name="EN-US_TOPIC_0229622788"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The network configured in the  **ifcfg**  file does not take effect immediately. You need to run the  **systemctl reload NetworkManager**  command to restart the network service for the configuration to take effect.  

## Configuring a Static Network<a name="en-us_topic_0154464458_section125991333192917"></a>

The following uses the  **enp4s0**  network interface as an example to describe how to configure a static network by modifying the  **ifcfg**  file. The  **ifcfg-enp4s0**  file is generated in the  **/etc/sysconfig/network-scripts/**  directory. Modify the following parameters in the file:

```
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none
IPADDR=192.168.0.10
PREFIX=24
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=enp4s0static
UUID=08c3a30e-c5e2-4d7b-831f-26c3cdc29293
DEVICE=enp4s0
ONBOOT=yes
```

## Configuring a Dynamic Network<a name="en-us_topic_0154464458_section0887945182917"></a>

The following uses the  **em1**  network interface as an example to describe how to configure a dynamic network by modifying the  **ifcfg**  file. The  **ifcfg-em1**  file is generated in the  **/etc/sysconfig/network-scripts/**  directory. Modify the following parameters in the file:

```
DEVICE=em1
BOOTPROTO=dhcp
ONBOOT=yes
```

To configure an interface to send different host names to the DHCP server, add the following content to the  **ifcfg**  file:

```
DHCP_HOSTNAME=hostname
```

To configure an interface to ignore the routes sent by the DHCP server to prevent network services from updating the /etc/resolv.conf file using the DNS server received from the DHCP server, add the following content to the  **ifcfg**  file:

```
PEERDNS=no
```

To configure an interface to use a specific DNS server, set the  **PEERDNS**  parameter to  **no**  and add the following content to the  **ifcfg**  file:

```
DNS1=ip-address
DNS2=ip-address
```

**ip-address**  is the IP address of the DNS server. This allows the network service to update the** /etc/resolv.conf**  file using the specified DNS server.

## Default Gateway Configuration<a name="en-us_topic_0154464460_section46751588496"></a>

When determining the default gateway, parse the  **/etc/sysconfig/network**  file and then the  **ifcfg**  file, and uses the value of  **GATEWAY**  that is read last as the default route in the routing table.

In a dynamic network environment, when the NetworkManager is used to manage hosts, you are advised to set the default gateway to DHCP assignment.

