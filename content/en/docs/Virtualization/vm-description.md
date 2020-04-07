# VM Description<a name="EN-US_TOPIC_0184192748"></a>

## Overview<a name="section93991445171218"></a>

This section describes how to configure the VM  **domain**  root element and VM name.

## Elements<a name="section9646175951313"></a>

-   **domain**: Root element of a VM XML configuration file, which is used to configure the type of the hypervisor that runs the VM.

    **type**: Type of a domain in virtualization. In the openEuler virtualization, the attribute value is  **kvm**.

-   **name**: VM name.

    The VM name is a unique character string on the same host. The VM name can contain only digits, letters, underscores \(\_\), hyphens \(-\), and colons \(:\), but cannot contain only digits. The VM name can contain a maximum of 64 characters.


## Configuration Example<a name="section10403123219155"></a>

For example, if the VM name is  **openEuler**, the configuration is as follows:

```
<domain type='kvm'>
    <name>openEuler</name>
    ...
</domain>
```

