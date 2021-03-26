# Connecting to the iSula Security Container

## Overview

To provide a better isolation environment for containers and improve system security, it is recommended to use the iSula security container, that is, connect StratoVirt to the iSula security container.

## Connecting to the iSula Security Container

### **Prerequisites**

The iSulad and kata-containers have been installed, and the iSulad supports the kata-runtime container runtime and the devicemapper storage driver.

The following describes how to install and configure iSulad and kata-containers.

1. Configure the yum repo and install iSulad and kata-containers as user **root**.

   ```shell
   # yum install iSulad
   # yum install kata-containers
   ```

2. Create and configure a storage device.

   Plan the drive in advance, for example, /dev/sdx, which will be formatted.

   ```shell
    # pvcreate /dev/sdxx
    # vgcreate isulaVG0 /dev/sdxx
    # lvcreate --wipesignatures y -n thinpool isulaVG0 -l 95%VG
    # lvcreate --wipesignatures y -n thinpoolmeta isulaVG0 -l 1%VG
    # lvconvert -y --zero n -c 512K --thinpool isulaVG0/thinpool --poolmetadata isulaVG0/thinpoolmeta
   ```

   Add the following information to the **/etc/lvm/profile/isulaVG0-thinpool.profile** file:

   ```
    activation {
        thin_pool_autoextend_threshold=80
        thin_pool_autoextend_percent=20
    }
   ```

   Modify storage-driver and storage-opts in the **/etc/isulad/daemon.json** configuration file as follows. Set the default storage driver type **overlay** to **devicemapper**.

   ```
    "storage-driver": "devicemapper",
    "storage-opts": [
     "dm.thinpooldev=/dev/mapper/isulaVG0-thinpool",
     "dm.fs=ext4",
     "dm.min_free_space=10%"
    ],
   ```

3. Restart iSulad.

   ```shell
   # systemctl daemon-reload
   # systemctl restart isulad
   ```

4. Check whether the iSula storage driver is successfully configured.

   ```shell
   # isula info
   ```

    If the following information is displayed, the configuration is successful:

   ```
   Storage Driver: devicemapper
   ```

### **Connection Guide**

StratoVirt connects to the iSula security container, that is, StratoVirt connects to kata-runtime in the iSula security container. The procedure is as follows:

1. Modify the kata configuration file (the default path is **/usr/share/defaults/kata-containers/configuration.toml**). Set the hypervisor type of the secure container to **stratovirt**, the kernel to the absolute path of the StratoVirt kernel image, and initrd to the initrd image file of kata-containers. When using yum to install kata-containers, the two image files are downloaded by default and stored in the **/var/lib/kata/ directory**. Other images is permitted as well.

   The configuration is as follows:

   ```shell
   [hypervisor.stratovirt]
   path = "/usr/bin/stratovirt"
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

2. Use the root permission and **isula** command to run the BusyBox security container to connect the StratoVirt to the security container.

   ```shell
   # isula run -tid --runtime=kata-runtime --net=none --name test busybox:latest sh
   ```

3. Run the **isula ps** command to check whether the test security container is running properly. If yes, run the following command to access the test container:

   ```
   # isula exec –ti test sh
   ```

Now, it is feasible to run container commands in the test container.