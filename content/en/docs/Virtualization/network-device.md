# Network Device<a name="EN-US_TOPIC_0187080003"></a>

## Overview<a name="section13270735192815"></a>

The XML configuration file can be used to configure virtual network devices, including the ethernet mode, bridge mode, and vhostuser mode. This section describes how to configure vNICs.

## Elements<a name="section4469547122811"></a>

In the XML configuration file, the element  **interface**  is used, and its attribute  **type**  indicates the mode of the vNIC. The options are  **ethernet**,  **bridge**, and  **vhostuser**. The following uses the vNIC in bridge mode as an example to describe its subelements and attributes.

**Table  1**  Common subelements of a vNIC in bridge mode

<a name="table4866134925114"></a>
<table><thead align="left"><tr id="row5867349175120"><th class="cellrowborder" valign="top" width="13.3%" id="mcps1.2.4.1.1"><p id="p1532019194524"><a name="p1532019194524"></a><a name="p1532019194524"></a>Subelement</p>
</th>
<th class="cellrowborder" valign="top" width="21.42%" id="mcps1.2.4.1.2"><p id="p44946337529"><a name="p44946337529"></a><a name="p44946337529"></a>Subelement Description</p>
</th>
<th class="cellrowborder" valign="top" width="65.28%" id="mcps1.2.4.1.3"><p id="p19867184935114"><a name="p19867184935114"></a><a name="p19867184935114"></a>Attribute and Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row186719494512"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p1389163520221"><a name="p1389163520221"></a><a name="p1389163520221"></a>mac</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p466752217444"><a name="p466752217444"></a><a name="p466752217444"></a>The mac address of the vNIC.</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p5608740181019"><a name="p5608740181019"></a><a name="p5608740181019"></a><strong id="b14802133216224"><a name="b14802133216224"></a><a name="b14802133216224"></a>address</strong>: specifies the mac address. If this parameter is not set, the system automatically generates a mac address.</p>
</td>
</tr>
<tr id="row08679492515"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p188671349195119"><a name="p188671349195119"></a><a name="p188671349195119"></a>target</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p144948333527"><a name="p144948333527"></a><a name="p144948333527"></a>Name of the backend vNIC.</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p158671649195117"><a name="p158671649195117"></a><a name="p158671649195117"></a><strong id="b1169884111231"><a name="b1169884111231"></a><a name="b1169884111231"></a>dev</strong>: name of the created backend tap device.</p>
</td>
</tr>
<tr id="row11249184413266"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p14250184410269"><a name="p14250184410269"></a><a name="p14250184410269"></a>source</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p925004411264"><a name="p925004411264"></a><a name="p925004411264"></a>Specify the backend of the vNIC.</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p225044417263"><a name="p225044417263"></a><a name="p225044417263"></a><strong id="b95441444202414"><a name="b95441444202414"></a><a name="b95441444202414"></a>bridge</strong>: used together with the bridge mode. The value is the <strong id="b36002982519"><a name="b36002982519"></a><a name="b36002982519"></a>bridge name</strong>.</p>
</td>
</tr>
<tr id="row386764955116"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p19867049125114"><a name="p19867049125114"></a><a name="p19867049125114"></a>boot</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p2313201420517"><a name="p2313201420517"></a><a name="p2313201420517"></a>The NIC can be used for remote startup.</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p11867149165120"><a name="p11867149165120"></a><a name="p11867149165120"></a><strong id="b113691627102512"><a name="b113691627102512"></a><a name="b113691627102512"></a>order</strong>: specifies the startup sequence of NICs.</p>
</td>
</tr>
<tr id="row18868164965114"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p486814495519"><a name="p486814495519"></a><a name="p486814495519"></a>model</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p184942033175213"><a name="p184942033175213"></a><a name="p184942033175213"></a>Indicates the type of a vNIC.</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p98681249135119"><a name="p98681249135119"></a><a name="p98681249135119"></a><strong id="b1182616408255"><a name="b1182616408255"></a><a name="b1182616408255"></a>type</strong>: <strong id="b14483540182616"><a name="b14483540182616"></a><a name="b14483540182616"></a>virtio</strong> is usually used for the NIC in bridge mode.</p>
</td>
</tr>
<tr id="row5709165573315"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p2071025553313"><a name="p2071025553313"></a><a name="p2071025553313"></a>virtualport</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p2710855113315"><a name="p2710855113315"></a><a name="p2710855113315"></a>Port type</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p271095513338"><a name="p271095513338"></a><a name="p271095513338"></a><strong id="b44356412718"><a name="b44356412718"></a><a name="b44356412718"></a>type</strong>: If an OVS bridge is used, set this parameter to <strong id="b1395701202718"><a name="b1395701202718"></a><a name="b1395701202718"></a>openvswitch</strong>.</p>
</td>
</tr>
<tr id="row990801184116"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p18909310415"><a name="p18909310415"></a><a name="p18909310415"></a>driver</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p090918115413"><a name="p090918115413"></a><a name="p090918115413"></a>Backend driver type</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p1090918194112"><a name="p1090918194112"></a><a name="p1090918194112"></a><strong id="b826415388276"><a name="b826415388276"></a><a name="b826415388276"></a>name</strong>: driver name. The value is <strong id="b11841751182718"><a name="b11841751182718"></a><a name="b11841751182718"></a>vhost</strong>.</p>
<p id="p84340111436"><a name="p84340111436"></a><a name="p84340111436"></a><strong id="b19135262810"><a name="b19135262810"></a><a name="b19135262810"></a>queues</strong>: the number of NIC queues.</p>
</td>
</tr>
</tbody>
</table>

## Configuration Example<a name="section134505113530"></a>

-   After creating the Linux bridge br0 by referring to  [Preparing the VM Network](preparing-the-vm-network.md), configure a vNIC of the VirtIO type bridged on the br0 bridge. The corresponding XML configuration is as follows:

    ```
    <domain type='kvm'>
        ...
        <devices>
            <interface type='bridge'>
    	    <source bridge='br0'/>
                <model type='virtio'/>
    	</interface>
            ...
        </devices>
    </domain>
    ```

-   If an OVS network bridge is created according to  [Preparing the VM Network](preparing-the-vm-network.md), configure a VirtIO vNIC device that uses the vhost driver and has four queues.

    ```
    <domain type='kvm'>
        ...
        <devices>
            <interface type='bridge'>
    	    <source bridge='br0'/>
                <virtualport type='openvswitch'/> 
                <model type='virtio'/>
                <driver name='vhost' queues='4'/> 
    	</interface>
            ...
        </devices>
    </domain>
    ```


