# Description<a name="EN-US_TOPIC_0184808155"></a>

The running of standard OCI hooks within the lifecycle of a container is supported. There are three types of standard hooks:

-   prestart hook: executed after the  **isula start**  command is executed and before the init process of the container is started.
-   poststart hook: executed after the init process is started and before the  **isula start**  command is returned.
-   poststop hook: executed after the container is stopped and before the stop command is returned.

The configuration format specifications of OCI hooks are as follows:

-   **path**: \(Mandatory\) The value must be a character string and must be an absolute path. The specified file must have the execute permission.
-   **args**: \(Optional\) The value must be a character string array. The syntax is the same as that of  **args**  in  **execv**.
-   **env**: \(Optional\) The value must be a character string array. The syntax is the same as that of environment variables. The content is a key-value pair, for example,  **PATH=/usr/bin**.
-   **timeout**: \(Optional\) The value must be an integer that is greater than 0. It indicates the timeout interval for hook execution. If the running time of the hook process exceeds the configured time, the hook process is killed.

The hook configuration is in JSON format and usually stored in a file ended with  **json**. An example is as follows:

```
{
        "prestart": [
            {
                "path": "/usr/bin/echo",
                "args": ["arg1", "arg2"],
                "env":  [ "key1=value1"],
                "timeout": 30
            },
            {
                "path": "/usr/bin/ls",
                "args": ["/tmp"]
            }
        ],
        "poststart": [
            {
                "path": "/usr/bin/ls",
                "args": ["/tmp"],
                "timeout": 5
            }
        ],
        "poststop": [
            {
                "path": "/tmp/cleanup.sh",
                "args": ["cleanup.sh", "-f"]
            }
        ]
}
```

