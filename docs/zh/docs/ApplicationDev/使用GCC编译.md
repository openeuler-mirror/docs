# 使用GCC编译

本章介绍GCC编译的一些基本知识，并通过示例进行实际演示。更多的GCC知识请通过**man gcc**命令查询。

[[toc]]

## 简介

GCC（GNU Compiler Collection）是GNU推出的功能强大、性能优越的多平台编译器。GCC编译器能将C、C++语言源程序、汇编程序和目标程序编译、连接成可执行文件。openEuler操作系统中已默认安装了GCC软件包。

## 基本规则



### 文件类型

对于任何给定的输入文件，文件类型决定进行何种编译。GCC常用的文件类型如[表1](#table634145764320)所示。

**表 1**  GCC常用的文件类型

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


|  options取值   |说明  |示例  |
|:---  |:----  |:----  |
| -c| 编译、汇编指定的源文件生成目标文件，但不进行链接。通常用于编译不包含主程序的子程序文件。 | #使用-c选项编译test1.c、test2.c源文件<br/>gcc -c test1.c test2.c |
| -S | 编译指定的源文件生成以.s作为后缀的汇编语言文件，但不进行汇编。 | #编译器预处理 circle.c，将其翻译成汇编语言，并将结果存储在 circle.s 文件中。<br/>gcc -S circle.c |
| -E |  预处理指定的源文件，但不进行编译。<br/>默认情况下，预处理器的输出会被导入到标准输出流（如显示器），可以利用-o选项把它导入到某个输出文件。|  #预处理的结果导出到 circle.i 文件。<br/>gcc -E circle.c -o circle.i|
| -o *file* |用在生成可执行文件时，生成指定的输出文件file。同时该名称不能和源文件同名。如果不给出这个选项，gcc就给出预设的可执行文件a.out。  | #将源文件作为输入文件，将可执行文件作为输出文件，也即完整地编译整个程序。<br/>gcc main.c func.c -o app.out |
| -g | 在可执行程序中包含标准调试信息。 | - |
|-L *libary_path*  | 在库文件的搜索路径列表中添加*libary_path*路径。 |-  |
|-l *libary_path*   | 链接时搜索指定的函数库library。<br/>使用 GCC 编译和链接程序时，GCC 默认会链接 libc.a 或者 libc.so，但是对于其他的库（例如非标准库、第三方库等），就需要手动添加。 | #使用-l选项，以链接数学库。<br/>gcc main.c -o main.out -lm<br/>说明：<br/>数学库的文件名是 libm.a。前缀lib和后缀.a是标准的，m是基本名称，GCC 会在-l选项后紧跟着的基本名称的基础上自动添加这些前缀、后缀，本例中，基本名称为 m。 |
| -I *head_path* | 在头文件的搜索路径列表中添加*head_path*路径。 | - |
| -static | 进行静态编译，及链接静态库，禁止链接动态库。 | - |
| -shared | 默认选项，可省略。<br/>可以生成动态库文件。<br/>进行动态编译，优先链接动态库，只有没有动态库是才会链接同名的静态库。  | - |
| -fPIC（或-fpic） | 生成使用相对地址的位置无关的目标代码。通常使用-static选项从该PIC目标文件生成动态库文件。 |  - |


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

    >![](./public_sys-resources/icon-note.gif) **说明：**   
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
