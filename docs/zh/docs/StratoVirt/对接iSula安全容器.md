# 对接iSula安全容器

[[toc]]

## 概述

为了给容器提供更好的隔离环境，提高系统安全性，在使用iSula安全容器场景下，需要将kata对接StratoVirt。

## 对接iSula安全容器

**前提条件**

已安装iSulad和kata-containers。

**对接操作**



kata配置文件的默认路径为：/usr/share/defaults/kata-containers/configuration.toml 

1. 编译kata-kernel。

   - 下载[kata-containers/packaging](https://github.com/kata-containers/packaging.git)
   - 将/kernel/configs/下对应的config文件粘贴到kernel文件夹下并重命名.config:
   
   ```
   cp x86_64_kata_kvm_4.14.x /home/kernel/.config
   ```
   
   - 进入kernel/文件夹，执行命令编译:
   
   ```
   make -j vmlinux
   objcopy -O binary vmlinux vmlinux.bin
   ```  

2. 编译kata-containers-initrd.img。

   - 下载[kata_integration](https://gitee.com/openeuler/kata_integration.git)
   - 进入kata_integration目录并下载[kata-agent](https://github.com/kata-containers/agent)
   - 在kata_integration目录下创建文件夹build
   - 重命名kata-agent目录为agent
   - 进入agent文件夹
   - 打patch:

   ```
   ./apply-patches
   ```

   - 进入kata_integration目录并编译:

   ```
   make initrd
   ```

   - 进入build文件夹并查看编译结果:kata-agent kata-containers-initrd.img

3. 修改配置文件，将安全沙箱的hypervisor类型配置为stratovirt。

   ```
   [hypervisor.stratovirt]
   path = "/home/stratovirt.sh"
   kernel = "/home/kernel/vmlinux.bin"
   initrd = "/var/lib/kata/kata-containers-initrd.img"
   block_device_driver = "virtio-mmio"
   use_vsock = true
   enable_netmon = false
   internetworking_model="none"
   sandbox_cgroup_with_emulator = false
   disable_new_netns = false
   ```

4. 将安全沙箱的执行文件路径path配置为stratovirt.sh的绝对路径。stratovirt.sh的内容如下：

   ```
   #!/bin/bash
   export STRATOVIRT_LOG_LEVEL=info  # set log level which includes trace, debug, info, warn and error.
   /usr/bin/stratovirt $@
   ```

5. 运行iSulad，完成kata和StratoVirt的对接。

   ```
   $ isula run -tid --runtime=kata-runtime --name test busybox:latest sh
   ```

