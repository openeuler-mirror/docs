# 配置静态IP连接<a name="ZH-CN_TOPIC_0183005784"></a>

## 配置IP<a name="section153871657145318"></a>

添加静态 IPv4 配置的网络连接，可使用以下命令：

```
nmcli connection add type ethernet con-name connection-name ifname interface-name ip4 address gw4 address
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>如果要添加 IPv6 地址和网关信息，使用 ip6 和 gw6 选项。  

例如创建名为 net-static的静态连接配置文件，使用以下命令：

```
# nmcli con add type ethernet con-name net-static ifname ens6 ip4 192.168.0.10/24 gw4 192.168.0.254
```

还可为该设备同时指定 IPv6 地址和网关，示例如下：

```
# nmcli con add type ethernet con-name test-lab ifname ens6 ip4 192.168.0.10/24 gw4 192.168.0.254 ip6 abbe::**** gw6 2001:***::*
Connection 'net-static' (63aa2036-8665-f54d-9a92-c3035bad03f7) successfully added.
```

NetworkManager 会将其内部参数 ipv4.method 设定为 manual，将 connection.autoconnect 设定为yes，并将设置写入 /etc/sysconfig/network-scripts/ifcfg-my-office 文件，其中会将对应 BOOTPROTO 设定为 none，将 ONBOOT 设定为 yes。

设定两个 IPv4 DNS 服务器地址，使用以下命令：

```
# nmcli con mod net-static ipv4.dns "*.*.*.* *.*.*.*"
```

设置两个 IPv6 DNS 服务器地址，使用以下命令：

```
# nmcli con mod net-static ipv6.dns "2001:4860:4860::**** 2001:4860:4860::****"
```

## 激活连接并检查状态<a name="section1513816208549"></a>

激活新的网络连接，使用以下命令：

```
# nmcli con up net-static  ifname ens6
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/6)
```

检查这些设备及连接的状态，使用以下命令：

```
# nmcli device status
EVICE     TYPE      STATE         CONNECTION
ens3      ethernet  connected     net-test 
ens6      ethernet  connected     net-static  
lo        loopback  unmanaged     --
```

查看配置的连接详情，使用以下命令（使用 -p, --pretty 选项在输出结果中添加标题和分段）：

```
# nmcli -p con show net-static 
===============================================================================
Connection profile details (net-static )
===============================================================================
connection.id: net-static 
connection.uuid: 63aa2036-8665-f54d-9a92-********
connection.interface-name: ens6
connection.type: 802-3-ethernet
connection.autoconnect: yes
connection.timestamp: ***********
connection.read-only: no
connection.permissions:
connection.zone: --
connection.master: --
connection.slave-type: --
connection.secondaries:
connection.gateway-ping-timeout: 0[output truncated]
```

