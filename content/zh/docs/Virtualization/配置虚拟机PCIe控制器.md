# 配置虚拟机PCIe控制器<a name="ZH-CN_TOPIC_0187048015"></a>

## 概述<a name="section265043712592"></a>

虚拟机内部的网卡、磁盘控制器、PCIe直通设备都需要挂接到PCIe Root Port下面，每个Root Port对应一个PCIe插槽。Root Port的下挂设备支持热插拔，但是Root Port本身不支持热插拔，因此需要用户考虑设备热插的需求，规划虚拟机需要预留的最大PCIe Root Port数量，在虚拟机启动之前完成Root Port的静态配置。

## 配置PCIe Root、PCIe Root Port和PCIe-PCI-Bridge<a name="section19538359145212"></a>

虚拟机PCIe控制器通过XML文件进行配置，PCIe Root、PCIe Root Port和PCIe-PCI-Bridge对应XML中的model分别为pcie-root、pcie-root-port、pcie-to-pci-bridge。

-   简化配置方法

    在虚拟机的XML文件中写入以下内容，controller的其他属性由Libvirt自动填充：

    ```
      <controller type='pci' index='0' model='pcie-root'/>
      <controller type='pci' index='1' model='pcie-root-port'/>
      <controller type='pci' index='2' model='pcie-to-pci-bridge'/>
      <controller type='pci' index='3' model='pcie-root-port'/>
      <controller type='pci' index='4' model='pcie-root-port'/>
      <controller type='pci' index='5' model='pcie-root-port'/>
    ```

    其中：由于pcie-root和pcie-to-pci-bridge分别占用1个index，因此最终的index等于需要的Root Port数量+1。

-   完整配制方法

    在虚拟机的XML文件中写入以下内容：

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

    其中：

    -   Root Port的chassis和port属性必须依次递增，由于中间插入一个PCIe-PCI-Bridge，chassis编号跳过2，但是port编号仍然连续。
    -   Root Port的address function的取值范围为0x0\~0x7。
    -   每个slot最多下挂8个function，挂满之后需要递增slot编号。

    由于完整配置方法相对复杂，建议采用简化配置方法。


