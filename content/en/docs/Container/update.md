# update<a name="EN-US_TOPIC_0184808259"></a>

Syntax:  **docker update \[**_options_**\]** _container_ **\[**_container_**...\]**

Function: Hot changes one or more container configurations.

Parameter description:

**Table  1**  Parameter description

<a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_table1239044502210"></a>
<table><thead align="left"><tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row439004518223"><th class="cellrowborder" valign="top" width="32%" id="mcps1.2.3.1.1"><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p19390104532213"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p19390104532213"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p19390104532213"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="68%" id="mcps1.2.3.1.2"><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1039064522216"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1039064522216"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1039064522216"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row1349192781120"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p2350827111119"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p2350827111119"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p2350827111119"></a>--accel=[]</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p535052711113"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p535052711113"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p535052711113"></a>Configures one or more container accelerators.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row939164522218"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p03911345142218"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p03911345142218"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p03911345142218"></a>--blkio-weight</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1139111453223"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1139111453223"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1139111453223"></a>Relative weight of the container blockio. The value ranges from 10 to 1000.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row339184572217"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p83911445172217"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p83911445172217"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p83911445172217"></a>--cpu-shares</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p3391145132220"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p3391145132220"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p3391145132220"></a>Relative weight of the host CPU obtained by the container. This parameter can be used to obtain a higher priority. By default, all containers obtain the same CPU priority.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row8107726122617"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p51070266260"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p51070266260"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p51070266260"></a>--cpu-period</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p6107926132615"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p6107926132615"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p6107926132615"></a>CPU CFS period.</p>
<p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1869573811136"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1869573811136"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1869573811136"></a>The default value is <strong id="en-us_topic_0183243758_b19154594811"><a name="en-us_topic_0183243758_b19154594811"></a><a name="en-us_topic_0183243758_b19154594811"></a>100</strong> ms. Generally, <strong id="en-us_topic_0183243758_b122332611483"><a name="en-us_topic_0183243758_b122332611483"></a><a name="en-us_topic_0183243758_b122332611483"></a>--cpu-period</strong> and<strong id="en-us_topic_0183243758_b12404898483"><a name="en-us_topic_0183243758_b12404898483"></a><a name="en-us_topic_0183243758_b12404898483"></a> --cpu-quota</strong> are used together. For example, <strong id="en-us_topic_0183243758_b10524141912486"><a name="en-us_topic_0183243758_b10524141912486"></a><a name="en-us_topic_0183243758_b10524141912486"></a>--cpu-period=50000 --cpu-quota=25000</strong> indicates that if there is one CPU, the container can obtain 50% of the CPU every 50 ms.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row5206162817268"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p3206528112617"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p3206528112617"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p3206528112617"></a>--cpu-quota</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p416835333813"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p416835333813"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p416835333813"></a>CPU CFS quota. The default value is <strong id="en-us_topic_0183243758_b185507410487"><a name="en-us_topic_0183243758_b185507410487"></a><a name="en-us_topic_0183243758_b185507410487"></a>0</strong>, indicating that there is no restriction on the quota.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row156458413395"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1264694173910"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1264694173910"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1264694173910"></a>--cpuset-cpus</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p924612309396"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p924612309396"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p924612309396"></a>Number of CPUs (0-3, 0, 1) that can be used by processes in the container. By default, there is no restriction on this parameter.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row2946124394"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p494181216393"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p494181216393"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p494181216393"></a>--cpuset-mems</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p20942126396"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p20942126396"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p20942126396"></a>Memory nodes (0-3, 0, 1) for running processes in the container. This parameter is valid only for the NUMA system.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row125801648161311"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p7581448101317"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p7581448101317"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p7581448101317"></a>--kernel-memory=""</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1858174812134"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1858174812134"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1858174812134"></a>Kernel memory limit of a container. The format is <em id="en-us_topic_0183243758_i1268633713512"><a name="en-us_topic_0183243758_i1268633713512"></a><a name="en-us_topic_0183243758_i1268633713512"></a>number</em><em id="en-us_topic_0183243758_i1020211217526"><a name="en-us_topic_0183243758_i1020211217526"></a><a name="en-us_topic_0183243758_i1020211217526"></a>optional unit</em>, and available units are <strong id="en-us_topic_0183243758_b1484073720529"><a name="en-us_topic_0183243758_b1484073720529"></a><a name="en-us_topic_0183243758_b1484073720529"></a>b</strong>, <strong id="en-us_topic_0183243758_b4836842165213"><a name="en-us_topic_0183243758_b4836842165213"></a><a name="en-us_topic_0183243758_b4836842165213"></a>k</strong>, <strong id="en-us_topic_0183243758_b121113441523"><a name="en-us_topic_0183243758_b121113441523"></a><a name="en-us_topic_0183243758_b121113441523"></a>m</strong>, and <strong id="en-us_topic_0183243758_b17332846145213"><a name="en-us_topic_0183243758_b17332846145213"></a><a name="en-us_topic_0183243758_b17332846145213"></a>g</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row1469012816412"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p26901688416"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p26901688416"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p26901688416"></a>-m, --memory=""</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1469017824112"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1469017824112"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1469017824112"></a>Memory limit of a container. The format is <em id="en-us_topic_0183243758_i1851712125320"><a name="en-us_topic_0183243758_i1851712125320"></a><a name="en-us_topic_0183243758_i1851712125320"></a>number</em><em id="en-us_topic_0183243758_i18521012165316"><a name="en-us_topic_0183243758_i18521012165316"></a><a name="en-us_topic_0183243758_i18521012165316"></a>optional unit</em>, and available units are <strong id="en-us_topic_0183243758_b285310127531"><a name="en-us_topic_0183243758_b285310127531"></a><a name="en-us_topic_0183243758_b285310127531"></a>b</strong>, <strong id="en-us_topic_0183243758_b16854512165317"><a name="en-us_topic_0183243758_b16854512165317"></a><a name="en-us_topic_0183243758_b16854512165317"></a>k</strong>, <strong id="en-us_topic_0183243758_b0854171214531"><a name="en-us_topic_0183243758_b0854171214531"></a><a name="en-us_topic_0183243758_b0854171214531"></a>m</strong>, and <strong id="en-us_topic_0183243758_b148551712185319"><a name="en-us_topic_0183243758_b148551712185319"></a><a name="en-us_topic_0183243758_b148551712185319"></a>g</strong>. The minimum value of this parameter is <strong id="en-us_topic_0183243758_b132411291533"><a name="en-us_topic_0183243758_b132411291533"></a><a name="en-us_topic_0183243758_b132411291533"></a>4m</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row1718125964210"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p11811595428"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p11811595428"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p11811595428"></a>--memory-reservation</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p21815598424"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p21815598424"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p21815598424"></a>Container memory limit. The default value is the same as that of <strong id="en-us_topic_0183243758_b175688476536"><a name="en-us_topic_0183243758_b175688476536"></a><a name="en-us_topic_0183243758_b175688476536"></a>--memory</strong>. <strong id="en-us_topic_0183243758_b1551952541"><a name="en-us_topic_0183243758_b1551952541"></a><a name="en-us_topic_0183243758_b1551952541"></a>--memory</strong> is a hard limit, and <strong id="en-us_topic_0183243758_b755210525410"><a name="en-us_topic_0183243758_b755210525410"></a><a name="en-us_topic_0183243758_b755210525410"></a>--memory-reservation</strong> is a soft limit. When the memory usage exceeds the preset value, the memory usage is dynamically adjusted (the system attempts to reduce the memory usage to a value less than the preset value when reclaiming the memory). However, the memory usage may exceed the preset value. Generally, this parameter can be used together with <strong id="en-us_topic_0183243758_b3834868545"><a name="en-us_topic_0183243758_b3834868545"></a><a name="en-us_topic_0183243758_b3834868545"></a>--memory</strong>. The value must be less than the preset value of <strong id="en-us_topic_0183243758_b5835116155414"><a name="en-us_topic_0183243758_b5835116155414"></a><a name="en-us_topic_0183243758_b5835116155414"></a>--memory</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row13297131204317"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p17297171144317"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p17297171144317"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p17297171144317"></a>--memory-swap</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p20638163719436"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p20638163719436"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p20638163719436"></a>Total usage of the common memory and swap partition. <strong id="en-us_topic_0183243758_b4692183419545"><a name="en-us_topic_0183243758_b4692183419545"></a><a name="en-us_topic_0183243758_b4692183419545"></a>-1</strong> indicates no restriction is set on the usage. If this parameter is not set, the swap partition size is twice the value of <strong id="en-us_topic_0183243758_b29707144558"><a name="en-us_topic_0183243758_b29707144558"></a><a name="en-us_topic_0183243758_b29707144558"></a>--memory</strong>. That is, the swap partition can use the same amount of memory as<strong id="en-us_topic_0183243758_b9872132316553"><a name="en-us_topic_0183243758_b9872132316553"></a><a name="en-us_topic_0183243758_b9872132316553"></a> --memory</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row15237826153817"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p0237182619382"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p0237182619382"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p0237182619382"></a>--restart=""</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p2345184412396"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p2345184412396"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p2345184412396"></a>Configures restart rule when the container exits. Currently, version 1.3.1 supports the following rules:</p>
<a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_ul17280105917391"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_ul17280105917391"></a><ul id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_ul17280105917391"><li><strong id="en-us_topic_0183243758_b3232137115619"><a name="en-us_topic_0183243758_b3232137115619"></a><a name="en-us_topic_0183243758_b3232137115619"></a>no</strong>: indicates that the container is not restarted when it is stopped.</li><li><strong id="en-us_topic_0183243758_b115642278569"><a name="en-us_topic_0183243758_b115642278569"></a><a name="en-us_topic_0183243758_b115642278569"></a>on-failure</strong>: indicates that the container is restarted when the container exit code is not 0. This rule can be used to add the maximum number of restart times, for example, <strong id="en-us_topic_0183243758_b1830657575"><a name="en-us_topic_0183243758_b1830657575"></a><a name="en-us_topic_0183243758_b1830657575"></a>on-failure:5</strong>, indicating that the container can be restarted for a maximum of five times.</li><li><strong id="en-us_topic_0183243758_b14833133495717"><a name="en-us_topic_0183243758_b14833133495717"></a><a name="en-us_topic_0183243758_b14833133495717"></a>always</strong>: indicates the container is exited regardless of the exit code.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_row209473268151"><td class="cellrowborder" valign="top" width="32%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p189474268154"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p189474268154"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p189474268154"></a>--help</p>
</td>
<td class="cellrowborder" valign="top" width="68%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1394720264154"><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1394720264154"></a><a name="en-us_topic_0183243758_en-us_topic_0155237612_en-us_topic_0138971318_p1394720264154"></a>Help information.</p>
</td>
</tr>
</tbody>
</table>

Example:

Run the following command to change the CPU and memory configurations of the container named  **busybox**, including changing the relative weight of the host CPU obtained by the container to  **512**, the CPU cores that can be run by processes in the container to  **0,1,2,3**, and the memory limit for running the container to  **512 m**.

```
$ sudo docker update  --cpu-shares 512  --cpuset-cpus=0,3 --memory 512m ubuntu 
```
