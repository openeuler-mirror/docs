# iscsi-initiator-utils不支持登录fe80 IPv6地址<a name="ZH-CN_TOPIC_0183013293"></a>

## 问题现象<a name="zh-cn_topic_0161841801_zh-cn_topic_0150455943_section2046213177403"></a>

客户端通过IPv6登录iscsi服务端时，使用如“iscsiadm -m node -p ipv6address -l”的命令格式登录，如果是全局地址（global address），直接替换将命令范例中的“ipv6address”替换为全局地址即可；但如果是链路本地地址（link-local address，fe80开头的IPv6地址）则无法使用，因为iscsi-initiator-utils目前机制还不支持用链路本地地址（link-local address）地址登录iscsi服务端。

## 原因分析<a name="zh-cn_topic_0161841801_zh-cn_topic_0150455943_section126941920193511"></a>

如果使用格式如“iscsiadm -m node -p fe80::xxxx -l”登录，会登录超时返回，这是因为使用链路本地地址必须指定接口，否则使用iscsi\_io\_tcp\_connect函数调用connect函数会失败，并且产生标准错误码22。

如果使用格式如“iscsiadm -m node -p fe80::xxxx%enp3s0 -l”登录时，iscsi\_addr\_match函数会将地址“fe80::xxxx%enp3s0”与服务端返回的node信息中的地址“fe80::xxxx”对比，对比结果不匹配，导致登录失败。

因此，**iscsi-initiator-utils目前机制还不支持用链路本地地址（link-local address）地址登录iscsi服务端**。

