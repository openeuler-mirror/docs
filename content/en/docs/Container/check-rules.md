# Check Rules<a name="EN-US_TOPIC_0184808139"></a>

1.  After a container is started, the container status is  **health:starting**.
2.  After the period specified by  **start-period**, the  **cmd**  command is periodically executed in the container at the interval specified by  **interval**. That is, after the command is executed, the command will be executed again after the specified period.
3.  If the  **cmd**  command is successfully executed within the time specified by  **timeout**  and the return value is  **0**, the check is successful. Otherwise, the check fails. If the check is successful, the container status changes to  **health:healthy**.
4.  If the  **cmd**  command fails to be executed for the number of times specified by  **retries**, the container status changes to  **health:unhealthy**, and the container continues the health check.
5.  When the container status is  **health:unhealthy**, the container status changes to  **health:healthy**  if a check succeeds.
6.  If  **--exit-on-unhealthy**  is set, and the container exits due to reasons other than being killed \(the returned exit code is  **137**\), the health check takes effect only after the container is restarted.
7.  When the  **cmd**  command execution is complete or times out, Docker daemon will record the start time, return value, and standard output of the check to the configuration file of the container. A maximum of five records can be recorded. In addition, the configuration file of the container stores health check parameters.
8.  When the container is running, the health check status is written into the container configurations. You can run the  **isula inspect**  command to view the status.

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

