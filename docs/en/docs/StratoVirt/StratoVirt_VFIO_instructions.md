# StratoVirt VFIO Instructions

###  Device Passthrough Management

With device passthrough, a virtualization platform can enable VMs to directly use hardware devices, improving VM performance. This chapter describes the device passthrough feature supported by StratoVirt.

### Prerequisites

To use device passthrough, a host must meet the following requirements:

1. Enable the Input/Output Memory Management Unit (IOMMU).

   The IOMMU enables PCI/PCIe resources to be directly allocated to VMs.

   Run the following command on the host to check whether the IOMMU is enabled:

   ```shell
   # dmesg | grep iommu
   ```

   If it is enabled, the following information is displayed:

   ```shell
   iommu: Default domain type: Translated
   hibmc-drm 0000:0a:00.0: Adding to iommu group 0
   ehci-pci 0000:7a:01.0: Adding to iommu group 1
   ehci-pci 0000:ba:01.0: Adding to iommu group 2
   ohci-pci 0000:7a:00.0: Adding to iommu group 3
   ohci-pci 0000:ba:00.0: Adding to iommu group 4
   xhci_hcd 0000:7a:02.0: Adding to iommu group 5
   ......
   ```

   If it is not enabled, no command output is displayed or only the following information is displayed:

   ```shell
   iommu: Default domain type: Translated
   ```



2. Load the vfio-pci kernel module.

   ```shell
   # modprobe vfio-pci
   # lsmod | grep vfio_pci
   ```

   If the vfio-pci module is successfully loaded, the following information is displayed:

   ```shell
   vfio_pci              327680  0
   vfio_virqfd           327680  1 vfio_pci
   vfio                  327680  2 vfio_iommu_type1,vfio_pci
   ```



3. Unbind the PCI device from the host and bind it to the vfio-pci driver again.

   If Hi1822 NICs are directly connected through the Virtual Function I/O (VFIO), check the information about the PCI devices that correspond to the NICs first.

   ```shell
   # lspci -v | grep "Eth" | grep 1822
   03:00.0 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family (4*25GE) (rev 45)
   04:00.0 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family (4*25GE) (rev 45)
   05:00.0 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family (4*25GE) (rev 45)
   06:00.0 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family (4*25GE) (rev 45)
   ```

   Select the PCI device whose bus ID is 03, slot ID is 00, and function ID is 0, that is, **03:00.0**. Unbind it from the host.

   ```shell
   # echo 0000:03:00.0 > /sys/bus/pci/devices/0000:03:00.0/driver/unbind
   ```

   Finally bind the PCI device to the vfio-pci driver.

   ```shell
   lspci -ns 0000:03:00.0 |awk -F':| ' '{print 5" "6}' > /sys/bus/pci/drivers/vfio-pci/new_id
   ```

   After the NIC is bound to the vfio-pci driver, the NIC information cannot be queried on the host. Only the PCI device information can be queried.

### VFIO Device Passthrough

#### Description

The VFIO is a user-mode device driver solution provided by the kernel. The VFIO driver can securely present capabilities such as device I/O, interrupt, and DMA to user space. After StratoVirt uses the VFIO device passthrough solution, the I/O performance of VMs is greatly improved.

#### Using VFIO Passthrough

StratoVirt interconnects with libvirt to enable you to manage and configure VMs by modifying corresponding XML files. The following describes how to enable VFIO passthrough by modifying the XML file of a VM.

**Step 1** Modify the XML file.

1. Run the following command on the host to query the CPU architecture information:

   ```shell
   # uname -m
   ```

2. For the AArch64 and x86_64 architectures, [download](https://gitee.com/openeuler/stratovirt/tree/master/docs) the StratoVirt XML file **stratovirt_aarch64.xml** or **stratovirtvirt_x86.xml** and save it to any directory, for example, **/home**.

   ```shell
   # cp stratovirt/docs/stratovirt_$arch.xml /home
   ```


3. Modify the VFIO configuration in the XML file based on the site requirements. **bus**, **slot**, and **function** specify the PCI device bound to the vfio-pci driver. The related configurations are as follows:

   ```shell
   <!-- vfio -->
   <hostdev mode='subsystem' type='pci' managed='yes'>
   <driver name='vfio'/>
   <source>
       <address domain='0x0000' bus='0x03' slot='0x00' function='0x0'/>
   </source>
   </hostdev>
   ```

   In the preceding example, the device type is PCI, and **managed='yes'** indicates that libvirt unbinds the PCI device from the host and rebinds it to the vfio-pci driver. In the**source** item, the **domain**, **bus**, **slot**, and **function** of the VFIO passthrough device are configured.

**Step 2** Create and log in to a VM using the libvirt command line.

```shell
# virsh create stratovirt_$arch.xml
# virsh list --all
Id 	Name 		State
--------------------
1 	StratoVirt 	running
# virsh console 1
```

**Step 3** View and use the VFIO passthrough NIC on the VM.

1. Check the NIC information before configuration.

   ```shell
   # ip a
   1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
   	link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   	inet 127.0.0.1/8 scope host lo
       	valid_lft forever preferred_lft forever
   2: enp1s0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
   	link/ether 72:b8:51:9d:d1:27 brd ff:ff:ff:ff:ff:ff
   ```


2. Dynamically configure the IP address of the NIC.

   ```shell
   # dhclient
   ```


3. Check whether the IP address is configured successfully.

   ```shell
   # ip a
   1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
   	link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   	inet 127.0.0.1/8 scope host lo
   		valid_lft forever preferred_lft forever
   2: enp1s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
   	link/ether 72:b8:51:9d:d1:27 brd ff:ff:ff:ff:ff:ff
   	inet 192.168.1.3/16 brd 192.168.255.255 scope global dynamic enp1s0
   		valid_lft 86453sec preferred_lft 86453sec
   ```

   The preceding command output indicates that the IP address 192.168.1.3 is successfully assigned and the VM can directly use the configured NIC.

   Note: If the passthrough NIC is not connected to a physical network, network information cannot be obtained.

#### Unbinding the VFIO Driver

To unbind a passthrough NIC from a VM, log in to the host and run the following command to bind the NIC to the host again.**hinic** indicates the NIC driver type.

```shell
# echo 0000:03:00.0 > /sys/bus/pci/drivers/vfio-pci/unbind
# echo 0000:03:00.0 > /sys/bus/pci/drivers/hinic/bind
```

Note: Before binding a VFIO driver, you can run the **ethtool -i enp0** command on the host to obtain the NIC driver type.**enp0** indicates the name of the corresponding NIC.

### SR-IOV Passthrough

#### Description

When VFIO passthrough is enabled, VMs can directly access hardware, but each device can be exclusively used by only one VM. The SR-IOV passthrough technology can virtualize a physical function (PF) into multiple virtual functions (VFs) and directly pass the VFs to different VMs. This technology increases the number of available devices.

#### Procedure

**Step 1** Create multiple VFs.

   The **sriov_numvfs** file is used to describe the count of VFs provided by SR-IOV and is stored in **/sys/bus/pci/devices/domain\:bus\:slot.function/**. For example, for the device whose bus ID is 03, slot ID is 00, and function ID is 0 in the preceding example, you can run the following command to create four VFs:

   ```shell
   # echo 4 > /sys/bus/pci/devices/0000\:03\:00.0/sriov_numvfs
   ```


**Step 2** Verify that the VFs are successfully created.

   ```shell
   # lspci -v | grep "Eth" | grep 1822
   ```

   If the following information is displayed, four VFs 03:00.1, 03:00.2, 03:00.3, and 03:00.4 are successfully created:

   ```shell
   03:00.0 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family (4*25GE) (rev 45)
   03:00.1 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
   03:00.2 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
   03:00.3 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
   03:00.4 Ethernet controller: Huawei Technologies Co., Ltd. Hi1822 Family Virtual Function (rev 45)
   ```


**Step 3** All the created VFs can be passed to VMs. The method for using an SR-IOV device is the same as that for using a common PCI device.
