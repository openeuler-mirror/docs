# Getting to Know A-Tune

-   [Getting to Know A-Tune](#getting-to-know-a-tune)
    -   [Introduction](#introduction)
    -   [Architecture](#architecture)
    -   [Supported Features and Service Models](#supported-features-and-service-models)



## Introduction

An operating system \(OS\) is basic software that connects applications and hardware. It is critical for users to adjust OS and application configurations and make full use of software and hardware capabilities to achieve optimal service performance. However, numerous workload types and varied applications run on the OS, and the requirements on resources are different. Currently, the application environment composed of hardware and software involves more than 7000 configuration objects. As the service complexity and optimization objects increase, the time cost for optimization increases exponentially. As a result, optimization efficiency decreases sharply. Optimization becomes complex and brings great challenges to users.

Second, as infrastructure software, the OS provides a large number of software and hardware management capabilities. The capability required varies in different scenarios. Therefore, capabilities need to be enabled or disabled depending on scenarios, and a combination of capabilities will maximize the optimal performance of applications.

In addition, the actual business embraces hundreds and thousands of scenarios, and each scenario involves a wide variety of hardware configurations for computing, network, and storage. The lab cannot list all applications, business scenarios, and hardware combinations.

To address the preceding challenges, openEuler launches A-Tune.

A-Tune is an AI-based engine that optimizes system performance. It uses AI technologies to precisely profile business scenarios, discover and infer business characteristics, so as to make intelligent decisions, match with the optimal system parameter configuration combination, and give recommendations, ensuring the optimal business running status.

![](figures/en-us_image_0227497000.png)

## Architecture

The following figure shows the A-Tune core technical architecture, which consists of intelligent decision-making, system profile, and interaction system.

-   Intelligent decision-making layer: consists of the awareness and decision-making subsystems, which implements intelligent awareness of applications and system optimization decision-making, respectively.
-   System profile layer: consists of the feature engineering and two-layer classification model. The feature engineering is used to automatically select service features, and the two-layer classification model is used to learn and classify service models.
-   Interaction system layer: monitors and configures various system resources and executes optimization policies.

![](figures/en-us_image_0227497343.png)

## Supported Features and Service Models

### Supported Features

[Table 1](#table1919220557576)  describes the main features supported by A-Tune, feature maturity, and usage suggestions.

**Table  1**  Feature maturity

<table><thead align="left"><tr id="row81921355135715"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1419275514576"><a name="p1419275514576"></a><a name="p1419275514576"></a><strong id="b175661223205512"><a name="b175661223205512"></a><a name="b175661223205512"></a>Feature</strong></p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p7192195520572"><a name="p7192195520572"></a><a name="p7192195520572"></a><strong id="b1386461334120"><a name="b1386461334120"></a><a name="b1386461334120"></a>Maturity</strong></p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p519205518573"><a name="p519205518573"></a><a name="p519205518573"></a><strong id="b135113227419"><a name="b135113227419"></a><a name="b135113227419"></a>Usage Suggestion</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row519275518572"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1349454518111"><a name="p1349454518111"></a><a name="p1349454518111"></a>Auto optimization of 50 applications in  14 workload types</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p48001027191117"><a name="p48001027191117"></a><a name="p48001027191117"></a>Tested</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15192195515715"><a name="p15192195515715"></a><a name="p15192195515715"></a>Pilot</p>
</td>
</tr>
<tr id="row919217552579"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p519218559571"><a name="p519218559571"></a><a name="p519218559571"></a>User-defined profile and service models</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18192655115710"><a name="p18192655115710"></a><a name="p18192655115710"></a>Tested</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p71921655145717"><a name="p71921655145717"></a><a name="p71921655145717"></a>Pilot</p>
</td>
</tr>
<tr id="row71921155165711"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p619217556575"><a name="p619217556575"></a><a name="p619217556575"></a>Automatic parameter optimization</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11192135595712"><a name="p11192135595712"></a><a name="p11192135595712"></a>Tested</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2019235511575"><a name="p2019235511575"></a><a name="p2019235511575"></a>Pilot</p>
</td>
</tr>
</tbody>
</table>


### Supported Service Models

Based on the workload characteristics of applications, A-Tune classifies services into 14 types. For details about the bottleneck of each type and the applications supported by A-Tune, see  [Table 2](#table2819164611311).

**Table  2**  Supported workload types and applications

<a name="table2819164611311"></a>
<table>
    <thead align="left">
        <tr id="row49114466133">
            <th class="cellrowborder" valign="top" width="22.12%" id="mcps1.2.5.1.1">
                <p id="p09116467130"><a name="p09116467130"></a><a name="p09116467130"></a><strong
                        id="b15640174472810"><a name="b15640174472810"></a><a name="b15640174472810"></a>Service
                        category</strong></p>
            </th>
            <th class="cellrowborder" valign="top" width="12.959999999999999%" id="mcps1.2.5.1.2">
                <p id="p953251510111"><a name="p953251510111"></a><a name="p953251510111"></a><strong
                        id="b155287539280"><a name="b155287539280"></a><a name="b155287539280"></a>Type</strong></p>
            </th>
            <th class="cellrowborder" valign="top" width="37.269999999999996%" id="mcps1.2.5.1.3">
                <p id="p169111846181310"><a name="p169111846181310"></a><a name="p169111846181310"></a><strong
                        id="b1378654312217"><a name="b1378654312217"></a><a
                            name="b1378654312217"></a>Bottleneck</strong></p>
            </th>
            <th class="cellrowborder" valign="top" width="27.650000000000002%" id="mcps1.2.5.1.4">
                <p id="p1591144617135"><a name="p1591144617135"></a><a name="p1591144617135"></a><strong
                        id="b1191411502021"><a name="b1191411502021"></a><a name="b1191411502021"></a>Supported
                        Application</strong></p>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr id="row17911114651318">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p1791124631317"><a name="p1791124631317"></a><a name="p1791124631317"></a>default</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p45321515191120"><a name="p45321515191120"></a><a name="p45321515191120"></a>Default type</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p691184671312"><a name="p691184671312"></a><a name="p691184671312"></a>Low resource usage in
                    terms of cpu, memory, network, and I/O</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p69111946131318"><a name="p69111946131318"></a><a name="p69111946131318"></a>N/A</p>
            </td>
        </tr>
        <tr id="row791164631318">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p179110461137"><a name="p179110461137"></a><a name="p179110461137"></a>webserver</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p20532111512117"><a name="p20532111512117"></a><a name="p20532111512117"></a>Web application</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p1191117469133"><a name="p1191117469133"></a><a name="p1191117469133"></a>Bottlenecks of cpu and
                    network</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p159111546161317"><a name="p159111546161317"></a><a name="p159111546161317"></a>Nginx, Apache Traffic Server, 
                    Tomcat, Apache Http Server, Squid, Postfix, lighttpd</p>
            </td>
        </tr>
        <tr id="row791164631318">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p179110461137"><a name="p179110461137"></a><a name="p179110461137"></a>ftp server</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p20532111512117"><a name="p20532111512117"></a><a name="p20532111512117"></a>ftp application</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p1191117469133"><a name="p1191117469133"></a><a name="p1191117469133"></a>Bottlenecks of cpu and
                    network</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p159111546161317"><a name="p159111546161317"></a><a name="p159111546161317"></a>vsftpd, proftpd</p>
            </td>
        </tr>
        <tr id="row13911946141311">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p2911164610134"><a name="p2911164610134"></a><a name="p2911164610134"></a>database</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p4532111561119"><a name="p4532111561119"></a><a name="p4532111561119"></a>Database</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 "><a
                    name="ul3724104521013"></a><a name="ul3724104521013"></a><a name="p1491144619136"></a>Bottlenecks of
                cpu, memory, and I/O
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p1091134671313"><a name="p1091134671313"></a><a name="p1091134671313"></a>Mongodb, Mysql, Postgresql,
                    Mariadb, openGauss, tidb, sqlite, QuestDB, influxdb, splunk, Cassandra, Neo4j
                </p>
            </td>
        </tr>
        <tr id="row13911946141311">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p2911164610134"><a name="p2911164610134"></a><a name="p2911164610134"></a>DDS</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p4532111561119"><a name="p4532111561119"></a><a name="p4532111561119"></a>distributed data store</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <a name="ul3724104521013"></a><a name="ul3724104521013"></a><a name="p14911124612131"></a>Bottlenecks of
                cpu, memory, and I/O
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p1091134671313"><a name="p1091134671313"></a><a name="p1091134671313"></a>storm, glusterFS, Ceph, 
                    Infinispan, ElasticSearch</p>
            </td>
        </tr>
        <tr id="row3911174641312">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p491144611319"><a name="p491144611319"></a><a name="p491144611319"></a>big_data</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p953261521112"><a name="p953261521112"></a><a name="p953261521112"></a>Big data</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p129111046151315"><a name="p129111046151315"></a><a name="p129111046151315"></a>Bottlenecks of
                    cpu and memory</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p119111946161317"><a name="p119111946161317"></a><a name="p119111946161317"></a>Hadoop-hdfs,
                    Hadoop-spark, hive</p>
            </td>
        </tr>
        <tr id="row591112462132">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p1791104661313"><a name="p1791104661313"></a><a name="p1791104661313"></a>middleware</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p453291517111"><a name="p453291517111"></a><a name="p453291517111"></a>Middleware framework</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p591184671318"><a name="p591184671318"></a><a name="p591184671318"></a>Bottlenecks of cpu and
                    network</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p2912846121315"><a name="p2912846121315"></a><a name="p2912846121315"></a>Dubbo, Zookeeper,
                    kafka, rabbitMQ, activeMQ, rocketMQ, etcd, karaf</p>
            </td>
        </tr>
        <tr id="row59121246181320">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p1391204619130"><a name="p1391204619130"></a><a name="p1391204619130"></a>in-memory_database</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p65328153111"><a name="p65328153111"></a><a name="p65328153111"></a>Memory database</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p3912164617133"><a name="p3912164617133"></a><a name="p3912164617133"></a>Bottlenecks of memory
                    and I/O</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p1691254621313"><a name="p1691254621313"></a><a name="p1691254621313"></a>Redis, Memcached, cachefilesd</p>
            </td>
        </tr>
        <tr id="row1991224641317">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p5912154613139"><a name="p5912154613139"></a><a name="p5912154613139"></a>operation</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p12532161561115"><a name="p12532161561115"></a><a name="p12532161561115"></a>O&M tools</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p10912154631311"><a name="p10912154631311"></a><a name="p10912154631311"></a>Bottlenecks of cpu and
                    network</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p11912164617133"><a name="p11912164617133"></a><a name="p11912164617133"></a>prometheus, ansible,
                    puppet, zabbix</p>
            </td>
        </tr>
        <tr id="row1891264641315">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p391214621312"><a name="p391214621312"></a><a name="p391214621312"></a>basic-test-suite</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p55324155117"><a name="p55324155117"></a><a name="p55324155117"></a>Basic test suite</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p1912164651319"><a name="p1912164651319"></a><a name="p1912164651319"></a>Bottlenecks of cpu and
                    memory</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p9912746121311"><a name="p9912746121311"></a><a name="p9912746121311"></a>SPECCPU2006,
                    SPECjbb2015</p>
            </td>
        </tr>
        <tr id="row2912184671312">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p1391213464130"><a name="p1391213464130"></a><a name="p1391213464130"></a>hpc</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p153210159118"><a name="p153210159118"></a><a name="p153210159118"></a>Human genome</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p591214460137"><a name="p591214460137"></a><a name="p591214460137"></a>Bottlenecks of cpu,
                    memory, and I/O</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p391214619139"><a name="p391214619139"></a><a name="p391214619139"></a>Gatk4</p>
            </td>
        </tr>
        <tr id="row1991224641317">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p5912154613139"><a name="p5912154613139"></a><a name="p5912154613139"></a>virtualization</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p12532161561115"><a name="p12532161561115"></a><a name="p12532161561115"></a>Virtualization</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p10912154631311"><a name="p10912154631311"></a><a name="p10912154631311"></a>Bottlenecks of cpu,
                    memory, and I/O</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p11912164617133"><a name="p11912164617133"></a><a name="p11912164617133"></a>Consumer-cloud,
                    Mariadb</p>
            </td>
        </tr>
        <tr id="row1991224641317">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p5912154613139"><a name="p5912154613139"></a><a name="p5912154613139"></a>docker</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p12532161561115"><a name="p12532161561115"></a><a name="p12532161561115"></a>Docker</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p10912154631311"><a name="p10912154631311"></a><a name="p10912154631311"></a>Bottlenecks of cpu,
                    memory, and I/O</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p11912164617133"><a name="p11912164617133"></a><a name="p11912164617133"></a>Mariadb</p>
            </td>
        </tr>
        <tr id="row1991224641317">
            <td class="cellrowborder" valign="top" width="22.12%" headers="mcps1.2.5.1.1 ">
                <p id="p5912154613139"><a name="p5912154613139"></a><a name="p5912154613139"></a>others</p>
            </td>
            <td class="cellrowborder" valign="top" width="12.959999999999999%" headers="mcps1.2.5.1.2 ">
                <p id="p12532161561115"><a name="p12532161561115"></a><a name="p12532161561115"></a>others</p>
            </td>
            <td class="cellrowborder" valign="top" width="37.269999999999996%" headers="mcps1.2.5.1.3 ">
                <p id="p10912154631311"><a name="p10912154631311"></a><a name="p10912154631311"></a>-</p>
            </td>
            <td class="cellrowborder" valign="top" width="27.650000000000002%" headers="mcps1.2.5.1.4 ">
                <p id="p11912164617133"><a name="p11912164617133"></a><a name="p11912164617133"></a>Encryption</p>
            </td>
        </tr>
    </tbody>
</table>


