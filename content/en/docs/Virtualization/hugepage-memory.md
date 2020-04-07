# HugePage Memory<a name="EN-US_TOPIC_0187048019"></a>

## Overview<a name="section1468142183114"></a>

Compared with traditional 4 KB memory paging, openEuler also supports 2 MB/1 GB memory paging. HugePage memory can effectively reduce TLB misses and significantly improve the performance of memory-intensive services. openEuler uses two technologies to implement HugePage memory.

-   Static HugePages

    The static HugePage requires that a static HugePage pool be reserved before the host OS is loaded. When creating a VM, you can modify the XML configuration file to specify that the VM memory is allocated from the static HugePage pool. The static HugePage ensures that all memory of a VM exists on the host as the HugePage to ensure physical continuity. However, the deployment difficulty is increased. After the page size of the static HugePage pool is changed, the host needs to be restarted for the change to take effect. The size of a static HugePage can be 2 MB or 1 GB.


-   THP

    If the transparent HugePage \(THP\) mode is enabled, the VM automatically selects available 2 MB consecutive pages and automatically splits and combines HugePages when allocating memory. When no 2 MB consecutive pages are available, the VM selects available 64 KB \(AArch64 architecture\) or 4 KB \(x86\_64 architecture\) pages for allocation. By using THP, users do not need to be aware of it and 2 MB HugePages can be used to improve memory access performance.


If VMs use static HugePages, you can disable THP to reduce the overhead of the host OS and ensure stable VM performance.

## Instructions<a name="section1018225453212"></a>

-   Configure static HugePages.

    Before creating a VM, modify the XML file to configure a static HugePage for the VM.

    ```
      <memoryBacking>
        <hugepages>
          <page size='1' unit='GiB'/>
        </hugepages>
      </memoryBacking>
    ```

    The preceding XML segment indicates that a 1 GB static HugePage is configured for the VM.

    ```
      <memoryBacking>
        <hugepages>
          <page size='2' unit='MiB'/>
        </hugepages>
      </memoryBacking>
    ```

    The preceding XML segment indicates that a 2 MB static HugePage is configured for the VM.

-   Configure transparent HugePage.

    Dynamically enable the THP through sysfs.

    ```
    # echo always > /sys/kernel/mm/transparent_hugepage/enabled
    ```

    Dynamically disable the THP.

    ```
    # echo never > /sys/kernel/mm/transparent_hugepage/enabled
    ```


