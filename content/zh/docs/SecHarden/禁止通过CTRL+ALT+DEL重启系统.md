# 禁止通过CTRL+ALT+DEL重启系统<a name="ZH-CN_TOPIC_0192977559"></a>

## 说明<a name="zh-cn_topic_0152100184_s1cfc95ad48354d7c99b199b3b2195eb0"></a>

操作系统默认能够通过“Ctrl+Alt+Del”进行重启，禁止该项特性可以防止因为误操作而导致数据丢失。

## 实现<a name="zh-cn_topic_0152100184_s5f42085a686a409c9100b25f21d2490d"></a>

通过屏蔽内核keyboard中的“Ctrl+Alt+Del”响应函数解决。

```
rm -f /etc/systemd/system/ctrl-alt-del.target
rm -f /usr/lib/systemd/system/ctrl-alt-del.target
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>如下文件保留的原因是XEN驱动需要调用，系统已无法响应“Ctrl+Alt+Del”操作，因此无影响：  
>/usr/lib/systemd/system/ctrl-alt-del.target  

