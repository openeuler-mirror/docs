# Preparing for Installation<a name="EN-US_TOPIC_0231142818"></a>

## Environment Requirements<a name="section43927036"></a>

-   The accelerator engine is enabled on TaiShan 200 servers.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   You need to import the accelerator license. For details, see section "License Management" in the  [TaiShan Rack Server iBMC \(V500 or Later\) User Guide](https://support.huawei.com/enterprise/en/doc/EDOC1100121685/426cffd9?idPath=7919749|9856522|21782478|8060757).  
>-   If the accelerator is used in the physical machine scenario, the SMMU must be disabled. For details, see the  [TaiShan 200 Server BIOS Parameter Reference](https://support.huawei.com/enterprise/en/doc/EDOC1100088647).  

-   CPU: Kunpeng 920
-   OS: openEuler-20.03-LTS-aarch64-dvd.iso

## KAE Software Description<a name="section59799005"></a>

**Table  1**  RPM software packages of the KAE

<a name="table9060076"></a>
<table><thead align="left"><tr id="row36699979"><th class="cellrowborder" valign="top" width="48.57%" id="mcps1.2.3.1.1"><p id="p19908318"><a name="p19908318"></a><a name="p19908318"></a><strong id="b842352706103848"><a name="b842352706103848"></a><a name="b842352706103848"></a>Software Package</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.43%" id="mcps1.2.3.1.2"><p id="p1961070"><a name="p1961070"></a><a name="p1961070"></a><strong id="b842352706154240"><a name="b842352706154240"></a><a name="b842352706154240"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row48788899"><td class="cellrowborder" valign="top" width="48.57%" headers="mcps1.2.3.1.1 "><p id="p59586712"><a name="p59586712"></a><a name="p59586712"></a>kae_driver-<em id="i93394206582"><a name="i93394206582"></a><a name="i93394206582"></a>version number</em>-<em id="i184257245581"><a name="i184257245581"></a><a name="i184257245581"></a>1.OS type</em>.aarch64.rpm</p>
</td>
<td class="cellrowborder" valign="top" width="51.43%" headers="mcps1.2.3.1.2 "><p id="p61794345"><a name="p61794345"></a><a name="p61794345"></a>Accelerator driver, including the uacce.ko, hisi_qm.ko, hisi_sec2.ko, and hisi_hpre.ko kernel modules.</p>
<p id="p186913584617"><a name="p186913584617"></a><a name="p186913584617"></a>Support: SM3, SM4, AES, RSA, and DH algorithms.</p>
</td>
</tr>
<tr id="row49528506"><td class="cellrowborder" valign="top" width="48.57%" headers="mcps1.2.3.1.1 "><p id="p52386074"><a name="p52386074"></a><a name="p52386074"></a>libwd-<em id="i071418435561"><a name="i071418435561"></a><a name="i071418435561"></a>version number</em>-<em id="i096243095817"><a name="i096243095817"></a><a name="i096243095817"></a>1.OS type</em>.aarch64.rpm</p>
</td>
<td class="cellrowborder" valign="top" width="51.43%" headers="mcps1.2.3.1.2 "><p id="p15413619"><a name="p15413619"></a><a name="p15413619"></a>Coverage: <strong id="b4202013529"><a name="b4202013529"></a><a name="b4202013529"></a>libwd.so</strong> dynamic link library.</p>
<p id="p4504844"><a name="p4504844"></a><a name="p4504844"></a>It provides interfaces for the KAE.</p>
</td>
</tr>
<tr id="row40543596"><td class="cellrowborder" valign="top" width="48.57%" headers="mcps1.2.3.1.1 "><p id="p62805805"><a name="p62805805"></a><a name="p62805805"></a>libkae-<em id="i34342116598"><a name="i34342116598"></a><a name="i34342116598"></a>version number</em>-<em id="i1643152113599"><a name="i1643152113599"></a><a name="i1643152113599"></a>1.OS type</em>.aarch64.rpm</p>
</td>
<td class="cellrowborder" valign="top" width="51.43%" headers="mcps1.2.3.1.2 "><p id="p54105439"><a name="p54105439"></a><a name="p54105439"></a>Dependency: libwd RPM package.</p>
<p id="p17186905"><a name="p17186905"></a><a name="p17186905"></a>Coverage: <strong id="b121301253165118"><a name="b121301253165118"></a><a name="b121301253165118"></a>libkae.so</strong> dynamic library.</p>
<p id="p20464425"><a name="p20464425"></a><a name="p20464425"></a>Support: SM3, SM4, AES, RSA, and DH algorithms.</p>
</td>
</tr>
</tbody>
</table>

