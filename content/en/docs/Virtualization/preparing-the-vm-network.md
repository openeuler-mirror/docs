# Preparing the VM Network<a name="EN-US_TOPIC_0183148733"></a>

## Overview<a name="section15609145455315"></a>

To enable the VM to communicate with external networks, you need to configure the network environment for the VM. KVM virtualization supports multiple types of bridges, such as Linux bridge and Open vSwitch bridge. As shown in  [Figure 1](#fig1785384714917), the data transmission path is  **VM \> virtual NIC device \> Linux bridge or Open vSwitch bridge \> physical NIC**. In addition to configuring virtual NICs \(vNICs\) for VMs, creating a bridge for a host is the key to connecting to a virtualized network.

This section describes how to set up a Linux bridge and an Open vSwitch bridge to connect a VM to the network. You can select a bridge type based on the site requirements.

**Figure  1**  Virtual network structure<a name="fig1785384714917"></a>  
![](figures/virtual-network-structure.png "virtual-network-structure")

## Setting Up a Linux Bridge<a name="section44441949194613"></a>

The following describes how to bind the physical NIC eth0 to the Linux bridge br0.

1.  Install the  **bridge-utils**  software package.

    The Linux bridge is managed by the brctl tool. The corresponding installation package is bridge-utils. The installation command is as follows:

    ```
    # yum install -y bridge-utils
    ```

2.  Create bridge br0.

    ```
    # brctl addbr br0
    ```

3.  Bind the physical NIC eth0 to the Linux bridge.

    ```
    # brctl addif br0 eth0
    ```

4.  After eth0 is connected to the bridge, the IP address of eth0 is set to 0.0.0.0.

    ```
    # ifconfig eth0 0.0.0.0
    ```

5.  Set the IP address of br0.
    -   If a DHCP server is available, set a dynamic IP address through the dhclient.

        ```
        # dhclient br0
        ```

    -   If no DHCP server is available, configure a static IP address for br0. For example, set the static IP address to 192.168.1.2 and subnet mask to 255.255.255.0.

        ```
        # ifconfig br0 192.168.1.2 netmask 255.255.255.0
        ```



## Setting Up an Open vSwitch Bridge<a name="section331504144813"></a>

The Open vSwitch bridge provides more convenient automatic orchestration capabilities. This section describes how to install network virtualization components to set up an Open vSwitch bridge.

**1. Install the Open vSwitch component.**

If the Open vSwitch is used to provide virtual network, you need to install the Open vSwitch network virtualization component.

1.  Install the Open vSwitch component.

    ```
    # yum install -y openvswitch-kmod
    # yum install -y openvswitch
    ```

2.  Start the Open vSwitch service.

    ```
    # systemctl start openvswitch
    ```


**2. Check whether the installation is successful.**

Check whether the Open vSwitch components, openvswitch-kmod and openvswitch, are successfully installed.

1.  Check whether the openvswitch-kmod component is successfully installed. If the installation is successful, the software package information is displayed. The command and output are as follows:

    ```
    # rpm -qi openvswitch-kmod
    Name        : openvswitch-kmod
    Version     : 2.11.1
    Release     : 1.oe3
    Architecture: aarch64
    Install Date: Thu 15 Aug 2019 05:07:49 PM CST
    Group       : System Environment/Daemons
    Size        : 15766774
    License     : GPLv2
    Signature   : (none)
    Source RPM  : openvswitch-kmod-2.11.1-1.oe3.src.rpm
    Build Date  : Thu 08 Aug 2019 04:33:08 PM CST
    Build Host  : armbuild10b175b113b44
    Relocations : (not relocatable)
    Vendor      : OpenSource Security Ralf Spenneberg <ralf@os-s.net>
    URL         : http://www.openvswitch.org/
    Summary     : Open vSwitch Kernel Modules
    Description :
    Open vSwitch provides standard network bridging functions augmented with
    support for the OpenFlow protocol for remote per-flow control of
    traffic. This package contains the kernel modules.
    ```

2.  Check whether the openvswitch component is successfully installed. If the installation is successful, the software package information is displayed. The command and output are as follows:

    ```
    # rpm -qi openvswitch
    Name        : openvswitch
    Version     : 2.11.1
    Release     : 1
    Architecture: aarch64
    Install Date: Thu 15 Aug 2019 05:08:35 PM CST
    Group       : System Environment/Daemons
    Size        : 6051185
    License     : ASL 2.0
    Signature   : (none)
    Source RPM  : openvswitch-2.11.1-1.src.rpm
    Build Date  : Thu 08 Aug 2019 05:24:46 PM CST
    Build Host  : armbuild10b247b121b105
    Relocations : (not relocatable)
    Vendor      : Nicira, Inc.
    URL         : http://www.openvswitch.org/
    Summary     : Open vSwitch daemon/database/utilities
    Description :
    Open vSwitch provides standard network bridging functions and
    support for the OpenFlow protocol for remote per-flow control of
    traffic.
    ```

3.  Check whether the Open vSwitch service is started successfully. If the service is in the  **Active**  state, the service is started successfully. You can use the command line tool provided by the Open vSwitch. The command and output are as follows:

    ```
    # systemctl status openvswitch
    ● openvswitch.service - LSB: Open vSwitch switch
       Loaded: loaded (/etc/rc.d/init.d/openvswitch; generated)
       Active: active (running) since Sat 2019-08-17 09:47:14 CST; 4min 39s ago
         Docs: man:systemd-sysv-generator(8)
      Process: 54554 ExecStart=/etc/rc.d/init.d/openvswitch start (code=exited, status=0/SUCCESS)
        Tasks: 4 (limit: 9830)
       Memory: 22.0M
       CGroup: /system.slice/openvswitch.service
               ├─54580 ovsdb-server: monitoring pid 54581 (healthy)
               ├─54581 ovsdb-server /etc/openvswitch/conf.db -vconsole:emer -vsyslog:err -vfile:info --remote=punix:/var/run/openvswitch/db.sock --private-key=db:Open_vSwitch,SSL,private_key --certificate>
               ├─54602 ovs-vswitchd: monitoring pid 54603 (healthy)
               └─54603 ovs-vswitchd unix:/var/run/openvswitch/db.sock -vconsole:emer -vsyslog:err -vfile:info --mlockall --no-chdir --log-file=/var/log/openvswitch/ovs-vswitchd.log --pidfile=/var/run/open>
    ```


**3. Set up an Open vSwitch bridge**

The following describes how to set up an Open vSwitch layer-1 bridge br0.

1.  Create the Open vSwitch bridge br0.

    ```
    # ovs-vsctl add-br br0
    ```

2.  Add the physical NIC eth0 to br0.

    ```
    # ovs-vsctl add-port br0 eth0
    ```

3.  After eth0 is connected to the bridge, the IP address of eth0 is set to 0.0.0.0.

    ```
    # ifconfig eth0 0.0.0.0
    ```

4.  Assign an IP address to OVS bridge br0.
    -   If a DHCP server is available, set a dynamic IP address through the dhclient.

        ```
        # dhclient br0
        ```

    -   If no DHCP server is available, configure a static IP address for br0, for example, 192.168.1.2.

        ```
        # ifconfig br0 192.168.1.2
        ```



