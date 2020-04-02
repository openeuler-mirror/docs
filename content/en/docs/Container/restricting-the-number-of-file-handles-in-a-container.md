# Restricting the Number of File Handles in a Container<a name="EN-US_TOPIC_0184808083"></a>

## Description<a name="en-us_topic_0183293572_section13350115135310"></a>

You can set parameters to limit the number of file handles that can be opened in a container.

## **Usage**<a name="en-us_topic_0183293572_section188811239165314"></a>

When running the  **isula create/run**  command, set the  **--files-limit**  parameter to limit the number of file handles that can be opened in a container.

## Parameters<a name="en-us_topic_0183293572_section204328722112"></a>

Set the  **--files-limit**  parameter when running the  **isula create/run**  command.

<a name="en-us_topic_0183293572_teea6792d7cdc4de6bbec22c6d34a8a56"></a>
<table><thead align="left"><tr id="en-us_topic_0183293572_r461aacfe00054dd09da79ded3d0d5677"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.1"><p id="en-us_topic_0183293572_a4713c2757b4742f1bcfc60cf8f92362b"><a name="en-us_topic_0183293572_a4713c2757b4742f1bcfc60cf8f92362b"></a><a name="en-us_topic_0183293572_a4713c2757b4742f1bcfc60cf8f92362b"></a><strong id="en-us_topic_0183293572_en-us_topic_0075721648_b576494217460"><a name="en-us_topic_0183293572_en-us_topic_0075721648_b576494217460"></a><a name="en-us_topic_0183293572_en-us_topic_0075721648_b576494217460"></a>Parameter</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="en-us_topic_0183293572_en-us_topic_0075721648_p349275174212"><a name="en-us_topic_0183293572_en-us_topic_0075721648_p349275174212"></a><a name="en-us_topic_0183293572_en-us_topic_0075721648_p349275174212"></a><strong id="en-us_topic_0183293572_ac040c826773e4b99805cc38e76ea34ab"><a name="en-us_topic_0183293572_ac040c826773e4b99805cc38e76ea34ab"></a><a name="en-us_topic_0183293572_ac040c826773e4b99805cc38e76ea34ab"></a>Description</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.3"><p id="en-us_topic_0183293572_a4d0aaa96c3b242aca9d2c22e494195f2"><a name="en-us_topic_0183293572_a4d0aaa96c3b242aca9d2c22e494195f2"></a><a name="en-us_topic_0183293572_a4d0aaa96c3b242aca9d2c22e494195f2"></a>Value Range</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.4"><p id="en-us_topic_0183293572_a4cfdf0a8726d4fd08a52bb078988fc90"><a name="en-us_topic_0183293572_a4cfdf0a8726d4fd08a52bb078988fc90"></a><a name="en-us_topic_0183293572_a4cfdf0a8726d4fd08a52bb078988fc90"></a>Mandatory or Not</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183293572_r771d05a684c4482b930111a484d0e970"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183293572_a668c80e436084fa48ad0a3aa56d627b9"><a name="en-us_topic_0183293572_a668c80e436084fa48ad0a3aa56d627b9"></a><a name="en-us_topic_0183293572_a668c80e436084fa48ad0a3aa56d627b9"></a>--files-limit</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183293572_ac71045ed552b48d6bcb54a96bc27f690"><a name="en-us_topic_0183293572_ac71045ed552b48d6bcb54a96bc27f690"></a><a name="en-us_topic_0183293572_ac71045ed552b48d6bcb54a96bc27f690"></a>Limits the number of file handles that can be opened in a container.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183293572_aabdc1cfa9ac94f6dafcab0ff0400c2e7"><a name="en-us_topic_0183293572_aabdc1cfa9ac94f6dafcab0ff0400c2e7"></a><a name="en-us_topic_0183293572_aabdc1cfa9ac94f6dafcab0ff0400c2e7"></a>64-bit integer The value can be 0 or a negative number, but cannot be greater than 2 to the power of 63 minus 1. The value 0 or a negative number indicates no limit.</p>
<p id="en-us_topic_0183293572_a4e618a1fe09a48509e48acbb4da0635f"><a name="en-us_topic_0183293572_a4e618a1fe09a48509e48acbb4da0635f"></a><a name="en-us_topic_0183293572_a4e618a1fe09a48509e48acbb4da0635f"></a>During container creation, some handles are opened temporarily. Therefore, the value cannot be too small. Otherwise, the container may not be restricted by the file limit. If the value is less than the number of opened handles, the cgroup file cannot be written. It is recommended that the value be greater than 30.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183293572_a0d045bd4e7814cfc9808521c9e3c1b5b"><a name="en-us_topic_0183293572_a0d045bd4e7814cfc9808521c9e3c1b5b"></a><a name="en-us_topic_0183293572_a0d045bd4e7814cfc9808521c9e3c1b5b"></a>No</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="en-us_topic_0183293572_section1734193235916"></a>

When running the container, add  **--files-limit n**. For example:

```
isula run -ti --files-limit 1024 busybox bash
```

## **Constraints**<a name="en-us_topic_0183293572_section346363019141"></a>

1.  If the  **--files-limit**  parameter is set to a small value, for example, 1, the container may fail to be started.

    ```
    [root@localhost ~]# isula run -itd --files-limit 1 rnd-dockerhub.huawei.com/official/busybox-aarch64
    004858d9f9ef429b624f3d20f8ba12acfbc8a15bb121c4036de4e5745932eff4
    Error response from daemon: Start container error: Container is not running:004858d9f9ef429b624f3d20f8ba12acfbc8a15bb121c4036de4e5745932eff4
    ```

    Docker will be started successfully, and the value of  **files.limit cgroup**  is  **max**.

    ```
    [root@localhost ~]# docker run -itd --files-limit 1 rnd-dockerhub.huawei.com/official/busybox-aarch64
    ef9694bf4d8e803a1c7de5c17f5d829db409e41a530a245edc2e5367708dbbab
    [root@localhost ~]# docker exec -it ef96 cat /sys/fs/cgroup/files/files.limit
    max
    ```

    The root cause is that the startup principles of the lxc and runc processes are different. After the lxc process creates the cgroup, the files.limit value is set, and then the PID of the container process is written into the cgroup.procs file of the cgroup. At this time, the process has opened more than one handle. As a result, an error is reported, and the startup fails. After you create a cgroup by running the  **runc**  command, the PID of the container process is written to the cgroup.procs file of the cgroup, and then the files.limit value is set. Because more than one handle is opened by the process in the cgroup, the file.limit value does not take effect, the kernel does not report any error, and the container is started successfully.


