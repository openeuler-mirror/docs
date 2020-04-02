# Scenarios<a name="EN-US_TOPIC_0184808137"></a>

In the production environment, bugs are inevitable in applications provided by developers or services provided by platforms. Therefore, a management system is indispensable for periodically checking and repairing applications. The container health check mechanism adds a user-defined health check function for containers. When a container is created, the  **--health-cmd**  option is configured so that commands are periodically executed in the container to monitor the health status of the container based on return values.

