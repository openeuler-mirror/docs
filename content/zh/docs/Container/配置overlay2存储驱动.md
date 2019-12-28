# 配置overlay2存储驱动<a name="ZH-CN_TOPIC_0215574100"></a>

本发行版docker支持overlay2和devicemapper两种存储驱动。由于overlay2较devicemapper而言，拥有更好的性能，建议用户在生成环境中优先考虑。

## 配置overlay2存储驱动<a name="zh-cn_topic_0215573557_section1924141210352"></a>

docker默认为使用overlay2存储驱动，也可以通过如下两种方式显示指定

-   编辑/etc/docker/daemon.json，通过storage-driver字段显示指定

```
cat /etc/docker/daemon.json
{
    "storage-driver": "overlay2"
}
```

-   编辑/etc/sysconfig/docker-storage，通过docker deamon启动参数显示指定

```
cat /etc/sysconfig/docker-storage 
DOCKER_STORAGE_OPTIONS="--storage-driver=overlay2"
```

如果将overlay2作为graphdriver，在容器中第一次修改镜像中的文件时，若该文件的大小大于系统剩余的空间，修改将会失败。因为即使修改很小，也要把这个文件完整的拷贝到上层，剩余空间不足导致失败。

overlay2文件系统相比普通文件系统天然存在一些行为差异，归纳如下：

1.  内核版本
    -   overlay2只兼容原生4.0以上内核，建议配合使用ext4文件系统。

2.  Copy-UP性能问题
    -   修改lower层文件会触发文件复制到upper层，其中数据块复制和fsync比较耗时。

3.  rename目录问题
    -   只有源路径和目标路径都在merged层时，才允许rename系统调用，否则rename系统调用会报错-EXDEV。
    -   内核4.10引入了redirect dir特性来修复rename问题，对应内核选项为CONFIG\_OVERLAY\_FS\_REDIRECT\_DIR。

        使用overlay2时，在文件系统中对于目录进行重命名时，因为EulerOS中/sys/module/overlay/parameters/redirect\_dir特性开关已设置为关闭状态，则会导致使用失败；如果用户要使用相关特性，需要用户手动设置/sys/module/overlay/parameters/redirect\_dir为“Y”。

4.  Hard link break问题
    -   当lower层目录中有多个硬链接，在merged层写入数据会触发Copy-UP，导致硬链接断开。
    -   内核4.13引入了index feature来修复这个问题，对应内核选项为 CONFIG\_OVERLAY\_FS\_INDEX。注意这个选项没有前向兼容性，不支持热升级。

5.  st\_dev和st\_ino变化
    -   触发Copy-UP之后，用户只能看到merged层中的新文件，inode会变化。虽然attr和xattr可以复制，但st\_dev和st\_ino具有唯一性，不可复制。这会导致stat和ls查看 到相应