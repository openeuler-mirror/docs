# Makefile<a name="ZH-CN_TOPIC_0229243670"></a>

make是通过Makefile文件获取如何编译、链接和安装、清理的方法，从而实现将源代码文件生成可执行文件和其他相关文件的工具。因此，Makefile中描述了整个工程的编译和链接等规则，其中包含了哪些文件需要编译，哪些文件不需要编译，哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重建等等。Makefile文件让工程编译实现了自动化，不需要每次都手动输入一堆源文件和参数。

本章简单介绍Makefile文件的结构和主要内容，更多Makefile的内容请通过**info make**命令查询

## Makefile结构<a name="section995817134618"></a>

Makefile文件结构如下所示：

_targets_:_prereguisites_

_command_

或者是：

_targets_:_prerequisites_;_command_

_command_

其中：

-   _targets_：目标，可以是目标文件、可执行文件或标签。
-   _prerequisites_：依赖文件，生成targets需要的文件或者是目标。可以是多个，也可以是没有。
-   _command_：make需要执行的命令（任意的 shell 命令）。可以有多条命令，每一条命令占一行。
-   目标和依赖文件之间要使用“:”分隔，命令的开始一定要按“Tab”。

Makefile文件结构表明了输出的目标，输出目标的依赖对象和生成目标需要执行的命令。

## Makefile主要内容<a name="section38571015162813"></a>

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


