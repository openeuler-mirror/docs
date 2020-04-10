# Common JDK Options<a name="EN-US_TOPIC_0229243707"></a>

## Javac Compilation Options<a name="section10656549113410"></a>

The command format for javac compilation is as follows:  **javac**  \[_options_\] \[_sourcefiles_\] \[_classes_\] \[@_argfiles_\]

In the preceding information:

_options_: command options.

_sourcefiles_: one or more source files to be compiled.

_classes_: one or more classes to be processed as comments.

@_argfiles_: one or more files that list options and source files. The  **-J**  option is not allowed in these files.

Javac is a Java compiler. It has many  _options_, but most of them are not commonly used.  [Table 1](#table1342946175212)  describes the common options values. 

**Table  1**  Common javac options

<a name="table1342946175212"></a>
<table><thead align="left"><tr id="row1242184611523"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1142134616527"><a name="p1142134616527"></a><a name="p1142134616527"></a><em id="i196115187577"><a name="i196115187577"></a><a name="i196115187577"></a>options</em> Value</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p174244605210"><a name="p174244605210"></a><a name="p174244605210"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p442204645214"><a name="p442204645214"></a><a name="p442204645214"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="row1642124685214"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p44294645211"><a name="p44294645211"></a><a name="p44294645211"></a>-d <em id="i20380213283"><a name="i20380213283"></a><a name="i20380213283"></a>path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p34284619521"><a name="p34284619521"></a><a name="p34284619521"></a>Path for storing the generated class files.</p>
<p id="p5504192417282"><a name="p5504192417282"></a><a name="p5504192417282"></a>By default, the class files generated after compilation are in the same path as the source file. You can use the <strong id="b658382612820"><a name="b658382612820"></a><a name="b658382612820"></a>-d</strong> option to export the class files to the specified path.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14019112140"><a name="p14019112140"></a><a name="p14019112140"></a># Use the <strong id="b134171432286"><a name="b134171432286"></a><a name="b134171432286"></a>-d</strong> option to export all class files to the <strong id="b1473920366819"><a name="b1473920366819"></a><a name="b1473920366819"></a>bin</strong> directory.</p>
<p id="p1942746165211"><a name="p1942746165211"></a><a name="p1942746165211"></a>javac /src/*.java -d /bin</p>
</td>
</tr>
<tr id="row375616513198"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p8756125113199"><a name="p8756125113199"></a><a name="p8756125113199"></a>-s <em id="i764464192010"><a name="i764464192010"></a><a name="i764464192010"></a>path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1475675181912"><a name="p1475675181912"></a><a name="p1475675181912"></a>Path for storing the generated source files.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p275614511197"><a name="p275614511197"></a><a name="p275614511197"></a>-</p>
</td>
</tr>
<tr id="row3421646125214"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p24254614529"><a name="p24254614529"></a><a name="p24254614529"></a>-cp <em id="i457411173112"><a name="i457411173112"></a><a name="i457411173112"></a>path</em> or -classpath <em id="i778195173018"><a name="i778195173018"></a><a name="i778195173018"></a>path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18626736181820"><a name="p18626736181820"></a><a name="p18626736181820"></a>Searches for the class files required for compilation and specifies the location of the class files.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16112433132010"><a name="p16112433132010"></a><a name="p16112433132010"></a># In the Demo, the getLine() method in the GetStringDemo class needs to be invoked. The .class file compiled by the GetStringDemo class is stored in the bin directory.</p>
<p id="p13429467521"><a name="p13429467521"></a><a name="p13429467521"></a>javac -cp bin Demo.java -d bin</p>
</td>
</tr>
<tr id="row642846145211"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1342746115211"><a name="p1342746115211"></a><a name="p1342746115211"></a>-verbose</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14710104517231"><a name="p14710104517231"></a><a name="p14710104517231"></a>Outputs information about the operations being performed by the compiler, such as loaded class information and compiled source file information.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13427463528"><a name="p13427463528"></a><a name="p13427463528"></a># Display information about the operations that are being performed by the compiler.</p>
<p id="p597061913259"><a name="p597061913259"></a><a name="p597061913259"></a>javac -verbose -cp bin Demo.java</p>
</td>
</tr>
<tr id="row2428463528"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p105251952881"><a name="p105251952881"></a><a name="p105251952881"></a>-source <em id="i9779313155317"><a name="i9779313155317"></a><a name="i9779313155317"></a>sourceversion</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1983024422919"><a name="p1983024422919"></a><a name="p1983024422919"></a>Specifies the location of the input source files to be searched for.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13782338155311"><a name="p13782338155311"></a><a name="p13782338155311"></a>-</p>
</td>
</tr>
<tr id="row176441743349"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p176441749342"><a name="p176441749342"></a><a name="p176441749342"></a>-sourcepath <em id="i076711126546"><a name="i076711126546"></a><a name="i076711126546"></a>path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p26440463410"><a name="p26440463410"></a><a name="p26440463410"></a>Searches for source files (Java files) required for compilation and specifies the location of the source files to be searched for, for example, JAR, ZIP, or other directories that contain Java files.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11644444347"><a name="p11644444347"></a><a name="p11644444347"></a>-</p>
</td>
</tr>
<tr id="row143691297164"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p4369112911615"><a name="p4369112911615"></a><a name="p4369112911615"></a>-target <em id="i14257152018569"><a name="i14257152018569"></a><a name="i14257152018569"></a>targetversion</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p136932971616"><a name="p136932971616"></a><a name="p136932971616"></a>Generates class files of a specific JVM version. The value can be 1.1, 1.2, 1.3, 1.4, 1.5 (or 5), 1.6 (or 6), 1.7 (or 7), or 1.8 (or 8). The default value of <em id="i11835571336"><a name="i11835571336"></a><a name="i11835571336"></a>targetversion</em> is related to <em id="i18928115712016"><a name="i18928115712016"></a><a name="i18928115712016"></a>sourceversion</em> of the <strong id="b228302515110"><a name="b228302515110"></a><a name="b228302515110"></a>-source</strong> option. The options of <em id="i4318123110111"><a name="i4318123110111"></a><a name="i4318123110111"></a>sourceversion</em> are as follows:</p>
<a name="ul13412711218"></a><a name="ul13412711218"></a><ul id="ul13412711218"><li>1.2, corresponding to target version 1.4</li><li>1.3, corresponding to target version 1.4</li><li>1.5, 1.6, 1.7, and unspecified, corresponding to target version 1.8</li><li>For other values, the values of <em id="i137183415128"><a name="i137183415128"></a><a name="i137183415128"></a>targetversion</em> and <em id="i20974133631212"><a name="i20974133631212"></a><a name="i20974133631212"></a>sourceversion</em> are the same.</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1037012921612"><a name="p1037012921612"></a><a name="p1037012921612"></a>-</p>
</td>
</tr>
</tbody>
</table>

## Java Running Options<a name="section167185584230"></a>

The Java running format is as follows:

Running class file:  **java**  \[_options_\]  _classesname_  \[args\]

Running Java file:  **java**  \[_options_\] -jar  _filename_  \[args\]

In the preceding information:

_options_: command options, which are separated by spaces.

_classname_: name of the running .class file.

_filename_: name of the running .jar file.

args: parameters transferred to the main\(\) function. The parameters are separated by spaces.

Java is a tool for running Java applications. It has many  _options_, but most of them are not commonly used.  [Table 2](#table371918587238)  describes the common options.

**Table  2**  Common Java running options

<a name="table371918587238"></a>
<table><thead align="left"><tr id="row19719155892316"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="p127195582239"><a name="p127195582239"></a><a name="p127195582239"></a><em id="i4719195817238"><a name="i4719195817238"></a><a name="i4719195817238"></a>options</em> Value</p>
</th>
<th class="cellrowborder" valign="top" width="33.473347334733475%" id="mcps1.2.4.1.2"><p id="p1771955817233"><a name="p1771955817233"></a><a name="p1771955817233"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.193319331933196%" id="mcps1.2.4.1.3"><p id="p14719175810236"><a name="p14719175810236"></a><a name="p14719175810236"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="row37191558122312"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p1671955816237"><a name="p1671955816237"></a><a name="p1671955816237"></a>-cp <em id="i1871935862315"><a name="i1871935862315"></a><a name="i1871935862315"></a>path</em> or -classpath <em id="i11719858102316"><a name="i11719858102316"></a><a name="i11719858102316"></a>path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.473347334733475%" headers="mcps1.2.4.1.2 "><p id="p1152514674520"><a name="p1152514674520"></a><a name="p1152514674520"></a>Specifies the location of the file to be run and the class path to be used, including the .jar, .zip, and class file directories.</p>
<p id="p540484613433"><a name="p540484613433"></a><a name="p540484613433"></a>If there are multiple paths, separate them with colons (:).</p>
</td>
<td class="cellrowborder" valign="top" width="33.193319331933196%" headers="mcps1.2.4.1.3 "><p id="p293442512447"><a name="p293442512447"></a><a name="p293442512447"></a>-</p>
</td>
</tr>
<tr id="row1471945892312"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p117191858152310"><a name="p117191858152310"></a><a name="p117191858152310"></a>-verbose</p>
</td>
<td class="cellrowborder" valign="top" width="33.473347334733475%" headers="mcps1.2.4.1.2 "><p id="p15719458172315"><a name="p15719458172315"></a><a name="p15719458172315"></a>Outputs information about the operations being performed by the compiler, such as loaded class information and compiled source file information.</p>
</td>
<td class="cellrowborder" valign="top" width="33.193319331933196%" headers="mcps1.2.4.1.3 "><p id="p1371985892314"><a name="p1371985892314"></a><a name="p1371985892314"></a># Display information about the operations that are being performed by the compiler.</p>
<p id="p1271918588236"><a name="p1271918588236"></a><a name="p1271918588236"></a>java -verbose -cp bin Demo.java</p>
</td>
</tr>
</tbody>
</table>

## JAR Options<a name="section769161884817"></a>

The JAR command format is as follows:  **jar**  \{c | t | x | u\}\[vfm0M\] \[_jarfile_\] \[_manifest_\] \[-C  _dir_\]  _file_...

[Table 3](#table3691718114817)  describes the parameters in the  **jar**  command.

**Table  3**  JAR parameter description

<a name="table3691718114817"></a>
<table><thead align="left"><tr id="row469131813486"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p869141854816"><a name="p869141854816"></a><a name="p869141854816"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p166981819484"><a name="p166981819484"></a><a name="p166981819484"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p11691618144815"><a name="p11691618144815"></a><a name="p11691618144815"></a>Example</p>
</th>
</tr>
</thead>
<tbody><tr id="row186961818481"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p56921810488"><a name="p56921810488"></a><a name="p56921810488"></a>c</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18698186485"><a name="p18698186485"></a><a name="p18698186485"></a>Creates a JAR package.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p395117464185"><a name="p395117464185"></a><a name="p395117464185"></a># Compress the hello.class files in the current directory into Hello.jar. The compression process is not displayed. If the Hello.jar files do not exist, create them. Otherwise, clear the directory.</p>
<p id="p1969718204817"><a name="p1969718204817"></a><a name="p1969718204817"></a>jar cf Hello.jar hello.class</p>
</td>
</tr>
<tr id="row5291198204514"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p529217884512"><a name="p529217884512"></a><a name="p529217884512"></a>t</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p152928874519"><a name="p152928874519"></a><a name="p152928874519"></a>Lists the contents of a JAR package.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p679215156210"><a name="p679215156210"></a><a name="p679215156210"></a># List the files contained in Hello.jar.</p>
<p id="p15292158134516"><a name="p15292158134516"></a><a name="p15292158134516"></a>jar tf Hello.jar</p>
</td>
</tr>
<tr id="row1468581013453"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13685141074520"><a name="p13685141074520"></a><a name="p13685141074520"></a>x</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p46851710184513"><a name="p46851710184513"></a><a name="p46851710184513"></a>Decompresses a JAR package.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14669751122111"><a name="p14669751122111"></a><a name="p14669751122111"></a># Decompress Hello.jar to the current directory. No information is displayed.</p>
<p id="p1668512104459"><a name="p1668512104459"></a><a name="p1668512104459"></a>jar xf Hello.jar</p>
</td>
</tr>
<tr id="row5230213164512"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p112301913184514"><a name="p112301913184514"></a><a name="p112301913184514"></a>u</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1723013133454"><a name="p1723013133454"></a><a name="p1723013133454"></a>Updates the existing JAR package, for example, add files to the JAR package.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p3230313144514"><a name="p3230313144514"></a><a name="p3230313144514"></a>-</p>
</td>
</tr>
<tr id="row8709101720454"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11709181784515"><a name="p11709181784515"></a><a name="p11709181784515"></a>v</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2709017154510"><a name="p2709017154510"></a><a name="p2709017154510"></a>Generates a detailed report and prints it to the standard output.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p9879101591911"><a name="p9879101591911"></a><a name="p9879101591911"></a># Compress the hello.class files in the current directory into Hello.jar and display the compression process. If the Hello.jar files do not exist, create them. Otherwise, clear the directory.</p>
<p id="p1070921704511"><a name="p1070921704511"></a><a name="p1070921704511"></a>jar cvf Hello.jar hello.class</p>
</td>
</tr>
<tr id="row1080482004511"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11805192016459"><a name="p11805192016459"></a><a name="p11805192016459"></a>f</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p158051209453"><a name="p158051209453"></a><a name="p158051209453"></a>Specifies the name of a JAR package. This parameter is mandatory.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p118051120184516"><a name="p118051120184516"></a><a name="p118051120184516"></a>-</p>
</td>
</tr>
<tr id="row11699184482"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p176991817487"><a name="p176991817487"></a><a name="p176991817487"></a>m</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p06981811483"><a name="p06981811483"></a><a name="p06981811483"></a>Specifies the manifest file to be contained.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p46915184486"><a name="p46915184486"></a><a name="p46915184486"></a>-</p>
</td>
</tr>
<tr id="row15327111618118"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1932751619113"><a name="p1932751619113"></a><a name="p1932751619113"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p193273161711"><a name="p193273161711"></a><a name="p193273161711"></a>If this parameter is not set, the generated JAR package is larger but faster than that generated when this parameter is not set.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p63281416513"><a name="p63281416513"></a><a name="p63281416513"></a>-</p>
</td>
</tr>
<tr id="row1861744310119"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2617194320119"><a name="p2617194320119"></a><a name="p2617194320119"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1761744316114"><a name="p1761744316114"></a><a name="p1761744316114"></a>If the manifest file of all items is not generated, this parameter will be ignored.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1579284402215"><a name="p1579284402215"></a><a name="p1579284402215"></a># Compress the hello.class files in the current directory into Hello.jar and display the compression process. If the Hello.jar files do not exist, create them. Otherwise, clear the directory. However, the manifest file is not generated when Hello.jar is created.</p>
<p id="p16617144311111"><a name="p16617144311111"></a><a name="p16617144311111"></a>jar cvfM Hello.jar hello.class</p>
</td>
</tr>
<tr id="row147450411029"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p152616437213"><a name="p152616437213"></a><a name="p152616437213"></a><em id="i726104310214"><a name="i726104310214"></a><a name="i726104310214"></a>jarfile</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p107451041428"><a name="p107451041428"></a><a name="p107451041428"></a>JAR package, which is an auxiliary parameter of the <strong id="b913333192110"><a name="b913333192110"></a><a name="b913333192110"></a>f</strong> parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p274516411216"><a name="p274516411216"></a><a name="p274516411216"></a>-</p>
</td>
</tr>
<tr id="row1237893913213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1237843913220"><a name="p1237843913220"></a><a name="p1237843913220"></a><em id="i42694316216"><a name="i42694316216"></a><a name="i42694316216"></a>manifest</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1337919391620"><a name="p1337919391620"></a><a name="p1337919391620"></a>Manifest file in .mf format, which is an auxiliary parameter of the <strong id="b158411017142115"><a name="b158411017142115"></a><a name="b158411017142115"></a>m</strong> parameter.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p337918399214"><a name="p337918399214"></a><a name="p337918399214"></a>-</p>
</td>
</tr>
<tr id="row162725361324"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p52731736622"><a name="p52731736622"></a><a name="p52731736622"></a>-C <em id="i978316291535"><a name="i978316291535"></a><a name="i978316291535"></a>dir</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1527317361325"><a name="p1527317361325"></a><a name="p1527317361325"></a>Runs the <strong id="b103281229132114"><a name="b103281229132114"></a><a name="b103281229132114"></a>jar</strong> command in the specified <em id="i11818154002118"><a name="i11818154002118"></a><a name="i11818154002118"></a>dir</em>. This command can be used only with parameters <strong id="b1899394472113"><a name="b1899394472113"></a><a name="b1899394472113"></a>c</strong> and <strong id="b296319461215"><a name="b296319461215"></a><a name="b296319461215"></a>t</strong>.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19273636426"><a name="p19273636426"></a><a name="p19273636426"></a>-</p>
</td>
</tr>
<tr id="row18174749434"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1417415497317"><a name="p1417415497317"></a><a name="p1417415497317"></a><em id="i9360207744"><a name="i9360207744"></a><a name="i9360207744"></a>file</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5168141281513"><a name="p5168141281513"></a><a name="p5168141281513"></a>Specifies the file or path list. All files in the file or path (including those in the recursive path) are compressed into the JAR package or the JAR package is decompressed to the path.</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18394164919196"><a name="p18394164919196"></a><a name="p18394164919196"></a># Compress all class files in the current directory into Hello.jar and display the compression process. If the Hello.jar files do not exist, create them. Otherwise, clear the directory.</p>
<p id="p1256213921917"><a name="p1256213921917"></a><a name="p1256213921917"></a>jar cvf Hello.jar *.class</p>
</td>
</tr>
</tbody>
</table>

