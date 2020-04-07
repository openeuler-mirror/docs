# Setting the Password Validity Period<a name="EN-US_TOPIC_0192977570"></a>

## Description<a name="en-us_topic_0152100281_s3d3bc5ab08db407caeec04649bb877de"></a>

To ensure system security, you are advised to set the password validity period and notify users to change passwords before the passwords expire.

## Implementation<a name="en-us_topic_0152100281_s342339b7f3734723adc7e36d756e3c9d"></a>

The password validity period is set by modifying the  **/etc/login.defs**  file.  [Table 1](#en-us_topic_0152100281_t77b5d0753721450c81911c18b74e82eb)  describes the hardening items. All hardening items in the table are in the  **/etc/login.defs**  file. You can directly modify the items in the configuration file.

**Table  1**  Configuration items in login.defs

<a name="en-us_topic_0152100281_t77b5d0753721450c81911c18b74e82eb"></a>
<table><thead align="left"><tr id="en-us_topic_0152100281_r3df3f3ed1b0a40718c7e8a0f4a4846fc"><th class="cellrowborder" valign="top" width="25.737426257374263%" id="mcps1.2.5.1.1"><p id="en-us_topic_0152100281_aeb399d5a434846a39fed2122dfa77569"><a name="en-us_topic_0152100281_aeb399d5a434846a39fed2122dfa77569"></a><a name="en-us_topic_0152100281_aeb399d5a434846a39fed2122dfa77569"></a><strong id="b574417411615"><a name="b574417411615"></a><a name="b574417411615"></a>Item</strong></p>
</th>
<th class="cellrowborder" valign="top" width="24.517548245175483%" id="mcps1.2.5.1.2"><p id="p91918303171"><a name="p91918303171"></a><a name="p91918303171"></a><strong id="b723918431161"><a name="b723918431161"></a><a name="b723918431161"></a>Description</strong></p>
</th>
<th class="cellrowborder" valign="top" width="15.718428157184283%" id="mcps1.2.5.1.3"><p id="p156742110189"><a name="p156742110189"></a><a name="p156742110189"></a><strong id="b3463114411615"><a name="b3463114411615"></a><a name="b3463114411615"></a>Suggestion</strong></p>
</th>
<th class="cellrowborder" valign="top" width="34.02659734026597%" id="mcps1.2.5.1.4"><p id="p155991527181913"><a name="p155991527181913"></a><a name="p155991527181913"></a>Configured as Suggested</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0152100281_r29e23cf92cab42e1ac8754dff12baa4a"><td class="cellrowborder" valign="top" width="25.737426257374263%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0152100281_a921f936f15544de5b3f9e9ba1be84ffe"><a name="en-us_topic_0152100281_a921f936f15544de5b3f9e9ba1be84ffe"></a><a name="en-us_topic_0152100281_a921f936f15544de5b3f9e9ba1be84ffe"></a>PASS_MAX_DAYS</p>
</td>
<td class="cellrowborder" valign="top" width="24.517548245175483%" headers="mcps1.2.5.1.2 "><p id="p42393415188"><a name="p42393415188"></a><a name="p42393415188"></a>Maximum validity period of a password.</p>
</td>
<td class="cellrowborder" valign="top" width="15.718428157184283%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0152100281_a2aa27bf0389c4b838ed9b6eec93af8d4"><a name="en-us_topic_0152100281_a2aa27bf0389c4b838ed9b6eec93af8d4"></a><a name="en-us_topic_0152100281_a2aa27bf0389c4b838ed9b6eec93af8d4"></a>90</p>
</td>
<td class="cellrowborder" valign="top" width="34.02659734026597%" headers="mcps1.2.5.1.4 "><p id="p117617476191"><a name="p117617476191"></a><a name="p117617476191"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0152100281_r33bf5a02003341b38505f4dd8a4ec331"><td class="cellrowborder" valign="top" width="25.737426257374263%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0152100281_ae34622cd327944e1846fa0057c0fdd26"><a name="en-us_topic_0152100281_ae34622cd327944e1846fa0057c0fdd26"></a><a name="en-us_topic_0152100281_ae34622cd327944e1846fa0057c0fdd26"></a>PASS_MIN_DAYS</p>
</td>
<td class="cellrowborder" valign="top" width="24.517548245175483%" headers="mcps1.2.5.1.2 "><p id="p32396413180"><a name="p32396413180"></a><a name="p32396413180"></a>Minimum interval between password changes.</p>
</td>
<td class="cellrowborder" valign="top" width="15.718428157184283%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0152100281_a75d083f04c1d465da9fe033bd1e3c6ab"><a name="en-us_topic_0152100281_a75d083f04c1d465da9fe033bd1e3c6ab"></a><a name="en-us_topic_0152100281_a75d083f04c1d465da9fe033bd1e3c6ab"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="34.02659734026597%" headers="mcps1.2.5.1.4 "><p id="p1675154714197"><a name="p1675154714197"></a><a name="p1675154714197"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0152100281_r2b4ddf77ed6345f2af1df4ca80e8da79"><td class="cellrowborder" valign="top" width="25.737426257374263%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0152100281_a95fb2c79aba04e37a87c4f34710db6c1"><a name="en-us_topic_0152100281_a95fb2c79aba04e37a87c4f34710db6c1"></a><a name="en-us_topic_0152100281_a95fb2c79aba04e37a87c4f34710db6c1"></a>PASS_WARN_AGE</p>
</td>
<td class="cellrowborder" valign="top" width="24.517548245175483%" headers="mcps1.2.5.1.2 "><p id="p1723920441810"><a name="p1723920441810"></a><a name="p1723920441810"></a>Number of days before the password expires.</p>
</td>
<td class="cellrowborder" valign="top" width="15.718428157184283%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0152100281_a0ccc437555734423b86103bf36f3977b"><a name="en-us_topic_0152100281_a0ccc437555734423b86103bf36f3977b"></a><a name="en-us_topic_0152100281_a0ccc437555734423b86103bf36f3977b"></a>7</p>
</td>
<td class="cellrowborder" valign="top" width="34.02659734026597%" headers="mcps1.2.5.1.4 "><p id="p249184791910"><a name="p249184791910"></a><a name="p249184791910"></a>No</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The  **login.defs**  file is used to set restrictions on user accounts, such as setting the maximum password validity period and maximum length. The configuration in this file is invalid for the user  **root**. If the  **/etc/shadow**  file contains the same items, the  **/etc/shadow**  configuration takes precedence over the  **/etc/login.defs**  configuration. When a user attempts to log in after the password expires, the user will be informed of the password expiry and is required to change the password. If the user does not change the password, the user cannot access the system.   

