# Persistency Configuration of the IPv4 dhclient Daemon Process<a name="EN-US_TOPIC_0229622769"></a>

## Overview<a name="en-us_topic_0161841797_en-us_topic_0151780564_section2046213177403"></a>

When the NetworkManager service is used to manage network services, if the ifcfg-<interface-name\> configuration file of an interface is configured to obtain an IP address in DHCP mode, the NetworkManager service starts the dhclient daemon process to obtain an IP address from the DHCP server.

The dhclient provides the -1 option to determine whether the dhclient process persistently attempts to request an IP address or exits after the request times out before receiving a response from the DHCP server. For the IPv4 dhclient daemon process, you can set PERSISTENT\_DHCLIENT in the ifcfg-<interface-name\> configuration file to determine whether to set the persistence of the IPv4 dhclient process.

## Restrictions<a name="en-us_topic_0161841797_en-us_topic_0151780564_section248648103311"></a>

1.  If the ongoing dhclient process is killed, the network service cannot automatically start it. Therefore, you need to ensure the reliability.
2.  If PERSISTENT\_DHCLIENT is configured, ensure that the corresponding DHCP server exists. If no DHCP server is available when the network service is started and the dhclient process continuously attempts to send request packets but does not receive any response, the network service is suspended until the network service times out. The network service starts the IPv4 dhclient processes of multiple NICs in serial mode. If persistency is configured for a NIC but the DHCP server is not ready, the network service will be suspended when obtaining an IPv4 address for the NIC. As a result, the NIC cannot obtain an IPv4 or IPv6 address.

The preceding restrictions apply to special scenarios. You need to ensure reliability.

## Configuration Differences Between IPv4 DHCP and IPv6 DHCPv6<a name="en-us_topic_0161841797_en-us_topic_0151780564_section938711510011"></a>

You can configure the ifcfg-<interface-name\> parameter on an interface to enable IPv4 and IPv6 to dynamically obtain IP addresses using DHCP or DHCPv6. The configuration is as follows:

```
BOOTPROTO=none|bootp|dhcp
DHCPV6C=yes|no
PERSISTENT_DHCLIENT=yes|no|1|0
```

-   BOOTPROTO:  **none**  indicates that an IPv4 address is statically configured. bootp|dhcp enables DHCP dhclient to dynamically obtain an IPv4 address.
-   DHCPV6C:  **no**  indicates that an IPv6 address is statically configured, and  **yes**  indicates that the DHCPv6 dhclient is enabled to dynamically obtain the IPv6 address.
-   PERSISTENT\_DHCLIENT:  **no|0**  indicates that the IPv4 dhclient process is configured as nonpersistent. If the dhclient sends a request packet to the DHCP server but does not receive any response, the dhclient exits after a period of time and the exit value is 2.  **yes|1**  indicates that the IPv4 dhclient process is configured to be persistent. The dhclient process repeatedly sends request packets to the DHCP server.  **If PERSISTENT\_DHCLIENT is not configured, dhclient of IPv4 is set to yes|1 by default.**

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The PERSISTENT\_DHCLIENT configuration takes effect only for IPv4 and does not take effect for IPv6-related dhclient -6 processes. By default, the persistence configuration is not performed for IPv6.  


