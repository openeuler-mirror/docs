# Configuring Static IP Connections<a name="EN-US_TOPIC_0229622755"></a>

## Configuring IP Addresses<a name="section153871657145318"></a>

To add a static IPv4 network connection, run the following command:

```
nmcli connection add type ethernet con-name connection-name ifname interface-name ip4 address gw4 address
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>To add an IPv6 address and related gateway information, use the  **ip6**  and  **gw6**  options.  

For example, to create a static connection configuration file named  **net-static**, run the following command:

```
# nmcli con add type ethernet con-name net-static ifname enp3s0 ip4 192.168.0.10/24 gw4 192.168.0.254
```

You can also specify the IPv6 address and gateway for the device. The following is an example:

```
# nmcli con add type ethernet con-name test-lab ifname enp3s0 ip4 192.168.0.10/24 gw4 192.168.0.254 ip6 abbe::**** gw6 2001:***::*
Connection 'net-static' (63aa2036-8665-f54d-9a92-c3035bad03f7) successfully added.
```

The NetworkManager sets the internal parameter  **ipv4.method**  to  **manual**,  **connection.autoconnect**  to  **yes**, and writes the setting to the  **/etc/sysconfig/network-scripts/ifcfg-my-office**  file. In the file,  **BOOTPROTO**  is set to  **none**, and  **ONBOOT**  is set to  **yes**.

Run the following command to set IPv4 addresses of two DNS servers:

```
# nmcli con mod net-static ipv4.dns "*.*.*.* *.*.*.*"
```

Run the following command to set IPv6 addresses of two DNS servers:

```
# nmcli con mod net-static ipv6.dns "2001:4860:4860::**** 2001:4860:4860::****"
```

## Activating a Connection and Checking Device Connection Status<a name="section1513816208549"></a>

Run the following command to activate a network connection:

```
# nmcli con up net-static ifname enp3s0
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/6)
```

Run the following command to check the connection status of devices:

```
# nmcli device status

DEVICE      TYPE      STATE      CONNECTION
enp4s0      ethernet  connected  enp4s0
enp3s0      ethernet  connected  net-static
virbr0      bridge    connected  virbr0
lo          loopback  unmanaged  --
virbr0-nic  tun       unmanaged  --
```

Run the following command to view the connection details \(with the  **-p**  and  **--pretty**  options to add the title and segment to the output\):

```
# nmcli -p con show net-static 
===============================================================================
Connection profile details (net-static )
===============================================================================
connection.id:                          net-static
connection.uuid:                        b9f18801-6084-4aee-af28-c8f0598ff5e1
connection.stable-id:                   --
connection.type:                        802-3-ethernet
connection.interface-name:              enp3s0
connection.autoconnect:                 yes
connection.autoconnect-priority:        0
connection.autoconnect-retries:         -1 (default)
connection.multi-connect:               0 (default)
connection.auth-retries:                -1
connection.timestamp:                   1578988781
connection.read-only:                   no
connection.permissions:                 --
connection.zone:                        --
connection.master:                      --
connection.slave-type:                  --
connection.autoconnect-slaves:          -1 (default)
connection.secondaries:                 --
connection.gateway-ping-timeout:        0
connection.metered:                     unknown
connection.lldp:                        default
connection.mdns:                        -1 (default)
connection.llmnr:                       -1 (default)
```

