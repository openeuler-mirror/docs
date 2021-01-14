# 使用make编译

本章介绍make编译的一些基本知识，并通过示例进行实际演示。更多的make知识请通过**man make**命令查询。

[[toc]]

## 简介

GNU make实用程序（通常缩写为make）是一种用于控制从源文件生成可执行文件的工具。 make会自动确定复杂程序的哪些部分已更改并需要重新编译。 make使用称为Makefiles的配置文件来控制程序的构建方式。

## 基本规则


### 文件类型

makefile文件中可能用到的文件类型如[表1](#table634145764320)所示。

**表 1**  文件类型

|  扩展名（后缀）   |说明  |
|:---  |:----  |
| .c| C语言源代码文件。 |
| .C，.cc或.cxx|  C++源代码文件。|
|.m | Objective-C源代码文件。 |
| .s| 汇编语言源代码文件。 |
|.i | 已经预处理的C源代码文件。 |
|.ii | 已经预处理的C++源代码文件。 |
| .S| 已经预处理的汇编语言源代码文件。 |
|.h | 程序所包含的头文件。 |
| .o| 编译后的目标文件。 |
|.so |动态链接库，它是一种特殊的目标文件。 |
|.a | 静态链接库。 |
| .out|可执行文件，但可执行文件没有统一的后缀，系统从文件的属性来区分可执行文件和不可执行文件。如果没有给出可执行文件的名字，GCC将生成一个名为a.out的文件。 |

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


|  options取值   |说明  |
|:---  |:----  |
| -C dir，--directory=dir | 指定make在开始运行后的工作目录为dir。<br/>当存在多个 -C 选项的时候，make 的最终工作目录是第一个目录的相对路径。 |
| -d | make在执行的过程中打印出所有的调试信息。使用-d选项可以显示make构造依赖关系链、重建目标过程中的所有信息。 |
| -e，--enveronment-overrides | 使用环境变量定义覆盖Makefile中的同名变量定义。 |
| -f file，--file=file，--makefile=file |  指定file文件为make 执行的Makefile文件。|
| -p，--help | 打印帮助信息。 |
| -i，--ignore-errors | 执行过程中忽略规则命令执行的错误。 |
| -k，--keep-going | 执行命令错误时不终止make的执行，make 尽最大可能执行所有的命令，直至出现知名的错误才终止。 |
| -n，--just-print，--dry-run | 按实际运行时的执行顺序模拟执行命令(包括用@开头的命令)，没有实际执行效果，仅仅用于显示执行过程。 |
| -o file，--old-file=file，--assume-old=file | 指定file文件不需要重建，即使它的依赖已经过期，同时不重建此依赖文件的任何目标。 |
| -p，--print-date-base | 命令执行之前，打印出make读取的Makefile的所有数据，同时打印出 make的版本信息。如果只需要打印这些数据信息，可以使用 “make -qp”命令，查看 make 执行之前预设的规则和变量，可使用命令“make -p -f /dev/null”。 |
| -r，-\no-builtin-rules | 忽略内嵌的隐含规则的使用，同时忽略所有后缀规则的隐含后缀列表。 |
| -R，--no-builtin-variabes | 忽略内嵌的隐含变量。 |
|-s，--silent，--quiet  | 取消命令执行过程中的打印。 |
| -S，--no-keep-going，--stop | 取消 "-k" 的选项在递归的 make 过程中子 make 通过 "MAKEFLAGS" 变量继承了上层的命令行选项那个。我们可以在子 make 中使用“-S”选项取消上层传递的 "-k" 选项，或者取消系统环境变量 "MAKEFLAGS" 中 "-k"选项。 |
| -t，--touch | 更新所有的目标文件的时间戳到当前系统时间。防止 make 对所有过时目标文件的重建。 |
|  -v，version | 查看make的版本信息。 |

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

