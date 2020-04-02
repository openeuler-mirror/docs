# Configuration.toml<a name="EN-US_TOPIC_0184808167"></a>

The secure container provides a global configuration file configuration.toml. Users can also customize the path and configuration options of the secure container configuration file.

In the  **runtimeArges**  field of Docker engine, you can use  **--kata-config**  to specify a private file. The default configuration file path is  **/usr/share/defaults/kata-containers/configuration.toml**.

The following lists the common fields in the configuration file. For details about the configuration file options, see  [configuration.toml](configuration-toml-31.md).

1.  hypervisor.qemu
    -   **path**: specifies the execution path of the virtualization QEMU.
    -   **kernel**: specifies the execution path of the guest kernel.
    -   **initrd**: specifies the guest initrd execution path.
    -   **machine\_type**: specifies the type of the analog chip. The value is  **virt**  for the ARM architecture and  **pc**  for the x86 architecture.
    -   **kernel\_params**: specifies the running parameters of the guest kernel.

2.  proxy.kata
    -   **path**: specifies the kata-proxy running path.
    -   **enable\_debug**: enables the debugging function for the kata-proxy process.

3.  agent.kata
    -   **enable\_blk\_mount**: enables guest mounting of the block device.
    -   **enable\_debug**: enables the debugging function for the kata-agent process.

4.  runtime
    -   **enable\_cpu\_memory\_hotplug**: enables CPU and memory hot swap.
    -   **enable\_debug**: enables debugging for the kata-runtime process.


