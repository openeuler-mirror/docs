# Installing the OS<a name="EN-US_TOPIC_0225731123"></a>

## Release Package<a name="section19865103114280"></a>

The following table lists the [openEuler release files](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/), including the [ISO release package](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/ISO/), [container image](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/docker_img/), [VM image](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/virtual_machine_img/), and [repo source](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/) that is used online.

**Table 1**  ISO release<a name="table8396719144315"></a>

|  Name  | Description  |
| :----  | :----  |
| openEuler-20.03-LTS-SP2-aarch64-dvd.iso | The openEuler basic installation software package ISO files for the AArch64 architecture. The ISO files contain basic components running on the openEuler OS |
| openEuler-20.03-LTS-SP2-everything-aarch64-dvd.iso | the openEuler full software package ISO files for the AArch64 architecture|
| openEuler-20.03-LTS-SP2-debuginfo-aarch64-dvd.iso | The openEuler debugging software package ISO files for the AArch64 architecture, contains the symbol table information required for debugging |
| openEuler-20.03-LTS-SP2-netinst-aarch64-dvd.iso | The openEuler miniaturization ISO files for the AArch64 architecture. |
| openEuler-20.03-LTS-SP2-x86_64-dvd.iso | The openEuler basic installation software package ISO files for the x86 architecture. The ISO files contain basic components running on the openEuler OS |
| openEuler-20.03-LTS-SP2-everything-x86_64-dvd.iso | the openEuler full software package ISO files for the x86 architecture |
| openEuler-20.03-LTS-SP2-debuginfo-x86_64-dvd.iso | The openEuler debugging software package ISO files for the x86 architecture, contains the symbol table information required for debugging |
| openEuler-20.03-LTS-SP2-netinst-x86_64-dvd.iso |The openEuler miniaturization ISO files for the x86 architecture. |
| openEuler-20.03-LTS-SP2-source-dvd.iso | The ISO file that contains all source code software packages of the openEuler community |


**Table 2**  VM image<a name="table1995101714610"></a>

|  Name  | Description  |
| :----  | :----  |
| openEuler-20.03-LTS-SP2.aarch64.qcow2.xz | The openEuler VM image for the AArch64 architecture |
| openEuler-20.03-LTS-SP2.x86_64.qcow2.xz |  The openEuler VM image for the x86 architecture |

> ![](./public_sys-resources/icon-note.gif) **NOTICE：**   
> The default password of the root user of the VM image is openEuler12#$. Change the password upon the first login.


**Table 3**  Container image<a name="table1276911538154"></a>

|  Name  | Description  |
| :----  | :----  |
| openEuler-docker.aarch64.tar.xz | The openEuler container image for the AArch64 architecture |
| openEuler-docker.x86_64.tar.xz | The openEuler container image for the x86 architecture  |


**Table 4**  Repo source<a name="table953512211576"></a>

|  Directory  | Description  |
| :----  | :----  |
| [ISO](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/ISO/) | The directory differentiates the ISO release packages for the AArch64, x86, and source, respectively |
| [OS](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/OS/) | The repo source of the openEuler basic installation software package provides the offline version upgrade function |
| [debuginfo](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/debuginfo/) | The repo source of the openEuler debugging software package provides the online download function |
| [docker_img](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/docker_img/) | The openEuler container image, which provides only the basic bash environment, is used as the basic container image |
| [virtual_machine_img](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/virtual_machine_img/) | The openEuler VM image provides only the basic running environment to shorten the VM deployment time |
| [everything](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/everything/) | The repo source of the openEuler full software package provides the online download and version upgrade functions |
| [extras](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/extras/) | The repo source of the openEuler extended software package is used to release new software packages with added features |
| [source](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/source/) | The repo source of all source code software packages in the openEuler community, which is used online by developers |
| [update](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/update/) | The repo source of the openEuler upgrade software package, which is used to fix bugs and common vulnerabilities and exposures (CVE) in released versions and to update and release software with enhancements |
| [EPOL](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/EPOL/) | The repo sources of the openEuler third-party software package are mainly contributed by third parties and communities  |
| [raspi_img](http://repo.openeuler.org/openEuler-20.03-LTS-SP2/raspi_img/) | The repo source of the openEuler Raspberry Pi image |

## Minimal Hardware Specifications<a name="en-us_topic_0182825778_section1542202114014"></a>

[Table 5](#en-us_topic_0182825778_tff48b99c9bf24b84bb602c53229e2541)  lists the minimum hardware specifications for installing openEuler 20.03 LTS SP2.

**Table  5**  Minimal hardware specifications

|  Component  | Minimal Hardware Specification  |
| :----  | :----  |
| CPU | Kunpeng 920 (architecture: AArch64)<br>Skylake or later (x86-64) |
| Memory | ≥ 8 GB |
| Hard disk | ≥ 120 GB |

## Hardware Compatibility<a name="section1154104624319"></a>

[Table 6](#en-us_topic_0227922427_table39822012)  lists the typical configurations of servers and components supported by openEuler. openEuler will gradually support other servers in the future. Partners and developers are welcome to participate in the contribution and validation.

**Table  6**  Supported servers and typical configurations

<table>
  <tr>
    <th>Vendor</th>
    <th>Server</th>
    <th>Server Model</th>
    <th>Component</th>
	<th>Typical Configuration</th>
  </tr>
  <tr>
    <td rowspan="3">Huawei</td>
    <td rowspan="3">TaiShan 200</td>
    <td rowspan="3">2280 balanced model</td>
	<td>CPU</td>
	<td>Kunpeng 920</td>
  </tr>
  <tr>
	<td>Memory</td>
	<td>32G*4 2933MHz</td>
  </tr>
  <tr>
    <td>Network</td>
    <td>TM210</td>
  </tr>
  <tr>
    <td rowspan="3">Huawei</td>
    <td rowspan="3">FusionServer Pro</td>
    <td rowspan="3">2288H V5 rack server</td>
	<td>CPU</td>
	<td>Intel(R) Xeon(R) Gold 5118 CPU @ 2.30GHz</td>
  </tr>
  <tr>
	<td>Memory</td>
	<td>32*4 2400MHz</td>
  </tr>
  <tr>
    <td>Network</td>
    <td>X722</td>
  </tr>
  <tr>
    <td rowspan="3">PHYTIUM</td>
    <td rowspan="3">Phytium</td>
    <td rowspan="3">FT-2000+/64</td>
	<td>CPU</td>
	<td>FT-2000+/64</td>
  </tr>
  <tr>
	<td>Memory</td>
	<td>Micron 16G*32</td>
  </tr>
  <tr>
    <td>Network</td>
    <td>I350</td>
  </tr>
</table>

