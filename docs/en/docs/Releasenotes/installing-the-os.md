# Installing the OS

## Release Package

The following table lists the [openEuler release files](http://repo.openeuler.org/openEuler-20.09/), including the ISO release package, container image, VM image, and repo source that is used online.

**Table 1**  openEuler release files<a name="table001"></a>

<table>
<thead>
<tr>
	<th>Directory</th>
	<th>Type</th>
	<th>Description</th>
</tr>
</thead>
<tr>
	<td><a href="http://repo.openeuler.org/openEuler-20.09/ISO/">ISO</a></td>
	<td id="table001row001">ISO release package</td>
	<td>The directory differentiates the ISO release packages for the AArch64, x86, and source, respectively. The details are as follows:
		<ul>
			<li><strong>openEuler-20.09-aarch64-dvd.iso</strong> and <strong>openEuler-20.09-x86_64-dvd.iso</strong> are the openEuler basic installation software package ISO files for the AArch64 and x86 architectures, respectively. The ISO files contain basic components running on the openEuler OS and meet the basic requirements of developers.</li>
			<li><strong>openEuler-20.09-everything-aarch64-dvd.iso</strong> and <strong>openEuler-20.09-everything-x86_64-dvd.iso</strong> are the openEuler full software package ISO files for the AArch64 and x86 architectures, respectively. In addition to all software in the openEuler basic installation software package, the ISO files also contain the software packages that have been verified in the openEuler community, which meet the advanced requirements of developers.</li>
			<li><strong>openEuler-20.09-debuginfo-aarch64-dvd.iso</strong> and <strong>openEuler-20.09-debuginfo-x86_64-dvd.iso</strong> are the openEuler debugging software package ISO files for the AArch64 and x86 architectures, respectively. The ISO files contain the symbol table information required for debugging and are used for debugging software functions and performance.</li>
			<li><strong>openEuler-20.09-source-dvd.iso</strong> is the ISO file that contains all source code software packages of the openEuler community, which is used offline by developers.</li>
		</ul>
		<div><span class="notetitle">Note:</span>
			<div class="notebody"><p>Each ISO release package has its own verification file, which is used to verify the integrity of the ISO release package.</p></div>
		</div>
	</td>
</tr>
<tr>
	<td><a href="http://repo.openeuler.org/openEuler-20.09/docker_img/">docker_img</a></td>
	<td id="table001row002">Container image</td>
	<td>The openEuler container image, which provides only the basic bash environment, is used as the basic container image. The directory differentiates the container images for the AArch64 and x86 architectures, respectively.
		<div><span class="notetitle">Note:</span>
			<div class="notebody"><p>Each container image has its own verification file, which is used to verify the integrity of the container image.</p></div>
		</div>
	</td>
</tr>
<tr>
	<td id="table001row003"><a href="http://repo.openeuler.org/openEuler-20.09/virtual_machine_img/">virtual_machine_img</a></td>
	<td>VM image</td>
	<td><p>The openEuler VM image provides only the basic running environment to shorten the VM deployment time. The directory differentiates the VM images for the AArch64 and x86 architectures, respectively.</p>
		<div><span class="notetitle">说明：</span>
			<div class="notebody">
				<ul>
					<li>The default password of the root user of the VM image is openEuler12#$. Change the password upon the first login.</li>
					<li>Each VM image has its own verification file, which is used to verify the integrity of the VM image.</li>
				</ul>
			</div>
		</div>
	</td>
</tr>
<tr>
	<td><a href="http://repo.openeuler.org/openEuler-20.09/EPOL/">EPOL</a></td>
	<td rowspan="7" id="table001row004">Repo source</td>
	<td>The repo sources of the openEuler third-party software package are mainly contributed by third parties and communities, and are maintained by the providers. The directory differentiates the repo sources for the AArch64 and x86 architectures, respectively.</td>
</tr>
<tr>
	<td><a href="http://repo.openeuler.org/openEuler-20.09/OS/">OS</a></td>
	<td>The repo source of the openEuler basic installation software package provides the offline version upgrade function. The content of the software package is the same as that of the basic installation software package ISO in the ISO release package. The directory differentiates the repo sources for the AArch64 and x86 architectures, respectively.</td>
</tr>
<tr>
	<td><a href="http://repo.openeuler.org/openEuler-20.09/debuginfo/">debuginfo</a></td>
	<td>The repo source of the openEuler debugging software package provides the online download function. The content of the software package is the same as that of the debugging software package ISO in the ISO release package. The directory differentiates the repo sources for the AArch64 and x86 architectures, respectively.</td>
</tr>
<tr>
	<td><a href="http://repo.openeuler.org/openEuler-20.09/everything/">everything</a></td>
	<td>The repo source of the openEuler full software package provides the online download and version upgrade functions. The content of the software package is the same as that of the full software package ISO in the ISO release package. The directory differentiates the repo sources for the AArch64 and x86 architectures, respectively.</td>
</tr>
<tr>
	<td><a href="http://repo.openeuler.org/openEuler-20.09/extras/">extras</a></td>
	<td>The repo source of the openEuler extended software package is used to release new software packages with added features. The directory differentiates the repo sources for the AArch64 and x86 architectures, respectively.</td>
</tr>
<tr>
	<td><a href="http://repo.openeuler.org/openEuler-20.09/source/">source</a></td>
	<td>The repo source of all source code software packages in the openEuler community, which is used online by developers.</td>
</tr>
<tr>
	<td><a href="http://repo.openeuler.org/openEuler-20.09/update/">update</a></td>
	<td>The repo source of the openEuler upgrade software package, which is used to fix bugs and common vulnerabilities and exposures (CVE) in released versions and to update and release software with enhancements. It provides online download and software upgrade functions. The directory differentiates the repo sources for the AArch64 and x86 architectures, respectively.</td>
</tr>
</table>



## Minimal Hardware Specifications<a name="en-us_topic_0182825778_section1542202114014"></a>

[Table 2](#en-us_topic_0182825778_tff48b99c9bf24b84bb602c53229e2541)  lists the minimum hardware specifications for installing openEuler 20.09.

**Table  2**  Minimal hardware specifications


|  Component  | Minimal Hardware Specification |
|:---  |:----  |
| CPU | Kunpeng 920 (architecture: AArch64)<br/>x86-64 (Skylake or later) |
| Memory | ≥ 8 GB |
| Hard disk | ≥ 120 GB |

## Hardware Compatibility

[Table 3](#en-us_topic_0227922427_table39822012)  lists the typical configurations of servers and components supported by openEuler. openEuler will gradually support other servers in the future. Partners and developers are welcome to participate in the contribution and validation.

**Table  3**  Supported servers and typical configurations

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
</table>
