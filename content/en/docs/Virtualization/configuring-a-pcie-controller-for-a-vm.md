# Configuring a PCIe Controller for a VM<a name="EN-US_TOPIC_0187048015"></a>

## Overview<a name="section265043712592"></a>

Thr NIC, disk controller, and PCIe pass-through devices in a VM must be mounted to a PCIe root port. Each root port corresponds to a PCIe slot. The devices mounted to the root port support hot swap, but the root port does not support hot swap. Therefore, users need to consider the hot swap requirements and plan the maximum number of PCIe root ports reserved for the VM. Before the VM is started, the root port is statically configured.

## Configuring the PCIe Root, PCIe Root Port, and PCIe-PCI-Bridge<a name="section19538359145212"></a>

The VM PCIe controller is configured using the XML file. The  **model**  corresponding to PCIe root, PCIe root port, and PCIe-PCI-bridge in the XML file are  **pcie-root**,  **pcie-root-port**, and  **pcie-to-pci-bridge**, respectively.

-   Simplified configuration method

    Add the following contents to the XML file of the VM. Other attributes of the controller are automatically filled by libvirt.

    ```
      <controller type='pci' index='0' model='pcie-root'/>
      <controller type='pci' index='1' model='pcie-root-port'/>
      <controller type='pci' index='2' model='pcie-to-pci-bridge'/>
      <controller type='pci' index='3' model='pcie-root-port'/>
      <controller type='pci' index='4' model='pcie-root-port'/>
      <controller type='pci' index='5' model='pcie-root-port'/>
    ```

    The  **pcie-root**  and  **pcie-to-pci-bridge**  occupy one  **index**  respectively. Therefore, the final  **index**  is the number of required  **root ports + 1**.

-   Complete configuration method

    Add the following contents to the XML file of the VM:

    ```
      <controller type='pci' index='0' model='pcie-root'/>
      <controller type='pci' index='1' model='pcie-root-port'>
        <model name='pcie-root-port'/>
        <target chassis='1' port='0x8'/>
        <address type='pci' domain='0x0000' bus='0x00' slot='0x01' function='0x0' multifunction='on'/>
      </controller>
      <controller type='pci' index='2' model='pcie-to-pci-bridge'>
        <model name='pcie-pci-bridge'/>
        <address type='pci' domain='0x0000' bus='0x01' slot='0x00' function='0x0'/>
      </controller>
      <controller type='pci' index='3' model='pcie-root-port'>
        <model name='pcie-root-port'/>
        <target chassis='3' port='0x9'/>
        <address type='pci' domain='0x0000' bus='0x00' slot='0x01' function='0x1'/>
      </controller>
      <controller type='pci' index='3' model='pcie-root-port'>
    ```

    In the preceding contents:

    -   The  **chassis**  and  **port**  attributes of the root port must be in ascending order. Because a PCIe-PCI-bridge is inserted in the middle, the  **chassis**  number skips  **2**, but the  **port**  numbers are still consecutive.
    -   The  **address function**  of the root port ranges from  **0\*0**  to  **0\*7**.
    -   A maximum of eight functions can be mounted to each slot. When the slot is full, the slot number increases.

    The complete configuration method is complex. Therefore, the simplified one is recommended.


