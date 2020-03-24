# 配置repo源<a name="ZH-CN_TOPIC_0229243686"></a>

>![](public_sys-resources/icon-note.gif) **说明：**   
>本章节中以openEuler-20.03-LTS-aarch64-dvd.iso镜像文件和openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum校验文件为例，请根据实际需要的镜像文件和校验文件进行修改。  

## 下载ISO镜像<a name="section18587122144716"></a>

-   通过跨平台文件传输工具下载ISO镜像
    1.  登录openEuler社区，网址为：[https://openeuler.org](https://openeuler.org)。
    2.  单击“下载”，进入下载页面。
    3.  单击“获取ISO：”后面的“Link”，显示下载列表。
    4.  <a name="li12471102810496"></a>单击“openEuler-20.03-LTS-aarch64-dvd.iso”将openEuler发布包下载到本地。
    5.  <a name="li1585718426494"></a>单击“openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum”将openEuler校验文件下载到本地。
    6.  登录openEuler操作系统，新建用于存放发布包和检验文件的目录,如“/home/iso”。

        ```
        mkdir /home/iso
        ```

    7.  使用跨平台文件传输工具（如WinSCP）将本地的openEuler发布包和校验文件上传到openEuler操作系统。

-   通过wget命令下载ISO镜像
    1.  登录openEuler社区，网址为：[https://openeuler.org](https://openeuler.org)。
    2.  单击“下载”，进入下载页面。
    3.  单击“获取ISO：”后面的“Link”，显示下载列表。
    4.  右键单击“openEuler-20.03-LTS-aarch64-dvd.iso”，单击“复制链接地址”，将openEuler发布包地址记录好。
    5.  右键单击“openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum”，单击“复制链接地址”，将openEuler校验文件地址记录好。
    6.  登录openEuler操作系统，新建用于存放发布包和检验文件的目录,如“/home/iso”，并切换到该目录。

        ```
        mkdir /home/iso
        cd /home/iso
        ```

    7.  使用**wget**命令远程下载发布包和检验文件，命令中的  _ipaddriso_  和  _ipaddrisosum_  分别为[4](#li12471102810496)和[5](#li1585718426494)中记录的地址。

        ```
        wget ipaddriso
        wget ipaddrisosum
        ```



## 发布包完整性校验<a name="section104307331869"></a>

1.  获取校验文件中的校验值。

    ```
    cat openEuler-20.03-LTS-aarch64-dvd.iso.sha256sum
    ```

2.  计算openEuler发布包的sha256校验值。

    ```
    sha256sum openEuler-20.03-LTS-aarch64-dvd.iso 
    ```

    命令执行完成后，输出校验值。

3.  对比步骤1和步骤2计算的校验值是否一致。

    如果校验值一致说明iso文件完整性没有破坏，如果校验值不一致则可以确认文件完整性已被破坏，需要重新获取。


## 挂载ISO并配置为repo源<a name="section12437641115515"></a>

使用mount命令挂载镜像文件。

示例如下：

```
# mount /home/iso/openEuler-20.03-LTS-aarch64-dvd.iso /mnt/
```

挂载好的mnt目录如下：

```
.
│── boot.catalog
│── docs
│── EFI
│── images
│── Packages
│── repodata
│── TRANS.TBL
└── RPM-GPG-KEY-openEuler
```

其中，Packages为rpm包所在的目录，repodata为repo源元数据所在的目录，RPM-GPG-KEY-openEuler为openEuler的签名公钥。。

挂载后的目录可以配置为yum源使用，在/etc/yum.repos.d/目录下创建\*\*\*.repo的配置文件（必须以.repo为扩展名）。

示例如下：

在/etc/yum.repos.d目录下创建openEuler.repo 文件，使用本地镜像挂载目录作为yum源，openEuler.repo的内容如下：

```
[base]
name=base
baseurl=file:///mnt
enabled=1
gpgcheck=1
gpgkey=file:///mnt/RPM-GPG-KEY-openEuler
```

****

>![](public_sys-resources/icon-note.gif) **说明：**   
>-   gpgcheck可设置为1或0，1表示进行gpg（GNU Private Guard）校验，0表示不进行gpg校验，gpgcheck可以确定rpm包的来源是有效和安全的。  
>-   gpgkey为签名公钥的存放路径。  

