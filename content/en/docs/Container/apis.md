# APIs<a name="EN-US_TOPIC_0184808092"></a>

The following tables list the parameters that may be used in each API. Some parameters do not take effect now, which have been noted in the corresponding parameter description.

## API Parameters<a name="en-us_topic_0182207110_section556916215269"></a>

-   <a name="en-us_topic_0182207110_li1197211439388"></a>**DNSConfig**

    The API is used to configure DNS servers and search domains of a sandbox.

    <a name="en-us_topic_0182207110_table1375411588598"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row7754658145911"><th class="cellrowborder" valign="top" width="39.44%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p9277611209"><a name="en-us_topic_0182207110_p9277611209"></a><a name="en-us_topic_0182207110_p9277611209"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="60.56%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1927713119014"><a name="en-us_topic_0182207110_p1927713119014"></a><a name="en-us_topic_0182207110_p1927713119014"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row107541958115912"><td class="cellrowborder" valign="top" width="39.44%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p12277181104"><a name="en-us_topic_0182207110_p12277181104"></a><a name="en-us_topic_0182207110_p12277181104"></a>repeated string servers</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.56%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p17277911402"><a name="en-us_topic_0182207110_p17277911402"></a><a name="en-us_topic_0182207110_p17277911402"></a>DNS server list of a cluster.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row175415814599"><td class="cellrowborder" valign="top" width="39.44%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p182771218017"><a name="en-us_topic_0182207110_p182771218017"></a><a name="en-us_topic_0182207110_p182771218017"></a>repeated string searches</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.56%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p02781014017"><a name="en-us_topic_0182207110_p02781014017"></a><a name="en-us_topic_0182207110_p02781014017"></a>DNS search domain list of a cluster.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row147541558205912"><td class="cellrowborder" valign="top" width="39.44%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p927810116019"><a name="en-us_topic_0182207110_p927810116019"></a><a name="en-us_topic_0182207110_p927810116019"></a>repeated string options</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.56%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p92781615013"><a name="en-us_topic_0182207110_p92781615013"></a><a name="en-us_topic_0182207110_p92781615013"></a>DNS option list. For details, see <a href="https://linux.die.net/man/5/resolv.conf" target="_blank" rel="noopener noreferrer">https://linux.die.net/man/5/resolv.conf</a>.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li191811740184215"></a>**Protocol**

    The API is used to specify enum values of protocols.

    <a name="en-us_topic_0182207110_table3751330407"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1775211308012"><th class="cellrowborder" valign="top" width="39.35%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p18470133608"><a name="en-us_topic_0182207110_p18470133608"></a><a name="en-us_topic_0182207110_p18470133608"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="60.650000000000006%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p147011336020"><a name="en-us_topic_0182207110_p147011336020"></a><a name="en-us_topic_0182207110_p147011336020"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row127528301605"><td class="cellrowborder" valign="top" width="39.35%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p14707331901"><a name="en-us_topic_0182207110_p14707331901"></a><a name="en-us_topic_0182207110_p14707331901"></a>TCP = 0↵</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.650000000000006%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p3470833904"><a name="en-us_topic_0182207110_p3470833904"></a><a name="en-us_topic_0182207110_p3470833904"></a>Transmission Control Protocol (TCP).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row6752193015019"><td class="cellrowborder" valign="top" width="39.35%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p24701933605"><a name="en-us_topic_0182207110_p24701933605"></a><a name="en-us_topic_0182207110_p24701933605"></a>UDP = 1</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.650000000000006%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p04701338015"><a name="en-us_topic_0182207110_p04701338015"></a><a name="en-us_topic_0182207110_p04701338015"></a>User Datagram Protocol (UDP).</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li01684174215"></a>**PortMapping**

    The API is used to configure the port mapping for a sandbox.

    <a name="en-us_topic_0182207110_table11840159704"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1984119591804"><th class="cellrowborder" valign="top" width="39.53%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p522410161117"><a name="en-us_topic_0182207110_p522410161117"></a><a name="en-us_topic_0182207110_p522410161117"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="60.47%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1224716710"><a name="en-us_topic_0182207110_p1224716710"></a><a name="en-us_topic_0182207110_p1224716710"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row7841125911011"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1422414164111"><a name="en-us_topic_0182207110_p1422414164111"></a><a name="en-us_topic_0182207110_p1422414164111"></a><a href="#en-us_topic_0182207110_li191811740184215">Protocol</a> protocol</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1822471610113"><a name="en-us_topic_0182207110_p1822471610113"></a><a name="en-us_topic_0182207110_p1822471610113"></a>Protocol used for port mapping.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row118418594010"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p172246161315"><a name="en-us_topic_0182207110_p172246161315"></a><a name="en-us_topic_0182207110_p172246161315"></a>int32 container_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1022410163114"><a name="en-us_topic_0182207110_p1022410163114"></a><a name="en-us_topic_0182207110_p1022410163114"></a>Port number in the container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row158413591308"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p32241416814"><a name="en-us_topic_0182207110_p32241416814"></a><a name="en-us_topic_0182207110_p32241416814"></a>int32 host_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1522481618111"><a name="en-us_topic_0182207110_p1522481618111"></a><a name="en-us_topic_0182207110_p1522481618111"></a>Port number on the host.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row18841195913010"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p192256164116"><a name="en-us_topic_0182207110_p192256164116"></a><a name="en-us_topic_0182207110_p192256164116"></a>string host_ip</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p32251616717"><a name="en-us_topic_0182207110_p32251616717"></a><a name="en-us_topic_0182207110_p32251616717"></a>Host IP address.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li201899371871"></a>**MountPropagation**

    The API is used to specify enums of mount propagation attributes.

    <a name="en-us_topic_0182207110_table227603213110"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row19276183217111"><th class="cellrowborder" valign="top" width="39.53%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p1438363819110"><a name="en-us_topic_0182207110_p1438363819110"></a><a name="en-us_topic_0182207110_p1438363819110"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="60.47%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p538314381119"><a name="en-us_topic_0182207110_p538314381119"></a><a name="en-us_topic_0182207110_p538314381119"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row92761932719"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p73843384118"><a name="en-us_topic_0182207110_p73843384118"></a><a name="en-us_topic_0182207110_p73843384118"></a>PROPAGATION_PRIVATE = 0</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p438419385115"><a name="en-us_topic_0182207110_p438419385115"></a><a name="en-us_topic_0182207110_p438419385115"></a>No mount propagation attributes, that is, private in Linux.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row827615321111"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1384138718"><a name="en-us_topic_0182207110_p1384138718"></a><a name="en-us_topic_0182207110_p1384138718"></a>PROPAGATION_HOST_TO_CONTAINER = 1</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p63841381115"><a name="en-us_topic_0182207110_p63841381115"></a><a name="en-us_topic_0182207110_p63841381115"></a>Mount attribute that can be propagated from the host to the container, that is, rslave in Linux.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row52761232617"><td class="cellrowborder" valign="top" width="39.53%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p13848383118"><a name="en-us_topic_0182207110_p13848383118"></a><a name="en-us_topic_0182207110_p13848383118"></a>PROPAGATION_BIDIRECTIONAL = 2</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.47%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1938419381917"><a name="en-us_topic_0182207110_p1938419381917"></a><a name="en-us_topic_0182207110_p1938419381917"></a>Mount attribute that can be propagated between a host and a container, that is, rshared in Linux.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li6779341144216"></a>**Mount**

    The API is used to mount a volume on the host to a container. \(Only files and folders are supported.\)

    <a name="en-us_topic_0182207110_table17165736155515"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row181661364558"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p2818191920"><a name="en-us_topic_0182207110_p2818191920"></a><a name="en-us_topic_0182207110_p2818191920"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1181119422"><a name="en-us_topic_0182207110_p1181119422"></a><a name="en-us_topic_0182207110_p1181119422"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row191661036185516"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p416653615515"><a name="en-us_topic_0182207110_p416653615515"></a><a name="en-us_topic_0182207110_p416653615515"></a>string container_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p111661536135511"><a name="en-us_topic_0182207110_p111661536135511"></a><a name="en-us_topic_0182207110_p111661536135511"></a>Path in the container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row3166153612558"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p91664365556"><a name="en-us_topic_0182207110_p91664365556"></a><a name="en-us_topic_0182207110_p91664365556"></a>string host_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p41666362552"><a name="en-us_topic_0182207110_p41666362552"></a><a name="en-us_topic_0182207110_p41666362552"></a>Path on the host.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row14166173675512"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p12166113655516"><a name="en-us_topic_0182207110_p12166113655516"></a><a name="en-us_topic_0182207110_p12166113655516"></a>bool readonly</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1316663613554"><a name="en-us_topic_0182207110_p1316663613554"></a><a name="en-us_topic_0182207110_p1316663613554"></a>Whether the configuration is read-only in the container.</p>
    <p id="en-us_topic_0182207110_p0270133611449"><a name="en-us_topic_0182207110_p0270133611449"></a><a name="en-us_topic_0182207110_p0270133611449"></a>Default value: <strong id="en-us_topic_0182207110_b1766415511437"><a name="en-us_topic_0182207110_b1766415511437"></a><a name="en-us_topic_0182207110_b1766415511437"></a>false</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row0166183620554"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p10166103615519"><a name="en-us_topic_0182207110_p10166103615519"></a><a name="en-us_topic_0182207110_p10166103615519"></a>bool selinux_relabel</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p15166143619556"><a name="en-us_topic_0182207110_p15166143619556"></a><a name="en-us_topic_0182207110_p15166143619556"></a>Whether to set the SELinux label. This parameter does not take effect now.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row11991253929"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p149911453626"><a name="en-us_topic_0182207110_p149911453626"></a><a name="en-us_topic_0182207110_p149911453626"></a><a href="#en-us_topic_0182207110_li201899371871">MountPropagation</a> propagation</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p7395173011490"><a name="en-us_topic_0182207110_p7395173011490"></a><a name="en-us_topic_0182207110_p7395173011490"></a>Mount propagation attribute.</p>
    <p id="en-us_topic_0182207110_p4261433204915"><a name="en-us_topic_0182207110_p4261433204915"></a><a name="en-us_topic_0182207110_p4261433204915"></a>The value can be <strong id="en-us_topic_0182207110_b277173219502"><a name="en-us_topic_0182207110_b277173219502"></a><a name="en-us_topic_0182207110_b277173219502"></a>0</strong>, <strong id="en-us_topic_0182207110_b1442483795012"><a name="en-us_topic_0182207110_b1442483795012"></a><a name="en-us_topic_0182207110_b1442483795012"></a>1</strong>, or <strong id="en-us_topic_0182207110_b043314418509"><a name="en-us_topic_0182207110_b043314418509"></a><a name="en-us_topic_0182207110_b043314418509"></a>2</strong>, corresponding to the private, rslave, and rshared propagation attributes respectively.</p>
    <p id="en-us_topic_0182207110_p599245312212"><a name="en-us_topic_0182207110_p599245312212"></a><a name="en-us_topic_0182207110_p599245312212"></a>Default value: <strong id="en-us_topic_0182207110_b073195718498"><a name="en-us_topic_0182207110_b073195718498"></a><a name="en-us_topic_0182207110_b073195718498"></a>0</strong></p>
    </td>
    </tr>
    </tbody>
    </table>


-   <a name="en-us_topic_0182207110_li1182444614213"></a>**NamespaceOption**

    <a name="en-us_topic_0182207110_table02020429414"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row320210420420"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p3202142345"><a name="en-us_topic_0182207110_p3202142345"></a><a name="en-us_topic_0182207110_p3202142345"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p192039421544"><a name="en-us_topic_0182207110_p192039421544"></a><a name="en-us_topic_0182207110_p192039421544"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row12032421840"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p4203942245"><a name="en-us_topic_0182207110_p4203942245"></a><a name="en-us_topic_0182207110_p4203942245"></a>bool host_network</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1420374210411"><a name="en-us_topic_0182207110_p1420374210411"></a><a name="en-us_topic_0182207110_p1420374210411"></a>Whether to use host network namespaces.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row132037421842"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p520312421344"><a name="en-us_topic_0182207110_p520312421344"></a><a name="en-us_topic_0182207110_p520312421344"></a>bool host_pid</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p17203194215418"><a name="en-us_topic_0182207110_p17203194215418"></a><a name="en-us_topic_0182207110_p17203194215418"></a>Whether to use host PID namespaces.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1320315420416"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p620344217419"><a name="en-us_topic_0182207110_p620344217419"></a><a name="en-us_topic_0182207110_p620344217419"></a>bool host_ipc</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p12049428416"><a name="en-us_topic_0182207110_p12049428416"></a><a name="en-us_topic_0182207110_p12049428416"></a>Whether to use host IPC namespaces.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li115631277434"></a>**Capability**

    This API is used to specify the capabilities to be added and deleted.

    <a name="en-us_topic_0182207110_table4642103774315"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1642837164314"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p12642737104318"><a name="en-us_topic_0182207110_p12642737104318"></a><a name="en-us_topic_0182207110_p12642737104318"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1642193713437"><a name="en-us_topic_0182207110_p1642193713437"></a><a name="en-us_topic_0182207110_p1642193713437"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row86421337144310"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1855613286710"><a name="en-us_topic_0182207110_p1855613286710"></a><a name="en-us_topic_0182207110_p1855613286710"></a>repeated string add_capabilities</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p199319241760"><a name="en-us_topic_0182207110_p199319241760"></a><a name="en-us_topic_0182207110_p199319241760"></a>Capabilities to be added.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row5642103716437"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p3664193316710"><a name="en-us_topic_0182207110_p3664193316710"></a><a name="en-us_topic_0182207110_p3664193316710"></a>repeated string drop_capabilities</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p5492190683"><a name="en-us_topic_0182207110_p5492190683"></a><a name="en-us_topic_0182207110_p5492190683"></a>Capabilities to be deleted.</p>
    </td>
    </tr>
    </tbody>
    </table>


-   <a name="en-us_topic_0182207110_li1439643415372"></a>**Int64Value**

    The API is used to encapsulate data of the signed 64-bit integer type.

    <a name="en-us_topic_0182207110_table175763341468"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1157618341465"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p457610342062"><a name="en-us_topic_0182207110_p457610342062"></a><a name="en-us_topic_0182207110_p457610342062"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p185762341468"><a name="en-us_topic_0182207110_p185762341468"></a><a name="en-us_topic_0182207110_p185762341468"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row357619342066"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p15763341367"><a name="en-us_topic_0182207110_p15763341367"></a><a name="en-us_topic_0182207110_p15763341367"></a>int64 value</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p175761534163"><a name="en-us_topic_0182207110_p175761534163"></a><a name="en-us_topic_0182207110_p175761534163"></a>Actual value of the signed 64-bit integer type.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li1886455713453"></a>**UInt64Value**

    The API is used to encapsulate data of the unsigned 64-bit integer type.

    <a name="en-us_topic_0182207110_table1286495744514"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1486419572459"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p886515724519"><a name="en-us_topic_0182207110_p886515724519"></a><a name="en-us_topic_0182207110_p886515724519"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p11865155764517"><a name="en-us_topic_0182207110_p11865155764517"></a><a name="en-us_topic_0182207110_p11865155764517"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row10865185718453"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p8865145713455"><a name="en-us_topic_0182207110_p8865145713455"></a><a name="en-us_topic_0182207110_p8865145713455"></a>uint64 value</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1486535720450"><a name="en-us_topic_0182207110_p1486535720450"></a><a name="en-us_topic_0182207110_p1486535720450"></a>Actual value of the unsigned 64-bit integer type.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li20215550104713"></a>**LinuxSandboxSecurityContext**

    The API is used to configure the Linux security options of a sandbox.

    Note that these security options are not applied to containers in the sandbox, and may not be applied to the sandbox without any running process.

    <a name="en-us_topic_0182207110_table118794406714"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row4877204012718"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p28767401717"><a name="en-us_topic_0182207110_p28767401717"></a><a name="en-us_topic_0182207110_p28767401717"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p78769403714"><a name="en-us_topic_0182207110_p78769403714"></a><a name="en-us_topic_0182207110_p78769403714"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row118771840376"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p11877640872"><a name="en-us_topic_0182207110_p11877640872"></a><a name="en-us_topic_0182207110_p11877640872"></a><a href="#en-us_topic_0182207110_li1182444614213">NamespaceOption</a> namespace_options</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p13877740478"><a name="en-us_topic_0182207110_p13877740478"></a><a name="en-us_topic_0182207110_p13877740478"></a>Sandbox namespace options.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row98772404713"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p387710401719"><a name="en-us_topic_0182207110_p387710401719"></a><a name="en-us_topic_0182207110_p387710401719"></a><a href="#en-us_topic_0182207110_li816815620237">SELinuxOption</a> selinux_options</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p7877540971"><a name="en-us_topic_0182207110_p7877540971"></a><a name="en-us_topic_0182207110_p7877540971"></a>SELinux options. This parameter does not take effect now.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row7877240376"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p687715407712"><a name="en-us_topic_0182207110_p687715407712"></a><a name="en-us_topic_0182207110_p687715407712"></a><a href="#en-us_topic_0182207110_li1439643415372">Int64Value</a> run_as_user</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p188771240477"><a name="en-us_topic_0182207110_p188771240477"></a><a name="en-us_topic_0182207110_p188771240477"></a>Process UID in the sandbox.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1187704010713"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p5877440378"><a name="en-us_topic_0182207110_p5877440378"></a><a name="en-us_topic_0182207110_p5877440378"></a>bool readonly_rootfs</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p087784016717"><a name="en-us_topic_0182207110_p087784016717"></a><a name="en-us_topic_0182207110_p087784016717"></a>Whether the root file system of the sandbox is read-only.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row6878840272"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p4877194019716"><a name="en-us_topic_0182207110_p4877194019716"></a><a name="en-us_topic_0182207110_p4877194019716"></a>repeated int64 supplemental_groups</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1487715403711"><a name="en-us_topic_0182207110_p1487715403711"></a><a name="en-us_topic_0182207110_p1487715403711"></a>Information of the user group of the init process in the sandbox (except the primary GID).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row198781840073"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p138781401678"><a name="en-us_topic_0182207110_p138781401678"></a><a name="en-us_topic_0182207110_p138781401678"></a>bool privileged</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p48781440679"><a name="en-us_topic_0182207110_p48781440679"></a><a name="en-us_topic_0182207110_p48781440679"></a>Whether the sandbox is a privileged container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row11878104014717"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1387814405720"><a name="en-us_topic_0182207110_p1387814405720"></a><a name="en-us_topic_0182207110_p1387814405720"></a>string seccomp_profile_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p98781640778"><a name="en-us_topic_0182207110_p98781640778"></a><a name="en-us_topic_0182207110_p98781640778"></a>Path of the seccomp configuration file. Valid values are as follows:</p>
    <p id="en-us_topic_0182207110_p852815536173"><a name="en-us_topic_0182207110_p852815536173"></a><a name="en-us_topic_0182207110_p852815536173"></a><strong id="en-us_topic_0182207110_b16881149142619"><a name="en-us_topic_0182207110_b16881149142619"></a><a name="en-us_topic_0182207110_b16881149142619"></a>// unconfined</strong>: Seccomp is not configured.</p>
    <p id="en-us_topic_0182207110_p3202192819180"><a name="en-us_topic_0182207110_p3202192819180"></a><a name="en-us_topic_0182207110_p3202192819180"></a><strong id="en-us_topic_0182207110_b57141534152711"><a name="en-us_topic_0182207110_b57141534152711"></a><a name="en-us_topic_0182207110_b57141534152711"></a>// localhost/ </strong><em id="en-us_topic_0182207110_i1121723618277"><a name="en-us_topic_0182207110_i1121723618277"></a><a name="en-us_topic_0182207110_i1121723618277"></a>Full path of the configuration file</em>: configuration file path installed in the system.</p>
    <p id="en-us_topic_0182207110_p1782797191914"><a name="en-us_topic_0182207110_p1782797191914"></a><a name="en-us_topic_0182207110_p1782797191914"></a><strong id="en-us_topic_0182207110_b148041657163219"><a name="en-us_topic_0182207110_b148041657163219"></a><a name="en-us_topic_0182207110_b148041657163219"></a>// </strong><em id="en-us_topic_0182207110_i798535823210"><a name="en-us_topic_0182207110_i798535823210"></a><a name="en-us_topic_0182207110_i798535823210"></a>Full path of the configuration file</em>: full path of the configuration file.</p>
    <p id="en-us_topic_0182207110_p1961983781914"><a name="en-us_topic_0182207110_p1961983781914"></a><a name="en-us_topic_0182207110_p1961983781914"></a><strong id="en-us_topic_0182207110_b174761112346"><a name="en-us_topic_0182207110_b174761112346"></a><a name="en-us_topic_0182207110_b174761112346"></a>// unconfined</strong> is the default value.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li14801654104710"></a>**LinuxPodSandboxConfig**

    The API is used to configure information related to the Linux host and containers.

    <a name="en-us_topic_0182207110_table94761837172117"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row4476193722115"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p1847623722112"><a name="en-us_topic_0182207110_p1847623722112"></a><a name="en-us_topic_0182207110_p1847623722112"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p204761337192110"><a name="en-us_topic_0182207110_p204761337192110"></a><a name="en-us_topic_0182207110_p204761337192110"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row247603713217"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p147623720214"><a name="en-us_topic_0182207110_p147623720214"></a><a name="en-us_topic_0182207110_p147623720214"></a>string cgroup_parent</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p941145220242"><a name="en-us_topic_0182207110_p941145220242"></a><a name="en-us_topic_0182207110_p941145220242"></a>Parent path of the cgroup of the sandbox. The runtime can use the cgroupfs or systemd syntax based on site requirements. This parameter does not take effect now.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1647613752112"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1147613371218"><a name="en-us_topic_0182207110_p1147613371218"></a><a name="en-us_topic_0182207110_p1147613371218"></a><a href="#en-us_topic_0182207110_li20215550104713">LinuxSandboxSecurityContext</a>  security_context</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p54765378217"><a name="en-us_topic_0182207110_p54765378217"></a><a name="en-us_topic_0182207110_p54765378217"></a>Security attribute of the sandbox.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row10476637152114"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p3476113782112"><a name="en-us_topic_0182207110_p3476113782112"></a><a name="en-us_topic_0182207110_p3476113782112"></a>map&lt;string, string&gt; sysctls</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p5476163716217"><a name="en-us_topic_0182207110_p5476163716217"></a><a name="en-us_topic_0182207110_p5476163716217"></a>Linux sysctls configuration of the sandbox.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li2359918134912"></a>**PodSandboxMetadata**

    Sandbox metadata contains all information that constructs a sandbox name. It is recommended that the metadata be displayed on the user interface during container running to improve user experience. For example, a unique sandbox name can be generated based on the metadata during running.

    <a name="en-us_topic_0182207110_table2402163911295"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1040017392290"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p19400339132913"><a name="en-us_topic_0182207110_p19400339132913"></a><a name="en-us_topic_0182207110_p19400339132913"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1040013932916"><a name="en-us_topic_0182207110_p1040013932916"></a><a name="en-us_topic_0182207110_p1040013932916"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row164012392296"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1240016398298"><a name="en-us_topic_0182207110_p1240016398298"></a><a name="en-us_topic_0182207110_p1240016398298"></a>string name</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p184001139192918"><a name="en-us_topic_0182207110_p184001139192918"></a><a name="en-us_topic_0182207110_p184001139192918"></a>Sandbox name.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row16401739152913"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p164010395299"><a name="en-us_topic_0182207110_p164010395299"></a><a name="en-us_topic_0182207110_p164010395299"></a>string uid</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p18401183917297"><a name="en-us_topic_0182207110_p18401183917297"></a><a name="en-us_topic_0182207110_p18401183917297"></a>Sandbox UID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row5401143962911"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p7560134312404"><a name="en-us_topic_0182207110_p7560134312404"></a><a name="en-us_topic_0182207110_p7560134312404"></a>string namespace</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p104011339192911"><a name="en-us_topic_0182207110_p104011339192911"></a><a name="en-us_topic_0182207110_p104011339192911"></a>Sandbox namespace.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row16402739152910"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p386824574014"><a name="en-us_topic_0182207110_p386824574014"></a><a name="en-us_topic_0182207110_p386824574014"></a>uint32 attempt</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p811012444216"><a name="en-us_topic_0182207110_p811012444216"></a><a name="en-us_topic_0182207110_p811012444216"></a>Number of attempts to create a sandbox.</p>
    <p id="en-us_topic_0182207110_p382914359214"><a name="en-us_topic_0182207110_p382914359214"></a><a name="en-us_topic_0182207110_p382914359214"></a>Default value: <strong id="en-us_topic_0182207110_b144101563210"><a name="en-us_topic_0182207110_b144101563210"></a><a name="en-us_topic_0182207110_b144101563210"></a>0</strong></p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li253629701"></a>**PodSandboxConfig**

    This API is used to specify all mandatory and optional configurations for creating a sandbox.

    <a name="en-us_topic_0182207110_table195211549174312"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row95191149114319"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p195191949164311"><a name="en-us_topic_0182207110_p195191949164311"></a><a name="en-us_topic_0182207110_p195191949164311"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1051964913437"><a name="en-us_topic_0182207110_p1051964913437"></a><a name="en-us_topic_0182207110_p1051964913437"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row1052013496432"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p185209491435"><a name="en-us_topic_0182207110_p185209491435"></a><a name="en-us_topic_0182207110_p185209491435"></a><a href="#en-us_topic_0182207110_li2359918134912">PodSandboxMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p7520124913433"><a name="en-us_topic_0182207110_p7520124913433"></a><a name="en-us_topic_0182207110_p7520124913433"></a>Sandbox metadata, which uniquely identifies a sandbox. The runtime must use the information to ensure that operations are correctly performed, and to improve user experience, for example, construct a readable sandbox name.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row0520184910433"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1952054984318"><a name="en-us_topic_0182207110_p1952054984318"></a><a name="en-us_topic_0182207110_p1952054984318"></a>string hostname</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1852014490439"><a name="en-us_topic_0182207110_p1852014490439"></a><a name="en-us_topic_0182207110_p1852014490439"></a>Host name of the sandbox.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row752054964310"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p752084964310"><a name="en-us_topic_0182207110_p752084964310"></a><a name="en-us_topic_0182207110_p752084964310"></a>string log_directory</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p6520134915434"><a name="en-us_topic_0182207110_p6520134915434"></a><a name="en-us_topic_0182207110_p6520134915434"></a>Folder for storing container log files in the sandbox.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row5520134934312"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p18520204919431"><a name="en-us_topic_0182207110_p18520204919431"></a><a name="en-us_topic_0182207110_p18520204919431"></a><a href="#en-us_topic_0182207110_li1197211439388">DNSConfig</a> dns_config</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p452004954314"><a name="en-us_topic_0182207110_p452004954314"></a><a name="en-us_topic_0182207110_p452004954314"></a>Sandbox DNS configuration.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row175201049134319"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p952034984311"><a name="en-us_topic_0182207110_p952034984311"></a><a name="en-us_topic_0182207110_p952034984311"></a>repeated <a href="#en-us_topic_0182207110_li01684174215">PortMapping</a> port_mappings</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p252012494432"><a name="en-us_topic_0182207110_p252012494432"></a><a name="en-us_topic_0182207110_p252012494432"></a>Sandbox port mapping.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row6521134934310"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1452117499433"><a name="en-us_topic_0182207110_p1452117499433"></a><a name="en-us_topic_0182207110_p1452117499433"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p18521174913434"><a name="en-us_topic_0182207110_p18521174913434"></a><a name="en-us_topic_0182207110_p18521174913434"></a>Key-value pair that can be used to identify a sandbox or a series of sandboxes.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row19521114914313"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p752114919435"><a name="en-us_topic_0182207110_p752114919435"></a><a name="en-us_topic_0182207110_p752114919435"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p852174916439"><a name="en-us_topic_0182207110_p852174916439"></a><a name="en-us_topic_0182207110_p852174916439"></a>Key-value pair that stores any information, whose values cannot be changed and can be queried by using the <a href="#en-us_topic_0182207110_li146986172010">PodSandboxStatus</a> API.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row2521149164318"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p752114904318"><a name="en-us_topic_0182207110_p752114904318"></a><a name="en-us_topic_0182207110_p752114904318"></a><a href="#en-us_topic_0182207110_li14801654104710">LinuxPodSandboxConfig</a> linux</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1152154954319"><a name="en-us_topic_0182207110_p1152154954319"></a><a name="en-us_topic_0182207110_p1152154954319"></a>Options related to the Linux host.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li255017717184"></a>**PodSandboxNetworkStatus**

    The API is used to describe the network status of a sandbox.

    <a name="en-us_topic_0182207110_table72691154578"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1426817555712"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p11268195195715"><a name="en-us_topic_0182207110_p11268195195715"></a><a name="en-us_topic_0182207110_p11268195195715"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p62682585719"><a name="en-us_topic_0182207110_p62682585719"></a><a name="en-us_topic_0182207110_p62682585719"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row172681054577"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p2268115105719"><a name="en-us_topic_0182207110_p2268115105719"></a><a name="en-us_topic_0182207110_p2268115105719"></a>string ip</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1126875195713"><a name="en-us_topic_0182207110_p1126875195713"></a><a name="en-us_topic_0182207110_p1126875195713"></a>IP address of the sandbox.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row5269185155714"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p17269156575"><a name="en-us_topic_0182207110_p17269156575"></a><a name="en-us_topic_0182207110_p17269156575"></a>string name</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p42699510571"><a name="en-us_topic_0182207110_p42699510571"></a><a name="en-us_topic_0182207110_p42699510571"></a>Network interface name in the sandbox.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row42691252575"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p9269135185718"><a name="en-us_topic_0182207110_p9269135185718"></a><a name="en-us_topic_0182207110_p9269135185718"></a>string network</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p162698595711"><a name="en-us_topic_0182207110_p162698595711"></a><a name="en-us_topic_0182207110_p162698595711"></a>Name of the additional network.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li523062951815"></a>**Namespace**

    The API is used to set namespace options.

    <a name="en-us_topic_0182207110_table783614348156"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row13836123418153"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p13836113410152"><a name="en-us_topic_0182207110_p13836113410152"></a><a name="en-us_topic_0182207110_p13836113410152"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p13836163451516"><a name="en-us_topic_0182207110_p13836163451516"></a><a name="en-us_topic_0182207110_p13836163451516"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row1483683416157"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p14679164516152"><a name="en-us_topic_0182207110_p14679164516152"></a><a name="en-us_topic_0182207110_p14679164516152"></a><a href="#en-us_topic_0182207110_li1182444614213">NamespaceOption</a> options</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p3837113415154"><a name="en-us_topic_0182207110_p3837113415154"></a><a name="en-us_topic_0182207110_p3837113415154"></a>Linux namespace options.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li313112151212"></a>**LinuxPodSandboxStatus**

    The API is used to describe the status of a Linux sandbox.

    <a name="en-us_topic_0182207110_table1111815411176"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row15118124111716"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p4118164113179"><a name="en-us_topic_0182207110_p4118164113179"></a><a name="en-us_topic_0182207110_p4118164113179"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p911817418178"><a name="en-us_topic_0182207110_p911817418178"></a><a name="en-us_topic_0182207110_p911817418178"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row2118164191718"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p311814114176"><a name="en-us_topic_0182207110_p311814114176"></a><a name="en-us_topic_0182207110_p311814114176"></a><a href="#en-us_topic_0182207110_li523062951815">Namespace</a> <strong id="en-us_topic_0182207110_b24393464172"><a name="en-us_topic_0182207110_b24393464172"></a><a name="en-us_topic_0182207110_b24393464172"></a>namespaces</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p6118541201717"><a name="en-us_topic_0182207110_p6118541201717"></a><a name="en-us_topic_0182207110_p6118541201717"></a>Sandbox namespace.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li1818214574195"></a>**PodSandboxState**

    The API is used to specify enum data of the sandbox status values.

    <a name="en-us_topic_0182207110_table143182491816"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row843262417180"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p94326242187"><a name="en-us_topic_0182207110_p94326242187"></a><a name="en-us_topic_0182207110_p94326242187"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1643202481814"><a name="en-us_topic_0182207110_p1643202481814"></a><a name="en-us_topic_0182207110_p1643202481814"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row943216241182"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p19432724181818"><a name="en-us_topic_0182207110_p19432724181818"></a><a name="en-us_topic_0182207110_p19432724181818"></a>SANDBOX_READY = 0</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p114321124161816"><a name="en-us_topic_0182207110_p114321124161816"></a><a name="en-us_topic_0182207110_p114321124161816"></a>The sandbox is ready.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row8935427161820"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p10935102791811"><a name="en-us_topic_0182207110_p10935102791811"></a><a name="en-us_topic_0182207110_p10935102791811"></a>SANDBOX_NOTREADY = 1</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p193562716181"><a name="en-us_topic_0182207110_p193562716181"></a><a name="en-us_topic_0182207110_p193562716181"></a>The sandbox is not ready.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li146986172010"></a>**PodSandboxStatus**

    The API is used to describe the PodSandbox status.

    <a name="en-us_topic_0182207110_table12524184514196"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row18525154581911"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p20525645171911"><a name="en-us_topic_0182207110_p20525645171911"></a><a name="en-us_topic_0182207110_p20525645171911"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p195251445151920"><a name="en-us_topic_0182207110_p195251445151920"></a><a name="en-us_topic_0182207110_p195251445151920"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row155258458192"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p65251145201918"><a name="en-us_topic_0182207110_p65251145201918"></a><a name="en-us_topic_0182207110_p65251145201918"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p9525164513192"><a name="en-us_topic_0182207110_p9525164513192"></a><a name="en-us_topic_0182207110_p9525164513192"></a>Sandbox ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row452574510197"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p115251145131915"><a name="en-us_topic_0182207110_p115251145131915"></a><a name="en-us_topic_0182207110_p115251145131915"></a><a href="#en-us_topic_0182207110_li2359918134912">PodSandboxMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p75251945191918"><a name="en-us_topic_0182207110_p75251945191918"></a><a name="en-us_topic_0182207110_p75251945191918"></a>Sandbox metadata.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row6525345181911"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p252644571912"><a name="en-us_topic_0182207110_p252644571912"></a><a name="en-us_topic_0182207110_p252644571912"></a><a href="#en-us_topic_0182207110_li1818214574195">PodSandboxState</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p65261445151910"><a name="en-us_topic_0182207110_p65261445151910"></a><a name="en-us_topic_0182207110_p65261445151910"></a>Sandbox status value.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row20526045171913"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p15526114515197"><a name="en-us_topic_0182207110_p15526114515197"></a><a name="en-us_topic_0182207110_p15526114515197"></a>int64 created_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p14526245171915"><a name="en-us_topic_0182207110_p14526245171915"></a><a name="en-us_topic_0182207110_p14526245171915"></a>Sandbox creation timestamp (unit: ns).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row17526845121911"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p145261945131915"><a name="en-us_topic_0182207110_p145261945131915"></a><a name="en-us_topic_0182207110_p145261945131915"></a>repeated <a href="#en-us_topic_0182207110_li255017717184">PodSandboxNetworkStatus</a> networks</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1152644581913"><a name="en-us_topic_0182207110_p1152644581913"></a><a name="en-us_topic_0182207110_p1152644581913"></a>Multi-plane network status of the sandbox.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row252694511192"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1452634521914"><a name="en-us_topic_0182207110_p1452634521914"></a><a name="en-us_topic_0182207110_p1452634521914"></a><a href="#en-us_topic_0182207110_li313112151212">LinuxPodSandboxStatus</a> linux</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1752604513197"><a name="en-us_topic_0182207110_p1752604513197"></a><a name="en-us_topic_0182207110_p1752604513197"></a>Sandbox status complying with the Linux specifications.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1652664513193"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1252610459190"><a name="en-us_topic_0182207110_p1252610459190"></a><a name="en-us_topic_0182207110_p1252610459190"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p13526745131918"><a name="en-us_topic_0182207110_p13526745131918"></a><a name="en-us_topic_0182207110_p13526745131918"></a>Key-value pair that can be used to identify a sandbox or a series of sandboxes.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1252694512196"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p195271145191917"><a name="en-us_topic_0182207110_p195271145191917"></a><a name="en-us_topic_0182207110_p195271145191917"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p14527745191914"><a name="en-us_topic_0182207110_p14527745191914"></a><a name="en-us_topic_0182207110_p14527745191914"></a>Key-value pair that stores any information, whose values cannot be changed by the runtime.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li64922552019"></a>**PodSandboxStateValue**

    The API is used to encapsulate  [PodSandboxState](#en-us_topic_0182207110_li1818214574195).

    <a name="en-us_topic_0182207110_table1991019610274"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1191014692714"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p09102612717"><a name="en-us_topic_0182207110_p09102612717"></a><a name="en-us_topic_0182207110_p09102612717"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1191011682712"><a name="en-us_topic_0182207110_p1191011682712"></a><a name="en-us_topic_0182207110_p1191011682712"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row159111666276"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p791112632711"><a name="en-us_topic_0182207110_p791112632711"></a><a name="en-us_topic_0182207110_p791112632711"></a><a href="#en-us_topic_0182207110_li1818214574195">PodSandboxState</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p12911166162713"><a name="en-us_topic_0182207110_p12911166162713"></a><a name="en-us_topic_0182207110_p12911166162713"></a>Sandbox status value.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **PodSandboxFilter**

    The API is used to add filter criteria for the sandbox list. The intersection of multiple filter criteria is displayed.

    <a name="en-us_topic_0182207110_table1467451192814"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1167145122810"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p1167105116289"><a name="en-us_topic_0182207110_p1167105116289"></a><a name="en-us_topic_0182207110_p1167105116289"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p367115115287"><a name="en-us_topic_0182207110_p367115115287"></a><a name="en-us_topic_0182207110_p367115115287"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row1267165119287"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p46818511285"><a name="en-us_topic_0182207110_p46818511285"></a><a name="en-us_topic_0182207110_p46818511285"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p106835113282"><a name="en-us_topic_0182207110_p106835113282"></a><a name="en-us_topic_0182207110_p106835113282"></a>Sandbox ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row136845192810"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p16813516283"><a name="en-us_topic_0182207110_p16813516283"></a><a name="en-us_topic_0182207110_p16813516283"></a><a href="#en-us_topic_0182207110_li64922552019">PodSandboxStateValue</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1168751132815"><a name="en-us_topic_0182207110_p1168751132815"></a><a name="en-us_topic_0182207110_p1168751132815"></a>Sandbox status.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row768105115289"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p468175112814"><a name="en-us_topic_0182207110_p468175112814"></a><a name="en-us_topic_0182207110_p468175112814"></a>map&lt;string, string&gt; label_selector</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p968115114284"><a name="en-us_topic_0182207110_p968115114284"></a><a name="en-us_topic_0182207110_p968115114284"></a>Sandbox label, which does not support regular expressions and must be fully matched.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **PodSandbox**

    This API is used to provide a minimum description of a sandbox. 

    <a name="en-us_topic_0182207110_table6180935203216"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row17177173543219"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p191773352328"><a name="en-us_topic_0182207110_p191773352328"></a><a name="en-us_topic_0182207110_p191773352328"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p11177163514329"><a name="en-us_topic_0182207110_p11177163514329"></a><a name="en-us_topic_0182207110_p11177163514329"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row1817873543211"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p01774355326"><a name="en-us_topic_0182207110_p01774355326"></a><a name="en-us_topic_0182207110_p01774355326"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p9178123543213"><a name="en-us_topic_0182207110_p9178123543213"></a><a name="en-us_topic_0182207110_p9178123543213"></a>Sandbox ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row11782353322"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1217883523217"><a name="en-us_topic_0182207110_p1217883523217"></a><a name="en-us_topic_0182207110_p1217883523217"></a><a href="#en-us_topic_0182207110_li2359918134912">PodSandboxMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p4178235143211"><a name="en-us_topic_0182207110_p4178235143211"></a><a name="en-us_topic_0182207110_p4178235143211"></a>Sandbox metadata.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row151781835133214"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p13178153533219"><a name="en-us_topic_0182207110_p13178153533219"></a><a name="en-us_topic_0182207110_p13178153533219"></a><a href="#en-us_topic_0182207110_li1818214574195">PodSandboxState</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p17178183583211"><a name="en-us_topic_0182207110_p17178183583211"></a><a name="en-us_topic_0182207110_p17178183583211"></a>Sandbox status value.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1179143523213"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p2017893543215"><a name="en-us_topic_0182207110_p2017893543215"></a><a name="en-us_topic_0182207110_p2017893543215"></a>int64 created_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1117810355326"><a name="en-us_topic_0182207110_p1117810355326"></a><a name="en-us_topic_0182207110_p1117810355326"></a>Sandbox creation timestamp (unit: ns).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row4180183533219"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p15179183543219"><a name="en-us_topic_0182207110_p15179183543219"></a><a name="en-us_topic_0182207110_p15179183543219"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p101796358325"><a name="en-us_topic_0182207110_p101796358325"></a><a name="en-us_topic_0182207110_p101796358325"></a>Key-value pair that can be used to identify a sandbox or a series of sandboxes.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1818063515320"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p20180143512324"><a name="en-us_topic_0182207110_p20180143512324"></a><a name="en-us_topic_0182207110_p20180143512324"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p11180103543219"><a name="en-us_topic_0182207110_p11180103543219"></a><a name="en-us_topic_0182207110_p11180103543219"></a>Key-value pair that stores any information, whose values cannot be changed by the runtime.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li11598132815225"></a>**KeyValue**

    The API is used to encapsulate key-value pairs.

    <a name="en-us_topic_0182207110_table062733315339"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row136281333113315"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p10628173318339"><a name="en-us_topic_0182207110_p10628173318339"></a><a name="en-us_topic_0182207110_p10628173318339"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1562811331332"><a name="en-us_topic_0182207110_p1562811331332"></a><a name="en-us_topic_0182207110_p1562811331332"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row12628153353311"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p14766942153319"><a name="en-us_topic_0182207110_p14766942153319"></a><a name="en-us_topic_0182207110_p14766942153319"></a>string key</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p9629733163311"><a name="en-us_topic_0182207110_p9629733163311"></a><a name="en-us_topic_0182207110_p9629733163311"></a>Key</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row6629533163311"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p156291633153319"><a name="en-us_topic_0182207110_p156291633153319"></a><a name="en-us_topic_0182207110_p156291633153319"></a>string value</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p56291333113311"><a name="en-us_topic_0182207110_p56291333113311"></a><a name="en-us_topic_0182207110_p56291333113311"></a>Value</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li816815620237"></a>**SELinuxOption**

    The API is used to specify the SELinux label of a container.

    <a name="en-us_topic_0182207110_table275114812514"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row18751148155112"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p1775113816517"><a name="en-us_topic_0182207110_p1775113816517"></a><a name="en-us_topic_0182207110_p1775113816517"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1175215815114"><a name="en-us_topic_0182207110_p1175215815114"></a><a name="en-us_topic_0182207110_p1175215815114"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row117521812514"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p2752178195111"><a name="en-us_topic_0182207110_p2752178195111"></a><a name="en-us_topic_0182207110_p2752178195111"></a>string user</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p775288145117"><a name="en-us_topic_0182207110_p775288145117"></a><a name="en-us_topic_0182207110_p775288145117"></a>User</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1775214818512"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p57524815514"><a name="en-us_topic_0182207110_p57524815514"></a><a name="en-us_topic_0182207110_p57524815514"></a>string role</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p975216895119"><a name="en-us_topic_0182207110_p975216895119"></a><a name="en-us_topic_0182207110_p975216895119"></a>Role</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row9445413125116"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p644521385118"><a name="en-us_topic_0182207110_p644521385118"></a><a name="en-us_topic_0182207110_p644521385118"></a>string type</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1445713125113"><a name="en-us_topic_0182207110_p1445713125113"></a><a name="en-us_topic_0182207110_p1445713125113"></a>Type</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row9753198165114"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1175368205113"><a name="en-us_topic_0182207110_p1175368205113"></a><a name="en-us_topic_0182207110_p1175368205113"></a>string level</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1475320875112"><a name="en-us_topic_0182207110_p1475320875112"></a><a name="en-us_topic_0182207110_p1475320875112"></a>Level</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li17135914132319"></a>**ContainerMetadata**

    Container metadata contains all information that constructs a container name. It is recommended that the metadata be displayed on the user interface during container running to improve user experience. For example, a unique container name can be generated based on the metadata during running.

    <a name="en-us_topic_0182207110_table18487181915536"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row348741935315"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p748891945320"><a name="en-us_topic_0182207110_p748891945320"></a><a name="en-us_topic_0182207110_p748891945320"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p948811191538"><a name="en-us_topic_0182207110_p948811191538"></a><a name="en-us_topic_0182207110_p948811191538"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row64884193535"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p4488181917535"><a name="en-us_topic_0182207110_p4488181917535"></a><a name="en-us_topic_0182207110_p4488181917535"></a>string name</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p14881419185315"><a name="en-us_topic_0182207110_p14881419185315"></a><a name="en-us_topic_0182207110_p14881419185315"></a>Container name.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row3489121965312"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1848921975315"><a name="en-us_topic_0182207110_p1848921975315"></a><a name="en-us_topic_0182207110_p1848921975315"></a>uint32 attempt</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1216885555710"><a name="en-us_topic_0182207110_p1216885555710"></a><a name="en-us_topic_0182207110_p1216885555710"></a>Number of attempts to create a container.</p>
    <p id="en-us_topic_0182207110_p1048991916534"><a name="en-us_topic_0182207110_p1048991916534"></a><a name="en-us_topic_0182207110_p1048991916534"></a>Default value: <strong id="en-us_topic_0182207110_b6933310105712"><a name="en-us_topic_0182207110_b6933310105712"></a><a name="en-us_topic_0182207110_b6933310105712"></a>0</strong></p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li65182518309"></a>**ContainerState**

    The API is used to specify enums of container status values.

    <a name="en-us_topic_0182207110_table14224058145512"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row2224958205510"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p19224758185512"><a name="en-us_topic_0182207110_p19224758185512"></a><a name="en-us_topic_0182207110_p19224758185512"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p132251658145511"><a name="en-us_topic_0182207110_p132251658145511"></a><a name="en-us_topic_0182207110_p132251658145511"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row18225155815516"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1922525825513"><a name="en-us_topic_0182207110_p1922525825513"></a><a name="en-us_topic_0182207110_p1922525825513"></a>CONTAINER_CREATED = 0</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p19225115818550"><a name="en-us_topic_0182207110_p19225115818550"></a><a name="en-us_topic_0182207110_p19225115818550"></a>The container is created.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row152257316563"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p12251436565"><a name="en-us_topic_0182207110_p12251436565"></a><a name="en-us_topic_0182207110_p12251436565"></a>CONTAINER_RUNNING = 1</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p4225132564"><a name="en-us_topic_0182207110_p4225132564"></a><a name="en-us_topic_0182207110_p4225132564"></a>The container is running.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1622595813559"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p931041915618"><a name="en-us_topic_0182207110_p931041915618"></a><a name="en-us_topic_0182207110_p931041915618"></a>CONTAINER_EXITED  = 2</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p19225658165519"><a name="en-us_topic_0182207110_p19225658165519"></a><a name="en-us_topic_0182207110_p19225658165519"></a>The container exits.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row140581185618"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p194051110564"><a name="en-us_topic_0182207110_p194051110564"></a><a name="en-us_topic_0182207110_p194051110564"></a>CONTAINER_UNKNOWN = 3</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p292175415566"><a name="en-us_topic_0182207110_p292175415566"></a><a name="en-us_topic_0182207110_p292175415566"></a>Unknown container status.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerStateValue**

    The API is used to encapsulate the data structure of  [ContainerState](#en-us_topic_0182207110_li65182518309).

    <a name="en-us_topic_0182207110_table172301505712"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row16723141511578"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p972313157577"><a name="en-us_topic_0182207110_p972313157577"></a><a name="en-us_topic_0182207110_p972313157577"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1872471513575"><a name="en-us_topic_0182207110_p1872471513575"></a><a name="en-us_topic_0182207110_p1872471513575"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row2724815185714"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p18106131065816"><a name="en-us_topic_0182207110_p18106131065816"></a><a name="en-us_topic_0182207110_p18106131065816"></a><a href="#en-us_topic_0182207110_li65182518309">ContainerState</a> <strong id="en-us_topic_0182207110_b91061910165817"><a name="en-us_topic_0182207110_b91061910165817"></a><a name="en-us_topic_0182207110_b91061910165817"></a>state</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p13138131010581"><a name="en-us_topic_0182207110_p13138131010581"></a><a name="en-us_topic_0182207110_p13138131010581"></a>Container status value.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerFilter**

    The API is used to add filter criteria for the container list. The intersection of multiple filter criteria is displayed.

    <a name="en-us_topic_0182207110_table3194164015588"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row4194164075811"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p20194124011584"><a name="en-us_topic_0182207110_p20194124011584"></a><a name="en-us_topic_0182207110_p20194124011584"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p019413405586"><a name="en-us_topic_0182207110_p019413405586"></a><a name="en-us_topic_0182207110_p019413405586"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row1319454019588"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p019417404583"><a name="en-us_topic_0182207110_p019417404583"></a><a name="en-us_topic_0182207110_p019417404583"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p5195640205811"><a name="en-us_topic_0182207110_p5195640205811"></a><a name="en-us_topic_0182207110_p5195640205811"></a>Container ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row18195194010585"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p3195184017584"><a name="en-us_topic_0182207110_p3195184017584"></a><a name="en-us_topic_0182207110_p3195184017584"></a><a href="#en-us_topic_0182207110_li64922552019">PodSandboxStateValue</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p7195144015818"><a name="en-us_topic_0182207110_p7195144015818"></a><a name="en-us_topic_0182207110_p7195144015818"></a>Container status.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row8512141175912"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p651311113597"><a name="en-us_topic_0182207110_p651311113597"></a><a name="en-us_topic_0182207110_p651311113597"></a>string pod_sandbox_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1951317155912"><a name="en-us_topic_0182207110_p1951317155912"></a><a name="en-us_topic_0182207110_p1951317155912"></a>Sandbox ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1319574075817"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1319515403587"><a name="en-us_topic_0182207110_p1319515403587"></a><a name="en-us_topic_0182207110_p1319515403587"></a>map&lt;string, string&gt; label_selector</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p121951440165812"><a name="en-us_topic_0182207110_p121951440165812"></a><a name="en-us_topic_0182207110_p121951440165812"></a>Container label, which does not support regular expressions and must be fully matched.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li11771452124416"></a>**LinuxContainerSecurityContext**

    The API is used to specify container security configurations.

    <a name="en-us_topic_0182207110_table175381035174712"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row1653773511471"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p1153793544711"><a name="en-us_topic_0182207110_p1153793544711"></a><a name="en-us_topic_0182207110_p1153793544711"></a><strong id="en-us_topic_0182207110_b0850744111715"><a name="en-us_topic_0182207110_b0850744111715"></a><a name="en-us_topic_0182207110_b0850744111715"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p5537143514714"><a name="en-us_topic_0182207110_p5537143514714"></a><a name="en-us_topic_0182207110_p5537143514714"></a><strong id="en-us_topic_0182207110_b61401347101714"><a name="en-us_topic_0182207110_b61401347101714"></a><a name="en-us_topic_0182207110_b61401347101714"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row5537635134710"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p17269132255120"><a name="en-us_topic_0182207110_p17269132255120"></a><a name="en-us_topic_0182207110_p17269132255120"></a><a href="#en-us_topic_0182207110_li115631277434">Capability</a> capabilities</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p4537103564714"><a name="en-us_topic_0182207110_p4537103564714"></a><a name="en-us_topic_0182207110_p4537103564714"></a>Added or removed capabilities.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1853733544712"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p119971728145118"><a name="en-us_topic_0182207110_p119971728145118"></a><a name="en-us_topic_0182207110_p119971728145118"></a>bool privileged</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p195379357474"><a name="en-us_topic_0182207110_p195379357474"></a><a name="en-us_topic_0182207110_p195379357474"></a>Whether the container is in privileged mode. Default value: <strong id="en-us_topic_0182207110_b16351976719"><a name="en-us_topic_0182207110_b16351976719"></a><a name="en-us_topic_0182207110_b16351976719"></a>false</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row185376357476"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p1025913245117"><a name="en-us_topic_0182207110_p1025913245117"></a><a name="en-us_topic_0182207110_p1025913245117"></a><a href="#en-us_topic_0182207110_li1182444614213">NamespaceOption</a> namespace_options</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p15537193518478"><a name="en-us_topic_0182207110_p15537193518478"></a><a name="en-us_topic_0182207110_p15537193518478"></a>Container namespace options.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row05381935174712"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p17388143513517"><a name="en-us_topic_0182207110_p17388143513517"></a><a name="en-us_topic_0182207110_p17388143513517"></a><a href="#en-us_topic_0182207110_li816815620237">SELinuxOption</a> selinux_options</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p353715357473"><a name="en-us_topic_0182207110_p353715357473"></a><a name="en-us_topic_0182207110_p353715357473"></a>SELinux context, which is optional. This parameter does not take effect now.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row95385354470"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p8920153855110"><a name="en-us_topic_0182207110_p8920153855110"></a><a name="en-us_topic_0182207110_p8920153855110"></a><a href="#en-us_topic_0182207110_li1439643415372">Int64Value</a> run_as_user</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p5538143524710"><a name="en-us_topic_0182207110_p5538143524710"></a><a name="en-us_topic_0182207110_p5538143524710"></a>UID for running container processes. Only <strong id="en-us_topic_0182207110_b43001135797"><a name="en-us_topic_0182207110_b43001135797"></a><a name="en-us_topic_0182207110_b43001135797"></a>run_as_user</strong> or <strong id="en-us_topic_0182207110_b12268342997"><a name="en-us_topic_0182207110_b12268342997"></a><a name="en-us_topic_0182207110_b12268342997"></a>run_as_username</strong> can be specified at a time. <strong id="en-us_topic_0182207110_b19189144712910"><a name="en-us_topic_0182207110_b19189144712910"></a><a name="en-us_topic_0182207110_b19189144712910"></a>run_as_username</strong> takes effect preferentially.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row25380353477"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p1324534214513"><a name="en-us_topic_0182207110_p1324534214513"></a><a name="en-us_topic_0182207110_p1324534214513"></a>string run_as_username</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p6538103544717"><a name="en-us_topic_0182207110_p6538103544717"></a><a name="en-us_topic_0182207110_p6538103544717"></a>Username for running container processes. If specified, the user must exist in <strong id="en-us_topic_0182207110_b6398217181717"><a name="en-us_topic_0182207110_b6398217181717"></a><a name="en-us_topic_0182207110_b6398217181717"></a>/etc/passwd</strong> in the container image and be parsed by the runtime. Otherwise, an error must occur during running.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1253813574713"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p38591046115115"><a name="en-us_topic_0182207110_p38591046115115"></a><a name="en-us_topic_0182207110_p38591046115115"></a>bool readonly_rootfs</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p0538153574710"><a name="en-us_topic_0182207110_p0538153574710"></a><a name="en-us_topic_0182207110_p0538153574710"></a>Whether the root file system in a container is read-only. The default value is configured in <strong id="en-us_topic_0182207110_b15496116131910"><a name="en-us_topic_0182207110_b15496116131910"></a><a name="en-us_topic_0182207110_b15496116131910"></a>config.json</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row8747204114509"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p15850184915113"><a name="en-us_topic_0182207110_p15850184915113"></a><a name="en-us_topic_0182207110_p15850184915113"></a>repeated int64 supplemental_groups</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p167481141165017"><a name="en-us_topic_0182207110_p167481141165017"></a><a name="en-us_topic_0182207110_p167481141165017"></a>List of user groups of the init process running in the container (except the primary GID).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row3219184415011"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p294616528514"><a name="en-us_topic_0182207110_p294616528514"></a><a name="en-us_topic_0182207110_p294616528514"></a>string apparmor_profile</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p1321912443503"><a name="en-us_topic_0182207110_p1321912443503"></a><a name="en-us_topic_0182207110_p1321912443503"></a>AppArmor configuration file of the container. This parameter does not take effect now.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1778183818507"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p8562455115120"><a name="en-us_topic_0182207110_p8562455115120"></a><a name="en-us_topic_0182207110_p8562455115120"></a>string seccomp_profile_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p27816386507"><a name="en-us_topic_0182207110_p27816386507"></a><a name="en-us_topic_0182207110_p27816386507"></a>Path of the seccomp configuration file of the container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row146010129517"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p17383115825110"><a name="en-us_topic_0182207110_p17383115825110"></a><a name="en-us_topic_0182207110_p17383115825110"></a>bool no_new_privs</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p166191210517"><a name="en-us_topic_0182207110_p166191210517"></a><a name="en-us_topic_0182207110_p166191210517"></a>Whether to set the no_new_privs flag in the container.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li2050214613477"></a>**LinuxContainerResources**

    The API is used to specify configurations of Linux container resources.

    <a name="en-us_topic_0182207110_table1774515315492"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row1774623104910"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p1474653124914"><a name="en-us_topic_0182207110_p1474653124914"></a><a name="en-us_topic_0182207110_p1474653124914"></a><strong id="en-us_topic_0182207110_b4223758101712"><a name="en-us_topic_0182207110_b4223758101712"></a><a name="en-us_topic_0182207110_b4223758101712"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p4746183124920"><a name="en-us_topic_0182207110_p4746183124920"></a><a name="en-us_topic_0182207110_p4746183124920"></a><strong id="en-us_topic_0182207110_b565719017188"><a name="en-us_topic_0182207110_b565719017188"></a><a name="en-us_topic_0182207110_b565719017188"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row174653112494"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p7746103120496"><a name="en-us_topic_0182207110_p7746103120496"></a><a name="en-us_topic_0182207110_p7746103120496"></a>int64 cpu_period</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p9746113114911"><a name="en-us_topic_0182207110_p9746113114911"></a><a name="en-us_topic_0182207110_p9746113114911"></a>CPU CFS period. Default value: <strong id="en-us_topic_0182207110_b1023661972813"><a name="en-us_topic_0182207110_b1023661972813"></a><a name="en-us_topic_0182207110_b1023661972813"></a>0</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row474673164917"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p14746143134912"><a name="en-us_topic_0182207110_p14746143134912"></a><a name="en-us_topic_0182207110_p14746143134912"></a>int64 cpu_quota</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p17746931104919"><a name="en-us_topic_0182207110_p17746931104919"></a><a name="en-us_topic_0182207110_p17746931104919"></a>CPU CFS quota. Default value: <strong id="en-us_topic_0182207110_b946132812287"><a name="en-us_topic_0182207110_b946132812287"></a><a name="en-us_topic_0182207110_b946132812287"></a>0</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row9746103124914"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p17746131164912"><a name="en-us_topic_0182207110_p17746131164912"></a><a name="en-us_topic_0182207110_p17746131164912"></a>int64 cpu_shares</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p5746103111491"><a name="en-us_topic_0182207110_p5746103111491"></a><a name="en-us_topic_0182207110_p5746103111491"></a>CPU share (relative weight). Default value: <strong id="en-us_topic_0182207110_b8668163662814"><a name="en-us_topic_0182207110_b8668163662814"></a><a name="en-us_topic_0182207110_b8668163662814"></a>0</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row47463316492"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p5746183117499"><a name="en-us_topic_0182207110_p5746183117499"></a><a name="en-us_topic_0182207110_p5746183117499"></a>int64 memory_limit_in_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p17746731114919"><a name="en-us_topic_0182207110_p17746731114919"></a><a name="en-us_topic_0182207110_p17746731114919"></a>Memory limit (unit: byte). Default value: <strong id="en-us_topic_0182207110_b1456319432288"><a name="en-us_topic_0182207110_b1456319432288"></a><a name="en-us_topic_0182207110_b1456319432288"></a>0</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row117463319495"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p1374723114913"><a name="en-us_topic_0182207110_p1374723114913"></a><a name="en-us_topic_0182207110_p1374723114913"></a>int64 oom_score_adj</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p11747731134911"><a name="en-us_topic_0182207110_p11747731134911"></a><a name="en-us_topic_0182207110_p11747731134911"></a>OOMScoreAdj that is used to adjust the OOM killer. Default value: <strong id="en-us_topic_0182207110_b1151413499285"><a name="en-us_topic_0182207110_b1151413499285"></a><a name="en-us_topic_0182207110_b1151413499285"></a>0</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row2747153115491"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p1174793116499"><a name="en-us_topic_0182207110_p1174793116499"></a><a name="en-us_topic_0182207110_p1174793116499"></a>string cpuset_cpus</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p15747133111495"><a name="en-us_topic_0182207110_p15747133111495"></a><a name="en-us_topic_0182207110_p15747133111495"></a>CPU core used by the container. Default value: null</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row474713316497"><td class="cellrowborder" valign="top" width="39.410000000000004%"><p id="en-us_topic_0182207110_p1474783184919"><a name="en-us_topic_0182207110_p1474783184919"></a><a name="en-us_topic_0182207110_p1474783184919"></a>string cpuset_mems</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.589999999999996%"><p id="en-us_topic_0182207110_p6747331134912"><a name="en-us_topic_0182207110_p6747331134912"></a><a name="en-us_topic_0182207110_p6747331134912"></a>Memory nodes used by the container. Default value: null</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li597891416252"></a>**Image**

    The API is used to describe the basic information about an image.

    <a name="en-us_topic_0182207110_table17664516102"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row87661351121014"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0182207110_p1429813131216"><a name="en-us_topic_0182207110_p1429813131216"></a><a name="en-us_topic_0182207110_p1429813131216"></a><strong id="en-us_topic_0182207110_b14870181115185"><a name="en-us_topic_0182207110_b14870181115185"></a><a name="en-us_topic_0182207110_b14870181115185"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0182207110_p87661251111019"><a name="en-us_topic_0182207110_p87661251111019"></a><a name="en-us_topic_0182207110_p87661251111019"></a><strong id="en-us_topic_0182207110_b1214051413185"><a name="en-us_topic_0182207110_b1214051413185"></a><a name="en-us_topic_0182207110_b1214051413185"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row10766351101016"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0182207110_p127661551121010"><a name="en-us_topic_0182207110_p127661551121010"></a><a name="en-us_topic_0182207110_p127661551121010"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0182207110_p576745119102"><a name="en-us_topic_0182207110_p576745119102"></a><a name="en-us_topic_0182207110_p576745119102"></a>Image ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row65303296131"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0182207110_p6531112941317"><a name="en-us_topic_0182207110_p6531112941317"></a><a name="en-us_topic_0182207110_p6531112941317"></a>repeated string repo_tags</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0182207110_p13172183421411"><a name="en-us_topic_0182207110_p13172183421411"></a><a name="en-us_topic_0182207110_p13172183421411"></a>Image tag name <strong id="en-us_topic_0182207110_b10366150173010"><a name="en-us_topic_0182207110_b10366150173010"></a><a name="en-us_topic_0182207110_b10366150173010"></a>repo_tags</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row13356165612132"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0182207110_p9356135671310"><a name="en-us_topic_0182207110_p9356135671310"></a><a name="en-us_topic_0182207110_p9356135671310"></a>repeated string repo_digests</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0182207110_p15357185619138"><a name="en-us_topic_0182207110_p15357185619138"></a><a name="en-us_topic_0182207110_p15357185619138"></a>Image digest information.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row119913618153"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0182207110_p5991360151"><a name="en-us_topic_0182207110_p5991360151"></a><a name="en-us_topic_0182207110_p5991360151"></a>uint64 size</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0182207110_p89912068158"><a name="en-us_topic_0182207110_p89912068158"></a><a name="en-us_topic_0182207110_p89912068158"></a>Image size.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row19825183114156"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0182207110_p6825331191518"><a name="en-us_topic_0182207110_p6825331191518"></a><a name="en-us_topic_0182207110_p6825331191518"></a><a href="#en-us_topic_0182207110_li1439643415372">Int64Value</a> uid</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0182207110_p12825143181515"><a name="en-us_topic_0182207110_p12825143181515"></a><a name="en-us_topic_0182207110_p12825143181515"></a>Default image UID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row84999114169"><td class="cellrowborder" valign="top" width="39.54%"><p id="en-us_topic_0182207110_p104996115169"><a name="en-us_topic_0182207110_p104996115169"></a><a name="en-us_topic_0182207110_p104996115169"></a>string username</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.46%"><p id="en-us_topic_0182207110_p1249951191619"><a name="en-us_topic_0182207110_p1249951191619"></a><a name="en-us_topic_0182207110_p1249951191619"></a>Default image username.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ImageSpec**

    The API is used to represent the internal data structure of an image. Currently, ImageSpec encapsulates only the container image name.

    <a name="en-us_topic_0182207110_table312519561623"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row18125195617212"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p11257567212"><a name="en-us_topic_0182207110_p11257567212"></a><a name="en-us_topic_0182207110_p11257567212"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p712510568216"><a name="en-us_topic_0182207110_p712510568216"></a><a name="en-us_topic_0182207110_p712510568216"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row412515561825"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1712575615213"><a name="en-us_topic_0182207110_p1712575615213"></a><a name="en-us_topic_0182207110_p1712575615213"></a>string image</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p8125956526"><a name="en-us_topic_0182207110_p8125956526"></a><a name="en-us_topic_0182207110_p8125956526"></a>Container image name.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li3285401546"></a>**StorageIdentifier**

    The API is used to specify the unique identifier for defining the storage.

    <a name="en-us_topic_0182207110_table22818405417"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row22819405420"><th class="cellrowborder" valign="top" width="40.52%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p18283400411"><a name="en-us_topic_0182207110_p18283400411"></a><a name="en-us_topic_0182207110_p18283400411"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.48%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p8281140541"><a name="en-us_topic_0182207110_p8281140541"></a><a name="en-us_topic_0182207110_p8281140541"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row12817404411"><td class="cellrowborder" valign="top" width="40.52%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p942172311510"><a name="en-us_topic_0182207110_p942172311510"></a><a name="en-us_topic_0182207110_p942172311510"></a>string uuid</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.48%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p62920401145"><a name="en-us_topic_0182207110_p62920401145"></a><a name="en-us_topic_0182207110_p62920401145"></a>Device UUID.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **FilesystemUsage**

    <a name="en-us_topic_0182207110_table168635217318"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row486218218314"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p3862192117316"><a name="en-us_topic_0182207110_p3862192117316"></a><a name="en-us_topic_0182207110_p3862192117316"></a><strong id="en-us_topic_0182207110_b15749426141818"><a name="en-us_topic_0182207110_b15749426141818"></a><a name="en-us_topic_0182207110_b15749426141818"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p208627215314"><a name="en-us_topic_0182207110_p208627215314"></a><a name="en-us_topic_0182207110_p208627215314"></a><strong id="en-us_topic_0182207110_b987816282187"><a name="en-us_topic_0182207110_b987816282187"></a><a name="en-us_topic_0182207110_b987816282187"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1386220217318"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p18862192111312"><a name="en-us_topic_0182207110_p18862192111312"></a><a name="en-us_topic_0182207110_p18862192111312"></a>int64 timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p108622211933"><a name="en-us_topic_0182207110_p108622211933"></a><a name="en-us_topic_0182207110_p108622211933"></a>Timestamp when file system information is collected.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row486220211535"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p108628211934"><a name="en-us_topic_0182207110_p108628211934"></a><a name="en-us_topic_0182207110_p108628211934"></a><a href="#en-us_topic_0182207110_li3285401546">StorageIdentifier</a> storage_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p1862142116311"><a name="en-us_topic_0182207110_p1862142116311"></a><a name="en-us_topic_0182207110_p1862142116311"></a>UUID of the file system that stores images.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row986320211835"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p108631721737"><a name="en-us_topic_0182207110_p108631721737"></a><a name="en-us_topic_0182207110_p108631721737"></a><a href="#en-us_topic_0182207110_li1886455713453">UInt64Value</a> used_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p1086342118315"><a name="en-us_topic_0182207110_p1086342118315"></a><a name="en-us_topic_0182207110_p1086342118315"></a>Size of the metadata that stores images.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row48635211838"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p5863202112317"><a name="en-us_topic_0182207110_p5863202112317"></a><a name="en-us_topic_0182207110_p5863202112317"></a><a href="#en-us_topic_0182207110_li1886455713453">UInt64Value</a> inodes_used</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p1486312210314"><a name="en-us_topic_0182207110_p1486312210314"></a><a name="en-us_topic_0182207110_p1486312210314"></a>Number of inodes of the metadata that stores images.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **AuthConfig**

    <a name="en-us_topic_0182207110_table51991144738"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row419944410312"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p1519964418314"><a name="en-us_topic_0182207110_p1519964418314"></a><a name="en-us_topic_0182207110_p1519964418314"></a><strong id="en-us_topic_0182207110_b146630375182"><a name="en-us_topic_0182207110_b146630375182"></a><a name="en-us_topic_0182207110_b146630375182"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p1319910447317"><a name="en-us_topic_0182207110_p1319910447317"></a><a name="en-us_topic_0182207110_p1319910447317"></a><strong id="en-us_topic_0182207110_b1320110408185"><a name="en-us_topic_0182207110_b1320110408185"></a><a name="en-us_topic_0182207110_b1320110408185"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row819918441338"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p1199174414319"><a name="en-us_topic_0182207110_p1199174414319"></a><a name="en-us_topic_0182207110_p1199174414319"></a>string username</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p16199194419310"><a name="en-us_topic_0182207110_p16199194419310"></a><a name="en-us_topic_0182207110_p16199194419310"></a>Username used for downloading images.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row01991844833"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p1119910441131"><a name="en-us_topic_0182207110_p1119910441131"></a><a name="en-us_topic_0182207110_p1119910441131"></a>string password</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p141998442310"><a name="en-us_topic_0182207110_p141998442310"></a><a name="en-us_topic_0182207110_p141998442310"></a>Password used for downloading images.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row21992441835"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p20199544734"><a name="en-us_topic_0182207110_p20199544734"></a><a name="en-us_topic_0182207110_p20199544734"></a>string auth</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p219917441631"><a name="en-us_topic_0182207110_p219917441631"></a><a name="en-us_topic_0182207110_p219917441631"></a>Authentication information used for downloading images. The value is encoded by using Base64.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row161994442311"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p1019917448312"><a name="en-us_topic_0182207110_p1019917448312"></a><a name="en-us_topic_0182207110_p1019917448312"></a>string server_address</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p1219915441319"><a name="en-us_topic_0182207110_p1219915441319"></a><a name="en-us_topic_0182207110_p1219915441319"></a>IP address of the server where images are downloaded. This parameter does not take effect now.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row141995442310"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p5199944834"><a name="en-us_topic_0182207110_p5199944834"></a><a name="en-us_topic_0182207110_p5199944834"></a>string identity_token</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p7199134414318"><a name="en-us_topic_0182207110_p7199134414318"></a><a name="en-us_topic_0182207110_p7199134414318"></a>Information about the token used for the registry authentication. This parameter does not take effect now.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row11199174420317"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p5199174410316"><a name="en-us_topic_0182207110_p5199174410316"></a><a name="en-us_topic_0182207110_p5199174410316"></a>string registry_token</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p2199104418310"><a name="en-us_topic_0182207110_p2199104418310"></a><a name="en-us_topic_0182207110_p2199104418310"></a>Information about the token used for the interaction with the registry. This parameter does not take effect now.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **Container**

    The API is used to describe container information, such as the ID and status.

    <a name="en-us_topic_0182207110_table1254610481413"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row195471481217"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p115477481918"><a name="en-us_topic_0182207110_p115477481918"></a><a name="en-us_topic_0182207110_p115477481918"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p105473484113"><a name="en-us_topic_0182207110_p105473484113"></a><a name="en-us_topic_0182207110_p105473484113"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row165478486115"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p155477488113"><a name="en-us_topic_0182207110_p155477488113"></a><a name="en-us_topic_0182207110_p155477488113"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p254714819115"><a name="en-us_topic_0182207110_p254714819115"></a><a name="en-us_topic_0182207110_p254714819115"></a>Container ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row17650117434"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p46500717319"><a name="en-us_topic_0182207110_p46500717319"></a><a name="en-us_topic_0182207110_p46500717319"></a>string pod_sandbox_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p36501771037"><a name="en-us_topic_0182207110_p36501771037"></a><a name="en-us_topic_0182207110_p36501771037"></a>ID of the sandbox to which the container belongs.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row35471348816"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p8547144813114"><a name="en-us_topic_0182207110_p8547144813114"></a><a name="en-us_topic_0182207110_p8547144813114"></a><a href="#en-us_topic_0182207110_li17135914132319">ContainerMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p85471948314"><a name="en-us_topic_0182207110_p85471948314"></a><a name="en-us_topic_0182207110_p85471948314"></a>Container metadata.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row0547204818111"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p125479482116"><a name="en-us_topic_0182207110_p125479482116"></a><a name="en-us_topic_0182207110_p125479482116"></a><a href="#en-us_topic_0182207110_li597891416252">ImageSpec</a> image</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1454794816115"><a name="en-us_topic_0182207110_p1454794816115"></a><a name="en-us_topic_0182207110_p1454794816115"></a>Image specifications.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row254754815111"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p185477486110"><a name="en-us_topic_0182207110_p185477486110"></a><a name="en-us_topic_0182207110_p185477486110"></a>string image_ref</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p17548648315"><a name="en-us_topic_0182207110_p17548648315"></a><a name="en-us_topic_0182207110_p17548648315"></a>Image used by the container. This parameter is an image ID for most runtime.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1354819481814"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p4734152614413"><a name="en-us_topic_0182207110_p4734152614413"></a><a name="en-us_topic_0182207110_p4734152614413"></a><a href="#en-us_topic_0182207110_li65182518309">ContainerState</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p454844819113"><a name="en-us_topic_0182207110_p454844819113"></a><a name="en-us_topic_0182207110_p454844819113"></a>Container status.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row7548548710"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p165483486112"><a name="en-us_topic_0182207110_p165483486112"></a><a name="en-us_topic_0182207110_p165483486112"></a>int64 created_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1754819488120"><a name="en-us_topic_0182207110_p1754819488120"></a><a name="en-us_topic_0182207110_p1754819488120"></a>Container creation timestamp (unit: ns).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row854854811116"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p45483483115"><a name="en-us_topic_0182207110_p45483483115"></a><a name="en-us_topic_0182207110_p45483483115"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p45482048819"><a name="en-us_topic_0182207110_p45482048819"></a><a name="en-us_topic_0182207110_p45482048819"></a>Key-value pair that can be used to identify a container or a series of containers.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row25481481218"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p15548248314"><a name="en-us_topic_0182207110_p15548248314"></a><a name="en-us_topic_0182207110_p15548248314"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p16549448617"><a name="en-us_topic_0182207110_p16549448617"></a><a name="en-us_topic_0182207110_p16549448617"></a>Key-value pair that stores any information, whose values cannot be changed by the runtime.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerStatus**

    The API is used to describe the container status information.

    <a name="en-us_topic_0182207110_table6354237760"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row535593712618"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p16355237468"><a name="en-us_topic_0182207110_p16355237468"></a><a name="en-us_topic_0182207110_p16355237468"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p7355183711613"><a name="en-us_topic_0182207110_p7355183711613"></a><a name="en-us_topic_0182207110_p7355183711613"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row113555379617"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p123556374611"><a name="en-us_topic_0182207110_p123556374611"></a><a name="en-us_topic_0182207110_p123556374611"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p7355123718615"><a name="en-us_topic_0182207110_p7355123718615"></a><a name="en-us_topic_0182207110_p7355123718615"></a>Container ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row143558371367"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p3355123712618"><a name="en-us_topic_0182207110_p3355123712618"></a><a name="en-us_topic_0182207110_p3355123712618"></a><a href="#en-us_topic_0182207110_li17135914132319">ContainerMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p63552379614"><a name="en-us_topic_0182207110_p63552379614"></a><a name="en-us_topic_0182207110_p63552379614"></a>Container metadata.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row18356193715616"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p635613719614"><a name="en-us_topic_0182207110_p635613719614"></a><a name="en-us_topic_0182207110_p635613719614"></a><a href="#en-us_topic_0182207110_li65182518309">ContainerState</a> state</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p33564378616"><a name="en-us_topic_0182207110_p33564378616"></a><a name="en-us_topic_0182207110_p33564378616"></a>Container status.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row183561237469"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p23569378616"><a name="en-us_topic_0182207110_p23569378616"></a><a name="en-us_topic_0182207110_p23569378616"></a>int64 created_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p113562378617"><a name="en-us_topic_0182207110_p113562378617"></a><a name="en-us_topic_0182207110_p113562378617"></a>Container creation timestamp (unit: ns).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row351411324713"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p55142321472"><a name="en-us_topic_0182207110_p55142321472"></a><a name="en-us_topic_0182207110_p55142321472"></a>int64 started_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p151453217720"><a name="en-us_topic_0182207110_p151453217720"></a><a name="en-us_topic_0182207110_p151453217720"></a>Container start timestamp (unit: ns).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row13333183511712"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1033311355719"><a name="en-us_topic_0182207110_p1033311355719"></a><a name="en-us_topic_0182207110_p1033311355719"></a>int64 finished_at</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p633310356713"><a name="en-us_topic_0182207110_p633310356713"></a><a name="en-us_topic_0182207110_p633310356713"></a>Container exit timestamp (unit: ns).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row847917471875"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1847974717715"><a name="en-us_topic_0182207110_p1847974717715"></a><a name="en-us_topic_0182207110_p1847974717715"></a>int32 exit_code</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p17479047871"><a name="en-us_topic_0182207110_p17479047871"></a><a name="en-us_topic_0182207110_p17479047871"></a>Container exit code.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row15383151081"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1161122215912"><a name="en-us_topic_0182207110_p1161122215912"></a><a name="en-us_topic_0182207110_p1161122215912"></a><a href="#en-us_topic_0182207110_li597891416252">ImageSpec</a> image</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p66114223910"><a name="en-us_topic_0182207110_p66114223910"></a><a name="en-us_topic_0182207110_p66114223910"></a>Image specifications.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row15491758876"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p24981230093"><a name="en-us_topic_0182207110_p24981230093"></a><a name="en-us_topic_0182207110_p24981230093"></a>string image_ref</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p104987301290"><a name="en-us_topic_0182207110_p104987301290"></a><a name="en-us_topic_0182207110_p104987301290"></a>Image used by the container. This parameter is an image ID for most runtime.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row998013531174"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p39801533710"><a name="en-us_topic_0182207110_p39801533710"></a><a name="en-us_topic_0182207110_p39801533710"></a>string reason</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1098012531671"><a name="en-us_topic_0182207110_p1098012531671"></a><a name="en-us_topic_0182207110_p1098012531671"></a>Brief description of the reason why the container is in the current status.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row6438205212719"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p164381252671"><a name="en-us_topic_0182207110_p164381252671"></a><a name="en-us_topic_0182207110_p164381252671"></a>string message</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p8438155214711"><a name="en-us_topic_0182207110_p8438155214711"></a><a name="en-us_topic_0182207110_p8438155214711"></a>Information that is easy to read and indicates the reason why the container is in the current status.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1135715371362"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1835718378617"><a name="en-us_topic_0182207110_p1835718378617"></a><a name="en-us_topic_0182207110_p1835718378617"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1935703714616"><a name="en-us_topic_0182207110_p1935703714616"></a><a name="en-us_topic_0182207110_p1935703714616"></a>Key-value pair that can be used to identify a container or a series of containers.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row33571037065"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p16357113712616"><a name="en-us_topic_0182207110_p16357113712616"></a><a name="en-us_topic_0182207110_p16357113712616"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p73573371661"><a name="en-us_topic_0182207110_p73573371661"></a><a name="en-us_topic_0182207110_p73573371661"></a>Key-value pair that stores any information, whose values cannot be changed by the runtime.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row265513491393"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1465520491098"><a name="en-us_topic_0182207110_p1465520491098"></a><a name="en-us_topic_0182207110_p1465520491098"></a>repeated <a href="#en-us_topic_0182207110_li6779341144216">Mount</a> mounts</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p26551449198"><a name="en-us_topic_0182207110_p26551449198"></a><a name="en-us_topic_0182207110_p26551449198"></a>Information about the container mount point.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row88661051795"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p78663511298"><a name="en-us_topic_0182207110_p78663511298"></a><a name="en-us_topic_0182207110_p78663511298"></a>string log_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p786614516915"><a name="en-us_topic_0182207110_p786614516915"></a><a name="en-us_topic_0182207110_p786614516915"></a>Path of the container log file that is in the <strong id="en-us_topic_0182207110_b15998549184819"><a name="en-us_topic_0182207110_b15998549184819"></a><a name="en-us_topic_0182207110_b15998549184819"></a>log_directory</strong> folder configured in <a href="#en-us_topic_0182207110_li253629701">PodSandboxConfig</a>.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerStatsFilter**

    The API is used to add filter criteria for the container stats list. The intersection of multiple filter criteria is displayed.

    <a name="en-us_topic_0182207110_table78595160148"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1860171616141"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p188605168143"><a name="en-us_topic_0182207110_p188605168143"></a><a name="en-us_topic_0182207110_p188605168143"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p78601916161416"><a name="en-us_topic_0182207110_p78601916161416"></a><a name="en-us_topic_0182207110_p78601916161416"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row486021618140"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p38609162146"><a name="en-us_topic_0182207110_p38609162146"></a><a name="en-us_topic_0182207110_p38609162146"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p5860171621418"><a name="en-us_topic_0182207110_p5860171621418"></a><a name="en-us_topic_0182207110_p5860171621418"></a>Container ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row18611316111416"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p586191610143"><a name="en-us_topic_0182207110_p586191610143"></a><a name="en-us_topic_0182207110_p586191610143"></a>string pod_sandbox_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p18861171641420"><a name="en-us_topic_0182207110_p18861171641420"></a><a name="en-us_topic_0182207110_p18861171641420"></a>Sandbox ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1786381671416"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p138631016171414"><a name="en-us_topic_0182207110_p138631016171414"></a><a name="en-us_topic_0182207110_p138631016171414"></a>map&lt;string, string&gt; label_selector</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p5863181641417"><a name="en-us_topic_0182207110_p5863181641417"></a><a name="en-us_topic_0182207110_p5863181641417"></a>Container label, which does not support regular expressions and must be fully matched.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerStats**

    The API is used to add filter criteria for the container stats list. The intersection of multiple filter criteria is displayed.

    <a name="en-us_topic_0182207110_table4568155110218"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row55685519212"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p18569195152112"><a name="en-us_topic_0182207110_p18569195152112"></a><a name="en-us_topic_0182207110_p18569195152112"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p165695517211"><a name="en-us_topic_0182207110_p165695517211"></a><a name="en-us_topic_0182207110_p165695517211"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row65691151172118"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p056915162116"><a name="en-us_topic_0182207110_p056915162116"></a><a name="en-us_topic_0182207110_p056915162116"></a><a href="#en-us_topic_0182207110_li6207185712312">ContainerAttributes</a> attributes</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p7569851172114"><a name="en-us_topic_0182207110_p7569851172114"></a><a name="en-us_topic_0182207110_p7569851172114"></a>Container information.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row19569851182110"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1456916511218"><a name="en-us_topic_0182207110_p1456916511218"></a><a name="en-us_topic_0182207110_p1456916511218"></a><a href="#en-us_topic_0182207110_li1367131122711">CpuUsage</a> cpu</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p55691751102116"><a name="en-us_topic_0182207110_p55691751102116"></a><a name="en-us_topic_0182207110_p55691751102116"></a>CPU usage information.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row135693514213"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p15569151172116"><a name="en-us_topic_0182207110_p15569151172116"></a><a name="en-us_topic_0182207110_p15569151172116"></a><a href="#en-us_topic_0182207110_li81221520111718">MemoryUsage</a> memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p20569125122113"><a name="en-us_topic_0182207110_p20569125122113"></a><a name="en-us_topic_0182207110_p20569125122113"></a>Memory usage information.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row65759374221"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p145767370228"><a name="en-us_topic_0182207110_p145767370228"></a><a name="en-us_topic_0182207110_p145767370228"></a><a href="#en-us_topic_0182207110_li1606183118189">FilesystemUsage</a> writable_layer</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p0576203717227"><a name="en-us_topic_0182207110_p0576203717227"></a><a name="en-us_topic_0182207110_p0576203717227"></a>Information about the writable layer usage.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li6207185712312"></a>**ContainerAttributes**

    The API is used to list basic container information.

    <a name="en-us_topic_0182207110_table7208185713230"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row16208857162316"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p19208135716238"><a name="en-us_topic_0182207110_p19208135716238"></a><a name="en-us_topic_0182207110_p19208135716238"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1020875792313"><a name="en-us_topic_0182207110_p1020875792313"></a><a name="en-us_topic_0182207110_p1020875792313"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row22084577234"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p920855711232"><a name="en-us_topic_0182207110_p920855711232"></a><a name="en-us_topic_0182207110_p920855711232"></a>string id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p18208457112319"><a name="en-us_topic_0182207110_p18208457112319"></a><a name="en-us_topic_0182207110_p18208457112319"></a>Container ID.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row102081057142317"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1520835712310"><a name="en-us_topic_0182207110_p1520835712310"></a><a name="en-us_topic_0182207110_p1520835712310"></a><a href="#en-us_topic_0182207110_li17135914132319">ContainerMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p13209357162311"><a name="en-us_topic_0182207110_p13209357162311"></a><a name="en-us_topic_0182207110_p13209357162311"></a>Container metadata.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row10209165713237"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p2874155122512"><a name="en-us_topic_0182207110_p2874155122512"></a><a name="en-us_topic_0182207110_p2874155122512"></a>map&lt;string,string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p13209145712233"><a name="en-us_topic_0182207110_p13209145712233"></a><a name="en-us_topic_0182207110_p13209145712233"></a>Key-value pair that can be used to identify a container or a series of containers.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row120919574235"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p420955742310"><a name="en-us_topic_0182207110_p420955742310"></a><a name="en-us_topic_0182207110_p420955742310"></a>map&lt;string,string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p11210165782314"><a name="en-us_topic_0182207110_p11210165782314"></a><a name="en-us_topic_0182207110_p11210165782314"></a>Key-value pair that stores any information, whose values cannot be changed by the runtime.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li1367131122711"></a>**CpuUsage**

    The API is used to list the CPU usage information of a container.

    <a name="en-us_topic_0182207110_table103679116272"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row113674110278"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p13681416276"><a name="en-us_topic_0182207110_p13681416276"></a><a name="en-us_topic_0182207110_p13681416276"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p1736861142719"><a name="en-us_topic_0182207110_p1736861142719"></a><a name="en-us_topic_0182207110_p1736861142719"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row193687118272"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p96863242710"><a name="en-us_topic_0182207110_p96863242710"></a><a name="en-us_topic_0182207110_p96863242710"></a>int64 timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p17368412273"><a name="en-us_topic_0182207110_p17368412273"></a><a name="en-us_topic_0182207110_p17368412273"></a>Timestamp.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row123686112271"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p2635942132713"><a name="en-us_topic_0182207110_p2635942132713"></a><a name="en-us_topic_0182207110_p2635942132713"></a>UInt64Value usage_core_nano_seconds</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p103680172713"><a name="en-us_topic_0182207110_p103680172713"></a><a name="en-us_topic_0182207110_p103680172713"></a>CPU usage (unit: ns).</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li81221520111718"></a>**MemoryUsage**

    The API is used to list the memory usage information of a container.

    <a name="en-us_topic_0182207110_table81231820141716"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row1012332021712"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p11233203174"><a name="en-us_topic_0182207110_p11233203174"></a><a name="en-us_topic_0182207110_p11233203174"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p81231920111718"><a name="en-us_topic_0182207110_p81231920111718"></a><a name="en-us_topic_0182207110_p81231920111718"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row1012362017178"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1612318202170"><a name="en-us_topic_0182207110_p1612318202170"></a><a name="en-us_topic_0182207110_p1612318202170"></a>int64 timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p3124192071710"><a name="en-us_topic_0182207110_p3124192071710"></a><a name="en-us_topic_0182207110_p3124192071710"></a>Timestamp.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1312442021716"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p1712412071712"><a name="en-us_topic_0182207110_p1712412071712"></a><a name="en-us_topic_0182207110_p1712412071712"></a>UInt64Value working_set_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p11241209172"><a name="en-us_topic_0182207110_p11241209172"></a><a name="en-us_topic_0182207110_p11241209172"></a>Memory usage.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li1606183118189"></a>**FilesystemUsage**

    The API is used to list the read/write layer information of a container.

    <a name="en-us_topic_0182207110_table166071315186"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207110_row196071731201813"><th class="cellrowborder" valign="top" width="40.43%" id="mcps1.1.3.1.1"><p id="en-us_topic_0182207110_p13607163114183"><a name="en-us_topic_0182207110_p13607163114183"></a><a name="en-us_topic_0182207110_p13607163114183"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.57%" id="mcps1.1.3.1.2"><p id="en-us_topic_0182207110_p16608103181811"><a name="en-us_topic_0182207110_p16608103181811"></a><a name="en-us_topic_0182207110_p16608103181811"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207110_row3608731151813"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p360803151817"><a name="en-us_topic_0182207110_p360803151817"></a><a name="en-us_topic_0182207110_p360803151817"></a>int64 timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p1860973118188"><a name="en-us_topic_0182207110_p1860973118188"></a><a name="en-us_topic_0182207110_p1860973118188"></a>Timestamp.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row106094314181"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p17609113181811"><a name="en-us_topic_0182207110_p17609113181811"></a><a name="en-us_topic_0182207110_p17609113181811"></a>StorageIdentifier storage_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p16609231151818"><a name="en-us_topic_0182207110_p16609231151818"></a><a name="en-us_topic_0182207110_p16609231151818"></a>Writable layer directory.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row368116322190"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p968113281915"><a name="en-us_topic_0182207110_p968113281915"></a><a name="en-us_topic_0182207110_p968113281915"></a>UInt64Value used_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p2681193221911"><a name="en-us_topic_0182207110_p2681193221911"></a><a name="en-us_topic_0182207110_p2681193221911"></a>Number of bytes occupied by images at the writable layer.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row29601026152012"><td class="cellrowborder" valign="top" width="40.43%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0182207110_p896002618203"><a name="en-us_topic_0182207110_p896002618203"></a><a name="en-us_topic_0182207110_p896002618203"></a>UInt64Value inodes_used</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.57%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0182207110_p17960122616208"><a name="en-us_topic_0182207110_p17960122616208"></a><a name="en-us_topic_0182207110_p17960122616208"></a>Number of inodes occupied by images at the writable layer.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li19916726173311"></a>**Device**

    The API is used to specify the host volume to be mounted to a container.

    <a name="en-us_topic_0182207110_table178013246294"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row0807249290"><td class="cellrowborder" valign="top" width="40.61%"><p id="en-us_topic_0182207110_p15804244293"><a name="en-us_topic_0182207110_p15804244293"></a><a name="en-us_topic_0182207110_p15804244293"></a><strong id="en-us_topic_0182207110_b1146135891815"><a name="en-us_topic_0182207110_b1146135891815"></a><a name="en-us_topic_0182207110_b1146135891815"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="59.39%"><p id="en-us_topic_0182207110_p14801324132915"><a name="en-us_topic_0182207110_p14801324132915"></a><a name="en-us_topic_0182207110_p14801324132915"></a><strong id="en-us_topic_0182207110_b1148517011195"><a name="en-us_topic_0182207110_b1148517011195"></a><a name="en-us_topic_0182207110_b1148517011195"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row98002422914"><td class="cellrowborder" valign="top" width="40.61%"><p id="en-us_topic_0182207110_p28062414297"><a name="en-us_topic_0182207110_p28062414297"></a><a name="en-us_topic_0182207110_p28062414297"></a>string container_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.39%"><p id="en-us_topic_0182207110_p188019244297"><a name="en-us_topic_0182207110_p188019244297"></a><a name="en-us_topic_0182207110_p188019244297"></a>Mounting path of a container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row48042417299"><td class="cellrowborder" valign="top" width="40.61%"><p id="en-us_topic_0182207110_p88082412293"><a name="en-us_topic_0182207110_p88082412293"></a><a name="en-us_topic_0182207110_p88082412293"></a>string host_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.39%"><p id="en-us_topic_0182207110_p118062420297"><a name="en-us_topic_0182207110_p118062420297"></a><a name="en-us_topic_0182207110_p118062420297"></a>Mounting path on the host.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row3801624162913"><td class="cellrowborder" valign="top" width="40.61%"><p id="en-us_topic_0182207110_p51611220303"><a name="en-us_topic_0182207110_p51611220303"></a><a name="en-us_topic_0182207110_p51611220303"></a>string permissions</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.39%"><p id="en-us_topic_0182207110_p10801124132918"><a name="en-us_topic_0182207110_p10801124132918"></a><a name="en-us_topic_0182207110_p10801124132918"></a>Cgroup permission of a device. (<strong id="en-us_topic_0182207110_b7271122919465"><a name="en-us_topic_0182207110_b7271122919465"></a><a name="en-us_topic_0182207110_b7271122919465"></a>r</strong> indicates that containers can be read from a specified device. <strong id="en-us_topic_0182207110_b184093334619"><a name="en-us_topic_0182207110_b184093334619"></a><a name="en-us_topic_0182207110_b184093334619"></a>w</strong> indicates that containers can be written to a specified device. <strong id="en-us_topic_0182207110_b84081535144615"><a name="en-us_topic_0182207110_b84081535144615"></a><a name="en-us_topic_0182207110_b84081535144615"></a>m</strong> indicates that containers can create new device files.)</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li13021147134718"></a>**LinuxContainerConfig**

    The API is used to specify Linux configurations.

    <a name="en-us_topic_0182207110_table483195210322"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row383195216323"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p58335233213"><a name="en-us_topic_0182207110_p58335233213"></a><a name="en-us_topic_0182207110_p58335233213"></a><strong id="en-us_topic_0182207110_b121413710191"><a name="en-us_topic_0182207110_b121413710191"></a><a name="en-us_topic_0182207110_b121413710191"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p13831852193219"><a name="en-us_topic_0182207110_p13831852193219"></a><a name="en-us_topic_0182207110_p13831852193219"></a><strong id="en-us_topic_0182207110_b133739119198"><a name="en-us_topic_0182207110_b133739119198"></a><a name="en-us_topic_0182207110_b133739119198"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row98355283211"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p199781557193510"><a name="en-us_topic_0182207110_p199781557193510"></a><a name="en-us_topic_0182207110_p199781557193510"></a><a href="#en-us_topic_0182207110_li2050214613477">LinuxContainerResources</a> resources</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p11994153633617"><a name="en-us_topic_0182207110_p11994153633617"></a><a name="en-us_topic_0182207110_p11994153633617"></a>Container resource specifications.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1283115217326"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p47151393618"><a name="en-us_topic_0182207110_p47151393618"></a><a name="en-us_topic_0182207110_p47151393618"></a><a href="#en-us_topic_0182207110_li11771452124416">LinuxContainerSecurityContext</a> security_context</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p1841152153213"><a name="en-us_topic_0182207110_p1841152153213"></a><a name="en-us_topic_0182207110_p1841152153213"></a>Linux container security configuration.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **ContainerConfig**

    The API is used to specify all mandatory and optional fields for creating a container.

    <a name="en-us_topic_0182207110_table75744214217"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row35748215420"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p1957472104212"><a name="en-us_topic_0182207110_p1957472104212"></a><a name="en-us_topic_0182207110_p1957472104212"></a><strong id="en-us_topic_0182207110_b1675242117198"><a name="en-us_topic_0182207110_b1675242117198"></a><a name="en-us_topic_0182207110_b1675242117198"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p1657416234216"><a name="en-us_topic_0182207110_p1657416234216"></a><a name="en-us_topic_0182207110_p1657416234216"></a><strong id="en-us_topic_0182207110_b177911519141915"><a name="en-us_topic_0182207110_b177911519141915"></a><a name="en-us_topic_0182207110_b177911519141915"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row17575122124214"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p10388113084414"><a name="en-us_topic_0182207110_p10388113084414"></a><a name="en-us_topic_0182207110_p10388113084414"></a><a href="#en-us_topic_0182207110_li17135914132319">ContainerMetadata</a> metadata</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p16489112274513"><a name="en-us_topic_0182207110_p16489112274513"></a><a name="en-us_topic_0182207110_p16489112274513"></a>Container metadata. The information will uniquely identify a container and should be used at runtime to ensure correct operations. The information can also be used at runtime to optimize the user experience (UX) design, for example, construct a readable name. This parameter is mandatory.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row165752274211"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p20397114134715"><a name="en-us_topic_0182207110_p20397114134715"></a><a name="en-us_topic_0182207110_p20397114134715"></a><a href="#en-us_topic_0182207110_li597891416252">ImageSpec</a> image</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p125751227425"><a name="en-us_topic_0182207110_p125751227425"></a><a name="en-us_topic_0182207110_p125751227425"></a>Image used by the container. This parameter is mandatory.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1757512104211"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p1093425315472"><a name="en-us_topic_0182207110_p1093425315472"></a><a name="en-us_topic_0182207110_p1093425315472"></a>repeated string command</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p14575520422"><a name="en-us_topic_0182207110_p14575520422"></a><a name="en-us_topic_0182207110_p14575520422"></a>Command to be executed. Default value: <strong id="en-us_topic_0182207110_b3515921161115"><a name="en-us_topic_0182207110_b3515921161115"></a><a name="en-us_topic_0182207110_b3515921161115"></a>/bin/sh</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row15631191674812"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p16494161225018"><a name="en-us_topic_0182207110_p16494161225018"></a><a name="en-us_topic_0182207110_p16494161225018"></a>repeated string args</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p1463191694820"><a name="en-us_topic_0182207110_p1463191694820"></a><a name="en-us_topic_0182207110_p1463191694820"></a>Parameters of the command to be executed.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row15929104004811"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p12334191811500"><a name="en-us_topic_0182207110_p12334191811500"></a><a name="en-us_topic_0182207110_p12334191811500"></a>string working_dir</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p159291240184818"><a name="en-us_topic_0182207110_p159291240184818"></a><a name="en-us_topic_0182207110_p159291240184818"></a>Current working path of the command.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1640142916501"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p74711043155012"><a name="en-us_topic_0182207110_p74711043155012"></a><a name="en-us_topic_0182207110_p74711043155012"></a>repeated <a href="#en-us_topic_0182207110_li11598132815225">KeyValue</a> envs</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p124019291504"><a name="en-us_topic_0182207110_p124019291504"></a><a name="en-us_topic_0182207110_p124019291504"></a>Environment variables configured in the container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row34224312518"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p19539458155110"><a name="en-us_topic_0182207110_p19539458155110"></a><a name="en-us_topic_0182207110_p19539458155110"></a>repeated <a href="#en-us_topic_0182207110_li6779341144216">Mount</a> mounts</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p34221531165114"><a name="en-us_topic_0182207110_p34221531165114"></a><a name="en-us_topic_0182207110_p34221531165114"></a>Information about the mount point to be mounted in the container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1936219479538"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p19801913115411"><a name="en-us_topic_0182207110_p19801913115411"></a><a name="en-us_topic_0182207110_p19801913115411"></a>repeated <a href="#en-us_topic_0182207110_li19916726173311">Device</a> devices</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p15362184717536"><a name="en-us_topic_0182207110_p15362184717536"></a><a name="en-us_topic_0182207110_p15362184717536"></a>Information about the device to be mapped in the container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1057365011549"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p918318587541"><a name="en-us_topic_0182207110_p918318587541"></a><a name="en-us_topic_0182207110_p918318587541"></a>map&lt;string, string&gt; labels</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p5574650165416"><a name="en-us_topic_0182207110_p5574650165416"></a><a name="en-us_topic_0182207110_p5574650165416"></a>Key-value pair that can be used to index and select a resource.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row717416214597"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p533396594"><a name="en-us_topic_0182207110_p533396594"></a><a name="en-us_topic_0182207110_p533396594"></a>map&lt;string, string&gt; annotations</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p1174102118599"><a name="en-us_topic_0182207110_p1174102118599"></a><a name="en-us_topic_0182207110_p1174102118599"></a>Unstructured key-value mappings that can be used to store and retrieve any metadata.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1673103817211"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p472415446214"><a name="en-us_topic_0182207110_p472415446214"></a><a name="en-us_topic_0182207110_p472415446214"></a>string log_path</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p192920136313"><a name="en-us_topic_0182207110_p192920136313"></a><a name="en-us_topic_0182207110_p192920136313"></a>Relative path to <strong id="en-us_topic_0182207110_b1765184218249"><a name="en-us_topic_0182207110_b1765184218249"></a><a name="en-us_topic_0182207110_b1765184218249"></a>PodSandboxConfig.LogDirectory</strong>, which is used to store logs (STDOUT and STDERR) on the container host.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row135091553839"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p17597120742"><a name="en-us_topic_0182207110_p17597120742"></a><a name="en-us_topic_0182207110_p17597120742"></a>bool stdin</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p750915531638"><a name="en-us_topic_0182207110_p750915531638"></a><a name="en-us_topic_0182207110_p750915531638"></a>Whether to open <strong id="en-us_topic_0182207110_b133213110292"><a name="en-us_topic_0182207110_b133213110292"></a><a name="en-us_topic_0182207110_b133213110292"></a>stdin</strong> of the container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1901049174413"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p61419581447"><a name="en-us_topic_0182207110_p61419581447"></a><a name="en-us_topic_0182207110_p61419581447"></a>bool stdin_once</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p12147583446"><a name="en-us_topic_0182207110_p12147583446"></a><a name="en-us_topic_0182207110_p12147583446"></a>Whether to immediately disconnect other data flows connected with <strong id="en-us_topic_0182207110_b761311012317"><a name="en-us_topic_0182207110_b761311012317"></a><a name="en-us_topic_0182207110_b761311012317"></a>stdin</strong> when a data flow connected with <strong id="en-us_topic_0182207110_b9820101603120"><a name="en-us_topic_0182207110_b9820101603120"></a><a name="en-us_topic_0182207110_b9820101603120"></a>stdin</strong> is disconnected. This parameter does not take effect now.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1922645374411"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p7645558174413"><a name="en-us_topic_0182207110_p7645558174413"></a><a name="en-us_topic_0182207110_p7645558174413"></a>bool tty</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p156455589448"><a name="en-us_topic_0182207110_p156455589448"></a><a name="en-us_topic_0182207110_p156455589448"></a>Whether to use a pseudo terminal to connect to <strong id="en-us_topic_0182207110_b1249424617317"><a name="en-us_topic_0182207110_b1249424617317"></a><a name="en-us_topic_0182207110_b1249424617317"></a>stdio</strong> of the container.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row13317210511"><td class="cellrowborder" valign="top" width="40.699999999999996%"><p id="en-us_topic_0182207110_p1564317611612"><a name="en-us_topic_0182207110_p1564317611612"></a><a name="en-us_topic_0182207110_p1564317611612"></a><a href="#en-us_topic_0182207110_li13021147134718">LinuxContainerConfig</a> linux</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.3%"><p id="en-us_topic_0182207110_p13335211515"><a name="en-us_topic_0182207110_p13335211515"></a><a name="en-us_topic_0182207110_p13335211515"></a>Container configuration information in the Linux system.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   <a name="en-us_topic_0182207110_li12222146464"></a>**NetworkConfig**

    This API is used to specify runtime network configurations.

    <a name="en-us_topic_0182207110_table32261415465"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row1722121414463"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p12217144461"><a name="en-us_topic_0182207110_p12217144461"></a><a name="en-us_topic_0182207110_p12217144461"></a><strong id="en-us_topic_0182207110_b1661173113196"><a name="en-us_topic_0182207110_b1661173113196"></a><a name="en-us_topic_0182207110_b1661173113196"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p14225144465"><a name="en-us_topic_0182207110_p14225144465"></a><a name="en-us_topic_0182207110_p14225144465"></a><strong id="en-us_topic_0182207110_b191825338191"><a name="en-us_topic_0182207110_b191825338191"></a><a name="en-us_topic_0182207110_b191825338191"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row1122111418463"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p122211417468"><a name="en-us_topic_0182207110_p122211417468"></a><a name="en-us_topic_0182207110_p122211417468"></a>string pod_cidr</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p922181415468"><a name="en-us_topic_0182207110_p922181415468"></a><a name="en-us_topic_0182207110_p922181415468"></a>CIDR used by pod IP addresses.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **RuntimeConfig**

    This API is used to specify runtime network configurations.

    <a name="en-us_topic_0182207110_table94401158174715"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row104401858104711"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p34401589471"><a name="en-us_topic_0182207110_p34401589471"></a><a name="en-us_topic_0182207110_p34401589471"></a><strong id="en-us_topic_0182207110_b186461407192"><a name="en-us_topic_0182207110_b186461407192"></a><a name="en-us_topic_0182207110_b186461407192"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p1444015834710"><a name="en-us_topic_0182207110_p1444015834710"></a><a name="en-us_topic_0182207110_p1444015834710"></a><strong id="en-us_topic_0182207110_b6629134217198"><a name="en-us_topic_0182207110_b6629134217198"></a><a name="en-us_topic_0182207110_b6629134217198"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row174406581478"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p164406586473"><a name="en-us_topic_0182207110_p164406586473"></a><a name="en-us_topic_0182207110_p164406586473"></a><a href="#en-us_topic_0182207110_li12222146464">NetworkConfig</a> network_config</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p16440135824717"><a name="en-us_topic_0182207110_p16440135824717"></a><a name="en-us_topic_0182207110_p16440135824717"></a>Runtime network configurations.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **RuntimeCondition**

    The API is used to describe runtime status information.

    <a name="en-us_topic_0182207110_table1149371711577"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row549391719578"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p16493217155713"><a name="en-us_topic_0182207110_p16493217155713"></a><a name="en-us_topic_0182207110_p16493217155713"></a><strong id="en-us_topic_0182207110_b13955134981914"><a name="en-us_topic_0182207110_b13955134981914"></a><a name="en-us_topic_0182207110_b13955134981914"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p1749301713578"><a name="en-us_topic_0182207110_p1749301713578"></a><a name="en-us_topic_0182207110_p1749301713578"></a><strong id="en-us_topic_0182207110_b1892365213194"><a name="en-us_topic_0182207110_b1892365213194"></a><a name="en-us_topic_0182207110_b1892365213194"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row18493141795713"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p19493151765717"><a name="en-us_topic_0182207110_p19493151765717"></a><a name="en-us_topic_0182207110_p19493151765717"></a>string type</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p17493161719576"><a name="en-us_topic_0182207110_p17493161719576"></a><a name="en-us_topic_0182207110_p17493161719576"></a>Runtime status type.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row767112245813"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p1671426589"><a name="en-us_topic_0182207110_p1671426589"></a><a name="en-us_topic_0182207110_p1671426589"></a>bool status</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p13671328589"><a name="en-us_topic_0182207110_p13671328589"></a><a name="en-us_topic_0182207110_p13671328589"></a>Runtime status.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row38518584"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p48417586"><a name="en-us_topic_0182207110_p48417586"></a><a name="en-us_topic_0182207110_p48417586"></a>string reason</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p16919175818"><a name="en-us_topic_0182207110_p16919175818"></a><a name="en-us_topic_0182207110_p16919175818"></a>Brief description of the reason for the runtime status change.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row12981958155716"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p19915581570"><a name="en-us_topic_0182207110_p19915581570"></a><a name="en-us_topic_0182207110_p19915581570"></a>string message</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p39995818579"><a name="en-us_topic_0182207110_p39995818579"></a><a name="en-us_topic_0182207110_p39995818579"></a>Message with high readability, which indicates the reason for the runtime status change.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   **RuntimeStatus**

    The API is used to describe runtime status.

    <a name="en-us_topic_0182207110_table6258136145512"></a>
    <table><tbody><tr id="en-us_topic_0182207110_row1225814635519"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p1125820695515"><a name="en-us_topic_0182207110_p1125820695515"></a><a name="en-us_topic_0182207110_p1125820695515"></a><strong id="en-us_topic_0182207110_b102891312206"><a name="en-us_topic_0182207110_b102891312206"></a><a name="en-us_topic_0182207110_b102891312206"></a>Parameter</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p12587625511"><a name="en-us_topic_0182207110_p12587625511"></a><a name="en-us_topic_0182207110_p12587625511"></a><strong id="en-us_topic_0182207110_b75452492018"><a name="en-us_topic_0182207110_b75452492018"></a><a name="en-us_topic_0182207110_b75452492018"></a>Description</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207110_row225811655518"><td class="cellrowborder" valign="top" width="41.06%"><p id="en-us_topic_0182207110_p102589635513"><a name="en-us_topic_0182207110_p102589635513"></a><a name="en-us_topic_0182207110_p102589635513"></a>repeated RuntimeCondition conditions</p>
    </td>
    <td class="cellrowborder" valign="top" width="58.940000000000005%"><p id="en-us_topic_0182207110_p32581661554"><a name="en-us_topic_0182207110_p32581661554"></a><a name="en-us_topic_0182207110_p32581661554"></a>List of current runtime status.</p>
    </td>
    </tr>
    </tbody>
    </table>




