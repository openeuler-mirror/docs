# Creating a Channel Bonding Interface<a name="EN-US_TOPIC_0229622712"></a>

To create a channel bonding interface, you can create a file named  **ifcfg-bondN**  in the  **/etc/sysconfig/network-scripts/**  directory \(replacing N with the actual interface number, for example, 0\).

Write the corresponding content to the configuration file according to the type of the interface to be bonded, for example, network interface. An example of the interface configuration file is as follows:

```
DEVICE=bond0
NAME=bond0
TYPE=Bond
BONDING_MASTER=yes
IPADDR=192.168.1.1
PREFIX=24
ONBOOT=yes
BOOTPROTO=none
BONDING_OPTS="bonding parameters separated by spaces"
```

