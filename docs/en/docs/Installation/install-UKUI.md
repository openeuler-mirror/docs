# UKUI installation
UKUI is a Linux desktop built by the KylinSoft software team over the years, primarily based on GTK and QT. Compared to other UI interfaces, UKUI is easy to use. The components of UKUI are small and low coupling, can run alone without relying on other suites. It can provide user a friendly and efficient experience.

UKUI supports both x86_64 and aarch64 architectures.

We recommend you create a new administrator user before install UKUI.

1. [download](https://openeuler.org/zh/download/) openEuler 20.09 ISO and update the software source.
```
sudo dnf update
```
2. install UKUI
```
sudo dnf install ukui
```
Note: In order to install UKUI, we need libdbusmenu package. This package requires python2 which conflicts with package python3-unversioned-command(this package provides a symlink to /usr/bin/python3). Use `rpm -e --nodeps python3-unversioned-command` to uninstall python3-unversioned-command. After installation complete, you can restore the settings of the package with the following command.
```
ln -s /usr/bin/python3 /usr/bin/python
```
3. install fonts
```
sudo dnf groupinstall fonts
```
4. If you want to start with graphical interface after confirming the installation, please run this code and reboot.

```
systemctl set-default graphical.target
```
At present, UKUI version is still constantly updated. Please check the latest installation method: [https://gitee.com/openkylin/ukui-issues](https://gitee.com/openkylin/ukui-issues).