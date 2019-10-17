# 使用timedatectl命令设置<a name="ZH-CN_TOPIC_0182317137"></a>

## 显示日期和时间<a name="zh-cn_topic_0151920969_sc056744ea86c4289b1764936ba4b753e"></a>

显示当前的日期和时间，命令如下：

```
timedatectl
```

例如显示系统当前的日期和时间，命令和输出如下：

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

## 修改时间<a name="zh-cn_topic_0151920969_se54af369f529405695dc242e60511f46"></a>

修改当前的时间，在root权限下执行如下命令，其中  _HH_  代表小时，_MM_  代表分钟，_SS_  代表秒，请根据实际情况修改：

```
timedatectl set-time HH:MM:SS
```

例如修改当前的时间为 15点57分24秒，命令如下：

```
# timedatectl set-time 15:57:24
```

## 修改日期<a name="zh-cn_topic_0151920969_s90de08d7175c48ae8aac6a36c686cef0"></a>

修改当前的日期，在root权限下执行如下命令，其中_ YYYY _代表年份_，MM _代表月份，_DD_  代表某天，请根据实际情况修改：

```
timedatectl set-time YYYY-MM-DD
```

例如修改当前的日期为2015年8月14号，命令如下：

```
# timedatectl set-time '2015-08-14'
```

## 修改时区<a name="zh-cn_topic_0151920969_s4155dba8786c41c3bc49fef330d721d2"></a>

显示当前可用时区，命令如下：

```
timedatectl list-timezones
```

要修改当前的时区，在root权限下执行如下命令，其中  _time\_zone_  是您想要设置的时区，请根据实际情况修改：

```
timedatectl set-timezone time_zone
```

例如修改当前的时区，首先查询所在地域的可用时区，此处以Asia为例：

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
……

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

然后修改当前的时区为“Asia/Shanghai”，命令如下：

```
# timedatectl set-timezone Asia/Shanghai
```

## 通过远程服务器进行时间同步<a name="zh-cn_topic_0151920969_s0590ae6580cd4f2a82752ffae061d5c0"></a>

您可以启用NTP远程服务器进行系统时钟的自动同步。是否启用NTP，可在root权限下执行如下命令进行设置。其中  _boolean_  可取值 yes 和 no，分别表示启用和不启用NTP进行系统时钟自动同步，请根据实际情况修改：

```
timedatectl set-ntp boolean
```

例如启用自动远程时间同步，命令如下：

```
# timedatectl set-ntp yes
```

