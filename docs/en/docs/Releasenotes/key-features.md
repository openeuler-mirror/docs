# Key Features

## Innovations Based on Linux Kernel 5.10

In-depth optimizations of scheduling, I/O, and memory management have been performed, and various computing power, such as ARM64, x86, and RISC-V is supported.

- **Dynamic kernel preemption**: The new boot option **preempt=none/voluntary/full** is added to allow the kernel to dynamically switch the preemption mode.

- **mremap performance optimization**: Entries at the PMD and PUD levels can be moved to accelerate the speed of mapping large memory blocks.

- **per memcg lru lock**: It alleviates lock contention between cloud native container instances and improve system performance.

- **Huge page memory management optimization**: The tail pages among HugeTLB huge pages are released in shared mapping mode to reduce the overhead and memory usage incurred in managing the huge page memory.

- **Concurrent translation lookaside buffer (TLB) updates**: The local TLB and remote TLB can be updated at the same time to optimize the TLB shootdown process. The benefits are quicker TLB updates and improved service performance.

- **Huge page vmalloc performance optimization**: When calling vmalloc() to allocate spaces that exceed the minimum size of huge pages, the huge page instead of the base page is used to map the memory, improving the TLB usage and reducing TLB misses.



## File System for New Media

- Eulerfs has the innovative metadata soft update technology. Its pointer-based directory dual-view counting mechanism reduces metadata synchronization overheads and effectively improves the call performance of create, unlink, mkdir, and rmdir functions in the file system. 


## Tiered Memory Expansion

Various memory and storage media can be used to expand the system memory capacity and reduce the memory usage. User-mode swap is supported.

- **User-mode swap**: The evicted cold memory can be swapped to the user-mode storage based on a preset etMem policy. The user-mode swap delivers a higher performance than the kernel-mode swap and the whole swap process is transparent to users.


## Enhanced Cloud Native Scheduling

In cloud service scenarios, online interactive services are sensitive to latencies and have a tidal effect. Their CPU usage is generally less than 15%. A hybrid deployment of online and offline services is an effective way to improve resource utilization.

- **Quality Aware Scheduler (QAS)**: It ensures that online tasks quickly preempt CPU resources, schedules tasks in a deterministic manner, and suppresses interference from offline tasks.
- **Memory reclamation for OOM**: When OOM occurs, memory reclamation is preferentially performed for process groups with low priorities to ensure the normal running of online services.

## KubeOS

KubeOS is a container operating system, which centrally manages cloud native cluster OSs in containers. It has the following features:

- Supports OS containerization and Kubernetes interconnection for unified OS management and atomized lifecycle management
- Supports lightweight OS tailoring, which reduces unnecessary packages for quicker upgrades and replacements.


## Enhanced Lightweight Secure Container

Based on Stratovirt, a lightweight virtualization technology, containers have low load and VMs are more secure.

-  Supports UEFI boot, ACPI table construction, and addition of PCIe/PCI devices (including vrtio-pci) to VMs.
-  Supports VFIO, allowing physical devices on the host to be accessed from VMs and enabling VMs to obtain high performance close to raw devices.

## Enhanced iSulad

- The shimv2 process incorporates the kata-runtime,kata-shim, kata-proxy processes, and the RPC is invoked to process various containers during the runtime. Lifecycle management commands are used to simplify the system architecture. 

## Dual-Plane Deployment

eggo is a Kubernetes cluster deployment and management project of the openEuler cloud native special interest group (SIG). It provides efficient and stable cluster deployment capabilities.

-  **Version-based cluster configuration management**: Git repositories are used to store and track cluster configuration changes.
-  **x86/ARM dual planes**: implements unified cluster deployment, monitoring, and audit of OSs.

## Edge Computing

Unified edge-cloud synergy framework KubeEdge+ is provided, implementing basic capabilities such as edge-cloud application management and deployment and edge-cloud communication.

- **Management collaboration**: Devices in a single cluster can be managed in a unified manner and applications can be sent in seconds.
- **Network collaboration**: The edge-cloud bidirectional communication and communication between edge nodes in private subnets are supported.
- **Edge autonomy**: Edge autonomy is supported to ensure that edge nodes work properly when the network is unstable. Metadata persistence and quick recovery of edge nodes are supported.
- **Lightweight edge**: It occupies less memory and can work properly if resources are limited.

## Embedded Image

Basic capabilities, such as lightweight, security hardening, and lightweight containers, are provided, and the ARM32 and ARM64 chip architectures are supported.

- **Lightweight capability**: The OS image size can be less than 5 MB, the background noise can be less than 15 MB, and the startup time can be less than 5s.
- **Security hardening**: Security hardening is performed on resources such as account passwords and file permissions. OS security is enabled by default.
- **Lightweight containers**: Standard container images can be deployed and run in lightweight containers in embedded scenarios.
- **Multi-architecture support**: The ARM32 and ARM64 chip architectures are supported.

## Intelligent O&M A-Ops

The basic intelligent O&M framework provides basic capabilities such as configuration tracing, architecture awareness, and fault locating to support quick troubleshooting and reduce O&M costs.

- **Application topology awareness**: The eBPF-based low-load probe framework provides automatic network topology awareness and detection capabilities at the application level.
- **Configuration tracing**: implements the configuration baseline and comparison functions and quickly rectify configuration problems.
- **Intelligent fault locating**: A-Ops supports exception detection and user-defined fault tree, and provides an expert-mode engine to detect system faults in real time and rectify system faults in a timely manner, reducing system downtime and O&M costs.


## secPaver

secPaver is an SELinux policy development tool used to assist developers in developing security policies for applications.

- **Policy management**: provides a high-level configuration language and generates SELinux policy files based on the policy configuration file to reduce the threshold for using SELinux.

## Third-party Application Support

- **KubeSphere**: It is an application-centric and open-source container platform built based on Kubernetes. It is initiated by Beijing Qingyun Technology Co., Ltd. and supported and maintained by SIG-KubeSphere of the openEuler community.
- **OpenStack Wallaby**: OpenStack is updated to the latest Wallaby version. Wallaby is released in April 2021, including important updates of core projects such as Nova, Kolla, Cyborg, and Tacker.
- **OpenResty**: It is a high-performance web platform built based on Nginx and Lua.

## Desktop Environments

More desktop environments are provided to ensure better development experience.

- DDE is upgraded and supports drawing board, music, and cinema applications.
- UKUI is upgraded and supports the Chinese input method and multimedia.

>Note:
>Edge computing and embedded image are the first attempts to innovate technology in openEuler scenarios. You are welcome to try them and provide your suggestions to help us make improvement.