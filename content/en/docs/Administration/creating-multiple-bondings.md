# Creating Multiple Bondings<a name="EN-US_TOPIC_0229622753"></a>

The system creates a channel bonding interface for each bonding, including the  **BONDING\_OPTS**  instruction. This configuration method allows multiple bonded devices to use different configurations. Perform the following operations to create multiple channel bonding interfaces:

-   Create multiple  **ifcfg-bondN**  files that contain the  **BONDING\_OPTS**  instruction so that network scripts can create bonding interfaces as required.
-   Create or edit the existing interface configuration file to be bonded, and add the  **SLAVE**  instruction.
-   Use the MASTER instruction to assign the interface to be bonded, that is, the slave interface, to the channel bonding interface.

The following is an example of the configuration file of a channel bonding interface:

```
DEVICE=bondN
NAME=bondN
TYPE=Bond
BONDING_MASTER=yes
IPADDR=192.168.1.1
PREFIX=24
ONBOOT=yes
BOOTPROTO=none
BONDING_OPTS="bonding parameters separated by spaces"
```

In this example, replace N with the number of the bonded interface. For example, to create two interfaces, you need to create two configuration files  **ifcfg-bond0**  and  **ifcfg-bond1**  with correct IP addresses.

