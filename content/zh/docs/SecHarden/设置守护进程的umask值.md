# 设置守护进程的umask值<a name="ZH-CN_TOPIC_0192977550"></a>

## 说明<a name="zh-cn_topic_0152099760_s4fa353681bd7456886eb6e0f08b6c15c"></a>

umask值用来为新创建的文件和目录设置缺省权限。如果没有设定umask值，则生成的文件具有全局可写权限，存在一定的风险。守护进程负责系统上某个服务，让系统可以接受来自用户或者是网络客户的要求。为了提高守护进程所创建文件和目录的安全性，建议设置其umask值为0027。umask值代表的是权限的“补码”，umask值和权限的换算方法请参见 "附录 > umask值含义" 。

>![](public_sys-resources/icon-note.gif) **说明：**   
>openEuler默认已设置守护进程的umask值为0027。  

## 实现<a name="zh-cn_topic_0152099760_sc90ceeadeac64151a3ded98010e6df3a"></a>

在配置文件/etc/sysconfig/init中新增一行：umask  0027。

