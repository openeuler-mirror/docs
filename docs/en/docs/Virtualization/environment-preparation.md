# Environment Preparation

- [Environment Preparation](#environment-preparation)
    - [Preparing a VM Image](#preparing-a-vm-image)
    - [Preparing the VM Network](#preparing-the-vm-network)
    - [Preparing Boot Firmware](#preparing-boot-firmware)

## Preparing a VM Image

### Overview

A VM image is a file that contains a virtual disk that has been installed and can be used to start the OS. VM images are in different formats, such as raw and qcow2. Compared with the raw format, the qcow2 format occupies less space and supports features such as snapshot, copy-on-write, AES encryption, and zlib compression. However, the performance of the qcow2 format is slightly lower than that of the raw format. The qemu-img tool is used to create image files. This section uses the qcow2 image file as an example to describe how to create a VM image.

### Creating an Image

To create a qcow2 image file, perform the following steps:

1.  Install the  **qemu-img**  software package.

    ```
    # yum install -y qemu-img
    ```

2.  Run the  **create**  command of the qemu-img tool to create an image file. The command format is as follows:

    ```
    $ qemu-img create -f <imgFormat> -o <fileOption> <fileName> <diskSize>
    ```

    The parameters are described as follows:

    -   _imgFormat_: Image format. The value can be  **raw**  or  **qcow2**.
    -   _fileOption_: File option, which is used to set features of an image file, such as specifying a backend image file, compression, and encryption.
    -   _fileName_: File name.
    -   _diskSize_: Disk size, which specifies the size of a block disk. The unit can be K, M, G, or T, indicating KiB, MiB, GiB, or TiB.

    For example, to create an image file openEuler-imge.qcow2 whose disk size is 4 GB and format is qcow2, the command and output are as follows:

    ```
    $ qemu-img create -f qcow2 openEuler-image.qcow2 4G
    Formatting 'openEuler-image.qcow2', fmt=qcow2 size=4294967296 cluster_size=65536 lazy_refcounts=off refcount_bits=16
    ```


### Changing the Image Disk Space

If a VM requires larger disk space, you can use the qemu-img tool to change the disk space of the VM image. The method is as follows:

1.  Run the following command to query the disk space of the VM image:

    ```
    # qemu-img info <imgFiLeName>
    ```

    For example, if the command and output for querying the disk space of the openEuler-image.qcow2 image are as follows, the disk space of the image is 4 GiB.

    ```
    # qemu-img info openEuler-image.qcow2 
    image: openEuler-image.qcow2
    file format: qcow2
    virtual size: 4.0G (4294967296 bytes)
    disk size: 196K
    cluster_size: 65536
    Format specific information:
        compat: 1.1
        lazy refcounts: false
        refcount bits: 16
        corrupt: false
    ```

2.  Run the following command to change the image disk space. In the command,  _imgFiLeName_  indicates the image name, and  **+**  and  **-**  indicate the image disk space to be increased and decreased, respectively. The unit is KB, MB, GB, and T, indicating KiB, MiB, GiB, and TiB, respectively.

    ```
    # qemu-img resize <imgFiLeName> [+|-]<size>
    ```

    For example, to expand the disk space of the openEuler-image.qcow2 image to 24 GiB, that is, to add 20 GiB to the original 4 GiB, the command and output are as follows:

    ```
    # qemu-img resize openEuler-image.qcow2 +20G
    Image resized.
    ```

3.  Run the following command to check whether the image disk space is changed successfully:

    ```
    # qemu-img info <imgFiLeName>
    ```

    For example, if the openEuler-image.qcow2 image disk space has been expanded to 24 GiB, the command and output are as follows:

    ```
    # qemu-img info openEuler-image.qcow2 
    image: openEuler-image.qcow2
    file format: qcow2
    virtual size: 24G (25769803776 bytes)
    disk size: 200K
    cluster_size: 65536
    Format specific information:
        compat: 1.1
        lazy refcounts: false
        refcount bits: 16
        corrupt: false
    ```



## Preparing the VM Network

### Overview

To enable the VM to communicate with external networks, you need to configure the network environment for the VM. KVM virtualization supports multiple types of bridges, such as Linux bridge and Open vSwitch bridge. As shown in  [Figure 1](#fig1785384714917), the data transmission path is  **VM \> virtual NIC device \> Linux bridge or Open vSwitch bridge \> physical NIC**. In addition to configuring virtual NICs \(vNICs\) for VMs, creating a bridge for a host is the key to connecting to a virtualized network.

This section describes how to set up a Linux bridge and an Open vSwitch bridge to connect a VM to the network. You can select a bridge type based on the site requirements.

**Figure  1**  Virtual network structure<a name="fig1785384714917"></a>  
![](./figures/virtual-network-structure.png "virtual-network-structure")

### Setting Up a Linux Bridge

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



### Setting Up an Open vSwitch Bridge

The Open vSwitch bridge provides more convenient automatic orchestration capabilities. This section describes how to install network virtualization components to set up an Open vSwitch bridge.

**1. Install the Open vSwitch component.**

If the Open vSwitch is used to provide virtual network, you need to install the Open vSwitch network virtualization component.

1.  Disable the SELinux.Otherwise ovsdb-server Manager can not work properly.
    ```
    # setenforce 0
    ```
    To query whether SELinux is shut down successfully, you can refer to the following commands and information.
    ```
    # cat /etc/selinux/config | grep -v ^#
    SELINUX=disabled
    SELINUXTYPE=targeted
    ```
2.  Install the Open vSwitch component.

    ```
    # yum install -y openvswitch
    ```

3.  Start the Open vSwitch service.

    ```
    # service openvswitch start
    ```

Note: The ovn-controller-vtep.service service should be operated by Non-root user
**2. Check whether the installation is successful.**

Check whether the Open vSwitch components, openvswitch is successfully installed.

1.  Check whether the openvswitch component is successfully installed. If the installation is successful, the software package information is displayed. The command and output are as follows:

    ```
    # rpm -qi openvswitch
    Name: openvswitch
    Version     : 2.12.0
    Release     : 11.oe1
    Architecture: aarch64
    Install Date: Tue 08 Jun 2021 04:54:31 PM CST
    Group: Unspecified
    Size: 7456390
    License     : ASL 2.0 and ISC
    Signature   : RSA/SHA1, Mon 07 Jun 2021 01:16:33 AM CST, Key ID d557065eb25e7f66
    Source RPM  : openvswitch-2.12.0-11.oe1.src.rpm
    Build Date  : Mon 07 Jun 2021 01:15:34 AM CST
    Build Host  : obs-worker-0011
    Packager    : http://openeuler.org
    Vendor      : http://openeuler.org
    URL: http://www.openvswitch.org/
    Summary     : Production Quality, Multilayer Open Virtual Switch
    Description :
    Open vSwitch is a production quality, multilayer virtual switch licensed under
    the open source Apache 2.0 license.
    ```

2.  Check whether the Open vSwitch service is started successfully. If the service is in the  **Active**  state, the service is started successfully. You can use the command line tool provided by the Open vSwitch. The command and output are as follows:

    ```
    # service openvswitch status
    Redirecting to /bin/systemctl status openvswitch.service
    ● openvswitch.service - Open vSwitch
       Loaded: loaded (/usr/lib/systemd/system/openvswitch.service; disabled; vendor preset: disabled)
       Active: active (exited) since Wed 2021-06-16 16:45:41 CST; 17h ago
      Process: 151652 ExecStart=/bin/true (code=exited, status=0/SUCCESS)
     Main PID: 151652 (code=exited, status=0/SUCCESS)
        Tasks: 0
       Memory: 0B
       CGroup: /system.slice/openvswitch.service

    Jun 16 16:45:41 openEuler systemd[1]: Starting Open vSwitch...
    Jun 16 16:45:41 openEuler systemd[1]: Started Open vSwitch.
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



## Preparing Boot Firmware

### Overview

The boot mode varies depending on the architecture. x86 servers support the Unified Extensible Firmware Interface \(UEFI\) and BIOS boot modes, and AArch64 servers support only the UEFI boot mode. By default, boot files corresponding to the BIOS mode have been installed on openEuler. No additional operations are required. This section describes how to install boot files corresponding to the UEFI mode.

The Unified Extensible Firmware Interface \(UEFI\) is a new interface standard used for power-on auto check and OS boot. It is an alternative to the traditional BIOS. EDK II is a set of open source code that implements the UEFI standard. In virtualization scenarios, the EDK II tool set is used to start a VM in UEFI mode. Before using the EDK II tool, you need to install the corresponding software package before starting a VM. This section describes how to install the EDK II tool.

### Installation Methods

If the UEFI mode is used, the tool set EDK II needs to be installed. The installation package for the AArch64 architecture is  **edk2-aarch64**, and that for the x86 architecture is  **edk2-ovmf**. This section uses the AArch64 architecture as an example to describe the installation method. For the x86 architecture, you only need to replace  **edk2-aarch64**  with  **edk2-ovmf**.

1.  Run the following command to install the  **edk**  software package:

    In the AArch64 architecture, the  **edk2**  package name is  **edk2-aarch64**.

    ```
    # yum install -y edk2-aarch64
    ```

    In the x86\_64 architecture, the  **edk2**  package name is  **edk2-ovmf**.

    ```
    # yum install -y edk2-ovmf
    ```

2.  Run the following command to check whether the  **edk**  software package is successfully installed:

    In the AArch64 architecture, the command is as follows:

    ```
    # rpm -qi edk2-aarch64
    ```

    If information similar to the following is displayed, the  **edk**  software package is successfully installed:

    ```
    Name        : edk2-aarch64
    Version     : 20180815gitcb5f4f45ce
    Release     : 1.oe3
    Architecture: noarch
    Install Date: Mon 22 Jul 2019 04:52:33 PM CST
    Group       : Applications/Emulators
    ```

    In the x86\_64 architecture, the command is as follows:

    ```
    # rpm -qi edk2-ovmf
    ```

    If information similar to the following is displayed, the  **edk**  software package is successfully installed:

    ```
    Name        : edk2-ovmf
    Version     : 201908
    Release     : 6.oe1
    Architecture: noarch
    Install Date: Thu 19 Mar 2020 09:09:06 AM CST
    ```
