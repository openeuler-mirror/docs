# 使用默认配置启动SNTP服务失败<a name="ZH-CN_TOPIC_0231587845"></a>

## 问题现象<a name="section883217013220"></a>

默认配置情况下SNTP服务启动失败。

## 原因分析<a name="section182011821122818"></a>

默认配置中未添加授时服务器域名。

## 解决方案<a name="section1490682573015"></a>

修改/etc/sysconfig/sntp文件 ，在文件中添加中国NTP快速授时服务器域名：0.generic.pool.ntp.org。

