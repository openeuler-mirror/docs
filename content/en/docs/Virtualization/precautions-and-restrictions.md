# Precautions and Restrictions<a name="EN-US_TOPIC_0185970582"></a>

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

