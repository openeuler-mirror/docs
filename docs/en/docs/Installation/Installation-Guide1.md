# Installation Guide

This section describes how to enable the Raspberry Pi function after [Writing Raspberry Pi Images into the SD card](./安装方式介绍-1.html).

<!-- TOC -->
- [Installation Guide](#安装指导)
  - [Starting the System](#启动系统)
  - [Logging in to the System](#启动系统)
  - [Configuring the System](#启动系统)
    - [Expanding the Root Directory Partition](#扩展根目录分区)
    - [Connecting to the Wi-Fi Network](#连接-wifi)

<!-- /TOC -->
## Starting the System

After an image is written into the SD card, insert the SD card into the Raspberry Pi and power on the SD card.

For details about the Raspberry Pi hardware, visit the [Raspberry Pi official website](https://www.raspberrypi.org/).

## Logging in to the System

You can log in to the Raspberry Pi in either of the following ways:

1. Local login
   
   Connect the Raspberry Pi to the monitor (the Raspberry Pi video output interface is Micro HDMI), keyboard, and mouse, and start the Raspberry Pi. The Raspberry Pi startup log is displayed on the monitor. After Raspberry Pi is started, enter the user name **root** and password **openeuler** to log in.

2. SSH remote login
   
   By default, the Raspberry Pi uses the DHCP mode to automatically obtain the IP address. If the Raspberry Pi is connected to a known router, you can log in to the router to check the IP address. The new IP address is the Raspberry Pi IP address.

   **Figure 1** Obtain the IP address<a name="zh-cn_topic_0151920806_f6ff7658b349942ea87f4521c0256c313"></a>  
   ![](./figures/Obtain the IP address)
   
   According to the preceding figure, the IP address of the Raspberry Pi is **192.168.31.109**. You can run the `ssh root@192.168.1.109` command and enter the password `openeuler` to remotely log in to the Raspberry Pi.

## Configuring the System

### Expanding the Root Directory Partition

The space of the default root directory partition is small. Therefore, you need to expand the partition capacity before using it.

To expand the root directory partition capacity, perform the following procedure:

1. Run the `fdisk -l` command as the root user to check the drive partition information. The command output is as follows:
   
   ```
   # fdisk -l
   Disk /dev/mmcblk0: 14.86 GiB, 15931539456 bytes, 31116288 sectors
   Units: sectors of 1 * 512 = 512 bytes
   Sector size (logical/physical): 512 bytes / 512 bytes
   I/O size (minimum/optimal): 512 bytes / 512 bytes
   Disklabel type: dos
   Disk identifier: 0xf2dc3842
   
   Device         Boot   Start     End Sectors  Size Id Type
   /dev/mmcblk0p1 *       8192  593919  585728  286M  c W95 FAT32 (LBA)
   /dev/mmcblk0p2       593920 1593343  999424  488M 82 Linux swap / Solaris
   /dev/mmcblk0p3      1593344 5044223 3450880  1.7G 83 Linux
   ```
   
   The drive letter of the SD card is **/dev/mmcblk0**, which contains three partitions:
   
   - **/dev/mmcblk0p1**: boot partition
   - **/dev/mmcblk0p2**: swap partition
   - **/dev/mmcblk0p3**: root directory partition
   
   Here, we need to expand the capacity of `/dev/mmcblk0p3`.

2. Run the `fdisk /dev/mmcblk0` command as the root user and the interactive command line interface (CLI) is displayed. To expand the partition capacity, perform the following procedure as shown in [Figure 2](#zh-cn_topic_0151920806_f6ff7658b349942ea87f4521c0256c315).
   
   1. Enter `p` to check the partition information.
      
      Record the start sector number of `/dev/mmcblk0p3`. That is, the value in the `Start` column of the `/dev/mmcblk0p3` information. In the example, the start sector number is `1593344`.
   
   2. Enter `d` to delete the partition.
   
   3. Enter `3` or press `Enter` to delete the partition whose number is `3`. That is, the `/dev/mmcblk0p3`.
   
   4. Enter `n` to create a partition.
   
   5. Enter `p` or press `Enter` to create a partition of the `Primary` type.
   
   6. Enter `3` or press `Enter` to create a partition whose number is `3`. That is, the `/dev/mmcblk0p3`.
   
   7. Enter the start sector number of the new partition. That is, the start sector number recorded in Step `1`. In the example, the start sector number is `1593344`.
      
      > ![](./public_sys-resources/icon-notice.gif) **NOTE:**   
Do not press **Enter** or use the default parameters.
   
   8. Press `Enter` to use the last sector number by default as the end sector number of the new partition.
   
   9. Enter `N` without changing the sector ID.
   
   10. Enter `w` to save the partition settings and exit the interactive CLI.
   
   **Figure 2** Expand the partition capacity<a name="zh-cn_topic_0151920806_f6ff7658b349942ea87f4521c0256c315"></a>  
![](./figures/Expand the partition capacity)

3. Run the `fdisk -l` command as the root user to check the drive partition information and ensure that the drive partition is correct. The command output is as follows:
   
   ```
   # fdisk -l
   Disk /dev/mmcblk0: 14.86 GiB, 15931539456 bytes, 31116288 sectors
   Units: sectors of 1 * 512 = 512 bytes
   Sector size (logical/physical): 512 bytes / 512 bytes
   I/O size (minimum/optimal): 512 bytes / 512 bytes
   Disklabel type: dos
   Disk identifier: 0xf2dc3842
   
   Device         Boot   Start      End  Sectors  Size Id Type
   /dev/mmcblk0p1 *       8192   593919   585728  286M  c W95 FAT32 (LBA)
   /dev/mmcblk0p2       593920  1593343   999424  488M 82 Linux swap / Solaris
   /dev/mmcblk0p3      1593344 31116287 29522944 14.1G 83 Linux
   ```

4. Run the `resize2fs /dev/mmcblk0p3` command as the root user to increase the size of the unloaded file system.

5. Run the `df -lh` command to check the drive space information and ensure that the root directory partition has been expanded.
   
   > ![](./public_sys-resources/icon-notice.gif) **NOTE:**   
If the root directory partition is not expanded, run the `reboot` command to restart the Raspberry Pi and then run the `resize2fs /dev/mmcblk0p3` command as the root user.

### Connecting to the Wi-Fi Network

To connect to the Wi-Fi network, perform the following procedure:

1. Check the IP address and network adapter information.
   
   `ip a`
   
   Obtain information about the wireless network adapter **wlan0**:
   
   ```
   1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
       inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
       inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
   2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
       link/ether dc:a6:32:50:de:57 brd ff:ff:ff:ff:ff:ff
       inet 192.168.31.109/24 brd 192.168.31.255 scope global dynamic noprefixroute eth0
       valid_lft 41570sec preferred_lft 41570sec
       inet6 fe80::cd39:a969:e647:3043/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
   3: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
       link/ether e2:e6:99:89:47:0c brd ff:ff:ff:ff:ff:ff
   ```

2. Scan information about available Wi-Fi networks.
   
   `nmcli dev wifi`

3. Connect to the Wi-Fi network.
   
   Run the `nmcli dev wifi connect SSID password PWD` command as the root user to connect to the Wi-Fi network.
   
   In the command, `SSID` indicates the SSID of the available Wi-Fi network scanned in the preceding step, and `PWD` indicates the password of the Wi-Fi network. For example, if the `SSID` is `openEuler-wifi`and the password is `12345678`, the command for connecting to the Wi-Fi network is `nmcli dev wifi connect openEuler-wifi password 12345678`. The connection is successful.
   
   ```
   Device 'wlan0' successfully activated with '26becaab-4adc-4c8e-9bf0-1d63cf5fa3f1'.
   ```

4. Check the IP address and wireless network adapter information.
   
   `ip a`
   
   ```
   1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
       inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
       inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
   2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
       link/ether dc:a6:32:50:de:57 brd ff:ff:ff:ff:ff:ff
       inet 192.168.31.109/24 brd 192.168.31.255 scope global dynamic noprefixroute eth0
       valid_lft 41386sec preferred_lft 41386sec
       inet6 fe80::cd39:a969:e647:3043/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
   3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
       link/ether dc:a6:32:50:de:58 brd ff:ff:ff:ff:ff:ff
       inet 192.168.31.110/24 brd 192.168.31.255 scope global dynamic noprefixroute wlan0
       valid_lft 43094sec preferred_lft 43094sec
       inet6 fe80::394:d086:27fa:deba/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
   ```