# Usage Restrictions<a name="EN-US_TOPIC_0184808140"></a>

-   A maximum of five health check status records can be stored in a container. The last five records are saved.
-   If health check parameters are set to  **0**  during container startup, the default values are used.
-   After a container with configured health check parameters is started, if iSulad daemon exits, the health check is not executed. After iSulad daemon is restarted, the health status of the running container changes to  **starting**. Afterwards, the check rules are the same as above.
-   If the health check fails for the first time, the health check status will not change from  **starting**  to  **unhealthy**  until the specified number of retries \(**--health-retries**\) is reached, or to  **healthy**  until the health check succeeds.
-   The health check function of containers whose runtime is of the Open Container Initiative \(OCI\) type needs to be improved. Only containers whose runtime is of the LCR type are supported.

