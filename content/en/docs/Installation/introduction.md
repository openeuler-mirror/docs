# Introduction<a name="EN-US_TOPIC_0229291226"></a>

## Overview<a name="section647062815510"></a>

You can use the kickstart tool to automatically install the openEuler OS in either of the following ways:

-   Semi-automatic installation: You only need to specify the location of the kickstart file. Kickstart automatically configures OS attributes such as keyboard, language, and partitions.
-   Automatic installation: The OS is automatically installed.

## Advantages and Disadvantages<a name="section161817592328"></a>

[Table 1](#table1388812373315)  lists the advantages and disadvantages of semi-automatic installation and full-automatic installation using kickstart. You can select an installation mode as required.

**Table  1**  Advantages and disadvantages

<a name="table1388812373315"></a>
<table><thead align="left"><tr id="row988915233338"><th class="cellrowborder" valign="top" width="11.91119111911191%" id="mcps1.2.4.1.1"><p id="p688992343311"><a name="p688992343311"></a><a name="p688992343311"></a>Installation Mode</p>
</th>
<th class="cellrowborder" valign="top" width="34.003400340034005%" id="mcps1.2.4.1.2"><p id="p08895233338"><a name="p08895233338"></a><a name="p08895233338"></a>Advantage</p>
</th>
<th class="cellrowborder" valign="top" width="54.085408540854075%" id="mcps1.2.4.1.3"><p id="p688912323314"><a name="p688912323314"></a><a name="p688912323314"></a>Disadvantage</p>
</th>
</tr>
</thead>
<tbody><tr id="row5889132303318"><td class="cellrowborder" valign="top" width="11.91119111911191%" headers="mcps1.2.4.1.1 "><p id="p1588922333319"><a name="p1588922333319"></a><a name="p1588922333319"></a>Semi-automatic installation</p>
</td>
<td class="cellrowborder" valign="top" width="34.003400340034005%" headers="mcps1.2.4.1.2 "><p id="p10889142333314"><a name="p10889142333314"></a><a name="p10889142333314"></a>Services such as TFTP, PXE, and DHCP do not need to be prepared.</p>
</td>
<td class="cellrowborder" valign="top" width="54.085408540854075%" headers="mcps1.2.4.1.3 "><p id="p88891223183319"><a name="p88891223183319"></a><a name="p88891223183319"></a>You need to manually specify the path of the kickstart file.</p>
</td>
</tr>
<tr id="row688917233332"><td class="cellrowborder" valign="top" width="11.91119111911191%" headers="mcps1.2.4.1.1 "><p id="p13889192373312"><a name="p13889192373312"></a><a name="p13889192373312"></a>Full-automatic installation</p>
</td>
<td class="cellrowborder" valign="top" width="34.003400340034005%" headers="mcps1.2.4.1.2 "><p id="p2889102319334"><a name="p2889102319334"></a><a name="p2889102319334"></a>The OS is installed automatically.</p>
</td>
<td class="cellrowborder" valign="top" width="54.085408540854075%" headers="mcps1.2.4.1.3 "><p id="p20889823113311"><a name="p20889823113311"></a><a name="p20889823113311"></a>Services, such as TFTP, DHCPD, and PXE, need to be configured.</p>
</td>
</tr>
</tbody>
</table>

## Background<a name="section13181456141811"></a>

**Kickstart**

Kickstart is an unattended installation mode. The principle of kickstart is to record typical parameters that need to be manually entered during the installation and generate the configuration file  **ks.cfg**. During the installation, the installation program searches the  **ks.cfg**  configuration file first for required parameters. If no matching parameters are found, you need to manually configure these parameters. If all required parameters are covered by the kickstart file, automatic installation can be achieved by only specifying the path of the kickstart file.

Both full-automatic or semi-automatic installation can be achieved by kickstart.

**PXE**

Pre-boot Execution Environment \(PXE\)\) works in client/server network mode. The PXE client can obtain an IP address from the DHCP server during the startup and implement client boot and installation through the network based on protocols such as trivial file transfer protocol \(TFTP\).

**TFTP**

TFTP is used to transfer simple and trivial files between clients and the server.

