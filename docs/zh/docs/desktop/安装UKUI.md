# 在 openEuler 上安装 UKUI

UKUI是麒麟软件团队历经多年打造的一款Linux 桌面，主要基于 GTK 和 QT开发。与其它UI界面相比，UKUI更加注重易用性和敏捷度，各元件相依性小，可以不依赖其它套件而独自运行，给用户带来亲切和高效的使用体验。

UKUI支持x86_64和aarch64两种架构。

安装时，建议新建一个管理员用户。

1.下载 openEuler 20.03 LTS SP2 镜像并安装系统。
```
sudo dnf update
```
2.安装UKUI。
```
sudo dnf install ukui
```
3.在确认正常安装后，如果希望以图形界面的方式启动，请在命令行运行以下代码，并重启（`reboot`）。
```
systemctl set-default graphical.target
```
目前UKUI版本还在不断的更新，最新的安装方法请查阅：
[https://gitee.com/openkylin/ukui-issues](https://gitee.com/openkylin/ukui-issues)
