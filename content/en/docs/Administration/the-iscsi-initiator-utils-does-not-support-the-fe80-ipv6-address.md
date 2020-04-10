# The iscsi-initiator-utils Does Not Support the fe80 IPv6 Address.<a name="EN-US_TOPIC_0229622757"></a>

## Symptom<a name="en-us_topic_0161841801_en-us_topic_0150455943_section2046213177403"></a>

When a client uses an IPv6 address to log in to the iSCSI server, run the iscsiadm -m node -p ipv6address -l command. If the global address is used, replace ipv6address in the command example with the global address. However, the link-local address \(IPv6 address starting with fe80\) cannot be used because the current mechanism of iscsi-initiator-utils does not support the link-local address to log in to the iSCSI server.

## Possible Cause<a name="en-us_topic_0161841801_en-us_topic_0150455943_section126941920193511"></a>

If you log in to the system using the iscsiadm -m node -p fe80::xxxx -l format, a login timeout error is returned. This is because you must specify an interface when using the link-local address. Otherwise, the iscsi\_io\_tcp\_connect function fails to invoke the connect function, and the standard error code 22 is generated.

If you use the iscsiadm -m node -p fe80::xxxx%enp3s0 -l format for login, the iscsi\_addr\_match function will compare the address fe80::xxxx%enp3s0 with the address fe80::xxxx in the node information returned by the server. The comparison result does not match, causing the login failure.

Therefore,  **the current mechanism of iscsi-initiator-utils does not support login to the iSCSI server using a link-local address.**

