# Application Scenarios<a name="EN-US_TOPIC_0185970584"></a>

Shared and non-shared storage live migration applies to the following scenarios:

-   When a physical machine is faulty or overloaded, you can migrate the running VM to another physical machine to prevent service interruption and ensure normal service running.
-   When most physical machines are underloaded, migrate and integrate VMs to reduce the number of physical machines and improve resource utilization.
-   When the hardware of a physical server becomes a bottleneck, such as the CPU, memory, and hard disk, replace the hardware with better performance or add devices. However, you cannot stop the VM or stop services.
-   Server software upgrade, such as virtualization platform upgrade, allows the VM to be live migrated from the old virtualization platform to the new one.

Non-shared storage live migration can also be used in the following scenarios:

-   If a physical machine is faulty and the storage space is insufficient, migrate the running VM to another physical machine to prevent service interruption and ensure normal service running.
-   When the storage device of the physical machine is aged, the performance cannot support the current service data processing and becomes the bottleneck of the system performance. In this case, a storage device with higher performance needs to be used, but the VM cannot be shut down or stopped. The running VM needs to be migrated to a physical machine with better performance.

