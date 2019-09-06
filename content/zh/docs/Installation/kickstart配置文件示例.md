# kickstart配置文件示例<a name="ZH-CN_TOPIC_0187280637"></a>

kickstart配置文件示例：openEuler-ks.cfg

```
#version=DEVEL
install
# System language
lang en_US
# Use CDROM installation media
cdrom
# Use graphical install
graphical
# Run the Setup Agent on first boot
firstboot --disabled
# Keyboard layouts
keyboard us
# Network information
network --bootproto=dhcp --device=eth0 --activate --hostname=euloros-vm
# Reboot after finishing installation
reboot
# Root password
rootpw --iscrypted $6$JZRElVrsTPik8tCC$6f/EBLW8S4uAR4VrYSMQHOZ1pgBhE1it4qCo31wTXCmOheUSPVmot2flm3
yI.mdJk33pVjBrU6wRFHmiIeKGz0
# System services
services --enabled="chronyd"
# System timezone
timezone Asia/Shanghai --isUtc
# System bootloader configuration
bootloader --append=" crashkernel=auto" --location=mbr
autopart --type=lvm
# Partition clearing information
clearpart --all --initlabel
%packages
@base
@core
chrony
kexec-tools
%end
%addon com_redhat_kdump --enable --reserve-mb='128'
%end
```

