# Storage Devices<a name="EN-US_TOPIC_0184192751"></a>

## Overview<a name="section13270735192815"></a>

This section describes how to configure virtual storage devices, including floppy disks, disks, and CD-ROMs and their storage types.

## Elements<a name="section4469547122811"></a>

The XML configuration file uses the  **disk**  element to configure storage devices.  [Table 1](#table14200183410353)  describes common  **disk**  attributes.  [Table 2](#table4866134925114)  describes common subelements and their attributes.

**Table  1**  Common attributes of the  **disk**  element

<a name="table14200183410353"></a>
<table><thead align="left"><tr id="row720143463519"><th class="cellrowborder" valign="top" width="7.5200000000000005%" id="mcps1.2.5.1.1"><p id="p559231514916"><a name="p559231514916"></a><a name="p559231514916"></a>Element</p>
</th>
<th class="cellrowborder" valign="top" width="11.39%" id="mcps1.2.5.1.2"><p id="p92021634133518"><a name="p92021634133518"></a><a name="p92021634133518"></a>Attribute</p>
</th>
<th class="cellrowborder" valign="top" width="21.69%" id="mcps1.2.5.1.3"><p id="p42026341354"><a name="p42026341354"></a><a name="p42026341354"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="59.4%" id="mcps1.2.5.1.4"><p id="p12202193443516"><a name="p12202193443516"></a><a name="p12202193443516"></a>Attribute Value and Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1820215342359"><td class="cellrowborder" rowspan="2" valign="top" width="7.5200000000000005%" headers="mcps1.2.5.1.1 "><p id="p742912318910"><a name="p742912318910"></a><a name="p742912318910"></a>disk</p>
</td>
<td class="cellrowborder" valign="top" width="11.39%" headers="mcps1.2.5.1.2 "><p id="p3202103453512"><a name="p3202103453512"></a><a name="p3202103453512"></a><strong id="b4261847145610"><a name="b4261847145610"></a><a name="b4261847145610"></a>type</strong></p>
</td>
<td class="cellrowborder" valign="top" width="21.69%" headers="mcps1.2.5.1.3 "><p id="p1920223493510"><a name="p1920223493510"></a><a name="p1920223493510"></a>Specifies the type of the backend storage medium.</p>
</td>
<td class="cellrowborder" valign="top" width="59.4%" headers="mcps1.2.5.1.4 "><p id="p1437102115361"><a name="p1437102115361"></a><a name="p1437102115361"></a><strong id="b1778815133515"><a name="b1778815133515"></a><a name="b1778815133515"></a>block</strong>: block device</p>
<p id="p8202113415351"><a name="p8202113415351"></a><a name="p8202113415351"></a><strong id="b1042731320358"><a name="b1042731320358"></a><a name="b1042731320358"></a>file</strong>: file device</p>
<p id="p13953102263316"><a name="p13953102263316"></a><a name="p13953102263316"></a><strong id="b18794216103518"><a name="b18794216103518"></a><a name="b18794216103518"></a>dir</strong>: directory path</p>
</td>
</tr>
<tr id="row142028345356"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="p52031734143515"><a name="p52031734143515"></a><a name="p52031734143515"></a><strong id="b1532475513564"><a name="b1532475513564"></a><a name="b1532475513564"></a>device</strong></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="p120313453518"><a name="p120313453518"></a><a name="p120313453518"></a>Specifies the storage medium to be presented to the VM.</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="p18259554183415"><a name="p18259554183415"></a><a name="p18259554183415"></a><strong id="b4934327173519"><a name="b4934327173519"></a><a name="b4934327173519"></a>disk</strong>: disk (default)</p>
<p id="p15491211123817"><a name="p15491211123817"></a><a name="p15491211123817"></a><strong id="b17296123613513"><a name="b17296123613513"></a><a name="b17296123613513"></a>floppy</strong>: floppy disk</p>
<p id="p720343433510"><a name="p720343433510"></a><a name="p720343433510"></a><strong id="b14918844143515"><a name="b14918844143515"></a><a name="b14918844143515"></a>cdrom</strong>: CD-ROM</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Common subelements and attributes of the  **disk**  element

<a name="table4866134925114"></a>
<table><thead align="left"><tr id="row5867349175120"><th class="cellrowborder" valign="top" width="13.3%" id="mcps1.2.4.1.1"><p id="p1532019194524"><a name="p1532019194524"></a><a name="p1532019194524"></a>Subelement</p>
</th>
<th class="cellrowborder" valign="top" width="21.42%" id="mcps1.2.4.1.2"><p id="p44946337529"><a name="p44946337529"></a><a name="p44946337529"></a>Subelement Description</p>
</th>
<th class="cellrowborder" valign="top" width="65.28%" id="mcps1.2.4.1.3"><p id="p19867184935114"><a name="p19867184935114"></a><a name="p19867184935114"></a>Attribute Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row186719494512"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p186719490514"><a name="p186719490514"></a><a name="p186719490514"></a>source</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p466752217444"><a name="p466752217444"></a><a name="p466752217444"></a>Specifies the backend storage medium, which corresponds to the type specified by the <strong id="b847793912182"><a name="b847793912182"></a><a name="b847793912182"></a>type</strong> attribute of the <strong id="b724617521188"><a name="b724617521188"></a><a name="b724617521188"></a>disk</strong> element.</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p5608740181019"><a name="p5608740181019"></a><a name="p5608740181019"></a><strong id="b15742194833420"><a name="b15742194833420"></a><a name="b15742194833420"></a>file</strong>: file type. The value is the fully qualified path of the corresponding file.</p>
<p id="p164275439106"><a name="p164275439106"></a><a name="p164275439106"></a><strong id="b1259225283417"><a name="b1259225283417"></a><a name="b1259225283417"></a>dev</strong>: block type. The value is the fully qualified path of the corresponding host device.</p>
<p id="p15881242194919"><a name="p15881242194919"></a><a name="p15881242194919"></a><strong id="b6708185653411"><a name="b6708185653411"></a><a name="b6708185653411"></a>dir</strong>: directory type. The value is the fully qualified path of the disk directory.</p>
</td>
</tr>
<tr id="row34652194612"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p184654191365"><a name="p184654191365"></a><a name="p184654191365"></a>driver</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p114659199618"><a name="p114659199618"></a><a name="p114659199618"></a>Details about the specified backend driver</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p114651719267"><a name="p114651719267"></a><a name="p114651719267"></a><strong id="b147071449371"><a name="b147071449371"></a><a name="b147071449371"></a>type</strong>: disk format type. The value can be <strong id="b427816418382"><a name="b427816418382"></a><a name="b427816418382"></a>raw</strong> or <strong id="b1023625017388"><a name="b1023625017388"></a><a name="b1023625017388"></a>qcow2</strong>, which must be the same as that of source.</p>
<p id="p17729162795"><a name="p17729162795"></a><a name="p17729162795"></a><strong id="b11843918113812"><a name="b11843918113812"></a><a name="b11843918113812"></a>io</strong>: disk I/O mode. The options are <strong id="b231012200410"><a name="b231012200410"></a><a name="b231012200410"></a>native</strong> and <strong id="b15171523154120"><a name="b15171523154120"></a><a name="b15171523154120"></a>threads</strong>.</p>
<p id="p14680718191016"><a name="p14680718191016"></a><a name="p14680718191016"></a><strong id="b34049735212"><a name="b34049735212"></a><a name="b34049735212"></a>cache</strong>: disk cache mode. The value can be <strong id="b149601234145119"><a name="b149601234145119"></a><a name="b149601234145119"></a>none</strong>, <strong id="b1190434815119"><a name="b1190434815119"></a><a name="b1190434815119"></a>writethrough</strong>, <strong id="b193195317518"><a name="b193195317518"></a><a name="b193195317518"></a>writeback</strong>, or <strong id="b10772155685113"><a name="b10772155685113"></a><a name="b10772155685113"></a>directsync</strong>.</p>
<p id="p17896143411122"><a name="p17896143411122"></a><a name="p17896143411122"></a><strong id="b16456171445216"><a name="b16456171445216"></a><a name="b16456171445216"></a>iothread</strong>: I/O thread allocated to the disk.</p>
</td>
</tr>
<tr id="row08679492515"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p188671349195119"><a name="p188671349195119"></a><a name="p188671349195119"></a>target</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p144948333527"><a name="p144948333527"></a><a name="p144948333527"></a>The bus and device that a disk presents to a VM.</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p158671649195117"><a name="p158671649195117"></a><a name="p158671649195117"></a><strong id="b398714369574"><a name="b398714369574"></a><a name="b398714369574"></a>dev</strong>: specifies the logical device name of a disk, for example, <strong id="b991220105815"><a name="b991220105815"></a><a name="b991220105815"></a>sd[a-p]</strong> for SCSI, SATA, and USB buses and <strong id="b20572133412581"><a name="b20572133412581"></a><a name="b20572133412581"></a>hd[a-d]</strong> for IDE disks.</p>
<p id="p7960169114"><a name="p7960169114"></a><a name="p7960169114"></a><strong id="b177746155918"><a name="b177746155918"></a><a name="b177746155918"></a>bus</strong>: specifies the type of a disk. Common types include scsi, usb, sata, and virtio.</p>
</td>
</tr>
<tr id="row386764955116"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p19867049125114"><a name="p19867049125114"></a><a name="p19867049125114"></a>boot</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p2313201420517"><a name="p2313201420517"></a><a name="p2313201420517"></a>The disk can be used as the boot disk.</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p11867149165120"><a name="p11867149165120"></a><a name="p11867149165120"></a><strong id="b195415181010"><a name="b195415181010"></a><a name="b195415181010"></a>order</strong>: specifies the disk startup sequence.</p>
</td>
</tr>
<tr id="row18868164965114"><td class="cellrowborder" valign="top" width="13.3%" headers="mcps1.2.4.1.1 "><p id="p486814495519"><a name="p486814495519"></a><a name="p486814495519"></a>readonly</p>
</td>
<td class="cellrowborder" valign="top" width="21.42%" headers="mcps1.2.4.1.2 "><p id="p184942033175213"><a name="p184942033175213"></a><a name="p184942033175213"></a>The disk is read-only and cannot be modified by the VM. Generally, it is used together with the CD-ROM drive.</p>
</td>
<td class="cellrowborder" valign="top" width="65.28%" headers="mcps1.2.4.1.3 "><p id="p98681249135119"><a name="p98681249135119"></a><a name="p98681249135119"></a>-</p>
</td>
</tr>
</tbody>
</table>

## Configuration Example<a name="section8448175351813"></a>

After the VM image is prepared according to  [Preparing a VM Image](preparing-a-vm-image.md), you can use the following XML configuration file to configure the virtual disk for the VM.

In this example, two I/O threads, one block disk device and one CD, are configured for the VM, and the first I/O thread is allocated to the block disk device for use. The backend medium of the disk device is in qcow2 format and is used as the preferred boot disk.

```
<domain type='kvm'>
    ...
    <iothreads>2</iothreads>
    <devices>
        <disk type='file' device='disk'>
	    <driver name='qemu' type='qcow2' cache='none' io='native' iothread="1"/>
	    <source file='/mnt/openEuler-image.qcow2'/>
	    <target dev='vda' bus='virtio'/>
	    <boot order='1'/>
	</disk>
	<disk type='file' device='cdrom'>
	    <driver name='qemu' type='raw' cache='none' io='native'/>
	    <source file='/mnt/openEuler-20.03-LTS-aarch64-dvd.iso'/>
	    <target dev='sdb' bus='scsi'/>
	    <readonly/>
	    <boot order='2'/>
	</disk>
         ...
    </devices>
</domain>
```

