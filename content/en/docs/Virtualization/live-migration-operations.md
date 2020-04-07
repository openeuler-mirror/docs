# Live Migration Operations<a name="EN-US_TOPIC_0185970583"></a>

## Prerequisites<a name="section1415214341684"></a>

-   Before live migration, ensure that the source and destination hosts can communicate with each other and have the same resource permissions. That is, the source and destination hosts can access the same storage and network resources.

-   Before VM live migration, perform a health check on the VM and ensure that the destination host has sufficient CPU, memory, and storage resources.

## \(Optional\) Setting Live Migration Parameters<a name="section8902796482"></a>

Before live migration, run the  **virsh migrate-setmaxdowntime**  command to specify the maximum tolerable downtime during VM live migration. This is an optional configuration item.

For example, to set the maximum downtime of the VM named  **openEulerVM**  to  **500 ms**, run the following command:

```
# virsh migrate-setmaxdowntime openEulerVM 500
```

In addition, you can run the  **virsh migrate-setspeed**  command to limit the bandwidth occupied by VM live migration. This prevents VM live migration from occupying too much bandwidth and affecting other VMs or services on the host. This operation is also optional for live migration.

For example, to set the live migration bandwidth of the VM named  **openEulerVM**  to  **500 Mbit/s**, run the following command:

```
# virsh migrate-setspeed openEulerVM --bandwidth 500
```

You can run the  **migrate-getspeed**  command to query the maximum bandwidth during VM live migration.

```
# virsh migrate-getspeed openEulerVM
500
```

## Live Migration Operations \(Shared Storage Scenario\)<a name="section13981158396"></a>

1.  Check whether the storage device is shared.

    ```
    # virsh domblklist <VMInstanse>
     Target   Source
    --------------------------------------------
    sda      /dev/mapper/open_euleros_disk
    sdb      /mnt/nfs/images/openeuler-test.qcow2
    ```

    Run the  **virsh domblklist**  command to query the storage device information of the VM. For example, the preceding query result shows that the VM is configured with two storage devices: sda and sdb. Then, check whether the backend storage of the two devices is local storage or remote storage, if all storage devices are on the remote shared storage, the VM is a shared storage VM. Otherwise, the VM is a non-shared storage VM.

2.  Run the following command for VM live migration:

    For example, run the  **virsh migrate**  command to migrate VM  **openEulerVM**  to the destination host.

    ```
    # virsh migrate --live --unsafe openEulerVM qemu+ssh://<destination-host-ip>/system
    ```

    **<destination-host-ip\>**  indicates the IP address of the destination host. Before live migration, SSH authentication must be performed to obtain the source host management permission.

    In addition, the  **virsh migrate**  command has the  **--auto-converge**  and  **--timeout**  sub-options to ensure successful migration.

    Related sub-options:

    The  **--unsafe**  command forcibly performs live migration and skips the security check step.

    The  **--auto-converge**  command reduces the CPU frequency to ensure that the live migration process can be converged.

    The  **--timeout**  command specifies the live migration timeout period. If the live migration exceeds the specified period, the VM is forcibly suspended to reduce the live migration.

3.  After the live migration is complete, the VM is running properly on the destination host.

## Live Migration Operations \(Non-Shared Storage Scenario\)<a name="section292214021717"></a>

1.  Query the VM storage device list to ensure that the VM uses non-shared storage.

    For example, the  **virsh domblklist**  command output shows that the VM to be migrated has a disk sda in qcow2 format. The XML configuration of sda is as follows:

    ```
        <disk type='file' device='disk'>
          <driver name='qemu' type='qcow2' cache='none' io='native'/>
          <source file='/mnt/sdb/openeuler/openEulerVM.qcow2'/>
          <target dev='sda' bus='scsi'/>
          <address type='drive' controller='0' bus='0' target='0' unit='0'/>
        </disk>
    ```

    Before live migration, create a virtual disk file in the same disk directory on the destination host. Ensure that the disk format and size are the same.

    ```
    # qemu-img create -f qcow2 /mnt/sdb/openeuler/openEulerVM.qcow2 20G
    ```

2.  Run the  **virsh migrate**  command on the source to perform live migration. During the migration, the storage is also migrated to the destination.

    ```
    # virsh migrate --live  --unsafe --copy-storage-all --migrate-disks sda \
    openEulerVM qemu+ssh://<dest-host-ip>/system
    ```

3.  After the live migration is complete, the command output indicates that the VM is running properly on the destination host and the storage device is migrated to the destination host.

