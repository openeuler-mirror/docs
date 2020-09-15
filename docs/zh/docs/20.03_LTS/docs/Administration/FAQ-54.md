# FAQ
<!-- TOC -->

- [FAQ](#faq)
    - [使用systemctl和top命令查询libvirtd服务占用内存不同](#使用systemctl和top命令查询libvirtd服务占用内存不同)
    - [设置RAID0卷，参数stripsize设置为4时出错](#设置raid0卷参数stripsize设置为4时出错)
    - [使用rpmbuild编译mariadb失败](#使用rpmbuild编译mariadb失败)
    - [使用默认配置启动SNTP服务失败](#使用默认配置启动sntp服务失败)
    - [安装时出现软件包冲突、文件冲突或缺少软件包导致安装失败](#安装时出现软件包冲突文件冲突或缺少软件包导致安装失败)
    - [通过dnf update 默认方式升级openssh软件包时无法安装openssh相关包](#通过dnf-update-默认方式升级openssh软件包时无法安装openssh相关包)

<!-- /TOC -->

## 使用systemctl和top命令查询libvirtd服务占用内存不同

### 问题描述

使用systemctl和systemd-cgtop命令查询libvirtd服务占用内存超1.5G，而使用top命令查询libvirtd服务占用内存仅70M左右。

### 原因分析

systemd管理的服务（包括systemctl和systemd-cgtop）中显示的内存通过查询CGroup对应的memory.usage\_in\_bytes得到。top是直接统计/proc下内存相关信息计算得出。两者的统计方法不同，不能直接比较。

一般来说，业务进程使用的内存主要有以下几种情况：

-   anon\_rss：用户空间的匿名映射页（Anonymous pages in User Mode address spaces），比如调用malloc分配的内存，以及使用MAP\_ANONYMOUS的mmap。当系统内存不够时，内核可以将这部分内存交换出去。
-   file\_rss：用户空间的文件映射页（Mapped pages in User Mode address spaces），包含map file和map tmpfs，前者比如指定文件的mmap，后者比如IPC共享内存。当系统内存不够时，内核可以回收这些页，但回收之前可能需要与文件同步数据。
-   file\_cache：文件缓存（page in page cache of disk file），普通读写（read/write）文件时产生的文件缓存。当系统内存不够时，内核可以回收这些页，但回收之前可能需要与文件同步数据。
-   buffer pages：属于page cache，比如读取块设备文件时的相关缓存。

其中anon\_rss和file\_rss属于进程的RSS，file\_cache和buffer pages属于page cache。简单来说：

top里的RSS = anon\_rss + file\_rss，SHR = file\_rss。

CGroup里的memory.usage\_in\_bytes = cache + RSS + swap。

由上可知，syestemd相关命令和top命令的内存占用率含义不同，所以查询结果不同。

## 设置RAID0卷，参数stripsize设置为4时出错

### 问题现象

设置RAID0卷，参数stripsize设置为4时出错。

### 原因分析

64K页表开启只能支持64K场景。

### 解决方法

不需要修改配置文件，openeuler执行lvcreate命令时，条带化规格支持的stripesize最小值为64KB，将参数stripesize设置为64。

## 使用rpmbuild编译mariadb失败

### 问题描述

如果使用root账号登录系统，并在该账号下使用rpmbuild命令编译mariadb源代码，会出现编译失败现象，提示：

```
+ echo 'mysql can'\''t run test as root'
mysql can't run test as root
+ exit 1
```

### 原因分析

mariadb数据库不允许使用root权限的账号进行测试用例执行，所以会阻止编译过程（编译过程中会自动执行测试用例）。

### 解决方案

使用vi等文本编辑工具，修改mariadb.spec文件中runtest变量的值。

修改前：

```
%global runtest 1
```

修改后：

```
%global runtest 0
```

该修改关闭了编译阶段执行测试用例的功能，但不会影响编译和编译后的RPM包内容。

## 使用默认配置启动SNTP服务失败

### 问题现象

默认配置情况下SNTP服务启动失败。

### 原因分析

默认配置中未添加授时服务器域名。

### 解决方案

修改/etc/sysconfig/sntp文件 ，在文件中添加中国NTP快速授时服务器域名：0.generic.pool.ntp.org。

## 安装时出现软件包冲突、文件冲突或缺少软件包导致安装失败

### 问题现象

安装软件包过程中，可能出现软件包冲突、文件冲突或缺少软件包，从而导致升安装被中断，最终安装失败。软件包冲突、文件冲突和缺少软件包的报错信息分别如下所示。

软件包冲突报错信息示例（以 libev-libevent-devel-4.24-11.oe1.aarch64与libevent-devel-2.1.11-2.oe1.aarch64冲突为例）：

```
package libev-libevent-devel-4.24-11.oe1.aarch64 conflicts with libevent-devel provided by libevent-devel-2.1.11-2.oe1.aarch64  
 - cannot install the best candidate for the job  
 - conflicting requests
```

文件冲突报错信息示例（以/usr/bin/containerd文件冲突为例）：

```
Error: Transaction test error:  
 file /usr/bin/containerd from install of containerd-1.2.0-101.oe1.aarch64 conflicts with file from package docker-engine-18.09.0-100.aarch64  
 file /usr/bin/containerd-shim from install of containerd-1.2.0-101.oe1.aarch64 conflicts with file from package docker-engine-18.09.0-100.aarch64
```

缺少软件包的报错信息示例（以缺失blivet-data软件包为例）：

```
Error:  
  Problem: cannot install both blivet-data-1:3.1.1-6.oe1.noarch and blivet-data-1:3.1.1-5.noarch  
   - package python2-blivet-1:3.1.1-5.noarch requires blivet-data = 1:3.1.1-5, but none of the providers can be installed  
   - cannot install the best update candidate for package blivet-data-1:3.1.1-5.noarch  
   - problem with installed package python2-blivet-1:3.1.1-5.noarch(try to add '--allowerasing' to command line to replace conflicting packages or '--skip-broken' to skip uninstallable packages or '--nobest' to use not only best candidate packages)
```

### 原因分析

-   openEuler提供的软件包中，有些软件包虽然名称不同，但功能相同，导致两个软件包无法同时安装。
-   openEuler提供的软件包中，有些软件包虽然名称不同，但功能相同，导致安装时安装后的文件相同，从而产生了文件冲突。
-   有些软件包，因在升级安装前被其他软件包所依赖，一旦该软件包升级后，可能导致依赖它的软件包因缺少软件包而不能安装。

### 解决方案

若为软件包冲突，则按如下步骤进行处理（以问题现象中示例的软件包冲突为例）：

1.  根据安装过程中的软件包冲突报错信息，确定与待安装的 libev-libevent-devel-4.24-11.oe1.aarch64软件包冲突的软件包为libevent-devel-2.1.11-2.oe1.aarch64。
2.  执行**dnf remove**命令将与待安装软件包冲突的软件包单独卸载。

    ```
    # dnf remove libevent-devel-2.1.11-2.oe1.aarch64
    ```

3.  重新进行安装操作。

若为文件冲突，则按如下步骤进行处理（以问题现象中示例的文件冲突为例）：

1.  根据安装过程中的文件冲突报错信息，确定导致文件冲突的软件包名称为containerd-1.2.0-101.oe1.aarch64和docker-engine-18.09.0-100.aarch64。
2.  将不需要安装的软件包名称记录下来，以不需要安装docker-engine-18.09.0-100.aarch64为例。
3.  执行**dnf remove**命令将不需要安装的软件包单独卸载。

    ```
    # dnf remove docker-engine-18.09.0-100.aarch64
    ```

4.  重新进行安装操作。

若为缺少软件包，则按如下步骤进行处理（以问题现象中示例的缺少软件包为例）：

1.  根据升级安装过程中的缺少软件包报错信息，确定待升级的软件包名称blivet-data-1:3.1.1-5.noarch及依赖它的软件包名称python2-blivet-1:3.1.1-5.noarch。
2.  执行dnf remove命令将依赖待升级包才能安装的软件包单独卸载或在升级软件包时加上\-\-allowerasing参数。
    -   执行**dnf remove**命令将依赖blivet-data-1:3.1.1-5.noarch软件包才能安装的软件包单独卸载。

        ```
        # dnf remove python2-blivet-1:3.1.1-5.noarch
        ```

    -   升级软件包时加上\-\-allowerasing参数。

        ```
        # yum update blivet-data-1:3.1.1-5.noarch -y --allowerasing
        ```

3.  重新进行升级操作。


## 通过dnf update 默认方式升级openssh软件包时无法安装openssh相关包

### 问题现象

通过dnf update 默认方式升级openssh软件包时会出现无法安装openssh相关包，提示如下：


 ```
 cannot install both openssh-7.8p1-8.oe1.aarch64 and openssh-8.2p1-5.oe1.aarch64
 cannot install both openssh-7.8p1-8.oe1.aarch64 and openssh-8.2p1-4.oe1.aarch64
 cannot install the best update condidate for package openssh-clients-8.2p1-5.oe1.aarch64
 cannot install the best update condidate for package openssh-8.2p1-5.oe1.aarch64

 ```

### 原因分析

DNF 默认情况下会启用DNF包管理器的“best”模式（对应的参数为--best），该默认选型将始终尝试将升级的包升级到可用的最高版本，即使最高版本无法完全满足它需要的依赖关系。如果使用默认启用的DNF best模式，将提醒用户更新的软件包版本可用但不能满足依赖性。如果出现问题，DNF会提示用户相关依赖问题，以便用户知道。openEuler社区开发人员正在寻求进行此默认更改，以防由于依赖性问题导致无法进行安全修复程序包升级，在当前前提下，它可能会被默默忽略而用户不会意识到。此外，使用DNF最佳模式将迅速提醒开发人员升级路径中的问题。  

### 解决方案

DNF的--nobest选项可用于覆盖/关闭默认的“best”行为，以使用户需要升级的包存在依赖问题的场景下可以正常进行安全修改程序包的升级。  
本次openEuler 20.03-LTS版本中开发人员已识别到在openssh包安全修复版本升级过程中会存在该场景，建议用户了解上面的分析的情况下，选择合理的升级方式，openEuler同步给出具体升级示例操作：  


 ```
 dnf update –y –nobest openssh
 
 ```