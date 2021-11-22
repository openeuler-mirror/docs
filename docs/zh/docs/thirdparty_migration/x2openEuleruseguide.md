**x2openEuler使用指南**

## 免责声明

更新时间：2021/10/28

```
建议您在非生产环境使用本工具，避免影响生产业务运行。
您上传及查阅源码前已确认您为源码所有者或者已获得源码所有者的充足授权同意。
未经所有者授权，任何个人或组织均不得使用该源码从事任何活动。华为公司不对由此造成的一切后果负责，亦不承担任何法律责任。必要时，将追究其法律责任。
未经所有者授权，任何个人或组织均不得私自传播该源码。华为公司不对由此造成的一切后果负责，亦不承担任何法律责任。必要时，将追究其法律责任。
该源码及相关迁移报告、预检报告、迁移建议等，仅做查阅参考，不具有法律效力，也不以任何方式或形式构成特定指引和法律建议。
除非法律法规或双方合同另有规定，华为对本迁移建议及相关内容不做任何明示或暗示的声明或保证，不对本迁移建议及相关内容的适销性、满意度、非侵权性或特定用途适用性等做出任何保证或承诺。
您根据本迁移建议及相关内容所采取的任何行为均由您自行承担风险，华为在任何情况下均不对任何性质的损害或损失负责。
点击确认将上传源码至当前服务器工作目录下，用于源码扫描分析。本工具不会将这些源码用于其他目的，通过其他用户名登录同一台服务器的用户无权查看您工作目录的代码。
```

## 0. 工具说明

提供用户软件从CentOS7.6（CentOS8.2、CentOS6.8）向openEuler20.03 LTS SP1系统的迁移评估，评估功能包括软件评估、配置评估和硬件评估，客户的软件包需要从CentOS7.6（CentOS8.2、CentOS6.8）移植到openEuler 20.03 LTS SP1系统上时，可用本软件x2openEuler工具分析出需要引入的依赖rpm包，需要修改的依赖rpm包中的具体函数原型声明，协助用户进行修改影响分析，识别出系统配置差异，相关硬件是否在兼容性清单中，给客户提供指引。

**功能：** 分析准备迁移的软件包（当前支持二进制可执行文件、动态so库文件），寻找对应源码(直接依赖的源码)，分析给出从CentOS7.6（CentOS8.2、CentOS6.8）往openEuler 20.03 LTS SP1迁移时，直接依赖包rpm差异、rpm中包含的so库差异、和so库对外提供的代码级别的差异，给出移植的指导意见。

**应用场景：** 客户的软件包移植到openEuler 20.03 LTS SP1系统上时，可用该x2openEuler工具分析出需要引入的依赖rpm包，需要修改的依赖rpm包中的具体函数，并给出修改指导意见。

**注意事项：** x2openEuler会调用`readelf`等二进制文件检查命令，主要用于查询动态链接库等信息用于更精确的分析出软件包的依赖关系，但工具绝对不会嗅探用户隐私数据，请放心使用！

## 1. 运行环境

### 1.1. x2openEuler运行环境依赖组件

| 组件    | 组件描述                                                     | 可获得性                                                     |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CentOS  | x2openEuler软件的运行系统环境（目前仅支持CentOS7.6、CentOS8.2）安装运行，该环境中可以运行目标软件包（二进制可执行文件、动态so库文件） | 客户自备linux环境                                            |
| python3 | python3.7（3.7，两位版本号需保持一致）                       | 可先通过`python3 --version`命令查看，若无该命令则安装python3, 若版本不匹配则安装匹配的版本，对于CentOS6.8安装方法请参见第7章 |
| jar     | 用于对jar包进行解压                                          | 若无该命令，可先通过`yum search openjdk-devel`查找，然后安装合适的版本(>=1.7)，如：java-1.8.0-openjdk-devel |
| sqlite  | v3.7.17 及以上版本                                           | 系统自带                                                     |
| redis   | 建议v4.0.11及以上版本                                        | `yum install redis` (若提示没有可用的软件包，先执行 `yum install epel-release`) |

### 1.2. x2openEuler理论运行资源

在运行x2openEuler分析之前，确保虚拟机或物理机的运行规格**大于等于2U8G**，运行前建议重启虚拟机，保证空闲内存足够，建议x2openEuler所在目录空闲磁盘至少**保留20GB**（具体以实际扫描rpm包数量为准）

| 任务分析项           | CPU资源消耗     | 运行耗时                                                          | 输出件大小                                                                        |
| -------------------- | --------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 单rpm包分析          | 2核心，峰值100% | 每个rpm耗时2-15分钟                                               | 中间件临时空间占用磁盘以具体扫描软件大小为准， html形式用户交互界面输出件1~5M左右 |
| 单二进制包集合分析   | 2核心，峰值100% | 单二进制包集合总体耗时10分钟（具体以每个单rpm包扫描时间合计为准） | html形式用户交互界面输出件1~5M左右                                                |
| 用户配置信息收集分析 | 2核心，峰值100% | 收集配置信息总体耗时1-5分钟                                       | 中间临时占用磁盘约200MB ，html形式用户交互界面输出件1~5M左右                      |

### 1.3. x2openEuler网络需求

除了相关组件安装，x2openEuler**可完全离线运行**，无需连接网络

## 2. 软件目录结构

这里仅列出主要（用户相关）的目录结构
```
├── config
│   └── conf.ini      // 本软件配置文件
├── README.md        // 本软件用户指南
├── requirement.txt   // 本软件安装依赖
├── update           // x2openEuler升级目录（默认为空）
├── sqlite          // 数据库
├── log             // 日志目录
├── output          // 工具报告及数据输出的位置（默认为空）
├── data           // 临时中间件存放目录
├── sha256sum.txt  // 数据文件校验值
├── Version        // 工具版本信息
└── x2openEuler.pyc  // 本软件执行入口文件
```

## 3. 主要功能介绍

x2openEuler迁移评估工具，提供对APP软件扫描评估，环境配置收集和导入，配置扫描和硬件扫描分析

### 3.1. 应用扫描与评估

1. 提供对CentOS7.6（CentOS8.2、CentOS6.8）上需要迁移的rpm软件进行评估扫描
2. 提供对CentOS7.6（CentOS8.2、CentOS6.8）上需要迁移的二进制软件进行评估扫描
3. 提供对CentOS7.6（CentOS8.2、CentOS6.8）上需要迁移的tar/gzip/zip/jar/py/pyc等文件进行评估扫描

### 3.2. 用户环境数据收集与评估

支持对用户环境数据进行收集并生成json格式文件，支持的收集项如下
| 序号 | 采集大项                      | 接口分类              | 对应json文件               |
| ---- | ----------------------------- | --------------------- | -------------------------- |
| 1    | 硬件配置                      | X86/aarch64/ 板卡信息 | hardware_configure.json    |
| 2    | 配置接口                      | 内核启动参数          | kernel_startup_param.json  |
| 3    | 内核选项配置参数              | 静态信息              | kernel_configure.json      |
| 4    | 系统配置参数(sysctl/proc/sys) | 动态信息              | system_configure.json      |
| 5    | 环境变量                      | 变量Path信息          | path.json                  |
| 6    | 服务                          | 系统服务              | system_service.json        |
| 7    | 进程                          | 动态信息              | proc.json                  |
| 8    | 端口                          | 动态信息              | port.json                  |
| 9    | 命令接口                      | Linux 命令            | linux_command.json         |
| 10   | 系统调用                      | 提供系统调用接口      | syscall_interface.json     |
| 11   | 设备驱动接口                  | 用户态提供设备接口    | device_interface.json      |
> 收集的结果以json格式分类保存到用户指定的文件夹中，供下一步分析，同时会对硬件兼容性进行评估，提供html报告

## 4. x2openEuler下载安装与部署

### 4.1. 工具下载及完整性验证

1. 从`support.huawei.com`上下载的软件版本中，均会附带PGP Verify链接，提供该软件版本的KEYS.txt、KEYS4096.txt、OpenPGP签名验证指南.pdf、VerificationTools.zip文件
2. 请用户按照OpenPGP签名验证指南.pdf对所下载的软件进行资料包完整性校验

### 4.2. 创建一个普通用户账号

在使用x2openEuler工具前，**建议**创建一个普通用户账号（如果在root用户下运行，请跳过本章节内容），在新建的账号下运行本工具，举例用户名为`<user>`。为了确保用户能在普通用户下采集配置能尽可能全面，需要对部分命令进行提权操作，在root权限下执行命令，对`/etc/sudoers`文件进行修改：

```bash
visudo
```

打开文件后，在注释`## Allow root to run any commands anywhere`之后添加如下内容：
```
## Allow root to run any commands anywhere
<user> ALL=(root) NOPASSWD: /bin/cat /boot/grub2/grub.cfg
<user> ALL=(root) NOPASSWD: /usr/sbin/lspci -nvvv
<user> ALL=(root) NOPASSWD: /usr/sbin/lspci -xxx
<user> ALL=(root) NOPASSWD: /bin/netstat -npl
<user> ALL=(root) NOPASSWD: /usr/sbin/sysctl -a
<user> ALL=(root) NOPASSWD: /usr/sbin/dmidecode -t bios -t system -t baseboard -t chassis -t processor -t memory -t cache -t connector -t slot
```
最后保存退出。

### 4.3. 软件安装

解开压缩后的tar包（**解压和后续扫描分析等操作请务必在同一个用户环境下进行**）:
```
tar -xpf x2openEuler.tar.gz
```

#### 4.3.1. 自带依赖安装

解开tar包后，进入根目录执行以下命令安装本软件所需依赖
举例当前解压目录为 `/home/<user>/x2openEuler/`

```
pip3 install -r requirement.txt
```
x2openEuler 2.0之后，支持多系统扫描支持，使用redis管理多系统静态资源文件，使用此工具之前需安装Redis数据库，可yum在线安装

```
yum install redis
```

启动：
```
systemctl start redis
```

#### 4.3.2. 工具初始化
```redis数据库初始化配置```

首次使用工具前需要录入redis配置
使用命令```python3 x2openEuler.pyc redis-db -init```依次录入redis数据库的ip、端口、数据库索引号（0-16）、密码（工具会对密码加密处理）

录入命令行实例如下：

Please enter the IP address of redis: 127.0.0.1

Please enter the port of redis: 6379

Please enter the database index of redis(from 0 to 16): 0

Please enter the password of redis: 


如果redis密码没有设置或者为空时，直接回车即可

```环境检查```

x2openEuler运行环境检查时会调用部分系统命令，所以需要确保这些命令所依赖的包在系统上已经安装完毕
| 序号 | 所需命令  | 安装命令               |
| ---- | --------- | ---------------------- |
| 1    | netstat   | yum install net-tools  |
| 2    | lspci     | yum install pciutils   |
| 3    | systemctl | yum install systemd    |
| 4    | dmidecode | yum install dmidecode  |
| 5    | lscpu     | yum install util-linux |
| 6    | bzip2     | yum install bzip2      |

```资源包导入```

多系统扫描支持使用多系统对应的资源包，例如导入source_centos7.6-openEuler20.03-LTS-SP1.tar.gz的静态资源包。

命令：

```
python3 x2openEuler.pyc init <source>
```

例如

```
python3 x2openEuler.pyc init source_centos7.6-openEuler20.03-LTS-SP1.tar.gz
```

> 需要支持centos8.2到openEuler20.03-LTS-SP1的评估，则需获取对应的静态资源包导入，如对应的资源包为source_centos8.2-openEuler20.03-LTS-SP1.tar.gz，导入此包命令：`python3 x2openEuler.pyc init source_centos8.2-openEuler20.03-LTS-SP1.tar.gz`

只有在x2openEuler初始化完毕后，才可执行之后的功能命令，否则会出现以下报错：

```
Please execute "python3 x2openeuler.pyc init" first to complete the environment check
```

### 4.4. 软件配置说明

#### 4.4.1. 软件主要配置文件

软件配置文件存放位置为`/home/<user>/x2openEuler/config/conf.ini`，正常无需修改使用默认即可

#### 4.4.2. 用户环境数据收集配置文件
用户环境数据收集的配置信息在`/home/<user>/x2openEuler/config/parser/beat.json`，默认收集项参考本手册3.2章节，如非必要**不建议**修改此配置。
**目前主要支持三种形式的数据采集**
- globs：表示带有linux通配符`*`的文件采集
- files：表示某指定文件的采集
- commands：表示某指定命令的执行
**具体字段含义：**
- glob/command/file（必须）
  表示所要采集的文件或所需执行的命令
- symbolic_name（必须）
  表示该采集项的标识
- log_type（必须）
  表示该采集项所指定的解析器，目前支持config（key-value）、log（日志类）、table、list（文件列表）、content（原始内容）等数据；若有多块内容，则需指定相应个数的解析器，以列表形式呈现，如`['log', 'config']`
-  regex_pattern
   表示解析该采集项所指定的正则表达式（语法请参考Grok正则），若不指定，则会在正则库里面搜索匹配的正则表达式。若有多块内容时数据类型需为list。
- multiline_begin_list
  数据类型为list，配合log_type使用，提取多块内容则需指定多个log_type，主要用途如下2个：
  （1）用于匹配log日志多行的情况，表示匹配日志的开始；
  （2）用于提取部分内容的情况，有head字段时，表示匹配该内容块的起始内容，head作为该内容块的key；无head字段时，表示匹配到该内容块的key，随后作为具体内容。
- multiline_end_list
  配合multiline_begin_list使用，表示匹配到新内容块的起始，则提取到的内容为`[begin, end-1]`的内容；若无匹配项，则提取到的内容为`[begin, end]`的内容。
- head
  数据类型为list，配合`multiline_begin\end_list`使用，表示指定内容块的key。
- content_type
  指定该采集项所属的类型
  `beat.json`最终以软件自带为准，用户如有**必要需求**可以自行修改

## 5. x2openEuler使用

可以使用`--help | -h`查看程序帮助：
```
python3 x2openEuler.pyc [--help | -h]
python3 x2openEuler.pyc <subcommand> --help | -h
```

- subcommand: scan | conf-collect | conf-analyse | update | init

### 5.1. 软件评估

x2openEuler目前只支持单个应用的扫描，且被扫描的文件必须有可读权限！

主要使用的是**scan**相关命令，参数说明如下：

- `-os_name` 表示原来的系统，默认为centos7.6
- `-target_os_name` 表示需要迁往的操作系统，默认为openEuler20.03-LTS-SP1
- `-arch` 表示系统架构，默认为x86_64（**注意**：centos6.8目前仅支持x86_64架构）
- `-single` 表示单应用多包，输入一个目录，目录下放多个rpm包
- `-batch` 表示批量扫描，输入一个目录，目录下放多个bin文件

#### 5.1.1. 单应用扫描与评估

进入`/home/<user>/x2openEuler/`目录下：
```
python3 x2openEuler.pyc scan [-arch {x86_64,aarch64}] [-os_name OS_NAME] [-target_os_name TARGET_OS_NAME] <file>
```
- arch：可选项为x86_64或aarch64，默认为x86_64
- os_name：需要迁移的操作系统，默认为centos7.6
- target_os_name：需要迁往的操作系统，默认为openEuler20.03-LTS-SP1
- file：需要扫描的目录或者具体的单个rpm包（目前还支持对tar/zip/gzip/jar/py/pyc文件作为直接输入进行扫描）

例子：

1) 以扫描git软件从centos8.2到openEuler20.03-LTS-SP1的兼容评估使用：
```
python3 x2openEuler.pyc scan ../git-2.27.0-1.el8.x86_64.rpm -os_name centos8.2
```

2) 将目录`/home/<user>/app`视为一个应用进行扫描，从centos7.6迁移至openEuler20.03-LTS-SP1且arch为aarch64：
```
python3 x2openEuler.pyc scan -arch aarch64 /home/<user>/app
```

3) 如果需要扫描单个二进制文件，请将二进制文件放到一个新建的空目录下，然后使用 2) 的扫描方式进行目录扫描。

#### 5.1.2. 单应用多包扫描与评估

**功能：** 针对一个软件含有多个软件包的情况（支持只有rpm包，也支持rpm包和tar.gz包混合场景），最后只产生一份报告。

进入`/home/<user>/x2openEuler/`目录下，执行以下命令：
```
python3 x2openEuler.pyc scan -single [-arch {x86_64,aarch64}] [-os_name OS_NAME] [-target_os_name TARGET_OS_NAME] <directory>
```
- single：指定单应用多包的情形
- directory：指定需要扫描的目录（不支持嵌套目录，只支持单层目录）
- 其余参数参上

例子：

对目录`/home/<user>/app`进行单应用多包扫描：
```
python3 x2openEuler.pyc scan -single /home/<user>/app
```

#### 5.1.3. 批量bin文件扫描

进入`/home/<user>/x2openEuler/`目录下，执行以下命令：
```
python3 x2openEuler.pyc scan -batch [-arch {x86_64,aarch64}] [-os_name OS_NAME] [-target_os_name TARGET_OS_NAME] <directory>
```
- batch：指定批量bin文件扫描的情形
- directory：指定需要扫描的路径文件夹（不支持嵌套目录，只支持单层目录）
- 其余参数参上

例子：

对目录`/home/<user>/app`进行批量bin文件扫描：
```
python3 x2openEuler.pyc scan -batch /home/<user>/app
```

#### 5.1.4. 评估报告获取与查阅

评估报告的结果是以html形式呈现，需要电脑浏览器（推荐Chrome，IE浏览器可能会出现错误）打开，报告存放位置如下：
```
...
...
The report are saved: /xxx/x2openEuler/output/git-2.27.0-20210603224155.html
```

`The report are saved: ` 紧跟着的路径是html报告。

### 5.2. 配置收集与评估

#### 5.2.1.  用户环境数据收集与评估

x2openEuler支持自动识别当前服务器环境的架构，同时从用户环境收集配置信息进行评估分析：
1. 支持本地采集后直接分析
2. 支持仅采集数据不分析，并导出采集到的数据包
3. 支持导入x2openEuler收集到的其他用户环境信息数据包进行分析

#### 5.2.2. 环境信息直接分析

通常情况下，我们可以输入以下指令直接分析评估本机环境信息：
```
python3 x2openEuler.pyc conf-analyse [-os_name OS_NAME] [-target_os_name TARGET_OS_NAME] [-local]
```
- conf-analyse：该参数用于指定功能为配置分析
- os_name：需要迁移的操作系统，默认为centos7.6
- target_os_name：要迁往的操作系统，默认为openEuler20.03-LTS-SP1
- local：用于指定分析的数据为本地扫描生成数据。如果没有给定`local`或`load`，则为默认行为

例子：

分析本地扫描生成的数据：
```
python3 x2openEuler.pyc conf-analyse -local
或
python3 x2openEuler.pyc conf-analyse
```

**注意：** 分析过程中，可能会输出一些 `No such file or directory` 的提示信息，此属于配置信息收集时的正常现象。

#### 5.2.3. 环境信息收集与导出

如果我们只要收集信息不进行分析，输入以下命令：
```
python3 x2openEuler.pyc conf-collect 
```
- conf-collect ：该参数用于指定功能为配置收集
输出位置为软件根目录下`output`文件夹，如下，资源包为`sysconf-时间戳.tar.gz`形式
```
The system configs are saved: /root/x2openEuler/output/sysconf-20210603213537.tar.gz
```

#### 5.2.4. 环境信息导入与分析

如果我们需要导入上一项功能收集到的环境信息资源包，再进行分析，可以输入以下命令：
```
python3 x2openEuler.pyc conf-analyse -load <资源包路径> [-arch {x86_64,aarch64}]
```
- conf-analyse：该参数用于指定功能为配置分析
- load：该参数用于导入外部要分析的 tar.gz 配置资源包，与 local 参数互斥
- arch：可选项为x86_64或aarch64，默认为x86_64

例如：

```
[x2openEuler]# python3 x2openEuler.pyc conf-analyse -load ./output/sysconf-20210603213537.tar.gz 
The report are saved: /xx/x2openEuler/output/hw-compat-report-20210603214256.html
The report are saved: /xx/x2openEuler/output/conf_info_report-20210603214256.html
```

#### 5.2.5. 环境信息报告获取和查阅

**该步骤需要在CentOS系统上执行！**

当使用`conf-analyse`后，x2openEuler就会产生环境信息报告，
评估报告的结果是以html形式呈现，需要电脑浏览器（推荐Chrome，IE浏览器可能会出现错误）打开，报告结果如下，

- The report are saved：这里是html报告的位置
- conf_info_report-xxx：这里是配置信息html报告的位置，会提供当前系统和openEuler20.03 LTS SP1的配置兼容性信息
```
The report are saved: /root/x2openEuler/output/conf_info_report-20210603214855.html
```

### 5.3. 硬件配置评估

#### 5.3.1. 环境信息报告获取和查阅

**该步骤建议在物理机执行！**

当使用`hardware-analyse`后，x2openEuler就会产生环境信息报告，
评估报告的结果是以html形式呈现，需要电脑浏览器打开，报告结果如下，

- The report are saved：这里是html报告的位置
- hw_compat_report-xxx：这里是硬件板卡信息html报告的位置，会提供板卡兼容性信息

```
The report are saved: /root/x2openEuler/output/hw_compat_report-20210603214855.html
```

### 5.4. 软件数据升级更新

x2openEuler支持离线更新数据，用于对x2openEuler的数据库进行离线升级，拓展更多功能

#### 5.4.1. 数据文件准备

首先需要从官方获取以下两个文件，缺一不可，不能自行生成：
- `xxx.tar.gz`：软件升级更新包
- license：对应`xxx.tar.gz`更新包的**license**文本文件，用于校验完整性
将以上两个文件拷贝到`/opt/x2openEuler/update`目录下，拷贝完成后如下
```
[x2openEuler/update]# ls -l
total 49M
-rw-r--r--. 1 root root 49M Jun  1 20:20 update.tar.gz
-rw-r--r--. 1 root root  98 Jun  1 20:31 license
```
**注意：** 该目录下**有且仅有**更新包和对应的license两个文件，如果需要多次更新，每次更新前，请先将update目录中内容清空，再放入新的更新包和对应license文件

#### 5.4.2. 软件更新

确保在update目录下已经存放好更新文件后，在x2openEuler的根目录下执行以下命令：
```
python3 x2openEuler.pyc update
```
更新成功过程如下：
```
[x2openEuler]# python3 x2openEuler.pyc update
Decompressing ...
Processing ...
Update data successfully!
```

#### 5.4.3. 更新软件时可能报错与处理

如果目录内的文件缺少，或者有多余文件，则会出现以下两种情况的报错，请删除多余文件或者补充对应文件：
```
Necessary file missing, please check and try again!
Please delete any unnecessary files from update
```

如果目录内的更新包和对应的license不匹配，则会出现以下报错，请确认更新包和license是不是官方获取：
```
Verification failed for resource data file, please check and try again!
```

## 6. 软件卸载与环境清理

报告查阅和转移备份后，删除新建的账号`<user>`，清理临时数据目录 `/home/<user>/x2openEuler/`

## 7. 常见问题与处理

### 7.1. 页面显示不正常

推荐Chrome，IE浏览器可能会出现不兼容


