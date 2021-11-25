# Installing the OS

## Release Files

The openEuler release files include [ISO release pacakges](http://repo.openeuler.org/openEuler-21.09/ISO/), [VM images](http://repo.openeuler.org/openEuler-21.09/virtual_machine_img/), [containier images](http://repo.openeuler.org/openEuler-21.09/docker_img/), [edge images](http://repo.openeuler.org/openEuler-21.09/edge_img/), [embedded images](https://repo.openeuler.org/openEuler-21.09/edge_img/), and [repo sources](http://repo.openeuler.org/openEuler-21.09/). The following tables describe those files respectively.

Table 1 ISO release packages

| Name                                       | Description                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| openEuler-21.03-aarch64-dvd.iso            | Basic installation ISO file of the AArch64 architecture, including the core components for running the minimum system. |
| openEuler-21.03-everything-aarch64-dvd.iso | Full installation ISO file of the AArch64 architecture, including all components for running the entire system. |
| openEuler-21.03-debuginfo-aarch64-dvd.iso  | ISO file for openEuler debugging in the AArch64 architecture, including the symbol table information required for debugging. |
| openEuler-21.03-x86_64-dvd.iso             | Basic installation ISO file of the x86_64 architecture, including the core components for running the minimum system. |
| openEuler-21.03-everything-x86_64-dvd.iso  | Full installation ISO file of the x86_64 architecture, including all components for running the entire system. |
| openEuler-21.03-debuginfo-x86_64-dvd.iso   | ISO file for openEuler debugging in the x86_64 architecture, including the symbol table information required for debugging. |
| openEuler-21.03-source-dvd.iso             | ISO file of the openEuler source code.                       |
| openEuler-21.09-edge-aarch64-dvd.iso       | Edge ISO file in the AArch64 architecture, including the core components for running the minimum system. |
| openEuler-21.09-edge-x86_64-dvd.iso        | Edge ISO file in the x86_64 architecture, including the core components for running the minimum system. |

Table 2 VM images

| Name                             | Description                                        |
| -------------------------------- | -------------------------------------------------- |
| openEuler-21.03.aarch64.qcow2.xz | VM image of openEuler in the AArch64 architecture. |
| openEuler-21.03.x86_64.qcow2.xz  | VM image of openEuler in the x86_64 architecture.  |

Note: The default password of **root** user of the VM image is **openEuler12#$**. Change the password upon the first login. 

Table 3 Container images

| Name                            | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| openEuler-docker.aarch64.tar.xz | Container image of openEuler in the AArch64 architecture. |
| openEuler-docker.x86_64.tar.xz  | Container image of openEuler in the x86_64 architecture.  |

Table 4 Repo sources

| Name                | Description                                |
| ------------------- | ------------------------------------------ |
| ISO                 | Stores ISO images.                         |
| OS                  | Stores basic software package sources.     |
| debuginfo           | Stores debugging package sources.          |
| docker_img          | Stores container images.                   |
| virtual_machine_img | Stores VM images.                          |
| everything          | Stores full software package sources.      |
| extras              | Stores extended software package sources.  |
| source              | Stores source code software package.       |
| update              | Stores update software package sources.    |
| EPOL                | Stores extended openEuler package sources. |

## Minimum Hardware Specifications

The following table lists the minimum hardware specifications for openEuler 21.03.

Table 1 Minimum hardware requirements

| Component  | Minimum Hardware Specification                      |
| ---------- | --------------------------------------------------- |
| CPU        | Kunpeng 920 (AArch64) / x86_64 (later than Skylake) |
| Memory     | ≥ 8 GB                                              |
| Hard drive | ≥ 120 GB                                            |

## Hardware Compatibility

The following table lists the supported servers and configurations of openEuler.

Table 1 Supported servers and configurations

<table><thead align="left"><tr id="zh-cn_topic_0227922427_row17270681"><th class="cellrowborder" valign="top" width="8.200820082008201%" id="mcps1.2.6.1.1"><p id="p1239010167198"><a name="p1239010167198"></a><a name="p1239010167198"></a>Vendor</p>
</th>
<th class="cellrowborder" valign="top" width="16.28162816281628%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0227922427_p56747887"><a name="zh-cn_topic_0227922427_p56747887"></a><a name="zh-cn_topic_0227922427_p56747887"></a>Server Name</p>
</th>
<th class="cellrowborder" valign="top" width="18.71187118711871%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0227922427_p33176134"><a name="zh-cn_topic_0227922427_p33176134"></a><a name="zh-cn_topic_0227922427_p33176134"></a>Server Model</p>
</th>
<th class="cellrowborder" valign="top" width="17.211721172117212%" id="mcps1.2.6.1.4"><p id="p19313161314450"><a name="p19313161314450"></a><a name="p19313161314450"></a>Component</p>
</th>
<th class="cellrowborder" valign="top" width="39.59395939593959%" id="mcps1.2.6.1.5"><p id="p183840814519"><a name="p183840814519"></a><a name="p183840814519"></a>Configuration</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0227922427_row7284856"><td class="cellrowborder" rowspan="4" valign="top" width="8.200820082008201%" headers="mcps1.2.6.1.1 "><p id="p111661925121918"><a name="p111661925121918"></a><a name="p111661925121918"></a>Huawei</p>
</td>
<td class="cellrowborder" rowspan="4" valign="top" width="16.28162816281628%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0227922427_p34571797"><a name="zh-cn_topic_0227922427_p34571797"></a><a name="zh-cn_topic_0227922427_p34571797"></a>TaiShan 200</p>
</td>
<td class="cellrowborder" rowspan="4" valign="top" width="18.71187118711871%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0227922427_p53202458"><a name="zh-cn_topic_0227922427_p53202458"></a><a name="zh-cn_topic_0227922427_p53202458"></a>2280 (balanced model)</p>
</td>
<td class="cellrowborder" valign="top" width="17.211721172117212%" headers="mcps1.2.6.1.4 "><p id="p632634144516"><a name="p632634144516"></a><a name="p632634144516"></a>CPU</p>
</td>
<td class="cellrowborder" valign="top" width="39.59395939593959%" headers="mcps1.2.6.1.5 "><p id="p269564774512"><a name="p269564774512"></a><a name="p269564774512"></a>HiSilicon Kunpeng 920</p>
</td>
</tr>
<tr id="row127460329457"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="p7326641174519"><a name="p7326641174519"></a><a name="p7326641174519"></a>Memory</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="p4695124774516"><a name="p4695124774516"></a><a name="p4695124774516"></a>32G\*4 2933MHz</p>
</td>
</tr>
<tr id="row3713103715458"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="p13326114115457"><a name="p13326114115457"></a><a name="p13326114115457"></a>RAID card</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="p13696154764514"><a name="p13696154764514"></a><a name="p13696154764514"></a>LSI SAS3508</p>
</td>
</tr>
<tr id="row1371312378455"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="p732611416456"><a name="p732611416456"></a><a name="p732611416456"></a>Network</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="p13696114718455"><a name="p13696114718455"></a><a name="p13696114718455"></a>TM210</p>
</td>
</tr>
<tr id="zh-cn_topic_0227922427_row36446907"><td class="cellrowborder" rowspan="4" valign="top" width="8.200820082008201%" headers="mcps1.2.6.1.1 "><p id="p1831103919198"><a name="p1831103919198"></a><a name="p1831103919198"></a>Huawei</p>
</td>
<td class="cellrowborder" rowspan="4" valign="top" width="16.28162816281628%" headers="mcps1.2.6.1.2 "><p id="p1245317822418"><a name="p1245317822418"></a><a name="p1245317822418"></a>FusionServer Pro</p>
</td>
<td class="cellrowborder" rowspan="4" valign="top" width="18.71187118711871%" headers="mcps1.2.6.1.3 "><p id="p1345214816241"><a name="p1345214816241"></a><a name="p1345214816241"></a>2288H V5 (rack server)</p>
</td>
<td class="cellrowborder" valign="top" width="17.211721172117212%" headers="mcps1.2.6.1.4 "><p id="p1235016319467"><a name="p1235016319467"></a><a name="p1235016319467"></a>CPU</p>
</td>
<td class="cellrowborder" valign="top" width="39.59395939593959%" headers="mcps1.2.6.1.5 "><p id="p148932077463"><a name="p148932077463"></a><a name="p148932077463"></a>Intel(R) Xeon(R) Gold 5118 CPU @ 2.30GHz</p>
</td>
</tr>
<tr id="row12326548454"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="p1035012313461"><a name="p1035012313461"></a><a name="p1035012313461"></a>Memory</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="p13893379461"><a name="p13893379461"></a><a name="p13893379461"></a>32*4 2400MHz</p>
</td>
</tr>
<tr id="row206435916456"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="p23509319462"><a name="p23509319462"></a><a name="p23509319462"></a>RAID card</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="p16893107144611"><a name="p16893107144611"></a><a name="p16893107144611"></a>LSI SAS3508</p>
</td>
</tr>
<tr id="row5647591455"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="p1835019312469"><a name="p1835019312469"></a><a name="p1835019312469"></a>Network</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="p189318714460"><a name="p189318714460"></a><a name="p189318714460"></a>X722</p>
</td>
</tr>
</tbody>
</table>

