# collection<a name="EN-US_TOPIC_0213225908"></a>

## Function<a name="section124121426195015"></a>

Collect the global resource usage and OS status information during service running, and save the collected information to a CSV output file as the input dataset for model training.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>-   This command depends on the sampling tools such as perf, mpstat, vmstat, iostat, and sar.  
>-   Currently, only the Kunpeng 920 CPU is supported. You can run the  **dmidecode -t processor**  command to check the CPU model.  

## Format<a name="section1019897115110"></a>

**atune-adm collection**  <OPTIONS\>

## Parameter Description<a name="section143803239510"></a>

-   OPTIONS

    <a name="en-us_topic_0210923698_table960915119119"></a>
    <table><thead align="left"><tr id="en-us_topic_0210923698_row13645013114"><th class="cellrowborder" valign="top" width="23.87%" id="mcps1.1.3.1.1"><p id="en-us_topic_0210923698_p176451311914"><a name="en-us_topic_0210923698_p176451311914"></a><a name="en-us_topic_0210923698_p176451311914"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="76.13%" id="mcps1.1.3.1.2"><p id="en-us_topic_0210923698_p1364511211"><a name="en-us_topic_0210923698_p1364511211"></a><a name="en-us_topic_0210923698_p1364511211"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0210923698_row19645141112"><td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0210923698_p2645611710"><a name="en-us_topic_0210923698_p2645611710"></a><a name="en-us_topic_0210923698_p2645611710"></a>--filename, -f</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.13%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0210923698_p10645512017"><a name="en-us_topic_0210923698_p10645512017"></a><a name="en-us_topic_0210923698_p10645512017"></a>Name of the generated CSV file used for training: <em id="i116524010250"><a name="i116524010250"></a><a name="i116524010250"></a>name</em>-<em id="i186921240599"><a name="i186921240599"></a><a name="i186921240599"></a>timestamp</em>.csv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0210923698_row564581117"><td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0210923698_p15645911616"><a name="en-us_topic_0210923698_p15645911616"></a><a name="en-us_topic_0210923698_p15645911616"></a>--output_path, -o</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.13%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0210923698_p106451918120"><a name="en-us_topic_0210923698_p106451918120"></a><a name="en-us_topic_0210923698_p106451918120"></a>Path for storing the generated CSV file. The absolute path is required.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0210923698_row8645711115"><td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0210923698_p14645713117"><a name="en-us_topic_0210923698_p14645713117"></a><a name="en-us_topic_0210923698_p14645713117"></a>--disk, -b</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.13%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0210923698_p464519116110"><a name="en-us_topic_0210923698_p464519116110"></a><a name="en-us_topic_0210923698_p464519116110"></a>Disk used during service running, for example, /dev/sda.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0210923698_row6645111714"><td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0210923698_p106451817111"><a name="en-us_topic_0210923698_p106451817111"></a><a name="en-us_topic_0210923698_p106451817111"></a>--network, -n</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.13%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0210923698_p206451911611"><a name="en-us_topic_0210923698_p206451911611"></a><a name="en-us_topic_0210923698_p206451911611"></a>Network port used during service running, for example, eth0.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0210923698_row14645219112"><td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0210923698_p9645191811"><a name="en-us_topic_0210923698_p9645191811"></a><a name="en-us_topic_0210923698_p9645191811"></a>--workload_type, -t</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.13%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0210923698_p16450117114"><a name="en-us_topic_0210923698_p16450117114"></a><a name="en-us_topic_0210923698_p16450117114"></a>Workload type, which is used as a label for training.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0210923698_row76452118115"><td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0210923698_p96451114116"><a name="en-us_topic_0210923698_p96451114116"></a><a name="en-us_topic_0210923698_p96451114116"></a>--duration, -d</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.13%" headers="mcps1.1.3.1.2 "><p id="p3205204519273"><a name="p3205204519273"></a><a name="p3205204519273"></a>Data collection time during service running, in seconds. The default collection time is 1200 seconds.</p>
    </td>
    </tr>
    <tr id="row17981103311169"><td class="cellrowborder" valign="top" width="23.87%" headers="mcps1.1.3.1.1 "><p id="p698223313169"><a name="p698223313169"></a><a name="p698223313169"></a>--interval, -i</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.13%" headers="mcps1.1.3.1.2 "><p id="p12982633141617"><a name="p12982633141617"></a><a name="p12982633141617"></a>Interval for collecting data, in seconds. The default interval is 5 seconds.</p>
    </td>
    </tr>
    </tbody>
    </table>


## Example<a name="section5961238145111"></a>

```
# atune-adm collection --filename name --interval 5 --duration 1200 --output_path /home/data --disk sda --network eth0 --workload_type test_type 
```

