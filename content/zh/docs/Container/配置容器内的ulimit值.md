# 配置容器内的ulimit值<a name="ZH-CN_TOPIC_0184808085"></a>

## 描述<a name="zh-cn_topic_0183316275_section13350115135310"></a>

可以通过参数控制执行程序的资源。

## 用法<a name="zh-cn_topic_0183316275_section188811239165314"></a>

在容器create/run时配置--ulimit参数，或通过daemon端配置，控制容器中执行程序的资源。

## 参数<a name="zh-cn_topic_0183316275_section204328722112"></a>

通过两种方法配置ulimit

1.  isula create/run时使用--ulimit <type\>=<soft\>\[:<hard\>\]来控制shell执行程序的资源。

    <a name="zh-cn_topic_0183316275_table192755843616"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0183316275_row1927175818360"><th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.1"><p id="zh-cn_topic_0183316275_p2027105863611"><a name="zh-cn_topic_0183316275_p2027105863611"></a><a name="zh-cn_topic_0183316275_p2027105863611"></a><strong id="zh-cn_topic_0183316275_b122755815363"><a name="zh-cn_topic_0183316275_b122755815363"></a><a name="zh-cn_topic_0183316275_b122755815363"></a>参数项</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.2"><p id="zh-cn_topic_0183316275_p92717581368"><a name="zh-cn_topic_0183316275_p92717581368"></a><a name="zh-cn_topic_0183316275_p92717581368"></a><strong id="zh-cn_topic_0183316275_b15271058103614"><a name="zh-cn_topic_0183316275_b15271058103614"></a><a name="zh-cn_topic_0183316275_b15271058103614"></a>参数说明</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.3"><p id="zh-cn_topic_0183316275_p162711588364"><a name="zh-cn_topic_0183316275_p162711588364"></a><a name="zh-cn_topic_0183316275_p162711588364"></a><strong id="zh-cn_topic_0183316275_b19271058103613"><a name="zh-cn_topic_0183316275_b19271058103613"></a><a name="zh-cn_topic_0183316275_b19271058103613"></a>取值范围</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.1.5.1.4"><p id="zh-cn_topic_0183316275_p152715819368"><a name="zh-cn_topic_0183316275_p152715819368"></a><a name="zh-cn_topic_0183316275_p152715819368"></a><strong id="zh-cn_topic_0183316275_b182755853612"><a name="zh-cn_topic_0183316275_b182755853612"></a><a name="zh-cn_topic_0183316275_b182755853612"></a>是否必选</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0183316275_row5282058193614"><td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.1 "><p id="zh-cn_topic_0183316275_p02895810364"><a name="zh-cn_topic_0183316275_p02895810364"></a><a name="zh-cn_topic_0183316275_p02895810364"></a>--ulimit</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.2 "><p id="zh-cn_topic_0183316275_p2288589368"><a name="zh-cn_topic_0183316275_p2288589368"></a><a name="zh-cn_topic_0183316275_p2288589368"></a>限制shell执行程序的资源</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.3 "><p id="zh-cn_topic_0183316275_p113155510143"><a name="zh-cn_topic_0183316275_p113155510143"></a><a name="zh-cn_topic_0183316275_p113155510143"></a>soft/hard是64位整数(int64)。soft取值 &lt;= hard取值，如果仅仅指定了soft的取值，则hard=soft。对于某些类型的资源并不支持负数，详见下表</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.1.5.1.4 "><p id="zh-cn_topic_0183316275_p128558163611"><a name="zh-cn_topic_0183316275_p128558163611"></a><a name="zh-cn_topic_0183316275_p128558163611"></a>否</p>
    </td>
    </tr>
    </tbody>
    </table>

2.  通过daemon端参数或配置文件

    详见"(命令行参数说明"与"部署方式"的--default-ulimits相关选项。

    --ulimit可以对以下类型的资源进行限制。

    <a name="zh-cn_topic_0183316275_table107744812507"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0183316275_row1277419815508"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0183316275_p2774681505"><a name="zh-cn_topic_0183316275_p2774681505"></a><a name="zh-cn_topic_0183316275_p2774681505"></a><strong id="zh-cn_topic_0183316275_b1777458105010"><a name="zh-cn_topic_0183316275_b1777458105010"></a><a name="zh-cn_topic_0183316275_b1777458105010"></a>类型</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0183316275_p6774168185013"><a name="zh-cn_topic_0183316275_p6774168185013"></a><a name="zh-cn_topic_0183316275_p6774168185013"></a><strong id="zh-cn_topic_0183316275_b157749817506"><a name="zh-cn_topic_0183316275_b157749817506"></a><a name="zh-cn_topic_0183316275_b157749817506"></a>说明</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0183316275_p10774983500"><a name="zh-cn_topic_0183316275_p10774983500"></a><a name="zh-cn_topic_0183316275_p10774983500"></a><strong id="zh-cn_topic_0183316275_b177411815014"><a name="zh-cn_topic_0183316275_b177411815014"></a><a name="zh-cn_topic_0183316275_b177411815014"></a>取值范围</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0183316275_row677516855018"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p177518155011"><a name="zh-cn_topic_0183316275_p177518155011"></a><a name="zh-cn_topic_0183316275_p177518155011"></a>core</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p1977548165019"><a name="zh-cn_topic_0183316275_p1977548165019"></a><a name="zh-cn_topic_0183316275_p1977548165019"></a>limits the core file size (KB)</p>
    </td>
    <td class="cellrowborder" rowspan="14" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0183316275_p1577516855011"><a name="zh-cn_topic_0183316275_p1577516855011"></a><a name="zh-cn_topic_0183316275_p1577516855011"></a>64位整数(INT64)，无单位。可以为0、负、其中-1表示UNLIMITED，即不做限制，其余的负数会被强制转换为一个大的正整数。</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row38865448572"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p128837446571"><a name="zh-cn_topic_0183316275_p128837446571"></a><a name="zh-cn_topic_0183316275_p128837446571"></a>cpu</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p24819486261"><a name="zh-cn_topic_0183316275_p24819486261"></a><a name="zh-cn_topic_0183316275_p24819486261"></a>max CPU time (MIN)</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row18167105285716"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p7165205217570"><a name="zh-cn_topic_0183316275_p7165205217570"></a><a name="zh-cn_topic_0183316275_p7165205217570"></a>data</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p216335710265"><a name="zh-cn_topic_0183316275_p216335710265"></a><a name="zh-cn_topic_0183316275_p216335710265"></a>max data size (KB)</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row58218531574"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p68201953145714"><a name="zh-cn_topic_0183316275_p68201953145714"></a><a name="zh-cn_topic_0183316275_p68201953145714"></a>fsize</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p1541711817270"><a name="zh-cn_topic_0183316275_p1541711817270"></a><a name="zh-cn_topic_0183316275_p1541711817270"></a>maximum filesize (KB)</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row13444185518573"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p244205517578"><a name="zh-cn_topic_0183316275_p244205517578"></a><a name="zh-cn_topic_0183316275_p244205517578"></a>locks</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p6620718182710"><a name="zh-cn_topic_0183316275_p6620718182710"></a><a name="zh-cn_topic_0183316275_p6620718182710"></a>max number of file locks the user can hold</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row4246175712575"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p1324485745719"><a name="zh-cn_topic_0183316275_p1324485745719"></a><a name="zh-cn_topic_0183316275_p1324485745719"></a>memlock</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p224415785717"><a name="zh-cn_topic_0183316275_p224415785717"></a><a name="zh-cn_topic_0183316275_p224415785717"></a>max locked-in-memory address space (KB)</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row3759820162420"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p177551620192416"><a name="zh-cn_topic_0183316275_p177551620192416"></a><a name="zh-cn_topic_0183316275_p177551620192416"></a>msgqueue</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p0755220122413"><a name="zh-cn_topic_0183316275_p0755220122413"></a><a name="zh-cn_topic_0183316275_p0755220122413"></a>max memory used by POSIX message queues (bytes)</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row584929152411"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p7811329152419"><a name="zh-cn_topic_0183316275_p7811329152419"></a><a name="zh-cn_topic_0183316275_p7811329152419"></a>nice</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p151801412182815"><a name="zh-cn_topic_0183316275_p151801412182815"></a><a name="zh-cn_topic_0183316275_p151801412182815"></a>nice priority</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row2387203192415"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p015081417259"><a name="zh-cn_topic_0183316275_p015081417259"></a><a name="zh-cn_topic_0183316275_p015081417259"></a>nproc</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p1454164112283"><a name="zh-cn_topic_0183316275_p1454164112283"></a><a name="zh-cn_topic_0183316275_p1454164112283"></a>max number of processes</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row510363316245"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p1210193311244"><a name="zh-cn_topic_0183316275_p1210193311244"></a><a name="zh-cn_topic_0183316275_p1210193311244"></a>rss</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p1330124872810"><a name="zh-cn_topic_0183316275_p1330124872810"></a><a name="zh-cn_topic_0183316275_p1330124872810"></a>max resident set size (KB)</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row10182634162415"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p71806346245"><a name="zh-cn_topic_0183316275_p71806346245"></a><a name="zh-cn_topic_0183316275_p71806346245"></a>rtprio</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p8180153492410"><a name="zh-cn_topic_0183316275_p8180153492410"></a><a name="zh-cn_topic_0183316275_p8180153492410"></a>max realtime priority</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row731643517244"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p331311358242"><a name="zh-cn_topic_0183316275_p331311358242"></a><a name="zh-cn_topic_0183316275_p331311358242"></a>rttime</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p375422114613"><a name="zh-cn_topic_0183316275_p375422114613"></a><a name="zh-cn_topic_0183316275_p375422114613"></a>realtime timeout</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row189151636172412"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p791383610241"><a name="zh-cn_topic_0183316275_p791383610241"></a><a name="zh-cn_topic_0183316275_p791383610241"></a>sigpending</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p12730126203111"><a name="zh-cn_topic_0183316275_p12730126203111"></a><a name="zh-cn_topic_0183316275_p12730126203111"></a>max number of pending signals</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row163861238152414"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p23846383242"><a name="zh-cn_topic_0183316275_p23846383242"></a><a name="zh-cn_topic_0183316275_p23846383242"></a>stack</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p19713835143120"><a name="zh-cn_topic_0183316275_p19713835143120"></a><a name="zh-cn_topic_0183316275_p19713835143120"></a>max stack size (KB)</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0183316275_row144841516818"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0183316275_p47292201381"><a name="zh-cn_topic_0183316275_p47292201381"></a><a name="zh-cn_topic_0183316275_p47292201381"></a>nofile</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0183316275_p972982017813"><a name="zh-cn_topic_0183316275_p972982017813"></a><a name="zh-cn_topic_0183316275_p972982017813"></a>max number of open file descriptors</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0183316275_p77290204817"><a name="zh-cn_topic_0183316275_p77290204817"></a><a name="zh-cn_topic_0183316275_p77290204817"></a>64位整数(int64)，无单位。不可以为负，负数被强转为大数，设置时会出现Operation not permitted</p>
    </td>
    </tr>
    </tbody>
    </table>


## 示例<a name="zh-cn_topic_0183316275_section1734193235916"></a>

在容器的创建或者运行时，加上--ulimit <type\>=<soft\>\[:<hard\>\]即可，如：

```
isula create/run -tid --ulimit nofile=1024:2048 busybox sh
```

## 约束<a name="zh-cn_topic_0183316275_section346363019141"></a>

不能在daemon.json和/etc/sysconfig/iSulad文件（或isulad命令行）中同时配置ulimit限制，否则isulad启动会报错。

