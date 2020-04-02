# Daemon Start Time<a name="EN-US_TOPIC_0184808200"></a>

The Docker service is managed by systemd, which restricts the startup time of each service. If the Docker service fails to be started within the specified time, the possible causes are as follows:

-   If Docker daemon is started for the first time using devicemapper, the Docker daemon needs to perform the initialization operation on the device. This operation, however, will perform a large number of disk I/O operations. When the disk performance is poor or many I/O conflicts exist, the Docker daemon startup may time out. devicemapper needs to be initialized only once and does not need to be initialized again during later Docker daemon startup.
-   If the usage of the current system resources is too high, the system responses slowly, all operations in the system slow down, and the startup of the Docker service may time out.
-   During the restart, a daemon traverses and reads configuration files and the init layer and writable layer configurations of each container in the Docker working directory. If there are too many containers \(including the created and exited containers\) in the current system and the disk read and write performance is limited, the startup of the Docker service may time out due to the long-time daemon traversing.

  

If the service startup times out, you are advised to rectify the fault as follows:

-   Ensure that the container orchestration layer periodically deletes unnecessary containers, especially the exited containers.
-   Based on performance requirements of the solution, adjust the cleanup period of the orchestration layer and the start time of the Docker service.

