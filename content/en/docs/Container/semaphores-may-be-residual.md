# Semaphores May Be Residual<a name="EN-US_TOPIC_0184808212"></a>

When the devicemapper is used as the graphdriver, forcible killing may cause residual semaphores. Docker creates semaphores when performing operations on devicemapper. If daemon is forcibly killed before the semaphores are released, the release may fail. A maximum of one semaphore can be leaked at a time, and the leakage probability is low. However, the Linux OS has an upper limit on semaphores. When the number of semaphore leakage times reaches the upper limit, new semaphores cannot be created. As a result, Docker daemon fails to be started. The troubleshooting method is as follows:

1.  Check the residual semaphores in the system.

    ```
    $ ipcs 
    ------ Message Queues -------- 
    key        msqid      owner      perms      used-bytes   messages 
    ------ Shared Memory Segments -------- 
    key        shmid      owner      perms      bytes      nattch     status 
    ------ Semaphore Arrays -------- 
    key        semid      owner      perms      nsems 
    0x0d4d3358 238977024  root       600        1 
    0x0d4d0ec9 270172161  root       600        1 
    0x0d4dc02e 281640962  root       600        1
    ```

2.  Run the  **dmsetup**  command to check semaphores created by devicemapper. The semaphore set is the subset of the system semaphores queried in the previous step.

    ```
    $ dmsetup udevcookies 
    ```

3.  Check the upper limit of kernel semaphores. The fourth value is the upper limit of the current system semaphores.

    ```
    $ cat /proc/sys/kernel/sem 
    250     32000   32      128
    ```

    If the number of residual semaphores in step 1 is the same as the upper limit of semaphores in step 3, the number of residual semaphores reaches the upper limit. In this case, Docker daemon cannot be normally started. You can run the following command to increase the upper limit to restart Docker:

    ```
    $ echo 250 32000  32  1024 > /proc/sys/kernel/sem
    ```

    You can also run the following command to manually clear the residual devicemapper semaphores. The following describes how to clear the devicemapper semaphores applied one minute ago.

    ```
    $ dmsetup udevcomplete_all 1 
    This operation will destroy all semaphores older than 1 minutes with keys that have a prefix 3405 (0xd4d). 
    Do you really want to continue? [y/n]: y 
    0 semaphores with keys prefixed by 3405 (0xd4d) destroyed. 0 skipped.
    ```


