# 构建RPM包<a name="ZH-CN_TOPIC_0229243694"></a>

构建源码、二进制和包含调试信息的软件包，在spec文件所在目录执行如下命令：

```
# rpmbuild -ba hello.spec 
```

执行成功后，查看结果，使用如下命令：

```
# tree ~/rpmbuild/*RPMS

/home/testUser/rpmbuild/RPMS
└── aarch64
    ├── hello-2.10-1.aarch64.rpm
    ├── hello-debuginfo-2.10-1.aarch64.rpm
    └── hello-debugsource-2.10-1.aarch64.rpm
/home/testUser/rpmbuild/SRPMS
└── hello-2.10-1.src.rpm
```

