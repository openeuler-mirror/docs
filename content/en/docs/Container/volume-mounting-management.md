# Volume Mounting Management<a name="EN-US_TOPIC_0184808034"></a>

## Function Description<a name="en-us_topic_0182200849_section1519142210555"></a>

In a common container, you can set the  **--volume**  parameter during container creation to mount directories or volumes of the host to the container for resource sharing. However, during container running, you cannot unmount directories or volumes that are mounted to the container, or mount directories or volumes of the host to the container. Only the system container can use the syscontainer-tools tool to dynamically mount directories or volumes of the host to the container and unmount directories or volumes from the container.

## Command Format<a name="en-us_topic_0182200849_section9239248135514"></a>

```
syscontainer-tools [COMMADN][OPTIONS] <container_id> [ARG...]
```

In the preceding format:

**COMMAND**: command related to route management.

**OPTIONS**: option supported by the route management command.

**container\_id**: container ID.

**ARG**: parameter corresponding to the command.

## API Description<a name="en-us_topic_0182200849_section1437143285512"></a>

**Table  1**    

<a name="en-us_topic_0182200849_table1869210387418"></a>
<table><thead align="left"><tr id="en-us_topic_0182200849_row1569373816419"><th class="cellrowborder" valign="top" width="16.150000000000002%" id="mcps1.2.5.1.1"><p id="en-us_topic_0182200849_p106936387415"><a name="en-us_topic_0182200849_p106936387415"></a><a name="en-us_topic_0182200849_p106936387415"></a><strong id="b84235270693550"><a name="b84235270693550"></a><a name="b84235270693550"></a>Command</strong></p>
</th>
<th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.5.1.2"><p id="en-us_topic_0182200849_p43193341215"><a name="en-us_topic_0182200849_p43193341215"></a><a name="en-us_topic_0182200849_p43193341215"></a>Function Description</p>
</th>
<th class="cellrowborder" valign="top" width="23.189999999999998%" id="mcps1.2.5.1.3"><p id="en-us_topic_0182200849_p11217215104712"><a name="en-us_topic_0182200849_p11217215104712"></a><a name="en-us_topic_0182200849_p11217215104712"></a>Option Description</p>
</th>
<th class="cellrowborder" valign="top" width="34.89%" id="mcps1.2.5.1.4"><p id="en-us_topic_0182200849_p15693173814112"><a name="en-us_topic_0182200849_p15693173814112"></a><a name="en-us_topic_0182200849_p15693173814112"></a>Parameter Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0182200849_row12693163810415"><td class="cellrowborder" valign="top" width="16.150000000000002%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0182200849_p14909923205818"><a name="en-us_topic_0182200849_p14909923205818"></a><a name="en-us_topic_0182200849_p14909923205818"></a>add-path</p>
</td>
<td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0182200849_p01201939112820"><a name="en-us_topic_0182200849_p01201939112820"></a><a name="en-us_topic_0182200849_p01201939112820"></a>Adds files or directories on the host to a container.</p>
</td>
<td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0182200849_p1621713152471"><a name="en-us_topic_0182200849_p1621713152471"></a><a name="en-us_topic_0182200849_p1621713152471"></a>None</p>
</td>
<td class="cellrowborder" valign="top" width="34.89%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0182200849_p126791042135812"><a name="en-us_topic_0182200849_p126791042135812"></a><a name="en-us_topic_0182200849_p126791042135812"></a>The parameter format is as follows:</p>
<p id="en-us_topic_0182200849_p5200195110493"><a name="en-us_topic_0182200849_p5200195110493"></a><a name="en-us_topic_0182200849_p5200195110493"></a>hostpath:containerpath:permission  [hostpath:containerpath:permission ...]</p>
<p id="en-us_topic_0182200849_p48182532492"><a name="en-us_topic_0182200849_p48182532492"></a><a name="en-us_topic_0182200849_p48182532492"></a>In the preceding format:</p>
<p id="en-us_topic_0182200849_p155511013165316"><a name="en-us_topic_0182200849_p155511013165316"></a><a name="en-us_topic_0182200849_p155511013165316"></a><em id="i16965288439"><a name="i16965288439"></a><a name="i16965288439"></a>hostpath</em>: path on the host for storing a volume.</p>
<p id="en-us_topic_0182200849_p11101757155310"><a name="en-us_topic_0182200849_p11101757155310"></a><a name="en-us_topic_0182200849_p11101757155310"></a><em id="i2629143434317"><a name="i2629143434317"></a><a name="i2629143434317"></a>containerpath</em>: path on the container for storing a volume.</p>
<p id="en-us_topic_0182200849_p1918318113541"><a name="en-us_topic_0182200849_p1918318113541"></a><a name="en-us_topic_0182200849_p1918318113541"></a><em id="i2087903713437"><a name="i2087903713437"></a><a name="i2087903713437"></a>permission</em>: operation permission on a mount path within the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182200849_row12634059013"><td class="cellrowborder" valign="top" width="16.150000000000002%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0182200849_p17486195414355"><a name="en-us_topic_0182200849_p17486195414355"></a><a name="en-us_topic_0182200849_p17486195414355"></a>remove-path</p>
</td>
<td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0182200849_p859584810286"><a name="en-us_topic_0182200849_p859584810286"></a><a name="en-us_topic_0182200849_p859584810286"></a>Deletes directories or files from the container and restores them to the host.</p>
</td>
<td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0182200849_p11217181544713"><a name="en-us_topic_0182200849_p11217181544713"></a><a name="en-us_topic_0182200849_p11217181544713"></a>None</p>
</td>
<td class="cellrowborder" valign="top" width="34.89%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0182200849_p9642651372"><a name="en-us_topic_0182200849_p9642651372"></a><a name="en-us_topic_0182200849_p9642651372"></a>Parameter format: <em id="i125725315391"><a name="i125725315391"></a><a name="i125725315391"></a>hostpath</em><strong id="b14212611392"><a name="b14212611392"></a><a name="b14212611392"></a>:</strong><em id="i4374410203910"><a name="i4374410203910"></a><a name="i4374410203910"></a>containerpath</em><strong id="b1886121133919"><a name="b1886121133919"></a><a name="b1886121133919"></a>[</strong><em id="i970110210392"><a name="i970110210392"></a><a name="i970110210392"></a>hostpath</em><strong id="b12823152393910"><a name="b12823152393910"></a><a name="b12823152393910"></a>:</strong><em id="i9458152412397"><a name="i9458152412397"></a><a name="i9458152412397"></a>containerpath </em><strong id="b08241123123918"><a name="b08241123123918"></a><a name="b08241123123918"></a>]</strong></p>
<p id="en-us_topic_0182200849_p17293751135113"><a name="en-us_topic_0182200849_p17293751135113"></a><a name="en-us_topic_0182200849_p17293751135113"></a>In the preceding format:</p>
<p id="en-us_topic_0182200849_p192934514511"><a name="en-us_topic_0182200849_p192934514511"></a><a name="en-us_topic_0182200849_p192934514511"></a><em id="i16666183823313"><a name="i16666183823313"></a><a name="i16666183823313"></a>hostpath</em>: path on the host for storing a volume.</p>
<p id="en-us_topic_0182200849_p132932051165117"><a name="en-us_topic_0182200849_p132932051165117"></a><a name="en-us_topic_0182200849_p132932051165117"></a><em id="i19417134233318"><a name="i19417134233318"></a><a name="i19417134233318"></a>containerpath</em>: path on the container for storing a volume.</p>
</td>
</tr>
<tr id="en-us_topic_0182200849_row915811441301"><td class="cellrowborder" valign="top" width="16.150000000000002%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0182200849_p1703322145914"><a name="en-us_topic_0182200849_p1703322145914"></a><a name="en-us_topic_0182200849_p1703322145914"></a>list-path</p>
</td>
<td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0182200849_p89515512813"><a name="en-us_topic_0182200849_p89515512813"></a><a name="en-us_topic_0182200849_p89515512813"></a>Lists all path directories in a container.</p>
</td>
<td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0182200849_p421751513476"><a name="en-us_topic_0182200849_p421751513476"></a><a name="en-us_topic_0182200849_p421751513476"></a>Supported options are as follows:</p>
<p id="en-us_topic_0182200849_p2073501695211"><a name="en-us_topic_0182200849_p2073501695211"></a><a name="en-us_topic_0182200849_p2073501695211"></a><strong id="b1284013419121"><a name="b1284013419121"></a><a name="b1284013419121"></a>--pretty</strong>: outputs data in JSON format.</p>
</td>
<td class="cellrowborder" valign="top" width="34.89%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0182200849_p1915580203514"><a name="en-us_topic_0182200849_p1915580203514"></a><a name="en-us_topic_0182200849_p1915580203514"></a>None</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0182200849_section11674155610"></a>

-   When running the  **add-path**  command, specify an absolute path as the mount path.
-   The mount point /.sharedpath is generated on the host after the mount path is specified by running the  **add-path**  command.
-   A maximum of 128 volumes can be added to a container.
-   Do not overwrite the root directory \(/\) in a container with the host directory by running the  **add-path**  command. Otherwise, the function is affected.

## Example<a name="en-us_topic_0182200849_section1217704995514"></a>

-   Start a system container, and set  **hook spec**  to the syscontainer hook execution script.

    ```
    [root@localhost ~]# isula run -tid --hook-spec /etc/syscontainer-tools/hookspec.json --system-container --external-rootfs /root/root-fs none init
    e45970a522d1ea0e9cfe382c2b868d92e7b6a55be1dd239947dda1ee55f3c7f7
    ```


-   Use syscontainer-tools to mount a directory on the host to a container, implementing resource sharing.

    ```
    [root@localhost ~]# syscontainer-tools add-path e45970a522d1 /home/test123:/home/test123
    Add path (/home/test123) to container(e45970a522d1,/home/test123) done.
    ```

-   Create a file in the  **/home/test123**  directory on the host and check whether the file can be accessed in the container.

    ```
    [root@localhost ~]# echo "hello world" > /home/test123/helloworld
    [root@localhost ~]# isula exec e45970a522d1 bash
    [root@localhost /]# cat /home/test123/helloworld
    hello world
    ```

-   Use syscontainer-tools to delete the mount directory from the container.

    ```
    [root@localhost ~]# syscontainer-tools remove-path e45970a522d1 /home/test123:/home/test123
    Remove path (/home/test123) from container(e45970a522d1,/home/test123) done
    [root@localhost ~]# isula exec e45970a522d1 bash
    [root@localhost /]# ls /home/test123/helloworld
    ls: cannot access '/home/test123/helloworld': No such file or directory
    ```


