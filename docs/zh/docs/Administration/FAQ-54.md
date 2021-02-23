# FAQ
<!-- TOC -->

- [FAQ](#faq)
    - [使用systemctl和top命令查询libvirtd服务占用内存不同](#使用systemctl和top命令查询libvirtd服务占用内存不同)
    - [设置RAID0卷，参数stripsize设置为4时出错](#设置raid0卷参数stripsize设置为4时出错)
    - [使用rpmbuild编译mariadb失败](#使用rpmbuild编译mariadb失败)
    - [使用默认配置启动SNTP服务失败](#使用默认配置启动sntp服务失败)
    - [安装时出现软件包冲突、文件冲突或缺少软件包导致安装失败](#安装时出现软件包冲突文件冲突或缺少软件包导致安装失败)
    - [libiscsi降级失败](#libiscsi降级失败)
    - [xfsprogs降级失败](#xfsprogs降级失败)
    - [cpython/Lib发现CVE-2019-9674:Zip炸弹漏洞](#cpython/Lib发现CVE-2019-9674:Zip炸弹漏洞)
    - [不合理使用glibc正则表达式引起ReDoS攻击](#不合理使用glibc正则表达式引起ReDoS攻击)
    - [通过dnf update进行软件包全量升级，由20.03-LTS 升级到 20.03-LTS-SP1时，系统重启失败](#通过dnfupdate进行软件包全量升级由20.03-LTS升级到20.03-LTS-SP1时系统重启失败)

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

## libiscsi降级失败

### 问题现象

libiscsi-1.19.4 版本及以上降级到 libiscsi-1.19.3 及以下版本时失败。

```
Error:
Problem: problem with installed package libiscsi-utils-1.19.0-4.oe1.x86_64
- package libiscsi-utils-1.19.0-4.oe1.x86_64 requires libiscsi(x86-64) = 1.19.0-4.oe1, but none of the providers can be installed
- cannot install both libiscsi-1.19.0-3.oe1.x86_64 and libiscsi-1.19.0-4.oe1.x86_64
- cannot install both libiscsi-1.19.0-4.oe1.x86_64 and libiscsi-1.19.0-3.oe1.x86_64
- conflicting requests
(try to add '--allowerasing' to command line to replace conflicting packages or '--skip-broken' to skip uninstallable packages or '--nobest' to use not only best candidate packages)
```

### 原因分析

libiscsi-1.19.3 之前的版本把 iscsi-xxx 等二进制文件打包进了主包 libiscsi，而这些二进制文件引入了不合理的依赖 CUnit, 为了解决这种不合理的依赖，在 libiscsi-1.19.4 版本把这些二进制文件单独拆分出来一个子包 libiscsi-utils，主包弱依赖于子包，产品可以根据自己的需求在做镜像时是否集成该子包；不集成或卸载子包不会影响 libiscsi 主包的功能。
如果系统中安装了 libiscsi-utils 子包，libiscsi-1.19.4 及以上版本降级到 libiscsi-1.19.3 及以下版本时，由于 libiscsi-1.19.3 及以下版本无法提供对应的 libiscsi-utils，因此 libiscsi-utils 不会降级，但 libiscsi-utils 依赖于降级前的 libiscsi 主包，导致依赖问题无法解决，最终导致降级失败。

### 解决方案

执行以下命令，卸载 libiscsi-utils 子包，卸载成功后再进行降级操作。

```
yum remove libiscsi-utils
```

## xfsprogs降级失败

### 问题现象

xfsprogs-5.6.0-2 及以上版本降级到 xfsprogs-5.6.0-1 及以下版本时失败。

```
Error:
Problem: problem with installed package xfsprogs-xfs_scrub-5.6.0-2.oe1.x86_64
- package xfsprogs-xfs_scrub-5.6.0-2.oe1.x86_64 requires xfsprogs = 5.6.0-2.oe1, but none of the providers can be installed
- cannot install both xfsprogs-5.6.0-1.oe1.x86_64 and xfsprogs-5.6.0-2.oe1.x86_64
- cannot install both xfsprogs-5.6.0-2.oe1.x86_64 and xfsprogs-5.6.0-1.oe1.x86_64
- conflicting requests
```

### 原因分析

在 xfsprogs-5.6.0-2 版本中，为了减少 xfsprogs 主包的不合理依赖，同时将实验性质的命令从主包中分来，我们将 xfs_scrub* 命令拆分到单独的 xfsprogs-xfs_scrub 子包中。而 xfsprogs 主包弱依赖于 xfsprogs-xfs_scrub 子包，所以产品可以根据自己的需求在做镜像时是否集成该子包，或者是否卸载该子包。不集成或卸载该子包不会影响 xfsprogs 主包功能。

如果系统中安装了 xfsprogs-xfs_scrub 子包，从 xfsprogs-5.6.0-2 及以上版本降级到 xfsprogs-5.6.0-1 及以下版本时，由于 xfsprogs-5.6.0-1 及以下版本无法提供对应的 xfsprogs-xfs_scrub，因此 xfsprogs-xfs_scrub 不会降级，但 xfsprogs-xfs_scrub 依赖于降级前的 xfsprogs 主包，导致依赖问题无法解决，最终导致降级失败。

### 解决方案

执行以下命令，卸载 xfsprogs-xfs_scrub 子包，卸载成功后再进行降级操作。

```
yum remove xfsprogs-xfs_scrub
```

## cpython/Lib发现CVE-2019-9674:Zip炸弹漏洞

### 问题现象

Python 3.7.2 及以下版本中的 Lib/zipfile.py 允许远程攻击者通过 zip 炸弹制造拒绝服务请求，从而导致资源消耗过大。

### 原因分析

远程攻击者通过 zip 炸弹导致拒绝服务，影响目标系统业务甚至达到使系统崩溃的结果。zip 炸弹就是一个高压缩比的 zip 文件，它本身可能只有几M或几十M的大小，但是解压缩之后会产生巨大的数据量，产生巨大的资源消耗。

### 解决方案

在 zipfile 文档中添加告警信息： https://github.com/python/cpython/blob/3.7/Doc/library/zipfile.rst。

## 不合理使用glibc正则表达式引起ReDoS攻击

### 问题现象

使用glibc的regcomp/regexec接口编程，或者grep/sed等应用glibc正则表达式的shell命令，不合理的正则表达式或输入会造成ReDoS攻击（CVE-2019-9192/CVE-2018-28796）。
典型正则表达式pattern为“反向引用”（\1表示）与“*”（匹配零次或多次）、“+”（匹配一次或多次）、“{m,n}”（最小匹配m次，最多匹配n次）的组合，或者配合超长字符串输入，示例如下：
```
# echo D | grep -E "$(printf '(\0|)(\\1\\1)*')"Segmentation fault (core dumped)
# grep -E "$(printf '(|)(\\1\\1)*')"
Segmentation fault (core dumped)
# echo A | sed '/\(\)\(\1\1\)*/p'
Segmentation fault (core dumped)
# time python -c 'print "a"*40000' | grep -E "a{1,32767}"
Segmentation fault (core dumped)
# time python -c 'print "a"*40900' | grep -E "(a)\\1"
Segmentation fault (core dumped)
```

### 原因分析

使用正则表达式的进程coredump。具体原因为glibc正则表达式的实现为NFA/DFA混合算法，内部原理是使用贪婪算法进行递归查找，目的是尽可能匹配更多的字符串，贪婪算法在处理递归正则表达式时会导致ReDoS。

### 解决方案

1.  需要对用户做严格的权限控制，减少攻击面。
2.  用户需保证正则表达式的正确性，不输入无效正则表达式，或者超长字符串配合正则的“引用” “*”等容易触发无限递归的组合。
    ```
    # ()(\1\1)*
    # "a"*400000
    ```
3.  用户程序在检测到进程异常之后，通过重启进程等手段恢复业务，提升程序的可靠性。

## 通过dnf update进行软件包全量升级，由20.03-LTS 升级到 20.03-LTS-SP1时，系统重启失败

### 问题现象

x86_64架构 Legacy引导模式下，/boot目录未单独分区，通过dnf进行软件包全量升级，由20.03-LTS升级到20.03-LTS-SP1，出现系统升级成功但重启时引导失败，提示如下：
```
error: ../../grub-core/fs/fshelp.c:258:file
'/vmlinuz-4.19.90-2012.5.0.0054.oe1.x86_64'
not found.
error: ../../grub-core/loader/i386/pc/linux.c:417:you need to load the kernel first.

Press any key to continue...
```

### 原因分析

20.03-LTS以前默认采用传统cfg，而20.03-LTS-SP1的grub2升级2.04版本后默认变为bls格式，openEuler目前对bls格式的cfg文件不做支持，导致重启后无法根据该格式的grub.cfg找到内核，启动失败。openEuler社区开发人员正在寻求进行此默认更改，以防由于cfg格式问题导致软件包升级后重启失败。

### 解决方案

1.  在引导界面按e进行grub2配置修改界面，修改内核与initrd部分的路径，如：
```
linux ($root)/vmlinuz-4.19-xxx root=xxx --->>> linux ($root)/boot/vmlinuz-4.19-xxx root=xxx
initrd ($root)/initramfs-4.19-xxx       --->>> initrd ($root)/boot/initramfs-4.19-xxx 
```
随后，按ctrl+x引导系统启动。

2. 重新安装grub2-2.04-8及以后的版本
3. 重新生成cfg文件，grub2-mkconfig -o /boot/grub2/grub.cfg
4. 再次重启，系统成功引导
