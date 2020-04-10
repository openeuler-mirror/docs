# Adding a Wi-Fi Connection<a name="EN-US_TOPIC_0229622783"></a>

Run the following command to check for available Wi-Fi access points:

```
# nmcli dev wifi list
```

Run the following command to generate a static IP address configuration that allows Wi-Fi connections automatically allocated by the DNS:

```
# nmcli con add con-name Wifi ifname wlan0 type wifi ssid MyWifi ip4 192.168.100.101/24 gw4 192.168.100.1
```

Run the following command to set a WPA2 password, for example,  **answer**:

```
# nmcli con modify Wifi wifi-sec.key-mgmt wpa-psk
# nmcli con modify Wifi wifi-sec.psk answer
```

Run the following command to change the Wi-Fi status:

```
# nmcli radio wifi [ on | off ]
```

