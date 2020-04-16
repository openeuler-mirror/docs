# Forestalling Unauthorized System Restart by Holding Down  **Ctrl**,  **Alt**, and  **Delete**<a name="EN-US_TOPIC_0192977559"></a>

## Description<a name="en-us_topic_0152100184_s1cfc95ad48354d7c99b199b3b2195eb0"></a>

By default, you can restart the OS by holding down  **Ctrl**,  **Alt**, and  **Delete**. Disabling this feature can prevent data loss caused by misoperations.

## Implementation<a name="en-us_topic_0152100184_s5f42085a686a409c9100b25f21d2490d"></a>

To disable the feature of restarting the system by holding down  **Ctrl**,  **Alt**, and  **Delete**, perform the following steps:

1.  Run the following commands to delete the two  **ctrl-alt-del.target**  files:

    ```
    rm -f /etc/systemd/system/ctrl-alt-del.target
    rm -f /usr/lib/systemd/system/ctrl-alt-del.target
    ```

2.  Change  **\#CtrlAltDelBurstAction=reboot-force**  to  **CtrlAltDelBurstAction=none**  in the  **/etc/systemd/system.conf**  file.
3.  Run the following command to restart systemd for the modification to take effect:

    ```
    systemctl daemon-reexec
    ```

