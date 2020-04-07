# qemu-ga<a name="EN-US_TOPIC_0225484582"></a>

## Overview<a name="section139816286159"></a>

QEMU guest agent \(qemu-ga\) is a daemon running within VMs. It allows users on a host OS to perform various management operations on the guest OS through outband channels provided by QEMU. The operations include file operations \(open, read, write, close, seek, and flush\), internal shutdown, VM suspend \(suspend-disk, suspend-ram, and suspend-hybrid\), and obtaining of VM internal information \(including the memory, CPU, NIC, and OS information\).

In some scenarios with high security requirements, qemu-ga provides the blacklist function to prevent internal information leakage of VMs. You can use a blacklist to selectively shield some functions provided by qemu-ga.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The qemu-ga installation package is  **qemu-guest-agent-**_xx_**.rpm**. It is not installed on openEuler by default.  _xx_  indicates the actual version number.  

## Procedure<a name="section165041359145412"></a>

To add a qemu-ga blacklist, perform the following steps:

1.  Log in to the VM and ensure that the qemu-guest-agent service exists and is running.

    ```
    # systemctl status qemu-guest-agent |grep Active
       Active: active (running) since Wed 2018-03-28 08:17:33 CST; 9h ago
    ```

2.  Query which  **qemu-ga**  commands can be added to the blacklist:

    ```
    # qemu-ga --blacklist ?
    guest-sync-delimited
    guest-sync
    guest-ping
    guest-get-time
    guest-set-time
    guest-info
    ...
    ```


1.  Set the blacklist. Add the commands to be shielded to  **--blacklist**  in the  **/usr/lib/systemd/system/qemu-guest-agent.service**  file. Use spaces to separate different commands. For example, to add the  **guest-file-open**  and  **guest-file-close**  commands to the blacklist, configure the file by referring to the following:

    ```
    [Service]
    ExecStart=-/usr/bin/qemu-ga \
          --blacklist=guest-file-open guest-file-close
    ```


1.  Restart the qemu-guest-agent service.

    ```
    # systemctl daemon-reload
    # systemctl restart qemu-guest-agent
    ```

2.  Check whether the qemu-ga blacklist function takes effect on the VM, that is, whether the  **--blacklist**  parameter configured for the qemu-ga process is correct.

    ```
    # ps -ef|grep qemu-ga|grep -E "blacklist=|b="
    root       727     1  0 08:17 ?        00:00:00 /usr/bin/qemu-ga --method=virtio-serial --path=/dev/virtio-ports/org.qemu.guest_agent.0 --blacklist=guest-file-open guest-file-close guest-file-read guest-file-write guest-file-seek guest-file-flush -F/etc/qemu-ga/fsfreeze-hook
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >For more information about qemu-ga, visit  [https://wiki.qemu.org/Features/GuestAgent](https://wiki.qemu.org/Features/GuestAgent).  


