# FAQs


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [FAQs](#faqs)
  - [Why Is the Memory Usage of the libvirtd Service Queried by Running the systemctl and top Commands Different?](#why-is-the-memory-usage-of-the-libvirtd-service-queried-by-running-the-systemctl-and-top-commands-different)
  - [An Error Occurs When stripsize Is Set to 4 During RAID 0 Volume Configuration](#an-error-occurs-when-stripsize-is-set-to-4-during-raid-0-volume-configuration)
  - [Failed to Compile MariaDB Using rpmbuild](#failed-to-compile-mariadb-using-rpmbuild)
  - [Failed to Start the SNTP Service Using the Default Configuration](#failed-to-start-the-sntp-service-using-the-default-configuration)
  - [Installation Failure Caused by Software Package Conflict, File Conflict, or Missing Software Package](#installation-failure-caused-by-software-package-conflict-file-conflict-or-missing-software-package)
  - [Why Do OpenSSH-related Packages Fail to Be Installed when the OpenSSH Software Package Is Upgraded in Default DNF Update Mode?](#why-do-openssh-related-packages-fail-to-be-installed-when-the-openssh-software-package-is-upgraded-in-default-dnf-update-mode)
  - [Failed to Downgrade the libiscsi](#failed-to-downgrade-the-libiscsi)
  - [Failed to Downgrade the xfsprogs](#failed-to-downgrade-the-xfsprogs)
  - [ReDoS Caused by Improper Use of glibc Regular Expressions](#redos-caused-by-improper-use-of-glibc-regular-expressions)
  - [A Cache File Exists when Files Are Edited Using Emacs](#a-cache-file-exists-when-files-are-edited-using-emacs)
  - [The Error Message "Failed to make ourselves RT: Operation not permitted" Is Displayed when the rtkit-daemon Service Is Started](#the-error-message-failed-to-make-ourselves-rt-operation-not-permitted-is-displayed-when-the-rtkit-daemon-service-is-started)
  - [Failed to Reboot the System After It Is Fully Upgraded from 20.03-LTS to 20.03-LTS-SP1 Using the `dnf update` Command](#failed-to-reboot-the-system-after-it-is-fully-upgraded-from-2003-lts-to-2003-lts-sp1-using-the-dnf-update-command)
  - [Upgrade and Downgrade Issues of fuse 2.9.9-4 and fuse3 3.9.2-4](#upgrade-and-downgrade-issues-of-fuse-299-4-and-fuse3-392-4)
  - [An Error Is Reported When gdbm-devel Is Installed or Uninstalled During the Installation and Uninstallation of httpd-devel and apr-util-devel](#an-error-is-reported-when-gdbm-devel-is-installed-or-uninstalled-during-the-installation-and-uninstallation-of-httpd-devel-and-apr-util-devel)

<!-- /code_chunk_output -->


## Why Is the Memory Usage of the libvirtd Service Queried by Running the systemctl and top Commands Different?

### Symptom
The output of the  **systemctl**  and  **systemd-cgtop**  commands shows that the libvirtd service occupies more than 1.5 GB memory, but the output of the  **top**  command shows that the libvirtd service occupies about 70 MB memory.

### Possible Cause
The memory displayed in the services \(including systemctl and systemd-cgtop\) managed by systemd can be obtained from  **memory.usage\_in\_bytes**  in Cgroup. Running the  **top**  command is to query the memory information in the  **/proc**  directory. The query results are different because the statistical method varies.

Generally, the memory used by service processes has the following types:

-   anon\_rss: anonymous pages in user mode address spaces, for example, memory allocated by calling the malloc function or the mmap function with configured  **MAP\_ANONYMOUS**. When the system memory is insufficient, this type of memory can be swapped by the kernel.
-   file\_rss: mapped pages in user mode address spaces, including map file \(such as mmap of a specified file\) and map tmpfs \(such as IPC shared memory\). When the system memory is insufficient, the kernel can reclaim these pages. Data may need to be synchronized between the kernel and map file before reclamation.
-   file\_cache: file cache \(page in page cache of disk file\), which is generated when a file is read or written. When the system memory is insufficient, the kernel can reclaim these pages. Data may need to be synchronized between the kernel and map file before reclamation.
-   buffer pages: belongs to page cache, for example, cache generated when block device files are read.

anon\_rss and file\_rss belong to the resident set size \(RSS\) of processes, and file\_cache and buffer pages belong to page cache. In brief:

RSS in the output of the  **top**  command = anon\_rss + file\_rss; Shared memory \(SHR\) = file\_rss

**memory.usage\_in\_bytes**  in Cgroup = cache + RSS + swap

In conclusion, the definition of memory usage obtained by running the  **systemd**  command is different from that obtained by running the  **top**  command. Therefore, the query results are different.

## An Error Occurs When stripsize Is Set to 4 During RAID 0 Volume Configuration

### Symptom
An error occurs when the  **stripsize**  parameter is set to  **4**  during RAID 0 volume configuration.

### Possible Cause
The 64 KB page table can be enabled only in the scenario where  **stripsize**  is set to  **64**.

### Solution
You do not need to modify the configuration file. When running the  **lvcreate** command on openEuler, set  **stripesize**  to  **64**  because the minimum supported stripe size is 64 KB.

## Failed to Compile MariaDB Using rpmbuild

### Symptom
When you log in to the system as user  **root**  and run the  **rpmbuild**  command to compile the MariaDB source code, the compilation fails and the following information is displayed:

```
+ echo 'mysql can'\''t run test as root'
mysql can't run test as root
+ exit 1
```

### Possible Cause
The MariaDB does not allow user  **root**  to execute test cases. However, test cases are automatically executed during compilation. As a result, the compilation process is blocked.

### Solution
Use a text editor, such as vi, to modify the value of the  **runtest**  variable in the  **mariadb.spec**  file.

Before the modification:

```
%global runtest 1
```

After the modification:

```
%global runtest 0
```

The modification disables the function of executing test cases during compilation, which does not affect the compilation and the RPM package content after compilation.

## Failed to Start the SNTP Service Using the Default Configuration

### Symptom
The SNTP service fails to be started with the default configuration.

### Possible Cause
The domain name of the NTP server is not added to the default configuration.

### Solution
Modify the  **/etc/sysconfig/sntp**  file and add the domain name of the NTP server in China:  **0.generic.pool.ntp.org**.

## Installation Failure Caused by Software Package Conflict, File Conflict, or Missing Software Package

### Symptom
Software package conflict, file conflict, or missing software packages may occur during software package installation. As a result, the upgrade is interrupted and the installation fails. The error information about software package conflict, file conflict, and missing software packages is as follows:

The following is an example of software package conflict error information \(the conflict between  **libev-libevent-devel-4.24-11.oe1.aarch64**  and  **libevent-devel-2.1.11-2.oe1.aarch64**  is used as an example\):

```
package libev-libevent-devel-4.24-11.oe1.aarch64 conflicts with libevent-devel provided by libevent-devel-2.1.11-2.oe1.aarch64  
 - cannot install the best candidate for the job  
 - conflicting requests
```

The following is an example of file conflict error information \(the  **/usr/bin/containerd**  file conflict is used as an example\):

```
Error: Transaction test error:  
 file /usr/bin/containerd from install of containerd-1.2.0-101.oe1.aarch64 conflicts with file from package docker-engine-18.09.0-100.aarch64  
 file /usr/bin/containerd-shim from install of containerd-1.2.0-101.oe1.aarch64 conflicts with file from package docker-engine-18.09.0-100.aarch64
```

The following is an example of the error message indicating that the  **blivet-data**  software package is missing:

```
Error:  
  Problem: cannot install both blivet-data-1:3.1.1-6.oe1.noarch and blivet-data-1:3.1.1-5.noarch  
   - package python2-blivet-1:3.1.1-5.noarch requires blivet-data = 1:3.1.1-5, but none of the providers can be installed  
   - cannot install the best update candidate for package blivet-data-1:3.1.1-5.noarch  
   - problem with installed package python2-blivet-1:3.1.1-5.noarch(try to add '--allowerasing' to command line to replace conflicting packages or '--skip-broken' to skip uninstallable packages or '--nobest' to use not only best candidate packages)
```

### Possible Cause
-   In the software packages provided by openEuler, some software packages have different names but the same functions. As a result, the software packages cannot be installed at the same time.
-   In the software packages provided by openEuler, some software packages have different names but the same functions. As a result, the files after installation are the same, causing file conflict.
-   Some software packages are depended on by other software packages before the upgrade. After the software packages are upgraded, the software packages that depend on them may fail to be installed due to lack of software packages.

### Solution
If a software package conflict occurs, perform the following steps \(the software package conflict in "Symptom" is used as an example\):

1.  According to the error message displayed during the installation, the software package that conflicts with the to-be-installed software package  **libev-libevent-devel-4.24-11.oe1.aarch64**  is  **libevent-devel-2.1.11-2.oe1.aarch64**.
2.  Run the  **dnf remove**  command to uninstall the software package that conflicts with the software package to be installed.

    ```
    # dnf remove libevent-devel-2.1.11-2.oe1.aarch64
    ```

3.  Perform the installation again.

If a file conflict occurs, perform the following steps \(the file conflict in "Symptom" is used as an example\):

1.  According to the error message displayed during the installation, the names of the software packages that cause the file conflict are  **containerd-1.2.0-101.oe1.aarch64**  and  **docker-engine-18.09.0-100.aarch64**.
2.  Record the names of the software packages that do not need to be installed. The following uses  **docker-engine-18.09.0-100.aarch64**  as an example.
3.  Run the  **dnf remove**  command to uninstall the software package that does not need to be installed.

    ```
    # dnf remove docker-engine-18.09.0-100.aarch64
    ```

4.  Perform the installation again.

If a software package is missing, perform the following steps \(the missed software package in "Symptom" is used as an example\):

1.  Determine the name of the software package to be upgraded \(**blivet-data-1:3.1.1-5.noarch**\) and the name of the dependent software package \(**python2-blivet-1:3.1.1-5.noarch**\) based on the error information displayed during the upgrade.
2.  Run the  **dnf remove**  command to uninstall the software package that depends on the upgrade package or add the  **\-\-allowerasing**  parameter when upgrading the software package.
    -   Run the  **dnf remove**  command to uninstall the software package that depends on the  **blivet-data-1:3.1.1-5.noarch**  software package.

        ```
        # dnf remove python2-blivet-1:3.1.1-5.noarch
        ```

    -   Add the  **\-\-allowerasing**  parameter when upgrading the software package.

        ```
        # yum update blivet-data-1:3.1.1-5.noarch -y --allowerasing
        ```

3.  Perform the upgrade again.

### Installing Conflicting Instances
* A file conflict occurs.

The python3-edk2-devel.noarch file conflicts with the build.noarch file due to duplicate file names.

```shell
# yum install python3-edk2-devel.noarch build.noarch
...
Error: Transaction test error:
file /usr/bin/build conflicts between attempted installs of python3-edk2-devel-202002-3.oe1.noarch and build-20191114-324.4.oe1.noarch
```

## Why Do OpenSSH-related Packages Fail to Be Installed when the OpenSSH Software Package Is Upgraded in Default DNF Update Mode?

### Symptom

When the OpenSSH software package is upgraded in default DNF update mode, a message indicating that the OpenSSH-related packages cannot be installed is displayed as follows: 
 ```
cannot install both openssh-7.8p1-8.oe1.aarch64 and openssh-8.2p1-5.oe1.aarch64

cannot install both openssh-7.8p1-8.oe1.aarch64 and openssh-8.2p1-4.oe1.aarch64

cannot install the best update condidate for package openssh-clients-8.2p1-5.oe1.aarch64

cannot install the best update condidate for package openssh-8.2p1-5.oe1.aarch64
 ```

### Possible Cause

By default, the best mode of the DNF package manager (the corresponding parameter is **--best**) is enabled. The **--best** option for DNF always tries to upgrade to the latest version available even if dependencies cannot be satisfied. By enabling the DNF best mode by default, the user will be reminded that a later package version is available but it fails to satisfy the dependencies. If a problem occurs, the DNF displays a message to notify the user of the problem. The openEuler Community developers are looking to make this default setting change in case that a security fix package cannot be upgraded due to dependency issues, under the current premise that it could be silently ignored and the user would not be aware. In addition, using the DNF best mode will quickly alert developers to problems in upgrade paths.

### Solution

A **--nobest** option for DNF will be available to override or disable the default behavior, allowing the user to properly upgrade the security fix package when the package to be upgraded has dependency issues.

Open source software developers of openEuler 20.03-LTS-SP1 have identified this scenario during the upgrade of the security fix version of the OpenSSH software package. It is recommended that users select a proper upgrade mode based on the preceding analysis. openEuler also provides users with specific instructions on the upgrade operation:

 ```
 dnf update –y –nobest openssh
 ```

## Failed to Downgrade the libiscsi

### Symptom

The libiscsi-1.19.2 or a later version fails to downgrade to libiscsi-1.19.1 or an earlier version.

```
Error: Transaction test error:
file /usr/bin/iscsi-inq from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-ls from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-perf from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-readcapacity16 from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-swp from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-test-cu from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
```

### Cause Analysis

In versions earlier than the libiscsi-1.19.1, binary files such as **iscsi-xxx** are packed into the main package **libiscsi**. However, these binary files introduce the improper dependency CUnit. To solve this problem, the libiscsi-1.19.2 incorporates these binary files into a subpackage **libiscsi-utils**, and the **libiscsi** is weakly dependent on the **libiscsi-utils**. As a result, the integration of the **libiscsi-utils** is optional during mirroring. The **libiscsi** is not affected even if the **libiscsi-utils** is uninstalled or not integrated.

When the **libiscsi-utils** is installed in the system, it will not downgrade because the libiscsi-1.19.1 or an earlier version that downgrades from the libiscsi-1.19.2 or a later version cannot provide the corresponding libiscsi-utils. However, **libiscsi-utils** depends on the main package **libiscsi** that has been generated before the downgrade. As a result, the dependency problem cannot be resolved and the downgrade fails.

### Solution

Run the following command to uninstall the **libiscsi-utils** and then perform the downgrade:

```
yum remove libiscsi-utils
```

## Failed to Downgrade the xfsprogs

### Symptom

xfsprogs-5.6.0-2 or a later version fails to downgrade to xfsprogs-5.6.0-1 or an earlier version.

```
Error:
Problem: problem with installed package xfsprogs-xfs_scrub-5.6.0-2.oe1.x86_64
- package xfsprogs-xfs_scrub-5.6.0-2.oe1.x86_64 requires xfsprogs = 5.6.0-2.oe1, but none of the providers can be installed
- cannot install both xfsprogs-5.6.0-1.oe1.x86_64 and xfsprogs-5.6.0-2.oe1.x86_64
- cannot install both xfsprogs-5.6.0-2.oe1.x86_64 and xfsprogs-5.6.0-1.oe1.x86_64
- conflicting requests
```

### Cause Analysis

To reduce the dependency of the **xfsprogs** main package, the xfsprogs-5.6.0-2 version separates the **xfs\_scrub\*** command from the main package and incorporates the command into a subpackage **xfsprogs-xfs\_scrub**. The **xfsprogs** main package is weakly dependent on the **xfsprogs-xfs\_scrub**. As a result, the integration or uninstallation of the **xfsprogs-xfs\_scrub** is optional during mirroring. The xfsprogs main package is not affected even if the **xfsprogs-xfs\_scrub** is uninstalled or not integrated.

When the **xfsprogs-xfs\_scrub** is installed in the system, it will not downgrade because the xfsprogs-5.6.0-1 or an earlier version that downgrades from the xfsprogs-5.6.0-2 or a later version cannot provide the corresponding xfsprogs-xfs\_scrub. However, **xfsprogs-xfs\_scrub** depends on the xfsprogs main package that has been generated before the downgrade. As a result, the dependency problem cannot be resolved and the downgrade fails.

### Solution

Run the following command to uninstall the **xfsprogs-xfs\_scrub** subpackage and then perform the downgrade:

```
yum remove xfsprogs-xfs_scrub
```

## ReDoS Caused by Improper Use of glibc Regular Expressions

### Symptom

When the regcomp and regexec interfaces of glibc are used for programming, or shell commands that use glibc regular expressions, such as **grep** and **sed**, are executed, improper regular expressions or input may cause the regular expression denial of service (ReDoS) (CVE-2019-9192/CVE-2018-28796). The typical regular expression pattern is the combination of reverse reference (indicated by **\\1**), **\*** (zero match or multiple matches), **+** (one match or multiple matches), and **{m,n}** (m: minimum number of matches; n: maximum number of matches). You can also enter an ultra-long character string together with the regular expression. Examples are shown as follows:

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

### Cause Analysis

A core dump occurs on the process that uses the regular expression. This occurs because the glibc regular expression is implemented using the hybrid DFA-NFA  algorithm. The internal principle is to use the greedy algorithm for recursive search to match as many character strings as possible. The greedy algorithm causes the ReDoS when processing recursive regular expressions.

### Solution

1. Strictly control the user permission to reduce the scope of attack.
2. Ensure that the regular expression is correct. Do not enter an invalid regular expression or a combination that may trigger infinite recursion, such as an ultra-long character string accompanied with **\\1** or **\***.
   ```
   # ()(\1\1)*
   # "a"*400000
   ```
3. After detecting a process exception in the program, restart the process to restore services, which helps improve program reliability.

## A Cache File Exists when Files Are Edited Using Emacs

### Symptom

If Emacs is not configured, a cache file ending with **~** exists after the edited file is saved.

### Cause Analysis

If Emacs is not configured or no valid configuration file is generated, a cache file will exist. The cache file is used to prevent data loss caused by unexpected system shutdown. You can determine whether to enable this function.

### Solution

1. After Emacs is installed, the Emacs page is displayed.

2. Press **Alt+X** on the Emacs page.

3. After entering **customize**, you can set any function. After the function is set, an **.emacs** configuration file is generated, and the path of the configuration file is displayed, for example, **/root/.emacs**. (The **.emacs** file that you create does not support this function.)

4. If you need to modify the cache file configuration, use either of the following methods:
   
    * Copy the following code to **/root/.emacs** to disable the cache file function:
     
        ```
        (setq make-backup-files nil)
        ```
    * Copy the following code to **/root/.emacs** and specify the directory for storing backup files:
     
        ```
        (setq backup-directory-alist (quote (("." . "/.emacs-backups"))))
        ```


## The Error Message "Failed to make ourselves RT: Operation not permitted" Is Displayed when the rtkit-daemon Service Is Started 

### Symptom

By default, the rtkit-daemon service is started properly. However, if you start the rtkit-daemon service with the Docker Engine installed, the following error message is displayed:

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

### Cause Analysis

The error occurs because services, such as docker service, are set to **Delegate=yes**.

If this parameter is not set, the rtkit-daemon service runs normally with the following cgroup information:

```
[root@openEuler ~]# cat /proc/pidof rtkit-daemon/cgroup | grep system
12:pids:/system.slice/rtkit-daemon.service
7:devices:/system.slice/rtkit-daemon.service
5:memory:/system.slice/rtkit-daemon.service
2:blkio:/system.slice
1:name=systemd:/system.slice/rtkit-daemon.service
```

If **Delegate=yes** is set, the systemd creates a slice and moves the CPU cgroup to the slice. In this case, the cgroup information of the rtkit-daemon service is as follows. The rtkit-daemon is moved to **3:cpu,cpuacct:/system.slice/rtkit-daemon.service**, but the value of **cpu.rt\_runtime\_us** is not properly set. As a result, an error is reported.

```
[root@openEuler ~]# cat /proc/pidof rtkit-daemon/cgroup | grep system
12:pids:/system.slice/rtkit-daemon.service
7:devices:/system.slice/rtkit-daemon.service
5:memory:/system.slice/rtkit-daemon.service
3:cpu,cpuacct:/system.slice/rtkit-daemon.service
2:blkio:/system.slice/rtkit-daemon.service
1:name=systemd:/system.slice/rtkit-daemon.service
```

### Solution

Method 1: Use the default CPU cgroup configuration by modifying the rtkit-daemon service and adding the following configuration:

```
Slice=-.slice
DisableControllers=cpu cpuacct
```

Method 2: Configure scheduling parameters as required by modifying the rtkit-daemon service and adding the following configuration:

```
ExecStartPre=/usr/bin/bash -c "mkdir -p /sys/fs/cgroup/cpu,cpuacct/system.slice/rtkit-daemon.service"
ExecStartPre=/usr/bin/bash -c "echo 950000 > /sys/fs/cgroup/cpu,cpuacct/system.slice/cpu.rt_runtime_us"
ExecStartPre=/usr/bin/bash -c "echo 950000 > /sys/fs/cgroup/cpu,cpuacct/system.slice/rtkit-daemon.service/cpu.rt_runtime_us"
```
## Failed to Reboot the System After It Is Fully Upgraded from 20.03-LTS to 20.03-LTS-SP1 Using the `dnf update` Command

### Symptom

The **/boot** directory does not have a dedicated partition in the Legacy boot mode of the x86_64 architecture. When being fully upgraded from 20.03-LTS to 20.03-LTS-SP1 using `dnf` and the software package, the system is successfully upgraded but the reboot fails. The following information is displayed:

```
error: ../../grub-core/fs/fshelp.c:258:file
'/vmlinuz-4.19.90-2012.5.0.0054.oe1.x86_64'
not found.
error: ../../grub-core/loader/i386/pc/linux.c:417:you need to load the kernel first.

Press any key to continue...
```

### Possible Cause

In 20.03-LTS or earlier, the .cfg files are used by default. In 20.03-LTS-SP1, after GRUB2 is upgraded to 2.04, the .cfg files are converted to blscfg files by default. However, openEuler does not support blscfg files. In this case, the kernel cannot be found based on the **grub.cfg** file during the restart, and the boot fails. Developers of the openEuler community are seeking to change the default settings to prevent boot failure caused by the .cfg format problem after the upgrade using the software package.

### Solution

1. On the boot screen, press **E** and change the paths of **linux** and **initrd** in the GRUB2 configurations.

   ```
   linux ($root)/vmlinuz-4.19-xxx root=xxx --->>> linux ($root)/boot/vmlinuz-4.19-xxx root=xxx
   initrd ($root)/initramfs-4.19-xxx       --->>> initrd ($root)/boot/initramfs-4.19-xxx 
   ```

   Press **Ctrl+X** to boot the system.

2. Reinstall grub2-2.04-8 or later.

3. Execute `grub2-mkconfig -o /boot/grub2/grub.cfg` to regenerate the .cfg file.

4. Restart the system again. The system is successfully booted.

## Upgrade and Downgrade Issues of fuse 2.9.9-4 and fuse3 3.9.2-4

### Symptom

1. When `dnf upgrade fuse fuse-common fuse3` is executed, the upgrade fails.
2. When `dnf downgrade fuse` is executed, the fuse3 is downgraded or installed.
3. When `dnf downgrade fuse3` is executed, the fuse is downgraded.

### Possible Cause

1. In versions earlier than fuse 2.9.9-3, both the fuse and fuse3 obsolete the fuse-common. When the package dependencies are parsed in sequence, the fuse-common fails to be upgraded because the fuse-common is obsoleted by the fuse3.
2. When the fuse is downgraded, the fuse-common is also downgraded. In versions earlier than fuse 2.9.9-3 and fuse3 3.9.2-3, the fuse-common package is contained. When the fuse-common is downgraded, the fuse3 is degraded or installed because the old version of the fuse-common is contained in the fuse3.
3. When the fuse3 is downgraded, the fuse-common is also downgraded. In versions earlier than fuse 2.9.9-3 and fuse3 3.9.2-3, the fuse-common package is contained. When the fuse-common is downgraded, the fuse is also downgraded because the old version of the fuse-common is contained in the fuse.

### Solution

1. Execute `dnf upgrade fuse` to upgrade the fuse, and `dnf fuse fuse3 fuse-common` to upgrade the fuse3.
2. No measure needs to be taken.
3. No measure needs to be taken.

## An Error Is Reported When gdbm-devel Is Installed or Uninstalled During the Installation and Uninstallation of httpd-devel and apr-util-devel

### Symptom

1.  An error is reported when gdbm-devel-1.18.1-1 is installed or uninstalled.
2.  After the error is rectified, gdbm and gdbm-devel are upgraded to the 1.18.1-2 version. However, the default version of gdbm-devel is still 1.18.1-1 when httpd-devel and apr-util-devel (dependent on gdbm-devel) are installed. As a result, the error persists.

### Possible Cause

1. The gdbm-devel-1.18.1-1 package does not contain the help package that provides `info`. As a result, the help package cannot be introduced when gdbm-devel is installed independently, and the following alarm information is displayed:

   ```
   install-info: No such file or directory for /usr/share/info/gdbm.info.gz
   ```

2. By default, the gdbm-1.18.1-1 main package is installed in the system, but the gdbm-devel package is not installed. The software packages depending on gdbm-devel still match the version of the gdbm main package and install gdbm-devel-1.18.1-1. As a result, the error persists.

### Solution

1.  Install gdbm-1.18.1-2 to upgrade gdbm. The error is rectified.
2.  Upgrade gdbm, and then install gdbm-devel to make it depend on the gdbm of the later version. The error is rectified.