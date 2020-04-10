# Rsyslog Log Transmission Is Delayed in the Scenario Where Both IPv4 and IPv6 Are Used<a name="EN-US_TOPIC_0229622772"></a>

## Symptom<a name="en-us_topic_0161841804_en-us_topic_0160738402_section93998313484"></a>

When both IPv4 and IPv6 addresses are configured in the configuration file of the rsyslog client and the port configurations are the same, there is a possibility that log output is delayed when the server collects logs.

## Possible Cause<a name="en-us_topic_0161841804_en-us_topic_0160738402_section86497483482"></a>

The delay is caused by the buffer queue mechanism of rsyslog. By default, rsyslog writes data to a file only when the number of buffer queues reaches a specified value.

## Solution<a name="en-us_topic_0161841804_en-us_topic_0160738402_section10162105924812"></a>

You can disable the buffer queue mechanism by configuring the Direct mode. Add the following information at the beginning of the new remote transmission configuration file in the /etc/rsyslog.d directory on the rsyslog remote transmission server:

```
$ActionQueueType Direct
$MainMsgQueueType Direct
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   In direct mode, the queue size is reduced by 1. Therefore, one log is reserved in the queue for the next log output.  
>-   The direct mode degrades the rsyslog performance of the server.  

