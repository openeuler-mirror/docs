# Installation Modes

> ![](./public_sys-resources/icon-notice.gif) **NOTE**
> 
> - The hardware supports only Raspberry Pi 3B/3B+/4B.
> - The installation is performed by writing images to the SD card. This section describes how to write images using Windows, Linux, and Mac.
> - The image used in this section is the Raspberry Pi image of openEuler. For details about how to obtain the image, see [Installation Preparations](./安装准备-1.html).

<!-- TOC -->

- [Installation Modes](./Installation Modes)
  - [Writing Images Using Windows](./Writing Images Using Windows)
    - [Formatting the SD Card](./Formatting the SD Card)
    - [Writing Images to the SD Card](./Writing Images to the SD Card)
  - [Writing Images Using Linux](./Writing Images Using Linux)
    - [Checking Drive Partition Information](./Checking Drive Partition Information)
    - [Unmouting the SD Card](./Unmouting the SD Card)
    - [Writing Images to the SD Card](./Writing Images to the SD Card)
  - [Writing Images Using Mac](./Writing Images Using the Mac OS)
    - [Checking Drive Partition Information](./Checking Drive Partition Information)
    - [Unmouting the SD Card](./Unmouting the SD Card)
    - [Writing Images to the SD Card](./Writing Images to the SD Card)

<!-- /TOC -->
## Writing Images Using Windows

This section uses Windows 10 as an example to describe how to write images to the SD card in the Windows environment.

### Formatting the SD Card

To format the SD card, perform the following procedures:

1. Download and install a SD card formatting tool. The following operations use SD Card Formatter as an example.

2. Start SD Card Formatter. In **Select card**, select the drive letter of the SD card to be formatted.
   
   If no image has been installed in the SD card, only one drive letter exists. In **Select card**, select the drive letter of the SD card to be formatted.
   
   If an image has been installed in the SD card, one or more drive letters exist. For example, the SD card corresponds to three drive letters: E, G, and H. In **Select card**, you can select the drive letter E of the boot partition.

3. In **Formatting options**, select a formatting mode. The default mode is **Quick format**.

4. Click **Format** to start formatting. A progress bar is displayed to show the formatting progress.

5. After the formatting is completed, the message "Formatting was successfully completed" is displayed. Click **OK**.

### Writing Images to the SD Card

> ![](./public_sys-resources/icon-notice.gif) **NOTE**   
If the compressed image file **openEuler-21.09-raspi-aarch64.img.xz** is obtained, decompress the file to obtain the **openEuler-21.09-raspi-aarch64.img** image file.

To write the **openEuler-21.09-raspi-aarch64.img** image file to the SD card, perform the following procedures:

1. Download and install a tool for writing images. The following operations use Win32 Disk Imager as an example.
2. Start Win32 Disk Imager and right-click **Run as administrator**.
3. Select the path of the image file in IMG format from the **Image File** drop-down list box.
4. In **Device**, select the drive letter of the SD card to which the image is written.
5. Click **Write**. A progress bar is displayed to show the progress of writing the image to the SD card.
6. After the write operation is completed, a dialog box is displayed, indicating that the write operation is successfully completed. Click **OK**.

## Writing Images Using Linux

This section describes how to write images to the SD card in the Linux environment.

### Checking Drive Partition Information

Run the ` **fdisk -l** ` command as the  **root**  user to obtain the drive information of the SD card. For example, the drive partition corresponding to the SD card can be  **/dev/sdb**.

### Unmouting the SD Card

1. Run the ` **df -lh** ` command to check the mounted volumes.

2. If the partitions corresponding to the SD card are not mounted, skip this step. If the partitions (for example, /dev/sdb1 and /dev/sdb3) are mounted, run the following commands as the  **root**  user to unmount them:
   
   `umount /dev/sdb1`
   
   `umount /dev/sdb3`

### Writing Images to the SD Card

1. If the image obtained is compressed, run the ` **xz -d openEuler-21.09-raspi-aarch64.img.xz** ` command to decompress the compressed file to obtain the **openEuler-21.09-raspi-aarch64.img** image file. Otherwise, skip this step.

2. Run the following command as the  **root**  user to write the `openEuler-21.09-raspi-aarch64.img` image to the SD card:
   
   `dd bs=4M if=openEuler-21.03-raspi-aarch64.img of=/dev/sdb`
   
   > ![](./public_sys-resources/icon-note.gif) **NOTE** Generally, the block size is set to 4 MB. If the write operation fails or the written image cannot be used, you can set the block size to 1 MB and try again. However, the write operation is time-consuming when the block size is set to 1 MB.

## Writing Images Using Mac

This section describes how to flash images to the SD card in the Mac environment.

### Checking Drive Partition Information

Run the ` **diskutil list** ` command as the  **root**  user to obtain the drive information of the SD card. For example, the drive partition corresponding to the SD card can be  **/dev/disk3**.

### Unmouting the SD Card

1. Run the ` **df -lh** ` command to check the mounted volumes.

2. If the partitions corresponding to the SD card are not mounted, skip this step. If the partitions (for example, dev/disk3s1 and /dev/disk3s3) are mounted, run the following commands as the  **root**  user to unmount them:
   
   `diskutil umount /dev/disk3s1`
   
   `diskutil umount /dev/disk3s3`

### Writing Images to the SD Card

1. If the image obtained is compressed, run the `xz -d openEuler-21.09-raspi-aarch64.img.xz` command to decompress the compressed file to obtain the **openEuler-21.09-raspi-aarch64.img** image file. Otherwise, skip this step.

2. Run the following command as the  **root**  user to write the image `openEuler-21.09-raspi-aarch64.img` to the SD card:
   
   `dd bs=4m if=openEuler-21.09-raspi-aarch64.img of=/dev/sdb`
   
   > ![](./public_sys-resources/icon-note.gif) **NOTE**
   >
   > Generally, the block size is set to 4 MB. If the write operation fails or the written image cannot be used, you can set the block size to 1 MB and try again. However, the write operation is time-consuming when the block size is set to 1 MB.

