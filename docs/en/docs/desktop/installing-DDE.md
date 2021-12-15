<<<<<<< Updated upstream:docs/en/docs/desktop/install-DDE.md
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

=======
# DDE Installation
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

>>>>>>> Stashed changes:docs/en/docs/desktop/installling-DDE.md
