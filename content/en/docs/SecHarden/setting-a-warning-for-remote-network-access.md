# Setting a Warning for Remote Network Access<a name="EN-US_TOPIC_0192977558"></a>

## Description<a name="en-us_topic_0152100357_s405934b94bfb4a5091cc5e4e692cdaa2"></a>

A warning for remote network access is configured and displayed for users who attempt to remotely log in to the system. The warning indicates the penalty for authorized access and is used to threaten potential attackers. When the warning is displayed, system architecture and other system information are hidden to protect the system from being attacked.

## Implementation<a name="en-us_topic_0152100357_sdff323ee86224cafb92c7bb2196483ea"></a>

This setting can be implemented by modifying the  **/etc/issue.net**  file. Replace the original content in the  **/etc/issue.net**  file with the following information \(which has been set by default in openEuler\):

```
Authorized users only. All activities may be monitored and reported. 
```

