# Binding the QEMU Process to a Physical CPU<a name="EN-US_TOPIC_0187048010"></a>

## Overview<a name="section16814337154515"></a>

You can bind the QEMU main process to a specific physical CPU range, ensuring that VMs running different services do not interfere with adjacent VMs. For example, in a typical cloud computing scenario, multiple VMs run on one physical machine, and they carry diversified services, causing different degrees of resource occupation. To avoid interference of a VM with dense-storage I/O to an adjacent VM, storage processes that process I/O of different VMs need to be completely isolated. The QEMU main process handles frontend and backend services. Therefore, isolation needs to be implemented.

## Procedure<a name="section7210341134512"></a>

Run the  **virsh emulatorpin**  command to bind the QEMU main process to a physical CPU.

-   Check the range of the physical CPU bound to the QEMU process:

    ```
    # virsh emulatorpin openEulerVM
    emulator: CPU Affinity
    ----------------------------------
           *: 0-63
    ```

    This indicates that the QEMU main process corresponding to VM  **openEulerVM**  can be scheduled on all physical CPUs of the host.

-   Online binding: Run the  **vcpu emulatorpin**  command with the  **--live**  parameter to modify the binding relationship between the QEMU process and the running VM.

    ```
    # virsh emulatorpin openEulerVM --live 2-3
    
    # virsh emulatorpin openEulerVM
    emulator: CPU Affinity
    ----------------------------------
           *: 2-3
    ```

    The preceding commands bind the QEMU process corresponding to VM  **openEulerVM**  to physical CPUs  **2**  and  **3**. That is, the QEMU process is scheduled only on the two physical CPUs. The binding relationship takes effect immediately but becomes invalid after the VM is shut down and restarted.

-   Permanent binding: Run the  **virsh emulatorpin**  command with the  **--config**  parameter to modify the binding relationship between the VM and the QEMU process in the libvirt internal configuration.

    ```
    # virsh emulatorpin openEulerVM --config 0-3,^1
    
    # virsh emulatorpin euler
    emulator: CPU Affinity
    ----------------------------------
           *: 0,2-3
    ```

    The preceding commands bind the QEMU process corresponding to VM  **openEulerVM**  to physical CPUs  **0**,  **2**  and  **3**. That is, the QEMU process is scheduled only on the three physical CPUs. The modification of the binding relationship does not take effect immediately. Instead, the modification takes effect after the next startup of the VM and takes effect permanently. 


