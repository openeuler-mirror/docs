# Querying VM Information<a name="EN-US_TOPIC_0183154317"></a>

## Overview<a name="section46889528191"></a>

The libvirt provides a set of command line tools to query VM information. This section describes how to use commands to obtain VM information.

## Prerequisites<a name="section1016918252285"></a>

To query VM information, the following requirements must be met:

-   The libvirtd service is running.

-   Only the administrator has the permission to execute command line.

## Querying VM Information on a Host.<a name="section33091206019"></a>

-   Query the list of running and paused VMs on a host.

    ```
    # virsh list
    ```

    For example, the following command output indicates that three VMs exist on the host.  **openEulerVM01**  and  **openEulerVM02**  are running, and  **openEulerVM03**  is paused.

    ```
     Id    Name                           State
    ----------------------------------------------------
     39    openEulerVM01                   running
     40    openEulerVM02                   running
     69    openEulerVM03                   paused
    ```


-   Query the list of VM information defined on a host.

    ```
    # virsh list --all
    ```

    For example, the following command output indicates that four VMs are defined on the current host.  **openEulerVM01**  is running,  **openEulerVM02**  is paused, and  **openEulerVM03**  and  **openEulerVM04**  are shut down.

    ```
     Id    Name                           State
    ----------------------------------------------------
     39    openEulerVM01                  running
     69    openEulerVM02                  paused
     -     openEulerVM03                  shut off
     -     openEulerVM04                  shut off
    ```


## Querying Basic VM Information<a name="section16279810191511"></a>

Libvirt component provides a group of commands for querying the VM status, including the VM running status, device information, and scheduling attributes. For details, see  [Table 1](#table10582103963816).

**Table  1**  Querying basic VM information

<a name="table10582103963816"></a>
<table><thead align="left"><tr id="row1858320394388"><th class="cellrowborder" valign="top" width="16.41164116411641%" id="mcps1.2.4.1.1"><p id="p11583173983813"><a name="p11583173983813"></a><a name="p11583173983813"></a>Information to be queried</p>
</th>
<th class="cellrowborder" valign="top" width="37.72377237723772%" id="mcps1.2.4.1.2"><p id="p7583539103816"><a name="p7583539103816"></a><a name="p7583539103816"></a>Command line</p>
</th>
<th class="cellrowborder" valign="top" width="45.86458645864587%" id="mcps1.2.4.1.3"><p id="p85831039103818"><a name="p85831039103818"></a><a name="p85831039103818"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1958314393386"><td class="cellrowborder" valign="top" width="16.41164116411641%" headers="mcps1.2.4.1.1 "><p id="p13583133923819"><a name="p13583133923819"></a><a name="p13583133923819"></a>Basic information</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p65831839193819"><a name="p65831839193819"></a><a name="p65831839193819"></a><strong id="b6163104455314"><a name="b6163104455314"></a><a name="b6163104455314"></a>virsh dominfo</strong><em id="i68095290111"><a name="i68095290111"></a><a name="i68095290111"></a> &lt;VMInstance&gt;</em></p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="p9583183915380"><a name="p9583183915380"></a><a name="p9583183915380"></a>The information includes the VM ID, UUID, and VM specifications.</p>
</td>
</tr>
<tr id="row1958320393383"><td class="cellrowborder" valign="top" width="16.41164116411641%" headers="mcps1.2.4.1.1 "><p id="p19583839183817"><a name="p19583839183817"></a><a name="p19583839183817"></a>Current status</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p658312398384"><a name="p658312398384"></a><a name="p658312398384"></a><strong id="b1051304710532"><a name="b1051304710532"></a><a name="b1051304710532"></a>virsh domstate</strong><em id="i452815388117"><a name="i452815388117"></a><a name="i452815388117"></a> &lt;VMInstance&gt;</em></p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="p2058343913381"><a name="p2058343913381"></a><a name="p2058343913381"></a>You can use the <strong id="b562262954113"><a name="b562262954113"></a><a name="b562262954113"></a>--reason</strong> option to query the reason why the VM changes to the current status.</p>
</td>
</tr>
<tr id="row175838395384"><td class="cellrowborder" valign="top" width="16.41164116411641%" headers="mcps1.2.4.1.1 "><p id="p105831939153812"><a name="p105831939153812"></a><a name="p105831939153812"></a>Scheduling information</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p45831439123820"><a name="p45831439123820"></a><a name="p45831439123820"></a><strong id="b48561249175312"><a name="b48561249175312"></a><a name="b48561249175312"></a>virsh schedinfo</strong><em id="i5581174112116"><a name="i5581174112116"></a><a name="i5581174112116"></a> &lt;VMInstance&gt;</em></p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="p95841339143816"><a name="p95841339143816"></a><a name="p95841339143816"></a>The information includes the vCPU share.</p>
</td>
</tr>
<tr id="row7584439183820"><td class="cellrowborder" valign="top" width="16.41164116411641%" headers="mcps1.2.4.1.1 "><p id="p155841039173810"><a name="p155841039173810"></a><a name="p155841039173810"></a>Number of vCPUs</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p1858420390389"><a name="p1858420390389"></a><a name="p1858420390389"></a><strong id="b1427395345319"><a name="b1427395345319"></a><a name="b1427395345319"></a>virsh vcpucount<em id="i13236144015290"><a name="i13236144015290"></a><a name="i13236144015290"></a> </em></strong><em id="i3406175013110"><a name="i3406175013110"></a><a name="i3406175013110"></a>&lt;VMInstance&gt;</em></p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="p155843392381"><a name="p155843392381"></a><a name="p155843392381"></a>Number of vCPUs of the VM.</p>
</td>
</tr>
<tr id="row15584193973820"><td class="cellrowborder" valign="top" width="16.41164116411641%" headers="mcps1.2.4.1.1 "><p id="p1258417396387"><a name="p1258417396387"></a><a name="p1258417396387"></a>Virtual block device status</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p9584639123820"><a name="p9584639123820"></a><a name="p9584639123820"></a><strong id="b8432175618532"><a name="b8432175618532"></a><a name="b8432175618532"></a>virsh domblkstat </strong><em id="i77100571118"><a name="i77100571118"></a><a name="i77100571118"></a>&lt;VMInstance&gt;</em></p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="p155841393384"><a name="p155841393384"></a><a name="p155841393384"></a>To query the name of a block device, run the <strong id="b122131347181618"><a name="b122131347181618"></a><a name="b122131347181618"></a>virsh domblklist</strong> command.</p>
</td>
</tr>
<tr id="row05841639153813"><td class="cellrowborder" valign="top" width="16.41164116411641%" headers="mcps1.2.4.1.1 "><p id="p15584163983814"><a name="p15584163983814"></a><a name="p15584163983814"></a>vNIC status</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p1158411390389"><a name="p1158411390389"></a><a name="p1158411390389"></a><strong id="b14243916105419"><a name="b14243916105419"></a><a name="b14243916105419"></a>virsh domifstat</strong><em id="i11486439121"><a name="i11486439121"></a><a name="i11486439121"></a> &lt;VMInstance&gt;</em></p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="p10584163919383"><a name="p10584163919383"></a><a name="p10584163919383"></a>To query the NIC name, run the <strong id="b85773231180"><a name="b85773231180"></a><a name="b85773231180"></a>virsh domiflist</strong> command.</p>
</td>
</tr>
<tr id="row258413397385"><td class="cellrowborder" valign="top" width="16.41164116411641%" headers="mcps1.2.4.1.1 "><p id="p1258483914386"><a name="p1258483914386"></a><a name="p1258483914386"></a>I/O thread</p>
</td>
<td class="cellrowborder" valign="top" width="37.72377237723772%" headers="mcps1.2.4.1.2 "><p id="p55845397381"><a name="p55845397381"></a><a name="p55845397381"></a><strong id="b04151220175413"><a name="b04151220175413"></a><a name="b04151220175413"></a>virsh iothreadinfo </strong><em id="i37361563122"><a name="i37361563122"></a><a name="i37361563122"></a>&lt;VMInstance&gt;</em></p>
</td>
<td class="cellrowborder" valign="top" width="45.86458645864587%" headers="mcps1.2.4.1.3 "><p id="p2058433919382"><a name="p2058433919382"></a><a name="p2058433919382"></a>VM I/O thread and CPU affinity.</p>
</td>
</tr>
</tbody>
</table>

## Example<a name="section8635213125319"></a>

-   Run the  **virsh dominfo**  command to query the basic information about a created VM. The query result shows that the VM ID is  **5**, UUID is  **ab472210-db8c-4018-9b3e-fc5319a769f7**, memory size is 8 GiB, and the number of vCPUs is 4.

    ```
    # virsh dominfo openEulerVM
    Id:             5
    Name:           openEulerVM
    UUID:           ab472210-db8c-4018-9b3e-fc5319a769f7
    OS Type:        hvm
    State:          running
    CPU(s):         4
    CPU time:       6.8s
    Max memory:     8388608 KiB
    Used memory:    8388608 KiB
    Persistent:     no
    Autostart:      disable
    Managed save:   no
    Security model: none
    Security DOI:   0
    ```


-   Run the  **virsh domstate**  command to query the VM status. The query result shows that VM  **openEulerVM**  is running.

    ```
    # virsh domstate openEulerVM
    running
    ```

-   Run  **virsh schedinfo**  to query the VM scheduling information. The query result shows that the CPU reservation share of the VM is 1024.

    ```
    # virsh schedinfo openEulerVM
    Scheduler      : posix
    cpu_shares     : 1024
    vcpu_period    : 100000
    vcpu_quota     : -1
    emulator_period: 100000
    emulator_quota : -1
    global_period  : 100000
    global_quota   : -1
    iothread_period: 100000
    iothread_quota : -1
    ```

-   Run the  **virsh vcpucount**  command to query the number of vCPUs. The query result shows that the VM has four CPUs.

    ```
    # virsh vcpucount openEulerVM
    maximum      live           4
    current      live           4
    ```

-   Run the  **virsh domblklist**  command to query the VM disk information. The query result shows that the VM has two disks. sda is a virtual disk in qcow2 format, and sdb is a cdrom device.

    ```
     # virsh domblklist openEulerVM
     Target   Source
    ---------------------------------------------------------------------
     sda      /home/openeuler/vm/openEuler_aarch64.qcow2
     sdb      /home/openeuler/vm/openEuler-20.03-LTS-aarch64-dvd.iso
    ```

-   Run the  **virsh domiflist**  command to query the VM NIC information. The query result shows that the VM has one NIC, the backend is vnet0, which is on the br0 bridge of the host. The MAC address is 00:05:fe:d4:f1:cc.

    ```
    # virsh domiflist openEulerVM
    Interface  Type       Source     Model       MAC
    -------------------------------------------------------
    vnet0      bridge     br0        virtio      00:05:fe:d4:f1:cc
    ```

-   Run the  **virsh iothreadinfo**  command to query the VM I/O thread information. The query result shows that the VM has five I/O threads, which are scheduled on physical CPUs 7-10.

    ```
    # virsh iothreadinfo openEulerVM
     IOThread ID     CPU Affinity
    ---------------------------------------------------
     3               7-10
     4               7-10
     5               7-10
     1               7-10
     2               7-10
    ```


