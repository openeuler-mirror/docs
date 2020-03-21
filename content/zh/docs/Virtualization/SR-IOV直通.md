# SR-IOV直通<a name="ZH-CN_TOPIC_0225484546"></a>

## 概述<a name="section167616916310"></a>

SR-IOV（Single Root I/O Virtualizaiton）是一种基于硬件的虚拟化解决方案，通过SR-IOV技术可以将一个PF（Physical Function）虚拟成多个VF（Virtual Function），每个VF都可以单独被直通给一个虚拟机，极大地提升了硬件资源利用率和虚拟机的I/O性能。一种典型的应用场景就是网卡SR-IOV设备直通，利用SR-IOV技术可以将一个物理网卡（PF）虚拟成多个VF网卡，再把VF直通给虚拟机使用。

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   SR-IOV需要物理硬件支持，使用SR-IOV前请确保要直通的硬件设备支持该能力，并且Host侧的设备驱动程序工作在SR-IOV模式下。  
>-   查询网卡具体型号的办法如下：  
>例如下述回显，第一列为网卡的PCI号，19e5:1822为网卡的厂商号设备号。  
>```  
># lspci | grep Ether  
>05:00.0 Ethernet controller: Device 19e5:1822 (rev 45)  
>07:00.0 Ethernet controller: Device 19e5:1822 (rev 45)  
>09:00.0 Ethernet controller: Device 19e5:1822 (rev 45)  
>0b:00.0 Ethernet controller: Device 19e5:1822 (rev 45)  
>81:00.0 Ethernet controller: Intel Corporation 82599ES 10-Gigabit SFI/SFP+ Network Connection (rev 01)  
>81:00.1 Ethernet controller: Intel Corporation 82599ES 10-Gigabit SFI/SFP+ Network Connection (rev 01)  
>```  

## 操作方法<a name="section12309114195910"></a>

配置SR-IOV直通网卡的操作步骤如下：

1.  开启网卡的SR-IOV模式。
    1.  请确保Guest OS有网卡供应商提供的VF驱动支持，否则Guest OS内VF无法正常工作。
    2.  在host OS的BIOS中开启SMMU/IOMMU的支持。不同厂家服务器的开启方式可能不同，请参考各服务器的帮助文档。
    3.  HOST驱动配置，开启SR-IOV的VF模式。这里以Hi1822网卡为例，开启16个VF。

        ```
        echo 16 > /sys/class/net/ethX/device/sriov_numvfs
        ```

2.  获取PF和VF的PCI BDF信息。
    1.  获取当前单板上的网卡资源列表，参考命令如下：

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

    2.  查看VF的PCI BDF信息，参考命令如下：

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

    3.  选择一个可用的VF，根据其BDF信息将其配置写入虚拟机的配置文件中。以03:00.1设备为例，对应的bus号是03，slot号是00，function号是1。

3.  识别和管理PF/VF对应关系。
    1.  识别PF对应的VF关系，以PF 03.00.0为例：

        ```
        # ls -l /sys/bus/pci/devices/0000\:03\:00.0/
        ```

        可下显示如下的软链接信息，根据信息可以获得其对应的VF编号（virtfnX）和PCI BDF号。

    2.  识别VF对应的PF关系，以VF 03:00.1为例：

        ```
        # ls -l /sys/bus/pci/devices/0000\:03\:00.1/
        ```

        可显示下述软连接信息，即可获得其对应PF的PCI BDF号。

        ```
        lrwxrwxrwx 1 root root       0 Mar 28 22:44 physfn -> ../0000:03:00.0
        ```

    3.  获知PF/VF对应的网卡设备名称，例如：

        ```
        # ls /sys/bus/pci/devices/0000:03:00.0/net
        eth0
        ```

    4.  设置VF的mac/vlan/qos信息，确保VF在直通之前处于UP状态。以VF 03:00.1为例，假设PF为eth0，VF编号为0。

        ```
        # ip link set eth0 vf 0 mac 90:E2:BA:21:XX:XX    # 设置mac地址
        # ifconfig eth0 up
        # ip link set eth0 vf 0 rate 100                 # 设置VF出口速率，单位Mbps
        # ip link show eth0                              # 查看mac/vlan/qos信息，确认设置成功
        ```

4.  挂载SR-IOV网卡到虚拟机中。

    创建虚拟机时，在虚拟机配置文件中增加SR-IOV直通的配置项。

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

    **表 1**  SR-IOV配置选项说明

    <a name="table576925116567"></a>
    <table><thead align="left"><tr id="row877075112560"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1877045125616"><a name="p1877045125616"></a><a name="p1877045125616"></a>参数名</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p9770185145613"><a name="p9770185145613"></a><a name="p9770185145613"></a>说明</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p177075115613"><a name="p177075115613"></a><a name="p177075115613"></a>取值</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1777010512568"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p477015111561"><a name="p477015111561"></a><a name="p477015111561"></a>hostdev.managed</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p137715514569"><a name="p137715514569"></a><a name="p137715514569"></a>libvirt处理PCI设备的两种模式。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4700154714613"><a name="p4700154714613"></a><a name="p4700154714613"></a>no：默认配置，表示直通设备由用户自行管理。</p>
    <p id="p1475810591229"><a name="p1475810591229"></a><a name="p1475810591229"></a>yes：表示直通设备由libvirt管理。SR-IOV直通场景需要配置为yes。</p>
    </td>
    </tr>
    <tr id="row37711751195619"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p677145110569"><a name="p677145110569"></a><a name="p677145110569"></a>hostdev.source.address.bus</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p777135145611"><a name="p777135145611"></a><a name="p777135145611"></a>host OS上的PCI设备bus号。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p117712512560"><a name="p117712512560"></a><a name="p117712512560"></a>&gt;=1</p>
    </td>
    </tr>
    <tr id="row1577115113567"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p187711451175612"><a name="p187711451175612"></a><a name="p187711451175612"></a>hostdev.source.address.slot</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18771135119563"><a name="p18771135119563"></a><a name="p18771135119563"></a>host OS上的PCI设备device号。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1277125114561"><a name="p1277125114561"></a><a name="p1277125114561"></a>&gt;=0</p>
    </td>
    </tr>
    <tr id="row127711651205613"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10771135155616"><a name="p10771135155616"></a><a name="p10771135155616"></a>hostdev.source.address.function</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1777185195618"><a name="p1777185195618"></a><a name="p1777185195618"></a>host OS上的PCI设备function号。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10771195118568"><a name="p10771195118568"></a><a name="p10771195118568"></a>&gt;=0</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >关闭SR-IOV功能。  
    >在虚拟机使用完毕后（虚拟机关机，所有的VF均没有在使用中的时候），若要关闭SR-IOV功能。执行操作如下：  
    >这里以Hi1822网卡（eth0对应PF的网口名称）为例：  
    >```  
    >echo 0 > /sys/class/net/eth0/device/sriov_numvfs  
    >```  


