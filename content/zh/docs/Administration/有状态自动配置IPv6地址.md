# 有状态自动配置IPv6地址<a name="ZH-CN_TOPIC_0183013287"></a>

## 概述<a name="zh-cn_topic_0161841795_zh-cn_topic_0149431074_section10918173910311"></a>

IPv6与IPv4都可以通过DHCP的方式获得IP地址。IPv6地址有两种配置方式：无状态自动配置和有状态自动配置。

-   无状态自动配置

    不需要DHCP服务进行管理，设备根据网络RA（路由公告）获得网络前缀，或者link-local地址为固定fe80::。而接口ID则根据ifcfg配置IPV6\_ADDR\_GEN\_MODE的具体设置来进行自动获得：

    1.  IPv6\_ADDR\_GEN\_MODE="stable-privacy" 则根据设备及网络环境来确定一个随机接口ID。
    2.  IPv6\_ADDR\_GEN\_MODE="EUI64" 则根据设备MAC地址来确定接口ID。

-   有状态自动配置：需要DHCP服务器进行管理分配，服从DHCPv6协议来从DHCPv6服务器端租赁IPv6地址。

    在有状态自动配置IPv6地址时，DHCPv6服务端可以通过客户端设置的vendor class将客户端进行分类，不同类别分配不同地址段的IPv6地址。在IPv4场景中，客户端可以直接用dhclient的-V选项来设置vendor-class-identifier，DHCP服务端在配置文件中根据vendor-class-identifier来对客户端进行分类处理。而IPv6场景中，如果使用同样的方法对客户端分类，则分类并不会生效。

    ```
    dhclient -6 <interface> -V <vendor-class-identifier string> <interface>
    ```

    这是由于DHCPv6和DHCP协议存在较大差异，DHCPv6的可选项中使用vendor-class-option替代了DHCP中的vendor-class-identifier。而dhclient的-V选项并不能设置vendor-class-option。


## 有状态自动配置IPv6地址时dhclient设置vendor class方法<a name="zh-cn_topic_0161841795_zh-cn_topic_0149431074_section18695111914325"></a>

-   在客户端使用配置文件方式添加对vendor class的设置，使用方法如下：

    客户端配置文件（/etc/dhcp/dhclient6.conf），文件位置可以自定义，在使用时需要通过dhclient -cf选项来指定配置文件：

    ```
    option dhcp6.vendor-class code 16 = {integer 32, integer 16, string};
    interface "enp3s0" {
            send dhcp6.vendor-class <Enterprise-ID number> <vendor class string length> <vendor class string>;
    }
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >-   <Enterprise-ID number\>，32位整型数字，企业标识号，企业通过IANA注册。  
    >-   <vendor class string length\>，16位整型数字，vendor class字符串长度。  
    >-   <vendor class string\>，要设置的vendor class字符串，例如：“HWHW”。  

    客户端使用方法：

    ```
    dhclient -6 <interface> -cf /etc/dhcp/dhclient6.conf
    ```


-   DHCPv6服务端配置文件（/etc/dhcp/dhcpd6.conf），需要dhcpd -cf选项来指定该配置文件：

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

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >substring \( option dhcp6.vendor-class, 6, 10 \) 其中子字符串的开始位置为6，因为前面包含4个字节的<Enterprise-ID number\>和2个字节的<string length\>。而子字符串的结束位置位：6+<vendor class string length\>。这里vendor class string为“HWHW”，字符串的长度为4，所以子字符串的结束位置为6+4=10。用户可以根据实际需要来确定<vendor class string\>及相应的<vendor class string length\>。  

    服务端使用方法：

    ```
    dhcpd -6 -cf /etc/dhcp/dhcpd6.conf <interface>
    ```


