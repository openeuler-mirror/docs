# 对接iSula安全容器


## 概述

为了给容器提供更好的隔离环境，提高系统安全性，可以使用 iSula 安全容器，即将 StratoVirt 对接 iSula 安全容器。

## 对接iSula安全容器

### **前提条件**

已安装 iSulad 和 kata-containers，并确保 iSulad 支持 kata-runtime 容器运行时和 devicemapper 存储驱动。

此处给出安装 iSulad 和 kata-containers 并进行相应配置的参考方法。

1. 配置 yum 源，使用 root 权限安装 iSulad 和 kata-containers ：

   ```shell
   # yum install iSulad
   # yum install kata-containers
   ```

2. 制作并配置存储 Storage：

   需要用户规划好磁盘如/dev/sdxx,该磁盘会被格式化。

    ```shell
    # pvcreate /dev/sdxx
    # vgcreate isulaVG0 /dev/sdxx
    # lvcreate --wipesignatures y -n thinpool isulaVG0 -l 95%VG
    # lvcreate --wipesignatures y -n thinpoolmeta isulaVG0 -l 1%VG
    # lvconvert -y --zero n -c 512K --thinpool isulaVG0/thinpool --poolmetadata isulaVG0/thinpoolmeta
    ```

   在配置文件 /etc/lvm/profile/isulaVG0-thinpool.profile 中添加如下：

    ```
    activation {
        thin_pool_autoextend_threshold=80
        thin_pool_autoextend_percent=20
    }
    ```

   更改配置文件/etc/isulad/daemon.json中的storage-driver 和 storage-opts 如下：将默认存储驱动类型 overlay 配置成 devicemapper 。

    ```
    "storage-driver": "devicemapper",
    "storage-opts": [
     "dm.thinpooldev=/dev/mapper/isulaVG0-thinpool",
     "dm.fs=ext4",
     "dm.min_free_space=10%"
    ],
    ```

3. 重启 isulad ：

    ```shell
    # systemctl daemon-reload
    # systemctl restart isulad
    ```

4. 确认 iSula 存储驱动是否配置成功：

    ```shell
    # isula info
    ```

     若回显有如下信息，说明配置成功。

    ```
    Storage Driver: devicemapper
    ```

5. 打开/etc/isulad/daemon.json文件。如果没有配置kata-runtime，则配置runtime为kata-runtime。

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

   

### **对接指导**

StratoVirt 对接 iSula 安全容器即 StratoVirt 对接 iSula 安全容器中的 kata-runtime，此处给出对接操作指导。


1. 在任一目录（例如 /home 目录）新建脚本文件 stratovirt.sh 并使用 root 权限给文件添加执行权限：

   ```shell
   # touch /home/stratovirt.sh
   # chmod +x /home/stratovirt.sh
   ```

   stratovirt.sh 内容如下，用于指定 StratoVirt 路径：

   ```
   #!/bin/bash
   export STRATOVIRT_LOG_LEVEL=info  # set log level which includes trace, debug, info, warn and error.
   /usr/bin/stratovirt $@
   ```

   ​

2. 修改 kata 配置文件（默认路径为 /usr/share/defaults/kata-containers/configuration.toml ） 。将安全容器的 hypervisor 类型配置为 stratovirt，kernel 配置 StratoVirt 的 kernel 镜像绝对路径，initrd 配置为 kata-containers 的 initrd 镜像文件（使用 yum 安装 kata-containers 时，默认会下载这两个镜像文件并存放在 /var/lib/kata/ 目录，配置时也可以使用其他镜像 ）。

   配置参考如下：配置参考如下：

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

3. 使用 root 权限 和 **isula** 命令运行 busybox 安全容器，完成 StratoVirt 和 安全容器的对接。

   ```shell
   # isula run -tid --runtime=kata-runtime --net=none --name test busybox:latest sh
   ```

4. 使用 **isula ps** 确认安全容器 test 正常运行，然后通过以下命令进入 test 容器。

   ```
   # isula exec –ti test sh
   ```

   ​


 至此，可以在 test 容器内运行容器命令。