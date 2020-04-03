# restart<a name="EN-US_TOPIC_0184808252"></a>

Syntax:  **docker restart \[**_options_**\]** _container_ **\[**_container..._**\]**

Function: Restarts a running container.

Parameter description:

**-t**  and  **--time=10**: Number of seconds to wait for the container to stop before the container is killed. If the container has stopped, restart the container. The default value is  **10**.

Example:

```
$ sudo docker restart busybox
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>During the container restart, if a process in the  **D**  or  **Z**  state exists in the container, the container may fail to be restarted. In this case, you need to analyze the cause of the  **D**  or  **Z**  state of the process in the container. Restart the container after the  **D**  or  **Z**  state of the process in the container is released.  

