# 下载安装GTK库<a name="ZH-CN_TOPIC_0229243714"></a>

请确认您具有root权限后，运行如下命令:

```
# dnf list installed | grep gtk
```

如果显示gtk2或者gtk3，则表示您已安装该库，可以直接跳过进入下一步，否则运行如下命令自动下载安装gtk库。

```
# dnf -y install gtk2 libXtst libXrender  xauth
```

