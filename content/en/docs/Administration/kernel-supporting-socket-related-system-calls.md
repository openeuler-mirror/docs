# Kernel Supporting Socket-Related System Calls<a name="EN-US_TOPIC_0229622746"></a>

## Overview<a name="en-us_topic_0161841796_en-us_topic_0150261766_section152301399181"></a>

The length of an IPv6 address is extended to 128 bits, indicating that there are sufficient IPv6 addresses for allocation. Compared with the IPv4 header, the IPv6 header is simplified, and the IPv6 automatic configuration function is enhanced. IPv6 addresses are classified into unicast addresses, multicast addresses, and anycast addresses. Common unicast addresses include link-local addresses, unique local addresses, and global addresses. As there are sufficient global IPv6 addresses, unique local addresses are not used. \(formerly known as site-local addresses, which were discarded in 2004.\) Currently, the mainstream unicast addresses are link-local address and global address. The current kernel supports socket system invoking. The link-local address and global address using unicast addresses are different.

## Differences Between the link-local Address and global Address During Socket Invoking<a name="en-us_topic_0161841796_en-us_topic_0150261766_section1666312198820"></a>

RFC 2553: Basic Socket Interface Extensions for IPv6 defines the sockaddr\_in6 data structure as follows:

```
struct sockaddr_in6 {     
    uint8_t         sin6_len;       /* length of this struct */     
    sa_family_t     sin6_family;    /* AF_INET6 */     
    in_port_t       sin6_port;      /* transport layer port # */     
    uint32_t        sin6_flowinfo;  /* IPv6 flow information */     
    struct in6_addr sin6_addr;      /* IPv6 address */     
    uint32_t        sin6_scope_id;  /* set of interfaces for a scope */ 
}; 
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>sin6\_scope\_id: a 32-bit integer. For the link-local address, it identifies the index of the specified interface. For the link-range sin6\_addr, it identifies the index of the specified interface. For the site-range sin6\_addr, it is used as the site identifier \(the site-local address has been discarded\).  

When the link-local address is used for socket communication, the interface index corresponding to the address needs to be specified when the destination address is constructed. Generally, you can use the if\_nametoindex function to convert an interface name into an interface index number. Details are as follows:

```
int port = 1234;
int sk_fd;
int iff_index = 0;
char iff_name[100] = "enp3s0";
char * ll_addr[100] = "fe80::123:456:789";
struct sockaddr_in6 server_addr;

memset(&server_addr,0,sizeof(structsockaddr_in6));
iff_index=if_nametoindex(iff_name);

server_addr.sin6_family=AF_INET6;
server_addr.sin6_port=htons(port);
server_addr.sin6_scope_id=iff_index;
inet_pton(AF_INET6, ll_addr, &(server_addr.sin6_addr));

sk_fd=socket(AF_INET6, SOCK_STREAM, IPPROTO_TCP);
connect(sk_fd, (struct sockaddr *)&server_addr, sizeof(struct sockaddr_in6));
```

