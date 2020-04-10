# Using the at Command to Run Processes at the Scheduled Time<a name="EN-US_TOPIC_0229622791"></a>

## Function<a name="en-us_topic_0151920957_s4453feb3723144ad8f572a7f740237db"></a>

The at command is used to run a batch of processes \(a series of commands\) at the scheduled time or time+date.

Syntax of the at command:

```
at [-V] [-q queue] [-f filename] [-mldbv] time
at -c job [job...]
```

## Time Format<a name="en-us_topic_0151920957_s7183d5ce23564f63b91b18ca2a4bb133"></a>

The scheduled time can be in any of the following formats:

-   hh:mm today: If hh:mm is earlier than the current time, the selected commands will be run at hh:mm the next day.
-   midnight, noon, teatime \(typically at 16:00\), or the like
-   12-hour format followed by am or pm
-   Time + date \(month day, mm/dd/yy, or dd.mm.yy\) The scheduled date must follow the scheduled time.

The scheduled time can also be relative time, which is suitable for scheduling commands that are going to be executed soon. For example, now+_N_  minutes, hours, days, or weeks.  _N_  is time, which may be a few days or hours. Further, the scheduled time can be words like today, tomorrow, or the like. Here are some examples of the scheduled time.

Imagine the current time is 12:30 June 7 2019 and you want to run a command at 4:30 pm. The scheduled time in the at command can be any of the following:

```
 at 4:30pm
 at 16:30
 at 16:30 today
 at now+4 hours
 at now+ 240 minutes
 at 16:30 7.6.19
 at 16:30 6/7/19
 at 16:30 Jun 7
```

Although you can select any of the preceding examples according to your preference, absolute time in 24-hour format, such as at 16:30 6/7/19, is recommended.

## Privileges<a name="en-us_topic_0151920957_s99a73890e7b44ccd8e25f5880cd6f650"></a>

Only commands from standard input or from the file specified by the -f option can be scheduled by the at command to be executed. If the su command is executed to switch the operating system from user A to user B and then the at command is executed at the shell prompt of user B, the at command execution result is sent to user B. whereas emails \(if any\) are sent to user A.

For example, to run the slocate -u command at 10 am on June 8, 2019, perform the following steps:

```
# at  10:00  6/8/19
at> slocate -u
at>
[1]+   Stopped    at  10:00  6/8/19
```

When the at\> prompt appears, type  **slocate -u**  and press Enter. Repeat substep 2 to add other commands that need to be run at 10 am on 8 June 2015. Then, press Ctrl+d to exit the at command.

The administrator is authorized to run the at command unconditionally. For other users, their privilege to run the at command is defined in /etc/at.allow and /etc/at.deny files.

