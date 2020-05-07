# 使用KAE加速引擎
<!-- TOC -->

- [使用KAE加速引擎](#使用kae加速引擎)
    - [简介](#简介)
    - [应用场景](#应用场景)
    - [安装、升级和卸载](#安装升级和卸载)
        - [安装加速器软件包](#安装加速器软件包)
        - [升级加速器软件包](#升级加速器软件包)
        - [卸载加速器软件包](#卸载加速器软件包)
    - [日志查询](#日志查询)
    - [加速引擎的应用](#加速引擎的应用)
        - [KAE引擎使用示例代码](#kae引擎使用示例代码)
        - [通过OpenSSL配置文件openssl.cnf使用KAE引擎](#通过openssl配置文件opensslcnf使用kae引擎)
    - [故障处理](#故障处理)
        - [初始化失败](#初始化失败)
        - [安装完加速器引擎之后，查找不到加速器设备](#安装完加速器引擎之后查找不到加速器设备)
        - [升级加速器驱动失败](#升级加速器驱动失败)

<!-- /TOC -->
## 简介

KAE加速引擎为openEuler的一个软件加速库，搭载在Kunpeng 920处理器上联合提供硬件加速引擎功能，包含了对称加密、非对称加密和数字签名，用于加速SSL/TLS应用，可以显著降低处理器消耗，提高处理器效率。此外，用户通过OpenSSL标准接口可实现业务快速迁移。

KAE加速引擎支持以下算法：

-   摘要算法SM3, 支持异步模式。
-   对称加密算法SM4，支持异步模式，支持CTR/XTS/CBC模式。

-   对称加密算法AES, 支持异步模式，支持ECB/CTR/XTS/CBC模式。
-   非对称算法RSA，支持异步模式，支持 Key Sizes 1024/2048/3072/4096。
-   密钥协商算法DH, 支持异步模式，支持 Key Sizes 768/1024/1536/2048/3072/4096。

## 应用场景

KAE加速引擎主要有以下应用场景，如[表1](#table11915824163418)所示。

**表 1**  应用场景

<a name="table11915824163418"></a>
<table><thead align="left"><tr id="row12819762"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p31767774"><a name="p31767774"></a><a name="p31767774"></a>场景</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p55347837"><a name="p55347837"></a><a name="p55347837"></a>数据</p>
</th>
</tr>
</thead>
<tbody><tr id="row53989823"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p11099566"><a name="p11099566"></a><a name="p11099566"></a>大数据</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p11137969"><a name="p11137969"></a><a name="p11137969"></a>流数据</p>
</td>
</tr>
<tr id="row33132859"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p66515904"><a name="p66515904"></a><a name="p66515904"></a>数据加密</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1907972"><a name="p1907972"></a><a name="p1907972"></a>块数据</p>
</td>
</tr>
<tr id="row17171756"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p48735027"><a name="p48735027"></a><a name="p48735027"></a>智能安防</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p43884268"><a name="p43884268"></a><a name="p43884268"></a>视频流数据</p>
</td>
</tr>
<tr id="row59414099"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p47812724"><a name="p47812724"></a><a name="p47812724"></a>Web服务</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p32455223"><a name="p32455223"></a><a name="p32455223"></a>握手连接</p>
</td>
</tr>
</tbody>
</table>

## 安装、升级和卸载



### 安装加速器软件包


#### 安装前准备

##### 环境要求

-   TaiShan 200服务器，开启加速引擎功能

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   需要导入加速器许可证，具体操作请参考《[TaiShan 机架服务器 iBMC \(V500及以上\) 用户指南](https://support.huawei.com/enterprise/zh/doc/EDOC1100121687)》中“许可证管理”章节。  
>-   物理机场景使用加速器需要关闭SMMU，具体操作请参考《[TaiShan 200服务器BIOS参数参考](https://support.huawei.com/enterprise/zh/doc/EDOC1100088653)》。  

-   CPU：Kunpeng 920
-   操作系统：openEuler-20.03-LTS-aarch64-dvd.iso

##### KAE加速引擎软件说明

**表 2**  加速引擎的rpm软件包

<a name="table9060076"></a>
<table><thead align="left"><tr id="row36699979"><th class="cellrowborder" valign="top" width="48.57%" id="mcps1.2.3.1.1"><p id="p19908318"><a name="p19908318"></a><a name="p19908318"></a>软件包名称</p>
</th>
<th class="cellrowborder" valign="top" width="51.43%" id="mcps1.2.3.1.2"><p id="p1961070"><a name="p1961070"></a><a name="p1961070"></a>软件包说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row48788899"><td class="cellrowborder" valign="top" width="48.57%" headers="mcps1.2.3.1.1 "><p id="p59586712"><a name="p59586712"></a><a name="p59586712"></a>kae_driver-版本号-1.OS类型.aarch64.rpm</p>
</td>
<td class="cellrowborder" valign="top" width="51.43%" headers="mcps1.2.3.1.2 "><p id="p61794345"><a name="p61794345"></a><a name="p61794345"></a>加速器驱动，包含内容：uacce.ko、hisi_qm.ko、hisi_sec2.ko、hisi_hpre.ko内核模块</p>
<p id="p186913584617"><a name="p186913584617"></a><a name="p186913584617"></a>支持：SM3/SM4/AES/RSA/DH算法</p>
</td>
</tr>
<tr id="row49528506"><td class="cellrowborder" valign="top" width="48.57%" headers="mcps1.2.3.1.1 "><p id="p52386074"><a name="p52386074"></a><a name="p52386074"></a>libwd-版本号-1.OS类型.aarch64.rpm</p>
</td>
<td class="cellrowborder" valign="top" width="51.43%" headers="mcps1.2.3.1.2 "><p id="p15413619"><a name="p15413619"></a><a name="p15413619"></a>包含内容：libwd.so动态链接库</p>
<p id="p4504844"><a name="p4504844"></a><a name="p4504844"></a>提供接口给KAE引擎</p>
</td>
</tr>
<tr id="row40543596"><td class="cellrowborder" valign="top" width="48.57%" headers="mcps1.2.3.1.1 "><p id="p62805805"><a name="p62805805"></a><a name="p62805805"></a>libkae-版本号-1.OS类型.aarch64.rpm</p>
</td>
<td class="cellrowborder" valign="top" width="51.43%" headers="mcps1.2.3.1.2 "><p id="p54105439"><a name="p54105439"></a><a name="p54105439"></a>依赖：libwd rpm包</p>
<p id="p17186905"><a name="p17186905"></a><a name="p17186905"></a>包含内容：libkae.so动态库</p>
<p id="p20464425"><a name="p20464425"></a><a name="p20464425"></a>支持：SM3/SM4/AES/RSA/DH等算法</p>
</td>
</tr>
</tbody>
</table>

#### 安装加速器软件包

##### 前提条件

-   已在本地安装远程SSH登录工具
-   已安装openEuler操作系统
-   RPM工具能正常使用。
-   已安装OpenSSL 1.1.1a或以上版本。

    使用如下命令查询OpenSSL的版本号

    -   openssl version


##### 安装步骤

1.  以root帐号登录openEuler OS命令行界面。
2.  新建目录用于存放加速器引擎软件包。
3.  使用SSH远程登录工具，将所有加速引擎软件包拷贝到已建好的目录下。
4.  在存放加速引擎软件包目录下，使用rpm -ivh命令安装加速器引擎软件包。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >由于libkae包的安装依赖libwd包，所以libwd的安装必须先于libkae。  

    ```
    rpm -ivh uacce*.rpm hisi*.rpm libwd-*.rpm libkae*.rpm
    ```

    ```
    Verifying...                          ################################# [100%]
    Preparing...                          ################################# [100%]
    checking installed modules
    uacce modules start to install
    Updating / installing...
       1:uacce-1.2.10-4.oe1               ################################# [ 14%]
    uacce modules installed
       2:libwd-1.2.10-3.oe1               ################################# [ 29%]
       3:libkae-1.2.10-3.oe1              ################################# [ 43%]
    checking installed modules
    hisi_hpre modules start to install
       4:hisi_hpre-1.2.10-4.oe1           ################################# [ 57%]
    hisi_hpre modules installed
    checking installed modules
    hisi_rde modules start to install
       5:hisi_rde-1.2.10-4.oe1            ################################# [ 71%]
    hisi_rde modules installed
    checking installed modules
    hisi_sec2 modules start to install
       6:hisi_sec2-1.2.10-4.oe1           ################################# [ 86%]
    hisi_sec2 modules installed
    checking installed modules
    hisi_zip modules start to install
       7:hisi_zip-1.2.10-4.oe1            ################################# [100%]
    hisi_zip modules installed
    ```

5.  使用rpm -qa命令，查看加速器软件包是否已正常安装到系统内。使用rpm -ql命令 ，查看软件包的文件是否正确。示例如下。

    ```
    rpm -qa|grep -E "hisi|uacce|libwd|libkae"
    ```

    ```
    hisi_rde-1.2.10-4.oe1.aarch64
    hisi_sec2-1.2.10-4.oe1.aarch64
    libkae-1.2.10-3.oe1.aarch64
    hisi_hpre-1.2.10-4.oe1.aarch64
    uacce-1.2.10-4.oe1.aarch64
    libwd-1.2.10-3.oe1.aarch64
    hisi_zip-1.2.10-4.oe1.aarch64
    ```

    ```
    rpm -ql uacce hisi* libwd* libkae
    ```

    ```
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_qm.ko
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/uacce.ko
    /etc/modprobe.d/hisi_hpre.conf
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_hpre.ko
    /etc/modprobe.d/hisi_rde.conf
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_rde.ko
    /etc/modprobe.d/hisi_sec2.conf
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_sec2.ko
    /etc/modprobe.d/hisi_zip.conf
    /lib/modules/4.19.90-2003.4.0.0036.oe1.aarch64/extra/hisi_zip.ko
    /usr/include/warpdrive/config.h
    /usr/include/warpdrive/include/uacce.h
    /usr/include/warpdrive/smm.h
    /usr/include/warpdrive/wd.h
    /usr/include/warpdrive/wd_bmm.h
    /usr/include/warpdrive/wd_cipher.h
    /usr/include/warpdrive/wd_comp.h
    /usr/include/warpdrive/wd_dh.h
    /usr/include/warpdrive/wd_digest.h
    /usr/include/warpdrive/wd_rsa.h
    /usr/lib64/libwd.so.1.2.10
    /usr/local/lib/engines-1.1/libkae.so.1.2.10
    ```

6.  重启系统或通过命令行手动依次加载加速器引擎驱动到内核，并查看是否加载成功。

    ```
    # modprobe uacce 
    # lsmod | grep uacce 
    # modprobe hisi_qm
    # lsmod | grep hisi_qm 
    # modprobe hisi_qm
    # modprobe hisi_sec2 #加载hisi_sec2驱动时将根据/etc/modprobe.d/hisi_sec2.conf 下的配置文件加载到内核
    # modprobe hisi_hpre #加载hisi_hpre驱动时将根据/etc/modprobe.d/hisi_hpre.conf 下的配置文件加载到内核
    ```


##### 设置环境变量

通过以下命令导出环境变量：如果用户指定安装路径，则下面/usr/local应根据实际安装路径进行修改。

```
export OPENSSL_ENGINES=/usr/local/lib/engines-1.1
```

##### 安装后检查

执行**rpm -qa**命令查看加速器引擎软件包是否安装成功。

打印信息中包含“ _软件包名-版本号-_ ”表示该软件包安装成功。示例如下。

```
rpm -qa|grep -E "hisi|uacce|libwd|libkae"
```

```
hisi_rde-1.2.10-4.oe1.aarch64
hisi_sec2-1.2.10-4.oe1.aarch64
libkae-1.2.10-3.oe1.aarch64
hisi_hpre-1.2.10-4.oe1.aarch64
uacce-1.2.10-4.oe1.aarch64
libwd-1.2.10-3.oe1.aarch64
hisi_zip-1.2.10-4.oe1.aarch64
```

#### 安装后操作
##### OpenSSL加速器引擎测试

用户可以通过以下命令测试部分加速器功能。

-   使用OpenSSL的软件算法测试RSA性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed rsa2048
    ...
                     sign    verify    sign/s verify/s
    rsa 2048 bits 0.001384s 0.000035s   724.1  28365.8.
    ```

-   使用KAE引擎的测试RSA性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae rsa2048
    ....
                     sign    verify    sign/s verify/s
    rsa 2048 bits 0.000355s 0.000022s   2819.0  45478.4
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>使用KAE引擎加速后签名性能从724.1 sign/s提升到2819sign/s。  

-   使用OpenSSL的软件算法测试异步RSA性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -async_jobs 36 rsa2048 
    ....
                      sign    verify    sign/s verify/s
    rsa 2048 bits 0.001318s 0.000032s    735.7  28555
    ```

-   使用KAE引擎的测试异步RSA性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -engine kae -elapsed -async_jobs 36 rsa2048 
    .... 
                      sign    verify    sign/s verify/s
    rsa 2048 bits 0.000018s 0.000009s  54384.1 105317.0
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>使用KAE引擎加速后异步RSA签名性能从735.7 sign/s提升到 54384.1sign/s。  

-   使用OpenSSL的软件算法测试SM4 CBC模式性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp sm4-cbc
    You have chosen to measure elapsed time instead of user CPU time.
    ....
    Doing sm4-cbc for 3s on 10240 size blocks: 2196 sm4-cbc's in 3.00s  ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    sm4-cbc          82312.53k    85196.80k    85284.18k    85000.85k    85284.18k    85261.26k
    ```

-   使用KAE引擎的测试SM4 CBC模式性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae -evp sm4-cbc
    engine "kae" set. 
    You have chosen to measure elapsed time instead of user CPU time.
    ...
    Doing sm4-cbc for 3s on 1048576 size blocks: 11409 sm4-cbc's in 3.00s
    ...
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    sm4-cbc         383317.33k   389427.20k   395313.15k   392954.73k   394264.58k   394264.58k
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>使用KAE加速后SM4 CBC模式在输入数据块大小为8M时，从82312.53k/s提升到383317.33k/s。  

-   使用OpenSSL的软件算法测试SM3模式性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp sm3
    You have chosen to measure elapsed time instead of user CPU time.
    Doing sm3 for 3s on 102400 size blocks: 1536 sm3's in 3.00s
    ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    sm3              50568.53k    52428.80k    52428.80k    52428.80k    52428.80k    52428.80k
    ```

-   使用KAE引擎测试SM3模式性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -engine kae -evp sm3
    engine "kae" set.
    You have chosen to measure elapsed time instead of user CPU time.
    Doing sm3 for 3s on 102400 size blocks: 19540 sm3's in 3.00s
    ....
    type            51200 bytes  102400 bytes  1048576 bytes 2097152 bytes 4194304 bytes 8388608 bytes
    sm3             648243.20k   666965.33k   677030.57k   678778.20k   676681.05k   668292.44k
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>使用KAE加速后SM3算法在输入数据块大小为8M时，从52428.80 k/s提升到668292.44k/s。  

-   使用OpenSSL软件算法测试AES算法CBC模式异步性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp aes-128-cbc -async_jobs 4
    You have chosen to measure elapsed time instead of user CPU time.
    Doing aes-128-cbc for 3s on 51200 size blocks: 65773 aes-128-cbc's in 3.00s
    Doing aes-128-cbc for 3s on 102400 size blocks: 32910 aes-128-cbc's in 3.00s
    ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    aes-128-cbc    1122525.87k  1123328.00k  1120578.22k  1121277.27k  1119879.17k  1115684.86k
    ```

-   使用的KEA引擎测试AES算法CBC模式异步性能。

    ```
    linux-rmw4:/usr/local/bin # ./openssl speed -elapsed -evp aes-128-cbc -async_jobs 4 -engine kae
    engine "kae" set.
    You have chosen to measure elapsed time instead of user CPU time.
    Doing aes-128-cbc for 3s on 51200 size blocks: 219553 aes-128-cbc's in 3.00s
    Doing aes-128-cbc for 3s on 102400 size blocks: 117093 aes-128-cbc's in 3.00s
    ....
    type          51200 bytes 102400 bytes1048576 bytes2097152 bytes4194304 bytes8388608 bytes
    aes-128-cbc    3747037.87k  3996774.40k  1189085.18k  1196774.74k  1196979.11k  1199570.94k
    ```


>![](public_sys-resources/icon-note.gif) **说明：**   
>-   AES仅支持数据长度为256KB及以下场景的异步使用。  
>-   使用KAE加速后AES算法在输入数据块为100K大小时，从1123328.00k/s提升到3996774.40 k/s 。  

### 升级加速器软件包

#### 使用场景

当需要更新加速器软件版本时可以使用rpm -Uvh方式进行升级。

#### 操作步骤

1.  从openEuler社区下载最新版本的加速引擎软件包。
2.  使用SSH远程登录工具，以root帐号进入Linux操作系统命令行界面。
3.  将下载下来的最新版本的软件包都放在某个路径下。
4.  在存放软件包的路径下使用rpm -Uvh  命令升级加速器驱动包及引擎库包。示例如下。

    命令和信息回显如下所示。

    ![](figures/zh-cn_image_0231143189.png)

    ![](figures/zh-cn_image_0231143191.png)

5.  使用rpm -qa  命令查询是否升级成功。确认查询到的版本是最新的升级后版本。

    ![](figures/zh-cn_image_0231143193.png)

    ![](figures/zh-cn_image_0231143195.png)

6.  重启系统或通过命令行手动卸载旧版本驱动，然后加载新版本驱动，并查看是否加载成功

    ```
    卸载旧驱动
    # lsmod | grep uacce 
    uacce                 262144  3 hisi_hpre,hisi_sec2,hisi_qm 
    # 
    # rmmod hisi_hpre 
    # rmmod hisi_sec2 
    # rmmod hisi_qm 
    # rmmod uacce 
    # lsmod | grep uacce 
    # 
    加载新驱动# modprobe uacce 
    # modprobe hisi_qm# modprobe hisi_sec2 #加载hisi_sec2驱动时将根据/etc/modprobe.d/hisi_sec2.conf 下的配置文件加载到内核
    # modprobe hisi_hpre  #加载hisi_hpre驱动时将根据/etc/modprobe.d/hisi_hpre.conf 下的配置文件加载到内核
    # lsmod | grep uacce 
    uacce                36864  3 hisi_sec2,hisi_qm,hisi_hpre
    ```


### 卸载加速器软件包

#### 使用场景

用户不再使用加速引擎软件，或进行新版本加速引擎软件的安装。

#### 操作步骤

1.  使用SSH远程登录工具，以root帐号进入Linux操作系统命令行界面。
2.  重启系统或通过命令行手动将已加载到内核的驱动卸载掉，并查看是否卸载成功。

    ```
    # lsmod | grep uacce 
    uacce                36864  3 hisi_sec2,hisi_qm,hisi_hpre 
    # rmmod hisi_hpre 
    # rmmod hisi_sec2  
    # rmmod hisi_qm 
    # rmmod uacce 
    # lsmod | grep uacce 
    #
    ```

3.  通过rpm -e 命令卸载加速引擎软件包。示例如下。

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >由于存在依赖关系，卸载libwd前须先卸载libkae引擎软件包。  

    ![](figures/zh-cn_image_0231143196.png)

    ![](figures/zh-cn_image_0231143197.png)

4.  使用rpm -qa |grep 软件包名命令查询是否卸载成功。

    ![](figures/zh-cn_image_0231143198.png)


## 日志查询

加速器引擎涉及日志信息如[表3](#table52821836)所示。

**表 3**  日志信息

<a name="table52821836"></a>
<table><thead align="left"><tr id="row62537016"><th class="cellrowborder" valign="top" width="28.28282828282828%" id="mcps1.2.4.1.1"><p id="p32333556"><a name="p32333556"></a><a name="p32333556"></a>目录</p>
</th>
<th class="cellrowborder" valign="top" width="27.27272727272727%" id="mcps1.2.4.1.2"><p id="p1772413"><a name="p1772413"></a><a name="p1772413"></a>文件名</p>
</th>
<th class="cellrowborder" valign="top" width="44.44444444444445%" id="mcps1.2.4.1.3"><p id="p9347770"><a name="p9347770"></a><a name="p9347770"></a>文件内容说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row18971924"><td class="cellrowborder" valign="top" width="28.28282828282828%" headers="mcps1.2.4.1.1 "><p id="p60330866"><a name="p60330866"></a><a name="p60330866"></a>/var/log/</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.4.1.2 "><p id="p54961981"><a name="p54961981"></a><a name="p54961981"></a>kae.log</p>
</td>
<td class="cellrowborder" valign="top" width="44.44444444444445%" headers="mcps1.2.4.1.3 "><p id="p22735452"><a name="p22735452"></a><a name="p22735452"></a>OpenSSL引擎日志默认打印等级为error级别，如需要设置日志级别按照如下操作：</p>
<a name="ol3292479"></a><a name="ol3292479"></a><ol id="ol3292479"><li>export KAE_CONF_ENV=/var/log/</li><li>在/var/log/下创建文件kae.cnf</li><li>在kae.cnf 文件中设置如下：<p id="p60010105"><a name="p60010105"></a><a name="p60010105"></a>[LogSection]</p>
<p id="p3220036"><a name="p3220036"></a><a name="p3220036"></a>debug_level=error #取值内容none/error/info/warning/debug</p>
</li></ol>
<div class="note" id="note28980331"><a name="note28980331"></a><a name="note28980331"></a><span class="notetitle"> 说明： </span><div class="notebody"><p class="textintable" id="p59496389"><a name="p59496389"></a><a name="p59496389"></a>正常情况下不建议开启info或debug级别日志，否则会导致加速器性能的下降。</p>
</div></div>
</td>
</tr>
<tr id="row65705461"><td class="cellrowborder" valign="top" width="28.28282828282828%" headers="mcps1.2.4.1.1 "><p id="p20542144"><a name="p20542144"></a><a name="p20542144"></a>/var/log/</p>
</td>
<td class="cellrowborder" valign="top" width="27.27272727272727%" headers="mcps1.2.4.1.2 "><p id="p53300980"><a name="p53300980"></a><a name="p53300980"></a>message/syslog</p>
</td>
<td class="cellrowborder" valign="top" width="44.44444444444445%" headers="mcps1.2.4.1.3 "><a name="ul22412087"></a><a name="ul22412087"></a><ul id="ul22412087"><li>内核日志路径为/var/log/message。</li></ul>
<div class="note" id="note30958167"><a name="note30958167"></a><a name="note30958167"></a><span class="notetitle"> 说明： </span><div class="notebody"><p class="textintable" id="p10188049"><a name="p10188049"></a><a name="p10188049"></a>或通过dmesg &gt; /var/log/dmesg.log日志收集内核相关日志，包含驱动及内核态日志。</p>
</div></div>
</td>
</tr>
</tbody>
</table>

## 加速引擎的应用

>![](public_sys-resources/icon-note.gif) **说明：**   
>如果用户未购买引擎许可证，建议用户不要通过kae引擎调用相应算法，否则可能会影响openssl加密算法的性能。  
### KAE引擎使用示例代码

```
#include <stdio.h> 

#include <stdlib.h> 

/* OpenSSL headers */ 

#include <openssl/bio.h> 

#include <openssl/ssl.h> 

#include <openssl/err.h> 

#include <openssl/engine.h> 

int main(int argc, char **argv) 

{ 

    /* Initializing OpenSSL */ 

    SSL_load_error_strings(); 

    ERR_load_BIO_strings(); 

    OpenSSL_add_all_algorithms(); 

    /*You can use ENGINE_by_id Function to get the handle of the Huawei Accelerator Engine*/ 

    ENGINE *e = ENGINE_by_id("kae"); 

    /*使能加速器异步功能，可选配置，设置为“0”表示不使能，设置为“1”表示使能，默认使能异步功能*/ 

    ENGINE_ctrl_cmd_string(e, "KAE_CMD_ENABLE_ASYNC", "1", 0) 

    ENGINE_init(e); 


    RSA *rsa = RSA_new_method(e);#指定引擎用于RSA加解密 

    /*The user code*/ 

    …… 

; 

    ENGINE_free(e); 

; 

}
```

### 通过OpenSSL配置文件openssl.cnf使用KAE引擎

新建openssl.cnf 需要添加如下配置信息

```
openssl_conf=openssl_def 
[openssl_def] 
engines=engine_section 
[engine_section] 
kae=kae_section 
[kae_section] 
engine_id=kae 
dynamic_path=/usr/local/lib/engines-1.1/kae.so 
KAE_CMD_ENABLE_ASYNC=1    # 0，表示不使能异步功能，1表示使能异步功能，默认使能 
default_algorithms=ALL 
init=1
```

导出OPENSSL\_CONF环境变量：

```
export OPENSSL_CONF=/home/app/openssl.cnf  #该路径为openssl.cnf存放路径
```

使用OpenSSL配置文件示例如下：

```
#include <stdio.h>  

#include <stdlib.h>  

/* OpenSSL headers */  

#include <openssl/bio.h>  

#include <openssl/ssl.h>  

#include <openssl/err.h>  

#include <openssl/engine.h>  

int main(int argc, char **argv)  

{  

    /* Initializing OpenSSL */  

    SSL_load_error_strings();  

    ERR_load_BIO_strings();  

#Load openssl configure 

OPENSSL_init_crypto(OPENSSL_INIT_LOAD_CONFIG, NULL);    OpenSSL_add_all_algorithms();  

    /*You can use ENGINE_by_id Function to get the handle of the Huawei Accelerator Engine*/  

    ENGINE *e = ENGINE_by_id("kae"); 

    /*The user code*/  

    ……  

;  

    ENGINE_free(e);  

;
}
```

## 故障处理
### 初始化失败

#### 故障现象

加速器引擎没有完全加载成功。

#### 处理步骤

1.  检查加速器驱动是否加载成功，运行lsmod 命令查看uacce.ko、qm.ko 、sgl.ko 、hisi\_sec2.ko 、hisi\_hpre.ko 、hisi\_zip.ko、 hisi\_rde.ko是否在位。

    ```
    # lsmod | grep uacce
    uacce                  262144  2 hisi_hpre,hisi_qm,hisi_sec2,hisi_zip,hisi_rde
    ```

2.  检查/usr/lib64（RPM方式安装时目录）或者/usr/local/lib（源码方式安装时目录）和OpenSSL安装目录是否有加速器引擎库，且建立正确的软连接。

    ```
     [root@localhost home]# ll /usr/local/lib/engines-1.1/ |grep kae 
    #查询kae是否正确安装并建立软连接，如果有正确安装显示如下内容
    # ll /usr/local/lib/engines-1.1/ |grep kae
    lrwxrwxrwx. 1 root root     22 Nov 12 02:33 kae.so -> kae.so.1.0.1
    lrwxrwxrwx. 1 root root     22 Nov 12 02:33 kae.so.0 -> kae.so.1.0.1
    -rwxr-xr-x. 1 root root 112632 May 25  2019 kae.so.1.0.1
    [[root@localhost home]#
     [root@localhost home]# ll /usr/lib64/ | grep libwd  
     #查询libwd是否正确安装并建立软连接，如果有正确安装显示如下内容
    lrwxrwxrwx.  1 root root       14 Nov 12 02:33 libwd.so -> libwd.so.1.0.1
    lrwxrwxrwx.  1 root root       14 Nov 12 02:33 libwd.so.0 -> libwd.so.1.0.1
    -rwxr-xr-x.  1 root root   137120 May 25  2019 libwd.so.1.0.1
    [root@localhost home]#
    ```

3.  检查OpenSSL引擎库的路径是否能通过export命令进行导出。

    ```
    # echo $OPENSSL_ENGINES 
    # export OPENSSL_ENGINES=/usr/local/lib/engines-1.1
    #  echo $OPENSSL_ENGINES
    /usr/local/lib/engines-1.1
    ```


### 安装完加速器引擎之后，查找不到加速器设备

#### 故障现象

安装完加速器引擎之后，查找不到加速器设备。

#### 解决方法

1.  <a name="li1760055514614"></a>检查虚拟文件系统下是否有相应设备。正常情况下有如下相应的加速器设备。

    ```
    # ls -al /sys/class/uacce/
    total 0
    lrwxrwxrwx. 1 root root 0 Nov 14 03:45 hisi_hpre-2 -> ../../devices/pci0000:78/0000:78:00.0/0000:79:00.0/uacce/hisi_hpre-2
    lrwxrwxrwx. 1 root root 0 Nov 14 03:45 hisi_hpre-3 -> ../../devices/pci0000:b8/0000:b8:00.0/0000:b9:00.0/uacce/hisi_hpre-3
    lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_rde-4 -> ../../devices/pci0000:78/0000:78:01.0/uacce/hisi_rde-4
    lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_rde-5 -> ../../devices/pci0000:b8/0000:b8:01.0/uacce/hisi_rde-5
    lrwxrwxrwx. 1 root root 0 Nov 14 08:39 hisi_sec-0 -> ../../devices/pci0000:74/0000:74:01.0/0000:76:00.0/uacce/hisi_sec-0
    lrwxrwxrwx. 1 root root 0 Nov 14 08:39 hisi_sec-1 -> ../../devices/pci0000:b4/0000:b4:01.0/0000:b6:00.0/uacce/hisi_sec-1
    lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_zip-6 -> ../../devices/pci0000:74/0000:74:00.0/0000:75:00.0/uacce/hisi_zip-6
    lrwxrwxrwx. 1 root root 0 Nov 17 22:09 hisi_zip-7 -> ../../devices/pci0000:b4/0000:b4:00.0/0000:b5:00.0/uacce/hisi_zip-7
    ```

2.  <a name="li1600175515610"></a>若要使用hpre设备但是在[1](#li1760055514614)中未查询到，请按[初始化失败](#初始化失败)排查加速器软件是否已正确安装。
3.  <a name="li1560012551369"></a>若[2](#li1600175515610)已确认加速器软件正确安装，请排查通过lspci命令查看物理设备是否存在。

    ```
    # lspci | grep HPRE
    79:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon HPRE Engine (rev 21)
    b9:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon HPRE Engine (rev 21)
    ## lspci | grep SEC
    76:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon SEC Engine (rev 21)
    b6:00.0 Network and computing encryption device: Huawei Technologies Co., Ltd. HiSilicon SEC Engine (rev 21)
    ## lspci | grep RDE
    78:01.0 RAID bus controller: Huawei Technologies Co., Ltd. HiSilicon RDE Engine (rev 21)
    b8:01.0 RAID bus controller: Huawei Technologies Co., Ltd. HiSilicon RDE Engine (rev 21)
    ## lspci | grep ZIP
    75:00.0 Processing accelerators: Huawei Technologies Co., Ltd. HiSilicon ZIP Engine (rev 21)
    b5:00.0 Processing accelerators: Huawei Technologies Co., Ltd. HiSilicon ZIP Engine (rev 21)
    #
    ```

4.  若[3](#li1560012551369)未查询到相应的物理设备，请确认以下，不分先后：
    -   确认是否已导入加速器许可证，若未导入，请请参考《[TaiShan 机架服务器 iBMC \(V500及以上\) 用户指南](https://support.huawei.com/enterprise/zh/doc/EDOC1100121687)》中“许可证管理”章节，导入加速器许可证。导入加速器许可证之后，需要掉电重启BMC，使能License。
    -   确认BMC和BIOS版本是否支持加速器特性。


### 升级加速器驱动失败

#### 故障现象

升级加速器驱动后，重启系统驱动版本仍为旧版本。

#### 可能原因

在升级加速器驱动前，系统更新了其他驱动包，这些驱动包可能重新更新了引导文件系统initramfs，将未升级前的加速器驱动一起更新到了initramfs文件系统中。例如系统更新了网卡驱动，或者人为更新了initramfs文件系统，导致系统重启时优先从initramfs文件系统中加载加速器驱动。

#### 处理步骤

升级加速器驱动版本后，通过执行dracut \-\-force命令重新更新initramfs文件系统。
