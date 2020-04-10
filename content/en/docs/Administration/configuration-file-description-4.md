# Configuration File Description<a name="EN-US_TOPIC_0230790875"></a>

After the Nginx service is started, it reads the configuration file shown in  [Table 1](#table24341012096)  by default.

**Table  1**  Configuration file description

<a name="table24341012096"></a>
<table><thead align="left"><tr id="row2435101210918"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p143513128912"><a name="p143513128912"></a><a name="p143513128912"></a>File</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p1543515125910"><a name="p1543515125910"></a><a name="p1543515125910"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row94354128920"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p18435151218920"><a name="p18435151218920"></a><a name="p18435151218920"></a>/etc/nginx/nginx.conf</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p943511216915"><a name="p943511216915"></a><a name="p943511216915"></a>Main configuration files.</p>
</td>
</tr>
<tr id="row13435412692"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8435161215912"><a name="p8435161215912"></a><a name="p8435161215912"></a>/etc/nginx/conf.d</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1042116010591"><a name="p1042116010591"></a><a name="p1042116010591"></a>Secondary directory of configuration files, which are also contained in the main configuration file.</p>
<p id="p143512126919"><a name="p143512126919"></a><a name="p143512126919"></a>The secondary directory of a configuration file is contained in the main configuration file.</p>
</td>
</tr>
</tbody>
</table>

Although the default configuration can be used in most cases, you need to be familiar with some important configuration items. After the configuration file is modified, run the following command to check the syntax errors that may occur in the configuration file:

```
# /usr/sbin/nginx -t
```

If the command output contains  **syntax is ok**, the syntax of the configuration file is correct.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   Before modifying the configuration file, back up the original file so that the configuration file can be quickly restored if a fault occurs.  
>-   The modified configuration file takes effect only after the web service is restarted.  

