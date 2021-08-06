# FAQs
<!-- TOC -->

- [FAQs](#faqs)
    - [Why Is the Memory Usage of the libvirtd Service Queried by Running the systemctl and top Commands Different?](#why-is-the-memory-usage-of-the-libvirtd-service-queried-by-running-the-systemctl-and-top-commands-different)
    - [An Error Occurs When stripsize Is Set to 4 During RAID 0 Volume Configuration](#an-error-occurs-when-stripsize-is-set-to-4-during-raid-0-volume-configuration)
    - [Failed to Compile MariaDB Using rpmbuild](#failed-to-compile-mariadb-using-rpmbuild)
    - [Failed to Start the SNTP Service Using the Default Configuration](#failed-to-start-the-sntp-service-using-the-default-configuration)
    - [Installation Failure Caused by Software Package Conflict, File Conflict, or Missing Software Package](#installation-failure-caused-by-software-package-conflict-file-conflict-or-missing-software-package)
    - [Why Do OpenSSH-related Packages Fail to Be Installed when the OpenSSH Software Package Is Upgraded in Default DNF Update Mode?](#Why-Do-OpenSSH-related-Packages-Fail-to-Be-Installed-when-the-OpenSSH-Software-Package-Is-Upgraded-in-Default-DNF-Update-Mode)
    - [Failed to Downgrade the libiscsi](#Failed-to-Downgrade-the-libiscsi)
    - [Failed to Downgrade the xfsprogs](#Failed-to-Downgrade-the-xfsprogs)
    - [ReDoS Attack Occurs Due to Improper Use of glibc Regular Expressions](#ReDoS-Attack-Occurs-Due-to-Improper-Use-of-glibc-Regular-Expressions)
    - [Cache Files Exist When Using the Emacs to Edit Files](#Cache-Files-Exist-When-Using-the-Emacs-to-Edit-Files)
    - [Upgrade and Downgrade Issues of fuse 2.9.9-4 and fuse3 3.9.2-4](#Upgrade-and-Downgrade-Issues-of-fuse-2.9.9-4-and-fuse3-3.9.2-4)

<!-- /TOC -->
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

libiscsi-1.19.2 or later fails to be downgraded to libiscsi-1.19.1 or earlier.

```
Error: Transaction test error:
file /usr/bin/iscsi-inq from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-ls from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-perf from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-readcapacity16 from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-swp from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
file /usr/bin/iscsi-test-cu from install of libiscsi-1.19.0-1.eulerosv2r9.x86_64 conflicts with file from package libiscsi-utils-1.19.0-2.eulerosv2r9.x86_64
```

### Possible Cause

In libiscsi-1.19.1 or earlier, binary files named **iscsi-xxx** are packed into the main package **libiscsi**. However, these binary files introduce the improper dependency of CUnit. To solve this problem, in libiscsi-1.19.2, these binary files are separated into the **libiscsi-utils** subpackage. The main package is weakly dependent on the subpackage. You can integrate or uninstall the subpackage during image creation based on product requirements. If the subpackage is not integrated or is uninstalled, the functions of the **libiscsi** main package are not affected.

When libiscsi-1.19.2 or later is downgraded to libiscsi-1.19.1 or earlier and the **libiscsi-utils** subpackage is installed in the system, because libiscsi-1.19.1 or earlier does not contain **libiscsi-utils**, **libiscsi-utils** will fail to be downgraded. Due to the fact that **libiscsi-utils** depends on the **libiscsi** main package before the downgrade, a dependency problem occurs and the libiscsi downgrade fails.

### Solution

Run the following command to uninstall the **libiscsi-utils** subpackage before performing the downgrade:

```
yum remove libiscsi-utils
```

## Failed to Downgrade the xfsprogs

### Symptom

xfsprogs-5.6.0-2 or later fails to be downgraded to xfsprogs-5.6.0-1 or earlier.

```
Error:
Problem: problem with installed package xfsprogs-xfs_scrub-5.6.0-2.oe1.x86_64
- package xfsprogs-xfs_scrub-5.6.0-2.oe1.x86_64 requires xfsprogs = 5.6.0-2.oe1, but none of the providers can be installed
- cannot install both xfsprogs-5.6.0-1.oe1.x86_64 and xfsprogs-5.6.0-2.oe1.x86_64
- cannot install both xfsprogs-5.6.0-2.oe1.x86_64 and xfsprogs-5.6.0-1.oe1.x86_64
- conflicting requests
```

### Possible Cause

In xfsprogs-5.6.0-2, to reduce improper dependencies of the **xfsprogs** main package and separate experimental commands from the main package, the `xfs_scrub*` commands are separated into the **xfsprogs-xfs_scrub** subpackage. The **xfsprogs** main package is weakly dependent on the **xfsprogs-xfs_scrub** sub-package. You can integrate or uninstall the subpackage during image creation based on product requirements. If the subpackage is not integrated or is uninstalled, the functions of the **xfsprogs** main package are not affected.

When xfsprogs-5.6.0-2 or later is downgraded to xfsprogs-5.6.0-1 or earlier and the **xfsprogs-xfs_scrub** subpackage is installed in the system, because xfsprogs-5.6.0-1 or earlier does not contain **xfsprogs-xfs_scrub**, **xfsprogs-xfs_scrub** will fail to be downgraded. Due to the fact that **xfsprogs-xfs_scrub** depends on the **xfsprogs** main package before the downgrade, a dependency problem occurs and the xfsprogs downgrade fails.

### Solution

Run the following command to uninstall the **xfsprogs-xfs_scrub** subpackage before performing the downgrade:

```
yum remove xfsprogs-xfs_scrub
```

## ReDoS Attack Occurs Due to Improper Use of glibc Regular Expressions

### Symptom

When the regcomp/regexec interface of glibc is used for programming or the glibc regular expressions, such as grep/sed, are used in shell commands, a ReDoS attack occurs due to improper regular expressions or inputs (CVE-2019-9192/CVE-2018-28796). The typical regular expression pattern is the combination of the"reverse reference (\1)" with the "asterisk (*)" (zero match or multiple matches), "plus sign (+)" (one match or multiple matches), or "{m,n}" (minimum match: m; maximum match: n); or the combination of ultra-long character strings with regular expressions. The following is an example:

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

### Possible Cause

A core dump occurs on the process that uses the regular expression. The glibc regular expression is implemented using the NFA/DFA hybrid algorithm. The internal principle is to use a greedy algorithm for recursive query to match as many character strings as possible. The greedy algorithm causes the ReDoS attack when processing the recursive regular expression.

### Solution

1. Strict permission control is required to reduce the attack surface.

2. Ensure that the regular expression is correct. Do not enter an invalid regular expression or a combination of ultra-long character strings with regular expressions (references or asterisks) that may trigger infinite recursion.

   ```
   # ()(\1\1)*
   # "a"*400000
   ```

3. After a user program detects a process exception, the user program can restart the process to restore services, improving program reliability.

## Cache Files Exist When Using the Emacs to Edit Files

### Symptom

If the Emacs is not configured, a cache file ending with the wavy line (~) exists after the edited file is saved.

### Possible Cause

If the Emacs is not configured or no valid configuration file is generated, cache files exist. The cache file function is used to prevent data loss caused by unexpected system shutdown. You can determine whether to enable this function.

### Solution

1. After the Emacs is installed, the Emacs screen is displayed.

2. On the Emacs screen, press **Alt+x**.

3. Input **customize** to perform various settings. If any function is configured, a .emacs configuration file is generated, and the path of the configuration file is displayed, for example, **/root/.emacs**. (The .emacs file created by yourself does not function.)

4. If you want to modify the cache file configuration, use either of the following methods:

   - Copy the following code to **/root/.emacs** to disable the cache file function:

     ```
     (setq make-backup-files nil)
     ```

   - Copy the following code to **/root/.emacs** to specify the directory for storing backup files:

     ```
     (setq backup-directory-alist (quote (("." . "/.emacs-backups"))))
     ```

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