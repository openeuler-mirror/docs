# Configuring Health Check During Container Creation<a name="EN-US_TOPIC_0184808228"></a>

Docker provides the user-defined health check function for containers. You can configure the  **HEALTHCHECK CMD**  option in the Dockerfile, or configure the  **--health-cmd**  option when a container is created so that commands are periodically executed in the container to monitor the health status of the container based on return values.

## Configuration Methods<a name="en-us_topic_0182302402_section20733184718277"></a>

-   Add the following configurations to the Dockerfile file:

    ```
    HEALTHCHECK --interval=5m --timeout=3s --health-exit-on-unhealthy=true \
       CMD curl -f http://localhost/ || exit 1
    ```

    The configurable options are as follows:

    1.  **--interval=DURATION**: interval between two consecutive command executions. The default value is  **30s**. After a container is started, the first check is performed after the interval time.
    2.  **--timeout=DURATION**: maximum duration for executing a single check command. If the execution times out, the command execution fails. The default value is  **30s**.
    3.  **--start-period=DURATION**: container initialization period. The default value is  **0s**. During the initialization, the health check is also performed, while the health check failure is not counted into the maximum number of retries. However, if the health check is successful during initialization, the container is considered as started. All subsequent consecutive check failures are counted in the maximum number of retries.
    4.  **--retries=N**. maximum number of retries for the health check. The default value is  **3**.
    5.  **--health-exit-on-unhealthy=BOOLEAN**: whether to kill a container when it is unhealthy. The default value is  **false**.
    6.  **CMD**: This option is mandatory. If  **0**  is returned after a command is run in a container, the command execution succeeds. If a value other than  **0**  is returned, the command execution fails.

        After  **HEALTHCHECK**  is configured, related configurations are written into the image configurations during image creation. You can run the  **docker inspect**  command to view the configurations. For example:

        ```
        "Healthcheck": {
            "Test": [
                "CMD-SHELL",
                "/test.sh"
            ]
        },
        ```


-   Configurations during container creation:

    ```
    docker run -itd --health-cmd "curl -f http://localhost/ || exit 1" --health-interval 5m --health-timeout 3s --health-exit-on-unhealthy centos bash
    ```

    The configurable options are as follows:

    1.  **--health-cmd**: This option is mandatory. If  **0**  is returned after a command is run in a container, the command execution succeeds. If a value other than  **0**  is returned, the command execution fails.
    2.  **--health-interval**: interval between two consecutive command executions. The default value is  **30s**. The upper limit of the value is the maximum value of Int64 \(unit: nanosecond\).
    3.  **--health-timeout**: maximum duration for executing a single check command. If the execution times out, the command execution fails. The default value is  **30s**. The upper limit of the value is the maximum value of Int64 \(unit: nanosecond\).
    4.  **--health-start-period**: container initialization time. The default value is  **0s**. The upper limit of the value is the maximum value of Int64 \(unit: nanosecond\).
    5.  **--health-retries**: maximum number of retries for the health check. The default value is  **3**. The maximum value is the maximum value of Int32.
    6.  **--health-exit-on-unhealthy**: specifies whether to kill a container when it is unhealthy. The default value is  **false**.

        After the container is started, the  **HEALTHCHECK**  configurations are written into the container configurations. You can run the  **docker inspect**  command to view the configurations. For example:

        ```
        "Healthcheck": {
            "Test": [
                "CMD-SHELL",
                "/test.sh"
            ]
        },
        ```



## Check Rules<a name="en-us_topic_0182302402_section11838258122711"></a>

1.  After a container is started, the container status is  **health:starting**.
2.  After the period specified by  **start-period**, the  **cmd**  command is periodically executed in the container at the interval specified by  **interval**. That is, after the command is executed, the command will be executed again after the specified period.
3.  If the  **cmd**  command is successfully executed within the time specified by  **timeout**  and the return value is  **0**, the check is successful. Otherwise, the check fails. If the check is successful, the container status changes to  **health:healthy**.
4.  If the  **cmd**  command fails to be executed for the number of times specified by  **retries**, the container status changes to  **health:unhealthy**, and the container continues the health check.
5.  When the container status is  **health:unhealthy**, the container status changes to  **health:healthy**  if a check succeeds.
6.  If  **--health-exit-on-unhealthy**  is set, and the container exits due to reasons other than being killed \(the returned exit code is  **137**\), the health check takes effect only after the container is restarted.
7.  When the  **cmd**  command execution is complete or times out, Docker daemon will record the start time, return value, and standard output of the check to the configuration file of the container. A maximum of five latest records can be recorded. In addition, the configuration file of the container stores health check parameters.

Run the  **docker ps**  command to view the container status.

```
[root@bac shm]# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                         PORTS               NAMES
7de2228674a2        testimg             "bash"              About an hour ago   Up About an hour (unhealthy)                       cocky_davinci
```

When the container is running, the health check status is written into the container configurations. You can run the  **docker inspect**  command to view the configurations.

```
"Health": {
    "Status": "healthy",
    "FailingStreak": 0,
    "Log": [
        {
            "Start": "2018-03-07T07:44:15.481414707-05:00",
            "End": "2018-03-07T07:44:15.556908311-05:00",
            "ExitCode": 0,
            "Output": ""
        },
        {
            "Start": "2018-03-07T07:44:18.557297462-05:00",
            "End": "2018-03-07T07:44:18.63035891-05:00",
            "ExitCode": 0,
            "Output": ""
        },
        ......
}
```

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   A maximum of five health check status records can be stored in a container. The last five records are saved.  
>-   Only one health check configuration item can take effect in a container at a time. The later items configured in the Dockerfile will overwrite the earlier ones. Configurations during container creation will overwrite those in images.  
>-   In the Dockerfile, you can set  **HEALTHCHECK NONE**  to cancel the health check configuration in a referenced image. When a container is running, you can set  **--no-healthcheck**  to cancel the health check configuration in an image. Do not configure the health check and  **--no-healthcheck**  parameters at the same time during the startup.  
>-   After a container with configured health check parameters is started, if Docker daemon exits, the health check is not executed. After Docker daemon is restarted, the container health status changes to  **starting**. Afterwards, the check rules are the same as above.  
>-   If health check parameters are set to  **0**  during container image creation, the default values are used.  
>-   If health check parameters are set to  **0**  during container startup, the default values are used.  

