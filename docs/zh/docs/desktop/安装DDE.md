# 在 openEuler 上安装 DDE
#### 简介

DDE是统信软件团队研发的一款功能强大的桌面环境。包含数十款功能强大的桌面应用，是真正意义上的自主自研桌面产品。

#### 安装方法

1. [下载](https://openeuler.org/zh/download/)openEuler ISO镜像并安装系统
2. 更新软件源
```bash
sudo dnf update
```
3. 安装DDE
```bash
sudo dnf install dde
```
4. 设置以图形界面的方式启动
```bash
sudo systemctl set-default graphical.target
```
5. 重启
```bash
sudo reboot
```
6. 在重启完成后，使用安装过程中创建的用户或openeuler用户登陆桌面

   > dde桌面无法使用root账号登陆
   > dde内置了openeuler用户，此用户的密码为openeuler

现在您可以尽情的使用dde桌面了。

