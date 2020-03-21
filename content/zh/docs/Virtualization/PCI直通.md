# PCI直通<a name="ZH-CN_TOPIC_0225484545"></a>

PCI直通是指将host上的物理PCI设备直接呈现给一台虚拟机，供虚拟机直接访问的一种使用方式。PCI直通使用了vfio设备直通方式，为虚拟机配置PCI直通的xml配置如下：

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

**表 1**  PCI直通设备配置项

<a name="table956811517377"></a>
<table><thead align="left"><tr id="row185697150377"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p13570115123719"><a name="p13570115123719"></a><a name="p13570115123719"></a>参数名</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p1570015153716"><a name="p1570015153716"></a><a name="p1570015153716"></a>说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p3570115123711"><a name="p3570115123711"></a><a name="p3570115123711"></a>取值</p>
</th>
</tr>
</thead>
<tbody><tr id="row857017157375"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16570191513372"><a name="p16570191513372"></a><a name="p16570191513372"></a>hostdev.source.address.domain</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p05702152379"><a name="p05702152379"></a><a name="p05702152379"></a>host OS上的PCI设备的domain号。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p257051583710"><a name="p257051583710"></a><a name="p257051583710"></a>&gt;=0</p>
</td>
</tr>
<tr id="row4570171513716"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p124981022478"><a name="p124981022478"></a><a name="p124981022478"></a>hostdev.source.address.bus</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1570101593717"><a name="p1570101593717"></a><a name="p1570101593717"></a>host OS上的PCI设备bus号。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10570161513717"><a name="p10570161513717"></a><a name="p10570161513717"></a>&gt;=1</p>
</td>
</tr>
<tr id="row9570141518379"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p155701615203718"><a name="p155701615203718"></a><a name="p155701615203718"></a>hostdev.source.address.slot</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p55701515193714"><a name="p55701515193714"></a><a name="p55701515193714"></a>host OS上的PCI设备的device号。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p75701315123715"><a name="p75701315123715"></a><a name="p75701315123715"></a>&gt;=0</p>
</td>
</tr>
<tr id="row10570171593713"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p21023329490"><a name="p21023329490"></a><a name="p21023329490"></a>hostdev.source.address.function</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1657061593715"><a name="p1657061593715"></a><a name="p1657061593715"></a>host OS上的PCI设备的function号。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p85707159374"><a name="p85707159374"></a><a name="p85707159374"></a>&gt;=0</p>
</td>
</tr>
<tr id="row125708153375"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p119491912175015"><a name="p119491912175015"></a><a name="p119491912175015"></a>hostdev.driver.name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p157091543710"><a name="p157091543710"></a><a name="p157091543710"></a>可选配置项，指定PCI直通的后端驱动。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p105701015103719"><a name="p105701015103719"></a><a name="p105701015103719"></a>vfio（默认配置项）</p>
</td>
</tr>
<tr id="row145701015173717"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p195701715123711"><a name="p195701715123711"></a><a name="p195701715123711"></a>hostdev.rom</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1057010157379"><a name="p1057010157379"></a><a name="p1057010157379"></a>直通设备的ROM是否呈现给虚拟机。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p55705153378"><a name="p55705153378"></a><a name="p55705153378"></a>可以配置为“on/off”，默认为“on”。</p>
<a name="ul1937231571"></a><a name="ul1937231571"></a><ul id="ul1937231571"><li>on：表示直通设备的ROM呈现给虚拟机，例如：直通网卡虚拟机需要从该网卡的PXE启动时，可以将该选项配置为“on”，HBA卡直通虚拟机需要从ROM中启动时可以将该选项配置为“on”。</li><li>off：表示直通设备的ROM不呈现给虚拟机。</li></ul>
</td>
</tr>
<tr id="row20570201563712"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1057013151371"><a name="p1057013151371"></a><a name="p1057013151371"></a>hostdev.address type</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6570201510374"><a name="p6570201510374"></a><a name="p6570201510374"></a>PCI设备呈现的Guest内bdf号。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1257011153370"><a name="p1257011153370"></a><a name="p1257011153370"></a>[0x03-0x1e](slot范围)</p>
<p id="p878711532216"><a name="p878711532216"></a><a name="p878711532216"></a>说明：</p>
<a name="ul8885104953013"></a><a name="ul8885104953013"></a><ul id="ul8885104953013"><li>domain为域信息，bus为总线号，slot为插槽号，function为功能</li><li>除了slot插槽号，这里其余均默认为0。</li><li>第一个slot插槽号0x00被系统占用，第二个slot号0x01被IDE控制器和USB控制器占用，第三个slot号0x02被video占用。</li><li>最后一个slot号0x1f被pvchannel占用。</li></ul>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **说明：**   
>VFIO直通方式的最小直通单位是iommu\_group，host根据硬件上的ACS位，来划分iommu\_group。同一个iommu\_group中的设备只允许直通给同一台虚拟机（一个PCI设备上的若干个function，如果属于同一个iommu\_group，只允许直通给一个虚拟机使用）。  

