# 挂载ISO创建repo源<a name="ZH-CN_TOPIC_0183245388"></a>

使用mount命令挂载镜像文件。

示例如下：

```
mount /home/openEuler/openEuler-1.0-base-aarch64-dvd.iso  /mnt/
```

挂载好的mnt目录如下：

```
.
│── boot.catalog
│── EFI
│── images
│── Packages
│── repodata
│── TRANS.TBL
└── RPM-GPG-KEY-openEuler
```

其中，Packages为rpm包所在的目录，repodata为repo源元数据所在的目录，RPM-GPG-KEY-openEuler为openEuler的签名公钥。

