# Connecting to the iSula Security Container

## Overview

To provide a better isolation environment for containers and improve system security, you can use the iSula secure container, that is, connect StratoVirt to the iSula secure container.

## Connecting to the iSula Security Container

### **Prerequisites**

The iSulad and kata-containers have been installed, and the iSulad supports the containerd-kata-shim-v2 container runtime and the devicemapper storage driver.

The following describes how to install and configure iSulad and kata-containers.

1. Configure the yum repository and install iSulad and kata-containers as user root:

   ```shell
   # yum install iSulad
   # yum install kata-containers
   ```

2. Create and configure the storage:

   You need to plan the drive, for example, /dev/sdx, which will be formatted.

    ```shell
    # pvcreate /dev/sdxx
    # vgcreate isulaVG0 /dev/sdxx
    # lvcreate --wipesignatures y -n thinpool isulaVG0 -l 95%VG
    # lvcreate --wipesignatures y -n thinpoolmeta isulaVG0 -l 1%VG
    # lvconvert -y --zero n -c 512K --thinpool isulaVG0/thinpool --poolmetadata isulaVG0/thinpoolmeta
    ```

   Add the following information to the /etc/lvm/profile/isulaVG0-thinpool.profile configuration file:

    ```
    activation {
        thin_pool_autoextend_threshold=80
        thin_pool_autoextend_percent=20
    }
    ```

   Modify storage-driver and storage-opts in the /etc/isulad/daemon.json configuration file as follows. Set the default storage driver type overlay to devicemapper.

    ```
    "storage-driver": "devicemapper",
    "storage-opts": [
     "dm.thinpooldev=/dev/mapper/isulaVG0-thinpool",
     "dm.fs=ext4",
     "dm.min_free_space=10%"
    ],

3. Run the following command to restart isulad:

    ```shell
    # systemctl daemon-reload
    # systemctl restart isulad
    ```

4. Check whether the iSula storage driver is successfully configured:

    ```shell
    # isula info
    ```

     If the following information is displayed, the configuration is successful.

    ```
    Storage Driver: devicemapper
    ```


### **Connection Guide**

StratoVirt accesses the iSula container ecosystem by connecting to kata-containers. The connection procedure is as follows:


1. Modify the kata configuration file (The default path is /usr/share/defaults/kata-containers/configuration.toml. You can refer to configration-stratovirt.toml in the same directory). Set the hypervisor type of the secure container to stratovirt, the kernel to the absolute path of the kata-containers kernel image, and initrd to the initrd image file of kata-containers. When you use yum to install kata-containers, the two image files are downloaded by default and stored in the /var/lib/kata/ directory. You can also use other images during configuration.

   The configuration reference is as follows:

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

2. Use the root permission and **isula** command to run the BusyBox secure container to connect the StratoVirt to the secure container.

   ```shell
   # isula run -tid --runtime "io.containerd.kata.v2" --net=none --name test busybox:latest sh
   ```

4. Run the **isula ps** command to check whether the secure container test is running properly. If it is, run the following command to access the test container.

   ```
   # isula exec –ti test sh
   ```
4. Use the VM snapshot function to speed up the startup of the secure container and reduce the VM memory overhead. 

   Modify the kata configuration file configuration.toml, set enable_template to true. The VMs are then allowed to start up by creating snapshots:

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

   When the configuration item enable_template is set to true, kata-containers checks the default path (/run/vc/vm/template) for the snapshot file when creating the secure container. If the snapshot exists, the VM is started with the snapshot. If no snapshot exists, a VM snapshot is created, and the VM is started with the created snapshot.

5. Use security component ozone to further enhance the isolation of the secure container.

   Modify the kata configuration file configuration.toml, set ozone_path to the path of the ozone executable file (If StratoVirt is installed using Yum, the ozone executable file is in /usr/bin by default) to enable the ozone security sandbox.  The ozone security sandbox functions as an insurance measure in case the virtualization layer is breached to further enhance the isolation of the StratoVirt secure container:

   ```shell
   # Path for the ozone specific to stratovirt
   # If the ozone path is set, stratovirt will be launched in
   # ozone secure environment. It is disabled by default.
   ozone_path = "/usr/bin/ozone"
   ```

 Now, you can run container commands in the test container.