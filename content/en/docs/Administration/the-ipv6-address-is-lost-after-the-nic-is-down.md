# The IPv6 Address Is Lost After the NIC Is Down.<a name="EN-US_TOPIC_0229622781"></a>

## Symptom<a name="en-us_topic_0161841802_en-us_topic_0155558602_section2046213177403"></a>

Run the ip link down+up NIC or ifconfig down+up NIC command to disable the NIC and then enable it to go online. Check the IP address configured on the NIC. It is found that the IPv4 address is not lost but the configured IPv6 address is lost.

## Possible Cause<a name="en-us_topic_0161841802_en-us_topic_0155558602_section158204366593"></a>

According to the processing logic in the kernel, if the NIC is set to the down state, all IPv4 and IPv6 addresses will be cleared. After the NIC is set to the up state, the IPv4 address is automatically restored, and the automatically configured IPv6 link-local address on the NIC is also restored. However, other IPv6 addresses are lost by default. To retain these IPv6 addresses, run the  **sysctl -w net.ipv6.conf.<_NIC name_\>.keep\_addr\_on\_down=1**  command.

