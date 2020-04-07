# Impact of System Power-off<a name="EN-US_TOPIC_0184808216"></a>

When a system is unexpectedly powered off or system panic occurs, Docker daemon status may not be updated to the disk in time. As a result, Docker daemon is abnormal after the system is restarted. The possible problems include but are not limited to the following:

-   A container is created before the power-off. After the restart, the container is not displayed when the  **docker ps –a**  command is run, as the file status of the container is not updated to the disk. As a result, daemon cannot obtain the container status after the restart.
-   Before the system power-off, a file is being written. After daemon is restarted, the file format is incorrect or the file content is incomplete. As a result, loading fails.
-   As Docker database \(DB\) will be damaged during power-off, all DB files in  **data-root**  will be deleted during node restart. Therefore, the following information created before the restart will be deleted after the restart:
    -   Network: Resources created through Docker network will be deleted after the node is restarted.
    -   Volume: Resources created through Docker volume will be deleted after the node is restarted.
    -   Cache construction: The cache construction information will be deleted after the node is restarted.
    -   Metadata stored in containerd: Metadata stored in containerd will be recreated when a container is started. Therefore, the metadata stored in containerd will be deleted when the node is restarted.

        >![](public_sys-resources/icon-note.gif) **NOTE:**   
        >If you want to manually clear data and restore the environment, you can set the environment variable  **DISABLE\_CRASH\_FILES\_DELETE**  to  **true**  to disable the function of clearing DB files when the daemon process is restarted due to power-off.  



