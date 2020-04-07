# Introduction<a name="EN-US_TOPIC_0184743328"></a>

## Overview<a name="section17845112761116"></a>

Libvirt tool uses XML files to describe a VM feature, including the VM name, CPU, memory, disk, NIC, mouse, and keyboard. You can manage a VM by modifying configuration files. This section describes the elements in the XML configuration file to help users configure VMs.

## Format<a name="section1439184215279"></a>

The VM XML configuration file uses domain as the root element, which contains multiple other elements. Some elements in the XML configuration file can contain corresponding attributes and attribute values to describe VM information in detail. Different attributes of the same element are separated by spaces.

The basic format of the XML configuration file is as follows. In the format,  **label**  indicates the label name,  **attribute**  indicates the attribute, and  **value**  indicates the attribute value. Change them based on the site requirements.

```
<domain type='kvm'>
    <name>VMName</name>
    <memory attribute='value'>8</memory>
    <vcpu>4</vcpu>
    <os>
       <label attribute='value' attribute='value'>
         ...
       </label>
    </os>
    <label attribute='value' attribute='value'>
      ...
    </label>  
</domain>
```

## Process<a name="section1711441151115"></a>

1.  Create an XML configuration file with domain root element.
2.  Use the name tag to specify a unique VM name based on the naming rule.
3.  Configure system resources such as the virtual CPU \(vCPU\) and virtual memory.
4.  Configure virtual devices.
    1.  Configure storage devices.
    2.  Configure network devices.
    3.  Configure the external bus structure.
    4.  Configure external devices such as the mouse.

5.  Save the XML configuration file.

