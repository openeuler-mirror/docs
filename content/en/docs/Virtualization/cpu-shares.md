# CPU Shares<a name="EN-US_TOPIC_0187048009"></a>

## Overview<a name="section61194018491"></a>

In a virtualization environment, multiple VMs on the same host compete for physical CPUs. To prevent some VMs from occupying too many physical CPU resources and affecting the performance of other VMs on the same host, you need to balance the vCPU scheduling of VMs to prevent excessive competition for physical CPUs.

The CPU share indicates the total capability of a VM to compete for physical CPU computing resources. You can set  **cpu\_shares**  to specify the VM capacity to preempt physical CPU resources. The value of  **cpu\_shares**  is a relative value without a unit. The CPU computing resources obtained by a VM are the available computing resources of physical CPUs \(excluding reserved CPUs\) allocated to VMs based on the CPU shares. Adjust the CPU shares to ensure the service quality of VM CPU computing resources.

## Procedure<a name="section2098911584213"></a>

Change the value of  **cpu\_shares**  allocated to the VM to balance the scheduling between vCPUs.

-   Check the current CPU share of the VM.

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


-   Online modification: Run the  **virsh schedinfo**  command with the  **--live**  parameter to modify the CPU share of a running VM.

    ```
    # virsh schedinfo <VMInstance> --live cpu_shares=<number>
    ```

    For example, to change the CPU share of the running  _openEulerVM_  from  **1024**  to  **2048**, run the following commands:

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

    The modification of the  **cpu\_shares**  value takes effect immediately. The running time of the  _openEulerVM_  is twice the original running time. However, the modification will become invalid after the VM is shut down and restarted.

-   Permanent modification: Run the  **virsh schedinfo**  command with the  **--config**  parameter to change the CPU share of the VM in the libvirt internal configuration.

    ```
    # virsh schedinfo <VMInstance> --config cpu_shares=<number>
    ```

    For example, run the following command to change the CPU share of  _openEulerVM_  from  **1024**  to  **2048**:

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

    The modification on  **cpu\_shares**  does not take effect immediately. Instead, the modification takes effect after the  _openEulerVM_  is started next time and takes effect permanently. The running time of the  _openEulerVM_  is twice that of the original VM.


