# 对接iSula安全容器


## 概述

为了给容器提供更好的隔离环境，提高系统安全性，可以使用 iSula 安全容器，即将 StratoVirt 对接 iSula 安全容器。

## 对接iSula安全容器

### **前提条件**

已安装 iSulad 和 kata-containers，并确保 iSulad 支持 containerd-kata-shim-v2 容器运行时和 devicemapper 存储驱动。

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

   

### **对接指导**

StratoVirt 通过对接 kata-containers来接入 isula 容器生态，此处给出对接 kata-containers 的操作指导。

1. 修改 kata 配置文件（默认路径为 /usr/share/defaults/kata-containers/configuration.toml，也可以参考同一目录下的configration-stratovirt.toml进行配置） 。将安全容器的 hypervisor 类型配置为 stratovirt，kernel 配置 kata-containers 的 kernel 镜像绝对路径，initrd 配置为 kata-containers 的 initrd 镜像文件（使用 yum 安装 kata-containers 时，默认会下载这两个镜像文件并存放在 /var/lib/kata/ 目录，配置时也可以使用其他镜像 ）。

   配置参考如下：

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

2. 使用 root 权限 和 **isula** 命令运行 busybox 安全容器，完成 StratoVirt 和 安全容器的对接。

   ```shell
   # isula run -tid --runtime "io.containerd.kata.v2" --net=none --name test busybox:latest sh
   ```

3. 使用 **isula ps** 确认安全容器 test 正常运行，然后通过以下命令进入 test 容器。

   ```
   # isula exec –ti test sh
   ```

4. 通过虚拟机快照加速安全容器的启动速度，降低虚拟机内存开销。

   修改 kata 配置文件 configuration.toml，将配置项 enable_template 设置为 true，即允许虚拟机通过制作快照方式进行启动：

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

   配置项 enable_template 设置为 true 后，kata-containers 创建安全容器时，将会检查默认路径（/run/vc/vm/template）下是否存在快照文件，如果存在，直接以该快照文件启动虚拟机，如果不存在，则会创建虚拟机快照，穿件完成后，以该快照文件启动虚拟机。

5. 通过安全组件ozone进一步增强安全容器的隔离性。

   修改 kata 配置文件 configuration.toml，将配置项 ozone_path 设置为ozone 可执行文件的路径（如果使用 yum 安装 stratovirt，ozone 可执行文件默认在 /usr/bin 目录下）。配置该项后，将打开 ozone 安全沙箱功能，作为虚拟化层隔离被攻击者突破后的保险，进一步增强 StratoVirt 安全容器的隔离性:

   ```shell
   # Path for the ozone specific to stratovirt
   # If the ozone path is set, stratovirt will be launched in
   # ozone secure environment. It is disabled by default.
   ozone_path = "/usr/bin/ozone"
   ```

 至此，可以在 test 容器内运行容器命令。
