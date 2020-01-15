# Rsyslog在IPv4和IPv6混合使用场景中日志传输延迟<a name="ZH-CN_TOPIC_0183013296"></a>

## 问题现象<a name="zh-cn_topic_0161841804_zh-cn_topic_0160738402_section93998313484"></a>

rsyslog客户端配置文件同时配置IPv4和IPv6地址，且端口配置相同的情况下，服务端收集log时会概率性出现日志打印延迟。

## 原因分析<a name="zh-cn_topic_0161841804_zh-cn_topic_0160738402_section86497483482"></a>

延迟是因为rsyslog内部存在缓冲队列机制，默认情况下需要缓冲区队列达到一定数量才会写入文件。

## 解决方法<a name="zh-cn_topic_0161841804_zh-cn_topic_0160738402_section10162105924812"></a>

可通过配置Direct模式，关闭缓冲队列机制解决该问题。在rsyslog远程传输服务端的/etc/rsyslog.d目录下新增的远程传输配置文件中，最开头增加如下配置：

```
$ActionQueueType Direct
$MainMsgQueueType Direct
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   Direct模式减少队列大小为1，所以在队列中会保留1条日志到下次日志打印；  
>-   Direct模式会降低服务器端的rsyslog性能。  

