# Why Does openEuler Enter Emergency Mode After It Is Powered On?<a name="EN-US_TOPIC_0229291225"></a>

## Symptom<a name="en-us_topic_0151920822_s079358afc7a646ecac367116895121cd"></a>

openEuler enters emergency mode after it is powered on.

![](figures/en-us_image_0229291264.jpg)

## Possible Causes<a name="en-us_topic_0151920822_s5def92a13626401e865071b5f2ac127c"></a>

Damaged OS files result in disk mounting failure, or overpressured I/O results in disk mounting timeout \(threshold: 90s\).

An unexpected system power-off, and low I/O performance of disks may also cause the problem.

## Solution<a name="en-us_topic_0151920822_s76bf3c913a674441b1fb8f33ba736814"></a>

1.  Enter the password of the  **root**  account to log in to openEuler.
2.  Check and restore files by using the file system check \(fsck\) tool, and restart openEuler.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The fsck tool checks and maintains inconsistent file systems. If the system is powered off or a disk is faulty, run the  **fsck**  command to check file systems. Run the  **fsck.ext3 -h**  and  **fsck.ext4 -h**  commands to view the usage method of the fsck tool.  


If you want to disable the timeout mechanism of disk mounting, add  **x-systemd.device-timeout=0**  to the  **etc/fstab**  file. For example:

```
#
# /etc/fstab
# Created by anaconda on Mon Sep 14 17:25:48 2015
#
# Accessible filesystems, by reference, are maintained under '/dev/disk'
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info
#
/dev/mapper/openEuler-root / ext4 defaults,x-systemd.device-timeout=0 0 0
UUID=afcc811f-4b20-42fc-9d31-7307a8cfe0df /boot ext4 defaults,x-systemd.device-timeout=0 0 0
/dev/mapper/openEuler-home /home ext4 defaults 0 0
/dev/mapper/openEuler-swap swap swap defaults 0 0
```

