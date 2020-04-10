# make Options<a name="EN-US_TOPIC_0229243676"></a>

make command format:  **make**  \[_option_\]... \[_targe_t\]...

In the preceding command:

_option_: parameter option.

_target_: target specified in Makefile.

[Table 1](#table261872312343)  describes the common make options.

**Table  1**  Common make options

<a name="table261872312343"></a>
<table><thead align="left"><tr id="row483385416347"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p16140827163512"><a name="p16140827163512"></a><a name="p16140827163512"></a><em id="i1140132713516"><a name="i1140132713516"></a><a name="i1140132713516"></a>options</em> Value</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p16140627193516"><a name="p16140627193516"></a><a name="p16140627193516"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row146641223153417"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p66641723183418"><a name="p66641723183418"></a><a name="p66641723183418"></a>-C <em id="i2071143410371"><a name="i2071143410371"></a><a name="i2071143410371"></a>dir</em>, --directory=<em id="i185241138163720"><a name="i185241138163720"></a><a name="i185241138163720"></a>dir</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p167365374545"><a name="p167365374545"></a><a name="p167365374545"></a>Specifies <em id="i16802119115913"><a name="i16802119115913"></a><a name="i16802119115913"></a>dir</em> as the working directory after the make command starts to run.</p>
<p id="p136641923113412"><a name="p136641923113412"></a><a name="p136641923113412"></a>When there are multiple <strong id="b208679153538"><a name="b208679153538"></a><a name="b208679153538"></a>-C</strong> options, the final working directory of make is the relative path of the first directory.</p>
</td>
</tr>
<tr id="row3664223203419"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p9664102313340"><a name="p9664102313340"></a><a name="p9664102313340"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7664923163412"><a name="p7664923163412"></a><a name="p7664923163412"></a>Displays all debugging information during execution of the make command. You can use the <strong id="b1215855615316"><a name="b1215855615316"></a><a name="b1215855615316"></a>-d</strong> option to display all the information during the construction of the dependency chain and the reconstruction of the target.</p>
</td>
</tr>
<tr id="row18664623103415"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p176641423143414"><a name="p176641423143414"></a><a name="p176641423143414"></a>-e, --environment-overrides</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1066472313418"><a name="p1066472313418"></a><a name="p1066472313418"></a>Overwrites the variable definition with the same name in Makefile with the environment variable definition.</p>
</td>
</tr>
<tr id="row7664223163412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p176641023193413"><a name="p176641023193413"></a><a name="p176641023193413"></a>-f <em id="i103449715424"><a name="i103449715424"></a><a name="i103449715424"></a>file</em>, --file=<em id="i590218152429"><a name="i590218152429"></a><a name="i590218152429"></a>file</em>, </p>
<p id="p6664723133418"><a name="p6664723133418"></a><a name="p6664723133418"></a>--makefile=<em id="i894722504216"><a name="i894722504216"></a><a name="i894722504216"></a>file</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p86640231342"><a name="p86640231342"></a><a name="p86640231342"></a>Specifies the <em id="i181001119204311"><a name="i181001119204311"></a><a name="i181001119204311"></a>file</em> as the Makefile for the make command.</p>
</td>
</tr>
<tr id="row1391931413209"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17146416192013"><a name="p17146416192013"></a><a name="p17146416192013"></a>-p, --help</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p714619161208"><a name="p714619161208"></a><a name="p714619161208"></a>Displays help information.</p>
</td>
</tr>
<tr id="row1665132393417"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1514691616203"><a name="p1514691616203"></a><a name="p1514691616203"></a>-i, --ignore-errors</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1014611652012"><a name="p1014611652012"></a><a name="p1014611652012"></a>Ignores the errors occurred during the execution.</p>
</td>
</tr>
<tr id="row16160373176"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8337171661716"><a name="p8337171661716"></a><a name="p8337171661716"></a>-k, --keep-going</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p489185181713"><a name="p489185181713"></a><a name="p489185181713"></a>When an error occurs during command execution, the make command is not terminated. The make command executes all commands as many as possible until a known error occurs.</p>
</td>
</tr>
<tr id="row17665152314345"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p76651023113414"><a name="p76651023113414"></a><a name="p76651023113414"></a>-n, --just-print, --dry-run</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p4301952237"><a name="p4301952237"></a><a name="p4301952237"></a>Simulates the execution of commands (including the commands starting with @) in the actual execution sequence. This command is used only to display the execution process and has no actual execution effect.</p>
</td>
</tr>
<tr id="row10665112310347"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17665182320346"><a name="p17665182320346"></a><a name="p17665182320346"></a>-o <em id="i4538184125117"><a name="i4538184125117"></a><a name="i4538184125117"></a>file</em>, --old-file=<em id="i197559712516"><a name="i197559712516"></a><a name="i197559712516"></a>file</em>, --assume-old=<em id="i142693115512"><a name="i142693115512"></a><a name="i142693115512"></a>file</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p9665142320347"><a name="p9665142320347"></a><a name="p9665142320347"></a>The specified <em id="i785024317515"><a name="i785024317515"></a><a name="i785024317515"></a>file</em> does not need to be rebuilt even if its dependency has expired, and no target of this dependency file is rebuilt.</p>
</td>
</tr>
<tr id="row724955371216"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p19485191915135"><a name="p19485191915135"></a><a name="p19485191915135"></a>-p, --print-date-base</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p5485121951311"><a name="p5485121951311"></a><a name="p5485121951311"></a>Before the command is executed, all data of Makefile read by make and the version information of make are printed. If you only need to print the data, run the <strong id="b1524144615716"><a name="b1524144615716"></a><a name="b1524144615716"></a>make -qp</strong> command to view the preset rules and variables before the make command is executed. You can run the <strong id="b2760145314572"><a name="b2760145314572"></a><a name="b2760145314572"></a>make -p -f /dev/null </strong>command.</p>
</td>
</tr>
<tr id="row14665152343412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1366572313418"><a name="p1366572313418"></a><a name="p1366572313418"></a>-r, --no-builtin-rules</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p185914010119"><a name="p185914010119"></a><a name="p185914010119"></a>Ignores the use of embedded implicit rules and the implicit suffix list of all suffix rules.</p>
</td>
</tr>
<tr id="row10665423163414"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p19665192317342"><a name="p19665192317342"></a><a name="p19665192317342"></a>-R, --no-builtin-variabes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p19665023153418"><a name="p19665023153418"></a><a name="p19665023153418"></a>Ignores embedded hidden variables.</p>
</td>
</tr>
<tr id="row1466522383419"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p56651423143412"><a name="p56651423143412"></a><a name="p56651423143412"></a>-s, --silent, --quiet</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7665112319348"><a name="p7665112319348"></a><a name="p7665112319348"></a>Cancels the printing during the command execution.</p>
</td>
</tr>
<tr id="row1665132317347"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1166562312348"><a name="p1166562312348"></a><a name="p1166562312348"></a>-S, --no-keep-going, --stop</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1966582310346"><a name="p1966582310346"></a><a name="p1966582310346"></a>Cancels the <strong id="b738262219581"><a name="b738262219581"></a><a name="b738262219581"></a>-k</strong> option. In the recursive make process, the sub-make inherits the upper-layer command line option through the <strong id="b12527938195812"><a name="b12527938195812"></a><a name="b12527938195812"></a>MAKEFLAGS</strong> variable. You can use the <strong id="b18115449586"><a name="b18115449586"></a><a name="b18115449586"></a>-S</strong> option in the sub-make to cancel the <strong id="b1153515478587"><a name="b1153515478587"></a><a name="b1153515478587"></a>-k</strong> option transferred by the upper-layer command, or cancel the <strong id="b179113118594"><a name="b179113118594"></a><a name="b179113118594"></a>-k</strong> option in the system environment variable <strong id="b1244011515591"><a name="b1244011515591"></a><a name="b1244011515591"></a>MAKEFLAGS</strong>.</p>
</td>
</tr>
<tr id="row15665192317347"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p2665132319342"><a name="p2665132319342"></a><a name="p2665132319342"></a>-t, --touch</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1866562383420"><a name="p1866562383420"></a><a name="p1866562383420"></a>Updates the timestamp of all target files to the current system time. Prevents make from rebuilding all outdated target files.</p>
</td>
</tr>
<tr id="row9665223123417"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p20665423203414"><a name="p20665423203414"></a><a name="p20665423203414"></a>-v, version</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p196651723153419"><a name="p196651723153419"></a><a name="p196651723153419"></a>Displays the make version.</p>
</td>
</tr>
</tbody>
</table>

