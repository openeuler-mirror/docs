# Setting Password Complexity<a name="EN-US_TOPIC_0192977569"></a>

## Description<a name="en-us_topic_0152100208_s9c2fe810dbbe420c871b50d6fb58ae03"></a>

You can set the password complexity requirements by modifying the corresponding configuration file. You are advised to set the password complexity based on the site requirements.

## Implementation<a name="en-us_topic_0152100208_scf039621f84a4a5f83d6ff5a3039d398"></a>

The password complexity is implemented by the  **pam\_pwquality.so**  and  **pam\_pwhistory.so**  modules in the  **/etc/pam.d/password-auth**  and  **/etc/pam.d/system-auth**  files. You can modify the configuration items of the two modules to change the password complexity requirements.

## Example<a name="section191311819126"></a>

This section provides an example for configuring password complexity.

**Password Complexity Requirements**

1.  Contains at least eight characters.
2.  Contains at least three types of the following characters:

    - At least one lowercase letter

    - At least one uppercase letter

    - At least one digit

    - At least one space or one of the following special characters: \` \~ ! @ \# $ % ^ & \* \( \) - \_ = + \\ | \[ \{ \} \] ; : ' " , < . \> / ?

3.  Cannot be the same as an account or the account in reverse order.
4.  Cannot be the last five passwords used.

**Implementation**

Add the following content to the  **/etc/pam.d/password-auth**  and  **/etc/pam.d/system-auth**  files:

```
password    requisite     pam_pwquality.so minlen=8 minclass=3 enforce_for_root try_first_pass local_users_only retry=3 dcredit=0 ucredit=0 lcredit=0 ocredit=0 
password    required      pam_pwhistory.so use_authtok remember=5 enforce_for_root
```

  

**Configuration Item Description**

For details about the configuration items of  **pam\_pwquality.so**  and  **pam\_pwhistory.so**, see  [Table 1](#table201221044172117)  and  [Table 2](#table1212544452120), respectively.

**Table  1**  Configuration items in pam\_pwquality.so

<a name="table201221044172117"></a>
<table><thead align="left"><tr id="row18122244142118"><th class="cellrowborder" valign="top" width="23.03%" id="mcps1.2.3.1.1"><p id="p1012384412211"><a name="p1012384412211"></a><a name="p1012384412211"></a><strong id="b18676115316"><a name="b18676115316"></a><a name="b18676115316"></a>Item</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.97%" id="mcps1.2.3.1.2"><p id="p712317444217"><a name="p712317444217"></a><a name="p712317444217"></a><strong id="b31233449214"><a name="b31233449214"></a><a name="b31233449214"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row1912374413212"><td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.3.1.1 "><p id="p81231744152113"><a name="p81231744152113"></a><a name="p81231744152113"></a>minlen=8</p>
</td>
<td class="cellrowborder" valign="top" width="76.97%" headers="mcps1.2.3.1.2 "><p id="p81235448219"><a name="p81235448219"></a><a name="p81235448219"></a>A password must contain at least eight characters.</p>
</td>
</tr>
<tr id="row14123644132119"><td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.3.1.1 "><p id="p512334410219"><a name="p512334410219"></a><a name="p512334410219"></a>minclass=3</p>
</td>
<td class="cellrowborder" valign="top" width="76.97%" headers="mcps1.2.3.1.2 "><p id="p12123844102114"><a name="p12123844102114"></a><a name="p12123844102114"></a>A password must contain at least three of the following types: uppercase letters, lowercase letters, digits, and special characters.</p>
</td>
</tr>
<tr id="row412354416211"><td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.3.1.1 "><p id="p101231844102115"><a name="p101231844102115"></a><a name="p101231844102115"></a>ucredit=0</p>
</td>
<td class="cellrowborder" valign="top" width="76.97%" headers="mcps1.2.3.1.2 "><p id="p2123184472115"><a name="p2123184472115"></a><a name="p2123184472115"></a>A password contains any number of uppercase letters.</p>
</td>
</tr>
<tr id="row17123154410212"><td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.3.1.1 "><p id="p11124154418214"><a name="p11124154418214"></a><a name="p11124154418214"></a>lcredit=0</p>
</td>
<td class="cellrowborder" valign="top" width="76.97%" headers="mcps1.2.3.1.2 "><p id="p9124174412217"><a name="p9124174412217"></a><a name="p9124174412217"></a>A password contains any number of lowercase letters.</p>
</td>
</tr>
<tr id="row13124144419211"><td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.3.1.1 "><p id="p20124204411217"><a name="p20124204411217"></a><a name="p20124204411217"></a>dcredit=0</p>
</td>
<td class="cellrowborder" valign="top" width="76.97%" headers="mcps1.2.3.1.2 "><p id="p1412412445217"><a name="p1412412445217"></a><a name="p1412412445217"></a>A password contains any number of digits.</p>
</td>
</tr>
<tr id="row1612444402116"><td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.3.1.1 "><p id="p111245446214"><a name="p111245446214"></a><a name="p111245446214"></a>ocredit=0</p>
</td>
<td class="cellrowborder" valign="top" width="76.97%" headers="mcps1.2.3.1.2 "><p id="p1124344202119"><a name="p1124344202119"></a><a name="p1124344202119"></a>A password contains any number of special characters.</p>
</td>
</tr>
<tr id="row18124154411213"><td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.3.1.1 "><p id="p20124194462113"><a name="p20124194462113"></a><a name="p20124194462113"></a>retry=3</p>
</td>
<td class="cellrowborder" valign="top" width="76.97%" headers="mcps1.2.3.1.2 "><p id="p1112424414210"><a name="p1112424414210"></a><a name="p1112424414210"></a>Each time a maximum of three password changes is allowed.</p>
</td>
</tr>
<tr id="row4124164416212"><td class="cellrowborder" valign="top" width="23.03%" headers="mcps1.2.3.1.1 "><p id="p12125124418218"><a name="p12125124418218"></a><a name="p12125124418218"></a>enforce_for_root</p>
</td>
<td class="cellrowborder" valign="top" width="76.97%" headers="mcps1.2.3.1.2 "><p id="p17125204411212"><a name="p17125204411212"></a><a name="p17125204411212"></a>This configuration is also effective for user <strong id="b842352706163145"><a name="b842352706163145"></a><a name="b842352706163145"></a>root</strong>.</p>
</td>
</tr>
</tbody>
</table>

**Table  2**  Configuration items in pam\_pwhistory.so

<a name="table1212544452120"></a>
<table><thead align="left"><tr id="row412684402113"><th class="cellrowborder" valign="top" width="44.79%" id="mcps1.2.3.1.1"><p id="p141261944192114"><a name="p141261944192114"></a><a name="p141261944192114"></a><strong id="b6884240205618"><a name="b6884240205618"></a><a name="b6884240205618"></a>Item</strong></p>
</th>
<th class="cellrowborder" valign="top" width="55.21%" id="mcps1.2.3.1.2"><p id="p1212614417216"><a name="p1212614417216"></a><a name="p1212614417216"></a><strong id="b1412664419211"><a name="b1412664419211"></a><a name="b1412664419211"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row112712446212"><td class="cellrowborder" valign="top" width="44.79%" headers="mcps1.2.3.1.1 "><p id="p13127104492113"><a name="p13127104492113"></a><a name="p13127104492113"></a>remember=5</p>
</td>
<td class="cellrowborder" valign="top" width="55.21%" headers="mcps1.2.3.1.2 "><p id="p15127174452115"><a name="p15127174452115"></a><a name="p15127174452115"></a>A password must be different from the last five passwords used.</p>
</td>
</tr>
<tr id="row17127174442113"><td class="cellrowborder" valign="top" width="44.79%" headers="mcps1.2.3.1.1 "><p id="p1612744442116"><a name="p1612744442116"></a><a name="p1612744442116"></a>enforce_for_root</p>
</td>
<td class="cellrowborder" valign="top" width="55.21%" headers="mcps1.2.3.1.2 "><p id="p1712714418213"><a name="p1712714418213"></a><a name="p1712714418213"></a>This configuration is also effective for user <strong id="b63917121575"><a name="b63917121575"></a><a name="b63917121575"></a>root</strong>.</p>
</td>
</tr>
</tbody>
</table>

