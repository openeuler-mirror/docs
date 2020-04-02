# exec<a name="EN-US_TOPIC_0184808244"></a>

Syntax:  **docker exec \[**_options_**\]** _container_ _command_ **\[**_arg..._**\]**

Function: Runs a command in the container.

Parameter description:

**-d**  and  **--detach=false**: Run in the background.

**-i**  and  **--interactive=false**: Keep the STDIN of the container enabled.

**-t**  and  **--tty=false**: Allocate a virtual terminal.

**--privileged**: Executes commands in privilege mode.

**-u**  and  **--user**: Specifies the user name or UID.

Example:

```
$ sudo docker exec -ti exec_test ls
bin  etc   lib	  media  opt   root  sbin  sys	 tmp  var
dev  home  lib64  mnt	 proc  run   srv   test  usr
```

  

