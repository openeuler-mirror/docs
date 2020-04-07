# Introduction<a name="EN-US_TOPIC_0183154320"></a>

## Overview<a name="section347335920351"></a>

When a VM is running on a physical machine, the physical machine may be overloaded or underloaded due to uneven resource allocation. In addition, operations such as hardware replacement, software upgrade, networking adjustment, and troubleshooting are performed on the physical machine. Therefore, it is important to complete these operations without interrupting services. The VM live migration technology implements load balancing or the preceding operations on the premise of service continuity, improving user experience and work efficiency. VM live migration is to save the running status of the entire VM and quickly restore the VM to the original or even different hardware platforms. After the VM is restored, it can still run smoothly without any difference to users. Because the VM data can be stored on the current host or a shared remote storage device, openEuler supports shared and non-shared storage live migration.

