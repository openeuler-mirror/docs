# Подготовка виртуальных машин

В данном документе приведено описание способа установки виртуальной машины с помощью virt manager. Если ваша виртуальная машина уже подготовлена, можно пропустить этот раздел.

## Установка инструментов зависимостей

Процесс установки ВМ зависит от соответствующих инструментов. Нижеприведенная команда является примером установки зависимости и включения сервиса libvirtd. (Если требуется прокси-сервер, сначала настройте прокси-сервер).

```bash
dnf install virt-install virt-manager libvirt-daemon-qemu edk2-aarch64.noarch virt-viewer
systemctl start libvirtd
systemctl enable libvirtd
```

## Подготовка файлов диска ВМ

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

## Включение портов межсетевого экрана

**Метод 1**

1. Запросите порт.
   
   ```shell
   netstat -lntup | grep qemu-kvm
   ```

2. Включите порт межсетевого экрана VNC. Например, если номер порта начинается с 5900, выполните следующие команды:
   
   ```shell
   firewall-cmd --zone=public --add-port=5900/tcp
   firewall-cmd --zone=public --add-port=5901/tcp
   firewall-cmd --zone=public --add-port=5902/tcp
   firewall-cmd --zone=public --add-port=5903/tcp
   firewall-cmd --zone=public --add-port=5904/tcp
   firewall-cmd --zone=public --add-port=5905/tcp
   ```

**Метод 2**

Отключите межсетевой экран.

```shell
systemctl stop firewalld
```

## Подготовка конфигурационного файла ВМ

Для создания виртуальной машины необходим конфигурационный файл ВМ. Например, если конфигурационным файлом является master.xml, а именем хоста ВМ — k8smaster0, то конфигурация выглядит следующим образом:

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
     <source file='/mnt/openEuler-21.03-everything-aarch64-dvd.iso'/>
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

Конфигурация виртуальной машины должна быть уникальной. Поэтому необходимо изменить указанные ниже параметры, чтобы обеспечить уникальность ее конфигурации.

- name: имя хоста виртуальной машины. Рекомендуется использовать строчные буквы. В данном примере значение — `k8smaster0`.
- nvram: путь к файлу дескриптора NVRAM, который должен быть уникальным в глобальном масштабе. В данном примере значение — `/var/lib/libvirt/qemu/nvram/k8smaster0.fd`.
- disk source file: путь к файлу диска виртуальной машины. В данном примере значение — `/mnt/vm/images/master0.img`.
- mac address of the interface: MAC-адрес интерфейса. В данном примере значение — `52:54:00:00:00:80`.

## Установка виртуальной машины

1. Создайте и запустите виртуальную машину.
   
   ```shell
   virsh define master.xml
   virsh start k8smaster0
   ```

2. Получите номер порта VNC виртуальной машины.
   
   ```shell
   virsh vncdisplay k8smaster0
   ```

3. Используйте инструмент, например VNC Viewer, для удаленного подключения к виртуальной машине и выполните настройки по инструкциям.

4. Задайте имя хоста виртуальной машины, например, k8smaster0.
   
   ```shell
   hostnamectl set-hostname k8smaster0
   ```