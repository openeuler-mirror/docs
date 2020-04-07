# SR-IOV Passthrough<a name="EN-US_TOPIC_0225484546"></a>

## Overview<a name="section167616916310"></a>

Single Root I/O Virtualization \(SR-IOV\) is a hardware-based virtualization solution. With the SR-IOV technology, a physical function \(PF\) can provide multiple virtual functions \(VFs\), and each VF can be directly assigned to a VM. This greatly improves hardware resource utilization and I/O performance of VMs. A typical application scenario is SR-IOV passthrough for NICs. With the SR-IOV technology, a physical NIC \(PF\) can function as multiple VF NICs, and then the VFs can be directly assigned to VMs.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   SR-IOV requires the support of physical hardware. Before using SR-IOV, ensure that the hardware device to be directly assigned supports SR-IOV and the device driver on the host OS works in SR-IOV mode.  
>-   The following describes how to query the NIC model:  
>In the following command output, values in the first column indicate the PCI numbers of NICs, and  **19e5:1822**  indicates the vendor ID and device ID of the NIC.  
>```  
># lspci | grep Ether  
>05:00.0 Ethernet controller: Device 19e5:1822 (rev 45)  
>07:00.0 Ethernet controller: Device 19e5:1822 (rev 45)  
>09:00.0 Ethernet controller: Device 19e5:1822 (rev 45)  
>0b:00.0 Ethernet controller: Device 19e5:1822 (rev 45)  
>81:00.0 Ethernet controller: Intel Corporation 82599ES 10-Gigabit SFI/SFP+ Network Connection (rev 01)  
>81:00.1 Ethernet controller: Intel Corporation 82599ES 10-Gigabit SFI/SFP+ Network Connection (rev 01)  
>```  

## Procedure<a name="section12309114195910"></a>

To configure SR-IOV passthrough for a NIC, perform the following steps:

1.  Enable the SR-IOV mode for the NIC.
    1.  Ensure that VF driver support provided by the NIC supplier exists on the guest OS. Otherwise, VFs in the guest OS cannot work properly.
    2.  Enable the SMMU/IOMMU support in the BIOS of the host OS. The enabling method varies depending on the servers of different vendors. For details, see the help documents of the servers.
    3.  Configure the host driver to enable the SR-IOV VF mode. The following uses the Hi1822 NIC as an example to describe how to enable 16 VFs.

        ```
        echo 16 > /sys/class/net/ethX/device/sriov_numvfs
        ```

2.  Obtain the PCI BDF information of PFs and VFs.
    1.  Run the following command to obtain the NIC resource list on the current board:

        ```
        # lspci | grep Eth
        03:00.0 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family (4*25GE) (rev 45)
        04:00.0 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family (4*25GE) (rev 45)
        05:00.0 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family (4*25GE) (rev 45)
        06:00.0 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family (4*25GE) (rev 45)
        7d:00.0 Ethernet controller: Huawei Technologies Co., Ltd. Device a222 (rev 20)
        7d:00.1 Ethernet controller: Huawei Technologies Co., Ltd. Device a222 (rev 20)
        7d:00.2 Ethernet controller: Huawei Technologies Co., Ltd. Device a221 (rev 20)
        7d:00.3 Ethernet controller: Huawei Technologies Co., Ltd. Device a221 (rev 20)
        ```

    2.  Run the following command to view the PCI BDF information of VFs:

        ```
        # lspci | grep "Virtual Function"
        03:00.1 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
        03:00.2 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
        03:00.3 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
        03:00.4 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
        03:00.5 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
        03:00.6 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
        03:00.7 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
        03:01.0 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
        03:01.1 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
        03:01.2 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
        ```

    3.  Select an available VF and write its configuration to the VM configuration file based on its BDF information. For example, the bus ID of the device  **03:00.1**  is  **03**, its slot ID is  **00**, and its function ID is  **1**.

3.  Identify and manage the mapping between PFs and VFs.
    1.  Identify VFs corresponding to a PF. The following uses PF 03.00.0 as an example:

        ```
        # ls -l /sys/bus/pci/devices/0000\:03\:00.0/
        ```

        The following symbolic link information is displayed. You can obtain the VF IDs \(virtfnX\) and PCI BDF IDs based on the information.

    2.  Identify the PF corresponding to a VF. The following uses VF 03:00.1 as an example:

        ```
        # ls -l /sys/bus/pci/devices/0000\:03\:00.1/
        ```

        The following symbolic link information is displayed. You can obtain PCI BDF IDs of the PF based on the information.

        ```
        lrwxrwxrwx 1 root root       0 Mar 28 22:44 physfn -> ../0000:03:00.0
        ```

    3.  Obtain names of NICs corresponding to the PFs or VFs. For example:

        ```
        # ls /sys/bus/pci/devices/0000:03:00.0/net
        eth0
        ```

    4.  Set the MAC address, VLAN, and QoS information of VFs to ensure that the VFs are in the  **Up**  state before passthrough. The following uses VF 03:00.1 as an example. The PF is eth0 and the VF ID is  **0**.

        ```
        # ip link set eth0 vf 0 mac 90:E2:BA:21:XX:XX    #Sets the MAC address.
        # ifconfig eth0 up
        # ip link set eth0 vf 0 rate 100                 #Sets the VF outbound rate, in Mbit/s.
        # ip link show eth0                              #Views the MAC address, VLAN ID, and QoS information to check whether the configuration is successful.
        ```

4.  Mount the SR-IOV NIC to the VM.

    When creating a VM, add the SR-IOV passthrough configuration item to the VM configuration file.

    ```
    <interface type='hostdev' managed='yes'> 
        <mac address='fa:16:3e:0a:xx:xx'/>
        <source> 
            <address type='pci' domain='0x0000' bus='0x06' slot='0x11' function='0x6'/>
        </source> 
        <vlan>
            <tag id='1'/>
        </vlan>
    </interface>
    ```

    **Table  1**  SR-IOV configuration options

    <a name="table576925116567"></a>
    <table><thead align="left"><tr id="row877075112560"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1877045125616"><a name="p1877045125616"></a><a name="p1877045125616"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p9770185145613"><a name="p9770185145613"></a><a name="p9770185145613"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p177075115613"><a name="p177075115613"></a><a name="p177075115613"></a>Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1777010512568"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p477015111561"><a name="p477015111561"></a><a name="p477015111561"></a>hostdev.managed</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p137715514569"><a name="p137715514569"></a><a name="p137715514569"></a>Two modes for libvirt to process PCI devices.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4700154714613"><a name="p4700154714613"></a><a name="p4700154714613"></a><strong id="b11241112235417"><a name="b11241112235417"></a><a name="b11241112235417"></a>no</strong>: default value. The passthrough device is managed by the user.</p>
    <p id="p1475810591229"><a name="p1475810591229"></a><a name="p1475810591229"></a><strong id="b17808933105518"><a name="b17808933105518"></a><a name="b17808933105518"></a>yes</strong>: The passthrough device is managed by libvirt. Set this parameter to <strong id="b7799131015568"><a name="b7799131015568"></a><a name="b7799131015568"></a>yes</strong> in the SR-IOV passthrough scenario.</p>
    </td>
    </tr>
    <tr id="row37711751195619"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p677145110569"><a name="p677145110569"></a><a name="p677145110569"></a>hostdev.source.address.bus</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p777135145611"><a name="p777135145611"></a><a name="p777135145611"></a>Bus ID of the PCI device on the host OS.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p117712512560"><a name="p117712512560"></a><a name="p117712512560"></a>≥ 1</p>
    </td>
    </tr>
    <tr id="row1577115113567"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p187711451175612"><a name="p187711451175612"></a><a name="p187711451175612"></a>hostdev.source.address.slot</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18771135119563"><a name="p18771135119563"></a><a name="p18771135119563"></a>Device ID of the PCI device on the host OS.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1277125114561"><a name="p1277125114561"></a><a name="p1277125114561"></a>≥ 0</p>
    </td>
    </tr>
    <tr id="row127711651205613"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10771135155616"><a name="p10771135155616"></a><a name="p10771135155616"></a>hostdev.source.address.function</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1777185195618"><a name="p1777185195618"></a><a name="p1777185195618"></a>Function ID of the PCI device on the host OS.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10771195118568"><a name="p10771195118568"></a><a name="p10771195118568"></a>≥ 0</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >Disabling the SR-IOV function:  
    >To disable the SR-IOV function after the VM is stopped and no VF is in use, run the following command:  
    >The following uses the Hi1822 NIC \(corresponding network interface name: eth0\) as an example:  
    >```  
    >echo 0 > /sys/class/net/eth0/device/sriov_numvfs  
    >```  


