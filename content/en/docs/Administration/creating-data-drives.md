# Creating Data Drives<a name="EN-US_TOPIC_0230050744"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   When testing the ultimate performance, you are advised to attach NVMe SSDs with better I/O performance to create PostgreSQL test instances to avoid the impact of disk I/O on the performance test result. This section uses NVMe SSDs as an example. For details, see Step 1 to Step 4.  
>-   In a non-performance test, run the following command to create a data directory. Then skip this section.  
>    \#mkdir /data  

1.  Create a file system \(xfs is used as an example. Create the file system based on the site requirements.\). If a file system has been created for a disk, an error will be reported when you run this command. You can use the  **-f**  parameter to forcibly create a file system.

    ```
    #mkfs.xfs /dev/nvme0n1
    ```

2.  Create a data directory.

    ```
    #mkdir /data
    ```

3.  Mount disks.

    ```
    #mount -o noatime,nobarrier /dev/nvme0n1 /data
    ```


