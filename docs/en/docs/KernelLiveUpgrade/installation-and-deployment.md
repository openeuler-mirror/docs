# Installation and Deployment

This document describes how to install and deploy the kernel hot upgrade tool.

<!-- TOC -->

- [Installation and Deployment](#installation-and-deployment)
    - [Hardware and Software Requirements](#hardware-and-software-requirements)
        - [Hardware Requirements](#hardware-requirements)
        - [Software Requirements](#software-requirements)
    - [Environment Preparation](#environment-preparation)
    - [Installing the Kernel Hot Upgrade Tool](#installing-the-kernel-hot-upgrade-tool)
    - [Deploying the Kernel Hot Upgrade Tool](#deploying-the-kernel-hot-upgrade-tool)
        - [Configurations](#configurations)
    - [Enabling the Kernel Hot Upgrade Tool](#enabling-the-kernel-hot-upgrade-tool)

<!-- /TOC -->

## Hardware and Software Requirements

### Hardware Requirements

- Currently, only the ARM64 architecture is supported.

### Software Requirements

- Operating system: openEuler 21.03

## Environment Preparation

- Install the openEuler system. For details, see the openEuler 21.03 Installation Guide.

- The root permission is required for installing the kernel hot upgrade tool.

## Installing the Kernel Hot Upgrade Tool

This section describes how to install the kernel hotupgrade tool.

Perform the following steps:

1. Mount the ISO file of openEuler.

    ```
    # mount openEuler-21.03-aarch64-dvd.iso /mnt
    ```

2. Configure the local yum repository.

    ```
    # vim /etc/yum.repos.d/local.repo
    ```

    The configurations are as follows:

    ```
    [local]
    name=local
    baseurl=file:///mnt
    gpgcheck=1
    enabled=1
    ```

3. Import the GPG public key of the RPM digital signature to the system.

    ```
    # rpm --import /mnt/RPM-GPG-KEY-openEuler
    ```

4. Install the kernel hot upgrade tool.

    ```
    # yum install nvwa -y
    ```

5. Check whether the installation is successful. If the command output is as follows, the installation is successful.

    ```
    # rpm -qa | grep nvwa
    nvwa-xxx
    ```

## Deploying the Kernel Hot Upgrade Tool

This section describes how to configure and deploy the kernel hot upgrade tool.

### Configurations

The configuration files of the kernel hot upgrade tool are stored in /etc/nvwa. The configuration files are as follows:

- nvwa-restore.yaml

    This configuration file is used to instruct the kernel hot upgrade tool to save and recover the process during the kernel hot upgrade. The configuration is as follows:

    + pids

        Specifies the processes that need to be retained and recovered during the NVWA hot upgrade. The processes are identified by process ID (PID). Note that the processes managed by NVWA are automatically recovered after the NVWA service is started.

    + services

        Specifies the services that need to be retained and recovered during NVWA hot upgrade. Compared to PIDs, the kernel hot upgrade tool can directly save and recover the process. For services, the kernel hot upgrade tool depends on the systemd to perform related operations. The service name must be the same as the service name used in systemd. Note that whether the service managed by NVWA needs to be automatically recovered when the NVWA is started depends on whether the service is enabled in the systemd. Currently, only the notify and oneshot service types are supported.

    + restore_net

        Specifies whether the kernel hot upgrade tool is required to save and recover the network configuration. If the network configuration is incorrect, the network may be unavailable after the recovery. This function is disabled by default.

    + enable_quick_kexec

        Used to specify whether to enable the quick kexec feature. quick kexec is a feature launched by the NVWA community to accelerate the kernel restart process. To use this feature, add "quickkexec=128M" to cmdline. 128 indicates the size of the memory allocated to the quick kexec feature. The memory is used to load the kernel and initramfs during the upgrade. Therefore, the size must be greater than the total size of the kernel and initramfs involved in the upgrade. This feature is disabled by default.

    + enable_pin_memory

        Used to specify whether to enable the pin memory feature. pin memory is a feature launched by the NVWA community to accelerate the process storage and recovery process. To use this feature, you need to add "max_pin_pid_num=10 redirect_space_size=2M pinmemory=200M@0x640000000" to cmdline.

        max_pin_pid_num indicates the maximum number of processes that support pin memory recovery. redirect_space_size indicates the reserved memory space required for redirecting physical pages during pin memory recovery. You are advised to set redirect_space_size to 1/100 of the total reserved pin memory. pinmemory indicates the start point and size of the memory segment. The 200 MB space starting from 0x640000000 is the total memory space used by the pin memory. This space should not be used by other programs.

- Configuration example of nvwa-restore.yaml

```
pids:
  - 14109
services:
  - redis
restore_net: false
enable_quick_kexec: true
enable_pin_memory: true
```

- nvwa-server.yaml

    This file contains the configuration information required during the running of the kernel hot upgrade tool. The details are as follows:

    + criu_dir

        This parameter specifies the directory for storing the information generated when the kernel hot upgrade tool saves the running information. Note that the information may occupy a large amount of disk space.

    + criu_exe

        This parameter specifies the path of the CRIU executable file used by the kernel hot upgrade tool. You are advised not to change the path unless you need to debug the CRIU.

    + kexec_exe

        This parameter specifies the path of the kexec executable file used by the kernel hot upgrade tool. You are advised not to change the path unless you need to debug kexec.

    + systemd_etc

        This parameter specifies the path of the folder used to overwrite the systemd configuration file. The path is determined by the systemd. Generally, you do not need to change the path.

    + log_dir

        This parameter stores the log information generated by the kernel hot upgrade tool. The log module is not enabled currently. For details about how to view logs of the kernel hot upgrade tool, see How to Run.

- Configuration example of nvwa-server.yaml

```
criu_dir: /var/nvwa/running/
criu_exe: /usr/sbin/criu
kexec_exe: /usr/sbin/kexec
systemd_etc: /etc/systemd/system/
log_dir: /etc/nvwa/log/
```

## Enabling the Kernel Hot Upgrade Tool

The running of the kernel hot upgrade tool depends on the configuration file. After the configuration file is modified, you need to run the kernel hot upgrade tool again.

After the installation is successful, you can run the systemd commands to operate the kernel hot upgrade tool.

+ Enable NVWA.
  
    systemctl enable nvwa

+ Start nvwa.
  
    systemctl start nvwa

+ View the nvwa log.

    service nvwa status

+ For more usage, see the usage of systemd.
