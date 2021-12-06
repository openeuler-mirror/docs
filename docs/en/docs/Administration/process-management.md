# Process Management

The operating system (OS) manages multiple user requests and tasks. In most cases, the OS comes with only one CPU and one main memory, but multiple tier-2 disks and input/output \(I/O\) devices. Therefore, users have to share resources, but it appears to users that they are exclusively occupying resources. The OS places user tasks, OS tasks, mailing, print tasks, and other pending tasks in a queue and schedules the tasks according to predefined rules. This topic describes how the OS manages processes.
<!-- TOC -->

- [Process Management](#process-management)
    - [Viewing Processes](#viewing-processes)
        - [who Command](#who-command)
        - [ps Command](#ps-command)
        - [top Command](#top-command)
        - [kill Command](#kill-command)
    - [Scheduling a Process](#scheduling-a-process)
        - [Using the at Command to Run Processes at the Scheduled Time](#using-the-at-command-to-run-processes-at-the-scheduled-time)
        - [Using the cron Service to Run Commands Periodically](#using-the-cron-service-to-run-commands-periodically)
    - [Suspending/Resuming a Process](#suspendingresuming-a-process)

<!-- /TOC -->

## Viewing Processes

Linux is a multi-task system and needs to get process information during process management. To manage processes, you need to know the number of processes and their statuses. Multiple commands are available to view processes.

### who Command
The `who` command is used to display system user information. For example, before running the `talk` command to establish instant communication with another user, you need to run the `who` command to determine whether the target user is online. In another example, the system administrator can run the `who` command to learn what each login user is doing at the current time. The `who` command is widely seen in system administration since it is easy to use and can return a comprehensive set of accurate user information.

The following is an example output of the `who` command, where system users and their status are displayed: The use of the `who` command is as follows:

```
$ who
admin     tty1         Jul 28 15:55
admin     pts/0        Aug  5 15:46 (192.168.0.110)
admin     pts/2        Jul 29 19:52 (192.168.0.110)
root     pts/3        Jul 30 12:07 (192.168.0.110)
root     pts/4        Jul 31 10:29 (192.168.0.144)
root     pts/5        Jul 31 14:52 (192.168.0.11)
root     pts/6        Aug  6 10:12 (192.168.0.234)
root     pts/8        Aug  6 11:34 (192.168.0.234)
```

### ps Command
The `ps` command is the most basic and powerful command to view process information, including which processes are running, terminated, resource-hungry, or stay as zombies.

A common scenario is to monitor background processes, which do not interact with your screen, keyboard, and other I/O devices.  [Table 1](#en-us_topic_0151921029_t34619d964a3d41ad8694189ec383359c)  lists the common `ps` command options.

**Table  1**  Common ps command options

<a name="en-us_topic_0151921029_t34619d964a3d41ad8694189ec383359c"></a>
<table><thead align="left"><tr id="en-us_topic_0151921029_r79d809c7e44245b1bbf90aac5b57cb16"><th class="cellrowborder" valign="top" width="18.61%" id="mcps1.2.3.1.1"><p id="en-us_topic_0151921029_a4dcafe9758654440a1cd09443b49b996"><a name="en-us_topic_0151921029_a4dcafe9758654440a1cd09443b49b996"></a><a name="en-us_topic_0151921029_a4dcafe9758654440a1cd09443b49b996"></a>Option</p>
</th>
<th class="cellrowborder" valign="top" width="81.39%" id="mcps1.2.3.1.2"><p id="en-us_topic_0151921029_ac6fdbea1258d4c3ca520255a2d2fe663"><a name="en-us_topic_0151921029_ac6fdbea1258d4c3ca520255a2d2fe663"></a><a name="en-us_topic_0151921029_ac6fdbea1258d4c3ca520255a2d2fe663"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0151921029_r738b90e22f614e77b9ea21359ad14755"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921029_a29392e63172746c491bc46c8b76b0080"><a name="en-us_topic_0151921029_a29392e63172746c491bc46c8b76b0080"></a><a name="en-us_topic_0151921029_a29392e63172746c491bc46c8b76b0080"></a>-e</p>
</td>
<td class="cellrowborder" valign="top" width="81.39%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921029_a512f7ef0b90a4cb7bf17fa20f4775725"><a name="en-us_topic_0151921029_a512f7ef0b90a4cb7bf17fa20f4775725"></a><a name="en-us_topic_0151921029_a512f7ef0b90a4cb7bf17fa20f4775725"></a>Displays all processes.</p>
</td>
</tr>
<tr id="en-us_topic_0151921029_r015cec7c7ac44cbca03a8af4cd753492"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921029_a068031d192014fe8a886ae267635afde"><a name="en-us_topic_0151921029_a068031d192014fe8a886ae267635afde"></a><a name="en-us_topic_0151921029_a068031d192014fe8a886ae267635afde"></a>-f</p>
</td>
<td class="cellrowborder" valign="top" width="81.39%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921029_a474a7023a5fd41258427e511f0b4d79c"><a name="en-us_topic_0151921029_a474a7023a5fd41258427e511f0b4d79c"></a><a name="en-us_topic_0151921029_a474a7023a5fd41258427e511f0b4d79c"></a>Full output format.</p>
</td>
</tr>
<tr id="en-us_topic_0151921029_rec7c0b7251f743e4b6d3d41dc44c7e9f"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921029_af814f2f50cc44408999eb08d9d0a2a2a"><a name="en-us_topic_0151921029_af814f2f50cc44408999eb08d9d0a2a2a"></a><a name="en-us_topic_0151921029_af814f2f50cc44408999eb08d9d0a2a2a"></a>-h</p>
</td>
<td class="cellrowborder" valign="top" width="81.39%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921029_ab4f39caa92d54d2ea6b3c093e55d618e"><a name="en-us_topic_0151921029_ab4f39caa92d54d2ea6b3c093e55d618e"></a><a name="en-us_topic_0151921029_ab4f39caa92d54d2ea6b3c093e55d618e"></a>Hides column headings in the process information.</p>
</td>
</tr>
<tr id="en-us_topic_0151921029_r38d5c83acc40447abba5cca0c4386932"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921029_a2a631b086f1942b6b81eafb5dbabdcd0"><a name="en-us_topic_0151921029_a2a631b086f1942b6b81eafb5dbabdcd0"></a><a name="en-us_topic_0151921029_a2a631b086f1942b6b81eafb5dbabdcd0"></a>-l</p>
</td>
<td class="cellrowborder" valign="top" width="81.39%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921029_a09dc585737284fad909909e50c803bc2"><a name="en-us_topic_0151921029_a09dc585737284fad909909e50c803bc2"></a><a name="en-us_topic_0151921029_a09dc585737284fad909909e50c803bc2"></a>Long output format.</p>
</td>
</tr>
<tr id="en-us_topic_0151921029_r2e38bfe71fa94287ac2147781f1a53c1"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921029_a188698ebfa154b02a7841a551ab484da"><a name="en-us_topic_0151921029_a188698ebfa154b02a7841a551ab484da"></a><a name="en-us_topic_0151921029_a188698ebfa154b02a7841a551ab484da"></a>-w</p>
</td>
<td class="cellrowborder" valign="top" width="81.39%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921029_ab88d108c1ce744cdb50047050bc0cd9b"><a name="en-us_topic_0151921029_ab88d108c1ce744cdb50047050bc0cd9b"></a><a name="en-us_topic_0151921029_ab88d108c1ce744cdb50047050bc0cd9b"></a>Wide output format.</p>
</td>
</tr>
<tr id="en-us_topic_0151921029_r84c7a5f140c44fb598620f34927af667"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921029_a811383eb9caa4ad583b1e5de91ea5dd4"><a name="en-us_topic_0151921029_a811383eb9caa4ad583b1e5de91ea5dd4"></a><a name="en-us_topic_0151921029_a811383eb9caa4ad583b1e5de91ea5dd4"></a>-a</p>
</td>
<td class="cellrowborder" valign="top" width="81.39%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921029_aa07844184ac64000a161e1c1291675e3"><a name="en-us_topic_0151921029_aa07844184ac64000a161e1c1291675e3"></a><a name="en-us_topic_0151921029_aa07844184ac64000a161e1c1291675e3"></a>Lists all processes on a terminal, including those of other users.</p>
</td>
</tr>
<tr id="en-us_topic_0151921029_rd13fe771cf744239858d51db76b25f8e"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921029_ab886c758505744f4b37c512bde114ae3"><a name="en-us_topic_0151921029_ab886c758505744f4b37c512bde114ae3"></a><a name="en-us_topic_0151921029_ab886c758505744f4b37c512bde114ae3"></a>-r</p>
</td>
<td class="cellrowborder" valign="top" width="81.39%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921029_abc98313b7c914539adb9532d56c037d3"><a name="en-us_topic_0151921029_abc98313b7c914539adb9532d56c037d3"></a><a name="en-us_topic_0151921029_abc98313b7c914539adb9532d56c037d3"></a>Lists only running processes.</p>
</td>
</tr>
<tr id="en-us_topic_0151921029_rcb3959cc0c6e4110b87f7409841b01b1"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921029_a0fd38f1f80de4840aaa00e63119a82a8"><a name="en-us_topic_0151921029_a0fd38f1f80de4840aaa00e63119a82a8"></a><a name="en-us_topic_0151921029_a0fd38f1f80de4840aaa00e63119a82a8"></a>-x</p>
</td>
<td class="cellrowborder" valign="top" width="81.39%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921029_aa7d202094de346738f7e3ad4735f2bce"><a name="en-us_topic_0151921029_aa7d202094de346738f7e3ad4735f2bce"></a><a name="en-us_topic_0151921029_aa7d202094de346738f7e3ad4735f2bce"></a>Lists all processes without control terminals.</p>
</td>
</tr>
</tbody>
</table>

For example, to list all processes on a terminal, run the following command:

```
$ ps -a
  PID TTY          TIME CMD
12175 pts/6    00:00:00 bash
24526 pts/0    00:00:00 vsftpd
29478 pts/5    00:00:00 ps
32461 pts/0    1-01:58:33 sh
```

### top Command
Both the `top` and `ps` commands can display a list of currently running processes, but the `top` command allows you to update the displayed list of processes by pressing a button repeatedly. If the `top` command is executed in foreground, it exclusively occupies foreground until it is terminated. The `top` command provides real-time visibility into system processor status. You can sort the list of CPU tasks by CPU usage, memory usage, or task execution time. Extensive display customization, such as choosing the columns or sorting method, can be achieved using interactive commands or the customization file.

[Figure 1](#en-us_topic_0151921029_f289234fcdbac453796200d80e9889cd1)  provides an example output of the `top` command.

**Figure  1**  Example command output<a name="en-us_topic_0151921029_f289234fcdbac453796200d80e9889cd1"></a>  
![](./figures/example-command-output.png "example-command-output")

### kill Command
The `kill` command is used to terminate a process regardless of whether the process is running in foreground or background. It differs from the combo key **Ctrl+C**, which can terminate only foreground processes. The reason for terminating a background process can be heavy use of CPU resources or deadlock.

The `kill` command sends a signal to terminate running processes. By default, the `TERM` signal is used, terminating all processes incapable of capturing it. To terminate a process capable of capturing the `TERM` signal, use the `KILL` signal \(signal ID: 9\) instead.

Two types of syntax of the `kill` command:

```
kill [-s signal | -p] [-a] PID…
kill -l [signal]
```

The process ID can be retrieved by running the `ps` command. The `-s` option indicates the signal sent to the specified program. The signal details can be viewed by running the `kill -l` command. The `-p` option indicates the specified process ID.

For example, to terminate the process whose ID is 1409, run the following command as the **root** user:

```
# kill -9 1409
```

Example output of the `kill` command with the `-l` option

```
$ kill -l
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP
 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1
11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM
16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP
21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ
26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR
31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3
38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13
48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12
53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7
58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
63) SIGRTMAX-1  64) SIGRTMAX
```

## Scheduling a Process

The time-consuming and resource-demanding part of maintenance work is often performed at late night. You can schedule relevant processes to get started at the scheduled time instead of staying up all night. The following describes the process scheduling commands.


### Using the at Command to Run Processes at the Scheduled Time

#### Function
The `at` command is used to run a batch of processes \(a series of commands\) at the scheduled time or time and date.

Syntax of the `at` command:

```
at [-V] [-q queue] [-f filename] [-mldbv] time
at -c job [job...]
```

#### Time Format
The scheduled time can be in any of the following formats:

-   _hh:mm_ today: If _hh:mm_ is earlier than the current time, the selected commands will be run at _hh:mm_ the next day.
-   midnight, noon, teatime \(typically at 16:00\), or the like
-   12-hour format followed by am or pm
-   Time + date \(_month day_, _mm/dd/yy_, or _dd.mm.yy_\). The scheduled date must follow the scheduled time.

The scheduled time can also be relative time, which is suitable for scheduling commands that are going to be executed soon. For example, now+_N_ minutes, hours, days, or weeks. _N_ indicates the specified time, which may be a few days or hours. Further, the scheduled time can be words like today, tomorrow, or the like. Here are some examples of the scheduled time.

Assume that the current time is 12:30 June 7 2019 and you want to run a command at 4:30 pm. The time scheduled by the `at` command can be any of the following:

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

Although you can select any of the preceding examples according to your preference, absolute time in 24-hour format, such as `at 16:30 6/7/19`, is recommended.

#### Privileges
Only commands from standard input or from the file specified by the **-f** option can be scheduled by the `at` command. If the `su` command is executed to switch the OS from user A to user B and then the `at` command is executed at the shell prompt of user B, the `at` command execution result is sent to user B, whereas emails \(if any\) are sent to user A.

For example, to run the `slocate -u` command at 10 am on June 8, 2019, run the following commands as the **root** user:

```
# at  10:00  6/8/19
at> slocate -u
at>
[1]+   Stopped    at  10:00  6/8/19
```

When the **at\>** prompt appears, type `slocate -u` and press **Enter**. Repeat the step to add other commands that need to be run at 10 am on 8 June 2019. Then, press **Ctrl+D** to exit the `at` command.

The administrator is authorized to run the `at` command unconditionally. For other users, their privileges to run the `at` command is defined in the **/etc/at.allow** and **/etc/at.deny** files.

### Using the cron Service to Run Commands Periodically

The `at` command can run commands at the scheduled time, but only once. It means that after the commands to be run is specified, the system completes the task at the specified time. If you need to run the commands repeatedly, the **cron** service is a good choice.

#### Cron Service
The **cron** service searches the **/var/spool/cron** directory for the **crontab** files named by the user name in the **/etc/passwd** file and loads the search results into memory to execute the commands in the **crontab** files. Each user has a **crontab** file with the same name as the user name. For example, the **crontab** file of the **userexample** user is **/var/spool/cron/userexample**.

The **cron** service also reads the cron configuration file **/etc/crontab** every minute, which can be edited in various formats. If no **crontab** files are found, the **cron** service enters sleep mode and releases system resources. One minute later, the **cron** service is waken up to repeat the search work and command execution. Therefore, the background process occupies few resources and is wakened up every minute to check whether there are commands to be executed.

Command execution results are then mailed to users specified by the environment variable `MAILTO` in the **/etc/crontab** file. The **cron** service, once started, does not require manual intervention except when you need to replace the scheduled commands with new ones.

#### crontab Command
The `crontab` command is used to install, edit, remove, list, and perform other operations on **crontab** files. Each user has its own **crontab** files and can add commands to be executed to the files.

Here are common `crontab` command options:

-   crontab -u   //Set the **cron** service of a user. This option is required only when the `crontab` command is run by the **root** user.
-   crontab -l   //List details about the **cron** service of a user.
-   crontab -r   //Remove the **cron** service of a user.
-   crontab -e   //Edit the **cron** service of a user.

For example, to list the **cron** service settings of the **root** user, run the following command:

```
# crontab -u root -l
```

#### crontab Files
Enter the commands to be executed and their scheduled time in **crontab** files. Each line in the files contains six fields. The first five fields are the time when the specified command is executed, and the last field is the command to be executed. Fields are separated by spaces or tabs. The format is as follows:

```
minute hour day-of-month month-of-year day-of-week commands
```

The following table describes the fields in each line.

**Table  2**  Parameter description

<a name="en-us_topic_0151921016_t7d97d1204fe249d7ae0a87b4cf9a9353"></a>
<table><thead align="left"><tr id="en-us_topic_0151921016_r1d8017a30f5648a19724518fbc502fba"><th class="cellrowborder" valign="top" width="23.31%" id="mcps1.2.3.1.1"><p id="en-us_topic_0151921016_a4efedc128af6418a9113b81b6bc45280"><a name="en-us_topic_0151921016_a4efedc128af6418a9113b81b6bc45280"></a><a name="en-us_topic_0151921016_a4efedc128af6418a9113b81b6bc45280"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="76.69%" id="mcps1.2.3.1.2"><p id="en-us_topic_0151921016_a0aff089cd76f4ce8b57b3d78e2d5260c"><a name="en-us_topic_0151921016_a0aff089cd76f4ce8b57b3d78e2d5260c"></a><a name="en-us_topic_0151921016_a0aff089cd76f4ce8b57b3d78e2d5260c"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0151921016_r818177ba8472416a8b1a3ad5da3993fe"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_ae9e45efeced0467fbcdb87cc563bbbc9"><a name="en-us_topic_0151921016_ae9e45efeced0467fbcdb87cc563bbbc9"></a><a name="en-us_topic_0151921016_ae9e45efeced0467fbcdb87cc563bbbc9"></a>minute</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_a85a76e44d8f94ea0b0f3cdc347b64ea2"><a name="en-us_topic_0151921016_a85a76e44d8f94ea0b0f3cdc347b64ea2"></a><a name="en-us_topic_0151921016_a85a76e44d8f94ea0b0f3cdc347b64ea2"></a>The minute of the hour at which commands will be executed. Value range: 0–59.</p>
</td>
</tr>
<tr id="en-us_topic_0151921016_rb37d136bb14c4962a27c434fea54ca90"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_ada2b1d186b5746d0800d40771e987e58"><a name="en-us_topic_0151921016_ada2b1d186b5746d0800d40771e987e58"></a><a name="en-us_topic_0151921016_ada2b1d186b5746d0800d40771e987e58"></a>hour</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_ac546d5a8e6874f948430fb1ae7b1a9b2"><a name="en-us_topic_0151921016_ac546d5a8e6874f948430fb1ae7b1a9b2"></a><a name="en-us_topic_0151921016_ac546d5a8e6874f948430fb1ae7b1a9b2"></a>The hour of the day at which scheduled commands will be executed. Value range: 0–23.</p>
</td>
</tr>
<tr id="en-us_topic_0151921016_r1fcedf929bd1479482bf2176f346918e"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_a2d366d6adae349ec82a24a9d6354543e"><a name="en-us_topic_0151921016_a2d366d6adae349ec82a24a9d6354543e"></a><a name="en-us_topic_0151921016_a2d366d6adae349ec82a24a9d6354543e"></a>day-of-month</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_a614c715381cb4d7693b03fab8933e328"><a name="en-us_topic_0151921016_a614c715381cb4d7693b03fab8933e328"></a><a name="en-us_topic_0151921016_a614c715381cb4d7693b03fab8933e328"></a>The day of the month on which scheduled commands will be executed. Value range: 1–31.</p>
</td>
</tr>
<tr id="en-us_topic_0151921016_r162a1d415a5640b48e3ed0a711627afb"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_acc3a9f7fc87e478d9cc3969a712d806b"><a name="en-us_topic_0151921016_acc3a9f7fc87e478d9cc3969a712d806b"></a><a name="en-us_topic_0151921016_acc3a9f7fc87e478d9cc3969a712d806b"></a>month-of-year</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_a9320fc6a49d44dedb32039060c335fe4"><a name="en-us_topic_0151921016_a9320fc6a49d44dedb32039060c335fe4"></a><a name="en-us_topic_0151921016_a9320fc6a49d44dedb32039060c335fe4"></a>The month of the year in which scheduled commands will be executed. Value range: 1–12.</p>
</td>
</tr>
<tr id="en-us_topic_0151921016_ra8ad0d8047f549d2850f0d67ecb0c3eb"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_a80ab684536b646e2b5bf7f3b6d6e30e0"><a name="en-us_topic_0151921016_a80ab684536b646e2b5bf7f3b6d6e30e0"></a><a name="en-us_topic_0151921016_a80ab684536b646e2b5bf7f3b6d6e30e0"></a>day-of-week</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_ab370eed19e3345019d5c83c21f6fcf5e"><a name="en-us_topic_0151921016_ab370eed19e3345019d5c83c21f6fcf5e"></a><a name="en-us_topic_0151921016_ab370eed19e3345019d5c83c21f6fcf5e"></a>The day of the week on which scheduled commands will be executed. Value range: 0–6.</p>
</td>
</tr>
<tr id="en-us_topic_0151921016_r0fc447476fb44ae6b0f478dfda8e2cc6"><td class="cellrowborder" valign="top" width="23.31%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151921016_a7cfb8dd547ea4872b91a4ccd59821a04"><a name="en-us_topic_0151921016_a7cfb8dd547ea4872b91a4ccd59821a04"></a><a name="en-us_topic_0151921016_a7cfb8dd547ea4872b91a4ccd59821a04"></a>commands</p>
</td>
<td class="cellrowborder" valign="top" width="76.69%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921016_abb56c882dc5a438fad111e1232ba1b21"><a name="en-us_topic_0151921016_abb56c882dc5a438fad111e1232ba1b21"></a><a name="en-us_topic_0151921016_abb56c882dc5a438fad111e1232ba1b21"></a>Scheduled commands.</p>
</td>
</tr>
</tbody>
</table>

The fields cannot be left unspecified. In addition to numerical values, the following special characters are allowed: asterisk \(\*\), indicating a wildcard value; forward slash \(/\), followed by a numeral value _N_ to indicate that commands will be executed at a regular interval of _N_; hyphen \(-\), used with a range; and comma \(,\), used to separate discrete values. A complete path to the commands must be provided.

For example, to allow the OS to add **sleepy** to the **/tmp/test.txt** file every two hours from 18 pm to 22 pm, add the following line to a **crontab** file:

```
* 18-22/2 * * * echo "sleepy" >> /tmp/test.txt
```

Each time the **cron** service settings of a user are edited, the **cron** service generates a **crontab** file with the same name as the user in the **/var/spool/cron directory**. The **crontab** file can be edited only using the `crontab -e` command. Alternatively, the user can create a file and run the `crontab _filename_` command to import its **cron** settings to the new file.

For example, to create a **crontab** file for the **userexample** user, perform the following steps:

1. Create a file using any text editor. Add the commands that need to be executed periodically and the command execution interval to the new file. In this example, the new file is **\~/userexample.cron**.
2. Run the following command as the **root** user to install the new file as the **crontab** file of the **userexample** user:

    ```
    # crontab -u userexample ~/userexample.cron
    ```


After the new file is installed, you will find a file named **userexample** in the **/var/spool/cron** directory. This file is the required **crontab** file.

>![](./public_sys-resources/icon-note.gif) **NOTE:**   
>Do not restart the **cron** service after a **crontab** file is modified, because the **cron** service, once started, reads the **crontab** file every minute to check whether there are commands that need to be executed periodically.  

#### /etc/crontab File
The **cron** service reads all files in the **/var/spool/cron** directory and the **/etc/crontab** file every minute. Therefore, you can use the **cron** service by configuring the **/etc/crontab** file. A **crontab** file contains user-specific commands, whereas the **/etc/crontab** file contains system-wide commands. The following is an example of the **/etc/crontab** file.

```
SHELL=/bin/sh
PATH=/usr/bin:/usr/sbin:/sbin:/bin:/usr/lib/news/bin
MAILTO=root //If an error occurs or data is output, the data is sent to the account by email.
HOME=/
#  run-parts
01 * * * * root run-parts /etc/cron.hourly //Run scripts in the /etc/cron.hourly directory once an hour.
02 4 * * *   root run-parts /etc/cron.daily    //Run scripts in the /etc/cron.daily directory once a day.
22 4 * * 0  root run-parts /etc/cron.weekly     //Run scripts in the /etc/cron.weekly directory once a week.
42 4 1  * *  root run-parts /etc/cron.monthly     //Run scripts in the /etc/cron.monthly directory once a month.
```

>![](./public_sys-resources/icon-note.gif) **NOTE:**   
>If the **run-parts** parameter is deleted, a script name instead of a directory name is used.   

## Suspending/Resuming a Process

A process can be suspended or resumed by job control, and the process will continue to work from the suspended point after being resumed. To suspend a foreground process, press **Ctrl+Z**. After you press **Ctrl+Z**, the `cat` command is suspended together with the foreground process you want to suspend. You can use the `jobs` command instead to display a list of shell jobs, including their names, IDs, and status.

To resume a process in foreground or background, run the `fg` or `bg` command, respectively. The process then starts from where it was suspended previously.
