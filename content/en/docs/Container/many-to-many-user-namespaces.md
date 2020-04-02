# Many-to-Many User Namespaces<a name="EN-US_TOPIC_0184808027"></a>

## Function Description<a name="en-us_topic_0182200842_section1477505263912"></a>

User namespaces are used to map user  **root**  of a container to a common user of the host and allow the processes and user in the container \(that are unprivileged on the host\) to have privilege. This can prevent the processes in the container from escaping to the host and performing unauthorized operations. In addition, after user namespaces are used, the container and host use different UIDs and GIDs. This ensures that user resources in the container such as file descriptors are isolated from those on the host.

In system containers, you can configure the  **--user-remap**  API parameter to map user namespaces of different containers to different user namespaces on the host, isolating the user namespaces of containers.

## Parameter Description<a name="en-us_topic_0182200842_section84212067409"></a>

<a name="en-us_topic_0182200842_table1869210387418"></a>
<table><thead align="left"><tr id="en-us_topic_0182200842_row1569373816419"><th class="cellrowborder" valign="top" width="19.98%" id="mcps1.1.4.1.1"><p id="en-us_topic_0182200842_p106936387415"><a name="en-us_topic_0182200842_p106936387415"></a><a name="en-us_topic_0182200842_p106936387415"></a><strong id="b1892563793410"><a name="b1892563793410"></a><a name="b1892563793410"></a>Command</strong></p>
</th>
<th class="cellrowborder" valign="top" width="19.36%" id="mcps1.1.4.1.2"><p id="en-us_topic_0182200842_p15693173814112"><a name="en-us_topic_0182200842_p15693173814112"></a><a name="en-us_topic_0182200842_p15693173814112"></a><strong id="b1112724033420"><a name="b1112724033420"></a><a name="b1112724033420"></a>Parameter</strong></p>
</th>
<th class="cellrowborder" valign="top" width="60.660000000000004%" id="mcps1.1.4.1.3"><p id="en-us_topic_0182200842_p18217181119202"><a name="en-us_topic_0182200842_p18217181119202"></a><a name="en-us_topic_0182200842_p18217181119202"></a><strong id="b6831134117348"><a name="b6831134117348"></a><a name="b6831134117348"></a>Value Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0182200842_row12693163810415"><td class="cellrowborder" valign="top" width="19.98%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200842_p66931838134110"><a name="en-us_topic_0182200842_p66931838134110"></a><a name="en-us_topic_0182200842_p66931838134110"></a>isula create/run</p>
</td>
<td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200842_p08101647154218"><a name="en-us_topic_0182200842_p08101647154218"></a><a name="en-us_topic_0182200842_p08101647154218"></a>--user-remap</p>
</td>
<td class="cellrowborder" valign="top" width="60.660000000000004%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0182200842_p5810124718426"><a name="en-us_topic_0182200842_p5810124718426"></a><a name="en-us_topic_0182200842_p5810124718426"></a>The parameter format is <em id="i102871144143610"><a name="i102871144143610"></a><a name="i102871144143610"></a>uid</em><strong id="b1641047103710"><a name="b1641047103710"></a><a name="b1641047103710"></a>:</strong><em id="i18921184733620"><a name="i18921184733620"></a><a name="i18921184733620"></a>gid</em><strong id="b1444618516378"><a name="b1444618516378"></a><a name="b1444618516378"></a>:</strong><em id="i1677917500365"><a name="i1677917500365"></a><a name="i1677917500365"></a>offset</em>. The parameter is described as follows:</p>
<a name="en-us_topic_0182200842_ul13732312203"></a><a name="en-us_topic_0182200842_ul13732312203"></a><ul id="en-us_topic_0182200842_ul13732312203"><li><em id="i116802057123713"><a name="i116802057123713"></a><a name="i116802057123713"></a>uid</em> and <em id="i1987117193810"><a name="i1987117193810"></a><a name="i1987117193810"></a>gid</em> must be integers greater than or equal to 0.</li><li><em id="i15289135133810"><a name="i15289135133810"></a><a name="i15289135133810"></a>offset</em> must be an integer greater than 0 and less than 65536. The value cannot be too small. Otherwise, the container cannot be started.</li><li>Either the sum of <em id="i151752375"><a name="i151752375"></a><a name="i151752375"></a>uid</em> and <em id="i724616711715"><a name="i724616711715"></a><a name="i724616711715"></a>offset</em> or the sum of <em id="i172404503711"><a name="i172404503711"></a><a name="i172404503711"></a>gid</em> and <em id="i1179319539714"><a name="i1179319539714"></a><a name="i1179319539714"></a>offset</em> must be less than or equal to 2<sup id="en-us_topic_0182200842_sup1238617401203"><a name="en-us_topic_0182200842_sup1238617401203"></a><a name="en-us_topic_0182200842_sup1238617401203"></a>32</sup> - 1. Otherwise, an error is reported during container startup.</li></ul>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0182200842_section173481025112313"></a>

-   If  **--user-remap**  is specified in a system container, the rootfs directory must be accessible to users specified by  _uid_  or  _gid_  in  **--user-remap**. Otherwise, user namespaces of containers cannot access rootfs. As a result, the containers fail to be started.
-   All IDs in the container can be mapped to the host rootfs. Some directories or files may be mounted from the host to containers, for example, device files in the  **/dev/pts**  directory. If  _offset_  is too small, the mounting may fail.
-   _uid_,  _gid_, and  _offset_  are controlled by the upper-layer scheduling platform. The container engine only checks the validity of them.
-   **--user-remap**  is available only in system containers.
-   **--user-remap**  and  **--privileged**  cannot be set simultaneously. Otherwise, an error is reported during container startup.
-   If  _uid_  or  _gid_  is set to  **0**,  **--user-remap**  does not take effect.

## Usage Guide<a name="en-us_topic_0182200842_section738582164018"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>Before specifying the  **--user-remap**  parameter, configure an offset value for UIDs and GIDs of all directories and files in rootfs. The offset value should be equal to that for  _uid_  and  _gid_  in  **--user-remap**.  
>For example, run the following command to offset UIDs and GIDs of all files in the  **dev**  directory with 100000:  
>chown 100000:100000 dev  

Specify the  **--user-remap**  parameter when the system container is started.

```
[root@localhost ~]# isula run -tid --user-remap 100000:100000:65535 --system-container --external-rootfs /home/root-fs none /sbin/init
eb9605b3b56dfae9e0b696a729d5e1805af900af6ce24428fde63f3b0a443f4a
```

Check the /sbin/init process information on the host and in a container.

```
[root@localhost ~]# isula exec eb ps aux | grep /sbin/init
root         1  0.6  0.0  21624  9624 ?        Ss   15:47   0:00 /sbin/init
[root@localhost ~]# ps aux | grep /sbin/init
100000    4861  0.5  0.0  21624  9624 ?        Ss   15:47   0:00 /sbin/init
root      4948  0.0  0.0 213032   808 pts/0    S+   15:48   0:00 grep --color=auto /sbin/init
```

The owner of the /sbin/init process in the container is user  **root**, but the owner of the host is the user whose UID is  **100000**.

Create a file in a container and view the file owner on the host.

```
[root@localhost ~]# isula exec -it eb bash
[root@localhost /]# echo test123 >> /test123
[root@localhost /]# exit
exit
[root@localhost ~]# ll /home/root-fs/test123
-rw-------. 1 100000 100000 8 Aug  2 15:52 /home/root-fs/test123
```

The owner of the file that is generated in the container is user  **root**, but the file owner displayed on the host is the user whose ID is  **100000**.

