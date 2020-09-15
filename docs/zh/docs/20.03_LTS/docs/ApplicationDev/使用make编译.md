# 使用make编译

本章介绍make编译的一些基本知识，并通过示例进行实际演示。更多的make知识请通过**man make**命令查询。
<!-- TOC -->

- [使用make编译](#使用make编译)
    - [简介](#简介)
    - [基本规则](#基本规则)
        - [文件类型](#文件类型)
        - [make工作流程](#make工作流程)
        - [make选项](#make选项)
    - [Makefile](#makefile)
        - [Makefile结构](#makefile结构)
        - [Makefile主要内容](#makefile主要内容)
    - [示例](#示例)
        - [使用Makefile实现编译的示例](#使用makefile实现编译的示例)

<!-- /TOC -->

## 简介

GNU make实用程序（通常缩写为make）是一种用于控制从源文件生成可执行文件的工具。 make会自动确定复杂程序的哪些部分已更改并需要重新编译。 make使用称为Makefiles的配置文件来控制程序的构建方式。

## 基本规则


### 文件类型

makefile文件中可能用到的文件类型如[表1](#table634145764320)所示。

**表 1**  文件类型

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

### make工作流程

使用make由源代码文件生成可执行文件，需要经过如下步骤。

1.  make命令会读入Makefile文件，包括当前目录下命名为"GNUmakefile" 、"makefile" 、"Makefile"的文件、被include的makefile文件、参数-f、\-\-file、\-\-makefile指定的规则文件。
2.  初始化变量。
3.  推导隐含规则，分析依赖关系，并创建依赖关系链。
4.  根据依赖关系链，决定哪些目标需要重新生成。
5.  执行生成命令，最终输出终极文件。

### make选项

make命令格式为：**make**  \[_option_\]... \[_target_\]...

其中：

_option_ ：参数选项。

_target_ ：Makefile中指定的目标。

常用make的 _option_ 取值如[表2](#table261872312343)所示。

**表 2**  常用的make选项

<a name="table261872312343"></a>
<table><thead align="left"><tr id="row483385416347"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="p16140827163512"><a name="p16140827163512"></a><a name="p16140827163512"></a><em id="i1140132713516"><a name="i1140132713516"></a><a name="i1140132713516"></a>options</em>取值</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="p16140627193516"><a name="p16140627193516"></a><a name="p16140627193516"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="row146641223153417"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p66641723183418"><a name="p66641723183418"></a><a name="p66641723183418"></a>-C <em id="i2071143410371"><a name="i2071143410371"></a><a name="i2071143410371"></a>dir</em>，\-\-directory=<em id="i185241138163720"><a name="i185241138163720"></a><a name="i185241138163720"></a>dir</em></p>
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
<tr id="row18664623103415"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p176641423143414"><a name="p176641423143414"></a><a name="p176641423143414"></a>-e，\-\-enveronment-overrides</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1066472313418"><a name="p1066472313418"></a><a name="p1066472313418"></a>使用环境变量定义覆盖Makefile中的同名变量定义。</p>
</td>
</tr>
<tr id="row7664223163412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p176641023193413"><a name="p176641023193413"></a><a name="p176641023193413"></a>-f <em id="i103449715424"><a name="i103449715424"></a><a name="i103449715424"></a>file</em>，\-\-file=<em id="i590218152429"><a name="i590218152429"></a><a name="i590218152429"></a>file</em>，</p>
<p id="p6664723133418"><a name="p6664723133418"></a><a name="p6664723133418"></a>\-\-makefile=<em id="i894722504216"><a name="i894722504216"></a><a name="i894722504216"></a>file</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p86640231342"><a name="p86640231342"></a><a name="p86640231342"></a>指定<em id="i181001119204311"><a name="i181001119204311"></a><a name="i181001119204311"></a>file</em>文件为make 执行的Makefile文件。</p>
</td>
</tr>
<tr id="row1391931413209"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17146416192013"><a name="p17146416192013"></a><a name="p17146416192013"></a>-p，\-\-help</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p714619161208"><a name="p714619161208"></a><a name="p714619161208"></a>打印帮助信息。</p>
</td>
</tr>
<tr id="row1665132393417"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1514691616203"><a name="p1514691616203"></a><a name="p1514691616203"></a>-i，\-\-ignore-errors</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1014611652012"><a name="p1014611652012"></a><a name="p1014611652012"></a>执行过程中忽略规则命令执行的错误。</p>
</td>
</tr>
<tr id="row16160373176"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p8337171661716"><a name="p8337171661716"></a><a name="p8337171661716"></a>-k，<span>\-\-keep-going</span></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p489185181713"><a name="p489185181713"></a><a name="p489185181713"></a><span>执行命令错误时不终止make的执行，make 尽最大可能执行所有的命令，直至出现知名的错误才终止。</span></p>
</td>
</tr>
<tr id="row17665152314345"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p76651023113414"><a name="p76651023113414"></a><a name="p76651023113414"></a>-n，\-\-just-print，\-\-dry-run</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p4301952237"><a name="p4301952237"></a><a name="p4301952237"></a>按实际运行时的执行顺序模拟执行命令(包括用@开头的命令)，没有实际执行效果，仅仅用于显示执行过程。</p>
</td>
</tr>
<tr id="row10665112310347"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p17665182320346"><a name="p17665182320346"></a><a name="p17665182320346"></a>-o <em id="i4538184125117"><a name="i4538184125117"></a><a name="i4538184125117"></a>file</em>，\-\-old-file=<em id="i197559712516"><a name="i197559712516"></a><a name="i197559712516"></a>file</em>，\-\-assume-old=<em id="i142693115512"><a name="i142693115512"></a><a name="i142693115512"></a>file</em></p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p9665142320347"><a name="p9665142320347"></a><a name="p9665142320347"></a>指定<em id="i785024317515"><a name="i785024317515"></a><a name="i785024317515"></a>file</em>文件不需要重建，即使它的依赖已经过期，同时不重建此依赖文件的任何目标。</p>
</td>
</tr>
<tr id="row724955371216"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p19485191915135"><a name="p19485191915135"></a><a name="p19485191915135"></a>-p，\-\-print-date-base</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p5485121951311"><a name="p5485121951311"></a><a name="p5485121951311"></a>命令执行之前，打印出make读取的Makefile的所有数据，同时打印出 make的版本信息。如果只需要打印这些数据信息，可以使用 “make -qp”命令，查看 make 执行之前预设的规则和变量，可使用命令“make -p -f /dev/null”。</p>
</td>
</tr>
<tr id="row14665152343412"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1366572313418"><a name="p1366572313418"></a><a name="p1366572313418"></a>-r，\-\-no-builtin-rules</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p185914010119"><a name="p185914010119"></a><a name="p185914010119"></a>忽略内嵌的隐含规则的使用，同时忽略所有后缀规则的隐含后缀列表。</p>
</td>
</tr>
<tr id="row10665423163414"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p19665192317342"><a name="p19665192317342"></a><a name="p19665192317342"></a>-R，\-\-no-builtin-variabes</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p19665023153418"><a name="p19665023153418"></a><a name="p19665023153418"></a>忽略内嵌的隐含变量。</p>
</td>
</tr>
<tr id="row1466522383419"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p56651423143412"><a name="p56651423143412"></a><a name="p56651423143412"></a>-s，\-\-silent，\-\-quiet</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p7665112319348"><a name="p7665112319348"></a><a name="p7665112319348"></a>取消命令执行过程中的打印。</p>
</td>
</tr>
<tr id="row1665132317347"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p1166562312348"><a name="p1166562312348"></a><a name="p1166562312348"></a>-S，\-\-no-keep-going，\-\-stop</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="p1966582310346"><a name="p1966582310346"></a><a name="p1966582310346"></a>取消 "-k" 的选项在递归的 make 过程中子 make 通过 "MAKEFLAGS" 变量继承了上层的命令行选项那个。我们可以在子 make 中使用“-S”选项取消上层传递的 "-k" 选项，或者取消系统环境变量 "MAKEFLAGS" 中 "-k"选项。</p>
</td>
</tr>
<tr id="row15665192317347"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="p2665132319342"><a name="p2665132319342"></a><a name="p2665132319342"></a>-t，\-\-touch</p>
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

## Makefile

make是通过Makefile文件获取如何编译、链接和安装、清理的方法，从而实现将源代码文件生成可执行文件和其他相关文件的工具。因此，Makefile中描述了整个工程的编译和链接等规则，其中包含了哪些文件需要编译，哪些文件不需要编译，哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重建等等。Makefile文件让工程编译实现了自动化，不需要每次都手动输入一堆源文件和参数。

本章简单介绍Makefile文件的结构和主要内容，更多Makefile的内容请通过**info make**命令查询

### Makefile结构

Makefile文件结构如下所示：

_targets_:_prereguisites_

_command_

或者是：

_targets_:_prerequisites_;_command_

_command_

其中：

-   _targets_ ：目标，可以是目标文件、可执行文件或标签。
-   _prerequisites_ ：依赖文件，生成targets需要的文件或者是目标。可以是多个，也可以是没有。
-   _command_ ：make需要执行的命令（任意的 shell 命令）。可以有多条命令，每一条命令占一行。
-   目标和依赖文件之间要使用“:”分隔，命令的开始一定要按“Tab”。

Makefile文件结构表明了输出的目标，输出目标的依赖对象和生成目标需要执行的命令。

### Makefile主要内容

一个Makefile文件主要由以下内容组成。

-   显式规则

    明确写出来的依赖关系，如要生成的文件，文件的依赖文件，生成的命令。

-   隐含规则

    由make自动推导的规则，make命令支持自动推导功能。

-   变量的定义
-   文件指示

    文件指示包括三部分：

    -   include 其他 Makefile，如include xx.md。
    -   选择执行，如\#ifdef。
    -   定义多行命令，如define...endef。\(define ... endef\)

-   注释

    以 “\#” 开头。


## 示例



### 使用Makefile实现编译的示例

1.  cd到代码目录，此处以用户“~/code”进行举例。

    ```
    $ cd ~/code
    ```

2. 创建1个头文件hello.h和2个函数hello.c、main.c。

    ```
    $ vi hello.h
    $ vi hello.c
    $ vi main.c
    ```

    hello.h代码内容示例：

    ```
    #pragma once
    #include <stdio.h>
    void hello();
    ```

    hello.c代码内容示例：

    ```
    #include "hello.h"
    void hello()
    {
            int i=1;
            while(i<5)
            {
                    printf("The %dth say hello.\n", i);
                    i++;
            }
    }
    
    ```

    main.c代码内容示例：

    ```
    #include "hello.h"
    #include <stdio.h>
    int main()
    {
            hello();
            return 0;
    }
    ```

3.  创建Makefile文件。

    ```
    $ vi Makefile
    ```

    Makefile文件内容示例：

    ```
    main:main.o hello.o
            gcc -o main main.o hello.o
    main.o:main.c
            gcc -c main.c
    hello.o:hello.c
            gcc -c hello.c
    clean:
            rm -f hello.o main.o main
    ```

4.  执行make命令。

    ```
    $ make
    ```

    命令执行后，会打印Makefile中执行的命令。如果不需要打印该信息，可以在执行make命令是加上参数-s。

    gcc -c main.c

    gcc -c hello.c

    gcc -o main main.o hello.o

5.  执行./main目标。

    ```
    $ ./main
    ```

    命令执行后，打印如下信息：

    The 1th say hello.

    The 2th say hello.

    The 3th say hello.

    The 4th say hello.

