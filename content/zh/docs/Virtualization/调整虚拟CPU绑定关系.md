# 调整虚拟CPU绑定关系<a name="ZH-CN_TOPIC_0187048011"></a>

## 概述<a name="section97689379579"></a>

把虚拟机的vCPU绑定在物理CPU上，即vCPU只在绑定的物理CPU上调度，在特定场景下达到提升虚拟机性能的目的。比如在NUMA系统中，把vCPU绑定在同一个NUMA节点上，可以避免vCPU跨节点访问内存，避免影响虚拟机运行性能。如果未绑定，默认vCPU可在任何物理CPU上调度。具体的绑定策略由用户来决定。

## 操作步骤<a name="section690216158587"></a>

通过virsh vcpupin命令可以调整vCPU和物理CPU的绑定关系。

-   查看虚拟机的当前vCPU绑定信息：

    ```
     # virsh vcpupin openEulerVM
     VCPU   CPU Affinity
    ----------------------
     0      0-63
     1      0-63
     2      0-63
     3      0-63
    ```

    这说明虚拟机_openEulerVM_的所有vCPU可以在主机的所有物理CPU上调度。

-   在线调整：修改处于running状态的虚拟机的当前vCPU绑定关系，使用带**--live**参数的vcpu vcpupin命令：

    ```
     # virsh vcpupin openEulerVM  --live 0 2-3
    
     # virsh vcpupin euler
     VCPU   CPU Affinity
    ----------------------
     0      2-3
     1      0-63
     2      0-63
     3      0-63
    ```

    以上命令把虚拟机_open__Euler__VM_的vCPU0绑定到PCPU2、3上，即限制了vCPU0只在这两个物理CPU上调度。这一绑定关系的调整立即生效，但在虚拟机关机并重新启动后失效。

-   持久化调整：在libvirt内部配置中修改虚拟机的vCPU绑定关系，使用带**--config**参数的virsh vcpupin命令：

    ```
     # virsh vcpupin openEulerVM --config 0 0-3,^1
    
     # virsh vcpupin openEulerVM
     VCPU   CPU Affinity
    ----------------------
     0      0,2-3
     1      0-63
     2      0-63
     3      0-63
    ```

    以上命令把虚拟机_open__Euler__VM_的vCPU0绑定到物理CPU0、2、3上，即限制了vCPU0只在这三个物理CPU上调度。这一绑定关系的调整不会立即生效，在虚拟机下一次启动后才生效，并持久生效。


