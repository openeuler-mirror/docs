# configuration.toml<a name="EN-US_TOPIC_0184808187"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The value of each field in the  **configuration.toml**  file is subject to the  **configuration.toml**  file in the  **kata-containers-<**_version_**\>.rpm package**. You cannot set any field in the configuration file.  

```
[hypervisor.qemu]
path: specifies the execution path of the virtualization QEMU.
kernel: specifies the execution path of the guest kernel.
initrd: specifies the guest initrd execution path.
image: specifies the execution path of the guest image (not applicable).
machine_type: specifies the type of the analog chip. The value is virt for the ARM architecture and pc for the x86 architecture.
kernel_params: specifies the running parameters of the guest kernel.
firmware: specifies the firmware path. If this parameter is left blank, the default firmware is used.
machine_accelerators: specifies an accelerator.
default_vcpus: specifies the default number of vCPUs for each SB/VM.
default_maxvcpus: specifies the default maximum number of vCPUs for each SB/VM.
default_root_ports: specifies the default number of root ports for each SB/VM.
default_bridges: specifies the default number of bridges for each SB/VM.
default_memory: specifies the default memory size of each SB/VM. The default value is 1024 MiB.
memory_slots: specifies the number of memory slots for each SB/VM. The default value is 10.
memory_offset: specifies the memory offset. The default value is 0.
disable_block_device_use: disables the block device from being used by the rootfs of the container.
shared_fs: specifies the type of the shared file system. The default value is virtio-9p.
virtio_fs_daemon: specifies the path of the vhost-user-fs daemon process.
virtio_fs_cache_size: specifies the default size of the DAX cache.
virtio_fs_cache: specifies the cache mode.
block_device_driver: specifies the driver of a block device.
block_device_cache_set: specifies whether to set cache-related options for a block device. The default value is false.
block_device_cache_direct: specifies whether to enable O_DIRECT. The default value is false.
block_device_cache_noflush: specifies whether to ignore device update requests. The default value is false.
enable_iothreads: enables iothreads.
enable_mem_prealloc: enables VM RAM pre-allocation. The default value is false.
enable_hugepages: enables huge pages. The default value is false.
enable_swap: enables the swap function. The default value is false.
enable_debug: enables QEMU debugging. The default value is false.
disable_nesting_checks: disables nested check.
msize_9p = 8192: specifies the number of bytes transmitted in each 9p packet.
use_vsock: uses vsocks to directly communicate with the agent (the prerequisite is that vsocks is supported). The default value is false.
hotplug_vfio_on_root_bus: enables the hot swap of the VFIO device on the root bus. The default value is false.
disable_vhost_net: disables vhost_net. The default value is false.
entropy_source: specifies the default entropy source.
guest_hook_path: specifies the binary path of the guest hook.

[factory]
enable_template: enables the VM template. The default value is false.
template_path: specifies the template path.
vm_cache_number: specifies the number of VM caches. The default value is 0.
vm_cache_endpoint: specifies the address of the Unix socket used by the VMCache. The default value is /var/run/kata-containers/cache.sock.

[proxy.kata]
path: specifies the kata-proxy running path.
enable_debug: enables proxy debugging. The default value is false.

[shim.kata]
path: specifies the running path of kata-shim.
enable_debug: enables shim debugging. The default value is false.
enable_tracing: enables shim opentracing.

[agent.kata]
enable_debug: enables the agent debugging function. The default value is false.
enable_tracing: enables the agent tracing function.
trace_mode: specifies the trace mode.
trace_type: specifies the trace type.
enable_blk_mount: enables guest mounting of the block device.

[netmon]
enable_netmon: enables network monitoring. The default value is false.
path: specifies the kata-netmon running path.
enable_debug: enables netmon debugging. The default value is false.

[runtime]
enable_debug: enables runtime debugging. The default value is false.
enable_cpu_memory_hotplug: enables CPU and memory hot swap. The default value is false.
internetworking_model: specifies the network interconnection mode between VMs and containers.
disable_guest_seccomp: disables the seccemp security mechanism in the guest application. The default value is true.
enable_tracing: enables runtime opentracing. The default value is false.
disable_new_netns: disables network namespace creation for the shim and hypervisor processes. The default value is false.
experimental: enables the experimental feature, which does not support user-defined configurations.
```

