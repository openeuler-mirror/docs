# 添加 Wi-Fi 连接<a name="ZH-CN_TOPIC_0183005786"></a>

使用以下命令查看可用 Wi-Fi 访问点：

```
# nmcli dev wifi list
```

使用以下命令生成使用的静态 IP 配置，但允许自动 DNS 地址分配的 Wi-Fi 连接：

```
# nmcli con add con-name Wifi ifname wlan0 type wifi ssid MyWifi ip4 192.168.100.101/24 gw4 192.168.100.1
```

请使用以下命令设定 WPA2 密码，例如 “answer”：

```
# nmcli con modify Wifi wifi-sec.key-mgmt wpa-psk
# nmcli con modify Wifi wifi-sec.psk answer
```

使用以下命令更改 Wi-Fi 状态：

```
# nmcli radio wifi [ on | off ]
```

