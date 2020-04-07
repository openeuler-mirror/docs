# Disabling Interactive Startup<a name="EN-US_TOPIC_0192977564"></a>

## Description<a name="en-us_topic_0152100285_s862cb21eb2bb432a83a2da7aaab269f5"></a>

With interactive guidance, console users can disable audit, firewall, or other services, which compromises system security. Users can disable interactive startup to improve security. This item is disabled by default in openEuler.

## Implementation<a name="en-us_topic_0152100285_s8c51dd03d0d540f5bfe42dcd5dd52413"></a>

This setting can be implemented by modifying the  **/etc/sysconfig/init**  file. Set  **PROMPT**  to  **no**.

