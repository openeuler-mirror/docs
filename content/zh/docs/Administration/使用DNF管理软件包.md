# 使用DNF管理软件包

DNF是一款Linux软件包管理工具，用于管理RPM软件包。DNF可以查询软件包信息，从指定软件库获取软件包，自动处理依赖关系以安装或卸载软件包，以及更新系统到最新可用版本。

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   DNF与YUM完全兼容，提供了YUM兼容的命令行以及为扩展和插件提供的API。  
>-   使用DNF需要管理员权限，本章所有命令需要在管理员权限下执行。  
<!-- TOC -->

- [使用DNF管理软件包](#使用dnf管理软件包)
    - [配置DNF](#配置dnf)
        - [DNF配置文件](#dnf配置文件)
        - [创建本地软件源仓库](#创建本地软件源仓库)
        - [添加、启用和禁用软件源](#添加启用和禁用软件源)
    - [管理软件包](#管理软件包)
        - [搜索软件包](#搜索软件包)
        - [列出软件包清单](#列出软件包清单)
        - [显示RPM包信息](#显示rpm包信息)
        - [安装RPM包](#安装rpm包)
        - [下载软件包](#下载软件包)
        - [删除软件包](#删除软件包)
    - [管理软件包组](#管理软件包组)
        - [列出软件包组清单](#列出软件包组清单)
        - [显示软件包组信息](#显示软件包组信息)
        - [安装软件包组](#安装软件包组)
        - [删除软件包组](#删除软件包组)
    - [检查并更新](#检查并更新)
        - [检查更新](#检查更新)
        - [升级](#升级)
        - [更新所有的包和它们的依赖](#更新所有的包和它们的依赖)

<!-- /TOC -->

## 配置DNF



### DNF配置文件

DNF 的主要配置文件是 /etc/dnf/dnf.conf，该文件包含两部分：

-   “main”部分保存着DNF的全局设置。

-   “repository”部分保存着软件源的设置，可以有一个或多个“repository”。

另外，在/etc/yum.repos.d 目录中保存着一个或多个repo源相关文件，它们也可以定义不同的“repository”。

所以openEuler软件源的配置一般有两种方式，一种是直接配置/etc/dnf/dnf.conf文件中的“repository”部分，另外一种是在/etc/yum.repos.d目录下增加.repo文件。

#### 配置main部分

/etc/dnf/dnf.conf 文件包含的“main”部分，配置示例如下：

```
[main]
gpgcheck=1
installonly_limit=3
clean_requirements_on_remove=True
best=True
```

常用选项说明：

**表 1**  main参数说明

<a name="zh-cn_topic_0151921080_t2716a40f69b24a989ec3c0b6f278cb5d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0151921080_re437b39f0a1647ff864353c080184c45"><th class="cellrowborder" valign="top" width="31.580000000000002%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0151921080_a228122f6ac30401d8237a59bf9535ad1"><a name="zh-cn_topic_0151921080_a228122f6ac30401d8237a59bf9535ad1"></a><a name="zh-cn_topic_0151921080_a228122f6ac30401d8237a59bf9535ad1"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="68.42%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0151921080_ae291ac87cc3c4ce1bd23cfbd2f989d09"><a name="zh-cn_topic_0151921080_ae291ac87cc3c4ce1bd23cfbd2f989d09"></a><a name="zh-cn_topic_0151921080_ae291ac87cc3c4ce1bd23cfbd2f989d09"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0151921080_raeb774ff205e457e818067d51a26a39a"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_aca09cf10eb084bee89cf1f5fe5f35fac"><a name="zh-cn_topic_0151921080_aca09cf10eb084bee89cf1f5fe5f35fac"></a><a name="zh-cn_topic_0151921080_aca09cf10eb084bee89cf1f5fe5f35fac"></a>cachedir</p>
</td>
<td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_a2151a724f4ff4a468f77b15eaec8ed3a"><a name="zh-cn_topic_0151921080_a2151a724f4ff4a468f77b15eaec8ed3a"></a><a name="zh-cn_topic_0151921080_a2151a724f4ff4a468f77b15eaec8ed3a"></a>缓存目录，该目录用于存储RPM包和数据库文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921080_r22f24b5ffe0e4bc3be64ef01afc49c6c"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_a33e3b7427b024df7922a3acdc7d2caf7"><a name="zh-cn_topic_0151921080_a33e3b7427b024df7922a3acdc7d2caf7"></a><a name="zh-cn_topic_0151921080_a33e3b7427b024df7922a3acdc7d2caf7"></a>keepcache</p>
</td>
<td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_a16334e4f6fec4e79872c4a8b3a31d772"><a name="zh-cn_topic_0151921080_a16334e4f6fec4e79872c4a8b3a31d772"></a><a name="zh-cn_topic_0151921080_a16334e4f6fec4e79872c4a8b3a31d772"></a>可选值是1和0，表示是否要缓存已安装成功的那些RPM包及头文件，默认值为0，即不缓存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921080_rc9c76f44bb7840b8b61a46b0854538b3"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_af751af3ed4cb4a189f209994d274dfe0"><a name="zh-cn_topic_0151921080_af751af3ed4cb4a189f209994d274dfe0"></a><a name="zh-cn_topic_0151921080_af751af3ed4cb4a189f209994d274dfe0"></a>debuglevel</p>
</td>
<td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_a118e43ebde57468eb40f0af51b86d751"><a name="zh-cn_topic_0151921080_a118e43ebde57468eb40f0af51b86d751"></a><a name="zh-cn_topic_0151921080_a118e43ebde57468eb40f0af51b86d751"></a>设置dnf生成的debug信息。取值范围：[0-10]，数值越大会输出越详细的debug信息。默认值为2，设置为0表示不输出debug信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921080_rc12e82ae45524ba8aea5248e154a832a"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_adc7f634b391d4726808fe0b3354f969d"><a name="zh-cn_topic_0151921080_adc7f634b391d4726808fe0b3354f969d"></a><a name="zh-cn_topic_0151921080_adc7f634b391d4726808fe0b3354f969d"></a>clean_requirements_on_remove</p>
</td>
<td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_ae9df2a3423504b4da46111a6e1162352"><a name="zh-cn_topic_0151921080_ae9df2a3423504b4da46111a6e1162352"></a><a name="zh-cn_topic_0151921080_ae9df2a3423504b4da46111a6e1162352"></a>删除在dnf remove期间不再使用的依赖项，如果软件包是通过DNF安装的，而不是通过显式用户请求安装的，则只能通过clean_requirements_on_remove删除软件包，即它是作为依赖项引入的。 默认值为True。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921080_r096417e2f0524024b93c722dab0113cd"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_p11584914871"><a name="zh-cn_topic_0151921080_p11584914871"></a><a name="zh-cn_topic_0151921080_p11584914871"></a>best</p>
</td>
<td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_a406b4dd56fb7483ea43c7231aa2a7499"><a name="zh-cn_topic_0151921080_a406b4dd56fb7483ea43c7231aa2a7499"></a><a name="zh-cn_topic_0151921080_a406b4dd56fb7483ea43c7231aa2a7499"></a>升级包时，总是尝试安装其最高版本，如果最高版本无法安装，则提示无法安装的原因并停止安装。默认值为True。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921080_r447c1e6abe344a719dd9e8b109c799fa"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_a6befc61e1a58499b96ecdcc96b0489d4"><a name="zh-cn_topic_0151921080_a6befc61e1a58499b96ecdcc96b0489d4"></a><a name="zh-cn_topic_0151921080_a6befc61e1a58499b96ecdcc96b0489d4"></a>obsoletes</p>
</td>
<td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_a581b6f9d8f9b4ad7b62734f86f6d556e"><a name="zh-cn_topic_0151921080_a581b6f9d8f9b4ad7b62734f86f6d556e"></a><a name="zh-cn_topic_0151921080_a581b6f9d8f9b4ad7b62734f86f6d556e"></a>可选值1和0，设置是否允许更新陈旧的RPM包。默认值为1，表示允许更新。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921080_r30106389463d4ba0bf505a6b78034b23"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_a51da18882a5b41ff8a5a328f73d186dd"><a name="zh-cn_topic_0151921080_a51da18882a5b41ff8a5a328f73d186dd"></a><a name="zh-cn_topic_0151921080_a51da18882a5b41ff8a5a328f73d186dd"></a>gpgcheck</p>
</td>
<td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_addb19525458847cd90f1d1390b966701"><a name="zh-cn_topic_0151921080_addb19525458847cd90f1d1390b966701"></a><a name="zh-cn_topic_0151921080_addb19525458847cd90f1d1390b966701"></a>可选值1和0，设置是否进行gpg校验。默认值为1，表示需要进行校验。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921080_ra0a9a346638c4a1bb007bbbe59eaeea7"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_af01afb28195145988ff4ba218bfad29b"><a name="zh-cn_topic_0151921080_af01afb28195145988ff4ba218bfad29b"></a><a name="zh-cn_topic_0151921080_af01afb28195145988ff4ba218bfad29b"></a>plugins</p>
</td>
<td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_a093f5fa9735a4e27a6bdbd2e1d59faee"><a name="zh-cn_topic_0151921080_a093f5fa9735a4e27a6bdbd2e1d59faee"></a><a name="zh-cn_topic_0151921080_a093f5fa9735a4e27a6bdbd2e1d59faee"></a>可选值1和0，表示启用或禁用dnf插件。默认值为1，表示启用dnf插件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0151921080_r1fea2c77ef6e4c63a6ca076666eb8651"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_a66ecbecaa5494510b6b1304af3e4da43"><a name="zh-cn_topic_0151921080_a66ecbecaa5494510b6b1304af3e4da43"></a><a name="zh-cn_topic_0151921080_a66ecbecaa5494510b6b1304af3e4da43"></a>installonly_limit</p>
</td>
<td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_aab5e9fba116044e4807c04ae55297cd1"><a name="zh-cn_topic_0151921080_aab5e9fba116044e4807c04ae55297cd1"></a><a name="zh-cn_topic_0151921080_aab5e9fba116044e4807c04ae55297cd1"></a>设置可以同时安装“installonlypkgs”指令列出包的数量。默认值为3，不建议降低此值。</p>
</td>
</tr>
</tbody>
</table>

#### 配置repository部分

repository部分允许您定义定制化的openEuler软件源仓库，各个仓库的名称不能相同，否则会引起冲突。配置repository部分有两种方式，一种是直接配置/etc/dnf/dnf.conf文件中的“repository”部分，另外一种是配置/etc/yum.repos.d目录下的.repo文件。

-   直接配置/etc/dnf/dnf.conf文件中的“repository”部分

    下面是\[repository\]部分的一个最小配置示例：

    ```
    [repository]
    name=repository_name
    baseurl=repository_url
    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >openEuler提供在线的镜像源，地址：[https://repo.openeuler.org/](https://repo.openeuler.org/)。以 openEuler 20.03的aarch64版本为例，baseurl可配置为[https://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/](https://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/)。  

    选项说明：

    **表 2**  repository参数说明
    <table><thead align="left"><tr><th class="cellrowborder" valign="top" width="31.580000000000002%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0151921080_af95a9e18156646249707de3f94ac1b3c"><a name="zh-cn_topic_0151921080_af95a9e18156646249707de3f94ac1b3c"></a><a name="zh-cn_topic_0151921080_af95a9e18156646249707de3f94ac1b3c"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="68.42%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0151921080_a8cc2e976bc794e86a279d3bae8f901c4"><a name="zh-cn_topic_0151921080_a8cc2e976bc794e86a279d3bae8f901c4"></a><a name="zh-cn_topic_0151921080_a8cc2e976bc794e86a279d3bae8f901c4"></a>说明</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0151921080_rbfa3a638cbc24c73ab13529149b75bb1"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_a4a0b069bbf624b09be3bdd08567c0445"><a name="zh-cn_topic_0151921080_a4a0b069bbf624b09be3bdd08567c0445"></a><a name="zh-cn_topic_0151921080_a4a0b069bbf624b09be3bdd08567c0445"></a>name=repository_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_a21ddbd0f48924c1eb7475cc34de2dc32"><a name="zh-cn_topic_0151921080_a21ddbd0f48924c1eb7475cc34de2dc32"></a><a name="zh-cn_topic_0151921080_a21ddbd0f48924c1eb7475cc34de2dc32"></a>软件仓库（repository ）描述的字符串。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0151921080_r00b7f4067dc94647941026719cd6f293"><td class="cellrowborder" valign="top" width="31.580000000000002%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0151921080_af53cdfe5f204471f956cdab7c466fa40"><a name="zh-cn_topic_0151921080_af53cdfe5f204471f956cdab7c466fa40"></a><a name="zh-cn_topic_0151921080_af53cdfe5f204471f956cdab7c466fa40"></a>baseurl=repository_url</p>
    </td>
    <td class="cellrowborder" valign="top" width="68.42%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0151921080_aa17154cd42524a1a8075e6414160a153"><a name="zh-cn_topic_0151921080_aa17154cd42524a1a8075e6414160a153"></a><a name="zh-cn_topic_0151921080_aa17154cd42524a1a8075e6414160a153"></a>软件仓库（repository ）的地址。</p>
    <a name="zh-cn_topic_0151921080_ued0c249b843549a79bfa68170539c91e"></a><a name="zh-cn_topic_0151921080_ued0c249b843549a79bfa68170539c91e"></a><ul id="zh-cn_topic_0151921080_ued0c249b843549a79bfa68170539c91e"><li>使用http协议的网络位置：例如 http://path/to/repo</li><li>使用ftp协议的网络位置：例如 ftp://path/to/repo</li><li>本地位置：例如 file:///path/to/local/repo</li></ul>
    </td>
    </tr>
    </tbody>
    </table>


-   配置/etc/yum.repos.d目录下的.repo文件

    openEuler提供了多种repo源供用户在线使用，各repo源含义可参考[系统安装]({{< relref "../Releasenotes/系统安装.md" >}})，以AArch64架构的OS repo源为例。使用root权限在openEuler_aarch64.repo文件中添加openEuler repo源，示例如下：

    ```
    # vi /etc/yum.repos.d/openEuler_aarch64.repo
    ```

    ```
    [osrepo]
    name=osrepo
    baseurl=https://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/
    enabled=1
    gpgcheck=1
    gpgkey=https://repo.openeuler.org/openEuler-20.03-LTS/OS/aarch64/RPM-GPG-KEY-openEuler

    ```

    >![](public_sys-resources/icon-note.gif) **说明：**   
    > - enabled为是否启用该软件源仓库，可选值为1和0。默认值为1，表示启用该软件源仓库。
	> - gpgkey为验证签名用的公钥。
	

#### 显示当前配置

-   要显示当前的配置信息：

    ```
    dnf config-manager --dump
    ```

-   要显示相应软件源的配置，首先查询repo id：

    ```
    dnf repolist
    ```

    然后执行如下命令，显示对应id的软件源配置，其中  _repository_  为查询得到的repo id：

    ```
    dnf config-manager --dump repository
    ```

-   您也可以使用一个全局正则表达式，来显示所有匹配部分的配置：

    ```
    dnf config-manager --dump glob_expression
    ```


### 创建本地软件源仓库

要建立一个本地软件源仓库，请按照下列步骤操作。

1.  安装createrepo软件包。在root权限下执行如下命令：

    ```
    dnf install createrepo
    ```

2.  将需要的软件包复制到一个目录下，如/mnt/local\_repo/ 。
3.  创建软件源，执行以下命令：

    ```
    createrepo --database /mnt/local_repo
    ```


### 添加、启用和禁用软件源

本节将介绍如何通过“dnf config-manager”命令添加、启用和禁用软件源仓库。

#### 添加软件源

要定义一个新的软件源仓库，您可以在 /etc/dnf/dnf.conf 文件中添加“repository”部分，或者在/etc/yum.repos.d/目录下添加“.repo”文件进行说明。建议您通过添加“.repo”的方式，每个软件源都有自己对应的“.repo”文件，以下介绍该方式的操作方法。

要在您的系统中添加一个这样的源，请在root权限下执行如下命令，执行完成之后会在/etc/yum.repos.d/目录下生成对应的repo文件。其中  _repository\_url_  为repo源地址，详情请参见[表2](#zh-cn_topic_0151921080_t2df9dceb0ff64b2f8db8ec5cd779792a)。

```
dnf config-manager --add-repo repository_url
```

#### 启用软件源

要启用软件源，请在root权限下执行如下命令，其中  _repository_  为新增.repo文件中的repo id（可通过dnf repolist查询）：

```
dnf config-manager --set-enable repository
```

您也可以使用一个全局正则表达式，来启用所有匹配的软件源。其中  _glob\_expression_  为对应的正则表达式，用于同时匹配多个repo id：

```
dnf config-manager --set-enable glob_expression
```

#### 禁用软件源

要禁用软件源，请在root权限下执行如下命令：

```
dnf config-manager --set-disable repository
```

同样的，您也可以使用一个全局正则表达式来禁用所有匹配的软件源：

```
dnf config-manager --set-disable glob_expression
```

## 管理软件包

使用dnf能够让您方便的进行查询、安装、删除软件包等操作。

### 搜索软件包

您可以使用rpm包名称、缩写或者描述搜索需要的RPM包，使用命令如下：

```
dnf search term
```

示例如下：

```
$   dnf search httpd
========================================== N/S matched: httpd ==========================================
httpd.aarch64 : Apache HTTP Server
httpd-devel.aarch64 : Development interfaces for the Apache HTTP server
httpd-manual.noarch : Documentation for the Apache HTTP server
httpd-tools.aarch64  : Tools for use with the Apache HTTP Server
libmicrohttpd.aarch64  : Lightweight library for embedding a webserver in applications
mod_auth_mellon.aarch64  : A SAML 2.0 authentication module for the Apache Httpd Server
mod_dav_svn.aarch64  : Apache httpd module for Subversion server
```

### 列出软件包清单

要列出系统中所有已安装的以及可用的RPM包信息，使用命令如下：

```
dnf list all
```

要列出系统中特定的RPM包信息，使用命令如下：

```
dnf list glob_expression...
```

示例如下：

```
$ dnf list httpd
Available Packages
httpd.aarch64              2.4.34-8.h5.oe1           Local
```

### 显示RPM包信息

要显示一个或者多个RPM包信息，使用命令如下：

```
dnf info package_name...
```

例如搜索，命令如下：

```
$ dnf info httpd
Available Packages
Name        : httpd
Version     : 2.4.34
Release     : 8.h5.oe1
Arch        : aarch64 
Size        : 1.2 M
Repo        : Local
Summary     : Apache HTTP Server
URL         : http://httpd.apache.org/
License     : ASL 2.0
Description : The Apache HTTP Server is a powerful, efficient, and extensible
            : web server.
```

### 安装RPM包

要安装一个软件包及其所有未安装的依赖，请在root权限下执行如下命令：

```
dnf install package_name
```

您也可以通过添加软件包名字同时安装多个软件包。配置文件/etc/dnf/dnf.conf添加参数strict=False，运行dnf命令参数添加\-\-setopt=strict=0。请在root权限下执行如下命令：

```
dnf install package_name package_name... --setopt=strict=0
```

示例如下：

```
# dnf install httpd
```

>![](public_sys-resources/icon-note.gif) **说明：**   
>安装RPM包过程中，若出现安装失败，可参考[安装时出现软件包冲突、文件冲突或缺少软件包导致安装失败](FAQ-54.html#安装时出现软件包冲突文件冲突或缺少软件包导致安装失败)。  

### 下载软件包

使用dnf下载软件包，请在root权限下输入如下命令：

```
dnf download package_name
```

如果需要同时下载未安装的依赖，则加上\-\-resolve，使用命令如下：

```
dnf download --resolve package_name
```

示例如下：

```
# dnf download --resolve httpd
```

### 删除软件包

要卸载软件包以及相关的依赖软件包，请在root权限下执行如下命令：

```
dnf remove package_name...
```

示例如下：

```
# dnf remove totem
```

## 管理软件包组

软件包集合是服务于一个共同的目的一组软件包，例如系统工具集等。使用dnf可以对软件包组进行安装/删除等操作，使相关操作更高效。

### 列出软件包组清单

使用summary参数，可以列出系统中所有已安装软件包组、可用的组，可用的环境组的数量，命令如下：

```
dnf groups summary
```

使用示例如下：

```
# dnf groups summary
Last metadata expiration check: 0:11:56 ago on Sat 17 Aug 2019 07:45:14 PM CST.
Available Groups: 8
```

要列出所有软件包组和它们的组ID ，命令如下：

```
dnf group list
```

使用示例如下：

```
# dnf group list
Last metadata expiration check: 0:10:32 ago on Sat 17 Aug 2019 07:45:14 PM CST.
Available Environment Groups:
   Minimal Install
   Custom Operating System
   Server
Available Groups:
   Development Tools
   Graphical Administration Tools
   Headless Management
   Legacy UNIX Compatibility
   Network Servers
   Scientific Support
   Security Tools
   System Tools

```

### 显示软件包组信息

要列出包含在一个软件包组中必须安装的包和可选包，使用命令如下：

```
dnf group info glob_expression...
```

例如显示Development Tools信息，示例如下：

```
# dnf group info "Development Tools"
Last metadata expiration check: 0:14:54 ago on Wed 05 Jun 2019 08:38:02 PM CST.

Group: Development Tools
 Description: A basic development environment.
 Mandatory Packages:
   binutils
   glibc-devel
   make
   pkgconf
   pkgconf-m4
   pkgconf-pkg-config
   rpm-sign
 Optional Packages:
   expect
```

### 安装软件包组

每一个软件包组都有自己的名称以及相应的ID（groupid），您可以使用软件包组名称或它的ID进行安装。

要安装一个软件包组，请在root权限下执行如下命令：

```
dnf group install group_name
```

```
dnf group install groupid
```

例如安装Development Tools相应的软件包组，命令如下：

```
# dnf group install "Development Tools" 
```

```
# dnf group install development
```

### 删除软件包组

要卸载软件包组，您可以使用软件包组名称或它的ID，在root权限下执行如下命令：

```
dnf group remove group_name
```

```
dnf group remove groupid
```

例如删除Development Tools相应的软件包组，命令如下：

```
# dnf group remove "Development Tools" 
```

```
# dnf group remove development
```

## 检查并更新

dnf可以检查您的系统中是否有软件包需要更新。您可以通过dnf列出需要更新的软件包，并可以选择一次性全部更新或者只对指定包进行更新。

### 检查更新

如果您需要显示当前系统可用的更新，使用命令如下：

```
dnf check-update
```

使用实例如下：

```
# dnf check-update
Last metadata expiration check: 0:02:10 ago on Sun 01 Sep 2019 11:28:07 PM  CST.

anaconda-core.aarch64       19.31.123-1.14             updates
anaconda-gui.aarch64        19.31.123-1.14             updates
anaconda-tui.aarch64        19.31.123-1.14             updates
anaconda-user-help.aarch64  19.31.123-1.14             updates
anaconda-widgets.aarch64    19.31.123-1.14             updates
bind-libs.aarch64           32:9.9.4-29.3              updates
bind-libs-lite.aarch64      32:9.9.4-29.3              updates
bind-license.noarch         32:9.9.4-29.3              updates
bind-utils.aarch64          32:9.9.4-29.3              updates
...
```

### 升级

如果您需要升级单个软件包，在root权限下执行如下命令：

```
dnf update package_name
```

例如升级rpm包，示例如下：

```
# dnf update anaconda-gui.aarch64
Last metadata expiration check: 0:02:10 ago on Sun 01 Sep 2019 11:30:27 PM  CST.
Dependencies Resolved
================================================================================
 Package                  Arch         Version              Repository     Size
================================================================================
Updating:
 anaconda-gui             aarch64      19.31.123-1.14       updates       461 k
 anaconda-core            aarch64      19.31.123-1.14       updates       1.4 M
 anaconda-tui             aarch64      19.31.123-1.14       updates       274 k
 anaconda-user-help       aarch64      19.31.123-1.14       updates       315 k
 anaconda-widgets         aarch64      19.31.123-1.14       updates       748 k

Transaction Summary
================================================================================
Upgrade  5 Package

Total download size: 3.1 M
Is this ok [y/N]:
```

类似的，如果您需要升级软件包组，在root权限下执行如下命令：

```
dnf group update group_name
```

### 更新所有的包和它们的依赖

要更新所有的包和它们的依赖，在root权限下执行如下命令：

```
dnf update
```
