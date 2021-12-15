<<<<<<< Updated upstream:docs/en/docs/desktop/install-UKUI.md
# UKUI Installation
UKUI is a Linux desktop built by the KylinSoft software team over the years, primarily based on GTK and QT. Compared to other UI interfaces, UKUI is easy to use. The components of UKUI are small and low coupling, can run alone without relying on other suites. It can provide user a friendly and efficient experience.

UKUI supports both x86_64 and aarch64 architectures.

You are advised to create an administrator user before installing UKUI.

1. Download openEuler 21.09 and update the software source.
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
=======
# UKUI installation
UKUI is a Linux desktop built by the KylinSoft software team over the years, primarily based on GTK and QT. Compared to other UI interfaces, UKUI is easy to use. The components of UKUI are small and low coupling, can run alone without relying on other suites. It can provide user a friendly and efficient experience.

UKUI supports both x86_64 and aarch64 architectures.

We recommend you create a new administrator user before install UKUI.

1.download openEuler 21.09 and update the software source.
```
sudo dnf update
```
2.install UKUI.
```
sudo dnf install ukui
```
3.If you want to start with graphical interface after confirming the installation, please run this code and reboot(`reboot`).
```
systemctl set-default graphical.target
```
At present, UKUI version is still constantly updated. Please check the latest installation method :
[https://gitee.com/openkylin/ukui-issues](https://gitee.com/openkylin/ukui-issues)
>>>>>>> Stashed changes:docs/en/docs/desktop/installling-UKUI.md
