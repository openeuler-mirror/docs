# NIC Management<a name="EN-US_TOPIC_0184808032"></a>

## Function Description<a name="en-us_topic_0182200847_section65051811194713"></a>

syscontainer-tools allows you to insert physical or virtual NICs on the host to a container. If the NICs are not required, syscontainer-tools allows you to delete them from the container and return them to the host. In addition, the NIC configurations can be dynamically modified. To insert a physical NIC, add the NIC on the host to the container. To insert a virtual NIC, create a veth pair and insert its one end to the container.

## Command Format<a name="en-us_topic_0182200847_section9239248135514"></a>

```
syscontainer-tools [COMMADN][OPTIONS] <container_id>
```

In the preceding format:

**COMMAND**: command related to NIC management.

**OPTIONS**: option supported by the NIC management command.

**container\_id**: container ID.

## Parameter Description<a name="en-us_topic_0182200847_section6280182644710"></a>

<a name="en-us_topic_0182200847_table1869210387418"></a>
<table><thead align="left"><tr id="en-us_topic_0182200847_row1569373816419"><th class="cellrowborder" valign="top" width="23.98%" id="mcps1.1.4.1.1"><p id="en-us_topic_0182200847_p106936387415"><a name="en-us_topic_0182200847_p106936387415"></a><a name="en-us_topic_0182200847_p106936387415"></a><strong id="b84235270693550"><a name="b84235270693550"></a><a name="b84235270693550"></a>Command</strong></p>
</th>
<th class="cellrowborder" valign="top" width="29.82%" id="mcps1.1.4.1.2"><p id="en-us_topic_0182200847_p43193341215"><a name="en-us_topic_0182200847_p43193341215"></a><a name="en-us_topic_0182200847_p43193341215"></a>Function Description</p>
</th>
<th class="cellrowborder" valign="top" width="46.2%" id="mcps1.1.4.1.3"><p id="en-us_topic_0182200847_p15693173814112"><a name="en-us_topic_0182200847_p15693173814112"></a><a name="en-us_topic_0182200847_p15693173814112"></a>Option Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0182200847_row12693163810415"><td class="cellrowborder" valign="top" width="23.98%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200847_p8603174842418"><a name="en-us_topic_0182200847_p8603174842418"></a><a name="en-us_topic_0182200847_p8603174842418"></a>add-nic</p>
</td>
<td class="cellrowborder" valign="top" width="29.82%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200847_p16721336607"><a name="en-us_topic_0182200847_p16721336607"></a><a name="en-us_topic_0182200847_p16721336607"></a>Creates an NIC for a container.</p>
</td>
<td class="cellrowborder" valign="top" width="46.2%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0182200847_p02913277715"><a name="en-us_topic_0182200847_p02913277715"></a><a name="en-us_topic_0182200847_p02913277715"></a>Supported options are as follows:</p>
<a name="en-us_topic_0182200847_ul1875817141814"></a><a name="en-us_topic_0182200847_ul1875817141814"></a><ul id="en-us_topic_0182200847_ul1875817141814"><li><strong id="b7815102716287"><a name="b7815102716287"></a><a name="b7815102716287"></a>--type</strong>: specifies the NIC type. Only <strong id="b18345105812314"><a name="b18345105812314"></a><a name="b18345105812314"></a>eth</strong> and <strong id="b1464118103210"><a name="b1464118103210"></a><a name="b1464118103210"></a>veth</strong> are supported.</li><li><strong id="b844714179488"><a name="b844714179488"></a><a name="b844714179488"></a>--name</strong>: specifies the NIC name. The format is <strong id="b12447101774817"><a name="b12447101774817"></a><a name="b12447101774817"></a>[</strong><em id="i9447917114810"><a name="i9447917114810"></a><a name="i9447917114810"></a>host</em><strong id="b14479172482"><a name="b14479172482"></a><a name="b14479172482"></a>:]</strong><em id="i1944851710487"><a name="i1944851710487"></a><a name="i1944851710487"></a>container</em>. If <em id="i6448151716489"><a name="i6448151716489"></a><a name="i6448151716489"></a>host</em> is not specified, a random value is used.</li><li><strong id="b19130163145210"><a name="b19130163145210"></a><a name="b19130163145210"></a>--ip</strong>: specifies the NIC IP address.</li><li><strong id="b856913555317"><a name="b856913555317"></a><a name="b856913555317"></a>--mac</strong>: specifies the NIC MAC address.</li><li><strong id="b119354735417"><a name="b119354735417"></a><a name="b119354735417"></a>--bridge</strong>: specifies the network bridge bound to the NIC.</li><li><strong id="b11816162945716"><a name="b11816162945716"></a><a name="b11816162945716"></a>--mtu</strong>: specifies the MTU value of the NIC. The default value is <strong id="b17540166155719"><a name="b17540166155719"></a><a name="b17540166155719"></a>1500</strong>.</li><li><strong id="b14681910192217"><a name="b14681910192217"></a><a name="b14681910192217"></a>--update-config-only</strong>: If this flag is set, only configuration files are updated and NICs are not added.</li><li><strong id="b755619413572"><a name="b755619413572"></a><a name="b755619413572"></a>--qlen</strong>: specifies the value of QLEN. The default value is <strong id="b2385244145714"><a name="b2385244145714"></a><a name="b2385244145714"></a>1000</strong>.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200847_row12634059013"><td class="cellrowborder" valign="top" width="23.98%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200847_p12351181472613"><a name="en-us_topic_0182200847_p12351181472613"></a><a name="en-us_topic_0182200847_p12351181472613"></a>remove-nic</p>
</td>
<td class="cellrowborder" valign="top" width="29.82%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200847_p78191855207"><a name="en-us_topic_0182200847_p78191855207"></a><a name="en-us_topic_0182200847_p78191855207"></a>Deletes NICs from a container and restores them to the host.</p>
</td>
<td class="cellrowborder" valign="top" width="46.2%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0182200847_p4233191489"><a name="en-us_topic_0182200847_p4233191489"></a><a name="en-us_topic_0182200847_p4233191489"></a>Supported options are as follows:</p>
<a name="en-us_topic_0182200847_ul68987187111"></a><a name="en-us_topic_0182200847_ul68987187111"></a><ul id="en-us_topic_0182200847_ul68987187111"><li><strong id="b11872119205816"><a name="b11872119205816"></a><a name="b11872119205816"></a>--type</strong>: specifies the NIC type.</li><li><strong id="b1161102510488"><a name="b1161102510488"></a><a name="b1161102510488"></a>--name</strong>: specifies the name of the NIC. The format is <strong id="b16611225184814"><a name="b16611225184814"></a><a name="b16611225184814"></a>[</strong><em id="i1262142512481"><a name="i1262142512481"></a><a name="i1262142512481"></a>host</em><strong id="b862125184818"><a name="b862125184818"></a><a name="b862125184818"></a>:]</strong><em id="i1362162534811"><a name="i1362162534811"></a><a name="i1362162534811"></a>container</em>.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200847_row915811441301"><td class="cellrowborder" valign="top" width="23.98%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200847_p54403352715"><a name="en-us_topic_0182200847_p54403352715"></a><a name="en-us_topic_0182200847_p54403352715"></a>list-nic</p>
</td>
<td class="cellrowborder" valign="top" width="29.82%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200847_p17641112811"><a name="en-us_topic_0182200847_p17641112811"></a><a name="en-us_topic_0182200847_p17641112811"></a>Lists all NICs in a container.</p>
</td>
<td class="cellrowborder" valign="top" width="46.2%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0182200847_p164614131884"><a name="en-us_topic_0182200847_p164614131884"></a><a name="en-us_topic_0182200847_p164614131884"></a>Supported options are as follows:</p>
<a name="en-us_topic_0182200847_ul1478910231716"></a><a name="en-us_topic_0182200847_ul1478910231716"></a><ul id="en-us_topic_0182200847_ul1478910231716"><li><strong id="b1753841132916"><a name="b1753841132916"></a><a name="b1753841132916"></a>--pretty</strong>: outputs data in JSON format.</li><li><strong id="b3462458122710"><a name="b3462458122710"></a><a name="b3462458122710"></a>--filter</strong>: outputs filtered data in the specific format, for example,<strong id="b830224718536"><a name="b830224718536"></a><a name="b830224718536"></a> --filter' {"ip":"192.168.3.4/24", "Mtu":1500}'</strong>.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0182200847_row17443144712014"><td class="cellrowborder" valign="top" width="23.98%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0182200847_p863734242710"><a name="en-us_topic_0182200847_p863734242710"></a><a name="en-us_topic_0182200847_p863734242710"></a>update-nic</p>
</td>
<td class="cellrowborder" valign="top" width="29.82%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0182200847_p167205392720"><a name="en-us_topic_0182200847_p167205392720"></a><a name="en-us_topic_0182200847_p167205392720"></a>Modifies configuration parameters of a specified NIC in a container.</p>
</td>
<td class="cellrowborder" valign="top" width="46.2%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0182200847_p102662215818"><a name="en-us_topic_0182200847_p102662215818"></a><a name="en-us_topic_0182200847_p102662215818"></a>Supported options are as follows:</p>
<a name="en-us_topic_0182200847_ul7172711120"></a><a name="en-us_topic_0182200847_ul7172711120"></a><ul id="en-us_topic_0182200847_ul7172711120"><li><strong id="b19608412122910"><a name="b19608412122910"></a><a name="b19608412122910"></a>--name</strong>: specifies the name of the NIC in the container. This parameter is mandatory.</li><li><strong id="b19413133542917"><a name="b19413133542917"></a><a name="b19413133542917"></a>--ip</strong>: specifies the NIC IP address.</li><li><strong id="b1386113392295"><a name="b1386113392295"></a><a name="b1386113392295"></a>--mac</strong>: specifies the NIC MAC address.</li><li><strong id="b10289943132910"><a name="b10289943132910"></a><a name="b10289943132910"></a>--bridge</strong>: specifies the network bridge bound to the NIC.</li><li><strong id="b7609647162912"><a name="b7609647162912"></a><a name="b7609647162912"></a>--mtu</strong>: specifies the MTU value of the NIC.</li><li><strong id="b1039156152920"><a name="b1039156152920"></a><a name="b1039156152920"></a>--update-config-only</strong>: If this flag is set, configuration files are updated and NICs are not updated.</li><li><strong id="b198327733112"><a name="b198327733112"></a><a name="b198327733112"></a>--qlen</strong>: specifies the value of QLEN.</li></ul>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0182200847_section19472134518914"></a>

-   Physical NICs \(eth\) and virtual NICs \(veth\) can be added.
-   When adding a NIC, you can also configure the NIC. The configuration parameters include  **--ip**,  **--mac**,  **--bridge**,  **--mtu**,  **--qlen**.
-   A maximum of eight physical NICs can be added to a container.
-   If you run the  **syscontainer-tools add-nic**  command to add an eth NIC to a container and do not add a hook, you must manually delete the NIC before the container exits. Otherwise, the name of the eth NIC on the host will be changed to the name of that in the container.
-   For a physical NIC \(except 1822 VF NIC\), use the original MAC address when running the  **add-nic**  command. Do not change the MAC address in the container, or when running the  **update-nic**  command.
-   When using the  **syscontainer-tools add-nic**  command, set the MTU value. The value range depends on the NIC model.
-   When using syscontainer-tools to add NICs and routes to containers, you are advised to run the  **add-nic**  command to add NICs and then run the  **add-route**  command to add routes. When using syscontainer-tools to delete NICs and routes from a container, you are advised to run the  **remove-route**  command to delete routes and then run the  **remove-nic**  command to delete NICs.
-   When using syscontainer-tools to add NICs, add a NIC to only one container.

## Example<a name="en-us_topic_0182200847_section189257450475"></a>

-   Start a system container, and set  **hook spec**  to the syscontainer hook execution script.

    ```
    [root@localhost ~]# isula run -tid --hook-spec /etc/syscontainer-tools/hookspec.json --system-container --external-rootfs /root/root-fs none init
    2aaca5c1af7c872798dac1a468528a2ccbaf20b39b73fc0201636936a3c32aa8
    ```


-   Add a virtual NIC to a container.

    ```
    [root@localhost ~]# syscontainer-tools add-nic --type "veth" --name abc2:bcd2 --ip 172.17.28.5/24 --mac 00:ff:48:13:xx:xx --bridge docker0 2aaca5c1af7c
    Add network interface to container 2aaca5c1af7c (bcd2,abc2) done  
    ```

-   Add a physical NIC to a container.

    ```
    [root@localhost ~]# syscontainer-tools add-nic --type "eth" --name eth3:eth1 --ip 172.17.28.6/24  --mtu 1300  --qlen 2100 2aaca5c1af7c
    Add network interface to container 2aaca5c1af7c (eth3,eth1) done
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >When adding a virtual or physical NIC, ensure that the NIC is in the idle state. Adding a NIC in use will disconnect the system network.  


