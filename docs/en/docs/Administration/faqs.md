# FAQs

[[toc]]

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

### Install conflicting instances.
* File conflict occurs.

The python3-edk2-devel.noarch file conflicts with the build.noarch file due to duplicate file names.

```shell
# yum install python3-edk2-devel.noarch build.noarch
...
Error: Transaction test error:
file /usr/bin/build conflicts between attempted installs of python3-edk2-devel-202002-3.oe1.noarch and build-20191114-324.4.oe1.noarch
```


## The libiscsi Fails to Downgrade

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

## The xfsprogs Fails to Downgrade

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

## CVE-2019-9674: Zip Bomb Vulnerability Detected by CPython/Lib

### Symptom

Lib/zipfile.py in Python 3.7.2 and earlier versions allows remote attackers to cause denial of service (DoS) using Zip bombs, resulting in high resource consumption.

### Impact Analysis

Remote attackers cause DoS using Zip bombs, affecting or even crashing target system services. A Zip bomb is a highly compressed zip file. It may be several MB or dozens of MB in size. However, a large amount of data is generated after decompression, which is resource-consuming.

### Solution

Add the following alarm information to the **zipfile** file: https://github.com/python/cpython/blob/3.7/Doc/library/zipfile.rst.

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

