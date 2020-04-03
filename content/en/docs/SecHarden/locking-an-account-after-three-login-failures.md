# Locking an Account After Three Login Failures<a name="EN-US_TOPIC_0192977572"></a>

## Description<a name="en-us_topic_0152100313_sb8ceb361cfbb4d48bc8e31385c856194"></a>

To ensure user system security, you are advised to set the maximum number of incorrect password attempts \(three attempts are recommended\) and the automatic unlocking time \(300 seconds are recommended\) for a locked account.

If an account is locked, any input is invalid but does not cause the locking timer to recount. Records of the user's invalid inputs are cleared once unlocked. The preceding settings protect passwords from being forcibly cracked and improve system security.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>By default, the maximum number of incorrect password attempts is 3 in openEuler. After the system is locked, the automatic unlock time is 60 seconds.  

## Implementation<a name="en-us_topic_0152100313_sed12742f8a60420e8df0b4767c1b4124"></a>

The password complexity is set by modifying the  **/etc/pam.d/password-auth**  and  **/etc/pam.d/system-auth**  files. The maximum number of incorrect password attempts is set to  **3**, and the unlocking time after the system is locked is set to  **300**  seconds. The configuration is as follows:

```
auth        required      pam_faillock.so preauth audit deny=3 even_deny_root unlock_time=300
auth        [default=die] pam_faillock.so authfail audit deny=3 even_deny_root unlock_time=300
auth        sufficient    pam_faillock.so authsucc audit deny=3 even_deny_root unlock_time=300
```

**Table  1**  Configuration items in pam\_faillock.so

<a name="en-us_topic_0152100313_t7b1a3221642543eaa102d4e7a74c3d38"></a>
<table><thead align="left"><tr id="en-us_topic_0152100313_r5ddcdf2378624d3ebe741051c18afc98"><th class="cellrowborder" valign="top" width="30.06%" id="mcps1.2.3.1.1"><p id="en-us_topic_0152100313_afd85f3cac36449f4ad45185e9d41b3ed"><a name="en-us_topic_0152100313_afd85f3cac36449f4ad45185e9d41b3ed"></a><a name="en-us_topic_0152100313_afd85f3cac36449f4ad45185e9d41b3ed"></a><strong id="b135211327131719"><a name="b135211327131719"></a><a name="b135211327131719"></a>Item</strong></p>
</th>
<th class="cellrowborder" valign="top" width="69.94%" id="mcps1.2.3.1.2"><p id="en-us_topic_0152100313_a1ec9687c5a6c4bd0bdfddae099040a39"><a name="en-us_topic_0152100313_a1ec9687c5a6c4bd0bdfddae099040a39"></a><a name="en-us_topic_0152100313_a1ec9687c5a6c4bd0bdfddae099040a39"></a><strong id="b11881628171719"><a name="b11881628171719"></a><a name="b11881628171719"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0152100313_r55be22dedbd741629751c2d9d410d701"><td class="cellrowborder" valign="top" width="30.06%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0152100313_acd32b0827cf145d58071658671854d46"><a name="en-us_topic_0152100313_acd32b0827cf145d58071658671854d46"></a><a name="en-us_topic_0152100313_acd32b0827cf145d58071658671854d46"></a>authfail</p>
</td>
<td class="cellrowborder" valign="top" width="69.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0152100313_a8de3bf60f7164d5c8aa30cbdf5ce6ce9"><a name="en-us_topic_0152100313_a8de3bf60f7164d5c8aa30cbdf5ce6ce9"></a><a name="en-us_topic_0152100313_a8de3bf60f7164d5c8aa30cbdf5ce6ce9"></a>Captures account login failure events.</p>
</td>
</tr>
<tr id="en-us_topic_0152100313_rf575e68bddd54388b9a88e56b09126d7"><td class="cellrowborder" valign="top" width="30.06%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0152100313_aae18622a5c5446ca9a2a2a8ec0edd6ed"><a name="en-us_topic_0152100313_aae18622a5c5446ca9a2a2a8ec0edd6ed"></a><a name="en-us_topic_0152100313_aae18622a5c5446ca9a2a2a8ec0edd6ed"></a>deny=3</p>
</td>
<td class="cellrowborder" valign="top" width="69.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0152100313_a217dbebb77344c43aa921976ca1c74bc"><a name="en-us_topic_0152100313_a217dbebb77344c43aa921976ca1c74bc"></a><a name="en-us_topic_0152100313_a217dbebb77344c43aa921976ca1c74bc"></a>A user account will be locked after three login attempts.</p>
</td>
</tr>
<tr id="en-us_topic_0152100313_re82220969a0946b4a078d1cd9baf8ea7"><td class="cellrowborder" valign="top" width="30.06%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0152100313_adf5753021b26408d8530ec8546507d09"><a name="en-us_topic_0152100313_adf5753021b26408d8530ec8546507d09"></a><a name="en-us_topic_0152100313_adf5753021b26408d8530ec8546507d09"></a>unlock_time=300</p>
</td>
<td class="cellrowborder" valign="top" width="69.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0152100313_a247ada1f1cec40a1bcce330826f1b7d6"><a name="en-us_topic_0152100313_a247ada1f1cec40a1bcce330826f1b7d6"></a><a name="en-us_topic_0152100313_a247ada1f1cec40a1bcce330826f1b7d6"></a>A locked common user account is automatically unlocked in 300 seconds.</p>
</td>
</tr>
<tr id="en-us_topic_0152100313_rd644bdea6d374265b1ba8407b48afc97"><td class="cellrowborder" valign="top" width="30.06%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0152100313_a534a8148efc14ec3a3c6c8525634d594"><a name="en-us_topic_0152100313_a534a8148efc14ec3a3c6c8525634d594"></a><a name="en-us_topic_0152100313_a534a8148efc14ec3a3c6c8525634d594"></a>even_deny_root</p>
</td>
<td class="cellrowborder" valign="top" width="69.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0152100313_a100ff1c5a82b45658e87637f2d144d92"><a name="en-us_topic_0152100313_a100ff1c5a82b45658e87637f2d144d92"></a><a name="en-us_topic_0152100313_a100ff1c5a82b45658e87637f2d144d92"></a>This configuration is also effective for user <strong id="b63481537192815"><a name="b63481537192815"></a><a name="b63481537192815"></a>root</strong>.</p>
</td>
</tr>
</tbody>
</table>

