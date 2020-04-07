# PCI Passthrough<a name="EN-US_TOPIC_0225484545"></a>

PCI passthrough directly assigns a physical PCI device on the host to a VM. The VM can directly access the device. PCI passthrough uses the VFIO device passthrough mode. The PCI passthrough configuration file in XML format for a VM is as follows:

```
<hostdev mode='subsystem' type='pci' managed='yes'>   
    <driver name='vfio'/> 
    <source>
        <address domain='0x0000' bus='0x04' slot='0x10' function='0x01'/>
    </source>
    <rom bar='off'/>
    <address type='pci' domain='0x0000' bus='0x00' slot='0x03' function='0x0'/>
</hostdev>
```

**Table  1**  Device configuration items for PCI passthrough

<a name="table956811517377"></a>
<table><thead align="left"><tr id="row185697150377"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p13570115123719"><a name="p13570115123719"></a><a name="p13570115123719"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p1570015153716"><a name="p1570015153716"></a><a name="p1570015153716"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p3570115123711"><a name="p3570115123711"></a><a name="p3570115123711"></a>Value</p>
</th>
</tr>
</thead>
<tbody><tr id="row857017157375"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16570191513372"><a name="p16570191513372"></a><a name="p16570191513372"></a>hostdev.source.address.domain</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p05702152379"><a name="p05702152379"></a><a name="p05702152379"></a>Domain ID of the PCI device on the host OS.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p257051583710"><a name="p257051583710"></a><a name="p257051583710"></a>≥ 0</p>
</td>
</tr>
<tr id="row4570171513716"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p124981022478"><a name="p124981022478"></a><a name="p124981022478"></a>hostdev.source.address.bus</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1570101593717"><a name="p1570101593717"></a><a name="p1570101593717"></a>Bus ID of the PCI device on the host OS.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10570161513717"><a name="p10570161513717"></a><a name="p10570161513717"></a>≥ 1</p>
</td>
</tr>
<tr id="row9570141518379"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p155701615203718"><a name="p155701615203718"></a><a name="p155701615203718"></a>hostdev.source.address.slot</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p55701515193714"><a name="p55701515193714"></a><a name="p55701515193714"></a>Device ID of the PCI device on the host OS.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p75701315123715"><a name="p75701315123715"></a><a name="p75701315123715"></a>≥ 0</p>
</td>
</tr>
<tr id="row10570171593713"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p21023329490"><a name="p21023329490"></a><a name="p21023329490"></a>hostdev.source.address.function</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1657061593715"><a name="p1657061593715"></a><a name="p1657061593715"></a>Function ID of the PCI device on the host OS.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p85707159374"><a name="p85707159374"></a><a name="p85707159374"></a>≥ 0</p>
</td>
</tr>
<tr id="row125708153375"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p119491912175015"><a name="p119491912175015"></a><a name="p119491912175015"></a>hostdev.driver.name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p157091543710"><a name="p157091543710"></a><a name="p157091543710"></a>Backend driver of PCI passthrough. This parameter is optional.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p105701015103719"><a name="p105701015103719"></a><a name="p105701015103719"></a><strong id="b786191616436"><a name="b786191616436"></a><a name="b786191616436"></a>vfio</strong> (default value)</p>
</td>
</tr>
<tr id="row145701015173717"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p195701715123711"><a name="p195701715123711"></a><a name="p195701715123711"></a>hostdev.rom</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1057010157379"><a name="p1057010157379"></a><a name="p1057010157379"></a>Specifies whether the VM can access the ROM of the passthrough device.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p55705153378"><a name="p55705153378"></a><a name="p55705153378"></a>This parameter can be set to <strong id="b19245193774513"><a name="b19245193774513"></a><a name="b19245193774513"></a>on</strong> or <strong id="b1264443974517"><a name="b1264443974517"></a><a name="b1264443974517"></a>off</strong>. The default value is <strong id="b5402171644411"><a name="b5402171644411"></a><a name="b5402171644411"></a>on</strong>.</p>
<a name="ul1937231571"></a><a name="ul1937231571"></a><ul id="ul1937231571"><li><strong id="b345358194616"><a name="b345358194616"></a><a name="b345358194616"></a>on</strong>: indicates that the VM can access the ROM of the passthrough device. For example, if a VM with a passthrough NIC needs to boot from the preboot execution environment (PXE), or a VM with a passthrough Host Bus Adapter (HBA) card needs to boot from the ROM, you can set this parameter to <strong id="b878213613481"><a name="b878213613481"></a><a name="b878213613481"></a>on</strong>.</li><li><strong id="b97161513154618"><a name="b97161513154618"></a><a name="b97161513154618"></a>off</strong>: indicates that the VM cannot access the ROM of the passthrough device.</li></ul>
</td>
</tr>
<tr id="row20570201563712"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1057013151371"><a name="p1057013151371"></a><a name="p1057013151371"></a>hostdev.address type</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6570201510374"><a name="p6570201510374"></a><a name="p6570201510374"></a>Bus, Device, and Function (BDF) IDs on the guest OS displayed on the PCI device.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1257011153370"><a name="p1257011153370"></a><a name="p1257011153370"></a>[0x03–0x1e] (range of slot ID)</p>
<p id="p878711532216"><a name="p878711532216"></a><a name="p878711532216"></a>Note:</p>
<a name="ul8885104953013"></a><a name="ul8885104953013"></a><ul id="ul8885104953013"><li><strong id="b134861629498"><a name="b134861629498"></a><a name="b134861629498"></a>domain</strong> indicates the domain information, <strong id="b1426413644914"><a name="b1426413644914"></a><a name="b1426413644914"></a>bus</strong> indicates the bus ID, <strong id="b1924131155210"><a name="b1924131155210"></a><a name="b1924131155210"></a>slot</strong> indicates the slot ID, and <strong id="b11341741135315"><a name="b11341741135315"></a><a name="b11341741135315"></a>function</strong> indicates the function.</li><li>Except for <strong id="b1037113613554"><a name="b1037113613554"></a><a name="b1037113613554"></a>slot</strong>, default values of these parameters are <strong id="b131425655411"><a name="b131425655411"></a><a name="b131425655411"></a>0</strong>.</li><li>The first slot <strong id="b17504125910578"><a name="b17504125910578"></a><a name="b17504125910578"></a>0x00</strong> is occupied by the system, the second slot <strong id="b551216212589"><a name="b551216212589"></a><a name="b551216212589"></a>0x01</strong> is occupied by the IDE controller and USB controller, and the third slot <strong id="b18706152316582"><a name="b18706152316582"></a><a name="b18706152316582"></a>0x02</strong> is occupied by the video.</li><li>The last slot <strong id="b128813261506"><a name="b128813261506"></a><a name="b128813261506"></a>0x1f</strong> is occupied by the PV channel.</li></ul>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>VFIO passthrough is implemented by IOMMU group. Devices are divided to IOMMU groups based on access control services \(ACS\) on hardware. Devices in the same IOMMU group can be assigned to only one VM. If multiple functions on a PCI device belong to the same IOMMU group, they can be directly assigned to only one VM as well.  

