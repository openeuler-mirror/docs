# Key Features

## Hierarchical Memory Expansion

Supports unified management of multiple types of memory and storage media as well as smooth expansion of the system capacity. For services that are sensitive to memory and have obvious internal hot access, the memory cost is significantly reduced with the same performance.

- **Hot and cold page identification**. The busy/idle status statistics mechanism of the kernel-mode memory page can accurately identify the cold and hot distribution of process memory page accesses.
- **Configurable elimination policies**. A configuration interface is provided to customize the cold and hot tiering policies for memory pages.
- **Smooth expansion**. Cold pages are automatically swapped out to the extended memory. The software deployed on the cold pages can run properly without changing or adapting the programming mode.
- **Multi-media expansion**. Multiple media such as SCM, XL flash, and NVMe SSD can be used as the extended memory. The cold and hot memory tiering solution is specified based on the access speed of the media to expand the memory and reduce performance loss.

## Enhanced Virtualization Function and Maintainability

The live migration Pro capability is extended to improve the maintainability and testability.

- **Live migration Pro feature**. multifd is enhanced to support TLS, ensuring data security during migration. Concurrent compression of live migration data is supported, improving migration performance. Statistics on data page access frequency are added for live migration data prediction in advance.
- **Performance debugging tool (vmtop).** You can dynamically view the resource usage of VMs in real time, including the CPU usage and memory usage. The x86\_64 architecture is supported.
- **I/O suspension**. I/O suspension is supported so that automatic retry is performed by default in case an I/O error occurs. If the retry times out, an alarm is reported.

## Lightweight Virtual Runtime (StratoVirt)

Elastic memory, huge page, and system call filtering are added to enhance the performance and stability of the I/O subsystem.

- **Elastic memory**. The memory can be allocated and reclaimed based on the memory requirements of the workload. The memory reclamation speed of virtio-balloon can reach 3 GB/s.
- **Huge page**. Huge page in the lightweight framework provides continuous physical memory pages for lightweight VMs, improving VM memory access efficiency.
- **System call filtering**. The device model has been simplified and system call filtering is supported. In the simplest configuration, only 35 system calls are required, effectively reducing the system attack surface.
- **Enhanced I/O subsystem**. Multi-channel concurrent I/O capability is supported and the performance is improved. The I/O-QoS capability improves the flexibility and stability of VM I/O traffic management.

## secGear Confidential Computing Programming Framework

The secGear unified confidential computing programming framework provides easy-to-use development kits, including lifecycle management, secure development library, auxiliary code generation tool, code building and signature tool, security capability, and security service component implementation solution in the security zone. Programming with secGear differentiates the system into secure and non-secure zones. It can be used in various scenarios, such as trust cycle, cryptographic databases, multi-party computing, and AI security protection.

- The **service layer** provides complete security services running on the security side.
- The **middleware layer** provides a set of protocol interfaces to meet basic security requirements.
- The **basic layer** provides various enclave development interfaces or tools and supports C POSIX APIs and standard OpenSSL APIs on the security side. Users can freely develop secure applications based using those APIs.

## Supporting OpenStack Queens/Rocky

OpenStack is a simple, scalable, rich, and standard cloud management operating system. For details about more features, see OpenStack Queens/Rocky release notes. You can download software packages from [oepkg](https://repo.oepkgs.net/openEuler/rpm/openEuler-20.03-LTS-SP2/budding-openeuler/openstack/).

- **Integrated OpenStack Queens/Rocky**, which enables the IaaS solution.
- **Enhanced block storage.** Advanced functions such as capacity expansion, snapshots, and VM image cloning are supported.
- **Container-based deployment and network capabilities**. Better integration with containers is achieved.
- **Extended services**. Extended services such as control panel management, bare metal server deployment, and cloud resource tracing are supported.
