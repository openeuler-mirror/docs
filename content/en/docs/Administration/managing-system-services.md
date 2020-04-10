# Managing System Services<a name="EN-US_TOPIC_0229622737"></a>

The systemd provides the systemctl command to start, stop, restart, view, enable, and disable system services.

## Comparison Between SysVinit and systemd Commands<a name="en-us_topic_0151920917_sa1cb3f4c928e4182af3a3919aa66a0ea"></a>

The  **systemctl**  command from the  **systemd**  command has the functions similar to the  **SysVinit**  command. Note that the  **service**  and  **chkconfig**  commands are supported in this version. For details, see  [Table 1](#en-us_topic_0151920917_ta7039963b0c74b909b72c22cbc9f2e28). You are advised to manage system services by running the  **systemctl**  command.

**Table  1**  Comparison between SysVinit and systemd commands

<a name="en-us_topic_0151920917_ta7039963b0c74b909b72c22cbc9f2e28"></a>
<table><thead align="left"><tr id="en-us_topic_0151920917_rfd1d35347f514aad968791e4f806aeae"><th class="cellrowborder" valign="top" width="30%" id="mcps1.2.4.1.1"><p id="en-us_topic_0151920917_a28f83d4ce4004293a41179a86a5498d6"><a name="en-us_topic_0151920917_a28f83d4ce4004293a41179a86a5498d6"></a><a name="en-us_topic_0151920917_a28f83d4ce4004293a41179a86a5498d6"></a>SysVinit Command</p>
</th>
<th class="cellrowborder" valign="top" width="37%" id="mcps1.2.4.1.2"><p id="en-us_topic_0151920917_a3e59af7c25ab4c08b96205eebd7df00c"><a name="en-us_topic_0151920917_a3e59af7c25ab4c08b96205eebd7df00c"></a><a name="en-us_topic_0151920917_a3e59af7c25ab4c08b96205eebd7df00c"></a>systemd Command</p>
</th>
<th class="cellrowborder" valign="top" width="33%" id="mcps1.2.4.1.3"><p id="en-us_topic_0151920917_a045311be27aa4014afbe4159033e3ac2"><a name="en-us_topic_0151920917_a045311be27aa4014afbe4159033e3ac2"></a><a name="en-us_topic_0151920917_a045311be27aa4014afbe4159033e3ac2"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0151920917_r2de0ab9c58c14fbb9df4fb27b6b2a6cb"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_a5a2e2e920ad842969ba0cfae30934767"><a name="en-us_topic_0151920917_a5a2e2e920ad842969ba0cfae30934767"></a><a name="en-us_topic_0151920917_a5a2e2e920ad842969ba0cfae30934767"></a>service <em id="i25691814141714"><a name="i25691814141714"></a><a name="i25691814141714"></a>network</em> start</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_a0990a28043f244f3a7c63159310ea5fc"><a name="en-us_topic_0151920917_a0990a28043f244f3a7c63159310ea5fc"></a><a name="en-us_topic_0151920917_a0990a28043f244f3a7c63159310ea5fc"></a>systemctl start <em id="i1147010194173"><a name="i1147010194173"></a><a name="i1147010194173"></a>network</em>.service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_a6f87a02ac1cb4b37845b6a91ba35eb02"><a name="en-us_topic_0151920917_a6f87a02ac1cb4b37845b6a91ba35eb02"></a><a name="en-us_topic_0151920917_a6f87a02ac1cb4b37845b6a91ba35eb02"></a>Starts a service.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_r234d52fbaf2744e58e62737f22a62ee9"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_a4d1be5b113c748b5a81a5898138d28d8"><a name="en-us_topic_0151920917_a4d1be5b113c748b5a81a5898138d28d8"></a><a name="en-us_topic_0151920917_a4d1be5b113c748b5a81a5898138d28d8"></a>service <em id="i76031221191716"><a name="i76031221191716"></a><a name="i76031221191716"></a>network</em> stop</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_a44b1659e2bfd463da45b05e17f4d6021"><a name="en-us_topic_0151920917_a44b1659e2bfd463da45b05e17f4d6021"></a><a name="en-us_topic_0151920917_a44b1659e2bfd463da45b05e17f4d6021"></a>systemctl stop <em id="i1176117234177"><a name="i1176117234177"></a><a name="i1176117234177"></a>network</em>.service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_afada400adfde455aafcf5f45494e85cf"><a name="en-us_topic_0151920917_afada400adfde455aafcf5f45494e85cf"></a><a name="en-us_topic_0151920917_afada400adfde455aafcf5f45494e85cf"></a>Stops a service.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_r7954bf07d8b24964a6fd9d102c0fbda8"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_a7bcda643db174a779968a5ae5a9f7c18"><a name="en-us_topic_0151920917_a7bcda643db174a779968a5ae5a9f7c18"></a><a name="en-us_topic_0151920917_a7bcda643db174a779968a5ae5a9f7c18"></a>service <em id="i314182613171"><a name="i314182613171"></a><a name="i314182613171"></a>network</em> restart</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_ac4319fcaf27b4960acc4025be401420d"><a name="en-us_topic_0151920917_ac4319fcaf27b4960acc4025be401420d"></a><a name="en-us_topic_0151920917_ac4319fcaf27b4960acc4025be401420d"></a>systemctl restart <em id="i2763627191712"><a name="i2763627191712"></a><a name="i2763627191712"></a>network</em>.service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_a2b544d2a4b744822a7371b4c2d302fcd"><a name="en-us_topic_0151920917_a2b544d2a4b744822a7371b4c2d302fcd"></a><a name="en-us_topic_0151920917_a2b544d2a4b744822a7371b4c2d302fcd"></a>Restarts a service.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_r5fb05eeabf4743f6b95858329d896d77"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_ab4f282845e28411e8f96b6186b6db84b"><a name="en-us_topic_0151920917_ab4f282845e28411e8f96b6186b6db84b"></a><a name="en-us_topic_0151920917_ab4f282845e28411e8f96b6186b6db84b"></a>service <em id="i5183203114173"><a name="i5183203114173"></a><a name="i5183203114173"></a>network</em> reload</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_abf350ef96d69405cae647284bfcf4ce2"><a name="en-us_topic_0151920917_abf350ef96d69405cae647284bfcf4ce2"></a><a name="en-us_topic_0151920917_abf350ef96d69405cae647284bfcf4ce2"></a>systemctl reload <em id="i8989468178"><a name="i8989468178"></a><a name="i8989468178"></a>network</em>.service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_acf06a1fd807d49a796e2064a403448e1"><a name="en-us_topic_0151920917_acf06a1fd807d49a796e2064a403448e1"></a><a name="en-us_topic_0151920917_acf06a1fd807d49a796e2064a403448e1"></a>Reloads a configuration file without interrupting an operation.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_rd496143bec874f7b943e64194f84f21e"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_ac09908e607dc41be9ca836fcc1239f84"><a name="en-us_topic_0151920917_ac09908e607dc41be9ca836fcc1239f84"></a><a name="en-us_topic_0151920917_ac09908e607dc41be9ca836fcc1239f84"></a>service <em id="i8594125511173"><a name="i8594125511173"></a><a name="i8594125511173"></a>network</em> condrestart</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_af07ff7e0d19e4be2b48478bb7bc8d598"><a name="en-us_topic_0151920917_af07ff7e0d19e4be2b48478bb7bc8d598"></a><a name="en-us_topic_0151920917_af07ff7e0d19e4be2b48478bb7bc8d598"></a>systemctl condrestart <em id="i1862127131818"><a name="i1862127131818"></a><a name="i1862127131818"></a>network</em>.service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_a7bdfc64d030a4b42bd585516423597c2"><a name="en-us_topic_0151920917_a7bdfc64d030a4b42bd585516423597c2"></a><a name="en-us_topic_0151920917_a7bdfc64d030a4b42bd585516423597c2"></a>Restarts a service only if it is running.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_r713e5d55a8f9431f9d3bd610a471a75b"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_a3bfd99b1d31b49d78942a71f95a591b7"><a name="en-us_topic_0151920917_a3bfd99b1d31b49d78942a71f95a591b7"></a><a name="en-us_topic_0151920917_a3bfd99b1d31b49d78942a71f95a591b7"></a>service <em id="i129331410101817"><a name="i129331410101817"></a><a name="i129331410101817"></a>network</em> status</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_abcf4fcc5f3eb49e98177485d1e0fa8c8"><a name="en-us_topic_0151920917_abcf4fcc5f3eb49e98177485d1e0fa8c8"></a><a name="en-us_topic_0151920917_abcf4fcc5f3eb49e98177485d1e0fa8c8"></a>systemctl status <em id="i14167141311818"><a name="i14167141311818"></a><a name="i14167141311818"></a>network</em>.service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_a2edbdadf7af149a785e7bb53e742957d"><a name="en-us_topic_0151920917_a2edbdadf7af149a785e7bb53e742957d"></a><a name="en-us_topic_0151920917_a2edbdadf7af149a785e7bb53e742957d"></a>Checks the service running status.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_rdbb2c99800964d3a939744820783d83e"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_a532ae2e1fcee47c1b2c793af353c8497"><a name="en-us_topic_0151920917_a532ae2e1fcee47c1b2c793af353c8497"></a><a name="en-us_topic_0151920917_a532ae2e1fcee47c1b2c793af353c8497"></a>chkconfig <em id="i12543718141817"><a name="i12543718141817"></a><a name="i12543718141817"></a>network</em> on</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_ac70b593c72654611b5fb947cc4ce0be8"><a name="en-us_topic_0151920917_ac70b593c72654611b5fb947cc4ce0be8"></a><a name="en-us_topic_0151920917_ac70b593c72654611b5fb947cc4ce0be8"></a>systemctl enable <em id="i68755202187"><a name="i68755202187"></a><a name="i68755202187"></a>network</em>.service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_af0790cedca9e4ba6815f635b0ebbeaf0"><a name="en-us_topic_0151920917_af0790cedca9e4ba6815f635b0ebbeaf0"></a><a name="en-us_topic_0151920917_af0790cedca9e4ba6815f635b0ebbeaf0"></a>Enables a service when the service activation time arrives or a trigger condition for enabling the service is met.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_rd68859dcb33542debd6ee8ad5156b36c"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_a709258a9eeee403aa92657a02bf35217"><a name="en-us_topic_0151920917_a709258a9eeee403aa92657a02bf35217"></a><a name="en-us_topic_0151920917_a709258a9eeee403aa92657a02bf35217"></a>chkconfig <em id="i103391827191816"><a name="i103391827191816"></a><a name="i103391827191816"></a>network</em> off</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_ac33b4c8bd2f24d66b4e3b818331588b1"><a name="en-us_topic_0151920917_ac33b4c8bd2f24d66b4e3b818331588b1"></a><a name="en-us_topic_0151920917_ac33b4c8bd2f24d66b4e3b818331588b1"></a>systemctl disable <em id="i83771532111817"><a name="i83771532111817"></a><a name="i83771532111817"></a>network</em>.service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_a1845b23447a9422993c7f35412d8bccd"><a name="en-us_topic_0151920917_a1845b23447a9422993c7f35412d8bccd"></a><a name="en-us_topic_0151920917_a1845b23447a9422993c7f35412d8bccd"></a>Disables a service when the service activation time arrives or a trigger condition for disabling the service is met.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_r6e6a32f051694436a17223d750d3ca5d"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_a7100f90dea8e4aac9ebbd1046cfe1b61"><a name="en-us_topic_0151920917_a7100f90dea8e4aac9ebbd1046cfe1b61"></a><a name="en-us_topic_0151920917_a7100f90dea8e4aac9ebbd1046cfe1b61"></a>chkconfig <em id="i20188173712184"><a name="i20188173712184"></a><a name="i20188173712184"></a>network</em></p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_a1d84c3ad47164379a76dc7e895d8ec75"><a name="en-us_topic_0151920917_a1d84c3ad47164379a76dc7e895d8ec75"></a><a name="en-us_topic_0151920917_a1d84c3ad47164379a76dc7e895d8ec75"></a>systemctl is-enabled <em id="i891911394186"><a name="i891911394186"></a><a name="i891911394186"></a>network</em>.service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_a6443c2f5c45d46098389ce04d7c4d067"><a name="en-us_topic_0151920917_a6443c2f5c45d46098389ce04d7c4d067"></a><a name="en-us_topic_0151920917_a6443c2f5c45d46098389ce04d7c4d067"></a>Checks whether a service is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_r4714a5d93d1f4bb68bc6aad5119cffb1"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_aa363ce8663604d429955880c4d56dadb"><a name="en-us_topic_0151920917_aa363ce8663604d429955880c4d56dadb"></a><a name="en-us_topic_0151920917_aa363ce8663604d429955880c4d56dadb"></a>chkconfig --list</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_a921188067f294d718d37be90122b8e9d"><a name="en-us_topic_0151920917_a921188067f294d718d37be90122b8e9d"></a><a name="en-us_topic_0151920917_a921188067f294d718d37be90122b8e9d"></a>systemctl list-unit-files --type=service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_a2575b1e1d82e42178cd3ffd724ffa6c8"><a name="en-us_topic_0151920917_a2575b1e1d82e42178cd3ffd724ffa6c8"></a><a name="en-us_topic_0151920917_a2575b1e1d82e42178cd3ffd724ffa6c8"></a>Lists all services in each runlevel and checks whether they are enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_ref5860825d054488a966acab6382ccb3"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_acd5c91b22ffe4cf5ab418a2d65820f02"><a name="en-us_topic_0151920917_acd5c91b22ffe4cf5ab418a2d65820f02"></a><a name="en-us_topic_0151920917_acd5c91b22ffe4cf5ab418a2d65820f02"></a>chkconfig <em id="i187651543191814"><a name="i187651543191814"></a><a name="i187651543191814"></a>network</em> --list</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_afa513e24075d4ca7bd2348451ea1d27b"><a name="en-us_topic_0151920917_afa513e24075d4ca7bd2348451ea1d27b"></a><a name="en-us_topic_0151920917_afa513e24075d4ca7bd2348451ea1d27b"></a>ls /etc/systemd/system/*.wants/<em id="i7400164691813"><a name="i7400164691813"></a><a name="i7400164691813"></a>network</em>.service</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_a75394896b43b4c6689ca601670afda3b"><a name="en-us_topic_0151920917_a75394896b43b4c6689ca601670afda3b"></a><a name="en-us_topic_0151920917_a75394896b43b4c6689ca601670afda3b"></a>Lists the runlevels in which a service is enabled and those in which the service is disabled.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_rd6c7141c6da9413db38f999f2db4c6bc"><td class="cellrowborder" valign="top" width="30%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0151920917_ac75a48e757db42699bd3c7e801285334"><a name="en-us_topic_0151920917_ac75a48e757db42699bd3c7e801285334"></a><a name="en-us_topic_0151920917_ac75a48e757db42699bd3c7e801285334"></a>chkconfig <em id="i5122352111811"><a name="i5122352111811"></a><a name="i5122352111811"></a>network</em> --add</p>
</td>
<td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0151920917_ab3f7243a981f4731bee057367493d1d3"><a name="en-us_topic_0151920917_ab3f7243a981f4731bee057367493d1d3"></a><a name="en-us_topic_0151920917_ab3f7243a981f4731bee057367493d1d3"></a>systemctl daemon-reload</p>
</td>
<td class="cellrowborder" valign="top" width="33%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0151920917_af79feff246144baca76efe245350d793"><a name="en-us_topic_0151920917_af79feff246144baca76efe245350d793"></a><a name="en-us_topic_0151920917_af79feff246144baca76efe245350d793"></a>Used when you need to create a service file or change settings.</p>
</td>
</tr>
</tbody>
</table>

## Listing Services<a name="en-us_topic_0151920917_s0fccdcfd34fa460cb4d11e30cd33ce3b"></a>

To list all currently loaded services, run the following command:

```
systemctl list-units --type service
```

To list all services regardless of whether they are loaded, run the following command \(with the all option\):

```
systemctl list-units --type service --all
```

Example list of all currently loaded services:

```
$ systemctl list-units --type service
UNIT                        LOAD   ACTIVE     SUB     JOB   DESCRIPTION  
atd.service                 loaded active     running       Deferred execution scheduler  
auditd.service              loaded active     running       Security Auditing Service  
avahi-daemon.service        loaded active     running       Avahi mDNS/DNS-SD Stack  
chronyd.service             loaded active     running       NTP client/server  
crond.service               loaded active     running       Command Scheduler  
dbus.service                loaded active     running       D-Bus System Message Bus  
dracut-shutdown.service     loaded active     exited        Restore /run/initramfs on shutdown  
firewalld.service           loaded active     running       firewalld - dynamic firewall daemon  
getty@tty1.service          loaded active     running       Getty on tty1  
gssproxy.service            loaded active     running       GSSAPI Proxy Daemon  
irqbalance.service          loaded active     running       irqbalance daemon  
iscsid.service              loaded activating start   start Open-iSCSI
```

## Displaying Service Status<a name="en-us_topic_0151920917_sf3cbdd9a12bd4269865f0c4ed428cc85"></a>

To display the status of a service, run the following command:

```
systemctl status name.service
```

[Table 2](#en-us_topic_0151920917_t36cd267d69244ed39ae06bb117ed8e62)  describes the parameters in the command output.

**Table  2**  Output parameters

<a name="en-us_topic_0151920917_t36cd267d69244ed39ae06bb117ed8e62"></a>
<table><thead align="left"><tr id="en-us_topic_0151920917_r2bf0635c239b4bbeaf7bc4eb4d85459e"><th class="cellrowborder" valign="top" width="19%" id="mcps1.2.3.1.1"><p id="en-us_topic_0151920917_a8dde4401e621448eab369aa9ade622e4"><a name="en-us_topic_0151920917_a8dde4401e621448eab369aa9ade622e4"></a><a name="en-us_topic_0151920917_a8dde4401e621448eab369aa9ade622e4"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="81%" id="mcps1.2.3.1.2"><p id="en-us_topic_0151920917_a93c35017023145e4a3dd692445c4eb75"><a name="en-us_topic_0151920917_a93c35017023145e4a3dd692445c4eb75"></a><a name="en-us_topic_0151920917_a93c35017023145e4a3dd692445c4eb75"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0151920917_r2276fbc401e24f5e965a75e8ec40f61b"><td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151920917_a35d67ba3f4394bd5aee0cdba9f1b5462"><a name="en-us_topic_0151920917_a35d67ba3f4394bd5aee0cdba9f1b5462"></a><a name="en-us_topic_0151920917_a35d67ba3f4394bd5aee0cdba9f1b5462"></a>Loaded</p>
</td>
<td class="cellrowborder" valign="top" width="81%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151920917_ae54693b5ed144dd5ae89496a1c688eb0"><a name="en-us_topic_0151920917_ae54693b5ed144dd5ae89496a1c688eb0"></a><a name="en-us_topic_0151920917_ae54693b5ed144dd5ae89496a1c688eb0"></a>Information on whether the service has been loaded, the absolute path to the service file, and a note of whether the service is enabled.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_r72275c1194ff4dd593d77bf34620d7bd"><td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151920917_aba7f0a647fde4e12a202c0dd74d0c589"><a name="en-us_topic_0151920917_aba7f0a647fde4e12a202c0dd74d0c589"></a><a name="en-us_topic_0151920917_aba7f0a647fde4e12a202c0dd74d0c589"></a>Active</p>
</td>
<td class="cellrowborder" valign="top" width="81%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151920917_a0a0de97e681f4218bc2ab1b2192acf56"><a name="en-us_topic_0151920917_a0a0de97e681f4218bc2ab1b2192acf56"></a><a name="en-us_topic_0151920917_a0a0de97e681f4218bc2ab1b2192acf56"></a>Information on whether the service is running and a time stamp.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_r5dea7cb1916a448da864f6d5ddaaed60"><td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151920917_ae137d23b2f0f476fbfcfbf5042afcbf8"><a name="en-us_topic_0151920917_ae137d23b2f0f476fbfcfbf5042afcbf8"></a><a name="en-us_topic_0151920917_ae137d23b2f0f476fbfcfbf5042afcbf8"></a>Main PID</p>
</td>
<td class="cellrowborder" valign="top" width="81%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151920917_a7627b260b2c74e43b6be78acb9c9dd97"><a name="en-us_topic_0151920917_a7627b260b2c74e43b6be78acb9c9dd97"></a><a name="en-us_topic_0151920917_a7627b260b2c74e43b6be78acb9c9dd97"></a>PID of the service.</p>
</td>
</tr>
<tr id="en-us_topic_0151920917_r67e18953b9624b95bd4884e28ef20376"><td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0151920917_aa122289518d847cea99e32c1d22ab121"><a name="en-us_topic_0151920917_aa122289518d847cea99e32c1d22ab121"></a><a name="en-us_topic_0151920917_aa122289518d847cea99e32c1d22ab121"></a>CGroup</p>
</td>
<td class="cellrowborder" valign="top" width="81%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0151920917_a668e34c741a44741929beeab402bf767"><a name="en-us_topic_0151920917_a668e34c741a44741929beeab402bf767"></a><a name="en-us_topic_0151920917_a668e34c741a44741929beeab402bf767"></a>Additional information about related control groups.</p>
</td>
</tr>
</tbody>
</table>

To verify whether a particular service is running, run the following command:

```
systemctl is-active name.service
```

The output of the  **is-active**  command is as follows:

**Table  3**  Output of the is-active command

<a name="table157842227315"></a>
<table><thead align="left"><tr id="row878417221132"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p1978432212315"><a name="p1978432212315"></a><a name="p1978432212315"></a>Status</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p878410225314"><a name="p878410225314"></a><a name="p878410225314"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row87841522439"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p153819129412"><a name="p153819129412"></a><a name="p153819129412"></a>active(running)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p938116129415"><a name="p938116129415"></a><a name="p938116129415"></a>One or more services are running in the system.</p>
</td>
</tr>
<tr id="row7784112217315"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p153829121246"><a name="p153829121246"></a><a name="p153829121246"></a>active(exited)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p103822012844"><a name="p103822012844"></a><a name="p103822012844"></a>A service that ends properly after being executed only once. Currently, no program is running in the system. For example, the <strong id="b9225113174212"><a name="b9225113174212"></a><a name="b9225113174212"></a>quotaon</strong> function is performed only when the program is started or mounted.</p>
</td>
</tr>
<tr id="row978416227312"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1838251219416"><a name="p1838251219416"></a><a name="p1838251219416"></a>active(waiting)</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p23822129416"><a name="p23822129416"></a><a name="p23822129416"></a>The program needs to wait for other events to continue running. For example, the print queue service is being started, but it needs to be queued (print jobs) so that it can continue to wake up the printer service to perform the next print function.</p>
</td>
</tr>
<tr id="row10784102216316"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p13382171211418"><a name="p13382171211418"></a><a name="p13382171211418"></a>inactive</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1338217126410"><a name="p1338217126410"></a><a name="p1338217126410"></a>The service is not running.</p>
</td>
</tr>
</tbody>
</table>

Similarly, to determine whether a particular service is enabled, run the following command:

```
systemctl is-enabled name.service
```

The output of the  **is-enabled**  command is as follows:

**Table  4**  Output of the is-enabled command

<a name="table105177355318"></a>
<table><thead align="left"><tr id="row9517635538"><th class="cellrowborder" valign="top" width="32.48%" id="mcps1.2.3.1.1"><p id="p551716356313"><a name="p551716356313"></a><a name="p551716356313"></a>Status</p>
</th>
<th class="cellrowborder" valign="top" width="67.52%" id="mcps1.2.3.1.2"><p id="p1051716351935"><a name="p1051716351935"></a><a name="p1051716351935"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row195171351134"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p165171351231"><a name="p165171351231"></a><a name="p165171351231"></a>"enabled"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p155175351731"><a name="p155175351731"></a><a name="p155175351731"></a>Has been permanently enabled through <strong id="b148912491227"><a name="b148912491227"></a><a name="b148912491227"></a>Alias= </strong><em id="i165841226152210"><a name="i165841226152210"></a><a name="i165841226152210"></a>Alias</em>, <strong id="b12754203218224"><a name="b12754203218224"></a><a name="b12754203218224"></a>.wants/</strong>, or <strong id="b1979210365223"><a name="b1979210365223"></a><a name="b1979210365223"></a>.requires/</strong> soft link in the <strong id="b1288740102212"><a name="b1288740102212"></a><a name="b1288740102212"></a>/etc/systemd/system/</strong> directory.</p>
</td>
</tr>
<tr id="row95171335339"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p1951717351433"><a name="p1951717351433"></a><a name="p1951717351433"></a>"enabled-runtime"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p9517135835"><a name="p9517135835"></a><a name="p9517135835"></a>Has been temporarily enabled through <strong id="b6687233182313"><a name="b6687233182313"></a><a name="b6687233182313"></a>Alias= </strong><em id="i11688123392310"><a name="i11688123392310"></a><a name="i11688123392310"></a>Alias</em>, <strong id="b1068812335233"><a name="b1068812335233"></a><a name="b1068812335233"></a>.wants/</strong>, or <strong id="b9688173322317"><a name="b9688173322317"></a><a name="b9688173322317"></a>.requires/</strong> soft link in the <strong id="b062114433239"><a name="b062114433239"></a><a name="b062114433239"></a>/run/systemd/system/</strong> directory.</p>
</td>
</tr>
<tr id="row7517143515314"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p125176351137"><a name="p125176351137"></a><a name="p125176351137"></a>"linked"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p145171535934"><a name="p145171535934"></a><a name="p145171535934"></a>Although the unit file is not in the standard unit directory, one or more soft links pointing to the unit file exist in the <strong id="b02821452182114"><a name="b02821452182114"></a><a name="b02821452182114"></a>/etc/systemd/system/</strong> permanent directory.</p>
</td>
</tr>
<tr id="row125176351137"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p2051718353313"><a name="p2051718353313"></a><a name="p2051718353313"></a>"linked-runtime"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p115171835936"><a name="p115171835936"></a><a name="p115171835936"></a>Although the unit file is not in the standard unit directory, one or more soft links pointing to the unit file exist in the <strong id="b14859450102319"><a name="b14859450102319"></a><a name="b14859450102319"></a>/run/systemd/system/</strong> temporary directory.</p>
</td>
</tr>
<tr id="row851719352312"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p1651753520319"><a name="p1651753520319"></a><a name="p1651753520319"></a>"masked"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p25171351233"><a name="p25171351233"></a><a name="p25171351233"></a>Has been masked permanently by the <strong id="b1145211952819"><a name="b1145211952819"></a><a name="b1145211952819"></a>/etc/systemd/system/</strong> directory (soft link to <strong id="b713110353286"><a name="b713110353286"></a><a name="b713110353286"></a>/dev/null</strong>). Therefore, the <strong id="b5498164316282"><a name="b5498164316282"></a><a name="b5498164316282"></a>start</strong> operation fails.</p>
</td>
</tr>
<tr id="row551715351136"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p175178351334"><a name="p175178351334"></a><a name="p175178351334"></a>"masked-runtime"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p135171135138"><a name="p135171135138"></a><a name="p135171135138"></a>Has been masked temporarily by the <strong id="b1210717017349"><a name="b1210717017349"></a><a name="b1210717017349"></a>/run/systemd/systemd/</strong> directory (soft link to <strong id="b1233184423417"><a name="b1233184423417"></a><a name="b1233184423417"></a>/dev/null</strong>). Therefore, the <strong id="b5586115110346"><a name="b5586115110346"></a><a name="b5586115110346"></a>start</strong> operation fails.</p>
</td>
</tr>
<tr id="row35171935533"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p751714351231"><a name="p751714351231"></a><a name="p751714351231"></a>"static"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p551718355313"><a name="p551718355313"></a><a name="p551718355313"></a>Not enabled. There is no option available for the <strong id="b1835611271535"><a name="b1835611271535"></a><a name="b1835611271535"></a>enable</strong> command in the [Install] section of the unit file.</p>
</td>
</tr>
<tr id="row1012314171440"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p131245179420"><a name="p131245179420"></a><a name="p131245179420"></a>"indirect"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p91241717648"><a name="p91241717648"></a><a name="p91241717648"></a>Not enabled. But the list of values for the <strong id="b559774115552"><a name="b559774115552"></a><a name="b559774115552"></a>Also=</strong> option in the [Install] section of the unit file is not empty (that is, some units in the list may have been enabled), or the unit file has an alias soft link which is not in the <strong id="b11106144165815"><a name="b11106144165815"></a><a name="b11106144165815"></a>Also=</strong> list. For a template unit, it indicates that an instance different from <strong id="b23790755915"><a name="b23790755915"></a><a name="b23790755915"></a>DefaultInstance=</strong> is enabled.</p>
</td>
</tr>
<tr id="row123141521241"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p831417211244"><a name="p831417211244"></a><a name="p831417211244"></a>"disabled"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p531419213418"><a name="p531419213418"></a><a name="p531419213418"></a>Not enabled. But the [Install] section of the unit file contains options available for the <strong id="b89807342590"><a name="b89807342590"></a><a name="b89807342590"></a>enable</strong> command.</p>
</td>
</tr>
<tr id="row173149216411"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p83159211343"><a name="p83159211343"></a><a name="p83159211343"></a>"generated"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p43151219416"><a name="p43151219416"></a><a name="p43151219416"></a>The unit file is dynamically generated by the unit generator. The generated unit file may not be directly enabled, but is implicitly enabled by the unit generator.</p>
</td>
</tr>
<tr id="row37625251844"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p57620251419"><a name="p57620251419"></a><a name="p57620251419"></a>"transient"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p127638251244"><a name="p127638251244"></a><a name="p127638251244"></a>The unit file is dynamically and temporarily generated by the <strong id="b117311036706"><a name="b117311036706"></a><a name="b117311036706"></a>runtime</strong> API. The temporary unit may not be enabled.</p>
</td>
</tr>
<tr id="row57631925642"><td class="cellrowborder" valign="top" width="32.48%" headers="mcps1.2.3.1.1 "><p id="p876316256412"><a name="p876316256412"></a><a name="p876316256412"></a>"bad"</p>
</td>
<td class="cellrowborder" valign="top" width="67.52%" headers="mcps1.2.3.1.2 "><p id="p187635255419"><a name="p187635255419"></a><a name="p187635255419"></a>The unit file is incorrect or other errors occur. <strong id="b513219571802"><a name="b513219571802"></a><a name="b513219571802"></a>is-enabled</strong> does not return this status, but displays an error message. The <strong id="b14156144311112"><a name="b14156144311112"></a><a name="b14156144311112"></a>list-unit-files</strong> command may display this unit.</p>
</td>
</tr>
</tbody>
</table>

For example, to display the status of gdm.service, run the  **systemctl status gdm.service**  command.

```
# systemctl status gdm.service
gdm.service - GNOME Display Manager   Loaded: loaded (/usr/lib/systemd/system/gdm.service; enabled)   Active: active (running) since Thu 2013-10-17 17:31:23 CEST; 5min ago
 Main PID: 1029 (gdm)
   CGroup: /system.slice/gdm.service
           ├─1029 /usr/sbin/gdm
           ├─1037 /usr/libexec/gdm-simple-slave --display-id /org/gno...           
           └─1047 /usr/bin/Xorg :0 -background none -verbose -auth /r...Oct 17 17:31:23 localhost systemd[1]: Started GNOME Display Manager.
```

## Starting a Service<a name="en-us_topic_0151920917_s4c2ed790faf847c5b2467e4e9363ba6a"></a>

To start a service, run the following command as the user  **root**:

```
systemctl start name.service
```

For example, to start the httpd service, run the following command:

```
# systemctl start httpd.service
```

## Stopping a Service<a name="en-us_topic_0151920917_s7dcfbcb5bf1643789249229f3cebbaee"></a>

To stop a service, run the following command as the user  **root**:

```
systemctl stop name.service
```

For example, to stop the Bluetooth service, run the following command:

```
# systemctl stop bluetooth.service
```

## Restarting a Service<a name="en-us_topic_0151920917_s708055d7944d47f59ddb578aa4664362"></a>

To restart a service, run the following command as the user  **root**:

```
systemctl restart name.service
```

This command stops the selected service in the current session and immediately starts it again. If the selected service is not running, this command starts it too.

For example, to restart the Bluetooth service, run the following command:

```
# systemctl restart bluetooth.service
```

## Enabling a Service<a name="en-us_topic_0151920917_s3566e76fe89e430db5294c3a8b56dcd8"></a>

To configure a service to start automatically at system boot time, run the following command as the user  **root**:

```
systemctl enable name.service
```

For example, to configure the httpd service to start automatically at system boot time, run the following command:

```
# systemctl enable httpd.service
ln -s '/usr/lib/systemd/system/httpd.service' '/etc/systemd/system/multi-user.target.wants/httpd.service'
```

## Disabling a Service<a name="en-us_topic_0151920917_sb057673ccb8646fab3e4c72b4e037a62"></a>

To prevent a service from starting automatically at system boot time, run the following command as the user  **root**:

```
systemctl disable name.service
```

For example, to prevent the Bluetooth service from starting automatically at system boot time, run the following command:

```
# systemctl disable bluetooth.service
Removed /etc/systemd/system/bluetooth.target.wants/bluetooth.service.
Removed /etc/systemd/system/dbus-org.bluez.service.
```

