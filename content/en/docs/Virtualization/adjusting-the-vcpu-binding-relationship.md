# Adjusting the vCPU Binding Relationship<a name="EN-US_TOPIC_0187048011"></a>

## Overview<a name="section97689379579"></a>

The vCPU of a VM is bound to a physical CPU. That is, the vCPU is scheduled only on the bound physical CPU to improve VM performance in specific scenarios. For example, in a NUMA system, vCPUs are bound to the same NUMA node to prevent cross-node memory access and VM performance deterioration. If the vCPU is not bound, by default, the vCPU can be scheduled on any physical CPU. The specific binding policy is determined by the user.

## Procedure<a name="section690216158587"></a>

Run the  **virsh vcpupin**  command to adjust the binding relationship between vCPUs and physical CPUs.

-   View the vCPU binding information of the VM.

    ```
     # virsh vcpupin openEulerVM
     VCPU   CPU Affinity
    ----------------------
     0      0-63
     1      0-63
     2      0-63
     3      0-63
    ```

    This indicates that all vCPUs of VM  **openEulerVM**  can be scheduled on all physical CPUs of the host.

-   Online adjustment: Run the  **vcpu vcpupin**  command with the  **--live**  parameter to modify the vCPU binding relationship of a running VM.

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

    The preceding commands bind vCPU  **0**  of VM  **openEulerVM**  to pCPU  **2**  and pCPU  **3**. That is, vCPU  **0**  is scheduled only on the two physical CPUs. The binding relationship takes effect immediately but becomes invalid after the VM is shut down and restarted.

-   Permanent adjustment: Run the  **virsh vcpupin**  command with the  **--config**  parameter to modify the vCPU binding relationship of the VM in the libvirt internal configuration.

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

    The preceding commands bind vCPU  **0**  of VM  **openEulerVM**  to physical CPUs  **0**,  **2**, and  **3**. That is, vCPU  **0**  is scheduled only on the three physical CPUs. The modification of the binding relationship does not take effect immediately. Instead, the modification takes effect after the next startup of the VM and takes effect permanently. 


