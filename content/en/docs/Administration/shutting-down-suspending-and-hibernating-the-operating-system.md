# Shutting Down, Suspending, and Hibernating the Operating System<a name="EN-US_TOPIC_0229622725"></a>

## systemctl Command<a name="en-us_topic_0151920964_s5d5173d0dbac42ddb24bed9a81ea42cc"></a>

The systemd uses the systemctl command instead of old Linux system management commands to shut down, restart, suspend, and hibernate the operating system. Although previous Linux system management commands are still available in systemd for compatibility reasons, you are advised to use  **systemctl**  when possible. The mapping relationship is shown in  [Table 1](#en-us_topic_0151920964_t3daaaba6a03b4c36be9668efcdb61f3b).

**Table  1**  Mapping between old Linux system management commands and systemctl

<a name="en-us_topic_0151920964_t3daaaba6a03b4c36be9668efcdb61f3b"></a>
<table><thead align="left"><tr id="en-us_topic_0151920964_r8e883e3ea8fd4bfe835dac3154666bfd"><th class="cellrowborder" valign="top" width="27.69276927692769%" id="mcps1.2.4.1.1"><p id="en-us_topic_0151920964_affa97759370e4199bee6b37a54620de8"><a name="en-us_topic_0151920964_affa97759370e4199bee6b37a54620de8"></a><a name="en-us_topic_0151920964_affa97759370e4199bee6b37a54620de8"></a>Linux Management Command</p>
</th>
<th class="cellrowborder" valign="top" width="38.97389738973897%" id="mcps1.2.4.1.2"><p id="en-us_topic_0151920964_a74833d21addd43428693aba25495ea5e"><a name="en-us_topic_0151920964_a74833d21addd43428693aba25495ea5e"></a><a name="en-us_topic_0151920964_a74833d21addd43428693aba25495ea5e"></a>systemctl Command</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0151920964_a96c730244eaa417f932cd978d244b817"><a name="en-us_topic_0151920964_a96c730244eaa417f932cd978d244b817"></a><a name="en-us_topic_0151920964_a96c730244eaa417f932cd978d244b817"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0151920964_r088f89c8dd43418bb576a2b80963402d"><td class="cellrowborder" valign="top" width="27.69276927692769%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920964_ad51772983856400792c77b80694b2910"><a name="en-us_topic_0151920964_ad51772983856400792c77b80694b2910"></a><a name="en-us_topic_0151920964_ad51772983856400792c77b80694b2910"></a>halt</p>
</td>
<td class="cellrowborder" valign="top" width="38.97389738973897%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920964_ab7a0cde876c74144b333192a6711037f"><a name="en-us_topic_0151920964_ab7a0cde876c74144b333192a6711037f"></a><a name="en-us_topic_0151920964_ab7a0cde876c74144b333192a6711037f"></a>systemctl halt</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920964_ae55b9739eb8f407a8eb672f146f01db2"><a name="en-us_topic_0151920964_ae55b9739eb8f407a8eb672f146f01db2"></a><a name="en-us_topic_0151920964_ae55b9739eb8f407a8eb672f146f01db2"></a>Shuts down the operating system.</p>
</td>
</tr>
<tr id="en-us_topic_0151920964_r32060b64b8684bfda592c954f3b0a451"><td class="cellrowborder" valign="top" width="27.69276927692769%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920964_a0b98bb5ee6b444f2907e601c8a769960"><a name="en-us_topic_0151920964_a0b98bb5ee6b444f2907e601c8a769960"></a><a name="en-us_topic_0151920964_a0b98bb5ee6b444f2907e601c8a769960"></a>poweroff</p>
</td>
<td class="cellrowborder" valign="top" width="38.97389738973897%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920964_a0b8755b08ffb4d2da8bd9e1c23bba8a9"><a name="en-us_topic_0151920964_a0b8755b08ffb4d2da8bd9e1c23bba8a9"></a><a name="en-us_topic_0151920964_a0b8755b08ffb4d2da8bd9e1c23bba8a9"></a>systemctl poweroff</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920964_a0a93593a65134bf9a6adc404eca43b5d"><a name="en-us_topic_0151920964_a0a93593a65134bf9a6adc404eca43b5d"></a><a name="en-us_topic_0151920964_a0a93593a65134bf9a6adc404eca43b5d"></a>Powers off the operating system.</p>
</td>
</tr>
<tr id="en-us_topic_0151920964_rc44a19bda3f24ea3969e224b28e5400d"><td class="cellrowborder" valign="top" width="27.69276927692769%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920964_a9c6bf9b686b84e05b5bf465d925cb8b9"><a name="en-us_topic_0151920964_a9c6bf9b686b84e05b5bf465d925cb8b9"></a><a name="en-us_topic_0151920964_a9c6bf9b686b84e05b5bf465d925cb8b9"></a>reboot</p>
</td>
<td class="cellrowborder" valign="top" width="38.97389738973897%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920964_a246d6cb896454110aad9838aeb055198"><a name="en-us_topic_0151920964_a246d6cb896454110aad9838aeb055198"></a><a name="en-us_topic_0151920964_a246d6cb896454110aad9838aeb055198"></a>systemctl reboot</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920964_a14f63a55961440c98d20cafe61072b30"><a name="en-us_topic_0151920964_a14f63a55961440c98d20cafe61072b30"></a><a name="en-us_topic_0151920964_a14f63a55961440c98d20cafe61072b30"></a>Reboots the operating system.</p>
</td>
</tr>
</tbody>
</table>

## Shutting Down the Operating System<a name="en-us_topic_0151920964_sb2fb701042a440f6982c9cf10d30e99d"></a>

To shut down the system and power off the operating system, run the following command as the user  **root**:

```
systemctl poweroff
```

To shut down the operating system without powering it off, run the following command as the user  **root**:

```
systemctl halt
```

By default, running either of these commands causes systemd to send an informative message to all login users. To prevent systemd from sending this message, run this command with the  **--no-wall**  option. The command is as follows:

```
systemctl --no-wall poweroff
```

## Restarting the Operating System<a name="en-us_topic_0151920964_sc2eaa9fda8ec4ba9a816ba69cb27b61d"></a>

To restart the operating system, run the following command as the user  **root**:

```
systemctl reboot
```

By default, running either of these commands causes systemd to send an informative message to all login users. To prevent systemd from sending this message, run this command with the  **--no-wall**  option. The command is as follows:

```
systemctl --no-wall reboot
```

## Suspending the Operating System<a name="en-us_topic_0151920964_s615c87943e4f434083a7cbe2dc7d1ebd"></a>

To suspend the operating system, run the following command as the user  **root**:

```
systemctl suspend
```

## Hibernating the Operating System<a name="en-us_topic_0151920964_saae0ad55e867456b824c59114967703c"></a>

To hibernate the operating system, run the following command as the user  **root**:

```
systemctl hibernate
```

To suspend and hibernate the operating system, run the following command as the user  **root**:

```
systemctl hybrid-sleep
```

