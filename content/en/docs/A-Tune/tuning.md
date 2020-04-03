# Tuning<a name="EN-US_TOPIC_0213225933"></a>

## Function<a name="section124121426195015"></a>

Use the specified project file to search the dynamic space for parameters and find the optimal solution under the current environment configuration.

## Format<a name="section17158022202716"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Before running the command, ensure that the following conditions are met:  
>1.  The YAML configuration file of the server has been edited and placed in the  **/etc/atuned/tuning/**  directory on the server by the server administrator.  
>2.  The YAML configuration file of the client has been edited and placed in an arbitrary directory on the client.  

**atune-adm tuning**  \[OPTIONS\] <PROJECT\_YAML\>

## Parameter Description<a name="section115471411105410"></a>

-   OPTIONS

    <a name="table128011465441"></a>
    <table><thead align="left"><tr id="row16801164620446"><th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.1"><p id="p4801046114412"><a name="p4801046114412"></a><a name="p4801046114412"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.1.3.1.2"><p id="p1280184654418"><a name="p1280184654418"></a><a name="p1280184654418"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row080110466442"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p108011346154411"><a name="p108011346154411"></a><a name="p108011346154411"></a>--restore, -r</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p1980144614414"><a name="p1980144614414"></a><a name="p1980144614414"></a>Restores the initial configuration before tuning.</p>
    </td>
    </tr>
    <tr id="row88018467448"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.1 "><p id="p78011346164417"><a name="p78011346164417"></a><a name="p78011346164417"></a>--project, -p</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.1.3.1.2 "><p id="p10802114624412"><a name="p10802114624412"></a><a name="p10802114624412"></a>Specifies the project name in the YAML file to be restored.</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The preceding two parameters must be used at the same time, and the -p parameter must be followed by the specific project name.  


-   **PROJECT\_YAML**: YAML configuration file of the client.

## Configuration Description<a name="section1489142862718"></a>

**Table  1**  YAML file on the server

<a name="table9580161612454"></a>
<table><thead align="left"><tr id="row45801216104518"><th class="cellrowborder" valign="top" width="16.84%" id="mcps1.2.5.1.1"><p id="p758011611453"><a name="p758011611453"></a><a name="p758011611453"></a><strong id="b1757615491541"><a name="b1757615491541"></a><a name="b1757615491541"></a>Name</strong> </p>
</th>
<th class="cellrowborder" valign="top" width="19.97%" id="mcps1.2.5.1.2"><p id="p13580916114518"><a name="p13580916114518"></a><a name="p13580916114518"></a><strong id="b15793456131912"><a name="b15793456131912"></a><a name="b15793456131912"></a>Description</strong></p>
</th>
<th class="cellrowborder" valign="top" width="15.72%" id="mcps1.2.5.1.3"><p id="p7580111618455"><a name="p7580111618455"></a><a name="p7580111618455"></a><strong id="b197931956141911"><a name="b197931956141911"></a><a name="b197931956141911"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="47.47%" id="mcps1.2.5.1.4"><p id="p1258071610456"><a name="p1258071610456"></a><a name="p1258071610456"></a><strong id="b328520511159"><a name="b328520511159"></a><a name="b328520511159"></a>Value Range</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row1858051613457"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p16580121634512"><a name="p16580121634512"></a><a name="p16580121634512"></a>project</p>
</td>
<td class="cellrowborder" valign="top" width="19.97%" headers="mcps1.2.5.1.2 "><p id="p175808167455"><a name="p175808167455"></a><a name="p175808167455"></a>Project name.</p>
</td>
<td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.3 "><p id="p1258061644510"><a name="p1258061644510"></a><a name="p1258061644510"></a>Character string</p>
</td>
<td class="cellrowborder" valign="top" width="47.47%" headers="mcps1.2.5.1.4 "><p id="p17580121684515"><a name="p17580121684515"></a><a name="p17580121684515"></a>-</p>
</td>
</tr>
<tr id="row65800162454"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p3580101619450"><a name="p3580101619450"></a><a name="p3580101619450"></a>startworkload</p>
</td>
<td class="cellrowborder" valign="top" width="19.97%" headers="mcps1.2.5.1.2 "><p id="p1158041617457"><a name="p1158041617457"></a><a name="p1158041617457"></a>Script for starting the service to be optimized.</p>
</td>
<td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.3 "><p id="p2580316124517"><a name="p2580316124517"></a><a name="p2580316124517"></a>Character string</p>
</td>
<td class="cellrowborder" valign="top" width="47.47%" headers="mcps1.2.5.1.4 "><p id="p165801116124518"><a name="p165801116124518"></a><a name="p165801116124518"></a>-</p>
</td>
</tr>
<tr id="row2580121624516"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p558015165459"><a name="p558015165459"></a><a name="p558015165459"></a>stopworkload</p>
</td>
<td class="cellrowborder" valign="top" width="19.97%" headers="mcps1.2.5.1.2 "><p id="p3580101614453"><a name="p3580101614453"></a><a name="p3580101614453"></a>Script for stopping the service to be optimized.</p>
</td>
<td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.3 "><p id="p1158051664512"><a name="p1158051664512"></a><a name="p1158051664512"></a>Character string</p>
</td>
<td class="cellrowborder" valign="top" width="47.47%" headers="mcps1.2.5.1.4 "><p id="p19580141614458"><a name="p19580141614458"></a><a name="p19580141614458"></a>-</p>
</td>
</tr>
<tr id="row195801316144516"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p1658011169457"><a name="p1658011169457"></a><a name="p1658011169457"></a>maxiterations</p>
</td>
<td class="cellrowborder" valign="top" width="19.97%" headers="mcps1.2.5.1.2 "><p id="p3580151613450"><a name="p3580151613450"></a><a name="p3580151613450"></a>Maximum number of optimization iterations, which is used to limit the number of iterations on the client. Generally, the more optimization iterations, the better the optimization effect, but the longer the time required. Set this parameter based on the site requirements.</p>
</td>
<td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.3 "><p id="p105801716174518"><a name="p105801716174518"></a><a name="p105801716174518"></a>Integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.47%" headers="mcps1.2.5.1.4 "><p id="p85805162457"><a name="p85805162457"></a><a name="p85805162457"></a>&gt;10</p>
</td>
</tr>
<tr id="row1458010169452"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p1058018160452"><a name="p1058018160452"></a><a name="p1058018160452"></a>object</p>
</td>
<td class="cellrowborder" valign="top" width="19.97%" headers="mcps1.2.5.1.2 "><p id="p1758011161451"><a name="p1758011161451"></a><a name="p1758011161451"></a>Parameters to be optimized and related information.</p>
<p id="p2058081616452"><a name="p2058081616452"></a><a name="p2058081616452"></a>For details about the object configuration items, see <a href="#table9803156161910">Table 2</a>.</p>
</td>
<td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.3 "><p id="p35801169454"><a name="p35801169454"></a><a name="p35801169454"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.47%" headers="mcps1.2.5.1.4 "><p id="p8580111694510"><a name="p8580111694510"></a><a name="p8580111694510"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Description of object configuration items

<a name="table9803156161910"></a>
<table><thead align="left"><tr id="row3800656151910"><th class="cellrowborder" valign="top" width="16.98%" id="mcps1.2.5.1.1"><p id="p3799185621910"><a name="p3799185621910"></a><a name="p3799185621910"></a><strong id="b295122519566"><a name="b295122519566"></a><a name="b295122519566"></a>Name</strong> </p>
</th>
<th class="cellrowborder" valign="top" width="20.18%" id="mcps1.2.5.1.2"><p id="p117991565191"><a name="p117991565191"></a><a name="p117991565191"></a><strong id="b972722710568"><a name="b972722710568"></a><a name="b972722710568"></a>Description</strong></p>
</th>
<th class="cellrowborder" valign="top" width="15.47%" id="mcps1.2.5.1.3"><p id="p479915569196"><a name="p479915569196"></a><a name="p479915569196"></a><strong id="b179965691915"><a name="b179965691915"></a><a name="b179965691915"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="47.370000000000005%" id="mcps1.2.5.1.4"><p id="p18799135691918"><a name="p18799135691918"></a><a name="p18799135691918"></a><strong id="b1572030135612"><a name="b1572030135612"></a><a name="b1572030135612"></a>Value Range</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row118001856111913"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p3800115661916"><a name="p3800115661916"></a><a name="p3800115661916"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p128005569191"><a name="p128005569191"></a><a name="p128005569191"></a>Parameter to be optimized.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p4800256101910"><a name="p4800256101910"></a><a name="p4800256101910"></a>Character string</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p380015681919"><a name="p380015681919"></a><a name="p380015681919"></a>-</p>
</td>
</tr>
<tr id="row1480055611196"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p2080075691918"><a name="p2080075691918"></a><a name="p2080075691918"></a>desc</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p128001256111918"><a name="p128001256111918"></a><a name="p128001256111918"></a>Description of parameters to be optimized.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p880019566191"><a name="p880019566191"></a><a name="p880019566191"></a>Character string</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p78004562190"><a name="p78004562190"></a><a name="p78004562190"></a>-</p>
</td>
</tr>
<tr id="row1680018561195"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p2080095621913"><a name="p2080095621913"></a><a name="p2080095621913"></a>get</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p9800256131914"><a name="p9800256131914"></a><a name="p9800256131914"></a>Script for querying parameter values.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p480085615191"><a name="p480085615191"></a><a name="p480085615191"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p15800656201915"><a name="p15800656201915"></a><a name="p15800656201915"></a>-</p>
</td>
</tr>
<tr id="row17801165613192"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p1880085631913"><a name="p1880085631913"></a><a name="p1880085631913"></a>set</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p168006565198"><a name="p168006565198"></a><a name="p168006565198"></a>Script for setting parameter values.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p1280035651911"><a name="p1280035651911"></a><a name="p1280035651911"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p68018563195"><a name="p68018563195"></a><a name="p68018563195"></a>-</p>
</td>
</tr>
<tr id="row180175621919"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p6801145621915"><a name="p6801145621915"></a><a name="p6801145621915"></a>needrestart</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p480111568197"><a name="p480111568197"></a><a name="p480111568197"></a>Specifies whether to restart the service for the parameter to take effect.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p8801155613194"><a name="p8801155613194"></a><a name="p8801155613194"></a>Enumeration</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p10801125615191"><a name="p10801125615191"></a><a name="p10801125615191"></a><strong id="b14130819162513"><a name="b14130819162513"></a><a name="b14130819162513"></a>true</strong> or <strong id="b13584321192514"><a name="b13584321192514"></a><a name="b13584321192514"></a>false</strong></p>
</td>
</tr>
<tr id="row180118564191"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p98015562190"><a name="p98015562190"></a><a name="p98015562190"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p3801195681916"><a name="p3801195681916"></a><a name="p3801195681916"></a>Parameter type. Currently, the <strong id="b152491516105914"><a name="b152491516105914"></a><a name="b152491516105914"></a>discrete</strong> and <strong id="b10883111875910"><a name="b10883111875910"></a><a name="b10883111875910"></a>continuous</strong> types are supported.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p17801195619197"><a name="p17801195619197"></a><a name="p17801195619197"></a>Enumeration</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p9801856171916"><a name="p9801856171916"></a><a name="p9801856171916"></a><strong id="b10872123252513"><a name="b10872123252513"></a><a name="b10872123252513"></a>discrete</strong> or <strong id="b2011454214250"><a name="b2011454214250"></a><a name="b2011454214250"></a>continuous</strong></p>
</td>
</tr>
<tr id="row1480275691918"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p78019565194"><a name="p78019565194"></a><a name="p78019565194"></a>dtype</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p17801756101914"><a name="p17801756101914"></a><a name="p17801756101914"></a>This parameter is available only when type is set to <strong id="b135607416711"><a name="b135607416711"></a><a name="b135607416711"></a>discrete</strong>. Currently, only <strong id="b1614114941020"><a name="b1614114941020"></a><a name="b1614114941020"></a>int</strong> and <strong id="b1768554171015"><a name="b1768554171015"></a><a name="b1768554171015"></a>string</strong> are supported.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p180145611193"><a name="p180145611193"></a><a name="p180145611193"></a>Enumeration</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p7801956171913"><a name="p7801956171913"></a><a name="p7801956171913"></a>int, string</p>
</td>
</tr>
<tr id="row280235612194"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p78027569198"><a name="p78027569198"></a><a name="p78027569198"></a>scope</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p180235617196"><a name="p180235617196"></a><a name="p180235617196"></a>Parameter setting range. This parameter is valid only when type is set to <strong id="b167741475107"><a name="b167741475107"></a><a name="b167741475107"></a>discrete</strong> and dtype is set to <strong id="b1169310171018"><a name="b1169310171018"></a><a name="b1169310171018"></a>int</strong>, or type is set to <strong id="b7331144104"><a name="b7331144104"></a><a name="b7331144104"></a>continuous</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p1780215617191"><a name="p1780215617191"></a><a name="p1780215617191"></a>Integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p1680255641916"><a name="p1680255641916"></a><a name="p1680255641916"></a>The value is user-defined and must be within the valid range of this parameter.</p>
</td>
</tr>
<tr id="row138022565199"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p880265681911"><a name="p880265681911"></a><a name="p880265681911"></a>step</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p6802256161918"><a name="p6802256161918"></a><a name="p6802256161918"></a>Parameter value step, which is used when <strong id="b13833241114316"><a name="b13833241114316"></a><a name="b13833241114316"></a>dtype</strong> is set to <strong id="b871165128"><a name="b871165128"></a><a name="b871165128"></a>int</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p198021156141918"><a name="p198021156141918"></a><a name="p198021156141918"></a>Integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p1180265619195"><a name="p1180265619195"></a><a name="p1180265619195"></a>This value is user-defined.</p>
</td>
</tr>
<tr id="row8802175611912"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p2802205614195"><a name="p2802205614195"></a><a name="p2802205614195"></a>items</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p5802105681916"><a name="p5802105681916"></a><a name="p5802105681916"></a>Enumerated value of which the parameter value is not within the scope. This is used when <strong id="b15657184154415"><a name="b15657184154415"></a><a name="b15657184154415"></a>dtype</strong> is set to <strong id="b15131115132"><a name="b15131115132"></a><a name="b15131115132"></a>int</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p28025564191"><a name="p28025564191"></a><a name="p28025564191"></a>Integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p980211562191"><a name="p980211562191"></a><a name="p980211562191"></a>The value is user-defined and must be within the valid range of this parameter.</p>
</td>
</tr>
<tr id="row188031256171916"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p14802165641912"><a name="p14802165641912"></a><a name="p14802165641912"></a>options</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p17802656201916"><a name="p17802656201916"></a><a name="p17802656201916"></a>Enumerated value range of the parameter value, which is used when <strong id="b23211832164418"><a name="b23211832164418"></a><a name="b23211832164418"></a>dtype</strong> is set to <strong id="b172537206518"><a name="b172537206518"></a><a name="b172537206518"></a>string</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p198025562197"><a name="p198025562197"></a><a name="p198025562197"></a>Character string</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p78039562198"><a name="p78039562198"></a><a name="p78039562198"></a>The value is user-defined and must be within the valid range of this parameter.</p>
</td>
</tr>
<tr id="row188031756141912"><td class="cellrowborder" valign="top" width="16.98%" headers="mcps1.2.5.1.1 "><p id="p10803205618199"><a name="p10803205618199"></a><a name="p10803205618199"></a>ref</p>
</td>
<td class="cellrowborder" valign="top" width="20.18%" headers="mcps1.2.5.1.2 "><p id="p18803205613196"><a name="p18803205613196"></a><a name="p18803205613196"></a>Recommended initial value of the parameter</p>
</td>
<td class="cellrowborder" valign="top" width="15.47%" headers="mcps1.2.5.1.3 "><p id="p580345612191"><a name="p580345612191"></a><a name="p580345612191"></a>Integer or character string</p>
</td>
<td class="cellrowborder" valign="top" width="47.370000000000005%" headers="mcps1.2.5.1.4 "><p id="p10803165631912"><a name="p10803165631912"></a><a name="p10803165631912"></a>The value is user-defined and must be within the valid range of this parameter.</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  Description of configuration items of a YAML file on the client

<a name="table114320101924"></a>
<table><thead align="left"><tr id="row84321410123"><th class="cellrowborder" valign="top" width="16.84%" id="mcps1.2.5.1.1"><p id="p7432201016216"><a name="p7432201016216"></a><a name="p7432201016216"></a><strong id="b85212388194"><a name="b85212388194"></a><a name="b85212388194"></a>Name</strong> </p>
</th>
<th class="cellrowborder" valign="top" width="19.97%" id="mcps1.2.5.1.2"><p id="p54328101323"><a name="p54328101323"></a><a name="p54328101323"></a><strong id="b94321810524"><a name="b94321810524"></a><a name="b94321810524"></a>Description</strong></p>
</th>
<th class="cellrowborder" valign="top" width="15.72%" id="mcps1.2.5.1.3"><p id="p20432191016216"><a name="p20432191016216"></a><a name="p20432191016216"></a><strong id="b243212101218"><a name="b243212101218"></a><a name="b243212101218"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="47.47%" id="mcps1.2.5.1.4"><p id="p3432171020211"><a name="p3432171020211"></a><a name="p3432171020211"></a><strong id="b134321910621"><a name="b134321910621"></a><a name="b134321910621"></a>Value Range</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row104321010525"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p17432141014217"><a name="p17432141014217"></a><a name="p17432141014217"></a>project</p>
</td>
<td class="cellrowborder" valign="top" width="19.97%" headers="mcps1.2.5.1.2 "><p id="p1443261017218"><a name="p1443261017218"></a><a name="p1443261017218"></a>Project name, which must be the same as that in the configuration file on the server.</p>
</td>
<td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.3 "><p id="p2432010828"><a name="p2432010828"></a><a name="p2432010828"></a>Character string</p>
</td>
<td class="cellrowborder" valign="top" width="47.47%" headers="mcps1.2.5.1.4 "><p id="p143215103213"><a name="p143215103213"></a><a name="p143215103213"></a>-</p>
</td>
</tr>
<tr id="row16432310326"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p17432191018213"><a name="p17432191018213"></a><a name="p17432191018213"></a>iterations</p>
</td>
<td class="cellrowborder" valign="top" width="19.97%" headers="mcps1.2.5.1.2 "><p id="p243217101521"><a name="p243217101521"></a><a name="p243217101521"></a>Number of optimization iterations.</p>
</td>
<td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.3 "><p id="p543211018210"><a name="p543211018210"></a><a name="p543211018210"></a>Integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.47%" headers="mcps1.2.5.1.4 "><p id="p1343231017218"><a name="p1343231017218"></a><a name="p1343231017218"></a>≥ 10</p>
</td>
</tr>
<tr id="row1543215101726"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p2043215101522"><a name="p2043215101522"></a><a name="p2043215101522"></a>benchmark</p>
</td>
<td class="cellrowborder" valign="top" width="19.97%" headers="mcps1.2.5.1.2 "><p id="p9432210228"><a name="p9432210228"></a><a name="p9432210228"></a>Performance test script.</p>
</td>
<td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.3 "><p id="p1543214101927"><a name="p1543214101927"></a><a name="p1543214101927"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.47%" headers="mcps1.2.5.1.4 "><p id="p443214107215"><a name="p443214107215"></a><a name="p443214107215"></a>-</p>
</td>
</tr>
<tr id="row84323102029"><td class="cellrowborder" valign="top" width="16.84%" headers="mcps1.2.5.1.1 "><p id="p18432111012218"><a name="p18432111012218"></a><a name="p18432111012218"></a>evaluations</p>
</td>
<td class="cellrowborder" valign="top" width="19.97%" headers="mcps1.2.5.1.2 "><p id="p6432121016218"><a name="p6432121016218"></a><a name="p6432121016218"></a>Performance test evaluation index.</p>
<p id="p1613443674418"><a name="p1613443674418"></a><a name="p1613443674418"></a>For details about the evaluations configuration items, see <a href="#table58847714266">Table 4</a>.</p>
</td>
<td class="cellrowborder" valign="top" width="15.72%" headers="mcps1.2.5.1.3 "><p id="p124321710422"><a name="p124321710422"></a><a name="p124321710422"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.47%" headers="mcps1.2.5.1.4 "><p id="p743214101326"><a name="p743214101326"></a><a name="p743214101326"></a>-</p>
</td>
</tr>
</tbody>
</table>

**Table  4**  Description of evaluations configuration item

<a name="table58847714266"></a>
<table><thead align="left"><tr id="row96719161245"><th class="cellrowborder" valign="top" width="12.950000000000001%" id="mcps1.2.5.1.1"><p id="p49973411241"><a name="p49973411241"></a><a name="p49973411241"></a><strong id="b17506714192519"><a name="b17506714192519"></a><a name="b17506714192519"></a>Name</strong> </p>
</th>
<th class="cellrowborder" valign="top" width="24.23%" id="mcps1.2.5.1.2"><p id="p119971941941"><a name="p119971941941"></a><a name="p119971941941"></a><strong id="b11997114111414"><a name="b11997114111414"></a><a name="b11997114111414"></a>Description</strong></p>
</th>
<th class="cellrowborder" valign="top" width="15.629999999999999%" id="mcps1.2.5.1.3"><p id="p1899784117416"><a name="p1899784117416"></a><a name="p1899784117416"></a><strong id="b29983411244"><a name="b29983411244"></a><a name="b29983411244"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="47.19%" id="mcps1.2.5.1.4"><p id="p1099814112416"><a name="p1099814112416"></a><a name="p1099814112416"></a><strong id="b19981411445"><a name="b19981411445"></a><a name="b19981411445"></a>Value Range</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row159636710262"><td class="cellrowborder" valign="top" width="12.950000000000001%" headers="mcps1.2.5.1.1 "><p id="p9963679262"><a name="p9963679262"></a><a name="p9963679262"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="24.23%" headers="mcps1.2.5.1.2 "><p id="p10963378267"><a name="p10963378267"></a><a name="p10963378267"></a>Evaluation index name.</p>
</td>
<td class="cellrowborder" valign="top" width="15.629999999999999%" headers="mcps1.2.5.1.3 "><p id="p86031433840"><a name="p86031433840"></a><a name="p86031433840"></a>Character string</p>
</td>
<td class="cellrowborder" valign="top" width="47.19%" headers="mcps1.2.5.1.4 "><p id="p247112292045"><a name="p247112292045"></a><a name="p247112292045"></a>-</p>
</td>
</tr>
<tr id="row496313714269"><td class="cellrowborder" valign="top" width="12.950000000000001%" headers="mcps1.2.5.1.1 "><p id="p696313782618"><a name="p696313782618"></a><a name="p696313782618"></a>get</p>
</td>
<td class="cellrowborder" valign="top" width="24.23%" headers="mcps1.2.5.1.2 "><p id="p16963147102617"><a name="p16963147102617"></a><a name="p16963147102617"></a>Script for obtaining performance evaluation results.</p>
</td>
<td class="cellrowborder" valign="top" width="15.629999999999999%" headers="mcps1.2.5.1.3 "><p id="p360310338414"><a name="p360310338414"></a><a name="p360310338414"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="47.19%" headers="mcps1.2.5.1.4 "><p id="p204715298417"><a name="p204715298417"></a><a name="p204715298417"></a>-</p>
</td>
</tr>
<tr id="row5963107142620"><td class="cellrowborder" valign="top" width="12.950000000000001%" headers="mcps1.2.5.1.1 "><p id="p169631073264"><a name="p169631073264"></a><a name="p169631073264"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="24.23%" headers="mcps1.2.5.1.2 "><p id="p29631478264"><a name="p29631478264"></a><a name="p29631478264"></a>Specifies a positive or negative type of the evaluation result. The value <strong id="b657222615267"><a name="b657222615267"></a><a name="b657222615267"></a>positive</strong> indicates that the performance value is minimized, and the value <strong id="b11324144120263"><a name="b11324144120263"></a><a name="b11324144120263"></a>negative</strong> indicates that the performance value is maximized.</p>
</td>
<td class="cellrowborder" valign="top" width="15.629999999999999%" headers="mcps1.2.5.1.3 "><p id="p76031331415"><a name="p76031331415"></a><a name="p76031331415"></a>Enumeration</p>
</td>
<td class="cellrowborder" valign="top" width="47.19%" headers="mcps1.2.5.1.4 "><p id="p1647116291411"><a name="p1647116291411"></a><a name="p1647116291411"></a><strong id="b103253213287"><a name="b103253213287"></a><a name="b103253213287"></a>positive</strong> or <strong id="b1348232420283"><a name="b1348232420283"></a><a name="b1348232420283"></a>negative</strong></p>
</td>
</tr>
<tr id="row59635792614"><td class="cellrowborder" valign="top" width="12.950000000000001%" headers="mcps1.2.5.1.1 "><p id="p096320712268"><a name="p096320712268"></a><a name="p096320712268"></a>weight</p>
</td>
<td class="cellrowborder" valign="top" width="24.23%" headers="mcps1.2.5.1.2 "><p id="p2096347192620"><a name="p2096347192620"></a><a name="p2096347192620"></a>Weight of the index. The value ranges from 0 to 100.</p>
</td>
<td class="cellrowborder" valign="top" width="15.629999999999999%" headers="mcps1.2.5.1.3 "><p id="p1666738163"><a name="p1666738163"></a><a name="p1666738163"></a>Integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.19%" headers="mcps1.2.5.1.4 "><p id="p154712292047"><a name="p154712292047"></a><a name="p154712292047"></a>0-100</p>
</td>
</tr>
<tr id="row17963117152615"><td class="cellrowborder" valign="top" width="12.950000000000001%" headers="mcps1.2.5.1.1 "><p id="p6963677267"><a name="p6963677267"></a><a name="p6963677267"></a>threshold</p>
</td>
<td class="cellrowborder" valign="top" width="24.23%" headers="mcps1.2.5.1.2 "><p id="p19632712261"><a name="p19632712261"></a><a name="p19632712261"></a>Minimum performance requirement of the index.</p>
</td>
<td class="cellrowborder" valign="top" width="15.629999999999999%" headers="mcps1.2.5.1.3 "><p id="p36031331245"><a name="p36031331245"></a><a name="p36031331245"></a>Integer</p>
</td>
<td class="cellrowborder" valign="top" width="47.19%" headers="mcps1.2.5.1.4 "><p id="p447132914413"><a name="p447132914413"></a><a name="p447132914413"></a>User-defined</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="section1660853192719"></a>

The following is an example of the YAML file configuration on a server:

```
project: "example"
maxiterations: 10
startworkload: ""
stopworkload: ""
object :
  -
    name : "vm.swappiness"
    info :
        desc : "the vm.swappiness"
        get : "sysctl -a | grep vm.swappiness"
        set : "sysctl -w vm.swappiness=$value"
        needrestart: "false"
        type : "continuous"
        scope :
          - 0
          - 10
        ref : 1
  -
    name : "irqbalance"
    info :
        desc : "system irqbalance"
        get : "systemctl status irqbalance"
        set : "systemctl $value sysmonitor;systemctl $value irqbalance"
        needrestart: "false"
        type : "discrete"
        options:
          - "start"
          - "stop"
        dtype : "string"
        ref : "start"
  -
    name : "net.tcp_min_tso_segs"
    info :
        desc : "the minimum tso number"
        get : "cat /proc/sys/net/ipv4/tcp_min_tso_segs"
        set : "echo $value > /proc/sys/net/ipv4/tcp_min_tso_segs"
        needrestart: "false"
        type : "continuous"
        scope:
          - 1
          - 16
        ref : 2
  -
    name : "prefetcher"
    info :
        desc : ""
        get : "cat /sys/class/misc/prefetch/policy"
        set : "echo $value > /sys/class/misc/prefetch/policy"
        needrestart: "false"
        type : "discrete"
        options:
          - "0"
          - "15"
        dtype : "string"
        ref : "15"
  -
    name : "kernel.sched_min_granularity_ns"
    info :
        desc : "Minimal preemption granularity for CPU-bound tasks"
        get : "sysctl kernel.sched_min_granularity_ns"
        set : "sysctl -w kernel.sched_min_granularity_ns=$value"
        needrestart: "false"
        type : "continuous"
        scope:
          - 5000000
          - 50000000
        ref : 10000000
  -
    name : "kernel.sched_latency_ns"
    info :
        desc : ""
        get : "sysctl kernel.sched_latency_ns"
        set : "sysctl -w kernel.sched_latency_ns=$value"
        needrestart: "false"
        type : "continuous"
        scope:
          - 10000000
          - 100000000
        ref : 16000000

```

  

The following is an example of the YAML file configuration on a client:

```
project: "example"
iterations : 10
benchmark : "sh /home/Benchmarks/mysql/tunning_mysql.sh"
evaluations :
  -
    name: "tps"
    info:
        get: "echo -e '$out' |grep 'transactions:' |awk '{print $3}' | cut -c 2-"
        type: "negative"
        weight: 100
        threshold: 100
```

  

## Example<a name="section5961238145111"></a>

-   Perform tuning.

    ```
    # atune-adm tuning example-client.yaml
    ```

-   Restore the initial configuration before tuning. The example value is the project name in the YAML file.

    ```
    # atune-adm tuning --restore --project example
    ```


