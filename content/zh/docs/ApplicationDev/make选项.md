# make选项<a name="ZH-CN_TOPIC_0229243676"></a>

make命令格式为：**make**  \[_option_\]... \[_targe_t\]...

其中：

_option_：参数选项。

_target_：Makefile中指定的目标。

常用make的_option_取值如[表1](#table261872312343)所示。

**表 1**  常用的make选项

<a name="table261872312343"></a>
<table><thead align="left"><tr id="row483385416347"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p16140827163512"><a name="p16140827163512"></a><a name="p16140827163512"></a><em id="i1140132713516"><a name="i1140132713516"></a><a name="i1140132713516"></a>options</em>取值</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p16140627193516"><a name="p16140627193516"></a><a name="p16140627193516"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row146641223153417"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p66641723183418"><a name="p66641723183418"></a><a name="p66641723183418"></a>-C <em id="i2071143410371"><a name="i2071143410371"></a><a name="i2071143410371"></a>dir</em>，--directory=<em id="i185241138163720"><a name="i185241138163720"></a><a name="i185241138163720"></a>dir</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p167365374545"><a name="p167365374545"></a><a name="p167365374545"></a>指定make在开始运行后的工作目录为<em id="i16802119115913"><a name="i16802119115913"></a><a name="i16802119115913"></a>dir</em>。</p>
<p id="p136641923113412"><a name="p136641923113412"></a><a name="p136641923113412"></a>当存在多个 -C 选项的时候，make 的最终工作目录是第一个目录的相对路径。</p>
</td>
</tr>
<tr id="row3664223203419"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p9664102313340"><a name="p9664102313340"></a><a name="p9664102313340"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7664923163412"><a name="p7664923163412"></a><a name="p7664923163412"></a>make在执行的过程中打印出所有的调试信息。使用-d选项可以显示make构造依赖关系链、重建目标过程中的所有信息。</p>
</td>
</tr>
<tr id="row18664623103415"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p176641423143414"><a name="p176641423143414"></a><a name="p176641423143414"></a>-e，--enveronment-overrides</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1066472313418"><a name="p1066472313418"></a><a name="p1066472313418"></a>使用环境变量定义覆盖Makefile中的同名变量定义。</p>
</td>
</tr>
<tr id="row7664223163412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p176641023193413"><a name="p176641023193413"></a><a name="p176641023193413"></a>-f <em id="i103449715424"><a name="i103449715424"></a><a name="i103449715424"></a>file</em>，--file=<em id="i590218152429"><a name="i590218152429"></a><a name="i590218152429"></a>file</em>，</p>
<p id="p6664723133418"><a name="p6664723133418"></a><a name="p6664723133418"></a>--makefile=<em id="i894722504216"><a name="i894722504216"></a><a name="i894722504216"></a>file</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p86640231342"><a name="p86640231342"></a><a name="p86640231342"></a>指定<em id="i181001119204311"><a name="i181001119204311"></a><a name="i181001119204311"></a>file</em>文件为make 执行的Makefile文件。</p>
</td>
</tr>
<tr id="row1391931413209"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17146416192013"><a name="p17146416192013"></a><a name="p17146416192013"></a>-p，--help</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p714619161208"><a name="p714619161208"></a><a name="p714619161208"></a>打印帮助信息。</p>
</td>
</tr>
<tr id="row1665132393417"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1514691616203"><a name="p1514691616203"></a><a name="p1514691616203"></a>-i，--ignore-errors</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1014611652012"><a name="p1014611652012"></a><a name="p1014611652012"></a>执行过程中忽略规则命令执行的错误。</p>
</td>
</tr>
<tr id="row16160373176"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8337171661716"><a name="p8337171661716"></a><a name="p8337171661716"></a>-k，<span>--keep-going</span></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p489185181713"><a name="p489185181713"></a><a name="p489185181713"></a><span>执行命令错误时不终止make的执行，make 尽最大可能执行所有的命令，直至出现知名的错误才终止。</span></p>
</td>
</tr>
<tr id="row17665152314345"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p76651023113414"><a name="p76651023113414"></a><a name="p76651023113414"></a>-n，--just-print，--dry-run</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p4301952237"><a name="p4301952237"></a><a name="p4301952237"></a>按实际运行时的执行顺序模拟执行命令(包括用@开头的命令)，没有实际执行效果，仅仅用于显示执行过程。</p>
</td>
</tr>
<tr id="row10665112310347"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17665182320346"><a name="p17665182320346"></a><a name="p17665182320346"></a>-o <em id="i4538184125117"><a name="i4538184125117"></a><a name="i4538184125117"></a>file</em>，--old-file=<em id="i197559712516"><a name="i197559712516"></a><a name="i197559712516"></a>file</em>，--assume-old=<em id="i142693115512"><a name="i142693115512"></a><a name="i142693115512"></a>file</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p9665142320347"><a name="p9665142320347"></a><a name="p9665142320347"></a>指定<em id="i785024317515"><a name="i785024317515"></a><a name="i785024317515"></a>file</em>文件不需要重建，即使它的依赖已经过期，同时不重建此依赖文件的任何目标。</p>
</td>
</tr>
<tr id="row724955371216"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p19485191915135"><a name="p19485191915135"></a><a name="p19485191915135"></a>-p，--print-date-base</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p5485121951311"><a name="p5485121951311"></a><a name="p5485121951311"></a>命令执行之前，打印出make读取的Makefile的所有数据，同时打印出 make的版本信息。如果只需要打印这些数据信息，可以使用 “make -qp”命令，查看 make 执行之前预设的规则和变量，可使用命令“make -p -f /dev/null”。</p>
</td>
</tr>
<tr id="row14665152343412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1366572313418"><a name="p1366572313418"></a><a name="p1366572313418"></a>-r，--no-builtin-rules</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p185914010119"><a name="p185914010119"></a><a name="p185914010119"></a>忽略内嵌的隐含规则的使用，同时忽略所有后缀规则的隐含后缀列表。</p>
</td>
</tr>
<tr id="row10665423163414"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p19665192317342"><a name="p19665192317342"></a><a name="p19665192317342"></a>-R，--no-builtin-variabes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p19665023153418"><a name="p19665023153418"></a><a name="p19665023153418"></a>忽略内嵌的隐含变量。</p>
</td>
</tr>
<tr id="row1466522383419"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p56651423143412"><a name="p56651423143412"></a><a name="p56651423143412"></a>-s，--silent，--quiet</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7665112319348"><a name="p7665112319348"></a><a name="p7665112319348"></a>取消命令执行过程中的打印。</p>
</td>
</tr>
<tr id="row1665132317347"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1166562312348"><a name="p1166562312348"></a><a name="p1166562312348"></a>-S，--no-keep-going，--stop</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1966582310346"><a name="p1966582310346"></a><a name="p1966582310346"></a>取消 "-k" 的选项在递归的 make 过程中子 make 通过 "MAKEFLAGS" 变量继承了上层的命令行选项那个。我们可以在子 make 中使用“-S”选项取消上层传递的 "-k" 选项，或者取消系统环境变量 "MAKEFLAGS" 中 "-k"选项。</p>
</td>
</tr>
<tr id="row15665192317347"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p2665132319342"><a name="p2665132319342"></a><a name="p2665132319342"></a>-t，--touch</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1866562383420"><a name="p1866562383420"></a><a name="p1866562383420"></a>更新所有的目标文件的时间戳到当前系统时间。防止 make 对所有过时目标文件的重建。</p>
</td>
</tr>
<tr id="row9665223123417"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p20665423203414"><a name="p20665423203414"></a><a name="p20665423203414"></a>-v，version</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p196651723153419"><a name="p196651723153419"></a><a name="p196651723153419"></a>查看make的版本信息。</p>
</td>
</tr>
</tbody>
</table>

