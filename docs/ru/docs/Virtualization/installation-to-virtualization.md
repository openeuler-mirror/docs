# Руководство по установке

В этой главе описывается процесс установки компонентов виртуализации openEuler.

- [Руководство по установке](#installation-guide)
  - [Минимальные требования к аппаратному обеспечению](#minimum-hardware-requirements)
  - [Установка основных компонентов виртуализации](#installing-core-virtualization-components)
    - [Методы установки](#installation-methods)
    - [Проверка установки](#verifying-the-installation)

## Минимальные требования к аппаратному обеспечению

Минимальные требования к аппаратному обеспечению для установки компонентов виртуализации на openEuler:

- Архитектура процессора AArch64: ARMv8 или более поздняя версия, поддерживающая расширение виртуализации
- Архитектура процессора x86\_64 с поддержкой VT-x
- 2-ядерный процессор
- Память 4 ГБ
- Доступное дисковое пространство 16 ГБ

## Установка основных компонентов виртуализации

### Методы установки

#### Необходимые условия

- Источник yum сконфигурирован. Для получения более подробной информации обратитесь к документу *Руководство администратора openEuler*.
- Только администратор имеет права на выполнение установки.

#### Процедура

1. Установите компонент QEMU.
   
   ```
   # yum install -y qemu
   ```

2. Установите компонент libvirt.
   
   ```
   # yum install -y libvirt
   ```

3. Запустите службу libvirtd.
   
   ```
   # systemctl start libvirtd
   ```

> ![](./public_sys-resources/icon-note.gif) ПРИМЕЧАНИЕ:  
Модуль KVM интегрирован в ядро openEuler и отдельной установки не требует.

### Проверка установки

1. Убедитесь, что ядро поддерживает виртуализацию KVM, то есть файлы **/dev/kvm** и **/sys/module/kvm** существуют. Команда и ее выходные данные выглядят следующим образом:
   
   ```
   # ls /dev/kvm
   /dev/kvm
   ```
   
   ```
   # ls /sys/module/kvm
   parameters  uevent
   ```
   
   Если вышеуказанные файлы существуют, ядро поддерживает виртуализацию KVM. Если данные файлы не существуют, виртуализация KVM не была включена во время компиляции ядра. В этом случае необходимо использовать ядро Linux, поддерживающее виртуализацию KVM.

2. Убедитесь, что пакет QEMU установлен. Если установка выполнена успешно, выводится информация о пакете программного обеспечения QEMU. Команда и ее выходные данные выглядят следующим образом:
   
   ```
   # rpm -qi qemu
   Name        : qemu
   Epoch       : 2
   Version     : 4.0.1
   Release     : 10
   Architecture: aarch64
   Install Date: Wed 24 Jul 2019 04:04:47 PM CST
   Group       : Unspecified
   Size        : 16869484
   License     : GPLv2 and BSD and MIT and CC-BY
   Signature   : (none)
   Source RPM  : qemu-4.0.0-1.src.rpm
   Build Date  : Wed 24 Jul 2019 04:03:52 PM CST
   Build Host  : localhost
   Relocations : (not relocatable)
   URL         : http://www.qemu.org
   Summary     : QEMU is a generic and open source machine emulator and virtualizer
   Description :
   QEMU is a generic and open source processor emulator which achieves a good
   emulation speed by using dynamic translation. QEMU has two operating modes:
   
    * Full system emulation. In this mode, QEMU emulates a full system (for
      example a PC), including a processor and various peripherials. It can be
      used to launch different Operating Systems without rebooting the PC or
      to debug system code.
    * User mode emulation. In this mode, QEMU can launch Linux processes compiled
      for one CPU on another CPU.
   
   As QEMU requires no host kernel patches to run, it is safe and easy to use.
   ```

3. Убедитесь, что служба libvirt установлена. Если установка выполнена успешно, выводится информация о пакете программного обеспечения libvirt. Команда и ее выходные данные выглядят следующим образом:
   
   ```
   # rpm -qi libvirt
   Name        : libvirt
   Version     : 5.5.0
   Release     : 1
   Architecture: aarch64
   Install Date: Tue 30 Jul 2019 04:56:21 PM CST
   Group       : Unspecified
   Size        : 0
   License     : LGPLv2+
   Signature   : (none)
   Source RPM  : libvirt-5.5.0-1.src.rpm
   Build Date  : Mon 29 Jul 2019 08:14:57 PM CST
   Build Host  : 71e8c1ce149f
   Relocations : (not relocatable)
   URL         : https://libvirt.org/
   Summary     : Library providing a simple virtualization API
   Description :
   Libvirt is a C toolkit to interact with the virtualization capabilities
   of recent versions of Linux (and other OSes). The main package includes
   the libvirtd server exporting the virtualization support.
   ```

4. Убедитесь, что служба libvirt запущена. Если служба имеет статус **Active**, значит она запущена успешно. Можно воспользоваться инструментом командной строки virsh, предоставляемым службой libvirt. Команда и ее выходные данные выглядят следующим образом:
   
   ```
   # systemctl status libvirtd
   ● libvirtd.service - Virtualization daemon
      Loaded: loaded (/usr/lib/systemd/system/libvirtd.service; enabled; vendor preset: enabled)
      Active: active (running) since Tue 2019-08-06 09:36:01 CST; 5h 12min ago
        Docs: man:libvirtd(8)
              https://libvirt.org
    Main PID: 40754 (libvirtd)
       Tasks: 20 (limit: 32768)
      Memory: 198.6M
      CGroup: /system.slice/libvirtd.service
              ─40754 /usr/sbin/libvirtd
   
   ```