# Configurations Related to the System Architecture<a name="EN-US_TOPIC_0184192753"></a>

## Overview<a name="section891512161392"></a>

The XML configuration file contain configurations related to the system architecture, which cover the mainboard, CPU, and some features related to the architecture. This section describes meanings of these configurations.

## Elements<a name="section5884430104314"></a>

-   **os**: defines VM startup parameters.

    Subelement  **type**: specifies the VM type. The attribute  **arch**  indicates the architecture type, for example, AArch64. The attribute  **machine**  indicates the type of VM chipset. Supported chipset type can be queried by running the  **qemu-kvm -machine ?**  command. For example, the AArch64 architecture supports the  **virt**  type.

    Subelement  **loader**: specifies the firmware to be loaded, for example, the UEFI file provided by the EDK. The  **readonly**  attribute indicates whether the file is read-only. The value can be  **yes**  or  **no**. The  **type**  attribute indicates the  **loader**  type. The common values are  **rom**  and  **pflash**.

    Subelement  **nvram**: specifies the path of the  **nvram**  file, which is used to store the UEFI startup configuration.


-   **features**: Hypervisor controls some VM CPU/machine features, such as the advanced configuration and power interface \(ACPI\) and the GICv3 interrupt controller specified by the ARM processor.

## Example for AArch64 Architecture<a name="section647718146174"></a>

The VM is of the  **aarch64**  type and uses  **virt**  chipset. The VM configuration started using UEFI is as follows:

```
<domain type='kvm'>
    ...
    <os>
        <type arch='aarch64' machine='virt'>hvm</type>
        <loader readonly='yes' type='pflash'>/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw</loader>
        <nvram>/var/lib/libvirt/qemu/nvram/openEulerVM.fd</nvram>
    </os>
    ...
</domain>
```

Configure ACPI and GIC V3 interrupt controller features for the VM.

```
<features>
    <acpi/>
    <gic version='3'/>
</features>
```

## Example for x86\_64 Architecture<a name="section416341234917"></a>

The x86\_64 architecture supports both BIOS and UEFI boot modes. If  **loader**  is not configured, the default BIOS boot mode is used. The following is a configuration example in which the UEFI boot mode and Q35 chipsets are used.

```
<domain type='kvm'>
    ...
    <os>
        <type arch='x86_64' machine='q35'>hvm</type>
        <loader type='rom'>/usr/share/edk2/ovmf/OVMF.fd</loader>
    </os>
    ...
</domain>
```

