# XML Configuration File Example<a name="EN-US_TOPIC_0184192754"></a>

## Overview<a name="section6852928161"></a>

This section provides XML configuration files of a basic AArch64 VM and a x86\_64 VM as two examples for reference.

## Example 1<a name="section1454410303175"></a>

An XML configuration file of AArch64 VM, which contains basic elements. The following is a configuration example:

```
<domain type='kvm'>
    <name>openEulerVM</name>
    <memory unit='GiB'>8</memory>
    <vcpu>4</vcpu>
    <os>
	<type arch='aarch64' machine='virt'>hvm</type>
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
	    <source file='/mnt/openEuler-20.03-LTS-aarch64-dvd.iso'/>
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

## Example 2<a name="section20887925203515"></a>

An XML configuration file of x86\_64 VM, which contains basic elements and bus elements. The following is a configuration example:

```
<domain type='kvm'>
  <name>openEulerVM</name>
  <memory unit='KiB'>8388608</memory>
  <currentMemory unit='KiB'>8388608</currentMemory>
  <vcpu placement='static'>4</vcpu>
  <iothreads>1</iothreads>
  <os>
    <type arch='x86_64' machine='pc-i440fx-4.0'>hvm</type>
  </os>
  <features>
    <acpi/>
  </features>
  <cpu mode='host-passthrough' check='none'>
    <topology sockets='2' cores='2' threads='1'/>
  </cpu>
  <clock offset='utc'/>
  <on_poweroff>destroy</on_poweroff>
  <on_reboot>restart</on_reboot>
  <on_crash>restart</on_crash>
  <devices>
    <emulator>/usr/libexec/qemu-kvm</emulator>
    <disk type='file' device='disk'>
      <driver name='qemu' type='qcow2' iothread='1'/>
      <source file='/mnt/openEuler-image.qcow2'/>
      <target dev='vda' bus='virtio'/>
      <boot order='1'/>
      <address type='pci' domain='0x0000' bus='0x00' slot='0x08' function='0x0'/>
    </disk>
    <controller type='scsi' index='0' model='virtio-scsi'>
    </controller>
    <controller type='virtio-serial' index='0'>
    </controller>
    <controller type='usb' index='0' model='ehci'>
    </controller>
    <controller type='sata' index='0'>
    </controller>
    <controller type='pci' index='0' model='pci-root'/>
    <interface type='bridge'>
      <mac address='52:54:00:c1:c4:23'/>
      <source bridge='virbr0'/>
      <model type='virtio'/>
    </interface>
    <serial type='pty'>
      <target type='isa-serial' port='0'>
        <model name='isa-serial'/>
      </target>
    </serial>
    <console type='pty'>
      <target type='serial' port='0'/>
    </console>
    <input type='tablet' bus='usb'>
      <address type='usb' bus='0' port='1'/>
    </input>
    <input type='keyboard' bus='usb'>
      <address type='usb' bus='0' port='2'/>
    </input>
    <input type='mouse' bus='ps2'/>
    <input type='keyboard' bus='ps2'/>
    <graphics type='vnc' port='-1' autoport='yes' listen='0.0.0.0'>
      <listen type='address' address='0.0.0.0'/>
    </graphics>
    <video>
      <model type='vga' vram='16384' heads='1' primary='yes'/>
      <address type='pci' domain='0x0000' bus='0x00' slot='0x02' function='0x0'/>
    </video>
    <memballoon model='virtio'>
    </memballoon>
  </devices>
</domain>
```

