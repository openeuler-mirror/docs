# 安装 secGear


## 环境要求

当前 secGear 仅支持以下软硬件，后续会逐步支持更多的软硬件。

- 处理器：当前 secGear 仅支持 x86_64 处理器架构，且该处理器需要支持 Intel SGX （Intel Software Guard Extensions）功能

- 操作系统：openEuler 21.03 或更高版本


## 安装指导

使用 secGear 机密计算编程框架，需要安装 secGear、secGear-devel 开发包。安装前，请确保已经配置了openEuler yum 源。

1. 使用 root 权限，安装 secGear 组件，参考命令如下：

   ```shell
   #yum install secGear
   #yum install secGear-devel
   ```

   

2. 查看安装是否成功。参考命令和回显如下表示安装成功。

   ```shell
   #rpm -q secGear 
   secGear-1.0-1.oe1.x86_64
   #rpm -q secGear-devel
   secGear-devel-1.0-1.oe1.x86_64
   ```

   
