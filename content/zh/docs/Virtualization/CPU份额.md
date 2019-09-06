# CPU份额<a name="ZH-CN_TOPIC_0187048009"></a>

## 概述<a name="section61194018491"></a>

虚拟化环境下，同一主机上的多个虚拟机竞争使用物理CPU。为了防止某些虚拟机占用过多的物理CPU资源，影响相同主机上其他虚拟机的性能，需要平衡虚拟机vCPU的调度，避免物理CPU的过度竞争。

CPU份额表示一个虚拟机竞争物理CPU计算资源的能力大小总和。用户通过调整cpu\_shares值能够设置虚拟机抢占物理CPU资源的能力。cpu\_shares值无单位，是一个相对值。虚拟机获得的CPU计算资源，是与其他虚拟机的CPU份额，按相对比例，瓜分物理CPU除预留外可用计算资源。通过调整CPU份额来保证虚拟机CPU计算资源服务质量。

## 操作步骤<a name="section2098911584213"></a>

通过修改分配给虚拟机的运行时间的cpu\_shares值，来平衡vCPU之间的调度。

-   查看虚拟机的当前CPU份额：

    ```
    # virsh schedinfo <VMInstance>
    Scheduler      : posix
    cpu_shares     : 1024
    vcpu_period    : 100000
    vcpu_quota     : -1
    emulator_period: 100000
    emulator_quota : -1
    global_period  : 100000
    global_quota   : -1
    iothread_period: 100000
    iothread_quota : -1
    ```


-   在线修改：修改处于running状态的虚拟机的当前CPU份额，使用带**--live**参数的virsh schedinfo命令：

    ```
    # virsh schedinfo <VMInstance> --live cpu_shares=<number>
    ```

    比如将正在运行的虚拟机openEulerVM的CPU份额从1024改为2048：

    ```
    # virsh schedinfo openEulerVM --live cpu_shares=2048
    Scheduler      : posix
    cpu_shares     : 2048
    vcpu_period    : 100000
    vcpu_quota     : -1
    emulator_period: 100000
    emulator_quota : -1
    global_period  : 100000
    global_quota   : -1
    iothread_period: 100000
    iothread_quota : -1
    ```

    对cpu\_shares值的修改立即生效，虚拟机_openEulerVM_能得到的运行时间将是原来的2倍。但是这一修改将在虚拟机关机并重新启动后失效。

-   持久化修改：在libvirt内部配置中修改虚拟机的CPU份额，使用带**--config**参数的virsh schedinfo命令：

    ```
    # virsh schedinfo <VMInstance> --config cpu_shares=<number>
    ```

    比如将虚拟机openEulerVM的CPU份额从1024改为2048：

    ```
    # virsh schedinfo openEulerVM --config cpu_shares=2048
    Scheduler      : posix
    cpu_shares     : 2048
    vcpu_period    : 0
    vcpu_quota     : 0
    emulator_period: 0
    emulator_quota : 0
    global_period  : 0
    global_quota   : 0
    iothread_period: 0
    iothread_quota : 0
    ```

    对cpu\_shares值的修改不会立即生效，在虚拟机openEulerVM下一次启动后才生效，并持久生效。虚拟机euler能得到的运行时间将是原来的2倍。


