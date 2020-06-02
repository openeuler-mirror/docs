# 使用GCC编译

本章介绍GCC编译的一些基本知识，并通过示例进行实际演示。更多的GCC知识请通过**man gcc**命令查询。
<!-- TOC -->

- [使用GCC编译](#使用gcc编译)
    - [简介](#简介)
    - [基本规则](#基本规则)
        - [文件类型](#文件类型)
        - [编译流程](#编译流程)
        - [编译选项](#编译选项)
        - [多源文件编译](#多源文件编译)
    - [库](#库)
        - [动态链接库](#动态链接库)
        - [静态链接库](#静态链接库)
    - [示例](#示例)
        - [使用GCC编译C程序示例](#使用gcc编译c程序示例)
        - [使用GCC创建和使用动态链接库示例](#使用gcc创建和使用动态链接库示例)
        - [使用GCC创建和使用静态链接库示例](#使用gcc创建和使用静态链接库示例)

<!-- /TOC -->


## 简介

GCC（GNU Compiler Collection）是GNU推出的功能强大、性能优越的多平台编译器。GCC编译器能将C、C++语言源程序、汇编程序和目标程序编译、连接成可执行文件。openEuler操作系统中已默认安装了GCC软件包。

## 基本规则



### 文件类型

对于任何给定的输入文件，文件类型决定进行何种编译。GCC常用的文件类型如[表1](#table634145764320)所示。

**表 1**  GCC常用的文件类型

<a name="table634145764320"></a>
<table><thead align="left"><tr id="row53445724319"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p134175716436"><a name="p134175716436"></a><a name="p134175716436"></a>扩展名（后缀）</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p3341573439"><a name="p3341573439"></a><a name="p3341573439"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row2341857174311"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p143419579434"><a name="p143419579434"></a><a name="p143419579434"></a>.c</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1634125794311"><a name="p1634125794311"></a><a name="p1634125794311"></a>C语言源代码文件。</p>
</td>
</tr>
<tr id="row334185744314"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p134105764319"><a name="p134105764319"></a><a name="p134105764319"></a>.C，.cc或.cxx</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p13425717436"><a name="p13425717436"></a><a name="p13425717436"></a>C++源代码文件。</p>
</td>
</tr>
<tr id="row1934157104315"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1234957124317"><a name="p1234957124317"></a><a name="p1234957124317"></a>.m</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p234135724312"><a name="p234135724312"></a><a name="p234135724312"></a>Objective-C源代码文件。</p>
</td>
</tr>
<tr id="row1934195713439"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p434195712430"><a name="p434195712430"></a><a name="p434195712430"></a>.s</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1341057124316"><a name="p1341057124316"></a><a name="p1341057124316"></a>汇编语言源代码文件。</p>
</td>
</tr>
<tr id="row20349573432"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p4348576435"><a name="p4348576435"></a><a name="p4348576435"></a>.i</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p934175704316"><a name="p934175704316"></a><a name="p934175704316"></a>已经预处理的C源代码文件。</p>
</td>
</tr>
<tr id="row934195710435"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p33435704312"><a name="p33435704312"></a><a name="p33435704312"></a>.ii</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1834957144314"><a name="p1834957144314"></a><a name="p1834957144314"></a>已经预处理的C++源代码文件。</p>
</td>
</tr>
<tr id="row16341457154318"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1034185714318"><a name="p1034185714318"></a><a name="p1034185714318"></a>.S</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p134115724318"><a name="p134115724318"></a><a name="p134115724318"></a>已经预处理的汇编语言源代码文件。</p>
</td>
</tr>
<tr id="row4551040124512"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p165594012459"><a name="p165594012459"></a><a name="p165594012459"></a>.h</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p255164014456"><a name="p255164014456"></a><a name="p255164014456"></a>程序所包含的头文件。</p>
</td>
</tr>
<tr id="row96405211469"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p136405215463"><a name="p136405215463"></a><a name="p136405215463"></a>.o</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1064015220466"><a name="p1064015220466"></a><a name="p1064015220466"></a>编译后的目标文件。</p>
</td>
</tr>
<tr id="row18053369399"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p38051366398"><a name="p38051366398"></a><a name="p38051366398"></a>.so</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1380515367395"><a name="p1380515367395"></a><a name="p1380515367395"></a><span>动态链接库</span><span>，它是一种特殊的目标文件。</span></p>
</td>
</tr>
<tr id="row473710516467"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p157371654468"><a name="p157371654468"></a><a name="p157371654468"></a>.a</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1673795154616"><a name="p1673795154616"></a><a name="p1673795154616"></a>静态链接库。</p>
</td>
</tr>
<tr id="row1052198114615"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1521682462"><a name="p1521682462"></a><a name="p1521682462"></a>.out</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p052114814615"><a name="p052114814615"></a><a name="p052114814615"></a>可执行文件，但可执行文件没有统一的后缀，系统从文件的属性来区分可执行文件和不可执行文件。如果没有给出可执行文件的名字，GCC将生成一个名为a.out的文件。</p>
</td>
</tr>
</tbody>
</table>

### 编译流程

使用GCC将源代码文件生成可执行文件，需要经过预处理、编译、汇编和链接。

1.  预处理：将源程序（如 **.c** 文件）预处理，生成 **.i** 文件。
2.  编译：将预处理后的 **.i** 文件编译成为汇编语言，生成 **.s** 文件。
3.  汇编：将汇编语言文件经过汇编，生成目标文件 **.o** 文件。
4.  链接：将各个模块的 **.o** 文件链接起来生成一个可执行程序文件。

其中 **.i** 文件、**.s**文件、**.o**文件是中间文件或临时文件，如果使用GCC一次性完成C语言程序的编译，则这些文件会被删除。

### 编译选项

GCC编译的命令格式为：**gcc**  \[_options_\] \[_filenames_\]

其中：

_options_ ：编译选项。

_filenames_ ：文件名称。

GCC是一个功能强大的编译器，其 _options_ 参数取值很多，但有些大部分并不常用，常用的 _options_ 取值如[表2](#table1342946175212)所示。

**表 2**  GCC常用的编译选项

<a name="table1342946175212"></a>
<table><thead align="left"><tr id="row1242184611523"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1142134616527"><a name="p1142134616527"></a><a name="p1142134616527"></a><em id="i196115187577"><a name="i196115187577"></a><a name="i196115187577"></a>options</em>取值</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p174244605210"><a name="p174244605210"></a><a name="p174244605210"></a>说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p442204645214"><a name="p442204645214"></a><a name="p442204645214"></a>示例</p>
</th>
</tr>
</thead>
<tbody><tr id="row1642124685214"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p44294645211"><a name="p44294645211"></a><a name="p44294645211"></a>-c</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p34284619521"><a name="p34284619521"></a><a name="p34284619521"></a>编译、汇编指定的源文件生成目标文件，但不进行链接。通常用于编译不包含主程序的子程序文件。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p14019112140"><a name="p14019112140"></a><a name="p14019112140"></a><span>#使用</span>-c<span>选项编译test1.c、test2.c源文件</span></p>
<p id="p1942746165211"><a name="p1942746165211"></a><a name="p1942746165211"></a>gcc -c test1.c test2.c</p>
</td>
</tr>
<tr id="row3421646125214"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p24254614529"><a name="p24254614529"></a><a name="p24254614529"></a>-S</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18626736181820"><a name="p18626736181820"></a><a name="p18626736181820"></a>编译指定的源文件<span>生成以</span>.s<span>作为后缀的汇编语言文件</span>，但不进行汇编。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16112433132010"><a name="p16112433132010"></a><a name="p16112433132010"></a>#<span>编译器预处理 circle.c，将其翻译成汇编语言，并将结果存储在 circle.s 文件中。</span></p>
<p id="p13429467521"><a name="p13429467521"></a><a name="p13429467521"></a>gcc -S circle.c</p>
</td>
</tr>
<tr id="row642846145211"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1342746115211"><a name="p1342746115211"></a><a name="p1342746115211"></a>-E</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p7422046195217"><a name="p7422046195217"></a><a name="p7422046195217"></a>预处理指定的源文件，但不进行编译。</p>
<p id="p14710104517231"><a name="p14710104517231"></a><a name="p14710104517231"></a><span>默认情况下，预处理器的输出会被导入到标准输出流（如显示器），可以利用</span>-o<span>选项把它导入到某个输出文件。</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13427463528"><a name="p13427463528"></a><a name="p13427463528"></a>#<span>预处理的结果导出到 circle.i 文件。</span></p>
<p id="p597061913259"><a name="p597061913259"></a><a name="p597061913259"></a>gcc -E circle.c -o circle.i</p>
</td>
</tr>
<tr id="row2428463528"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p105251952881"><a name="p105251952881"></a><a name="p105251952881"></a>-o <em id="i173821510183619"><a name="i173821510183619"></a><a name="i173821510183619"></a>file</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1983024422919"><a name="p1983024422919"></a><a name="p1983024422919"></a>用在生成可执行文件时，生成指定的输出文件<em id="i11398171815369"><a name="i11398171815369"></a><a name="i11398171815369"></a>file</em>。同时该名称不能和源文件同名。如果不给出这个选项，gcc就给出预设的可执行文件a.out。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1421946155218"><a name="p1421946155218"></a><a name="p1421946155218"></a>#<span>将源文件作为输入文件，将可执行文件作为输出文件，也即完整地编译整个程序。</span></p>
<p id="p62691423153012"><a name="p62691423153012"></a><a name="p62691423153012"></a>gcc main.c func.c -o app.out</p>
</td>
</tr>
<tr id="row176441743349"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p176441749342"><a name="p176441749342"></a><a name="p176441749342"></a>-g</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p26440463410"><a name="p26440463410"></a><a name="p26440463410"></a>在可执行程序中包含标准调试信息。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11644444347"><a name="p11644444347"></a><a name="p11644444347"></a>-</p>
</td>
</tr>
<tr id="row143691297164"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p4369112911615"><a name="p4369112911615"></a><a name="p4369112911615"></a>-L <em id="i599713033614"><a name="i599713033614"></a><a name="i599713033614"></a>libary_path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p136932971616"><a name="p136932971616"></a><a name="p136932971616"></a>在库文件的搜索路径列表中添加<em id="i1847052212361"><a name="i1847052212361"></a><a name="i1847052212361"></a>libary_path</em>路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1037012921612"><a name="p1037012921612"></a><a name="p1037012921612"></a>-</p>
</td>
</tr>
<tr id="row842104610528"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5424465527"><a name="p5424465527"></a><a name="p5424465527"></a>-I<em id="i10991558173512"><a name="i10991558173512"></a><a name="i10991558173512"></a>library</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18320171014373"><a name="p18320171014373"></a><a name="p18320171014373"></a>链接时搜索指定的函数库<em id="i923813323617"><a name="i923813323617"></a><a name="i923813323617"></a>library</em>。</p>
<p id="p16725256915"><a name="p16725256915"></a><a name="p16725256915"></a><span>使用 GCC 编译和链接程序时，GCC 默认会链接 libc.a 或者 libc.so，但是对于其他的库（例如非标准库、第三方库等），就需要手动添加。</span></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p74284665213"><a name="p74284665213"></a><a name="p74284665213"></a><span>#使用</span>-l<span>选项，以链接数学库。</span></p>
<p id="p38153114016"><a name="p38153114016"></a><a name="p38153114016"></a>gcc main.c -o main.out -lm</p>
<div class="note" id="note267663724120"><a name="note267663724120"></a><a name="note267663724120"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="p14677203718413"><a name="p14677203718413"></a><a name="p14677203718413"></a><span>数学库的文件名是 libm.a。前缀</span>lib<span>和后缀</span>.a<span>是标准的，</span>m<span>是基本名称，GCC 会在</span>-l<span>选项后紧跟着的基本名称的基础上自动添加这些前缀、后缀，本例中，基本名称为 m。</span></p>
</div></div>
</td>
</tr>
<tr id="row52061353193420"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7206175319346"><a name="p7206175319346"></a><a name="p7206175319346"></a>-I <em id="i19693154753619"><a name="i19693154753619"></a><a name="i19693154753619"></a>head_path</em></p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p120610535342"><a name="p120610535342"></a><a name="p120610535342"></a>在头文件的搜索路径列表中添加<em id="i16120553183714"><a name="i16120553183714"></a><a name="i16120553183714"></a>head_path</em>路径。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p82061053203413"><a name="p82061053203413"></a><a name="p82061053203413"></a>-</p>
</td>
</tr>
<tr id="row366111303814"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p266713193820"><a name="p266713193820"></a><a name="p266713193820"></a>-static</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p96691363816"><a name="p96691363816"></a><a name="p96691363816"></a>进行静态编译，及链接静态库，禁止链接动态库。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1266913103816"><a name="p1266913103816"></a><a name="p1266913103816"></a>-</p>
</td>
</tr>
<tr id="row19323190113910"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p8323190153911"><a name="p8323190153911"></a><a name="p8323190153911"></a>-shared</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18490202055012"><a name="p18490202055012"></a><a name="p18490202055012"></a>默认选项，可省略。</p>
<a name="ul192366134394"></a><a name="ul192366134394"></a><ul id="ul192366134394"><li>可以生成动态库文件。</li><li>进行动态编译，优先链接动态库，只有没有动态库是才会链接同名的静态库。</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18323150113918"><a name="p18323150113918"></a><a name="p18323150113918"></a>-</p>
</td>
</tr>
<tr id="row1867594174012"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14675641184011"><a name="p14675641184011"></a><a name="p14675641184011"></a>-fPIC（或-fpic）</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1267518411405"><a name="p1267518411405"></a><a name="p1267518411405"></a>生成使用相对地址的位置无关的目标代码。通常使用-static选项从该PIC目标文件生成动态库文件。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p26751941134013"><a name="p26751941134013"></a><a name="p26751941134013"></a>-</p>
</td>
</tr>
</tbody>
</table>

### 多源文件编译

多个源文件的编译方法有2种。

-   多个源文件一起编译。编译时需要所有文件重新编译。

    示例：将test1.c和tes2.c分别编译后链接成test可执行文件。

    ```
    $ gcc test1.c test2.c -o test
    ```

-   分别编译各个源文件，之后对编译后输出的目标文件链接。编译时只重新编译修改的文件，未修改的文件不用重新编译。

    示例：分别编译test1.c，test2.c，在将二者的目标文件test1.o，test2.o链接成test可执行文件。

    ```
    $ gcc -c test1.c
    $ gcc -c test2.c
    $ gcc -o test1.o test2.o -o test
    ```


## 库

库是写好的、现有的、成熟的、可以复用的代码。每个程序都要依赖很多基础的底层库。

库文件在命名时约定，以lib为前缀，以.so（动态库）或.a（静态库）为后缀，中间为库文件名。如libfoo.so或libfoo.a。由于所有的库文件都遵循了同样的规范，因此当在链接库时，-l 选项指定链接的库文件名时可以省去lib前缀，即GCC 在对-lfoo 进行处理时，会自动去链接名为libfoo.so 或libfoo.a的库文件。而当在创建库时，必须指定完整文件名libfoo.so或libfoo.a。

根据链接时期的不同，库分为静态库和动态库。静态库是在链接阶段，将汇编生成的目标文件.o与引用到的库一起链接打包到可执行文件中；而动态库是在程序编译时并不会被链接到目标代码中，而是在程序运行时才被载入。二者有如下差异。

-   资源利用不一样。

    静态库为生成的可执行文件的一部分，而动态库为单独的文件。所以使用静态库和和动态库的可执行文件大小和占用的磁盘空间大小不一样，导致资源利用不一样。

-   扩展性与兼容性不一样

    静态库中某个函数的实现变了，那么可执行文件必须重新编译，而对于动态链接生成的可执行文件，只需要更新动态库本身即可，不需要重新编译可执行文件。

-   依赖不一样

    静态库的可执行文件不需要依赖其他的内容即可运行，而动态库的可执行文件必须依赖动态库的存在。所以静态库更方便移植。

-   加载速度不一样

    静态库在链接时就和可执行文件在一块了，而动态库在加载或者运行时才链接，因此，对于同样的程序，静态链接的要比动态链接加载更快。


### 动态链接库

使用-shared选项 和-fPIC选项，可直接使用源文件、汇编文件或者目标文件创建一个动态库。其中-fPIC 选项作用于编译阶段，在生成目标文件时就需要使用该选项，以生成位置无关的代码。

示例1：从源文件生成动态链接库。

```
$ gcc -fPIC -shared test.c -o libtest.so
```

示例2：从目标文件生成动态链接库。

```
$ gcc -fPIC -c test.c -o test.o
$ gcc -shared test.o -o libtest.so
```

将一个动态库链接到可执行文件，需要在命令行中列出动态库的名称。

示例：将main.c和libtest.so一起编译成 app.out，当 app.out 运行时，会动态地加载链接库 libtest.so。

```
$ gcc main.c libtest.so -o app.out
```

这种方式是直接指定使用当前目录下的libtest.so文件。

若使用下面搜索动态库的方式，则为了确保程序在运行时能够链接到动态库，需要通过如下三种方法中的任一种实现。

-   将动态库保存在标准目录下，例如 /usr/lib。
-   把动态库所在路径libaryDIR增加到环境变量LD\_LIBRARY\_PATH中

    $ export LD\_LIBRARY\_PATH=libraryDIR:$LD\_LIBRARY\_PATH

    >![](public_sys-resources/icon-note.gif) **说明：**   
    >LD\_LIBRARY\_PATH为动态库的环境变量。当运行动态库时，若动态库不在缺省文件夹（/lib 和/usr/lib）下，则需要指定环境变量LD\_LIBRARY\_PATH。  

-   把动态库所在路径libaryDIR增加 /etc/ld.so.conf中然后执行ldconfig或者以动态库所在路径libaryDIR为参数执行ldconfig。

```
$ gcc main.c -L libraryDIR -ltest -o app.out
$ export LD_LIBRARY_PATH=libraryDIR:$LD_LIBRARY_PATH
```

### 静态链接库

创建一个静态链接库，需要先将源文件编译为目标文件，然后在使用ar命令将目标文件打包成静态链接库。

示例：将源文件test1.c，test2.c，test3.c编译并打包成静态库。

```
$ gcc -c test1.c test2.c test3.c
$ ar rcs libtest.a test1.o test2.o test3.o
```

其中ar是一个备份压缩命令，可以将多个文件打包成一个备份文件（也叫归档文件），也可以从备份文件中提取成员文件。ar最常见的用法是将目标文件打包为静态链接库。

ar将目标文件打包成静态链接库的命令格式为：

ar rcs  _Sllfilename_ _Targetfilelist_

-   _Sllfilename_ ：静态库文件名。
-   _Targetfilelist_ ：目标文件列表。
-   r： 替换库中已有的目标文件，或者加入新的目标文件。
-   c： 创建一个库，不管库否存在，都将创建。
-   s： 创建目标文件索引，在创建较大的库时能提高速度。

示例：创建一个main.c文件来使用静态库

```
$ gcc main.c -L libraryDIR -ltest -o test.out
```

其中libraryDIR为libtest.a库的路径。

## 示例


### 使用GCC编译C程序示例

1.  cd到代码目录，此处以用户“~/code”进行举例。如下所示：

    ```
    $ cd ~/code 
    ```

2.  编写Hello World程序，保存为helloworld.c，此处以编译Hello World程序进行举例说明。示例如下：

    ```
    $ vi helloworld.c
    ```

    代码内容示例：

    ```
    #include <stdio.h>    
    int main()    
    {    
           printf("Hello World!\n");       
           return 0;    
    }
    ```

3.  在代码目录，执行编译，使用命令：

    ```
    $ gcc helloworld.c -o helloworld
    ```

    编译执行未报错，表明执行通过。

4.  编译完成后，会生成helloworld文件，查看编译结果，示例如下：

    ```
    $ ./helloworld
    Hello World!
    ```


### 使用GCC创建和使用动态链接库示例

1.  cd到代码目录，此处以用户“~/code”进行举例。并在该目录下创建src，lib，include子目录，分别用于存放源文件，动态库文件和头文件。

    ```
    $ cd ~/code
    $ mkdir src lib include
    ```
    
2.  cd到~/code/src目录，创建2个函数add.c、sub.c，分别实现加、减。

    ```
    $ cd ~/code/src
    $ vi add.c
    $ vi sub.c
    ```

    add.c代码内容示例：

    ```
    #include "math.h"
    int add(int a, int b)
    {
            return a+b;
    }
    ```

    sub.c代码内容示例：

    ```
    #include "math.h"
    int sub(int a, int b)
    {
            return a-b;
    }
    ```

3.  将add.c、sub.c源文件创建为动态库libmath.so，并将该动态库存放在~/code/lib目录。

    ```
    $ gcc -fPIC -shared add.c sub.c -o ~/code/lib/libmath.so
    ```

4.  cd到~/code/include目录，创建1个头文件math.h，声明函数的头文件。

    ```
    $ cd ~/code/include
    $ vi math.h
    ```

    math.h代码内容示例：

    ```
    #ifndef __MATH_H_
    #define __MATH_H_
    int add(int a, int b);
    int sub(int a, int b);
    #endif
    ```

5.  cd到~/code/src目录，创建一个调用add\(\)和sub\(\)的main.c函数。

    ```
    $ cd ~/code/src
    $ vi main.c
    ```

    math.c代码内容示例：

    ```
    #include <stdio.h>
    #include "math.h"
    int main()
    {
            int a, b;
            printf("Please input a and b:\n");
            scanf("%d %d", &a, &b);
            printf("The add: %d\n", add(a,b));
            printf("The sub: %d\n", sub(a,b));
            return 0;
    }
    ```

6.  将main.c和libmath.so一起编译成math.out。

    ```
    $ gcc main.c -I ~/code/include -L ~/code/lib -lmath -o math.out
    ```

7.  将动态链接库所在的路径加入到环境变量中。

    ```
    $ export LD_LIBRARY_PATH=~/code/lib:$LD_LIBRARY_PATH
    ```

8.  执行math.out。

    ```
    $ ./math.out
    ```

    执行结果如下所示：

    ```
    Please input a and b:
    9 2
    The add: 11
    The sub: 7
    ```


### 使用GCC创建和使用静态链接库示例

1.  cd到代码目录，此处以用户“~/code”进行举例。并在该目录下创建src，lib，include子目录，分别用于存放源文件，静态库文件和头文件。

    ```
    $ cd ~/code
    $ mkdir src lib include
    ```
    
2.  cd到~/code/src目录，创建2个函数add.c、sub.c，分别实现加、减。

    ```
    $ cd ~/code/src
    $ vi add.c
    $ vi sub.c
    ```

    add.c代码内容示例：

    ```
    #include "math.h"
    int add(int a, int b)
    {
            return a+b;
    }
    ```

    sub.c代码内容示例：

    ```
    #include "math.h"
    int sub(int a, int b)
    {
            return a-b;
    }
    ```

3.  将add.c、sub.c源文件编译为目标文件add.o、sub.o。

    ```
    $ gcc -c add.c sub.c
    ```

4.  将add.o、sub.o目标文件通过ar命令打包成静态库libmath.a，并将该动态库存放在~/code/lib目录。

    ```
    $ ar rcs ~/code/lib/libmath.a add.o sub.o
    ```

5.  cd到~/code/include目录，创建1个头文件math.h，声明函数的头文件。

    ```
    $ cd ~/code/include
    $ vi math.h
    ```

    math.h代码内容示例：

    ```
    #ifndef __MATH_H_
    #define __MATH_H_
    int add(int a, int b);
    int sub(int a, int b);
    #endif
    ```

6.  cd到~/code/src目录，创建一个调用add\(\)和sub\(\)的main.c函数。

    ```
    $ cd ~/code/src
    $ vi main.c
    ```

    math.c代码内容示例：

    ```
    #include <stdio.h>
    #include "math.h"
    int main()
    {
            int a, b;
            printf("Please input a and b:\n");
            scanf("%d %d", &a, &b);
            printf("The add: %d\n", add(a,b));
            printf("The sub: %d\n", sub(a,b));
            return 0;
    }
    ```

7.  将main.c和libmath.a一起编译成math.out。

    ```
    $ gcc main.c -I ~/code/include -L ~/code/lib -lmath -o math.out
    ```

8.  执行math.out。

    ```
    $ ./math.out
    ```

    执行结果如下所示：

    ```
    Please input a and b:
    9 2
    The add: 11
    The sub: 7
    ```
