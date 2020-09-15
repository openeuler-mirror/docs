# 限制使用su命令的帐户<a name="ZH-CN_TOPIC_0192977568"></a>

## 说明<a name="zh-cn_topic_0152100407_sc1bdabc3003d41a18eb03334f6708974"></a>

su命令用于在不同帐户之间切换。为了增强系统安全性，有必要对su命令的使用权进行控制，只允许root和wheel群组的帐户使用su命令，限制其他帐户使用。

## 实现<a name="zh-cn_topic_0152100407_s9cb4ace0385747ee9889affa53bef9dc"></a>

su命令的使用控制通过修改/etc/pam.d/su文件实现，配置如下：

```
auth         required      pam_wheel.so use_uid
```

**表 1**  pam\_wheel.so配置项说明

<a name="zh-cn_topic_0152100407_tf55aaab642874a94a4f0eacb7895b1b8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0152100407_rf154f262c0e244db9934b613e42bcfca"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0152100407_a2c22bb6b55ec4d2fa8e67f585f77bd00"><a name="zh-cn_topic_0152100407_a2c22bb6b55ec4d2fa8e67f585f77bd00"></a><a name="zh-cn_topic_0152100407_a2c22bb6b55ec4d2fa8e67f585f77bd00"></a><strong id="zh-cn_topic_0152100407_a40464afab7b54cb294baa10754800a63"><a name="zh-cn_topic_0152100407_a40464afab7b54cb294baa10754800a63"></a><a name="zh-cn_topic_0152100407_a40464afab7b54cb294baa10754800a63"></a>配置项</strong></p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0152100407_ab327bc2f820a4a47999edd01015e5205"><a name="zh-cn_topic_0152100407_ab327bc2f820a4a47999edd01015e5205"></a><a name="zh-cn_topic_0152100407_ab327bc2f820a4a47999edd01015e5205"></a><strong id="zh-cn_topic_0152100407_ab7a5363dbe0c40bb84b26c2a6c72a56a"><a name="zh-cn_topic_0152100407_ab7a5363dbe0c40bb84b26c2a6c72a56a"></a><a name="zh-cn_topic_0152100407_ab7a5363dbe0c40bb84b26c2a6c72a56a"></a>说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0152100407_rb27893de849147aebae7d108210aa01a"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0152100407_a61109f515d4745efafbc6defc8096d44"><a name="zh-cn_topic_0152100407_a61109f515d4745efafbc6defc8096d44"></a><a name="zh-cn_topic_0152100407_a61109f515d4745efafbc6defc8096d44"></a>use_uid</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0152100407_a8a42e9fe9c9749bf9de0e3b38f27bb74"><a name="zh-cn_topic_0152100407_a8a42e9fe9c9749bf9de0e3b38f27bb74"></a><a name="zh-cn_topic_0152100407_a8a42e9fe9c9749bf9de0e3b38f27bb74"></a>基于当前帐户的uid。</p>
</td>
</tr>
</tbody>
</table>

