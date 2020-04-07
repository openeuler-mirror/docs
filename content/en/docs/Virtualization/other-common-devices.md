# Other Common Devices<a name="EN-US_TOPIC_0184192752"></a>

## Overview<a name="section138722205324"></a>

In addition to storage devices and network devices, some external devices need to be specified in the XML configuration file. This section describes how to configure these elements.

## Elements<a name="section11275162243312"></a>

-   **serial**: serial port device

    Attribute  **type**: specifies the serial port type. The common attribute values are  **pty**,  **tcp**,  **pipe**, and  **file**.


-   **video**: media device

    **type**  attribute: media device type The common attribute value of the AArch architecture is  **virtio**, and that of the x86\_64 architecture is  **vga**  or  **cirrus**.

    Subelement  **model**: subelement of  **video**, which is used to specify the media device type.

    In the subelement  **model**, if  **type**  is set to  **vga**, a Video Graphics Array \(VGA\) video card is configured.  **vram**  indicates the size of the video RAM, in KB by default.

    For example, if a 16 MB VGA video card is configured for an x86\_64 VM, configuration in the XML file is as follows. In the example, the value of  **vram**  is the size of video RAM, in KB by default.

    ```
    <video>
        <model type='vga' vram='16384' heads='1' primary='yes'/>
    </video>
    ```

-   **input**: output device

    **type**  attribute: specifies the type of the output device. The common attribute values are  **tabe**  and  **keyboard**, indicating that the output device is the tablet and keyboard respectively.

    **bus**: specifies the bus to be mounted. The common attribute value is  **USB**.

-   **emulator**: emulator application path
-   **graphics**: graphics device

    **type**  attribute: specifies the type of a graphics device. The common attribute value is  **vnc**.

    **listen**  attribute: specifies the IP address to be listened to.


## Configuration Example<a name="section9754151025916"></a>

For example, in the following example, the VM emulator path, pty serial port, VirtIO media device, USB tablet, USB keyboard, and VNC graphics device are configured.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>When  **type**  of  **graphics**  is set to  **VNC**, you are advised to set the  **passwd**  attribute, that is, the password for logging in to the VM using VNC.  

```
<domain type='kvm'>
    ...
    <devices>
        <emulator>/usr/libexec/qemu-kvm</emulator>
        <console type='pty'/>
        <video>
            <model type='virtio'/>
        </video>
        <input type='tablet' bus='usb'/>
        <input type='keyboard' bus='usb'/>
        <graphics type='vnc' listen='0.0.0.0' passwd='n8VfjbFK'/>
	...
	</devices>
</domain>
```

