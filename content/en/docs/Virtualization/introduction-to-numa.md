# Introduction to NUMA<a name="EN-US_TOPIC_0187048012"></a>

Traditional multi-core computing uses the symmetric multi-processor \(SMP\) mode. Multiple processors are connected to a centralized memory and I/O bus. All processors can access only the same physical memory. Therefore, the SMP system is also referred to as a uniform memory access \(UMA\) system. Uniformity means that a processor can only maintain or share a unique value for each data record in memory at any time. Obviously, the disadvantage of SMP is its limited scalability, because when the memory and the I/O interface are saturated, adding a processor cannot obtain higher performance.

The non-uniform memory access architecture \(NUMA\) is a distributed memory access mode. In this mode, a processor can access different memory addresses at the same time, which greatly improves concurrency. With this feature, a processor is divided into multiple nodes, each of which is allocated a piece of local memory space. The processors of all nodes can access all physical memories, but the time required for accessing the memory on the local node is much shorter than that on a remote node.

