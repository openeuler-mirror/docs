# stats<a name="EN-US_TOPIC_0184808256"></a>

Syntax:  **docker stats \[**_options_**\] \[**_container_**...\]**

Function: Continuously monitors and displays the resource usage of a specified container. \(If no container is specified, the resource usage of all containers is displayed by default.\)

Parameter description:

**-a**, and  **--all**: Display information about all containers. By default, only running containers are displayed.

**--no-stream**: Displays only the first result and does not continuously monitor the result.

Example:

Run the  **docker run**  command to start and create a container, and run the  **docker stats**  command to display the resource usage of the container:

```
$ sudo docker stats
CONTAINER ID        NAME                    CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
2e242bcdd682        jaeger                  0.00%               77.08MiB / 125.8GiB   0.06%               42B / 1.23kB        97.9MB / 0B         38
02a06be42b2c        relaxed_chandrasekhar   0.01%               8.609MiB / 125.8GiB   0.01%               0B / 0B             0B / 0B             10
deb9e49fdef1        hardcore_montalcini     0.01%               12.79MiB / 125.8GiB   0.01%               0B / 0B             0B / 0B             9
```

  

