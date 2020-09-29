# Key Features

- StratoVirt: Combines high security and performance with lightweight loads, low power consumption, and flexible component splitting for universal VMs running in all scenarios.
  
  - Uses the Rust language, supports **seccomp** and multi-tenant isolation, providing a secure and trusted operating environment.
  - Supports startup within 50 ms and memory noise floor of less than 4 MB, achieving the ultimate performance and lightweight deployment in various scenarios across-device-edge-cloud.
  - Supports multiple hardware acceleration virtualized engines, such as x86 VT and Kunpeng-V.
  - Supports device scaling within milliseconds, providing flexible resource scaling capabilities for lightweight loads.
  - Scalable device models, supports complex device specifications such as PCI, and compatible with the QEMU software ecosystem.
  - Supports multiple computing, network, and storage acceleration solutions, and flexible collaboration of heterogeneous computing power.

- iSula: A lightweight container solution that unifies IoT, edge, and cloud computing.
  
  - Optimized operation performance for the startup and container lifecycle.
  - **isula-build**, a container image build tool that provides secure and fast container image build capabilities.
  - Secure and trusted VM startup for enhanced VM security.

- Enhanced virtualization features
  
  - Optimizes VM lock preemption with dual-layer scheduling and Hypervisor-aware VM scheduling, delivering higher performance in the multi-core overcommitment scenario.
  - Optimizes the IPI interruption performance using the Guest-Idle-Haltpoll mechanism, improving the database service performance.
  - For the virtualization feature of the ARM platform, supports the CPU/memory hot plug and the custom mode for the KVM CPU, making resource configuration more flexible.
  - Quickly collects performance indicators of a VM using the O\&M tool VMTOP.
  - Enables hardlockup detection using the PMU NMI watchdog feature.

- Kernel feature enhancement
  
  - Enhancement for IMA commercial use: Based on the open source IMA solution, improves security, performance, and usability to facilitate commercial use.
  - NUMA Aware Qspinlock: Improves system performance by reducing cross-NUMA cache synchronization and ping-pong operations caused by lock competition.
  - Ktask parallelism: A kernel task parallelism framework that supports the parallel operation of kernel tasks.
  - MPAM resource control: Supports Cache QoS and memory bandwidth control technology for the ARM64 architecture.
  - Memory system lock optimization: Optimizes vmalloc allocation lock and Pagecache lock.

- Programming languages and compilers
  
  - JDK8 enhancement: Supports the APPCDS feature and crc32 hardware acceleration instruction.
  - GCC optimization: Supports cyclic optimization, automatic vectorization, and global optimization.

- Hardware and chip enablement
  
  - Raspberry Pi: Supports the Raspberry series boards.

- Desktop support
  
  - UKUI: Default desktop environment of the Kylin OS. Its layout, style, and usage habits are similar to those of the traditional Windows OS.

- Intelligent O\&M
  
  - A-Tune: An intelligent system performance optimization engine that infers service features and configures the optimal system parameter set for the optimal service operations.