# Setting Network Connections<a name="EN-US_TOPIC_0229622698"></a>

Run the following command to display all the available network connections:

```
# nmcli con show


NAME    UUID                                  TYPE      DEVICE
enp4s0  5afce939-400e-42fd-91ee-55ff5b65deab  ethernet  enp4s0
enp3s0  c88d7b69-f529-35ca-81ab-aa729ac542fd  ethernet  enp3s0
virbr0  ba552da6-f014-49e3-91fa-ec9c388864fa  bridge    virbr0
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>In the command output,  **NAME**  indicates the connection ID \(name\).  

After a network connection is added, the corresponding configuration file is generated and associated with the corresponding device. To check for available devices, run the following command:

```
# nmcli dev status

DEVICE      TYPE      STATE      CONNECTION
enp3s0      ethernet  connected  enp3s0
enp4s0      ethernet  connected  enp4s0
virbr0      bridge    connected  virbr0
lo          loopback  unmanaged  --
virbr0-nic  tun       unmanaged  --
```



