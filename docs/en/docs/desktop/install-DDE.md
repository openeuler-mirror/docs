# DDE Installation
#### Introduction

DDE is a powerful desktop environment developed by UnionTech. It contains dozens of self-developed desktop applications.

#### Procedure

1. [Download](https://openeuler.org/zh/download/) the openEuler ISO file and install the OS.
2. Update the software source.
```bash
sudo dnf update
```
3. Install DDE.
```bash
sudo dnf install dde
```
4. Set the system to start with the graphical interface.
```bash
sudo systemctl set-default graphical.target
```
5. Reboot the system.
```bash
sudo reboot
```
6. After the reboot is complete, use the user created during the installation process or the **openeuler** user to log in to the desktop.

   > DDE does not allow login as the root user.
   > DDE has a built-in openeuler user whose password is openeuler.

Now you can use DDE.

