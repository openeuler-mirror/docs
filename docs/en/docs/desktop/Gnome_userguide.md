# GNOME User Guide

## 1. Overview

GNOME is a desktop environment for Unix-like operating systems. As the officially desktop of GNU Project, GNOME aims to build a comprehensive, easy-to-use, and user-friendly desktop environment for Unix or Unix-like operating systems based on free software. 

GNOME provides the following functional components:

ATK: accessibility toolkit.

Bonobo: component framework to compound documents.

GObject: object-oriented framework in C language.

GConf: system for storing configuration settings of apps.

GNOME VFS: virtual file system.

GNOME Keyring: security system.

GNOME Print: software for printing documents.

GStreamer: multimedia framework of GNOME.

GTK+: component toolkit.

Cairo: complex 2D graphics library.

Human Interface Guidelines: software development documents provided by Sun Microsystems to facilitate GNOME usage.

LibXML: XML library designed for GNOME.

ORBit: CORBA Object Request Broker (ORB) that makes software componentized.

Pango: library for i18n text arrangement and transformation.

Metacity: window manager.

This document describes how to use GNOME.

The following figure shows the GUI.

![](./figures/gnome-1.png)

## 2. Desktop

### 2.1 Desktop

The GNOME desktop is clean because it does not display any files or directories. Only the left, middle, and right parts of the top bar on the desktop have entry options. They are the activity entry, message notification entry, and system status entry.

![](./figures/gnome-2.png)

### 2.2 Shortcut Menu

After you right-click in the blank area on the desktop, a shortcut menu shown in the following figure is displayed, providing users with some shortcut functions.

![](./figures/gnome-3.png)

The following table describes the shortcuts.

| Shortcut| Description|
| :------------ | :------------ |
| Change Background| Changes the image displayed on the desktop.|
| Display Settings| Sets the resolution, screen rotation, and night mode.|
| Settings| Navigates to system settings.|


## 3. Top Bar on the Desktop

### 3.1 Activities

The **Activities** entry is located in the upper left corner of the desktop. It contains app favorites, lists of all apps and active apps, a multi-view switchover function, and an indicator to the current active app.

#### 3.1.1 App Favorites

![](./figures/gnome-4.png)

You can right-click an app icon in **Favorites** and choose **Remove from Favorites** from the shortcut menu to remove the app from **Favorites**.

#### 3.1.2 List of All Apps

To display the list of all apps, click the ![](./figures/gnome-5.png) icon under the app favorites folder.

![](./figures/gnome-6.png)

Similarly, you can right-click an app icon in the app list and choose **Add to Favorites** from the shortcut menu to add the app to **Favorites**.

If there are so many apps and you know their names, you can enter an app name in the search box to search for it.

![](./figures/gnome-7.png)

#### 3.1.3 List of Active Apps

Active apps, that is, running apps are displayed one by one after the last app in **Favorites**. There is a white dot under each active app.

![](./figures/gnome-8.png)

If you right-click an active app, operations that can be performed on the app are displayed. The operations vary with apps. Take **Screenshot** as an example. See the following figure.

![](./figures/gnome-9.png)

#### 3.1.4 Multi-View Switchover

As you view the active app list, the active apps are displayed on the right of the list in multi-view mode.

![](./figures/gnome-10.png)

When you move the cursor to the right of the multi-view page, the vertical bar on the right becomes wider to display the window and desktop of the current active app. You can click the desktop image to switch back to the desktop.

![Figure 10 Multi-view switch 2-big](./figures/gnome-11.png)

If you click another app, it will be displayed on the top of the vertical bar.

#### 3.1.5 Indicator to the Current Active App

The indicator to the current active app is displayed on the right of **Activities**. You can click the indicator to display the operations that can be performed on the app. The operations vary with the apps. Take **Terminal** as an example. See the following figure.

![](./figures/gnome-12.png)

You can click **Preferences** to set the terminal preferences.

### 3.2 Message Notification

The message notification entry is located in the middle of the top bar on the desktop, including message notification, calendar, clock, and weather.

![](./figures/gnome-13.png)

#### 3.2.1 Message Notification

If you set an alarm or countdown timer in **Clocks**, messages will be displayed on the left of the notification pane when the timer expires. The detailed information about the to-do items set in **Calendar** are also displayed on the left of the notification pane, and the summary information is displayed below the calendar on the right.

![](./figures/gnome-14.png)

You can click **Do Not Disturb** to close pop-up notifications on the desktop.

#### 3.2.2 Calendar

As shown in the preceding figure, the calendar is displayed on the right, and there is a dot under the date of a to-do item. You can click the date to view the summary about a to-do item at the bottom of the calendar.

#### 3.2.3 Clock and Weather

You can also add the clock and weather to areas under the calendar. Clicking the **World Clocks** area will invoke the **Clocks** app, and clicking the **Weather** area will invoke the **Weather** app.

![](./figures/gnome-15.png)

### 3.3 System Status

The system status entry is located in the upper right corner of the desktop. It contains multiple options, as described in the following table.

| Option| Description|
| :------------ | :------------ |
| Sound| Volume slider|
| Ethernet| Ethernet cards and their connections|
| Location In Use| Location of the system|
| Settings| System settings|
| Lock| Immediate screen lock. A password is required to unlock the screen.|
| Power Off/Log Out| Suspension, shutdown, restart, and logout|

![](./figures/gnome-16.png)

The system status displayed here varies according to different settings and system configurations, such as Wi-Fi, Bluetooth, and battery. System statuses can also be appended to the left of the upper right corner by other apps, such as the input source display in the preceding figure.

#### 3.3.1 Sound

Quickly adjust the volume. To further set the sound, open the system settings.

#### 3.3.2 Network

Quickly enable or disable the network. To further configure the network, open the system settings.

![](./figures/gnome-17.png)

#### 3.3.3 Location Service

Quick enable or disable the location service. To further set the location, open the system settings.

![](./figures/gnome-18.png)

#### 3.3.4 Settings

It is one of the convenient entries to system settings.

![](./figures/gnome-19.png)

You can set a large number of system-related options in the **Settings** window, which are shown in the left pane of the preceding and following figures.

![](./figures/gnome-20.png)

The settings are also dynamically extended. For example, if the hardware where the system is located has Wi-Fi, the Wi-Fi item is displayed. Some important settings are described in the following sections.

#### 3.3.4 Lock

If you click **Lock**, the screen is locked and turns black. When you move the cursor, the screen turns on immediately. You can press any key to access the login page and enter the password to log in to the system again. The following figure shows the lock screen.

![](./figures/gnome-21.png)

#### 3.3.4 Power-off/Logout

The actions include suspension, power-off, restart, and logout. The difference between suspension and locking is that a black screen is directly displayed after suspension. You need to use the keyboard to wake up the login page, which takes a longer time than screen locking. Logout is to log out the current user and return to the login page without a black screen. You can use the same or another user account to log in again.

![](./figures/gnome-22.png)

The following figure shows the user login page.

![](./figures/gnome-23.png)

After the locking and suspension is waked up, the lock screen is displayed first. You need to press a key or click the screen to enter the user login page. The login page is directly displayed after the logout and restart.

## 4. Common System Settings and App Examples

### 4.1 Examples of System Settings

There are four entries to system settings:

Right-click on the desktop and choose **Settings**.

Click the system status entry in the upper right corner and choose **Settings**.

Click the **Activities** entry in the upper left corner and choose **Settings**.

On the **Terminal**, run the **gnome-control-center** command.

#### 4.1.1 Network

![](./figures/gnome-19.png)

Wired networks are displayed here. You can click the button to enable or disable a network. You can also set the VPN and network proxy.

Click the gear icon on the right of an Ethernet connection to view details, and modify or remove the connection.

![](./figures/gnome-24.png)

Change the connection name.

![](./figures/gnome-25.png)

Change the IP address obtaining mode (**Automatic** or **Manual**), and add the DNS and a route.

![](./figures/gnome-26.png)

You can also click the plus sign (+) above the gear icon to create a connection. The settings of the new connection are similar to those shown in preceding figures. The prerequisite is that the Ethernet port exists.

#### 4.1.2 Displays

You can set the fixed resolution on the **Displays** tab page. If the resolution of your hardware system is not included, set it on the command line. Then, the newly set resolution will be displayed here.

![](./figures/gnome-27.png)

Select a resolution and click **Keep Changes** to make the settings take effect.

![](./figures/gnome-28.png)

Some displays allow you to rotate the screen vertically, for example, to view the text at the bottom of the screen at a time. The **Orientation** here also provides such support.

![](./figures/gnome-29.png)

#### 4.1.3 Keyboard Shortcuts

You can set keyboard shortcuts to perform shortcut operations, such as quickly opening the home folder, camera, or browser. GNOME does not provide a shortcut for starting the **Terminal**. You can set a default one.

View existing shortcut settings in scrolling mode or search for shortcuts.

![](./figures/gnome-30.png)

Clicking a disabled item, such as the home folder and web browser, triggers shortcut settings.

![](./figures/gnome-31.png)

![](./figures/gnome-32.png)

Effect after the setting is successful.

![](./figures/gnome-33.png)

Scroll the keyboard shortcuts page to the bottom and click + to add a shortcut for opening the **Terminal**.

![](./figures/gnome-34.png)

![](./figures/gnome-35.png)

![](./figures/gnome-36.png)

![](./figures/gnome-37.png)

Now, you can press **Ctrl+Alt+T** to open the **Terminal**. Settings of the home folder and web browser are similar.

![](./figures/gnome-38.png)

#### 4.1.4 Region and Language

The system can be switched between multiple languages, even if a language is not selected during system installation.

![](./figures/gnome-39.png)

You can click **Language** and **Formats** to change the language from Chinese to English, and click **Restart**. You need to log in to the system again and restart the session for the language settings to take effect.

![](./figures/gnome-40.png)

![](./figures/gnome-41.png)

![](./figures/gnome-42.png)

Click the gear icon on the right of **Input Sources** to view the keyboard shortcuts and input source options. You can click the plus sign (+) to add an input source.

![](./figures/gnome-43.png)

When you use the shortcut to switch the input method, you can view the change in the system status area in the upper right corner.

![](./figures/gnome-44.png)

#### 4.1.5 Users

You can add and delete users on the **Users** GUI. For a non-root user, you need to click **Unlock** and enter the password of the super user to display the complete information.

![](./figures/gnome-45.png)

Click **Password** to change the password of the current user.

![](./figures/gnome-46.png)

Click **Account Activity** to view the login status of the user in this week.

![](./figures/gnome-47.png)

Click **Add User** in the upper right corner to add a user and set the password when adding the user or when logging in to the system as the new user. To log in to the system as a new user, log out of the system and then log in as the new user. The new user can be removed by clicking **Remove User**. The current login user cannot be removed.

![](./figures/gnome-48.png)

### 4.2 Application Examples

#### 4.2.1 Files

The binary file name of the **Files** app is **nautilus**. You can create, modify, move, save, and delete files in the file system displayed in **Files**.

![](./figures/gnome-49.png)

#### 4.2.2 Terminal

The running **Terminal** is a special process under the GNOME login session. It functions as a console and is a new session in essence. It can perform almost all the tasks that the console can do, and it is what Linux would be without a graphical interface.

![](./figures/gnome-50.png)

In the **Preferences** dialog box, you can set the font, character spacing, and theme background.

#### 4.2.3 Software

In **Software**, you can search for and install many free open source apps, and view and uninstall installed apps.

![](./figures/gnome-51.png)

![](./figures/gnome-52.png)

#### 4.2.4 Browser

GNOME has a built-in browser named **Web**. Its interface and functions are simpler than those of Google or Firefox, but supports common bookmarks, search engine settings, history records, and file download.

![](./figures/gnome-53.png)

#### 4.2.5 System Monitor

It is similar to the Task Manager in Windows operating systems, on which you can view the process name, user, and usage of CPU and memory resources. This monitor is dynamic, but its change effect is much worse than that of running the top command.

![](./figures/gnome-54.png)

You can also view the usage trend of important components such as the CPU, memory, and network.

![](./figures/gnome-55.png)

#### 4.2.6 Text Editor

A text editor is required for creating, modifying, and saving files. In its **Preferences** dialog box, you can set the font, tab width, theme, and plug-ins.

![](./figures/gnome-56.png)

#### 4.2.7 Sysprof

Sysprof samples and presents a system, including the software and hardware, and is used to locate system performance problems, for example, app startup freezing and system response delay. You can select the project to be traced and click **Record** to start sampling.

![](./figures/gnome-57.png)

![](./figures/gnome-58.png)

After the sampling is stopped, the result provides abundant information for diagnosis and analysis.

![](./figures/gnome-59.png)

<br>
