# APIs<a name="EN-US_TOPIC_0184808156"></a>

Both iSulad and iSula provide the hook APIs. The default hook configurations provided by iSulad apply to all containers. The hook APIs provided by iSula apply only to the currently created container.

The default OCI hook configurations provided by iSulad are as follows:

-   Set the configuration item  **hook-spec**  in the  **/etc/isulad/daemon.json**  configuration file to specify the path of the hook configuration file. Example:  **"hook-spec": "/etc/default/isulad/hooks/default.json"**
-   Use the  **isulad --hook-spec**  parameter to set the path of the hook configuration file.

The OCI hook configurations provided by iSula are as follows:

-   **isula create --hook-spec**: specifies the path of the hook configuration file in JSON format.
-   **isula run --hook-spec**: specifies the path of the hook configuration file in JSON format.

The configuration for  **run**  takes effect in the creation phase.

