# DDE installation
#### Introduction

DDE is a powerful desktop environment developed by UnionTech Team. Contains dozens of powerful desktop applications, which are truly self-developed desktop products.

#### installation method

1. [download](https://openeuler.org/zh/download/) openEuler ISO and install the OS.
2. update the software source
```bash
sudo dnf update
```
3. install DDE
```bash
sudo dnf install dde
```
4. set to start with a graphical interface
```bash
sudo systemctl set-default graphical.target
```
5. reboot
```bash
sudo reboot
```
6. After the restart is complete, use the user created during the installation process or the openeuler user to log in to the desktop.

   > dde  cannot log in with root account
   > dde has built-in openeuler user, the password of this user is openeuler

Now you can use dde.

