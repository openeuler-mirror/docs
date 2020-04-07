# Configuring USB Controllers<a name="EN-US_TOPIC_0225484548"></a>

## Overview<a name="section43851918151117"></a>

A USB controller is a virtual controller that provides specific USB functions for USB devices on VMs. To use USB devices on a VM, you must configure USB controllers for the VM. Currently, openEuler supports the following types of USB controllers:

-   Universal host controller interface \(UHCI\): also called the USB 1.1 host controller specification.
-   Enhanced host controller interface \(EHCI\): also called the USB 2.0 host controller specification.
-   Extensible host controller interface \(xHCI\): also called the USB 3.0 host controller specification.

## Precautions<a name="section205681456172116"></a>

-   The host server must have USB controller hardware and modules that support USB 1.1, USB 2.0, and USB 3.0 specifications.
-   You need to configure USB controllers for the VM by following the order of USB 1.1, USB 2.0, and USB 3.0.
-   An xHCI controller has eight ports and can be mounted with a maximum of four USB 3.0 devices and four USB 2.0 devices. An EHCI controller has six ports and can be mounted with a maximum of six USB 2.0 devices. A UHCI controller has two ports and can be mounted with a maximum of two USB 1.1 devices.
-   On each VM, only one USB controller of the same type can be configured.
-   USB controllers cannot be hot swapped.
-   If the USB 3.0 driver is not installed on a VM, the xHCI controller may not be identified. For details about how to download and install the USB 3.0 driver, refer to the official description provided by the corresponding OS distributor.
-   To ensure the compatibility of the OS, set the bus ID of the USB controller to  **0**  when configuring a USB tablet for the VM. The tablet is mounted to the USB 1.1 controller by default.

## Configuration Methods<a name="section131052195255"></a>

The following describes the configuration items of USB controllers for a VM. You are advised to configure USB 1.1, USB 2.0, and USB 3.0 to ensure the VM is compatible with three types of devices.

The configuration item of the USB 1.1 controller \(UHCI\) in the XML configuration file is as follows:

```
<controller type='usb' index='0' model='piix3-uhci'>
</controller>
```

The configuration item of the USB 2.0 controller \(EHCI\) in the XML configuration file is as follows:

```
<controller type='usb' index='1' model='ehci'>
</controller>
```

The configuration item of the USB 3.0 controller \(xHCI\) in the XML configuration file is as follows:

```
<controller type='usb' index='2' model='nec-xhci'>
</controller>
```

