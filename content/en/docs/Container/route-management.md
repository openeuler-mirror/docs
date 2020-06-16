# Route Management<a name="EN-US_TOPIC_0184808033"></a>

## Function Description<a name="en-us_topic_0182200848_section14614727134812"></a>

syscontainer-tools can be used to dynamically add or delete routing tables for system containers.

## Command Format<a name="en-us_topic_0182200848_section9239248135514"></a>

```
syscontainer-tools [COMMADN][OPTIONS] <container_id> [ARG...]
```

In the preceding format:

**COMMAND**: command related to route management.

**OPTIONS**: option supported by the route management command.

**container\_id**: container ID.

**ARG**: parameter corresponding to the command.

## API Description<a name="en-us_topic_0182200848_section17597144212486"></a>

<a name="en-us_topic_0182200848_table1869210387418"></a>
<table><thead align="left"><tr id="en-us_topic_0182200848_row1569373816419"><th class="cellrowborder" valign="top" width="16.028397160283973%" id="mcps1.1.5.1.1"><p id="en-us_topic_0182200848_p106936387415"><a name="en-us_topic_0182200848_p106936387415"></a><a name="en-us_topic_0182200848_p106936387415"></a><strong id="b84235270693550"><a name="b84235270693550"></a><a name="b84235270693550"></a>Command</strong></p>
</th>
<th class="cellrowborder" valign="top" width="22.187781221877813%" id="mcps1.1.5.1.2"><p id="en-us_topic_0182200848_p43193341215"><a name="en-us_topic_0182200848_p43193341215"></a><a name="en-us_topic_0182200848_p43193341215"></a>Function Description</p>
</th>
<th class="cellrowborder" valign="top" width="30.45695430456954%" id="mcps1.1.5.1.3"><p id="en-us_topic_0182200848_p2170152961216"><a name="en-us_topic_0182200848_p2170152961216"></a><a name="en-us_topic_0182200848_p2170152961216"></a>Option Description</p>
</th>
<th class="cellrowborder" valign="top" width="31.326867313268675%" id="mcps1.1.5.1.4"><p id="en-us_topic_0182200848_p15693173814112"><a name="en-us_topic_0182200848_p15693173814112"></a><a name="en-us_topic_0182200848_p15693173814112"></a>Parameter Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0182200848_row12693163810415"><td class="cellrowborder" valign="top" width="16.028397160283973%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0182200848_p8603174842418"><a name="en-us_topic_0182200848_p8603174842418"></a><a name="en-us_topic_0182200848_p8603174842418"></a>add-route</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0182200848_p43636507713"><a name="en-us_topic_0182200848_p43636507713"></a><a name="en-us_topic_0182200848_p43636507713"></a>Adds the network routing rules to a container.</p>
</td>
<td class="cellrowborder" valign="top" width="30.45695430456954%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0182200848_p11701929151216"><a name="en-us_topic_0182200848_p11701929151216"></a><a name="en-us_topic_0182200848_p11701929151216"></a>Supported options are as follows:</p>
<p id="en-us_topic_0182200848_p0431852201310"><a name="en-us_topic_0182200848_p0431852201310"></a><a name="en-us_topic_0182200848_p0431852201310"></a><strong id="b16601536174020"><a name="b16601536174020"></a><a name="b16601536174020"></a>--update-config-only</strong>: If this parameter is configured, configuration files are updated and routing tables are not updated.</p>
</td>
<td class="cellrowborder" valign="top" width="31.326867313268675%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0182200848_p4970743143512"><a name="en-us_topic_0182200848_p4970743143512"></a><a name="en-us_topic_0182200848_p4970743143512"></a>Parameter format: <strong id="b19794112375213"><a name="b19794112375213"></a><a name="b19794112375213"></a>[{</strong><em id="i367972414524"><a name="i367972414524"></a><a name="i367972414524"></a>rule1</em><strong id="b171791227175217"><a name="b171791227175217"></a><a name="b171791227175217"></a>},{</strong><em id="i2812152765218"><a name="i2812152765218"></a><a name="i2812152765218"></a>rule2</em><strong id="b1318032745212"><a name="b1318032745212"></a><a name="b1318032745212"></a>}]</strong></p>
<p id="en-us_topic_0182200848_p615914310354"><a name="en-us_topic_0182200848_p615914310354"></a><a name="en-us_topic_0182200848_p615914310354"></a>Example of <em id="i115451328114113"><a name="i115451328114113"></a><a name="i115451328114113"></a>rule</em>:</p>
<p id="en-us_topic_0182200848_p12159163116357"><a name="en-us_topic_0182200848_p12159163116357"></a><a name="en-us_topic_0182200848_p12159163116357"></a>'[{"dest":"default",  "gw":"192.168.10.1"},{"dest":"192.168.0.0/16","dev":"eth0","src":"192.168.1.2"}]'</p>
<a name="en-us_topic_0182200848_ul1058312615818"></a><a name="en-us_topic_0182200848_ul1058312615818"></a><ul id="en-us_topic_0182200848_ul1058312615818"><li><strong id="b823113134119"><a name="b823113134119"></a><a name="b823113134119"></a>dest</strong>: target network. If this parameter is left blank, the default gateway is used.</li><li><strong id="b182041533164118"><a name="b182041533164118"></a><a name="b182041533164118"></a>src</strong>: source IP address of a route.</li><li><strong id="b37991511184215"><a name="b37991511184215"></a><a name="b37991511184215"></a>gw</strong>: route gateway.</li><li><strong id="b3195715194210"><a name="b3195715194210"></a><a name="b3195715194210"></a>dev</strong>: network device.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200848_row12634059013"><td class="cellrowborder" valign="top" width="16.028397160283973%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0182200848_p17486195414355"><a name="en-us_topic_0182200848_p17486195414355"></a><a name="en-us_topic_0182200848_p17486195414355"></a>remove-route</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0182200848_p9398191102119"><a name="en-us_topic_0182200848_p9398191102119"></a><a name="en-us_topic_0182200848_p9398191102119"></a>Deletes a route from a container.</p>
</td>
<td class="cellrowborder" valign="top" width="30.45695430456954%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0182200848_p1217002917127"><a name="en-us_topic_0182200848_p1217002917127"></a><a name="en-us_topic_0182200848_p1217002917127"></a>Supported options are as follows:</p>
<p id="en-us_topic_0182200848_p9642651372"><a name="en-us_topic_0182200848_p9642651372"></a><a name="en-us_topic_0182200848_p9642651372"></a><strong id="b154670445217"><a name="b154670445217"></a><a name="b154670445217"></a>--update-config-only</strong>: If this parameter is configured, only configuration files are updated and routes are not deleted from the container.</p>
</td>
<td class="cellrowborder" valign="top" width="31.326867313268675%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0182200848_p185861042134216"><a name="en-us_topic_0182200848_p185861042134216"></a><a name="en-us_topic_0182200848_p185861042134216"></a>Parameter format: <strong id="b289518195424"><a name="b289518195424"></a><a name="b289518195424"></a>[</strong><em id="i1589631911429"><a name="i1589631911429"></a><a name="i1589631911429"></a>{rule1}</em><strong id="b128983191426"><a name="b128983191426"></a><a name="b128983191426"></a>,</strong><em id="i198991519164216"><a name="i198991519164216"></a><a name="i198991519164216"></a>{rule2}</em><strong id="b789981911425"><a name="b789981911425"></a><a name="b789981911425"></a>]</strong></p>
<p id="en-us_topic_0182200848_p19384145193619"><a name="en-us_topic_0182200848_p19384145193619"></a><a name="en-us_topic_0182200848_p19384145193619"></a>Example of <em id="i1553542414424"><a name="i1553542414424"></a><a name="i1553542414424"></a>rule</em>:</p>
<p id="en-us_topic_0182200848_p7384252365"><a name="en-us_topic_0182200848_p7384252365"></a><a name="en-us_topic_0182200848_p7384252365"></a>'[{"dest":"default",  "gw":"192.168.10.1"},{"dest":"192.168.0.0/16","dev":"eth0","src":"192.168.1.2"}]'</p>
<a name="en-us_topic_0182200848_ul208756521426"></a><a name="en-us_topic_0182200848_ul208756521426"></a><ul id="en-us_topic_0182200848_ul208756521426"><li><strong id="b43666281332"><a name="b43666281332"></a><a name="b43666281332"></a>dest</strong>: target network. If this parameter is left blank, the default gateway is used.</li><li><strong id="b41197421431"><a name="b41197421431"></a><a name="b41197421431"></a>src</strong>: source IP address of a route.</li><li><strong id="b11134104513319"><a name="b11134104513319"></a><a name="b11134104513319"></a>gw</strong>: route gateway.</li><li><strong id="b173991647434"><a name="b173991647434"></a><a name="b173991647434"></a>dev</strong>: network device.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200848_row915811441301"><td class="cellrowborder" valign="top" width="16.028397160283973%" headers="mcps1.1.5.1.1 "><p id="en-us_topic_0182200848_p1512713135379"><a name="en-us_topic_0182200848_p1512713135379"></a><a name="en-us_topic_0182200848_p1512713135379"></a>list-route</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.1.5.1.2 "><p id="en-us_topic_0182200848_p144972610376"><a name="en-us_topic_0182200848_p144972610376"></a><a name="en-us_topic_0182200848_p144972610376"></a>Lists all routing rules in a container.</p>
</td>
<td class="cellrowborder" valign="top" width="30.45695430456954%" headers="mcps1.1.5.1.3 "><p id="en-us_topic_0182200848_p1517092931217"><a name="en-us_topic_0182200848_p1517092931217"></a><a name="en-us_topic_0182200848_p1517092931217"></a>Supported options are as follows:</p>
<a name="en-us_topic_0182200848_ul2807411144318"></a><a name="en-us_topic_0182200848_ul2807411144318"></a><ul id="en-us_topic_0182200848_ul2807411144318"><li><strong id="b1041516931719"><a name="b1041516931719"></a><a name="b1041516931719"></a>--pretty</strong>: outputs data in JSON format.</li><li><strong id="b15656121117177"><a name="b15656121117177"></a><a name="b15656121117177"></a>--filter</strong>: outputs filtered data in the specific format, for example,<strong id="b065701117170"><a name="b065701117170"></a><a name="b065701117170"></a> --filter' {"ip":"192.168.3.4/24", "Mtu":1500}'</strong>.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="31.326867313268675%" headers="mcps1.1.5.1.4 "><p id="en-us_topic_0182200848_p174731584319"><a name="en-us_topic_0182200848_p174731584319"></a><a name="en-us_topic_0182200848_p174731584319"></a>None</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0182200848_section161147375512"></a>

-   When using syscontainer-tools to add NICs and routes to containers, you are advised to run the  **add-nic**  command to add NICs and then run the  **add-route**  command to add routes. When using syscontainer-tools to delete NICs and routes from a container, you are advised to run the  **remove-route**  command to delete routes and then run the  **remove-nic**  command to delete NICs.
-   When adding a routing rule to a container, ensure that the added routing rule does not conflict with existing routing rules in the container.

## Example<a name="en-us_topic_0182200848_section1936515521548"></a>

-   Start a system container, and set  **hook spec**  to the syscontainer hook execution script.

    ```
    [root@localhost ~]# isula run -tid --hook-spec /etc/syscontainer-tools/hookspec.json --system-container --external-rootfs /root/root-fs none init
    0d2d68b45aa0c1b8eaf890c06ab2d008eb8c5d91e78b1f8fe4d37b86fd2c190b
    ```


-   Use syscontainer-tools to add a physical NIC to the system container.

    ```
    [root@localhost ~]# syscontainer-tools add-nic --type "eth" --name enp4s0:eth123 --ip 172.17.28.6/24  --mtu 1300  --qlen 2100 0d2d68b45aa0
    Add network interface (enp4s0) to container (0d2d68b45aa0,eth123) done
    ```


-   syscontainer-tools adds a routing rule to the system container. Format example:  **\[\{"dest":"default", "gw":"192.168.10.1"\},\{"dest":"192.168.0.0/16","dev":"eth0","src":"192.168.1.2"\}\]**. If  **dest**  is left blank, its value will be  **default**.

    ```
    [root@localhost ~]# syscontainer-tools add-route 0d2d68b45aa0 '[{"dest":"172.17.28.0/32", "gw":"172.17.28.5","dev":"eth123"}]'
    Add route to container 0d2d68b45aa0, route: {dest:172.17.28.0/32,src:,gw:172.17.28.5,dev:eth123} done
    ```

-   Check whether a routing rule is added in the container.

    ```
    [root@localhost ~]# isula exec -it 0d2d68b45aa0 route
    Kernel IP routing table
    Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
    172.17.28.0     172.17.28.5     255.255.255.255 UGH   0      0        0 eth123
    172.17.28.0     0.0.0.0         255.255.255.0   U     0      0        0 eth123
    ```


