# 内核支持socket相关系统调用<a name="ZH-CN_TOPIC_0183013288"></a>

## 概述<a name="zh-cn_topic_0161841796_zh-cn_topic_0150261766_section152301399181"></a>

IPv6地址长度扩展到128比特，所以有足够的IPv6地址可供分配使用。同时IPv6头相比IPv4头进行了简化，并增强了IPv6的自动配置功能。IPv6地址分为单播地址，组播地址和任意播地址。常用的单播地址又包含：链路本地地址（link-local address），唯一本地地址（Unique local address）和全局地址（global address）。由于IPv6的全局地址十分充足，唯一本地地址一般不被使用（其前身为站点本地地址（site-local address），已于2004年被废弃）。当前主要使用的单播地址为：链路本地地址（link-local address）和全局地址（global address）。当前内核支持socket系统调用，在使用单播地址的链路本地地址和全局地址时存在差异。

## link-local地址和global地址在socket调用时的差异<a name="zh-cn_topic_0161841796_zh-cn_topic_0150261766_section1666312198820"></a>

RFC 2553： Basic Socket Interface Extensions for IPv6 定义sockaddr\_in6的数据结构如下；

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

>![](public_sys-resources/icon-note.gif) **说明：**   
>sin6\_scope\_id： 32位整型，对于链路本地地址（link-local address），对于链路范围的sin6\_addr，它可以用来标识指定的接口索引号。如果是站点范围的sin6\_addr，则用来作为站点的标识符（站点本地地址已被抛弃）。  

在使用link-local地址进行socket通信时，在构造目的地址时，需要制定该地址所对应的接口索引号。一般可以通过if\_nametoindex函数将接口名转化为接口索引号。具体方式如下，

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

