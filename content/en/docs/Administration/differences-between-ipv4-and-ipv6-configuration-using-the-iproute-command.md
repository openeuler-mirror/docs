# Differences Between IPv4 and IPv6 Configuration Using the iproute Command<a name="EN-US_TOPIC_0229622740"></a>

## Overview<a name="en-us_topic_0161841798_en-us_topic_0159090633_section9133649143112"></a>

IPv4 and IPv6 are two different protocol standards. Therefore, the iproute commands are different in usage. This section describes the differences between IPv4 and IPv6 commands in the iproute package.

## Lifecycle of an IPv6 Address<a name="en-us_topic_0161841798_en-us_topic_0159090633_section10703103152516"></a>

<a name="en-us_topic_0161841798_en-us_topic_0159090633_table2076913233253"></a>
<table><thead align="left"><tr id="en-us_topic_0161841798_en-us_topic_0159090633_row583762317252"><th class="cellrowborder" valign="top" width="22%" id="mcps1.1.3.1.1"><p id="en-us_topic_0161841798_en-us_topic_0159090633_p2837142362517"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p2837142362517"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p2837142362517"></a><strong id="b416366142214"><a name="b416366142214"></a><a name="b416366142214"></a>IPv6 status</strong></p>
</th>
<th class="cellrowborder" valign="top" width="78%" id="mcps1.1.3.1.2"><p id="en-us_topic_0161841798_en-us_topic_0159090633_p10837823172516"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p10837823172516"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p10837823172516"></a><strong id="b1836381462215"><a name="b1836381462215"></a><a name="b1836381462215"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0161841798_en-us_topic_0159090633_row178371023162518"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0161841798_en-us_topic_0159090633_p38371523152510"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p38371523152510"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p38371523152510"></a>tentative</p>
</td>
<td class="cellrowborder" valign="top" width="78%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0161841798_en-us_topic_0159090633_p198371423102517"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p198371423102517"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p198371423102517"></a>Temporary state: The newly added address is still in the DAD process.</p>
</td>
</tr>
<tr id="en-us_topic_0161841798_en-us_topic_0159090633_row58376230252"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0161841798_en-us_topic_0159090633_p683716233250"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p683716233250"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p683716233250"></a>preferred</p>
</td>
<td class="cellrowborder" valign="top" width="78%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0161841798_en-us_topic_0159090633_p19837122311259"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p19837122311259"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p19837122311259"></a>Preferred state: The DAD process is complete, but no NA packet is received, indicating that the address does not conflict.</p>
</td>
</tr>
<tr id="en-us_topic_0161841798_en-us_topic_0159090633_row883712382517"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0161841798_en-us_topic_0159090633_p88371623142516"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p88371623142516"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p88371623142516"></a>deprecated</p>
</td>
<td class="cellrowborder" valign="top" width="78%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0161841798_en-us_topic_0159090633_p38372023132510"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p38372023132510"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p38372023132510"></a>Deprecated state: An address has a validity period (valid_lft or preferred_lft). After preferred_lft expires, the address changes to the deprecated state.</p>
<p id="en-us_topic_0161841798_en-us_topic_0159090633_p4838102352510"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p4838102352510"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p4838102352510"></a>The address in this state cannot be used to create a new connection, but the original connection can still be used.</p>
</td>
</tr>
<tr id="en-us_topic_0161841798_en-us_topic_0159090633_row16838152313252"><td class="cellrowborder" valign="top" width="22%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0161841798_en-us_topic_0159090633_p108383237254"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p108383237254"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p108383237254"></a>invalid</p>
</td>
<td class="cellrowborder" valign="top" width="78%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0161841798_en-us_topic_0159090633_p19838132372518"><a name="en-us_topic_0161841798_en-us_topic_0159090633_p19838132372518"></a><a name="en-us_topic_0161841798_en-us_topic_0159090633_p19838132372518"></a>Invalid state: If the lease renewal fails after the preferred_lft time expires, the address status is set to invalid after the valid_lft time expires, indicating that the address cannot be used again.</p>
</td>
</tr>
</tbody>
</table>

Remarks:

-   preferred\_lft: preferred lifetime. The preferred\_lft address has not expired and can be used for normal communication. If there are multiple preferred addresses, the address is selected based on the kernel mechanism.
-   valid\_lft: valid lifetime. The address cannot be used for creating new connections within the period of \[preferred\_lft, valid\_lft\]. The existing connections are still valid.

## ip link Command<a name="en-us_topic_0161841798_en-us_topic_0159090633_section188761939123014"></a>

The commands are as follows:

```
ip link set IFNAME mtu MTU
```

The minimum PMTU of IPv6 is 1280. If the MTU is set to a value smaller than 1280, IPv6 addresses will be lost. Other devices cannot ping the IPv6 address.

## ip addr Command<a name="en-us_topic_0161841798_en-us_topic_0159090633_section7725170124014"></a>

1.  The commands are as follows:

    ```
    ip [-6] addr add IFADDR dev IFNAME
    ```

    You can choose to add the -6 option or not to add the IPv6 address. The ip addr command determines whether the address is an IPv4 address or an IPv6 address based on the address type.

    If the -6 option is specified but IFADDR is an IPv4 address, an error message is returned.

2.  The commands are as follows:

    ```
    ip [-6] addr add IFADDR  dev IFNAME [home|nodad]
    ```

    \[home|nodad\] is valid only for IPv6 addresses.

    -   home: specifies the home address defined in RFC 6275. \(This address is obtained by the mobile node from the home link, and is a permanent address of the mobile node. If the mobile node remains in the same home link, communication between various entities is performed normally.\)
    -   nodad: indicates that DAD is not performed when this IPv6 address is added. \(RFC 4862\) If multiple interfaces on a device are configured with the same IPv6 address through nodad, the IPv6 address is used in the interface sequence. An IPv6 address with both nodad and non-nodad cannot be added the same interface because the two IP addresses are the same. Otherwise, the message "RTNETLINK answers: File exists" is displayed.

3.  The commands are as follows:

    ```
    ip [-6] addr del IFADDR dev IFNAME
    ```

    You can choose to add the -6 option or not to delete an IPv6 address. The ip addr del command determines whether an IPv4 address or an IPv6 address is used based on the address type.

4.  The commands are as follows:

    ```
    ip [-6] addr show dev IFNAME [tentative|-tentative|deprecated|-deprecated|dadfailed|-dadfailed|temporary]
    ```

    -   If the -6 option is not specified, both IPv4 and IPv6 addresses are displayed. If the -6 option is specified, only IPv6 addresses are displayed.
    -   \[tentative|-tentative|deprecated|-deprecated|dadfailed|-dadfailed|temporary\]. These options are only for IPv6. You can filter and view addresses based on the IPv6 address status.
        1.  tentative: \(only for IPv6\) lists only the addresses that have not passed duplicate address detection \(DAD\).
        2.  -tentative: \(only for IPv6\) lists only the addresses that are not in the DAD process.
        3.  deprecated: \(only for IPv6\) lists only the deprecated addresses.
        4.  -deprecated: \(only for IPv6\) lists only the addresses that are not deprecated.
        5.  dadfailed: \(only for IPv6\) lists only the addresses that fail the DAD.
        6.  -dadfailed: \(only for IPv6\) lists only the addresses that do not encounter DAD failures.
        7.  temporary: \(only for IPv6\) lists only the temporary addresses.



## ip route Command<a name="en-us_topic_0161841798_en-us_topic_0159090633_section165778712419"></a>

1.  The commands are as follows:

    ```
    ip [-6] route add ROUTE [mtu lock MTU]
    ```

    -   -6 option: You can add the -6 option or not when adding an IPv6 route. The ip route command determines whether an IPv4 or IPv6 address is used based on the address type.

    -   mtu lock MTU: specifies the MTU of the locked route. If the MTU is not locked, the MTU value may be changed by the kernel during the PMTUD process. If the MTU is locked, PMTUD is not attempted. All IPv4 packets are not set with the DF bit and IPv6 packets are segmented based on the MTU.

2.  The commands are as follows:

    ```
    ip [-6] route del ROUTE
    ```

    You can choose whether to add the -6 option when deleting an IPv6 route. The ip route command determines whether an IPv4 address or an IPv6 address is used based on the address type.


## ip rule command<a name="en-us_topic_0161841798_en-us_topic_0159090633_section47311538181212"></a>

1.  The commands are as follows:

    ```
    ip [-6] rule list
    ```

    -6 option: If the -6 option is set, IPv6 policy-based routes are printed. If the -6 option is not set, IPv4 policy-based routes are printed. Therefore, you need to configure the -6 option according to the specific protocol type.

2.  The commands are as follows:

    ```
    ip [-6] rule [add|del] [from|to] ADDR table TABLE pref PREF
    ```

    -6 option: IPv6-related policy routing entries need to be configured with the -6 option. Otherwise, the error message "Error: Invalid source address." is displayed. Accordingly, the -6 option cannot be set for IPv4-related policy routing entries. Otherwise, the error message "Error: Invalid source address." is displayed.


