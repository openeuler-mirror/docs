# iSula对接shim v2安全容器



## 概述

shim v2 是新一代 shim 架构方案，相比于 shim v1, 具有调用链更短、架构清晰的优势，在多业务容器场景，具备明显的低内存开销优势。iSula 运行安全容器可以通过 isulad-shim 或者 containerd-shim-kata-v2 来实现，其中 isulad-shim 组件是 shim v1 方案的具体实现，containerd-shim-kata-v2 组件是 shim v2 方案在安全容器场景的一种具体实现，本文介绍iSula 与 containerd-shim-kata-v2 的对接。

## 对接 containerd-shim-v2-kata

### **前提条件**

iSula 对接 containerd-shim-v2-kata 前，需要满足如下前提：

- 已安装 iSulad、lib-shim-v2 和 kata-containers
- StratoVirt 仅支持 devicemapper 存储驱动，因此需要配置 devicemapper 环境并确保 iSulad 使用的 devicemapper 存储驱动正常工作

### 环境准备

此处给出安装 iSulad 和 kata-containers 并进行相应配置的参考方法。

#### 安装依赖软件

按照所使用的OS版本自行配置相应的 yum 源，使用 root 权限安装 iSulad、lib-shim-v2和kata-containers ：

```shell
# yum install iSulad
# yum install kata-containers
# yum install lib-shim-v2
```

#### 制作并配置存储 Storage

需要用户准备一个磁盘， 如 /dev/sdx ， 该磁盘会被格式化，本章使用块设备 /dev/sda 进行演示。

一、创建devicemapper

1. 创建 PV

   ```shell
   $ pvcreate /dev/sda
     Physical volume "/dev/loop0" successfully created.
   ```

2. 创建 VG

   ```shell
   $ vgcreate isula /dev/sda
     Volume group "isula" successfully created
   ```

3. 创建 thinpool 以及 thinpoolmeta 逻辑卷

   ```shell
   $ lvcreate --wipesignatures y -n thinpool isula -l 95%VG
     Logical volume "thinpool" created.
   
   $ lvcreate --wipesignatures y -n thinpoolmeta isula -l 1%VG
     Logical volume "thinpoolmeta" created.
   ```

4.  将上面创建的逻辑卷转换为 thinpool

   ```shell
   $ lvconvert -y --zero n -c 64K \
   --thinpool isula/thinpool \
   --poolmetadata isula/thinpoolmeta
     Thin pool volume with chunk size 512.00 KiB can address at most 126.50 TiB of data.
     WARNING: Converting isula/thinpool and isula/thinpoolmeta to thin pool's data and metadata volumes with metadata wiping.
     THIS WILL DESTROY CONTENT OF LOGICAL VOLUME (filesystem etc.)
     Converted isula/thinpool and isula/thinpoolmeta to thin pool.
   ```

5. 设置 lvm thinpool 自动扩展功能

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

二、修改 iSulad 存储驱动类型并设置默认runtime

更改配置文件 /etc/isulad/daemon.json,  将 default-runtime 设置为 io.containerd.kata.v2 , 将默认存储驱动类型 overlay 配置成 devicemapper，修改后如下所示：

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

三、使能配置

1. 重启 isulad使得配置生效 ：

    ```shell
    # systemctl daemon-reload
    # systemctl restart isulad
    ```

2. 确认 iSula 存储驱动是否配置成功：

    ```shell
    # isula info
    ```

     若回显有如下信息，说明配置成功。

    ```
    Storage Driver: devicemapper
    ```

### 对接指导

本章给出 iSula 对接 containerd-shim-kata-v2 的操作指导。

containerd-shim-kata-v2 默认使用 QEMU 虚拟化组件，本章分别介绍使用 QEMU 和 StratoVirt 两种虚拟化组件时的配置方法。

#### 使用 QEMU

containerd-shim-kata-v2 使用的虚拟化组件为 QEMU 时，iSula 对接 containerd-shim-kata-v2 的操作如下：

1. 修改 kata 配置文件，路径为 /usr/share/defaults/kata-containers/configuration.toml 

   sandbox_cgroup_with_emulator 需要设置为 false， 目前 shimv2 不支该改功能， 其他参数与 shim v1 中 kata 配置参数保持一致或者保持默认值。

   ```
   sandbox_cgroup_with_emulator = false
   ```

2. 使用 busybox 镜像运行安全容器并检查使用的 runtime 为 io.containerd.kata.v2 

   ```bash
   $ id=`isula run -tid busybox /bin/sh`
   $ isula inspect -f '{{ json .HostConfig.Runtime }}' $id
   "io.containerd.kata.v2"
   ```

3. 确认 qemu 虚拟机进程被拉起，说明 qemu 和 shim v2 安全容器的对接成功

   ```bash
   $ ps -ef | grep qemu
   ```

#### 使用 StratoVirt

containerd-shim-kata-v2 使用的虚拟化组件为 StratoVirt 时，iSula 对接 containerd-shim-kata-v2 的操作如下：

1. 在任一目录（例如 /home 目录）新建脚本文件 stratovirt.sh 并使用 root 权限给文件添加执行权限：

   ```shell
   # touch /home/stratovirt.sh
   # chmod +x /home/stratovirt.sh
   ```

   stratovirt.sh 内容如下，用于指定 StratoVirt 路径：

   ```shell
   #!/bin/bash
   export STRATOVIRT_LOG_LEVEL=info  # set log level which includes trace, debug, info, warn and error.
   /usr/bin/stratovirt $@
   ```

2. 修改 kata 配置文件 ，将安全容器的 hypervisor 类型配置为 stratovirt，kernel 配置 StratoVirt 的 kernel 镜像绝对路径，initrd 配置为 kata-containers 的 initrd 镜像文件（使用 yum 安装 kata-containers 时，默认会下载这个文件并存放在 /var/lib/kata/ 目录），StratoVirt 仅支持 devicemapper 存储模式，需提前准备好环境并将 iSulad 设置为 devicemapper 模式。

   配置参考如下：

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

   StratoVirt 中使用 vsock 功能， 需要开启 vhost_vsock 内核模块并确认是否开启成功

   ```bash
   $ modprobe vhost_vsock
   $ lsmod |grep vhost_vsock
   ```

   下载对应版本和架构的 kernel 并放到 /var/lib/kata/ 路径下, 如下载 openEuler 21.03 版本 x86 架构的内核 [openeuler repo](<https://repo.openeuler.org/>)：

   ```bash
   $ cd /var/lib/kata
   $ wget https://repo.openeuler.org/openEuler-21.03/stratovirt_img/x86_64/vmlinux.bin
   ```

3. 使用 busybox 镜像运行安全容器并检查使用的 runtime 为 io.containerd.kata.v2 

   ```bash
   $ id=`isula run -tid busybox sh`
   $ isula inspect -f '{{ json .HostConfig.Runtime }}' $id
   "io.containerd.kata.v2"
   ```

4. 确认 stratovirt 虚拟机进程被拉起，说明 StratoVirt 和 shim v2 安全容器的对接成功

   ```bash
   $ ps -ef | grep stratovirt
   ```




