# attach<a name="EN-US_TOPIC_0184808239"></a>

Syntax:  **docker attach \[**_options_**\]** _container_

Function: Attaches an option to a running container.

Parameter description:

**--no-stdin=false**: Does not attach any STDIN.

**--sig-proxy=true**: Proxies all signals of the container, except SIGCHLD, SIGKILL, and SIGSTOP.

Example:

```
$ sudo docker attach attach_test
root@2988b8658669:/# ls bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```

