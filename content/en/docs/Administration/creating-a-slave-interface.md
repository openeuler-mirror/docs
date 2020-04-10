# Creating a Slave Interface<a name="EN-US_TOPIC_0229622721"></a>

After creating a channel bonding interface, you must add the  **MASTER**  and  **SLAVE**  instructions to the configuration file of the slave interface.

For example, to bind the two network interfaces enp3s0 and enp4s0 in channel mode, the configuration files are as follows:

```
TYPE=Ethernet
NAME=bond-slave-enp3s0
UUID=3b7601d1-b373-4fdf-a996-9d267d1cac40
DEVICE=enp3s0
ONBOOT=yes
MASTER=bond0
SLAVE=yes
```

```
TYPE=Ethernet
NAME=bond-slave-enp4s0
UUID=00f0482c-824f-478f-9479-abf947f01c4a
DEVICE=enp4s0
ONBOOT=yes
MASTER=bond0
SLAVE=yes
```

