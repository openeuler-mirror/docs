# Configuring the Network<a name="EN-US_TOPIC_0214071120"></a>

Enter  **6**  on the installation overview page and press  **Enter**  to configure the system network function. You can set the host name and configure network devices. The configuration is not necessary during the installation. You can perform the configuration after the system is started.

**Figure  1**  Network configuration<a name="fig09419437516"></a>  
![](figures/network-configuration.png "network-configuration")

-   Setting the host name

Select  **1\) Set host name**, enter the host name openEuler, and press  **Enter**.

-   Configuring the NIC

Select a NIC configuration item shown in the following figure and configure it. By default, the value of IPv4 address is dhcp, and the value of IPv6 address is auto.

![](figures/22.png)

NIC configuration description

1.  IPv4 address or "dhcp" for DHCP: Configure the IPv4 address. The default value is dhcp, indicating that the DHCP server assigns an IP address.
2.  IPv4 netmask: Configure the IPv4 mask.
3.  IPv4 gateway: Configure the IPv4 gateway.
4.  IPv6 address or "auto" for automatic, "dhcp" for DHCP, "ignore" to turn off: Configure IPv6 address. The default value is auto.
5.  IPv6 default gateway: Configure the default IPv6 gateway.
6.  Nameservers: DNS server.
7.  Connect automatically after reboot: Automatically connect to the network after the reboot.
8.  Apply configuration in installer: Apply the configuration in the installation program.

>![](public_sys-resources/icon-note.gif) **说明：**   
>**Apply configuration in installer** is only recommended when the installation source is **Network**. If **Apply configuration in installer** is selected, the installation software needs to be reselected.

After the configuration is complete, enter  **c**  to return to the installation overview page.

