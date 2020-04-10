# Using the timedatectl Command<a name="EN-US_TOPIC_0229622732"></a>

## Displaying the Current Date and Time<a name="en-us_topic_0151920969_sc056744ea86c4289b1764936ba4b753e"></a>

To display the current date and time, run the following command:

```
timedatectl
```

Example command output:

```
$ timedatectl
               Local time: Mon 2019-09-30 04:05:00 EDT
           Universal time: Mon 2019-09-30 08:05:00 UTC
                 RTC time: Mon 2019-09-30 08:05:00
                Time zone: America/New_York (EDT, -0400)
System clock synchronized: no
              NTP service: inactive
          RTC in local TZ: no
```

## Synchronizing the System Clock with a Remote Server<a name="section14365868500"></a>

Your system clock can be automatically synchronized with a remote server using the Network Time Protocol \(NTP\). Run the following command as the user  **root**  to enable or disable NTP. The value of  _boolean_  is  **yes**  or  **no**, indicating that the NTP is enabled or disabled for automatic system clock synchronization. Change the value based on the site requirements.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If the remote NTP server is enabled to automatically synchronize the system clock, you cannot manually change the date and time. If you need to manually change the date or time, ensure that automatic NTP system clock synchronization is disabled. You can run the  **timedatectl set-ntp no**  command to disable the NTP service.  

```
timedatectl set-ntp boolean
```

For example, to enable automatic remote time synchronization, run the following command:

```
# timedatectl set-ntp yes
```

## Changing the Current Date<a name="section1859294020462"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Before changing the date, ensure that automatic NTP system clock synchronization has been disabled.  

Run the following command as the user  **root**  to change the current date. In the command,  _YYYY_  indicates the year,  _MM_  indicates the month, and  _DD_  indicates the day. Change them based on the site requirements.

```
timedatectl set-time YYYY-MM-DD
```

For example, to change the current date to August 14, 2019, run the following command as the user  **root**:

```
# timedatectl set-time '2019-08-14'
```

## Changing the Current Time<a name="en-us_topic_0151920969_se54af369f529405695dc242e60511f46"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Before changing the time, ensure that automatic NTP system clock synchronization has been disabled.  

To change the current time, run the following command as the user  **root**. In the command,  _HH_  indicates the hour,  _MM_  indicates the minute, and  _SS_  indicates the second. Change them based on the site requirements.

```
timedatectl set-time HH:MM:SS
```

For example, to change the current time to 15:57:24, run the following command:

```
# timedatectl set-time 15:57:24
```

## Changing the Time Zone<a name="en-us_topic_0151920969_s4155dba8786c41c3bc49fef330d721d2"></a>

To list all available time zones, run the following command:

```
timedatectl list-timezones
```

To change the current time zone, run the following command as the user  **root**. In the command,  _time\_zone_  indicates the time zone to be set. Change it based on the site requirements.

```
timedatectl set-timezone time_zone
```

Imagine you want to identify which time zone is closest to your present location while you are in Asia. You can check that by listing all available time zones in Asia with the following command:

```
# timedatectl list-timezones | grep Asia
Asia/Aden
Asia/Almaty
Asia/Amman
Asia/Anadyr
Asia/Aqtau
Asia/Aqtobe
Asia/Ashgabat
Asia/Baghdad
Asia/Bahrain
......

Asia/Seoul
Asia/Shanghai
Asia/Singapore
Asia/Srednekolymsk
Asia/Taipei
Asia/Tashkent
Asia/Tbilisi
Asia/Tehran
Asia/Thimphu
Asia/Tokyo
```

To change the time zone to Asia/Shanghai, run the following command:

```
# timedatectl set-timezone Asia/Shanghai
```

