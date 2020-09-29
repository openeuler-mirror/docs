# 安装StratoVirt

[[toc]]

## 软硬件要求

### 最低硬件要求

- 处理器架构：仅支持AArch64和x86_64处理器架构。AArch64需要ARMv8及更高版本且支持虚拟化扩展；x86_64支持VT-x。

- 2核CPU
- 4GiB内存
- 16GiB可用磁盘空间

### 软件要求

操作系统：openEuler 20.09及更高版本



## 安装组件

使用StratoVirt虚拟化，需要安装StratoVirt。安装前，请确保已经配置了openEuler yum源。

1. 使用root权限，安装StratoVirt组件，参考命令如下。

   ```
   $ yum install stratovirt
   ```

   

2. 查看是否安装成功。

   ```
   $ stratovirt -version
   StratoVirt 0.1.0
   ```


