# FAQ

[[toc]]

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
本次openEuler 20.03 LTS SP3 版本中开发人员已识别到在openssh包安全修复版本升级过程中会存在该场景，建议用户了解上面的分析的情况下，选择合理的升级方式，openEuler同步给出具体升级示例操作：  


 ```
 dnf update –y –nobest openssh
 
 ```

### 安装冲突实例
* 文件冲突

python3-edk2-devel.noarch 与 build.noarch 因文件名重复存在冲突。

```shell
# yum install python3-edk2-devel.noarch build.noarch
...
Error: Transaction test error:
file /usr/bin/build conflicts between attempted installs of python3-edk2-devel-202002-3.oe1.noarch and build-20191114-324.4.oe1.noarch
```

## libiscsi降级失败

### 问题现象

libiscsi-1.19.2 版本及以上降级到 libiscsi-1.19.1 及以下版本时失败。

```
Error: Transaction test error:
file /usr/bin/iscsi-inq from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-ls from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-perf from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-readcapacity16 from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-swp from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-test-cu from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
```

### 原因分析

libiscsi-1.19.1 之前的版本把 iscsi-xxx 等二进制文件打包进了主包 libiscsi，而这些二进制文件引入了不合理的依赖 CUnit, 为了解决这种不合理的依赖，在 libiscsi-1.19.2 版本把这些二进制文件单独拆分出来一个子包 libiscsi-utils，主包弱依赖于子包，产品可以根据自己的需求在做镜像时是否集成该子包；不集成或卸载子包不会影响 libiscsi 主包的功能。

如果系统中安装了 libiscsi-utils 子包，libiscsi-1.19.2 及以上版本降级到 libiscsi-1.19.1 及以下版本时，由于 libiscsi-1.19.1 及以下版本无法提供对应的 libiscsi-utils，因此 libiscsi-utils 不会降级，但 libiscsi-utils 依赖于降级前的 libiscsi 主包，导致依赖问题无法解决，最终导致降级失败。

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

## emacs编辑文件时会存在缓存文件

### 问题现象

emacs未进行配置时，编辑文件保存后会存在以“~”结尾的缓存文件。

### 原因分析

emacs未进行配置，或者未生成有效的配置文件，会导致存在缓存文件，缓存文件的功能是为了防止系统意外关闭导致的数据丢失，用户可自行决定是否启用该功能。

### 解决方案

1. 安装好emacs后进入emacs界面。
2. 在emacs界面输入alt键加x键。
3. 输入customize后可进行各种设置，对任一功能设置后会生成一个.emacs配置文件，会显示出相应的配置文件路径，如/root/.emacs（自行创建的.emacs无功能作用）。
4. 若需更改缓存文件配置，有如下方案，可自选：

    * 复制如下代码到/root/.emacs，关闭缓存文件功能：
      ```
      (setq make-backup-files nil)
      ```


    * 复制如下代码到/root/.emacs，指定集中保存备份文件的目录：
      ```
      (setq backup-directory-alist (quote (("." . "/.emacs-backups"))))
      ```

## rtkit-daemon 服务启动报错“Failed to make ourselves RT: Operation not permitted”

### 问题现象

默认情况下rtkit-daemon服务启动正常，但是在安装docker-engine的情况下启动
rtkit-daemon会有报错信息，如下所示：

```
12月 18 09:34:15 openEuler systemd[1]: Started RealtimeKit Scheduling Policy Service.
12月 18 09:34:15 openEuler rtkit-daemon[22560]: Successfully called chroot.
12月 18 09:34:15 openEuler rtkit-daemon[22560]: Successfully dropped privileges.
12月 18 09:34:15 openEuler rtkit-daemon[22560]: Successfully limited resources.
12月 18 09:34:15 openEuler rtkit-daemon[22560]: Running.
12月 18 09:34:15 openEuler rtkit-daemon[22560]: Canary thread running.
12月 18 09:34:15 openEuler rtkit-daemon[22560]: Failed to make ourselves RT: Operation not permitted
12月 18 09:34:15 openEuler rtkit-daemon[22560]: Watchdog thread running.
```

### 原因分析

rtkit-daemon报错的原因是有服务(如docker.service)配置了Delegate=yes。

在没有配置该参数的情况下，rtkit-daemon的cgroup信息如下所示，此时服务表现正常。
```
[root@openEuler ~]# cat /proc/pidof rtkit-daemon/cgroup | grep system
12:pids:/system.slice/rtkit-daemon.service
7:devices:/system.slice/rtkit-daemon.service
5:memory:/system.slice/rtkit-daemon.service
2:blkio:/system.slice
1:name=systemd:/system.slice/rtkit-daemon.service
```

在配置了Delegate=yes的情况下，systemd会创建相关slice，并把cpu cgroup也移动到
slice中。这样rtkit-daemon服务的cgroup信息如下所示。rtkit-daemon被移动到了
3:cpu,cpuacct:/system.slice/rtkit-daemon.service 但是里面的cpu.rt_runtime_us又
没有设置合理的数值，所以有报错。

```
[root@openEuler ~]# cat /proc/pidof rtkit-daemon/cgroup | grep system
12:pids:/system.slice/rtkit-daemon.service
7:devices:/system.slice/rtkit-daemon.service
5:memory:/system.slice/rtkit-daemon.service
3:cpu,cpuacct:/system.slice/rtkit-daemon.service
2:blkio:/system.slice/rtkit-daemon.service
1:name=systemd:/system.slice/rtkit-daemon.service
```

### 解决方案

方法一：修改rtkit-daemon.service，添加如下配置，这种方式即使用系统默认cpu cgroup配置。

```
Slice=-.slice
DisableControllers=cpu cpuacct
```

方法二：修改rtkit-daemon.service，添加如下配置，这种方法即根据需要配置调度参数。

```
ExecStartPre=/usr/bin/bash -c "mkdir -p /sys/fs/cgroup/cpu,cpuacct/system.slice/rtkit-daemon.service"
ExecStartPre=/usr/bin/bash -c "echo 950000 > /sys/fs/cgroup/cpu,cpuacct/system.slice/cpu.rt_runtime_us"
ExecStartPre=/usr/bin/bash -c "echo 950000 > /sys/fs/cgroup/cpu,cpuacct/system.slice/rtkit-daemon.service/cpu.rt_runtime_us"
```

## 通过dnf update进行软件包全量升级，由20.03-LTS 升级到 20.03-LTS-SP3时，系统重启失败

### 问题现象

x86_64架构 Legacy引导模式下，/boot目录未单独分区，通过dnf进行软件包全量升级，由20.03-LTS升级到20.03-LTS-SP3，出现系统升级成功但重启时引导失败，提示如下：
```
error: ../../grub-core/fs/fshelp.c:258:file
'/vmlinuz-4.19.90-2012.5.0.0054.oe1.x86_64'
not found.
error: ../../grub-core/loader/i386/pc/linux.c:417:you need to load the kernel first.

Press any key to continue...
```

### 原因分析

20.03-LTS以前默认采用传统cfg，而20.03-LTS-SP3的grub2升级2.04版本后默认变为bls格式，openEuler目前对bls格式的cfg文件不做支持，导致重启后无法根据该格式的grub.cfg找到内核，启动失败。openEuler社区开发人员正在寻求进行此默认更改，以防由于cfg格式问题导致软件包升级后重启失败。

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

## 版本升级后，httpd服务启动失败

### 问题现象

从旧版本升级到最新版本时，http.service服务启动失败。

### 原因分析

当待升级环境开启了selinux，并且安装了httpd的子包mod_md时，升级到最新版本后，http.service服务启动失败。查看系统messages日志`/var/log/messags`，可以看到日志记录如下：

```
openEuler setroubleshoot[****]: SELinux is preventing /usr/sbin/httpd from add_name access on the directory md. 
...
openEuler setroubleshoot[****]: SELinux is preventing httpd from setattr access on the directory challenges.
```

可以看到，selinux阻止httpd进程对md/challenges目录执行操作。因此，当selinux使能，且安装有mod_md子包时，需要修改selinux配置，否则selinux权限问题会导致http.service服务启动失败。

### 解决方案

1. 执行以下命令，允许httpd访问网络。

   ```
   # setsebool -P httpd_can_network_connect on
   ```

2. 创建文件 `httpd-md.te`，用于描述对资源的访问许可。文件内容如下：

   ```
   # create new
   module httpd-md 1.0;
   
   require {
           type httpd_config_t;
           type httpd_t;
           class dir { add_name create remove_name rename reparent rmdir setattr };
           class file { create rename setattr unlink write };
   }
   
   #============= httpd_t ==============
   allow httpd_t httpd_config_t:dir { add_name create remove_name rename reparent rmdir setattr };
   allow httpd_t httpd_config_t:file { create rename setattr unlink write };
   ```

3. 检查并编译安全策略文件。

   ```
   # checkmodule -m -M -o httpd-md.mod httpd-md.te
   ```

4. 创建策略模块。

   ```
   # semodule_package --outfile httpd-md.pp --module httpd-md.mod
   ```

5. 安装策略模块。

   ```
   # semodule -i httpd-md.pp
   ```

6. 重启httpd.service服务。

   ```
   # systemctl status httpd.service
   ```

## fuse包2.9.9-4前后、fuse3包3.9.2-4前后升降级说明

### 问题现象

1. dnf upgrade fuse fuse-common fuse3 升级失败
2. dnf downgrade fuse, fuse3会降级或安装
3. dnf downgrade fuse3, fuse会降级

### 原因分析

1. dnf upgrade fuse fuse-common fuse3失败原因：在2.9.9-3及之前，fuse，fuse3均obsoletes fuse-common，按顺序解析包依赖关系，解析fuse-common依赖关系时，fuse-common仍被fuse3 obsoletes，导致fuse-common无法升级。
2. dnf downgrade fuse, fuse3会降级或安装：降级fuse的时候，也会降级fuse-common，在fuse 2.9.9-3 以及fuse3 3.9.2-3版本之前，fuse-common包包含在fuse和fuse3中，在降级fuse-common时发现其旧版本包含在fuse3中，所以将fuse3降级或者安装。
3. dnf downgrade fuse3, fuse会降级：降级fuse3的时候，也会降级fuse-common，在fuse 2.9.9-3 以及fuse3 3.9.2-3版本之前，fuse-common包包含在fuse和fuse3中，在降级fuse-common解析时其旧版本包含在fuse中，所以将fuse降级。

### 解决方案

1. 升级fuse使用dnf upgrade fuse，升级fuse3使用dnf fuse fuse3 fuse-common。
2. 无需解决。
3. 无需解决。

## 安装卸载httpd-devel和apr-util-devel软件包，其中的依赖包gdbm-devel安装、卸载有报错

### 问题现象

1.  gdbm-devel-1.18.1-1包安装、卸载有报错；
2.  问题1修复后，gdbm和gdbm-devel包更新到1.18.1-2版本，但在安装httpd-devel、apr-util-devel等包（依赖关系中有gdbm-devel软件包）时，默认安装的gdbm-devel还是1.18.1-1旧版本，导致问题报错依然存在。

### 原因分析

1.  gdbm-devel-1.18.1-1包中缺少提供info信息的help软件包，导致单独安装gdbm-devel并不能将help包引入进来，所以出现了如下告警信息。
install-info: 没有那个文件或目录 for /usr/share/info/gdbm.info.gz
2.  由于系统默认安装的gdbm主包是1.18.1-1版本，而没有安装gdbm-devel包。依赖gdbm-devel包的相关软件包在安装gdbm-devel包的过程中，仍会匹配gdbm的主包版本，故而依然安装了gdbm-devel的旧版本1.18.1-1,导致警告信息依然存在。

### 解决方案

1.  单包升级gdbm，安装使用gdbm-1.18.1-2版本相关软件包后，告警信息消失；
2.  在单包升级gdbm后，再进行安装依赖的gdbm-devel软件包安装，让其依赖高版本gdbm软件包，告警信息消失。

## bind升级输出异常日志

### 问题现象
在升级bind的时候输出日志：ImportError: cannot import name 'IbpkeyconRange' from 'setools.policyrep'，导致升级过程中semanage命令执行失败。
```
  File "/usr/lib64/python3.7/site-packages/setools/__init__.py", line 31, in <module>
    from .policyrep import SELinuxPolicy, BoundsRuletype, ConstraintRuletype, DefaultRuletype, \
ImportError: cannot import name 'IbpkeyconRange' from 'setools.policyrep' (/usr/lib64/python3.7/site-packages/setools/policyrep/__init__.py)
```

### 原因分析
全量升级的流程是先升级所有软件包，都升级到新版本后，才去统一清理旧版本文件。policyrep模块属于python3-setools软件包，setools包结构发生过变更：
-   在setools-4.2.0之前版本中，policyrep模块在/usr/lib64/python3.7/site-packages/setools/policyrep目录中。
-   在社区稳定版本setools-4.2.0及之后版本中，policyrep模块集成到动态库/usr/lib64/python3.7/site-packages/setools/policyrep.cpython-37m-aarch64-linux-gnu.so。

全量升级过程中，bind升级时以上两者都存在，寻找policyrep模块时，python的机制会优先找policyrep目录，导致找到了旧版本的文件从而没有成功执行semanage命令。由于bind是在post和postun处理的以下语句中执行semanage命令，如果用户需要配置selinux策略，执行失败会影响selinux策略的配置。
-   post处理：
```
%selinux_set_booleans named_write_master_zones=1
```
-   postun处理：
```
%selinux_unset_booleans named_write_master_zones=1
```

### 解决方案
bind能升级到新版本，但影响升级时的semanage命令的正常执行。为不影响关于bind的selinux策略的配置，请使用“dnf -y reinstall bind”命令重新安装bind软件包。
