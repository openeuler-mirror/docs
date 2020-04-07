# Configuring Host NUMA<a name="EN-US_TOPIC_0187048013"></a>

To improve VM performance, you can specify NUMA nodes for a VM using the VM XML configuration file before the VM is started so that the VM memory is allocated to the specified NUMA nodes. This feature is usually used together with the vCPU to prevent the vCPU from remotely accessing the memory.

## Procedure<a name="section13996950155118"></a>

-   Check the NUMA topology of the host.

    ```
     # numactl -H
    available: 4 nodes (0-3)
    node 0 cpus: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
    node 0 size: 31571 MB
    node 0 free: 17095 MB
    node 1 cpus: 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
    node 1 size: 32190 MB
    node 1 free: 28057 MB
    node 2 cpus: 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47
    node 2 size: 32190 MB
    node 2 free: 10562 MB
    node 3 cpus: 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63
    node 3 size: 32188 MB
    node 3 free: 272 MB
    node distances:
    node   0   1   2   3
      0:  10  15  20  20
      1:  15  10  20  20
      2:  20  20  10  15
      3:  20  20  15  10
    ```

-   Add the  **numatune**  field to the VM XML configuration file to create and start the VM. For example, to allocate NUMA node 0 on the host to the VM, configure parameters as follows:

    ```
      <numatune>
        <memory mode="strict" nodeset="0"/>
      </numatune>
    ```

    If the vCPU of the VM is bound to the physical CPU of  **node 0**, the performance deterioration caused by the vCPU accessing the remote memory can be avoided.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   The sum of memory allocated to the VM cannot exceed the remaining available memory of the NUMA node. Otherwise, the VM may fail to start.  
    >-   You are advised to bind the VM memory and vCPU to the same NUMA node to avoid the performance deterioration caused by vCPU access to the remote memory. For example, bind the vCPU to NUMA node 0 as well.  


