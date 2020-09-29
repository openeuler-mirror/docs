# 使用JDK编译
<!-- TOC -->

- [使用JDK编译](#使用jdk编译)
    - [简介](#简介)
    - [基本规则](#基本规则)
        - [文件类型及工具](#文件类型及工具)
        - [java程序生成流程](#java程序生成流程)
        - [JDK常用工具选项](#jdk常用工具选项)
    - [类库](#类库)
        - [包的声明](#包的声明)
        - [包的引用](#包的引用)
    - [示例](#示例)
        - [编译不带包的java程序示例](#编译不带包的java程序示例)
        - [编译带包的java程序示例](#编译带包的java程序示例)

<!-- /TOC -->

## 简介

JDK（Java Development Kit）是 Java 开发者进行 Java 开发所必须的软件包，包含 JRE（Java Runtime Environment）和编译、调测工具。openEuler在OpenJDK 的基础上进行了 GC 优化、并发稳定性增强、安全性增强等修改，提高了 Java 应用程序在 ARM 上的性能和稳定性。

## 基本规则


### 文件类型及工具

对于任何给定的输入文件，文件类型决定采用何种工具进行处理。JDK常用的文件类型如[表1](#table634145764320)所示，JDK常用的工具如[表2](#table103504146433)所示。

**表 1**  JDK常用的文件类型

<a name="table634145764320"></a>
<table><thead align="left"><tr id="row53445724319"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p134175716436"><a name="p134175716436"></a><a name="p134175716436"></a>扩展名（后缀）</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p3341573439"><a name="p3341573439"></a><a name="p3341573439"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row2341857174311"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p143419579434"><a name="p143419579434"></a><a name="p143419579434"></a>.java</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1634125794311"><a name="p1634125794311"></a><a name="p1634125794311"></a>java语言源代码文件。</p>
</td>
</tr>
<tr id="row334185744314"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p134105764319"><a name="p134105764319"></a><a name="p134105764319"></a>.class</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p13425717436"><a name="p13425717436"></a><a name="p13425717436"></a>java的字节码文件，是一种和任何具体机器环境及操作系统环境无关的中间代码。它是一种二进制文件，是Java 源文件由 Java 编译器编译后生成的目标代码文件。</p>
</td>
</tr>
<tr id="row1934157104315"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1234957124317"><a name="p1234957124317"></a><a name="p1234957124317"></a>.jar</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p234135724312"><a name="p234135724312"></a><a name="p234135724312"></a>java的jar压缩文件。</p>
</td>
</tr>
</tbody>
</table>

**表 2**  JDK常用的工具

<a name="table103504146433"></a>
<table><thead align="left"><tr id="row635141416437"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p2351151419430"><a name="p2351151419430"></a><a name="p2351151419430"></a>工具名称</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p123511714144311"><a name="p123511714144311"></a><a name="p123511714144311"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row3351114184314"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p235131434319"><a name="p235131434319"></a><a name="p235131434319"></a>java</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p17382051105812"><a name="p17382051105812"></a><a name="p17382051105812"></a>Java运行工具，用于运行.class字节码文件或.jar文件。</p>
</td>
</tr>
<tr id="row3351201464315"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p18351214144315"><a name="p18351214144315"></a><a name="p18351214144315"></a>javac</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1035141464315"><a name="p1035141464315"></a><a name="p1035141464315"></a><span>Java编程语言的编译器</span>，将.java的源代码文件编译成.class的字节码文件。</p>
</td>
</tr>
<tr id="row1351914134311"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p12351191464311"><a name="p12351191464311"></a><a name="p12351191464311"></a>jar</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p17351714184311"><a name="p17351714184311"></a><a name="p17351714184311"></a><span>创建和管理Jar文件</span>。</p>
</td>
</tr>
</tbody>
</table>

### java程序生成流程

通过JDK将java源代码文件生成并运行Java程序，需要经过编译和运行。

1.  编译：是指使用Java编译器（javac）将java源代码文件（.java文件）编译为.class的字节码文件。
2.  运行：是指在Java虚拟机上执行字节码文件。

### JDK常用工具选项

#### javac编译选项

javac编译的命令格式为：**javac**  \[_options_\] \[_sourcefiles_\] \[_classes_\] \[@_argfiles_\]

其中：

_options_ ：命令选项。

_sourcefiles_ ：一个或多个需要编译的源文件。

_classes_ ：一个或多个要为注释处理的类。

@_argfiles_ ：一个或多个列出选项和源文件的文件。这些文件中不允许有-J选项。

javac是java编译器，其 _options_ 参数取值很多，但有些大部分并不常用，常用的 _options_ 取值如[表3](#table1342946175212)所示。

**表 3**  javac常用的编译选项

<a name="table1342946175212"></a>
<table><thead align="left"><tr id="row1242184611523"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1142134616527"><a name="p1142134616527"></a><a name="p1142134616527"></a><em id="i196115187577"><a name="i196115187577"></a><a name="i196115187577"></a>options</em>取值</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p174244605210"><a name="p174244605210"></a><a name="p174244605210"></a>说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p442204645214"><a name="p442204645214"></a><a name="p442204645214"></a>示例</p>
</th>
</tr>
</thead>
<tbody><tr id="row1642124685214"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p44294645211"><a name="p44294645211"></a><a name="p44294645211"></a>-d <em id="i20380213283"><a name="i20380213283"></a><a name="i20380213283"></a>path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p34284619521"><a name="p34284619521"></a><a name="p34284619521"></a><span>指定存放生成的类文件的路径</span>。</p>
<p id="p5504192417282"><a name="p5504192417282"></a><a name="p5504192417282"></a><span>默认情况下，编译生成的类文件与源文件在同一路径下。使用-d选项可以将类文件输出到指定路径。</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14019112140"><a name="p14019112140"></a><a name="p14019112140"></a><span>#使用</span>-d<span>选项将所有类文件输出到bin路径下</span></p>
<p id="p1942746165211"><a name="p1942746165211"></a><a name="p1942746165211"></a>javac /src/*.java -d /bin</p>
</td>
</tr>
<tr id="row375616513198"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p8756125113199"><a name="p8756125113199"></a><a name="p8756125113199"></a>-s <em id="i764464192010"><a name="i764464192010"></a><a name="i764464192010"></a>path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1475675181912"><a name="p1475675181912"></a><a name="p1475675181912"></a><span>指定存放生成的源文件的路径</span>。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p275614511197"><a name="p275614511197"></a><a name="p275614511197"></a>-</p>
</td>
</tr>
<tr id="row3421646125214"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p24254614529"><a name="p24254614529"></a><a name="p24254614529"></a>-cp <em id="i457411173112"><a name="i457411173112"></a><a name="i457411173112"></a>path</em>或-classpath <em id="i778195173018"><a name="i778195173018"></a><a name="i778195173018"></a>path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18626736181820"><a name="p18626736181820"></a><a name="p18626736181820"></a><span>搜索编译所需的class文件，指出编译所用到的class文件的位置。</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16112433132010"><a name="p16112433132010"></a><a name="p16112433132010"></a>#<span>在Demo中要调用GetStringDemo类中的getLine()方法，而GetStringDemo类编译后的文件，即.class文件在bin目录下。</span></p>
<p id="p13429467521"><a name="p13429467521"></a><a name="p13429467521"></a>javac -cp bin Demo.java -d bin</p>
</td>
</tr>
<tr id="row642846145211"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1342746115211"><a name="p1342746115211"></a><a name="p1342746115211"></a>-verbose</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14710104517231"><a name="p14710104517231"></a><a name="p14710104517231"></a><span>输出关于编译器正在执行的操作的消息，如加载的类信息和编译的源文件信息。</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13427463528"><a name="p13427463528"></a><a name="p13427463528"></a>#<span>输出关于编译器正在执行的操作的消息。</span></p>
<p id="p597061913259"><a name="p597061913259"></a><a name="p597061913259"></a>javac -verbose -cp bin Demo.java</p>
</td>
</tr>
<tr id="row2428463528"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p105251952881"><a name="p105251952881"></a><a name="p105251952881"></a>-source <em id="i9779313155317"><a name="i9779313155317"></a><a name="i9779313155317"></a>sourceversion</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1983024422919"><a name="p1983024422919"></a><a name="p1983024422919"></a><span>指定查找输入源文件的位置。</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13782338155311"><a name="p13782338155311"></a><a name="p13782338155311"></a>-</p>
</td>
</tr>
<tr id="row176441743349"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p176441749342"><a name="p176441749342"></a><a name="p176441749342"></a>-sourcepath <em id="i076711126546"><a name="i076711126546"></a><a name="i076711126546"></a>path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p26440463410"><a name="p26440463410"></a><a name="p26440463410"></a>用于搜索编译所需的源文件（即java文件），指定要搜索的源文件的位置，如jar、zip或其他包含java文件的目录。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11644444347"><a name="p11644444347"></a><a name="p11644444347"></a>-</p>
</td>
</tr>
<tr id="row143691297164"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p4369112911615"><a name="p4369112911615"></a><a name="p4369112911615"></a>-target <em id="i14257152018569"><a name="i14257152018569"></a><a name="i14257152018569"></a>targetversion</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p136932971616"><a name="p136932971616"></a><a name="p136932971616"></a><span>生成特定JVM版本的类文件</span>。取值为1.1，1.2，1.3，1.4，1.5（或5），1.6（或6），1.7（或7），1.8（或8）。<em id="i11835571336"><a name="i11835571336"></a><a name="i11835571336"></a>targetversion</em>的默认取值与-source选项的<em id="i18928115712016"><a name="i18928115712016"></a><a name="i18928115712016"></a>sourceversion</em>有关。<em id="i560815481816"><a name="i560815481816"></a><a name="i560815481816"></a>sourceversion</em>取值：</p>
<a name="ul13412711218"></a><a name="ul13412711218"></a><ul id="ul13412711218"><li>1.2，<em id="i437819161143"><a name="i437819161143"></a><a name="i437819161143"></a>targetversion</em>为1.4；</li><li>1.3，<em id="i14587926649"><a name="i14587926649"></a><a name="i14587926649"></a>targetversion</em>为1.4；</li><li>1.5、1.6、1.7、未指定，<em id="i1177610203514"><a name="i1177610203514"></a><a name="i1177610203514"></a>targetversion</em>为1.8。</li><li>其他值，<em id="i54016231762"><a name="i54016231762"></a><a name="i54016231762"></a>targetversion</em>与<em id="i1126619201169"><a name="i1126619201169"></a><a name="i1126619201169"></a>sourceversion</em>取值相同。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1037012921612"><a name="p1037012921612"></a><a name="p1037012921612"></a>-</p>
</td>
</tr>
</tbody>
</table>

#### java运行选项

java运行的格式为：

运行类文件：**java**  \[_options_\]  _classesname_  \[args\]

运行jar文件：**java**  \[_options_\] -jar  _filename_  \[args\]

其中：

_options_ ：命令选项，选项之间用空格分隔。

_classname_ ：运行的.class文件名。

_filename_ ：运行的.jar文件名。

args：传递给main\(\)函数的参数，参数之间用空格分隔。

java是运行java应用程序的工具，其 _options_ 参数取值很多，但有些大部分并不常用，常用的 _options_ 取值如[表4](#table371918587238)所示。

**表 4**  java常用的运行选项

<a name="table371918587238"></a>
<table><thead align="left"><tr id="row19719155892316"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="p127195582239"><a name="p127195582239"></a><a name="p127195582239"></a><em id="i4719195817238"><a name="i4719195817238"></a><a name="i4719195817238"></a>options</em>取值</p>
</th>
<th class="cellrowborder" valign="top" width="33.473347334733475%" id="mcps1.2.4.1.2"><p id="p1771955817233"><a name="p1771955817233"></a><a name="p1771955817233"></a>说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.193319331933196%" id="mcps1.2.4.1.3"><p id="p14719175810236"><a name="p14719175810236"></a><a name="p14719175810236"></a>示例</p>
</th>
</tr>
</thead>
<tbody><tr id="row37191558122312"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p1671955816237"><a name="p1671955816237"></a><a name="p1671955816237"></a>-cp <em id="i1871935862315"><a name="i1871935862315"></a><a name="i1871935862315"></a>path</em>或-classpath <em id="i11719858102316"><a name="i11719858102316"></a><a name="i11719858102316"></a>path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.473347334733475%" headers="mcps1.2.4.1.2 "><p id="p1152514674520"><a name="p1152514674520"></a><a name="p1152514674520"></a>指定要运行的文件所在的位置以及需要用到的类路径，包括jar、zip和class文件目录。</p>
<p id="p540484613433"><a name="p540484613433"></a><a name="p540484613433"></a>当路径有多个是，使用“:”分隔。</p>
</td>
<td class="cellrowborder" valign="top" width="33.193319331933196%" headers="mcps1.2.4.1.3 "><p id="p293442512447"><a name="p293442512447"></a><a name="p293442512447"></a>-</p>
</td>
</tr>
<tr id="row1471945892312"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p117191858152310"><a name="p117191858152310"></a><a name="p117191858152310"></a>-verbose</p>
</td>
<td class="cellrowborder" valign="top" width="33.473347334733475%" headers="mcps1.2.4.1.2 "><p id="p15719458172315"><a name="p15719458172315"></a><a name="p15719458172315"></a><span>输出关于编译器正在执行的操作的消息，如加载的类信息和编译的源文件信息。</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.193319331933196%" headers="mcps1.2.4.1.3 "><p id="p1371985892314"><a name="p1371985892314"></a><a name="p1371985892314"></a>#<span>输出关于编译器正在执行的操作的消息。</span></p>
<p id="p1271918588236"><a name="p1271918588236"></a><a name="p1271918588236"></a>java -verbose -cp bin Demo.java</p>
</td>
</tr>
</tbody>
</table>

#### jar打包选项

jar的命令格式为：**jar**  \{c | t | x | u\}\[vfm0M\] \[_jarfile_\] \[_manifest_\] \[-C  _dir_\]  _file_...

jar命令参数说明如[表5](#table3691718114817)所示。

**表 5**  jar命令参数说明

<a name="table3691718114817"></a>
<table><thead align="left"><tr id="row469131813486"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p869141854816"><a name="p869141854816"></a><a name="p869141854816"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p166981819484"><a name="p166981819484"></a><a name="p166981819484"></a>说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p11691618144815"><a name="p11691618144815"></a><a name="p11691618144815"></a>示例</p>
</th>
</tr>
</thead>
<tbody><tr id="row186961818481"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p56921810488"><a name="p56921810488"></a><a name="p56921810488"></a>c</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18698186485"><a name="p18698186485"></a><a name="p18698186485"></a>创建jar文件包。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p395117464185"><a name="p395117464185"></a><a name="p395117464185"></a>#把当前目录的hello.class文件打包到Hello.jar，且不显示打包的过程。如果Hello.jar文件还不存在，就创建它，否则首先清空它。</p>
<p id="p1969718204817"><a name="p1969718204817"></a><a name="p1969718204817"></a>jar cf Hello.jar hello.class</p>
</td>
</tr>
<tr id="row5291198204514"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p529217884512"><a name="p529217884512"></a><a name="p529217884512"></a>t</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p152928874519"><a name="p152928874519"></a><a name="p152928874519"></a>列出jar文件包的内容列表。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p679215156210"><a name="p679215156210"></a><a name="p679215156210"></a>#列出Hello.jar包含的文件清单。</p>
<p id="p15292158134516"><a name="p15292158134516"></a><a name="p15292158134516"></a>jar tf Hello.jar</p>
</td>
</tr>
<tr id="row1468581013453"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13685141074520"><a name="p13685141074520"></a><a name="p13685141074520"></a>x</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p46851710184513"><a name="p46851710184513"></a><a name="p46851710184513"></a>展开jar文件包的指定文件或者所有文件。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14669751122111"><a name="p14669751122111"></a><a name="p14669751122111"></a>#解压Hello.jar 到当前目录，不显示任何信息。</p>
<p id="p1668512104459"><a name="p1668512104459"></a><a name="p1668512104459"></a>jar xf Hello.jar</p>
</td>
</tr>
<tr id="row5230213164512"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p112301913184514"><a name="p112301913184514"></a><a name="p112301913184514"></a>u</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1723013133454"><a name="p1723013133454"></a><a name="p1723013133454"></a>更新已存在的jar文件包，如添加文件到jar文件包中。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p3230313144514"><a name="p3230313144514"></a><a name="p3230313144514"></a>-</p>
</td>
</tr>
<tr id="row8709101720454"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11709181784515"><a name="p11709181784515"></a><a name="p11709181784515"></a>v</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2709017154510"><a name="p2709017154510"></a><a name="p2709017154510"></a>生成详细报告并打印到标准输出。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p9879101591911"><a name="p9879101591911"></a><a name="p9879101591911"></a>#把当前目录的hello.class文件打包到Hello.jar，并显示打包的过程。如果Hello.jar文件还不存在，就创建它，否则首先清空它。</p>
<p id="p1070921704511"><a name="p1070921704511"></a><a name="p1070921704511"></a>jar cvf Hello.jar hello.class</p>
</td>
</tr>
<tr id="row1080482004511"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p11805192016459"><a name="p11805192016459"></a><a name="p11805192016459"></a>f</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p158051209453"><a name="p158051209453"></a><a name="p158051209453"></a>指定jar文件名，通常这个参数是必须的。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p118051120184516"><a name="p118051120184516"></a><a name="p118051120184516"></a>-</p>
</td>
</tr>
<tr id="row11699184482"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p176991817487"><a name="p176991817487"></a><a name="p176991817487"></a>m</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p06981811483"><a name="p06981811483"></a><a name="p06981811483"></a>指定需要包含的manifest清单文件。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p46915184486"><a name="p46915184486"></a><a name="p46915184486"></a>-</p>
</td>
</tr>
<tr id="row15327111618118"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1932751619113"><a name="p1932751619113"></a><a name="p1932751619113"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p193273161711"><a name="p193273161711"></a><a name="p193273161711"></a>只存储，不压缩，这样产生的jar文件包会比不用该参数产生的体积大，但速度更快。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p63281416513"><a name="p63281416513"></a><a name="p63281416513"></a>-</p>
</td>
</tr>
<tr id="row1861744310119"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p2617194320119"><a name="p2617194320119"></a><a name="p2617194320119"></a>M</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1761744316114"><a name="p1761744316114"></a><a name="p1761744316114"></a>不产生所有项的manifest清单文件，此参数会忽略m参数</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1579284402215"><a name="p1579284402215"></a><a name="p1579284402215"></a>#把当前目录的hello.class文件打包到Hello.jar，并显示打包的过程。如果Hello.jar文件还不存在，就创建它，否则首先清空它。但在创建Hello.jar时不产生manifest 文件。</p>
<p id="p16617144311111"><a name="p16617144311111"></a><a name="p16617144311111"></a>jar cvfM Hello.jar hello.class</p>
</td>
</tr>
<tr id="row147450411029"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p152616437213"><a name="p152616437213"></a><a name="p152616437213"></a><em id="i726104310214"><a name="i726104310214"></a><a name="i726104310214"></a>jarfile</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p107451041428"><a name="p107451041428"></a><a name="p107451041428"></a>.jar文件包，它是f参数的附属参数。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p274516411216"><a name="p274516411216"></a><a name="p274516411216"></a>-</p>
</td>
</tr>
<tr id="row1237893913213"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1237843913220"><a name="p1237843913220"></a><a name="p1237843913220"></a><em id="i42694316216"><a name="i42694316216"></a><a name="i42694316216"></a>manifest</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1337919391620"><a name="p1337919391620"></a><a name="p1337919391620"></a>.mf的manifest清单文件，它是m参数的附属参数</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p337918399214"><a name="p337918399214"></a><a name="p337918399214"></a>-</p>
</td>
</tr>
<tr id="row162725361324"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p52731736622"><a name="p52731736622"></a><a name="p52731736622"></a>-C <em id="i978316291535"><a name="i978316291535"></a><a name="i978316291535"></a>dir</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1527317361325"><a name="p1527317361325"></a><a name="p1527317361325"></a>转到指定<em id="i1551410449418"><a name="i1551410449418"></a><a name="i1551410449418"></a>dir</em>下执行jar命令，只能配合参数c、t使用。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19273636426"><a name="p19273636426"></a><a name="p19273636426"></a>-</p>
</td>
</tr>
<tr id="row18174749434"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1417415497317"><a name="p1417415497317"></a><a name="p1417415497317"></a><em id="i9360207744"><a name="i9360207744"></a><a name="i9360207744"></a>file</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5168141281513"><a name="p5168141281513"></a><a name="p5168141281513"></a>指定文件/路径列表，文件或路径下的所有文件（包括递归路径下的）都会被打入jar文件包中，或解压jar文件到路径下。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18394164919196"><a name="p18394164919196"></a><a name="p18394164919196"></a>#把当前目录的所有class文件打包到Hello.jar，并显示打包的过程。如果Hello.jar文件还不存在，就创建它，否则首先清空它。</p>
<p id="p1256213921917"><a name="p1256213921917"></a><a name="p1256213921917"></a>jar cvf Hello.jar *.class</p>
</td>
</tr>
</tbody>
</table>

## 类库

java类库是以包的形式实现的，包是类和接口的集合。java编译器为每个类生成一个字节码文件，且文件名与类名相同，因此同名的类之间就有可能发生冲突。java语言中，把一组类和接口封装在一个包内，包可以有效地管理类名空间，位于不同包中的类即使同名也不会冲突，从而解决了同名类之间可能发生的冲突问题，为管理大量的类和接口提供了方便，也有利于类和接口的安全。

除java提供的许多包外，开发者也可以自定义包，把自己编写的类和接口等组成程序包的形式，以便后续使用。

自定义包需要先声明包，然后在使用包。

### 包的声明

包的声明格式为：package pkg1\[.pkg2\[.pkg3...\]\];

为了声明一个包，首先必须建立一个相应的目录结构，子目录与包名一致，然后在需要放入该包的类文件开头声明包，表示该文件的全部类都属于这个包。包声明中的“.”指明了目录的层次。如果源程序文件中没有package语句，则指定为无名包。无名包没有路径，一般情况下，java仍然会把源文件中的类存储在当前工作目录（即存放java源文件的目录）下。

包声明语句必须被加到源程序文件的起始部分，而且前面不能有注释和空格。如果在不同源程序文件中使用相同的包声明语句，就可以将不同源程序文件中的类都包含在相同的包中。

### 包的引用

在 Java 中，为了能使用java提供的包中的公用类，或者使用自定义的包中的类，有两种方法。

-   在要引用的类名前带上包名。

    如：name.A obj=new name.A \(\);

    其中，name为包名，A为类名，obj为对象。表示程序中用name包中的A类定义一个对象obj。

    示例：新建一个example包中Test类的test对象。

    ```
    example.Test test = new example.Test();
    ```

-   在文件开头使用import来导入包中的类。

    import语句的格式为：import pkg1\[.pkg2\[.pkg3...\]\].\(classname | \*\);

    其中，pkg1\[.pkg2\[.pkg3...\]\]表明包的层次，classname为所要导入的类。如果要从一个包中导入多个类，则可以使用通配符“\*”来替代。

    示例：导入example包中的Test类。

    ```
    import example.Test;
    ```

    示例：将example 整个包导入。

    ```
    import example.*;
    ```


## 示例


### 编译不带包的java程序示例

1.  cd到代码目录，此处以用户“~/code”进行举例。如下所示：

    ```
    $ cd ~/code 
    ```

2.  编写Hello World程序，保存为HelloWorld.java，此处以编译Hello World程序进行举例说明。示例如下：

    ```
    $ vi HelloWorld.java
    ```

    代码内容示例：

    ```
    public class HelloWorld {     
         public static void main(String[] args) {         
             System.out.println("Hello World");     
          } 
    }
    ```

3.  在代码目录，执行编译，使用命令：

    ```
    $ javac HelloWorld.java 
    ```

    编译执行未报错，表明执行通过。

4.  编译完成后，会生成 HelloWorld.class 文件，通过java命令可执行查看结果，示例如下：

    ```
    $ java HelloWorld
    Hello World
    ```


### 编译带包的java程序示例

1.  cd到代码目录，此处以用户“~/code”进行举例。并在该目录下创建“~/code/Test/my/example”、“~/code/Hello/world/developers”、“~/code/Hi/openos/openeuler”子目录，分别用于存放源文件。

    ```
    $ cd ~/code
    $ mkdir -p Test/my/example
    $ mkdir -p Hello/world/developers
    $ mkdir -p Hi/openos/openeuler
    ```
    
2.  cd到~/code/Test/my/example目录，创建Test.java。

    ```
    $ cd ~/code/Test/my/example
    $ vi Test.java
    ```

    Test.java代码内容示例：

    ```
    package my.example;
    import world.developers.Hello;
    import openos.openeuler.Hi;
    public class Test {
      public static void main(String[] args) {
       Hello me = new Hello();
       me.hello();
       Hi you = new Hi();
       you.hi();
      }
    }
    ```

3.  cd到~/code/Hello/world/developers目录，创建Hello.java。

    ```
    $ cd ~/code/Hello/world/developers
    $ vi Hello.java
    ```

    Hello.java代码内容示例：

    ```
    package world.developers;
    public class Hello {
      public void hello(){
       System.out.println("Hello, openEuler.");
      }
    }
    ```

4.  ~/code/Hi/openos/openeuler目录，创建Hi.java。

    ```
    $ cd ~/code/Hi/openos/openeuler
    $ vi Hi.java
    ```

    Hi.java代码内容示例：

    ```
    package openos.openeuler;
    public class Hi {
      public void hi(){
       System.out.println("Hi, the global developers.");
      }
    }
    ```

5.  cd到~/code，使用javac编译源文件。

    ```
    $ cd ~/code
    $ javac -classpath Hello:Hi Test/my/example/Test.java
    ```

    执行完命令后，会在“~/code/Test/my/example”、“~/code/Hello/world/developers”、“~/code/Hi/openos/openeuler”目录下分别生成Test.class、Hello.class、Hi.class文件。

6.  cd到~/code，使用java运行Test程序。

    ```
    $ cd ~/code
    $ java -classpath Test:Hello:Hi my/example/Test
    ```

    执行结果如下所示：

    ```
    Hello, openEuler.
    Hi, the global developers.
    ```
