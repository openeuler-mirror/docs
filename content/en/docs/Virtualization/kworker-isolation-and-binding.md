# kworker Isolation and Binding<a name="EN-US_TOPIC_0225484574"></a>

## Overview<a name="section786655419407"></a>

kworker is a per-CPU thread implemented by the Linux kernel. It is used to execute workqueue requests in the system. kworker threads will compete for physical core resources with vCPU threads, resulting in virtualization service performance jitter. To ensure that the VM can run stably and reduce the interference of kworker threads on the VM, you can bind kworker threads on the host to a specific CPU.

## Instructions<a name="section43241518114119"></a>

You can modify the  **/sys/devices/virtual/workqueue/cpumask**  file to bind tasks in the workqueue to the CPU specified by  **cpumasks**. Masks in  **cpumask**  are in hexadecimal format. For example, if you need to bind kworker to CPU0 to CPU7, run the following command to change the mask to  **ff**:

```
# echo ff > /sys/devices/virtual/workqueue/cpumask
```

