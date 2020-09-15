# Failed to Reinstall openEuler When a Logical Volume Group That Cannot Be Activated Has Existed in openEuler<a name="EN-US_TOPIC_0214071184"></a>

## Symptom<a name="en-us_topic_0151920834_sa51c76c49f1640a08b23bca0fe61f3cf"></a>

After a disk fails, openEuler fails to be reinstalled because a logical volume group that cannot be activated has existed in openEuler.

## Possible Cause<a name="en-us_topic_0151920834_sa9ab8d9b4ab246c49f891c22d35b96ae"></a>

During the installation of openEuler, a logical volume group cannot be activated.

## Solution<a name="en-us_topic_0151920834_sdee4cf8cbe814f29be6c6b90db626f2b"></a>

Before reinstalling openEuler, restore the abnormal logical volume group to the normal status or clear it. The following uses an example:

-   Restore the abnormal logical volume group to the normal status.
    1.  Run the following command to clear the activation status of the abnormal logical volume group to ensure that the error message "Can't open /dev/sdc exclusively mounted filesystem" is not displayed:

        ```
         vgchange -a n testvg32947
        ```

    2.  Run the following command to recreate a physical volume based on the backup file:

        ```
        pvcreate --uuid JT7zlL-K5G4-izjB-3i5L-e94f-7yuX-rhkLjL --restorefile /etc/lvm/backup/testvg32947 /dev/sdc
        ```

    3.  Run the following command to restore the logical volume group information:

        ```
        vgcfgrestore testvg32947
        ```

    4.  Run the following command to reactivate the logical volume group:

        ```
         vgchange -ay testvg32947
        ```


-   Run the following commands to clear the abnormal logical volume group:

    ```
    vgchange -a n testvg32947
    vgremove -y testvg32947
    ```


