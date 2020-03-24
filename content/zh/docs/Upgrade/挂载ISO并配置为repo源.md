# 挂载ISO并配置为repo源<a name="ZH-CN_TOPIC_0227389903"></a>

使用mount命令挂载镜像文件。

示例如下：

```
# mount /home/iso/openEuler-20.03-LTS-everything-aarch64-dvd.iso /mnt/
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

