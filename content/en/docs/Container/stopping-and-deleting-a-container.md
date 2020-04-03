# Stopping and Deleting a Container<a name="EN-US_TOPIC_0184808229"></a>

Run the  **docker stop**  command to stop the container named  **container1**.

```
[root@localhost ~]# docker stop container1
```

Or run the  **docker kill**  command to kill and stop the container.

```
[root@localhost ~]# docker kill container1
```

After the container is stopped, run the  **docker rm**  command to delete the container.

```
[root@localhost ~]# docker rm container1
```

Or run the  **docker rm -f**  command to forcibly delete the container.

```
[root@localhost ~]# docker rm -f container1
```

## Precautions<a name="en-us_topic_0182302403_section3379521174917"></a>

-   Do not run the  **docker rm –f **_XXX_  command to delete a container. If you forcibly delete a container, the  **docker rm**  command ignores errors during the process, which may cause residual metadata of the container. If you delete an image in common mode and an error occurs during the deletion process, the deletion fails and no metadata remains.
-   Do not run the  **docker kill**  command. The  **docker kill**  command sends related signals to service processes in a container. Depending on the signal processing policies of service processes in the container may cause the result that the signal execution cannot be performed as expected.
-   A container in the restarting state may not stop immediately when you run the  **docker stop**  command. If a container uses the restart rules, when the container is in the restarting state, there is a low probability that the  **docker stop**  command on the container returns immediately. The container will still be restarted with the impact of the restart rule.
-   Do not run the  **docker restart**  command to restart a container with the  **--rm**  parameter. When a container with the  **--rm**  parameter exits, the container is automatically deleted. If the container with the  **--rm**  parameter is restarted, exceptions may occur. For example, if both the  **--rm**  and  **-ti**  parameters are added when the container is started, the restart operation cannot be performed on the container, otherwise, the container may stop responding and cannot exit.

## When Using docker stop/restart to Specify -t and t<0, Ensure That Applications in the Container Can Process Stop Signal<a name="en-us_topic_0182302403_section108315281496"></a>

Stop Principle: \(The stop process is called by  **Restart**.\)

1.  The SIGTERM \(15\) signal can be sent to a container for the first time.
2.  Wait for a period of time \(**t**  entered by the user\).
3.  If the container process still exists, send the SIGKILL \(9\) signal to forcibly kill the process.

The meaning of the input parameter  **t**  \(unit: s\) is as follows:

-   **t**  < 0: Wait for graceful stop. This setting is preferred when users are assured that their applications have a proper stop signal processing mechanism.
-   **t**  = 0: Do not wait and send  **kill -9**  to the container immediately.
-   **t**  \> 0: Wait for a specified period and send  **kill -9**  to the container if the container does not stop within the specified period.

Therefore, if  **t**  is set to a value less than 0 \(for example,  **t**  =  **-1**\), ensure that the container application correctly processes the SIGTERM signal. If the container ignores this signal, the container will be suspended when the  **docker stop**  command is run.

## Manually Deleting Containers in the Dead State As the Underlying File System May Be Busy<a name="en-us_topic_0182302403_section550784274912"></a>

When Docker deletes a container, it stops related processes of the container, changes the container status to Dead, and then deletes the container rootfs. When the file system or devicemapper is busy, the last step of deleting rootfs fails. Run the  **docker ps -a**  command. The command output shows that the container is in the Dead state. Containers in the Dead state cannot be started again. Wait until the file system is not busy and run the  **docker rm**  command again to delete the containers.

## In PID namespace Shared Containers, If Child Container Is in pause State, Parent Container Stops Responding and the docker run Command Cannot Be Executed<a name="en-us_topic_0182302403_section12464421336"></a>

When the  **--pid**  parameter is used to create the parent and child containers that share PID namespace, if any process in the child container cannot exit \(for example, it is in the D or pause state\) when the  **docker stop**  command is executed, the  **docker stop**  command of the parent container is waiting. You need to manually recover the process so that the command can be executed normally.

In this case, run the  **docker inspect**  command on the container in the pause state to check whether the parent container corresponding to  **PidMode**  is the container that requires  **docker stop**. For the required container, run the  **docker unpause**  command to cancel the pause state of the child container. Then, proceed to the next step.

Generally, the possible cause is that the PID namespace corresponding to the container cannot be destroyed due to residual processes. If the problem persists, use Linux tools to obtain the residual processes and locate the cause of the process exit failure in PID namespace. After the problem is solved, the container can exit.

-   Obtain PID namespace ID in a container.

    ```
    docker inspect --format={{.State.Pid}} CONTAINERID | awk '{print  "/proc/"$1"/ns/pid"}' |xargs readlink
    ```

-   Obtain threads in the namespace.

    ```
     ls -l /proc/*/task/*/ns/pid |grep -F PIDNAMESPACE_ID |awk '{print $9}' |awk -F  \/ '{print $5}'
    ```


