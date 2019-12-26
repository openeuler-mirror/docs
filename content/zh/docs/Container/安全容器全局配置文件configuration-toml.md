# 安全容器全局配置文件configuration.toml<a name="ZH-CN_TOPIC_0184808167"></a>

安全容器提供全局配置文件configuration.toml进行配置开关，用户也可以定制安全容器配置文件路径与配置选项。

在docker-engine的runtimeArges字段可以利用--kata-config指定私有文件，默认的配置文件路径为/usr/share/defaults/kata-containers/configuration.toml。

常用配置文件字段如下，详细的配置文件选项参见“安全容器 > 附录 > configuration.toml配置说明”。

1.  hypervisor.qemu
    -   path ：指定虚拟化qemu执行路径。
    -   kernel ：指定guest kernel执行路径。
    -   initrd ：指定guest initrd执行路径。
    -   machin\_type ：指定模拟芯片类型，其中arm为virt，x86架构为pc。
    -   kernel\_params ：指定guest内核运行参数。

2.  proxy.kata
    -   path ：指定kata-proxy运行路径。
    -   enable\_debug ：kata-proxy进程debug开关。

3.  agent.kata
    -   enable\_blk\_mount ：开启block设备guest挂载。
    -   enable\_debug ：kata-agent进程debug开关。

4.  runtime
    -   enable\_cpu\_memory\_hotplug：CPU和内存热插拔开关。
    -   enable\_debug：kata-runtime进程debug开关。


