# Configuration Methods<a name="EN-US_TOPIC_0184808138"></a>

Configurations during container startup:

```
isula run -itd --health-cmd "echo iSulad >> /tmp/health_check_file || exit 1" --health-interval 5m --health-timeout 3s --health-exit-on-unhealthy  busybox bash
```

The configurable options are as follows:

-   **--health-cmd**: This option is mandatory. If  **0**  is returned after a command is run in a container, the command execution succeeds. If a value other than  **0**  is returned, the command execution fails.
-   **--health-interval**: interval between two consecutive command executions. The default value is  **30s**. The value ranges from  **1s**  to the maximum value of Int64 \(unit: nanosecond\). If the input parameter is set to  **0s**, the default value is used.
-   **--health-timeout**: maximum duration for executing a single check command. If the execution times out, the command execution fails. The default value is  **30s**. The value ranges from  **1s**  to the maximum value of Int64 \(unit: nanosecond\). If the input parameter is set to  **0s**, the default value is used. Only containers whose runtime is of the LCR type are supported.
-   **--health-start-period**: container initialization time. The default value is  **0s**. The value ranges from  **1s**  to the maximum value of Int64 \(unit: nanosecond\).
-   **--health-retries**: maximum number of retries for the health check. The default value is  **3**. The maximum value is the maximum value of Int32.
-   **--health-exit-on-unhealthy**: specifies whether to kill a container when it is unhealthy. The default value is  **false**.

