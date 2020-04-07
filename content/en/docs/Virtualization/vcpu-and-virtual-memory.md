# vCPU and Virtual Memory<a name="EN-US_TOPIC_0184192749"></a>

## Overview<a name="section1023314510213"></a>

This section describes how to configure the vCPU and virtual memory.

## Elements<a name="section9646175951313"></a>

-   **vcpu**: The number of virtual processors.
-   **memory**: The size of the virtual memory.

    **unit**: The memory unit. The value can be KiB \(2<sup>10</sup>  bytes\), MiB \(2<sup>20</sup>  bytes\), GiB \(2<sup>30</sup>  bytes\), or TiB \(2<sup>40</sup>  bytes\).

-   **cpu**: The mode of the virtual processor.

    **mode**: The mode of the vCPU. The  **host-passthrough**  indicates that the architecture and features of the virtual CPU are the same as those of the host.

    Sub-element  **topology**: A sub-element of the element cpu, used to describe the topology structure of a vCPU mode.

    -   The attributes  **socket**,  **cores**, and  **threads**  of the sub-element topology describe the number of CPU sockets of a VM, the number of processor cores included in each CPU socket, and the number of hyperthreads included in each processor core, respectively. The attribute value is a positive integer, and a product of the three values is equal to the number of of vCPUs.


## Configuration Example<a name="section10403123219155"></a>

For example, if the number of vCPUs is 4, the processing mode is host-passthrough, the virtual memory is 8 GiB, the four CPUs are distributed in two CPU sockets, and hyperthreading  is not supported, the configuration is as follows:

```
<domain type='kvm'>
    ...
    <vcpu>4</vcpu>
    <memory unit='GiB'>8</memory>
    <cpu mode='host-passthrough'>
        <topology sockets='2' cores='2' threads='1'/>
    </cpu>
...
</domain>
```

