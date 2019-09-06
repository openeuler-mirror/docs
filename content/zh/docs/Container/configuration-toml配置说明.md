# configuration.toml配置说明<a name="ZH-CN_TOPIC_0184808187"></a>

>![](public_sys-resources/icon-note.gif) **说明：**   
>configuration.toml配置文件中各个字段的取值以kata-containers-<version\>.rpm包中的configuration.toml文件为准，不支持用户对配置文件中的字段任意取值。  

```
[hypervisor.qemu]
path ：指定虚拟化qemu执行路径
kernel ：指定guest kernel执行路径
initrd ：指定guest initrd执行路径
image ：指定guest image执行路径（不适用） 
machine_type ：指定模拟芯片类型，ARM架构为virt，x86架构为pc
kernel_params ：指定guest内核运行参数
firmware ：指定固件路径，设空则使用默认固件
machine_accelerators ：指定加速器
default_vcpus ：指定每个SB/VM的默认vCPU数量
default_maxvcpus ：指定每个SB/VM的默认最大vCPU数量
default_root_ports ：指定每个SB/VM的默认Root Ports数量
default_bridges ：指定每个SB/VM的默认bridges数量
default_memory ：指定每个SB/VM的默认内存大小，默认为1024 MiB
memory_slots ：指定每个SB/VM的内存插槽数量，默认为10
memory_offset ：指定内存偏移量，默认为0
disable_block_device_use ：禁止将块设备用于容器的rootfs
shared_fs ：指定共享文件系统类型，默认为virtio-9p
virtio_fs_daemon ：指定vhost-user-fs守护进程路径
virtio_fs_cache_size ：指定DAX缓存的默认大小
virtio_fs_cache ：指定缓存模式
block_device_driver ：指定块设备驱动
block_device_cache_set ：指定块设备是否设置缓存相关选项，默认false
block_device_cache_direct ：指定是否使能O_DIRECT，默认false
block_device_cache_noflush ：指定是否忽略设备刷新请求，默认false
enable_iothreads ：使能iothreads
enable_mem_prealloc ：使能VM RAM预分配，默认false
enable_hugepages ：使能大页，默认false
enable_swap ：使能swap，默认false
enable_debug ：使能qemu debug，默认false
disable_nesting_checks ：关闭嵌套检查
msize_9p = 8192 ：指定每个9p包传输的字节数
use_vsock ：使用vsocks与agent直接通信（前提支持vsocks），默认false
hotplug_vfio_on_root_bus ：使能vfio设备在root bus热插拔，默认false
disable_vhost_net ：关闭vhost_net，默认false
entropy_source ：指定默认熵源
guest_hook_path ：指定guest hook二进制路径

[factory]
enable_template ：使能VM模板，默认false
template_path ：指定模板路径
vm_cache_number ：指定VMCache的缓存数量，默认0
vm_cache_endpoint ：指定VMCache使用的Unix socket的地址，默认/var/run/kata-containers/cache.sock

[proxy.kata]
path ：指定kata-proxy运行路径
enable_debug ：使能proxy debug，默认false

[shim.kata]
path ：指定kata-shim运行路径
enable_debug ：使能shim debug，默认false
enable_tracing ：使能shim opentracing

[agent.kata]
enable_debug ：使能agent debug，默认false
enable_tracing ：使能agent tracing
trace_mode ：指定trace模式
trace_type ：指定trace类型
enable_blk_mount ：开启block设备guest挂载

[netmon]
enable_netmon ：使能网络监控，默认false
path ：指定kata-netmon运行路径
enable_debug ：使能netmon debug，默认false

[runtime]
enable_debug ：使能runtime debug，默认false
enable_cpu_memory_hotplug ：使能cpu和内存热插拔，默认false
internetworking_model ：指定VM和容器网络互联模式
disable_guest_seccomp ：关闭在guest应用seccemp安全机制，默认true
enable_tracing ：使能runtime opentracing，默认false
disable_new_netns ：不为shim和hypervisor进程创建网络命名空间，默认false
experimental ：开启实验特性，不支持用户自定义配置
```

