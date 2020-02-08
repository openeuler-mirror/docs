# XML配置文件示例<a name="ZH-CN_TOPIC_0184192754"></a>

## 概述<a name="section6852928161"></a>

本节给出两个基本的虚拟机XML配置文件示例，供用户参考。

## 示例一<a name="section1454410303175"></a>

一个包含基本元素的XML配置文件，其内容示例如下：

```
<domain type='kvm'>
    <name>openEulerVM</name>
    <memory unit='GiB'>8</memory>
    <vcpu>4</vcpu>
    <os>
	<type arch='aarch64' machine='virt-4.0'>hvm</type>
	<loader readonly='yes' type='pflash'>/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw</loader>
	<nvram>/var/lib/libvirt/qemu/nvram/openEulerVM.fd</nvram>
    </os>
    <features>
	<acpi/>
	<gic version='3'/>
    </features>
    <cpu mode='host-passthrough'>
        <topology sockets='2' cores='2' threads='1'/>
    </cpu>
    <iothreads>1</iothreads>
    <clock offset='utc'/>
    <on_poweroff>destroy</on_poweroff>
    <on_reboot>restart</on_reboot>
    <on_crash>restart</on_crash>
    <devices>
	<emulator>/usr/libexec/qemu-kvm</emulator>
	<disk type='file' device='disk'>
	    <driver name='qemu' type='qcow2' iothread="1"/>
	    <source file='/mnt/openEuler-image.qcow2'/>
	    <target dev='vda' bus='virtio'/>
	    <boot order='1'/>
	</disk>
	<disk type='file' device='cdrom'>
	    <driver name='qemu' type='raw'/>
	    <source file='/mnt/openEuler-1.0-base-aarch64-dvd.iso'/>
	    <readonly/>
	    <target dev='sdb' bus='scsi'/>
	    <boot order='2'/>
	</disk>
	<interface type='bridge'>
	    <source bridge='br0'/>
	    <model type='virtio'/>
	</interface>
	<console type='pty'/>
        <video>
           <model type='virtio'/>
        </video>
        <controller type='scsi' index='0' model='virtio-scsi'/>
	<controller type='usb' model='ehci'/>
	<input type='tablet' bus='usb'/>
	<input type='keyboard' bus='usb'/>
	<graphics type='vnc' listen='0.0.0.0' passwd='n8VfjbFK'/>
    </devices>
</domain>
```

## 示例二<a name="section2291114717183"></a>

一个包含基本元素及总线元素的XML配置文件，其配置示例如下：

```
<domain type='kvm'>
    <name>openEulerVM</name>
    <memory unit='GiB'>8</memory>
    <vcpu>4</vcpu>
    <os>
	<type arch='aarch64' machine='virt-4.0'>hvm</type>
	<loader readonly='yes' type='pflash'>/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw</loader>
	<nvram>/var/lib/libvirt/qemu/nvram/openEulerVM.fd</nvram>
    </os>
    <features>
	<acpi/>
	<gic version='3'/>
    </features>
    <cpu mode='host-passthrough'>
        <topology sockets='2' cores='2' threads='1'/>
    </cpu>
    <iothreads>1</iothreads>
    <clock offset='utc'/>
    <on_poweroff>destroy</on_poweroff>
    <on_reboot>restart</on_reboot>
    <on_crash>restart</on_crash>
    <devices>
	<emulator>/usr/libexec/qemu-kvm</emulator>
	<disk type='file' device='disk'>
	    <driver name='qemu' type='qcow2' iothread="1"/>
	    <source file='/mnt/openEuler-image.qcow2'/>
	    <target dev='vda' bus='virtio'/>
	    <boot order='1'/>
	</disk>
	<disk type='file' device='cdrom'>
	    <driver name='qemu' type='raw'/>
	    <source file='/mnt/openEuler-1.0-base-aarch64-dvd.iso'/>
	    <readonly/>
	    <target dev='sdb' bus='scsi'/>
	    <boot order='2'/>
	</disk>
        <controller type='pci' index='0' model='pcie-root'/>
	<controller type='pci' index='1' model='pcie-root-port'>
	    <address type='pci' domain='0x0000' bus='0x00' slot='0x01' function='0x0' multifunction='on'/>
	</controller>
	<controller type='pci' index='2' model='pcie-root-port'>
	    <address type='pci' domain='0x0000' bus='0x00' slot='0x01' function='0x1'/>
	</controller>
	<controller type='pci' index='3' model='pcie-to-pci-bridge'>
	    <model name='pcie-pci-bridge'/>
	    <address type='pci' domain='0x0000' bus='0x01' slot='0x00' function='0x0'/>
	</controller>
	<controller type='pci' index='4' model='pcie-root-port'>
	    <address type='pci' domain='0x0000' bus='0x00' slot='0x01' function='0x2'/>
	</controller>
	<controller type='scsi' index='0' model='virtio-scsi'>
	    <address type='pci' domain='0x0000' bus='0x02' slot='0x00' function='0x0'/>
	</controller>
	<controller type='virtio-serial' index='0'>
	    <address type='pci' domain='0x0000' bus='0x03' slot='0x02' function='0x0'/>
	</controller>
	<controller type='usb' index='0' model='ehci'>
	    <address type='pci' domain='0x0000' bus='0x03' slot='0x01' function='0x0'/>
	</controller>
	<interface type='bridge'>
	    <source bridge='br0'/>
	    <model type='virtio'/>
	</interface>
	<console type='pty'/>
        <video>
           <model type='virtio'/>
        </video>
	<input type='tablet' bus='usb'/>
	<input type='keyboard' bus='usb'/>
	<graphics type='vnc' listen='0.0.0.0' passwd='n8VfjbFK'/>
    </devices>
</domain>
```

