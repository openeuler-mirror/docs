# Modifying Attributes<a name="EN-US_TOPIC_0229622763"></a>

Run the following command to check a specific attribute, for example, mtu:

```
# nmcli connection show id 'Wifi ' | grep mtu
802-11-wireless.mtu: auto
```

Run the following command to modify the attribute:

```
# nmcli connection modify id 'Wifi ' 802-11-wireless.mtu 1350
```

Run the following command to confirm the modification:

```
# nmcli connection show id 'Wifi ' | grep mtu
802-11-wireless.mtu: 1350
```

