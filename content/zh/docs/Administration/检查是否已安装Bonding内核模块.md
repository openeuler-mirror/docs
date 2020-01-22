# 检查是否已安装Bonding内核模块<a name="ZH-CN_TOPIC_0183005803"></a>

在系统中默认已加载相应模块。在root权限下，要载入绑定模块，可使用如下命令：

```
# modprobe --first-time bonding
```

显示该模块的信息，可使用如下命令：

```
# modinfo bonding
```

更多命令请使用modprobe \--help查看。

