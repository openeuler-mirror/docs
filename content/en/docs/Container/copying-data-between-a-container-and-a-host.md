# Copying Data Between a Container and a Host<a name="EN-US_TOPIC_0184808069"></a>

## Description<a name="en-us_topic_0183385750_section13350115135310"></a>

To copy data between a host and a container, run the  **isula cp**  command. Only containers whose runtime is of the LCR type are supported.

## **Usage**<a name="en-us_topic_0183385750_section188811239165314"></a>

```
isula cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH
isula cp [OPTIONS] SRC_PATH CONTAINER:DEST_PATH
```

## Parameters<a name="en-us_topic_0183385750_section4322824135919"></a>

The following table lists the parameters supported by the  **cp**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0183385750_table45852013111514"></a>
<table><tbody><tr id="en-us_topic_0183385750_row1790211601513"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183385750_p7179821161516"><a name="en-us_topic_0183385750_p7179821161516"></a><a name="en-us_topic_0183385750_p7179821161516"></a><strong id="en-us_topic_0183385750_b91798219151"><a name="en-us_topic_0183385750_b91798219151"></a><a name="en-us_topic_0183385750_b91798219151"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183385750_p15179121111511"><a name="en-us_topic_0183385750_p15179121111511"></a><a name="en-us_topic_0183385750_p15179121111511"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183385750_p10180152151511"><a name="en-us_topic_0183385750_p10180152151511"></a><a name="en-us_topic_0183385750_p10180152151511"></a><strong id="en-us_topic_0183385750_b718015216152"><a name="en-us_topic_0183385750_b718015216152"></a><a name="en-us_topic_0183385750_b718015216152"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0183385750_row89859561117"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0183385750_p69851856411"><a name="en-us_topic_0183385750_p69851856411"></a><a name="en-us_topic_0183385750_p69851856411"></a><strong id="en-us_topic_0183385750_b192299211024"><a name="en-us_topic_0183385750_b192299211024"></a><a name="en-us_topic_0183385750_b192299211024"></a>cp</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0183385750_p549293210212"><a name="en-us_topic_0183385750_p549293210212"></a><a name="en-us_topic_0183385750_p549293210212"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0183385750_p1049213321528"><a name="en-us_topic_0183385750_p1049213321528"></a><a name="en-us_topic_0183385750_p1049213321528"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0183385750_section18811125219118"></a>

-   When iSulad copies files, note that the  **/etc/hostname**,  **/etc/resolv.conf**, and  **/etc/hosts**  files are not mounted to the host, neither the  **--volume**  and  **--mount**  parameters. Therefore, the original files in the image instead of the files in the real container are copied.

    ```
    [root@localhost tmp]# isula cp b330e9be717a:/etc/hostname /tmp/hostname
    [root@localhost tmp]# cat /tmp/hostname
    [root@localhost tmp]# 
    ```

-   When decompressing a file, iSulad does not check the type of the file or folder to be overwritten in the file system. Instead, iSulad directly overwrites the file or folder. Therefore, if the source is a folder, the file with the same name is forcibly overwritten as a folder. If the source file is a file, the folder with the same name will be forcibly overwritten as a file.

    ```
    [root@localhost tmp]# rm -rf /tmp/test_file_to_dir && mkdir /tmp/test_file_to_dir
    [root@localhost tmp]# isula exec b330e9be717a /bin/sh -c "rm -rf /tmp/test_file_to_dir && touch /tmp/test_file_to_dir"
    [root@localhost tmp]# isula cp b330e9be717a:/tmp/test_file_to_dir /tmp
    [root@localhost tmp]# ls -al /tmp | grep test_file_to_dir
    -rw-r-----    1 root     root             0 Apr 26 09:59 test_file_to_dir
    ```


-   iSulad freezes the container during the copy process and restores the container after the copy is complete.

## Example<a name="en-us_topic_0183385750_section1734193235916"></a>

Copy the  **/test/host**  directory on the host to the  **/test**  directory on container 21fac8bb9ea8.

```
isula cp /test/host 21fac8bb9ea8:/test
```

Copy the  **/www**  directory on container 21fac8bb9ea8 to the  **/tmp**  directory on the host.

```
isula cp 21fac8bb9ea8:/www /tmp/
```

