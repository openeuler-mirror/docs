# 配置overlay2存储驱动<a name="ZH-CN_TOPIC_0215574100"></a>

## 配置方法<a name="zh-cn_topic_0215573557_section1924141210352"></a>

docker默认为使用overlay2存储驱动，也可以通过如下两种方式显示指定。

-   编辑/etc/docker/daemon.json，通过storage-driver字段显示指定。

    ```
    cat /etc/docker/daemon.json
    {
        "storage-driver": "overlay2"
    }
    ```


-   编辑/etc/sysconfig/docker-storage，通过docker deamon启动参数显示指定。

    ```
    cat /etc/sysconfig/docker-storage 
    DOCKER_STORAGE_OPTIONS="--storage-driver=overlay2"
    ```


## 注意事项<a name="zh-cn_topic_0215573557_section891296700"></a>

-   部分容器生命周期管理的操作会报找不到相应的rootfs或者相关的可执行文件。
-   如果容器的健康检查配置的是执行容器内的可执行文件，也会报错，导致容器的健康检查失败。

-   如果将overlay2作为graphdriver，在容器中第一次修改镜像中的文件时，若该文件的大小大于系统剩余的空间，修改将会失败。因为即使修改很小，也要把这个文件完整的拷贝到上层，剩余空间不足导致失败。
-   overlay2文件系统相比普通文件系统天然存在一些行为差异，归纳如下：
    -   内核版本

        overlay2只兼容原生4.0以上内核，建议配合使用ext4文件系统。

    -   Copy-UP性能问题

        修改lower层文件会触发文件复制到upper层，其中数据块复制和fsync比较耗时。

    -   rename目录问题
        -   只有源路径和目标路径都在merged层时，才允许rename系统调用，否则rename系统调用会报错-EXDEV。
        -   内核4.10引入了redirect dir特性来修复rename问题，对应内核选项为CONFIG\_OVERLAY\_FS\_REDIRECT\_DIR。

            在使用overlay2场景下，对文件系统目录进行重命名时，如果系统配置文件/sys/module/overlay/parameters/redirect\_dir中配置的特性开关为关闭状态，则会导致使用失败；如果用户要使用相关特性，需要用户手动设置/sys/module/overlay/parameters/redirect\_dir为“Y”。

    -   Hard link break问题
        -   当lower层目录中有多个硬链接，在merged层写入数据会触发Copy-UP，导致硬链接断开。
        -   内核4.13引入了index feature来修复这个问题，对应内核选项为 CONFIG\_OVERLAY\_FS\_INDEX。注意这个选项没有前向兼容性，不支持热升级。

    -   st\_dev和st\_ino变化

        触发Copy-UP之后，用户只能看到merged层中的新文件，inode会变化。虽然attr和xattr可以复制，但st\_dev和st\_ino具有唯一性，不可复制。这会导致stat和ls查看 到相应的变化。

    -   fd变化

        Copy-UP之前，以只读模式打开文件得到描述符fd1，Copy-UP之后，打开同名文件得到文件描述符fd2， 二者实际指向不同的文件。向fd2写入的数据不会在fd1中体现。



## 异常场景<a name="zh-cn_topic_0215573557_section75711912441"></a>

容器使用配置了overlay2存储驱动的过程中，可能出现挂载点被覆盖的异常情况。例如

## 异常场景-挂载点被覆盖<a name="zh-cn_topic_0215573557_section03841042181112"></a>

挂载关系：在问题容器的挂载点的下面，存在一个/var/lib/docker/overlay2的挂载点：

```
[root@localhost ~]# mount -l | grep overlay 
overlay on /var/lib/docker/overlay2/844fd3bca8e616572935808061f009d106a8748dfd29a0a4025645457fa21785/merged type overlay (rw,relatime,seclabel,lowerdir=/var/lib/docker/overlay2/l/JL5PZQLNDCIBU3ZOG3LPPDBHIJ:/var/lib/docker/overlay2/l/ELRPYU4JJG4FDPRLZJCZZE4UO6,upperdir=/var/lib/docker/overlay2/844fd3bca8e616572935808061f009d106a8748dfd29a0a4025645457fa21785/diff,workdir=/var/lib/docker/overlay2/844fd3bca8e616572935808061f009d106a8748dfd29a0a4025645457fa21785/work) 
/dev/mapper/dm-root on /var/lib/docker/overlay2 type ext4 (rw,relatime,seclabel,data=ordered)
```

执行部分docker命令会遇到错误，比如：

```
[root@localhost ~]# docker rm 1348136d32
docker rm: Error response from daemon: driver "overlay2" failed to remove root filesystem for 1348136d32: error while removing /var/lib/docker/overlay2/844fd3bca8e616572935808061f009d106a8748dfd29a0a4025645457fa21785: invalid argument
```

此时，在主机侧可以发现对应容器的rootfs找不到，但这并不意味着rootfs丢失，只是被/var/lib/docker/overlay2挂载点覆盖，业务仍然可以正常运行，不受影响。修复方案可以参考如下：

-   修复方案一
    1.  确定当前docker所使用graphdriver：

        ```
        docker info | grep "Storage Driver"
        ```

    2.  查询当前的挂载点：

        ```
        Devicemapper: mount -l | grep devicemapper 
        Overlay2: mount -l | grep overlay2
        ```

        输出格式为： A on B type C \(D\)

        -   A：块设备名称或overlay
        -   B：挂载点
        -   C：文件系统类型
        -   D：挂载属性

    3.  从下往上逐一umount这些挂载点B。
    4.  然后全部docker restart这些容器，或者删除所有容器。
    5.  重启docker。

        ```
        systemctl restart docker
        ```



-   修复方案二
    1.  业务迁移
    2.  节点重启


