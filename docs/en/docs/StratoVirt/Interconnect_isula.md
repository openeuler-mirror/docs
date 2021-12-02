# Interconnecting with iSula Security Containers


## Overview

To provide a better isolation environment for containers and improve system security, you can interconnect StratoVirt with iSula security containers.

## Interconnecting with an iSula Security Container

### **Prerequisites**

iSulad and kata-containers have been installed, and iSulad supports the kata-runtime container runtime and devicemapper storage driver.

The following describes how to install and configure iSulad and kata-containers.

1. Configure the yum source and install iSulad and kata-containers as the **root** user.

   ```shell
   # yum install iSulad
   # yum install kata-containers
   ```

2. Create and configure a storage device.

   You need to plan the disks, for example, **/dev/sdxx**, which will be formatted.

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

5. Open the **/etc/isulad/daemon.json** file. If kata-runtime is not configured, set **runtime** to kata-runtime.

   ```json
   "runtimes": {                                                                               
       "kata-runtime": {                                                                   
           "path": "/usr/bin/kata-runtime",                                                 
           "runtimeArgs": [                                                                
               "--kata-config",                                                               
               "/usr/share/defaults/kata-containers/configuration.toml"                       
           ]                                                                                 
       }
   },
   ```


### **Interconnection Guide**

This section describes how to interconnect StratoVirt with kata-runtime in the iSula security container.


1. Create the **stratovirt.sh** script in any directory (for example, **/home**) and add the execute permission to the file as the **root** user.

   ```shell
   # touch /home/stratovirt.sh
   # chmod +x /home/stratovirt.sh
   ```

   The content of **stratovirt.sh** is as follows, which is used to specify the path of StratoVirt:

   ```
   #!/bin/bash
   export STRATOVIRT_LOG_LEVEL=info  # set log level which includes trace, debug, info, warn and error.
   /usr/bin/stratovirt $@
   ```

2. Modify the kata configuration file (default path: **/usr/share/defaults/kata-containers/configuration.toml**). Set the Hypervisor type of the security container to **stratovirt**, kernel to the absolute path of the kernel image of StratoVirt, and initrd to the **initrd** image file of kata-containers. (If you use yum to install kata-containers, the two image files are downloaded and stored in the **/var/lib/kata/** directory by default. You can also use other images during the configuration.)

   The configuration reference is as follows:

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

3. Use the **root** permission and **isula** command to run the BusyBox security container and interconnect StratoVirt with it.

   ```shell
   # isula run -tid --runtime=kata-runtime --net=none --name test busybox:latest sh
   ```

4. Run the **isula ps** command to check whether the security container **test** is running properly. Then run the following command to access the container:

   ```
   # isula exec –ti test sh
   ```



 You can now run container commands in the **test** container.
