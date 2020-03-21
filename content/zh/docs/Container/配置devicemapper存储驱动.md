# 配置devicemapper存储驱动<a name="ZH-CN_TOPIC_0222861774"></a>

使用devicemapper存储驱动需要先配置一个thinpool设备，而配置thinpool需要一个独立的块设备，且该设备需要有足够的空闲空间用于创建thinpool，请用户根据实际需求确定。这里假设独立块设备为/dev/xvdf，具体的配置方法如下：

**一、配置thinpool**

1.  停止isulad服务。

    ```
    # systemctl stop isulad
    ```

2.  基于块设备创建一个lvm卷。

    ```
    # pvcreate /dev/xvdf
    ```

3.  使用刚才创建的物理卷创建一个卷组。

    ```
    # vgcreate isula /dev/xvdf
    Volume group "isula" successfully created：
    ```

4.  创建名为thinpool和thinpoolmeta的两个逻辑卷。

    ```
    # lvcreate --wipesignatures y -n thinpool isula -l 95%VG
    Logical volume "thinpool" created.
    ```

    ```
    # lvcreate --wipesignatures y -n thinpoolmeta isula -l 1%VG
    Logical volume "thinpoolmeta" created.
    ```

5.  将新创建的两个逻辑卷转换成thinpool以及thinpool所使用的metadata，这样就完成了thinpool配置。

    ```
    # lvconvert -y --zero n -c 512K --thinpool isula/thinpool --poolmetadata isula/thinpoolmeta
    
    WARNING: Converting logical volume isula/thinpool and isula/thinpoolmeta to
    thin pool's data and metadata volumes with metadata wiping.
    THIS WILL DESTROY CONTENT OF LOGICAL VOLUME (filesystem etc.)
    Converted isula/thinpool to thin pool.
    ```


  

**二、修改isulad配置文件**

1.  如果环境之前运行过isulad，请先备份之前的数据。

    ```
    # mkdir /var/lib/isulad.bk
    # mv /var/lib/isulad/* /var/lib/isulad.bk
    ```

2.  修改配置文件

    这里提供了两种配置方式，用户可根据实际情况的选择合适的方式。

    -   编辑/etc/isulad/daemon.json，配置storage-driver字段值为devicemapper，并配置storage-opts字段的相关参数，支持参数请参见[参数说明](#zh-cn_topic_0222861454_section1712923715282)。配置参考如下所示：

        ```
        {
            "storage-driver": "devicemapper"
            "storage-opts": [
        	    "dm.thinpooldev=/dev/mapper/isula-thinpool",
        	    "dm.fs=ext4",
                    "dm.min_free_space=10%"
            ]
        }
        ```

    -   或者也可以通过编辑/etc/sysconfig/iSulad，在isulad启动参数里显式指定，支持参数请参见[参数说明](#zh-cn_topic_0222861454_section1712923715282)。配置参考如下所示：

        ```
        OPTIONS="--storage-driver=devicemapper --storage-opt dm.thinpooldev=/dev/mapper/isula-thinpool --storage-opt dm.fs=ext4 --storage-opt dm.min_free_space=10%"
        ```

3.  启动isulad，使配置生效。

    ```
    # systemctl start isulad
    ```


## 参数说明<a name="zh-cn_topic_0222861454_section1712923715282"></a>

storage-opts 支持的参数请参见[表1](#zh-cn_topic_0222861454_table3191161993812)。

**表 1**  starage-opts字段参数说明

<a name="zh-cn_topic_0222861454_table3191161993812"></a>
<table><thead align="left"><tr id="zh-cn_topic_0222861454_row10191171913388"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0222861454_p15732144612386"><a name="zh-cn_topic_0222861454_p15732144612386"></a><a name="zh-cn_topic_0222861454_p15732144612386"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="13.29132913291329%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0222861454_p197321046123819"><a name="zh-cn_topic_0222861454_p197321046123819"></a><a name="zh-cn_topic_0222861454_p197321046123819"></a>是否必选</p>
</th>
<th class="cellrowborder" valign="top" width="53.375337533753374%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0222861454_p177327461387"><a name="zh-cn_topic_0222861454_p177327461387"></a><a name="zh-cn_topic_0222861454_p177327461387"></a>含义</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0222861454_row7191219133819"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0222861454_p6732154610382"><a name="zh-cn_topic_0222861454_p6732154610382"></a><a name="zh-cn_topic_0222861454_p6732154610382"></a>dm.fs</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0222861454_p873254663811"><a name="zh-cn_topic_0222861454_p873254663811"></a><a name="zh-cn_topic_0222861454_p873254663811"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0222861454_p77323464385"><a name="zh-cn_topic_0222861454_p77323464385"></a><a name="zh-cn_topic_0222861454_p77323464385"></a>用于指定容器使用的文件系统类型。当前必须配置为ext4，即dm.fs=ext4</p>
</td>
</tr>
<tr id="zh-cn_topic_0222861454_row319112198385"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0222861454_p773244619383"><a name="zh-cn_topic_0222861454_p773244619383"></a><a name="zh-cn_topic_0222861454_p773244619383"></a>dm.basesize</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0222861454_p873294673819"><a name="zh-cn_topic_0222861454_p873294673819"></a><a name="zh-cn_topic_0222861454_p873294673819"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0222861454_p2732194610387"><a name="zh-cn_topic_0222861454_p2732194610387"></a><a name="zh-cn_topic_0222861454_p2732194610387"></a>用于指定单个容器的最大存储空间大小，单位为k/m/g/t/p，也可以使用大写字母，例如dm.basesize=50G。该参数只在首次初始化时有效。</p>
</td>
</tr>
<tr id="zh-cn_topic_0222861454_row12191151913384"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0222861454_p19732154663818"><a name="zh-cn_topic_0222861454_p19732154663818"></a><a name="zh-cn_topic_0222861454_p19732154663818"></a>dm.mkfsarg</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0222861454_p97321246123819"><a name="zh-cn_topic_0222861454_p97321246123819"></a><a name="zh-cn_topic_0222861454_p97321246123819"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0222861454_p147321246123818"><a name="zh-cn_topic_0222861454_p147321246123818"></a><a name="zh-cn_topic_0222861454_p147321246123818"></a>用于在创建基础设备时指定额外的mkfs参数。例如“dm.mkfsarg=-O ^has_journal”</p>
</td>
</tr>
<tr id="zh-cn_topic_0222861454_row1919116199380"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0222861454_p1373284611381"><a name="zh-cn_topic_0222861454_p1373284611381"></a><a name="zh-cn_topic_0222861454_p1373284611381"></a>dm.mountopt</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0222861454_p157321246183816"><a name="zh-cn_topic_0222861454_p157321246183816"></a><a name="zh-cn_topic_0222861454_p157321246183816"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0222861454_p14732164623818"><a name="zh-cn_topic_0222861454_p14732164623818"></a><a name="zh-cn_topic_0222861454_p14732164623818"></a>用于在挂载容器时指定额外的mount参数。例如dm.mountopt=nodiscard</p>
</td>
</tr>
<tr id="zh-cn_topic_0222861454_row0191719163817"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0222861454_p8732746193819"><a name="zh-cn_topic_0222861454_p8732746193819"></a><a name="zh-cn_topic_0222861454_p8732746193819"></a>dm.thinpooldev</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0222861454_p4732646183815"><a name="zh-cn_topic_0222861454_p4732646183815"></a><a name="zh-cn_topic_0222861454_p4732646183815"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0222861454_p157325468382"><a name="zh-cn_topic_0222861454_p157325468382"></a><a name="zh-cn_topic_0222861454_p157325468382"></a>用于指定容器/镜像存储时使用的thinpool设备。</p>
</td>
</tr>
<tr id="zh-cn_topic_0222861454_row619161915388"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0222861454_p1373214466389"><a name="zh-cn_topic_0222861454_p1373214466389"></a><a name="zh-cn_topic_0222861454_p1373214466389"></a>dm.min_free_space</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0222861454_p6733346153810"><a name="zh-cn_topic_0222861454_p6733346153810"></a><a name="zh-cn_topic_0222861454_p6733346153810"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0222861454_p1273384653817"><a name="zh-cn_topic_0222861454_p1273384653817"></a><a name="zh-cn_topic_0222861454_p1273384653817"></a>用于指定最小的预留空间，用百分比表示。例如dm.min_free_space=10%，表示当剩余存储空间只剩10%左右时，创建容器等和存储相关操作就会失败。</p>
</td>
</tr>
</tbody>
</table>

## 注意事项<a name="zh-cn_topic_0222861454_section188811239165314"></a>

-   配置devicemapper时，如果系统上没有足够的空间给thinpool做自动扩容，请禁止自动扩容功能。

    禁止自动扩容的方法是把/etc/lvm/profile/isula-thinpool.profile中thin\_pool\_autoextend\_threshold和thin\_pool\_autoextend\_percent两个值都改成100，如下所示：

    ```
    activation {   
      thin_pool_autoextend_threshold=100   
      thin_pool_autoextend_percent=100 
    }
    ```

-   使用devicemapper时，容器文件系统必须配置为ext4，需要在isulad的配置参数中加上--storage-opt dm.fs=ext4。
-   当graphdriver为devicemapper时，如果metadata文件损坏且不可恢复，需要人工介入恢复。禁止直接操作或篡改daemon存储devicemapper的元数据。
-   使用devicemapper lvm时，异常掉电导致的devicemapper thinpool损坏，无法保证thinpool损坏后可以修复，也不能保证数据的完整性，需重建thinpool。

**iSula开启了user namespace特性，切换devicemapper存储池时的注意事项**

-   一般启动容器时，deviceset-metadata文件为：/var/lib/isulad/devicemapper/metadata/deviceset-metadata。
-   使用了user namespace场景下，deviceset-metadata文件使用的是：/var/lib/isulad/\{userNSUID.GID\}/devicemapper/metadata/deviceset-metadata。
-   使用devicemapper存储驱动，容器在user namespace场景和普通场景之间切换时，需要将对应deviceset-metadata文件中的BaseDeviceUUID内容清空；针对thinpool扩容或者重建的场景下，也同样的需要将对应deviceset-metadata文件中的BaseDeviceUUID内容清空，否则isulad服务会重启失败。

