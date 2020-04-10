# Changing a Runlevel<a name="EN-US_TOPIC_0229622726"></a>

## Targets and Runlevels<a name="en-us_topic_0151920939_s41a63cf99f74431da4f8226fb8702bbb"></a>

In systemd, the concept of runlevels has been replaced with systemd targets to improve flexibility. For example, you can inherit an existing target and turn it into your own target by adding other services.  [Table 1](#en-us_topic_0151920939_t9af92c282ad240ea9a79fb08d26e8181)  provides a complete list of runlevels and their corresponding systemd targets.

**Table  1**  Mapping between runlevels and targets

<a name="en-us_topic_0151920939_t9af92c282ad240ea9a79fb08d26e8181"></a>
<table><thead align="left"><tr id="en-us_topic_0151920939_r6198e54b95054c25ad4cbf7f6a4d94a8"><th class="cellrowborder" valign="top" width="13.389999999999999%" id="mcps1.2.4.1.1"><p id="en-us_topic_0151920939_a8ca063ccd2b5493eaba60d772b3a210e"><a name="en-us_topic_0151920939_a8ca063ccd2b5493eaba60d772b3a210e"></a><a name="en-us_topic_0151920939_a8ca063ccd2b5493eaba60d772b3a210e"></a><strong id="en-us_topic_0151920939_b19983173191520"><a name="en-us_topic_0151920939_b19983173191520"></a><a name="en-us_topic_0151920939_b19983173191520"></a>Runlevel</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.53%" id="mcps1.2.4.1.2"><p id="en-us_topic_0151920939_ae345f9616c9e4b99b91537e14bf301fc"><a name="en-us_topic_0151920939_ae345f9616c9e4b99b91537e14bf301fc"></a><a name="en-us_topic_0151920939_ae345f9616c9e4b99b91537e14bf301fc"></a><strong id="en-us_topic_0151920939_b39909313153"><a name="en-us_topic_0151920939_b39909313153"></a><a name="en-us_topic_0151920939_b39909313153"></a>systemd Target</strong></p>
</th>
<th class="cellrowborder" valign="top" width="55.08%" id="mcps1.2.4.1.3"><p id="en-us_topic_0151920939_a51d30f31c3494031a3cb05ad3f0f83b0"><a name="en-us_topic_0151920939_a51d30f31c3494031a3cb05ad3f0f83b0"></a><a name="en-us_topic_0151920939_a51d30f31c3494031a3cb05ad3f0f83b0"></a><strong id="en-us_topic_0151920939_b139918317157"><a name="en-us_topic_0151920939_b139918317157"></a><a name="en-us_topic_0151920939_b139918317157"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0151920939_rf26e9f9e50504c07a370b9dc87a197c9"><td class="cellrowborder" valign="top" width="13.389999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920939_a6d80989a801f4bf4bb4546c17a7b3a33"><a name="en-us_topic_0151920939_a6d80989a801f4bf4bb4546c17a7b3a33"></a><a name="en-us_topic_0151920939_a6d80989a801f4bf4bb4546c17a7b3a33"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="31.53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920939_a7d9fff8415094170a9f174a1dc243183"><a name="en-us_topic_0151920939_a7d9fff8415094170a9f174a1dc243183"></a><a name="en-us_topic_0151920939_a7d9fff8415094170a9f174a1dc243183"></a>runlevel0.target, poweroff.target</p>
</td>
<td class="cellrowborder" valign="top" width="55.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920939_a70514fee2f27437cbae934e8c574f997"><a name="en-us_topic_0151920939_a70514fee2f27437cbae934e8c574f997"></a><a name="en-us_topic_0151920939_a70514fee2f27437cbae934e8c574f997"></a>The operating system is powered off.</p>
</td>
</tr>
<tr id="en-us_topic_0151920939_r1e5afff728cc4151b419680f76671293"><td class="cellrowborder" valign="top" width="13.389999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920939_a6bed301641504e7691830451ccd13084"><a name="en-us_topic_0151920939_a6bed301641504e7691830451ccd13084"></a><a name="en-us_topic_0151920939_a6bed301641504e7691830451ccd13084"></a>1, s, single</p>
</td>
<td class="cellrowborder" valign="top" width="31.53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920939_af07325c424aa41fd91422796a8c5530a"><a name="en-us_topic_0151920939_af07325c424aa41fd91422796a8c5530a"></a><a name="en-us_topic_0151920939_af07325c424aa41fd91422796a8c5530a"></a>runlevel1.target, rescue.target</p>
</td>
<td class="cellrowborder" valign="top" width="55.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920939_a835efcb9d2ec42219ba2cf84f320006d"><a name="en-us_topic_0151920939_a835efcb9d2ec42219ba2cf84f320006d"></a><a name="en-us_topic_0151920939_a835efcb9d2ec42219ba2cf84f320006d"></a>The operating system is in single user mode.</p>
</td>
</tr>
<tr id="en-us_topic_0151920939_re1071d4eed334f439f54040112b05c4a"><td class="cellrowborder" valign="top" width="13.389999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920939_en-us_topic_0072985277_p188013479275"><a name="en-us_topic_0151920939_en-us_topic_0072985277_p188013479275"></a><a name="en-us_topic_0151920939_en-us_topic_0072985277_p188013479275"></a>2, 4</p>
</td>
<td class="cellrowborder" valign="top" width="31.53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920939_a97565d2aa66a42bba4e87bd5a75413e8"><a name="en-us_topic_0151920939_a97565d2aa66a42bba4e87bd5a75413e8"></a><a name="en-us_topic_0151920939_a97565d2aa66a42bba4e87bd5a75413e8"></a>runlevel2.target, runlevel4.target, multi-user.target</p>
</td>
<td class="cellrowborder" valign="top" width="55.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920939_a99315964c38d404585856756e975fbfd"><a name="en-us_topic_0151920939_a99315964c38d404585856756e975fbfd"></a><a name="en-us_topic_0151920939_a99315964c38d404585856756e975fbfd"></a>The operating system is in user-defined or domain-specific runlevel (by default, it is equivalent to runlevel 3).</p>
</td>
</tr>
<tr id="en-us_topic_0151920939_rb065a846486b406690e8c4224a0a0ac9"><td class="cellrowborder" valign="top" width="13.389999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920939_en-us_topic_0072985277_p680154702718"><a name="en-us_topic_0151920939_en-us_topic_0072985277_p680154702718"></a><a name="en-us_topic_0151920939_en-us_topic_0072985277_p680154702718"></a>3</p>
</td>
<td class="cellrowborder" valign="top" width="31.53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920939_a0180d9e5e866452ebd0ec8be94dc4f05"><a name="en-us_topic_0151920939_a0180d9e5e866452ebd0ec8be94dc4f05"></a><a name="en-us_topic_0151920939_a0180d9e5e866452ebd0ec8be94dc4f05"></a>runlevel3.target, multi-user.target</p>
</td>
<td class="cellrowborder" valign="top" width="55.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920939_a9c5a2a48aa5d49bf8e86a1cce1711303"><a name="en-us_topic_0151920939_a9c5a2a48aa5d49bf8e86a1cce1711303"></a><a name="en-us_topic_0151920939_a9c5a2a48aa5d49bf8e86a1cce1711303"></a>The operating system is in non-graphical multi-user mode, and can be accessed from multiple consoles or networks.</p>
</td>
</tr>
<tr id="en-us_topic_0151920939_r0184cfc9111840b6be09d7621237f91b"><td class="cellrowborder" valign="top" width="13.389999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920939_aecd758e276a34d828c7f57d56aba812d"><a name="en-us_topic_0151920939_aecd758e276a34d828c7f57d56aba812d"></a><a name="en-us_topic_0151920939_aecd758e276a34d828c7f57d56aba812d"></a>5</p>
</td>
<td class="cellrowborder" valign="top" width="31.53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920939_a0519be8c47be4ec4a47bd2942ebdee20"><a name="en-us_topic_0151920939_a0519be8c47be4ec4a47bd2942ebdee20"></a><a name="en-us_topic_0151920939_a0519be8c47be4ec4a47bd2942ebdee20"></a>runlevel5.target, graphical.target</p>
</td>
<td class="cellrowborder" valign="top" width="55.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920939_ad3463085cd604e0081dfffaa13efdad9"><a name="en-us_topic_0151920939_ad3463085cd604e0081dfffaa13efdad9"></a><a name="en-us_topic_0151920939_ad3463085cd604e0081dfffaa13efdad9"></a>The operating system is in graphical multi-user mode. All the services running at level 3 can be accessed through graphical login.</p>
</td>
</tr>
<tr id="en-us_topic_0151920939_rdd9338b99fb2419fa9257a7a21e2774f"><td class="cellrowborder" valign="top" width="13.389999999999999%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920939_a7564c4a239924b33af88cbb8a34ec8dc"><a name="en-us_topic_0151920939_a7564c4a239924b33af88cbb8a34ec8dc"></a><a name="en-us_topic_0151920939_a7564c4a239924b33af88cbb8a34ec8dc"></a>6</p>
</td>
<td class="cellrowborder" valign="top" width="31.53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920939_a86730dd7a4054dedbfd4562630d462e5"><a name="en-us_topic_0151920939_a86730dd7a4054dedbfd4562630d462e5"></a><a name="en-us_topic_0151920939_a86730dd7a4054dedbfd4562630d462e5"></a>runlevel6.target, reboot.target</p>
</td>
<td class="cellrowborder" valign="top" width="55.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920939_a473a6a5eca6c4b60a880ce8da3222f83"><a name="en-us_topic_0151920939_a473a6a5eca6c4b60a880ce8da3222f83"></a><a name="en-us_topic_0151920939_a473a6a5eca6c4b60a880ce8da3222f83"></a>The operating system is rebooted.</p>
</td>
</tr>
<tr id="row13256325195913"><td class="cellrowborder" valign="top" width="13.389999999999999%" headers="mcps1.2.4.1.1 "><p id="p625642510595"><a name="p625642510595"></a><a name="p625642510595"></a>emergency</p>
</td>
<td class="cellrowborder" valign="top" width="31.53%" headers="mcps1.2.4.1.2 "><p id="p1384413745917"><a name="p1384413745917"></a><a name="p1384413745917"></a>emergency.target</p>
</td>
<td class="cellrowborder" valign="top" width="55.08%" headers="mcps1.2.4.1.3 "><p id="p92561925185919"><a name="p92561925185919"></a><a name="p92561925185919"></a>Emergency shell.</p>
</td>
</tr>
</tbody>
</table>

## Viewing the Default Startup Target<a name="en-us_topic_0151920939_s25ca4013a0784414a5edd3e0e160230a"></a>

Run the following command to view the default startup target of the system:

```
systemctl get-default
```

## Viewing All Startup Targets<a name="en-us_topic_0151920939_sd0bbd7d086014f039e017d7697f7f05a"></a>

Run the following command to view all startup targets of the system:

```
systemctl list-units --type=target
```

## Changing the Default Target<a name="en-us_topic_0151920939_s56ee9cb80ca0481ab3c670c7e40ff2e6"></a>

To change the default target, run the following command as the user  **root**:

```
systemctl set-default name.target
```

## Changing the Current Target<a name="en-us_topic_0151920939_sead150d42fb2410a8c5feb936d2d9601"></a>

To change the current target, run the following command as the user  **root**:

```
systemctl isolate name.target
```

## Changing to Rescue Mode<a name="en-us_topic_0151920939_s6b5aa28ee0e141f8a75288f6c1d6d936"></a>

To change the operating system to rescue mode, run the following command as the user  **root**:

```
systemctl rescue
```

This command is similar to the  **systemctl isolate rescue.target**  command. After the command is executed, the following information is displayed on the serial port:

```
You are in rescue mode. After logging in, type "journalctl -xb" to viewsystem logs, "systemctl reboot" to reboot, "systemctl default" or "exit"to boot into default mode.
Give root password for maintenance
(or press Control-D to continue):
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>You need to restart the system to enter the normal working mode from the rescue mode.  

## Changing to Emergency Mode<a name="en-us_topic_0151920939_s961f806e4a9e44b1825aa8a2442a093f"></a>

To change the operating system to emergency mode, run the following command as the user  **root**:

```
systemctl emergency
```

This command is similar to the  **systemctl isolate emergency.target**  command. After the command is executed, the following information is displayed on the serial port:

```
You are in emergency mode. After logging in, type "journalctl -xb" to viewsystem logs, "systemctl reboot" to reboot, "systemctl default" or "exit"to boot into default mode.
Give root password for maintenance
(or press Control-D to continue):
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>You need to restart the system to enter the normal working mode from the emergency mode.  

