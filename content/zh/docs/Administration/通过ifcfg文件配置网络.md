# 通过ifcfg文件配置网络<a name="ZH-CN_TOPIC_0183005790"></a>

## 配置静态网络<a name="zh-cn_topic_0154464458_section125991333192917"></a>

以 eth0 网络接口进行静态网络设置为例，通过修改 ifcfg 文件实现，在 /etc/sysconfig/network-scripts/ 目录中生成名为 ifcfg-eth0 的文件中，修改参数配置，示例如下：

```
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
PREFIX=24
IPADDR=10.0.1.27
```

## 配置动态网络<a name="zh-cn_topic_0154464458_section0887945182917"></a>

要通过 ifcfg 文件为名为 em1 的接口配置动态网络，请按照如下操作在/etc/sysconfig/network-scripts/ 目录中生成名为 ifcfg-em1 的文件，示例如下：

```
DEVICE=em1
BOOTPROTO=dhcp
ONBOOT=yes
```

要配置一个向 DHCP 服务器发送不同的主机名的接口，请在 ifcfg 文件中新增一行内容，如下所示：

```
DHCP_HOSTNAME=hostname
```

要配置忽略由 DHCP 服务器发送的路由，防止网络服务使用从 DHCP 服务器接收的 DNS 服务器更新 /etc/resolv.conf。请在 ifcfg 文件中新增一行内容，如下所示：

```
PEERDNS=no
```

要配置一个接口使用具体 DNS 服务器，请将参数 PEERDNS=no，并在 ifcfg 文件中添加以下行：

```
DNS1=ip-address
DNS2=ip-address
```

其中 ip-address 是 DNS 服务器的地址。这样就会让网络服务使用指定的 DNS 服务器更新/etc/resolv.conf。

