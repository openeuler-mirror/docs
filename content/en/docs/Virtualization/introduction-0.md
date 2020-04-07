# Introduction<a name="EN-US_TOPIC_0183154311"></a>

## Overview<a name="section1126911934317"></a>

To leverage hardware resources and reduce costs, users need to properly manage VMs. This section describes basic operations during the VM lifecycle, such as creating, using, and deleting VMs.

## VM Status<a name="section89959504520"></a>

A VM can be in one of the following status:

-   **undefined**: The VM is not defined or created. That is, libvirt considers that the VM does not exist.
-   **shut off**: The VM has been defined but is not running, or the VM is terminated.
-   **running**: The VM is running.
-   **paused**: The VM is suspended and its running status is temporarily stored in the memory. The VM can be restored to the running status.
-   **saved**: Similar to the  **paused**  status, the running state is stored in a persistent storage medium and can be restored to the running status.
-   **crashed**: The VM crashes due to an internal error and cannot be restored to the running status.

## Status Transition<a name="section157801951173112"></a>

VMs in different status can be converted, but certain rules must be met.  [Figure 1](#fig671014583483)  describes the common rules for transiting the VM status.

**Figure  1**  Status transition diagram<a name="fig671014583483"></a>  
![](figures/status-transition-diagram.png "status-transition-diagram")

## VM ID<a name="section419610275378"></a>

In libvirt, a created VM instance is called a  **domain**, which describes the configuration information of resources such as the CPU, memory, network device, and storage device of the VM. On a host, each domain has a unique ID, which is represented by the VM  **Name**,  **UUID**, and  **Id**. For details, see  [Table 1](#table84397266483). During the VM lifecycle, an operation can be performed on a specific VM by using a VM ID.

**Table  1**  Domain ID description

<a name="table84397266483"></a>
<table><thead align="left"><tr id="row194391726114819"><th class="cellrowborder" valign="top" width="24.57%" id="mcps1.2.3.1.1"><p id="p1417373404815"><a name="p1417373404815"></a><a name="p1417373404815"></a>ID</p>
</th>
<th class="cellrowborder" valign="top" width="75.42999999999999%" id="mcps1.2.3.1.2"><p id="p12173123414810"><a name="p12173123414810"></a><a name="p12173123414810"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row143972684815"><td class="cellrowborder" valign="top" width="24.57%" headers="mcps1.2.3.1.1 "><p id="p1173534124817"><a name="p1173534124817"></a><a name="p1173534124817"></a>Name</p>
</td>
<td class="cellrowborder" valign="top" width="75.42999999999999%" headers="mcps1.2.3.1.2 "><p id="p16173193464815"><a name="p16173193464815"></a><a name="p16173193464815"></a>VM name</p>
</td>
</tr>
<tr id="row1644092654815"><td class="cellrowborder" valign="top" width="24.57%" headers="mcps1.2.3.1.1 "><p id="p917353411487"><a name="p917353411487"></a><a name="p917353411487"></a>UUID</p>
</td>
<td class="cellrowborder" valign="top" width="75.42999999999999%" headers="mcps1.2.3.1.2 "><p id="p19173734104819"><a name="p19173734104819"></a><a name="p19173734104819"></a>Universally unique identifier</p>
</td>
</tr>
<tr id="row12440626154811"><td class="cellrowborder" valign="top" width="24.57%" headers="mcps1.2.3.1.1 "><p id="p16174193404818"><a name="p16174193404818"></a><a name="p16174193404818"></a>Id</p>
</td>
<td class="cellrowborder" valign="top" width="75.42999999999999%" headers="mcps1.2.3.1.2 "><p id="p14174193464817"><a name="p14174193464817"></a><a name="p14174193464817"></a>VM running ID</p>
<div class="note" id="note117420341481"><a name="note117420341481"></a><a name="note117420341481"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p817413414484"><a name="p817413414484"></a><a name="p817413414484"></a>The ID is not displayed for a powered off VM.</p>
</div></div>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Run the  **virsh**  command to query the VM ID and UUID. For details, see  [Querying VM Information](querying-vm-information.md).  

