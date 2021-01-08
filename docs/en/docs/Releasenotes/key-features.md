# Key Features

- iSula: A lightweight container solution that unifies IoT, edge, and cloud computing.
  
  - Anonymous volumes can be configured in the image, and local volumes can be easily managed by users.
  - The isula-build allows you to pull and push images and save multiple images to a tarball.

- A-Tune: An intelligent system performance optimization engine that infers service features and configures the optimal system parameter set for the best service operations. The following functions are added:
  
  - Incremental tuning
  - Sensitive parameter identification, filtering, and tuning
  - Tuning capabilities for VM scenarios
  - One-click model training

- Multiple JDK versions are supported to meet different requirements on compatibility, performance, and functions.
  
  - The operating system supports multiple JDK versions, allowing users to deploy Java applications of multiple versions. The versions and functions supported are as follows:
  - Java 11. For details, see [JDK 11](http://openjdk.java.net/projects/jdk/11/).
  - TLS 1.3 for a more secure protocol
  - Java Flight Recorder, an efficient Java application diagnosis tool with low performance loss
  - Experimental ZGC algorithm with low latency
  - The latest Short Term Support (STS) version is supported, which is JDK 15 currently. For details, see [JDK 15](http://openjdk.java.net/projects/jdk/15/).
  - `Pattern Matching for instanceof (Second Preview)`
  - `Production-ready ZGC`
  - `Production-ready Shenandoah GC`
  - `Foreign-Memory Access API (Second Incubator)`
  - `Records (Second Preview)`

- Kernel feature enhancement
  
  - Huawei 1822 HBA card driver
  - NVDIMMs for higher performance in service scenarios such as big data
  - FT-2000+/64 of Phytium processors for general-purpose computing
  - The iSCSI work thread can be bound to cores based on NUMA-aware affinity to improve I/O performance.
  - The percpu lock-free function of the file cache is optimized to reduce the atomic overhead and improve the performance of concurrent file access and Nginx scenarios.

- Virtualization feature enhancement
  
  - ARM virtualization supports CPU/memory hot plug, making resource configuration more flexible.
  - The KVM CPU can be set to the custom mode (ARM) to customize configurations of the CPU feature on the VM.
  - The O\&M tool VMTOP is used to quickly collect VM performance indicators, such as exit/entry.
  - Secure boot is supported to improve VM security.

- Desktop support
  
  - Default UKUI desktop environment on Kylin OS
  - DDE (Uniontech-developed desktop system)

- High reliability
  
  - HA cluster software comprising Pacemaker and Corosync

- Hardware enablement
  
  - Raspberry Pi serial boards