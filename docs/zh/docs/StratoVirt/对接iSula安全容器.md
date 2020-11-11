# 对接iSula安全容器

[[toc]]

## 概述

为了给容器提供更好的隔离环境，提高系统安全性，在使用iSula安全容器场景下，需要将kata对接StratoVirt。

## 对接iSula安全容器

**前提条件**

已安装iSulad和kata-containers。

**对接操作**



kata配置文件的默认路径为：/usr/share/defaults/kata-containers/configuration.toml 

1. 修改配置文件，将安全沙箱的hypervisor类型配置为stratovirt。

   ```
   [hypervisor.stratovirt]
   ```

2. 将安全沙箱的执行文件路径path配置为stratovirt.sh的绝对路径。stratovirt.sh的内容如下：

   ```
   #!/bin/bash
   export STRATOVIRT_LOG_LEVEL=info  # set log level which includes trace, debug, info, warn and error.
   /usr/bin/stratovirt $@
   ```

3. 运行iSulad，完成kata和StratoVirt的对接。

   ```
   $ isula run -tid --runtime=kata-runtime --name test busybox:latest sh
   ```

