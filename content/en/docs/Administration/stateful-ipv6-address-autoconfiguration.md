# Stateful IPv6 Address Autoconfiguration<a name="EN-US_TOPIC_0229622762"></a>

## Overview<a name="en-us_topic_0161841795_en-us_topic_0149431074_section10918173910311"></a>

Both IPv6 and IPv4 addresses can be obtained through DHCP. There are configuration methods for IPv6 address: stateless autoconfiguration and stateful autoconfiguration.

-   Stateless autoconfiguration

    The DHCP server is not required for management. The device obtains the network prefix according to the router advertisement \(RA\), or the prefix of a link-local address is fixed to fe80::. The interface ID is automatically obtained based on the value of IPV6\_ADDR\_GEN\_MODE in the ifcfg file.

    1.  If the value of IPv6\_ADDR\_GEN\_MODE is stable-privacy, the device determines a random interface ID based on the device and network environment.
    2.  If the value of IPv6\_ADDR\_GEN\_MODE is EUI64, the device determines the interface ID based on the device MAC address.

-   Stateful autoconfiguration: The DHCP server manages and leases IPv6 addresses from the DHCPv6 server base on the DHCPv6 protocol.

    In stateful autoconfiguration, the DHCPv6 server can classify clients based on the vendor class configured on the clients and assign IPv6 addresses in different address segments to different types of clients. In IPv4 scenarios, the client can use the -V option of the dhclient command to set the vendor-class-identifier field. The DHCP server classifies clients based on the vendor-class-identifier field in the configuration file. In IPv6 scenarios, if the same method is used to classify clients, the classification does not take effect.

    ```
    dhclient -6 <interface> -V <vendor-class-identifier string> <interface>
    ```

    This is because DHCPv6 differs greatly from DHCP. The vendor-class-option in DHCPv6 replaces the vendor-class-identifier in DHCP. However, the -V option of dhclient cannot be set to vendor-class-option.


## Setting the vendor class for dhclient in Stateful IPv6 Address Autoconfiguration<a name="en-us_topic_0161841795_en-us_topic_0149431074_section18695111914325"></a>

-   On the client, add the setting of vendor class by using the configuration file.

    Client configuration file \(/etc/dhcp/dhclient6.conf\): The file location can be customized. You need to specify the configuration file using the dhclient -cf option.

    ```
    option dhcp6.vendor-class code 16 = {integer 32, integer 16, string};
    interface "enp3s0" {
            send dhcp6.vendor-class <Enterprise-ID number> <vendor class string length> <vendor class string>;
    }
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   <Enterprise-ID number\>: a 32-digit integer, indicating the enterprise ID. The enterprise is registered through the IANA.  
    >-   <vendor class string length\>: a 16-digit integer, indicating the length of the vendor class string.  
    >-   <vendor class string\>: character string of the vendor class to be set, for example, HWHW.  

    On the client:

    ```
    dhclient -6 <interface> -cf /etc/dhcp/dhclient6.conf
    ```


-   The DHCPv6 server configuration file \(/etc/dhcp/dhcpd6.conf\) needs to be specified by the dhcpd -cf option.

    ```
    option dhcp6.vendor-class code 16 = {integer 32, integer 16, string};
    subnet6 fc00:4:12:ffff::/64 {
            class "hw" {
                    match if substring ( option dhcp6.vendor-class, 6, 10 ) = "HWHW";
            }
            pool6 {
                    allow members of "hw";
                    range6 fc00:4:12:ffff::ff10 fc00:4:12:ffff::ff20;
            }
            pool6 {
                    allow unknown clients;
                    range6 fc00:4:12:ffff::100 fc00:4:12:ffff::120;
            }
    }
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >In substring \(option dhcp6.vendor-class, 6, 10\), the start position of the substring is 6, because the substring contains four bytes of <Enterprise-ID number\> and two bytes of <string length\>. The end position of the substring is 6+<vendor class string length\>. In this example, the vendor class string is HWHW, and the length of the string is 4. Therefore, the end position of the substring is 6 + 4 = 10. You can specify <vendor class string\> and <vendor class string length\> as required.  

    On the server:

    ```
    dhcpd -6 -cf /etc/dhcp/dhcpd6.conf <interface>
    ```


