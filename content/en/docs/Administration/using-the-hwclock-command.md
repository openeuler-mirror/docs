# Using the hwclock Command<a name="EN-US_TOPIC_0229622802"></a>

You can run the hwclock command to set the real time clock \(RTC\).

## Real-Time Clock and System Clock<a name="en-us_topic_0151920986_s6197167779f149f3b27e8a2cf30bdbea"></a>

Linux divides clocks into the following types:

-   System clock: clock of the current Linux kernel.
-   Hardware clock RTC: hardware clock of the mainboard powered by the battery. This clock can be set in the  **Standard BIOS Feature**  option of the BIOS.

When Linux starts, it reads the RTC and sets the system clock time based on the RTC time.

## Displaying the Current Date and Time<a name="en-us_topic_0151920986_se2761e7195234ff98f4be3f7e0f33f7e"></a>

To display the current RTC date and time, run the following command as the user  **root**:

```
hwclock
```

Example command output:

```
# hwclock
2019-08-26 10:18:42.528948+08:00
```

## Setting the Date and Time<a name="en-us_topic_0151920986_s3b4cd9b6571a45ca87e0f43b0a54e63f"></a>

Run the following command as the user  **root**  to change the date and time of the current hardware. In the command,  _dd_  indicates the day,  _mm_  indicates the month,  _yyyy_  indicates the year,  _HH_  indicates the hour, and  _MM_  indicates the minute. Change them based on the site requirements.

```
hwclock --set --date "dd mm yyyy HH:MM"
```

For example, to change the current time to 21:17 on October 21, 2019, run the following command:

```
# hwclock --set --date "21 Oct 2019 21:17" --utc
```

