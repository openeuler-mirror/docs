# 配置devicemapper存储驱动<a name="ZH-CN_TOPIC_0184808209"></a>

## 注意事项<a name="zh-cn_topic_0182217267_section425342310219"></a>

-   使用devicemapper必须使用devicemapper+direct-lvm的方式，配置的方法可以参考  [https://docs.docker.com/engine/userguide/storagedriver/device-mapper-driver/\#configure-direct-lvm-mode-for-production](https://docs.docker.com/engine/userguide/storagedriver/device-mapper-driver/#configure-direct-lvm-mode-for-production)  。
-   配置devicemapper时，如果系统上没有足够的空间给thinpool做自动扩容，请禁止自动扩容功能。
-   禁止把/etc/lvm/profile/docker-thinpool.profile中如下两个值都改成100。

    ```
    activation {   
      thin_pool_autoextend_threshold=80   
      thin_pool_autoextend_percent=20 
    }
    ```

-   使用devicemapper时推荐加上--storage-opt dm.use\_deferred\_deletion=true --storage-opt dm.use\_deferred\_removal=true。
-   在EulerOS上使用devicemapper时，容器文件系统推荐使用ext4，需要在docker daemon的配置参数中加 上--storage-opt dm.fs=ext4。
-   当graphdriver为devicemapper时，如果metadata文件损坏且不可恢复，需要人工介入恢复。禁止直接操作或篡改daemon存储devicemapper的元数据。

**docker daemon开启了user namespace特性，切换devicemapper存储池时的注意事项**

-   一般启动容器时，deviceset-metadata文件为：/var/lib/docker/devicemapper/metadata/deviceset-metadata。
-   使用了user namespace场景下，deviceset-metadata文件使用的是：/var/lib/docker/\{userNSUID.GID\}/devicemapper/metadata/deviceset-metadata。
-   使用devicemapper存储驱动，容器在user namespace场景和普通场景之间切换时，需要将对应deviceset-metadata文件中的BaseDeviceUUID内容清空；针对thinpool扩容或者重建的场景下，也同样的需要将对应deviceset-metadata文件中的BaseDeviceUUID内容清空，否则docker服务会重启失败。

