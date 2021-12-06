# UKUI Installation
UKUI is a Linux desktop built by the KylinSoft software team over the years, primarily based on GTK and QT. Compared with other UIs, UKUI is easy to use. The components of UKUI are lightweight and can run independently without relying on other suites. It can provide user a friendly and efficient experience.

UKUI supports both x86_64 and aarch64 architectures.

You are advised to create an administrator user before installing UKUI.

1. Download openEuler 20.03 LTS SP2 and update the software source.
```
sudo dnf update
```
2. Install UKUI.
```
sudo dnf install ukui
```
3. If you want to set the system to start with the graphical interface after confirming the installation, run the following command and reboot the system (`reboot`).
```
systemctl set-default graphical.target
```
UKUI is constantly updated. Please check the latest installation method:
[https://gitee.com/openkylin/ukui-issues](https://gitee.com/openkylin/ukui-issues)
