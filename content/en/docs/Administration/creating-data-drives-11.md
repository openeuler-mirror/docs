# Creating Data Drives<a name="EN-US_TOPIC_0230704896"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   If a performance test needs to be performed, an independent drive is required for the data directory. You need to format and mount the drive. For details, see Method 1 or Method 2.  
>-   In a non-performance test, run the following command to create a data directory. Then skip this section.  
>    \#mkdir /data  

## Method 1: Using fdisk for Drive Management<a name="section113751451193718"></a>

1.  Create a partition, for example,  **/dev/sdb**.

    ```
    #fdisk /dev/sdb
    ```

2.  Enter  **n**  and press  **Enter**.
3.  Enter  **p**  and press  **Enter**.
4.  Enter  **1**  and press  **Enter**.
5.  Retain the default settings and press  **Enter**.
6.  Retain the default settings and press  **Enter**.
7.  Enter  **w**  and press  **Enter**.
8.  Create a file system, for example,  **xfs**.

    ```
    #mkfs.xfs /dev/sdb1
    ```

9.  Mount the partition to  **/data**  for the OS.

    ```
    #mkdir /data
    ```

    ```
    #mount /dev/sdb1 /data
    ```

10. Run the  **vi /etc/fstab**  command and edit the  **/etc/fstab**  file to enable the data drive to be automatically mounted after the system is restarted. For example, add the content in the last line, as shown in the following figure.

    In the last line,  **/dev/nvme0n1p1**  is only an example.

    ![](figures/搭建数据盘.png)


## Method 2: Using LVM for Drive Management<a name="section136055113814"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Install the LVM2 package in the image as follows:  
>1.  Configure the local yum source. For details, see  [Configuring the Repo Server](configuring-the-repo-server.md). If the repository has been configured, skip this step.  
>2.  Install LVM2.  
>    **\#yum install lvm2**  

1.  Create a physical volume, for example,  **sdb**.

    ```
    #pvcreate /dev/sdb
    ```

2.  Create a physical volume group, for example,  **datavg**.

    ```
    #vgcreate datavg  /dev/sdb
    ```

3.  Create a logical volume, for example,  **datalv**  of 600 GB.

    ```
    #lvcreate -L 600G -n datalv datavg
    ```

4.  Create a file system.

    ```
    #mkfs.xfs /dev/datavg/datalv
    ```

5.  Create a data directory and mount it.

    ```
    #mkdir /data
    ```

    ```
    #mount /dev/datavg/datalv /data
    ```

6.  Run the  **vi /etc/fstab**  command and edit the  **/etc/fstab**  file to enable the data drive to be automatically mounted after the system is restarted. For example, add the content in the last line, as shown in the following figure.

    In the last line,  **/dev/datavg/datalv**  is only an example.

    ![](figures/d1376b2a-d036-41c4-b852-e8368f363b5e.png)


