# devicemapper Storage Driver Configuration<a name="EN-US_TOPIC_0222861774"></a>

To use the devicemapper storage driver, you need to configure a thinpool device which requires an independent block device with sufficient free space. Take the independent block device  **/dev/xvdf**  as an example. The configuration method is as follows:

1. Configuring a thinpool

1.  Stop the iSulad service.

    ```
    # systemctl stop isulad
    ```

2.  Create a logical volume manager \(LVM\) volume based on the block device.

    ```
    # pvcreate /dev/xvdf
    ```

3.  Create a volume group based on the created physical volume.

    ```
    # vgcreate isula /dev/xvdf
    Volume group "isula" successfully created:
    ```

4.  Create two logical volumes named  **thinpool**  and  **thinpoolmeta**.

    ```
    # lvcreate --wipesignatures y -n thinpool isula -l 95%VG
    Logical volume "thinpool" created.
    ```

    ```
    # lvcreate --wipesignatures y -n thinpoolmeta isula -l 1%VG
    Logical volume "thinpoolmeta" created.
    ```

5.  Convert the two logical volumes into a thinpool and the metadata used by the thinpool.

    ```
    # lvconvert -y --zero n -c 512K --thinpool isula/thinpool --poolmetadata isula/thinpoolmeta
    
    WARNING: Converting logical volume isula/thinpool and isula/thinpoolmeta to
    thin pool's data and metadata volumes with metadata wiping.
    THIS WILL DESTROY CONTENT OF LOGICAL VOLUME (filesystem etc.)
    Converted isula/thinpool to thin pool.
    ```


  

2. Modifying the iSulad configuration files

1.  If iSulad has been used in the environment, back up the running data first.

    ```
    # mkdir /var/lib/isulad.bk
    # mv /var/lib/isulad/* /var/lib/isulad.bk
    ```

2.  Modify configuration files.

    Two configuration methods are provided. Select one based on site requirements.

    -   Edit the  **/etc/isulad/daemon.json**  file, set  **storage-driver**  to  **devicemapper**, and set parameters related to the  **storage-opts**  field. For details about related parameters, see  [Parameter Description](#en-us_topic_0222861454_section1712923715282). The following lists the configuration reference:

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

    -   You can also edit  **/etc/sysconfig/iSulad**  to explicitly specify related iSulad startup parameters. For details about related parameters, see  [Parameter Description](#en-us_topic_0222861454_section1712923715282). The following lists the configuration reference:

        ```
        OPTIONS="--storage-driver=devicemapper --storage-opt dm.thinpooldev=/dev/mapper/isula-thinpool --storage-opt dm.fs=ext4 --storage-opt dm.min_free_space=10%"
        ```

3.  Start iSulad for the settings to take effect.

    ```
    # systemctl start isulad
    ```


## Parameter Description<a name="en-us_topic_0222861454_section1712923715282"></a>

For details about parameters supported by storage-opts, see  [Table 1](#en-us_topic_0222861454_table3191161993812).

**Table  1**  Parameter description

<a name="en-us_topic_0222861454_table3191161993812"></a>
<table><thead align="left"><tr id="en-us_topic_0222861454_row10191171913388"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="en-us_topic_0222861454_p15732144612386"><a name="en-us_topic_0222861454_p15732144612386"></a><a name="en-us_topic_0222861454_p15732144612386"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="13.29132913291329%" id="mcps1.2.4.1.2"><p id="en-us_topic_0222861454_p197321046123819"><a name="en-us_topic_0222861454_p197321046123819"></a><a name="en-us_topic_0222861454_p197321046123819"></a>Mandatory or Not</p>
</th>
<th class="cellrowborder" valign="top" width="53.375337533753374%" id="mcps1.2.4.1.3"><p id="en-us_topic_0222861454_p177327461387"><a name="en-us_topic_0222861454_p177327461387"></a><a name="en-us_topic_0222861454_p177327461387"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0222861454_row7191219133819"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0222861454_p6732154610382"><a name="en-us_topic_0222861454_p6732154610382"></a><a name="en-us_topic_0222861454_p6732154610382"></a>dm.fs</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0222861454_p873254663811"><a name="en-us_topic_0222861454_p873254663811"></a><a name="en-us_topic_0222861454_p873254663811"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0222861454_p77323464385"><a name="en-us_topic_0222861454_p77323464385"></a><a name="en-us_topic_0222861454_p77323464385"></a>Specifies the type of the file system used by a container. This parameter must be set to <strong id="en-us_topic_0222861454_b1637217270154"><a name="en-us_topic_0222861454_b1637217270154"></a><a name="en-us_topic_0222861454_b1637217270154"></a>ext4</strong>, that is, <strong id="en-us_topic_0222861454_b13531152516157"><a name="en-us_topic_0222861454_b13531152516157"></a><a name="en-us_topic_0222861454_b13531152516157"></a>dm.fs=ext4</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0222861454_row319112198385"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0222861454_p773244619383"><a name="en-us_topic_0222861454_p773244619383"></a><a name="en-us_topic_0222861454_p773244619383"></a>dm.basesize</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0222861454_p873294673819"><a name="en-us_topic_0222861454_p873294673819"></a><a name="en-us_topic_0222861454_p873294673819"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0222861454_p2732194610387"><a name="en-us_topic_0222861454_p2732194610387"></a><a name="en-us_topic_0222861454_p2732194610387"></a>Specifies the maximum storage space of a single container. The unit can be <strong id="en-us_topic_0222861454_b321491151614"><a name="en-us_topic_0222861454_b321491151614"></a><a name="en-us_topic_0222861454_b321491151614"></a>k</strong>, <strong id="en-us_topic_0222861454_b91241136161"><a name="en-us_topic_0222861454_b91241136161"></a><a name="en-us_topic_0222861454_b91241136161"></a>m</strong>, <strong id="en-us_topic_0222861454_b202115161619"><a name="en-us_topic_0222861454_b202115161619"></a><a name="en-us_topic_0222861454_b202115161619"></a>g</strong>, <strong id="en-us_topic_0222861454_b672476111612"><a name="en-us_topic_0222861454_b672476111612"></a><a name="en-us_topic_0222861454_b672476111612"></a>t</strong>, or <strong id="en-us_topic_0222861454_b1837212819160"><a name="en-us_topic_0222861454_b1837212819160"></a><a name="en-us_topic_0222861454_b1837212819160"></a>p</strong>. An uppercase letter can also be used, for example, <strong id="en-us_topic_0222861454_b16214346181515"><a name="en-us_topic_0222861454_b16214346181515"></a><a name="en-us_topic_0222861454_b16214346181515"></a>dm.basesize=50G</strong>. This parameter is valid only during the first initialization.</p>
</td>
</tr>
<tr id="en-us_topic_0222861454_row12191151913384"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0222861454_p19732154663818"><a name="en-us_topic_0222861454_p19732154663818"></a><a name="en-us_topic_0222861454_p19732154663818"></a>dm.mkfsarg</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0222861454_p97321246123819"><a name="en-us_topic_0222861454_p97321246123819"></a><a name="en-us_topic_0222861454_p97321246123819"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0222861454_p147321246123818"><a name="en-us_topic_0222861454_p147321246123818"></a><a name="en-us_topic_0222861454_p147321246123818"></a>Specifies the additional <strong id="en-us_topic_0222861454_b771563571912"><a name="en-us_topic_0222861454_b771563571912"></a><a name="en-us_topic_0222861454_b771563571912"></a>mkfs</strong> parameters when a basic device is created. For example: <strong id="en-us_topic_0222861454_b9396154215178"><a name="en-us_topic_0222861454_b9396154215178"></a><a name="en-us_topic_0222861454_b9396154215178"></a>dm.mkfsarg=-O ^has_journal</strong></p>
</td>
</tr>
<tr id="en-us_topic_0222861454_row1919116199380"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0222861454_p1373284611381"><a name="en-us_topic_0222861454_p1373284611381"></a><a name="en-us_topic_0222861454_p1373284611381"></a>dm.mountopt</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0222861454_p157321246183816"><a name="en-us_topic_0222861454_p157321246183816"></a><a name="en-us_topic_0222861454_p157321246183816"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0222861454_p14732164623818"><a name="en-us_topic_0222861454_p14732164623818"></a><a name="en-us_topic_0222861454_p14732164623818"></a>Specifies additional <strong id="en-us_topic_0222861454_b12251135471913"><a name="en-us_topic_0222861454_b12251135471913"></a><a name="en-us_topic_0222861454_b12251135471913"></a>mount</strong> parameters when a container is mounted. For example: <strong id="en-us_topic_0222861454_b1849315291710"><a name="en-us_topic_0222861454_b1849315291710"></a><a name="en-us_topic_0222861454_b1849315291710"></a>dm.mountopt=nodiscard</strong></p>
</td>
</tr>
<tr id="en-us_topic_0222861454_row0191719163817"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0222861454_p8732746193819"><a name="en-us_topic_0222861454_p8732746193819"></a><a name="en-us_topic_0222861454_p8732746193819"></a>dm.thinpooldev</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0222861454_p4732646183815"><a name="en-us_topic_0222861454_p4732646183815"></a><a name="en-us_topic_0222861454_p4732646183815"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0222861454_p157325468382"><a name="en-us_topic_0222861454_p157325468382"></a><a name="en-us_topic_0222861454_p157325468382"></a>Specifies the thinpool device used for container or image storage.</p>
</td>
</tr>
<tr id="en-us_topic_0222861454_row619161915388"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0222861454_p1373214466389"><a name="en-us_topic_0222861454_p1373214466389"></a><a name="en-us_topic_0222861454_p1373214466389"></a>dm.min_free_space</p>
</td>
<td class="cellrowborder" valign="top" width="13.29132913291329%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0222861454_p6733346153810"><a name="en-us_topic_0222861454_p6733346153810"></a><a name="en-us_topic_0222861454_p6733346153810"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="53.375337533753374%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0222861454_p1273384653817"><a name="en-us_topic_0222861454_p1273384653817"></a><a name="en-us_topic_0222861454_p1273384653817"></a>Specifies minimum percentage of reserved space. For example, <strong id="en-us_topic_0222861454_b1577902471920"><a name="en-us_topic_0222861454_b1577902471920"></a><a name="en-us_topic_0222861454_b1577902471920"></a>dm.min_free_space=10%</strong> indicates that storage-related operations such as container creation will fail when the remaining storage space falls below 10%.</p>
</td>
</tr>
</tbody>
</table>

## Precautions<a name="en-us_topic_0222861454_section188811239165314"></a>

-   When configuring devicemapper, if the system does not have sufficient space for automatic capacity expansion of thinpool, disable the automatic capacity expansion function.

    To disable automatic capacity expansion, set both  **thin\_pool\_autoextend\_threshold**  and  **thin\_pool\_autoextend\_percent**  in the  **/etc/lvm/profile/isula-thinpool.profile**  file to  **100**.

    ```
    activation {   
      thin_pool_autoextend_threshold=100   
      thin_pool_autoextend_percent=100 
    }
    ```

-   When devicemapper is used, use Ext4 as the container file system. You need to add  **--storage-opt dm.fs=ext4**  to the iSulad configuration parameters.
-   If graphdriver is devicemapper and the metadata files are damaged and cannot be restored, you need to manually restore the metadata files. Do not directly operate or tamper with metadata of the devicemapper storage driver in Docker daemon.
-   When the devicemapper LVM is used, if the devicemapper thinpool is damaged due to abnormal power-off, you cannot ensure the data integrity or whether the damaged thinpool can be restored. Therefore, you need to rebuild the thinpool.

**Precautions for Switching the devicemapper Storage Pool When the User Namespace Feature Is Enabled on iSula**

-   Generally, the path of the deviceset-metadata file is  **/var/lib/isulad/devicemapper/metadata/deviceset-metadata**  during container startup.
-   If user namespaces are used, the path of the deviceset-metadata file is  **/var/lib/isulad/**_userNSUID.GID_**/devicemapper/metadata/deviceset-metadata**.
-   When you use the devicemapper storage driver and the container is switched between the user namespace scenario and common scenario, the  **BaseDeviceUUID**  content in the corresponding deviceset-metadata file needs to be cleared. In the thinpool capacity expansion or rebuild scenario, you also need to clear the  **BaseDeviceUUID**  content in the deviceset-metadata file. Otherwise, the iSulad service fails to be restarted.

