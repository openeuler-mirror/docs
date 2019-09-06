# 构建RPM包<a name="ZH-CN_TOPIC_0186977705"></a>

构建源码、二进制和包含调试信息的软件包，在spec文件所在目录执行如下命令：

```
$ rpmbuild -ba hello.spec 
```

执行成功后，查看结果，使用如下命令：

```
$ tree ~/rpmbuild/*RPMS
/root/rpmbuild/RPMS
└── XXXXX
    ├── hello-2.10-1.XXX.XXXX.XXXX.rpm
    └── hello-debuginfo-2.10-1.XXX.XXXX.XXXX.rpm
/root/rpmbuild/SRPMS
└── hello-2.10-1.el7.XXXX.src.rpm
```

