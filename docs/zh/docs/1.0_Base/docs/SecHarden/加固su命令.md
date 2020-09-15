# 加固su命令<a name="ZH-CN_TOPIC_0192977573"></a>

## 说明<a name="zh-cn_topic_0152100183_s4abbceaa69104838a02b61689dfba3ce"></a>

为了增强系统安全性，防止使用“su”切换用户时将当前用户环境变量带入其他环境，openEuler默认已做配置。总是在使用su切换用户时初始化PATH。

## 实现<a name="zh-cn_topic_0152100183_s319870312e214c8eb2ac00d2e81c4f93"></a>

通过修改/etc/login.defs实现，配置如下：

```
ALWAYS_SET_PATH=yes
```

