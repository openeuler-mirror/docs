# **x2openEuler User Guide**

## Disclaimer

Updated on: October 28, 2021

```
To prevent impact on services in the production environment, it is recommended that you use this tool in a non-production environment.
Before uploading and viewing the source code, ensure that you are the source code owner or have obtained full authorization and consent from the source code owner.
No individual or organization shall use the source code for any purpose without the authorization of the source code owner. Huawei is not liable for any consequences and bears no legal liabilities. Huawei reserves the right to pursue legal actions if necessary.
No individual or organization shall spread the source code without the authorization of the source code owner. Huawei is not liable for any consequences and bears no legal liabilities. Huawei reserves the right to pursue legal actions if necessary.
The source code and related information, such as the porting report, precheck report, and porting suggestions, are for reference only and do not have legal effect or constitute specific guidelines or legal suggestions of any kind.
Unless otherwise specified in laws and regulations or contracts, Huawei does not make any express or implied statement or warranty on the porting suggestions or related content, or make any warranty or commitment on the marketability, satisfaction, non-infringement, or applicability of the porting suggestions or related content for specific purposes.
You shall bear all risks arising from your use of the porting suggestions and related content. Huawei is not liable for any damage or loss of any nature in any case.
If you click OK, the source code will be uploaded to the working directory of the current server for source code scan and analysis. This tool does not use the source code for any other purposes. Users who log in to the same server using other user names do not have the permission to view the code in your working directory.
```

## 0. Introduction

x2openEuler assesses software porting from CentOS 7.6 (CentOS 8.2 and CentOS 6.8) to openEuler 20.03 LTS SP1, covering software, configurations, and hardware. The tool analyzes the dependent RPM packages to be introduced and the function prototypes in the dependent RPM packages to be modified, helping users analyze the modification impact, identify system configuration differences, and check whether related hardware is in the compatibility list.

**Function:** Analyzes the software packages to be ported (currently, binary executable files and dynamic shared object (SO) libraries are supported), searches for the directly dependent source code, and analyzes the differences in dependent RPM packages, SO libraries contained in the RPM packages, and code provided by the SO libraries, and provides porting suggestions.

**Application scenarios:** When a user's software packages are ported to openEuler 20.03 LTS SP1, x2openEuler analyzes the dependent RPM packages to be introduced and the specific functions in the dependent RPM package to be modified, and provides modification suggestions.

**Precautions:** x2openEuler invokes binary file check commands such as `readelf` to query dynamic link library (DLL) information for more accurate analysis of software package dependencies. However, the tool will never peer into users' private data.

## 1. Operating Environment

### 1.1. Dependent Components

| Component| Description| How to Obtain|
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CentOS  | x2openEuler operating environment, where the target software packages (binary executable files and dynamic SO libraries) run. Only CentOS 7.6 and CentOS 8.2 are supported.| The Linux environment is prepared by the user.|
| python3 | Python 3.7| Run the `python3 --version` command to query the version. If the command does not exist, install Python 3. If the version does not match, install the matching version. For details about how to install Python in CentOS 6.8, see chapter 7.|
| jar     | Used to decompress JAR files.| If the command does not exist, run the `yum search openjdk-devel` command to search for and install a proper version (later than or equal to 1.7), for example, **java-1.8.0-openjdk-devel**.|
| sqlite  | v3.7.17 or later| Built in the system.|
| redis   | v4.0.11 or later| Run `yum install redis`. If a message is displayed indicating that no software package is available, run `yum install epel-release` first.|

### 1.2. Required Resources

Ensure that the specifications of the VM or physical machine are **greater than or equal to 2 CPUs and 8 GB memory**. Before running x2openEuler analysis, you are advised to restart the VM to ensure that the available memory is sufficient. It is recommended that **at least 20 GB** (depending on the number of RPM packages to be scanned) of drive space be available in the directory where x2openEuler is located.

| Analysis Item| CPU Usage| Running Duration| Output File Size|
| -------------------- | --------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Analyzing a single RPM package| 2 cores, 100% peak CPU usage| 2 to 15 minutes to scan an RPM package| The drive space occupied temporarily by intermediate files depends on the size of the software to be scanned. An HTML UI output file is about 1 MB to 5 MB.|
| Analyzing a collection of single binary packages| 2 cores, 100% peak CPU usage| 10 minutes to scan a collection of single binary packages (depending on the total scan duration of RPM packages)| An HTML UI output file is about 1 MB to 5 MB.|
| Collecting and analyzing user configuration information| 2 cores, 100% peak CPU usage| 1 to 5 minutes to collect configuration information| About 200 MB drive space is occupied temporarily by intermediate files. An HTML UI output file is about 1 MB to 5 MB.|

### 1.3. Network Requirements

x2openEuler can **run offline** without network connection, except when installing required components.

## 2. Software Directory Structure

The following lists only the main (user-related) directory structure.
```
├── config
│   └── conf.ini      // Software configuration file
├── README.md       // Software user guide
├── requirement.txt   //Software dependencies
├── update          // x2openEuler update directory (empty by default)
├── sqlite         // Database
├── log             // Log directory
├── output          // Location of the tool report and data output (empty by default)
├── data           // Directory for storing temporary intermediate files
├── sha256sum.txt  // Checksum value of the data file
├── Version        // Tool version
└── x2openEuler.pyc  // Software entry file
```

## 3. Major Functions

x2openEuler scans and assesses application software, environment configurations, and hardware configurations.

### 3.1. Application Scan and Assessment

1. Scans and assesses the RPM packages of the software to be ported from CentOS 7.6 (CentOS 8.2 and CentOS 6.8).
2. Scans and assesses the binary packages of the software to be ported from CentOS 7.6 (CentOS 8.2 and CentOS 6.8).
3. Scans and assesses TAR, GZIP, ZIP, JAR, PY, and PYC files to be ported from CentOS 7.6 (CentOS 8.2 and CentOS 6.8).

### 3.2. User Environment Data Collection and Assessment

Collects user environment data and generates JSON files. The following items can be collected.
| No.| Item| Interface Category| JSON File|
| ---- | ----------------------------- | --------------------- | -------------------------- |
| 1    | Hardware configurations| x86/AArch64/card information| hardware_configure.json    |
| 2    | Configuration interfaces| Kernel startup parameter| kernel_startup_param.json  |
| 3    | Kernel option configurations| Static information| kernel_configure.json      |
| 4    | System configurations (sysctl/proc/sys)| Dynamic information| system_configure.json      |
| 5    | Environment variables| PATH variable information| path.json                  |
| 6    | Services| System service| system_service.json        |
| 7    | Processes| Dynamic information| proc.json                  |
| 8    | Ports| Dynamic information| port.json                  |
| 9    | Command interfaces| Linux command| linux_command.json         |
| 10   | System calls| System call interface| syscall_interface.json     |
| 11   | Device driver interfaces| User-mode device interface| device_interface.json      |
> The collected data is saved in JSON files to the specified folder for further analysis. In addition, the hardware compatibility is assessed and an HTML report is provided.

## 4. Download, Installation, and Deployment

### 4.1. Tool Download and Integrity Verification

1. The software downloaded from [Huawei Support](https://support.huawei.com/supportindex/index) contains the PGPVerify link, which provides the **KEYS.txt**, **KEYS4096.txt**, **OpenPGP Signature Verification Guide.pdf**, and **VerificationTools.zip** files.
2. Verify the integrity of the downloaded software package according to **OpenPGP Signature Verification Guide.pdf**.

### 4.2. Common User Account Creation

Before using the x2openEuler tool, you are advised to create a common user account (if the **root** user is used, skip this section) and run the tool using the new account. The following uses **<user>** as an example user name. To ensure that a common user account can collect all configurations, privilege escalation is required for some commands. Run the following command as the **root** user to open the **/etc/sudoers** file:

```bash
visudo
```

Add the following content after the **## Allow root to run any commands anywhere** comment:
```
## Allow root to run any commands anywhere
<user> ALL=(root) NOPASSWD: /bin/cat /boot/grub2/grub.cfg
<user> ALL=(root) NOPASSWD: /usr/sbin/lspci -nvvv
<user> ALL=(root) NOPASSWD: /usr/sbin/lspci -xxx
<user> ALL=(root) NOPASSWD: /bin/netstat -npl
<user> ALL=(root) NOPASSWD: /usr/sbin/sysctl -a
<user> ALL=(root) NOPASSWD: /usr/sbin/dmidecode -t bios -t system -t baseboard -t chassis -t processor -t memory -t cache -t connector -t slot
```
Save the settings and exit.

### 4.3. Software Installation

Decompress the TAR file. (**The decompression and subsequent scan and analysis must be performed using the same user.**)
```
tar -xpf x2openEuler.tar.gz
```

#### 4.3.1. Built-in Dependency Installation

After decompressing the TAR file, go to the root directory and run the following command to install the dependencies required by the software.
Assume that the directory for decompression is **/home/<user>/x2openEuler/**.

```
pip3 install -r requirement.txt
```
x2openEuler 2.0 and later support multi-system scan and use Redis to manage multi-system static resource files. Before using this tool, install the Redis database online using Yum.

```
yum install redis
```

Start Redis.
```
systemctl start redis
```

#### 4.3.2. Initialization
- Redis database initialization


Before using the tool for the first time, configure the Redis settings.
Run the `python3 x2openEuler.pyc redis-db -init` command and enter the IP address, port number, database index (0-16), and password of the Redis database in sequence. The tool encrypts the password.

The following is an example of the settings:

Please enter the IP address of redis: 127.0.0.1

Please enter the port of redis: 6379

Please enter the database index of redis(from 0 to 16): 0

Please enter the password of redis: 


If the Redis password is not set or is empty, press **Enter**.

- Environment check


During the environment check, x2openEuler will call some system commands. Ensure that the packages on which those commands depend have been installed in the system.
| No.| Required Command| Installation Command|
| ---- | --------- | ---------------------- |
| 1    | netstat   | yum install net-tools  |
| 2    | lspci     | yum install pciutils   |
| 3    | systemctl | yum install systemd    |
| 4    | dmidecode | yum install dmidecode  |
| 5    | lscpu     | yum install util-linux |
| 6    | bzip2     | yum install bzip2      |

- Resource package import


Resource packages of multiple systems are required for multi-system scan. For example, to import the static resource package **source_centos7.6-openEuler20.03-LTS-SP1.tar.gz**, run the following command.

Command:

```
python3 x2openEuler.pyc init <source>
```

Example:

```
python3 x2openEuler.pyc init source_centos7.6-openEuler20.03-LTS-SP1.tar.gz
```

> To assess software porting from CentOS 8.2 to openEuler 20.03 LTS SP1, you need to obtain and import the required static resource package. For example, if the resource package is **source_centos8.2-openEuler20.03-LTS-SP1.tar.gz**, run the `python3 x2openEuler.pyc init source_centos8.2-openEuler20.03-LTS-SP1.tar.gz` command to import the package.

The subsequent commands can be executed only after x2openEuler is initialized. Otherwise, the following error message is displayed:

```
Please execute "python3 x2openeuler.pyc init" first to complete the environment check
```

### 4.4. Software Configuration

#### 4.4.1. Main Configuration File

The software configuration file is **/home/<user>/x2openEuler/config/conf.ini**. Generally, you can retain the default settings.

#### 4.4.2. Configuration File for Collecting User Environment Data
The configuration file for collecting user environment data is **/home/<user>/x2openEuler/config/parser/beat.json**. For details about the default collection items, see section 3.2. You are advised *not** to modify the settings unless necessary.
**Currently, three types of data collection are supported.**

- `globs`: collects information from the files specified with the Linux wildcard `*`.
- `files`: collects information from specified files.
- `commands`: executes specified commands.

**Field description:**

- `glob/command/file` (mandatory): indicates the files to be collected or the commands to be executed.
- `symbolic_name` (mandatory): indicates the ID of a collection item.
- `log_type` (mandatory): specifies the parser for the collection item. The value can be `config` (key-value pair), `log`, `table`, `list` (file list), and `content` (raw content). If there are multiple content blocks, you need to specify the same number of parsers in a list, for example, `['log', 'config']`.
- `regex_pattern`: indicates the regular expression specified for parsing the collection item. For details about the syntax, see the Grok regular expression. If no regular expression is specified, the matched regular expression is searched from the regular expression library. If there are multiple content blocks, the data type must be list.
- `multiline_begin_list`: indicates that the data type is list. It is used together with `log_type` when multiple `log_type` values are specified to extract multiple blocks of content. The main functions of this field are as follows:
   - When `log_type` is `log`, it specifies the start of multiple lines of logs for match.
   - When partial content is to be extracted, if the `head` field exists, it specifies the start of the content for match in the content block, and `head` indicates the key of the content block. If the `head` field does not exist, it indicates the key of the content block for match.

- `multiline_end_list`: used together with `multiline_begin_list`. If its value matches with the start of a new content block, the extracted content is `[begin, end-1]`. If no matching item is found, the extracted content is `[begin, end]`.
- `head`: The data type is list. It is used together with `multiline_begin\end_list`, indicating the key of the specified content block.
- `content_type`: indicates the type of the collection item. The `beat.json` file provided by the software prevails. You can modify it as required.

## 5. Usage Instructions

You can run `--help | -h` to view the help information.
```
python3 x2openEuler.pyc [--help | -h]
python3 x2openEuler.pyc <subcommand> --help | -h
```

- Subcommands: scan | conf-collect | conf-analyse | update | init

### 5.1. Software Assessment

x2openEuler can scan only a single application, and requires the read permission on the scanned files.

The `scan` command is used with the following options:

- `-os_name`: indicates the original OS. The default value is `centos7.6`.
- `-target_os_name`: indicates the target OS. The default value is `openEuler20.03-LTS-SP1`.
- `-arch`: indicates the system architecture. The default value is `x86_64`. (**Note**: Currently, CentOS 6.8 supports only the x86_64 architecture.)
- `-single`: indicates a single application with multiple packages. Enter a directory that contains multiple RPM packages.
- `-batch`: indicates batch scan. Enter a directory that contains multiple binary files.

#### 5.1.1. Single Application Scan and Assessment

Go to the **/home/<user>/x2openEuler/** directory.
```
python3 x2openEuler.pyc scan [-arch {x86_64,aarch64}] [-os_name OS_NAME] [-target_os_name TARGET_OS_NAME] <file>
```
- `arch`: The value can be `x86_64` or `aarch64`. The default value is `x86_64`.
- `os_name`: indicates the original OS. The default value is `centos7.6`.
- `target_os_name`: indicates the target OS. The default value is `openEuler20.03-LTS-SP1`.
- `file`: indicates the directory or a single RPM package to be scanned. Currently, TAR, ZIP, GZIP, JAR, PY, and PYC files can be directly scanned.

Examples:

1) Scan the Git software for assessing compatibility from CentOS 8.2 to openEuler 20.03 LTS SP1.
```
python3 x2openEuler.pyc scan ../git-2.27.0-1.el8.x86_64.rpm -os_name centos8.2
```

2) Scan the **/home/<user>/app** directory as an application that is to be ported from CentOS 7.6 to openEuler 20.03 LTS SP1 on AArch64.
```
python3 x2openEuler.pyc scan -arch aarch64 /home/<user>/app
```

3) To scan a single binary file, place the binary file in an empty directory, and scan the directory as described in 2.

#### 5.1.2. Multi-Package Application Scan and Assessment

**Function:** Generate a report for a piece of software that contains multiple software packages (only RPM packages or both RPM and tar.gz packages).

Go to the **/home/<user>/x2openEuler/** directory and run the following command:
```
python3 x2openEuler.pyc scan -single [-arch {x86_64,aarch64}] [-os_name OS_NAME] [-target_os_name TARGET_OS_NAME] <directory>
```
- `single`: indicates a single application with multiple packages.
- `directory`: indicates the directory to be scanned. (Nested directories are not supported.)
- For details about the rest options, see the above description.

Example:

Scan multiple packages of a single application in the **/home/<user>/app** directory:
```
python3 x2openEuler.pyc scan -single /home/<user>/app
```

#### 5.1.3. Batch Binary File Scan

Go to the **/home/<user>/x2openEuler/* directory and run the following command:
```
python3 x2openEuler.pyc scan -batch [-arch {x86_64,aarch64}] [-os_name OS_NAME] [-target_os_name TARGET_OS_NAME] <directory>
```
- `batch`: batch scans binary files.
- `directory`: indicates the directory to be scanned. (Nested directories are not supported.)
- For details about the rest options, see the above description.

Example:

Batch scan the binary files in the `/home/<user>/app` directory.
```
python3 x2openEuler.pyc scan -batch /home/<user>/app
```

#### 5.1.4. Assessment Report Generation and Viewing

The assessment report is in HTML format and needs to be opened using a browser (Google Chrome is recommended because errors may occur in Internet Explorer). The report is saved in the following directory:
```
...
...
The report are saved: /xxx/x2openEuler/output/git-2.27.0-20210603224155.html
```

**The report are saved:** _path_to_the_HTML_report_

### 5.2. Environment Configuration Collection and Assessment

#### 5.2.1.  User Environment Data Collection and Assessment

x2openEuler can automatically identify the architecture of the current server environment and collect configuration information from the user environment for analysis and assessment.
1. Collecting and analyzing local environment information
2. Collecting data without analyzing it and exporting the collected data package
3. Importing other user environment information data packages collected by x2openEuler for analysis

#### 5.2.2. Environment Information Analysis

Generally, you can run the following command to analyze and assess the local environment information:
```
python3 x2openEuler.pyc conf-analyse [-os_name OS_NAME] [-target_os_name TARGET_OS_NAME] [-local]
```
- `conf-analyse`: indicates the configuration analysis function.
- `os_name`: indicates the original OS. The default value is `centos7.6`.
- `target_os_name`: indicates the target OS. The default value is `openEuler20.03-LTS-SP1`.
- `local`: indicates that the data to be analyzed is the data generated by local scan. If `local` or `load` is not specified, the default action is performed.

Example:

Analyze the data generated during local scan.
```
python3 x2openEuler.pyc conf-analyse -local
Or
python3 x2openEuler.pyc conf-analyse
```

**Note:** During the analysis, message **No such file or directory** may be output. This is normal during configuration information collection.

#### 5.2.3. Environment Information Collection and Export

If you only need to collect information without analyzing it, run the following command:
```
python3 x2openEuler.pyc conf-collect 
```
- `conf-collect`: indicates the configuration collection function.
The output path is the **output** folder in the software root directory. As shown in the following, the resource package is in the **sysconf-timestamp.tar.gz** format.
```
The system configs are saved: /root/x2openEuler/output/sysconf-20210603213537.tar.gz
```

#### 5.2.4. Environment Information Import and Analysis

If you want to import the environment information resource package collected by the previous function for analysis, run the following command:
```
python3 x2openEuler.pyc conf-analyse -load <resource_package_path> [-arch {x86_64,aarch64}]
```
- `conf-analyse`: indicates the configuration analysis function.
- `load`: imports the tar.gz configuration resource package to be analyzed. This option and the `local` option are mutually exclusive.
- `arch`: The value can be `x86_64` or `aarch64`. The default value is `x86_64`.

Example:

```
[x2openEuler]# python3 x2openEuler.pyc conf-analyse -load ./output/sysconf-20210603213537.tar.gz 
The report are saved: /xx/x2openEuler/output/hw-compat-report-20210603214256.html
The report are saved: /xx/x2openEuler/output/conf_info_report-20210603214256.html
```

#### 5.2.5. Environment Information Report Generation and Viewing

**This step must be performed on the CentOS system.**

After `conf-analyse` is executed, x2openEuler generates environment information reports.
The assessment report is in HTML format and needs to be opened using a browser (Google Chrome is recommended because errors may occur in Internet Explorer). The reports are saved in the following directories:

- `The report is saved:` _path_to_the_HTML_report_
- `conf_info_report-xxx:` _path_to_the_HTML report_of_the_configuration_information_. It provides the configuration compatibility information between the current OS and openEuler 20.03 LTS SP1.
```
The report are saved: /root/x2openEuler/output/conf_info_report-20210603214855.html
```

### 5.3. Hardware Configuration Assessment

#### 5.3.1. Environment Information Report Generation and Viewing

**You are advised to perform this step on a physical machine.**

After `hardware-analyse` is executed, x2openEuler generates environment information reports.
The assessment report is in HTML format and needs to be opened using a browser. The reports are saved in the following directories:

- `The report is saved:` _path_to_the_HTML_report_
- `hw_compat_report-xxx:` _path_to_the_HTML_report_of_the_hardware_card_information_. It provides the card compatibility information.

```
The report are saved: /root/x2openEuler/output/hw_compat_report-20210603214855.html
```

### 5.4. Software Update

x2openEuler supports offline data update, which is used to upgrade the x2openEuler database offline and extend functions.

#### 5.4.1. Data File Preparation

Obtain the following two files from the official website:
- **xxx.tar.gz**: software upgrade package.
- **license**: the **license** text file corresponding to the `xxx.tar.gz` update package, used to verify the integrity.
Copy the preceding two files to the **/opt/x2openEuler/update** directory.
```
[x2openEuler/update]# ls -l
total 49M
-rw-r--r--. 1 root root 49M Jun  1 20:20 update.tar.gz
-rw-r--r--. 1 root root  98 Jun  1 20:31 license
```
**Note:** The directory contains **only** the update package and the required license file. If multiple updates are required, clear the **update** directory before each update, and then place the new update package and the required license file in the directory.

#### 5.4.2. Software Update

After placing the preceding files in the **update** directory, run the following command in the root directory of x2openEuler:
```
python3 x2openEuler.pyc update
```
A successful update is as follows:
```
[x2openEuler]# python3 x2openEuler.pyc update
Decompressing ...
Processing ...
Update data successfully!
```

#### 5.4.3. Errors That May Occur During Software Update

If any file is missing or redundant files exist in the **update** directory, the following error is reported. In this case, delete the redundant files or add the missing file.
```
Necessary file missing, please check and try again!
Please delete any unnecessary files from update
```

If the update package does not match the license in the **update** directory, the following error is reported. Check whether the update package and license are obtained from the official website.
```
Verification failed for resource data file, please check and try again!
```

## 6. Software Uninstallation and Environment Cleanup

After viewing and backing up the reports, delete the created user account **<user>** and clear the temporary data directory **/home/<user>/x2openEuler/**.

## 7. Troubleshooting

### 7.1. Page Not Properly Displayed

You are advised to use Google Chrome because incompatibility issues may occur in Internet Explorer.
