# Preparing VMs

This document describes how to use virt manager to install a VM. Ignore if your VM is prepared.

## Installing Dependency Tools

VM installation depends on related tools. The following command is an example for installing the dependency and enabling the libvirtd service. (If a proxy is required, configure the proxy first.)

```bash
dnf install virt-install virt-manager libvirt-daemon-qemu edk2-aarch64.noarch virt-viewer
systemctl start libvirtd
systemctl enable libvirtd
```

## Preparing VM Disk Files

```bash
dnf install -y qemu-img
virsh pool-define-as vmPool --type dir --target /mnt/vm/images/
virsh pool-build vmPool
virsh pool-start vmPool
virsh pool-autostart  vmPool
virsh vol-create-as --pool vmPool --name master0.img --capacity 200G --allocation 1G --format qcow2
virsh vol-create-as --pool vmPool --name master1.img --capacity 200G --allocation 1G --format qcow2
virsh vol-create-as --pool vmPool --name master2.img --capacity 200G --allocation 1G --format qcow2
virsh vol-create-as --pool vmPool --name node1.img --capacity 300G --allocation 1G --format qcow2
virsh vol-create-as --pool vmPool --name node2.img --capacity 300G --allocation 1G --format qcow2
virsh vol-create-as --pool vmPool --name node3.img --capacity 300G --allocation 1G --format qcow2
```

## Enabling Firewall Ports

**Method 1**

1. Query a port.

   ```shell
   netstat -lntup | grep qemu-kvm
   ```

2. Enable the VNC firewall port. For example, if the port number starts from 5900, run the following commands:

   ```shell
   firewall-cmd --zone=public --add-port=5900/tcp
   firewall-cmd --zone=public --add-port=5901/tcp
   firewall-cmd --zone=public --add-port=5902/tcp
   firewall-cmd --zone=public --add-port=5903/tcp
   firewall-cmd --zone=public --add-port=5904/tcp
   firewall-cmd --zone=public --add-port=5905/tcp
   ```

**Method 2**

Disable the firewall.

```shell
systemctl stop firewalld
```

## Preparing the VM Configuration File

A VM configuration file is required for creating a VM. For example, if the configuration file is master.xml and the host name of the VM is k8smaster0, the configuration is as follows:

```bash
 cat master.xml

<domain type='kvm'>
    <name>k8smaster0</name>
    <memory unit='GiB'>8</memory>
    <vcpu>8</vcpu>
    <os>
 <type arch='aarch64' machine='virt'>hvm</type>
 <loader readonly='yes' type='pflash'>/usr/share/edk2/aarch64/QEMU_EFI-pflash.raw</loader>
 <nvram>/var/lib/libvirt/qemu/nvram/k8smaster0.fd</nvram>
    </os>
    <features>
 <acpi/>
 <gic version='3'/>
    </features>
    <cpu mode='host-passthrough'>
        <topology sockets='2' cores='4' threads='1'/>
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
     <source file='/mnt/vm/images/master0.img'/>
     <target dev='vda' bus='virtio'/>
     <boot order='1'/>
 </disk>
 <disk type='file' device='cdrom'>
     <driver name='qemu' type='raw'/>
     <source file='/mnt/openEuler-21.09-everything-aarch64-dvd.iso'/>
     <readonly/>
     <target dev='sdb' bus='scsi'/>
     <boot order='2'/>
 </disk>
        <interface type='network'>
           <mac address='52:54:00:00:00:80'/>
           <source network='default'/>
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
 <graphics type='vnc' listen='0.0.0.0'/>
    </devices>
    <seclabel type='dynamic' model='dac' relabel='yes'/>
</domain>
```

The VM configuration must be unique. Therefore, you need to modify the following to ensure that the VM is unique:

- name: host name of the VM. You are advised to use lowercase letters. In this example, the value is `k8smaster0`.
- nvram: handle file path of the NVRAM, which must be globally unique. In this example, the value is `/var/lib/libvirt/qemu/nvram/k8smaster0.fd`.
- disk source file: VM disk file path. In this example, the value is `/mnt/vm/images/master0.img`.
- mac address of the interface: MAC address of the interface. In this example, the value is `52:54:00:00:00:80`.

## Installing a VM

1. Create and start a VM.

   ```shell
   virsh define master.xml
   virsh start k8smaster0
   ```

2. Obtain the VNC port number of the VM.

   ```shell
   virsh vncdisplay k8smaster0
   ```

3. Use a VM connection tool, such as VNC Viewer, to remotely connect to the VM and perform configurations as prompted.

4. Set the host name of the VM, for example, k8smaster0.

   ```shell
   hostnamectl set-hostname k8smaster0
   ```
