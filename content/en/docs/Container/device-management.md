# Device Management<a name="EN-US_TOPIC_0184808031"></a>

## Function Description<a name="en-us_topic_0182200846_section330116084614"></a>

syscontainer-tools allows you to add block devices \(such as disks and logical volume managers\) or character devices \(such as GPUs, binners, and FUSEs\) on the host to a container. The devices can be used in the container. For example, you can run the  **fdisk**  command to format the disk and write data to the file system. If the devices are not required, syscontainer-tools allows you to delete them from the container and return them to the host.

## Command Format<a name="en-us_topic_0182200846_section9239248135514"></a>

```
syscontainer-tools [COMMADN][OPTIONS] <container_id> [ARG...]
```

In the preceding format:

**COMMAND**: command related to device management.

**OPTIONS**: option supported by the device management command.

**container\_id**: container ID.

**ARG**: parameter corresponding to the command.

## Parameter Description<a name="en-us_topic_0182200846_section101891313134612"></a>

<a name="en-us_topic_0182200846_table1869210387418"></a>
<table><thead align="left"><tr id="en-us_topic_0182200846_row1569373816419"><th class="cellrowborder" valign="top" width="14.57%" id="mcps1.1.5.1.1"><p id="en-us_topic_0182200846_p106936387415"><a name="en-us_topic_0182200846_p106936387415"></a><a name="en-us_topic_0182200846_p106936387415"></a><strong id="b84235270693550"><a name="b84235270693550"></a><a name="b84235270693550"></a>Command</strong></p>
</th>
<th class="cellrowborder" valign="top" width="18.060000000000002%" id="mcps1.1.5.1.2"><p id="en-us_topic_0182200846_p43193341215"><a name="en-us_topic_0182200846_p43193341215"></a><a name="en-us_topic_0182200846_p43193341215"></a>Function Description</p>
</th>
<th class="cellrowborder" valign="top" width="34.1%" id="mcps1.1.5.1.3"><p id="en-us_topic_0182200846_p94481155184914"><a name="en-us_topic_0182200846_p94481155184914"></a><a name="en-us_topic_0182200846_p94481155184914"></a>Option Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.269999999999996%" id="mcps1.1.5.1.4"><p id="en-us_topic_0182200846_p15693173814112"><a name="en-us_topic_0182200846_p15693173814112"></a><a name="en-us_topic_0182200846_p15693173814112"></a>Parameter Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0182200846_row12693163810415"><td class="cellrowborder" valign="top" width="14.57%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0182200846_p444842883212"><a name="en-us_topic_0182200846_p444842883212"></a><a name="en-us_topic_0182200846_p444842883212"></a>add-device</p>
</td>
<td class="cellrowborder" valign="top" width="18.060000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0182200846_p16340476530"><a name="en-us_topic_0182200846_p16340476530"></a><a name="en-us_topic_0182200846_p16340476530"></a>Adds block devices or character devices on the host to a container.</p>
</td>
<td class="cellrowborder" valign="top" width="34.1%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0182200846_p244855511499"><a name="en-us_topic_0182200846_p244855511499"></a><a name="en-us_topic_0182200846_p244855511499"></a>Supported options are as follows:</p>
<a name="en-us_topic_0182200846_ul01774256522"></a><a name="en-us_topic_0182200846_ul01774256522"></a><ul id="en-us_topic_0182200846_ul01774256522"><li><strong id="b621183012112"><a name="b621183012112"></a><a name="b621183012112"></a>--blkio-weight-device</strong>: sets the I/O weight (relative weight, ranging from 10 to 100) of a block device.</li><li><strong id="b10102941112919"><a name="b10102941112919"></a><a name="b10102941112919"></a>--device-read-bps</strong>: sets the read rate limit for the block device (byte/s).</li><li><strong id="b930719125319"><a name="b930719125319"></a><a name="b930719125319"></a>--device-read-iops</strong>: sets the read rate limit for the block device (I/O/s).</li><li><strong id="b193521739113419"><a name="b193521739113419"></a><a name="b193521739113419"></a>--device-write-bps</strong>: sets the write rate limit for the block device (byte/s).</li><li><strong id="b10776718143511"><a name="b10776718143511"></a><a name="b10776718143511"></a>--device-write-iops</strong>: sets the write rate limit for the block device (I/O/s).</li><li><strong id="b69551034216"><a name="b69551034216"></a><a name="b69551034216"></a>--follow-partition</strong>: If a block device is a basic block device (primary SCSI block disk), set this parameter to add all partitions of the primary disk.</li><li><strong id="b991063717117"><a name="b991063717117"></a><a name="b991063717117"></a>--force</strong>: If any block device or character device already exists in the container, use this parameter to overwrite the old block device or character device files.</li><li><strong id="b17031241114"><a name="b17031241114"></a><a name="b17031241114"></a>--update-config-only</strong>: updates configuration files only and does not add disks.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0182200846_p64831829205219"><a name="en-us_topic_0182200846_p64831829205219"></a><a name="en-us_topic_0182200846_p64831829205219"></a>Parameter format: <em id="i1455573033513"><a name="i1455573033513"></a><a name="i1455573033513"></a>hostdevice</em><strong id="b19631203493518"><a name="b19631203493518"></a><a name="b19631203493518"></a>[:</strong><em id="i680010356353"><a name="i680010356353"></a><a name="i680010356353"></a>containerdevice</em><strong id="b79431438173510"><a name="b79431438173510"></a><a name="b79431438173510"></a>][:</strong><em id="i86276391355"><a name="i86276391355"></a><a name="i86276391355"></a>permission</em><strong id="b3200204463511"><a name="b3200204463511"></a><a name="b3200204463511"></a>] [</strong><em id="i13832045113513"><a name="i13832045113513"></a><a name="i13832045113513"></a>hostdevice</em><strong id="b1255717486354"><a name="b1255717486354"></a><a name="b1255717486354"></a>[:</strong><em id="i52529498351"><a name="i52529498351"></a><a name="i52529498351"></a>containerdevice</em><strong id="b7412115215355"><a name="b7412115215355"></a><a name="b7412115215355"></a>][:</strong><em id="i12334185314354"><a name="i12334185314354"></a><a name="i12334185314354"></a>permission</em><strong id="b1741218527350"><a name="b1741218527350"></a><a name="b1741218527350"></a>]]</strong></p>
<p id="en-us_topic_0182200846_p1612914315579"><a name="en-us_topic_0182200846_p1612914315579"></a><a name="en-us_topic_0182200846_p1612914315579"></a>In the preceding format:</p>
<p id="en-us_topic_0182200846_p155511013165316"><a name="en-us_topic_0182200846_p155511013165316"></a><a name="en-us_topic_0182200846_p155511013165316"></a><em id="i674233514217"><a name="i674233514217"></a><a name="i674233514217"></a>hostdevice</em>: path on the host for storing a device.</p>
<p id="en-us_topic_0182200846_p11101757155310"><a name="en-us_topic_0182200846_p11101757155310"></a><a name="en-us_topic_0182200846_p11101757155310"></a><em id="i183506403218"><a name="i183506403218"></a><a name="i183506403218"></a>containerdevice</em>: path on the container for storing a device.</p>
<p id="en-us_topic_0182200846_p1918318113541"><a name="en-us_topic_0182200846_p1918318113541"></a><a name="en-us_topic_0182200846_p1918318113541"></a><em id="i117864911422"><a name="i117864911422"></a><a name="i117864911422"></a>permission</em>: operation permission on a device within the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182200846_row12634059013"><td class="cellrowborder" valign="top" width="14.57%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0182200846_p9635951805"><a name="en-us_topic_0182200846_p9635951805"></a><a name="en-us_topic_0182200846_p9635951805"></a>remove-device</p>
</td>
<td class="cellrowborder" valign="top" width="18.060000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0182200846_p3693165534"><a name="en-us_topic_0182200846_p3693165534"></a><a name="en-us_topic_0182200846_p3693165534"></a>Deletes block devices or character devices from a container and restores them to the host.</p>
</td>
<td class="cellrowborder" valign="top" width="34.1%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0182200846_p2448145512492"><a name="en-us_topic_0182200846_p2448145512492"></a><a name="en-us_topic_0182200846_p2448145512492"></a>Supported options are as follows:</p>
<p id="en-us_topic_0182200846_p61712289347"><a name="en-us_topic_0182200846_p61712289347"></a><a name="en-us_topic_0182200846_p61712289347"></a><strong id="b4671203518479"><a name="b4671203518479"></a><a name="b4671203518479"></a>--follow-partition</strong>: If a block device is a basic block device (primary SCSI block disk), set this parameter to delete all partitions of the primary disk in the container, and restore them to the host.</p>
</td>
<td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0182200846_p14901184913565"><a name="en-us_topic_0182200846_p14901184913565"></a><a name="en-us_topic_0182200846_p14901184913565"></a>Parameter format: <em id="i178156315504"><a name="i178156315504"></a><a name="i178156315504"></a>hostdevice</em><strong id="b156821145013"><a name="b156821145013"></a><a name="b156821145013"></a>[:</strong><em id="i137121287502"><a name="i137121287502"></a><a name="i137121287502"></a>containerdevice</em><strong id="b1951518570509"><a name="b1951518570509"></a><a name="b1951518570509"></a>] [</strong><em id="i4813235185018"><a name="i4813235185018"></a><a name="i4813235185018"></a>hostdevice</em><strong id="b13881133155118"><a name="b13881133155118"></a><a name="b13881133155118"></a>[:</strong><em id="i178151238155016"><a name="i178151238155016"></a><a name="i178151238155016"></a>containerdevice</em><strong id="b455077115117"><a name="b455077115117"></a><a name="b455077115117"></a>]]</strong></p>
<p id="en-us_topic_0182200846_p1416315705720"><a name="en-us_topic_0182200846_p1416315705720"></a><a name="en-us_topic_0182200846_p1416315705720"></a>In the preceding format:</p>
<p id="en-us_topic_0182200846_p1786451795612"><a name="en-us_topic_0182200846_p1786451795612"></a><a name="en-us_topic_0182200846_p1786451795612"></a><em id="i362235095119"><a name="i362235095119"></a><a name="i362235095119"></a>hostdevice</em>: path on the host for storing a device.</p>
<p id="en-us_topic_0182200846_p148648176569"><a name="en-us_topic_0182200846_p148648176569"></a><a name="en-us_topic_0182200846_p148648176569"></a><em id="i14551155218512"><a name="i14551155218512"></a><a name="i14551155218512"></a>containerdevice</em>: path on the container for storing a device.</p>
</td>
</tr>
<tr id="en-us_topic_0182200846_row915811441301"><td class="cellrowborder" valign="top" width="14.57%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0182200846_p1517984363416"><a name="en-us_topic_0182200846_p1517984363416"></a><a name="en-us_topic_0182200846_p1517984363416"></a>list-device</p>
</td>
<td class="cellrowborder" valign="top" width="18.060000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0182200846_p89272237538"><a name="en-us_topic_0182200846_p89272237538"></a><a name="en-us_topic_0182200846_p89272237538"></a>Lists all block devices or character devices in a container.</p>
</td>
<td class="cellrowborder" valign="top" width="34.1%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0182200846_p54486558499"><a name="en-us_topic_0182200846_p54486558499"></a><a name="en-us_topic_0182200846_p54486558499"></a>Supported options are as follows:</p>
<a name="en-us_topic_0182200846_ul12255019574"></a><a name="en-us_topic_0182200846_ul12255019574"></a><ul id="en-us_topic_0182200846_ul12255019574"><li><strong id="b83936231209"><a name="b83936231209"></a><a name="b83936231209"></a>--pretty</strong>: outputs data in JSON format.</li><li><strong id="b165511558909"><a name="b165511558909"></a><a name="b165511558909"></a>--sub-partition</strong>: For a primary disk, add this flag to display the primary disk and its sub-partitions.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0182200846_p1384735113573"><a name="en-us_topic_0182200846_p1384735113573"></a><a name="en-us_topic_0182200846_p1384735113573"></a>None</p>
</td>
</tr>
<tr id="en-us_topic_0182200846_row17443144712014"><td class="cellrowborder" valign="top" width="14.57%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0182200846_p8971171519352"><a name="en-us_topic_0182200846_p8971171519352"></a><a name="en-us_topic_0182200846_p8971171519352"></a>update-device</p>
</td>
<td class="cellrowborder" valign="top" width="18.060000000000002%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0182200846_p27499305535"><a name="en-us_topic_0182200846_p27499305535"></a><a name="en-us_topic_0182200846_p27499305535"></a>Updates the disk QoS.</p>
</td>
<td class="cellrowborder" valign="top" width="34.1%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0182200846_p195615299587"><a name="en-us_topic_0182200846_p195615299587"></a><a name="en-us_topic_0182200846_p195615299587"></a>Supported options are as follows:</p>
<a name="en-us_topic_0182200846_ul1231001583"></a><a name="en-us_topic_0182200846_ul1231001583"></a><ul id="en-us_topic_0182200846_ul1231001583"><li><strong id="b13620129277"><a name="b13620129277"></a><a name="b13620129277"></a>--device-read-bps</strong>: sets the read rate limit for the block device (byte/s). You are advised to set this parameter to a value greater than or equal to 1024.</li><li><strong id="b172341422155317"><a name="b172341422155317"></a><a name="b172341422155317"></a>--device-read-iops</strong>: sets the read rate limit for the block device (I/O/s).</li><li><strong id="b15127930493"><a name="b15127930493"></a><a name="b15127930493"></a>--device-write-bps</strong>: sets the write rate limit for the block device (byte/s). You are advised to set this parameter to a value greater than or equal to 1024.</li><li><strong id="b9473213145816"><a name="b9473213145816"></a><a name="b9473213145816"></a>--device-write-iops</strong>: sets the write rate limit for the block device (I/O/s).</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.269999999999996%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0182200846_p414723312583"><a name="en-us_topic_0182200846_p414723312583"></a><a name="en-us_topic_0182200846_p414723312583"></a>None</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0182200846_section101438321915"></a>

-   You can add or delete devices when container instances are not running. After the operation is complete, you can start the container to view the device status. You can also dynamically add a device when the container is running.
-   Do not concurrently run the  **fdisk**  command to format disks in a container and on the host. Otherwise, the container disk usage will be affected.
-   When you run the  **add-device**  command to add a disk to a specific directory of a container, if the parent directory in the container is a multi-level directory \(for example,  **/dev/a/b/c/d/e**\) and the directory level does not exist, syscontainer-tools will automatically create the corresponding directory in the container. When the disk is deleted, the created parent directory is not deleted. If you run the  **add-device**  command to add a device to this parent directory again, a message is displayed, indicating that a device already exists and cannot be added.
-   When you run the** add-device**  command to add a disk or update disk parameters, you need to configure the disk QoS. Do not set the write or read rate limit for the block device \(I/O/s or byte/s\) to a small value. If the value is too small, the disk may be unreadable \(the actual reason is the speed is too slow\), affecting service functions.
-   When you run the  **--blkio-weight-device**  command to limit the weight of a specified block device, if the block device supports only the BFQ mode, an error may be reported, prompting you to check whether the current OS environment supports setting the weight of the BFQ block device.

## Example<a name="en-us_topic_0182200846_section7148193464616"></a>

-   Start a system container, and set  **hook spec**  to the syscontainer hook execution script.

    ```
    [root@localhost ~]# isula run -tid --hook-spec /etc/syscontainer-tools/hookspec.json --system-container --external-rootfs /root/root-fs none init
    eed1096c8c7a0eca6d92b1b3bc3dd59a2a2adf4ce44f18f5372408ced88f8350
    ```


-   Add a block device to a container.

    ```
    [root@localhost ~]# syscontainer-tools add-device ee /dev/sdb:/dev/sdb123
    Add device (/dev/sdb) to container(ee,/dev/sdb123) done.
    [root@localhost ~]# isula exec ee fdisk -l /dev/sdb123
    Disk /dev/sdb123: 50 GiB, 53687091200 bytes, 104857600 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0xda58a448
    
    Device        Boot Start       End   Sectors Size Id Type
    /dev/sdb123p1       2048 104857599 104855552  50G  5 Extended
    /dev/sdb123p5       4096 104857599 104853504  50G 83 Linux
    ```

-   Update the device information.

    ```
    [root@localhost ~]# syscontainer-tools update-device --device-read-bps /dev/sdb:10m ee
    Update read bps for device (/dev/sdb,10485760) done.
    ```

-   Delete a device.

    ```
    [root@localhost ~]# syscontainer-tools remove-device ee /dev/sdb:/dev/sdb123
    Remove device (/dev/sdb) from container(ee,/dev/sdb123) done.
    Remove read bps for device (/dev/sdb) done.
    ```


