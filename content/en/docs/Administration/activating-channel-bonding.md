# Activating Channel Bonding<a name="EN-US_TOPIC_0229622734"></a>

To activate channel bonding, you need to enable all the slave interfaces. Run the following command as the  **root**  user:

```
# ifup enp3s0
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/7)
```

```
# ifup enp4s0
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/8)
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If an interface is in  **up**  state, run the  **ifdown** _enp3s0_  command to change the state to  **down**. In the command,  _enp3s0_  indicates the actual NIC name.  

After that, enable all the slave interfaces to enable the bonding \(do not set them to  **Down**\).

To enable the NetworkManager to detect the modifications made by the system, run the following command as user  **root**  user after each modification:

```
# nmcli con load /etc/sysconfig/network-scripts/ifcfg-device
```

Run the following command to check the status of the bonded interface:

```
# ip link show

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 52:54:00:aa:ad:4a brd ff:ff:ff:ff:ff:ff
3: enp4s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 52:54:00:aa:da:e2 brd ff:ff:ff:ff:ff:ff
4: virbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default qlen 1000
    link/ether 86:a1:10:fb:ef:07 brd ff:ff:ff:ff:ff:ff
5: virbr0-nic: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel master virbr0 state DOWN mode DEFAULT group default qlen 1000
    link/ether 52:54:00:29:35:4c brd ff:ff:ff:ff:ff:ff
```

