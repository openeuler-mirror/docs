# Configuring the ulimit Value in a Container<a name="EN-US_TOPIC_0184808085"></a>

## Description<a name="en-us_topic_0183316275_section13350115135310"></a>

You can use parameters to control the resources for executed programs.

## **Usage**<a name="en-us_topic_0183316275_section188811239165314"></a>

Set the  **--ulimit**  parameter when creating or running a container, or configure the parameter on the daemon to control the resources for executed programs in the container.

## Parameters<a name="en-us_topic_0183316275_section204328722112"></a>

Use either of the following methods to configure ulimit:

1.  When running the  **isula create/run**  command, use  **--ulimit <type\>=<soft\>\[:<hard\>\]**  to control the resources of the executed shell program.

    <a name="en-us_topic_0183316275_table192755843616"></a>
    <table><thead align="left"><tr id="en-us_topic_0183316275_row1927175818360"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.1"><p id="en-us_topic_0183316275_p2027105863611"><a name="en-us_topic_0183316275_p2027105863611"></a><a name="en-us_topic_0183316275_p2027105863611"></a><strong id="en-us_topic_0183316275_b122755815363"><a name="en-us_topic_0183316275_b122755815363"></a><a name="en-us_topic_0183316275_b122755815363"></a>Parameter</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="en-us_topic_0183316275_p92717581368"><a name="en-us_topic_0183316275_p92717581368"></a><a name="en-us_topic_0183316275_p92717581368"></a><strong id="en-us_topic_0183316275_b15271058103614"><a name="en-us_topic_0183316275_b15271058103614"></a><a name="en-us_topic_0183316275_b15271058103614"></a>Description</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.3"><p id="en-us_topic_0183316275_p162711588364"><a name="en-us_topic_0183316275_p162711588364"></a><a name="en-us_topic_0183316275_p162711588364"></a>Value Range</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.4"><p id="en-us_topic_0183316275_p152715819368"><a name="en-us_topic_0183316275_p152715819368"></a><a name="en-us_topic_0183316275_p152715819368"></a>Mandatory or Not</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0183316275_row5282058193614"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0183316275_p02895810364"><a name="en-us_topic_0183316275_p02895810364"></a><a name="en-us_topic_0183316275_p02895810364"></a>--ulimit</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0183316275_p2288589368"><a name="en-us_topic_0183316275_p2288589368"></a><a name="en-us_topic_0183316275_p2288589368"></a>Limits the resources of the executed shell program.</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0183316275_p113155510143"><a name="en-us_topic_0183316275_p113155510143"></a><a name="en-us_topic_0183316275_p113155510143"></a>64-bit integer The value of the soft limit must be less than or equal to that of the hard limit. If only the soft limit is specified, the value of the hard limit is equal to that of the soft limit. Some types of resources do not support negative numbers. For details, see the following table.</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0183316275_p128558163611"><a name="en-us_topic_0183316275_p128558163611"></a><a name="en-us_topic_0183316275_p128558163611"></a>No</p>
    </td>
    </tr>
    </tbody>
    </table>

2.  Use daemon parameters or configuration files.

    For details, see --default-ulimits in  [Deployment Mode](deployment-mode.md#EN-US_TOPIC_0184808043).

    **--ulimit**  can limit the following types of resources:

    <a name="en-us_topic_0183316275_table107744812507"></a>
    <table><thead align="left"><tr id="en-us_topic_0183316275_row1277419815508"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.1"><p id="en-us_topic_0183316275_p2774681505"><a name="en-us_topic_0183316275_p2774681505"></a><a name="en-us_topic_0183316275_p2774681505"></a><strong id="en-us_topic_0183316275_b1777458105010"><a name="en-us_topic_0183316275_b1777458105010"></a><a name="en-us_topic_0183316275_b1777458105010"></a>Type</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.2"><p id="en-us_topic_0183316275_p6774168185013"><a name="en-us_topic_0183316275_p6774168185013"></a><a name="en-us_topic_0183316275_p6774168185013"></a><strong id="en-us_topic_0183316275_b157749817506"><a name="en-us_topic_0183316275_b157749817506"></a><a name="en-us_topic_0183316275_b157749817506"></a>Description</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.3"><p id="en-us_topic_0183316275_p10774983500"><a name="en-us_topic_0183316275_p10774983500"></a><a name="en-us_topic_0183316275_p10774983500"></a>Value Range</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0183316275_row677516855018"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p177518155011"><a name="en-us_topic_0183316275_p177518155011"></a><a name="en-us_topic_0183316275_p177518155011"></a>core</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p1977548165019"><a name="en-us_topic_0183316275_p1977548165019"></a><a name="en-us_topic_0183316275_p1977548165019"></a>limits the core file size (KB)</p>
    </td>
    <td class="cellrowborder" rowspan="14" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183316275_p1577516855011"><a name="en-us_topic_0183316275_p1577516855011"></a><a name="en-us_topic_0183316275_p1577516855011"></a>64-bit integer, without unit. The value can be 0 or a negative number. The value -1 indicates no limit. Other negative numbers are forcibly converted into a large positive integer.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row38865448572"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p128837446571"><a name="en-us_topic_0183316275_p128837446571"></a><a name="en-us_topic_0183316275_p128837446571"></a>cpu</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p24819486261"><a name="en-us_topic_0183316275_p24819486261"></a><a name="en-us_topic_0183316275_p24819486261"></a>max CPU time (MIN)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row18167105285716"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p7165205217570"><a name="en-us_topic_0183316275_p7165205217570"></a><a name="en-us_topic_0183316275_p7165205217570"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p216335710265"><a name="en-us_topic_0183316275_p216335710265"></a><a name="en-us_topic_0183316275_p216335710265"></a>max data size (KB)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row58218531574"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p68201953145714"><a name="en-us_topic_0183316275_p68201953145714"></a><a name="en-us_topic_0183316275_p68201953145714"></a>fsize</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p1541711817270"><a name="en-us_topic_0183316275_p1541711817270"></a><a name="en-us_topic_0183316275_p1541711817270"></a>maximum filesize (KB)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row13444185518573"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p244205517578"><a name="en-us_topic_0183316275_p244205517578"></a><a name="en-us_topic_0183316275_p244205517578"></a>locks</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p6620718182710"><a name="en-us_topic_0183316275_p6620718182710"></a><a name="en-us_topic_0183316275_p6620718182710"></a>max number of file locks the user can hold</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row4246175712575"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p1324485745719"><a name="en-us_topic_0183316275_p1324485745719"></a><a name="en-us_topic_0183316275_p1324485745719"></a>memlock</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p224415785717"><a name="en-us_topic_0183316275_p224415785717"></a><a name="en-us_topic_0183316275_p224415785717"></a>max locked-in-memory address space (KB)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row3759820162420"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p177551620192416"><a name="en-us_topic_0183316275_p177551620192416"></a><a name="en-us_topic_0183316275_p177551620192416"></a>msgqueue</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p0755220122413"><a name="en-us_topic_0183316275_p0755220122413"></a><a name="en-us_topic_0183316275_p0755220122413"></a>max memory used by POSIX message queues (bytes)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row584929152411"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p7811329152419"><a name="en-us_topic_0183316275_p7811329152419"></a><a name="en-us_topic_0183316275_p7811329152419"></a>nice</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p151801412182815"><a name="en-us_topic_0183316275_p151801412182815"></a><a name="en-us_topic_0183316275_p151801412182815"></a>nice priority</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row2387203192415"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p015081417259"><a name="en-us_topic_0183316275_p015081417259"></a><a name="en-us_topic_0183316275_p015081417259"></a>nproc</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p1454164112283"><a name="en-us_topic_0183316275_p1454164112283"></a><a name="en-us_topic_0183316275_p1454164112283"></a>max number of processes</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row510363316245"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p1210193311244"><a name="en-us_topic_0183316275_p1210193311244"></a><a name="en-us_topic_0183316275_p1210193311244"></a>rss</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p1330124872810"><a name="en-us_topic_0183316275_p1330124872810"></a><a name="en-us_topic_0183316275_p1330124872810"></a>max resident set size (KB)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row10182634162415"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p71806346245"><a name="en-us_topic_0183316275_p71806346245"></a><a name="en-us_topic_0183316275_p71806346245"></a>rtprio</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p8180153492410"><a name="en-us_topic_0183316275_p8180153492410"></a><a name="en-us_topic_0183316275_p8180153492410"></a>max realtime priority</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row731643517244"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p331311358242"><a name="en-us_topic_0183316275_p331311358242"></a><a name="en-us_topic_0183316275_p331311358242"></a>rttime</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p375422114613"><a name="en-us_topic_0183316275_p375422114613"></a><a name="en-us_topic_0183316275_p375422114613"></a>realtime timeout</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row189151636172412"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p791383610241"><a name="en-us_topic_0183316275_p791383610241"></a><a name="en-us_topic_0183316275_p791383610241"></a>sigpending</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p12730126203111"><a name="en-us_topic_0183316275_p12730126203111"></a><a name="en-us_topic_0183316275_p12730126203111"></a>max number of pending signals</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row163861238152414"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p23846383242"><a name="en-us_topic_0183316275_p23846383242"></a><a name="en-us_topic_0183316275_p23846383242"></a>stack</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p19713835143120"><a name="en-us_topic_0183316275_p19713835143120"></a><a name="en-us_topic_0183316275_p19713835143120"></a>max stack size (KB)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0183316275_row144841516818"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183316275_p47292201381"><a name="en-us_topic_0183316275_p47292201381"></a><a name="en-us_topic_0183316275_p47292201381"></a>nofile</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183316275_p972982017813"><a name="en-us_topic_0183316275_p972982017813"></a><a name="en-us_topic_0183316275_p972982017813"></a>max number of open file descriptors</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183316275_p77290204817"><a name="en-us_topic_0183316275_p77290204817"></a><a name="en-us_topic_0183316275_p77290204817"></a>64-bit integer, without unit. The value cannot be negative. A negative number is forcibly converted to a large positive number. In addition, "Operation not permitted" is displayed during the setting.</p>
    </td>
    </tr>
    </tbody>
    </table>


## Example<a name="en-us_topic_0183316275_section1734193235916"></a>

When creating or running a container, add  **--ulimit <type\>=<soft\>\[:<hard\>\]**. For example:

```
isula create/run -tid --ulimit nofile=1024:2048 busybox sh
```

## **Constraints**<a name="en-us_topic_0183316275_section346363019141"></a>

The ulimit cannot be configured in the  **daemon.json**  and  **/etc/sysconfig/iSulad**  files \(or the iSulad command line\). Otherwise, an error is reported when iSulad is started.

