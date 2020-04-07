# Daemon Network Configuration<a name="EN-US_TOPIC_0184808198"></a>

-   After the network segment of the docker0 bridge is specified by using the  **--bip**  parameter on Docker daemon, if the  **--bip**  parameter is deleted during the next Docker daemon restart, the docker0 bridge uses the previous value of  **--bip**, even if the docker0 bridge is deleted before the restart. The reason is that Docker saves the network configuration and restores the previous configuration by default during the next restart.
-   When running the  **docker network create**  command to concurrently create networks, you can create two networks with the same name. The reason is that Docker networks are distinguished by IDs. The name is only an alias that is easy to identify and may not be unique.
-   In the Docker bridge network mode, a Docker container establishes external communication through NAT on the host. When Docker daemon starts a Docker container, a docker-proxy process is started for each port mapped on the host to access the proxy. It is recommended that you map only the necessary ports when using userland-proxy to reduce the resources consumed by the port mapping of docker-proxy.

