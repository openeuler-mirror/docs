# 创建本地repo源<a name="ZH-CN_TOPIC_0183245389"></a>

可以拷贝镜像中相关文件至本地目录以创建本地repo源，示例如下：

```
mount /home/openEuler/openEuler-1.0-base-aarch64-dvd.iso  /mnt/
mkdir -p /srv/repo/
cp -r /mnt/Packages /srv/repo/
cp -r /mnt/repodata /srv/repo/
cp -r /mnt/RPM-GPG-KEY-openEuler /srv/repo/
```

从而本地repo目录如下：

```
.
│── Packages
│── repodata
└── RPM-GPG-KEY-openEuler
```

Packages为rpm包所在的目录，repodata为repo源元数据所在的目录，RPM-GPG-KEY-openEuler为openEuler的签名公钥。

