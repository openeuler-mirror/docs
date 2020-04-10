# Configuring Dynamic IP Connections<a name="EN-US_TOPIC_0229622727"></a>

## Configuring IP Addresses<a name="section5521535134318"></a>

When DHCP is used to allocate a network, run the following command to add a network configuration file:

```
nmcli connection add type ethernet con-name connection-name ifname interface-name
```

For example, to create a dynamic connection configuration file named  **net-test**, run the following command:

```
# nmcli connection add type ethernet con-name net-test ifname enp3s0
Connection 'net-test' (a771baa0-5064-4296-ac40-5dc8973967ab) successfully added.
```

The NetworkManager sets  **connection.autoconnect**  to  **yes**  and saves the setting to the  **/etc/sysconfig/network-scripts/ifcfg-net-test**  file. In the  **/etc/sysconfig/network-scripts/ifcfg-net-test**  file,  **ONBOOT**  is set to  **yes**.

## Activating a Connection and Checking Device Connection Status<a name="section17700332105013"></a>

Run the following command to activate a network connection:

```
# nmcli con up net-test 
Connection successfully activated (D-Bus active path:/org/freedesktop/NetworkManager/ActiveConnection/5)
```

Run the following command to check the connection status of devices:

```
# nmcli device status

DEVICE      TYPE      STATE      CONNECTION
enp4s0      ethernet  connected  enp4s0
enp3s0      ethernet  connected  net-test
virbr0      bridge    connected  virbr0
lo          loopback  unmanaged  --
virbr0-nic  tun       unmanaged  --
```

