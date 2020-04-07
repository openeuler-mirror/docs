# Restricting Permissions on the  **su**  Command<a name="EN-US_TOPIC_0192977568"></a>

## Description<a name="en-us_topic_0152100407_sc1bdabc3003d41a18eb03334f6708974"></a>

The  **su**  command is used to switch user accounts. To improve system security, only the user  **root**  and users in the wheel group can use the  **su**  command.

## Implementation<a name="en-us_topic_0152100407_s9cb4ace0385747ee9889affa53bef9dc"></a>

Modify the  **/etc/pam.d/su**  file as follows: 

```
auth         required      pam_wheel.so use_uid
```

  

**Table  1**  Configuration item in pam\_wheel.so

<a name="en-us_topic_0152100407_tf55aaab642874a94a4f0eacb7895b1b8"></a>
<table><thead align="left"><tr id="en-us_topic_0152100407_rf154f262c0e244db9934b613e42bcfca"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0152100407_a2c22bb6b55ec4d2fa8e67f585f77bd00"><a name="en-us_topic_0152100407_a2c22bb6b55ec4d2fa8e67f585f77bd00"></a><a name="en-us_topic_0152100407_a2c22bb6b55ec4d2fa8e67f585f77bd00"></a><strong id="b61647805"><a name="b61647805"></a><a name="b61647805"></a>Item</strong></p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0152100407_ab327bc2f820a4a47999edd01015e5205"><a name="en-us_topic_0152100407_ab327bc2f820a4a47999edd01015e5205"></a><a name="en-us_topic_0152100407_ab327bc2f820a4a47999edd01015e5205"></a><strong id="en-us_topic_0152100407_ab7a5363dbe0c40bb84b26c2a6c72a56a"><a name="en-us_topic_0152100407_ab7a5363dbe0c40bb84b26c2a6c72a56a"></a><a name="en-us_topic_0152100407_ab7a5363dbe0c40bb84b26c2a6c72a56a"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0152100407_rb27893de849147aebae7d108210aa01a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0152100407_a61109f515d4745efafbc6defc8096d44"><a name="en-us_topic_0152100407_a61109f515d4745efafbc6defc8096d44"></a><a name="en-us_topic_0152100407_a61109f515d4745efafbc6defc8096d44"></a>use_uid</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0152100407_a8a42e9fe9c9749bf9de0e3b38f27bb74"><a name="en-us_topic_0152100407_a8a42e9fe9c9749bf9de0e3b38f27bb74"></a><a name="en-us_topic_0152100407_a8a42e9fe9c9749bf9de0e3b38f27bb74"></a>UID of the current account.</p>
</td>
</tr>
</tbody>
</table>

