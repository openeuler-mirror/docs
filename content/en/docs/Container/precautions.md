# Precautions<a name="EN-US_TOPIC_0232396547"></a>

-   The  **docker-engine**  RPM package cannot be installed together with the  **containerd**,  **runc**, or  **podman**  RPM package. This is because the  **docker-engine**  RPM package contains all components required for Docker running, including  **containerd**,  **runc**, and  **docker**  binary files. Yet the  **containerd**,  **runc**, and  **podman**  RPM packages also contain the corresponding binary files. Software package conflicts may occur due to repeated installation.

