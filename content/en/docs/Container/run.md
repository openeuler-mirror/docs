# run<a name="EN-US_TOPIC_0184808254"></a>

Syntax:  **docker run \[**_options_**\] **_image_ **\[**_command_**\] \[**_arg_**...\]**

Function: Creates a container from a specified image \(if the specified image does not exist, an image is downloaded from the official image registry\), starts the container, and runs the specified command in the container. This command integrates the  **docker create**,  **docker start**, and  **docker exec**  commands.

Parameter description: \(The parameters of this command are the same as those of the  **docker create**  command. For details, see the parameter description of the  **docker create**  command. Only the following two parameters are different.\)

**--rm=false**: Specifies the container to be automatically deleted when it exits.

**-v**: Mounts a local directory or an anonymous volume to the container. Note: When a local directory is mounted to a container with a SELinux security label, do not add or delete the local directory at the same time. Otherwise, the security label may not take effect.

**--sig-proxy=true**: Receives proxy of the process signal. SIGCHLD, SIGSTOP, and SIGKILL do not use the proxy.

Example:

Run the busybox image to start a container and run the  **/bin/sh**  command after the container is started:

```
$ sudo docker run -ti busybox /bin/sh
```

