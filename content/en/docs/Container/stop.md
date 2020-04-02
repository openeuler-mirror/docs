# stop<a name="EN-US_TOPIC_0184808257"></a>

Syntax:  **docker stop \[**_options_**\]** _container_ **\[**_container_**...\]**

Function: Sends a SIGTERM signal to a container and then sends a SIGKILL signal to stop the container after a certain period.

Parameter description:

**-t**  and  **--time=10**: Number of seconds that the system waits for the container to exit before the container is killed. The default value is  **10**.

Example:

```
$ sudo docker stop -t=15 busybox
```

