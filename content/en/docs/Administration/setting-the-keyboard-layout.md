# Setting the Keyboard Layout<a name="EN-US_TOPIC_0229622706"></a>

Keyboard layout settings are stored in the /etc/locale.conf file and can be modified by the localectl command. These settings are read at early boot by the systemd daemon.

## Displaying the Current Settings<a name="en-us_topic_0151920973_s47e7378f0e6f4bf7a239fcae18ef49ac"></a>

To display the current keyboard layout settings, run the following command:

```
localectl status
```

Example command output:

```
$ localectl status
   System Locale: LANG=zh_CN.UTF-8
       VC Keymap: cn
      X11 Layout: cn
```

## Listing Available Keyboard Layouts<a name="en-us_topic_0151920973_s24ad0a83e48348b9a63e7c6c06666c83"></a>

To list all available keyboard layouts that can be configured on openEuler, run the following command:

```
localectl list-keymaps
```

For example, the command output of the Chinese keyboard layout is as follows:

```
$ localectl list-keymaps | grep cn
cn
```

## Setting the Keyboard Layout<a name="en-us_topic_0151920973_s1b1fa542f4a54ccd8b3d648087385121"></a>

To set the keyboard layout, run the following command as the user  **root**. In the command,  _map_  indicates the keyboard layout to be set. Run the  **localectl list-keymaps**  command to obtain the value range. Change it based on the site requirements.

```
localectl set-keymap map
```

The keyboard layout will be equally applied to graphical user interfaces.

Then you can verify if your setting was successful by checking the status:

```
$ localectl status
   System Locale: LANG=zh_CN.UTF-8
       VC Keymap: cn
      X11 Layout: us
```

