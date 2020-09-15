# Why Does openEuler Fail to Start After I Install It to the Second Disk?<a name="EN-US_TOPIC_0214071180"></a>

## Symptom<a name="en-us_topic_0151920731_sf8787c1a7e564af4ad6d72b45d07f036"></a>

The operating system is installed on the second disk  **sdb**  during the installation. After the operating system is restarted, the operating system fails to be started.

## Possible Cause<a name="en-us_topic_0151920731_s2c25517ecc454d8eaaa7b81616ea29e8"></a>

When openEuler is installed to the second disk, MBR and GRUB are installed to the second disk  **sdb**  by default. The following two conditions may occur:

1.  openEuler installed on the first disk is loaded and started if it is complete.
2.  openEuler installed on the first disk fails to be started from hard disks if it is incomplete.

The preceding two conditions occur because the boot loader is loaded from the first disk  **sda**  by default to start openEuler on the BIOS window. If openEuler is not installed on the  **sda**  disk, system restart fails.

## Solution<a name="en-us_topic_0151920731_s9c2d562eab3549f3a0d44f642c8c118a"></a>

This problem can be solved using either of the following two methods:

-   During the installation of openEuler, select the first disk or both disks, and install the boot loader on the first disk  **sda**.
-   After installing openEuler, restart it by modifying the disk startup sequence on the BIOS window.

