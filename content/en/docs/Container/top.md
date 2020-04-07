# top<a name="EN-US_TOPIC_0184808258"></a>

Syntax:  **docker top** _container_ **\[**_ps options_**\]**

Function: Displays the processes running in a container.

Parameter description: none.

Example:

Run the top\_test container and run the  **top**  command in the container.

```
$ sudo docker top top_test
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                70045               70028               0                   15:52               pts/0               00:00:00            bash
```

The value of  **PID**  is the PID of the process in the container on the host.

