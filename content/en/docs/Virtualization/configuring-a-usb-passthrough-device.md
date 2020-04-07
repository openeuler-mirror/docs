# Configuring a USB Passthrough Device<a name="EN-US_TOPIC_0225484549"></a>

## Overview<a name="section1284617157403"></a>

After USB controllers are configured for a VM, a physical USB device on the host can be mounted to the VM through device passthrough for the VM to use. In the virtualization scenario, in addition to static configuration, hot swapping the USB device is supported. That is, the USB device can be mounted or unmounted when the VM is running.

## Precautions<a name="section14717471434"></a>

-   A USB device can be assigned to only one VM.
-   A VM with a USB passthrough device does not support live migration.
-   VM creation fails if no USB passthrough devices exist in the VM configuration file.
-   Forcibly hot removing a USB storage device that is performing read or write operation may damage files in the USB storage device.

## Configuration Description<a name="section6688184225519"></a>

The following describes the configuration items of a USB device for a VM.

Description of the USB device in the XML configuration file:

```
<hostdev mode='subsystem' type='usb' managed='yes'>
    <source>        
        <address bus='m' device='n'/>
    </source>
    <address type='usb' bus='x' port='y'/>
</hostdev>
```

-   **<address bus='**_m_**'device='**_n_**'/\>**:  _m_  indicates the USB bus address on the host, and  _n_  indicates the device ID.
-   **<address type='usb'bus='**_x_**'port='**_y_**'\>**: indicates that the USB device is to be mounted to the USB controller specified on the VM.  _x_  indicates the controller ID, which corresponds to the index number of the USB controller configured on the VM.  _y_  indicates the port address. When configuring a USB passthrough device, you need to set this parameter to ensure that the controller to which the device is mounted is as expected.

## Configuration Methods<a name="section19318220011"></a>

To configure USB passthrough, perform the following steps:

1.  Configure USB controllers for the VM. For details, see  [Configuring USB Controllers](configuring-usb-controllers.md).
2.  Query information about the USB device on the host.

    Run the  **lsusb**  command \(the  **usbutils**  software package needs to be installed\) to query the USB device information on the host, including the bus address, device address, device vendor ID, device ID, and product description. For example:

    ```
    # lsusb
    ```

    ```
    Bus 008 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
    Bus 007 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
    Bus 006 Device 002: ID 0bda:0411 Realtek Semiconductor Corp. 
    Bus 006 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
    Bus 005 Device 003: ID 136b:0003 STEC 
    Bus 005 Device 002: ID 0bda:5411 Realtek Semiconductor Corp. 
    Bus 005 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 001 Device 003: ID 12d1:0003 Huawei Technologies Co., Ltd. 
    Bus 001 Device 002: ID 0bda:5411 Realtek Semiconductor Corp. 
    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
    Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
    ```

3.  Prepare the XML description file of the USB device. Before hot removing the device, ensure that the USB device is not in use. Otherwise, data may be lost.
4.  Run the hot swapping commands.

    Take a VM whose name is  **openEulerVM**  as an example. The corresponding configuration file is  **usb.xml**.

    -   Hot adding of the USB device takes effect only for the current running VM. After the VM is restarted, hot add the USB device again.

        ```
        # virsh attach-device openEulerVM usb.xml --live
        ```

    -   Complete persistency configurations for hot adding of the USB device. After the VM is restarted, the USB device is automatically assigned to the VM.

        ```
        # virsh attach-device openEulerVM usb.xml --config
        ```

    -   Hot removing of the USB device takes effect only for the current running VM. After the VM is restarted, the USB device with persistency configurations is automatically assigned to the VM.

        ```
        # virsh detach-device openEulerVM usb.xml --live
        ```

    -   Complete persistency configurations for hot removing of the USB device.

        ```
        # virsh detach-device openEulerVM usb.xml --config
        ```



