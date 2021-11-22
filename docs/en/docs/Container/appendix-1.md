## Appendix

- [Appendix](#appendix-1)
    - [Command Line Interface List](#command-line-interface-list)


## Command Line Interface List

This section lists commands in system containers, which are different from those in common containers. For details about other commands, refer to sections related to the iSulad container engine or run the  **isula _XXX_ --help**  command.


<table><thead align="left"><tr id="en-us_topic_0182200851_row106622062718"><th class="cellrowborder" valign="top" width="15.909999999999998%" id="mcps1.1.4.1.1"><p id="en-us_topic_0182200851_p66628072719"><a name="en-us_topic_0182200851_p66628072719"></a><a name="en-us_topic_0182200851_p66628072719"></a><strong id="en-us_topic_0182200851_b18161020581"><a name="en-us_topic_0182200851_b18161020581"></a><a name="en-us_topic_0182200851_b18161020581"></a>Command</strong></p>
</th>
<th class="cellrowborder" valign="top" width="20.96%" id="mcps1.1.4.1.2"><p id="en-us_topic_0182200851_p180520291382"><a name="en-us_topic_0182200851_p180520291382"></a><a name="en-us_topic_0182200851_p180520291382"></a>Parameters</p>
</th>
<th class="cellrowborder" valign="top" width="63.129999999999995%" id="mcps1.1.4.1.3"><p id="en-us_topic_0182200851_p16630017279"><a name="en-us_topic_0182200851_p16630017279"></a><a name="en-us_topic_0182200851_p16630017279"></a><strong id="en-us_topic_0182200851_b1395042317817"><a name="en-us_topic_0182200851_b1395042317817"></a><a name="en-us_topic_0182200851_b1395042317817"></a>Value Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0182200851_row1566315011273"><td class="cellrowborder" rowspan="13" valign="top" width="15.909999999999998%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p19663103273"><a name="en-us_topic_0182200851_p19663103273"></a><a name="en-us_topic_0182200851_p19663103273"></a>isula create/run</p>
</td>
<td class="cellrowborder" valign="top" width="20.96%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200851_p13133631162711"><a name="en-us_topic_0182200851_p13133631162711"></a><a name="en-us_topic_0182200851_p13133631162711"></a>--external-rootfs</p>
</td>
<td class="cellrowborder" valign="top" width="63.129999999999995%" headers="mcps1.1.4.1.3 "><a name="en-us_topic_0182200851_ul9563151193112"></a><a name="en-us_topic_0182200851_ul9563151193112"></a><ul id="en-us_topic_0182200851_ul9563151193112"><li>Variable of the string type.</li><li>Absolute path on the host.</li><li>Specifies the rootfs of a VM when running a system container.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200851_row16284133542717"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p1244444320276"><a name="en-us_topic_0182200851_p1244444320276"></a><a name="en-us_topic_0182200851_p1244444320276"></a>--system-container</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul29491493213"></a><a name="en-us_topic_0182200851_ul29491493213"></a><ul id="en-us_topic_0182200851_ul29491493213"><li>Boolean variable.</li><li>Specifies whether a container is a system container. In a system container scenario, this function must be enabled.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200851_row73694524302"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p84168531305"><a name="en-us_topic_0182200851_p84168531305"></a><a name="en-us_topic_0182200851_p84168531305"></a>--add-host</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul599565718433"></a><a name="en-us_topic_0182200851_ul599565718433"></a><ul id="en-us_topic_0182200851_ul599565718433"><li>Variable of the string type.</li><li>Specifies the hosts configuration for a container. The format is <em id="en-us_topic_0182200851_i1917619362501"><a name="en-us_topic_0182200851_i1917619362501"></a><a name="en-us_topic_0182200851_i1917619362501"></a>hostname</em><strong id="en-us_topic_0182200851_b560311311504"><a name="en-us_topic_0182200851_b560311311504"></a><a name="en-us_topic_0182200851_b560311311504"></a>:</strong><em id="en-us_topic_0182200851_i1852274411506"><a name="en-us_topic_0182200851_i1852274411506"></a><a name="en-us_topic_0182200851_i1852274411506"></a>ip</em>. Multiple values can be set.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200851_row136653112315"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p14571723318"><a name="en-us_topic_0182200851_p14571723318"></a><a name="en-us_topic_0182200851_p14571723318"></a>--dns, --dns-option, --dns-search</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul1203182244412"></a><a name="en-us_topic_0182200851_ul1203182244412"></a><ul id="en-us_topic_0182200851_ul1203182244412"><li>Variable of the string type.</li><li>Specifies the DNS configuration for a container. Multiple values can be set.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200851_row2222848182715"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p182891218289"><a name="en-us_topic_0182200851_p182891218289"></a><a name="en-us_topic_0182200851_p182891218289"></a>--ns-change-opt</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul4651332104415"></a><a name="en-us_topic_0182200851_ul4651332104415"></a><ul id="en-us_topic_0182200851_ul4651332104415"><li>Variable of the string type.</li><li>Container namespace kernel parameter. The value can only be <strong id="en-us_topic_0182200851_b2640012087"><a name="en-us_topic_0182200851_b2640012087"></a><a name="en-us_topic_0182200851_b2640012087"></a>net</strong> or <strong id="en-us_topic_0182200851_b105501731187"><a name="en-us_topic_0182200851_b105501731187"></a><a name="en-us_topic_0182200851_b105501731187"></a>ipc</strong>. If multiple values are set, separate them with commas (,), for example, <strong id="en-us_topic_0182200851_b103659915810"><a name="en-us_topic_0182200851_b103659915810"></a><a name="en-us_topic_0182200851_b103659915810"></a>--ns-change-opt=net,ipc</strong>.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200851_row1165111213119"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p82999175019"><a name="en-us_topic_0182200851_p82999175019"></a><a name="en-us_topic_0182200851_p82999175019"></a>--oom-kill-disable</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul7426436445"></a><a name="en-us_topic_0182200851_ul7426436445"></a><ul id="en-us_topic_0182200851_ul7426436445"><li>Boolean variable.</li><li>Indicates whether to enable the oom-kill-disable function.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200851_row104632712116"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p1813461625011"><a name="en-us_topic_0182200851_p1813461625011"></a><a name="en-us_topic_0182200851_p1813461625011"></a>--shm-size</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul116272884512"></a><a name="en-us_topic_0182200851_ul116272884512"></a><ul id="en-us_topic_0182200851_ul116272884512"><li>Variable of the string type.</li><li>Sets the size of <strong id="en-us_topic_0182200851_b108381026583"><a name="en-us_topic_0182200851_b108381026583"></a><a name="en-us_topic_0182200851_b108381026583"></a>/dev/shm</strong>. The default value is <strong id="en-us_topic_0182200851_b04361358814"><a name="en-us_topic_0182200851_b04361358814"></a><a name="en-us_topic_0182200851_b04361358814"></a>64 MB</strong>. The unit can be byte (B), kilobyte (KB), megabyte (MB), gigabyte (GB), terabyte (TB), or petabyte (PB).</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200851_row16585112119283"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p1615315468296"><a name="en-us_topic_0182200851_p1615315468296"></a><a name="en-us_topic_0182200851_p1615315468296"></a>--sysctl</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul1049333019450"></a><a name="en-us_topic_0182200851_ul1049333019450"></a><ul id="en-us_topic_0182200851_ul1049333019450"><li>Variable of the string type.</li><li>Specifies container kernel parameters. The format is <strong id="en-us_topic_0182200851_b13199142535317"><a name="en-us_topic_0182200851_b13199142535317"></a><a name="en-us_topic_0182200851_b13199142535317"></a>key=value</strong>. Multiple values can be set. The sysctl whitelist is as follows:</li></ul>
<p id="en-us_topic_0182200851_p12153124682910"><a name="en-us_topic_0182200851_p12153124682910"></a><a name="en-us_topic_0182200851_p12153124682910"></a><strong id="en-us_topic_0182200851_b6638192131117"><a name="en-us_topic_0182200851_b6638192131117"></a><a name="en-us_topic_0182200851_b6638192131117"></a>kernel.msgmax</strong>, <strong id="en-us_topic_0182200851_b8694131541112"><a name="en-us_topic_0182200851_b8694131541112"></a><a name="en-us_topic_0182200851_b8694131541112"></a>kernel.msgmnb</strong>, <strong id="en-us_topic_0182200851_b15991720141118"><a name="en-us_topic_0182200851_b15991720141118"></a><a name="en-us_topic_0182200851_b15991720141118"></a>kernel.msgmni</strong>, <strong id="en-us_topic_0182200851_b2072042317116"><a name="en-us_topic_0182200851_b2072042317116"></a><a name="en-us_topic_0182200851_b2072042317116"></a>kernel.sem</strong>, <strong id="en-us_topic_0182200851_b18928157181313"><a name="en-us_topic_0182200851_b18928157181313"></a><a name="en-us_topic_0182200851_b18928157181313"></a>kernel.shmall</strong>, <strong id="en-us_topic_0182200851_b1824819275138"><a name="en-us_topic_0182200851_b1824819275138"></a><a name="en-us_topic_0182200851_b1824819275138"></a>kernel.shmmax</strong>, <strong id="en-us_topic_0182200851_b193201916161319"><a name="en-us_topic_0182200851_b193201916161319"></a><a name="en-us_topic_0182200851_b193201916161319"></a>kernel.shmmni</strong>, <strong id="en-us_topic_0182200851_b184081032191315"><a name="en-us_topic_0182200851_b184081032191315"></a><a name="en-us_topic_0182200851_b184081032191315"></a>kernel.shm_rmid_forced</strong>, <strong id="en-us_topic_0182200851_b3793163618133"><a name="en-us_topic_0182200851_b3793163618133"></a><a name="en-us_topic_0182200851_b3793163618133"></a>kernel.pid_max</strong>, <strong id="en-us_topic_0182200851_b2737839151312"><a name="en-us_topic_0182200851_b2737839151312"></a><a name="en-us_topic_0182200851_b2737839151312"></a>net.</strong>, and <strong id="en-us_topic_0182200851_b16513245131317"><a name="en-us_topic_0182200851_b16513245131317"></a><a name="en-us_topic_0182200851_b16513245131317"></a>fs.mqueue</strong></p>
<div class="note" id="en-us_topic_0182200851_note72211527326"><a name="en-us_topic_0182200851_note72211527326"></a><a name="en-us_topic_0182200851_note72211527326"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0182200851_p1723145210324"><a name="en-us_topic_0182200851_p1723145210324"></a><a name="en-us_topic_0182200851_p1723145210324"></a>The <strong id="en-us_topic_0182200851_b20727015125414"><a name="en-us_topic_0182200851_b20727015125414"></a><a name="en-us_topic_0182200851_b20727015125414"></a>kernel.pid_max</strong> kernel parameter in a container must be able to be namespaced. Otherwise, an error is reported.</p>
<p id="en-us_topic_0182200851_p109360115251"><a name="en-us_topic_0182200851_p109360115251"></a><a name="en-us_topic_0182200851_p109360115251"></a>Parameter restrictions (including the parameter types and value ranges) of the sysctl whitelist in a container must be the same as those of kernel parameters in the physical machine.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0182200851_row785516578292"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p4481659122913"><a name="en-us_topic_0182200851_p4481659122913"></a><a name="en-us_topic_0182200851_p4481659122913"></a>--env-target-file</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul548533917455"></a><a name="en-us_topic_0182200851_ul548533917455"></a><ul id="en-us_topic_0182200851_ul548533917455"><li>Variable of the string type.</li><li>Specifies the <strong id="en-us_topic_0182200851_b177147453159"><a name="en-us_topic_0182200851_b177147453159"></a><a name="en-us_topic_0182200851_b177147453159"></a>env</strong> persistent file path. (The path must be an absolute path and the file must be in the rootfs directory.) The file size cannot exceed 10 MB. If the value of <strong id="en-us_topic_0182200851_b2325106201815"><a name="en-us_topic_0182200851_b2325106201815"></a><a name="en-us_topic_0182200851_b2325106201815"></a>--env</strong> conflicts with that of <strong id="en-us_topic_0182200851_b15566692184"><a name="en-us_topic_0182200851_b15566692184"></a><a name="en-us_topic_0182200851_b15566692184"></a>env</strong> in the file, the value of <strong id="en-us_topic_0182200851_b14901201691816"><a name="en-us_topic_0182200851_b14901201691816"></a><a name="en-us_topic_0182200851_b14901201691816"></a>--env</strong> takes effect.</li><li>The root directory of the absolute path is the rootfs root directory. That is, to set the file path to <strong id="en-us_topic_0182200851_b88958416182"><a name="en-us_topic_0182200851_b88958416182"></a><a name="en-us_topic_0182200851_b88958416182"></a>/etc/environment</strong> in the container, you need to specify <strong id="en-us_topic_0182200851_b31111148171812"><a name="en-us_topic_0182200851_b31111148171812"></a><a name="en-us_topic_0182200851_b31111148171812"></a>env-target-file=/etc/environment</strong> only.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200851_row6385192913114"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p738518292315"><a name="en-us_topic_0182200851_p738518292315"></a><a name="en-us_topic_0182200851_p738518292315"></a>--cgroup-parent</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul12599144954515"></a><a name="en-us_topic_0182200851_ul12599144954515"></a><ul id="en-us_topic_0182200851_ul12599144954515"><li>Variable of the string type.</li><li>Specifies the cgroup parent directory of a container. The cgroup root directory is <strong id="en-us_topic_0182200851_b19448134095418"><a name="en-us_topic_0182200851_b19448134095418"></a><a name="en-us_topic_0182200851_b19448134095418"></a>/sys/fs/cgroup/</strong><em id="en-us_topic_0182200851_i1273654375411"><a name="en-us_topic_0182200851_i1273654375411"></a><a name="en-us_topic_0182200851_i1273654375411"></a>controller</em>.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200851_row683110439325"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p188311043163218"><a name="en-us_topic_0182200851_p188311043163218"></a><a name="en-us_topic_0182200851_p188311043163218"></a>--host-channel</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul79431858144512"></a><a name="en-us_topic_0182200851_ul79431858144512"></a><ul id="en-us_topic_0182200851_ul79431858144512"><li>Variable of the string type.</li><li>Specifies the memory space shared between the host and a container (tmpfs). The format is as follows:</li></ul>
<p id="en-us_topic_0182200851_p890713489326"><a name="en-us_topic_0182200851_p890713489326"></a><a name="en-us_topic_0182200851_p890713489326"></a><em id="en-us_topic_0182200851_i178695407572"><a name="en-us_topic_0182200851_i178695407572"></a><a name="en-us_topic_0182200851_i178695407572"></a>host path</em><strong id="en-us_topic_0182200851_b97435307574"><a name="en-us_topic_0182200851_b97435307574"></a><a name="en-us_topic_0182200851_b97435307574"></a>:</strong><em id="en-us_topic_0182200851_i196621344115715"><a name="en-us_topic_0182200851_i196621344115715"></a><a name="en-us_topic_0182200851_i196621344115715"></a>container path</em><strong id="en-us_topic_0182200851_b432773325718"><a name="en-us_topic_0182200851_b432773325718"></a><a name="en-us_topic_0182200851_b432773325718"></a>:</strong><em id="en-us_topic_0182200851_i20622547105720"><a name="en-us_topic_0182200851_i20622547105720"></a><a name="en-us_topic_0182200851_i20622547105720"></a>rw/ro</em><strong id="en-us_topic_0182200851_b39191737165718"><a name="en-us_topic_0182200851_b39191737165718"></a><a name="en-us_topic_0182200851_b39191737165718"></a>:</strong><em id="en-us_topic_0182200851_i547115019571"><a name="en-us_topic_0182200851_i547115019571"></a><a name="en-us_topic_0182200851_i547115019571"></a>size limit</em></p>
</td>
</tr>
<tr id="en-us_topic_0182200851_row69531255173313"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p5953145533310"><a name="en-us_topic_0182200851_p5953145533310"></a><a name="en-us_topic_0182200851_p5953145533310"></a>--files-limit</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul187604954614"></a><a name="en-us_topic_0182200851_ul187604954614"></a><ul id="en-us_topic_0182200851_ul187604954614"><li>Variable of the string type.</li><li>Specifies the maximum number of file handles in a container. The value must be an integer.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200851_row12779102883511"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200851_p08101647154218"><a name="en-us_topic_0182200851_p08101647154218"></a><a name="en-us_topic_0182200851_p08101647154218"></a>--user-remap</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0182200851_ul11570181919467"></a><a name="en-us_topic_0182200851_ul11570181919467"></a><ul id="en-us_topic_0182200851_ul11570181919467"><li>Variable of the string type.</li><li>The parameter format is <em id="en-us_topic_0182200851_i10515346912"><a name="en-us_topic_0182200851_i10515346912"></a><a name="en-us_topic_0182200851_i10515346912"></a>uid</em><strong id="en-us_topic_0182200851_b1883613441795"><a name="en-us_topic_0182200851_b1883613441795"></a><a name="en-us_topic_0182200851_b1883613441795"></a>:</strong><em id="en-us_topic_0182200851_i044312380910"><a name="en-us_topic_0182200851_i044312380910"></a><a name="en-us_topic_0182200851_i044312380910"></a>gid</em><strong id="en-us_topic_0182200851_b88941649494"><a name="en-us_topic_0182200851_b88941649494"></a><a name="en-us_topic_0182200851_b88941649494"></a>:</strong><em id="en-us_topic_0182200851_i132911841598"><a name="en-us_topic_0182200851_i132911841598"></a><a name="en-us_topic_0182200851_i132911841598"></a>offset</em>.</li></ul>
</td>
</tr>
</tbody>
</table>
