# Interconnecting with the iSula Secure Container

[[toc]]

## Overview

To provide a better isolation environment for containers and improve system security, it is necessary to connect Kata to StratoVirt in the iSula secure container scenario.

## Interconnection with an iSula Secure Container

**Prerequisites**

iSulad and Kata containers have been installed.

**Operations**



The default path of the Kata configuration file is /usr/share/defaults/kata-containers/configuration.toml. 

1. Compile kata-kernel.

   - Download [kata-containers/packaging](https://github.com/kata-containers/packaging.git)
   - Paste the corresponding config file under /kernel/configs/ to the kernel folder and rename `.config`:
   
   ```
   cp x86_64_kata_kvm_4.14.x /home/kernel/.config
   ```
   
   - Enter the kernel/ and execute the command:
   
   ```
   make -j vmlinux
   objcopy -O binary vmlinux vmlinux.bin
   ```  

2. Compile Kata containers-initrd.img.

   - Download [kata_integration](https://gitee.com/openeuler/kata_integration.git)
   - Enter kata_Integration directory and download [kata-agent](https://github.com/kata-containers/agent)
   - In kata_integration/ create the folder `build` under the integration directory
   - Rename the kata-agent directory to `agent`
   - Enter the agent/ folder
   - Apply patch:

   ```
   ./apply-patches
   ```

   - Enter kata_integration/ directory and compile:

   ```
   make initrd
   ```

   - Enter the build folder and view the compilation results:kata-agent kata-containers-initrd.img

3. Modify the configuration file to set the hypervisor type of the secure sandbox to stratovirt.

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

4. Set the execution file path of the secure sandbox to the absolute path of stratovirt.sh. The content of the stratovirt.sh script is as follows:

   ```
   #!/bin/bash
   export STRATOVIRT_LOG_LEVEL=info  # set log level which includes trace, debug, info, warn and error.
   /usr/bin/stratovirt $@
   ```

5. Run iSulad to connect Kata to StratoVirt.

   ```
   $ isula run -tid --runtime=kata-runtime --name test busybox:latest sh
   ```

