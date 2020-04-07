# Managing vNICs<a name="EN-US_TOPIC_0188739462"></a>

## Overview<a name="section103605514326"></a>

The vNIC types include virtio-net, vhost-net, and vhost-user. After creating a VM, you may need to attach or detach a vNIC. openEuler supports NIC hot swap, which can change the network throughput and improve system flexibility and scalability.

## Procedure<a name="section12620617143216"></a>

For details about how to configure a virtual NIC, see  [3.2.4.2 Network Devices](network-device.md). This section uses the vhost-net NIC as an example to describe how to attach and detach a vNIC.

-   Attach the vhost-net NIC.

    Run the  **virsh attach-device**  command to attach the vhost-net vNIC.

    ```
     # virsh attach-device <VMInstance> <attach-device.xml>
    ```

    The preceding command can be used to attach a vhost-net NIC to a running VM. The NIC information is specified in the  **attach-device.xml**  file. The following is an example of the  **attach-device.xml**  file:

    ```
    ### attach-device.xml ###
        <interface type='bridge'>
          <mac address='52:54:00:76:f2:bb'/>
          <source bridge='br0'/>
          <virtualport type='openvswitch'/>
          <model type='virtio'/>
          <driver name='vhost' queues='2'/>
        </interface>
    ```

    The vhost-net NIC attached using the preceding commands becomes invalid after the VM is shut down and restarted. If you need to permanently attach a vNIC to a VM, run the  **virsh attach-device**  command with the  **--config**  parameter.

-   Detach the vhost-net NIC.

    If a NIC attached online is no longer used, run the  **virsh detach**  command to dynamically detach it.

    ```
     # virsh detach-device <VMInstance> <detach-device.xml>
    ```

    **detach-device.xml**  specifies the XML information of the vNIC to be detached, which must be the same as the XML information during dynamic attachment.


