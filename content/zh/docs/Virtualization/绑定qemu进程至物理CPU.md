# 绑定qemu进程至物理CPU<a name="ZH-CN_TOPIC_0187048010"></a>

## 概述<a name="section16814337154515"></a>

qemu主进程绑定特性是将qemu主进程绑定到特定的物理CPU范围内，从而保证了运行不同业务的虚拟机不会干扰到邻位虚拟机。例如在一个典型的云计算场景中，一台物理机上会运行多台虚拟机，而每台虚拟机的业务不同，造成了不同程度的资源占用，为了避免存储IO密集的虚拟机对邻位虚拟机的干扰，需要将不同虚拟机处理IO的存储进程完全隔离，由于qemu主进程是处理前后端的主要服务进程，故需要实现隔离。

## 操作步骤<a name="section7210341134512"></a>

通过virsh emulatorpin命令可以绑定qemu主进程到物理CPU。

-   查看qemu进程当前绑定的物理CPU范围：

    ```
    # virsh emulatorpin openEulerVM
    emulator: CPU Affinity
    ----------------------------------
           *: 0-63
    ```

    这说明虚拟机_openEulerVM_对应的qemu主进程可以在主机的所有物理CPU上调度。

-   在线绑定：修改处于running状态的虚拟机对应的qemu进程的绑定关系，使用带**--live**参数的vcpu emulatorpin命令：

    ```
    # virsh emulatorpin openEulerVM --live 2-3
    
    # virsh emulatorpin openEulerVM
    emulator: CPU Affinity
    ----------------------------------
           *: 2-3
    ```

    以上命令把虚拟机_open__Euler__VM_对应的qemu进程绑定到物理CPU2、3上，即限制了qemu进程只在这两个物理CPU上调度。这一绑定关系的调整立即生效，但在虚拟机关机并重新启动后失效。

-   持久化绑定：在libvirt内部配置中修改虚拟机对应的qemu进程的绑定关系，使用带**--config**参数的virsh emulatorpin命令：

    ```
    # virsh emulatorpin openEulerVM --config 0-3,^1
    
    # virsh emulatorpin euler
    emulator: CPU Affinity
    ----------------------------------
           *: 0,2-3
    ```

    以上命令把虚拟机_open__Euler__VM_对应的qemu进程绑定到物理CPU0、2、3上，即限制了qemu进程只在这三个物理CPU上调度。这一绑定关系的调整不会立即生效，在虚拟机下一次启动后才生效，并持久生效。


