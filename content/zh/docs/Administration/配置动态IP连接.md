# 配置动态IP连接<a name="ZH-CN_TOPIC_0183005783"></a>

## 配置IP<a name="section5521535134318"></a>

要使用 DHCP 分配网络时，可以使用动态IP配置添加网络配置文件，命令格式如下：

```
nmcli connection add type ethernet con-name connection-name ifname interface-name
```

例如创建名为net-test的动态连接配置文件，使用以下命令：

```
# nmcli connection add type ethernet con-name net-test ifname enp3s0
Connection 'net-test' (a771baa0-5064-4296-ac40-5dc8973967ab) successfully added.
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

DEVICE      TYPE      STATE      CONNECTION
enp4s0      ethernet  connected  enp4s0
enp3s0      ethernet  connected  net-test
virbr0      bridge    connected  virbr0
lo          loopback  unmanaged  --
virbr0-nic  tun       unmanaged  --
```

