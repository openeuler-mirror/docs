# 加固SSH服务<a name="ZH-CN_TOPIC_0192977545"></a>

## 说明<a name="zh-cn_topic_0152100390_sd0b4a3e0163d419a9171e37431dcb5ac"></a>

SSH（Secure Shell）是目前较可靠，专为远程登录会话和其他网络服务提供安全性保障的协议。利用SSH协议可以有效防止远程管理过程中的信息泄露问题。透过SSH可以对所有传输的数据进行加密，并防止DNS欺骗和IP欺骗。OpenSSH是SSH协议的免费开源实现。

加固SSH服务，是指修改SSH服务中的配置来设置系统使用OpenSSH协议时的算法、认证等参数，从而提高系统的安全性。[表1](#zh-cn_topic_0152100390_ta2fdb8e4931b4c1a8f502b3c7d887b95)中详细说明了各加固项含义、建议加固值及其默认策略。

## 实现<a name="section6165192216280"></a>

服务端加固操作如下：

1.  打开服务端SSH服务的配置文件/etc/ssh/sshd\_config，在该文件中修改或添加对应加固项及其加固值。
2.  保存/etc/ssh/sshd\_config文件。
3.  重启SSH服务，命令如下：

    ```
    systemctl restart sshd
    ```


客户端加固操作如下：

1.  打开客户端SSH服务的配置文件/etc/ssh/ssh\_config，在该文件中修改或添加对应加固项及其加固值。
2.  保存/etc/ssh/ssh\_config文件。
3.  重启SSH服务，命令如下：

    ```
    systemctl restart sshd
    ```


## 加固项说明<a name="zh-cn_topic_0152100390_saf279bb9a6714f79b3fa63aa13e1f91d"></a>

-   服务端加固策略

    SSH服务的所有加固项均保存在配置文件/etc/ssh/sshd\_config中，服务端各加固项的含义、加固建议以及openEuler默认是否已经加固为建议加固值请参见[表1](#zh-cn_topic_0152100390_ta2fdb8e4931b4c1a8f502b3c7d887b95)。

    **表 1**  SSH服务端加固项说明

    <a name="zh-cn_topic_0152100390_ta2fdb8e4931b4c1a8f502b3c7d887b95"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0152100390_r4d2f72fcafd14675bc02bee3c0ea0406"><th class="cellrowborder" valign="top" width="16.56%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0152100390_a5a788889da7540eebcd9aaf9bc3aeccc"><a name="zh-cn_topic_0152100390_a5a788889da7540eebcd9aaf9bc3aeccc"></a><a name="zh-cn_topic_0152100390_a5a788889da7540eebcd9aaf9bc3aeccc"></a><strong id="zh-cn_topic_0152100390_aec4619f5b0144868b044054eaf8b043f"><a name="zh-cn_topic_0152100390_aec4619f5b0144868b044054eaf8b043f"></a><a name="zh-cn_topic_0152100390_aec4619f5b0144868b044054eaf8b043f"></a>加固项</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="45.34%" id="mcps1.2.5.1.2"><p id="p1214261722614"><a name="p1214261722614"></a><a name="p1214261722614"></a><strong id="b1214211711264"><a name="b1214211711264"></a><a name="b1214211711264"></a>加固项说明</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="13.01%" id="mcps1.2.5.1.3"><p id="p5637181913256"><a name="p5637181913256"></a><a name="p5637181913256"></a><strong id="b104541049461"><a name="b104541049461"></a><a name="b104541049461"></a>加固建议</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25.09%" id="mcps1.2.5.1.4"><p id="p885822412517"><a name="p885822412517"></a><a name="p885822412517"></a>openEuler默认是否已加固为建议值</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0152100390_r5a9b833c70ba483b8c499394a5b309d1"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_ad4862b74ec314751ba5ed51f58c5dac5"><a name="zh-cn_topic_0152100390_ad4862b74ec314751ba5ed51f58c5dac5"></a><a name="zh-cn_topic_0152100390_ad4862b74ec314751ba5ed51f58c5dac5"></a>Protocol</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p1414317178266"><a name="p1414317178266"></a><a name="p1414317178266"></a>设置使用SSH协议的版本</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a2d6a51ca12e947908f69d67b9af193ca"><a name="zh-cn_topic_0152100390_a2d6a51ca12e947908f69d67b9af193ca"></a><a name="zh-cn_topic_0152100390_a2d6a51ca12e947908f69d67b9af193ca"></a>2</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p4859724192520"><a name="p4859724192520"></a><a name="p4859724192520"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r44ceabeb34da4e9987fe3935c1736412"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a4be82302c28f48eb8bcca4ba76fe6eb7"><a name="zh-cn_topic_0152100390_a4be82302c28f48eb8bcca4ba76fe6eb7"></a><a name="zh-cn_topic_0152100390_a4be82302c28f48eb8bcca4ba76fe6eb7"></a>SyslogFacility</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p1914301718261"><a name="p1914301718261"></a><a name="p1914301718261"></a>设置SSH服务的日志类型。加固策略将其设置为“AUTH”，即认证类日志</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a4cd5d59270a14e119a26e2bf8dece17e"><a name="zh-cn_topic_0152100390_a4cd5d59270a14e119a26e2bf8dece17e"></a><a name="zh-cn_topic_0152100390_a4cd5d59270a14e119a26e2bf8dece17e"></a>AUTH</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p13859152420253"><a name="p13859152420253"></a><a name="p13859152420253"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_rc73eb068887e494585be470e8f5b32a9"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a40f1f280f2c745b5b1a02acc779f84f5"><a name="zh-cn_topic_0152100390_a40f1f280f2c745b5b1a02acc779f84f5"></a><a name="zh-cn_topic_0152100390_a40f1f280f2c745b5b1a02acc779f84f5"></a>LogLevel</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p141431217102615"><a name="p141431217102615"></a><a name="p141431217102615"></a>设置记录sshd日志消息的层次</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a34e8840e11fb42c0afb835476c79352b"><a name="zh-cn_topic_0152100390_a34e8840e11fb42c0afb835476c79352b"></a><a name="zh-cn_topic_0152100390_a34e8840e11fb42c0afb835476c79352b"></a>VERBOSE</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p08594247255"><a name="p08594247255"></a><a name="p08594247255"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_redc311a4d1bf4716895f5e70c7ac0382"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_ac6bf86f546904e7f8377599f3078fa78"><a name="zh-cn_topic_0152100390_ac6bf86f546904e7f8377599f3078fa78"></a><a name="zh-cn_topic_0152100390_ac6bf86f546904e7f8377599f3078fa78"></a>X11Forwarding</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p15143317142614"><a name="p15143317142614"></a><a name="p15143317142614"></a>设置使用SSH登录后，能否使用图形化界面</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_ae83240dc2f4a4f588d85e04b30424475"><a name="zh-cn_topic_0152100390_ae83240dc2f4a4f588d85e04b30424475"></a><a name="zh-cn_topic_0152100390_ae83240dc2f4a4f588d85e04b30424475"></a>no</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p178596245259"><a name="p178596245259"></a><a name="p178596245259"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_re2ea8a3183cc4ae7824db49a63a4bad8"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_ae68a30c310a8457d9042a56e828694ee"><a name="zh-cn_topic_0152100390_ae68a30c310a8457d9042a56e828694ee"></a><a name="zh-cn_topic_0152100390_ae68a30c310a8457d9042a56e828694ee"></a>MaxAuthTries</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p1314331713267"><a name="p1314331713267"></a><a name="p1314331713267"></a>最大认证尝试次数</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a889f057aeb1842f8a7c32fec43bad7e0"><a name="zh-cn_topic_0152100390_a889f057aeb1842f8a7c32fec43bad7e0"></a><a name="zh-cn_topic_0152100390_a889f057aeb1842f8a7c32fec43bad7e0"></a>3</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p16859192422518"><a name="p16859192422518"></a><a name="p16859192422518"></a>否</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r91fb5f04b38544849fcf242a2fabe923"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a25d8470312d144d0b378ed395c824774"><a name="zh-cn_topic_0152100390_a25d8470312d144d0b378ed395c824774"></a><a name="zh-cn_topic_0152100390_a25d8470312d144d0b378ed395c824774"></a>PubkeyAuthentication</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p15143171752617"><a name="p15143171752617"></a><a name="p15143171752617"></a>设置是否允许公钥认证。</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_aa8df8c847c004e1fa5fb241a8caa5d04"><a name="zh-cn_topic_0152100390_aa8df8c847c004e1fa5fb241a8caa5d04"></a><a name="zh-cn_topic_0152100390_aa8df8c847c004e1fa5fb241a8caa5d04"></a>yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p15859102415254"><a name="p15859102415254"></a><a name="p15859102415254"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r22fd663814db48f48583a040a98b105f"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a34807ea1b3cd4970ba9cc4052df8bb28"><a name="zh-cn_topic_0152100390_a34807ea1b3cd4970ba9cc4052df8bb28"></a><a name="zh-cn_topic_0152100390_a34807ea1b3cd4970ba9cc4052df8bb28"></a>RSAAuthentication</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p7143191762613"><a name="p7143191762613"></a><a name="p7143191762613"></a>设置是否允许只有RSA安全验证</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a42b290004abd4e52bf03b3b65a756d55"><a name="zh-cn_topic_0152100390_a42b290004abd4e52bf03b3b65a756d55"></a><a name="zh-cn_topic_0152100390_a42b290004abd4e52bf03b3b65a756d55"></a>yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p18591824132510"><a name="p18591824132510"></a><a name="p18591824132510"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r97a5a1c692bf484f91c209a942809976"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a8ae9f5b1489b46d6868761438680a1ee"><a name="zh-cn_topic_0152100390_a8ae9f5b1489b46d6868761438680a1ee"></a><a name="zh-cn_topic_0152100390_a8ae9f5b1489b46d6868761438680a1ee"></a>IgnoreRhosts</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p17144101742611"><a name="p17144101742611"></a><a name="p17144101742611"></a>设置是否使用rhosts文件和shosts文件进行验证。rhosts文件和shosts文件用于记录可以访问远程计算机的计算机名及关联的登录名</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a1a88179b609c4f709e5650ea62f64a83"><a name="zh-cn_topic_0152100390_a1a88179b609c4f709e5650ea62f64a83"></a><a name="zh-cn_topic_0152100390_a1a88179b609c4f709e5650ea62f64a83"></a>yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p3859142402516"><a name="p3859142402516"></a><a name="p3859142402516"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_re2468ad8b6874a55a2435bfc39126bbd"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a2cd3e51dc2074a2faa96cf19f8bedf53"><a name="zh-cn_topic_0152100390_a2cd3e51dc2074a2faa96cf19f8bedf53"></a><a name="zh-cn_topic_0152100390_a2cd3e51dc2074a2faa96cf19f8bedf53"></a>RhostsRSAAuthentication</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p161441117182619"><a name="p161441117182619"></a><a name="p161441117182619"></a>设置是否使用基于rhosts的RSA算法安全验证。rhosts文件记录可以访问远程计算机的计算机名及关联的登录名</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a36c9f090456947068b1086fd7e8dfbed"><a name="zh-cn_topic_0152100390_a36c9f090456947068b1086fd7e8dfbed"></a><a name="zh-cn_topic_0152100390_a36c9f090456947068b1086fd7e8dfbed"></a>no</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p1085912411254"><a name="p1085912411254"></a><a name="p1085912411254"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_raac33be7b06943288f95e8d45fe437c2"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a8067046d06194e50a28132f28cb68058"><a name="zh-cn_topic_0152100390_a8067046d06194e50a28132f28cb68058"></a><a name="zh-cn_topic_0152100390_a8067046d06194e50a28132f28cb68058"></a>HostbasedAuthentication</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p12144201715262"><a name="p12144201715262"></a><a name="p12144201715262"></a>设置是否使用基于主机的验证。基于主机的验证是指已信任客户机上的任何用户都可以使用SSH连接</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_ae677e78eeffa4a9b9b42b1f05f571373"><a name="zh-cn_topic_0152100390_ae677e78eeffa4a9b9b42b1f05f571373"></a><a name="zh-cn_topic_0152100390_ae677e78eeffa4a9b9b42b1f05f571373"></a>no</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p1685915246254"><a name="p1685915246254"></a><a name="p1685915246254"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_ra02142c2f88e45e9b5be9a7454ae9448"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_aeb3a4319a7f44cbc8f2241e48f65f48e"><a name="zh-cn_topic_0152100390_aeb3a4319a7f44cbc8f2241e48f65f48e"></a><a name="zh-cn_topic_0152100390_aeb3a4319a7f44cbc8f2241e48f65f48e"></a>PermitRootLogin</p>
    <p id="zh-cn_topic_0152100390_a8a1361665a0541038580404b621043a4"><a name="zh-cn_topic_0152100390_a8a1361665a0541038580404b621043a4"></a><a name="zh-cn_topic_0152100390_a8a1361665a0541038580404b621043a4"></a></p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p91440171268"><a name="p91440171268"></a><a name="p91440171268"></a><span id="ph132920221337"><a name="ph132920221337"></a><a name="ph132920221337"></a>是否允许</span>root账户直接<span id="ph2759102973319"><a name="ph2759102973319"></a><a name="ph2759102973319"></a>使用</span>SSH登录系统</p>
    <div class="note" id="note1914411176268"><a name="note1914411176268"></a><a name="note1914411176268"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p6144151714266"><a name="p6144151714266"></a><a name="p6144151714266"></a>若需要直接使用root账户通过SSH登录系统，请修改/etc/ssh/sshd_config文件的PermitRootLogin字段的值为yes。</p>
    </div></div>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a326aa8c282c7444b92feef6953d085c4"><a name="zh-cn_topic_0152100390_a326aa8c282c7444b92feef6953d085c4"></a><a name="zh-cn_topic_0152100390_a326aa8c282c7444b92feef6953d085c4"></a>no</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p1686018241259"><a name="p1686018241259"></a><a name="p1686018241259"></a>否</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r7aacc28c65c74fca90175077fc480e57"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_ac503e1548200403bb052d000995c8544"><a name="zh-cn_topic_0152100390_ac503e1548200403bb052d000995c8544"></a><a name="zh-cn_topic_0152100390_ac503e1548200403bb052d000995c8544"></a>PermitEmptyPasswords</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p2144101742618"><a name="p2144101742618"></a><a name="p2144101742618"></a>设置是否允许用口令为空的账号登录</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a48de835fb1904c11a24b42319258a456"><a name="zh-cn_topic_0152100390_a48de835fb1904c11a24b42319258a456"></a><a name="zh-cn_topic_0152100390_a48de835fb1904c11a24b42319258a456"></a>no</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p7860224102518"><a name="p7860224102518"></a><a name="p7860224102518"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_re0d7fbc7c9fc401a843c873cb06e10a7"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a8a5d7bed067a420dbe244d758132ac48"><a name="zh-cn_topic_0152100390_a8a5d7bed067a420dbe244d758132ac48"></a><a name="zh-cn_topic_0152100390_a8a5d7bed067a420dbe244d758132ac48"></a>PermitUserEnvironment</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p10144161722617"><a name="p10144161722617"></a><a name="p10144161722617"></a>设置是否解析 ~/.ssh/environment和~/.ssh/authorized_keys中设定的环境变量</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a8e7ecdd5a0984e68ae64dc126d15e6bd"><a name="zh-cn_topic_0152100390_a8e7ecdd5a0984e68ae64dc126d15e6bd"></a><a name="zh-cn_topic_0152100390_a8e7ecdd5a0984e68ae64dc126d15e6bd"></a>no</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p13860024142511"><a name="p13860024142511"></a><a name="p13860024142511"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_rb13a2c9225ea4e96b12ff171f63e2446"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_aec82f1776aed4ed1be55c30b97c8132e"><a name="zh-cn_topic_0152100390_aec82f1776aed4ed1be55c30b97c8132e"></a><a name="zh-cn_topic_0152100390_aec82f1776aed4ed1be55c30b97c8132e"></a>Ciphers</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p181455177265"><a name="p181455177265"></a><a name="p181455177265"></a>设置SSH数据传输的加密算法</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="p13917183744911"><a name="p13917183744911"></a><a name="p13917183744911"></a>aes128-ctr,aes192-ctr,aes256-ctr,chacha20-poly1305@openssh.com,aes128-gcm@openssh.com,aes256-gcm@openssh.com</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p17860112452519"><a name="p17860112452519"></a><a name="p17860112452519"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r5fa86572bd6149d3b21b8dc653025cb9"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a23550e88309242d0a5f0457aebb2a2e2"><a name="zh-cn_topic_0152100390_a23550e88309242d0a5f0457aebb2a2e2"></a><a name="zh-cn_topic_0152100390_a23550e88309242d0a5f0457aebb2a2e2"></a>ClientAliveInterval</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p2145317132612"><a name="p2145317132612"></a><a name="p2145317132612"></a>设置系统等待的超时时间（单位秒）。超过指定时间未收到来自客户端的数据，则断开连接</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_ae90c439bad0a4428b2bb1fc7fd52b8d7"><a name="zh-cn_topic_0152100390_ae90c439bad0a4428b2bb1fc7fd52b8d7"></a><a name="zh-cn_topic_0152100390_ae90c439bad0a4428b2bb1fc7fd52b8d7"></a>300</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p158601524142519"><a name="p158601524142519"></a><a name="p158601524142519"></a>否</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r58aef0c769124e4faef4dbcc9fba6289"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a71358cf17e6643e79098ebe8b6e4d5f3"><a name="zh-cn_topic_0152100390_a71358cf17e6643e79098ebe8b6e4d5f3"></a><a name="zh-cn_topic_0152100390_a71358cf17e6643e79098ebe8b6e4d5f3"></a>ClientAliveCountMax</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p151453173265"><a name="p151453173265"></a><a name="p151453173265"></a>设置超时次数。服务器发出请求后，客户端没有响应的次数达到一定值，连接自动断开</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_afd18ff131e504d68935c01c5d631a30b"><a name="zh-cn_topic_0152100390_afd18ff131e504d68935c01c5d631a30b"></a><a name="zh-cn_topic_0152100390_afd18ff131e504d68935c01c5d631a30b"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p4860192442514"><a name="p4860192442514"></a><a name="p4860192442514"></a>否</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r58ec735106794e20b7134090d12b88ca"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a457dd97fd178472fb72aef33c32bb862"><a name="zh-cn_topic_0152100390_a457dd97fd178472fb72aef33c32bb862"></a><a name="zh-cn_topic_0152100390_a457dd97fd178472fb72aef33c32bb862"></a>Banner</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p14997203714265"><a name="p14997203714265"></a><a name="p14997203714265"></a>指定登录SSH前后显示的提示信息的文件</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_afec727bade404e77a57d60c6aba39281"><a name="zh-cn_topic_0152100390_afec727bade404e77a57d60c6aba39281"></a><a name="zh-cn_topic_0152100390_afec727bade404e77a57d60c6aba39281"></a>/etc/issue.net</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p8860424182511"><a name="p8860424182511"></a><a name="p8860424182511"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r4727e45c60c54b53861f18f423f489e1"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a957811640d1949ae8f7893b0de61df8e"><a name="zh-cn_topic_0152100390_a957811640d1949ae8f7893b0de61df8e"></a><a name="zh-cn_topic_0152100390_a957811640d1949ae8f7893b0de61df8e"></a>MACs</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p19145217162616"><a name="p19145217162616"></a><a name="p19145217162616"></a>设置SSH数据校验的哈希算法</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_ab749b83348bd4b078841e5f2c959c1ce"><a name="zh-cn_topic_0152100390_ab749b83348bd4b078841e5f2c959c1ce"></a><a name="zh-cn_topic_0152100390_ab749b83348bd4b078841e5f2c959c1ce"></a>hmac-sha2-512,hmac-sha2-512-etm@openssh.com,hmac-sha2-256,hmac-sha2-256-etm@openssh.com,hmac-sha1,hmac-sha1-etm@openssh.com</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p18860142412259"><a name="p18860142412259"></a><a name="p18860142412259"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r8fb6ef1702d345cb9f3fcf00feac2574"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_aca557b5729654c54bb8db977cb923ec4"><a name="zh-cn_topic_0152100390_aca557b5729654c54bb8db977cb923ec4"></a><a name="zh-cn_topic_0152100390_aca557b5729654c54bb8db977cb923ec4"></a>StrictModes</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p131452176264"><a name="p131452176264"></a><a name="p131452176264"></a>设置SSH在接收登录请求之前是否检查用户HOME目录和rhosts文件的权限和所有权</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a4c394be7008f4a15b7ae04b68f73aba6"><a name="zh-cn_topic_0152100390_a4c394be7008f4a15b7ae04b68f73aba6"></a><a name="zh-cn_topic_0152100390_a4c394be7008f4a15b7ae04b68f73aba6"></a>yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p886012442513"><a name="p886012442513"></a><a name="p886012442513"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r81f8f25273ac4cb5b45ae266156df059"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a0e112f6e6dc5457296c3937a65f4baa9"><a name="zh-cn_topic_0152100390_a0e112f6e6dc5457296c3937a65f4baa9"></a><a name="zh-cn_topic_0152100390_a0e112f6e6dc5457296c3937a65f4baa9"></a>UsePAM</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p71452172269"><a name="p71452172269"></a><a name="p71452172269"></a>使用PAM登录认证</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a83ba0cb8d2f24245a7957de6b7213713"><a name="zh-cn_topic_0152100390_a83ba0cb8d2f24245a7957de6b7213713"></a><a name="zh-cn_topic_0152100390_a83ba0cb8d2f24245a7957de6b7213713"></a>yes</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p108601524132516"><a name="p108601524132516"></a><a name="p108601524132516"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_ra3c194f027b347198caaa62aa1c97e72"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_ae1abad7ddf904a52be365eac52040e76"><a name="zh-cn_topic_0152100390_ae1abad7ddf904a52be365eac52040e76"></a><a name="zh-cn_topic_0152100390_ae1abad7ddf904a52be365eac52040e76"></a>AllowTcpForwarding</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p51461217182615"><a name="p51461217182615"></a><a name="p51461217182615"></a>设置是否允许TCP转发</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a88c2e0bdc8ac4f3690521085a4c7302b"><a name="zh-cn_topic_0152100390_a88c2e0bdc8ac4f3690521085a4c7302b"></a><a name="zh-cn_topic_0152100390_a88c2e0bdc8ac4f3690521085a4c7302b"></a>no</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p1686010249252"><a name="p1686010249252"></a><a name="p1686010249252"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r208b7c1f7be144839be09bed7353ffc2"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_aafda9d2b0cb144719aa1408e26ce4ac0"><a name="zh-cn_topic_0152100390_aafda9d2b0cb144719aa1408e26ce4ac0"></a><a name="zh-cn_topic_0152100390_aafda9d2b0cb144719aa1408e26ce4ac0"></a>Subsystem       sftp    /usr/libexec/openssh/sftp-server</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p4146171742619"><a name="p4146171742619"></a><a name="p4146171742619"></a>sftp日志记录级别，记录INFO级别以及认证日志。</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a3a131d5ce5454d2d9a80fc4db4989cda"><a name="zh-cn_topic_0152100390_a3a131d5ce5454d2d9a80fc4db4989cda"></a><a name="zh-cn_topic_0152100390_a3a131d5ce5454d2d9a80fc4db4989cda"></a>-l INFO -f AUTH</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p1586014245253"><a name="p1586014245253"></a><a name="p1586014245253"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r73f4a056def8438aa97e31e5bd9896c1"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a78beead59f23417ebbb776213482756c"><a name="zh-cn_topic_0152100390_a78beead59f23417ebbb776213482756c"></a><a name="zh-cn_topic_0152100390_a78beead59f23417ebbb776213482756c"></a>AllowAgentForwarding</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p214612178266"><a name="p214612178266"></a><a name="p214612178266"></a>设置是否允许SSH Agent转发</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a9b2f10649aee4a4e8e859892ee34a54f"><a name="zh-cn_topic_0152100390_a9b2f10649aee4a4e8e859892ee34a54f"></a><a name="zh-cn_topic_0152100390_a9b2f10649aee4a4e8e859892ee34a54f"></a>no</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p1886019242254"><a name="p1886019242254"></a><a name="p1886019242254"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_rb752bff1881344b79822b8e9f18cc2f2"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_af95ea51d936b4d969964b788b89e219c"><a name="zh-cn_topic_0152100390_af95ea51d936b4d969964b788b89e219c"></a><a name="zh-cn_topic_0152100390_af95ea51d936b4d969964b788b89e219c"></a>GatewayPorts</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p17146617122613"><a name="p17146617122613"></a><a name="p17146617122613"></a>设置是否允许连接到转发客户端端口</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a9e17bcb62c0848589c235f0bb5cc9a17"><a name="zh-cn_topic_0152100390_a9e17bcb62c0848589c235f0bb5cc9a17"></a><a name="zh-cn_topic_0152100390_a9e17bcb62c0848589c235f0bb5cc9a17"></a>no</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p13860172412513"><a name="p13860172412513"></a><a name="p13860172412513"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r3051ba44322c48e9833a9952befb40ba"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a815df24daad140979fdf9d41a0ab3cf2"><a name="zh-cn_topic_0152100390_a815df24daad140979fdf9d41a0ab3cf2"></a><a name="zh-cn_topic_0152100390_a815df24daad140979fdf9d41a0ab3cf2"></a>PermitTunnel</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p5146717152611"><a name="p5146717152611"></a><a name="p5146717152611"></a>Tunnel设备是否允许使用</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a081f059f935f46fdbb4cf4300e0b0646"><a name="zh-cn_topic_0152100390_a081f059f935f46fdbb4cf4300e0b0646"></a><a name="zh-cn_topic_0152100390_a081f059f935f46fdbb4cf4300e0b0646"></a>no</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p7860202492510"><a name="p7860202492510"></a><a name="p7860202492510"></a>是</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r4c9c8b38fdc74f838f2c43ead0e7232b"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_a979db52808dd45b78e6206b0cefd9dd0"><a name="zh-cn_topic_0152100390_a979db52808dd45b78e6206b0cefd9dd0"></a><a name="zh-cn_topic_0152100390_a979db52808dd45b78e6206b0cefd9dd0"></a>KexAlgorithms</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p1914641722613"><a name="p1914641722613"></a><a name="p1914641722613"></a>设置SSH密钥交换算法</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="p209516241518"><a name="p209516241518"></a><a name="p209516241518"></a>curve25519-sha256,curve25519-sha256@@libssh.org,diffie-hellman-group14-sha1,diffie-hellman-group-exchange-sha1,diffie-hellman-group-exchange-sha256</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 ">&nbsp;&nbsp;</td>
    </tr>
    <tr id="zh-cn_topic_0152100390_row120445315716"><td class="cellrowborder" valign="top" width="16.56%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_p1221012943318"><a name="zh-cn_topic_0152100390_p1221012943318"></a><a name="zh-cn_topic_0152100390_p1221012943318"></a>LoginGraceTime</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.34%" headers="mcps1.2.5.1.2 "><p id="p1014611782612"><a name="p1014611782612"></a><a name="p1014611782612"></a>限制用户必须在指定的时限内认证成功，0 表示无限制。默认值是 60 秒。</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.01%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_p182107295333"><a name="zh-cn_topic_0152100390_p182107295333"></a><a name="zh-cn_topic_0152100390_p182107295333"></a>60</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.09%" headers="mcps1.2.5.1.4 "><p id="p78601124112511"><a name="p78601124112511"></a><a name="p78601124112511"></a>否</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >默认情况下，登录SSH前后显示的提示信息保存在/etc/issue.net文件中，/etc/issue.net默认信息为“Authorized users only. All activities may be monitored and reported.”。  


-   客户端加固策略

    SSH服务的所有加固项均保存在配置文件/etc/ssh/ssh\_config中，客户端各加固项的含义、加固建议以及openEuler默认是否已经加固为建议加固值请参见[表2](#zh-cn_topic_0152100390_tb289c5a6f1c7420ab4339187f9018ea4)。

    **表 2**  SSH客户端加固项说明

    <a name="zh-cn_topic_0152100390_tb289c5a6f1c7420ab4339187f9018ea4"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0152100390_r44edd336d98b4b9d8f79541632485d69"><th class="cellrowborder" valign="top" width="27.07%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0152100390_aa6b40273f27a4fe6b5d9dc2621704e2a"><a name="zh-cn_topic_0152100390_aa6b40273f27a4fe6b5d9dc2621704e2a"></a><a name="zh-cn_topic_0152100390_aa6b40273f27a4fe6b5d9dc2621704e2a"></a><strong id="zh-cn_topic_0152100390_a245ff680c22b43dca8bd113ddd760c1b"><a name="zh-cn_topic_0152100390_a245ff680c22b43dca8bd113ddd760c1b"></a><a name="zh-cn_topic_0152100390_a245ff680c22b43dca8bd113ddd760c1b"></a>加固项</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="9.569999999999999%" id="mcps1.2.5.1.2"><p id="p4200165344720"><a name="p4200165344720"></a><a name="p4200165344720"></a><strong id="b1820065324720"><a name="b1820065324720"></a><a name="b1820065324720"></a>加固项说明</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="54.510000000000005%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0152100390_a290970b43dee442f998bcc1c350766d9"><a name="zh-cn_topic_0152100390_a290970b43dee442f998bcc1c350766d9"></a><a name="zh-cn_topic_0152100390_a290970b43dee442f998bcc1c350766d9"></a><strong id="b7994494488"><a name="b7994494488"></a><a name="b7994494488"></a>加固建议</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="8.85%" id="mcps1.2.5.1.4"><p id="p1180961694714"><a name="p1180961694714"></a><a name="p1180961694714"></a>openEuler默认是否已加固为建议值</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0152100390_r560ff9b97c674848a5d4d6660ce545f0"><td class="cellrowborder" valign="top" width="27.07%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_aad01e5b2344c4aa39339721d5d43108d"><a name="zh-cn_topic_0152100390_aad01e5b2344c4aa39339721d5d43108d"></a><a name="zh-cn_topic_0152100390_aad01e5b2344c4aa39339721d5d43108d"></a>KexAlgorithms</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.569999999999999%" headers="mcps1.2.5.1.2 "><p id="p6200165334714"><a name="p6200165334714"></a><a name="p6200165334714"></a>设置SSH密钥交换算法</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.510000000000005%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_a2afb24fc01c44ad9923f003fd9c2200a"><a name="zh-cn_topic_0152100390_a2afb24fc01c44ad9923f003fd9c2200a"></a><a name="zh-cn_topic_0152100390_a2afb24fc01c44ad9923f003fd9c2200a"></a>ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group-exchange-sha1,diffie-hellman-group14-sha1</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.85%" headers="mcps1.2.5.1.4 "><p id="p10810111614714"><a name="p10810111614714"></a><a name="p10810111614714"></a>否</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0152100390_r40dd5cf27e034257a10c8c91b60f643f"><td class="cellrowborder" valign="top" width="27.07%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0152100390_ab489f8fce6a44f0592d72a2c4c8e7a18"><a name="zh-cn_topic_0152100390_ab489f8fce6a44f0592d72a2c4c8e7a18"></a><a name="zh-cn_topic_0152100390_ab489f8fce6a44f0592d72a2c4c8e7a18"></a>VerifyHostKeyDNS</p>
    </td>
    <td class="cellrowborder" valign="top" width="9.569999999999999%" headers="mcps1.2.5.1.2 "><p id="p14201553194712"><a name="p14201553194712"></a><a name="p14201553194712"></a>是否使用DNS或者SSHFP资源记录验证HostKey</p>
    </td>
    <td class="cellrowborder" valign="top" width="54.510000000000005%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0152100390_ac6c69b55dd3647c68a2ff6ec73cf0ed5"><a name="zh-cn_topic_0152100390_ac6c69b55dd3647c68a2ff6ec73cf0ed5"></a><a name="zh-cn_topic_0152100390_ac6c69b55dd3647c68a2ff6ec73cf0ed5"></a>ask</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.85%" headers="mcps1.2.5.1.4 "><p id="p12810181644719"><a name="p12810181644719"></a><a name="p12810181644719"></a>否</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >对于使用dh算法进行密钥交换的第三方客户端和服务端工具，要求允许建立连接的最低长度为2048bits。  


## 其他安全建议<a name="zh-cn_topic_0152100390_s93ba46029fbf4957bcd2f3c680507533"></a>

-   SSH服务仅侦听指定IP地址

    出于安全考虑，建议用户在使用SSH服务时，仅在必需的IP上进行绑定侦听，而不是侦听0.0.0.0，可修改/etc/ssh/sshd\_config文件中的ListenAddress配置项。

    1.  打开并修改/etc/ssh/sshd\_config文件

        ```
        vi /etc/ssh/sshd_config
        ```

        修改内容如下，表示绑定侦听IP为  _192.168.1.100_，用户可根据实际情况修改需要侦听的IP

        ```
        ...
        ListenAddress 192.168.1.100
        ...
        ```

    2.  重启SSH服务

        ```
        systemctl restart sshd.service
        ```



-   限制SFTP用户向上跨目录访问

    SFTP是FTP over SSH的安全FTP协议，对于访问SFTP的用户建议使用专用账号，只能上传或下载文件，不能用于SSH登录，同时对SFTP可以访问的目录进行限定，防止目录遍历攻击，具体配置如下：

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >sftpgroup为示例用户组，sftpuser为示例用户名。  

    1.  创建SFTP用户组

        ```
        groupadd sftpgroup
        ```

    2.  创建SFTP根目录

        ```
        mkdir /sftp
        ```

    3.  修改SFTP根目录属主和权限

        ```
        chown root:root /sftp
        chmod 755 /sftp
        ```

    4.  创建SFTP用户

        ```
        useradd -g sftpgroup -s /sbin/nologin sftpuser
        ```

    5.  设置SFTP用户的口令

        ```
        passwd sftpuser
        ```

    6.  创建SFTP用户上传目录

        ```
        mkdir /sftp/sftpuser
        ```

    7.  修改SFTP用户上传目录属主和权限

        ```
        chown root:root /sftp/sftpuser
        chmod 777 /sftp/sftpuser
        ```

    8.  修改/etc/ssh/sshd\_config文件

        ```
        vi /etc/ssh/sshd_config
        ```

        修改内容如下：

        ```
        #Subsystem sftp /usr/libexec/openssh/sftp-server -l INFO -f AUTH
        Subsystem sftp internal-sftp -l INFO -f AUTH
        ...
         
        Match Group sftpgroup                  
            ChrootDirectory /sftp/%u
            ForceCommand internal-sftp
        ```

        >![](public_sys-resources/icon-note.gif) **说明：**   
        >-   %u代表当前sftp用户的用户名，这是一个通配符，用户原样输入即可。  
        >-   以下内容必须加在/etc/ssh/sshd\_config文件的末尾。  
        >    ```  
        >      Match Group sftpgroup                    
        >        ChrootDirectory /sftp/%u  
        >        ForceCommand internal-sftp  
        >    ```  

    9.  重启SSH服务

        ```
        systemctl restart sshd.service
        ```



-   SSH远程执行命令

    OpenSSH通用机制，在远程执行命令时，默认不开启tty，如果执行需要密码的命令，密码会明文回显。出于安全考虑，建议用户增加-t选项，确保密码输入安全。如下：

    ```
    ssh -t testuser@192.168.1.100 su
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >192.168.1.100为示例IP，testuser为示例用户。  


