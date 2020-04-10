# Setting the System Locale<a name="EN-US_TOPIC_0229622774"></a>

System locale settings are stored in the /etc/locale.conf file and can be modified by the localectl command. These settings are read at system boot by the systemd daemon.

## Displaying the Current Locale Status<a name="en-us_topic_0151921082_s779c0f6a61484520a60b403fa494b89c"></a>

To display the current locale status, run the following command:

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

## Listing Available Locales<a name="en-us_topic_0151921082_sa070304604e24c2e98480ce93c908a8e"></a>

To display available locales, run the following command:

```
localectl list-locales
```

You can check that by listing all Chinese locales with the following command:

```
$ localectl list-locales | grep zh
zh_CN.UTF-8
```

## Setting the Locale<a name="en-us_topic_0151921082_s9dbb4c0ad6294f1fb81ac5857ec46af1"></a>

To set the language environment, run the following command as the user  **root**. In the command,  _locale_  indicates the language type to be set. Run the  **localectl list-locales**  command to obtain the value range. Change the value based on the site requirements.

```
localectl set-locale LANG=locale
```

For example, if you want to use Simplified Chinese as the locale, run the following command as the user  **root**:

```
# localectl set-locale LANG=zh_CN.UTF-8
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>After the modification, log in again or run the following command to update the configuration file for the modification to take effect:  
>```  
>source /etc/locale.conf  
>```  

