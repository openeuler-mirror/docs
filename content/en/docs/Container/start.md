# start<a name="EN-US_TOPIC_0184808255"></a>

Syntax:  **docker start \[**_options_**\]** _container_ **\[**_container_**...\]**

Function: Starts one or more containers that are not running.

Parameter description:

**-a**  and  **--attach=false**: Attach the standard output and error output of a container to STDOUT and STDERR of the host.

**-i**  and  **--interactive=false**: Attach the standard input of the container to the STDIN of the host.

Example:

Run the following command to start a container named  **busybox**  and add the  **-i -a**  to the command to add standard input and output. After the container is started, directly enter the container. You can exist the container by entering  **exit**.

If  **-i -a**  is not added to the command when the container is started, the container is started in the background.

```
$ sudo docker start -i -a busybox
```

