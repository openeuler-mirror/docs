# Halt-Polling<a name="EN-US_TOPIC_0187048018"></a>

## Overview<a name="section167677162718"></a>

If compute resources are sufficient, the halt-polling feature can be used to enable VMs to obtain performance similar to that of physical machines. If the halt-polling feature is not enabled, the host allocates CPU resources to other processes when the vCPU exits due to idle timeout. When the halt-polling feature is enabled on the host, the vCPU of the VM performs polling when it is idle. The polling duration depends on the actual configuration. If the vCPU is woken up during the polling, the vCPU can continue to run without being scheduled from the host. This reduces the scheduling overhead and improves the VM system performance.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The halt-polling mechanism ensures that the vCPU thread of the VM responds in a timely manner. However, when the VM has no load, the host also performs polling. As a result, the host detects that the CPU usage of the vCPU is high, but the actual CPU usage of the VM is not high.  

## Instructions<a name="section104069317271"></a>

The halt-polling feature is enabled by default. You can dynamically change the halt-polling time of vCPU by modifying the  **halt\_poll\_ns**  file. The default value is  **500000**, in ns.

For example, to set the polling duration to 400,000 ns, run the following command:

```
# echo 400000 > /sys/module/kvm/parameters/halt_poll_ns
```

