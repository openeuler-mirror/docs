# 限制sudo命令的使用权限<a name="ZH-CN_TOPIC_0225746610"></a>

## 说明<a name="zh-cn_topic_0152100407_sc1bdabc3003d41a18eb03334f6708974"></a>

sudo命令用于普通用户以root权限执行命令。为了增强系统安全性，有必要对sudo命令的使用权进行控制，只允许roo使用sudo命令，限制其他帐户使用。

## 实现<a name="zh-cn_topic_0152100407_s9cb4ace0385747ee9889affa53bef9dc"></a>

sudo命令的使用控制通过修改/etc/sudoers文件实现，需要注释掉如下配置行：

```
#%wheel ALL=(ALL)       ALL
```

