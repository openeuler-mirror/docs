# Setting Password Encryption Algorithms<a name="EN-US_TOPIC_0192977571"></a>

## Description<a name="en-us_topic_0152100376_s3b2741f5891c424f9bd0cbd618414cae"></a>

For system security, passwords cannot be stored in plaintext in the system and must be encrypted. The passwords that do not need to be restored must be encrypted using irreversible algorithms. Set the password encryption algorithm to SHA-512. This item has been set by default in openEuler. The preceding settings can effectively prevent password disclosure and ensure password security.

## Implementation<a name="en-us_topic_0152100376_se32f9a5934ca42a8807a78eb8bb9cf19"></a>

To set the password encryption algorithm, add the following configuration to the  **/etc/pam.d/password-auth**  and  **/etc/pam.d/system-auth**  files:

```
password    sufficient    pam_unix.so sha512 shadow nullok try_first_pass use_authtok
```

  

**Table  1**  Configuration items in pam\_unix.so

<a name="en-us_topic_0152100376_t0e4d45c67099425e935ada4953a4aaa1"></a>
<table><thead align="left"><tr id="en-us_topic_0152100376_r5f099f6e722f4e99a32455a5d47d934f"><th class="cellrowborder" valign="top" width="30.06%" id="mcps1.2.3.1.1"><p id="en-us_topic_0152100376_ad3eee42a35e3474d925afc02d065ea8d"><a name="en-us_topic_0152100376_ad3eee42a35e3474d925afc02d065ea8d"></a><a name="en-us_topic_0152100376_ad3eee42a35e3474d925afc02d065ea8d"></a><strong id="b18491749191310"><a name="b18491749191310"></a><a name="b18491749191310"></a>Item</strong></p>
</th>
<th class="cellrowborder" valign="top" width="69.94%" id="mcps1.2.3.1.2"><p id="en-us_topic_0152100376_a4a9755d6633d4ab78a9cfc4b7ae4e1f4"><a name="en-us_topic_0152100376_a4a9755d6633d4ab78a9cfc4b7ae4e1f4"></a><a name="en-us_topic_0152100376_a4a9755d6633d4ab78a9cfc4b7ae4e1f4"></a><strong id="b315135021315"><a name="b315135021315"></a><a name="b315135021315"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0152100376_rb5b7197d70714a90903102bb24fd0ea7"><td class="cellrowborder" valign="top" width="30.06%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0152100376_aa12ab9b1e578408a8dce9667a858c9f1"><a name="en-us_topic_0152100376_aa12ab9b1e578408a8dce9667a858c9f1"></a><a name="en-us_topic_0152100376_aa12ab9b1e578408a8dce9667a858c9f1"></a>sha512</p>
</td>
<td class="cellrowborder" valign="top" width="69.94%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0152100376_a5788f53e3377437d96ea32a5906bc9b9"><a name="en-us_topic_0152100376_a5788f53e3377437d96ea32a5906bc9b9"></a><a name="en-us_topic_0152100376_a5788f53e3377437d96ea32a5906bc9b9"></a>The SHA-512 algorithm is used for password encryption.</p>
</td>
</tr>
</tbody>
</table>

