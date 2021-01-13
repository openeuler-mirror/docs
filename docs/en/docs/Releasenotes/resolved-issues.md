# Resolved Issues

For the complete issue list, see [Complete Issue List](https://gitee.com/organizations/src-openeuler/issues).

For details about the complete kernel submission records, see [Record Submission](https://gitee.com/openeuler/kernel/commits/openEuler-1.0-LTS).

**Applications and basic services** 

|  ISSUE   | Description  |
|:---  |:----  |
| [I1TPY4](https://gitee.com/src-openeuler/mariadb/issues/I1TPY4) | x86/arm mariadb-server installation fails. |
| [I1TOV5](https://gitee.com/src-openeuler/lm_sensors/issues/I1TOV5) | lm_sensors cannot be started by default, and systemd is in the degraded state. |
| [I1TOCE](https://gitee.com/src-openeuler/kexec-tools/issues/I1TOCE) | The kdump on an x86- or ARM-based physical machine fails to be started. |
| [I1TZH1](https://gitee.com/src-openeuler/firewalld/issues/I1TZH1) | The rule does not take effect when the destination port is 80 and the data packages from the source IP address of a host are added to the x86-based server. |
| [I1T4O3](https://gitee.com/src-openeuler/lvm2/issues/I1T4O3) | During x86 PXE installation, the %packages file in the .ks file is used to install minimal, @core, and @base. After the installation is successful, the startup is suspended. |
| [I1T8JJ](https://gitee.com/src-openeuler/freeradius/issues/I1T8JJ) | The installation of the ARM-based freeRADIUS server fails.|

**Programming languages and compilers** 

|  ISSUE   |Description  |
|:---  |:----  |
| [I1RUM6](https://gitee.com/src-openeuler/file/issues/I1RUM6) | Track the community to resolve the issue that the type of the file generated after the compilation of gcc -static-pie is incorrect. |


**Virtualization and containers** 

|  ISSUE   |Description  |
|:---  |:----  |
| [I1TB7N](https://gitee.com/openeuler/kernel/issues/I1TB7N?from=project-issue) | PMU nmi watchdog does not support CPU hot-plug. |
| [I1TXAU](https://gitee.com/openeuler/kernel/issues/I1TXAU?from=project-issue) | The VM fails to be started when the VM CPU mode is configured with host-model. |
| [I1U8BP](https://gitee.com/openeuler/kernel/issues/I1U8BP?from=project-issue) | When openEuler is used to set trusted boot as an image, the VM cannot identify the TPM device. |


**Kernel** 

|  ISSUE   |Description  |
|:---  |:----  |
| [I17YPQ](https://gitee.com/openeuler/kernel/issues/I17YPQ?from=project-issue) | The drive connected to the LSI SAS3408 RAID controller card cannot be identified during the installation. |
| [I1JZHT](https://gitee.com/openeuler/kernel/issues/I1JZHT?from=project-issue) | The Netdevsim is repeatedly loaded and uninstalled, causing the system to reset. |
| [I1RUC8](https://gitee.com/openeuler/kernel/issues/I1RUC8?from=project-issue) | The performance loss of vmalloc on x86-based servers is huge. |
| [I1R86G](https://gitee.com/openeuler/kernel/issues/I1R86G?from=project-issue) | openEuler An error of pread is reported when openEuler performs a test on the open GaussDB, causing the return to -EIO. |
| [I1SISM](https://gitee.com/openeuler/kernel/issues/I1SISM?from=project-issue) | The XFS drive with size=8192 cannot be mounted to the openEuler on the x86 platform. |

**Security**

|  ISSUE   |问题描述  |
|:---  |:----  |
| [I1TQ15](https://gitee.com/openeuler/kernel/issues/I1TQ15?from=project-issue) | An error is reported when the firewall-cmd --reload command is executed to add an IP address set that does not exist to the drop area as the source. |


**Hardware and chips** 

|  ISSUE   |问题描述  |
|:---  |:----  |
| [I1SY0K](https://gitee.com/openeuler/raspberrypi/issues/I1SY0K) | The Raspberry Pi Wi-Fi is unavailable and the connection to the Wi-Fi network fails. |
| [I1R4G1](https://gitee.com/openeuler/raspberrypi/issues/I1R4G1) | The connection to the Raspberry Pi BT fails repeatedly. |


**File system**

|  ISSUE   |问题描述  |
|:---  |:----  |
| [I1E0KN](https://gitee.com/src-openeuler/findutils/issues/I1E0KN) | A core dump occurs when a user creates and deletes folders concurrently in the XFS file system and uses the find command to query the folders. |
| [I1MA88](https://gitee.com/src-openeuler/libguestfs/issues/I1MA88) | The libguestfs uses the Gnulib code that has a vulnerability, causing a core dump. |
| [I1T3GC](https://gitee.com/src-openeuler/nfs-utils/issues/I1T3GC) | The memory allocation is reported to fail when the mounted drive letter is checked at the NFS client. |


**Network**

|  ISSUE   |问题描述  |
|:---  |:----  |
| [I1TO3R](https://gitee.com/src-openeuler/network-manager-applet/issues/I1TO3R) | An error occurs when the network-manager-appletda is invoked during installation and ipv4 is manually configured. |
| [I1TYDG](https://gitee.com/src-openeuler/NetworkManager/issues/I1TYDG) | The NetworkManager service cannot not be self-healed due to the D-Bus service exception. |
| [I1AD7N](https://gitee.com/src-openeuler/initscripts/issues/I1AD7N) | The IP address is lost when the network is restarted because the return value of the grep -L command in the network-scripts file is changed. |

**System tools**

|  ISSUE   |问题描述  |
|:---  |:----  |
| [I1U7RL](https://gitee.com/src-openeuler/system-config-printer/issues/I1U7RL) | An error occurs during system-config-printer installation. |
| [I1T8H4](https://gitee.com/src-openeuler/tuned/issues/I1T8H4) | After the x86/ARM-based device is installed by default, the systemctl -all --failed command is executed and the tuned service fails to be started. |
