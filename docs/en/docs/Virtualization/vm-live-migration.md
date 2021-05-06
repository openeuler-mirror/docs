# VM Live Migration

- [VM Live Migration](#vm-live-migration)
    - [Introduction](#introduction-1)
    - [Application Scenarios](#application-scenarios)
    - [Precautions and Restrictions](#precautions-and-restrictions)
    - [Live Migration Operations](#live-migration-operations)


## Introduction

### Overview

When a VM is running on a physical machine, the physical machine may be overloaded or underloaded due to uneven resource allocation. In addition, operations such as hardware replacement, software upgrade, networking adjustment, and troubleshooting are performed on the physical machine. Therefore, it is important to complete these operations without interrupting services. The VM live migration technology implements load balancing or the preceding operations on the premise of service continuity, improving user experience and work efficiency. VM live migration is to save the running status of the entire VM and quickly restore the VM to the original or even different hardware platforms. After the VM is restored, it can still run smoothly without any difference to users. Because the VM data can be stored on the current host or a shared remote storage device, openEuler supports shared and non-shared storage live migration.

## Application Scenarios

Shared and non-shared storage live migration applies to the following scenarios:

-   When a physical machine is faulty or overloaded, you can migrate the running VM to another physical machine to prevent service interruption and ensure normal service running.
-   When most physical machines are underloaded, migrate and integrate VMs to reduce the number of physical machines and improve resource utilization.
-   When the hardware of a physical server becomes a bottleneck, such as the CPU, memory, and hard disk, replace the hardware with better performance or add devices. However, you cannot stop the VM or stop services.
-   Server software upgrade, such as virtualization platform upgrade, allows the VM to be live migrated from the old virtualization platform to the new one.

Non-shared storage live migration can also be used in the following scenarios:

-   If a physical machine is faulty and the storage space is insufficient, migrate the running VM to another physical machine to prevent service interruption and ensure normal service running.
-   When the storage device of the physical machine is aged, the performance cannot support the current service data processing and becomes the bottleneck of the system performance. In this case, a storage device with higher performance needs to be used, but the VM cannot be shut down or stopped. The running VM needs to be migrated to a physical machine with better performance.

## Precautions and Restrictions

-   During the live migration, ensure that the network is in good condition. If the network is interrupted, live migration is suspended until the network is recovered. If the network connection times out, live migration fails.
-   During the migration, do not perform operations such as VM life cycle management and VM hardware device management.
-   During VM migration, ensure that the source and destination servers are not powered off or restarted unexpectedly. Otherwise, the live migration fails or the VM may be powered off.
-   Do not shut down, restart, or restore the VM during the migration. Otherwise, the live migration may fail. If you perform live migration when the VM is rebooted in ACPI mode, the VM will be shut down.

-   Only homogeneous live migration is supported. That is, the CPU models of the source and destination must be the same.
-   A VM can be successfully migrated across service network segments. However, network exceptions may occur after the VM is migrated to the destination. To prevent this problem, ensure that the service network segments to be migrated are the same.
-   If the number of vCPUs on the source VM is greater than that on the destination physical machine, the VM performance will be affected after the migration. Ensure that the number of vCPUs on the destination physical machine is greater than or equal to that on the source VM.

Precautions for live migration of non-shared storage:

-   The source and destination cannot be the same disk image file. You need to perform special processing on such migration to prevent image damage caused by data overwriting.
-   Shared disks cannot be migrated. You need to perform foolproof operations on such migration.
-   The destination image supports only files and does not support raw devices. You need to perform foolproof processing on the migration of raw devices.
-   The size and number of disk images created on the destination must be the same as those on the source. Otherwise, the migration fails.
-   In hybrid migration scenarios, the disks to be migrated must not include shared and read-only disks.

## Live Migration Operations

### Prerequisites

-   Before live migration, ensure that the source and destination hosts can communicate with each other and have the same resource permissions. That is, the source and destination hosts can access the same storage and network resources.

-   Before VM live migration, perform a health check on the VM and ensure that the destination host has sufficient CPU, memory, and storage resources.

### Prediction of the Dirty Page Rate During Live Migration (Optional)

Before migrating a VM, you can use the dirtyrate function to obtain the dirty page change rate of the live migration and evaluate whether the VM is suitable for migration or configure proper migration parameters based on the VM memory usage.

Procedure:

For example, if the VM name is openEulerVM and the calculation time is 1s, run the following command:

```
virsh qemu-monitor-command openEulerVM '{"execute":"calc-dirty-rate", "arguments": {"calc-time": 1}}
```

After 1s, run the following command to query the dirty page change rate:

```
virsh qemu-monitor-command openEulerVM '{"execute":"query-dirty-rate"}'
```



### \(Optional\) Setting Live Migration Parameters

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

You can use migrate-set-parameters to set parameters related to live migration. The following table lists the parameters related to live migration compression:

1. compress-level: Compression level. The default value is 1.
2. compress-threads: Number of compression threads. The default value is 8.
3. compress-wait-thread: Whether to wait for the compression thread. The default value is true.
4. decompress-threads: Number of decompression threads. The default value is 2.
5. compress-method: Compression algorithm (zlib or zstd). The default value is zlib.

For example, set the live migration algorithm of the VM named _openEulerVM_ to zstd and retain the default values for other parameters.

```
# virsh qemu-monitor-command openeulerVM '{ "execute": "migrate-set-parameters", "arguments": {"compress-method": "zstd"}}'
```

You can run the query-migrate-parameters command to query parameters related to live migration.
```
# virsh qemu-monitor-command openeulerVM '{ "execute": "query-migrate-parameters"}' --pretty

{
  "return": {
    "xbzrle-cache-size": 67108864,
    "cpu-throttle-initial": 20,
    "announce-max": 550,
    "decompress-threads": 2,
    "compress-threads": 8,
    "compress-level": 1,
    "compress-method": "zstd",
    "multifd-channels": 2,
    "announce-initial": 50,
    "block-incremental": false,
    "compress-wait-thread": true,
    "downtime-limit": 300,
    "tls-authz": "",
    "announce-rounds": 5,
    "announce-step": 100,
    "tls-creds": "",
    "max-cpu-throttle": 99,
    "max-postcopy-bandwidth": 0,
    "tls-hostname": "",
    "max-bandwidth": 33554432,
    "x-checkpoint-delay": 20000,
    "cpu-throttle-increment": 10
  },
  "id": "libvirt-18"
}
```


### Live Migration Operations \(Shared Storage Scenario\)

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

### Live Migration Operations \(Non-Shared Storage Scenario\)

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

### Live Migration Operations (Encrypted Transmission)

1. Overview

To better encrypt data during VM live migration, openEuler provides the TLS encryption feature. Almost all network services in QEMU can use TLS to encrypt session data and use X509 certificates to perform simple identity authentication on clients.

2. Application Scenarios

A typical application scenario is to ensure data security when VM data is transmitted between the source end and the target end during live migration.

3. Precautions

Before using TLS to live migrate VMs, you need to apply for certificates and set certificates on the source and destination ends. Before using the TLS function, you need to enable the peer authentication configuration item and set migrate_tls_x509_verify to 1 in /etc/libvirt/qemu.conf.

The service interruption duration and migration duration of single-channel TLS live migration increase significantly. The upper limit of the migration bandwidth is 100 MB/s to 200 MB/s. As a result, the migration may fail.

The multiFd can be used to perform multi-channel TLS migration. However, the CPU overhead increases (two more migration threads are enabled), which may affect VM running. You are advised to set the CPU affinity of the live migration thread to isolate the CPU resources used by the live migration thread from the CPU resources bound to the VM process. You are advised to bind two CPUs to each VM to be migrated.

4. How to Use

Single-channel live migration encryption transmission command

```
virsh migrate --live --unsafe --tls --domain openEulerVM --desturi qemu+tcp://<destination-host-ip>/system --migrateuri tcp://<destionation-host-ip>
```

Encrypted transmission commands for multi-channel live migration

```
virsh migrate --live --unsafe --parallel --tls --domain openEulerVM --desturi qemu+tcp://<destination-host-ip>/system --migrateuri tcp://<destionation-host-ip>
```


