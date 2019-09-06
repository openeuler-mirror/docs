# 配置动态IP连接<a name="ZH-CN_TOPIC_0183005783"></a>

## 配置IP<a name="section5521535134318"></a>

要使用 DHCP 分配网络时，可以使用动态IP配置添加网络配置文件，命令格式如下：

```
nmcli connection add type ethernet con-name connection-name ifname interface-name
```

例如创建名为net-test的动态连接配置文件，使用以下命令：

```
# nmcli con add type ethernet con-name net-test ifname ens3  
Connection 'net-test' (86395ace-4594-4778-a74b-5f589ad5b406) successfully added.
```

NetworkManager 会将参数 connection.autoconnect 设定为 yes，并将设置保存到 “/etc/sysconfig/network-scripts/ifcfg-net-test”文件中，在该文件中会将 ONBOOT 设置为 yes。

## 激活连接并检查状态<a name="section17700332105013"></a>

使用以下命令激活网络连接，使用以下命令：

```
# nmcli con up net-test 
Connection successfully activated (D-Bus active path:/org/freedesktop/NetworkManager/ActiveConnection/5)
```

检查这些设备及连接的状态，使用以下命令：

```
# nmcli device status
EVICE     TYPE      STATE         CONNECTION
ens3      ethernet  connected     net-test 
ens6      ethernet  disconnected  -- 
lo        loopback  unmanaged     --
```

更改主机发送到 DHCP 服务器的主机名，则需要修改 dhcp-hostname 属性，使用如下命令：

```
# nmcli con modify net-test net-test ipv4.dhcp-hostname host-name ipv6.dhcp-hostname host-name
```

更改主机发送到 DHCP 服务器的 IPv4 客户端 ID，需要修改 dhcp-client-id 属性，使用如下命令：

```
# nmcli con modify net-test net-test ipv4.dhcp-client-id client-IDstring
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>当前没有用于 IPv6 的 dhcp-client-id 属性，dhclient 为 IPv6 生成识别符。详细说明请查看 dhclient\(8\) manpage。  

