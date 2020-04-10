# Compilation Options<a name="EN-US_TOPIC_0229243710"></a>

GCC compilation command format:  **gcc**  \[_options_\] \[_filenames_\]

In the preceding information:

_options_: compilation options.

_filenames_: file name.

GCC is a powerful compiler. It has many  _options_, but most of them are not commonly used.  [Table 1](#table1342946175212)  describes the common  _options_.

**Table  1**  Common GCC compilation options

<a name="table1342946175212"></a>
<table><thead align="left"><tr id="row1242184611523"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1142134616527"><a name="p1142134616527"></a><a name="p1142134616527"></a><em id="i196115187577"><a name="i196115187577"></a><a name="i196115187577"></a>options</em> Value</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p174244605210"><a name="p174244605210"></a><a name="p174244605210"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p442204645214"><a name="p442204645214"></a><a name="p442204645214"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="row1642124685214"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p44294645211"><a name="p44294645211"></a><a name="p44294645211"></a>-c</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p34284619521"><a name="p34284619521"></a><a name="p34284619521"></a>Compiles and assembles specified source files to generate target files without linking them. It is usually used to compile subprogram files.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14019112140"><a name="p14019112140"></a><a name="p14019112140"></a># Use the <strong id="b15704103318161"><a name="b15704103318161"></a><a name="b15704103318161"></a>-c</strong> option to compile the source files <strong id="b5730325113912"><a name="b5730325113912"></a><a name="b5730325113912"></a>test1.c</strong> and <strong id="b1037492873914"><a name="b1037492873914"></a><a name="b1037492873914"></a>test2.c</strong>.</p>
<p id="p1942746165211"><a name="p1942746165211"></a><a name="p1942746165211"></a>gcc -c test1.c test2.c</p>
</td>
</tr>
<tr id="row3421646125214"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p24254614529"><a name="p24254614529"></a><a name="p24254614529"></a>-S</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18626736181820"><a name="p18626736181820"></a><a name="p18626736181820"></a>Compiles the specified source file to generate an assembly language file with the .s suffix but without assembling it.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16112433132010"><a name="p16112433132010"></a><a name="p16112433132010"></a># Use the compiler to preprocess <strong id="b6956382397"><a name="b6956382397"></a><a name="b6956382397"></a>circle.c</strong>, translate it into assembly language, and store the result in circle.s.</p>
<p id="p13429467521"><a name="p13429467521"></a><a name="p13429467521"></a>gcc -S circle.c</p>
</td>
</tr>
<tr id="row642846145211"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1342746115211"><a name="p1342746115211"></a><a name="p1342746115211"></a>-E</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7422046195217"><a name="p7422046195217"></a><a name="p7422046195217"></a>Preprocesses specified source files without compiling them.</p>
<p id="p14710104517231"><a name="p14710104517231"></a><a name="p14710104517231"></a>By default, the output of the preprocessor is imported to a standard output stream, such as a display. You can use the <strong id="b1992235512337"><a name="b1992235512337"></a><a name="b1992235512337"></a>-o</strong> option to import it to an output file.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13427463528"><a name="p13427463528"></a><a name="p13427463528"></a># Export the preprocessing result to the <strong id="b1412417210403"><a name="b1412417210403"></a><a name="b1412417210403"></a>circle.i</strong> file.</p>
<p id="p597061913259"><a name="p597061913259"></a><a name="p597061913259"></a>gcc -E circle.c -o circle.i</p>
</td>
</tr>
<tr id="row2428463528"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p105251952881"><a name="p105251952881"></a><a name="p105251952881"></a>-o <em id="i173821510183619"><a name="i173821510183619"></a><a name="i173821510183619"></a>file</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1983024422919"><a name="p1983024422919"></a><a name="p1983024422919"></a>Generates a specified output <em id="i11398171815369"><a name="i11398171815369"></a><a name="i11398171815369"></a>file</em> when an executable file is generated. The name must be different from that of the source file. If this option is not given, GCC generates the preset executable file <strong id="b202401010403"><a name="b202401010403"></a><a name="b202401010403"></a>a.out</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1421946155218"><a name="p1421946155218"></a><a name="p1421946155218"></a># Use the source file as the input file and the executable file as the output file. That is, compile the entire program.</p>
<p id="p62691423153012"><a name="p62691423153012"></a><a name="p62691423153012"></a>gcc main.c func.c -o app.out</p>
</td>
</tr>
<tr id="row176441743349"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p176441749342"><a name="p176441749342"></a><a name="p176441749342"></a>-g</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p26440463410"><a name="p26440463410"></a><a name="p26440463410"></a>Contains standard debugging information in executable programs.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11644444347"><a name="p11644444347"></a><a name="p11644444347"></a>-</p>
</td>
</tr>
<tr id="row143691297164"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p4369112911615"><a name="p4369112911615"></a><a name="p4369112911615"></a>-L <em id="i599713033614"><a name="i599713033614"></a><a name="i599713033614"></a>libary_path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p136932971616"><a name="p136932971616"></a><a name="p136932971616"></a>Adds the <em id="i1847052212361"><a name="i1847052212361"></a><a name="i1847052212361"></a>library_path</em> to the library file search path list.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1037012921612"><a name="p1037012921612"></a><a name="p1037012921612"></a>-</p>
</td>
</tr>
<tr id="row842104610528"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5424465527"><a name="p5424465527"></a><a name="p5424465527"></a>-I<em id="i10991558173512"><a name="i10991558173512"></a><a name="i10991558173512"></a>library</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18320171014373"><a name="p18320171014373"></a><a name="p18320171014373"></a>Searches for the specified function <em id="i2372113093620"><a name="i2372113093620"></a><a name="i2372113093620"></a>library</em> during linking.</p>
<p id="p16725256915"><a name="p16725256915"></a><a name="p16725256915"></a>When GCC is used to compile and link programs, GCC links <strong id="b14242202114016"><a name="b14242202114016"></a><a name="b14242202114016"></a>libc.a</strong> or <strong id="b899592344010"><a name="b899592344010"></a><a name="b899592344010"></a>libc.so</strong> by default. However, other libraries (such as non-standard libraries and third-party libraries) need to be manually added.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p74284665213"><a name="p74284665213"></a><a name="p74284665213"></a># Use the <strong id="b2509151215374"><a name="b2509151215374"></a><a name="b2509151215374"></a>-l</strong> option to link the math library.</p>
<p id="p38153114016"><a name="p38153114016"></a><a name="p38153114016"></a>gcc main.c -o main.out -lm</p>
<div class="note" id="note267663724120"><a name="note267663724120"></a><a name="note267663724120"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p14677203718413"><a name="p14677203718413"></a><a name="p14677203718413"></a>The file name of the math library is <strong id="b5740163015409"><a name="b5740163015409"></a><a name="b5740163015409"></a>libm.a</strong>. The prefix lib and suffix .a are standard, and <strong id="b9482103019379"><a name="b9482103019379"></a><a name="b9482103019379"></a>m</strong> is the basic name. GCC automatically adds these prefixes and suffixes to the basic name following the <strong id="b3245194017372"><a name="b3245194017372"></a><a name="b3245194017372"></a>-l</strong> option. In this example, the basic name is <strong id="b1610984373710"><a name="b1610984373710"></a><a name="b1610984373710"></a>m</strong>.</p>
</div></div>
</td>
</tr>
<tr id="row52061353193420"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7206175319346"><a name="p7206175319346"></a><a name="p7206175319346"></a>-I <em id="i19693154753619"><a name="i19693154753619"></a><a name="i19693154753619"></a>head_path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p120610535342"><a name="p120610535342"></a><a name="p120610535342"></a>Adds the <em id="i0580453193716"><a name="i0580453193716"></a><a name="i0580453193716"></a>head_path</em> to the search path list of the header file.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p82061053203413"><a name="p82061053203413"></a><a name="p82061053203413"></a>-</p>
</td>
</tr>
<tr id="row366111303814"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p266713193820"><a name="p266713193820"></a><a name="p266713193820"></a>-static</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p96691363816"><a name="p96691363816"></a><a name="p96691363816"></a>Performs static compilation and links static libraries. Do not link dynamic libraries.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1266913103816"><a name="p1266913103816"></a><a name="p1266913103816"></a>-</p>
</td>
</tr>
<tr id="row19323190113910"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p8323190153911"><a name="p8323190153911"></a><a name="p8323190153911"></a>-shared</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18490202055012"><a name="p18490202055012"></a><a name="p18490202055012"></a>Default option, which can be omitted.</p>
<a name="ul192366134394"></a><a name="ul192366134394"></a><ul id="ul192366134394"><li>A dynamic library file can be generated.</li><li>During dynamic compilation, the dynamic library is preferentially linked. The static library with the same name is linked only when there is no dynamic library.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18323150113918"><a name="p18323150113918"></a><a name="p18323150113918"></a>-</p>
</td>
</tr>
<tr id="row1867594174012"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14675641184011"><a name="p14675641184011"></a><a name="p14675641184011"></a>-fPIC (or -fpic)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1267518411405"><a name="p1267518411405"></a><a name="p1267518411405"></a>Generates location-independent target code that uses a relative address. Generally, the <strong id="b125321721133910"><a name="b125321721133910"></a><a name="b125321721133910"></a>-static</strong> option is used to generate a dynamic library file from the PIC target file.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p26751941134013"><a name="p26751941134013"></a><a name="p26751941134013"></a>-</p>
</td>
</tr>
</tbody>
</table>

