# Running a Container<a name="EN-US_TOPIC_0184808055"></a>

## Description<a name="en-us_topic_0182207107_section7172121494119"></a>

To create and start a container, run the  **isula run**  command. You can use a specified container image to create a container read/write layer and prepare for running the specified command. After the container is created, run the specified command to start the container. The  **run**  command is equivalent to creating and starting a container.

## **Usage**<a name="en-us_topic_0182207107_section19172191412412"></a>

```
isula run [OPTIONS] ROOTFS|IMAGE [COMMAND] [ARG...]
```

## Parameters<a name="en-us_topic_0182207107_section21721114114112"></a>

The following table lists the parameters supported by the  **run**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0182207107_table62441570237"></a>
<table><tbody><tr id="en-us_topic_0182207107_row139736211246"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0182207107_p148610405244"><a name="en-us_topic_0182207107_p148610405244"></a><a name="en-us_topic_0182207107_p148610405244"></a><strong id="en-us_topic_0182207107_b5486144014247"><a name="en-us_topic_0182207107_b5486144014247"></a><a name="en-us_topic_0182207107_b5486144014247"></a>Command</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0182207107_p048644010248"><a name="en-us_topic_0182207107_p048644010248"></a><a name="en-us_topic_0182207107_p048644010248"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0182207107_p648624042417"><a name="en-us_topic_0182207107_p648624042417"></a><a name="en-us_topic_0182207107_p648624042417"></a><strong id="en-us_topic_0182207107_b748619403240"><a name="en-us_topic_0182207107_b748619403240"></a><a name="en-us_topic_0182207107_b748619403240"></a>Description</strong></p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row134199513352"><td class="cellrowborder" rowspan="50" valign="top" width="17.333333333333336%"><p id="en-us_topic_0182207107_p1668419095711"><a name="en-us_topic_0182207107_p1668419095711"></a><a name="en-us_topic_0182207107_p1668419095711"></a><strong id="en-us_topic_0182207107_b479810255419"><a name="en-us_topic_0182207107_b479810255419"></a><a name="en-us_topic_0182207107_b479810255419"></a>run</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0182207107_p8129151463514"><a name="en-us_topic_0182207107_p8129151463514"></a><a name="en-us_topic_0182207107_p8129151463514"></a>--annotation</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0182207107_p5129191418354"><a name="en-us_topic_0182207107_p5129191418354"></a><a name="en-us_topic_0182207107_p5129191418354"></a>Sets annotations for the container. For example, set the <strong id="en-us_topic_0182207107_b2872815123414"><a name="en-us_topic_0182207107_b2872815123414"></a><a name="en-us_topic_0182207107_b2872815123414"></a>native.umask</strong> option.</p>
<pre class="screen" id="en-us_topic_0182207107_screen1112917145352"><a name="en-us_topic_0182207107_screen1112917145352"></a><a name="en-us_topic_0182207107_screen1112917145352"></a>--annotation native.umask=normal #The <strong id="en-us_topic_0182207107_b1391954118341"><a name="en-us_topic_0182207107_b1391954118341"></a><a name="en-us_topic_0182207107_b1391954118341"></a>umask</strong> value of the started container is 0022.
--annotation native.umask=secure #The <strong id="en-us_topic_0182207107_b18664736133419"><a name="en-us_topic_0182207107_b18664736133419"></a><a name="en-us_topic_0182207107_b18664736133419"></a>umask</strong> value of the started container is 0027.</pre>
<p id="en-us_topic_0182207107_p10129314183518"><a name="en-us_topic_0182207107_p10129314183518"></a><a name="en-us_topic_0182207107_p10129314183518"></a>If this parameter is not set, the <strong id="en-us_topic_0182207107_b723110559347"><a name="en-us_topic_0182207107_b723110559347"></a><a name="en-us_topic_0182207107_b723110559347"></a>umask</strong> configuration in iSulad is used.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row861311411819"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1716101018113"><a name="en-us_topic_0182207107_p1716101018113"></a><a name="en-us_topic_0182207107_p1716101018113"></a>--cap-add</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p17421752153311"><a name="en-us_topic_0182207107_p17421752153311"></a><a name="en-us_topic_0182207107_p17421752153311"></a>Adds Linux functions.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row17870171515015"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p38709151502"><a name="en-us_topic_0182207107_p38709151502"></a><a name="en-us_topic_0182207107_p38709151502"></a>--cap-drop</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p96851021937"><a name="en-us_topic_0182207107_p96851021937"></a><a name="en-us_topic_0182207107_p96851021937"></a>Deletes Linux functions.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row429165541015"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p12412155631016"><a name="en-us_topic_0182207107_p12412155631016"></a><a name="en-us_topic_0182207107_p12412155631016"></a>--cgroup-parent</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p2412156151014"><a name="en-us_topic_0182207107_p2412156151014"></a><a name="en-us_topic_0182207107_p2412156151014"></a>Specifies the cgroup parent path of the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row16631114131614"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p4663121416168"><a name="en-us_topic_0182207107_p4663121416168"></a><a name="en-us_topic_0182207107_p4663121416168"></a>--cpuset-cpus</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p16852211836"><a name="en-us_topic_0182207107_p16852211836"></a><a name="en-us_topic_0182207107_p16852211836"></a>Allowed CPUs (for example, 0-3, 0, 1).</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row17941113011010"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p794114304016"><a name="en-us_topic_0182207107_p794114304016"></a><a name="en-us_topic_0182207107_p794114304016"></a>--cpu-shares</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p468516214314"><a name="en-us_topic_0182207107_p468516214314"></a><a name="en-us_topic_0182207107_p468516214314"></a>CPU share (relative weight).</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row694113301204"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p0941130804"><a name="en-us_topic_0182207107_p0941130804"></a><a name="en-us_topic_0182207107_p0941130804"></a>--cpu-quota</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p8685621334"><a name="en-us_topic_0182207107_p8685621334"></a><a name="en-us_topic_0182207107_p8685621334"></a>Limits the CPU CFS quota.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row176131541687"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p116131041289"><a name="en-us_topic_0182207107_p116131041289"></a><a name="en-us_topic_0182207107_p116131041289"></a>-d, --detach</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p26851321335"><a name="en-us_topic_0182207107_p26851321335"></a><a name="en-us_topic_0182207107_p26851321335"></a>Runs the container in the background and displays the container ID.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row1061354115812"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p206133411080"><a name="en-us_topic_0182207107_p206133411080"></a><a name="en-us_topic_0182207107_p206133411080"></a>--device=[]</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p5861121218270"><a name="en-us_topic_0182207107_p5861121218270"></a><a name="en-us_topic_0182207107_p5861121218270"></a>Adds a device to the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row623119489243"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p15231148132418"><a name="en-us_topic_0182207107_p15231148132418"></a><a name="en-us_topic_0182207107_p15231148132418"></a>--dns</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p123110486245"><a name="en-us_topic_0182207107_p123110486245"></a><a name="en-us_topic_0182207107_p123110486245"></a>Adds a DNS server.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row7357105142411"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p15357195116248"><a name="en-us_topic_0182207107_p15357195116248"></a><a name="en-us_topic_0182207107_p15357195116248"></a>--dns-opt</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p735775132419"><a name="en-us_topic_0182207107_p735775132419"></a><a name="en-us_topic_0182207107_p735775132419"></a>Adds DNS options.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row15443154132410"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1544335492417"><a name="en-us_topic_0182207107_p1544335492417"></a><a name="en-us_topic_0182207107_p1544335492417"></a>--dns-search</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1443165472412"><a name="en-us_topic_0182207107_p1443165472412"></a><a name="en-us_topic_0182207107_p1443165472412"></a>Sets the search domain of a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row156137414817"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1261417415811"><a name="en-us_topic_0182207107_p1261417415811"></a><a name="en-us_topic_0182207107_p1261417415811"></a>-e, --env</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p176852211639"><a name="en-us_topic_0182207107_p176852211639"></a><a name="en-us_topic_0182207107_p176852211639"></a>Sets environment variables.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row161909508118"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p6191135020112"><a name="en-us_topic_0182207107_p6191135020112"></a><a name="en-us_topic_0182207107_p6191135020112"></a>--env-file</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p101911950112"><a name="en-us_topic_0182207107_p101911950112"></a><a name="en-us_topic_0182207107_p101911950112"></a>Configures environment variables using a file.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row1761474115819"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p13614174115812"><a name="en-us_topic_0182207107_p13614174115812"></a><a name="en-us_topic_0182207107_p13614174115812"></a>--entrypoint</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p136851321239"><a name="en-us_topic_0182207107_p136851321239"></a><a name="en-us_topic_0182207107_p136851321239"></a>Entry point to run when the container is started.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row84421230185918"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p24421330125913"><a name="en-us_topic_0182207107_p24421330125913"></a><a name="en-us_topic_0182207107_p24421330125913"></a>--external-rootfs=PATH</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p176851721939"><a name="en-us_topic_0182207107_p176851721939"></a><a name="en-us_topic_0182207107_p176851721939"></a>Specifies a rootfs (a folder or block device) that is not managed by iSulad for the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row1085023833511"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p198519380358"><a name="en-us_topic_0182207107_p198519380358"></a><a name="en-us_topic_0182207107_p198519380358"></a>--files-limit</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p085115384358"><a name="en-us_topic_0182207107_p085115384358"></a><a name="en-us_topic_0182207107_p085115384358"></a>Limits the number of file handles that can be opened in the container. The value <strong id="en-us_topic_0182207107_b05111729153618"><a name="en-us_topic_0182207107_b05111729153618"></a><a name="en-us_topic_0182207107_b05111729153618"></a>-1</strong> indicates no limit.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row1295325111472"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p20395344714"><a name="en-us_topic_0182207107_p20395344714"></a><a name="en-us_topic_0182207107_p20395344714"></a>--group-add=[]</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p2365313470"><a name="en-us_topic_0182207107_p2365313470"></a><a name="en-us_topic_0182207107_p2365313470"></a>Adds additional user groups to the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row49051865195"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p16905146161917"><a name="en-us_topic_0182207107_p16905146161917"></a><a name="en-us_topic_0182207107_p16905146161917"></a>--help</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1690512618195"><a name="en-us_topic_0182207107_p1690512618195"></a><a name="en-us_topic_0182207107_p1690512618195"></a>Displays help information.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row1863011175146"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1063041731417"><a name="en-us_topic_0182207107_p1063041731417"></a><a name="en-us_topic_0182207107_p1063041731417"></a>--health-cmd</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p18630517191411"><a name="en-us_topic_0182207107_p18630517191411"></a><a name="en-us_topic_0182207107_p18630517191411"></a>Command executed in a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row753412041411"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p11535132013142"><a name="en-us_topic_0182207107_p11535132013142"></a><a name="en-us_topic_0182207107_p11535132013142"></a>--health-exit-on-unhealthy</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p0535152041412"><a name="en-us_topic_0182207107_p0535152041412"></a><a name="en-us_topic_0182207107_p0535152041412"></a>Determines whether to kill a container when the container is detected unhealthy.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row17173192319142"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p91733234142"><a name="en-us_topic_0182207107_p91733234142"></a><a name="en-us_topic_0182207107_p91733234142"></a>--health-interval</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p217320238146"><a name="en-us_topic_0182207107_p217320238146"></a><a name="en-us_topic_0182207107_p217320238146"></a>Interval between two consecutive command executions.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row65618261149"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p55612611410"><a name="en-us_topic_0182207107_p55612611410"></a><a name="en-us_topic_0182207107_p55612611410"></a>--health-retries</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p205619268141"><a name="en-us_topic_0182207107_p205619268141"></a><a name="en-us_topic_0182207107_p205619268141"></a>Maximum number of health check retries.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row6356102941410"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1835612991419"><a name="en-us_topic_0182207107_p1835612991419"></a><a name="en-us_topic_0182207107_p1835612991419"></a>--health-start-period</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p93568290147"><a name="en-us_topic_0182207107_p93568290147"></a><a name="en-us_topic_0182207107_p93568290147"></a>Container initialization interval.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row1029384718146"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p16294154716147"><a name="en-us_topic_0182207107_p16294154716147"></a><a name="en-us_topic_0182207107_p16294154716147"></a>--health-timeout</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p142942047201411"><a name="en-us_topic_0182207107_p142942047201411"></a><a name="en-us_topic_0182207107_p142942047201411"></a>Maximum time for executing a single check command.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row417113495919"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p15172183445920"><a name="en-us_topic_0182207107_p15172183445920"></a><a name="en-us_topic_0182207107_p15172183445920"></a>--hook-spec</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p8685112118314"><a name="en-us_topic_0182207107_p8685112118314"></a><a name="en-us_topic_0182207107_p8685112118314"></a>Hook configuration file.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row1498202319272"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p9571162842711"><a name="en-us_topic_0182207107_p9571162842711"></a><a name="en-us_topic_0182207107_p9571162842711"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1157482818273"><a name="en-us_topic_0182207107_p1157482818273"></a><a name="en-us_topic_0182207107_p1157482818273"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row6362153610268"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p13621736192618"><a name="en-us_topic_0182207107_p13621736192618"></a><a name="en-us_topic_0182207107_p13621736192618"></a>-h, --hostname</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p103621036122610"><a name="en-us_topic_0182207107_p103621036122610"></a><a name="en-us_topic_0182207107_p103621036122610"></a>Container host name.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row144214385598"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1144213389599"><a name="en-us_topic_0182207107_p1144213389599"></a><a name="en-us_topic_0182207107_p1144213389599"></a>--hugetlb-limit=[]</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p268516211335"><a name="en-us_topic_0182207107_p268516211335"></a><a name="en-us_topic_0182207107_p268516211335"></a>Limits the size of huge-page files, for example, <strong id="en-us_topic_0182207107_b1266672513714"><a name="en-us_topic_0182207107_b1266672513714"></a><a name="en-us_topic_0182207107_b1266672513714"></a>--hugetlb-limit 2MB:32MB</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row205911371908"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1059163713014"><a name="en-us_topic_0182207107_p1059163713014"></a><a name="en-us_topic_0182207107_p1059163713014"></a>-i, --interactive</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p158943505"><a name="en-us_topic_0182207107_p158943505"></a><a name="en-us_topic_0182207107_p158943505"></a>Enables the standard input of the container even if it is not connected to the standard input of the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row659103717013"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p8599371505"><a name="en-us_topic_0182207107_p8599371505"></a><a name="en-us_topic_0182207107_p8599371505"></a>--log-opt=[]</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p668514211339"><a name="en-us_topic_0182207107_p668514211339"></a><a name="en-us_topic_0182207107_p668514211339"></a>Log driver option. By default, the container serial port log function is disabled. You can run the<strong id="en-us_topic_0182207107_b74241541113719"><a name="en-us_topic_0182207107_b74241541113719"></a><a name="en-us_topic_0182207107_b74241541113719"></a> --log-opt disable-log=false</strong> command to enable it.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row75913717012"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p175918371019"><a name="en-us_topic_0182207107_p175918371019"></a><a name="en-us_topic_0182207107_p175918371019"></a>-m, --memory</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p156851211039"><a name="en-us_topic_0182207107_p156851211039"></a><a name="en-us_topic_0182207107_p156851211039"></a>Memory limit.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row10796185703219"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p3692125919328"><a name="en-us_topic_0182207107_p3692125919328"></a><a name="en-us_topic_0182207107_p3692125919328"></a>--memory-reservation</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p12693185913322"><a name="en-us_topic_0182207107_p12693185913322"></a><a name="en-us_topic_0182207107_p12693185913322"></a>Sets the container memory limit. The default value is the same as that of <strong id="en-us_topic_0182207107_b88101911113811"><a name="en-us_topic_0182207107_b88101911113811"></a><a name="en-us_topic_0182207107_b88101911113811"></a>--memory</strong>. <strong id="en-us_topic_0182207107_b3943132917381"><a name="en-us_topic_0182207107_b3943132917381"></a><a name="en-us_topic_0182207107_b3943132917381"></a>--memory</strong> is a hard limit, and <strong id="en-us_topic_0182207107_b109431329163818"><a name="en-us_topic_0182207107_b109431329163818"></a><a name="en-us_topic_0182207107_b109431329163818"></a>--memory-reservation</strong> is a soft limit. When the memory usage exceeds the preset value, the memory usage is dynamically adjusted (the system attempts to reduce the memory usage to a value less than the preset value when reclaiming the memory). However, the memory usage may exceed the preset value. Generally, this parameter can be used together with <strong id="en-us_topic_0182207107_b9735145153819"><a name="en-us_topic_0182207107_b9735145153819"></a><a name="en-us_topic_0182207107_b9735145153819"></a>--memory</strong>. The value must be less than the preset value of <strong id="en-us_topic_0182207107_b9736194511383"><a name="en-us_topic_0182207107_b9736194511383"></a><a name="en-us_topic_0182207107_b9736194511383"></a>--memory</strong>. The minimum value is 4 MB.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row20593371607"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p12592371704"><a name="en-us_topic_0182207107_p12592371704"></a><a name="en-us_topic_0182207107_p12592371704"></a>--memory-swap</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p15685521736"><a name="en-us_topic_0182207107_p15685521736"></a><a name="en-us_topic_0182207107_p15685521736"></a>Memory swap space, which should be a positive integer. The value <strong id="en-us_topic_0182207107_b3280163919"><a name="en-us_topic_0182207107_b3280163919"></a><a name="en-us_topic_0182207107_b3280163919"></a>-1</strong> indicates no limit.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row18121147112914"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p18287417161414"><a name="en-us_topic_0182207107_p18287417161414"></a><a name="en-us_topic_0182207107_p18287417161414"></a>--memory-swappiness</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p101221378297"><a name="en-us_topic_0182207107_p101221378297"></a><a name="en-us_topic_0182207107_p101221378297"></a>The value of swappiness is a positive integer ranging from 0 to 100. The smaller the value is, the less the swap partition is used and the more the memory is used in the Linux system. The larger the value is, the more the swap space is used by the kernel. The default value is <strong id="en-us_topic_0182207107_b4124438286"><a name="en-us_topic_0182207107_b4124438286"></a><a name="en-us_topic_0182207107_b4124438286"></a>–1</strong>, indicating that the default system value is used.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row53314518493"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p134145154916"><a name="en-us_topic_0182207107_p134145154916"></a><a name="en-us_topic_0182207107_p134145154916"></a>--mount</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p968518211831"><a name="en-us_topic_0182207107_p968518211831"></a><a name="en-us_topic_0182207107_p968518211831"></a>Mounts a host directory to a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row206012104181"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p196011710151815"><a name="en-us_topic_0182207107_p196011710151815"></a><a name="en-us_topic_0182207107_p196011710151815"></a>--no-healthcheck</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p146011610121814"><a name="en-us_topic_0182207107_p146011610121814"></a><a name="en-us_topic_0182207107_p146011610121814"></a>Disables the health check configuration.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row17591371014"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p19601237408"><a name="en-us_topic_0182207107_p19601237408"></a><a name="en-us_topic_0182207107_p19601237408"></a>--name=NAME</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p206851721434"><a name="en-us_topic_0182207107_p206851721434"></a><a name="en-us_topic_0182207107_p206851721434"></a>Container name.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row56017376010"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p17601537306"><a name="en-us_topic_0182207107_p17601537306"></a><a name="en-us_topic_0182207107_p17601537306"></a>--net=none</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p86855212031"><a name="en-us_topic_0182207107_p86855212031"></a><a name="en-us_topic_0182207107_p86855212031"></a>Connects a container to a network.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row1442163033611"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p14422173013363"><a name="en-us_topic_0182207107_p14422173013363"></a><a name="en-us_topic_0182207107_p14422173013363"></a>--pids-limit</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p8869114683618"><a name="en-us_topic_0182207107_p8869114683618"></a><a name="en-us_topic_0182207107_p8869114683618"></a>Limits the number of processes that can be executed in the container. The value <strong id="en-us_topic_0182207107_b0924113312392"><a name="en-us_topic_0182207107_b0924113312392"></a><a name="en-us_topic_0182207107_b0924113312392"></a>-1</strong> indicates no limit.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row11605371201"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p196012371304"><a name="en-us_topic_0182207107_p196012371304"></a><a name="en-us_topic_0182207107_p196012371304"></a>--privileged</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p968516212319"><a name="en-us_topic_0182207107_p968516212319"></a><a name="en-us_topic_0182207107_p968516212319"></a>Grants container extension privileges.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row10649172419178"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1464912421718"><a name="en-us_topic_0182207107_p1464912421718"></a><a name="en-us_topic_0182207107_p1464912421718"></a>-R, --runtime</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p186853211837"><a name="en-us_topic_0182207107_p186853211837"></a><a name="en-us_topic_0182207107_p186853211837"></a>Container runtime. The parameter value can be <strong id="en-us_topic_0182207107_b57001757183910"><a name="en-us_topic_0182207107_b57001757183910"></a><a name="en-us_topic_0182207107_b57001757183910"></a>lcr</strong>, which is case insensitive. Therefore, <strong id="en-us_topic_0182207107_b1570110578398"><a name="en-us_topic_0182207107_b1570110578398"></a><a name="en-us_topic_0182207107_b1570110578398"></a>LCR</strong> and <strong id="en-us_topic_0182207107_b187011957193910"><a name="en-us_topic_0182207107_b187011957193910"></a><a name="en-us_topic_0182207107_b187011957193910"></a>lcr</strong> are equivalent.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row151954516154"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p319705161516"><a name="en-us_topic_0182207107_p319705161516"></a><a name="en-us_topic_0182207107_p319705161516"></a>--read-only</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p819713551519"><a name="en-us_topic_0182207107_p819713551519"></a><a name="en-us_topic_0182207107_p819713551519"></a>Sets the rootfs of a container to read-only.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row3601237402"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p36013375013"><a name="en-us_topic_0182207107_p36013375013"></a><a name="en-us_topic_0182207107_p36013375013"></a>--restart</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p46863217311"><a name="en-us_topic_0182207107_p46863217311"></a><a name="en-us_topic_0182207107_p46863217311"></a>Restart policy upon container exit.</p>
<p id="en-us_topic_0182207107_p51198252521"><a name="en-us_topic_0182207107_p51198252521"></a><a name="en-us_topic_0182207107_p51198252521"></a>For a system container, <strong id="en-us_topic_0182207107_b5772183224020"><a name="en-us_topic_0182207107_b5772183224020"></a><a name="en-us_topic_0182207107_b5772183224020"></a>--restart on-reboot</strong> is supported.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row83001819192212"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1301131911225"><a name="en-us_topic_0182207107_p1301131911225"></a><a name="en-us_topic_0182207107_p1301131911225"></a>--rm</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p2301819192212"><a name="en-us_topic_0182207107_p2301819192212"></a><a name="en-us_topic_0182207107_p2301819192212"></a>Automatically clears a container upon exit.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row1314105618175"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1785335691711"><a name="en-us_topic_0182207107_p1785335691711"></a><a name="en-us_topic_0182207107_p1785335691711"></a>--storage-opt</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1885310565170"><a name="en-us_topic_0182207107_p1885310565170"></a><a name="en-us_topic_0182207107_p1885310565170"></a>Configures the storage driver option for a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row1160183710015"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p9601837302"><a name="en-us_topic_0182207107_p9601837302"></a><a name="en-us_topic_0182207107_p9601837302"></a>-t, --tty</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p176861211319"><a name="en-us_topic_0182207107_p176861211319"></a><a name="en-us_topic_0182207107_p176861211319"></a>Allocates a pseudo terminal.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row13353886542"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p193531487548"><a name="en-us_topic_0182207107_p193531487548"></a><a name="en-us_topic_0182207107_p193531487548"></a>--ulimit</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1944203011543"><a name="en-us_topic_0182207107_p1944203011543"></a><a name="en-us_topic_0182207107_p1944203011543"></a>Sets the ulimit for a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row192184195910"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1310416598"><a name="en-us_topic_0182207107_p1310416598"></a><a name="en-us_topic_0182207107_p1310416598"></a>-u, --user</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1568613211317"><a name="en-us_topic_0182207107_p1568613211317"></a><a name="en-us_topic_0182207107_p1568613211317"></a>User name or UID, in the format of <strong id="en-us_topic_0182207107_b17991841194114"><a name="en-us_topic_0182207107_b17991841194114"></a><a name="en-us_topic_0182207107_b17991841194114"></a>[&lt;name|uid&gt;][:&lt;group|gid&gt;]</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0182207107_row287661103"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p8877613012"><a name="en-us_topic_0182207107_p8877613012"></a><a name="en-us_topic_0182207107_p8877613012"></a>-v, --volume=[]</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207107_p1717301115357"><a name="en-us_topic_0182207107_p1717301115357"></a><a name="en-us_topic_0182207107_p1717301115357"></a>Mounts a volume.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0182207107_section18811125219118"></a>

-   When the parent process of a container exits, the corresponding container automatically exits.
-   When a common container is created, the parent process cannot be initiated because the permission of common containers is insufficient. As a result, the container does not respond when you run the  **attach**  command though it is created successfully.
-   If  **--net**  is not specified when the container is running, the default host name is  **localhost**.
-   If the  **--files-limit**  parameter is to transfer a small value, for example, 1, when the container is started, iSulad creates a cgroup, sets the files.limit value, and writes the PID of the container process to the  **cgroup.procs**  file of the cgroup. At this time, the container process has opened more than one handle. As a result, a write error is reported, and the container fails to be started.
-   If both** --mount**  and  **--volume**  exist and their destination paths conflict,  **--mount**  will be run after  **--volume**  \(that is, the mount point in  **--volume**  will be overwritten\).

    Note: The value of the  **type**  parameter of lightweight containers can be  **bind**  or  **squashfs**. When  **type**  is set to  **squashfs**,  **src**  is the image path. The value of the  **type**  parameter of the native Docker can be  **bind**,  **volume**, and  **tmpfs**.

-   The restart policy does not support  **unless-stopped**.
-   The values returned for Docker and lightweight containers are 127 and 125 respectively in the following three scenarios:

    The host device specified by  **--device**  does not exist.

    The hook JSON file specified by  **--hook-spec**  does not exist.

    The entry point specified by  **--entrypoint**  does not exist.

-   When the  **--volume**  parameter is used, /dev/ptmx will be deleted and recreated during container startup. Therefore, do not mount the  **/dev**  directory to that of the container. Use  **--device**  to mount the devices in  **/dev**  of the container.
-   Do not use the echo option to input data to the standard input of the  **run**  command. Otherwise, the client will be suspended. The echo value should be directly transferred to the container as a command line parameter.

    ```
    [root@localhost ~]# echo ls | isula run -i busybox /bin/sh
    
    
    ^C
    [root@localhost ~]# 
    ```

    The client is suspended when the preceding command is executed because the preceding command is equivalent to input  **ls**  to  **stdin**. Then EOF is read and the client does not send data and waits for the server to exit. However, the server cannot determine whether the client needs to continue sending data. As a result, the server is suspended in reading data, and both parties are suspended.

    The correct execution method is as follows:

    ```
    [root@localhost ~]# isula run -i busybox ls
    bin
    dev
    etc
    home
    proc
    root
    sys
    tmp
    usr
    var
    [root@localhost ~]# 
    ```

-   If the root directory \(/\) of the host is used as the file system of the container, the following situations may occur during the mounting:

    **Table  2**  Mounting scenarios

    <a name="en-us_topic_0182207107_table1075313351843"></a>
    <table><thead align="left"><tr id="en-us_topic_0182207107_row1875314355413"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0182207107_p075318354418"><a name="en-us_topic_0182207107_p075318354418"></a><a name="en-us_topic_0182207107_p075318354418"></a>Host Path (Source)</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0182207107_p1975316357419"><a name="en-us_topic_0182207107_p1975316357419"></a><a name="en-us_topic_0182207107_p1975316357419"></a>Container Path (Destination)</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0182207107_row11753435245"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0182207107_p1775317351414"><a name="en-us_topic_0182207107_p1775317351414"></a><a name="en-us_topic_0182207107_p1775317351414"></a>/home/test1</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0182207107_p17532352412"><a name="en-us_topic_0182207107_p17532352412"></a><a name="en-us_topic_0182207107_p17532352412"></a>/mnt/</p>
    </td>
    </tr>
    <tr id="en-us_topic_0182207107_row47531735341"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0182207107_p15753235749"><a name="en-us_topic_0182207107_p15753235749"></a><a name="en-us_topic_0182207107_p15753235749"></a>/home/test2</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0182207107_p675383516412"><a name="en-us_topic_0182207107_p675383516412"></a><a name="en-us_topic_0182207107_p675383516412"></a>/mnt/abc</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >Scenario 1: Mount  **/home/test1**  and then  **/home/test2**. In this case, the content in  **/home/test1**  overwrites the content in  **/mnt**. As a result, the  **abc**  directory does not exist in  **/mnt**, and mounting** /home/test2**  to  **/mnt/abc**  fails.  
    >Scenario 2: Mount  **/home/test2**  and then  **/home/test1**. In this case, the content of  **/mnt**  is replaced with the content of  **/home/test1**  during the second mounting. In this way, the content mounted during the first mounting from  **/home/test2**  to  **/mnt/abc**  is overwritten.  
    >The first scenario is not supported. For the second scenario, users need to understand the risk of data access failures.  

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >-   In high concurrency scenarios \(200 containers are concurrently started\), the memory management mechanism of Glibc may cause memory holes and large virtual memory \(for example, 10 GB\). This problem is caused by the restriction of the Glibc memory management mechanism in the high concurrency scenario, but not by memory leakage. Therefore, the memory consumption does not increase infinitely. You can set the  **MALLOC\_ARENA\_MAX**  environment variable to reduce the virtual memory and increase the probability of reducing the physical memory. However, this environment variable will cause the iSulad concurrency performance to deteriorate. Set this environment variable based on the site requirements.  
    >    ```  
    >    To balance performance and memory usage, set MALLOC_ARENA_MAX to 4. (The iSulad performance deterioration on the ARM64 server is controlled by less than 10%.)  
    >    Configuration method:  
    >    1. To manually start iSulad, run the export MALLOC_ARENA_MAX=4 command and then start the iSulad.  
    >    2. If systemd manages iSulad, you can modify the /etc/sysconfig/iSulad file by adding MALLOC_ARENA_MAX=4.  
    >    ```  


## Example<a name="en-us_topic_0182207107_section8173614204114"></a>

Run a new container.

```
$ isula run -itd busybox
9c2c13b6c35f132f49fb7ffad24f9e673a07b7fe9918f97c0591f0d7014c713b
```

