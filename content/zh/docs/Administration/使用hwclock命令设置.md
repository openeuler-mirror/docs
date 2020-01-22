# 使用hwclock命令设置<a name="ZH-CN_TOPIC_0182317139"></a>

可以使用 hwclock 命令设置硬件时钟RTC \(Real Time Clock\) 。

## 硬件时钟和系统时钟<a name="zh-cn_topic_0151920986_s6197167779f149f3b27e8a2cf30bdbea"></a>

Linux 将时钟分为：

-   系统时钟 \(System Clock\) ：当前Linux Kernel中的时钟。
-   硬件时钟 RTC：主板上由电池供电的主板硬件时钟，该时钟可以在BIOS的 "Standard BIOS Feature" 项中进行设置。

当Linux启动时，会读取硬件时钟，并根据硬件时间来设置系统时间。

## 显示日期和时间<a name="zh-cn_topic_0151920986_se2761e7195234ff98f4be3f7e0f33f7e"></a>

显示当前硬件的日期和时间，在root权限下执行如下命令：

```
hwclock
```

例如显示当前硬件的日期和时间，命令和输出如下：

```
# hwclock
2019-08-26 10:18:42.528948+08:00
```

## 设置日期和时间<a name="zh-cn_topic_0151920986_s3b4cd9b6571a45ca87e0f43b0a54e63f"></a>

修改当前硬件的日期和时间，在root权限下执行如下命令，其中  _dd_  表示日，_mm_  表示月份，_yyyy_ 表示年份，_HH_  表示小时，_MM_  表示分钟，请根据实际情况修改：

```
hwclock --set --date "dd mm yyyy HH:MM"
```

例如修改当前的时间为2019年10月21日21点17分，命令如下：

```
# hwclock --set --date "21 Oct 2019 21:17" --utc
```

