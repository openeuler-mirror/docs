# Configuring a Virtual Serial Port<a name="EN-US_TOPIC_0187048017"></a>

## Overview<a name="section32532035151418"></a>

In a virtualization environment, VMs and host machines need to communicate with each other to meet management and service requirements. However, in the complex network architecture of the cloud management system, services running on the management plane and VMs running on the service plane cannot communicate with each other at layer 3. As a result, service deployment and information collection are not fast enough. Therefore, a virtual serial port is required for communication between VMs and host machines. You can add serial port configuration items to the XML configuration file of a VM to implement communication between VMs and host machines.

## Procedure<a name="section811055418146"></a>

The Linux VM serial port console is a pseudo terminal device connected to the host machine through the serial port of the VM. It implements interactive operations on the VM through the host machine. In this scenario, the serial port needs to be configured in the pty type. This section describes how to configure a pty serial port.

-   Add the following virtual serial port configuration items under the  **devices**  node in the XML configuration file of the VM:

    ```
        <serial type='pty'>
        </serial>
        <console type='pty'>
          <target type='serial'/>
        </console>
    ```

-   Run the  **virsh console**  command to connect to the pty serial port of the running VM.

    ```
    # virsh console <VMInstance>
    ```

-   To ensure that no serial port message is missed, use the  **--console**  option to connect to the serial port when starting the VM.

    ```
    # virsh start --console <VMInstance>
    ```


