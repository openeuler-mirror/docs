# 应用开发指南

本文档简要介绍应用程序开发需要的常用工具，以指导用户使用openEuler并基于openEuler进行应用程序开发。

## 概述

本文档主要介绍如下四部分内容，以指导用户使用openEuler并基于openEuler进行代码开发。

-   在openEuler系统中安装和使用GCC编译器，并完成一个简单代码的开发、编译和执行。
-   在openEuler系统中使用JDK自带工具完成代码的编译和执行。
-   在openEuler系统中安装IntelliJ IDEA进行Java开发。
-   在本地或使用OBS（Open Build Service）创建RPM（The RPM Package Manager）软件包的方法。

## 读者对象

本文档适用于所有使用openEuler操作系统进行代码开发的用户。用户需要具备如下经验或能力：

-   具备Linux操作系统基础知识
-   了解Linux命令行的基本使用方法

## 符号约定

在本文中可能出现下列标志，它们所代表的含义如下。

<a name="table2622507016410"></a>
<table><thead align="left"><tr id="row1530720816410"><th class="cellrowborder" valign="top" width="20.580000000000002%" id="mcps1.1.3.1.1"><p id="p6450074116410"><a name="p6450074116410"></a><a name="p6450074116410"></a><strong id="b2136615816410"><a name="b2136615816410"></a><a name="b2136615816410"></a>符号</strong></p>
</th>
<th class="cellrowborder" valign="top" width="79.42%" id="mcps1.1.3.1.2"><p id="p5435366816410"><a name="p5435366816410"></a><a name="p5435366816410"></a><strong id="b5941558116410"><a name="b5941558116410"></a><a name="b5941558116410"></a>说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row5786682116410"><td class="cellrowborder" valign="top" width="20.580000000000002%" headers="mcps1.1.3.1.1 "><p id="p2204984716410"><a name="p2204984716410"></a><a name="p2204984716410"></a><a name="image4504446716410"></a><a name="image4504446716410"></a><span><img class="" id="image4504446716410" height="25.270000000000003" width="55.9265" src="figures/zh-cn_image_0229243712.png"></span></p>
</td>
<td class="cellrowborder" valign="top" width="79.42%" headers="mcps1.1.3.1.2 "><p id="p4388861916410"><a name="p4388861916410"></a><a name="p4388861916410"></a>用于传递设备或环境安全警示信息，若不避免，可能会导致设备损坏、数据丢失、设备性能降低或其它不可预知的结果。</p>
<p id="p1238861916410"><a name="p1238861916410"></a><a name="p1238861916410"></a>“注意”不涉及人身伤害。</p>
</td>
</tr>
<tr id="row2856923116410"><td class="cellrowborder" valign="top" width="20.580000000000002%" headers="mcps1.1.3.1.1 "><p id="p5555360116410"><a name="p5555360116410"></a><a name="p5555360116410"></a><a name="image799324016410"></a><a name="image799324016410"></a><span><img class="" id="image799324016410" height="15.96" width="47.88" src="figures/zh-cn_image_0229243671.png"></span></p>
</td>
<td class="cellrowborder" valign="top" width="79.42%" headers="mcps1.1.3.1.2 "><p id="p4612588116410"><a name="p4612588116410"></a><a name="p4612588116410"></a>用于突出重要/关键信息、最佳实践和小窍门等。</p>
<p id="p1232588116410"><a name="p1232588116410"></a><a name="p1232588116410"></a>“说明”不是安全警示信息，不涉及人身、设备及环境伤害。</p>
</td>
</tr>
</tbody>
</table>

## 命令行格式约定

**表 1**  命令行格式的约定

<a name="it_osca_smma_400004_mmccppss_tab01"></a>
<table><thead align="left"><tr id="row31344565"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p55881847"><a name="p55881847"></a><a name="p55881847"></a>格式</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p30135782"><a name="p30135782"></a><a name="p30135782"></a>含义</p>
</th>
</tr>
</thead>
<tbody><tr id="row25079273"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p18155241"><a name="p18155241"></a><a name="p18155241"></a><strong id="b29179443"><a name="b29179443"></a><a name="b29179443"></a>粗体</strong></p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p14724664"><a name="p14724664"></a><a name="p14724664"></a>命令行关键字，即命令中保持不变、必须照输的部分，采用<strong id="b65413118"><a name="b65413118"></a><a name="b65413118"></a>加粗</strong>字体表示。</p>
</td>
</tr>
<tr id="row51847150"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p38869628"><a name="p38869628"></a><a name="p38869628"></a><em id="i14282340"><a name="i14282340"></a><a name="i14282340"></a>斜体</em></p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p16018923"><a name="p16018923"></a><a name="p16018923"></a>命令行参数，即命令中必须由实际值进行替代的部分，采用<em id="i9952579"><a name="i9952579"></a><a name="i9952579"></a>斜体</em>表示。</p>
</td>
</tr>
<tr id="row22464349"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p7672996"><a name="p7672996"></a><a name="p7672996"></a>[ ]</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p17532968"><a name="p17532968"></a><a name="p17532968"></a>用“[ ]”括起来的部分表示在命令配置时是可选的。</p>
</td>
</tr>
<tr id="row23578988"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p30849877"><a name="p30849877"></a><a name="p30849877"></a>{ x | y | ... }</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p15812143"><a name="p15812143"></a><a name="p15812143"></a>表示从两个或多个选项中选取一个。</p>
</td>
</tr>
<tr id="row8091566"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p51437108"><a name="p51437108"></a><a name="p51437108"></a>[ x | y | ... ]</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p5656190"><a name="p5656190"></a><a name="p5656190"></a>表示从两个或多个选项中选取一个或者不选。</p>
</td>
</tr>
<tr id="row50905712"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p29722012"><a name="p29722012"></a><a name="p29722012"></a>{ x | y | ... }<sup id="sup66171520"><a name="sup66171520"></a><a name="sup66171520"></a>*</sup></p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p58292871"><a name="p58292871"></a><a name="p58292871"></a>表示从两个或多个选项中选取多个，最少选取一个，最多选取所有选项。</p>
</td>
</tr>
<tr id="row54873797"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p15592595"><a name="p15592595"></a><a name="p15592595"></a>[ x | y | ... ]<sup id="sup6115628"><a name="sup6115628"></a><a name="sup6115628"></a>*</sup></p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p25603865"><a name="p25603865"></a><a name="p25603865"></a>表示从两个或多个选项中选取一个、多个或者不选。</p>
</td>
</tr>
</tbody>
</table>
