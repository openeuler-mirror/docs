# About This Document <a name="EN-US_TOPIC_0183674366"></a>

## Overview<a name="section4537382116410"></a>

The openEuler software package provides iSula, the basic platform for running containers.

iSula is a brand of Huawei's container technology solution. It originally means a kind of ant. This ant is also known as "bullet ant" due to the extremely painful sting, which has been compared to being shot by a bullet. In the eyes of Brazilian natives living in the Amazon jungle in Central and South America, iSula is one of the most powerful insects in the world. Huawei names the container technology solution brand based on its meaning.

The basic container platform iSula provides both Docker engine and lightweight container engine iSulad. You can select either of them as required.

In addition, the following container forms are provided on different application scenarios:

-   Common containers applicable to most common scenarios
-   Secure containers applicable to strong isolation and multi-tenant scenarios
-   System containers applicable to scenarios where the systemd is used to manage services

This document describes how to install and use the container engines and how to deploy and use containers in different forms.

## Intended Audience<a name="section4378592816410"></a>

This document is intended for openEuler users who need to install containers. You can better understand this document if you:

-   Be familiar with basic Linux operations.
-   Have a basic understanding of containers.

## Symbol Conventions<a name="section133020216410"></a>

The symbols that may be found in this document are defined as follows.

<a name="table17522428316"></a>
<table><thead align="left"><tr id="row25221921314"><th class="cellrowborder" valign="top" width="20.580000000000002%" id="mcps1.1.3.1.1"><p id="p252214203118"><a name="p252214203118"></a><a name="p252214203118"></a><strong id="b2136615816410"><a name="b2136615816410"></a><a name="b2136615816410"></a>Symbol</strong></p>
</th>
<th class="cellrowborder" valign="top" width="79.42%" id="mcps1.1.3.1.2"><p id="p1352216215311"><a name="p1352216215311"></a><a name="p1352216215311"></a><strong id="b4522132153120"><a name="b4522132153120"></a><a name="b4522132153120"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row20523729310"><td class="cellrowborder" valign="top" width="20.580000000000002%" headers="mcps1.1.3.1.1 "><p id="p9523172173116"><a name="p9523172173116"></a><a name="p9523172173116"></a><a name="image185230243117"></a><a name="image185230243117"></a><span><img class="" id="image185230243117" height="25.270000000000003" width="55.9265" src="figures/en-us_image_0221924926.png"></span></p>
</td>
<td class="cellrowborder" valign="top" width="79.42%" headers="mcps1.1.3.1.2 "><p id="p1052314233112"><a name="p1052314233112"></a><a name="p1052314233112"></a>Indicates a potentially hazardous situation which, if not avoided, could result in equipment damage, data loss, performance deterioration, or unanticipated results.</p>
<p id="p125237214313"><a name="p125237214313"></a><a name="p125237214313"></a>NOTICE is used to address practices not related to personal injury.</p>
</td>
</tr>
<tr id="row1652315219312"><td class="cellrowborder" valign="top" width="20.580000000000002%" headers="mcps1.1.3.1.1 "><p id="p1552314223110"><a name="p1552314223110"></a><a name="p1552314223110"></a><a name="image1452315212316"></a><a name="image1452315212316"></a><span><img class="" id="image1452315212316" height="15.96" width="47.88" src="figures/en-us_image_0221924927.png"></span></p>
</td>
<td class="cellrowborder" valign="top" width="79.42%" headers="mcps1.1.3.1.2 "><p id="p952316210315"><a name="p952316210315"></a><a name="p952316210315"></a>Supplements the important information in the main text.</p>
<p id="p1952320210313"><a name="p1952320210313"></a><a name="p1952320210313"></a>NOTE is used to address information not related to personal injury, equipment damage, and environment deterioration.</p>
</td>
</tr>
</tbody>
</table>

