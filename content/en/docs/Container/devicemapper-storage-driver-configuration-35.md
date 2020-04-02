# devicemapper Storage Driver Configuration<a name="EN-US_TOPIC_0215574101"></a>

If you need to set the storage driver of Docker to devicemapper, you can also use either of the following methods to check or configure the driver:

-   Edit the  **/etc/docker/daemon.json**  file to check or configure the  **storage-driver**  field.

    ```
    cat /etc/docker/daemon.json
    {
        "storage-driver": "devicemapper"
    }
    ```


-   Edit the  **/etc/sysconfig/docker-storage**  file and check or configure the Docker daemon startup parameters.

    ```
    cat /etc/sysconfig/docker-storage 
    DOCKER_STORAGE_OPTIONS="--storage-driver=devicemapper"
    ```


## Precautions<a name="en-us_topic_0182217267_section425342310219"></a>

-   To use devicemapper, you must use the direct-lvm mode. For details about the configuration method, refer to  [https://docs.docker.com/engine/userguide/storagedriver/device-mapper-driver/\#configure-direct-lvm-mode-for-production](https://docs.docker.com/engine/userguide/storagedriver/device-mapper-driver/#configure-direct-lvm-mode-for-production).
-   When configuring devicemapper, if the system does not have sufficient space for automatic capacity expansion of thinpool, disable the automatic capacity expansion function.
-   Do not set both the following two parameters in the  **/etc/lvm/profile/docker-thinpool.profile**  file to  **100**:

    ```
    activation {   
      thin_pool_autoextend_threshold=80   
      thin_pool_autoextend_percent=20 
    }
    ```

-   You are advised to add  **--storage-opt dm.use\_deferred\_deletion=true**  and  **--storage-opt dm.use\_deferred\_removal=true**  when using devicemapper.
-   When devicemapper is used, you are advised to use Ext4 as the container file system. You need to add  **--storage-opt dm.fs=ext4**  to the configuration parameters of Docker daemon.
-   If graphdriver is devicemapper and the metadata files are damaged and cannot be restored, you need to manually restore the metadata files. Do not directly operate or tamper with metadata of the devicemapper storage driver in Docker daemon.
-   When the devicemapper LVM is used, if the devicemapper thinpool is damaged due to abnormal power-off, you cannot ensure the data integrity or whether the damaged thinpool can be restored. Therefore, you need to rebuild the thinpool.

**Precautions for Switching the devicemapper Storage Pool When the User Namespace Feature Is Enabled on Docker Daemon**

-   Generally, the path of the deviceset-metadata file is  **/var/lib/docker/devicemapper/metadata/deviceset-metadata**  during container startup.
-   If user namespaces are used, the path of the deviceset-metadata file is  **/var/lib/docker/**_userNSUID.GID_**/devicemapper/metadata/deviceset-metadata**.
-   When you use the devicemapper storage driver and the container is switched between the user namespace scenario and common scenario, the  **BaseDeviceUUID**  content in the corresponding deviceset-metadata file needs to be cleared. In the thinpool capacity expansion or rebuild scenario, you also need to clear the  **BaseDeviceUUID**  content in the deviceset-metadata file. Otherwise, the Docker service fails to be restarted.

