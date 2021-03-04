# 在 openEuler 上安装 XFCE
XFCE是一款轻量级 Linux 桌面，当前版本已经将所有不见从 GTK2 更新到 GTK3，从D-Dbus Glib更新到GDBus，大部分组件支持Object Introspection（简称 GI，用于产生与解析 C 程序库 API 元信息，以便于动态语言（或托管语言）绑定基于 C + GObject 的程序库）。优化用户体验，加入新特性，并修补大量BUG。与其它UI界面（GNOME、KDE）相比，XFCE占用的内存和CPU使用量非常小，给用户带来亲切和高效的使用体验。

XFCE支持x86_64和aarch64两种架构。

安装时，建议新建一个管理员用户。

1. [下载](https://openeuler.org/zh/download/)openEuler ISO镜像并安装系统，更新软件源（建议配置Everything源，另外需要配置EPOL源，下面命令是在最小化安装系统的情况下安装XFCE）
```
sudo dnf update
```

2. 安装字库
```
sudo dnf install dejavu-fonts liberation-fonts gnu-*-fonts google-*-fonts
```

3. 安装Xorg
```
sudo dnf install xorg-*
```

4. 安装XFCE
```
sudo dnf install xfwm4 xfdesktop xfce4-* xfce4-*-plugin
```

5. 安装登录管理器
```
sudo dnf install lightdm lightdm-gtk
```

6. 使用登录管理器启动XFCE
````
sudo systemctl start lightdm
````
登录管理器启动后，在右上角左侧选择“XFCE会话”
输入用户名、密码登录

7. 设置开机自启动图形界面
```
sudo systemctl enable lightdm
sudo systemctl set-default graphical.target
```
如果默认默认安装了gdm，建议停用gdm
```
systemctl disable gdm
```
重启验证
```
sudo reboot
```
