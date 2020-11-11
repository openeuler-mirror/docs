# Trusted Computing

<!-- TOC -->
- [Trusted Computing](#可信计算)
  - [Trusted Computing Basics](#可信计算基础)
    - [Trusted Computing](#可信计算-1)
  - [Kernel Integrity Measurement Architecture (IMA)](#内核完整性度量ima)
    - [Overview](#概述)
    - [Constraints](#约束限制)
    - [Application Scenarios](#使用场景)
    - [Procedure](#操作指导)
    - [FAQ](#faq)
    - [Appendix](#附录)

<!-- /TOC -->
## Trusted Computing Basics

### Trusted Computing

The definition of being trusted varies with international organizations.

1. Trusted Computing Group (TCG):
   
   An entity that is trusted always achieves the desired goal in an expected way.

2. International Organization for Standardization (ISO) and International Electrotechnical Commission (IEC) (1999):
   
   The components, operations, or processes involved in computing are predictable under any conditions and are resistant to viruses and a certain degree of physical interference.

3. IEEE Computer Society Technical Committee on Dependable Computing:
   
   Being trusted means that the services provided by the computer system can be proved to be reliable, and mainly refers to the reliability and availability of the system.

In short, being trusted means that the system operates according to a pre-determined design and policy.

A trusted computing system consists of a root of trust, a trusted hardware platform, operating system (OS), and application. The basic idea of the system is to create a trusted computing base (TCB) first, and then establish a trust chain that covers the hardware platform, OS, and application. In the trust chain, authentication is performed from the root to the next level, extending trust level by level and building a secure and trusted computing environment.

![](./figures/trusted_chain.png)

Unlike the traditional security mechanism that eliminates viruses without solving the root of the problem, trusted computing adopts the whitelist mechanism to allow only authorized kernels, kernel modules, and applications to run on the system. The system will reject the execution of a program that is unknown or has been changed.

## Kernel Integrity Measurement Architecture (IMA)

### Overview

#### IMA

The integrity measurement architecture (IMA) is a subsystem in the kernel. The IMA can measure files accessed through **execve()**, **mmap()**, and **open()** systems based on user-defined policies. The measurement result can be used for **local or remote attestation**, or can be compared with an existing reference value to **control the access to files**.

According to the Wiki definition, the function of the kernel integrity subsystem include three parts:

- Measure: Detects accidental or malicious modifications to files, either remotely or locally.
- Appraise: Measures a file and compares it with a reference value stored in the extended attribute to control the integrity of the local file.
- Audit: Writes the measurement result into system logs for auditing.

Figuratively, IMA measurement is an observer that only records modification without interfering in it, and IMA appraisal is more like a strict security guard that rejects any unauthorized access to programs.

#### EVM

The extended verification module (EVM) is used to calculate a hash value based on the security extended attributes of a file in the system, including **security.ima** and **security.selinux**. Then this value is signed by the key stored in the TPM or other trusted environments. The signature value is stored in **security.evm** and cannot be tampered with. If the value is tampered with, the signature verification fails when the file is accessed again.

In summary, the EVM is used to provide offline protection for security extended attributes by calculating the digest of the attributes and signing and storing them in **security.evm**.

#### IMA Digest Lists

IMA Digest Lists are an enhancement of the original kernel integrity protection mechanism provided by openEuler. It replaces the original IMA mechanism to protect file integrity.

Digest lists are binary data files in a special format. Each digest list corresponds to an RPM package and records the hash values of protected files (executable files and dynamic library files) in the RPM package.

After the startup parameters are correctly configured, the kernel maintains a hash table (invisible to the user space) and provides interfaces (**digest\_list\_data** and **digest\_list\_data\_del**) that update the hash table using **securityfs**. The digest lists are signed by the private key when they are built. When uploaded to the kernel through the interface, the digest lists need to be verified by the public key in the kernel.

![](./figures/ima_digest_list_update.png)

When IMA appraisal is enabled, each time an executable file or dynamic library file is accessed, the hook in the kernel is invoked to calculate the hash values of the file content and extended attributes and search in the kernel hash table. If the calculated hash values match the one in the table, the file is allowed to be executed. Otherwise, the access is denied.

![1599719649188](./figures/ima_verification.png)

The IMA Digest Lists extension provided by the openEuler kernel provides higher security, performance, and usability than the native IMA mechanism of the kernel community, facilitating the implementation of the integrity protection mechanism in the production environment.

- **A complete trust chain for high security**
  
  The native IMA mechanism requires that the file extended attribute be generated and marked in advance on the live network. When the file is accessed, the file extended attribute is used as a reference value, resulting in an incomplete trust chain.
  
  The IMA Digest Lists extension saves the reference digest value of the file in the kernel space. During the construction, the reference digest value of the file is carried in the released RPM package in the form of a digest list. When the RPM package is installed, the digest list is imported and the signature is verified, ensuring that the reference value comes from the software publisher and implementing a complete trust chain.

- **Superior performance**
  
  The trusted platform module (TPM) chip is a low-speed chip, making the PCR extension operation a performance bottleneck in the IMA measurement scenario. To shatter this bottleneck, the Digest Lists extension reduces unnecessary PCR extension operations while ensuring security, providing 65% higher performance than the native IMA mechanism.
  
  In the IMA appraisal scenario, the Digest Lists extension performs signature verification in the startup phase to prevent signature verification from being performed each time the file is accessed. This helps deliver a 20% higher file access performance in the operation phase than that in the native IMA appraisal scenario.

- **Fast deployment and smooth upgrade**
  
  When the native IMA mechanism is deployed for the first time or the software package is updated, you need to switch to the fix mode, manually mark the extended attributes of the file, and then restart the system to enter the enforcing mode. In this way, the installed program can be accessed normally.
  
  The Digest Lists extension can be used immediately after the installation is completed. In addition, the RPM package can be directly installed or upgraded in the enforcing mode without restarting the system or manually marking the extended attributes of the file. This minimizes user perception during the operation, allowing for quick deployment and smooth upgrade on the live network.

Note: The IMA Digest Lists extension advances the signature verification of the native IMA to the startup phase. This causes the assumption that the memory in the kernel space cannot be tampered with. As a result, the IMA depends on other security mechanisms (secure startup of kernel module and dynamic memory measurement) to protect the integrity of the kernel memory.

However, either the native IMA mechanism of the community or the IMA Digest Lists extension is only a link in the trust chain of trusted computing, and cannot ensure the system security alone. Security construction is always a systematic project that builds in-depth defense.

### Constraints

1. The current IMA appraisal mode can only protect immutable files in the system, including executable files and dynamic library files.
2. The IMA provides integrity measurement at the application layer. The security of the IMA depends on the reliability of the previous links.
3. Currently, the IMA does not support the import of the third-party application digest lists.
4. The startup log may contain `Unable to open file: /etc/keys/x509_ima.der`. This error is reported from the open source community and does not affect the use of the IMA digest lists feature.
5. In the ARM version, audit errors may occur when the log mode is enabled for the IMA. This occurs because the modprobe loads the kernel module before the digest lists are imported, but does not affect the normal functions.

### Application Scenario

#### IMA Measurement

The purpose of IMA measurement is to detect unexpected or malicious modifications to system files. The measurement result can be used for local or remote attestation.

If a TPM chip exists in the system, the measurement result is extended to a specified PCR register of the TPM chip. Due to the unidirectional PCR extension and the hardware security of the TPM chip, a user cannot modify the extended measurement result, thereby ensuring authenticity of the measurement result.

The file scope and triggering conditions of IMA measurement can be configured by the user using the IMA policy.

By default, IMA is disabled. However, the system searches for the **ima-policy** policy file in the `/etc/ima/` path. If the file is found, the system measures the files in the system based on the policy during startup. If you do not want to manually compile the policy file, you can configure the `ima_policy=tcb` in the startup parameters using the default policy. For details about more policy parameters, see the section *IMA Startup Parameters* in *Appendix*.

You can check the currently loaded IMA policy in the `/sys/kernel/security/ima/policy` file. The IMA measurement log is located in the `/sys/kernel/security/ima/ascii_runtime_measurements` file, as shown in the following figure:

```shell
$ head /sys/kernel/security/ima/ascii_runtime_measurements
10 ddee6004dc3bd4ee300406cd93181c5a2187b59b ima-ng sha1:9797edf8d0eed36b1cf92547816051c8af4e45ee boot_aggregate
10 180ecafba6fadbece09b057bcd0d55d39f1a8a52 ima-ng sha1:db82919bf7d1849ae9aba01e28e9be012823cf3a /init
10 ac792e08a7cf8de7656003125c7276968d84ea65 ima-ng sha1:f778e2082b08d21bbc59898f4775a75e8f2af4db /bin/bash
10 0a0d9258c151356204aea2498bbca4be34d6bb05 ima-ng sha1:b0ab2e7ebd22c4d17d975de0d881f52dc14359a7 /lib64/ld-2.27.so
10 0d6b1d90350778d58f1302d00e59493e11bc0011 ima-ng sha1:ce8204c948b9fe3ae67b94625ad620420c1dc838 /etc/ld.so.cache
10 d69ac2c1d60d28b2da07c7f0cbd49e31e9cca277 ima-ng sha1:8526466068709356630490ff5196c95a186092b8 /lib64/libreadline.so.7.0
10 ef3212c12d1fbb94de9534b0bbd9f0c8ea50a77b ima-ng sha1:f80ba92b8a6e390a80a7a3deef8eae921fc8ca4e /lib64/libc-2.27.so
10 f805861177a99c61eabebe21003b3c831ccf288b ima-ng sha1:261a3cd5863de3f2421662ba5b455df09d941168 /lib64/libncurses.so.6.1
10 52f680881893b28e6f0ce2b132d723a885333500 ima-ng sha1:b953a3fa385e64dfe9927de94c33318d3de56260 /lib64/libnss_files-2.27.so
10 4da8ce3c51a7814d4e38be55a2a990a5ceec8b27 ima-ng sha1:99a9c095c7928ecca8c3a4bc44b06246fc5f49de /etc/passwd
```

From left to right, the content of each record indicates:

1. PCR: PCR register for extending measurement results (The default value is 10. This register is valid only when the TPM chip is installed in the system.)
2. Template hash value: hash value that is finally used for extension, combining the file content hash and the length and value of the file path
3. Template: template of the extended measurement value, for example, **ima-ng**
4. File content hash value: hash value of the measured file content
5. File path: path of the measured file

#### IMA Appraisal

The purpose of IMA appraisal is to control access to local files by comparing the reference value with the standard reference value.

IMA uses the security extension attributes **security.ima** and **security.evm** to store the reference values of file integrity measurement.

- **security.ima**: stores the hash value of the file content
- **security.evm**: stores the hash value signature of a file extended attribute

When a protected file is accessed, the hook in the kernel is triggered to verify the integrity of the extended attributes and content of the file.

1. Use the public key in the kernel keyring to verify the signature value in the extended attribute of the **security.evm** file, and compare this signature value with the hash value of the extended attribute of the current file. If they match, the extended attribute of the file is complete (including **security.ima**).
2. When the extended attribute of the file is complete, the system compares the extended attribute of the file **security.ima** with the digest value of the current file content. If they match, the system allows for the access to the file.

Likewise, the file scope and trigger conditions for IMA appraisal can be configured by users using IMA policies.

#### IMA Digest Lists

Currently, the IMA Digest Lists extension supports the following three combinations of startup parameters:

* IMA measurement mode:
  
  ```shell
  ima_policy=exec_tcb ima_digest_list_pcr=11
  ```

* IMA appraisal log mode + IMA measurement mode:
  
  ```shell
  ima_template=ima-sig ima_policy="exec_tcb|appraise_exec_tcb|appraise_exec_immutable" initramtmpfs ima_hash=sha256 ima_appraise=log evm=allow_metadata_writes evm=x509 ima_digest_list_pcr=11 ima_appraise_digest_list=digest
  ```

* IMA appraisal enforcing mode + IMA measurement mode:
  
  ```shell
  ima_template=ima-sig ima_policy="exec_tcb|appraise_exec_tcb|appraise_exec_immutable" initramtmpfs ima_hash=sha256 ima_appraise=enforce-evm evm=allow_metadata_writes evm=x509 ima_digest_list_pcr=11 ima_appraise_digest_list=digest
  ```

### Procedure

#### Initial Deployment in the Native IMA Scenario

When the system is started for the first time, you need to configure the following startup parameters:

```shell
ima_appraise=fix ima_policy=appraise_tcb
```

In the `fix` mode, the system can be started when no reference value is available. `appraise_tcb` corresponds to an IMA policy. For details, see *IMA Startup Parameters* in the *Appendix*.

Next, you need to access all the files that need to be verified to add IMA extended attributes to them:

```shell
$ time find / -fstype ext4 -type f -uid 0 -exec dd if='{}' of=/dev/null count=0 status=none \;
```

This process takes some time. After the command is executed, you can see the marked reference value in the extended attributes of the protected file.

```shell
$ getfattr -m - -d /sbin/init
# file: sbin/init
security.ima=0sAXr7Qmun5mkGDS286oZxCpdGEuKT
security.selinux="system_u:object_r:init_exec_t"
```

Configure the following startup parameters and restart the system:

```shell
ima_appraise=enforce ima_policy=appraise_tcb
```

#### Initial Deployment in the Digest Lists Scenario

1. Set kernel parameters to enter the log mode.
   
   Add the following parameters to edit the `/boot/efi/EFI/euleros/grub.cfg` file:
   
   ```shell
   ima_template=ima-sig ima_policy="exec_tcb|appraise_exec_tcb|appraise_exec_immutable" initramtmpfs ima_hash=sha256 ima_appraise=log evm=allow_metadata_writes evm=x509 ima_digest_list_pcr=11 ima_appraise_digest_list=digest
   ```
   
   Run the `reboot` command to restart the system and enter the log mode. In this mode, integrity check has been enabled, but the system can be started even if the check fails.

2. Install the dependency package.
   
   Run the **yum** command to install **digest-list-tools** and **ima-evm-utils**. Ensure that the versions are not earlier than the following:
   
   ```shell
   $ yum install digest-list-tools ima-evm-utils
   $ rpm -qa | grep digest-list-tools
   digest-list-tools-0.3.93-1.oe1.x86_64
   $ rpm -qa | grep ima-evm-utils
   ima-evm-utils-1.2.1-9.oe1.x86_64
   ```

3. If the **plymouth** package is installed, you need to add `-a` to the end of the **cp** command in line 147 in the `/usr/libexec/plymouth/plymouth-populate-initrd` script file:
   
   ```shell
       ...
       ddebug "Installing $_src"
    cp -a --sparse=always -pfL "$PLYMOUTH_SYSROOT$_src" "${initdir}/$target"
   }
   ```

4. Run `dracut` to generate **initrd** again:
   
   ```shell
   $ dracut -f -e xattr
   ```
   
   Edit the `/boot/efi/EFI/euleros/grub.cfg` file by changing **ima\_appraise=log** to **ima\_appraise=enforce-evm**.
   
   ```shell
   ima_template=ima-sig ima_policy="exec_tcb|appraise_exec_tcb|appraise_exec_immutable" initramtmpfs ima_hash=sha256 ima_appraise=enforce-evm evm=allow_metadata_writes evm=x509 ima_digest_list_pcr=11 ima_appraise_digest_list=digest
   ```
   
   Run the **reboot** command to complete the initial deployment.

#### Building Digest Lists on OBS

Open Build Service (OBS) is a compilation system that was first used for building software packages in openSUSE and supports distributed compilation of multiple architectures.

Before building a digest list, ensure that your project contains the following RPM packages from openEuler:

* digest-list-tools
* pesign-obs-integration
* selinux-policy
* rpm
* openEuler-rpm-config

Add **Project Config** in the deliverable project:

```shell
Preinstall: pesign-obs-integration digest-list-tools selinux-policy-targeted
Macros:
%__brp_digest_list /usr/lib/rpm/openEuler/brp-digest-list %{buildroot}
:Macros
```

* The following content is added to **Preinstall**: **digest-list-tools** for generating the digest list; **pesign-obs-integration** for generating the digest list signature; **selinux-policy-targeted**, ensuring that the SELinux label in the environment is correct when the digest list is generated.
* Define the macro **%\_\_brp\_digest\_list** in Macros. The RPM runs this macro to generate a digest list for the compiled binary file in the build phase. This macro can be used as a switch to control whether the digest list is generated in the project.

After the configuration is completed, OBS automatically performs full build. In normal cases, the following two files are added to the software package:

* **/etc/ima/digest\_lists/0-metadata\_list-compact-\[package name]-\[version number]**
* **/etc/ima/digest\_lists.tlv/0-metadata\_list-compact\_tlv-\[package name]-\[version number]**

#### Building Digest Lists on Koji

Koji is a compilation system of the Fedora community. The openEuler community will support Koji in the future.

### FAQ

1. Why does the system fail to be started, or commands fail to be executed, or services are abnormal after the system is started in enforcing mode?
   
   In enforcing mode, IMA controls file access. If the content or extended attributes of a file to be accessed are incomplete, the access will be denied. If key commands that affect system startup cannot be executed, the system cannot be started.
   
   Check whether the following problems exist:
   
   * **Check whether the digest list is added to initrd.**
     
     Check whether the **dracut** command is executed to add the digest list to the kernel during the initial deployment. If the digest list is not added to **initrd**, the digest list cannot be imported during startup. As a result, the startup fails.
   
   * **Check whether the official RPM package is used.**
     
     If a non-official openEuler RPM package is used, the RPM package may not carry the digest list, or the private key for signing the digest list does not match the public key for signature verification in the kernel. As a result, the digest list is not imported to the kernel.
   
   If the cause is not clear, enter the log mode and find the cause from the error log:
   
   ```shell
   $ dmesg | grep appraise
   ```

2. Why access control is not performed on system files in enforcing mode?
   
   When the system does not perform access control on the file as expected, check whether the IMA policy in the startup parameters is correctly configured:
   
   ```shell
   $ cat /proc/cmdline
   ...ima_policy=exec_tcb|appraise_exec_tcb|appraise_exec_immutable...
   ```
   
   Run the following command to check whether the IMA policy in the current kernel has taken effect:
   
   ```shell
   $ cat /sys/kernel/security/ima/policy
   ```
   
   If the policy file is empty, it indicates that the policy fails to be set. In this case, the system does not perform access control.

3. After the initial deployment is completed, do I need to manually run the **dracut** command to generate **initrd** after installing, upgrading, or uninstalling the software package?
   
   No. The **digest\_list.so** plug-in provided by the RPM package can automatically update the digest list at the RPM package granularity, allowing users to be unaware of the digest list.

### Appendix

#### Description of the IMA securityfs Interface

The native IMA provides the following **securityfs** interfaces:

> Note: The following interface paths are in the `/sys/kernel/security/` directory.

| Path                           | Permission | Description                                                  |
| ------------------------------ | ---------- | ------------------------------------------------------------ |
| ima/policy                     | 600        | IMA policy interface                                         |
| ima/ascii_runtime_measurement  | 440        | IMA measurement result in ASCII code format                  |
| ima/binary_runtime_measurement | 440        | IMA measurement result in binary format                      |
| ima/runtime_measurement_count  | 440        | Measurement result statistics                                |
| ima/violations                 | 440        | Number of IMA measurement result conflicts                   |
| evm                            | 660        | EVM mode, that is, the mode for verifying the integrity of extended attributes of files |

The values of `/sys/kernel/security/evm` are as follows:

* 0: EVM uninitialized.
* 1: Uses HMAC (symmetric encryption) to verify the integrity of extended attributes.
* 2: Uses the public key signature (asymmetric encryption) to verify the integrity of extended attributes.
* 6: Disables the integrity check of extended attributes (This mode is used for openEuler).

The additional **securityfs** interfaces provided by the IMA Digest Lists extension are as follows:

| Path                     | Permission | Description                                                |
| ------------------------ | ---------- | ---------------------------------------------------------- |
| ima/digests_count        | 440        | Total number of digests (IMA+EVM) in the system hash table |
| ima/digest_list_data     | 200        | New interfaces in the digest list                          |
| ima/digest_list_data_del | 200        | Interfaces deleted from the digest list                    |

#### IMA Policy Syntax

Each IMA policy statement must start with an **action** represented by the keyword action and be followed by a **filtering condition**:

- **action**: indicates the action of a policy. Only one **action** can be selected for a policy.
  
  > Note: You can **ignore the word action** and directly write **dont\_measure** instead of **action=dont\_measure**.

- **func**: indicates the type of the file to be measured or authenticated. It is often used together with **mask**. Only one **func** can be selected for a policy.
  
  - **FILE\_CHECK** can be used only with **MAY\_EXEC**, **MAY\_WRITE**, and **MAY\_READ**.
  - **MODULE\_CHECK**, **MMAP\_CHECK**, and **BPRM\_CHECK** can be used only with **MAY\_EXEC**.
  - A combination without the preceding matching relationships does not take effect.

- **mask**: indicates the operation upon which files will be measured or appraised. Only one **mask** can be selected for a policy.

- **fsmagic**: indicates the hexadecimal magic number of the file system type, which is defined in the `/usr/include/linux/magic.h` file.
  
  > Note: By default, all file systems are measured unless you use the **dont\_measure/dont\_appraise** to mark a file system not to be measured.

- **fsuid**: indicates the UUID of a system device. The value is a hexadecimal string of 16 characters.

- **objtype**: indicates the file type. Only one file type can be selected for a policy.
  
  > Note: **objtype** has a finer granularity than **func**. For example, **obj\_type=nova\_log\_t** indicates the nova log file.

- **uid**: indicates the user (represented by the user ID) who performs operations on the file. Only one **uid** can be selected for a policy.

- **fowner**: indicates the owner (represented by the user ID) of the file. Only one **fowner** can be selected for a policy.

The values and description of the keywords are as follows:

| Keyword       | Value              | Description                                                  |
| ------------- | ------------------ | ------------------------------------------------------------ |
| action        | measure            | Enables IMA measurement                                      |
|               | dont_measure       | Disables IMA measurement                                     |
|               | appraise           | Enables IMA appraisal                                        |
|               | dont_appraise      | Disables IMA appraisal                                       |
|               | audit              | Enables audit                                                |
| func          | FILE_CHECK         | File to be opened                                            |
|               | MODULE_CHECK       | Kernel module file to be loaded                              |
|               | MMAP_CHECK         | Dynamic library file to be mapped to the memory space of the process |
|               | BRPM_CHECK         | File to be executed (excluding script files opened by programs such as `/bin/hash`) |
|               | POLICY_CHECK       | File to be loaded as a supplement to the IMA policy          |
|               | FIRMWARE_CHECK     | Firmware to be loaded into memory                            |
|               | DIGEST_LIST_CHECK  | Digest list file to be loaded into the kernel                |
|               | KEXEC_KERNEL_CHECK | kexec kernel to be switched to                               |
| mask          | MAY_EXEC           | Executes a file                                              |
|               | MAY_WRITE          | Writes data to a file This operation is not recommended because it is restricted by open source mechanisms such as echo and vim (the essence of modification is to create a temporary file and then rename it). The IMA measurement of **MAY\_WRITE** is not triggered each time the file is modified. |
|               | MAY_READ           | Reads a file                                                 |
|               | MAY_APPEND         | Extends file attributes                                      |
| fsmagic       | fsmagic=xxx        | Hexadecimal magic number of the file system type             |
| fsuuid        | fsuuid=xxx         | UUID of a system device. The value is a hexadecimal string of 16 characters. |
| fowner        | fowner=xxx         | User ID of the file owner                                    |
| uid           | uid=xxx            | ID of the user who operates the file                         |
| obj_type      | obj_type=xxx_t     | File type (based on the SELinux tag)                         |
| pcr           | pcr=<num>          | Selects the PCR used to extend the measurement values in the TPM. The default value is 10. |
| appraise_type | imasig             | Signature-based IMA appraisal                                |
|               | meta_immutable     | Evaluates the extended attributes of the file based on signatures (supporting the digest list). |

> Note: **PATH\_CHECK** is equivalent to **FILE\_CHECK**, and **FILE\_MMAP** is equivalent to **MMAP\_CHECK**. They are not mentioned in this table.

#### IMA Native Startup Parameters

The following table lists the kernel startup parameters of the native IMA.

| Parameter        | Value        | Description                                                  |
| ---------------- | ------------ | ------------------------------------------------------------ |
| ima_appraise     | off          | Disables the IMA appraisal mode. The integrity check is not performed when the file is accessed and no new reference value is generated for the file. |
|                  | enforce      | Enables the IMA appraisal enforcing mode to perform the integrity check when the file is accessed. That is, the file digest value is calculated and compared with the reference value. If the comparison fails, the file access is rejected. In this case, the IMA generates a new reference value for the new file. |
|                  | fix          | Enables the IMA repair mode. In this mode, the reference value of a protected file can be updated. |
|                  | log          | Enables the IMA appraisal log mode to perform the integrity check when the file is accessed. However, commands can be executed even if the check fails, and only logs are recorded. |
| ima_policy       | tcb          | Measures all file execution, dynamic library mapping, kernel module import, and device driver loading. The file read behavior of the root user is also measured. |
|                  | appraise_tcb | Evaluates all files whose owner is the root user.            |
|                  | secure_boot  | Evaluates the kernel module import, hardware driver loading, kexec kernel switchover, and IMA policies. The prerequisite is that these files have IMA signatures. |
| ima_tcb          | None         | Equivalent to **ima\_policy=tcb**.                           |
| ima_appraise_tcb | None         | Equivalent to **ima\_policy=appraise\_tcb**.                 |
| ima_hash         | sha1/md5/... | IMA digest algorithm. The default value is sha1.             |
| ima_template     | ima          | IMA measurement extension template                           |
|                  | ima-ng       | IMA measurement extension template                           |
|                  | ima-sig      | IMA measurement extension template                           |
| integrity_audit  | 0            | Basic integrity audit information (default)                  |
|                  | 1            | Additional integrity audit information                       |

> Note: The **ima\_policy** parameter can specify multiple values at the same time, for example, **ima\_policy=tcb\|appraise\_tcb**. After the system is started, the IMA policy of the system is the sum of the policies for the two parameters.

The IMA policy for the `ima_policy=tcb` startup parameter is as follows:

```
# PROC_SUPER_MAGIC = 0x9fa0
dont_measure fsmagic=0x9fa0
# SYSFS_MAGIC = 0x62656572
dont_measure fsmagic=0x62656572
# DEBUGFS_MAGIC = 0x64626720
dont_measure fsmagic=0x64626720
# TMPFS_MAGIC = 0x01021994
dont_measure fsmagic=0x1021994
# DEVPTS_SUPER_MAGIC=0x1cd1
dont_measure fsmagic=0x1cd1
# BINFMTFS_MAGIC=0x42494e4d
dont_measure fsmagic=0x42494e4d
# SECURITYFS_MAGIC=0x73636673
dont_measure fsmagic=0x73636673
# SELINUX_MAGIC=0xf97cff8c
dont_measure fsmagic=0xf97cff8c
# SMACK_MAGIC=0x43415d53
dont_measure fsmagic=0x43415d53
# CGROUP_SUPER_MAGIC=0x27e0eb
dont_measure fsmagic=0x27e0eb
# CGROUP2_SUPER_MAGIC=0x63677270
dont_measure fsmagic=0x63677270
# NSFS_MAGIC=0x6e736673
dont_measure fsmagic=0x6e736673 
measure func=MMAP_CHECK mask=MAY_EXEC 
measure func=BPRM_CHECK mask=MAY_EXEC 
measure func=FILE_CHECK mask=MAY_READ uid=0 
measure func=MODULE_CHECK 
measure func=FIRMWARE_CHECK
```

The IMA policy for the `ima_policy=tcb_appraise` startup parameter is as follows:

```
# PROC_SUPER_MAGIC = 0x9fa0
dont_appraise fsmagic=0x9fa0
# SYSFS_MAGIC = 0x62656572
dont_appraise fsmagic=0x62656572
# DEBUGFS_MAGIC = 0x64626720 
dont_appraise fsmagic=0x64626720 
# TMPFS_MAGIC = 0x01021994
dont_appraise fsmagic=0x1021994
# RAMFS_MAGIC
dont_appraise fsmagic=0x858458f6 
# DEVPTS_SUPER_MAGIC=0x1cd1
dont_appraise fsmagic=0x1cd1
# BINFMTFS_MAGIC=0x42494e4d
dont_appraise fsmagic=0x42494e4d 
# SECURITYFS_MAGIC=0x73636673
dont_appraise fsmagic=0x73636673
# SELINUX_MAGIC=0xf97cff8c
dont_appraise fsmagic=0xf97cff8c 
# SMACK_MAGIC=0x43415d53
dont_appraise fsmagic=0x43415d53 
# NSFS_MAGIC=0x6e736673
dont_appraise fsmagic=0x6e736673 
# CGROUP_SUPER_MAGIC=0x27e0eb
dont_appraise fsmagic=0x27e0eb 
# CGROUP2_SUPER_MAGIC=0x63677270
dont_appraise fsmagic=0x63677270 
appraise fowner=0
```

The IMA policy for the `ima_policy=secure_boot` startup parameter is as follows:

```
appraise func=MODULE_CHECK appraise_type=imasig 
appraise func=FIRMWARE_CHECK appraise_type=imasig 
appraise func=KEXEC_KERNEL_CHECK appraise_type=imasig 
appraise func=POLICY_CHECK appraise_type=imasig
```

#### IMA Digest List Startup Parameters

The kernel startup parameters added to the IMA digest list feature are as follows:

| Parameter                | Value                   | Description                                                  |
| ------------------------ | ----------------------- | ------------------------------------------------------------ |
| integrity                | 0                       | Disables the IMA feature (by default)                        |
|                          | 1                       | Enables the IMA feature                                      |
| ima_appraise             | off                     | Disables the IMA appraisal mode                              |
|                          | enforce-evm             | Enables the IMA appraisal forced mode to perform the integrity check when the file is accessed and control the access. |
| ima_appraise_digest_list | digest                  | When the EVM is disabled, the abstract list is used for IMA appraise. The abstract list protects both the content and extended attributes of the file. |
|                          | digest-nometadata       | If the EVM digest value does not exist, the integrity check is performed only based on the IMA digest value (the file extended attribute is not protected). |
| evm                      | fix                     | Allows for any modification to the extended attribute (even if the modification causes the failure to verify the integrity of the extended attribute). |
|                          | ignore                  | Allowed to modify the extended attribute only when it does not exist or is incorrect. |
| ima_policy               | exec_tcb                | IMA measurement policy. For details, see the following policy description. |
|                          | appraise_exec_tcb       | IMA appraisal policy. For details, see the following policy description. |
|                          | appraise_exec_immutable | IMA appraisal policy. For details, see the following policy description. |
| ima_digest_list_pcr      | 11                      | Uses PCR 11 instead of PCR 10, and uses only the digest list for measurement. |
|                          | +11                     | The PCR 10 measurement is reserved. When the TPM chip is available, the measurement result is written to the TPM chip. |
| initramtmpfs             | None                    | Adds the support for **tmpfs**.                              |



The IMA policy for the `ima_policy=exec_tcb` startup parameter is as follows:

```
dont_measure fsmagic=0x9fa0 
dont_measure fsmagic=0x62656572 
dont_measure fsmagic=0x64626720 
dont_measure fsmagic=0x1cd1 
dont_measure fsmagic=0x42494e4d 
dont_measure fsmagic=0x73636673 
dont_measure fsmagic=0xf97cff8c 
dont_measure fsmagic=0x43415d53 
dont_measure fsmagic=0x27e0eb 
dont_measure fsmagic=0x63677270 
dont_measure fsmagic=0x6e736673 
measure func=MMAP_CHECK mask=MAY_EXEC 
measure func=BPRM_CHECK mask=MAY_EXEC 
measure func=MODULE_CHECK 
measure func=FIRMWARE_CHECK 
measure func=POLICY_CHECK 
measure func=DIGEST_LIST_CHECK 
measure parser
```

The IMA policy for the `ima_policy=appraise_exec_tcb` startup parameter is as follows:

```
appraise func=MODULE_CHECK appraise_type=imasig 
appraise func=FIRMWARE_CHECK appraise_type=imasig 
appraise func=KEXEC_KERNEL_CHECK appraise_type=imasig 
appraise func=POLICY_CHECK appraise_type=imasig 
appraise func=DIGEST_LIST_CHECK appraise_type=imasig 
dont_appraise fsmagic=0x9fa0 
dont_appraise fsmagic=0x62656572 
dont_appraise fsmagic=0x64626720 
dont_appraise fsmagic=0x858458f6 
dont_appraise fsmagic=0x1cd1 
dont_appraise fsmagic=0x42494e4d 
dont_appraise fsmagic=0x73636673 
dont_appraise fsmagic=0xf97cff8c 
dont_appraise fsmagic=0x43415d53 
dont_appraise fsmagic=0x6e736673 
dont_appraise fsmagic=0x27e0eb 
dont_appraise fsmagic=0x63677270
```

The IMA policy for the `ima_policy=appraise_exec_immutable` startup parameter is as follows:

```
appraise func=BPRM_CHECK appraise_type=imasig appraise_type=meta_immutable 
appraise func=MMAP_CHECK 
appraise parser appraise_type=imasig
```

#### IMA Kernel Compilation Options

The native IMA provides the following compilation options:

| Compilation Option               | Description                                             |
| -------------------------------- | ------------------------------------------------------- |
| CONFIG_INTEGRITY                 | IMA/EVM compilation switch                              |
| CONFIG_INTEGRITY_SIGNATURE       | Enables IMA signature verification                      |
| CONFIG_INTEGRITY_ASYMMETRIC_KEYS | Enables IMA asymmetric signature verification           |
| CONFIG_INTEGRITY_TRUSTED_KEYRING | Enables IMA/EVM key ring                                |
| CONFIG_INTEGRITY_AUDIT           | Compiles the IMA audit module                           |
| CONFIG_IMA                       | IMA compilation switch                                  |
| CONFIG_IMA_WRITE_POLICY          | Allows updating the IMA policy in the running phase     |
| CONFIG_IMA_MEASURE_PCR_IDX       | Allows specifying the PCR number of the IMA measurement |
| CONFIG_IMA_LSM_RULES             | Allows configuring LSM rules                            |
| CONFIG_IMA_APPRAISE              | IMA appraisal compilation switch                        |
| IMA_APPRAISE_BOOTPARAM           | Enables IMA appraisal startup parameters                |
| CONFIG_EVM                       | EVM compilation switch                                  |

The additional compilation options provided by the IMA Digest Lists extension are as follows:

| Compilation Option | Description                         |
| ------------------ | ----------------------------------- |
| CONFIG_DIGEST_LIST | Enables the IMA Digest List feature |

#### IMA Performance Reference Data

The following figure compares the performance when IMA is disabled, native IMA is enabled, and IMA digest list is enabled.

![img](./figures/ima_performance.png)