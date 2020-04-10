# Building an RPM Package<a name="EN-US_TOPIC_0229243694"></a>

Run the following command in the directory where the .spec file is located to build the source code, binary files, and software packages that contain debugging information:

```
# rpmbuild -ba hello.spec 
```

Run the following command to view the execution result:

```
# tree ~/rpmbuild/*RPMS

/home/testUser/rpmbuild/RPMS
└── aarch64
    ├── hello-2.10-1.aarch64.rpm
    ├── hello-debuginfo-2.10-1.aarch64.rpm
    └── hello-debugsource-2.10-1.aarch64.rpm
/home/testUser/rpmbuild/SRPMS
└── hello-2.10-1.src.rpm
```

