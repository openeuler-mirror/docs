# Key Features

## Brand New 5.10 Kernel

In-depth optimization of scheduling, I/O, and memory management has been performed, providing more computing capabilities such as ARM64, x86, and RISC-V.

- **Optimized scheduler**. The fairness of CFS tasks has been optimized. The NUMA aware asynchronous calling mechanism has been added so that the NVDIMM initialization is significantly improved. The SCHED\_IDLE scheduling policy is optimized to significantly reduce the scheduling delay of high-priority tasks and reduce interference to other tasks.
- **Optimized the NUMA balancing mechanism**. Better affinity, higher utilization, and fewer invalid migrations are achieved.
- **Enhanced the CPU isolation mechanism**. Interrupt isolation and unbound kthreads isolation are supported to enhance the isolation of CPU cores and avoid mutual interference between services.
- **Optimized Cgroup single-thread migration**. The dependency on the read and write semaphores of the thread group is eliminated. Time namespaces are introduced to facilitate container migration.
- **Limitable number of file handles that can be used in a container**. File handles include common file handles and network sockets. When a container is started, you can specify the `--files-limit` parameter to limit the maximum number of handles that can be opened in the container.
- **PSI support**. Pressure Stall Information (PSI) provides a method for evaluating system resources, such as the CPU, memory, and I/O pressure. An accurate detection method can help a resource user determine an appropriate workload, and can also help a system formulate an efficient resource scheduling policy, so as to maximize system resource utilization and improve user experience.
- **Optimized inter-process communication**. The **pipe/epoll\_wait** wakeup mechanism is optimized to improve the performance of waking up multiple waiting threads.
- **Enhanced memory management**. Memory control and statistics are refined, and heterogeneous memory, hot swap, and memory initialization functions are improved. More effective user control interfaces are provided. Hotspot locks and semaphores are optimized. Radical memory normalization and defragmentation are supported. The vmap/vmalloc mechanism is optimized, significantly improving the memory application efficiency. Memory maintenance and test features, such as **KASAN**, **kmemleak**, **slub\_debug**, and **oom**, are enhanced to improve the efficiency of locating and resolving memory problems.
- **Early Departure Time model switching**. It eliminates the limitation of the TCP framework during packet sending. The EDT timestamp is set for data packets based on the scheduling policy, which avoids the delay caused by large queue buffer and greatly improves the TCP performance.
- **MultiPath TCP**. MultiPath TCP improves performance and reliability in mobile and data scenarios and supports parallel transmission of multiple subflows in load balancing scenarios.
- **Log fast commit method**. EXT4 introduces a new and lightweight log method  `-fast commit`, which can greatly accelerate time-consuming operations such as `fsync` and bring better performance.
- **dm writecache feature**. The dm writecache feature is supported to improve the sequential write performance of large SSD blocks and the performance of the DDR persistent memory.
- **io\_uring**. io\_uring is a new asynchronous I/O framework and implementation. It supports the polling mode. In polling mode, the performance is greatly improved, which is close to that of the SPDK. When the queue depth is high, the performance is better.
- **ILP32**. 32-bit applications are supported in the Kunpeng 920 ARM64 environment.
- **Enhanced IMA commercial use**. Based on the open-source IMA solution, the security, performance, and ease-of-use of IMA are enhanced to facilitate commercial use.
- **Per task stack check**. Per task stack check is supported to enhance the capability of defending against ROP attacks.
- **MPAM resource management and control**. The cache QoS and memory bandwidth control technologies of the ARM64 architecture is supported.
- **SEDI-based NMI mechanism and PMU-based NMI mechanism**. Hard lockup detection is enabled. perf nmi is enabled so that the performance analysis becomes more accurate.
- **VM CPU hot swap in the ARM64 platform**. CPU hot swap is supported in ARM64 for more flexible resource allocation.
- **Enhanced ARM64 kdump**. Memory reservation for addresses greater than 4 GB is supported so that the kdump can reserve more memory space to support machines with larger memory.
- **Raspberry PI series board**s. The support for the Raspberry PI has been integrated into the native openEuler 21.03 kernel. You can directly use the openEuler 21.03 kernel source code for debugging the boards.
- **KVM virtualization in the RISC-V platform**
- **1822 iNICs**

## Kernel Hot Upgrade (NVWA)

NVWA is an OS vulnerability repair and upgrade solution that implements quick hot replacement of the kernel without affecting services.

- **The CPU park and quick kexec features** accelerate system startup and shutdown, reduce system downtime, and improve system availability.
- **The pin memory and PMem features**  ensure quick and accurate recovery of service processes and improve service resilience.
-  **The NVWA controllere** provides the gRPC communication interface, which is easy to use.

## Enhanced Virtualization Function and Maintainability

The  live migration Pro capability is extended to improve the maintainability and testability.

- **Live migration Pro feature**. multifd is enhanced to support TLS, ensuring data security during migration. Concurrent compression of live migration data is supported, improving migration performance. Statistics on data page access frequency are added for live migration data prediction in advance.
- **Performance debugging tool (vmtop).** You can dynamically view the resource usage of VMs in real time, including the CPU usage and memory usage. The x86\_64 architecture is supported.
- **I/O suspension**. I/O suspension is supported so that automatic retry is performed by default in case an I/O error occurs. If the retry times out, an alarm is reported.
- **Virtualization live migration on RISC-V architecture**

## Lightweight Virtual Runtime (StratoVirt)

Elastic memory, huge page, and system call filtering are added to enhance the performance and stability of the I/O subsystem.

- **Elastic memory**. The memory can be allocated and reclaimed based on the memory requirements of the workload. The memory reclamation speed of virtio-balloon can reach 3 GB/s.
- **Huge page**. Huge page in the lightweight framework provides continuous physical memory pages for lightweight VMs, improving VM memory access efficiency.
- **System call filtering**. The device model has been simplified and system call filtering is supported. In the simplest configuration, only 35 system calls are required, effectively reducing the system attack surface.
- **Enhanced I/O subsystem**. Multi-channel concurrent I/O capability is supported and the performance is improved. The I/O-QoS capability improves the flexibility and stability of VM I/O traffic management.

## Hierarchical Memory Management Framework (etmem)

Various memory and storage media are supported to expand the system memory capacity and reduce memory usage costs.

- **Hot and cold page identification**. The busy/idle status statistics mechanism of the kernel-mode memory page can accurately identify the cold and hot distribution of process memory page accesses.
- **Configurable elimination policies**. A configuration interface is provided to customize the cold and hot tiering policies for memory pages.
- **Smooth expansion**. Cold pages are automatically swapped out to the extended memory. The software deployed on the cold pages can run properly without changing or adapting the programming mode.
- **Multi-media expansion**. Multiple media such as SCM, XL flash, and NVMe SSD can be used as the extended memory. The cold and hot memory tiering solution is specified based on the access speed of the media to expand the memory and reduce performance loss.

## OpenStack Victoria Integration

OpenStack Victoria is a simple, scalable, rich, and standard cloud management operating system. For details about more features, see OpenStack Victoria release notes.

- **Integrated OpenStack Victoria**. OpenStack Victoria enables the IaaS solution.
- **Enhanced block storage.** Advanced functions such as capacity expansion, snapshots, and VM image cloning are supported.
- **Container-based deployment and network capabilities**. Better integration with containers is achieved.
- **Extended services**. Extended services such as control panel management, bare metal server deployment, and cloud resource tracing are supported.

## Kubernetes 1.20 Integration

Kubernetes 1.20 is a cloud-native OS used to automatically deploy, scale, and manage containerized applications. For more information, see Kubernetes 1.20 release notes.

- **Automatic rollout and rollback**. Kubernetes automatically rolls out applications or instances whose configurations have been modified and monitors the running status of the applications. If any application fails to be rolled out, Kubernetes will roll back the previous modification.
- **Service discovery and load balancing**. Service discovery and load balancing based on the container IP addresses and DNS names are supported.
- **Storage orchestration**. Automatic mounting of multiple storage backends, such as local storage, NFS, iSCSI, Gluster, and Ceph.
- **Scaleou**t. Manual scaleout on the CLI and UI, and automatic scaleout based on the CPU usage are supported.

## HA Cluster Solution

The high-availability (HA) cluster solution provided by Kylinsoft implements second-level failover and provides users with an HA environment that ensures service continuity, continuous data protection, and disaster recovery.

- **Multiple protection modes**. Protection modes such as dual-system hot backup, dual-system mutual backup, and multi-system backup (*N* + *M*) are supported to meet various protection requirements of service applications.
- **Physical machine and cloud scenarios**. HA can be configured in the VM pool, and for physical server nodes as well.
- **Network heartbeat modes (the single-heartbeat and dual-heartbeat modes)**. Shared data resources can be comprehensively monitored to ensure data consistency in extreme conditions.
- **Low resource consumption**. Online deployment is supported with secure use of protected application resources.
- **Mainstream system services and application software supported.** Nginx, httpd, MariaDB are supported. Secondary development is made possible.
- **HA-WEB man-machine interaction interfaces.** Interfaces for user login, cluster status display, and resource control are supported.
- **HA-API machine-machine interaction interfaces**. Interfaces for backend cluster control, resource management, cluster status monitoring, and resource status monitoring are supported.

## More Desktop Environments

More development desktop options and better development experience are provided.

- **Xfce.** Xfce is a lightweight Linux desktop that occupies fewer resources than mainstream UIs.
- **DDE**. DDE is a Linux desktop environment provided by Uniontech Software. It is aesthetic, easy-to-use, and efficient.