# Software Description<a name="EN-US_TOPIC_0230050739"></a>

## Overview<a name="section5851042"></a>

[Figure 1](#fig26022387391)  shows the PostgreSQL architecture and  [Table 1](#table62020913417)  describes the main processes.

**Figure  1**  PostgreSQL architecture<a name="fig26022387391"></a>  
![](figures/postgresql-architecture.png "postgresql-architecture")

**Table  1**  Main processes in PostgreSQL

<a name="table62020913417"></a>
<table><thead align="left"><tr id="row23365171"><th class="cellrowborder" valign="top" width="7.07%" id="mcps1.2.4.1.1"><p id="p13530737"><a name="p13530737"></a><a name="p13530737"></a>Process Type</p>
</th>
<th class="cellrowborder" valign="top" width="21.21%" id="mcps1.2.4.1.2"><p id="p22247923"><a name="p22247923"></a><a name="p22247923"></a>Process Name</p>
</th>
<th class="cellrowborder" valign="top" width="71.72%" id="mcps1.2.4.1.3"><p id="p57251362"><a name="p57251362"></a><a name="p57251362"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row6848741"><td class="cellrowborder" valign="top" width="7.07%" headers="mcps1.2.4.1.1 "><p id="p17877157"><a name="p17877157"></a><a name="p17877157"></a>Main process</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="p38763593"><a name="p38763593"></a><a name="p38763593"></a>Postmaster</p>
</td>
<td class="cellrowborder" valign="top" width="71.72%" headers="mcps1.2.4.1.3 "><p id="p52843322"><a name="p52843322"></a><a name="p52843322"></a>Postmaster process controls all database instances in general and is responsible for starting and stopping database instances.</p>
</td>
</tr>
<tr id="row5827850"><td class="cellrowborder" valign="top" width="7.07%" headers="mcps1.2.4.1.1 "><p id="p2293848"><a name="p2293848"></a><a name="p2293848"></a>Resident process</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="p51584039"><a name="p51584039"></a><a name="p51584039"></a>Postgres (resident process)</p>
</td>
<td class="cellrowborder" valign="top" width="71.72%" headers="mcps1.2.4.1.3 "><p id="p17557663"><a name="p17557663"></a><a name="p17557663"></a>This process manages backend resident processes and is also called postmaster. By default, this process listens Unix domain sockets and the 5432 port of TCP/IP and waits for the front end to process the connections. You can change the listening port number in the <strong id="b9212646143411"><a name="b9212646143411"></a><a name="b9212646143411"></a>postgresql.conf</strong> file of PostgreSQL.</p>
</td>
</tr>
<tr id="row23801241"><td class="cellrowborder" valign="top" width="7.07%" headers="mcps1.2.4.1.1 "><p id="p48852384"><a name="p48852384"></a><a name="p48852384"></a>Subprocess</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="p64729060"><a name="p64729060"></a><a name="p64729060"></a>Postgres (subprocess)</p>
</td>
<td class="cellrowborder" valign="top" width="71.72%" headers="mcps1.2.4.1.3 "><p id="p8562508"><a name="p8562508"></a><a name="p8562508"></a>The subprocess determines whether to allow the connection according to the security policy defined by the <strong id="b12671436153517"><a name="b12671436153517"></a><a name="b12671436153517"></a>pg_hba.conf</strong> file. According to the security policy, the subprocess rejects certain IP addresses and networks, allows only certain users to connect to the databases, or allows only certain databases to be connected.</p>
<p id="p9953713"><a name="p9953713"></a><a name="p9953713"></a>Postgres receives the query from the front end, searches the database, and returns the results. Sometimes, it also updates the database. The updated data is recorded in transaction logs (WAL logs for PostgreSQL). This method is used when the system is powered off, the server breaks down, or the server is restarted. In addition, the logs can also be used for data recovery in other scenarios. In PostgreSQL 9.0 or later, WAL logs can be transferred to other PostgreSQL systems to replicate database in real-time.</p>
</td>
</tr>
<tr id="row22474561"><td class="cellrowborder" rowspan="7" valign="top" width="7.07%" headers="mcps1.2.4.1.1 "><p id="p8500138"><a name="p8500138"></a><a name="p8500138"></a>Auxiliary processes</p>
</td>
<td class="cellrowborder" valign="top" width="21.21%" headers="mcps1.2.4.1.2 "><p id="p17422576"><a name="p17422576"></a><a name="p17422576"></a>SysLogger (system log)</p>
</td>
<td class="cellrowborder" valign="top" width="71.72%" headers="mcps1.2.4.1.3 "><p id="p1942522"><a name="p1942522"></a><a name="p1942522"></a>The main process starts the Syslogger auxiliary process only when <strong id="b4436165755314"><a name="b4436165755314"></a><a name="b4436165755314"></a>logging_collection</strong> in the <strong id="b24371257165319"><a name="b24371257165319"></a><a name="b24371257165319"></a>Postgres.conf</strong> file is set to <strong id="b1343715714533"><a name="b1343715714533"></a><a name="b1343715714533"></a>on</strong>.</p>
</td>
</tr>
<tr id="row17482700"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p6812600"><a name="p6812600"></a><a name="p6812600"></a>BgWriter (background write)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p14949724"><a name="p14949724"></a><a name="p14949724"></a>This process writes dirty pages from the shared memory to the drive. The purpose is to improve the performance of inserting, updating, and deleting data.</p>
</td>
</tr>
<tr id="row329795"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p26713455"><a name="p26713455"></a><a name="p26713455"></a>WALWriter (write-ahead log)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p16306280"><a name="p16306280"></a><a name="p16306280"></a>This process writes modification operations into drives before data is modified so that the data does not need to be persisted into files in subsequent real-time data updates.</p>
</td>
</tr>
<tr id="row12538797"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p9009603"><a name="p9009603"></a><a name="p9009603"></a>PgArch (archive)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p58689242"><a name="p58689242"></a><a name="p58689242"></a>write-ahead logs (WALs) are recycled. The PgArch process backs up WALs before archiving them. After the entire database is backed up, the Point in Time Recovery (PITR) technology can be used to archive WALs. The database can be restored to any point after the full backup by using the full backup data and the subsequently archived WALs.</p>
</td>
</tr>
<tr id="row58441133"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p36111336"><a name="p36111336"></a><a name="p36111336"></a>AutoVacuum (automatic cleanup)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p39337079"><a name="p39337079"></a><a name="p39337079"></a>In the PostgreSQL database, after a DELETE operation is performed on a table, old data is not immediately deleted. When new data is added, the system creates a data row instead of overwriting the old data. The old data is only marked as deleted and will be cleared only when no other concurrent transactions are reading the data. In this case, the data is cleared by the AutoVacuum process.</p>
</td>
</tr>
<tr id="row18489394"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p21245915"><a name="p21245915"></a><a name="p21245915"></a>PgStat (statistics collection)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p43197516"><a name="p43197516"></a><a name="p43197516"></a>This process collects data statistics. It is used to estimate the cost during query optimization, including the number of insertions update, and deletion operations performed on a table or index, the number of drive block read and write operations, and the number of row read operations. <strong id="b1147814611311"><a name="b1147814611311"></a><a name="b1147814611311"></a>pg_statistic</strong> stores the information collected by the PgStat.</p>
</td>
</tr>
<tr id="row53233327"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p16932256"><a name="p16932256"></a><a name="p16932256"></a>CheckPoint (checkpoint)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p29335534"><a name="p29335534"></a><a name="p29335534"></a>A checkpoint is a transaction sequence point set by the system. It is used to ensure that log information before a checkpoint written into the drives.</p>
</td>
</tr>
</tbody>
</table>

