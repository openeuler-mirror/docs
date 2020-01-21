# 设置RAID0卷，参数stripsize设置为4时出错<a name="ZH-CN_TOPIC_0220819792"></a>

## 问题现象<a name="zh-cn_topic_0151920731_sf8787c1a7e564af4ad6d72b45d07f036"></a>

设置RAID0卷，参数stripsize设置为4时出错。

## 原因分析<a name="zh-cn_topic_0151920731_s2c25517ecc454d8eaaa7b81616ea29e8"></a>

64K页表开启只能支持64K场景。

## 解决方法<a name="zh-cn_topic_0151920731_s9c2d562eab3549f3a0d44f642c8c118a"></a>

不需要修改配置文件，openeuler执行lvcreate命令时，条带化规格支持的stripesize最小值为64KB，将参数stripesize设置为64。

