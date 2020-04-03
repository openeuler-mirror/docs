# Storage Description<a name="EN-US_TOPIC_0184808046"></a>

<a name="en-us_topic_0183755188_table12812112117504"></a>
<table><thead align="left"><tr id="en-us_topic_0183755188_row20897152155019"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.1.4.1.1"><p id="en-us_topic_0183755188_p4898152114502"><a name="en-us_topic_0183755188_p4898152114502"></a><a name="en-us_topic_0183755188_p4898152114502"></a>File</p>
</th>
<th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.1.4.1.2"><p id="en-us_topic_0183755188_p1589832118507"><a name="en-us_topic_0183755188_p1589832118507"></a><a name="en-us_topic_0183755188_p1589832118507"></a>Directory</p>
</th>
<th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.1.4.1.3"><p id="en-us_topic_0183755188_p689882118509"><a name="en-us_topic_0183755188_p689882118509"></a><a name="en-us_topic_0183755188_p689882118509"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0183755188_row1789852111506"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183755188_p4898521125010"><a name="en-us_topic_0183755188_p4898521125010"></a><a name="en-us_topic_0183755188_p4898521125010"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183755188_p18898182185011"><a name="en-us_topic_0183755188_p18898182185011"></a><a name="en-us_topic_0183755188_p18898182185011"></a>/etc/default/isulad/</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183755188_p2089892145016"><a name="en-us_topic_0183755188_p2089892145016"></a><a name="en-us_topic_0183755188_p2089892145016"></a>Stores the OCI configuration file and hook template file of iSulad. The file configuration permission is set to <strong id="en-us_topic_0183755188_b15486781267"><a name="en-us_topic_0183755188_b15486781267"></a><a name="en-us_topic_0183755188_b15486781267"></a>0640</strong>, and the sysmonitor check permission is set to <strong id="en-us_topic_0183755188_b2787171118612"><a name="en-us_topic_0183755188_b2787171118612"></a><a name="en-us_topic_0183755188_b2787171118612"></a>0550</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0183755188_row108989214505"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183755188_p138981221135016"><a name="en-us_topic_0183755188_p138981221135016"></a><a name="en-us_topic_0183755188_p138981221135016"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183755188_p118981521145012"><a name="en-us_topic_0183755188_p118981521145012"></a><a name="en-us_topic_0183755188_p118981521145012"></a>/etc/isulad/</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183755188_p15898182115506"><a name="en-us_topic_0183755188_p15898182115506"></a><a name="en-us_topic_0183755188_p15898182115506"></a>Default configuration files of iSulad and seccomp.</p>
</td>
</tr>
<tr id="en-us_topic_0183755188_row118989218509"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183755188_p089820217501"><a name="en-us_topic_0183755188_p089820217501"></a><a name="en-us_topic_0183755188_p089820217501"></a>isulad.sock</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183755188_p158987218508"><a name="en-us_topic_0183755188_p158987218508"></a><a name="en-us_topic_0183755188_p158987218508"></a>/var/run/</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183755188_p389802105013"><a name="en-us_topic_0183755188_p389802105013"></a><a name="en-us_topic_0183755188_p389802105013"></a>Pipe communication file, which is used for the communication between the client and iSulad.</p>
</td>
</tr>
<tr id="en-us_topic_0183755188_row19898122145010"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183755188_p198986218509"><a name="en-us_topic_0183755188_p198986218509"></a><a name="en-us_topic_0183755188_p198986218509"></a>isulad.pid</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183755188_p11898221175017"><a name="en-us_topic_0183755188_p11898221175017"></a><a name="en-us_topic_0183755188_p11898221175017"></a>/var/run/</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183755188_p289852115509"><a name="en-us_topic_0183755188_p289852115509"></a><a name="en-us_topic_0183755188_p289852115509"></a>File for storing the iSulad PIDs. It is also a file lock to prevent multiple iSulad instances from being started.</p>
</td>
</tr>
<tr id="en-us_topic_0183755188_row28986211507"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183755188_p128981021115012"><a name="en-us_topic_0183755188_p128981021115012"></a><a name="en-us_topic_0183755188_p128981021115012"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183755188_p1898112165010"><a name="en-us_topic_0183755188_p1898112165010"></a><a name="en-us_topic_0183755188_p1898112165010"></a>/run/lxc/</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183755188_p68981121175010"><a name="en-us_topic_0183755188_p68981121175010"></a><a name="en-us_topic_0183755188_p68981121175010"></a>Lock file, which is created during iSulad running.</p>
</td>
</tr>
<tr id="en-us_topic_0183755188_row389812120502"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183755188_p189812212507"><a name="en-us_topic_0183755188_p189812212507"></a><a name="en-us_topic_0183755188_p189812212507"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183755188_p168981421125015"><a name="en-us_topic_0183755188_p168981421125015"></a><a name="en-us_topic_0183755188_p168981421125015"></a>/var/run/isulad/</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183755188_p118981521185013"><a name="en-us_topic_0183755188_p118981521185013"></a><a name="en-us_topic_0183755188_p118981521185013"></a>Real-time communication cache file, which is created during iSulad running.</p>
</td>
</tr>
<tr id="en-us_topic_0183755188_row13898142116508"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183755188_p1889802125013"><a name="en-us_topic_0183755188_p1889802125013"></a><a name="en-us_topic_0183755188_p1889802125013"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183755188_p158988216507"><a name="en-us_topic_0183755188_p158988216507"></a><a name="en-us_topic_0183755188_p158988216507"></a>/var/run/isula/</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183755188_p2898221105010"><a name="en-us_topic_0183755188_p2898221105010"></a><a name="en-us_topic_0183755188_p2898221105010"></a>Real-time communication cache file, which is created during iSulad running.</p>
</td>
</tr>
<tr id="en-us_topic_0183755188_row68986219500"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183755188_p7898202117501"><a name="en-us_topic_0183755188_p7898202117501"></a><a name="en-us_topic_0183755188_p7898202117501"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183755188_p11898172110509"><a name="en-us_topic_0183755188_p11898172110509"></a><a name="en-us_topic_0183755188_p11898172110509"></a>/var/lib/lcr/</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183755188_p089882112508"><a name="en-us_topic_0183755188_p089882112508"></a><a name="en-us_topic_0183755188_p089882112508"></a>Temporary directory of the LCR component.</p>
</td>
</tr>
<tr id="en-us_topic_0183755188_row489892114506"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0183755188_p1589832145019"><a name="en-us_topic_0183755188_p1589832145019"></a><a name="en-us_topic_0183755188_p1589832145019"></a>*</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0183755188_p889892195014"><a name="en-us_topic_0183755188_p889892195014"></a><a name="en-us_topic_0183755188_p889892195014"></a>/var/lib/isulad/</p>
</td>
<td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0183755188_p148981921115016"><a name="en-us_topic_0183755188_p148981921115016"></a><a name="en-us_topic_0183755188_p148981921115016"></a>Root directory where iSulad runs, which stores the created container configuration, default log path, database file, and mount point.</p>
<p id="en-us_topic_0183755188_p3898221155011"><a name="en-us_topic_0183755188_p3898221155011"></a><a name="en-us_topic_0183755188_p3898221155011"></a><strong id="en-us_topic_0183755188_b193931311436"><a name="en-us_topic_0183755188_b193931311436"></a><a name="en-us_topic_0183755188_b193931311436"></a>/var/lib/isulad/mnt/</strong>: mount point of the container rootfs.</p>
<p id="en-us_topic_0183755188_p1989812145016"><a name="en-us_topic_0183755188_p1989812145016"></a><a name="en-us_topic_0183755188_p1989812145016"></a><strong id="en-us_topic_0183755188_b79449575312"><a name="en-us_topic_0183755188_b79449575312"></a><a name="en-us_topic_0183755188_b79449575312"></a>/var/lib/isulad/engines/lcr/</strong>: directory for storing LCR container configurations. Each container has a directory named after the container.</p>
</td>
</tr>
</tbody>
</table>

