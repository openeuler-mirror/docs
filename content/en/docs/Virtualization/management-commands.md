# Management Commands<a name="EN-US_TOPIC_0183154313"></a>

## Overview<a name="section669674110275"></a>

You can use the  **virsh**  command tool to manage the VM lifecycle. This section describes the commands related to the lifecycle.

## Prerequisites<a name="section15491726162918"></a>

-   Before performing operations on a VM, you need to query the VM status to ensure that the operations can be performed. For details about the conversion between status, see  [Status Transition](introduction-0.md#section157801951173112)  in  [Introduction](introduction-0.md).
-   You have administrator rights.
-   The VM XML configuration files are prepared.

## Command Usage<a name="section168702612296"></a>

You can run the  **virsh**  command to manage the VM lifecycle. The command format is as follows:

```
virsh <operate> <obj> <options>
```

The parameters are described as follows:

-   _operate_: manages VM lifecycle operations, such as creating, deleting, and starting VMs.
-   _obj_: specifies the operation object, for example, the VM to be operated.
-   _options_: command option. This parameter is optional.

[Table 1](#table389518422611)  describes the commands used for VM lifecycle management.  _VMInstanse_  indicates the VM name, VM ID, or VM UUID,  _XMLFile_  indicates the XML configuration file of the VM, and  _DumpFile_  indicates the dump file. Change them based on the site requirements.

**Table  1**  VM Lifecycle Management Commands

<a name="table389518422611"></a>
<table><thead align="left"><tr id="row11896124210613"><th class="cellrowborder" valign="top" width="31.669999999999998%" id="mcps1.2.3.1.1"><p id="p148961421461"><a name="p148961421461"></a><a name="p148961421461"></a>Command</p>
</th>
<th class="cellrowborder" valign="top" width="68.33%" id="mcps1.2.3.1.2"><p id="p789618424610"><a name="p789618424610"></a><a name="p789618424610"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row16896134211610"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p37307741012"><a name="p37307741012"></a><a name="p37307741012"></a><strong id="b973047201019"><a name="b973047201019"></a><a name="b973047201019"></a>virsh define </strong>&lt;<em id="i98831715135"><a name="i98831715135"></a><a name="i98831715135"></a>XMLFile</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p7730770101"><a name="p7730770101"></a><a name="p7730770101"></a>Define a persistent VM. After the definition is complete, the VM is shut down and is considered as a <strong id="b186431046135716"><a name="b186431046135716"></a><a name="b186431046135716"></a>domain</strong> instance.</p>
</td>
</tr>
<tr id="row118965423615"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p1873010791017"><a name="p1873010791017"></a><a name="p1873010791017"></a><strong id="b207308718102"><a name="b207308718102"></a><a name="b207308718102"></a>virsh create </strong>&lt;<em id="i132641341137"><a name="i132641341137"></a><a name="i132641341137"></a>XMLFile</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p97301879104"><a name="p97301879104"></a><a name="p97301879104"></a>Create a temporary VM. After the VM is created, it is in the running status.</p>
</td>
</tr>
<tr id="row1689619421617"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p37301474109"><a name="p37301474109"></a><a name="p37301474109"></a><strong id="b20730770108"><a name="b20730770108"></a><a name="b20730770108"></a>virsh start </strong>&lt;<em id="i204711236181813"><a name="i204711236181813"></a><a name="i204711236181813"></a>VMInstanse</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p2073018721010"><a name="p2073018721010"></a><a name="p2073018721010"></a>Start the VM. </p>
</td>
</tr>
<tr id="row14896442366"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p20291141611019"><a name="p20291141611019"></a><a name="p20291141611019"></a><strong id="b729181641014"><a name="b729181641014"></a><a name="b729181641014"></a>virsh shutdown </strong>&lt;<em id="i4966101010166"><a name="i4966101010166"></a><a name="i4966101010166"></a>VMInstanse</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p17319175773610"><a name="p17319175773610"></a><a name="p17319175773610"></a>Shut down the VM. Start the VM shutdown process. If the VM fails to be shut down, forcibly stop it.</p>
</td>
</tr>
<tr id="row9896134210612"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p929111641011"><a name="p929111641011"></a><a name="p929111641011"></a><strong id="b529191691010"><a name="b529191691010"></a><a name="b529191691010"></a>virsh destroy </strong>&lt;<em id="i694273815180"><a name="i694273815180"></a><a name="i694273815180"></a>VMInstanse</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p1029271671016"><a name="p1029271671016"></a><a name="p1029271671016"></a>Forcibly stop the VM.</p>
</td>
</tr>
<tr id="row108969421161"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p5292191611016"><a name="p5292191611016"></a><a name="p5292191611016"></a><strong id="b112925167108"><a name="b112925167108"></a><a name="b112925167108"></a>virsh reboot </strong>&lt;<em id="i3983440111815"><a name="i3983440111815"></a><a name="i3983440111815"></a>VMInstanse</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p32921616111019"><a name="p32921616111019"></a><a name="p32921616111019"></a>Reboot the VM.</p>
</td>
</tr>
<tr id="row48973421767"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p1424561235"><a name="p1424561235"></a><a name="p1424561235"></a><strong id="b8424261833"><a name="b8424261833"></a><a name="b8424261833"></a>virsh save </strong> &lt;<em id="i163855131814"><a name="i163855131814"></a><a name="i163855131814"></a>VMInstanse</em>&gt; &lt;<em id="i43271518136"><a name="i43271518136"></a><a name="i43271518136"></a>DumpFile</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p3292916151012"><a name="p3292916151012"></a><a name="p3292916151012"></a>Dump the VM running status to a file.</p>
</td>
</tr>
<tr id="row7171162171019"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p136882812108"><a name="p136882812108"></a><a name="p136882812108"></a><strong id="b86802814106"><a name="b86802814106"></a><a name="b86802814106"></a>virsh restore </strong>&lt;<em id="i119924133319"><a name="i119924133319"></a><a name="i119924133319"></a>DumpFile</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p868182841017"><a name="p868182841017"></a><a name="p868182841017"></a>Restore the VM from the VM status dump file.</p>
</td>
</tr>
<tr id="row1117211217102"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p669328161014"><a name="p669328161014"></a><a name="p669328161014"></a><strong id="b106918286103"><a name="b106918286103"></a><a name="b106918286103"></a>virsh suspend </strong>&lt;<em id="i215106151910"><a name="i215106151910"></a><a name="i215106151910"></a>VMInstanse</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p1069182871017"><a name="p1069182871017"></a><a name="p1069182871017"></a>Suspend the VM to make the VM in the paused status.</p>
</td>
</tr>
<tr id="row1917215213101"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p16691428161011"><a name="p16691428161011"></a><a name="p16691428161011"></a><strong id="b1869132812100"><a name="b1869132812100"></a><a name="b1869132812100"></a>virsh resume </strong>&lt;<em id="i14154151015192"><a name="i14154151015192"></a><a name="i14154151015192"></a>VMInstanse</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p469328141011"><a name="p469328141011"></a><a name="p469328141011"></a>Resume the VM and restore the VM in the paused status to the running status.</p>
</td>
</tr>
<tr id="row11173921141013"><td class="cellrowborder" valign="top" width="31.669999999999998%" headers="mcps1.2.3.1.1 "><p id="p1569162812109"><a name="p1569162812109"></a><a name="p1569162812109"></a><strong id="b136913287105"><a name="b136913287105"></a><a name="b136913287105"></a>virsh undefine </strong>&lt;<em id="i2597181811911"><a name="i2597181811911"></a><a name="i2597181811911"></a>VMInstanse</em>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="68.33%" headers="mcps1.2.3.1.2 "><p id="p369122819106"><a name="p369122819106"></a><a name="p369122819106"></a>After a persistent VM is destroyed, the VM lifecycle ends and no more operations can be performed on the VM.</p>
</td>
</tr>
</tbody>
</table>

