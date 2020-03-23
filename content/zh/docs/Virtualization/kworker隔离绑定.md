# kworker隔离绑定<a name="ZH-CN_TOPIC_0225484574"></a>

## 概述<a name="section786655419407"></a>

kworker是Linux内核实现的per-CPU线程，用来执行系统中的workqueue请求。kworker线程会和vCPU线程争抢物理核资源，导致虚拟化业务性能抖动。为了使虚拟机能够稳定的运行，减少kworker线程对虚拟机的干扰，可以将主机上的kworker线程绑定到特定的CPU上运行。

## 操作步骤<a name="section43241518114119"></a>

用户可以通过修改/sys/devices/virtual/workqueue/cpumask文件，将workqueue中的任务绑定到cpumask中指定的CPU上。cpumask中的掩码以十六进制表示，例如将kworker绑定到CPU0\~CPU7上，对应掩码为ff，修改的命令如下：

```
# echo ff > /sys/devices/virtual/workqueue/cpumask
```

