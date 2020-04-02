# Failed to Restart a Container<a name="EN-US_TOPIC_0184808214"></a>

If container hook takes a long time, and containerd is forcibly killed during container startup, the container start operation may fail. When containerd is forcibly killed during container startup, an error is returned for the Docker start operation. After containerd is restarted, the last startup may still be in the  **runc create**  execution phase \(executing the user-defined hook may take a long time\). If you run the  **docker start**  command again to start the container, the following error message may be displayed:

```
Error response from daemon: oci runtime error: container with id exists: xxxxxx
```

This error is caused by running  **runc create**  on an existing container \(or being created\). After the  **runc create**  operation corresponding to the first start operation is complete, the  **docker start**  command can be successfully executed.

The execution of hook is not controlled by Docker. In this case, if the container is recycled, the containerd process may be suspended when an unknown hook program is executed. In addition, the risk is controllable \(although the creation of the current container is affected in a short period\).

-   After the first operation is complete, the container can be successfully started again.
-   Generally, a new container is created after the container fails to be started. The container that fails to be started cannot be reused.

In conclusion, this problem has a constraint on scenarios.

