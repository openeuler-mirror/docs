# Connecting to the iSula Secure Container

## Overview

To provide a better isolation environment for containers and improve system security, you can interconnect StratoVirt with iSula security containers.

## Connecting to the iSula Secure Container

### **Prerequisites**

iSulad and kata-containers have been installed, and iSulad supports the containerd-kata-shim-v2 container runtime and devicemapper storage driver.

The following describes how to install and configure iSulad and kata-containers.

1. Configure the yum source and install iSulad and kata-containers as the **root** user.

   ```shell
   # yum install iSulad
   # yum install kata-containers
   ```

2. Create and configure a storage device.

   You need to plan the drive, for example, /dev/sdxx, which will be formatted.

    ```shell
    # pvcreate /dev/sdxx
    # vgcreate isulaVG0 /dev/sdxx
    # lvcreate --wipesignatures y -n thinpool isulaVG0 -l 95%VG
    # lvcreate --wipesignatures y -n thinpoolmeta isulaVG0 -l 1%VG
    # lvconvert -y --zero n -c 512K --thinpool isulaVG0/thinpool --poolmetadata isulaVG0/thinpoolmeta
    ```

   Add the following information to the **/etc/lvm/profile/isulaVG0-thinpool.profile** configuration file:

    ```
    activation {
        thin_pool_autoextend_threshold=80
        thin_pool_autoextend_percent=20
    }
    ```

   Modify **storage-driver** and **storage-opts** in the **/etc/isulad/daemon.json** configuration file as follows. Set the default storage driver type **overlay** to **devicemapper**.

    ```
    "storage-driver": "devicemapper",
    "storage-opts": [
     "dm.thinpooldev=/dev/mapper/isulaVG0-thinpool",
     "dm.fs=ext4",
     "dm.min_free_space=10%"
    ],
    ```

3. Restart isulad.

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

   

### **Interconnection Guide**

This section describes how to interconnect StratoVirt with kata-containers to access the iSula container ecosystem.

1. Modify the kata configuration file. Its default path is **/usr/share/defaults/kata-containers/configuration.toml**. You can also configure the file by referring to **configuration-stratovirt.toml** in the same directory. Set the Hypervisor type of the security container to **stratovirt**, kernel to the absolute path of the kernel image of kata-containers, and initrd to the **initrd** image file of kata-containers. (If you use yum to install kata-containers, the two image files are downloaded and stored in the **/var/lib/kata/** directory by default. You can also use other images during the configuration.)

   The configurations are as follows:

   ```shell
   [hypervisor.stratovirt]
   path = "/usr/bin/stratovirt"
   kernel = "/var/lib/kata/kernel"
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

3. Use the **root** permission and **isula** command to run the BusyBox security container and interconnect StratoVirt with it.

   ```shell
   # isula run -tid --runtime "io.containerd.kata.v2" --net=none --name test busybox:latest sh
   ```

4. Run the **isula ps** command to check whether the security container **test** is running properly. Then run the following command to access the container:

   ```
   # isula exec –ti test sh
   ```

5. Use a VM snapshot to accelerate startup of the security container and reduce the VM memory overhead.

   Modify the kata configuration file **configuration.toml** and set **enable_template** to **true** to allow the VM to start by creating a snapshot.

   ```shell
   [factory]
   # VM templating support. Once enabled, new VMs are created from template
   # using vm cloning. They will share the same initial kernel, initramfs and
   # agent memory by mapping it readonly. It helps speeding up new container
   # creation and saves a lot of memory if there are many kata containers running
   # on the same host.
   #
   # When disabled, new VMs are created from scratch.
   #
   # Note: Requires "initrd=" to be set ("image=" is not supported).
   #
   # Default false
   enable_template = true
   ```

   After the **enable_template** configuration item is set to **true**, kata-containers checks whether a snapshot file exists in the default path (**/run/vc/vm/template**) during security container creation. If yes, kata-containers starts the VM using the snapshot file. If no, kata-containers creates a VM snapshot and start the VM using the snapshot file.

6. Use the security component Ozone to further enhance the isolation of security containers.

   Modify the kata configuration file **configuration.toml** and set the configuration item **ozone_path** to the path of the Ozone executable file. (If StratoVirt is installed using yum, the Ozone executable file is stored in the **/usr/bin** directory by default.) After this item is configured, the Ozone security sandbox function is enabled to protect the VM against attacks after the virtualization layer isolation is broken and further enhance the isolation of StratoVirt security containers.

   ```shell
   # Path for the ozone specific to stratovirt
   # If the ozone path is set, stratovirt will be launched in
   # ozone secure environment. It is disabled by default.
   ozone_path = "/usr/bin/ozone"
   ```

 You can now run container commands in the **test** container.
