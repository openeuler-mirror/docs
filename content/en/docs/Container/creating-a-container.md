# Creating a Container<a name="EN-US_TOPIC_0184808053"></a>

## Description<a name="en-us_topic_0182207105_section13350115135310"></a>

To create a container, run the  **isula create**  command. The container engine will use the specified container image to create a read/write layer, or use the specified local rootfs as the running environment of the container. After the creation is complete, the container ID is output as standard output. You can run the  **isula start**  command to start the container. The new container is in the  **inited**  state.

## Usage<a name="en-us_topic_0182207105_section188811239165314"></a>

```
isula create [OPTIONS] IMAGE [COMMAND] [ARG...]
```

## Parameters<a name="en-us_topic_0182207105_section4322824135919"></a>

The following table lists the parameters supported by the  **create**  command.

**Table  1**  Parameter description

<a name="en-us_topic_0182207105_table36127413817"></a>
<table><tbody><tr id="en-us_topic_0182207105_row1457792217573"><td class="cellrowborder" valign="top" width="17.333333333333336%"><p id="en-us_topic_0182207105_p2578182275712"><a name="en-us_topic_0182207105_p2578182275712"></a><a name="en-us_topic_0182207105_p2578182275712"></a>Command</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0182207105_p657892213573"><a name="en-us_topic_0182207105_p657892213573"></a><a name="en-us_topic_0182207105_p657892213573"></a>Parameter</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0182207105_p15578102285710"><a name="en-us_topic_0182207105_p15578102285710"></a><a name="en-us_topic_0182207105_p15578102285710"></a>Description</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row11591115892517"><td class="cellrowborder" rowspan="49" valign="top" width="17.333333333333336%"><p id="en-us_topic_0182207105_p1921425017550"><a name="en-us_topic_0182207105_p1921425017550"></a><a name="en-us_topic_0182207105_p1921425017550"></a><strong id="en-us_topic_0182207105_b112687501808"><a name="en-us_topic_0182207105_b112687501808"></a><a name="en-us_topic_0182207105_b112687501808"></a>create</strong></p>
<p id="en-us_topic_0182207105_p7986133491612"><a name="en-us_topic_0182207105_p7986133491612"></a><a name="en-us_topic_0182207105_p7986133491612"></a>&nbsp;&nbsp;</p>
</td>
<td class="cellrowborder" valign="top" width="39.57575757575758%"><p id="en-us_topic_0182207105_p8129151463514"><a name="en-us_topic_0182207105_p8129151463514"></a><a name="en-us_topic_0182207105_p8129151463514"></a>--annotation</p>
</td>
<td class="cellrowborder" valign="top" width="43.09090909090909%"><p id="en-us_topic_0182207105_p5129191418354"><a name="en-us_topic_0182207105_p5129191418354"></a><a name="en-us_topic_0182207105_p5129191418354"></a>Sets annotations for the container. For example, set the <strong id="en-us_topic_0182207105_b11364491554"><a name="en-us_topic_0182207105_b11364491554"></a><a name="en-us_topic_0182207105_b11364491554"></a>native.umask</strong> parameter.</p>
<pre class="screen" id="en-us_topic_0182207105_screen1112917145352"><a name="en-us_topic_0182207105_screen1112917145352"></a><a name="en-us_topic_0182207105_screen1112917145352"></a>--annotation native.umask=normal #The <strong id="en-us_topic_0182207105_b11272521450"><a name="en-us_topic_0182207105_b11272521450"></a><a name="en-us_topic_0182207105_b11272521450"></a>umask</strong> value of the started container is 0022.
--annotation native.umask=secure #The <strong id="en-us_topic_0182207105_b2012312575510"><a name="en-us_topic_0182207105_b2012312575510"></a><a name="en-us_topic_0182207105_b2012312575510"></a>umask</strong> value of the started container is 0027.</pre>
<p id="en-us_topic_0182207105_p10129314183518"><a name="en-us_topic_0182207105_p10129314183518"></a><a name="en-us_topic_0182207105_p10129314183518"></a>If this parameter is not set, the <strong id="en-us_topic_0182207105_b122048014616"><a name="en-us_topic_0182207105_b122048014616"></a><a name="en-us_topic_0182207105_b122048014616"></a>umask</strong> configuration in iSulad is used.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row7680255217"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p522218401851"><a name="en-us_topic_0182207105_p522218401851"></a><a name="en-us_topic_0182207105_p522218401851"></a>--cap-drop</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1222414019518"><a name="en-us_topic_0182207105_p1222414019518"></a><a name="en-us_topic_0182207105_p1222414019518"></a>Deletes Linux permissions.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row858858181018"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p359014818108"><a name="en-us_topic_0182207105_p359014818108"></a><a name="en-us_topic_0182207105_p359014818108"></a>--cgroup-parent</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p15905813106"><a name="en-us_topic_0182207105_p15905813106"></a><a name="en-us_topic_0182207105_p15905813106"></a>Specifies the cgroup parent path of the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row136971311725"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p023010400516"><a name="en-us_topic_0182207105_p023010400516"></a><a name="en-us_topic_0182207105_p023010400516"></a>--cpuset-cpus</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p32320401756"><a name="en-us_topic_0182207105_p32320401756"></a><a name="en-us_topic_0182207105_p32320401756"></a>Allowed CPUs (for example, 0-3, 0, 1).</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row5991571341"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p14237174014515"><a name="en-us_topic_0182207105_p14237174014515"></a><a name="en-us_topic_0182207105_p14237174014515"></a>--cpu-shares</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p42394406520"><a name="en-us_topic_0182207105_p42394406520"></a><a name="en-us_topic_0182207105_p42394406520"></a>CPU share (relative weight).</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row511418111746"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p124434019510"><a name="en-us_topic_0182207105_p124434019510"></a><a name="en-us_topic_0182207105_p124434019510"></a>--cpu-quota</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p324519401555"><a name="en-us_topic_0182207105_p324519401555"></a><a name="en-us_topic_0182207105_p324519401555"></a>Limits the CPU CFS quota.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1898442169"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p8194739375"><a name="en-us_topic_0182207105_p8194739375"></a><a name="en-us_topic_0182207105_p8194739375"></a>--device=[]</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p19196339574"><a name="en-us_topic_0182207105_p19196339574"></a><a name="en-us_topic_0182207105_p19196339574"></a>Adds a device to the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row960516596183"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p126061759201819"><a name="en-us_topic_0182207105_p126061759201819"></a><a name="en-us_topic_0182207105_p126061759201819"></a>--dns</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1560625917186"><a name="en-us_topic_0182207105_p1560625917186"></a><a name="en-us_topic_0182207105_p1560625917186"></a>Adds a DNS server.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row035317281915"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1735311218199"><a name="en-us_topic_0182207105_p1735311218199"></a><a name="en-us_topic_0182207105_p1735311218199"></a>--dns-opt</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p935319217193"><a name="en-us_topic_0182207105_p935319217193"></a><a name="en-us_topic_0182207105_p935319217193"></a>Adds DNS options.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1345415571916"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p19455250193"><a name="en-us_topic_0182207105_p19455250193"></a><a name="en-us_topic_0182207105_p19455250193"></a>--dns-search</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p204552531916"><a name="en-us_topic_0182207105_p204552531916"></a><a name="en-us_topic_0182207105_p204552531916"></a>Sets the search domain of a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row173714521568"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p72051939470"><a name="en-us_topic_0182207105_p72051939470"></a><a name="en-us_topic_0182207105_p72051939470"></a>-e, --env</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p15209739476"><a name="en-us_topic_0182207105_p15209739476"></a><a name="en-us_topic_0182207105_p15209739476"></a>Sets environment variables.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1453110523575"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p8531185213573"><a name="en-us_topic_0182207105_p8531185213573"></a><a name="en-us_topic_0182207105_p8531185213573"></a>--env-file</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p20531052135713"><a name="en-us_topic_0182207105_p20531052135713"></a><a name="en-us_topic_0182207105_p20531052135713"></a>Configures environment variables using a file.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row16463212570"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1021516396713"><a name="en-us_topic_0182207105_p1021516396713"></a><a name="en-us_topic_0182207105_p1021516396713"></a>--entrypoint</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p421833918713"><a name="en-us_topic_0182207105_p421833918713"></a><a name="en-us_topic_0182207105_p421833918713"></a>Entry point to run when the container is started.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row197464191473"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p152241239276"><a name="en-us_topic_0182207105_p152241239276"></a><a name="en-us_topic_0182207105_p152241239276"></a>--external-rootfs=PATH</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p152288395712"><a name="en-us_topic_0182207105_p152288395712"></a><a name="en-us_topic_0182207105_p152288395712"></a>Specifies a rootfs (a folder or block device) that is not managed by iSulad for the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row9905848153714"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p371584910376"><a name="en-us_topic_0182207105_p371584910376"></a><a name="en-us_topic_0182207105_p371584910376"></a>--files-limit</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p19715749163711"><a name="en-us_topic_0182207105_p19715749163711"></a><a name="en-us_topic_0182207105_p19715749163711"></a>Limits the number of file handles that can be opened in a container. The value <strong id="en-us_topic_0182207105_b4611105913276"><a name="en-us_topic_0182207105_b4611105913276"></a><a name="en-us_topic_0182207105_b4611105913276"></a>-1</strong> indicates no limit.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row6682753194610"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_en-us_topic_0124544921_en-us_topic_0043209392_p971311443316"><a name="en-us_topic_0182207105_en-us_topic_0124544921_en-us_topic_0043209392_p971311443316"></a><a name="en-us_topic_0182207105_en-us_topic_0124544921_en-us_topic_0043209392_p971311443316"></a>--group-add=[]</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_en-us_topic_0124544921_en-us_topic_0043209392_p343520423515"><a name="en-us_topic_0182207105_en-us_topic_0124544921_en-us_topic_0043209392_p343520423515"></a><a name="en-us_topic_0182207105_en-us_topic_0124544921_en-us_topic_0043209392_p343520423515"></a>Adds additional user groups to the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row17428191317713"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p42336396714"><a name="en-us_topic_0182207105_p42336396714"></a><a name="en-us_topic_0182207105_p42336396714"></a>--help</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p823614398716"><a name="en-us_topic_0182207105_p823614398716"></a><a name="en-us_topic_0182207105_p823614398716"></a>Displays help information.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row614972012483"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p61501220104817"><a name="en-us_topic_0182207105_p61501220104817"></a><a name="en-us_topic_0182207105_p61501220104817"></a>--health-cmd</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p191500208483"><a name="en-us_topic_0182207105_p191500208483"></a><a name="en-us_topic_0182207105_p191500208483"></a>Command executed in a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1280173244812"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p2028013325485"><a name="en-us_topic_0182207105_p2028013325485"></a><a name="en-us_topic_0182207105_p2028013325485"></a>--health-exit-on-unhealthy</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1928033213487"><a name="en-us_topic_0182207105_p1928033213487"></a><a name="en-us_topic_0182207105_p1928033213487"></a>Determines whether to kill a container when the container is detected unhealthy.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1039723584810"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1039711350489"><a name="en-us_topic_0182207105_p1039711350489"></a><a name="en-us_topic_0182207105_p1039711350489"></a>--health-interval</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p113971935134817"><a name="en-us_topic_0182207105_p113971935134817"></a><a name="en-us_topic_0182207105_p113971935134817"></a>Interval between two consecutive command executions.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row104982394488"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1849953934818"><a name="en-us_topic_0182207105_p1849953934818"></a><a name="en-us_topic_0182207105_p1849953934818"></a>--health-retries</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p12499173910484"><a name="en-us_topic_0182207105_p12499173910484"></a><a name="en-us_topic_0182207105_p12499173910484"></a>Maximum number of health check retries.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row11177446154813"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p11177114634819"><a name="en-us_topic_0182207105_p11177114634819"></a><a name="en-us_topic_0182207105_p11177114634819"></a>--health-start-period</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p9177146184818"><a name="en-us_topic_0182207105_p9177146184818"></a><a name="en-us_topic_0182207105_p9177146184818"></a>Container initialization interval.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1318252595020"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1118313259506"><a name="en-us_topic_0182207105_p1118313259506"></a><a name="en-us_topic_0182207105_p1118313259506"></a>--health-timeout</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1718342515503"><a name="en-us_topic_0182207105_p1718342515503"></a><a name="en-us_topic_0182207105_p1718342515503"></a>Maximum time for executing a single check command.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1233115174718"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p142425395718"><a name="en-us_topic_0182207105_p142425395718"></a><a name="en-us_topic_0182207105_p142425395718"></a>--hook-spec</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p2247173913718"><a name="en-us_topic_0182207105_p2247173913718"></a><a name="en-us_topic_0182207105_p2247173913718"></a>Hook configuration file.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row841117457260"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p17569154712612"><a name="en-us_topic_0182207105_p17569154712612"></a><a name="en-us_topic_0182207105_p17569154712612"></a>-H, --host</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p20572194752612"><a name="en-us_topic_0182207105_p20572194752612"></a><a name="en-us_topic_0182207105_p20572194752612"></a>Specifies the iSulad socket file path to be accessed.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row09098231714"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1125217390718"><a name="en-us_topic_0182207105_p1125217390718"></a><a name="en-us_topic_0182207105_p1125217390718"></a>-h, --hostname</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p11255113910714"><a name="en-us_topic_0182207105_p11255113910714"></a><a name="en-us_topic_0182207105_p11255113910714"></a>Container host name.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1857164385519"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p324317539553"><a name="en-us_topic_0182207105_p324317539553"></a><a name="en-us_topic_0182207105_p324317539553"></a>-i, --interactive</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p9243195320559"><a name="en-us_topic_0182207105_p9243195320559"></a><a name="en-us_topic_0182207105_p9243195320559"></a>Enables the standard input of the container even if it is not connected to the standard input of the container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row64315281478"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p326313393713"><a name="en-us_topic_0182207105_p326313393713"></a><a name="en-us_topic_0182207105_p326313393713"></a>--hugetlb-limit=[]</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p182668394714"><a name="en-us_topic_0182207105_p182668394714"></a><a name="en-us_topic_0182207105_p182668394714"></a>Limits the size of huge-page files, for example, <strong id="en-us_topic_0182207105_b1110532311206"><a name="en-us_topic_0182207105_b1110532311206"></a><a name="en-us_topic_0182207105_b1110532311206"></a>--hugetlb-limit 2MB:32MB</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1292919294714"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p132831239572"><a name="en-us_topic_0182207105_p132831239572"></a><a name="en-us_topic_0182207105_p132831239572"></a>--log-opt=[]</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p2028510390711"><a name="en-us_topic_0182207105_p2028510390711"></a><a name="en-us_topic_0182207105_p2028510390711"></a>Log driver option. By default, the container serial port log function is disabled. You can run the<strong id="en-us_topic_0182207105_b6295933172117"><a name="en-us_topic_0182207105_b6295933172117"></a><a name="en-us_topic_0182207105_b6295933172117"></a> --log-opt disable-log=false</strong> command to enable it.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row10298153113371"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p11298113113710"><a name="en-us_topic_0182207105_p11298113113710"></a><a name="en-us_topic_0182207105_p11298113113710"></a>-l,--label</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p15298143143711"><a name="en-us_topic_0182207105_p15298143143711"></a><a name="en-us_topic_0182207105_p15298143143711"></a>Sets a label for a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1753552953820"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p75351029113820"><a name="en-us_topic_0182207105_p75351029113820"></a><a name="en-us_topic_0182207105_p75351029113820"></a>--lablel-file</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p8535122916381"><a name="en-us_topic_0182207105_p8535122916381"></a><a name="en-us_topic_0182207105_p8535122916381"></a>Sets container labels using files.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1676892518712"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p629323915710"><a name="en-us_topic_0182207105_p629323915710"></a><a name="en-us_topic_0182207105_p629323915710"></a>-m, --memory</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p122954399719"><a name="en-us_topic_0182207105_p122954399719"></a><a name="en-us_topic_0182207105_p122954399719"></a>Memory limit.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row601514193211"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_en-us_topic_0138971318_p11811595428"><a name="en-us_topic_0182207105_en-us_topic_0138971318_p11811595428"></a><a name="en-us_topic_0182207105_en-us_topic_0138971318_p11811595428"></a>--memory-reservation</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_en-us_topic_0138971318_p21815598424"><a name="en-us_topic_0182207105_en-us_topic_0138971318_p21815598424"></a><a name="en-us_topic_0182207105_en-us_topic_0138971318_p21815598424"></a>Sets the container memory limit. The default value is the same as that of <strong id="en-us_topic_0182207105_b1793920553216"><a name="en-us_topic_0182207105_b1793920553216"></a><a name="en-us_topic_0182207105_b1793920553216"></a>--memory</strong>. <strong id="en-us_topic_0182207105_b1227184113245"><a name="en-us_topic_0182207105_b1227184113245"></a><a name="en-us_topic_0182207105_b1227184113245"></a>--memory</strong> is a hard limit, and <strong id="en-us_topic_0182207105_b51315461245"><a name="en-us_topic_0182207105_b51315461245"></a><a name="en-us_topic_0182207105_b51315461245"></a>--memory-reservation</strong> is a soft limit. When the memory usage exceeds the preset value, the memory usage is dynamically adjusted (the system attempts to reduce the memory usage to a value less than the preset value when reclaiming the memory). However, the memory usage may exceed the preset value. Generally, this parameter can be used together with <strong id="en-us_topic_0182207105_b13987731162510"><a name="en-us_topic_0182207105_b13987731162510"></a><a name="en-us_topic_0182207105_b13987731162510"></a>--memory</strong>. The value must be less than the preset value of <strong id="en-us_topic_0182207105_b20288104014258"><a name="en-us_topic_0182207105_b20288104014258"></a><a name="en-us_topic_0182207105_b20288104014258"></a>--memory</strong>. The minimum value is 4 MB.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1052344477"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1930383914714"><a name="en-us_topic_0182207105_p1930383914714"></a><a name="en-us_topic_0182207105_p1930383914714"></a>--memory-swap</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p203051539579"><a name="en-us_topic_0182207105_p203051539579"></a><a name="en-us_topic_0182207105_p203051539579"></a>Memory swap space, which should be a positive integer. The value <strong id="en-us_topic_0182207105_b182541753132720"><a name="en-us_topic_0182207105_b182541753132720"></a><a name="en-us_topic_0182207105_b182541753132720"></a>-1</strong> indicates no limit.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row1728751718149"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p18287417161414"><a name="en-us_topic_0182207105_p18287417161414"></a><a name="en-us_topic_0182207105_p18287417161414"></a>--memory-swappiness</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p15287111731410"><a name="en-us_topic_0182207105_p15287111731410"></a><a name="en-us_topic_0182207105_p15287111731410"></a>The value of swappiness is a positive integer ranging from 0 to 100. The smaller the value is, the less the swap partition is used and the more the memory is used in the Linux system. The larger the value is, the more the swap space is used by the kernel. The default value is <strong id="en-us_topic_0182207105_b179452259155"><a name="en-us_topic_0182207105_b179452259155"></a><a name="en-us_topic_0182207105_b179452259155"></a>–1</strong>, indicating that the default system value is used.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row154751863710"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p7312539679"><a name="en-us_topic_0182207105_p7312539679"></a><a name="en-us_topic_0182207105_p7312539679"></a>--mount</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p183152391174"><a name="en-us_topic_0182207105_p183152391174"></a><a name="en-us_topic_0182207105_p183152391174"></a>Mounts a host directory to a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row565519595210"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p12655457526"><a name="en-us_topic_0182207105_p12655457526"></a><a name="en-us_topic_0182207105_p12655457526"></a>--no-healthcheck</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p765517511527"><a name="en-us_topic_0182207105_p765517511527"></a><a name="en-us_topic_0182207105_p765517511527"></a>Disables the health check configuration.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row8679175615614"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p16321113910720"><a name="en-us_topic_0182207105_p16321113910720"></a><a name="en-us_topic_0182207105_p16321113910720"></a>--name=NAME</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p163231391675"><a name="en-us_topic_0182207105_p163231391675"></a><a name="en-us_topic_0182207105_p163231391675"></a>Container name.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row19100528719"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1033216391775"><a name="en-us_topic_0182207105_p1033216391775"></a><a name="en-us_topic_0182207105_p1033216391775"></a>--net=none</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1633611391076"><a name="en-us_topic_0182207105_p1633611391076"></a><a name="en-us_topic_0182207105_p1633611391076"></a>Connects a container to a network.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row10108143810"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p17982489384"><a name="en-us_topic_0182207105_p17982489384"></a><a name="en-us_topic_0182207105_p17982489384"></a>--pids-limit</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p12982587385"><a name="en-us_topic_0182207105_p12982587385"></a><a name="en-us_topic_0182207105_p12982587385"></a>Limits the number of processes that can be executed in the container. The value <strong id="en-us_topic_0182207105_b18351134916272"><a name="en-us_topic_0182207105_b18351134916272"></a><a name="en-us_topic_0182207105_b18351134916272"></a>-1</strong> indicates no limit.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row204644595611"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p8346153919718"><a name="en-us_topic_0182207105_p8346153919718"></a><a name="en-us_topic_0182207105_p8346153919718"></a>--privileged</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p10349123910710"><a name="en-us_topic_0182207105_p10349123910710"></a><a name="en-us_topic_0182207105_p10349123910710"></a>Grants container extension privileges.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row4715417611"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p93596391276"><a name="en-us_topic_0182207105_p93596391276"></a><a name="en-us_topic_0182207105_p93596391276"></a>-R, --runtime</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1436203919713"><a name="en-us_topic_0182207105_p1436203919713"></a><a name="en-us_topic_0182207105_p1436203919713"></a>Container runtime. The parameter value can be <strong id="en-us_topic_0182207105_b1258611273293"><a name="en-us_topic_0182207105_b1258611273293"></a><a name="en-us_topic_0182207105_b1258611273293"></a>lcr</strong>, which is case insensitive. Therefore, <strong id="en-us_topic_0182207105_b115583315297"><a name="en-us_topic_0182207105_b115583315297"></a><a name="en-us_topic_0182207105_b115583315297"></a>LCR</strong> and <strong id="en-us_topic_0182207105_b163631635122918"><a name="en-us_topic_0182207105_b163631635122918"></a><a name="en-us_topic_0182207105_b163631635122918"></a>lcr</strong> are equivalent.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row9631144512610"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1837363910713"><a name="en-us_topic_0182207105_p1837363910713"></a><a name="en-us_topic_0182207105_p1837363910713"></a>--read-only</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p11378103915718"><a name="en-us_topic_0182207105_p11378103915718"></a><a name="en-us_topic_0182207105_p11378103915718"></a>Sets the rootfs of a container to read-only.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row111022509616"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1538418391715"><a name="en-us_topic_0182207105_p1538418391715"></a><a name="en-us_topic_0182207105_p1538418391715"></a>--restart</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p193871391976"><a name="en-us_topic_0182207105_p193871391976"></a><a name="en-us_topic_0182207105_p193871391976"></a>Restart policy upon container exit.</p>
<p id="en-us_topic_0182207105_p1371141235411"><a name="en-us_topic_0182207105_p1371141235411"></a><a name="en-us_topic_0182207105_p1371141235411"></a>For a system container, <strong id="en-us_topic_0182207105_b4434842183115"><a name="en-us_topic_0182207105_b4434842183115"></a><a name="en-us_topic_0182207105_b4434842183115"></a>--restart on-reboot</strong> is supported.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row16393140174"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p26411214161716"><a name="en-us_topic_0182207105_p26411214161716"></a><a name="en-us_topic_0182207105_p26411214161716"></a>--storage-opt</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p156411614201714"><a name="en-us_topic_0182207105_p156411614201714"></a><a name="en-us_topic_0182207105_p156411614201714"></a>Configures the storage driver option for a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row19571175416574"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p35093214585"><a name="en-us_topic_0182207105_p35093214585"></a><a name="en-us_topic_0182207105_p35093214585"></a>-t, --tty</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p750913265817"><a name="en-us_topic_0182207105_p750913265817"></a><a name="en-us_topic_0182207105_p750913265817"></a>Allocates a pseudo terminal.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row15496195712522"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p11497185745212"><a name="en-us_topic_0182207105_p11497185745212"></a><a name="en-us_topic_0182207105_p11497185745212"></a>--ulimit</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1349715755214"><a name="en-us_topic_0182207105_p1349715755214"></a><a name="en-us_topic_0182207105_p1349715755214"></a>Sets the ulimit for a container.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row26709251165"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p2408193911715"><a name="en-us_topic_0182207105_p2408193911715"></a><a name="en-us_topic_0182207105_p2408193911715"></a>-u, --user</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p2041110391273"><a name="en-us_topic_0182207105_p2041110391273"></a><a name="en-us_topic_0182207105_p2041110391273"></a>User name or UID, in the format of <strong id="en-us_topic_0182207105_b654461913339"><a name="en-us_topic_0182207105_b654461913339"></a><a name="en-us_topic_0182207105_b654461913339"></a>[&lt;name|uid&gt;][:&lt;group|gid&gt;]</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0182207105_row969873217614"><td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p1443220391575"><a name="en-us_topic_0182207105_p1443220391575"></a><a name="en-us_topic_0182207105_p1443220391575"></a>-v, --volume=[]</p>
</td>
<td class="cellrowborder" valign="top"><p id="en-us_topic_0182207105_p343617396718"><a name="en-us_topic_0182207105_p343617396718"></a><a name="en-us_topic_0182207105_p343617396718"></a>Mounts a volume.</p>
</td>
</tr>
</tbody>
</table>

## Constraints<a name="en-us_topic_0182207105_section18811125219118"></a>

-   When the  **--user**  or  **--group-add**  parameter is used to verify the user or group during container startup, if the container uses an OCI image, the verification is performed in the  **etc/passwd**  and  **etc/group**  files of the actual rootfs of the image. If a folder or block device is used as the rootfs of the container, the  **etc/passwd**  and  **etc/group**  files in the host are verified. The rootfs ignores mounting parameters such as  **-v**  and  **--mount**. That is, when these parameters are used to attempt to overwrite the  **etc/passwd**  and  **etc/group**  files, the parameters do not take effect during the search and take effect only when the container is started. The generated configuration is saved in the  **iSulad root directory/engine/container ID/start\_generate\_config.json**  file. The file format is as follows:

    ```
    {
        "uid": 0,
        "gid": 8,
        "additionalGids": [
            1234,
            8
        ]
    }
    ```


## Example<a name="en-us_topic_0182207105_section1734193235916"></a>

Create a container.

```
$ isula create busybox
fd7376591a9c3d8ee9a14f5d2c2e5255b02cc44cddaabca82170efd4497510e1
$ isula ps -a
STATUS PID IMAGE   COMMAND EXIT_CODE RESTART_COUNT STARTAT FINISHAT RUNTIME ID           NAMES                                                            inited -   busybox "sh"    0         0             -       -        lcr     fd7376591a9c fd7376591a9c4521...
```

