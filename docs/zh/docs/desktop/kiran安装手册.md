# 在 openEuler 上安装 Kiran

## 简介
kiran桌面是湖南麒麟信安团队以用户和市场需求为导向，研发的一个安全、稳定、高效、易用的桌面环境。kiran可以支持x86和aarch64架构。

## 安装方法
安装时建议使用root用户或者新建一个管理员用户。

1.下载 openEuler 20.03 LTS SP3 镜像并安装系统。

2.更新软件源：
```
sudo dnf update
```
3.安装kiran-desktop
```
sudo dnf install kiran-desktop
```
4.设置以图形界面的方式启动，并重启（`reboot`）。
```
systemctl set-default graphical.target
```
重启系统即可通过kiran桌面登录，您可以尽情使用kiran桌面了
