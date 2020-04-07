# wait<a name="EN-US_TOPIC_0184808260"></a>

Syntax:  **docker wait** _container_ **\[**_container..._**\]**

Function: Waits for a container to stop and print the exit code of the container:

Parameter description: none.

Example:

Run the following command to start a container named  **busybox**:

```
$ sudo docker start -i -a busybox
```

Run the  **docker wait**  command:

```
$ sudo docker wait busybox
0
```

Wait until the busybox container exits. After the busybox container exits, the exit code  **0**  is displayed.

