# Xfce Installation Guide

Xfce is a lightweight Linux desktop. In the current version, all components have been updated from GTK2 to GTK3 and from D-Dbus Glib to GDBus. Most components support GObject Introspection (GI), which is used to generate and parse the API meta information of the C program library, so that the dynamic language (or managed language) can be bound to the program library based on C + GObject. In the current version, user experience is optimized, new features are added, and a large number of bugs are fixed. Xfce occupies fewer memory and CPU resources than other UIs (GNOME and KDE), providing smoother and more efficient user experience.

Xfce supports the x86\_64 and AArch64 architectures.

You are advised to create an administrator during the installation.

1. [Download ](https://openeuler.org/en/download/)the openEuler ISO image and install the system. Run the following command to update the software source. You are advised to configure the Everything source and the EPOL source. This document describes how to install Xfce in the minimum installation scenario.
   
   ```
   sudo dnf update
   ```

2. Run the following command to install the font library:
   
   ```
   sudo dnf install dejavu-fonts liberation-fonts gnu-*-fonts google-*-fonts
   ```

3. Run the following command to install Xorg:
   
   ```
   sudo dnf install xorg-*
   ```

4. Run the following command to install Xfce:
   
   ```
   sudo dnf install xfwm4 xfdesktop xfce4-* xfce4-*-plugin
   ```

5. Run the following command to install the login manager:
   
   ```
   sudo dnf install lightdm lightdm-gtk
   ```

6. Run the following command to start Xfce using the login manager:
   
   ````
   sudo systemctl start lightdm
   ````
   
   After the login manager is started, choose **Xfce Session** in the upper right corner and enter the user name and password to log in.

7. Run the following command to set the GUI to start upon system boot:
   
   ```
   sudo systemctl enable lightdm
   sudo systemctl set-default graphical.target
   ```
   
   If GDM is installed by default, you are advised to disable GDM.
   
   ```
   systemctl disable gdm
   ```

8. Restart the server.
   
   ```
   sudo reboot
   ```