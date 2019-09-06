# mkrepo创建repo源<a name="ZH-CN_TOPIC_0183245389"></a>

使用repo构建工具mkrepo构建repo源，mkrepo集成rsync、createrepo等命令，mkrepo的使用方式如下：

```
mkrepo
Usage: mkrepo -i isoname -d repodirectory
Options:
        -i, --iso        Specify the iso to make
        -d, --dir        Specify the directory to make repo
        --key-dir        GPG key directory
        -h, --help       Display help information.
Example:
        mkrepo -i openEuler.iso -d /home/openEuler/
```

其中，-i/--iso表示ISO所在的路径，-d/--dir表示要构建的repo源目录，--key-dir表示openEuler提供的GPG公钥存放目录，默认存放在repo的父目录，也可指定。

示例如下：

```
mkrepo -i /home/openEuler/openEuler-1.0-aarch64-dvd.iso -d /srv/repo/os/1.0/base/aarch64 --key-dir /srv/repo/
```

构建好的repo目录如下：

```
.
├── os
│   └── 1.0
│       └── base
│           └── aarch64
│               ├── Packages
│               └── repodata
└── RPM-GPG-KEY-openEuler
```

其中，Packages为rpm包所在的目录，repodata为repo源元数据所在的目录，RPM-GPG-KEY-openEuler为openEuler的签名公钥。

