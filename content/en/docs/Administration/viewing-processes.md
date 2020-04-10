# Viewing Processes<a name="EN-US_TOPIC_0229622779"></a>

Linux is a multi-task system and needs to get process information during process management. To manage processes, you first need to know the number of processes and their statuses. Multiple commands are available to view processes.

## who Command<a name="en-us_topic_0151921029_s1e3a2f0d836b42218399646e796cc628"></a>

The who command is used to display system user information. For example, before running the talk command to establish instant communication with another user, you need to run the who command to determine whether the target user is online. As another example, the system administrator can run the who command to learn what each login user is doing at the current time. The who command is widely seen in system administration since it is easy to use and can return a comprehensive set of accurate user information.

The following is an example output of the who command, where system users and their status are displayed: The use of the  **who**  command is as follows:

```
# who
admin     tty1         Jul 28 15:55
admin     pts/0        Aug  5 15:46 (192.168.0.110)
admin     pts/2        Jul 29 19:52 (192.168.0.110)
root     pts/3        Jul 30 12:07 (192.168.0.110)
root     pts/4        Jul 31 10:29 (192.168.0.144)
root     pts/5        Jul 31 14:52 (192.168.0.11)
root     pts/6        Aug  6 10:12 (192.168.0.234)
root     pts/8        Aug  6 11:34 (192.168.0.234)
```

## ps Command<a name="en-us_topic_0151921029_s65e09339f256449a816da11e07351009"></a>

The  **ps**  command is the most basic and powerful command to view process information. The ps command is used to display process information, including which processes are running, terminated, resource-hungry, or stay as zombies.

A common scenario is using the ps command to monitor background processes, which do not interact with your screen, keyboard, and other I/O devices.  [Table 1](#en-us_topic_0151921029_t34619d964a3d41ad8694189ec383359c)  lists the common ps command options.

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
<td class="cellrowborder" valign="top" width="81.39%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921029_ab4f39caa92d54d2ea6b3c093e55d618e"><a name="en-us_topic_0151921029_ab4f39caa92d54d2ea6b3c093e55d618e"></a><a name="en-us_topic_0151921029_ab4f39caa92d54d2ea6b3c093e55d618e"></a>Hides column headings in the listing of process information.</p>
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
<td class="cellrowborder" valign="top" width="81.39%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151921029_aa7d202094de346738f7e3ad4735f2bce"><a name="en-us_topic_0151921029_aa7d202094de346738f7e3ad4735f2bce"></a><a name="en-us_topic_0151921029_aa7d202094de346738f7e3ad4735f2bce"></a>Lists all processes without controlling terminals.</p>
</td>
</tr>
</tbody>
</table>

For example, to list all processes on a terminal, run the following command:

```
# ps -a
  PID TTY          TIME CMD
12175 pts/6    00:00:00 bash
24526 pts/0    00:00:00 vsftpd
29478 pts/5    00:00:00 ps
32461 pts/0    1-01:58:33 sh
```

## top Command<a name="en-us_topic_0151921029_s52818e4ff14d465bac3ef247773998f8"></a>

Both the top and the ps commands can display a list of currently running processes, but the top command allows you to update the displayed list of processes repeatedly with the press of a button. If the top command is executed in foreground, it exclusively occupies foreground until it is terminated. The top command provides real-time visibility into system processor status. You can sort the list of CPU tasks by CPU usage, memory usage, or task execution time. Extensive customization of the display, such as choice of columns or sorting method, can be achieved using interactive commands or the customization file.

[Figure 1](#en-us_topic_0151921029_f289234fcdbac453796200d80e9889cd1)  provides an example output of the top command.

**Figure  1**  Example command output<a name="en-us_topic_0151921029_f289234fcdbac453796200d80e9889cd1"></a>  
![](figures/example-command-output.png "example-command-output")

## kill Command<a name="en-us_topic_0151921029_s0b0a419b753e4ad2ad2ff4ce2fd5b4f2"></a>

The  **kill**  command is used to terminate a process regardless of whether the process is running in foreground or background. It differs from the combo key  **Ctrl+c**, which can terminate only foreground processes. The kill command is used to terminate a process regardless of whether the process is running in foreground or background. The reason for terminating a background process can be heavy use of CPU resources or deadlock.

The kill command sends a signal to terminate running processes. By default, the TERM signal is used. The TERM signal terminates all processes incapable of capturing the TERM signal. To terminate a process capable of capturing the TERM signal, use the KILL signal \(signal ID: 9\) instead.

Two types of syntax of the kill command:

```
kill [-s signal | -p] [-a] PID…
kill -l [signal]
```

The process ID is retrieved from the ps command. The  **-s**  option indicates the signal sent to specified program. The signal details can be viewed by running the  **kill -l**  command. The  **-p**  option indicates the specified process IDs.

For example, to terminate the process with ID 1409, run the following command:

```
# kill -9 1409
```

Example output of the kill command with the -l option

```
# kill -l
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

