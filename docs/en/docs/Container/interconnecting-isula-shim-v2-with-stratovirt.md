# Interconnecting iSula with the shim v2 Secure Container



## Overview

shim v2 is a next-generation shim solution. Compared with shim v1, shim v2 features shorter call chains, clearer architecture, and lower memory overhead in multi-service container scenarios. iSula can run secure containers through isulad-shim or containerd-shim-kata-v2. The isulad-shim component is the implementation of the shim v1 solution, and the containerd-shim-kata-v2 component is the implementation of the shim v2 solution in the secure container scenario. This document describes how to interconnect iSula with containerd-shim-kata-v2.

## Interconnecting with containerd-shim-v2-kata

### Prerequisites

Before interconnecting iSula with containerd-shim-v2-kata, ensure that the following prerequisites are met:

- iSulad, lib-shim-v2, and kata-containers have been installed.
- StratoVirt supports only the devicemapper storage driver. Therefore, you need to configure the devicemapper environment and ensure that the devicemapper storage driver used by iSulad works properly.

### Environment Setup

The following describes how to install and configure iSulad and kata-containers.

#### Installing Dependencies

Configure the YUM source based on the OS version and install iSulad, lib-shim-v2, and kata-containers as the **root** user.

```shell
# yum install iSulad
# yum install kata-containers
# yum install lib-shim-v2
```

#### Creating and Configuring a Storage Device

Prepare a drive, for example, **/dev/sdx**. The drive will be formatted. This section uses the block device **/dev/sda** as an example.

I. Creating devicemapper

1. Create a physical volume (PV).

   ```shell
   $ pvcreate /dev/sda
     Physical volume "/dev/loop0" successfully created.
   ```

2. Create a volume group (VG).

   ```shell
   $ vgcreate isula /dev/sda
     Volume group "isula" successfully created
   ```

3. Create the logical volumes **thinpool** and **thinpoolmeta**.

   ```shell
   $ lvcreate --wipesignatures y -n thinpool isula -l 95%VG
     Logical volume "thinpool" created.
   
   $ lvcreate --wipesignatures y -n thinpoolmeta isula -l 1%VG
     Logical volume "thinpoolmeta" created.
   ```

4.  Convert the created logical volumes to a thin pool.

   ```shell
   $ lvconvert -y --zero n -c 64K \
   --thinpool isula/thinpool \
   --poolmetadata isula/thinpoolmeta
     Thin pool volume with chunk size 512.00 KiB can address at most 126.50 TiB of data.
     WARNING: Converting isula/thinpool and isula/thinpoolmeta to thin pool's data and metadata volumes with metadata wiping.
     THIS WILL DESTROY CONTENT OF LOGICAL VOLUME (filesystem etc.)
     Converted isula/thinpool and isula/thinpoolmeta to thin pool.
   ```

5. Configure automatic extension of the thin pool using lvm.

   ```shell
   $ touch /etc/lvm/profile/isula-thinpool.profile
   $ cat << EOF > /etc/lvm/profile/isula-thinpool.profile
   activation {
     thin_pool_autoextend_threshold=80
     thin_pool_autoextend_percent=20
   }
   EOF
   $ lvchange --metadataprofile isula-thinpool isula/thinpool
   Logical volume isula/thinpool changed.
   ```

II. Changing the iSulad Storage Driver Type and Setting the Default Runtime

Modify the **/etc/isulad/daemon.json** configuration file. Set **default-runtime** to **io.containerd.kata.v2** and **storage-driver** to **devicemapper**. The modification result is as follows:

```json
 {
    "default-runtime": "io.containerd.kata.v2",
    "storage-driver": "devicemapper",
    "storage-opts": [
        "dm.thinpooldev=/dev/mapper/isula-thinpool",
        "dm.fs=ext4",
        "dm.min_free_space=10%"
    ],
}
```

III. Making the Configuration Take Effect

1. Restart the iSulad for the configuration to take effect.

    ```shell
    # systemctl daemon-reload
    # systemctl restart isulad
    ```

2. Check whether the iSula storage driver is successfully configured.

    ```shell
    # isula info
    ```

     If the following information is displayed, the configuration is successful:

    ```
    Storage Driver: devicemapper
    ```

### Interconnection Guide

This section describes how to interconnect iSula with containerd-shim-kata-v2.

By default, containerd-shim-kata-v2 uses QEMU as the virtualization component. The following describes how to configure QEMU and StratoVirt.

#### Using QEMU

If containerd-shim-kata-v2 uses QEMU as the virtualization component, perform the following operations to interconnect iSula with containerd-shim-kata-v2:

1. Modify the kata configuration file **/usr/share/defaults/kata-containers/configuration.toml**.

   Set **sandbox_cgroup_with_emulator** to **false**. Currently, shim v2 does not support this function. Other parameters are the same as the kata configuration parameters in shim v1 or use the default values.

   ```
   sandbox_cgroup_with_emulator = false
   ```

2. Use the BusyBox image to run the secure container and check whether the used runtime is io.containerd.kata.v2.

   ```bash
   $ id=`isula run -tid busybox /bin/sh`
   $ isula inspect -f '{{ json .HostConfig.Runtime }}' $id
   "io.containerd.kata.v2"
   ```

3. Verify that the QEMU-based VM process is started. If it is started, QEMU is successfully interconnected with the shim v2 secure container.

   ```bash
   $ ps -ef | grep qemu
   ```

#### Using StratoVirt

If containerd-shim-kata-v2 uses StratoVirt as the virtualization component, perform the following operations to interconnect iSula with containerd-shim-kata-v2:

1. Create the **stratovirt.sh** script in any directory (for example, **/home**) and add the execute permission to the file as the **root** user.

   ```shell
   # touch /home/stratovirt.sh
   # chmod +x /home/stratovirt.sh
   ```

   The content of **stratovirt.sh** is as follows, which is used to specify the path of StratoVirt:

   ```shell
   #!/bin/bash
   export STRATOVIRT_LOG_LEVEL=info  # set log level which includes trace, debug, info, warn and error.
   /usr/bin/stratovirt $@
   ```

2. Modify the kata configuration file. Set **hypervisor** of the secure container to **stratovirt**, **kernel** to the absolute path of the StratoVirt kernel image, and **initrd** to the initrd image file of kata-containers (if you use YUM to install kata-containers, the initrd image file is downloaded by default and stored in the **/var/lib/kata/** directory). StratoVirt supports only the devicemapper storage mode, prepare the environment in advance and set iSulad to the devicemapper mode.

   The configurations are as follows:

   ```shell
   [hypervisor.stratovirt]
   path = "/home/stratovirt.sh"
   kernel = "/var/lib/kata/vmlinux.bin"
   initrd = "/var/lib/kata/kata-containers-initrd.img"
   block_device_driver = "virtio-mmio"
   use_vsock = true
   enable_netmon = true
   internetworking_model="tcfilter"
   sandbox_cgroup_with_emulator = false
   disable_new_netns = false
   disable_block_device_use = false
   disable_vhost_net = true
   ```

   To use the vsock function in StratoVirt, enable the vhost_vsock kernel module and check whether the module is successfully enabled.

   ```bash
   $ modprobe vhost_vsock
   $ lsmod |grep vhost_vsock
   ```

   Download the kernel of the required version and architecture and save it to the **/var/lib/kata/** directory. For example, download the [openeuler repo](<https://repo.openeuler.org/>) of the x86 architecture of openEuler 21.03.

   ```bash
   $ cd /var/lib/kata
   $ wget https://repo.openeuler.org/openEuler-21.03/stratovirt_img/x86_64/vmlinux.bin
   ```

3. Use the BusyBox image to run the secure container and check whether the used runtime is io.containerd.kata.v2.

   ```bash
   $ id=`isula run -tid busybox sh`
   $ isula inspect -f '{{ json .HostConfig.Runtime }}' $id
   "io.containerd.kata.v2"
   ```

4. Verify that the StratoVirt-based VM process is started. If it is started, StratoVirt is successfully interconnected with the shim v2 secure container.

   ```bash
   $ ps -ef | grep stratovirt
   ```
