# rename<a name="EN-US_TOPIC_0184808251"></a>

Syntax:  **docker rename OLD\_NAME NEW\_NAME**

Function: Renames a container.

Example:

Run the  **docker run**  command to create and start a container, run the  **docker rename**  command to rename the container, and check whether the container name is changed.

```
$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
b15976967abb        busybox:latest        "bash"              3 seconds ago       Up 2 seconds                            festive_morse
$ sudo docker rename pedantic_euler new_name
$ sudo docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
b15976967abb        busybox:latest        "bash"              34 seconds ago      Up 33 seconds                           new_name
```

  

